<<<<<<< HEAD
<<<<<<< HEAD
webpackJsonp([0,1],{

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"babel-preset-env\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"babel-plugin-syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/AppNavigation.vue":
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
//
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
    /*router navigation is used in the entire app for in app navigation (basically previous and next)
    * the : pageTitle is the title of the page where this navigation component is used
    * the : pageTitleSmall is the minimized title for the small screen view
    * the previous is the this.$routerHistory.previous().path sent from the parent component
    * the forward is the this.$routerHistory.next().path sent from the parent component*/
    props: ['pageTitle', 'pageTitleSmall', 'previous', 'forward']
};

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"babel-preset-env\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"babel-plugin-syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/CustomerProfile.vue":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _vue = __webpack_require__("./node_modules/vue/dist/vue.common.js");

var _vue2 = _interopRequireDefault(_vue);

var _store = __webpack_require__("./resources/assets/js/store/store.js");

var _eventBus = __webpack_require__("./resources/assets/js/utilities/event-bus.js");

var _AppNavigation = __webpack_require__("./resources/assets/js/components/AppNavigation.vue");

var _AppNavigation2 = _interopRequireDefault(_AppNavigation);

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

var DVA = function DVA() {
    return _store.store.getters.auth('DVAAccess');
};

exports.default = {
    props: ['viewCustomer'],
    components: { AppNavigation: _AppNavigation2.default },
    data: function data() {
        return {
            customer: '',
            show: false
        };
    },

    computed: {
        full: function full() {
            return this.$route.meta.mode === 'full';
        },
        passport: function passport() {
            return 'https://s3.eu-west-2.amazonaws.com/altara-one/' + this.customer.document.passport_url;
        },
        branch: function branch() {
            return this.customer.branch.description + ' ' + this.customer.branch.name;
        },
        approved: function approved() {
            return this.$getCustomerApprovalStatus(this.customer.verification);
        }
    },
    created: function created() {
        var _this = this;

        $('.tooltip').remove();
        if (this.viewCustomer) this.setCustomer(this.viewCustomer);
        _eventBus.EventBus.$on('customer', function (customer) {
            return _this.setCustomer(customer);
        });
    },

    methods: {
        setCustomer: function setCustomer(customer) {
            _vue2.default.set(this.$data, 'customer', customer);
            this.show = true;
        }
    }
};

/***/ }),

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

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"babel-preset-env\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"babel-plugin-syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/views/DVA/verification/verification.vue":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = __webpack_require__("./node_modules/babel-runtime/regenerator/index.js");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _vue = __webpack_require__("./node_modules/vue/dist/vue.common.js");

var _vue2 = _interopRequireDefault(_vue);

var _log = __webpack_require__("./resources/assets/js/utilities/log.js");

var _flash = __webpack_require__("./resources/assets/js/utilities/flash.js");

var _flash2 = _interopRequireDefault(_flash);

var _sms = __webpack_require__("./resources/assets/js/utilities/sms.js");

var _api = __webpack_require__("./resources/assets/js/utilities/api.js");

var _eventBus = __webpack_require__("./resources/assets/js/utilities/event-bus.js");

var _form = __webpack_require__("./resources/assets/js/utilities/form.js");

var _ImageUpload = __webpack_require__("./resources/assets/js/components/ImageUpload.vue");

var _ImageUpload2 = _interopRequireDefault(_ImageUpload);

var _CustomerProfile = __webpack_require__("./resources/assets/js/components/CustomerProfile.vue");

var _CustomerProfile2 = _interopRequireDefault(_CustomerProfile);

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

var init = function init(_ref) {
    var id = _ref.id;
    return '/api/customer/' + id;
};

exports.default = {
    props: {
        action: { default: 'verify'
            /*by default this component is used for dva verifications purposed but its customer search feature and
            * customer profile display feature is borrowed by other component to avoid duplication of
            * features hence the props: action is 'verify by default.'*/
        } },

    components: {
        ImageUpload: _ImageUpload2.default,
        /*the image upload is used for the customer id and passport upload.
        * its a separate component on its own and can be called
        * anywhere on the application*/
        CustomerProfile: _CustomerProfile2.default
    },

    data: function data() {
        return {
            customer: null,
            customer_id: '',
            addressBtns: true,
            work_guarantorBtns: true,
            personal_guarantorBtns: true,
            processing_feeBtns: true,
            info_from_neighbors: '',
            address: {},
            work_guarantor: {},
            personal_guarantor: {},
            processing_fee: {},
            picsView: ['id_card', 'passport'],
            veriView: ['work_guarantor', 'personal_guarantor', 'processing_fee'],
            veriData: ['address', 'work_guarantor', 'personal_guarantor', 'processing_fee'],
            cardView: ['passport', 'id_card', 'address', 'work_guarantor', 'personal_guarantor', 'processing_fee'],
            verification: {},
            form: { id_card: '', passport: '', document: '' },
            error: {},
            storeURL: '',
            user: {},
            work_guarantor_address: '',
            personal_guarantor_address: ''
        };
    },
    beforeRouteEnter: function beforeRouteEnter(_ref2, from, next) {
        var query = _ref2.query;

        if (query.id) (0, _api.get)(init(query)).then(function (res) {
            return next(function (vm) {
                return vm.updateView(res.data);
            });
        }).catch(function (e) {
            return next(function (vm) {
                return vm.updateView(e.response.data);
            });
        });else next();
    },
    beforeRouteUpdate: function beforeRouteUpdate(_ref3, from, next) {
        var query = _ref3.query;

        var _this = this;

        if (query.id) (0, _api.get)(init(query)).then(function (res) {
            return _this.updateView(res.data);
        }).catch(function (e) {
            return _this.updateView(e.response.data);
        }).finally(function () {
            return next();
        });else next();
    },


    methods: {
        modal: function modal(name) {
            $('#' + name).modal('toggle');
            /*this method is used to automatically
            * toggle the modal with the id of
            * "name passed to it"*/
            this.errors.clear(name);
        },
        key: function key(_key) {
            return this.customer.verification[_key];
            /*the 'key' is a value that exists in the cardView array. anytime its called it checks the the customer
            * to know the status of that particular parameter eg. is the passport have not been uploaded
            * it will be 0 else 1 if uploaded with will return true */
        },
        IconClass: function IconClass(key) {
            return {
                'fa-check': this.key(key), 'fa-times': !this.key(key)
                /*return the 'fa-check' css class is that particular
                * card param is set to 1 else the 'fa-times'
                * css class ie false */
            };
        },
        DivClass: function DivClass(key) {
            return {
                'success': this.key(key), 'no-success': !this.key(key)
                /*this is similar to the DivClass method only
                * that it return a different class
                * success and no-success*/
            };
        },
        updateView: function updateView(data) {
            var _this2 = this;

            /*$emit update event is used to send data to the parent component where this serves as a child
            * component. eg. dsa utility form. NB: The customer registration component(form)
            * is used as the customer update form for both dsa and dva portal.*/
            this.user = data.hasOwnProperty('user') ? data.user : null;
            _vue2.default.set(this.$data, 'customer', data.customer);
            this.$emit('update', data.customer);
            _eventBus.EventBus.$emit('customer', data.customer);
            if (data.customer) {
                this.verification = JSON.parse(JSON.stringify(data.customer.verification));
                this.form.id_card = data.customer.document.id_card_url;
                this.form.passport = data.customer.document.passport_url;
                this.work_guarantor_address = this.customer.guaadd_houseno + ',\n                    ' + this.customer.guaadd_street + ',\n                    ' + this.customer.gua_area + ',\n                    ' + this.customer.work_guarantor_city + ',\n                    ' + this.customer.work_guarantor_state;
                this.personal_guarantor_address = this.customer.pguaadd_houseno + ',\n                    ' + this.customer.pguaadd_street + ',\n                    ' + this.customer.pgua_area + ',\n                    ' + this.customer.personal_guarantor_city + ',\n                    ' + this.customer.personal_guarantor_state;
                this.veriData.forEach(function (e) {
                    //e is the current array element during the foreach call;
                    _this2[e + 'Btns'] = !!!data.customer[e];
                    //eg this.work_guarantorBtns = if (data.customer.work_guarantor) {return true} else {return false}
                    //and anything the if return will be inverted.
                    _this2[e] = !!data.customer[e] ? data.customer[e] : data['empty_' + e];
                    //eg this.work_guarantor = if(data.customer.work_guarantor){ return data.customer.work_guarantor }
                    // else {return data.empty_work_guarantor}
                    //the empty_work_guarantor is returned from backend when no work guarantor has been added.
                });
            } else _flash2.default.setError(data.message, 5000);
        },
        done: function done() {
            if (this.$getCustomerApprovalStatus(this.verification)) {
                var body = "Dear " + this.$getCustomerFullName(this.customer) + ", Congratulations, You have been approved. Come to the store to make a purchase. Altara Credit Limited.";
                new _sms.Message(body, this.customer.telephone, true, this.user.id).send();
            }
        },
        processForm: function processForm() {
            var _this3 = this;

            if (this.$route.name === 'verification') this.$router.push('verification?id=' + this.customer_id);
            if (this.$route.name === 'customerUpdate') {
                this.$router.push('update?id=' + this.customer_id);
                (0, _api.get)(init(this.$route.query)).then(function (res) {
                    return _this3.updateView(res.data);
                }).catch(function (e) {
                    return _this3.updateView(e.response.data);
                });
            }
        },
        validate: function validate(type) {
            var _this4 = this;

            if (this.$network()) {
                this.$LIPS(true);
                if (this.veriView.includes(type) && !this.customer.work_guarantor_first_name) {
                    this.modal(type + '_modal');
                    this.$LIPS(false);
                    this.$scrollToTop();
                    _flash2.default.setError('Can not process verification. Update the customer guarantors details and try again!', 10000);
                    return;
                }
                this.info_from_neighbors === 'no' ? this.address.info_from_neighbors_desc = '' : '';
                this[type].customer_id = this.customer.id;
                this[type].user_id = this.user.id;
                this[type].staff_name = this.user.full_name;
                this.$validator.validateAll(type).then(function () {
                    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee(result) {
                        return _regenerator2.default.wrap(function _callee$(_context) {
                            while (1) {
                                switch (_context.prev = _context.next) {
                                    case 0:
                                        if (!result) {
                                            _context.next = 7;
                                            break;
                                        }

                                        _context.next = 3;
                                        return (0, _api.post)('/api/' + type, _this4[type]).then(function (_ref5) {
                                            var data = _ref5.data;

                                            _this4.updateView(data.response);
                                            var id = 'Customer ID : ' + _this4.customer.id,
                                                typeCaps = _this4.$options.filters.capitalize(type),
                                                action = 'Customer' + typeCaps + 'Verification';
                                            if (type === 'address') action += _this4.address.approval_status ? 'Passed' : 'NotPassed';
                                            (0, _log.log)(action, id);
                                            _flash2.default.setSuccess(typeCaps + ' status updated!');
                                            _this4.modal(type + '_modal');
                                            _this4.done();
                                        }).catch(function (e) {
                                            return _flash2.default.setError(e.response.data.message);
                                        });

                                    case 3:
                                        _this4.$LIPS(false);
                                        _this4.$scrollToTop();
                                        _context.next = 8;
                                        break;

                                    case 7:
                                        _this4.$networkErr('form');

                                    case 8:
                                    case 'end':
                                        return _context.stop();
                                }
                            }
                        }, _callee, _this4);
                    }));

                    return function (_x) {
                        return _ref4.apply(this, arguments);
                    };
                }());
            } else this.$networkErr();
        },
        save: function () {
            var _ref6 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee2(document, modal) {
                var _this5 = this;

                var form;
                return _regenerator2.default.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                this.storeURL = '/api/document/' + this.customer.document.id + '?_method=PUT&document=' + document;
                                this.$LIPS(true);
                                this.form.document = document;
                                form = (0, _form.toMulipartedForm)(this.form, 'edit');
                                _context2.next = 6;
                                return (0, _api.post)(this.storeURL, form).then(function (_ref7) {
                                    var data = _ref7.data;

                                    _this5.updateView(data.response);
                                    (0, _log.log)('Customer' + _this5.$options.filters.capitalize(document) + 'Upload', 'Customer ID : ' + _this5.customer.id);
                                    _this5.modal(modal);
                                    _flash2.default.setSuccess('Document Updated Successfully!');
                                    _this5.done();
                                }).catch(function (e) {
                                    return _this5.error = e.response.data.errors;
                                });

                            case 6:
                                this.$LIPS(false);
                                this.$scrollToTop();

                            case 8:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function save(_x2, _x3) {
                return _ref6.apply(this, arguments);
            }

            return save;
        }()
    },

    computed: {
        check: function check() {
            return !(!this.$isProcessing && !!this.customer_id);
        }
    },

    mounted: function mounted() {
        var _this6 = this;

        $(document).on("hidden.bs.modal", '.modal', function () {
            _this6.verification = JSON.parse(JSON.stringify(_this6.customer.verification));
            /*this.verification holds a copy of the this.customer.verification. this.verification is what is used to style
            * the card. this.customer.verification on the other hand is used to calculate the approval status, when
            * changing the status on the front end the this.verification is what is changed but when it is
            * reflected in the backend then the changes will be reflected on this.customer.verification
            * after going to database and returning the data again. NB: the purpose of this method
            * is revert the values of the this.verification to this.customer.verification
            * values, when a user selects a different option but doesn't submit
            * it after opening and closing the modal responsible for that
            * particular action*/
        });
    }
};

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"babel-preset-env\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"babel-plugin-syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/views/shared/customerForm.vue":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__("./node_modules/babel-runtime/regenerator/index.js");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _sms = __webpack_require__("./resources/assets/js/utilities/sms.js");

var _sms2 = _interopRequireDefault(_sms);

var _log = __webpack_require__("./resources/assets/js/utilities/log.js");

var _flash = __webpack_require__("./resources/assets/js/utilities/flash.js");

var _flash2 = _interopRequireDefault(_flash);

var _api = __webpack_require__("./resources/assets/js/utilities/api.js");

var _verification = __webpack_require__("./resources/assets/js/views/DVA/verification/verification.vue");

var _verification2 = _interopRequireDefault(_verification);

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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: { Verification: _verification2.default },
  data: function data() {
    return {
      occupations: [{
        id: 1,
        jobType: "Trader",
        category: "informal(business)",
        names: ["Food", "Drinks", "Homeware", "Clothing", "Miscellaneous"]
      }, {
        id: 2,
        jobType: "Driver",
        category: "informal(business)",
        names: ["Keke Napep", "Taxi", "Motorbike", "Bus driver", "Private"]
      }, {
        id: 3,
        jobType: "Banker",
        category: "formal",
        names: ["Teller", "Financial Analyst", "Loan Officer", "Operation", "Risk Specialist", "Security & Fraud Specialist"]
      }, {
        id: 4,
        jobType: "Elementary workers",
        category: "informal(business)",
        names: ["Mining worker", "Construction worker", "Manufacturing laborer"]
      }, {
        id: 5,
        jobType: "Maintenance Worker",
        category: "informal(business)",
        names: ["Cleaner", "Electrician", "Plumber", "Carpenter", "Welder", "Painter", "Vulcanizer", "Security Guard"]
      }, {
        id: 6,
        jobType: "Farming",
        category: "informal(business)",
        names: ["Livestock farmer", "Crop farmer"]
      }, {
        id: 7,
        jobType: "Civil Servant",
        category: "formal",
        names: []
      }, {
        id: 8,
        jobType: "Sales & Services",
        category: "informal(business)",
        names: ["Car-wash", "Laundry", "Sales Assistant", "Cook", "Hairdresser/Barber", "Cashier", "Waiter", "Hotel Assistant", "Receptionist"]
      }, {
        id: 9,
        jobType: "Technical Professionals",
        category: "formal",
        names: ["Teacher", "Doctor", "Lawyer", "Nurse", "Pharmacist", "Journalist", "Engineer", "Civic", "Electrical", "Chemical", "Mechanical", "I.T."]
      }, {
        id: 10,
        jobType: "Pastor",
        category: "informal(business)",
        names: []
      }, {
        id: 11,
        jobType: "Entertainment",
        category: "informal(business)",
        names: ["Actor/Actress", "Event Planner", "Musician", "Producer", "Tailor/Fashion Designer"]
      }, {
        id: 12,
        jobType: "Other",
        category: "informal(business)",
        names: []
      }],
      mode: this.$route.meta.mode,
      user: {},
      error: {},
      states: {},
      branches: {},
      newCustomer: {},
      fillWorkGuarantor: false,
      gender: ["male", "female"],
      fillPersonalGuarantor: false,
      typesOfHome: ["family", "owned", "rented"],
      paymentPeriod: ["daily", "weekly", "monthly"],
      receiveIncomeMeans: ["bank deposit", "cheque", "cash"],
      noOfRooms: ["one room", "two room", "more than Two room"],
      employmentStatus: ["formal", "informal(business)", "unemployed"],
      relationshipPG: ["friend", "family", "co-worker", "employee", "other"],
      civilStatus: ["single", "married", "divorced", "widow", "live together"],
      relationshipWG: ["supervisor", "neighbouring worker", "co-worker", "employee"],
      weekdays: ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"],
      highestLevelOfEdu: ["no studies", "secondary", "polytechnic", "primary", "university", "masters"],
      durations: ["less than 1 year", "1 year", "2 years", "3 years", "between 4 - 9 years", "more than 10 years", "more than 20 years"],
      relationships: ["spouse", "mother", "sibling", "uncle", "nephew", "in-law", "friend", "child", "father", "grandparent", "cousin", "caretaker", "grandchild"],

      isLifestyle: false,
      isClick: false,
      occName: [],
      isActive: false,
      isOther: false
    };
  },

  methods: {
    register: function register() {
      var _this = this;

      console.log(this.newCustomer);
      this.$validator.validateAll().then(function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee(result) {
          var acc;
          return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  if (!result) {
                    _context.next = 20;
                    break;
                  }

                  if (!(_this.newCustomer.employment_status === "unemployed")) {
                    _context.next = 4;
                    break;
                  }

                  _flash2.default.setError("you can only register customer from formal and informal sectors at the moment!");
                  return _context.abrupt("return", _this.$scrollToTop());

                case 4:
                  if (!_this.$network()) {
                    _context.next = 17;
                    break;
                  }

                  _this.$LIPS(true);
                  _this.error = {};

                  if (!(_this.mode === "update")) {
                    _context.next = 11;
                    break;
                  }

                  acc = _this.$editAccess(_this.user, _this.newCustomer);

                  if (acc) {
                    _context.next = 11;
                    break;
                  }

                  return _context.abrupt("return", _this.$networkErr("edit"));

                case 11:
                  _context.next = 13;
                  return (0, _api.post)("/api/customer" + (_this.mode === "update" ? "/" + _this.newCustomer.id : ""), _this.newCustomer).then(function (_ref2) {
                    var data = _ref2.data;
                    var _data$customer = data.customer,
                        FN = _data$customer.first_name,
                        LN = _data$customer.last_name,
                        id = _data$customer.id,
                        branch = _data$customer.branch,
                        tel = _data$customer.telephone;

                    _flash2.default.setSuccess("Customer " + _this.mode + "d successful! Customer ID is: " + id, 30000);
                    (0, _log.log)(_this.mode + "dCustomer", "Customer ID :" + id);
                    if (_this.mode === "register") {
                      var body = "Dear " + FN + " " + LN + ", Welcome to Altara Credit Limited," + (" You are hereby invited to our showroom at " + branch.description + " to") + " learn more about our offerings. Pick up products now and pay later." + " We look forward to seeing you. For more info contact:" + (branch.phone_yoruba + ". Your customer id is: " + id);
                      new _sms.Message(body, tel).send(function (r) {
                        return r.status === 200 && _this.prepareForm(data.prepareForm);
                      });
                    }
                  }).catch(function (e) {
                    e = e.response;
                    if (e.status === 422) _this.error = e.data.errors ? e.data.errors : e.data;
                    _flash2.default.setError(e.status === 422 ? "unique field" : e.message, 10000);
                  });

                case 13:
                  _this.$scrollToTop();
                  _this.$LIPS(false);
                  _context.next = 18;
                  break;

                case 17:
                  _this.$networkErr();

                case 18:
                  _context.next = 21;
                  break;

                case 20:
                  _this.$networkErr("form");

                case 21:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, _this);
        }));

        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());
    },
    checkOccupation: function checkOccupation(id) {
      var _this2 = this;

      this.occupations.forEach(function (element) {
        if (element.id === id) {
          _this2.occName = element.names;
          _this2.newCustomer.employment_status = element.category;
          _this2.isClick = true;
          _this2.isOther = element.id === 12 ? true : false;
          if (element.id === 12) {
            _this2.isOther = true;
          } else {
            _this2.isOther = false;
          }
        }
      });
    },
    setOccupation: function setOccupation(name) {
      var _this3 = this;

      this.occName.forEach(function (element) {
        if (element == name) {
          _this3.newCustomer.occupation = element;
        }
      });
    },
    prepareForm: function prepareForm(data) {
      this.states = data.states;
      this.branches = data.branches;
      this.newCustomer = data.form;
      this.user = data.user;
    },
    updateCustomer: function updateCustomer(customer) {
      if (this.mode === "update") {
        ;
        var _ref3 = [true, true];
        this.fillWorkGuarantor = _ref3[0];
        this.fillPersonalGuarantor = _ref3[1];
      }this.newCustomer = customer;
    }
  },
  created: function created() {
    var _this4 = this;

    (0, _api.get)("/api/customer/create").then(function (_ref4) {
      var data = _ref4.data;
      return _this4.prepareForm(data);
    });
    /*on create of the component fetch the data required to prepare the form
     * states, branches and the currently logged in dsa details*/
  }
};

/***/ }),

/***/ "./node_modules/babel-runtime/regenerator/index.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./node_modules/regenerator-runtime/runtime-module.js");


/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime-module.js":
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = (function() { return this })() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__("./node_modules/regenerator-runtime/runtime.js");

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}


/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration. If the Promise is rejected, however, the
          // result for this iteration will be rejected with the same
          // reason. Note that rejections of yielded Promises are not
          // thrown back into the generator function, as is the case
          // when an awaited Promise is rejected. This difference in
          // behavior between yield and await is important, because it
          // allows the consumer to decide what to do with the yielded
          // rejection (swallow it and continue, manually .throw it back
          // into the generator, abandon iteration, whatever). With
          // await, by contrast, there is no opportunity to examine the
          // rejection reason outside the generator function, so the
          // only option is to throw it from the await expression, and
          // let the generator function handle the exception.
          result.value = unwrapped;
          resolve(result);
        }, reject);
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() { return this })() || Function("return this")()
);


/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-07317a72\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/views/DVA/verification/verification.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("transition", { attrs: { name: "fade" } }, [
    _c(
      "div",
      {
        staticClass: "pt-md-3 pt-2 verification",
        attrs: { id: "employeeRegister" }
      },
      [
        _c("div", { staticClass: "card" }, [
          _c(
            "ul",
            { staticClass: "nav nav-tabs bg-default justify-content-center" },
            [
              _c("h6", [
                _vm._v(_vm._s(_vm._f("capitalize")(_vm.action)) + " Customer")
              ])
            ]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "card-body p-4" }, [
            _c(
              "form",
              {
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
                  { staticClass: "m-0 p-0 col-12 form-group clearfix" },
                  [
                    _c("label", { staticClass: "w-100" }, [
                      _vm._v("Customer ID")
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.customer_id,
                          expression: "customer_id"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required|numeric",
                          expression: "'required|numeric'"
                        }
                      ],
                      staticClass:
                        "form-control col-lg-9 col-md-8 col-sm-8 col-12 float-left mt-1",
                      attrs: {
                        "data-vv-as": "customer id",
                        name: "customer_id"
                      },
                      domProps: { value: _vm.customer_id },
                      on: {
                        onkeyUp: _vm.check,
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.customer_id = $event.target.value
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass:
                          "col-lg-3 col-md-4 col-sm-4 col-12 float-right px-md-3 mt-md-0 px-sm-3 mt-sm-0 mt-2 px-0"
                      },
                      [
                        _c(
                          "button",
                          {
                            staticClass: "btn btn-block bg-default my-1",
                            attrs: { disabled: _vm.check, type: "submit" }
                          },
                          [
                            _vm._v(
                              "\n                                Fetch customer details "
                            ),
                            _c("i", { staticClass: "far fa-paper-plane ml-1" })
                          ]
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _vm.errors.first("customer_id")
                      ? _c(
                          "small",
                          { staticClass: "form-text text-muted w-100" },
                          [
                            _vm._v(
                              "\n                            " +
                                _vm._s(_vm.errors.first("customer_id")) +
                                "\n                        "
                            )
                          ]
                        )
                      : _vm._e()
                  ]
                )
              ]
            )
          ])
        ]),
        _vm._v(" "),
        _c("transition", { attrs: { name: "fade" } }, [
          _vm.customer
            ? _c(
                "div",
                [
                  _c("customer-profile", {
                    attrs: { "view-customer": _vm.customer }
                  }),
                  _vm._v(" "),
                  _vm.action !== "update"
                    ? _c(
                        "div",
                        [
                          _vm._l(_vm.cardView, function(type) {
                            return _c(
                              "div",
                              {
                                staticClass:
                                  "float-left col-lg-3 col-sm-6 px-0 px-sm-3"
                              },
                              [
                                _c(
                                  "div",
                                  {
                                    staticClass: "card card-stats",
                                    class: _vm.DivClass(type)
                                  },
                                  [
                                    _c("div", { staticClass: "card-body " }, [
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "statistics statistics-horizontal"
                                        },
                                        [
                                          _c(
                                            "div",
                                            {
                                              staticClass:
                                                "info info-horizontal"
                                            },
                                            [
                                              _c(
                                                "div",
                                                { staticClass: "row" },
                                                [
                                                  _c(
                                                    "div",
                                                    { staticClass: "col-4" },
                                                    [
                                                      _c(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            "icon icon-warning icon-circle position-relative"
                                                        },
                                                        [
                                                          _c("i", {
                                                            staticClass: "fas",
                                                            class: _vm.IconClass(
                                                              type
                                                            )
                                                          })
                                                        ]
                                                      )
                                                    ]
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "div",
                                                    {
                                                      staticClass:
                                                        "col-8 text-right"
                                                    },
                                                    [
                                                      _c(
                                                        "h4",
                                                        {
                                                          staticClass:
                                                            "info-title font-weight-bold mb-0"
                                                        },
                                                        [
                                                          _vm._v(
                                                            _vm._s(
                                                              _vm._f(
                                                                "capitalize"
                                                              )(type)
                                                            )
                                                          )
                                                        ]
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "h6",
                                                        {
                                                          staticClass:
                                                            "stats-title"
                                                        },
                                                        [
                                                          _vm._v(
                                                            "\n                                                    " +
                                                              _vm._s(
                                                                _vm.key(type)
                                                                  ? "Verified"
                                                                  : "Not Verified"
                                                              ) +
                                                              "\n                                                "
                                                          )
                                                        ]
                                                      )
                                                    ]
                                                  )
                                                ]
                                              )
                                            ]
                                          )
                                        ]
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      {
                                        staticClass: "card-footer pointer",
                                        on: {
                                          click: function($event) {
                                            _vm.modal(type + "_modal")
                                          }
                                        }
                                      },
                                      [
                                        _c("i", {
                                          staticClass:
                                            "now-ui-icons ui-1_calendar-60 pr-1"
                                        }),
                                        _vm._v(
                                          "\n                                " +
                                            _vm._s(
                                              _vm.key(type)
                                                ? "Verified"
                                                : "Not Verified"
                                            ) +
                                            "\n                                "
                                        ),
                                        !_vm.key(type)
                                          ? _c("small", [
                                              _vm._v(
                                                "(Click here to update status!)"
                                              )
                                            ])
                                          : _c(
                                              "span",
                                              {
                                                staticClass: "float-right",
                                                staticStyle: {
                                                  "font-size": "10px"
                                                }
                                              },
                                              [
                                                _vm._v(
                                                  "\n                                        by - " +
                                                    _vm._s(
                                                      _vm._f("capitalize")(
                                                        type == "passport" ||
                                                        type == "id_card"
                                                          ? _vm.customer[
                                                              "document"
                                                            ].staff_name
                                                          : _vm.customer[type]
                                                              .staff_name
                                                      )
                                                    ) +
                                                    "\n                                "
                                                )
                                              ]
                                            )
                                      ]
                                    )
                                  ]
                                )
                              ]
                            )
                          }),
                          _vm._v(" "),
                          _c("hr", { staticClass: "style-two" })
                        ],
                        2
                      )
                    : _vm._e()
                ],
                1
              )
            : _vm._e()
        ]),
        _vm._v(" "),
        _vm.action !== "update"
          ? _c(
              "div",
              [
                _vm._l(_vm.picsView, function(type) {
                  return _c(
                    "div",
                    {
                      staticClass: "modal fade",
                      attrs: { id: type + "_modal" }
                    },
                    [
                      _c("div", { staticClass: "modal-dialog" }, [
                        _c("div", { staticClass: "modal-content" }, [
                          _c("div", { staticClass: "modal-header py-2" }, [
                            _c("h6", { staticClass: "modal-title py-1" }, [
                              _vm._v(
                                _vm._s(_vm._f("capitalize")(type)) +
                                  " Verification Status"
                              )
                            ]),
                            _vm._v(" "),
                            _c(
                              "a",
                              {
                                staticClass: "close py-1",
                                attrs: {
                                  "aria-label": "Close",
                                  "data-dismiss": "modal",
                                  href: "javascript:"
                                }
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
                          ]),
                          _vm._v(" "),
                          _vm.customer
                            ? _c(
                                "form",
                                {
                                  on: {
                                    submit: function($event) {
                                      $event.preventDefault()
                                      _vm.save(type, type + "_modal")
                                    }
                                  }
                                },
                                [
                                  _c("div", { staticClass: "modal-body" }, [
                                    _c(
                                      "div",
                                      { staticClass: "upload-image p-2" },
                                      [
                                        _c(
                                          "div",
                                          { staticClass: "upload-box" },
                                          [
                                            _c("image-upload", {
                                              model: {
                                                value: _vm.$data["form"][type],
                                                callback: function($$v) {
                                                  _vm.$set(
                                                    _vm.$data["form"],
                                                    type,
                                                    $$v
                                                  )
                                                },
                                                expression:
                                                  "$data['form'][type]"
                                              }
                                            })
                                          ],
                                          1
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _vm.error[type]
                                      ? _c("small", [
                                          _vm._v(_vm._s(_vm.error[type][0]))
                                        ])
                                      : _vm._e()
                                  ]),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "modal-footer" }, [
                                    _c(
                                      "button",
                                      {
                                        staticClass: "m-2 btn btn-secondary",
                                        attrs: {
                                          "data-dismiss": "modal",
                                          type: "button"
                                        }
                                      },
                                      [
                                        _vm._v(
                                          "\n                                    cancel\n                                "
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "button",
                                      {
                                        staticClass: "m-2 btn bg-default",
                                        attrs: {
                                          disabled: _vm.$isProcessing,
                                          type: "submit"
                                        }
                                      },
                                      [
                                        _vm._v(
                                          "\n                                    Save changes "
                                        ),
                                        _c("i", {
                                          staticClass: "far fa-paper-plane ml-1"
                                        })
                                      ]
                                    )
                                  ])
                                ]
                              )
                            : _vm._e()
                        ])
                      ])
                    ]
                  )
                }),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "modal fade", attrs: { id: "address_modal" } },
                  [
                    _c("div", { staticClass: "modal-dialog modal-lg" }, [
                      _c("div", { staticClass: "modal-content" }, [
                        _c("div", { staticClass: "modal-header py-2" }, [
                          _c("h6", { staticClass: "modal-title py-1" }, [
                            _vm._v("Address Verification Status")
                          ]),
                          _vm._v(" "),
                          _c(
                            "a",
                            {
                              staticClass: " py-1",
                              staticStyle: {
                                "min-height": "30px",
                                "min-width": "30px"
                              },
                              on: {
                                click: function($event) {
                                  _vm.modal("address_modal")
                                }
                              }
                            },
                            [
                              _c("span", { staticClass: "text-danger" }, [
                                _c("i", { staticClass: "fas fa-times" })
                              ])
                            ]
                          )
                        ]),
                        _vm._v(" "),
                        _c(
                          "form",
                          {
                            attrs: { "data-vv-scope": "address" },
                            on: {
                              submit: function($event) {
                                $event.preventDefault()
                                _vm.validate("address")
                              }
                            }
                          },
                          [
                            _c("div", { staticClass: "modal-body p-5" }, [
                              _c(
                                "table",
                                { staticClass: "mb-3 w-100 info-table" },
                                [
                                  _c("tbody", { staticClass: "px-3" }, [
                                    _c("tr", [
                                      _c("th", [
                                        _c("i", {
                                          staticClass:
                                            "fas fa-map-marker-alt mx-4"
                                        })
                                      ]),
                                      _vm._v(" "),
                                      _c("td", [
                                        _vm._v(
                                          _vm._s(
                                            _vm.$getCustomerAddress(
                                              _vm.customer
                                            )
                                          )
                                        )
                                      ])
                                    ])
                                  ])
                                ]
                              ),
                              _vm._v(" "),
                              _c("div", { staticClass: "w-100 p-3" }, [
                                _c("div", { staticClass: "clearfix" }, [
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "form-group float-left col-md-6 col-12 pr-md-3 pr-0 pl-0"
                                    },
                                    [
                                      _c("label", [
                                        _vm._v("Date of Visitation")
                                      ]),
                                      _vm._v(" "),
                                      _c("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: _vm.address.date_of_visit,
                                            expression: "address.date_of_visit"
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
                                          "data-vv-as": "date of visit",
                                          name: "date_of_visit",
                                          type: "date"
                                        },
                                        domProps: {
                                          value: _vm.address.date_of_visit
                                        },
                                        on: {
                                          input: function($event) {
                                            if ($event.target.composing) {
                                              return
                                            }
                                            _vm.$set(
                                              _vm.address,
                                              "date_of_visit",
                                              $event.target.value
                                            )
                                          }
                                        }
                                      }),
                                      _vm._v(" "),
                                      _vm.errors.first("address.date_of_visit")
                                        ? _c("small", [
                                            _vm._v(
                                              "\n                                                " +
                                                _vm._s(
                                                  _vm.errors.first(
                                                    "address.date_of_visit"
                                                  )
                                                ) +
                                                "\n                                            "
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
                                        "form-group float-left  col-md-6 col-12  pl-md-3 pl-0 pr-0"
                                    },
                                    [
                                      _c("label", [_vm._v("Time of Visit")]),
                                      _vm._v(" "),
                                      _c("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: _vm.address.time_of_visit,
                                            expression: "address.time_of_visit"
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
                                          "data-vv-as": "time of visit",
                                          name: "time_of_visit",
                                          type: "time"
                                        },
                                        domProps: {
                                          value: _vm.address.time_of_visit
                                        },
                                        on: {
                                          input: function($event) {
                                            if ($event.target.composing) {
                                              return
                                            }
                                            _vm.$set(
                                              _vm.address,
                                              "time_of_visit",
                                              $event.target.value
                                            )
                                          }
                                        }
                                      }),
                                      _vm._v(" "),
                                      _vm.errors.first("address.time_of_visit")
                                        ? _c("small", [
                                            _vm._v(
                                              "\n                                                " +
                                                _vm._s(
                                                  _vm.errors.first(
                                                    "address.time_of_visit"
                                                  )
                                                ) +
                                                "\n                                            "
                                            )
                                          ])
                                        : _vm._e()
                                    ]
                                  )
                                ]),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  { staticClass: "form-group clearfix" },
                                  [
                                    _c("label", [
                                      _vm._v("1. Did you meet the customer?")
                                    ]),
                                    _vm._v(" "),
                                    _c("span", { staticClass: "radio mx-5" }, [
                                      _c("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: _vm.address.customer_meetup,
                                            expression:
                                              "address.customer_meetup"
                                          },
                                          {
                                            name: "validate",
                                            rawName: "v-validate",
                                            value: "required",
                                            expression: "'required'"
                                          }
                                        ],
                                        attrs: {
                                          "data-vv-as": "customer meetup",
                                          id: "yes",
                                          name: "customer_meetup",
                                          type: "radio",
                                          value: "yes"
                                        },
                                        domProps: {
                                          checked: _vm._q(
                                            _vm.address.customer_meetup,
                                            "yes"
                                          )
                                        },
                                        on: {
                                          change: function($event) {
                                            _vm.$set(
                                              _vm.address,
                                              "customer_meetup",
                                              "yes"
                                            )
                                          }
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c("label", { attrs: { for: "yes" } }, [
                                        _vm._v("Yes")
                                      ])
                                    ]),
                                    _vm._v(" "),
                                    _c("span", { staticClass: "radio ml-5" }, [
                                      _c("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: _vm.address.customer_meetup,
                                            expression:
                                              "address.customer_meetup"
                                          }
                                        ],
                                        attrs: {
                                          id: "no",
                                          name: "customer_meetup",
                                          type: "radio",
                                          value: "no"
                                        },
                                        domProps: {
                                          checked: _vm._q(
                                            _vm.address.customer_meetup,
                                            "no"
                                          )
                                        },
                                        on: {
                                          change: function($event) {
                                            _vm.$set(
                                              _vm.address,
                                              "customer_meetup",
                                              "no"
                                            )
                                          }
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c("label", { attrs: { for: "no" } }, [
                                        _vm._v("No")
                                      ])
                                    ]),
                                    _vm._v(" "),
                                    _vm.errors.first("address.customer_meetup")
                                      ? _c("small", [
                                          _vm._v(
                                            "\n                                            " +
                                              _vm._s(
                                                _vm.errors.first(
                                                  "address.customer_meetup"
                                                )
                                              ) +
                                              "\n                                        "
                                          )
                                        ])
                                      : _vm._e()
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  { staticClass: "form-group clearfix" },
                                  [
                                    _c("label", [
                                      _vm._v(
                                        "\n                                            2. Is the address/location same with what you have in the application\n                                            form?\n                                        "
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c("span", { staticClass: "radio mx-5" }, [
                                      _c("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: _vm.address.confirm_address,
                                            expression:
                                              "address.confirm_address"
                                          },
                                          {
                                            name: "validate",
                                            rawName: "v-validate",
                                            value: "required",
                                            expression: "'required'"
                                          }
                                        ],
                                        attrs: {
                                          "data-vv-as": "confirm address",
                                          id: "add_yes",
                                          name: "confirm_address",
                                          type: "radio",
                                          value: "yes"
                                        },
                                        domProps: {
                                          checked: _vm._q(
                                            _vm.address.confirm_address,
                                            "yes"
                                          )
                                        },
                                        on: {
                                          change: function($event) {
                                            _vm.$set(
                                              _vm.address,
                                              "confirm_address",
                                              "yes"
                                            )
                                          }
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c(
                                        "label",
                                        { attrs: { for: "add_yes" } },
                                        [_vm._v("Yes")]
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c("span", { staticClass: "radio ml-5" }, [
                                      _c("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: _vm.address.confirm_address,
                                            expression:
                                              "address.confirm_address"
                                          }
                                        ],
                                        attrs: {
                                          id: "add_no",
                                          name: "confirm_address",
                                          type: "radio",
                                          value: "no"
                                        },
                                        domProps: {
                                          checked: _vm._q(
                                            _vm.address.confirm_address,
                                            "no"
                                          )
                                        },
                                        on: {
                                          change: function($event) {
                                            _vm.$set(
                                              _vm.address,
                                              "confirm_address",
                                              "no"
                                            )
                                          }
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c(
                                        "label",
                                        { attrs: { for: "add_no" } },
                                        [_vm._v("No")]
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _vm.errors.first("address.confirm_address")
                                      ? _c("small", [
                                          _vm._v(
                                            "\n                                            " +
                                              _vm._s(
                                                _vm.errors.first(
                                                  "address.confirm_address"
                                                )
                                              ) +
                                              "\n                                        "
                                          )
                                        ])
                                      : _vm._e()
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  { staticClass: "form-group clearfix" },
                                  [
                                    _c("label", [
                                      _vm._v("3. What does he/she do or sell?")
                                    ]),
                                    _vm._v(" "),
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.address.what_he_sells,
                                          expression: "address.what_he_sells"
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
                                        "data-vv-as": "what he sells",
                                        name: "what_he_sells",
                                        placeholder: "comment here...",
                                        type: "text"
                                      },
                                      domProps: {
                                        value: _vm.address.what_he_sells
                                      },
                                      on: {
                                        input: function($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            _vm.address,
                                            "what_he_sells",
                                            $event.target.value
                                          )
                                        }
                                      }
                                    }),
                                    _vm._v(" "),
                                    _vm.errors.first("address.what_he_sells")
                                      ? _c("small", [
                                          _vm._v(
                                            "\n                                            " +
                                              _vm._s(
                                                _vm.errors.first(
                                                  "address.what_he_sells"
                                                )
                                              ) +
                                              "\n                                        "
                                          )
                                        ])
                                      : _vm._e()
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  { staticClass: "form-group clearfix" },
                                  [
                                    _c("label", [
                                      _vm._v(
                                        "4. Look around the shop and check the nature and condition of the\n                                            business. Write down what you see in terms of address, stock value,\n                                            premise, type of shop or business, sales etc."
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c("textarea", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.address.business_info,
                                          expression: "address.business_info"
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
                                        "data-vv-as": "business info",
                                        name: "business_info",
                                        placeholder: "comment here...",
                                        rows: "1"
                                      },
                                      domProps: {
                                        value: _vm.address.business_info
                                      },
                                      on: {
                                        input: function($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            _vm.address,
                                            "business_info",
                                            $event.target.value
                                          )
                                        }
                                      }
                                    }),
                                    _vm._v(" "),
                                    _vm.errors.first("address.business_info")
                                      ? _c("small", [
                                          _vm._v(
                                            "\n                                            " +
                                              _vm._s(
                                                _vm.errors.first(
                                                  "address.business_info"
                                                )
                                              ) +
                                              "\n                                        "
                                          )
                                        ])
                                      : _vm._e()
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  { staticClass: "form-group clearfix" },
                                  [
                                    _c("label", [
                                      _vm._v(
                                        "5. Get exact information of choice of product and specification by\n                                            asking for\n                                            Example; what exact phone do you want? Let him/her specify e.g. INFINIX\n                                            SMART or HOT 4 IPHONE\n                                        "
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c("textarea", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.address.product_info,
                                          expression: "address.product_info"
                                        },
                                        {
                                          name: "validate",
                                          rawName: "v-validate",
                                          value: "required",
                                          expression: "'required'"
                                        }
                                      ],
                                      staticClass: "form-control w-100",
                                      attrs: {
                                        "data-vv-as": "product info",
                                        name: "product_info",
                                        placeholder: "comment here...",
                                        rows: "1"
                                      },
                                      domProps: {
                                        value: _vm.address.product_info
                                      },
                                      on: {
                                        input: function($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            _vm.address,
                                            "product_info",
                                            $event.target.value
                                          )
                                        }
                                      }
                                    }),
                                    _vm._v(" "),
                                    _vm.errors.first("address.product_info")
                                      ? _c("small", [
                                          _vm._v(
                                            "\n                                            " +
                                              _vm._s(
                                                _vm.errors.first(
                                                  "address.product_info"
                                                )
                                              ) +
                                              "\n                                        "
                                          )
                                        ])
                                      : _vm._e()
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  { staticClass: "form-group clearfix" },
                                  [
                                    _c("label", [
                                      _vm._v(
                                        "\n                                            6. Are you aware of the payment plan?\n                                        "
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c("span", { staticClass: "radio mx-5" }, [
                                      _c("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: _vm.address.aware_of_plan,
                                            expression: "address.aware_of_plan"
                                          },
                                          {
                                            name: "validate",
                                            rawName: "v-validate",
                                            value: "required",
                                            expression: "'required'"
                                          }
                                        ],
                                        attrs: {
                                          "data-vv-as": "aware of plan",
                                          id: "pay_yes",
                                          name: "aware_of_plan",
                                          type: "radio",
                                          value: "yes"
                                        },
                                        domProps: {
                                          checked: _vm._q(
                                            _vm.address.aware_of_plan,
                                            "yes"
                                          )
                                        },
                                        on: {
                                          change: function($event) {
                                            _vm.$set(
                                              _vm.address,
                                              "aware_of_plan",
                                              "yes"
                                            )
                                          }
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c(
                                        "label",
                                        { attrs: { for: "pay_yes" } },
                                        [_vm._v("yes")]
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c("span", { staticClass: "radio ml-5" }, [
                                      _c("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: _vm.address.aware_of_plan,
                                            expression: "address.aware_of_plan"
                                          }
                                        ],
                                        attrs: {
                                          id: "pay_no",
                                          name: "aware_of_plan",
                                          type: "radio",
                                          value: "no"
                                        },
                                        domProps: {
                                          checked: _vm._q(
                                            _vm.address.aware_of_plan,
                                            "no"
                                          )
                                        },
                                        on: {
                                          change: function($event) {
                                            _vm.$set(
                                              _vm.address,
                                              "aware_of_plan",
                                              "no"
                                            )
                                          }
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c(
                                        "label",
                                        { attrs: { for: "pay_no" } },
                                        [_vm._v("no")]
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _vm.errors.first("address.aware_of_plan")
                                      ? _c("small", [
                                          _vm._v(
                                            "\n                                            " +
                                              _vm._s(
                                                _vm.errors.first(
                                                  "address.aware_of_plan"
                                                )
                                              ) +
                                              "\n                                        "
                                          )
                                        ])
                                      : _vm._e()
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  { staticClass: "form-group clearfix" },
                                  [
                                    _c("label", [
                                      _vm._v(
                                        "\n                                            7. Did you get information about the customer from his/her neighbours?\n                                        "
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c("span", { staticClass: "radio mx-5" }, [
                                      _c("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: _vm.info_from_neighbors,
                                            expression: "info_from_neighbors"
                                          },
                                          {
                                            name: "validate",
                                            rawName: "v-validate",
                                            value: "required",
                                            expression: "'required'"
                                          }
                                        ],
                                        attrs: {
                                          "data-vv-as": "info from neighbors",
                                          id: "neigh_yes",
                                          name: "info_from_neighbors",
                                          type: "radio",
                                          value: "yes"
                                        },
                                        domProps: {
                                          checked: _vm._q(
                                            _vm.info_from_neighbors,
                                            "yes"
                                          )
                                        },
                                        on: {
                                          change: function($event) {
                                            _vm.info_from_neighbors = "yes"
                                          }
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c(
                                        "label",
                                        { attrs: { for: "neigh_yes" } },
                                        [_vm._v("yes")]
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c("span", { staticClass: "radio ml-5" }, [
                                      _c("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: _vm.info_from_neighbors,
                                            expression: "info_from_neighbors"
                                          }
                                        ],
                                        attrs: {
                                          id: "neigh_no",
                                          name: "info_from_neighbors",
                                          type: "radio",
                                          value: "no"
                                        },
                                        domProps: {
                                          checked: _vm._q(
                                            _vm.info_from_neighbors,
                                            "no"
                                          )
                                        },
                                        on: {
                                          change: function($event) {
                                            _vm.info_from_neighbors = "no"
                                          }
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c(
                                        "label",
                                        { attrs: { for: "neigh_no" } },
                                        [_vm._v("no")]
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _vm.errors.first(
                                      "address.info_from_neighbors"
                                    )
                                      ? _c("small", [
                                          _vm._v(
                                            "\n                                            " +
                                              _vm._s(
                                                _vm.errors.first(
                                                  "address.info_from_neighbors"
                                                )
                                              ) +
                                              "\n                                        "
                                          )
                                        ])
                                      : _vm._e(),
                                    _vm._v(" "),
                                    _vm.info_from_neighbors == "yes"
                                      ? _c("div", [
                                          _c("textarea", {
                                            directives: [
                                              {
                                                name: "model",
                                                rawName: "v-model",
                                                value:
                                                  _vm.address
                                                    .info_from_neighbors_desc,
                                                expression:
                                                  "address.info_from_neighbors_desc"
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
                                              "data-vv-as":
                                                "info from neighbors desc",
                                              name: "info_from_neighbors_desc",
                                              placeholder: "comment here...",
                                              rows: "1"
                                            },
                                            domProps: {
                                              value:
                                                _vm.address
                                                  .info_from_neighbors_desc
                                            },
                                            on: {
                                              input: function($event) {
                                                if ($event.target.composing) {
                                                  return
                                                }
                                                _vm.$set(
                                                  _vm.address,
                                                  "info_from_neighbors_desc",
                                                  $event.target.value
                                                )
                                              }
                                            }
                                          }),
                                          _vm._v(" "),
                                          _vm.errors.first(
                                            "address.info_from_neighbors_desc"
                                          )
                                            ? _c("small", [
                                                _vm._v(
                                                  "\n                                                " +
                                                    _vm._s(
                                                      _vm.errors.first(
                                                        "address.info_from_neighbors_desc"
                                                      )
                                                    ) +
                                                    "\n                                            "
                                                )
                                              ])
                                            : _vm._e()
                                        ])
                                      : _vm._e()
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  { staticClass: "form-group clearfix" },
                                  [
                                    _c("label", [
                                      _vm._v(
                                        "8. And how long has he/she been working/trading in that particular\n                                            place?\n                                        "
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c("textarea", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value:
                                            _vm.address
                                              .business_or_work_duration,
                                          expression:
                                            "address.business_or_work_duration"
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
                                        "data-vv-as":
                                          "business or work duration",
                                        name: "business_or_work_duration",
                                        placeholder: "address",
                                        rows: "1"
                                      },
                                      domProps: {
                                        value:
                                          _vm.address.business_or_work_duration
                                      },
                                      on: {
                                        input: function($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            _vm.address,
                                            "business_or_work_duration",
                                            $event.target.value
                                          )
                                        }
                                      }
                                    }),
                                    _vm._v(" "),
                                    _vm.errors.first(
                                      "address.business_or_work_duration"
                                    )
                                      ? _c("small", [
                                          _vm._v(
                                            "\n                                            " +
                                              _vm._s(
                                                _vm.errors.first(
                                                  "address.business_or_work_duration"
                                                )
                                              ) +
                                              "\n                                        "
                                          )
                                        ])
                                      : _vm._e()
                                  ]
                                ),
                                _vm._v(" "),
                                _vm.addressBtns
                                  ? _c("div", [
                                      _c(
                                        "div",
                                        { staticClass: "w-100 clearfix" },
                                        [
                                          _c(
                                            "button",
                                            {
                                              staticClass:
                                                "btn btn-success btn-lg btn-block",
                                              attrs: {
                                                disabled: _vm.$isProcessing,
                                                type: "submit"
                                              },
                                              on: {
                                                click: function($event) {
                                                  _vm.address.approval_status = 1
                                                }
                                              }
                                            },
                                            [
                                              _vm._v(
                                                "\n                                                Successful - Update Details\n                                                "
                                              ),
                                              _c("i", {
                                                staticClass:
                                                  "far fa-paper-plane ml-1"
                                              })
                                            ]
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        { staticClass: "pt-2 w-100 clearfix" },
                                        [
                                          _c(
                                            "div",
                                            {
                                              staticClass:
                                                "pr-2 pl-md-0 pl-2 col-md-6 col-12 m-0 float-left"
                                            },
                                            [
                                              _c(
                                                "button",
                                                {
                                                  staticClass:
                                                    "m-0 btn btn-lg btn-block btn-secondary",
                                                  attrs: { type: "button" },
                                                  on: {
                                                    click: function($event) {
                                                      _vm.modal("address_modal")
                                                    }
                                                  }
                                                },
                                                [
                                                  _vm._v(
                                                    "\n                                                    Cancel\n                                                "
                                                  )
                                                ]
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            {
                                              staticClass:
                                                "pl-2 pr-md-0 pr-2 col-md-6 col-12 float-left"
                                            },
                                            [
                                              _c(
                                                "button",
                                                {
                                                  staticClass:
                                                    "m-0 btn btn-lg btn-block btn-primary",
                                                  attrs: {
                                                    disabled: _vm.$isProcessing,
                                                    type: "submit"
                                                  },
                                                  on: {
                                                    click: function($event) {
                                                      _vm.address.approval_status = 0
                                                    }
                                                  }
                                                },
                                                [
                                                  _vm._v(
                                                    "\n                                                    Not-Successful - Update Details\n                                                    "
                                                  ),
                                                  _c("i", {
                                                    staticClass:
                                                      "far fa-paper-plane ml-1"
                                                  })
                                                ]
                                              )
                                            ]
                                          )
                                        ]
                                      )
                                    ])
                                  : _c("h5", [
                                      _vm._v(
                                        "\n                                        This customers details has already been updated once and cannot be changed!\n                                    "
                                      )
                                    ])
                              ])
                            ])
                          ]
                        )
                      ])
                    ])
                  ]
                ),
                _vm._v(" "),
                _vm._l(_vm.veriView, function(type) {
                  return _c(
                    "div",
                    {
                      staticClass: "modal fade",
                      attrs: { id: type + "_modal" }
                    },
                    [
                      _c("div", { staticClass: "modal-dialog" }, [
                        _c("div", { staticClass: "modal-content" }, [
                          _c("div", { staticClass: "modal-header py-2" }, [
                            _c("h6", { staticClass: "modal-title py-1" }, [
                              _vm._v(
                                "\n                                " +
                                  _vm._s(_vm._f("capitalize")(type)) +
                                  " " +
                                  _vm._s(
                                    type !== "processing_fee"
                                      ? "Verification"
                                      : ""
                                  ) +
                                  " Status\n                            "
                              )
                            ]),
                            _vm._v(" "),
                            _c(
                              "a",
                              {
                                staticClass: "close py-1",
                                attrs: {
                                  "aria-label": "Close",
                                  "data-dismiss": "modal",
                                  href: "javascript:"
                                }
                              },
                              [
                                _c(
                                  "span",
                                  { staticClass: "modal-close text-danger" },
                                  [_c("i", { staticClass: "fas fa-times" })]
                                )
                              ]
                            )
                          ]),
                          _vm._v(" "),
                          _vm.customer
                            ? _c(
                                "form",
                                {
                                  attrs: { "data-vv-scope": type },
                                  on: {
                                    submit: function($event) {
                                      $event.preventDefault()
                                      _vm.validate(type)
                                    }
                                  }
                                },
                                [
                                  _c("div", { staticClass: "modal-body" }, [
                                    type !== "processing_fee"
                                      ? _c(
                                          "table",
                                          { staticClass: "mb-3 info-table" },
                                          [
                                            _c("tbody", [
                                              _c("tr", [
                                                _c("th", [
                                                  _c("i", {
                                                    staticClass:
                                                      "fas fa-map-marker-alt"
                                                  })
                                                ]),
                                                _vm._v(" "),
                                                _vm.customer[type + "_state"]
                                                  ? _c("td", [
                                                      _vm._v(
                                                        _vm._s(
                                                          _vm.$data[
                                                            type + "_address"
                                                          ]
                                                        )
                                                      )
                                                    ])
                                                  : _c("td", [
                                                      _vm._v(
                                                        "please update customer details!"
                                                      )
                                                    ])
                                              ]),
                                              _vm._v(" "),
                                              _c("tr", [
                                                _c("th", [
                                                  _c("i", {
                                                    staticClass:
                                                      "fas fa-mobile-alt"
                                                  })
                                                ]),
                                                _vm._v(" "),
                                                _vm.customer[type + "_telno"]
                                                  ? _c("td", [
                                                      _vm._v(
                                                        _vm._s(
                                                          _vm.customer[
                                                            type + "_telno"
                                                          ]
                                                        )
                                                      )
                                                    ])
                                                  : _c("td", [
                                                      _vm._v(
                                                        "please update customer details!"
                                                      )
                                                    ])
                                              ]),
                                              _vm._v(" "),
                                              _c("tr", [
                                                _c("th", [
                                                  _c("i", {
                                                    staticClass:
                                                      " fas fa-user-circle"
                                                  })
                                                ]),
                                                _vm._v(" "),
                                                _vm.customer[
                                                  type + "_first_name"
                                                ]
                                                  ? _c("td", [
                                                      _vm._v(
                                                        "\n                                            " +
                                                          _vm._s(
                                                            _vm.customer[
                                                              type +
                                                                "_first_name"
                                                            ] +
                                                              " " +
                                                              _vm.customer[
                                                                type +
                                                                  "_last_name"
                                                              ]
                                                          ) +
                                                          "\n                                        "
                                                      )
                                                    ])
                                                  : _c("td", [
                                                      _vm._v(
                                                        "please update customer details!"
                                                      )
                                                    ])
                                              ]),
                                              _vm._v(" "),
                                              _c("tr", [
                                                _c("th", [
                                                  _c("i", {
                                                    staticClass:
                                                      "fas fa-user-circle"
                                                  })
                                                ]),
                                                _vm._v(" "),
                                                _vm.customer[
                                                  type + "_relationship"
                                                ]
                                                  ? _c("td", [
                                                      _vm._v(
                                                        _vm._s(
                                                          _vm._f("capitalize")(
                                                            _vm.customer[
                                                              type +
                                                                "_relationship"
                                                            ]
                                                          )
                                                        ) +
                                                          "\n                                        "
                                                      )
                                                    ])
                                                  : _c("td", [
                                                      _vm._v(
                                                        "please update customer details!"
                                                      )
                                                    ])
                                              ])
                                            ])
                                          ]
                                        )
                                      : _vm._e(),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      {
                                        staticClass:
                                          "form-group col-12 px-2 clearfix my-0"
                                      },
                                      [
                                        _c("div", { staticClass: "clearfix" }, [
                                          _c(
                                            "div",
                                            {
                                              staticClass:
                                                "form-group float-left col-md-6 col-12 pr-md-3 pr-0 pl-0"
                                            },
                                            [
                                              _c("label", [
                                                _vm._v(
                                                  "\n                                                Date " +
                                                    _vm._s(
                                                      type !== "processing_fee"
                                                        ? "of Call"
                                                        : "Collected"
                                                    ) +
                                                    "\n                                            "
                                                )
                                              ]),
                                              _vm._v(" "),
                                              type !== "processing_fee"
                                                ? _c("input", {
                                                    directives: [
                                                      {
                                                        name: "model",
                                                        rawName: "v-model",
                                                        value:
                                                          _vm.$data[type]
                                                            .date_of_call,
                                                        expression:
                                                          "$data[type].date_of_call"
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
                                                      name: "date_of_call",
                                                      type: "date"
                                                    },
                                                    domProps: {
                                                      value:
                                                        _vm.$data[type]
                                                          .date_of_call
                                                    },
                                                    on: {
                                                      input: function($event) {
                                                        if (
                                                          $event.target
                                                            .composing
                                                        ) {
                                                          return
                                                        }
                                                        _vm.$set(
                                                          _vm.$data[type],
                                                          "date_of_call",
                                                          $event.target.value
                                                        )
                                                      }
                                                    }
                                                  })
                                                : _c("input", {
                                                    directives: [
                                                      {
                                                        name: "model",
                                                        rawName: "v-model",
                                                        value:
                                                          _vm.$data[type]
                                                            .date_collected,
                                                        expression:
                                                          "$data[type].date_collected"
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
                                                      name: "date_of_call",
                                                      type: "date"
                                                    },
                                                    domProps: {
                                                      value:
                                                        _vm.$data[type]
                                                          .date_collected
                                                    },
                                                    on: {
                                                      input: function($event) {
                                                        if (
                                                          $event.target
                                                            .composing
                                                        ) {
                                                          return
                                                        }
                                                        _vm.$set(
                                                          _vm.$data[type],
                                                          "date_collected",
                                                          $event.target.value
                                                        )
                                                      }
                                                    }
                                                  }),
                                              _vm._v(" "),
                                              _vm.errors.first(
                                                type + ".date_of_call"
                                              )
                                                ? _c("small", [
                                                    _vm._v(
                                                      "\n                                                " +
                                                        _vm._s(
                                                          _vm.errors.first(
                                                            type +
                                                              ".date_of_call"
                                                          )
                                                        ) +
                                                        "\n                                            "
                                                    )
                                                  ])
                                                : _vm._e(),
                                              _vm._v(" "),
                                              _vm.errors.first(
                                                type + ".date_collected"
                                              )
                                                ? _c("small", [
                                                    _vm._v(
                                                      "\n                                                " +
                                                        _vm._s(
                                                          _vm.errors.first(
                                                            type +
                                                              ".date_collected"
                                                          )
                                                        ) +
                                                        "\n                                            "
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
                                                "form-group float-left col-md-6 col-12 pl-md-3 pl-0 pr-0"
                                            },
                                            [
                                              _c("label", [
                                                _vm._v(
                                                  "\n                                                Time " +
                                                    _vm._s(
                                                      type !== "processing_fee"
                                                        ? "of Call"
                                                        : "Collected"
                                                    ) +
                                                    "\n                                            "
                                                )
                                              ]),
                                              _vm._v(" "),
                                              type !== "processing_fee"
                                                ? _c("input", {
                                                    directives: [
                                                      {
                                                        name: "model",
                                                        rawName: "v-model",
                                                        value:
                                                          _vm.$data[type]
                                                            .time_of_call,
                                                        expression:
                                                          "$data[type].time_of_call"
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
                                                      name: "time_of_call",
                                                      type: "time"
                                                    },
                                                    domProps: {
                                                      value:
                                                        _vm.$data[type]
                                                          .time_of_call
                                                    },
                                                    on: {
                                                      input: function($event) {
                                                        if (
                                                          $event.target
                                                            .composing
                                                        ) {
                                                          return
                                                        }
                                                        _vm.$set(
                                                          _vm.$data[type],
                                                          "time_of_call",
                                                          $event.target.value
                                                        )
                                                      }
                                                    }
                                                  })
                                                : _c("input", {
                                                    directives: [
                                                      {
                                                        name: "model",
                                                        rawName: "v-model",
                                                        value:
                                                          _vm.$data[type]
                                                            .time_collected,
                                                        expression:
                                                          "$data[type].time_collected"
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
                                                      name: "time_collected",
                                                      type: "time"
                                                    },
                                                    domProps: {
                                                      value:
                                                        _vm.$data[type]
                                                          .time_collected
                                                    },
                                                    on: {
                                                      input: function($event) {
                                                        if (
                                                          $event.target
                                                            .composing
                                                        ) {
                                                          return
                                                        }
                                                        _vm.$set(
                                                          _vm.$data[type],
                                                          "time_collected",
                                                          $event.target.value
                                                        )
                                                      }
                                                    }
                                                  }),
                                              _vm._v(" "),
                                              _vm.errors.first(
                                                type + ".time_of_call"
                                              )
                                                ? _c("small", [
                                                    _vm._v(
                                                      "\n                                                " +
                                                        _vm._s(
                                                          _vm.errors.first(
                                                            type +
                                                              ".time_of_call"
                                                          )
                                                        ) +
                                                        "\n                                            "
                                                    )
                                                  ])
                                                : _vm._e(),
                                              _vm._v(" "),
                                              _vm.errors.first(
                                                type + ".time_collected"
                                              )
                                                ? _c("small", [
                                                    _vm._v(
                                                      "\n                                                " +
                                                        _vm._s(
                                                          _vm.errors.first(
                                                            type +
                                                              ".time_collected"
                                                          )
                                                        ) +
                                                        "\n                                            "
                                                    )
                                                  ])
                                                : _vm._e()
                                            ]
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("div", { staticClass: "clearfix" }, [
                                          _c(
                                            "label",
                                            { staticClass: "w-100" },
                                            [
                                              _vm._v(
                                                "\n                                            " +
                                                  _vm._s(
                                                    _vm._f("capitalize")(type)
                                                  ) +
                                                  "\n                                            " +
                                                  _vm._s(
                                                    type !== "processing_fee"
                                                      ? "Consent"
                                                      : "Amount(Naira)"
                                                  ) +
                                                  "\n                                        "
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          type !== "processing_fee"
                                            ? _c("div", [
                                                _c(
                                                  "div",
                                                  {
                                                    staticClass:
                                                      "radio p-0 col-6 float-left"
                                                  },
                                                  [
                                                    _c("input", {
                                                      directives: [
                                                        {
                                                          name: "model",
                                                          rawName: "v-model",
                                                          value:
                                                            _vm.$data[type]
                                                              .consent,
                                                          expression:
                                                            "$data[type].consent"
                                                        },
                                                        {
                                                          name: "validate",
                                                          rawName: "v-validate",
                                                          value: "required",
                                                          expression:
                                                            "'required'"
                                                        }
                                                      ],
                                                      attrs: {
                                                        id: type + "_yes",
                                                        name: "consent",
                                                        type: "radio",
                                                        value: "1"
                                                      },
                                                      domProps: {
                                                        checked: _vm._q(
                                                          _vm.$data[type]
                                                            .consent,
                                                          "1"
                                                        )
                                                      },
                                                      on: {
                                                        change: function(
                                                          $event
                                                        ) {
                                                          _vm.$set(
                                                            _vm.$data[type],
                                                            "consent",
                                                            "1"
                                                          )
                                                        }
                                                      }
                                                    }),
                                                    _vm._v(" "),
                                                    _c(
                                                      "label",
                                                      {
                                                        attrs: {
                                                          for: type + "_yes"
                                                        }
                                                      },
                                                      [_vm._v("Gave Consent")]
                                                    )
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "div",
                                                  {
                                                    staticClass:
                                                      "radio p-0 col-6 float-left"
                                                  },
                                                  [
                                                    _c("input", {
                                                      directives: [
                                                        {
                                                          name: "model",
                                                          rawName: "v-model",
                                                          value:
                                                            _vm.$data[type]
                                                              .consent,
                                                          expression:
                                                            "$data[type].consent"
                                                        }
                                                      ],
                                                      attrs: {
                                                        id: type + "_no",
                                                        name: "consent",
                                                        type: "radio",
                                                        value: "0"
                                                      },
                                                      domProps: {
                                                        checked: _vm._q(
                                                          _vm.$data[type]
                                                            .consent,
                                                          "0"
                                                        )
                                                      },
                                                      on: {
                                                        change: function(
                                                          $event
                                                        ) {
                                                          _vm.$set(
                                                            _vm.$data[type],
                                                            "consent",
                                                            "0"
                                                          )
                                                        }
                                                      }
                                                    }),
                                                    _vm._v(" "),
                                                    _c(
                                                      "label",
                                                      {
                                                        attrs: {
                                                          for: type + "_no"
                                                        }
                                                      },
                                                      [
                                                        _vm._v(
                                                          "Did not Give Consent"
                                                        )
                                                      ]
                                                    )
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _vm.errors.first(
                                                  type + ".consent"
                                                )
                                                  ? _c("small", [
                                                      _vm._v(
                                                        "\n                                                " +
                                                          _vm._s(
                                                            _vm.errors.first(
                                                              type + ".consent"
                                                            )
                                                          ) +
                                                          "\n                                            "
                                                      )
                                                    ])
                                                  : _vm._e()
                                              ])
                                            : _c("div", [
                                                _c(
                                                  "div",
                                                  {
                                                    staticClass:
                                                      "radio p-0 col-6 float-left"
                                                  },
                                                  [
                                                    _c("input", {
                                                      directives: [
                                                        {
                                                          name: "model",
                                                          rawName: "v-model",
                                                          value:
                                                            _vm.$data[type]
                                                              .amount,
                                                          expression:
                                                            "$data[type].amount"
                                                        },
                                                        {
                                                          name: "validate",
                                                          rawName: "v-validate",
                                                          value: "required",
                                                          expression:
                                                            "'required'"
                                                        }
                                                      ],
                                                      staticClass:
                                                        "form-control",
                                                      attrs: {
                                                        disabled: "",
                                                        name: "amount",
                                                        type: "number"
                                                      },
                                                      domProps: {
                                                        value:
                                                          _vm.$data[type].amount
                                                      },
                                                      on: {
                                                        input: function(
                                                          $event
                                                        ) {
                                                          if (
                                                            $event.target
                                                              .composing
                                                          ) {
                                                            return
                                                          }
                                                          _vm.$set(
                                                            _vm.$data[type],
                                                            "amount",
                                                            $event.target.value
                                                          )
                                                        }
                                                      }
                                                    })
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _vm.errors.first(
                                                  type + ".amount"
                                                )
                                                  ? _c("small", [
                                                      _vm._v(
                                                        "\n                                                " +
                                                          _vm._s(
                                                            _vm.errors.first(
                                                              type + ".amount"
                                                            )
                                                          ) +
                                                          "\n                                            "
                                                      )
                                                    ])
                                                  : _vm._e()
                                              ])
                                        ]),
                                        _vm._v(" "),
                                        _c("div", { staticClass: "clearfix" }, [
                                          _c("label", [_vm._v("Report")]),
                                          _vm._v(" "),
                                          _c("textarea", {
                                            directives: [
                                              {
                                                name: "model",
                                                rawName: "v-model",
                                                value: _vm.$data[type].report,
                                                expression: "$data[type].report"
                                              },
                                              {
                                                name: "validate",
                                                rawName: "v-validate",
                                                value: "required",
                                                expression: "'required'"
                                              }
                                            ],
                                            staticClass: "form-control w-100",
                                            attrs: {
                                              name: "report",
                                              placeholder: "comment here...",
                                              rows: "3"
                                            },
                                            domProps: {
                                              value: _vm.$data[type].report
                                            },
                                            on: {
                                              input: function($event) {
                                                if ($event.target.composing) {
                                                  return
                                                }
                                                _vm.$set(
                                                  _vm.$data[type],
                                                  "report",
                                                  $event.target.value
                                                )
                                              }
                                            }
                                          }),
                                          _vm._v(" "),
                                          _vm.errors.first(type + ".report")
                                            ? _c("small", [
                                                _vm._v(
                                                  "\n                                            " +
                                                    _vm._s(
                                                      _vm.errors.first(
                                                        type + ".report"
                                                      )
                                                    ) +
                                                    "\n                                        "
                                                )
                                              ])
                                            : _vm._e()
                                        ])
                                      ]
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _vm.$data[type + "Btns"]
                                    ? _c(
                                        "div",
                                        { staticClass: "modal-footer" },
                                        [
                                          _c(
                                            "button",
                                            {
                                              staticClass:
                                                "m-2 btn btn-secondary",
                                              attrs: {
                                                "data-dismiss": "modal",
                                                type: "button"
                                              }
                                            },
                                            [
                                              _vm._v(
                                                "cancel\n                                "
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "button",
                                            {
                                              staticClass: "m-2 btn bg-default",
                                              attrs: {
                                                disabled: _vm.$isProcessing,
                                                type: "submit"
                                              }
                                            },
                                            [
                                              _vm._v(
                                                "\n                                    Save changes "
                                              ),
                                              _c("i", {
                                                staticClass:
                                                  "far fa-paper-plane ml-1"
                                              })
                                            ]
                                          )
                                        ]
                                      )
                                    : _c(
                                        "div",
                                        { staticClass: "modal-footer" },
                                        [
                                          _c("h5", [
                                            _vm._v(
                                              "This customers details has already been updated once and cannot be changed!"
                                            )
                                          ])
                                        ]
                                      )
                                ]
                              )
                            : _vm._e()
                        ])
                      ])
                    ]
                  )
                })
              ],
              2
            )
          : _vm._e()
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
    require("vue-hot-reload-api")      .rerender("data-v-07317a72", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-0ba4287c\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/views/shared/customerForm.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "clearfix pt-md-3 pt-2", attrs: { id: "customerRegister" } },
    [
      _vm.mode === "update"
        ? _c("verification", {
            attrs: { action: "update" },
            on: { update: _vm.updateCustomer }
          })
        : _vm._e(),
      _vm._v(" "),
      (_vm.newCustomer.id && _vm.mode === "update") || _vm.mode === "register"
        ? _c("div", { staticClass: "card" }, [
            _c(
              "ul",
              { staticClass: "nav nav-tabs justify-content-center bg-default" },
              [
                _c("h6", [
                  _vm._v(_vm._s(_vm._f("capitalize")(_vm.mode)) + " Customer")
                ])
              ]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "card-body pl-4 pr-4 clearfix" }, [
              _c(
                "form",
                {
                  on: {
                    submit: function($event) {
                      $event.preventDefault()
                      return _vm.register($event)
                    }
                  }
                },
                [
                  _vm.mode === "register"
                    ? _c("div", [
                        _c("h5", [_vm._v("Employee Details")]),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass:
                              "form-group col-md-4 px-md-3 px-1 float-left"
                          },
                          [
                            _c("label", [_vm._v("Employee Name")]),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.newCustomer.employee_name,
                                  expression: "newCustomer.employee_name"
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
                                "data-vv-name": "employee name",
                                disabled: "",
                                name: "emp_name",
                                placeholder: "Enter Employee name here",
                                type: "text"
                              },
                              domProps: {
                                value: _vm.newCustomer.employee_name
                              },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.newCustomer,
                                    "employee_name",
                                    $event.target.value
                                  )
                                }
                              }
                            }),
                            _vm._v(" "),
                            _vm.errors.first("emp_name")
                              ? _c("small", [
                                  _vm._v(_vm._s(_vm.errors.first("emp_name")))
                                ])
                              : _vm._e()
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass:
                              "form-group col-md-4 px-md-3 px-1 float-left"
                          },
                          [
                            _c("label", [_vm._v("Employee ID (Staff ID)")]),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.newCustomer.employee_id,
                                  expression: "newCustomer.employee_id"
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
                                "data-vv-as": "employee phone number",
                                disabled: "",
                                name: "employee_id",
                                placeholder: "Enter Employee number here",
                                type: "text"
                              },
                              domProps: { value: _vm.newCustomer.employee_id },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.newCustomer,
                                    "employee_id",
                                    $event.target.value
                                  )
                                }
                              }
                            }),
                            _vm._v(" "),
                            _vm.errors.first("employee_id")
                              ? _c("small", [
                                  _vm._v(
                                    _vm._s(_vm.errors.first("employee_id"))
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
                              "form-group col-md-4 px-md-3 px-1 float-left"
                          },
                          [
                            _c("label", [_vm._v("Date")]),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.newCustomer.date_of_registration,
                                  expression: "newCustomer.date_of_registration"
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
                                "data-vv-as": "Date of Registration",
                                disabled: "",
                                name: "date_of_registration",
                                type: "date"
                              },
                              domProps: {
                                value: _vm.newCustomer.date_of_registration
                              },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.newCustomer,
                                    "date_of_registration",
                                    $event.target.value
                                  )
                                }
                              }
                            }),
                            _vm._v(" "),
                            _vm.errors.first("date_of_registration")
                              ? _c("small", [
                                  _vm._v(
                                    _vm._s(
                                      _vm.errors.first("date_of_registration")
                                    )
                                  )
                                ])
                              : _vm._e()
                          ]
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "spaceAfter" }),
                        _vm._v(" "),
                        _c("h5", [_vm._v("Customer Personal Details")]),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass:
                              "form-group col-md-4 px-md-3 px-1 float-left"
                          },
                          [
                            _c("label", [_vm._v("First Name")]),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.newCustomer.first_name,
                                  expression: "newCustomer.first_name"
                                },
                                {
                                  name: "validate",
                                  rawName: "v-validate",
                                  value: "required|max:25",
                                  expression: "'required|max:25'"
                                }
                              ],
                              staticClass: "form-control",
                              attrs: {
                                "data-vv-as": "first name",
                                name: "first_name",
                                placeholder: "Enter First name here..",
                                type: "text"
                              },
                              domProps: { value: _vm.newCustomer.first_name },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.newCustomer,
                                    "first_name",
                                    $event.target.value
                                  )
                                }
                              }
                            }),
                            _vm._v(" "),
                            _vm.errors.first("first_name")
                              ? _c("small", [
                                  _vm._v(_vm._s(_vm.errors.first("first_name")))
                                ])
                              : _vm._e()
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass:
                              "form-group col-md-4 px-md-3 px-1 float-left"
                          },
                          [
                            _c("label", [_vm._v("Middle Name")]),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.newCustomer.middle_name,
                                  expression: "newCustomer.middle_name"
                                }
                              ],
                              staticClass: "form-control",
                              attrs: {
                                placeholder: "Enter Middle name here..",
                                type: "text"
                              },
                              domProps: { value: _vm.newCustomer.middle_name },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.newCustomer,
                                    "middle_name",
                                    $event.target.value
                                  )
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
                              "form-group col-md-4 px-md-3 px-1 float-left"
                          },
                          [
                            _c("label", [_vm._v("Last Name")]),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.newCustomer.last_name,
                                  expression: "newCustomer.last_name"
                                },
                                {
                                  name: "validate",
                                  rawName: "v-validate",
                                  value: "required|max:25",
                                  expression: "'required|max:25'"
                                }
                              ],
                              staticClass: "form-control",
                              attrs: {
                                "data-vv-as": "last name",
                                name: "last_name",
                                placeholder: "Enter Last name here..",
                                type: "text"
                              },
                              domProps: { value: _vm.newCustomer.last_name },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.newCustomer,
                                    "last_name",
                                    $event.target.value
                                  )
                                }
                              }
                            }),
                            _vm._v(" "),
                            _vm.errors.first("last_name")
                              ? _c("small", [
                                  _vm._v(_vm._s(_vm.errors.first("last_name")))
                                ])
                              : _vm._e()
                          ]
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "spaceAfter" }),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass:
                              "form-group col-md-4 px-md-3 px-1 float-left"
                          },
                          [
                            _c("label", { staticClass: "w-100 float-left" }, [
                              _vm._v("Gender")
                            ]),
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
                                        value: _vm.newCustomer.gender,
                                        expression: "newCustomer.gender"
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
                                      checked: _vm._q(
                                        _vm.newCustomer.gender,
                                        sex
                                      )
                                    },
                                    on: {
                                      change: function($event) {
                                        _vm.$set(_vm.newCustomer, "gender", sex)
                                      }
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("label", { attrs: { for: sex } }, [
                                    _vm._v(_vm._s(sex))
                                  ])
                                ]
                              )
                            }),
                            _vm._v(" "),
                            _vm.errors.first("gender")
                              ? _c("small", [
                                  _vm._v(_vm._s(_vm.errors.first("gender")))
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
                              "form-group col-md-8 px-md-3 px-1 float-left"
                          },
                          [
                            _c("label", [_vm._v("Phone Number")]),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.newCustomer.telephone,
                                  expression: "newCustomer.telephone"
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
                                name: "telephone",
                                placeholder: "Enter Phone number here..",
                                type: "tel"
                              },
                              domProps: { value: _vm.newCustomer.telephone },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.newCustomer,
                                    "telephone",
                                    $event.target.value
                                  )
                                }
                              }
                            }),
                            _vm._v(" "),
                            _vm.errors.first("telephone")
                              ? _c("small", [
                                  _vm._v(_vm._s(_vm.errors.first("telephone")))
                                ])
                              : _vm._e(),
                            _vm._v(" "),
                            _vm.error.telephone
                              ? _c("small", [
                                  _vm._v(_vm._s(_vm.error.telephone[0]))
                                ])
                              : _vm._e()
                          ]
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "spaceAfter" })
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.mode === "register" ||
                  _vm.$store.getters.auth("DVAAccess")
                    ? _c("div", [
                        _c("h5", [_vm._v("Address")]),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass:
                              "form-group col-md-4 px-md-3 px-1 float-left"
                          },
                          [
                            _c("label", [_vm._v("Street Name")]),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.newCustomer.add_street,
                                  expression: "newCustomer.add_street"
                                },
                                {
                                  name: "validate",
                                  rawName: "v-validate",
                                  value: "required|max:25",
                                  expression: "'required|max:25'"
                                }
                              ],
                              staticClass: "form-control",
                              attrs: {
                                "data-vv-as": "street name",
                                name: "street_name",
                                placeholder: "Enter street name here..",
                                type: "text"
                              },
                              domProps: { value: _vm.newCustomer.add_street },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.newCustomer,
                                    "add_street",
                                    $event.target.value
                                  )
                                }
                              }
                            }),
                            _vm._v(" "),
                            _vm.errors.first("street_name")
                              ? _c("small", [
                                  _vm._v(
                                    _vm._s(_vm.errors.first("street_name"))
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
                              "form-group col-md-4 px-md-3 px-1 float-left"
                          },
                          [
                            _c("label", [_vm._v("House Number")]),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.newCustomer.add_houseno,
                                  expression: "newCustomer.add_houseno"
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
                                "data-vv-as": "house number",
                                name: "house_number",
                                placeholder: "Enter House number here..",
                                type: "text"
                              },
                              domProps: { value: _vm.newCustomer.add_houseno },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.newCustomer,
                                    "add_houseno",
                                    $event.target.value
                                  )
                                }
                              }
                            }),
                            _vm._v(" "),
                            _vm.errors.first("house_number")
                              ? _c("small", [
                                  _vm._v(
                                    _vm._s(_vm.errors.first("house_number"))
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
                              "form-group col-md-4 px-md-3 px-1 float-left"
                          },
                          [
                            _c("label", [_vm._v("Nearest Bus Stop")]),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.newCustomer.add_nbstop,
                                  expression: "newCustomer.add_nbstop"
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
                                "data-vv-as": "nearest bus stop",
                                name: "nearest_bus_stop",
                                placeholder: "Enter nearest bus stop here..",
                                type: "text"
                              },
                              domProps: { value: _vm.newCustomer.add_nbstop },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.newCustomer,
                                    "add_nbstop",
                                    $event.target.value
                                  )
                                }
                              }
                            }),
                            _vm._v(" "),
                            _vm.errors.first("nearest_bus_stop")
                              ? _c("small", [
                                  _vm._v(
                                    _vm._s(_vm.errors.first("nearest_bus_stop"))
                                  )
                                ])
                              : _vm._e()
                          ]
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "spaceAfter" }),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass:
                              "form-group col-md-4 px-md-3 px-1 float-left"
                          },
                          [
                            _c("label", [_vm._v("Area")]),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.newCustomer.area_address,
                                  expression: "newCustomer.area_address"
                                },
                                {
                                  name: "validate",
                                  rawName: "v-validate",
                                  value: "required|max:25",
                                  expression: "'required|max:25'"
                                }
                              ],
                              staticClass: "form-control",
                              attrs: {
                                name: "area",
                                placeholder: "Enter area here..",
                                type: "text"
                              },
                              domProps: { value: _vm.newCustomer.area_address },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.newCustomer,
                                    "area_address",
                                    $event.target.value
                                  )
                                }
                              }
                            }),
                            _vm._v(" "),
                            _vm.errors.first("area")
                              ? _c("small", [
                                  _vm._v(_vm._s(_vm.errors.first("area")))
                                ])
                              : _vm._e()
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass:
                              "form-group col-md-4 px-md-3 px-1 float-left"
                          },
                          [
                            _c("label", [_vm._v("City")]),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.newCustomer.city,
                                  expression: "newCustomer.city"
                                },
                                {
                                  name: "validate",
                                  rawName: "v-validate",
                                  value: "required|max:25",
                                  expression: "'required|max:25'"
                                }
                              ],
                              staticClass: "form-control",
                              attrs: {
                                name: "city",
                                placeholder: "Enter city here..",
                                type: "text"
                              },
                              domProps: { value: _vm.newCustomer.city },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.newCustomer,
                                    "city",
                                    $event.target.value
                                  )
                                }
                              }
                            }),
                            _vm._v(" "),
                            _vm.errors.first("city")
                              ? _c("small", [
                                  _vm._v(_vm._s(_vm.errors.first("city")))
                                ])
                              : _vm._e()
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass:
                              "form-group col-md-4 px-md-3 px-1 float-left"
                          },
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
                                    value: _vm.newCustomer.state,
                                    expression: "newCustomer.state"
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
                                  name: "state"
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
                                      _vm.newCustomer,
                                      "state",
                                      $event.target.multiple
                                        ? $$selectedVal
                                        : $$selectedVal[0]
                                    )
                                  }
                                }
                              },
                              [
                                _c("option", { attrs: { value: "" } }, [
                                  _vm._v("select state")
                                ]),
                                _vm._v(" "),
                                _vm._l(_vm.states, function(state) {
                                  return _c(
                                    "option",
                                    { domProps: { value: state.name } },
                                    [_vm._v(_vm._s(state.name))]
                                  )
                                })
                              ],
                              2
                            ),
                            _vm._v(" "),
                            _vm.errors.first("state")
                              ? _c("small", [
                                  _vm._v(_vm._s(_vm.errors.first("state")))
                                ])
                              : _vm._e()
                          ]
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "spaceAfter" }),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass:
                              "form-group col-md-12 px-md-3 px-1 float-left"
                          },
                          [
                            _c("label", [_vm._v("Describe Location")]),
                            _vm._v(" "),
                            _c("textarea", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value:
                                    _vm.newCustomer.add_addinfo_description,
                                  expression:
                                    "newCustomer.add_addinfo_description"
                                }
                              ],
                              staticClass: "form-control col-sm-12",
                              attrs: {
                                placeholder: "Describe the Location",
                                rows: "1"
                              },
                              domProps: {
                                value: _vm.newCustomer.add_addinfo_description
                              },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.newCustomer,
                                    "add_addinfo_description",
                                    $event.target.value
                                  )
                                }
                              }
                            })
                          ]
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "spaceAfter" })
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.mode === "register"
                    ? _c(
                        "div",
                        [
                          _c("h5", [_vm._v("Others")]),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass:
                                "form-group col-md-2 px-md-3 px-1 float-left"
                            },
                            [
                              _c("label", [_vm._v("Date of Birth")]),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.newCustomer.date_of_birth,
                                    expression: "newCustomer.date_of_birth"
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
                                domProps: {
                                  value: _vm.newCustomer.date_of_birth
                                },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.newCustomer,
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
                                : _vm._e()
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass:
                                "form-group col-md-8 px-md-3 px-1 float-left"
                            },
                            [
                              _c(
                                "label",
                                { staticClass: "w-100 float-left pl-1" },
                                [_vm._v("Civil Status")]
                              ),
                              _vm._v(" "),
                              _vm._l(_vm.civilStatus, function(status) {
                                return _c(
                                  "div",
                                  { staticClass: "radio pl-1 pr-3 float-left" },
                                  [
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.newCustomer.civil_status,
                                          expression: "newCustomer.civil_status"
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
                                        "data-vv-as": "civil status",
                                        name: "civil_status",
                                        type: "radio"
                                      },
                                      domProps: {
                                        value: status,
                                        checked: _vm._q(
                                          _vm.newCustomer.civil_status,
                                          status
                                        )
                                      },
                                      on: {
                                        change: function($event) {
                                          _vm.$set(
                                            _vm.newCustomer,
                                            "civil_status",
                                            status
                                          )
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
                              _vm.errors.first("civil_status")
                                ? _c("small", [
                                    _vm._v(
                                      _vm._s(_vm.errors.first("civil_status"))
                                    )
                                  ])
                                : _vm._e()
                            ],
                            2
                          ),
                          _vm._v(" "),
                          !(_vm.newCustomer.civil_status === "single")
                            ? _c(
                                "div",
                                {
                                  staticClass:
                                    "form-group col-md-2 px-md-3 px-1 float-left"
                                },
                                [
                                  _c("label", [_vm._v("Years together")]),
                                  _vm._v(" "),
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.newCustomer.year_together,
                                        expression: "newCustomer.year_together"
                                      },
                                      {
                                        name: "validate",
                                        rawName: "v-validate",
                                        value: "required|numeric|max:2",
                                        expression: "'required|numeric|max:2'"
                                      }
                                    ],
                                    staticClass: "form-control",
                                    attrs: {
                                      "data-vv-as": "years together",
                                      name: "years_together",
                                      placeholder: "years together..",
                                      type: "number"
                                    },
                                    domProps: {
                                      value: _vm.newCustomer.year_together
                                    },
                                    on: {
                                      input: function($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          _vm.newCustomer,
                                          "year_together",
                                          $event.target.value
                                        )
                                      }
                                    }
                                  }),
                                  _vm._v(" "),
                                  _vm.errors.first("years_together")
                                    ? _c("small", [
                                        _vm._v(
                                          _vm._s(
                                            _vm.errors.first("years_together")
                                          )
                                        )
                                      ])
                                    : _vm._e()
                                ]
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          _c("div", { staticClass: "spaceAfter" }),
                          _vm._v(" "),
                          _c("h5", [_vm._v("Household Details")]),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass:
                                "form-group col-md-5 px-md-3 px-1 float-left"
                            },
                            [
                              _c(
                                "label",
                                { staticClass: "w-100 float-left pl-1" },
                                [_vm._v("Type of Home")]
                              ),
                              _vm._v(" "),
                              _vm._l(_vm.typesOfHome, function(typeOfHome) {
                                return _c(
                                  "div",
                                  { staticClass: "radio pl-1 pr-3 float-left" },
                                  [
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.newCustomer.type_of_home,
                                          expression: "newCustomer.type_of_home"
                                        },
                                        {
                                          name: "validate",
                                          rawName: "v-validate",
                                          value: "required",
                                          expression: "'required'"
                                        }
                                      ],
                                      attrs: {
                                        id: typeOfHome,
                                        "data-vv-as": "type of home",
                                        name: "typeOfHome",
                                        type: "radio"
                                      },
                                      domProps: {
                                        value: typeOfHome,
                                        checked: _vm._q(
                                          _vm.newCustomer.type_of_home,
                                          typeOfHome
                                        )
                                      },
                                      on: {
                                        change: function($event) {
                                          _vm.$set(
                                            _vm.newCustomer,
                                            "type_of_home",
                                            typeOfHome
                                          )
                                        }
                                      }
                                    }),
                                    _vm._v(" "),
                                    _c(
                                      "label",
                                      { attrs: { for: typeOfHome } },
                                      [_vm._v(_vm._s(typeOfHome))]
                                    )
                                  ]
                                )
                              }),
                              _vm._v(" "),
                              _vm.errors.first("typeOfHome")
                                ? _c("small", [
                                    _vm._v(
                                      _vm._s(_vm.errors.first("typeOfHome"))
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
                                "form-group col-md-5 px-md-3 px-1 float-left"
                            },
                            [
                              _c(
                                "label",
                                { staticClass: "w-100 float-left pl-1" },
                                [_vm._v("Number of Rooms")]
                              ),
                              _vm._v(" "),
                              _vm._l(_vm.noOfRooms, function(noOfRoom) {
                                return _c(
                                  "div",
                                  { staticClass: "radio pl-1 pr-3 float-left" },
                                  [
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.newCustomer.no_of_rooms,
                                          expression: "newCustomer.no_of_rooms"
                                        },
                                        {
                                          name: "validate",
                                          rawName: "v-validate",
                                          value: "required",
                                          expression: "'required'"
                                        }
                                      ],
                                      attrs: {
                                        id: noOfRoom,
                                        "data-vv-as": "number of rooms",
                                        name: "noOfRoom",
                                        type: "radio"
                                      },
                                      domProps: {
                                        value: noOfRoom,
                                        checked: _vm._q(
                                          _vm.newCustomer.no_of_rooms,
                                          noOfRoom
                                        )
                                      },
                                      on: {
                                        change: function($event) {
                                          _vm.$set(
                                            _vm.newCustomer,
                                            "no_of_rooms",
                                            noOfRoom
                                          )
                                        }
                                      }
                                    }),
                                    _vm._v(" "),
                                    _c("label", { attrs: { for: noOfRoom } }, [
                                      _vm._v(_vm._s(noOfRoom))
                                    ])
                                  ]
                                )
                              }),
                              _vm._v(" "),
                              _vm.errors.first("noOfRoom")
                                ? _c("small", [
                                    _vm._v(_vm._s(_vm.errors.first("noOfRoom")))
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
                                "form-group col-md-2 px-md-3 px-1 float-left"
                            },
                            [
                              _c("label", [_vm._v("Duration of Residence")]),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value:
                                      _vm.newCustomer.duration_of_residence,
                                    expression:
                                      "newCustomer.duration_of_residence"
                                  },
                                  {
                                    name: "validate",
                                    rawName: "v-validate",
                                    value: "required|numeric|max:2",
                                    expression: "'required|numeric|max:2'"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: {
                                  "data-vv-as": "duration of residence",
                                  name: "duration_of_residence",
                                  placeholder: "Duration of residence..",
                                  type: "number"
                                },
                                domProps: {
                                  value: _vm.newCustomer.duration_of_residence
                                },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.newCustomer,
                                      "duration_of_residence",
                                      $event.target.value
                                    )
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _vm.errors.first("duration_of_residence")
                                ? _c("small", [
                                    _vm._v(
                                      _vm._s(
                                        _vm.errors.first(
                                          "duration_of_residence"
                                        )
                                      )
                                    )
                                  ])
                                : _vm._e()
                            ]
                          ),
                          _vm._v(" "),
                          _c("div", { staticClass: "spaceAfter" }),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass:
                                "form-group col-md-6 px-md-3 px-1 float-left"
                            },
                            [
                              _c("label", [
                                _vm._v(
                                  "How many people live in your household?"
                                )
                              ]),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.newCustomer.people_in_household,
                                    expression:
                                      "newCustomer.people_in_household"
                                  },
                                  {
                                    name: "validate",
                                    rawName: "v-validate",
                                    value: "required|numeric|max:2",
                                    expression: "'required|numeric|max:2'"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: {
                                  "data-vv-as": "number in household",
                                  name: "number_in_household",
                                  placeholder: "Enter number here..",
                                  type: "number"
                                },
                                domProps: {
                                  value: _vm.newCustomer.people_in_household
                                },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.newCustomer,
                                      "people_in_household",
                                      $event.target.value
                                    )
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _vm.errors.first("number_in_household")
                                ? _c("small", [
                                    _vm._v(
                                      _vm._s(
                                        _vm.errors.first("number_in_household")
                                      )
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
                                "form-group col-md-6 px-md-3 px-1 float-left"
                            },
                            [
                              _c("label", [_vm._v("How many work?")]),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.newCustomer.number_of_work,
                                    expression: "newCustomer.number_of_work"
                                  },
                                  {
                                    name: "validate",
                                    rawName: "v-validate",
                                    value: "required|numeric|max:2",
                                    expression: "'required|numeric|max:2'"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: {
                                  "data-vv-as": "how many work",
                                  name: "how_many_work",
                                  placeholder: "Enter number here..",
                                  type: "number"
                                },
                                domProps: {
                                  value: _vm.newCustomer.number_of_work
                                },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.newCustomer,
                                      "number_of_work",
                                      $event.target.value
                                    )
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _vm.errors.first("how_many_work")
                                ? _c("small", [
                                    _vm._v(
                                      _vm._s(_vm.errors.first("how_many_work"))
                                    )
                                  ])
                                : _vm._e()
                            ]
                          ),
                          _vm._v(" "),
                          _c("div", { staticClass: "spaceAfter" }),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass:
                                "form-group col-md-6 px-md-3 px-1 float-left"
                            },
                            [
                              _c("label", [
                                _vm._v("How many people depend on you?")
                              ]),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.newCustomer.depend_on_you,
                                    expression: "newCustomer.depend_on_you"
                                  },
                                  {
                                    name: "validate",
                                    rawName: "v-validate",
                                    value: "required|numeric|max:2",
                                    expression: "'required|numeric|max:2'"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: {
                                  "data-vv-as": "no depend on you",
                                  name: "no_depend_on_you",
                                  placeholder: "Enter number here..",
                                  type: "number"
                                },
                                domProps: {
                                  value: _vm.newCustomer.depend_on_you
                                },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.newCustomer,
                                      "depend_on_you",
                                      $event.target.value
                                    )
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _vm.errors.first("no_depend_on_you")
                                ? _c("small", [
                                    _vm._v(
                                      _vm._s(
                                        _vm.errors.first("no_depend_on_you")
                                      )
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
                                "form-group col-md-6 px-md-3 px-1 float-left"
                            },
                            [
                              _c("label", [_vm._v("Number of Children")]),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.newCustomer.number_of_children,
                                    expression: "newCustomer.number_of_children"
                                  },
                                  {
                                    name: "validate",
                                    rawName: "v-validate",
                                    value: "required|numeric|max:2",
                                    expression: "'required|numeric|max:2'"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: {
                                  "data-vv-as": "number of children",
                                  name: "number_of_children",
                                  placeholder: "Enter number here..",
                                  type: "number"
                                },
                                domProps: {
                                  value: _vm.newCustomer.number_of_children
                                },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.newCustomer,
                                      "number_of_children",
                                      $event.target.value
                                    )
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _vm.errors.first("number_of_children")
                                ? _c("small", [
                                    _vm._v(
                                      _vm._s(
                                        _vm.errors.first("number_of_children")
                                      )
                                    )
                                  ])
                                : _vm._e()
                            ]
                          ),
                          _vm._v(" "),
                          _c("div", { staticClass: "spaceAfter" }),
                          _vm._v(" "),
                          _c("h5", [_vm._v("Education Details")]),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass:
                                "form-group col-md-12 px-md-3 px-1 float-left"
                            },
                            [
                              _c(
                                "label",
                                { staticClass: "w-100 float-left pl-1" },
                                [_vm._v("Highest Level of Education")]
                              ),
                              _vm._v(" "),
                              _vm._l(_vm.highestLevelOfEdu, function(
                                highestLevel
                              ) {
                                return _c(
                                  "div",
                                  { staticClass: "radio pl-1 pr-3 float-left" },
                                  [
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value:
                                            _vm.newCustomer.level_of_education,
                                          expression:
                                            "newCustomer.level_of_education"
                                        },
                                        {
                                          name: "validate",
                                          rawName: "v-validate",
                                          value: "required",
                                          expression: "'required'"
                                        }
                                      ],
                                      attrs: {
                                        id: highestLevel,
                                        "data-vv-as":
                                          "highest level of education",
                                        name: "highestLevel",
                                        type: "radio"
                                      },
                                      domProps: {
                                        value: highestLevel,
                                        checked: _vm._q(
                                          _vm.newCustomer.level_of_education,
                                          highestLevel
                                        )
                                      },
                                      on: {
                                        change: function($event) {
                                          _vm.$set(
                                            _vm.newCustomer,
                                            "level_of_education",
                                            highestLevel
                                          )
                                        }
                                      }
                                    }),
                                    _vm._v(" "),
                                    _c(
                                      "label",
                                      { attrs: { for: highestLevel } },
                                      [_vm._v(_vm._s(highestLevel))]
                                    )
                                  ]
                                )
                              }),
                              _vm._v(" "),
                              _vm.errors.first("highestLevel")
                                ? _c("small", [
                                    _vm._v(
                                      _vm._s(_vm.errors.first("highestLevel"))
                                    )
                                  ])
                                : _vm._e()
                            ],
                            2
                          ),
                          _vm._v(" "),
                          _c("div", { staticClass: "spaceAfter" }),
                          _vm._v(" "),
                          _c("h5", [_vm._v("Time Available for Visit")]),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "form-group col-md-6 float-left" },
                            [
                              _c("label", [_vm._v("From")]),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.newCustomer.visit_hour_from,
                                    expression: "newCustomer.visit_hour_from"
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
                                  "data-vv-as": "time from",
                                  name: "time_from",
                                  type: "time"
                                },
                                domProps: {
                                  value: _vm.newCustomer.visit_hour_from
                                },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.newCustomer,
                                      "visit_hour_from",
                                      $event.target.value
                                    )
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _vm.errors.first("time_from")
                                ? _c("small", [
                                    _vm._v(
                                      _vm._s(_vm.errors.first("time_from"))
                                    )
                                  ])
                                : _vm._e()
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "form-group col-md-6 float-left" },
                            [
                              _c("label", [_vm._v("To:")]),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.newCustomer.visit_hour_to,
                                    expression: "newCustomer.visit_hour_to"
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
                                  "data-vv-as": "time to",
                                  name: "time_to",
                                  type: "time"
                                },
                                domProps: {
                                  value: _vm.newCustomer.visit_hour_to
                                },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.newCustomer,
                                      "visit_hour_to",
                                      $event.target.value
                                    )
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _vm.errors.first("time_to")
                                ? _c("small", [
                                    _vm._v(_vm._s(_vm.errors.first("time_to")))
                                  ])
                                : _vm._e()
                            ]
                          ),
                          _vm._v(" "),
                          _c("div", { staticClass: "spaceAfter" }),
                          _vm._v(" "),
                          _c("h5", [_vm._v("Additional Information")]),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass:
                                "form-group col-md-3 col-6 px-md-3 px-1 float-left"
                            },
                            [
                              _c(
                                "label",
                                { staticClass: "w-100 float-left pl-1" },
                                [_vm._v("Loan From other Institutions")]
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "radio pl-1 pr-3 float-left" },
                                [
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value:
                                          _vm.newCustomer.loan_from_institution,
                                        expression:
                                          "newCustomer.loan_from_institution"
                                      },
                                      {
                                        name: "validate",
                                        rawName: "v-validate",
                                        value: "required",
                                        expression: "'required'"
                                      }
                                    ],
                                    attrs: {
                                      "data-vv-as": "loan from other",
                                      id: "loanYes",
                                      name: "otherLoan",
                                      type: "radio",
                                      value: "yes"
                                    },
                                    domProps: {
                                      checked: _vm._q(
                                        _vm.newCustomer.loan_from_institution,
                                        "yes"
                                      )
                                    },
                                    on: {
                                      change: function($event) {
                                        _vm.$set(
                                          _vm.newCustomer,
                                          "loan_from_institution",
                                          "yes"
                                        )
                                      }
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("label", { attrs: { for: "loanYes" } }, [
                                    _vm._v("Yes")
                                  ])
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "radio pl-1 pr-3 float-left" },
                                [
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value:
                                          _vm.newCustomer.loan_from_institution,
                                        expression:
                                          "newCustomer.loan_from_institution"
                                      }
                                    ],
                                    attrs: {
                                      id: "loanNo",
                                      name: "otherLoan",
                                      type: "radio",
                                      value: "no"
                                    },
                                    domProps: {
                                      checked: _vm._q(
                                        _vm.newCustomer.loan_from_institution,
                                        "no"
                                      )
                                    },
                                    on: {
                                      change: function($event) {
                                        _vm.$set(
                                          _vm.newCustomer,
                                          "loan_from_institution",
                                          "no"
                                        )
                                      }
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("label", { attrs: { for: "loanNo" } }, [
                                    _vm._v("No")
                                  ])
                                ]
                              ),
                              _vm._v(" "),
                              _vm.errors.first("otherLoan")
                                ? _c("small", [
                                    _vm._v(
                                      _vm._s(_vm.errors.first("otherLoan"))
                                    )
                                  ])
                                : _vm._e()
                            ]
                          ),
                          _vm._v(" "),
                          _c("transition", { attrs: { name: "fade" } }, [
                            _vm.newCustomer.loan_from_institution === "yes"
                              ? _c("span", [
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "form-group col-md-3 col-6 px-md-3 px-1 float-left"
                                    },
                                    [
                                      _c(
                                        "label",
                                        {
                                          staticClass: "w-100 float-left pl-1"
                                        },
                                        [_vm._v("Did you pay back?")]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "radio pl-1 pr-3 float-left"
                                        },
                                        [
                                          _c("input", {
                                            directives: [
                                              {
                                                name: "model",
                                                rawName: "v-model",
                                                value:
                                                  _vm.newCustomer
                                                    .did_you_pay_back,
                                                expression:
                                                  "newCustomer.did_you_pay_back"
                                              },
                                              {
                                                name: "validate",
                                                rawName: "v-validate",
                                                value: "required",
                                                expression: "'required'"
                                              }
                                            ],
                                            attrs: {
                                              "data-vv-as": "did you pay back",
                                              id: "payBackYes",
                                              name: "payBack",
                                              type: "radio",
                                              value: "yes"
                                            },
                                            domProps: {
                                              checked: _vm._q(
                                                _vm.newCustomer
                                                  .did_you_pay_back,
                                                "yes"
                                              )
                                            },
                                            on: {
                                              change: function($event) {
                                                _vm.$set(
                                                  _vm.newCustomer,
                                                  "did_you_pay_back",
                                                  "yes"
                                                )
                                              }
                                            }
                                          }),
                                          _vm._v(" "),
                                          _c(
                                            "label",
                                            { attrs: { for: "payBackYes" } },
                                            [_vm._v("Yes")]
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "radio pl-1 pr-3 float-left"
                                        },
                                        [
                                          _c("input", {
                                            directives: [
                                              {
                                                name: "model",
                                                rawName: "v-model",
                                                value:
                                                  _vm.newCustomer
                                                    .did_you_pay_back,
                                                expression:
                                                  "newCustomer.did_you_pay_back"
                                              }
                                            ],
                                            attrs: {
                                              id: "payBackNo",
                                              name: "payBack",
                                              type: "radio",
                                              value: "no"
                                            },
                                            domProps: {
                                              checked: _vm._q(
                                                _vm.newCustomer
                                                  .did_you_pay_back,
                                                "no"
                                              )
                                            },
                                            on: {
                                              change: function($event) {
                                                _vm.$set(
                                                  _vm.newCustomer,
                                                  "did_you_pay_back",
                                                  "no"
                                                )
                                              }
                                            }
                                          }),
                                          _vm._v(" "),
                                          _c(
                                            "label",
                                            { attrs: { for: "payBackNo" } },
                                            [_vm._v("No")]
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _vm.errors.first("payBack")
                                        ? _c("small", [
                                            _vm._v(
                                              _vm._s(
                                                _vm.errors.first("payBack")
                                              )
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
                                        "form-group col-md-3 col-12 px-md-3 px-1 float-left"
                                    },
                                    [
                                      _c("label", [_vm._v("Loan amount")]),
                                      _vm._v(" "),
                                      _c("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: _vm.newCustomer.loan_amount,
                                            expression:
                                              "newCustomer.loan_amount"
                                          }
                                        ],
                                        staticClass: "form-control",
                                        attrs: {
                                          placeholder: "Enter amount here..",
                                          type: "number"
                                        },
                                        domProps: {
                                          value: _vm.newCustomer.loan_amount
                                        },
                                        on: {
                                          input: function($event) {
                                            if ($event.target.composing) {
                                              return
                                            }
                                            _vm.$set(
                                              _vm.newCustomer,
                                              "loan_amount",
                                              $event.target.value
                                            )
                                          }
                                        }
                                      })
                                    ]
                                  )
                                ])
                              : _vm._e()
                          ]),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass:
                                "form-group col-md-3 col-12 px-md-3 px-1 float-left"
                            },
                            [
                              _c("label", [_vm._v("Email Address")]),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.newCustomer.email,
                                    expression: "newCustomer.email"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: {
                                  placeholder: "Enter email here",
                                  type: "email"
                                },
                                domProps: { value: _vm.newCustomer.email },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.newCustomer,
                                      "email",
                                      $event.target.value
                                    )
                                  }
                                }
                              })
                            ]
                          ),
                          _vm._v(" "),
                          _c("div", { staticClass: "spaceAfter" }),
                          _vm._v(" "),
                          _c("h5", [
                            _vm._v("Work Details - Select Occupation")
                          ]),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass:
                                "form-group col-md-12 px-md-3 px-1 float-left"
                            },
                            [
                              _c("br"),
                              _vm._v(" "),
                              _vm._l(_vm.occupations, function(occupation) {
                                return _c(
                                  "span",
                                  {
                                    staticClass: "badge badge-primary",
                                    class: { active: _vm.isActive },
                                    on: {
                                      click: function($event) {
                                        _vm.checkOccupation(occupation.id)
                                      }
                                    }
                                  },
                                  [_vm._v(_vm._s(occupation.jobType))]
                                )
                              }),
                              _vm._v("  \n\n            "),
                              _c("hr"),
                              _vm._v(" "),
                              _vm._l(_vm.occName, function(name) {
                                return _vm.isClick
                                  ? _c(
                                      "span",
                                      {
                                        staticClass: "badge badge-default",
                                        on: {
                                          click: function($event) {
                                            _vm.setOccupation(name)
                                          }
                                        }
                                      },
                                      [_vm._v(_vm._s(name))]
                                    )
                                  : _vm._e()
                              }),
                              _vm._v("\n             \n            "),
                              _vm.isOther && _vm.isClick
                                ? _c(
                                    "div",
                                    {
                                      staticClass:
                                        "col-md-3 col-12 px-1 float-left"
                                    },
                                    [
                                      _c("label", [
                                        _vm._v("Type in the occupation")
                                      ]),
                                      _vm._v(" "),
                                      _c("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: _vm.newCustomer.occupation,
                                            expression: "newCustomer.occupation"
                                          }
                                        ],
                                        staticClass: "form-control",
                                        attrs: {
                                          name: "occ",
                                          placeholder: "Enter occupation here",
                                          type: "text"
                                        },
                                        domProps: {
                                          value: _vm.newCustomer.occupation
                                        },
                                        on: {
                                          input: function($event) {
                                            if ($event.target.composing) {
                                              return
                                            }
                                            _vm.$set(
                                              _vm.newCustomer,
                                              "occupation",
                                              $event.target.value
                                            )
                                          }
                                        }
                                      })
                                    ]
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.errors.first("occ")
                                ? _c("small", [
                                    _vm._v(
                                      "\n                              " +
                                        _vm._s(_vm.errors.first("occ")) +
                                        "\n            "
                                    )
                                  ])
                                : _vm._e()
                            ],
                            2
                          ),
                          _vm._v(" "),
                          _c("transition", { attrs: { name: "fade" } }, [
                            _vm.newCustomer.employment_status === "formal"
                              ? _c("div", [
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "form-group col-md-6 px-md-3 px-1 float-left"
                                    },
                                    [
                                      _c("label", [
                                        _vm._v(
                                          "Phone number of working/business individual in household"
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _c("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value:
                                              _vm.newCustomer
                                                .working_individual_Phone_number,
                                            expression:
                                              "newCustomer.working_individual_Phone_number"
                                          },
                                          {
                                            name: "validate",
                                            rawName: "v-validate",
                                            value:
                                              "required|numeric|max:11|min:11",
                                            expression:
                                              "'required|numeric|max:11|min:11'"
                                          }
                                        ],
                                        staticClass: "form-control",
                                        attrs: {
                                          "data-vv-as": "office phone",
                                          name: "office_phone",
                                          placeholder:
                                            "Enter Phone Number here",
                                          type: "tel"
                                        },
                                        domProps: {
                                          value:
                                            _vm.newCustomer
                                              .working_individual_Phone_number
                                        },
                                        on: {
                                          input: function($event) {
                                            if ($event.target.composing) {
                                              return
                                            }
                                            _vm.$set(
                                              _vm.newCustomer,
                                              "working_individual_Phone_number",
                                              $event.target.value
                                            )
                                          }
                                        }
                                      }),
                                      _vm._v(" "),
                                      _vm.errors.first("office_phone")
                                        ? _c("small", [
                                            _vm._v(
                                              _vm._s(
                                                _vm.errors.first("office_phone")
                                              )
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
                                        "form-group col-md-6 px-md-3 px-1 float-left"
                                    },
                                    [
                                      _c("label", [
                                        _vm._v("Name of the company")
                                      ]),
                                      _vm._v(" "),
                                      _c("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value:
                                              _vm.newCustomer
                                                .name_of_company_or_business,
                                            expression:
                                              "newCustomer.name_of_company_or_business"
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
                                          "data-vv-as": "name of firm",
                                          name: "name_of_firm",
                                          placeholder:
                                            "Enter name of company here",
                                          type: "text"
                                        },
                                        domProps: {
                                          value:
                                            _vm.newCustomer
                                              .name_of_company_or_business
                                        },
                                        on: {
                                          input: function($event) {
                                            if ($event.target.composing) {
                                              return
                                            }
                                            _vm.$set(
                                              _vm.newCustomer,
                                              "name_of_company_or_business",
                                              $event.target.value
                                            )
                                          }
                                        }
                                      }),
                                      _vm._v(" "),
                                      _vm.errors.first("name_of_firm")
                                        ? _c("small", [
                                            _vm._v(
                                              _vm._s(
                                                _vm.errors.first("name_of_firm")
                                              )
                                            )
                                          ])
                                        : _vm._e()
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "spaceBetween" }),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "form-group col-md-6 px-md-3 px-1 float-left"
                                    },
                                    [
                                      _c("label", [_vm._v("Current Salary")]),
                                      _vm._v(" "),
                                      _c("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value:
                                              _vm.newCustomer
                                                .current_sal_or_business_income,
                                            expression:
                                              "newCustomer.current_sal_or_business_income"
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
                                          "data-vv-as": "current salary",
                                          name: "current_salary",
                                          placeholder:
                                            "Current Salary or Monthly income",
                                          type: "number"
                                        },
                                        domProps: {
                                          value:
                                            _vm.newCustomer
                                              .current_sal_or_business_income
                                        },
                                        on: {
                                          input: function($event) {
                                            if ($event.target.composing) {
                                              return
                                            }
                                            _vm.$set(
                                              _vm.newCustomer,
                                              "current_sal_or_business_income",
                                              $event.target.value
                                            )
                                          }
                                        }
                                      }),
                                      _vm._v(" "),
                                      _vm.errors.first("current_salary")
                                        ? _c("small", [
                                            _vm._v(
                                              _vm._s(
                                                _vm.errors.first(
                                                  "current_salary"
                                                )
                                              )
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
                                        "form-group col-md-6 px-md-3 px-1 float-left"
                                    },
                                    [
                                      _c("label", [
                                        _vm._v("Position/post in the company")
                                      ]),
                                      _vm._v(" "),
                                      _c("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value:
                                              _vm.newCustomer.post_in_company,
                                            expression:
                                              "newCustomer.post_in_company"
                                          }
                                        ],
                                        staticClass: "form-control",
                                        attrs: {
                                          placeholder:
                                            "Enter position/post here",
                                          type: "text"
                                        },
                                        domProps: {
                                          value: _vm.newCustomer.post_in_company
                                        },
                                        on: {
                                          input: function($event) {
                                            if ($event.target.composing) {
                                              return
                                            }
                                            _vm.$set(
                                              _vm.newCustomer,
                                              "post_in_company",
                                              $event.target.value
                                            )
                                          }
                                        }
                                      })
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "spaceBetween" }),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "form-group col-md-6 px-md-3 px-1 float-left"
                                    },
                                    [
                                      _c(
                                        "label",
                                        {
                                          staticClass: "w-100 float-left pl-1"
                                        },
                                        [_vm._v("How do you receive salary?")]
                                      ),
                                      _vm._v(" "),
                                      _vm._l(_vm.receiveIncomeMeans, function(
                                        means
                                      ) {
                                        return _c(
                                          "div",
                                          {
                                            staticClass:
                                              "radio pl-1 pr-3 float-left"
                                          },
                                          [
                                            _c("input", {
                                              directives: [
                                                {
                                                  name: "model",
                                                  rawName: "v-model",
                                                  value:
                                                    _vm.newCustomer
                                                      .receive_income_means,
                                                  expression:
                                                    "newCustomer.receive_income_means"
                                                },
                                                {
                                                  name: "validate",
                                                  rawName: "v-validate",
                                                  value: "required",
                                                  expression: "'required'"
                                                }
                                              ],
                                              attrs: {
                                                id: means,
                                                "data-vv-as": "income means",
                                                name: "means",
                                                type: "radio"
                                              },
                                              domProps: {
                                                value: means,
                                                checked: _vm._q(
                                                  _vm.newCustomer
                                                    .receive_income_means,
                                                  means
                                                )
                                              },
                                              on: {
                                                change: function($event) {
                                                  _vm.$set(
                                                    _vm.newCustomer,
                                                    "receive_income_means",
                                                    means
                                                  )
                                                }
                                              }
                                            }),
                                            _vm._v(" "),
                                            _c(
                                              "label",
                                              { attrs: { for: means } },
                                              [_vm._v(_vm._s(means))]
                                            )
                                          ]
                                        )
                                      }),
                                      _vm._v(" "),
                                      _vm.errors.first("means")
                                        ? _c("small", [
                                            _vm._v(
                                              _vm._s(_vm.errors.first("means"))
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
                                        "form-group col-md-6 px-md-3 px-1 float-left"
                                    },
                                    [
                                      _c(
                                        "label",
                                        {
                                          staticClass: "w-100 float-left pl-1"
                                        },
                                        [_vm._v("Payment Period")]
                                      ),
                                      _vm._v(" "),
                                      _vm._l(_vm.paymentPeriod, function(
                                        period
                                      ) {
                                        return _c(
                                          "div",
                                          {
                                            staticClass:
                                              "radio pl-1 pr-3 float-left"
                                          },
                                          [
                                            _c("input", {
                                              directives: [
                                                {
                                                  name: "model",
                                                  rawName: "v-model",
                                                  value:
                                                    _vm.newCustomer
                                                      .payment_period,
                                                  expression:
                                                    "newCustomer.payment_period"
                                                },
                                                {
                                                  name: "validate",
                                                  rawName: "v-validate",
                                                  value: "required",
                                                  expression: "'required'"
                                                }
                                              ],
                                              attrs: {
                                                id: period,
                                                "data-vv-as": "payment period",
                                                name: "period",
                                                type: "radio"
                                              },
                                              domProps: {
                                                value: period,
                                                checked: _vm._q(
                                                  _vm.newCustomer
                                                    .payment_period,
                                                  period
                                                )
                                              },
                                              on: {
                                                change: function($event) {
                                                  _vm.$set(
                                                    _vm.newCustomer,
                                                    "payment_period",
                                                    period
                                                  )
                                                }
                                              }
                                            }),
                                            _vm._v(" "),
                                            _c(
                                              "label",
                                              { attrs: { for: period } },
                                              [_vm._v(_vm._s(period))]
                                            )
                                          ]
                                        )
                                      }),
                                      _vm._v(" "),
                                      _vm.errors.first("period")
                                        ? _c("small", [
                                            _vm._v(
                                              _vm._s(_vm.errors.first("period"))
                                            )
                                          ])
                                        : _vm._e()
                                    ],
                                    2
                                  ),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "spaceBetween" }),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "form-group col-md-3 px-md-3 px-1 float-left"
                                    },
                                    [
                                      _c("label", [
                                        _vm._v("Duration in Current work")
                                      ]),
                                      _vm._v(" "),
                                      _c(
                                        "select",
                                        {
                                          directives: [
                                            {
                                              name: "model",
                                              rawName: "v-model",
                                              value:
                                                _vm.newCustomer
                                                  .years_of_existence_or_work_duration,
                                              expression:
                                                "newCustomer.years_of_existence_or_work_duration"
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
                                            "data-vv-as": "work duration",
                                            "data-vv-validate-on": "blur",
                                            name: "work_duration"
                                          },
                                          on: {
                                            change: function($event) {
                                              var $$selectedVal = Array.prototype.filter
                                                .call(
                                                  $event.target.options,
                                                  function(o) {
                                                    return o.selected
                                                  }
                                                )
                                                .map(function(o) {
                                                  var val =
                                                    "_value" in o
                                                      ? o._value
                                                      : o.value
                                                  return val
                                                })
                                              _vm.$set(
                                                _vm.newCustomer,
                                                "years_of_existence_or_work_duration",
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
                                            { attrs: { value: "" } },
                                            [_vm._v("select duration")]
                                          ),
                                          _vm._v(" "),
                                          _vm._l(_vm.durations, function(
                                            duration
                                          ) {
                                            return _c(
                                              "option",
                                              { domProps: { value: duration } },
                                              [_vm._v(_vm._s(duration))]
                                            )
                                          })
                                        ],
                                        2
                                      ),
                                      _vm._v(" "),
                                      _vm.errors.first("work_duration")
                                        ? _c("small", [
                                            _vm._v(
                                              _vm._s(
                                                _vm.errors.first(
                                                  "work_duration"
                                                )
                                              )
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
                                        "form-group col-md-9 px-md-3 px-1 float-left"
                                    },
                                    [
                                      _c(
                                        "label",
                                        { staticClass: "w-100 float-left" },
                                        [_vm._v("Days of Work")]
                                      ),
                                      _vm._v(" "),
                                      _vm._l(_vm.weekdays, function(day) {
                                        return _c(
                                          "div",
                                          {
                                            staticClass:
                                              "checkbox float-left pr-3"
                                          },
                                          [
                                            _c("input", {
                                              directives: [
                                                {
                                                  name: "model",
                                                  rawName: "v-model",
                                                  value:
                                                    _vm.newCustomer
                                                      .days_of_work,
                                                  expression:
                                                    "newCustomer.days_of_work"
                                                },
                                                {
                                                  name: "validate",
                                                  rawName: "v-validate",
                                                  value: "required",
                                                  expression: "'required'"
                                                }
                                              ],
                                              attrs: {
                                                id: day,
                                                "data-vv-as": "days of work",
                                                name: "days_of_work",
                                                type: "checkbox"
                                              },
                                              domProps: {
                                                value: day,
                                                checked: Array.isArray(
                                                  _vm.newCustomer.days_of_work
                                                )
                                                  ? _vm._i(
                                                      _vm.newCustomer
                                                        .days_of_work,
                                                      day
                                                    ) > -1
                                                  : _vm.newCustomer.days_of_work
                                              },
                                              on: {
                                                change: function($event) {
                                                  var $$a =
                                                      _vm.newCustomer
                                                        .days_of_work,
                                                    $$el = $event.target,
                                                    $$c = $$el.checked
                                                      ? true
                                                      : false
                                                  if (Array.isArray($$a)) {
                                                    var $$v = day,
                                                      $$i = _vm._i($$a, $$v)
                                                    if ($$el.checked) {
                                                      $$i < 0 &&
                                                        _vm.$set(
                                                          _vm.newCustomer,
                                                          "days_of_work",
                                                          $$a.concat([$$v])
                                                        )
                                                    } else {
                                                      $$i > -1 &&
                                                        _vm.$set(
                                                          _vm.newCustomer,
                                                          "days_of_work",
                                                          $$a
                                                            .slice(0, $$i)
                                                            .concat(
                                                              $$a.slice($$i + 1)
                                                            )
                                                        )
                                                    }
                                                  } else {
                                                    _vm.$set(
                                                      _vm.newCustomer,
                                                      "days_of_work",
                                                      $$c
                                                    )
                                                  }
                                                }
                                              }
                                            }),
                                            _vm._v(" "),
                                            _c(
                                              "label",
                                              { attrs: { for: day } },
                                              [_vm._v(_vm._s(day))]
                                            )
                                          ]
                                        )
                                      }),
                                      _vm._v(" "),
                                      _vm.errors.first("days_of_work")
                                        ? _c("small", [
                                            _vm._v(
                                              _vm._s(
                                                _vm.errors.first("days_of_work")
                                              )
                                            )
                                          ])
                                        : _vm._e()
                                    ],
                                    2
                                  ),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "spaceAfter" }),
                                  _vm._v(" "),
                                  _c("h5", [_vm._v("Address of Office")]),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "form-group col-md-4 px-md-3 px-1 float-left"
                                    },
                                    [
                                      _c("label", [_vm._v("Street Name")]),
                                      _vm._v(" "),
                                      _c("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value:
                                              _vm.newCustomer.comp_street_name,
                                            expression:
                                              "newCustomer.comp_street_name"
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
                                          "data-vv-as": "office street name",
                                          name: "office_street_name",
                                          placeholder: "Enter Street name here",
                                          type: "text"
                                        },
                                        domProps: {
                                          value:
                                            _vm.newCustomer.comp_street_name
                                        },
                                        on: {
                                          input: function($event) {
                                            if ($event.target.composing) {
                                              return
                                            }
                                            _vm.$set(
                                              _vm.newCustomer,
                                              "comp_street_name",
                                              $event.target.value
                                            )
                                          }
                                        }
                                      }),
                                      _vm._v(" "),
                                      _vm.errors.first("office_street_name")
                                        ? _c("small", [
                                            _vm._v(
                                              _vm._s(
                                                _vm.errors.first(
                                                  "office_street_name"
                                                )
                                              )
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
                                        "form-group col-md-4 px-md-3 px-1 float-left"
                                    },
                                    [
                                      _c("label", [
                                        _vm._v("Office Building Number")
                                      ]),
                                      _vm._v(" "),
                                      _c("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value:
                                              _vm.newCustomer.comp_house_no,
                                            expression:
                                              "newCustomer.comp_house_no"
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
                                          "data-vv-as":
                                            "office building number",
                                          name: "office_building_number",
                                          placeholder: "Enter Building Number",
                                          type: "text"
                                        },
                                        domProps: {
                                          value: _vm.newCustomer.comp_house_no
                                        },
                                        on: {
                                          input: function($event) {
                                            if ($event.target.composing) {
                                              return
                                            }
                                            _vm.$set(
                                              _vm.newCustomer,
                                              "comp_house_no",
                                              $event.target.value
                                            )
                                          }
                                        }
                                      }),
                                      _vm._v(" "),
                                      _vm.errors.first("office_building_number")
                                        ? _c("small", [
                                            _vm._v(
                                              _vm._s(
                                                _vm.errors.first(
                                                  "office_building_number"
                                                )
                                              )
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
                                        "form-group col-md-4 px-md-3 px-1 float-left"
                                    },
                                    [
                                      _c("label", [_vm._v("Nearest Bus Stop")]),
                                      _vm._v(" "),
                                      _c("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: _vm.newCustomer.cadd_nbstop,
                                            expression:
                                              "newCustomer.cadd_nbstop"
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
                                          "data-vv-as":
                                            "office nearest bus stop",
                                          name: "office_nearest_bus_stop",
                                          placeholder: "Enter nearest bus stop",
                                          type: "text"
                                        },
                                        domProps: {
                                          value: _vm.newCustomer.cadd_nbstop
                                        },
                                        on: {
                                          input: function($event) {
                                            if ($event.target.composing) {
                                              return
                                            }
                                            _vm.$set(
                                              _vm.newCustomer,
                                              "cadd_nbstop",
                                              $event.target.value
                                            )
                                          }
                                        }
                                      }),
                                      _vm._v(" "),
                                      _vm.errors.first(
                                        "office_nearest_bus_stop"
                                      )
                                        ? _c("small", [
                                            _vm._v(
                                              _vm._s(
                                                _vm.errors.first(
                                                  "office_nearest_bus_stop"
                                                )
                                              )
                                            )
                                          ])
                                        : _vm._e()
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "spaceBetween" }),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "form-group col-md-4 px-md-3 px-1 float-left"
                                    },
                                    [
                                      _c("label", [_vm._v("Area")]),
                                      _vm._v(" "),
                                      _c("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: _vm.newCustomer.comp_area,
                                            expression: "newCustomer.comp_area"
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
                                          "data-vv-as": "company area",
                                          name: "company_area",
                                          placeholder: "Enter area",
                                          type: "text"
                                        },
                                        domProps: {
                                          value: _vm.newCustomer.comp_area
                                        },
                                        on: {
                                          input: function($event) {
                                            if ($event.target.composing) {
                                              return
                                            }
                                            _vm.$set(
                                              _vm.newCustomer,
                                              "comp_area",
                                              $event.target.value
                                            )
                                          }
                                        }
                                      }),
                                      _vm._v(" "),
                                      _vm.errors.first("company_area")
                                        ? _c("small", [
                                            _vm._v(
                                              _vm._s(
                                                _vm.errors.first("company_area")
                                              )
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
                                        "form-group col-md-4 px-md-3 px-1 float-left"
                                    },
                                    [
                                      _c("label", [_vm._v("City")]),
                                      _vm._v(" "),
                                      _c("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: _vm.newCustomer.company_city,
                                            expression:
                                              "newCustomer.company_city"
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
                                          "data-vv-as": "company city",
                                          name: "company_city",
                                          placeholder: "Enter city",
                                          type: "text"
                                        },
                                        domProps: {
                                          value: _vm.newCustomer.company_city
                                        },
                                        on: {
                                          input: function($event) {
                                            if ($event.target.composing) {
                                              return
                                            }
                                            _vm.$set(
                                              _vm.newCustomer,
                                              "company_city",
                                              $event.target.value
                                            )
                                          }
                                        }
                                      }),
                                      _vm._v(" "),
                                      _vm.errors.first("company_city")
                                        ? _c("small", [
                                            _vm._v(
                                              _vm._s(
                                                _vm.errors.first("company_city")
                                              )
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
                                        "form-group col-md-4 px-md-3 px-1 float-left"
                                    },
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
                                              value:
                                                _vm.newCustomer.company_state,
                                              expression:
                                                "newCustomer.company_state"
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
                                            "data-vv-as": "company state",
                                            "data-vv-validate-on": "blur",
                                            name: "company_state"
                                          },
                                          on: {
                                            change: function($event) {
                                              var $$selectedVal = Array.prototype.filter
                                                .call(
                                                  $event.target.options,
                                                  function(o) {
                                                    return o.selected
                                                  }
                                                )
                                                .map(function(o) {
                                                  var val =
                                                    "_value" in o
                                                      ? o._value
                                                      : o.value
                                                  return val
                                                })
                                              _vm.$set(
                                                _vm.newCustomer,
                                                "company_state",
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
                                            { attrs: { value: "" } },
                                            [_vm._v("select state")]
                                          ),
                                          _vm._v(" "),
                                          _vm._l(_vm.states, function(state) {
                                            return _c(
                                              "option",
                                              {
                                                domProps: { value: state.name }
                                              },
                                              [_vm._v(_vm._s(state.name))]
                                            )
                                          })
                                        ],
                                        2
                                      ),
                                      _vm._v(" "),
                                      _vm.errors.first("company_state")
                                        ? _c("small", [
                                            _vm._v(
                                              _vm._s(
                                                _vm.errors.first(
                                                  "company_state"
                                                )
                                              )
                                            )
                                          ])
                                        : _vm._e()
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "spaceBetween" }),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "form-group col-md-4 px-md-3 px-1 float-left"
                                    },
                                    [
                                      _c("label", [_vm._v("Phone Number")]),
                                      _vm._v(" "),
                                      _c("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value:
                                              _vm.newCustomer.company_telno,
                                            expression:
                                              "newCustomer.company_telno"
                                          },
                                          {
                                            name: "validate",
                                            rawName: "v-validate",
                                            value:
                                              "required|numeric|max:11|min:11",
                                            expression:
                                              "'required|numeric|max:11|min:11'"
                                          }
                                        ],
                                        staticClass: "form-control",
                                        attrs: {
                                          "data-vv-as": "company phone number",
                                          name: "company_phone_number",
                                          placeholder: "Enter city",
                                          type: "tel"
                                        },
                                        domProps: {
                                          value: _vm.newCustomer.company_telno
                                        },
                                        on: {
                                          input: function($event) {
                                            if ($event.target.composing) {
                                              return
                                            }
                                            _vm.$set(
                                              _vm.newCustomer,
                                              "company_telno",
                                              $event.target.value
                                            )
                                          }
                                        }
                                      }),
                                      _vm._v(" "),
                                      _vm.errors.first("company_phone_number")
                                        ? _c("small", [
                                            _vm._v(
                                              _vm._s(
                                                _vm.errors.first(
                                                  "company_phone_number"
                                                )
                                              )
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
                                        "form-group col-md-4 px-md-3 px-1 float-left"
                                    },
                                    [
                                      _c("label", [
                                        _vm._v("Time Available for Visit: From")
                                      ]),
                                      _vm._v(" "),
                                      _c("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value:
                                              _vm.newCustomer.cvisit_hour_from,
                                            expression:
                                              "newCustomer.cvisit_hour_from"
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
                                          "data-vv-as": "available from",
                                          name: "available_from",
                                          type: "time"
                                        },
                                        domProps: {
                                          value:
                                            _vm.newCustomer.cvisit_hour_from
                                        },
                                        on: {
                                          input: function($event) {
                                            if ($event.target.composing) {
                                              return
                                            }
                                            _vm.$set(
                                              _vm.newCustomer,
                                              "cvisit_hour_from",
                                              $event.target.value
                                            )
                                          }
                                        }
                                      }),
                                      _vm._v(" "),
                                      _vm.errors.first("available_from")
                                        ? _c("small", [
                                            _vm._v(
                                              _vm._s(
                                                _vm.errors.first(
                                                  "available_from"
                                                )
                                              )
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
                                        "form-group col-md-4 px-md-3 px-1 float-left"
                                    },
                                    [
                                      _c("label", [_vm._v("To")]),
                                      _vm._v(" "),
                                      _c("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value:
                                              _vm.newCustomer.cvisit_hour_to,
                                            expression:
                                              "newCustomer.cvisit_hour_to"
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
                                          "data-vv-as": "available to",
                                          name: "available_to",
                                          type: "time"
                                        },
                                        domProps: {
                                          value: _vm.newCustomer.cvisit_hour_to
                                        },
                                        on: {
                                          input: function($event) {
                                            if ($event.target.composing) {
                                              return
                                            }
                                            _vm.$set(
                                              _vm.newCustomer,
                                              "cvisit_hour_to",
                                              $event.target.value
                                            )
                                          }
                                        }
                                      }),
                                      _vm._v(" "),
                                      _vm.errors.first("available_to")
                                        ? _c("small", [
                                            _vm._v(
                                              _vm._s(
                                                _vm.errors.first("available_to")
                                              )
                                            )
                                          ])
                                        : _vm._e()
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "spaceBetween" }),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "form-group col-md-12 px-md-3 px-1 float-left"
                                    },
                                    [
                                      _c("label", [
                                        _vm._v("Describe Location")
                                      ]),
                                      _vm._v(" "),
                                      _c("textarea", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: _vm.newCustomer.cadd_addinfo,
                                            expression:
                                              "newCustomer.cadd_addinfo"
                                          }
                                        ],
                                        staticClass: "form-control col-sm-12",
                                        attrs: {
                                          placeholder: "Describe the Location",
                                          rows: "1"
                                        },
                                        domProps: {
                                          value: _vm.newCustomer.cadd_addinfo
                                        },
                                        on: {
                                          input: function($event) {
                                            if ($event.target.composing) {
                                              return
                                            }
                                            _vm.$set(
                                              _vm.newCustomer,
                                              "cadd_addinfo",
                                              $event.target.value
                                            )
                                          }
                                        }
                                      })
                                    ]
                                  )
                                ])
                              : _vm.newCustomer.employment_status ===
                                "informal(business)"
                                ? _c("div", [
                                    _c(
                                      "div",
                                      {
                                        staticClass:
                                          "form-group col-md-6 px-md-3 px-1 float-left"
                                      },
                                      [
                                        _c("label", [
                                          _vm._v(
                                            "Phone number of working/business individual in household"
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("input", {
                                          directives: [
                                            {
                                              name: "model",
                                              rawName: "v-model",
                                              value:
                                                _vm.newCustomer
                                                  .working_individual_Phone_number,
                                              expression:
                                                "newCustomer.working_individual_Phone_number"
                                            },
                                            {
                                              name: "validate",
                                              rawName: "v-validate",
                                              value:
                                                "required|numeric|max:11|min:11",
                                              expression:
                                                "'required|numeric|max:11|min:11'"
                                            }
                                          ],
                                          staticClass: "form-control",
                                          attrs: {
                                            "data-vv-as": "office phone",
                                            name: "office_phone",
                                            placeholder:
                                              "Enter Phone Number here",
                                            type: "tel"
                                          },
                                          domProps: {
                                            value:
                                              _vm.newCustomer
                                                .working_individual_Phone_number
                                          },
                                          on: {
                                            input: function($event) {
                                              if ($event.target.composing) {
                                                return
                                              }
                                              _vm.$set(
                                                _vm.newCustomer,
                                                "working_individual_Phone_number",
                                                $event.target.value
                                              )
                                            }
                                          }
                                        }),
                                        _vm._v(" "),
                                        _vm.errors.first("office_phone")
                                          ? _c("small", [
                                              _vm._v(
                                                _vm._s(
                                                  _vm.errors.first(
                                                    "office_phone"
                                                  )
                                                )
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
                                          "form-group col-md-6 px-md-3 px-1 float-left"
                                      },
                                      [
                                        _c("label", [
                                          _vm._v("Name of the Business")
                                        ]),
                                        _vm._v(" "),
                                        _c("input", {
                                          directives: [
                                            {
                                              name: "model",
                                              rawName: "v-model",
                                              value:
                                                _vm.newCustomer
                                                  .name_of_company_or_business,
                                              expression:
                                                "newCustomer.name_of_company_or_business"
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
                                            "data-vv-as": "name of firm",
                                            name: "name_of_firm",
                                            placeholder:
                                              "Enter name of company here",
                                            type: "text"
                                          },
                                          domProps: {
                                            value:
                                              _vm.newCustomer
                                                .name_of_company_or_business
                                          },
                                          on: {
                                            input: function($event) {
                                              if ($event.target.composing) {
                                                return
                                              }
                                              _vm.$set(
                                                _vm.newCustomer,
                                                "name_of_company_or_business",
                                                $event.target.value
                                              )
                                            }
                                          }
                                        }),
                                        _vm._v(" "),
                                        _vm.errors.first("name_of_firm")
                                          ? _c("small", [
                                              _vm._v(
                                                _vm._s(
                                                  _vm.errors.first(
                                                    "name_of_firm"
                                                  )
                                                )
                                              )
                                            ])
                                          : _vm._e()
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "spaceBetween" }),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      {
                                        staticClass:
                                          "form-group col-md-6 px-md-3 px-1 float-left"
                                      },
                                      [
                                        _c("label", [_vm._v("Name of Market")]),
                                        _vm._v(" "),
                                        _c("input", {
                                          directives: [
                                            {
                                              name: "model",
                                              rawName: "v-model",
                                              value:
                                                _vm.newCustomer.market_name,
                                              expression:
                                                "newCustomer.market_name"
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
                                            "data-vv-as": "name of market",
                                            name: "market_name",
                                            placeholder: "name of market",
                                            type: "text"
                                          },
                                          domProps: {
                                            value: _vm.newCustomer.market_name
                                          },
                                          on: {
                                            input: function($event) {
                                              if ($event.target.composing) {
                                                return
                                              }
                                              _vm.$set(
                                                _vm.newCustomer,
                                                "market_name",
                                                $event.target.value
                                              )
                                            }
                                          }
                                        }),
                                        _vm._v(" "),
                                        _vm.errors.first("market_name")
                                          ? _c("small", [
                                              _vm._v(
                                                _vm._s(
                                                  _vm.errors.first(
                                                    "market_name"
                                                  )
                                                )
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
                                          "form-group col-md-6 px-md-3 px-1 float-left"
                                      },
                                      [
                                        _c("label", [
                                          _vm._v("Monthly Businesss income")
                                        ]),
                                        _vm._v(" "),
                                        _c("input", {
                                          directives: [
                                            {
                                              name: "model",
                                              rawName: "v-model",
                                              value:
                                                _vm.newCustomer
                                                  .current_sal_or_business_income,
                                              expression:
                                                "newCustomer.current_sal_or_business_income"
                                            },
                                            {
                                              name: "validate",
                                              rawName: "v-validate",
                                              value: "required|numeric",
                                              expression: "'required|numeric'"
                                            }
                                          ],
                                          staticClass: "form-control",
                                          attrs: {
                                            "data-vv-as": "current salary",
                                            name: "current_salary",
                                            placeholder:
                                              "Current Salary or Monthly income",
                                            type: "number"
                                          },
                                          domProps: {
                                            value:
                                              _vm.newCustomer
                                                .current_sal_or_business_income
                                          },
                                          on: {
                                            input: function($event) {
                                              if ($event.target.composing) {
                                                return
                                              }
                                              _vm.$set(
                                                _vm.newCustomer,
                                                "current_sal_or_business_income",
                                                $event.target.value
                                              )
                                            }
                                          }
                                        }),
                                        _vm._v(" "),
                                        _vm.errors.first("current_salary")
                                          ? _c("small", [
                                              _vm._v(
                                                _vm._s(
                                                  _vm.errors.first(
                                                    "current_salary"
                                                  )
                                                )
                                              )
                                            ])
                                          : _vm._e()
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "spaceBetween" }),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      {
                                        staticClass:
                                          "form-group col-md-6 px-md-3 px-1 float-left"
                                      },
                                      [
                                        _c("label", [_vm._v("Monthly Gains")]),
                                        _vm._v(" "),
                                        _c("input", {
                                          directives: [
                                            {
                                              name: "model",
                                              rawName: "v-model",
                                              value:
                                                _vm.newCustomer.monthly_gains,
                                              expression:
                                                "newCustomer.monthly_gains"
                                            },
                                            {
                                              name: "validate",
                                              rawName: "v-validate",
                                              value: "required|numeric",
                                              expression: "'required|numeric'"
                                            }
                                          ],
                                          staticClass: "form-control",
                                          attrs: {
                                            "data-vv-as": "monthly gains",
                                            name: "monthly_gains",
                                            placeholder: "monthly gains",
                                            type: "number"
                                          },
                                          domProps: {
                                            value: _vm.newCustomer.monthly_gains
                                          },
                                          on: {
                                            input: function($event) {
                                              if ($event.target.composing) {
                                                return
                                              }
                                              _vm.$set(
                                                _vm.newCustomer,
                                                "monthly_gains",
                                                $event.target.value
                                              )
                                            }
                                          }
                                        }),
                                        _vm._v(" "),
                                        _vm.errors.first("monthly_gains")
                                          ? _c("small", [
                                              _vm._v(
                                                _vm._s(
                                                  _vm.errors.first(
                                                    "monthly_gains"
                                                  )
                                                )
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
                                          "form-group col-md-6 px-md-3 px-1 float-left"
                                      },
                                      [
                                        _c("label", [
                                          _vm._v("Years of Existence")
                                        ]),
                                        _vm._v(" "),
                                        _c(
                                          "select",
                                          {
                                            directives: [
                                              {
                                                name: "model",
                                                rawName: "v-model",
                                                value:
                                                  _vm.newCustomer
                                                    .years_of_existence_or_work_duration,
                                                expression:
                                                  "newCustomer.years_of_existence_or_work_duration"
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
                                              "data-vv-as":
                                                "years of existence",
                                              "data-vv-validate-on": "blur",
                                              name: "work_duration"
                                            },
                                            on: {
                                              change: function($event) {
                                                var $$selectedVal = Array.prototype.filter
                                                  .call(
                                                    $event.target.options,
                                                    function(o) {
                                                      return o.selected
                                                    }
                                                  )
                                                  .map(function(o) {
                                                    var val =
                                                      "_value" in o
                                                        ? o._value
                                                        : o.value
                                                    return val
                                                  })
                                                _vm.$set(
                                                  _vm.newCustomer,
                                                  "years_of_existence_or_work_duration",
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
                                              { attrs: { value: "" } },
                                              [_vm._v("select duration")]
                                            ),
                                            _vm._v(" "),
                                            _vm._l(_vm.durations, function(
                                              duration
                                            ) {
                                              return _c(
                                                "option",
                                                {
                                                  domProps: { value: duration }
                                                },
                                                [_vm._v(_vm._s(duration))]
                                              )
                                            })
                                          ],
                                          2
                                        ),
                                        _vm._v(" "),
                                        _vm.errors.first("work_duration")
                                          ? _c("small", [
                                              _vm._v(
                                                _vm._s(
                                                  _vm.errors.first(
                                                    "work_duration"
                                                  )
                                                )
                                              )
                                            ])
                                          : _vm._e()
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "spaceBetween" }),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      {
                                        staticClass:
                                          "form-group col-md-3 col-6 px-md-3 px-1 float-left"
                                      },
                                      [
                                        _c(
                                          "label",
                                          {
                                            staticClass: "w-100 float-left pl-1"
                                          },
                                          [
                                            _vm._v(
                                              "Dou you have a bank account?"
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          {
                                            staticClass:
                                              "radio pl-1 pr-3 float-left"
                                          },
                                          [
                                            _c("input", {
                                              directives: [
                                                {
                                                  name: "model",
                                                  rawName: "v-model",
                                                  value:
                                                    _vm.newCustomer
                                                      .bank_account,
                                                  expression:
                                                    "newCustomer.bank_account"
                                                },
                                                {
                                                  name: "validate",
                                                  rawName: "v-validate",
                                                  value: "required",
                                                  expression: "'required'"
                                                }
                                              ],
                                              attrs: {
                                                "data-vv-as": "bank account",
                                                id: "bank_account_yes",
                                                name: "bank_account",
                                                type: "radio",
                                                value: "Yes"
                                              },
                                              domProps: {
                                                checked: _vm._q(
                                                  _vm.newCustomer.bank_account,
                                                  "Yes"
                                                )
                                              },
                                              on: {
                                                change: function($event) {
                                                  _vm.$set(
                                                    _vm.newCustomer,
                                                    "bank_account",
                                                    "Yes"
                                                  )
                                                }
                                              }
                                            }),
                                            _vm._v(" "),
                                            _c(
                                              "label",
                                              {
                                                attrs: {
                                                  for: "bank_account_yes"
                                                }
                                              },
                                              [_vm._v("Yes")]
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          {
                                            staticClass:
                                              "radio pl-1 pr-3 float-left"
                                          },
                                          [
                                            _c("input", {
                                              directives: [
                                                {
                                                  name: "model",
                                                  rawName: "v-model",
                                                  value:
                                                    _vm.newCustomer
                                                      .bank_account,
                                                  expression:
                                                    "newCustomer.bank_account"
                                                }
                                              ],
                                              attrs: {
                                                id: "bank_account_no",
                                                name: "bank_account",
                                                type: "radio",
                                                value: "No"
                                              },
                                              domProps: {
                                                checked: _vm._q(
                                                  _vm.newCustomer.bank_account,
                                                  "No"
                                                )
                                              },
                                              on: {
                                                change: function($event) {
                                                  _vm.$set(
                                                    _vm.newCustomer,
                                                    "bank_account",
                                                    "No"
                                                  )
                                                }
                                              }
                                            }),
                                            _vm._v(" "),
                                            _c(
                                              "label",
                                              {
                                                attrs: {
                                                  for: "bank_account_no"
                                                }
                                              },
                                              [_vm._v("No")]
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _vm.errors.first("bank_account")
                                          ? _c("small", [
                                              _vm._v(
                                                _vm._s(
                                                  _vm.errors.first(
                                                    "bank_account"
                                                  )
                                                )
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
                                          "form-group col-md-9 px-md-3 px-1 float-left"
                                      },
                                      [
                                        _c(
                                          "label",
                                          { staticClass: "w-100 float-left" },
                                          [_vm._v("Days of Work")]
                                        ),
                                        _vm._v(" "),
                                        _vm._l(_vm.weekdays, function(day) {
                                          return _c(
                                            "div",
                                            {
                                              staticClass:
                                                "checkbox float-left pr-3"
                                            },
                                            [
                                              _c("input", {
                                                directives: [
                                                  {
                                                    name: "model",
                                                    rawName: "v-model",
                                                    value:
                                                      _vm.newCustomer
                                                        .days_of_work,
                                                    expression:
                                                      "newCustomer.days_of_work"
                                                  },
                                                  {
                                                    name: "validate",
                                                    rawName: "v-validate",
                                                    value: "required",
                                                    expression: "'required'"
                                                  }
                                                ],
                                                attrs: {
                                                  id: day,
                                                  "data-vv-as": "days of work",
                                                  name: "days_of_work",
                                                  type: "checkbox"
                                                },
                                                domProps: {
                                                  value: day,
                                                  checked: Array.isArray(
                                                    _vm.newCustomer.days_of_work
                                                  )
                                                    ? _vm._i(
                                                        _vm.newCustomer
                                                          .days_of_work,
                                                        day
                                                      ) > -1
                                                    : _vm.newCustomer
                                                        .days_of_work
                                                },
                                                on: {
                                                  change: function($event) {
                                                    var $$a =
                                                        _vm.newCustomer
                                                          .days_of_work,
                                                      $$el = $event.target,
                                                      $$c = $$el.checked
                                                        ? true
                                                        : false
                                                    if (Array.isArray($$a)) {
                                                      var $$v = day,
                                                        $$i = _vm._i($$a, $$v)
                                                      if ($$el.checked) {
                                                        $$i < 0 &&
                                                          _vm.$set(
                                                            _vm.newCustomer,
                                                            "days_of_work",
                                                            $$a.concat([$$v])
                                                          )
                                                      } else {
                                                        $$i > -1 &&
                                                          _vm.$set(
                                                            _vm.newCustomer,
                                                            "days_of_work",
                                                            $$a
                                                              .slice(0, $$i)
                                                              .concat(
                                                                $$a.slice(
                                                                  $$i + 1
                                                                )
                                                              )
                                                          )
                                                      }
                                                    } else {
                                                      _vm.$set(
                                                        _vm.newCustomer,
                                                        "days_of_work",
                                                        $$c
                                                      )
                                                    }
                                                  }
                                                }
                                              }),
                                              _vm._v(" "),
                                              _c(
                                                "label",
                                                { attrs: { for: day } },
                                                [_vm._v(_vm._s(day))]
                                              )
                                            ]
                                          )
                                        }),
                                        _vm._v(" "),
                                        _vm.errors.first("days_of_work")
                                          ? _c("small", [
                                              _vm._v(
                                                _vm._s(
                                                  _vm.errors.first(
                                                    "days_of_work"
                                                  )
                                                )
                                              )
                                            ])
                                          : _vm._e()
                                      ],
                                      2
                                    ),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "spaceAfter" }),
                                    _vm._v(" "),
                                    _c("h5", [_vm._v("Address of Business")]),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      {
                                        staticClass:
                                          "form-group col-md-4 px-md-3 px-1 float-left"
                                      },
                                      [
                                        _c("label", [_vm._v("Street Name")]),
                                        _vm._v(" "),
                                        _c("input", {
                                          directives: [
                                            {
                                              name: "model",
                                              rawName: "v-model",
                                              value:
                                                _vm.newCustomer
                                                  .comp_street_name,
                                              expression:
                                                "newCustomer.comp_street_name"
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
                                            "data-vv-as": "office street name",
                                            name: "office_street_name",
                                            placeholder:
                                              "Enter Street name here",
                                            type: "text"
                                          },
                                          domProps: {
                                            value:
                                              _vm.newCustomer.comp_street_name
                                          },
                                          on: {
                                            input: function($event) {
                                              if ($event.target.composing) {
                                                return
                                              }
                                              _vm.$set(
                                                _vm.newCustomer,
                                                "comp_street_name",
                                                $event.target.value
                                              )
                                            }
                                          }
                                        }),
                                        _vm._v(" "),
                                        _vm.errors.first("office_street_name")
                                          ? _c("small", [
                                              _vm._v(
                                                _vm._s(
                                                  _vm.errors.first(
                                                    "office_street_name"
                                                  )
                                                )
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
                                          "form-group col-md-4 px-md-3 px-1 float-left"
                                      },
                                      [
                                        _c("label", [_vm._v("Shop Number")]),
                                        _vm._v(" "),
                                        _c("input", {
                                          directives: [
                                            {
                                              name: "model",
                                              rawName: "v-model",
                                              value:
                                                _vm.newCustomer.comp_house_no,
                                              expression:
                                                "newCustomer.comp_house_no"
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
                                            "data-vv-as":
                                              "office building number",
                                            name: "office_building_number",
                                            placeholder:
                                              "Enter Building Number",
                                            type: "text"
                                          },
                                          domProps: {
                                            value: _vm.newCustomer.comp_house_no
                                          },
                                          on: {
                                            input: function($event) {
                                              if ($event.target.composing) {
                                                return
                                              }
                                              _vm.$set(
                                                _vm.newCustomer,
                                                "comp_house_no",
                                                $event.target.value
                                              )
                                            }
                                          }
                                        }),
                                        _vm._v(" "),
                                        _vm.errors.first(
                                          "office_building_number"
                                        )
                                          ? _c("small", [
                                              _vm._v(
                                                _vm._s(
                                                  _vm.errors.first(
                                                    "office_building_number"
                                                  )
                                                )
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
                                          "form-group col-md-4 px-md-3 px-1 float-left"
                                      },
                                      [
                                        _c("label", [
                                          _vm._v("Nearest Bus Stop")
                                        ]),
                                        _vm._v(" "),
                                        _c("input", {
                                          directives: [
                                            {
                                              name: "model",
                                              rawName: "v-model",
                                              value:
                                                _vm.newCustomer.cadd_nbstop,
                                              expression:
                                                "newCustomer.cadd_nbstop"
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
                                            "data-vv-as":
                                              "office nearest bus stop",
                                            name: "office_nearest_bus_stop",
                                            placeholder:
                                              "Enter nearest bus stop",
                                            type: "text"
                                          },
                                          domProps: {
                                            value: _vm.newCustomer.cadd_nbstop
                                          },
                                          on: {
                                            input: function($event) {
                                              if ($event.target.composing) {
                                                return
                                              }
                                              _vm.$set(
                                                _vm.newCustomer,
                                                "cadd_nbstop",
                                                $event.target.value
                                              )
                                            }
                                          }
                                        }),
                                        _vm._v(" "),
                                        _vm.errors.first(
                                          "office_nearest_bus_stop"
                                        )
                                          ? _c("small", [
                                              _vm._v(
                                                _vm._s(
                                                  _vm.errors.first(
                                                    "office_nearest_bus_stop"
                                                  )
                                                )
                                              )
                                            ])
                                          : _vm._e()
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "spaceBetween" }),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      {
                                        staticClass:
                                          "form-group col-md-4 px-md-3 px-1 float-left"
                                      },
                                      [
                                        _c("label", [_vm._v("Area")]),
                                        _vm._v(" "),
                                        _c("input", {
                                          directives: [
                                            {
                                              name: "model",
                                              rawName: "v-model",
                                              value: _vm.newCustomer.comp_area,
                                              expression:
                                                "newCustomer.comp_area"
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
                                            "data-vv-as": "company area",
                                            name: "company_area",
                                            placeholder: "Enter area",
                                            type: "text"
                                          },
                                          domProps: {
                                            value: _vm.newCustomer.comp_area
                                          },
                                          on: {
                                            input: function($event) {
                                              if ($event.target.composing) {
                                                return
                                              }
                                              _vm.$set(
                                                _vm.newCustomer,
                                                "comp_area",
                                                $event.target.value
                                              )
                                            }
                                          }
                                        }),
                                        _vm._v(" "),
                                        _vm.errors.first("company_area")
                                          ? _c("small", [
                                              _vm._v(
                                                _vm._s(
                                                  _vm.errors.first(
                                                    "company_area"
                                                  )
                                                )
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
                                          "form-group col-md-4 px-md-3 px-1 float-left"
                                      },
                                      [
                                        _c("label", [_vm._v("City")]),
                                        _vm._v(" "),
                                        _c("input", {
                                          directives: [
                                            {
                                              name: "model",
                                              rawName: "v-model",
                                              value:
                                                _vm.newCustomer.company_city,
                                              expression:
                                                "newCustomer.company_city"
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
                                            "data-vv-as": "company city",
                                            name: "company_city",
                                            placeholder: "Enter city",
                                            type: "text"
                                          },
                                          domProps: {
                                            value: _vm.newCustomer.company_city
                                          },
                                          on: {
                                            input: function($event) {
                                              if ($event.target.composing) {
                                                return
                                              }
                                              _vm.$set(
                                                _vm.newCustomer,
                                                "company_city",
                                                $event.target.value
                                              )
                                            }
                                          }
                                        }),
                                        _vm._v(" "),
                                        _vm.errors.first("company_city")
                                          ? _c("small", [
                                              _vm._v(
                                                _vm._s(
                                                  _vm.errors.first(
                                                    "company_city"
                                                  )
                                                )
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
                                          "form-group col-md-4 px-md-3 px-1 float-left"
                                      },
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
                                                value:
                                                  _vm.newCustomer.company_state,
                                                expression:
                                                  "newCustomer.company_state"
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
                                              "data-vv-as": "company state",
                                              "data-vv-validate-on": "blur",
                                              name: "company_state"
                                            },
                                            on: {
                                              change: function($event) {
                                                var $$selectedVal = Array.prototype.filter
                                                  .call(
                                                    $event.target.options,
                                                    function(o) {
                                                      return o.selected
                                                    }
                                                  )
                                                  .map(function(o) {
                                                    var val =
                                                      "_value" in o
                                                        ? o._value
                                                        : o.value
                                                    return val
                                                  })
                                                _vm.$set(
                                                  _vm.newCustomer,
                                                  "company_state",
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
                                              { attrs: { value: "" } },
                                              [_vm._v("select state")]
                                            ),
                                            _vm._v(" "),
                                            _vm._l(_vm.states, function(state) {
                                              return _c(
                                                "option",
                                                {
                                                  domProps: {
                                                    value: state.name
                                                  }
                                                },
                                                [_vm._v(_vm._s(state.name))]
                                              )
                                            })
                                          ],
                                          2
                                        ),
                                        _vm._v(" "),
                                        _vm.errors.first("company_state")
                                          ? _c("small", [
                                              _vm._v(
                                                _vm._s(
                                                  _vm.errors.first(
                                                    "company_state"
                                                  )
                                                )
                                              )
                                            ])
                                          : _vm._e()
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "spaceBetween" }),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      {
                                        staticClass:
                                          "form-group col-md-4 px-md-3 px-1 float-left"
                                      },
                                      [
                                        _c("label", [_vm._v("Phone Number")]),
                                        _vm._v(" "),
                                        _c("input", {
                                          directives: [
                                            {
                                              name: "model",
                                              rawName: "v-model",
                                              value:
                                                _vm.newCustomer.company_telno,
                                              expression:
                                                "newCustomer.company_telno"
                                            },
                                            {
                                              name: "validate",
                                              rawName: "v-validate",
                                              value:
                                                "required|numeric|max:11|min:11",
                                              expression:
                                                "'required|numeric|max:11|min:11'"
                                            }
                                          ],
                                          staticClass: "form-control",
                                          attrs: {
                                            "data-vv-as":
                                              "company phone number",
                                            name: "company_phone_number",
                                            placeholder: "Enter city",
                                            type: "tel"
                                          },
                                          domProps: {
                                            value: _vm.newCustomer.company_telno
                                          },
                                          on: {
                                            input: function($event) {
                                              if ($event.target.composing) {
                                                return
                                              }
                                              _vm.$set(
                                                _vm.newCustomer,
                                                "company_telno",
                                                $event.target.value
                                              )
                                            }
                                          }
                                        }),
                                        _vm._v(" "),
                                        _vm.errors.first("company_phone_number")
                                          ? _c("small", [
                                              _vm._v(
                                                _vm._s(
                                                  _vm.errors.first(
                                                    "company_phone_number"
                                                  )
                                                )
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
                                          "form-group col-md-4 px-md-3 px-1 float-left"
                                      },
                                      [
                                        _c("label", [
                                          _vm._v(
                                            "Time Available for Visit: From"
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("input", {
                                          directives: [
                                            {
                                              name: "model",
                                              rawName: "v-model",
                                              value:
                                                _vm.newCustomer
                                                  .cvisit_hour_from,
                                              expression:
                                                "newCustomer.cvisit_hour_from"
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
                                            "data-vv-as": "available from",
                                            name: "available_from",
                                            type: "time"
                                          },
                                          domProps: {
                                            value:
                                              _vm.newCustomer.cvisit_hour_from
                                          },
                                          on: {
                                            input: function($event) {
                                              if ($event.target.composing) {
                                                return
                                              }
                                              _vm.$set(
                                                _vm.newCustomer,
                                                "cvisit_hour_from",
                                                $event.target.value
                                              )
                                            }
                                          }
                                        }),
                                        _vm._v(" "),
                                        _vm.errors.first("available_from")
                                          ? _c("small", [
                                              _vm._v(
                                                _vm._s(
                                                  _vm.errors.first(
                                                    "available_from"
                                                  )
                                                )
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
                                          "form-group col-md-4 px-md-3 px-1 float-left"
                                      },
                                      [
                                        _c("label", [_vm._v("To")]),
                                        _vm._v(" "),
                                        _c("input", {
                                          directives: [
                                            {
                                              name: "model",
                                              rawName: "v-model",
                                              value:
                                                _vm.newCustomer.cvisit_hour_to,
                                              expression:
                                                "newCustomer.cvisit_hour_to"
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
                                            "data-vv-as": "available to",
                                            name: "available_to",
                                            type: "time"
                                          },
                                          domProps: {
                                            value:
                                              _vm.newCustomer.cvisit_hour_to
                                          },
                                          on: {
                                            input: function($event) {
                                              if ($event.target.composing) {
                                                return
                                              }
                                              _vm.$set(
                                                _vm.newCustomer,
                                                "cvisit_hour_to",
                                                $event.target.value
                                              )
                                            }
                                          }
                                        }),
                                        _vm._v(" "),
                                        _vm.errors.first("available_to")
                                          ? _c("small", [
                                              _vm._v(
                                                _vm._s(
                                                  _vm.errors.first(
                                                    "available_to"
                                                  )
                                                )
                                              )
                                            ])
                                          : _vm._e()
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "spaceBetween" }),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      {
                                        staticClass:
                                          "form-group col-md-12 px-md-3 px-1 float-left"
                                      },
                                      [
                                        _c("label", [
                                          _vm._v("Describe Location")
                                        ]),
                                        _vm._v(" "),
                                        _c("textarea", {
                                          directives: [
                                            {
                                              name: "model",
                                              rawName: "v-model",
                                              value:
                                                _vm.newCustomer.cadd_addinfo,
                                              expression:
                                                "newCustomer.cadd_addinfo"
                                            }
                                          ],
                                          staticClass: "form-control col-sm-12",
                                          attrs: {
                                            placeholder:
                                              "Describe the Location",
                                            rows: "1"
                                          },
                                          domProps: {
                                            value: _vm.newCustomer.cadd_addinfo
                                          },
                                          on: {
                                            input: function($event) {
                                              if ($event.target.composing) {
                                                return
                                              }
                                              _vm.$set(
                                                _vm.newCustomer,
                                                "cadd_addinfo",
                                                $event.target.value
                                              )
                                            }
                                          }
                                        })
                                      ]
                                    )
                                  ])
                                : _c("div")
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "spaceAfter" }),
                          _vm._v(" "),
                          _c("h5", [_vm._v("Next of Kin")]),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass:
                                "form-group col-md-4 px-md-3 px-1 float-left"
                            },
                            [
                              _c("label", [_vm._v("First Name")]),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.newCustomer.nextofkin_first_name,
                                    expression:
                                      "newCustomer.nextofkin_first_name"
                                  },
                                  {
                                    name: "validate",
                                    rawName: "v-validate",
                                    value: "required|max:25",
                                    expression: "'required|max:25'"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: {
                                  "data-vv-as": "next of kin first name",
                                  name: "NOK_first_name",
                                  placeholder: "Enter first name",
                                  type: "text"
                                },
                                domProps: {
                                  value: _vm.newCustomer.nextofkin_first_name
                                },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.newCustomer,
                                      "nextofkin_first_name",
                                      $event.target.value
                                    )
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _vm.errors.first("NOK_first_name")
                                ? _c("small", [
                                    _vm._v(
                                      _vm._s(_vm.errors.first("NOK_first_name"))
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
                                "form-group col-md-4 px-md-3 px-1 float-left"
                            },
                            [
                              _c("label", [_vm._v("Middle Name")]),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value:
                                      _vm.newCustomer.nextofkin_middle_name,
                                    expression:
                                      "newCustomer.nextofkin_middle_name"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: {
                                  placeholder: "Enter middle name",
                                  type: "text"
                                },
                                domProps: {
                                  value: _vm.newCustomer.nextofkin_middle_name
                                },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.newCustomer,
                                      "nextofkin_middle_name",
                                      $event.target.value
                                    )
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
                                "form-group col-md-4 px-md-3 px-1 float-left"
                            },
                            [
                              _c("label", [_vm._v("Last Name")]),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.newCustomer.nextofkin_last_name,
                                    expression:
                                      "newCustomer.nextofkin_last_name"
                                  },
                                  {
                                    name: "validate",
                                    rawName: "v-validate",
                                    value: "required|max:25",
                                    expression: "'required|max:25'"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: {
                                  "data-vv-as": "next of kin last name",
                                  name: "NOK_last_name",
                                  placeholder: "Enter last name",
                                  type: "text"
                                },
                                domProps: {
                                  value: _vm.newCustomer.nextofkin_last_name
                                },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.newCustomer,
                                      "nextofkin_last_name",
                                      $event.target.value
                                    )
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _vm.errors.first("NOK_last_name")
                                ? _c("small", [
                                    _vm._v(
                                      _vm._s(_vm.errors.first("NOK_last_name"))
                                    )
                                  ])
                                : _vm._e()
                            ]
                          ),
                          _vm._v(" "),
                          _c("div", { staticClass: "spaceAfter" }),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass:
                                "form-group col-md-4 px-md-3 px-1 float-left"
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
                                          value:
                                            _vm.newCustomer.nextofkin_gender,
                                          expression:
                                            "newCustomer.nextofkin_gender"
                                        },
                                        {
                                          name: "validate",
                                          rawName: "v-validate",
                                          value: "required",
                                          expression: "'required'"
                                        }
                                      ],
                                      attrs: {
                                        id: "nok" + sex,
                                        "data-vv-as": "next of kin gender",
                                        name: "nokgender",
                                        type: "radio"
                                      },
                                      domProps: {
                                        value: sex,
                                        checked: _vm._q(
                                          _vm.newCustomer.nextofkin_gender,
                                          sex
                                        )
                                      },
                                      on: {
                                        change: function($event) {
                                          _vm.$set(
                                            _vm.newCustomer,
                                            "nextofkin_gender",
                                            sex
                                          )
                                        }
                                      }
                                    }),
                                    _vm._v(" "),
                                    _c(
                                      "label",
                                      { attrs: { for: "nok" + sex } },
                                      [_vm._v(_vm._s(sex))]
                                    )
                                  ]
                                )
                              }),
                              _vm._v(" "),
                              _vm.errors.first("nokgender")
                                ? _c("small", [
                                    _vm._v(
                                      _vm._s(_vm.errors.first("nokgender"))
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
                                "form-group col-md-4 px-md-3 px-1 float-left"
                            },
                            [
                              _c("label", [_vm._v("Phone Number")]),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.newCustomer.nextofkin_telno,
                                    expression: "newCustomer.nextofkin_telno"
                                  },
                                  {
                                    name: "validate",
                                    rawName: "v-validate",
                                    value: "required|numeric|max:11|min:11",
                                    expression:
                                      "'required|numeric|max:11|min:11'"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: {
                                  "data-vv-as": "next of kin phone number",
                                  name: "NOK_phone_number",
                                  placeholder: "Enter phone number",
                                  type: "tel"
                                },
                                domProps: {
                                  value: _vm.newCustomer.nextofkin_telno
                                },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.newCustomer,
                                      "nextofkin_telno",
                                      $event.target.value
                                    )
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _vm.errors.first("NOK_phone_number")
                                ? _c("small", [
                                    _vm._v(
                                      _vm._s(
                                        _vm.errors.first("NOK_phone_number")
                                      )
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
                                "form-group col-md-4 px-md-3 px-1 float-left"
                            },
                            [
                              _c("label", [_vm._v("Duration in Current work")]),
                              _vm._v(" "),
                              _c(
                                "select",
                                {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value:
                                        _vm.newCustomer.nextofkin_work_duration,
                                      expression:
                                        "newCustomer.nextofkin_work_duration"
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
                                    "data-vv-as":
                                      "next of kin duration of work",
                                    "data-vv-validate-on": "blur",
                                    name: "NOK_work_duration"
                                  },
                                  on: {
                                    change: function($event) {
                                      var $$selectedVal = Array.prototype.filter
                                        .call($event.target.options, function(
                                          o
                                        ) {
                                          return o.selected
                                        })
                                        .map(function(o) {
                                          var val =
                                            "_value" in o ? o._value : o.value
                                          return val
                                        })
                                      _vm.$set(
                                        _vm.newCustomer,
                                        "nextofkin_work_duration",
                                        $event.target.multiple
                                          ? $$selectedVal
                                          : $$selectedVal[0]
                                      )
                                    }
                                  }
                                },
                                [
                                  _c("option", { attrs: { value: "" } }, [
                                    _vm._v("select duration")
                                  ]),
                                  _vm._v(" "),
                                  _vm._l(_vm.durations, function(duration) {
                                    return _c(
                                      "option",
                                      { domProps: { value: duration } },
                                      [_vm._v(_vm._s(duration))]
                                    )
                                  })
                                ],
                                2
                              ),
                              _vm._v(" "),
                              _vm.errors.first("NOK_work_duration")
                                ? _c("small", [
                                    _vm._v(
                                      _vm._s(
                                        _vm.errors.first("NOK_work_duration")
                                      )
                                    )
                                  ])
                                : _vm._e()
                            ]
                          ),
                          _vm._v(" "),
                          _c("div", { staticClass: "spaceAfter" }),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass:
                                "form-group col-md-12 px-md-3 px-1 float-left"
                            },
                            [
                              _c(
                                "label",
                                { staticClass: "w-100 float-left pl-1" },
                                [_vm._v("Relationship")]
                              ),
                              _vm._v(" "),
                              _vm._l(_vm.relationships, function(rela) {
                                return _c(
                                  "div",
                                  {
                                    staticClass:
                                      "radio p-0 col-md-2 col-4 float-left"
                                  },
                                  [
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value:
                                            _vm.newCustomer
                                              .nextofkin_relationship,
                                          expression:
                                            "newCustomer.nextofkin_relationship"
                                        },
                                        {
                                          name: "validate",
                                          rawName: "v-validate",
                                          value: "required",
                                          expression: "'required'"
                                        }
                                      ],
                                      attrs: {
                                        id: rela,
                                        "data-vv-as":
                                          "next of kin relationship",
                                        name: "relationship",
                                        type: "radio"
                                      },
                                      domProps: {
                                        value: rela,
                                        checked: _vm._q(
                                          _vm.newCustomer
                                            .nextofkin_relationship,
                                          rela
                                        )
                                      },
                                      on: {
                                        change: function($event) {
                                          _vm.$set(
                                            _vm.newCustomer,
                                            "nextofkin_relationship",
                                            rela
                                          )
                                        }
                                      }
                                    }),
                                    _vm._v(" "),
                                    _c("label", { attrs: { for: rela } }, [
                                      _vm._v(_vm._s(rela))
                                    ])
                                  ]
                                )
                              }),
                              _vm._v(" "),
                              _vm.errors.first("relationship")
                                ? _c("small", [
                                    _vm._v(
                                      _vm._s(_vm.errors.first("relationship"))
                                    )
                                  ])
                                : _vm._e()
                            ],
                            2
                          )
                        ],
                        1
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _c("div", { staticClass: "spaceAfter" }),
                  _vm._v(" "),
                  _c("h5", [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.fillWorkGuarantor,
                          expression: "fillWorkGuarantor"
                        }
                      ],
                      staticClass: "form-check-input ml-1 mr-2",
                      attrs: { type: "checkbox", value: "true" },
                      domProps: {
                        checked: Array.isArray(_vm.fillWorkGuarantor)
                          ? _vm._i(_vm.fillWorkGuarantor, "true") > -1
                          : _vm.fillWorkGuarantor
                      },
                      on: {
                        change: function($event) {
                          var $$a = _vm.fillWorkGuarantor,
                            $$el = $event.target,
                            $$c = $$el.checked ? true : false
                          if (Array.isArray($$a)) {
                            var $$v = "true",
                              $$i = _vm._i($$a, $$v)
                            if ($$el.checked) {
                              $$i < 0 &&
                                (_vm.fillWorkGuarantor = $$a.concat([$$v]))
                            } else {
                              $$i > -1 &&
                                (_vm.fillWorkGuarantor = $$a
                                  .slice(0, $$i)
                                  .concat($$a.slice($$i + 1)))
                            }
                          } else {
                            _vm.fillWorkGuarantor = $$c
                          }
                        }
                      }
                    }),
                    _vm._v("Work Guarantor Personal Info\n        ")
                  ]),
                  _vm._v(" "),
                  _vm.fillWorkGuarantor
                    ? _c("div", [
                        _c(
                          "div",
                          {
                            staticClass:
                              "form-group col-md-4 px-md-3 px-1 float-left"
                          },
                          [
                            _c("label", [_vm._v("First Name")]),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value:
                                    _vm.newCustomer.work_guarantor_first_name,
                                  expression:
                                    "newCustomer.work_guarantor_first_name"
                                },
                                {
                                  name: "validate",
                                  rawName: "v-validate",
                                  value: "required|max:25",
                                  expression: "'required|max:25'"
                                }
                              ],
                              staticClass: "form-control",
                              attrs: {
                                "data-vv-as": "work guarantors first name",
                                name: "WG_first_name",
                                placeholder: "Enter first name",
                                type: "text"
                              },
                              domProps: {
                                value: _vm.newCustomer.work_guarantor_first_name
                              },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.newCustomer,
                                    "work_guarantor_first_name",
                                    $event.target.value
                                  )
                                }
                              }
                            }),
                            _vm._v(" "),
                            _vm.errors.first("WG_first_name")
                              ? _c("small", [
                                  _vm._v(
                                    _vm._s(_vm.errors.first("WG_first_name"))
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
                              "form-group col-md-4 px-md-3 px-1 float-left"
                          },
                          [
                            _c("label", [_vm._v("Middle Name")]),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value:
                                    _vm.newCustomer.work_guarantor_middle_name,
                                  expression:
                                    "newCustomer.work_guarantor_middle_name"
                                }
                              ],
                              staticClass: "form-control",
                              attrs: {
                                placeholder: "Enter middle name",
                                type: "text"
                              },
                              domProps: {
                                value:
                                  _vm.newCustomer.work_guarantor_middle_name
                              },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.newCustomer,
                                    "work_guarantor_middle_name",
                                    $event.target.value
                                  )
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
                              "form-group col-md-4 px-md-3 px-1 float-left"
                          },
                          [
                            _c("label", [_vm._v("Last Name")]),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value:
                                    _vm.newCustomer.work_guarantor_last_name,
                                  expression:
                                    "newCustomer.work_guarantor_last_name"
                                },
                                {
                                  name: "validate",
                                  rawName: "v-validate",
                                  value: "required|max:25",
                                  expression: "'required|max:25'"
                                }
                              ],
                              staticClass: "form-control",
                              attrs: {
                                "data-vv-as": "work guarantors last name",
                                name: "WG_last_name",
                                placeholder: "Enter last name",
                                type: "text"
                              },
                              domProps: {
                                value: _vm.newCustomer.work_guarantor_last_name
                              },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.newCustomer,
                                    "work_guarantor_last_name",
                                    $event.target.value
                                  )
                                }
                              }
                            }),
                            _vm._v(" "),
                            _vm.errors.first("WG_last_name")
                              ? _c("small", [
                                  _vm._v(
                                    _vm._s(_vm.errors.first("WG_last_name"))
                                  )
                                ])
                              : _vm._e()
                          ]
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "spaceAfter" }),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass:
                              "form-group col-md-9 col-sm-12 px-md-3 px-1 float-left"
                          },
                          [
                            _c(
                              "label",
                              { staticClass: "w-100 float-left pl-1" },
                              [_vm._v("Relationship")]
                            ),
                            _vm._v(" "),
                            _vm._l(_vm.relationshipWG, function(rela) {
                              return _c(
                                "div",
                                {
                                  staticClass:
                                    "radio p-0 col-md-3 col-6 float-left"
                                },
                                [
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value:
                                          _vm.newCustomer
                                            .work_guarantor_relationship,
                                        expression:
                                          "newCustomer.work_guarantor_relationship"
                                      },
                                      {
                                        name: "validate",
                                        rawName: "v-validate",
                                        value: "required",
                                        expression: "'required'"
                                      }
                                    ],
                                    attrs: {
                                      id: rela + "wg",
                                      "data-vv-as":
                                        "work guarantor relationship",
                                      name: "relationshipwg",
                                      type: "radio"
                                    },
                                    domProps: {
                                      value: rela,
                                      checked: _vm._q(
                                        _vm.newCustomer
                                          .work_guarantor_relationship,
                                        rela
                                      )
                                    },
                                    on: {
                                      change: function($event) {
                                        _vm.$set(
                                          _vm.newCustomer,
                                          "work_guarantor_relationship",
                                          rela
                                        )
                                      }
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("label", { attrs: { for: rela + "wg" } }, [
                                    _vm._v(_vm._s(rela))
                                  ])
                                ]
                              )
                            }),
                            _vm._v(" "),
                            _vm.errors.first("relationshipwg")
                              ? _c("small", [
                                  _vm._v(
                                    _vm._s(_vm.errors.first("relationshipwg"))
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
                              "form-group col-md-3 col-sm-6 px-md-3 px-1 float-left"
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
                                { staticClass: "radio p-0 col-6 float-left" },
                                [
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value:
                                          _vm.newCustomer.work_guarantor_gender,
                                        expression:
                                          "newCustomer.work_guarantor_gender"
                                      },
                                      {
                                        name: "validate",
                                        rawName: "v-validate",
                                        value: "required",
                                        expression: "'required'"
                                      }
                                    ],
                                    attrs: {
                                      id: "gua" + sex,
                                      "data-vv-as": "work guanrantor gender",
                                      name: "wggender",
                                      type: "radio"
                                    },
                                    domProps: {
                                      value: sex,
                                      checked: _vm._q(
                                        _vm.newCustomer.work_guarantor_gender,
                                        sex
                                      )
                                    },
                                    on: {
                                      change: function($event) {
                                        _vm.$set(
                                          _vm.newCustomer,
                                          "work_guarantor_gender",
                                          sex
                                        )
                                      }
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("label", { attrs: { for: "gua" + sex } }, [
                                    _vm._v(_vm._s(sex))
                                  ])
                                ]
                              )
                            }),
                            _vm._v(" "),
                            _vm.errors.first("wggender")
                              ? _c("small", [
                                  _vm._v(_vm._s(_vm.errors.first("wggender")))
                                ])
                              : _vm._e()
                          ],
                          2
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "spaceAfter" }),
                        _vm._v(" "),
                        _c("h5", [_vm._v("Work Guarantor office Details")]),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass:
                              "form-group col-md-4 px-md-3 px-1 float-left"
                          },
                          [
                            _c("label", [_vm._v("Street Name")]),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.newCustomer.guaadd_street,
                                  expression: "newCustomer.guaadd_street"
                                },
                                {
                                  name: "validate",
                                  rawName: "v-validate",
                                  value: "required|max:25",
                                  expression: "'required|max:25'"
                                }
                              ],
                              staticClass: "form-control",
                              attrs: {
                                "data-vv-as": "work guarantor street",
                                name: "work_guarantor_street_name",
                                placeholder: "Enter Street name here",
                                type: "text"
                              },
                              domProps: {
                                value: _vm.newCustomer.guaadd_street
                              },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.newCustomer,
                                    "guaadd_street",
                                    $event.target.value
                                  )
                                }
                              }
                            }),
                            _vm._v(" "),
                            _vm.errors.first("work_guarantor_street_name")
                              ? _c("small", [
                                  _vm._v(
                                    _vm._s(
                                      _vm.errors.first(
                                        "work_guarantor_street_name"
                                      )
                                    )
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
                              "form-group col-md-4 px-md-3 px-1 float-left"
                          },
                          [
                            _c("label", [_vm._v("Office Building Number")]),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.newCustomer.guaadd_houseno,
                                  expression: "newCustomer.guaadd_houseno"
                                },
                                {
                                  name: "validate",
                                  rawName: "v-validate",
                                  value: "required|max:25",
                                  expression: "'required|max:25'"
                                }
                              ],
                              staticClass: "form-control",
                              attrs: {
                                "data-vv-as": "work guarantor office building",
                                name: "work_guarantor_office_building",
                                placeholder: "Enter Building Number",
                                type: "text"
                              },
                              domProps: {
                                value: _vm.newCustomer.guaadd_houseno
                              },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.newCustomer,
                                    "guaadd_houseno",
                                    $event.target.value
                                  )
                                }
                              }
                            }),
                            _vm._v(" "),
                            _vm.errors.first("work_guarantor_office_building")
                              ? _c("small", { staticClass: "text-muted" }, [
                                  _vm._v(
                                    _vm._s(
                                      _vm.errors.first(
                                        "work_guarantor_office_building"
                                      )
                                    )
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
                              "form-group col-md-4 px-md-3 px-1 float-left"
                          },
                          [
                            _c("label", [_vm._v("Nearest Bus Stop")]),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.newCustomer.guaadd_nbstop,
                                  expression: "newCustomer.guaadd_nbstop"
                                },
                                {
                                  name: "validate",
                                  rawName: "v-validate",
                                  value: "required|max:25",
                                  expression: "'required|max:25'"
                                }
                              ],
                              staticClass: "form-control",
                              attrs: {
                                "data-vv-as": "work guarantor bus stop",
                                name: "work_guarantor_bus_stop",
                                placeholder: "Enter nearest bus stop",
                                type: "text"
                              },
                              domProps: {
                                value: _vm.newCustomer.guaadd_nbstop
                              },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.newCustomer,
                                    "guaadd_nbstop",
                                    $event.target.value
                                  )
                                }
                              }
                            }),
                            _vm._v(" "),
                            _vm.errors.first("work_guarantor_bus_stop")
                              ? _c("small", [
                                  _vm._v(
                                    _vm._s(
                                      _vm.errors.first(
                                        "work_guarantor_bus_stop"
                                      )
                                    )
                                  )
                                ])
                              : _vm._e()
                          ]
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "spaceAfter" }),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass:
                              "form-group col-md-4 px-md-3 px-1 float-left"
                          },
                          [
                            _c("label", [_vm._v("Area")]),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.newCustomer.gua_area,
                                  expression: "newCustomer.gua_area"
                                },
                                {
                                  name: "validate",
                                  rawName: "v-validate",
                                  value: "required|max:25",
                                  expression: "'required|max:25'"
                                }
                              ],
                              staticClass: "form-control",
                              attrs: {
                                "data-vv-as": "work guarantor area",
                                name: "work_guarantor_area",
                                placeholder: "Enter area",
                                type: "text"
                              },
                              domProps: { value: _vm.newCustomer.gua_area },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.newCustomer,
                                    "gua_area",
                                    $event.target.value
                                  )
                                }
                              }
                            }),
                            _vm._v(" "),
                            _vm.errors.first("work_guarantor_area")
                              ? _c("small", [
                                  _vm._v(
                                    _vm._s(
                                      _vm.errors.first("work_guarantor_area")
                                    )
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
                              "form-group col-md-4 px-md-3 px-1 float-left"
                          },
                          [
                            _c("label", [_vm._v("City")]),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.newCustomer.work_guarantor_city,
                                  expression: "newCustomer.work_guarantor_city"
                                },
                                {
                                  name: "validate",
                                  rawName: "v-validate",
                                  value: "required|max:25",
                                  expression: "'required|max:25'"
                                }
                              ],
                              staticClass: "form-control",
                              attrs: {
                                "data-vv-as": "work guarantor city",
                                name: "work_guarantor_city",
                                placeholder: "Enter city",
                                type: "text"
                              },
                              domProps: {
                                value: _vm.newCustomer.work_guarantor_city
                              },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.newCustomer,
                                    "work_guarantor_city",
                                    $event.target.value
                                  )
                                }
                              }
                            }),
                            _vm._v(" "),
                            _vm.errors.first("work_guarantor_city")
                              ? _c("small", [
                                  _vm._v(
                                    _vm._s(
                                      _vm.errors.first("work_guarantor_city")
                                    )
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
                              "form-group col-md-4 px-md-3 px-1 float-left"
                          },
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
                                    value: _vm.newCustomer.work_guarantor_state,
                                    expression:
                                      "newCustomer.work_guarantor_state"
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
                                  "data-vv-as": "work guarantor state",
                                  "data-vv-validate-on": "blur",
                                  name: "work_guarantor_state"
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
                                      _vm.newCustomer,
                                      "work_guarantor_state",
                                      $event.target.multiple
                                        ? $$selectedVal
                                        : $$selectedVal[0]
                                    )
                                  }
                                }
                              },
                              [
                                _c("option", { attrs: { value: "" } }, [
                                  _vm._v("select state")
                                ]),
                                _vm._v(" "),
                                _vm._l(_vm.states, function(state) {
                                  return _c(
                                    "option",
                                    { domProps: { value: state.name } },
                                    [_vm._v(_vm._s(state.name))]
                                  )
                                })
                              ],
                              2
                            ),
                            _vm._v(" "),
                            _vm.errors.first("work_guarantor_state")
                              ? _c("small", [
                                  _vm._v(
                                    _vm._s(
                                      _vm.errors.first("work_guarantor_state")
                                    )
                                  )
                                ])
                              : _vm._e()
                          ]
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "spaceAfter" }),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass:
                              "form-group col-md-4 px-md-3 px-1 float-left"
                          },
                          [
                            _c("label", [_vm._v("Phone Number")]),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.newCustomer.work_guarantor_telno,
                                  expression: "newCustomer.work_guarantor_telno"
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
                                "data-vv-as": "work guarantor phone",
                                name: "work_guarantor_phone",
                                placeholder: "Enter city",
                                type: "tel"
                              },
                              domProps: {
                                value: _vm.newCustomer.work_guarantor_telno
                              },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.newCustomer,
                                    "work_guarantor_telno",
                                    $event.target.value
                                  )
                                }
                              }
                            }),
                            _vm._v(" "),
                            _vm.errors.first("work_guarantor_phone")
                              ? _c("small", [
                                  _vm._v(
                                    _vm._s(
                                      _vm.errors.first("work_guarantor_phone")
                                    )
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
                              "form-group col-md-4 px-md-3 px-1 float-left"
                          },
                          [
                            _c("label", [_vm._v("Duration in Current work")]),
                            _vm._v(" "),
                            _c(
                              "select",
                              {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value:
                                      _vm.newCustomer
                                        .work_guarantor_work_duration,
                                    expression:
                                      "newCustomer.work_guarantor_work_duration"
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
                                  "data-vv-as": "work guarantor work duration",
                                  "data-vv-validate-on": "blur",
                                  name: "work_guarantor_work_duration"
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
                                      _vm.newCustomer,
                                      "work_guarantor_work_duration",
                                      $event.target.multiple
                                        ? $$selectedVal
                                        : $$selectedVal[0]
                                    )
                                  }
                                }
                              },
                              [
                                _c("option", { attrs: { value: "" } }, [
                                  _vm._v("select duration")
                                ]),
                                _vm._v(" "),
                                _vm._l(_vm.durations, function(duration) {
                                  return _c(
                                    "option",
                                    { domProps: { value: duration } },
                                    [_vm._v(_vm._s(duration))]
                                  )
                                })
                              ],
                              2
                            ),
                            _vm._v(" "),
                            _vm.errors.first("work_guarantor_work_duration")
                              ? _c("small", [
                                  _vm._v(
                                    _vm._s(
                                      _vm.errors.first(
                                        "work_guarantor_work_duration"
                                      )
                                    )
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
                              "form-group col-md-4 px-md-3 px-1 float-left"
                          },
                          [
                            _c("label", [_vm._v("Describe Location")]),
                            _vm._v(" "),
                            _c("textarea", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.newCustomer.guaadd_addinfo,
                                  expression: "newCustomer.guaadd_addinfo"
                                }
                              ],
                              staticClass: "form-control col-sm-12",
                              attrs: {
                                placeholder: "Describe the Location",
                                rows: "1"
                              },
                              domProps: {
                                value: _vm.newCustomer.guaadd_addinfo
                              },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.newCustomer,
                                    "guaadd_addinfo",
                                    $event.target.value
                                  )
                                }
                              }
                            })
                          ]
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "spaceAfter" })
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _c("h5", [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.fillPersonalGuarantor,
                          expression: "fillPersonalGuarantor"
                        }
                      ],
                      staticClass: "form-check-input ml-1 mr-2",
                      attrs: { type: "checkbox", value: "true" },
                      domProps: {
                        checked: Array.isArray(_vm.fillPersonalGuarantor)
                          ? _vm._i(_vm.fillPersonalGuarantor, "true") > -1
                          : _vm.fillPersonalGuarantor
                      },
                      on: {
                        change: function($event) {
                          var $$a = _vm.fillPersonalGuarantor,
                            $$el = $event.target,
                            $$c = $$el.checked ? true : false
                          if (Array.isArray($$a)) {
                            var $$v = "true",
                              $$i = _vm._i($$a, $$v)
                            if ($$el.checked) {
                              $$i < 0 &&
                                (_vm.fillPersonalGuarantor = $$a.concat([$$v]))
                            } else {
                              $$i > -1 &&
                                (_vm.fillPersonalGuarantor = $$a
                                  .slice(0, $$i)
                                  .concat($$a.slice($$i + 1)))
                            }
                          } else {
                            _vm.fillPersonalGuarantor = $$c
                          }
                        }
                      }
                    }),
                    _vm._v(
                      "\n          Personal Guarantor Personal Info\n        "
                    )
                  ]),
                  _vm._v(" "),
                  _vm.fillPersonalGuarantor
                    ? _c("div", [
                        _c(
                          "div",
                          {
                            staticClass:
                              "form-group col-md-4 px-md-3 px-1 float-left"
                          },
                          [
                            _c("label", [_vm._v("First Name")]),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value:
                                    _vm.newCustomer
                                      .personal_guarantor_first_name,
                                  expression:
                                    "newCustomer.personal_guarantor_first_name"
                                },
                                {
                                  name: "validate",
                                  rawName: "v-validate",
                                  value: "required|max:25",
                                  expression: "'required|max:25'"
                                }
                              ],
                              staticClass: "form-control",
                              attrs: {
                                "data-vv-as": "first name",
                                name: "PG_first_name",
                                placeholder: "Enter first name",
                                type: "text"
                              },
                              domProps: {
                                value:
                                  _vm.newCustomer.personal_guarantor_first_name
                              },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.newCustomer,
                                    "personal_guarantor_first_name",
                                    $event.target.value
                                  )
                                }
                              }
                            }),
                            _vm._v(" "),
                            _vm.errors.first("PG_first_name")
                              ? _c("small", [
                                  _vm._v(
                                    _vm._s(_vm.errors.first("PG_first_name"))
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
                              "form-group col-md-4 px-md-3 px-1 float-left"
                          },
                          [
                            _c("label", [_vm._v("Middle Name")]),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value:
                                    _vm.newCustomer
                                      .personal_guarantor_middle_name,
                                  expression:
                                    "newCustomer.personal_guarantor_middle_name"
                                }
                              ],
                              staticClass: "form-control",
                              attrs: {
                                placeholder: "Enter middle name",
                                type: "text"
                              },
                              domProps: {
                                value:
                                  _vm.newCustomer.personal_guarantor_middle_name
                              },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.newCustomer,
                                    "personal_guarantor_middle_name",
                                    $event.target.value
                                  )
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
                              "form-group col-md-4 px-md-3 px-1 float-left"
                          },
                          [
                            _c("label", [_vm._v("Last Name")]),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value:
                                    _vm.newCustomer
                                      .personal_guarantor_last_name,
                                  expression:
                                    "newCustomer.personal_guarantor_last_name"
                                },
                                {
                                  name: "validate",
                                  rawName: "v-validate",
                                  value: "required|max:25",
                                  expression: "'required|max:25'"
                                }
                              ],
                              staticClass: "form-control",
                              attrs: {
                                "data-vv-as": "last name",
                                name: "PG_last_name",
                                placeholder: "Enter last name",
                                type: "text"
                              },
                              domProps: {
                                value:
                                  _vm.newCustomer.personal_guarantor_last_name
                              },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.newCustomer,
                                    "personal_guarantor_last_name",
                                    $event.target.value
                                  )
                                }
                              }
                            }),
                            _vm._v(" "),
                            _vm.errors.first("PG_last_name")
                              ? _c("small", [
                                  _vm._v(
                                    _vm._s(_vm.errors.first("PG_last_name"))
                                  )
                                ])
                              : _vm._e()
                          ]
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "spaceAfter" }),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass:
                              "form-group col-md-9 col-sm-12 px-md-3 px-1 float-left"
                          },
                          [
                            _c(
                              "label",
                              { staticClass: "w-100 float-left pl-1" },
                              [_vm._v("Relationship")]
                            ),
                            _vm._v(" "),
                            _vm._l(_vm.relationshipPG, function(rela) {
                              return _c(
                                "div",
                                {
                                  staticClass:
                                    "radio p-0 col-md-3 col-6 float-left"
                                },
                                [
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value:
                                          _vm.newCustomer
                                            .personal_guarantor_relationship,
                                        expression:
                                          "newCustomer.personal_guarantor_relationship"
                                      },
                                      {
                                        name: "validate",
                                        rawName: "v-validate",
                                        value: "required",
                                        expression: "'required'"
                                      }
                                    ],
                                    attrs: {
                                      id: rela + "pg",
                                      "data-vv-as":
                                        "personal guarantor relationship",
                                      name: "relationshippg",
                                      type: "radio"
                                    },
                                    domProps: {
                                      value: rela,
                                      checked: _vm._q(
                                        _vm.newCustomer
                                          .personal_guarantor_relationship,
                                        rela
                                      )
                                    },
                                    on: {
                                      change: function($event) {
                                        _vm.$set(
                                          _vm.newCustomer,
                                          "personal_guarantor_relationship",
                                          rela
                                        )
                                      }
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("label", { attrs: { for: rela + "pg" } }, [
                                    _vm._v(_vm._s(rela))
                                  ])
                                ]
                              )
                            }),
                            _vm._v(" "),
                            _vm.errors.first("relationshippg")
                              ? _c("small", [
                                  _vm._v(
                                    _vm._s(_vm.errors.first("relationshippg"))
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
                              "form-group col-md-3 col-sm-6 px-md-3 px-1 float-left"
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
                                        value:
                                          _vm.newCustomer
                                            .personal_guarantor_gender,
                                        expression:
                                          "newCustomer.personal_guarantor_gender"
                                      },
                                      {
                                        name: "validate",
                                        rawName: "v-validate",
                                        value: "required",
                                        expression: "'required'"
                                      }
                                    ],
                                    attrs: {
                                      id: "pg" + sex,
                                      "data-vv-as": "personal guarantor gender",
                                      name: "pggender",
                                      type: "radio"
                                    },
                                    domProps: {
                                      value: sex,
                                      checked: _vm._q(
                                        _vm.newCustomer
                                          .personal_guarantor_gender,
                                        sex
                                      )
                                    },
                                    on: {
                                      change: function($event) {
                                        _vm.$set(
                                          _vm.newCustomer,
                                          "personal_guarantor_gender",
                                          sex
                                        )
                                      }
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("label", { attrs: { for: "pg" + sex } }, [
                                    _vm._v(_vm._s(sex))
                                  ])
                                ]
                              )
                            }),
                            _vm._v(" "),
                            _vm.errors.first("pggender")
                              ? _c("small", [
                                  _vm._v(_vm._s(_vm.errors.first("pggender")))
                                ])
                              : _vm._e()
                          ],
                          2
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "spaceAfter" }),
                        _vm._v(" "),
                        _c("h5", [_vm._v("Personal Guarantor office Details")]),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass:
                              "form-group col-md-4 px-md-3 px-1 float-left"
                          },
                          [
                            _c("label", [_vm._v("Street Name")]),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.newCustomer.pguaadd_street,
                                  expression: "newCustomer.pguaadd_street"
                                },
                                {
                                  name: "validate",
                                  rawName: "v-validate",
                                  value: "required|max:25",
                                  expression: "'required|max:25'"
                                }
                              ],
                              staticClass: "form-control",
                              attrs: {
                                "data-vv-as": "street number",
                                name: "pguaadd_street",
                                placeholder: "Enter Street name here",
                                type: "text"
                              },
                              domProps: {
                                value: _vm.newCustomer.pguaadd_street
                              },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.newCustomer,
                                    "pguaadd_street",
                                    $event.target.value
                                  )
                                }
                              }
                            }),
                            _vm._v(" "),
                            _vm.errors.first("pguaadd_street")
                              ? _c("small", [
                                  _vm._v(
                                    _vm._s(_vm.errors.first("pguaadd_street"))
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
                              "form-group col-md-4 px-md-3 px-1 float-left"
                          },
                          [
                            _c("label", [_vm._v("Office Building Number")]),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.newCustomer.pguaadd_houseno,
                                  expression: "newCustomer.pguaadd_houseno"
                                },
                                {
                                  name: "validate",
                                  rawName: "v-validate",
                                  value: "required|max:25",
                                  expression: "'required|max:25'"
                                }
                              ],
                              staticClass: "form-control",
                              attrs: {
                                "data-vv-as": "office building address",
                                name: "pguaadd_houseno",
                                placeholder: "Enter Building Number",
                                type: "text"
                              },
                              domProps: {
                                value: _vm.newCustomer.pguaadd_houseno
                              },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.newCustomer,
                                    "pguaadd_houseno",
                                    $event.target.value
                                  )
                                }
                              }
                            }),
                            _vm._v(" "),
                            _vm.errors.first("pguaadd_houseno")
                              ? _c("small", [
                                  _vm._v(
                                    _vm._s(_vm.errors.first("pguaadd_houseno"))
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
                              "form-group col-md-4 px-md-3 px-1 float-left"
                          },
                          [
                            _c("label", [_vm._v("Nearest Bus Stop")]),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.newCustomer.pguaadd_nbstop,
                                  expression: "newCustomer.pguaadd_nbstop"
                                },
                                {
                                  name: "validate",
                                  rawName: "v-validate",
                                  value: "required|max:25",
                                  expression: "'required|max:25'"
                                }
                              ],
                              staticClass: "form-control",
                              attrs: {
                                "data-vv-as": "per. guarantor nearest stop",
                                name: "pguaadd_nbstop",
                                placeholder: "Enter nearest bus stop",
                                type: "text"
                              },
                              domProps: {
                                value: _vm.newCustomer.pguaadd_nbstop
                              },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.newCustomer,
                                    "pguaadd_nbstop",
                                    $event.target.value
                                  )
                                }
                              }
                            }),
                            _vm._v(" "),
                            _vm.errors.first("pguaadd_nbstop")
                              ? _c("small", [
                                  _vm._v(
                                    _vm._s(_vm.errors.first("pguaadd_nbstop"))
                                  )
                                ])
                              : _vm._e()
                          ]
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "spaceAfter" }),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass:
                              "form-group col-md-4 px-md-3 px-1 float-left"
                          },
                          [
                            _c("label", [_vm._v("Area")]),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.newCustomer.pgua_area,
                                  expression: "newCustomer.pgua_area"
                                },
                                {
                                  name: "validate",
                                  rawName: "v-validate",
                                  value: "required|max:25",
                                  expression: "'required|max:25'"
                                }
                              ],
                              staticClass: "form-control",
                              attrs: {
                                "data-vv-as": "personal guarantor area",
                                name: "pgua_area",
                                placeholder: "Enter area",
                                type: "text"
                              },
                              domProps: { value: _vm.newCustomer.pgua_area },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.newCustomer,
                                    "pgua_area",
                                    $event.target.value
                                  )
                                }
                              }
                            }),
                            _vm._v(" "),
                            _vm.errors.first("pgua_area")
                              ? _c("small", [
                                  _vm._v(_vm._s(_vm.errors.first("pgua_area")))
                                ])
                              : _vm._e()
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass:
                              "form-group col-md-4 px-md-3 px-1 float-left"
                          },
                          [
                            _c("label", [_vm._v("City")]),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value:
                                    _vm.newCustomer.personal_guarantor_city,
                                  expression:
                                    "newCustomer.personal_guarantor_city"
                                },
                                {
                                  name: "validate",
                                  rawName: "v-validate",
                                  value: "required|max:25",
                                  expression: "'required|max:25'"
                                }
                              ],
                              staticClass: "form-control",
                              attrs: {
                                "data-vv-as": "personal guarantor city",
                                name: "personal_guarantor_city",
                                placeholder: "Enter city",
                                type: "text"
                              },
                              domProps: {
                                value: _vm.newCustomer.personal_guarantor_city
                              },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.newCustomer,
                                    "personal_guarantor_city",
                                    $event.target.value
                                  )
                                }
                              }
                            }),
                            _vm._v(" "),
                            _vm.errors.first("personal_guarantor_city")
                              ? _c("small", [
                                  _vm._v(
                                    _vm._s(
                                      _vm.errors.first(
                                        "personal_guarantor_city"
                                      )
                                    )
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
                              "form-group col-md-4 px-md-3 px-1 float-left"
                          },
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
                                    value:
                                      _vm.newCustomer.personal_guarantor_state,
                                    expression:
                                      "newCustomer.personal_guarantor_state"
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
                                  "data-vv-as": "personal guarantor state",
                                  "data-vv-validate-on": "blur",
                                  name: "personal_guarantor_state"
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
                                      _vm.newCustomer,
                                      "personal_guarantor_state",
                                      $event.target.multiple
                                        ? $$selectedVal
                                        : $$selectedVal[0]
                                    )
                                  }
                                }
                              },
                              [
                                _c("option", { attrs: { value: "" } }, [
                                  _vm._v("select state")
                                ]),
                                _vm._v(" "),
                                _vm._l(_vm.states, function(state) {
                                  return _c(
                                    "option",
                                    { domProps: { value: state.name } },
                                    [_vm._v(_vm._s(state.name))]
                                  )
                                })
                              ],
                              2
                            ),
                            _vm._v(" "),
                            _vm.errors.first("personal_guarantor_state")
                              ? _c("small", [
                                  _vm._v(
                                    _vm._s(
                                      _vm.errors.first(
                                        "personal_guarantor_state"
                                      )
                                    )
                                  )
                                ])
                              : _vm._e()
                          ]
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "spaceAfter" }),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass:
                              "form-group col-md-4 px-md-3 px-1 float-left"
                          },
                          [
                            _c("label", [_vm._v("Phone Number")]),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value:
                                    _vm.newCustomer.personal_guarantor_telno,
                                  expression:
                                    "newCustomer.personal_guarantor_telno"
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
                                "data-vv-as": "per. guarantor phone",
                                name: "personal_guarantor_telno",
                                placeholder: "Enter city",
                                type: "tel"
                              },
                              domProps: {
                                value: _vm.newCustomer.personal_guarantor_telno
                              },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.newCustomer,
                                    "personal_guarantor_telno",
                                    $event.target.value
                                  )
                                }
                              }
                            }),
                            _vm._v(" "),
                            _vm.errors.first("personal_guarantor_telno")
                              ? _c("small", [
                                  _vm._v(
                                    _vm._s(
                                      _vm.errors.first(
                                        "personal_guarantor_telno"
                                      )
                                    )
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
                              "form-group col-md-4 px-md-3 px-1 float-left"
                          },
                          [
                            _c("label", [_vm._v("Duration in Current work")]),
                            _vm._v(" "),
                            _c(
                              "select",
                              {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value:
                                      _vm.newCustomer
                                        .personal_guarantor_work_duration,
                                    expression:
                                      "newCustomer.personal_guarantor_work_duration"
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
                                  "data-vv-as":
                                    "personal guarantor work duration",
                                  "data-vv-validate-on": "blur",
                                  name: "personal_guarantor_work_duration"
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
                                      _vm.newCustomer,
                                      "personal_guarantor_work_duration",
                                      $event.target.multiple
                                        ? $$selectedVal
                                        : $$selectedVal[0]
                                    )
                                  }
                                }
                              },
                              [
                                _c("option", { attrs: { value: "" } }, [
                                  _vm._v("select duration")
                                ]),
                                _vm._v(" "),
                                _vm._l(_vm.durations, function(duration) {
                                  return _c(
                                    "option",
                                    { domProps: { value: duration } },
                                    [_vm._v(_vm._s(duration))]
                                  )
                                })
                              ],
                              2
                            ),
                            _vm._v(" "),
                            _vm.errors.first("personal_guarantor_work_duration")
                              ? _c("small", { staticClass: "text-muted" }, [
                                  _vm._v(
                                    _vm._s(
                                      _vm.errors.first(
                                        "personal_guarantor_work_duration"
                                      )
                                    )
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
                              "form-group col-md-4 px-md-3 px-1 float-left"
                          },
                          [
                            _c("label", [_vm._v("Describe Location")]),
                            _vm._v(" "),
                            _c("textarea", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.newCustomer.pguaadd_addinfo,
                                  expression: "newCustomer.pguaadd_addinfo"
                                }
                              ],
                              staticClass: "form-control col-sm-12",
                              attrs: {
                                placeholder: "Describe the Location",
                                rows: "1"
                              },
                              domProps: {
                                value: _vm.newCustomer.pguaadd_addinfo
                              },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.newCustomer,
                                    "pguaadd_addinfo",
                                    $event.target.value
                                  )
                                }
                              }
                            })
                          ]
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "spaceAfter" })
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.mode === "register"
                    ? _c("div", [
                        _c("h5", [_vm._v("Other Questions")]),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass:
                              "form-group col-md-4 px-md-3 px-1 float-left"
                          },
                          [
                            _c("label", [_vm._v("What product do you need?")]),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value:
                                    _vm.newCustomer.what_product_do_you_need,
                                  expression:
                                    "newCustomer.what_product_do_you_need"
                                },
                                {
                                  name: "validate",
                                  rawName: "v-validate",
                                  value: "required|max:25",
                                  expression: "'required|max:25'"
                                }
                              ],
                              staticClass: "form-control",
                              attrs: {
                                "data-vv-as": "what product do you need",
                                name: "what_product_do_you_need",
                                placeholder: "Enter Product name",
                                type: "text"
                              },
                              domProps: {
                                value: _vm.newCustomer.what_product_do_you_need
                              },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.newCustomer,
                                    "what_product_do_you_need",
                                    $event.target.value
                                  )
                                }
                              }
                            }),
                            _vm._v(" "),
                            _vm.errors.first("what_product_do_you_need")
                              ? _c("small", [
                                  _vm._v(
                                    _vm._s(
                                      _vm.errors.first(
                                        "what_product_do_you_need"
                                      )
                                    )
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
                              "form-group col-md-4 px-md-3 px-1 float-left"
                          },
                          [
                            _c("label", [_vm._v("What do you need it for?")]),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value:
                                    _vm.newCustomer.what_do_you_need_it_for,
                                  expression:
                                    "newCustomer.what_do_you_need_it_for"
                                },
                                {
                                  name: "validate",
                                  rawName: "v-validate",
                                  value: "required|max:25",
                                  expression: "'required|max:25'"
                                }
                              ],
                              staticClass: "form-control",
                              attrs: {
                                "data-vv-as": "what do you need it for",
                                name: "what_do_you_need_it_for",
                                placeholder: "Enter Reason..",
                                type: "text"
                              },
                              domProps: {
                                value: _vm.newCustomer.what_do_you_need_it_for
                              },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.newCustomer,
                                    "what_do_you_need_it_for",
                                    $event.target.value
                                  )
                                }
                              }
                            }),
                            _vm._v(" "),
                            _vm.errors.first("what_do_you_need_it_for")
                              ? _c("small", [
                                  _vm._v(
                                    _vm._s(
                                      _vm.errors.first(
                                        "what_do_you_need_it_for"
                                      )
                                    )
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
                              "form-group col-md-4 px-md-3 px-1 float-left"
                          },
                          [
                            _c("label", [_vm._v("Office Branch")]),
                            _vm._v(" "),
                            _c(
                              "select",
                              {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.newCustomer.branch_id,
                                    expression: "newCustomer.branch_id"
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
                                  "data-vv-as": "office branch",
                                  "data-vv-validate-on": "blur",
                                  disabled: "",
                                  name: "branch_id"
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
                                      _vm.newCustomer,
                                      "branch_id",
                                      $event.target.multiple
                                        ? $$selectedVal
                                        : $$selectedVal[0]
                                    )
                                  }
                                }
                              },
                              [
                                _c("option", { attrs: { value: "" } }, [
                                  _vm._v("select office branch")
                                ]),
                                _vm._v(" "),
                                _vm._l(_vm.branches, function(branch) {
                                  return _c(
                                    "option",
                                    { domProps: { value: branch.id } },
                                    [_vm._v(_vm._s(branch.name))]
                                  )
                                })
                              ],
                              2
                            ),
                            _vm._v(" "),
                            _vm.errors.first("branch_id")
                              ? _c("small", [
                                  _vm._v(_vm._s(_vm.errors.first("branch_id")))
                                ])
                              : _vm._e()
                          ]
                        )
                      ])
                    : _vm._e(),
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
                          attrs: { disabled: _vm.$isProcessing, type: "submit" }
                        },
                        [
                          _vm._v(
                            "\n            " +
                              _vm._s(_vm._f("capitalize")(_vm.mode)) +
                              " Customer\n            "
                          ),
                          _c("i", { staticClass: "far fa-paper-plane ml-1" })
                        ]
                      )
                    ]
                  )
                ]
              )
            ])
          ])
        : _vm._e()
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
    require("vue-hot-reload-api")      .rerender("data-v-0ba4287c", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-2f542aae\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/AppNavigation.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "h4",
    {
      staticClass: "mx-md-3 mx-0 py-0 my-0 text-center clearfix",
      attrs: { id: "app-navigation" }
    },
    [
      _vm.$routerHistory.hasPrevious()
        ? _c(
            "router-link",
            {
              staticClass:
                "text-secondary float-left ml-1 pl-2 ml-sm-4 pl-sm-3",
              attrs: { to: _vm.previous, id: "back" }
            },
            [
              _c("span", { staticClass: "mr-5 float-left" }, [
                _c("i", {
                  staticClass: "far fa-arrow-alt-circle-left float-left"
                }),
                _vm._v(" "),
                _c(
                  "small",
                  { staticClass: "float-left ml-2 d-none d-sm-block" },
                  [_vm._v("Back")]
                )
              ])
            ]
          )
        : _vm._e(),
      _vm._v(" "),
      _c(
        "strong",
        {
          staticClass: "mx-auto w-100 float-left",
          attrs: { "data-title": "title" }
        },
        [
          _c("span", { staticClass: "d-none d-sm-block" }, [
            _vm._v(_vm._s(_vm.pageTitle))
          ]),
          _vm._v(" "),
          _c("span", { staticClass: "d-block d-sm-none" }, [
            _vm._v(_vm._s(_vm.pageTitleSmall))
          ])
        ]
      ),
      _vm._v(" "),
      _vm.$routerHistory.hasForward()
        ? _c(
            "router-link",
            {
              staticClass:
                "text-secondary float-right mr-1 pr-2 mr-sm-4 pr-sm-3",
              attrs: { to: _vm.forward, id: "forward" }
            },
            [
              _c("span", { staticClass: "ml-5 float-right" }, [
                _c("i", {
                  staticClass: "far fa-arrow-alt-circle-right float-right"
                }),
                _vm._v(" "),
                _c(
                  "small",
                  { staticClass: "float-right mr-2 d-none d-sm-block" },
                  [_vm._v("Forward")]
                )
              ])
            ]
          )
        : _vm._e()
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
    require("vue-hot-reload-api")      .rerender("data-v-2f542aae", module.exports)
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
      _vm.value && _vm.usage === "verification"
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

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-f4889778\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/CustomerProfile.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("transition", { attrs: { name: "fade" } }, [
    _c(
      "div",
      { class: _vm.full && "px-md-4 px-2" },
      [
        _vm.full
          ? _c("app-navigation", {
              attrs: {
                forward: { path: _vm.$routerHistory.next().path },
                previous: { path: _vm.$routerHistory.previous().path },
                pageTitle: "Customer Profile",
                pageTitleSmall: "Customer Profile"
              }
            })
          : _vm._e(),
        _vm._v(" "),
        _vm.show
          ? _c(
              "div",
              {
                staticClass: "pt-md-3 pt-2 verification",
                attrs: { id: "employeeRegister" }
              },
              [
                _c(
                  "div",
                  { staticClass: "customer-profile card position-relative" },
                  [
                    _c("div", { staticClass: "design" }),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass:
                          "col-md-4 col-sm-4 col-12 px-0 pb-md-4 pb-sm-3 pb-0 pt-md-5 pt-4 float-left"
                      },
                      [
                        _c("div", { staticClass: "pt-md-3 pt-sm-2 pt-1" }, [
                          _c(
                            "div",
                            {
                              staticClass:
                                "justify-content-center d-flex position-relative z-1"
                            },
                            [
                              _c("span", { staticClass: "img-border" }, [
                                _vm.customer.document.passport_url
                                  ? _c("img", {
                                      staticClass:
                                        "profile-picture rounded-circle",
                                      attrs: {
                                        src: _vm.passport,
                                        alt: "customer profile pic"
                                      }
                                    })
                                  : _c("i", {
                                      staticClass: "no-image fas fa-user-alt"
                                    })
                              ])
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass:
                                "justify-content-center d-flex position-relative z-1 pt-md-4 pt-sm-4 pt-2"
                            },
                            [
                              _c("span", { staticClass: "w-50" }, [
                                _c(
                                  "div",
                                  {
                                    staticClass:
                                      "text-right px-4 py-3 text-light text-muted m-0"
                                  },
                                  [
                                    _vm._v(
                                      "\n                                    Status"
                                    ),
                                    _c("i", {
                                      staticClass: "ml-3 fas fa-briefcase"
                                    })
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  {
                                    staticClass: "data text-right px-4 py-3 m-0"
                                  },
                                  [
                                    _vm._v(
                                      _vm._s(
                                        _vm._f("capitalize")(
                                          _vm.customer.employment_status
                                        )
                                      )
                                    )
                                  ]
                                )
                              ]),
                              _vm._v(" "),
                              _c("span", { staticClass: "separator" }),
                              _vm._v(" "),
                              _c("span", { staticClass: "w-50" }, [
                                _c(
                                  "div",
                                  {
                                    staticClass:
                                      "px-4 py-3 text-muted text-light m-0"
                                  },
                                  [
                                    _c("i", {
                                      staticClass: "mr-3 fas fa-transgender"
                                    }),
                                    _vm._v(
                                      "Gender\n                                "
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  { staticClass: "data px-4 py-3 m-0" },
                                  [
                                    _vm._v(
                                      _vm._s(
                                        _vm._f("capitalize")(
                                          _vm.customer.gender
                                        )
                                      )
                                    )
                                  ]
                                )
                              ])
                            ]
                          )
                        ])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass:
                          "col-md-8 col-sm-8 col-12 px-0 pb-4 pt-md-5 pt-sm-5 pt-0 float-left"
                      },
                      [
                        _c("div", { staticClass: "pt-md-4 pt-0 clearfix" }, [
                          _c(
                            "div",
                            {
                              staticClass:
                                "float-left p-0 m-0 col-md-4 col-sm-6 small-center"
                            },
                            [
                              _c(
                                "h4",
                                {
                                  staticClass:
                                    "mt-0 pt-md-5 pt-sm-4 pt-0 mb-md-5 mb-sm-4 mb-3"
                                },
                                [
                                  _c("i", {
                                    staticClass: "mr-3 far fa-user-circle"
                                  }),
                                  _vm._v(" "),
                                  _c("strong", [
                                    _vm._v(
                                      _vm._s(
                                        _vm._f("capitalize")(
                                          _vm.$getCustomerFullName(_vm.customer)
                                        )
                                      )
                                    )
                                  ])
                                ]
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass:
                                "float-left p-0 m-0 col-md-4 col-sm-6 d-flex justify-content-center"
                            },
                            [
                              _c(
                                "h4",
                                {
                                  staticClass:
                                    "mt-0 pt-md-5 pt-sm-4 pt-0 mb-md-5 mb-sm-4 mb-4 text-muted"
                                },
                                [
                                  _c("strong", [
                                    _vm._v(
                                      "Customer ID: " + _vm._s(_vm.customer.id)
                                    )
                                  ])
                                ]
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass:
                                "float-left p-0 m-0 col-md-4 col-12 d-flex justify-content-center"
                            },
                            [
                              _c(
                                "span",
                                {
                                  class:
                                    "status mt-md-5 my-sm-2 mt-0 " +
                                    (_vm.approved ? "approved" : "not-approved")
                                },
                                [
                                  _vm._v(
                                    "\n                                " +
                                      _vm._s(
                                        _vm.approved
                                          ? "APPROVED"
                                          : "NOT APPROVED"
                                      ) +
                                      "\n                                "
                                  ),
                                  _c("i", {
                                    class:
                                      "ml-3 fas fa-" +
                                      (_vm.approved ? "check" : "times")
                                  })
                                ]
                              )
                            ]
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "pt-4" }, [
                          _c("table", { staticClass: "table" }, [
                            _c("tbody", [
                              _c("tr", [
                                _c("th", { staticClass: "text-muted" }, [
                                  _c("i", {
                                    staticClass: "mr-3 fas fa-mobile-alt"
                                  }),
                                  _vm._v("Phone Number")
                                ]),
                                _vm._v(" "),
                                _c("td", [
                                  _vm._v(_vm._s(_vm.customer.telephone))
                                ])
                              ]),
                              _vm._v(" "),
                              _vm.$store.getters.auth("DVAAccess")
                                ? _c("tr", [
                                    _c("th", { staticClass: "text-muted" }, [
                                      _c("i", {
                                        staticClass:
                                          "mr-3 fas fa-map-marker-alt"
                                      }),
                                      _vm._v("Address")
                                    ]),
                                    _vm._v(" "),
                                    _c("td", [
                                      _vm._v(
                                        _vm._s(
                                          _vm._f("capitalize")(
                                            _vm.$getCustomerAddress(
                                              _vm.customer
                                            )
                                          )
                                        ) + "\n                                "
                                      )
                                    ])
                                  ])
                                : _vm._e(),
                              _vm._v(" "),
                              _c("tr", [
                                _c("th", { staticClass: "text-muted" }, [
                                  _c("i", { staticClass: "mr-3 fas fa-gift" }),
                                  _vm._v("Registered On")
                                ]),
                                _vm._v(" "),
                                _c("td", [
                                  _vm._v(
                                    _vm._s(_vm.customer.date_of_registration)
                                  )
                                ])
                              ]),
                              _vm._v(" "),
                              _c("tr", [
                                _c("th", { staticClass: "text-muted" }, [
                                  _c("i", {
                                    staticClass: "mr-3 far fa-user-circle"
                                  }),
                                  _vm._v("Registered By")
                                ]),
                                _vm._v(" "),
                                _c("td", [
                                  _vm._v(
                                    _vm._s(
                                      _vm._f("capitalize")(
                                        _vm.customer.user
                                          ? _vm.customer.user.full_name
                                          : "user not in record"
                                      )
                                    ) + "\n                                "
                                  )
                                ])
                              ]),
                              _vm._v(" "),
                              _c("tr", [
                                _c("th", { staticClass: "text-muted" }, [
                                  _c("i", {
                                    staticClass: "mr-3 far fa-building"
                                  }),
                                  _vm._v("Branch")
                                ]),
                                _vm._v(" "),
                                _c("td", [
                                  _vm._v(
                                    _vm._s(_vm._f("capitalize")(_vm.branch))
                                  )
                                ])
                              ])
                            ])
                          ])
                        ])
                      ]
                    )
                  ]
                ),
                _vm._v(" "),
                _vm.full
                  ? _c("div", [_vm._v("Full profile goes here")])
                  : _vm._e()
              ]
            )
          : _vm._e()
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
    require("vue-hot-reload-api")      .rerender("data-v-f4889778", module.exports)
  }
}

/***/ }),

/***/ "./resources/assets/js/components/AppNavigation.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"babel-preset-env\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"babel-plugin-syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/AppNavigation.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-2f542aae\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/AppNavigation.vue")
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
Component.options.__file = "resources\\assets\\js\\components\\AppNavigation.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2f542aae", Component.options)
  } else {
    hotAPI.reload("data-v-2f542aae", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/js/components/CustomerProfile.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"babel-preset-env\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"babel-plugin-syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/CustomerProfile.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-f4889778\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/CustomerProfile.vue")
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
Component.options.__file = "resources\\assets\\js\\components\\CustomerProfile.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-f4889778", Component.options)
  } else {
    hotAPI.reload("data-v-f4889778", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


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

/***/ "./resources/assets/js/utilities/sms.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Message = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _api = __webpack_require__("./resources/assets/js/utilities/api.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Message = exports.Message = function () {
    function Message(message, contacts) {
        var logToDB = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
        var userId = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

        _classCallCheck(this, Message);

        this.user_id = userId;
        this.message = message;
        this.logToDB = logToDB;
        this.contacts = contacts.split(",").filter(function (e) {
            return (/\S/.test(e)
            );
        }).map(function (contact) {
            return '234' + contact.trim().substr(1);
        }).join(',');
        this.setPages();
        this.setContactCount();
    }

    _createClass(Message, [{
        key: "setContactCount",
        value: function setContactCount() {
            this.contact_count = this.contacts.split(',').length;
        }
    }, {
        key: "setPages",
        value: function setPages() {
            this.pages = Math.ceil(this.message.length / 160);
        }
    }, {
        key: "send",
        value: function send(callback) {
            var _this = this;

            (0, _api.get)("/api/message/create?to=" + this.contacts + "&message=" + this.message).then(function (res) {
                if (res.status === 200 && _this.logToDB) {
                    delete _this.logToDB;
                    (0, _api.post)('/api/message', _this);
                }
                return !!callback && callback(res);
            }).catch(function (err) {
                return !!callback && callback(err);
            });
        }
    }]);

    return Message;
}();

/***/ }),

/***/ "./resources/assets/js/views/DVA/verification/verification.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"babel-preset-env\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"babel-plugin-syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/views/DVA/verification/verification.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-07317a72\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/views/DVA/verification/verification.vue")
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
Component.options.__file = "resources\\assets\\js\\views\\DVA\\verification\\verification.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-07317a72", Component.options)
  } else {
    hotAPI.reload("data-v-07317a72", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/js/views/shared/customerForm.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"babel-preset-env\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"babel-plugin-syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/views/shared/customerForm.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-0ba4287c\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/views/shared/customerForm.vue")
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
Component.options.__file = "resources\\assets\\js\\views\\shared\\customerForm.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0ba4287c", Component.options)
  } else {
    hotAPI.reload("data-v-0ba4287c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});
=======
webpackJsonp([0,1],{"1gIg":function(e,t,a){var r=a("VU/8")(a("wBhk"),a("9sZT"),!1,null,null,null);e.exports=r.exports},"3o0A":function(e,t,a){var r=a("VU/8")(a("NOe0"),a("4GFf"),!1,null,null,null);e.exports=r.exports},"4GFf":function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("transition",{attrs:{name:"fade"}},[a("div",{staticClass:"pt-md-3 pt-2 verification",attrs:{id:"employeeRegister"}},[a("div",{staticClass:"card"},[a("ul",{staticClass:"nav nav-tabs bg-default justify-content-center"},[a("h6",[e._v(e._s(e._f("capitalize")(e.action))+" Customer")])]),e._v(" "),a("div",{staticClass:"card-body p-4"},[a("form",{on:{submit:function(t){return t.preventDefault(),e.processForm(t)}}},[a("div",{staticClass:"m-0 p-0 col-12 form-group clearfix"},[a("label",{staticClass:"w-100"},[e._v("Customer ID")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.customer_id,expression:"customer_id"},{name:"validate",rawName:"v-validate",value:"required|numeric",expression:"'required|numeric'"}],staticClass:"form-control col-lg-9 col-md-8 col-sm-8 col-12 float-left mt-1",attrs:{"data-vv-as":"customer id",name:"customer_id"},domProps:{value:e.customer_id},on:{onkeyUp:e.check,input:function(t){t.target.composing||(e.customer_id=t.target.value)}}}),e._v(" "),a("div",{staticClass:"col-lg-3 col-md-4 col-sm-4 col-12 float-right px-md-3 mt-md-0 px-sm-3 mt-sm-0 mt-2 px-0"},[a("button",{staticClass:"btn btn-block bg-default my-1",attrs:{disabled:e.check,type:"submit"}},[e._v("\n                                Fetch customer details "),a("i",{staticClass:"far fa-paper-plane ml-1"})])]),e._v(" "),e.errors.first("customer_id")?a("small",{staticClass:"form-text text-muted w-100"},[e._v("\n                            "+e._s(e.errors.first("customer_id"))+"\n                        ")]):e._e()])])])]),e._v(" "),a("transition",{attrs:{name:"fade"}},[e.customer?a("div",[a("customer-profile",{attrs:{"view-customer":e.customer}}),e._v(" "),"update"!==e.action?a("div",[e._l(e.cardView,function(t){return a("div",{staticClass:"float-left col-lg-3 col-sm-6 px-0 px-sm-3"},[a("div",{staticClass:"card card-stats",class:e.DivClass(t)},[a("div",{staticClass:"card-body "},[a("div",{staticClass:"statistics statistics-horizontal"},[a("div",{staticClass:"info info-horizontal"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-4"},[a("div",{staticClass:"icon icon-warning icon-circle position-relative"},[a("i",{staticClass:"fas",class:e.IconClass(t)})])]),e._v(" "),a("div",{staticClass:"col-8 text-right"},[a("h4",{staticClass:"info-title font-weight-bold mb-0"},[e._v(e._s(e._f("capitalize")(t)))]),e._v(" "),a("h6",{staticClass:"stats-title"},[e._v("\n                                                    "+e._s(e.key(t)?"Verified":"Not Verified")+"\n                                                ")])])])])])]),e._v(" "),a("div",{staticClass:"card-footer pointer",on:{click:function(a){e.modal(t+"_modal")}}},[a("i",{staticClass:"now-ui-icons ui-1_calendar-60 pr-1"}),e._v("\n                                "+e._s(e.key(t)?"Verified":"Not Verified")+"\n                                "),e.key(t)?a("span",{staticClass:"float-right",staticStyle:{"font-size":"10px"}},[e._v("\n                                        by - "+e._s(e._f("capitalize")("passport"==t||"id_card"==t?e.customer.document.staff_name:e.customer[t].staff_name))+"\n                                ")]):a("small",[e._v("(Click here to update status!)")])])])])}),e._v(" "),a("hr",{staticClass:"style-two"})],2):e._e()],1):e._e()]),e._v(" "),"update"!==e.action?a("div",[e._l(e.picsView,function(t){return a("div",{staticClass:"modal fade",attrs:{id:t+"_modal"}},[a("div",{staticClass:"modal-dialog"},[a("div",{staticClass:"modal-content"},[a("div",{staticClass:"modal-header py-2"},[a("h6",{staticClass:"modal-title py-1"},[e._v(e._s(e._f("capitalize")(t))+" Verification Status")]),e._v(" "),a("a",{staticClass:"close py-1",attrs:{"aria-label":"Close","data-dismiss":"modal",href:"javascript:"}},[a("span",{staticClass:"modal-close text-danger",attrs:{"aria-hidden":"true"}},[a("i",{staticClass:"fas fa-times"})])])]),e._v(" "),e.customer?a("form",{on:{submit:function(a){a.preventDefault(),e.save(t,t+"_modal")}}},[a("div",{staticClass:"modal-body"},[a("div",{staticClass:"upload-image p-2"},[a("div",{staticClass:"upload-box"},[a("image-upload",{model:{value:e.$data.form[t],callback:function(a){e.$set(e.$data.form,t,a)},expression:"$data['form'][type]"}})],1)]),e._v(" "),e.error[t]?a("small",[e._v(e._s(e.error[t][0]))]):e._e()]),e._v(" "),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"m-2 btn btn-secondary",attrs:{"data-dismiss":"modal",type:"button"}},[e._v("\n                                    cancel\n                                ")]),e._v(" "),a("button",{staticClass:"m-2 btn bg-default",attrs:{disabled:e.$isProcessing,type:"submit"}},[e._v("\n                                    Save changes "),a("i",{staticClass:"far fa-paper-plane ml-1"})])])]):e._e()])])])}),e._v(" "),a("div",{staticClass:"modal fade",attrs:{id:"address_modal"}},[a("div",{staticClass:"modal-dialog modal-lg"},[a("div",{staticClass:"modal-content"},[a("div",{staticClass:"modal-header py-2"},[a("h6",{staticClass:"modal-title py-1"},[e._v("Address Verification Status")]),e._v(" "),a("a",{staticClass:" py-1",staticStyle:{"min-height":"30px","min-width":"30px"},on:{click:function(t){e.modal("address_modal")}}},[a("span",{staticClass:"text-danger"},[a("i",{staticClass:"fas fa-times"})])])]),e._v(" "),a("form",{attrs:{"data-vv-scope":"address"},on:{submit:function(t){t.preventDefault(),e.validate("address")}}},[a("div",{staticClass:"modal-body p-5"},[a("table",{staticClass:"mb-3 w-100 info-table"},[a("tbody",{staticClass:"px-3"},[a("tr",[a("th",[a("i",{staticClass:"fas fa-map-marker-alt mx-4"})]),e._v(" "),a("td",[e._v(e._s(e.$getCustomerAddress(e.customer)))])])])]),e._v(" "),a("div",{staticClass:"w-100 p-3"},[a("div",{staticClass:"clearfix"},[a("div",{staticClass:"form-group float-left col-md-6 col-12 pr-md-3 pr-0 pl-0"},[a("label",[e._v("Date of Visitation")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.address.date_of_visit,expression:"address.date_of_visit"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",attrs:{"data-vv-as":"date of visit",name:"date_of_visit",type:"date"},domProps:{value:e.address.date_of_visit},on:{input:function(t){t.target.composing||e.$set(e.address,"date_of_visit",t.target.value)}}}),e._v(" "),e.errors.first("address.date_of_visit")?a("small",[e._v("\n                                                "+e._s(e.errors.first("address.date_of_visit"))+"\n                                            ")]):e._e()]),e._v(" "),a("div",{staticClass:"form-group float-left  col-md-6 col-12  pl-md-3 pl-0 pr-0"},[a("label",[e._v("Time of Visit")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.address.time_of_visit,expression:"address.time_of_visit"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",attrs:{"data-vv-as":"time of visit",name:"time_of_visit",type:"time"},domProps:{value:e.address.time_of_visit},on:{input:function(t){t.target.composing||e.$set(e.address,"time_of_visit",t.target.value)}}}),e._v(" "),e.errors.first("address.time_of_visit")?a("small",[e._v("\n                                                "+e._s(e.errors.first("address.time_of_visit"))+"\n                                            ")]):e._e()])]),e._v(" "),a("div",{staticClass:"form-group clearfix"},[a("label",[e._v("1. Did you meet the customer?")]),e._v(" "),a("span",{staticClass:"radio mx-5"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.address.customer_meetup,expression:"address.customer_meetup"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{"data-vv-as":"customer meetup",id:"yes",name:"customer_meetup",type:"radio",value:"yes"},domProps:{checked:e._q(e.address.customer_meetup,"yes")},on:{change:function(t){e.$set(e.address,"customer_meetup","yes")}}}),e._v(" "),a("label",{attrs:{for:"yes"}},[e._v("Yes")])]),e._v(" "),a("span",{staticClass:"radio ml-5"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.address.customer_meetup,expression:"address.customer_meetup"}],attrs:{id:"no",name:"customer_meetup",type:"radio",value:"no"},domProps:{checked:e._q(e.address.customer_meetup,"no")},on:{change:function(t){e.$set(e.address,"customer_meetup","no")}}}),e._v(" "),a("label",{attrs:{for:"no"}},[e._v("No")])]),e._v(" "),e.errors.first("address.customer_meetup")?a("small",[e._v("\n                                            "+e._s(e.errors.first("address.customer_meetup"))+"\n                                        ")]):e._e()]),e._v(" "),a("div",{staticClass:"form-group clearfix"},[a("label",[e._v("\n                                            2. Is the address/location same with what you have in the application\n                                            form?\n                                        ")]),e._v(" "),a("span",{staticClass:"radio mx-5"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.address.confirm_address,expression:"address.confirm_address"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{"data-vv-as":"confirm address",id:"add_yes",name:"confirm_address",type:"radio",value:"yes"},domProps:{checked:e._q(e.address.confirm_address,"yes")},on:{change:function(t){e.$set(e.address,"confirm_address","yes")}}}),e._v(" "),a("label",{attrs:{for:"add_yes"}},[e._v("Yes")])]),e._v(" "),a("span",{staticClass:"radio ml-5"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.address.confirm_address,expression:"address.confirm_address"}],attrs:{id:"add_no",name:"confirm_address",type:"radio",value:"no"},domProps:{checked:e._q(e.address.confirm_address,"no")},on:{change:function(t){e.$set(e.address,"confirm_address","no")}}}),e._v(" "),a("label",{attrs:{for:"add_no"}},[e._v("No")])]),e._v(" "),e.errors.first("address.confirm_address")?a("small",[e._v("\n                                            "+e._s(e.errors.first("address.confirm_address"))+"\n                                        ")]):e._e()]),e._v(" "),a("div",{staticClass:"form-group clearfix"},[a("label",[e._v("3. What does he/she do or sell?")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.address.what_he_sells,expression:"address.what_he_sells"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",attrs:{"data-vv-as":"what he sells",name:"what_he_sells",placeholder:"comment here...",type:"text"},domProps:{value:e.address.what_he_sells},on:{input:function(t){t.target.composing||e.$set(e.address,"what_he_sells",t.target.value)}}}),e._v(" "),e.errors.first("address.what_he_sells")?a("small",[e._v("\n                                            "+e._s(e.errors.first("address.what_he_sells"))+"\n                                        ")]):e._e()]),e._v(" "),a("div",{staticClass:"form-group clearfix"},[a("label",[e._v("4. Look around the shop and check the nature and condition of the\n                                            business. Write down what you see in terms of address, stock value,\n                                            premise, type of shop or business, sales etc.")]),e._v(" "),a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.address.business_info,expression:"address.business_info"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",attrs:{"data-vv-as":"business info",name:"business_info",placeholder:"comment here...",rows:"1"},domProps:{value:e.address.business_info},on:{input:function(t){t.target.composing||e.$set(e.address,"business_info",t.target.value)}}}),e._v(" "),e.errors.first("address.business_info")?a("small",[e._v("\n                                            "+e._s(e.errors.first("address.business_info"))+"\n                                        ")]):e._e()]),e._v(" "),a("div",{staticClass:"form-group clearfix"},[a("label",[e._v("5. Get exact information of choice of product and specification by\n                                            asking for\n                                            Example; what exact phone do you want? Let him/her specify e.g. INFINIX\n                                            SMART or HOT 4 IPHONE\n                                        ")]),e._v(" "),a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.address.product_info,expression:"address.product_info"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control w-100",attrs:{"data-vv-as":"product info",name:"product_info",placeholder:"comment here...",rows:"1"},domProps:{value:e.address.product_info},on:{input:function(t){t.target.composing||e.$set(e.address,"product_info",t.target.value)}}}),e._v(" "),e.errors.first("address.product_info")?a("small",[e._v("\n                                            "+e._s(e.errors.first("address.product_info"))+"\n                                        ")]):e._e()]),e._v(" "),a("div",{staticClass:"form-group clearfix"},[a("label",[e._v("\n                                            6. Are you aware of the payment plan?\n                                        ")]),e._v(" "),a("span",{staticClass:"radio mx-5"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.address.aware_of_plan,expression:"address.aware_of_plan"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{"data-vv-as":"aware of plan",id:"pay_yes",name:"aware_of_plan",type:"radio",value:"yes"},domProps:{checked:e._q(e.address.aware_of_plan,"yes")},on:{change:function(t){e.$set(e.address,"aware_of_plan","yes")}}}),e._v(" "),a("label",{attrs:{for:"pay_yes"}},[e._v("yes")])]),e._v(" "),a("span",{staticClass:"radio ml-5"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.address.aware_of_plan,expression:"address.aware_of_plan"}],attrs:{id:"pay_no",name:"aware_of_plan",type:"radio",value:"no"},domProps:{checked:e._q(e.address.aware_of_plan,"no")},on:{change:function(t){e.$set(e.address,"aware_of_plan","no")}}}),e._v(" "),a("label",{attrs:{for:"pay_no"}},[e._v("no")])]),e._v(" "),e.errors.first("address.aware_of_plan")?a("small",[e._v("\n                                            "+e._s(e.errors.first("address.aware_of_plan"))+"\n                                        ")]):e._e()]),e._v(" "),a("div",{staticClass:"form-group clearfix"},[a("label",[e._v("\n                                            7. Did you get information about the customer from his/her neighbours?\n                                        ")]),e._v(" "),a("span",{staticClass:"radio mx-5"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.info_from_neighbors,expression:"info_from_neighbors"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{"data-vv-as":"info from neighbors",id:"neigh_yes",name:"info_from_neighbors",type:"radio",value:"yes"},domProps:{checked:e._q(e.info_from_neighbors,"yes")},on:{change:function(t){e.info_from_neighbors="yes"}}}),e._v(" "),a("label",{attrs:{for:"neigh_yes"}},[e._v("yes")])]),e._v(" "),a("span",{staticClass:"radio ml-5"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.info_from_neighbors,expression:"info_from_neighbors"}],attrs:{id:"neigh_no",name:"info_from_neighbors",type:"radio",value:"no"},domProps:{checked:e._q(e.info_from_neighbors,"no")},on:{change:function(t){e.info_from_neighbors="no"}}}),e._v(" "),a("label",{attrs:{for:"neigh_no"}},[e._v("no")])]),e._v(" "),e.errors.first("address.info_from_neighbors")?a("small",[e._v("\n                                            "+e._s(e.errors.first("address.info_from_neighbors"))+"\n                                        ")]):e._e(),e._v(" "),"yes"==e.info_from_neighbors?a("div",[a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.address.info_from_neighbors_desc,expression:"address.info_from_neighbors_desc"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",attrs:{"data-vv-as":"info from neighbors desc",name:"info_from_neighbors_desc",placeholder:"comment here...",rows:"1"},domProps:{value:e.address.info_from_neighbors_desc},on:{input:function(t){t.target.composing||e.$set(e.address,"info_from_neighbors_desc",t.target.value)}}}),e._v(" "),e.errors.first("address.info_from_neighbors_desc")?a("small",[e._v("\n                                                "+e._s(e.errors.first("address.info_from_neighbors_desc"))+"\n                                            ")]):e._e()]):e._e()]),e._v(" "),a("div",{staticClass:"form-group clearfix"},[a("label",[e._v("8. And how long has he/she been working/trading in that particular\n                                            place?\n                                        ")]),e._v(" "),a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.address.business_or_work_duration,expression:"address.business_or_work_duration"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",attrs:{"data-vv-as":"business or work duration",name:"business_or_work_duration",placeholder:"address",rows:"1"},domProps:{value:e.address.business_or_work_duration},on:{input:function(t){t.target.composing||e.$set(e.address,"business_or_work_duration",t.target.value)}}}),e._v(" "),e.errors.first("address.business_or_work_duration")?a("small",[e._v("\n                                            "+e._s(e.errors.first("address.business_or_work_duration"))+"\n                                        ")]):e._e()]),e._v(" "),e.addressBtns?a("div",[a("div",{staticClass:"w-100 clearfix"},[a("button",{staticClass:"btn btn-success btn-lg btn-block",attrs:{disabled:e.$isProcessing,type:"submit"},on:{click:function(t){e.address.approval_status=1}}},[e._v("\n                                                Successful - Update Details\n                                                "),a("i",{staticClass:"far fa-paper-plane ml-1"})])]),e._v(" "),a("div",{staticClass:"pt-2 w-100 clearfix"},[a("div",{staticClass:"pr-2 pl-md-0 pl-2 col-md-6 col-12 m-0 float-left"},[a("button",{staticClass:"m-0 btn btn-lg btn-block btn-secondary",attrs:{type:"button"},on:{click:function(t){e.modal("address_modal")}}},[e._v("\n                                                    Cancel\n                                                ")])]),e._v(" "),a("div",{staticClass:"pl-2 pr-md-0 pr-2 col-md-6 col-12 float-left"},[a("button",{staticClass:"m-0 btn btn-lg btn-block btn-primary",attrs:{disabled:e.$isProcessing,type:"submit"},on:{click:function(t){e.address.approval_status=0}}},[e._v("\n                                                    Not-Successful - Update Details\n                                                    "),a("i",{staticClass:"far fa-paper-plane ml-1"})])])])]):a("h5",[e._v("\n                                        This customers details has already been updated once and cannot be changed!\n                                    ")])])])])])])]),e._v(" "),e._l(e.veriView,function(t){return a("div",{staticClass:"modal fade",attrs:{id:t+"_modal"}},[a("div",{staticClass:"modal-dialog"},[a("div",{staticClass:"modal-content"},[a("div",{staticClass:"modal-header py-2"},[a("h6",{staticClass:"modal-title py-1"},[e._v("\n                                "+e._s(e._f("capitalize")(t))+" "+e._s("processing_fee"!==t?"Verification":"")+" Status\n                            ")]),e._v(" "),a("a",{staticClass:"close py-1",attrs:{"aria-label":"Close","data-dismiss":"modal",href:"javascript:"}},[a("span",{staticClass:"modal-close text-danger"},[a("i",{staticClass:"fas fa-times"})])])]),e._v(" "),e.customer?a("form",{attrs:{"data-vv-scope":t},on:{submit:function(a){a.preventDefault(),e.validate(t)}}},[a("div",{staticClass:"modal-body"},["processing_fee"!==t?a("table",{staticClass:"mb-3 info-table"},[a("tbody",[a("tr",[a("th",[a("i",{staticClass:"fas fa-map-marker-alt"})]),e._v(" "),e.customer[t+"_state"]?a("td",[e._v(e._s(e.$data[t+"_address"]))]):a("td",[e._v("please update customer details!")])]),e._v(" "),a("tr",[a("th",[a("i",{staticClass:"fas fa-mobile-alt"})]),e._v(" "),e.customer[t+"_telno"]?a("td",[e._v(e._s(e.customer[t+"_telno"]))]):a("td",[e._v("please update customer details!")])]),e._v(" "),a("tr",[a("th",[a("i",{staticClass:" fas fa-user-circle"})]),e._v(" "),e.customer[t+"_first_name"]?a("td",[e._v("\n                                            "+e._s(e.customer[t+"_first_name"]+" "+e.customer[t+"_last_name"])+"\n                                        ")]):a("td",[e._v("please update customer details!")])]),e._v(" "),a("tr",[a("th",[a("i",{staticClass:"fas fa-user-circle"})]),e._v(" "),e.customer[t+"_relationship"]?a("td",[e._v(e._s(e._f("capitalize")(e.customer[t+"_relationship"]))+"\n                                        ")]):a("td",[e._v("please update customer details!")])])])]):e._e(),e._v(" "),a("div",{staticClass:"form-group col-12 px-2 clearfix my-0"},[a("div",{staticClass:"clearfix"},[a("div",{staticClass:"form-group float-left col-md-6 col-12 pr-md-3 pr-0 pl-0"},[a("label",[e._v("\n                                                Date "+e._s("processing_fee"!==t?"of Call":"Collected")+"\n                                            ")]),e._v(" "),a("input","processing_fee"!==t?{directives:[{name:"model",rawName:"v-model",value:e.$data[t].date_of_call,expression:"$data[type].date_of_call"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",attrs:{name:"date_of_call",type:"date"},domProps:{value:e.$data[t].date_of_call},on:{input:function(a){a.target.composing||e.$set(e.$data[t],"date_of_call",a.target.value)}}}:{directives:[{name:"model",rawName:"v-model",value:e.$data[t].date_collected,expression:"$data[type].date_collected"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",attrs:{name:"date_of_call",type:"date"},domProps:{value:e.$data[t].date_collected},on:{input:function(a){a.target.composing||e.$set(e.$data[t],"date_collected",a.target.value)}}}),e._v(" "),e.errors.first(t+".date_of_call")?a("small",[e._v("\n                                                "+e._s(e.errors.first(t+".date_of_call"))+"\n                                            ")]):e._e(),e._v(" "),e.errors.first(t+".date_collected")?a("small",[e._v("\n                                                "+e._s(e.errors.first(t+".date_collected"))+"\n                                            ")]):e._e()]),e._v(" "),a("div",{staticClass:"form-group float-left col-md-6 col-12 pl-md-3 pl-0 pr-0"},[a("label",[e._v("\n                                                Time "+e._s("processing_fee"!==t?"of Call":"Collected")+"\n                                            ")]),e._v(" "),a("input","processing_fee"!==t?{directives:[{name:"model",rawName:"v-model",value:e.$data[t].time_of_call,expression:"$data[type].time_of_call"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",attrs:{name:"time_of_call",type:"time"},domProps:{value:e.$data[t].time_of_call},on:{input:function(a){a.target.composing||e.$set(e.$data[t],"time_of_call",a.target.value)}}}:{directives:[{name:"model",rawName:"v-model",value:e.$data[t].time_collected,expression:"$data[type].time_collected"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",attrs:{name:"time_collected",type:"time"},domProps:{value:e.$data[t].time_collected},on:{input:function(a){a.target.composing||e.$set(e.$data[t],"time_collected",a.target.value)}}}),e._v(" "),e.errors.first(t+".time_of_call")?a("small",[e._v("\n                                                "+e._s(e.errors.first(t+".time_of_call"))+"\n                                            ")]):e._e(),e._v(" "),e.errors.first(t+".time_collected")?a("small",[e._v("\n                                                "+e._s(e.errors.first(t+".time_collected"))+"\n                                            ")]):e._e()])]),e._v(" "),a("div",{staticClass:"clearfix"},[a("label",{staticClass:"w-100"},[e._v("\n                                            "+e._s(e._f("capitalize")(t))+"\n                                            "+e._s("processing_fee"!==t?"Consent":"Amount(Naira)")+"\n                                        ")]),e._v(" "),a("div","processing_fee"!==t?[a("div",{staticClass:"radio p-0 col-6 float-left"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.$data[t].consent,expression:"$data[type].consent"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{id:t+"_yes",name:"consent",type:"radio",value:"1"},domProps:{checked:e._q(e.$data[t].consent,"1")},on:{change:function(a){e.$set(e.$data[t],"consent","1")}}}),e._v(" "),a("label",{attrs:{for:t+"_yes"}},[e._v("Gave Consent")])]),e._v(" "),a("div",{staticClass:"radio p-0 col-6 float-left"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.$data[t].consent,expression:"$data[type].consent"}],attrs:{id:t+"_no",name:"consent",type:"radio",value:"0"},domProps:{checked:e._q(e.$data[t].consent,"0")},on:{change:function(a){e.$set(e.$data[t],"consent","0")}}}),e._v(" "),a("label",{attrs:{for:t+"_no"}},[e._v("Did not Give Consent")])]),e._v(" "),e.errors.first(t+".consent")?a("small",[e._v("\n                                                "+e._s(e.errors.first(t+".consent"))+"\n                                            ")]):e._e()]:[a("div",{staticClass:"radio p-0 col-6 float-left"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.$data[t].amount,expression:"$data[type].amount"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",attrs:{disabled:"",name:"amount",type:"number"},domProps:{value:e.$data[t].amount},on:{input:function(a){a.target.composing||e.$set(e.$data[t],"amount",a.target.value)}}})]),e._v(" "),e.errors.first(t+".amount")?a("small",[e._v("\n                                                "+e._s(e.errors.first(t+".amount"))+"\n                                            ")]):e._e()])]),e._v(" "),a("div",{staticClass:"clearfix"},[a("label",[e._v("Report")]),e._v(" "),a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.$data[t].report,expression:"$data[type].report"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control w-100",attrs:{name:"report",placeholder:"comment here...",rows:"3"},domProps:{value:e.$data[t].report},on:{input:function(a){a.target.composing||e.$set(e.$data[t],"report",a.target.value)}}}),e._v(" "),e.errors.first(t+".report")?a("small",[e._v("\n                                            "+e._s(e.errors.first(t+".report"))+"\n                                        ")]):e._e()])])]),e._v(" "),e.$data[t+"Btns"]?a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"m-2 btn btn-secondary",attrs:{"data-dismiss":"modal",type:"button"}},[e._v("cancel\n                                ")]),e._v(" "),a("button",{staticClass:"m-2 btn bg-default",attrs:{disabled:e.$isProcessing,type:"submit"}},[e._v("\n                                    Save changes "),a("i",{staticClass:"far fa-paper-plane ml-1"})])]):a("div",{staticClass:"modal-footer"},[a("h5",[e._v("This customers details has already been updated once and cannot be changed!")])])]):e._e()])])])})],2):e._e()],1)])},staticRenderFns:[]}},"4I72":function(e,t,a){var r=a("VU/8")(a("WiSW"),a("r37U"),!1,null,null,null);e.exports=r.exports},"9sZT":function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("h4",{staticClass:"mx-md-3 mx-0 py-0 my-0 text-center clearfix",attrs:{id:"app-navigation"}},[e.$routerHistory.hasPrevious()?a("router-link",{staticClass:"text-secondary float-left ml-1 pl-2 ml-sm-4 pl-sm-3",attrs:{to:e.previous,id:"back"}},[a("span",{staticClass:"mr-5 float-left"},[a("i",{staticClass:"far fa-arrow-alt-circle-left float-left"}),e._v(" "),a("small",{staticClass:"float-left ml-2 d-none d-sm-block"},[e._v("Back")])])]):e._e(),e._v(" "),a("strong",{staticClass:"mx-auto w-100 float-left",attrs:{"data-title":"title"}},[a("span",{staticClass:"d-none d-sm-block"},[e._v(e._s(e.pageTitle))]),e._v(" "),a("span",{staticClass:"d-block d-sm-none"},[e._v(e._s(e.pageTitleSmall))])]),e._v(" "),e.$routerHistory.hasForward()?a("router-link",{staticClass:"text-secondary float-right mr-1 pr-2 mr-sm-4 pr-sm-3",attrs:{to:e.forward,id:"forward"}},[a("span",{staticClass:"ml-5 float-right"},[a("i",{staticClass:"far fa-arrow-alt-circle-right float-right"}),e._v(" "),a("small",{staticClass:"float-right mr-2 d-none d-sm-block"},[e._v("Forward")])])]):e._e()],1)},staticRenderFns:[]}},APzg:function(e,t,a){var r=a("VU/8")(a("nT0B"),a("RQTH"),!1,null,null,null);e.exports=r.exports},KUZS:function(e,t,a){var r=a("VU/8")(a("Wk+m"),a("xosg"),!1,null,null,null);e.exports=r.exports},NOe0:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=v(a("Xxa5")),s=v(a("I3G/")),o=a("ic49"),n=v(a("K23+")),i=a("m2tk"),l=a("p/p5"),m=a("nv24"),u=a("hyG2"),d=v(a("KUZS")),c=v(a("4I72"));function v(e){return e&&e.__esModule?e:{default:e}}function _(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,a){return function r(s,o){try{var n=t[s](o),i=n.value}catch(e){return void a(e)}if(!n.done)return Promise.resolve(i).then(function(e){r("next",e)},function(e){r("throw",e)});e(i)}("next")})}}var p=function(e){return"/api/customer/"+e.id};t.default={props:{action:{default:"verify"}},components:{ImageUpload:d.default,CustomerProfile:c.default},data:function(){return{customer:null,customer_id:"",addressBtns:!0,work_guarantorBtns:!0,personal_guarantorBtns:!0,processing_feeBtns:!0,info_from_neighbors:"",address:{},work_guarantor:{},personal_guarantor:{},processing_fee:{},picsView:["id_card","passport"],veriView:["work_guarantor","personal_guarantor","processing_fee"],veriData:["address","work_guarantor","personal_guarantor","processing_fee"],cardView:["passport","id_card","address","work_guarantor","personal_guarantor","processing_fee"],verification:{},form:{id_card:"",passport:"",document:""},error:{},storeURL:"",user:{},work_guarantor_address:"",personal_guarantor_address:""}},beforeRouteEnter:function(e,t,a){var r=e.query;r.id?(0,l.get)(p(r)).then(function(e){return a(function(t){return t.updateView(e.data)})}).catch(function(e){return a(function(t){return t.updateView(e.response.data)})}):a()},beforeRouteUpdate:function(e,t,a){var r=e.query,s=this;r.id?(0,l.get)(p(r)).then(function(e){return s.updateView(e.data)}).catch(function(e){return s.updateView(e.response.data)}).finally(function(){return a()}):a()},methods:{modal:function(e){$("#"+e).modal("toggle"),this.errors.clear(e)},key:function(e){return this.customer.verification[e]},IconClass:function(e){return{"fa-check":this.key(e),"fa-times":!this.key(e)}},DivClass:function(e){return{success:this.key(e),"no-success":!this.key(e)}},updateView:function(e){var t=this;this.user=e.hasOwnProperty("user")?e.user:null,s.default.set(this.$data,"customer",e.customer),this.$emit("update",e.customer),m.EventBus.$emit("customer",e.customer),e.customer?(this.verification=JSON.parse(JSON.stringify(e.customer.verification)),this.form.id_card=e.customer.document.id_card_url,this.form.passport=e.customer.document.passport_url,this.work_guarantor_address=this.customer.guaadd_houseno+",\n                    "+this.customer.guaadd_street+",\n                    "+this.customer.gua_area+",\n                    "+this.customer.work_guarantor_city+",\n                    "+this.customer.work_guarantor_state,this.personal_guarantor_address=this.customer.pguaadd_houseno+",\n                    "+this.customer.pguaadd_street+",\n                    "+this.customer.pgua_area+",\n                    "+this.customer.personal_guarantor_city+",\n                    "+this.customer.personal_guarantor_state,this.veriData.forEach(function(a){t[a+"Btns"]=!e.customer[a],t[a]=e.customer[a]?e.customer[a]:e["empty_"+a]})):n.default.setError(e.message,5e3)},done:function(){if(this.$getCustomerApprovalStatus(this.verification)){var e="Dear "+this.$getCustomerFullName(this.customer)+", Congratulations, You have been approved. Come to the store to make a purchase. Altara Credit Limited.";new i.Message(e,this.customer.telephone,!0,this.user.id).send()}},processForm:function(){var e=this;"verification"===this.$route.name&&this.$router.push("verification?id="+this.customer_id),"customerUpdate"===this.$route.name&&(this.$router.push("update?id="+this.customer_id),(0,l.get)(p(this.$route.query)).then(function(t){return e.updateView(t.data)}).catch(function(t){return e.updateView(t.response.data)}))},validate:function(e){var t,a=this;if(this.$network()){if(this.$LIPS(!0),this.veriView.includes(e)&&!this.customer.work_guarantor_first_name)return this.modal(e+"_modal"),this.$LIPS(!1),this.$scrollToTop(),void n.default.setError("Can not process verification. Update the customer guarantors details and try again!",1e4);"no"===this.info_from_neighbors&&(this.address.info_from_neighbors_desc=""),this[e].customer_id=this.customer.id,this[e].user_id=this.user.id,this[e].staff_name=this.user.full_name,this.$validator.validateAll(e).then((t=_(r.default.mark(function t(s){return r.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!s){t.next=7;break}return t.next=3,(0,l.post)("/api/"+e,a[e]).then(function(t){var r=t.data;a.updateView(r.response);var s="Customer ID : "+a.customer.id,i=a.$options.filters.capitalize(e),l="Customer"+i+"Verification";"address"===e&&(l+=a.address.approval_status?"Passed":"NotPassed"),(0,o.log)(l,s),n.default.setSuccess(i+" status updated!"),a.modal(e+"_modal"),a.done()}).catch(function(e){return n.default.setError(e.response.data.message)});case 3:a.$LIPS(!1),a.$scrollToTop(),t.next=8;break;case 7:a.$networkErr("form");case 8:case"end":return t.stop()}},t,a)})),function(e){return t.apply(this,arguments)}))}else this.$networkErr()},save:function(){var e=_(r.default.mark(function e(t,a){var s,i=this;return r.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.storeURL="/api/document/"+this.customer.document.id+"?_method=PUT&document="+t,this.$LIPS(!0),this.form.document=t,s=(0,u.toMulipartedForm)(this.form,"edit"),e.next=6,(0,l.post)(this.storeURL,s).then(function(e){var r=e.data;i.updateView(r.response),(0,o.log)("Customer"+i.$options.filters.capitalize(t)+"Upload","Customer ID : "+i.customer.id),i.modal(a),n.default.setSuccess("Document Updated Successfully!"),i.done()}).catch(function(e){return i.error=e.response.data.errors});case 6:this.$LIPS(!1),this.$scrollToTop();case 8:case"end":return e.stop()}},e,this)}));return function(t,a){return e.apply(this,arguments)}}()},computed:{check:function(){return!(!this.$isProcessing&&this.customer_id)}},mounted:function(){var e=this;$(document).on("hidden.bs.modal",".modal",function(){e.verification=JSON.parse(JSON.stringify(e.customer.verification))})}}},RQTH:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.image?a("div",{staticClass:"position-relative"},[a("img",{attrs:{src:e.image}}),e._v(" "),a("button",{staticClass:"btn btn-danger upload-close m-0 px-3 py-2",on:{click:function(t){t.preventDefault(),e.$emit("close")}}},[a("i",{staticClass:"fas fa-times text-white"})])]):e._e()},staticRenderFns:[]}},SldL:function(e,t){!function(t){"use strict";var a,r=Object.prototype,s=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},n=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",l=o.toStringTag||"@@toStringTag",m="object"==typeof e,u=t.regeneratorRuntime;if(u)m&&(e.exports=u);else{(u=t.regeneratorRuntime=m?e.exports:{}).wrap=C;var d="suspendedStart",c="suspendedYield",v="executing",_="completed",p={},f={};f[n]=function(){return this};var w=Object.getPrototypeOf,g=w&&w(w(S([])));g&&g!==r&&s.call(g,n)&&(f=g);var h=k.prototype=y.prototype=Object.create(f);b.prototype=h.constructor=k,k.constructor=b,k[l]=b.displayName="GeneratorFunction",u.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===b||"GeneratorFunction"===(t.displayName||t.name))},u.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,k):(e.__proto__=k,l in e||(e[l]="GeneratorFunction")),e.prototype=Object.create(h),e},u.awrap=function(e){return{__await:e}},N(q.prototype),q.prototype[i]=function(){return this},u.AsyncIterator=q,u.async=function(e,t,a,r){var s=new q(C(e,t,a,r));return u.isGeneratorFunction(t)?s:s.next().then(function(e){return e.done?e.value:s.next()})},N(h),h[l]="Generator",h[n]=function(){return this},h.toString=function(){return"[object Generator]"},u.keys=function(e){var t=[];for(var a in e)t.push(a);return t.reverse(),function a(){for(;t.length;){var r=t.pop();if(r in e)return a.value=r,a.done=!1,a}return a.done=!0,a}},u.values=S,A.prototype={constructor:A,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=a,this.done=!1,this.delegate=null,this.method="next",this.arg=a,this.tryEntries.forEach(E),!e)for(var t in this)"t"===t.charAt(0)&&s.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=a)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(r,s){return i.type="throw",i.arg=e,t.next=r,s&&(t.method="next",t.arg=a),!!s}for(var o=this.tryEntries.length-1;o>=0;--o){var n=this.tryEntries[o],i=n.completion;if("root"===n.tryLoc)return r("end");if(n.tryLoc<=this.prev){var l=s.call(n,"catchLoc"),m=s.call(n,"finallyLoc");if(l&&m){if(this.prev<n.catchLoc)return r(n.catchLoc,!0);if(this.prev<n.finallyLoc)return r(n.finallyLoc)}else if(l){if(this.prev<n.catchLoc)return r(n.catchLoc,!0)}else{if(!m)throw new Error("try statement without catch or finally");if(this.prev<n.finallyLoc)return r(n.finallyLoc)}}}},abrupt:function(e,t){for(var a=this.tryEntries.length-1;a>=0;--a){var r=this.tryEntries[a];if(r.tryLoc<=this.prev&&s.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var n=o?o.completion:{};return n.type=e,n.arg=t,o?(this.method="next",this.next=o.finallyLoc,p):this.complete(n)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),p},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.finallyLoc===e)return this.complete(a.completion,a.afterLoc),E(a),p}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.tryLoc===e){var r=a.completion;if("throw"===r.type){var s=r.arg;E(a)}return s}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:S(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=a),p}}}function C(e,t,a,r){var s=t&&t.prototype instanceof y?t:y,o=Object.create(s.prototype),n=new A(r||[]);return o._invoke=function(e,t,a){var r=d;return function(s,o){if(r===v)throw new Error("Generator is already running");if(r===_){if("throw"===s)throw o;return O()}for(a.method=s,a.arg=o;;){var n=a.delegate;if(n){var i=P(n,a);if(i){if(i===p)continue;return i}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if(r===d)throw r=_,a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);r=v;var l=x(e,t,a);if("normal"===l.type){if(r=a.done?_:c,l.arg===p)continue;return{value:l.arg,done:a.done}}"throw"===l.type&&(r=_,a.method="throw",a.arg=l.arg)}}}(e,a,n),o}function x(e,t,a){try{return{type:"normal",arg:e.call(t,a)}}catch(e){return{type:"throw",arg:e}}}function y(){}function b(){}function k(){}function N(e){["next","throw","return"].forEach(function(t){e[t]=function(e){return this._invoke(t,e)}})}function q(e){var t;this._invoke=function(a,r){function o(){return new Promise(function(t,o){!function t(a,r,o,n){var i=x(e[a],e,r);if("throw"!==i.type){var l=i.arg,m=l.value;return m&&"object"==typeof m&&s.call(m,"__await")?Promise.resolve(m.__await).then(function(e){t("next",e,o,n)},function(e){t("throw",e,o,n)}):Promise.resolve(m).then(function(e){l.value=e,o(l)},n)}n(i.arg)}(a,r,t,o)})}return t=t?t.then(o,o):o()}}function P(e,t){var r=e.iterator[t.method];if(r===a){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=a,P(e,t),"throw"===t.method))return p;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var s=x(r,e.iterator,t.arg);if("throw"===s.type)return t.method="throw",t.arg=s.arg,t.delegate=null,p;var o=s.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=a),t.delegate=null,p):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,p)}function $(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function E(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function A(e){this.tryEntries=[{tryLoc:"root"}],e.forEach($,this),this.reset(!0)}function S(e){if(e){var t=e[n];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,o=function t(){for(;++r<e.length;)if(s.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=a,t.done=!0,t};return o.next=o}}return{next:O}}function O(){return{value:a,done:!0}}}(function(){return this}()||Function("return this")())},U962:function(e,t,a){var r=a("aXoG");"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);a("rjj0")("ff15612e",r,!0,{})},WiSW:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(a("I3G/")),s=(a("N71M"),a("nv24")),o=n(a("1gIg"));function n(e){return e&&e.__esModule?e:{default:e}}t.default={props:["viewCustomer"],components:{AppNavigation:o.default},data:function(){return{customer:"",show:!1}},computed:{full:function(){return"full"===this.$route.meta.mode},passport:function(){return"https://s3.eu-west-2.amazonaws.com/altara-one/"+this.customer.document.passport_url},branch:function(){return this.customer.branch.description+" "+this.customer.branch.name},approved:function(){return this.$getCustomerApprovalStatus(this.customer.verification)}},created:function(){var e=this;$(".tooltip").remove(),this.viewCustomer&&this.setCustomer(this.viewCustomer),s.EventBus.$on("customer",function(t){return e.setCustomer(t)})},methods:{setCustomer:function(e){r.default.set(this.$data,"customer",e),this.show=!0}}}},"Wk+m":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,s=a("APzg"),o=(r=s)&&r.__esModule?r:{default:r};t.default={components:{ImagePreview:o.default},props:{value:{type:[String,File],default:null},usage:{type:[String],default:"verification"}},methods:{upload:function(e){var t=e.target.files;t&&t.length>0&&this.$emit("input",t[0])}}}},Xxa5:function(e,t,a){e.exports=a("jyFz")},aXoG:function(e,t,a){(e.exports=a("FZ+f")(!1)).push([e.i,".badge{cursor:pointer;font-size:1.2rem;font-weight:500}.badge:nth-child(n+3){margin-left:20px}.badge-primary{border-color:#084a73;color:#084a73}.badge-primary.active{background-color:#084a73;color:#fff}.badge-default.active{border-color:#084a73;color:#084a73;font-weight:700}hr.my-4+span.occupation-option{margin-left:0}",""])},hyG2:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};function s(e,t,a){var o=t||new FormData,n=void 0;for(var i in e)if(e.hasOwnProperty(i))if(n=a?a+"["+i+"]":i,e[i]instanceof Array)for(var l=0;l<e[i].length;l++)s(e[i][l],o,i+"["+l+"]");else"object"!==r(e[i])||e[i]instanceof File?o.append(n,e[i]):s(e[i],o,i);return o}t.toMulipartedForm=function(e,t){if("edit"===t&&"string"==typeof e.image){var a=JSON.parse(JSON.stringify(e));return delete a.image,a}return s(e)},t.objectToFormData=s},ic49:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.log=function(e,t){e=e.replace(/([A-Z])/g," $1").replace(/^./,function(e){return e.toUpperCase()}),(0,r.post)("/api/log",{action:e,description:t})};var r=a("p/p5")},jyFz:function(e,t,a){var r=function(){return this}()||Function("return this")(),s=r.regeneratorRuntime&&Object.getOwnPropertyNames(r).indexOf("regeneratorRuntime")>=0,o=s&&r.regeneratorRuntime;if(r.regeneratorRuntime=void 0,e.exports=a("SldL"),s)r.regeneratorRuntime=o;else try{delete r.regeneratorRuntime}catch(e){r.regeneratorRuntime=void 0}},lxeU:function(e,t,a){var r=a("VU/8")(a("oLXF"),a("vRqo"),!1,function(e){a("U962")},null,null);e.exports=r.exports},m2tk:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Message=void 0;var r=function(){function e(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,a,r){return a&&e(t.prototype,a),r&&e(t,r),t}}(),s=a("p/p5");t.Message=function(){function e(t,a){var r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.user_id=s,this.message=t,this.logToDB=r,this.contacts=a.split(",").filter(function(e){return/\S/.test(e)}).map(function(e){return"234"+e.trim().substr(1)}).join(","),this.setPages(),this.setContactCount()}return r(e,[{key:"setContactCount",value:function(){this.contact_count=this.contacts.split(",").length}},{key:"setPages",value:function(){this.pages=Math.ceil(this.message.length/160)}},{key:"send",value:function(e){var t=this;(0,s.get)("/api/message/create?to="+this.contacts+"&message="+this.message).then(function(a){return 200===a.status&&t.logToDB&&(delete t.logToDB,(0,s.post)("/api/message",t)),!!e&&e(a)}).catch(function(t){return!!e&&e(t)})}}]),e}()},nT0B:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{preview:{type:[String,File],default:null}},data:function(){return{image:null}},created:function(){this.setPreview()},watch:{preview:"setPreview"},methods:{setPreview:function(){var e=this;if(this.preview instanceof File){var t=new FileReader;t.onload=function(t){e.image=t.target.result},t.readAsDataURL(this.preview)}else"string"==typeof this.preview?this.image="https://s3.eu-west-2.amazonaws.com/altara-one/"+this.preview:this.image=null}}}},nv24:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.EventBus=void 0;var r,s=a("I3G/"),o=(r=s)&&r.__esModule?r:{default:r};t.EventBus=new o.default},oLXF:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=m(a("Xxa5")),s=a("m2tk"),o=a("ic49"),n=m(a("K23+")),i=a("p/p5"),l=m(a("3o0A"));function m(e){return e&&e.__esModule?e:{default:e}}t.default={components:{Verification:l.default},data:function(){return{occupations:[{id:1,jobType:"Trader",category:"informal(business)",names:["Food","Drinks","Homeware","Clothing","Miscellaneous"]},{id:2,jobType:"Driver",category:"informal(business)",names:["Keke Napep","Taxi","Motorbike","Bus driver","Private"]},{id:3,jobType:"Banker",category:"formal",names:["Teller","Financial Analyst","Loan Officer","Operation","Risk Specialist","Security & Fraud Specialist"]},{id:4,jobType:"Elementary workers",category:"informal(business)",names:["Mining worker","Construction worker","Manufacturing laborer"]},{id:5,jobType:"Maintenance Worker",category:"informal(business)",names:["Cleaner","Electrician","Plumber","Carpenter","Welder","Painter","Vulcanizer","Security Guard"]},{id:6,jobType:"Farming",category:"informal(business)",names:["Livestock farmer","Crop farmer"]},{id:7,jobType:"Civil Servant",category:"formal",names:[]},{id:8,jobType:"Sales & Services",category:"informal(business)",names:["Car-wash","Laundry","Sales Assistant","Cook","Hairdresser/Barber","Cashier","Waiter","Hotel Assistant","Receptionist"]},{id:9,jobType:"Technical Professionals",category:"formal",names:["Teacher","Doctor","Lawyer","Nurse","Pharmacist","Journalist","Engineer","Civic","Electrical","Chemical","Mechanical","I.T."]},{id:10,jobType:"Pastor",category:"informal(business)",names:[]},{id:11,jobType:"Entertainment",category:"informal(business)",names:["Actor/Actress","Event Planner","Musician","Producer","Tailor/Fashion Designer"]},{id:12,jobType:"Other",category:"informal(business)",names:[]}],mode:this.$route.meta.mode,user:{},error:{},states:{},branches:{},newCustomer:{},fillWorkGuarantor:!1,gender:["male","female"],fillPersonalGuarantor:!1,typesOfHome:["family","owned","rented"],paymentPeriod:["daily","weekly","monthly"],receiveIncomeMeans:["bank deposit","cheque","cash"],noOfRooms:["one room","two room","more than Two room"],employmentStatus:["formal","informal(business)","unemployed"],relationshipPG:["friend","family","co-worker","employee","other"],civilStatus:["single","married","divorced","widow","live together"],relationshipWG:["supervisor","neighbouring worker","co-worker","employee"],weekdays:["sunday","monday","tuesday","wednesday","thursday","friday","saturday"],highestLevelOfEdu:["no studies","secondary","polytechnic","primary","university","masters"],durations:["less than 1 year","1 year","2 years","3 years","between 4 - 9 years","more than 10 years","more than 20 years"],relationships:["spouse","mother","sibling","uncle","nephew","in-law","friend","child","father","grandparent","cousin","caretaker","grandchild"],isLifestyle:!1,isClick:!1,occName:[],isActive:!1,isOther:!1}},methods:{register:function(){var e,t,a=this;$('input[name="occ"]').attr("disabled",!1),this.$validator.validateAll().then((e=r.default.mark(function e(t){return r.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=20;break}if("unemployed"!==a.newCustomer.employment_status){e.next=4;break}return n.default.setError("you can only register customer from formal and informal sectors at the moment!"),e.abrupt("return",a.$scrollToTop());case 4:if(!a.$network()){e.next=17;break}if(a.$LIPS(!0),a.error={},"update"!==a.mode){e.next=11;break}if(a.$editAccess(a.user,a.newCustomer)){e.next=11;break}return e.abrupt("return",a.$networkErr("edit"));case 11:return e.next=13,(0,i.post)("/api/customer"+("update"===a.mode?"/"+a.newCustomer.id:""),a.newCustomer).then(function(e){var t=e.data,r=t.customer,i=r.first_name,l=r.last_name,m=r.id,u=r.branch,d=r.telephone;if(n.default.setSuccess("Customer "+a.mode+"d successful! Customer ID is: "+m,3e4),(0,o.log)(a.mode+"dCustomer","Customer ID :"+m),"register"===a.mode){var c="Dear "+i+" "+l+", Welcome to Altara Credit Limited, You are hereby invited to our showroom at "+u.description+" to learn more about our offerings. Pick up products now and pay later. We look forward to seeing you. For more info contact:"+u.phone_yoruba+". Your customer id is: "+m;new s.Message(c,d).send(function(e){return 200===e.status&&a.prepareForm(t.prepareForm)})}}).catch(function(e){422===(e=e.response).status&&(a.error=e.data.errors?e.data.errors:e.data),n.default.setError(422===e.status?"unique field":e.message,1e4)});case 13:a.$scrollToTop(),a.$LIPS(!1),e.next=18;break;case 17:a.$networkErr();case 18:e.next=21;break;case 20:a.$networkErr("form");case 21:$('input[name="occ"]').attr("disabled",!(a.isOther&&a.isClick));case 22:case"end":return e.stop()}},e,a)}),t=function(){var t=e.apply(this,arguments);return new Promise(function(e,a){return function r(s,o){try{var n=t[s](o),i=n.value}catch(e){return void a(e)}if(!n.done)return Promise.resolve(i).then(function(e){r("next",e)},function(e){r("throw",e)});e(i)}("next")})},function(e){return t.apply(this,arguments)}))},checkOccupation:function(e){var t=this;$(".occupation-title, .occupation-option").removeClass("active shadow-sm"),this.occupations.forEach(function(a){a.id===e&&($('.occupation-title[data-id="'+e+'"]').addClass("active shadow-sm"),t.occName=a.names,t.newCustomer.employment_status=a.category,t.isClick=!0,t.isOther=12===a.id,12===a.id?t.isOther=!0:t.isOther=!1)})},setOccupation:function(e){var t=this;$(".occupation-option").removeClass("active shadow-sm"),this.occName.forEach(function(a){a==e&&(t.newCustomer.occupation=a,$('.occupation-option[data-name="'+e+'"]').addClass("active shadow-sm"))})},prepareForm:function(e){this.states=e.states,this.branches=e.branches,this.newCustomer=e.form,this.user=e.user},updateCustomer:function(e){if("update"===this.mode){var t=[!0,!0];this.fillWorkGuarantor=t[0],this.fillPersonalGuarantor=t[1]}this.newCustomer=e}},created:function(){var e=this;(0,i.get)("/api/customer/create").then(function(t){var a=t.data;return e.prepareForm(a)})}}},r37U:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("transition",{attrs:{name:"fade"}},[a("div",{class:e.full&&"px-md-4 px-2"},[e.full?a("app-navigation",{attrs:{forward:{path:e.$routerHistory.next().path},previous:{path:e.$routerHistory.previous().path},pageTitle:"Customer Profile",pageTitleSmall:"Customer Profile"}}):e._e(),e._v(" "),e.show?a("div",{staticClass:"pt-md-3 pt-2 verification",attrs:{id:"employeeRegister"}},[a("div",{staticClass:"customer-profile card position-relative"},[a("div",{staticClass:"design"}),e._v(" "),a("div",{staticClass:"col-md-4 col-sm-4 col-12 px-0 pb-md-4 pb-sm-3 pb-0 pt-md-5 pt-4 float-left"},[a("div",{staticClass:"pt-md-3 pt-sm-2 pt-1"},[a("div",{staticClass:"justify-content-center d-flex position-relative z-1"},[a("span",{staticClass:"img-border"},[e.customer.document.passport_url?a("img",{staticClass:"profile-picture rounded-circle",attrs:{src:e.passport,alt:"customer profile pic"}}):a("i",{staticClass:"no-image fas fa-user-alt"})])]),e._v(" "),a("div",{staticClass:"justify-content-center d-flex position-relative z-1 pt-md-4 pt-sm-4 pt-2"},[a("span",{staticClass:"w-50"},[a("div",{staticClass:"text-right px-4 py-3 text-light text-muted m-0"},[e._v("\n                                    Status"),a("i",{staticClass:"ml-3 fas fa-briefcase"})]),e._v(" "),a("div",{staticClass:"data text-right px-4 py-3 m-0"},[e._v(e._s(e._f("capitalize")(e.customer.employment_status)))])]),e._v(" "),a("span",{staticClass:"separator"}),e._v(" "),a("span",{staticClass:"w-50"},[a("div",{staticClass:"px-4 py-3 text-muted text-light m-0"},[a("i",{staticClass:"mr-3 fas fa-transgender"}),e._v("Gender\n                                ")]),e._v(" "),a("div",{staticClass:"data px-4 py-3 m-0"},[e._v(e._s(e._f("capitalize")(e.customer.gender)))])])])])]),e._v(" "),a("div",{staticClass:"col-md-8 col-sm-8 col-12 px-0 pb-4 pt-md-5 pt-sm-5 pt-0 float-left"},[a("div",{staticClass:"pt-md-4 pt-0 clearfix"},[a("div",{staticClass:"float-left p-0 m-0 col-md-4 col-sm-6 small-center"},[a("h4",{staticClass:"mt-0 pt-md-5 pt-sm-4 pt-0 mb-md-5 mb-sm-4 mb-3"},[a("i",{staticClass:"mr-3 far fa-user-circle"}),e._v(" "),a("strong",[e._v(e._s(e._f("capitalize")(e.$getCustomerFullName(e.customer))))])])]),e._v(" "),a("div",{staticClass:"float-left p-0 m-0 col-md-4 col-sm-6 d-flex justify-content-center"},[a("h4",{staticClass:"mt-0 pt-md-5 pt-sm-4 pt-0 mb-md-5 mb-sm-4 mb-4 text-muted"},[a("strong",[e._v("Customer ID: "+e._s(e.customer.id))])])]),e._v(" "),a("div",{staticClass:"float-left p-0 m-0 col-md-4 col-12 d-flex justify-content-center"},[a("span",{class:"status mt-md-5 my-sm-2 mt-0 "+(e.approved?"approved":"not-approved")},[e._v("\n                                "+e._s(e.approved?"APPROVED":"NOT APPROVED")+"\n                                "),a("i",{class:"ml-3 fas fa-"+(e.approved?"check":"times")})])])]),e._v(" "),a("div",{staticClass:"pt-4"},[a("table",{staticClass:"table"},[a("tbody",[a("tr",[a("th",{staticClass:"text-muted"},[a("i",{staticClass:"mr-3 fas fa-mobile-alt"}),e._v("Phone Number")]),e._v(" "),a("td",[e._v(e._s(e.customer.telephone))])]),e._v(" "),e.$store.getters.auth("DVAAccess")?a("tr",[a("th",{staticClass:"text-muted"},[a("i",{staticClass:"mr-3 fas fa-map-marker-alt"}),e._v("Address")]),e._v(" "),a("td",[e._v(e._s(e._f("capitalize")(e.$getCustomerAddress(e.customer)))+"\n                                ")])]):e._e(),e._v(" "),a("tr",[a("th",{staticClass:"text-muted"},[a("i",{staticClass:"mr-3 fas fa-gift"}),e._v("Registered On")]),e._v(" "),a("td",[e._v(e._s(e.customer.date_of_registration))])]),e._v(" "),a("tr",[a("th",{staticClass:"text-muted"},[a("i",{staticClass:"mr-3 far fa-user-circle"}),e._v("Registered By")]),e._v(" "),a("td",[e._v(e._s(e._f("capitalize")(e.customer.user?e.customer.user.full_name:"user not in record"))+"\n                                ")])]),e._v(" "),a("tr",[a("th",{staticClass:"text-muted"},[a("i",{staticClass:"mr-3 far fa-building"}),e._v("Branch")]),e._v(" "),a("td",[e._v(e._s(e._f("capitalize")(e.branch)))])])])])])])]),e._v(" "),e.full?a("div",[e._v("Full profile goes here")]):e._e()]):e._e()],1)])},staticRenderFns:[]}},rjj0:function(e,t,a){var r="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!r)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var s=a("tTVk"),o={},n=r&&(document.head||document.getElementsByTagName("head")[0]),i=null,l=0,m=!1,u=function(){},d=null,c="data-vue-ssr-id",v="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function _(e){for(var t=0;t<e.length;t++){var a=e[t],r=o[a.id];if(r){r.refs++;for(var s=0;s<r.parts.length;s++)r.parts[s](a.parts[s]);for(;s<a.parts.length;s++)r.parts.push(f(a.parts[s]));r.parts.length>a.parts.length&&(r.parts.length=a.parts.length)}else{var n=[];for(s=0;s<a.parts.length;s++)n.push(f(a.parts[s]));o[a.id]={id:a.id,refs:1,parts:n}}}}function p(){var e=document.createElement("style");return e.type="text/css",n.appendChild(e),e}function f(e){var t,a,r=document.querySelector("style["+c+'~="'+e.id+'"]');if(r){if(m)return u;r.parentNode.removeChild(r)}if(v){var s=l++;r=i||(i=p()),t=h.bind(null,r,s,!1),a=h.bind(null,r,s,!0)}else r=p(),t=function(e,t){var a=t.css,r=t.media,s=t.sourceMap;r&&e.setAttribute("media",r);d.ssrId&&e.setAttribute(c,t.id);s&&(a+="\n/*# sourceURL="+s.sources[0]+" */",a+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */");if(e.styleSheet)e.styleSheet.cssText=a;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(a))}}.bind(null,r),a=function(){r.parentNode.removeChild(r)};return t(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;t(e=r)}else a()}}e.exports=function(e,t,a,r){m=a,d=r||{};var n=s(e,t);return _(n),function(t){for(var a=[],r=0;r<n.length;r++){var i=n[r];(l=o[i.id]).refs--,a.push(l)}t?_(n=s(e,t)):n=[];for(r=0;r<a.length;r++){var l;if(0===(l=a[r]).refs){for(var m=0;m<l.parts.length;m++)l.parts[m]();delete o[l.id]}}}};var w,g=(w=[],function(e,t){return w[e]=t,w.filter(Boolean).join("\n")});function h(e,t,a,r){var s=a?"":r.css;if(e.styleSheet)e.styleSheet.cssText=g(t,s);else{var o=document.createTextNode(s),n=e.childNodes;n[t]&&e.removeChild(n[t]),n.length?e.insertBefore(o,n[t]):e.appendChild(o)}}},tTVk:function(e,t){e.exports=function(e,t){for(var a=[],r={},s=0;s<t.length;s++){var o=t[s],n=o[0],i={id:e+":"+s,css:o[1],media:o[2],sourceMap:o[3]};r[n]?r[n].parts.push(i):a.push(r[n]={id:n,parts:[i]})}return a}},vRqo:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"clearfix pt-md-3 pt-2",attrs:{id:"customerRegister"}},["update"===e.mode?a("verification",{attrs:{action:"update"},on:{update:e.updateCustomer}}):e._e(),e._v(" "),e.newCustomer.id&&"update"===e.mode||"register"===e.mode?a("div",{staticClass:"card"},[a("ul",{staticClass:"nav nav-tabs justify-content-center bg-default"},[a("h6",[e._v(e._s(e._f("capitalize")(e.mode))+" Customer")])]),e._v(" "),a("div",{staticClass:"card-body pl-4 pr-4 clearfix"},[a("form",{on:{submit:function(t){return t.preventDefault(),e.register(t)}}},["register"===e.mode?a("div",[a("h5",[e._v("Employee Details")]),e._v(" "),a("div",{staticClass:"form-group col-md-4 px-md-3 px-1 float-left"},[a("label",[e._v("Employee Name")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.newCustomer.employee_name,expression:"newCustomer.employee_name"},{name:"validate",rawName:"v-validate",value:"required|max:50",expression:"'required|max:50'"}],staticClass:"form-control",attrs:{"data-vv-name":"employee name",disabled:"",name:"emp_name",placeholder:"Enter Employee name here",type:"text"},domProps:{value:e.newCustomer.employee_name},on:{input:function(t){t.target.composing||e.$set(e.newCustomer,"employee_name",t.target.value)}}}),e._v(" "),e.errors.first("emp_name")?a("small",[e._v(e._s(e.errors.first("emp_name")))]):e._e()]),e._v(" "),a("div",{staticClass:"form-group col-md-4 px-md-3 px-1 float-left"},[a("label",[e._v("Employee ID (Staff ID)")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.newCustomer.employee_id,expression:"newCustomer.employee_id"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",attrs:{"data-vv-as":"employee phone number",disabled:"",name:"employee_id",placeholder:"Enter Employee number here",type:"text"},domProps:{value:e.newCustomer.employee_id},on:{input:function(t){t.target.composing||e.$set(e.newCustomer,"employee_id",t.target.value)}}}),e._v(" "),e.errors.first("employee_id")?a("small",[e._v(e._s(e.errors.first("employee_id")))]):e._e()]),e._v(" "),a("div",{staticClass:"form-group col-md-4 px-md-3 px-1 float-left"},[a("label",[e._v("Date")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.newCustomer.date_of_registration,expression:"newCustomer.date_of_registration"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",attrs:{"data-vv-as":"Date of Registration",disabled:"",name:"date_of_registration",type:"date"},domProps:{value:e.newCustomer.date_of_registration},on:{input:function(t){t.target.composing||e.$set(e.newCustomer,"date_of_registration",t.target.value)}}}),e._v(" "),e.errors.first("date_of_registration")?a("small",[e._v(e._s(e.errors.first("date_of_registration"))+"\n                        ")]):e._e()]),e._v(" "),a("div",{staticClass:"spaceAfter"}),e._v(" "),a("h5",[e._v("Customer Personal Details")]),e._v(" "),a("div",{staticClass:"form-group col-md-4 px-md-3 px-1 float-left"},[a("label",[e._v("First Name")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.newCustomer.first_name,expression:"newCustomer.first_name"},{name:"validate",rawName:"v-validate",value:"required|max:25",expression:"'required|max:25'"}],staticClass:"form-control",attrs:{"data-vv-as":"first name",name:"first_name",placeholder:"Enter First name here..",type:"text"},domProps:{value:e.newCustomer.first_name},on:{input:function(t){t.target.composing||e.$set(e.newCustomer,"first_name",t.target.value)}}}),e._v(" "),e.errors.first("first_name")?a("small",[e._v(e._s(e.errors.first("first_name")))]):e._e()]),e._v(" "),a("div",{staticClass:"form-group col-md-4 px-md-3 px-1 float-left"},[a("label",[e._v("Middle Name")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.newCustomer.middle_name,expression:"newCustomer.middle_name"}],staticClass:"form-control",attrs:{placeholder:"Enter Middle name here..",type:"text"},domProps:{value:e.newCustomer.middle_name},on:{input:function(t){t.target.composing||e.$set(e.newCustomer,"middle_name",t.target.value)}}})]),e._v(" "),a("div",{staticClass:"form-group col-md-4 px-md-3 px-1 float-left"},[a("label",[e._v("Last Name")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.newCustomer.last_name,expression:"newCustomer.last_name"},{name:"validate",rawName:"v-validate",value:"required|max:25",expression:"'required|max:25'"}],staticClass:"form-control",attrs:{"data-vv-as":"last name",name:"last_name",placeholder:"Enter Last name here..",type:"text"},domProps:{value:e.newCustomer.last_name},on:{input:function(t){t.target.composing||e.$set(e.newCustomer,"last_name",t.target.value)}}}),e._v(" "),e.errors.first("last_name")?a("small",[e._v(e._s(e.errors.first("last_name")))]):e._e()]),e._v(" "),a("div",{staticClass:"spaceAfter"}),e._v(" "),a("div",{staticClass:"form-group col-md-4 px-md-3 px-1 float-left"},[a("label",{staticClass:"w-100 float-left"},[e._v("Gender")]),e._v(" "),e._l(e.gender,function(t){return a("div",{staticClass:"radio p-0 col-md-6 col-6 float-left"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.newCustomer.gender,expression:"newCustomer.gender"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{id:t,name:"gender",type:"radio"},domProps:{value:t,checked:e._q(e.newCustomer.gender,t)},on:{change:function(a){e.$set(e.newCustomer,"gender",t)}}}),e._v(" "),a("label",{attrs:{for:t}},[e._v(e._s(t))])])}),e._v(" "),e.errors.first("gender")?a("small",[e._v(e._s(e.errors.first("gender")))]):e._e()],2),e._v(" "),a("div",{staticClass:"form-group col-md-8 px-md-3 px-1 float-left"},[a("label",[e._v("Phone Number")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.newCustomer.telephone,expression:"newCustomer.telephone"},{name:"validate",rawName:"v-validate",value:"required|numeric|max:11|min:11",expression:"'required|numeric|max:11|min:11'"}],staticClass:"form-control",attrs:{name:"telephone",placeholder:"Enter Phone number here..",type:"tel"},domProps:{value:e.newCustomer.telephone},on:{input:function(t){t.target.composing||e.$set(e.newCustomer,"telephone",t.target.value)}}}),e._v(" "),e.errors.first("telephone")?a("small",[e._v(e._s(e.errors.first("telephone")))]):e._e(),e._v(" "),e.error.telephone?a("small",[e._v(e._s(e.error.telephone[0]))]):e._e()]),e._v(" "),a("div",{staticClass:"spaceAfter"})]):e._e(),e._v(" "),"register"===e.mode||e.$store.getters.auth("DVAAccess")?a("div",[a("h5",[e._v("Address")]),e._v(" "),a("div",{staticClass:"form-group col-md-4 px-md-3 px-1 float-left"},[a("label",[e._v("Street Name")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.newCustomer.add_street,expression:"newCustomer.add_street"},{name:"validate",rawName:"v-validate",value:"required|max:25",expression:"'required|max:25'"}],staticClass:"form-control",attrs:{"data-vv-as":"street name",name:"street_name",placeholder:"Enter street name here..",type:"text"},domProps:{value:e.newCustomer.add_street},on:{input:function(t){t.target.composing||e.$set(e.newCustomer,"add_street",t.target.value)}}}),e._v(" "),e.errors.first("street_name")?a("small",[e._v(e._s(e.errors.first("street_name")))]):e._e()]),e._v(" "),a("div",{staticClass:"form-group col-md-4 px-md-3 px-1 float-left"},[a("label",[e._v("House Number")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.newCustomer.add_houseno,expression:"newCustomer.add_houseno"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",attrs:{"data-vv-as":"house number",name:"house_number",placeholder:"Enter House number here..",type:"text"},domProps:{value:e.newCustomer.add_houseno},on:{input:function(t){t.target.composing||e.$set(e.newCustomer,"add_houseno",t.target.value)}}}),e._v(" "),e.errors.first("house_number")?a("small",[e._v(e._s(e.errors.first("house_number")))]):e._e()]),e._v(" "),a("div",{staticClass:"form-group col-md-4 px-md-3 px-1 float-left"},[a("label",[e._v("Nearest Bus Stop")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.newCustomer.add_nbstop,expression:"newCustomer.add_nbstop"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",attrs:{"data-vv-as":"nearest bus stop",name:"nearest_bus_stop",placeholder:"Enter nearest bus stop here..",type:"text"},domProps:{value:e.newCustomer.add_nbstop},on:{input:function(t){t.target.composing||e.$set(e.newCustomer,"add_nbstop",t.target.value)}}}),e._v(" "),e.errors.first("nearest_bus_stop")?a("small",[e._v(e._s(e.errors.first("nearest_bus_stop")))]):e._e()]),e._v(" "),a("div",{staticClass:"spaceAfter"}),e._v(" "),a("div",{staticClass:"form-group col-md-4 px-md-3 px-1 float-left"},[a("label",[e._v("Area")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.newCustomer.area_address,expression:"newCustomer.area_address"},{name:"validate",rawName:"v-validate",value:"required|max:25",expression:"'required|max:25'"}],staticClass:"form-control",attrs:{name:"area",placeholder:"Enter area here..",type:"text"},domProps:{value:e.newCustomer.area_address},on:{input:function(t){t.target.composing||e.$set(e.newCustomer,"area_address",t.target.value)}}}),e._v(" "),e.errors.first("area")?a("small",[e._v(e._s(e.errors.first("area")))]):e._e()]),e._v(" "),a("div",{staticClass:"form-group col-md-4 px-md-3 px-1 float-left"},[a("label",[e._v("City")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.newCustomer.city,expression:"newCustomer.city"},{name:"validate",rawName:"v-validate",value:"required|max:25",expression:"'required|max:25'"}],staticClass:"form-control",attrs:{name:"city",placeholder:"Enter city here..",type:"text"},domProps:{value:e.newCustomer.city},on:{input:function(t){t.target.composing||e.$set(e.newCustomer,"city",t.target.value)}}}),e._v(" "),e.errors.first("city")?a("small",[e._v(e._s(e.errors.first("city")))]):e._e()]),e._v(" "),a("div",{staticClass:"form-group col-md-4 px-md-3 px-1 float-left"},[a("label",[e._v("State")]),e._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:e.newCustomer.state,expression:"newCustomer.state"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"custom-select w-100",attrs:{"data-vv-validate-on":"blur",name:"state"},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.$set(e.newCustomer,"state",t.target.multiple?a:a[0])}}},[a("option",{attrs:{value:""}},[e._v("select state")]),e._v(" "),e._l(e.states,function(t){return a("option",{domProps:{value:t.name}},[e._v(e._s(t.name))])})],2),e._v(" "),e.errors.first("state")?a("small",[e._v(e._s(e.errors.first("state")))]):e._e()]),e._v(" "),a("div",{staticClass:"spaceAfter"}),e._v(" "),a("div",{staticClass:"form-group col-md-12 px-md-3 px-1 float-left"},[a("label",[e._v("Describe Location")]),e._v(" "),a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.newCustomer.add_addinfo_description,expression:"newCustomer.add_addinfo_description"}],staticClass:"form-control col-sm-12",attrs:{placeholder:"Describe the Location",rows:"1"},domProps:{value:e.newCustomer.add_addinfo_description},on:{input:function(t){t.target.composing||e.$set(e.newCustomer,"add_addinfo_description",t.target.value)}}})]),e._v(" "),a("div",{staticClass:"spaceAfter"})]):e._e(),e._v(" "),"register"===e.mode?a("div",[a("h5",[e._v("Others")]),e._v(" "),a("div",{staticClass:"form-group col-md-2 px-md-3 px-1 float-left"},[a("label",[e._v("Date of Birth")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.newCustomer.date_of_birth,expression:"newCustomer.date_of_birth"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",attrs:{"data-vv-as":"date of birth",name:"date_of_birth",type:"date"},domProps:{value:e.newCustomer.date_of_birth},on:{input:function(t){t.target.composing||e.$set(e.newCustomer,"date_of_birth",t.target.value)}}}),e._v(" "),e.errors.first("date_of_birth")?a("small",[e._v(e._s(e.errors.first("date_of_birth")))]):e._e()]),e._v(" "),a("div",{staticClass:"form-group col-md-8 px-md-3 px-1 float-left"},[a("label",{staticClass:"w-100 float-left pl-1"},[e._v("Civil Status")]),e._v(" "),e._l(e.civilStatus,function(t){return a("div",{staticClass:"radio pl-1 pr-3 float-left"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.newCustomer.civil_status,expression:"newCustomer.civil_status"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{id:t,"data-vv-as":"civil status",name:"civil_status",type:"radio"},domProps:{value:t,checked:e._q(e.newCustomer.civil_status,t)},on:{change:function(a){e.$set(e.newCustomer,"civil_status",t)}}}),e._v(" "),a("label",{attrs:{for:t}},[e._v(e._s(t))])])}),e._v(" "),e.errors.first("civil_status")?a("small",[e._v(e._s(e.errors.first("civil_status")))]):e._e()],2),e._v(" "),"single"!==e.newCustomer.civil_status?a("div",{staticClass:"form-group col-md-2 px-md-3 px-1 float-left"},[a("label",[e._v("Years together")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.newCustomer.year_together,expression:"newCustomer.year_together"},{name:"validate",rawName:"v-validate",value:"required|numeric|max:2",expression:"'required|numeric|max:2'"}],staticClass:"form-control",attrs:{"data-vv-as":"years together",name:"years_together",placeholder:"years together..",type:"number"},domProps:{value:e.newCustomer.year_together},on:{input:function(t){t.target.composing||e.$set(e.newCustomer,"year_together",t.target.value)}}}),e._v(" "),e.errors.first("years_together")?a("small",[e._v(e._s(e.errors.first("years_together")))]):e._e()]):e._e(),e._v(" "),a("div",{staticClass:"spaceAfter"}),e._v(" "),a("h5",[e._v("Household Details")]),e._v(" "),a("div",{staticClass:"form-group col-md-5 px-md-3 px-1 float-left"},[a("label",{staticClass:"w-100 float-left pl-1"},[e._v("Type of Home")]),e._v(" "),e._l(e.typesOfHome,function(t){return a("div",{staticClass:"radio pl-1 pr-3 float-left"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.newCustomer.type_of_home,expression:"newCustomer.type_of_home"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{id:t,"data-vv-as":"type of home",name:"typeOfHome",type:"radio"},domProps:{value:t,checked:e._q(e.newCustomer.type_of_home,t)},on:{change:function(a){e.$set(e.newCustomer,"type_of_home",t)}}}),e._v(" "),a("label",{attrs:{for:t}},[e._v(e._s(t))])])}),e._v(" "),e.errors.first("typeOfHome")?a("small",[e._v(e._s(e.errors.first("typeOfHome")))]):e._e()],2),e._v(" "),a("div",{staticClass:"form-group col-md-5 px-md-3 px-1 float-left"},[a("label",{staticClass:"w-100 float-left pl-1"},[e._v("Number of Rooms")]),e._v(" "),e._l(e.noOfRooms,function(t){return a("div",{staticClass:"radio pl-1 pr-3 float-left"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.newCustomer.no_of_rooms,expression:"newCustomer.no_of_rooms"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{id:t,"data-vv-as":"number of rooms",name:"noOfRoom",type:"radio"},domProps:{value:t,checked:e._q(e.newCustomer.no_of_rooms,t)},on:{change:function(a){e.$set(e.newCustomer,"no_of_rooms",t)}}}),e._v(" "),a("label",{attrs:{for:t}},[e._v(e._s(t))])])}),e._v(" "),e.errors.first("noOfRoom")?a("small",[e._v(e._s(e.errors.first("noOfRoom")))]):e._e()],2),e._v(" "),a("div",{staticClass:"form-group col-md-2 px-md-3 px-1 float-left"},[a("label",[e._v("Duration of Residence")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.newCustomer.duration_of_residence,expression:"newCustomer.duration_of_residence"},{name:"validate",rawName:"v-validate",value:"required|numeric|max:2",expression:"'required|numeric|max:2'"}],staticClass:"form-control",attrs:{"data-vv-as":"duration of residence",name:"duration_of_residence",placeholder:"Duration of residence..",type:"number"},domProps:{value:e.newCustomer.duration_of_residence},on:{input:function(t){t.target.composing||e.$set(e.newCustomer,"duration_of_residence",t.target.value)}}}),e._v(" "),e.errors.first("duration_of_residence")?a("small",[e._v(e._s(e.errors.first("duration_of_residence"))+"\n                        ")]):e._e()]),e._v(" "),a("div",{staticClass:"spaceAfter"}),e._v(" "),a("div",{staticClass:"form-group col-md-6 px-md-3 px-1 float-left"},[a("label",[e._v("How many people live in your household?")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.newCustomer.people_in_household,expression:"newCustomer.people_in_household"},{name:"validate",rawName:"v-validate",value:"required|numeric|max:2",expression:"'required|numeric|max:2'"}],staticClass:"form-control",attrs:{"data-vv-as":"number in household",name:"number_in_household",placeholder:"Enter number here..",type:"number"},domProps:{value:e.newCustomer.people_in_household},on:{input:function(t){t.target.composing||e.$set(e.newCustomer,"people_in_household",t.target.value)}}}),e._v(" "),e.errors.first("number_in_household")?a("small",[e._v(e._s(e.errors.first("number_in_household"))+"\n                        ")]):e._e()]),e._v(" "),a("div",{staticClass:"form-group col-md-6 px-md-3 px-1 float-left"},[a("label",[e._v("How many work?")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.newCustomer.number_of_work,expression:"newCustomer.number_of_work"},{name:"validate",rawName:"v-validate",value:"required|numeric|max:2",expression:"'required|numeric|max:2'"}],staticClass:"form-control",attrs:{"data-vv-as":"how many work",name:"how_many_work",placeholder:"Enter number here..",type:"number"},domProps:{value:e.newCustomer.number_of_work},on:{input:function(t){t.target.composing||e.$set(e.newCustomer,"number_of_work",t.target.value)}}}),e._v(" "),e.errors.first("how_many_work")?a("small",[e._v(e._s(e.errors.first("how_many_work")))]):e._e()]),e._v(" "),a("div",{staticClass:"spaceAfter"}),e._v(" "),a("div",{staticClass:"form-group col-md-6 px-md-3 px-1 float-left"},[a("label",[e._v("How many people depend on you?")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.newCustomer.depend_on_you,expression:"newCustomer.depend_on_you"},{name:"validate",rawName:"v-validate",value:"required|numeric|max:2",expression:"'required|numeric|max:2'"}],staticClass:"form-control",attrs:{"data-vv-as":"no depend on you",name:"no_depend_on_you",placeholder:"Enter number here..",type:"number"},domProps:{value:e.newCustomer.depend_on_you},on:{input:function(t){t.target.composing||e.$set(e.newCustomer,"depend_on_you",t.target.value)}}}),e._v(" "),e.errors.first("no_depend_on_you")?a("small",[e._v(e._s(e.errors.first("no_depend_on_you")))]):e._e()]),e._v(" "),a("div",{staticClass:"form-group col-md-6 px-md-3 px-1 float-left"},[a("label",[e._v("Number of Children")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.newCustomer.number_of_children,expression:"newCustomer.number_of_children"},{name:"validate",rawName:"v-validate",value:"required|numeric|max:2",expression:"'required|numeric|max:2'"}],staticClass:"form-control",attrs:{"data-vv-as":"number of children",name:"number_of_children",placeholder:"Enter number here..",type:"number"},domProps:{value:e.newCustomer.number_of_children},on:{input:function(t){t.target.composing||e.$set(e.newCustomer,"number_of_children",t.target.value)}}}),e._v(" "),e.errors.first("number_of_children")?a("small",[e._v(e._s(e.errors.first("number_of_children"))+"\n                        ")]):e._e()]),e._v(" "),a("div",{staticClass:"spaceAfter"}),e._v(" "),a("h5",[e._v("Education Details")]),e._v(" "),a("div",{staticClass:"form-group col-md-12 px-md-3 px-1 float-left"},[a("label",{staticClass:"w-100 float-left pl-1"},[e._v("Highest Level of Education")]),e._v(" "),e._l(e.highestLevelOfEdu,function(t){return a("div",{staticClass:"radio pl-1 pr-3 float-left"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.newCustomer.level_of_education,expression:"newCustomer.level_of_education"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{id:t,"data-vv-as":"highest level of education",name:"highestLevel",type:"radio"},domProps:{value:t,checked:e._q(e.newCustomer.level_of_education,t)},on:{change:function(a){e.$set(e.newCustomer,"level_of_education",t)}}}),e._v(" "),a("label",{attrs:{for:t}},[e._v(e._s(t))])])}),e._v(" "),e.errors.first("highestLevel")?a("small",[e._v(e._s(e.errors.first("highestLevel")))]):e._e()],2),e._v(" "),a("div",{staticClass:"spaceAfter"}),e._v(" "),a("h5",[e._v("Time Available for Visit")]),e._v(" "),a("div",{staticClass:"form-group col-md-6 float-left"},[a("label",[e._v("From")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.newCustomer.visit_hour_from,expression:"newCustomer.visit_hour_from"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",attrs:{"data-vv-as":"time from",name:"time_from",type:"time"},domProps:{value:e.newCustomer.visit_hour_from},on:{input:function(t){t.target.composing||e.$set(e.newCustomer,"visit_hour_from",t.target.value)}}}),e._v(" "),e.errors.first("time_from")?a("small",[e._v(e._s(e.errors.first("time_from")))]):e._e()]),e._v(" "),a("div",{staticClass:"form-group col-md-6 float-left"},[a("label",[e._v("To:")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.newCustomer.visit_hour_to,expression:"newCustomer.visit_hour_to"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",attrs:{"data-vv-as":"time to",name:"time_to",type:"time"},domProps:{value:e.newCustomer.visit_hour_to},on:{input:function(t){t.target.composing||e.$set(e.newCustomer,"visit_hour_to",t.target.value)}}}),e._v(" "),e.errors.first("time_to")?a("small",[e._v(e._s(e.errors.first("time_to")))]):e._e()]),e._v(" "),a("div",{staticClass:"spaceAfter"}),e._v(" "),a("h5",[e._v("Additional Information")]),e._v(" "),a("div",{staticClass:"form-group col-md-3 col-6 px-md-3 px-1 float-left"},[a("label",{staticClass:"w-100 float-left pl-1"},[e._v("Loan From other Institutions")]),e._v(" "),a("div",{staticClass:"radio pl-1 pr-3 float-left"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.newCustomer.loan_from_institution,expression:"newCustomer.loan_from_institution"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{"data-vv-as":"loan from other",id:"loanYes",name:"otherLoan",type:"radio",value:"yes"},domProps:{checked:e._q(e.newCustomer.loan_from_institution,"yes")},on:{change:function(t){e.$set(e.newCustomer,"loan_from_institution","yes")}}}),e._v(" "),a("label",{attrs:{for:"loanYes"}},[e._v("Yes")])]),e._v(" "),a("div",{staticClass:"radio pl-1 pr-3 float-left"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.newCustomer.loan_from_institution,expression:"newCustomer.loan_from_institution"}],attrs:{id:"loanNo",name:"otherLoan",type:"radio",value:"no"},domProps:{checked:e._q(e.newCustomer.loan_from_institution,"no")},on:{change:function(t){e.$set(e.newCustomer,"loan_from_institution","no")}}}),e._v(" "),a("label",{attrs:{for:"loanNo"}},[e._v("No")])]),e._v(" "),e.errors.first("otherLoan")?a("small",[e._v(e._s(e.errors.first("otherLoan")))]):e._e()]),e._v(" "),a("transition",{attrs:{name:"fade"}},["yes"===e.newCustomer.loan_from_institution?a("span",[a("div",{staticClass:"form-group col-md-3 col-6 px-md-3 px-1 float-left"},[a("label",{staticClass:"w-100 float-left pl-1"},[e._v("Did you pay back?")]),e._v(" "),a("div",{staticClass:"radio pl-1 pr-3 float-left"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.newCustomer.did_you_pay_back,expression:"newCustomer.did_you_pay_back"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{"data-vv-as":"did you pay back",id:"payBackYes",name:"payBack",type:"radio",value:"yes"},domProps:{checked:e._q(e.newCustomer.did_you_pay_back,"yes")},on:{change:function(t){e.$set(e.newCustomer,"did_you_pay_back","yes")}}}),e._v(" "),a("label",{attrs:{for:"payBackYes"}},[e._v("Yes")])]),e._v(" "),a("div",{staticClass:"radio pl-1 pr-3 float-left"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.newCustomer.did_you_pay_back,expression:"newCustomer.did_you_pay_back"}],attrs:{id:"payBackNo",name:"payBack",type:"radio",value:"no"},domProps:{checked:e._q(e.newCustomer.did_you_pay_back,"no")},on:{change:function(t){e.$set(e.newCustomer,"did_you_pay_back","no")}}}),e._v(" "),a("label",{attrs:{for:"payBackNo"}},[e._v("No")])]),e._v(" "),e.errors.first("payBack")?a("small",[e._v(e._s(e.errors.first("payBack")))]):e._e()]),e._v(" "),a("div",{staticClass:"form-group col-md-3 col-12 px-md-3 px-1 float-left"},[a("label",[e._v("Loan amount")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.newCustomer.loan_amount,expression:"newCustomer.loan_amount"}],staticClass:"form-control",attrs:{placeholder:"Enter amount here..",type:"number"},domProps:{value:e.newCustomer.loan_amount},on:{input:function(t){t.target.composing||e.$set(e.newCustomer,"loan_amount",t.target.value)}}})])]):e._e()]),e._v(" "),a("div",{staticClass:"form-group col-md-3 col-12 px-md-3 px-1 float-left"},[a("label",[e._v("Email Address")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.newCustomer.email,expression:"newCustomer.email"}],staticClass:"form-control",attrs:{placeholder:"Enter email here",type:"email"},domProps:{value:e.newCustomer.email},on:{input:function(t){t.target.composing||e.$set(e.newCustomer,"email",t.target.value)}}})]),e._v(" "),a("div",{staticClass:"spaceAfter"}),e._v(" "),a("h5",[e._v("Work Details - Select Occupation")]),e._v(" "),a("div",{staticClass:"form-group mb-5 col-md-12 px-md-3 px-1 float-left"},[a("br"),e._v(" "),e._l(e.occupations,function(t){return a("span",{staticClass:"badge badge-primary occupation-title",attrs:{"data-id":t.id},on:{click:function(a){e.checkOccupation(t.id)}}},[e._v(e._s(t.jobType))])}),e._v("  \n\n                        "),a("hr",{staticClass:"my-4"}),e._v(" "),e._l(e.occName,function(t){return e.isClick?a("span",{staticClass:"badge badge-default occupation-option",attrs:{"data-name":t},on:{click:function(a){e.setOccupation(t)}}},[e._v(e._s(t))]):e._e()}),e._v("\n                         \n                        "),a("div",{staticClass:"form-group col-md-3 col-12 px-md-3 px-1 mt-2 float-left"},[a("input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"},{name:"model",rawName:"v-model",value:e.newCustomer.occupation,expression:"newCustomer.occupation"}],staticClass:"form-control",attrs:{name:"occ",disabled:!(e.isOther&&e.isClick),placeholder:"Enter occupation here",type:"text"},domProps:{value:e.newCustomer.occupation},on:{input:function(t){t.target.composing||e.$set(e.newCustomer,"occupation",t.target.value)}}})]),e._v(" "),e.errors.has("occ")?a("small",[e._v("\n                            "+e._s(e.errors.first("occ"))+"\n                        ")]):e._e()],2),e._v(" "),a("transition",{attrs:{name:"fade"}},["formal"===e.newCustomer.employment_status?a("div",[a("div",{staticClass:"form-group col-md-6 px-md-3 px-1 float-left"},[a("label",[e._v("Phone number of working/business individual in household")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.newCustomer.working_individual_Phone_number,expression:"newCustomer.working_individual_Phone_number"},{name:"validate",rawName:"v-validate",value:"required|numeric|max:11|min:11",expression:"'required|numeric|max:11|min:11'"}],staticClass:"form-control",attrs:{"data-vv-as":"office phone",name:"office_phone",placeholder:"Enter Phone Number here",type:"tel"},domProps:{value:e.newCustomer.working_individual_Phone_number},on:{input:function(t){t.target.composing||e.$set(e.newCustomer,"working_individual_Phone_number",t.target.value)}}}),e._v(" "),e.errors.first("office_phone")?a("small",[e._v(e._s(e.errors.first("office_phone")))]):e._e()]),e._v(" "),a("div",{staticClass:"form-group col-md-6 px-md-3 px-1 float-left"},[a("label",[e._v("Name of the company")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.newCustomer.name_of_company_or_business,expression:"newCustomer.name_of_company_or_business"},{name:"validate",rawName:"v-validate",value:"required|max:100",expression:"'required|max:100'"}],staticClass:"form-control",attrs:{"data-vv-as":"name of firm",name:"name_of_firm",placeholder:"Enter name of company here",type:"text"},domProps:{value:e.newCustomer.name_of_company_or_business},on:{input:function(t){t.target.composing||e.$set(e.newCustomer,"name_of_company_or_business",t.target.value)}}}),e._v(" "),e.errors.first("name_of_firm")?a("small",[e._v(e._s(e.errors.first("name_of_firm")))]):e._e()]),e._v(" "),a("div",{staticClass:"spaceBetween"}),e._v(" "),a("div",{staticClass:"form-group col-md-6 px-md-3 px-1 float-left"},[a("label",[e._v("Current Salary")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.newCustomer.current_sal_or_business_income,expression:"newCustomer.current_sal_or_business_income"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",attrs:{"data-vv-as":"current salary",name:"current_salary",placeholder:"Current Salary or Monthly income",type:"number"},domProps:{value:e.newCustomer.current_sal_or_business_income},on:{input:function(t){t.target.composing||e.$set(e.newCustomer,"current_sal_or_business_income",t.target.value)}}}),e._v(" "),e.errors.first("current_salary")?a("small",[e._v(e._s(e.errors.first("current_salary"))+"\n                                ")]):e._e()]),e._v(" "),a("div",{staticClass:"form-group col-md-6 px-md-3 px-1 float-left"},[a("label",[e._v("Position/post in the company")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.newCustomer.post_in_company,expression:"newCustomer.post_in_company"}],staticClass:"form-control",attrs:{placeholder:"Enter position/post here",type:"text"},domProps:{value:e.newCustomer.post_in_company},on:{input:function(t){t.target.composing||e.$set(e.newCustomer,"post_in_company",t.target.value)}}})]),e._v(" "),a("div",{staticClass:"spaceBetween"}),e._v(" "),a("div",{staticClass:"form-group col-md-6 px-md-3 px-1 float-left"},[a("label",{staticClass:"w-100 float-left pl-1"},[e._v("How do you receive salary?")]),e._v(" "),e._l(e.receiveIncomeMeans,function(t){return a("div",{staticClass:"radio pl-1 pr-3 float-left"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.newCustomer.receive_income_means,expression:"newCustomer.receive_income_means"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{id:t,"data-vv-as":"income means",name:"means",type:"radio"},domProps:{value:t,checked:e._q(e.newCustomer.receive_income_means,t)},on:{change:function(a){e.$set(e.newCustomer,"receive_income_means",t)}}}),e._v(" "),a("label",{attrs:{for:t}},[e._v(e._s(t))])])}),e._v(" "),e.errors.first("means")?a("small",[e._v(e._s(e.errors.first("means")))]):e._e()],2),e._v(" "),a("div",{staticClass:"form-group col-md-6 px-md-3 px-1 float-left"},[a("label",{staticClass:"w-100 float-left pl-1"},[e._v("Payment Period")]),e._v(" "),e._l(e.paymentPeriod,function(t){return a("div",{staticClass:"radio pl-1 pr-3 float-left"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.newCustomer.payment_period,expression:"newCustomer.payment_period"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{id:t,"data-vv-as":"payment period",name:"period",type:"radio"},domProps:{value:t,checked:e._q(e.newCustomer.payment_period,t)},on:{change:function(a){e.$set(e.newCustomer,"payment_period",t)}}}),e._v(" "),a("label",{attrs:{for:t}},[e._v(e._s(t))])])}),e._v(" "),e.errors.first("period")?a("small",[e._v(e._s(e.errors.first("period")))]):e._e()],2),e._v(" "),a("div",{staticClass:"spaceBetween"}),e._v(" "),a("div",{staticClass:"form-group col-md-3 px-md-3 px-1 float-left"},[a("label",[e._v("Duration in Current work")]),e._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:e.newCustomer.years_of_existence_or_work_duration,expression:"newCustomer.years_of_existence_or_work_duration"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"custom-select w-100",attrs:{"data-vv-as":"work duration","data-vv-validate-on":"blur",name:"work_duration"},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.$set(e.newCustomer,"years_of_existence_or_work_duration",t.target.multiple?a:a[0])}}},[a("option",{attrs:{value:""}},[e._v("select duration")]),e._v(" "),e._l(e.durations,function(t){return a("option",{domProps:{value:t}},[e._v(e._s(t))])})],2),e._v(" "),e.errors.first("work_duration")?a("small",[e._v(e._s(e.errors.first("work_duration"))+"\n                                ")]):e._e()]),e._v(" "),a("div",{staticClass:"form-group col-md-9 px-md-3 px-1 float-left"},[a("label",{staticClass:"w-100 float-left"},[e._v("Days of Work")]),e._v(" "),e._l(e.weekdays,function(t){return a("div",{staticClass:"checkbox float-left pr-3"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.newCustomer.days_of_work,expression:"newCustomer.days_of_work"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{id:t,"data-vv-as":"days of work",name:"days_of_work",type:"checkbox"},domProps:{value:t,checked:Array.isArray(e.newCustomer.days_of_work)?e._i(e.newCustomer.days_of_work,t)>-1:e.newCustomer.days_of_work},on:{change:function(a){var r=e.newCustomer.days_of_work,s=a.target,o=!!s.checked;if(Array.isArray(r)){var n=t,i=e._i(r,n);s.checked?i<0&&e.$set(e.newCustomer,"days_of_work",r.concat([n])):i>-1&&e.$set(e.newCustomer,"days_of_work",r.slice(0,i).concat(r.slice(i+1)))}else e.$set(e.newCustomer,"days_of_work",o)}}}),e._v(" "),a("label",{attrs:{for:t}},[e._v(e._s(t))])])}),e._v(" "),e.errors.first("days_of_work")?a("small",[e._v(e._s(e.errors.first("days_of_work")))]):e._e()],2),e._v(" "),a("div",{staticClass:"spaceAfter"}),e._v(" "),a("h5",[e._v("Address of Office")]),e._v(" "),a("div",{staticClass:"form-group col-md-4 px-md-3 px-1 float-left"},[a("label",[e._v("Street Name")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.newCustomer.comp_street_name,expression:"newCustomer.comp_street_name"},{name:"validate",rawName:"v-validate",value:"required|max:50",expression:"'required|max:50'"}],staticClass:"form-control",attrs:{"data-vv-as":"office street name",name:"office_street_name",placeholder:"Enter Street name here",type:"text"},domProps:{value:e.newCustomer.comp_street_name},on:{input:function(t){t.target.composing||e.$set(e.newCustomer,"comp_street_name",t.target.value)}}}),e._v(" "),e.errors.first("office_street_name")?a("small",[e._v(e._s(e.errors.first("office_street_name"))+"\n                                ")]):e._e()]),e._v(" "),a("div",{staticClass:"form-group col-md-4 px-md-3 px-1 float-left"},[a("label",[e._v("Office Building Number")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.newCustomer.comp_house_no,expression:"newCustomer.comp_house_no"},{name:"validate",rawName:"v-validate",value:"required|max:50",expression:"'required|max:50'"}],staticClass:"form-control",attrs:{"data-vv-as":"office building number",name:"office_building_number",placeholder:"Enter Building Number",type:"text"},domProps:{value:e.newCustomer.comp_house_no},on:{input:function(t){t.target.composing||e.$set(e.newCustomer,"comp_house_no",t.target.value)}}}),e._v(" "),e.errors.first("office_building_number")?a("small",[e._v(e._s(e.errors.first("office_building_number"))+"\n                                ")]):e._e()]),e._v(" "),a("div",{staticClass:"form-group col-md-4 px-md-3 px-1 float-left"},[a("label",[e._v("Nearest Bus Stop")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.newCustomer.cadd_nbstop,expression:"newCustomer.cadd_nbstop"},{name:"validate",rawName:"v-validate",value:"required|max:50",expression:"'required|max:50'"}],staticClass:"form-control",attrs:{"data-vv-as":"office nearest bus stop",name:"office_nearest_bus_stop",placeholder:"Enter nearest bus stop",type:"text"},domProps:{value:e.newCustomer.cadd_nbstop},on:{input:function(t){t.target.composing||e.$set(e.newCustomer,"cadd_nbstop",t.target.value)}}}),e._v(" "),e.errors.first("office_nearest_bus_stop")?a("small",[e._v(e._s(e.errors.first("office_nearest_bus_stop"))+"\n                                ")]):e._e()]),e._v(" "),a("div",{staticClass:"spaceBetween"}),e._v(" "),a("div",{staticClass:"form-group col-md-4 px-md-3 px-1 float-left"},[a("label",[e._v("Area")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.newCustomer.comp_area,expression:"newCustomer.comp_area"},{name:"validate",rawName:"v-validate",value:"required|max:50",expression:"'required|max:50'"}],staticClass:"form-control",attrs:{"data-vv-as":"company area",name:"company_area",placeholder:"Enter area",type:"text"},domProps:{value:e.newCustomer.comp_area},on:{input:function(t){t.target.composing||e.$set(e.newCustomer,"comp_area",t.target.value)}}}),e._v(" "),e.errors.first("company_area")?a("small",[e._v(e._s(e.errors.first("company_area")))]):e._e()]),e._v(" "),a("div",{staticClass:"form-group col-md-4 px-md-3 px-1 float-left"},[a("label",[e._v("City")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.newCustomer.company_city,expression:"newCustomer.company_city"},{name:"validate",rawName:"v-validate",value:"required|max:50",expression:"'required|max:50'"}],staticClass:"form-control",attrs:{"data-vv-as":"company city",name:"company_city",placeholder:"Enter city",type:"text"},domProps:{value:e.newCustomer.company_city},on:{input:function(t){t.target.composing||e.$set(e.newCustomer,"company_city",t.target.value)}}}),e._v(" "),e.errors.first("company_city")?a("small",[e._v(e._s(e.errors.first("company_city")))]):e._e()]),e._v(" "),a("div",{staticClass:"form-group col-md-4 px-md-3 px-1 float-left"},[a("label",[e._v("State")]),e._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:e.newCustomer.company_state,expression:"newCustomer.company_state"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"custom-select w-100",attrs:{"data-vv-as":"company state","data-vv-validate-on":"blur",name:"company_state"},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.$set(e.newCustomer,"company_state",t.target.multiple?a:a[0])}}},[a("option",{attrs:{value:""}},[e._v("select state")]),e._v(" "),e._l(e.states,function(t){return a("option",{domProps:{value:t.name}},[e._v(e._s(t.name))])})],2),e._v(" "),e.errors.first("company_state")?a("small",[e._v(e._s(e.errors.first("company_state"))+"\n                                ")]):e._e()]),e._v(" "),a("div",{staticClass:"spaceBetween"}),e._v(" "),a("div",{staticClass:"form-group col-md-4 px-md-3 px-1 float-left"},[a("label",[e._v("Phone Number")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.newCustomer.company_telno,expression:"newCustomer.company_telno"},{name:"validate",rawName:"v-validate",value:"required|numeric|max:11|min:11",expression:"'required|numeric|max:11|min:11'"}],staticClass:"form-control",attrs:{"data-vv-as":"company phone number",name:"company_phone_number",placeholder:"Enter city",type:"tel"},domProps:{value:e.newCustomer.company_telno},on:{input:function(t){t.target.composing||e.$set(e.newCustomer,"company_telno",t.target.value)}}}),e._v(" "),e.errors.first("company_phone_number")?a("small",[e._v(e._s(e.errors.first("company_phone_number"))+"\n                                ")]):e._e()]),e._v(" "),a("div",{staticClass:"form-group col-md-4 px-md-3 px-1 float-left"},[a("label",[e._v("Time Available for Visit: From")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.newCustomer.cvisit_hour_from,expression:"newCustomer.cvisit_hour_from"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",attrs:{"data-vv-as":"available from",name:"available_from",type:"time"},domProps:{value:e.newCustomer.cvisit_hour_from},on:{input:function(t){t.target.composing||e.$set(e.newCustomer,"cvisit_hour_from",t.target.value)}}}),e._v(" "),e.errors.first("available_from")?a("small",[e._v(e._s(e.errors.first("available_from"))+"\n                                ")]):e._e()]),e._v(" "),a("div",{staticClass:"form-group col-md-4 px-md-3 px-1 float-left"},[a("label",[e._v("To")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.newCustomer.cvisit_hour_to,expression:"newCustomer.cvisit_hour_to"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",attrs:{"data-vv-as":"available to",name:"available_to",type:"time"},domProps:{value:e.newCustomer.cvisit_hour_to},on:{input:function(t){t.target.composing||e.$set(e.newCustomer,"cvisit_hour_to",t.target.value)}}}),e._v(" "),e.errors.first("available_to")?a("small",[e._v(e._s(e.errors.first("available_to")))]):e._e()]),e._v(" "),a("div",{staticClass:"spaceBetween"}),e._v(" "),a("div",{staticClass:"form-group col-md-12 px-md-3 px-1 float-left"},[a("label",[e._v("Describe Location")]),e._v(" "),a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.newCustomer.cadd_addinfo,expression:"newCustomer.cadd_addinfo"}],staticClass:"form-control col-sm-12",attrs:{placeholder:"Describe the Location",rows:"1"},domProps:{value:e.newCustomer.cadd_addinfo},on:{input:function(t){t.target.composing||e.$set(e.newCustomer,"cadd_addinfo",t.target.value)}}})])]):"informal(business)"===e.newCustomer.employment_status?a("div",[a("div",{staticClass:"form-group col-md-6 px-md-3 px-1 float-left"},[a("label",[e._v("Phone number of working/business individual in household")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.newCustomer.working_individual_Phone_number,expression:"newCustomer.working_individual_Phone_number"},{name:"validate",rawName:"v-validate",value:"required|numeric|max:11|min:11",expression:"'required|numeric|max:11|min:11'"}],staticClass:"form-control",attrs:{"data-vv-as":"office phone",name:"office_phone",placeholder:"Enter Phone Number here",type:"tel"},domProps:{value:e.newCustomer.working_individual_Phone_number},on:{input:function(t){t.target.composing||e.$set(e.newCustomer,"working_individual_Phone_number",t.target.value)}}}),e._v(" "),e.errors.first("office_phone")?a("small",[e._v(e._s(e.errors.first("office_phone")))]):e._e()]),e._v(" "),a("div",{staticClass:"form-group col-md-6 px-md-3 px-1 float-left"},[a("label",[e._v("Name of the Business")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.newCustomer.name_of_company_or_business,expression:"newCustomer.name_of_company_or_business"},{name:"validate",rawName:"v-validate",value:"required|max:100",expression:"'required|max:100'"}],staticClass:"form-control",attrs:{"data-vv-as":"name of firm",name:"name_of_firm",placeholder:"Enter name of company here",type:"text"},domProps:{value:e.newCustomer.name_of_company_or_business},on:{input:function(t){t.target.composing||e.$set(e.newCustomer,"name_of_company_or_business",t.target.value)}}}),e._v(" "),e.errors.first("name_of_firm")?a("small",[e._v(e._s(e.errors.first("name_of_firm")))]):e._e()]),e._v(" "),a("div",{staticClass:"spaceBetween"}),e._v(" "),a("div",{staticClass:"form-group col-md-6 px-md-3 px-1 float-left"},[a("label",[e._v("Name of Market")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.newCustomer.market_name,expression:"newCustomer.market_name"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",attrs:{"data-vv-as":"name of market",name:"market_name",placeholder:"name of market",type:"text"},domProps:{value:e.newCustomer.market_name},on:{input:function(t){t.target.composing||e.$set(e.newCustomer,"market_name",t.target.value)}}}),e._v(" "),e.errors.first("market_name")?a("small",[e._v(e._s(e.errors.first("market_name")))]):e._e()]),e._v(" "),a("div",{staticClass:"form-group col-md-6 px-md-3 px-1 float-left"},[a("label",[e._v("Monthly Businesss income")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.newCustomer.current_sal_or_business_income,expression:"newCustomer.current_sal_or_business_income"},{name:"validate",rawName:"v-validate",value:"required|numeric",expression:"'required|numeric'"}],staticClass:"form-control",attrs:{"data-vv-as":"current salary",name:"current_salary",placeholder:"Current Salary or Monthly income",type:"number"},domProps:{value:e.newCustomer.current_sal_or_business_income},on:{input:function(t){t.target.composing||e.$set(e.newCustomer,"current_sal_or_business_income",t.target.value)}}}),e._v(" "),e.errors.first("current_salary")?a("small",[e._v(e._s(e.errors.first("current_salary"))+"\n                                ")]):e._e()]),e._v(" "),a("div",{staticClass:"spaceBetween"}),e._v(" "),a("div",{staticClass:"form-group col-md-6 px-md-3 px-1 float-left"},[a("label",[e._v("Monthly Gains")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.newCustomer.monthly_gains,expression:"newCustomer.monthly_gains"},{name:"validate",rawName:"v-validate",value:"required|numeric",expression:"'required|numeric'"}],staticClass:"form-control",attrs:{"data-vv-as":"monthly gains",name:"monthly_gains",placeholder:"monthly gains",type:"number"},domProps:{value:e.newCustomer.monthly_gains},on:{input:function(t){t.target.composing||e.$set(e.newCustomer,"monthly_gains",t.target.value)}}}),e._v(" "),e.errors.first("monthly_gains")?a("small",[e._v(e._s(e.errors.first("monthly_gains"))+"\n                                ")]):e._e()]),e._v(" "),a("div",{staticClass:"form-group col-md-6 px-md-3 px-1 float-left"},[a("label",[e._v("Years of Existence")]),e._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:e.newCustomer.years_of_existence_or_work_duration,expression:"newCustomer.years_of_existence_or_work_duration"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"custom-select w-100",attrs:{"data-vv-as":"years of existence","data-vv-validate-on":"blur",name:"work_duration"},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.$set(e.newCustomer,"years_of_existence_or_work_duration",t.target.multiple?a:a[0])}}},[a("option",{attrs:{value:""}},[e._v("select duration")]),e._v(" "),e._l(e.durations,function(t){return a("option",{domProps:{value:t}},[e._v(e._s(t))])})],2),e._v(" "),e.errors.first("work_duration")?a("small",[e._v(e._s(e.errors.first("work_duration"))+"\n                                ")]):e._e()]),e._v(" "),a("div",{staticClass:"spaceBetween"}),e._v(" "),a("div",{staticClass:"form-group col-md-3 col-6 px-md-3 px-1 float-left"},[a("label",{staticClass:"w-100 float-left pl-1"},[e._v("Dou you have a bank account?")]),e._v(" "),a("div",{staticClass:"radio pl-1 pr-3 float-left"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.newCustomer.bank_account,expression:"newCustomer.bank_account"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{"data-vv-as":"bank account",id:"bank_account_yes",name:"bank_account",type:"radio",value:"Yes"},domProps:{checked:e._q(e.newCustomer.bank_account,"Yes")},on:{change:function(t){e.$set(e.newCustomer,"bank_account","Yes")}}}),e._v(" "),a("label",{attrs:{for:"bank_account_yes"}},[e._v("Yes")])]),e._v(" "),a("div",{staticClass:"radio pl-1 pr-3 float-left"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.newCustomer.bank_account,expression:"newCustomer.bank_account"}],attrs:{id:"bank_account_no",name:"bank_account",type:"radio",value:"No"},domProps:{checked:e._q(e.newCustomer.bank_account,"No")},on:{change:function(t){e.$set(e.newCustomer,"bank_account","No")}}}),e._v(" "),a("label",{attrs:{for:"bank_account_no"}},[e._v("No")])]),e._v(" "),e.errors.first("bank_account")?a("small",[e._v(e._s(e.errors.first("bank_account")))]):e._e()]),e._v(" "),a("div",{staticClass:"form-group col-md-9 px-md-3 px-1 float-left"},[a("label",{staticClass:"w-100 float-left"},[e._v("Days of Work")]),e._v(" "),e._l(e.weekdays,function(t){return a("div",{staticClass:"checkbox float-left pr-3"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.newCustomer.days_of_work,expression:"newCustomer.days_of_work"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{id:t,"data-vv-as":"days of work",name:"days_of_work",type:"checkbox"},domProps:{value:t,checked:Array.isArray(e.newCustomer.days_of_work)?e._i(e.newCustomer.days_of_work,t)>-1:e.newCustomer.days_of_work},on:{change:function(a){var r=e.newCustomer.days_of_work,s=a.target,o=!!s.checked;if(Array.isArray(r)){var n=t,i=e._i(r,n);s.checked?i<0&&e.$set(e.newCustomer,"days_of_work",r.concat([n])):i>-1&&e.$set(e.newCustomer,"days_of_work",r.slice(0,i).concat(r.slice(i+1)))}else e.$set(e.newCustomer,"days_of_work",o)}}}),e._v(" "),a("label",{attrs:{for:t}},[e._v(e._s(t))])])}),e._v(" "),e.errors.first("days_of_work")?a("small",[e._v(e._s(e.errors.first("days_of_work")))]):e._e()],2),e._v(" "),a("div",{staticClass:"spaceAfter"}),e._v(" "),a("h5",[e._v("Address of Business")]),e._v(" "),a("div",{staticClass:"form-group col-md-4 px-md-3 px-1 float-left"},[a("label",[e._v("Street Name")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.newCustomer.comp_street_name,expression:"newCustomer.comp_street_name"},{name:"validate",rawName:"v-validate",value:"required|max:50",expression:"'required|max:50'"}],staticClass:"form-control",attrs:{"data-vv-as":"office street name",name:"office_street_name",placeholder:"Enter Street name here",type:"text"},domProps:{value:e.newCustomer.comp_street_name},on:{input:function(t){t.target.composing||e.$set(e.newCustomer,"comp_street_name",t.target.value)}}}),e._v(" "),e.errors.first("office_street_name")?a("small",[e._v(e._s(e.errors.first("office_street_name"))+"\n                                ")]):e._e()]),e._v(" "),a("div",{staticClass:"form-group col-md-4 px-md-3 px-1 float-left"},[a("label",[e._v("Shop Number")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.newCustomer.comp_house_no,expression:"newCustomer.comp_house_no"},{name:"validate",rawName:"v-validate",value:"required|max:50",expression:"'required|max:50'"}],staticClass:"form-control",attrs:{"data-vv-as":"office building number",name:"office_building_number",placeholder:"Enter Building Number",type:"text"},domProps:{value:e.newCustomer.comp_house_no},on:{input:function(t){t.target.composing||e.$set(e.newCustomer,"comp_house_no",t.target.value)}}}),e._v(" "),e.errors.first("office_building_number")?a("small",[e._v(e._s(e.errors.first("office_building_number"))+"\n                                ")]):e._e()]),e._v(" "),a("div",{staticClass:"form-group col-md-4 px-md-3 px-1 float-left"},[a("label",[e._v("Nearest Bus Stop")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.newCustomer.cadd_nbstop,expression:"newCustomer.cadd_nbstop"},{name:"validate",rawName:"v-validate",value:"required|max:50",expression:"'required|max:50'"}],staticClass:"form-control",attrs:{"data-vv-as":"office nearest bus stop",name:"office_nearest_bus_stop",placeholder:"Enter nearest bus stop",type:"text"},domProps:{value:e.newCustomer.cadd_nbstop},on:{input:function(t){t.target.composing||e.$set(e.newCustomer,"cadd_nbstop",t.target.value)}}}),e._v(" "),e.errors.first("office_nearest_bus_stop")?a("small",[e._v(e._s(e.errors.first("office_nearest_bus_stop"))+"\n                                ")]):e._e()]),e._v(" "),a("div",{staticClass:"spaceBetween"}),e._v(" "),a("div",{staticClass:"form-group col-md-4 px-md-3 px-1 float-left"},[a("label",[e._v("Area")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.newCustomer.comp_area,expression:"newCustomer.comp_area"},{name:"validate",rawName:"v-validate",value:"required|max:50",expression:"'required|max:50'"}],staticClass:"form-control",attrs:{"data-vv-as":"company area",name:"company_area",placeholder:"Enter area",type:"text"},domProps:{value:e.newCustomer.comp_area},on:{input:function(t){t.target.composing||e.$set(e.newCustomer,"comp_area",t.target.value)}}}),e._v(" "),e.errors.first("company_area")?a("small",[e._v(e._s(e.errors.first("company_area")))]):e._e()]),e._v(" "),a("div",{staticClass:"form-group col-md-4 px-md-3 px-1 float-left"},[a("label",[e._v("City")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.newCustomer.company_city,expression:"newCustomer.company_city"},{name:"validate",rawName:"v-validate",value:"required|max:50",expression:"'required|max:50'"}],staticClass:"form-control",attrs:{"data-vv-as":"company city",name:"company_city",placeholder:"Enter city",type:"text"},domProps:{value:e.newCustomer.company_city},on:{input:function(t){t.target.composing||e.$set(e.newCustomer,"company_city",t.target.value)}}}),e._v(" "),e.errors.first("company_city")?a("small",[e._v(e._s(e.errors.first("company_city")))]):e._e()]),e._v(" "),a("div",{staticClass:"form-group col-md-4 px-md-3 px-1 float-left"},[a("label",[e._v("State")]),e._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:e.newCustomer.company_state,expression:"newCustomer.company_state"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"custom-select w-100",attrs:{"data-vv-as":"company state","data-vv-validate-on":"blur",name:"company_state"},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.$set(e.newCustomer,"company_state",t.target.multiple?a:a[0])}}},[a("option",{attrs:{value:""}},[e._v("select state")]),e._v(" "),e._l(e.states,function(t){return a("option",{domProps:{value:t.name}},[e._v(e._s(t.name))])})],2),e._v(" "),e.errors.first("company_state")?a("small",[e._v(e._s(e.errors.first("company_state"))+"\n                                ")]):e._e()]),e._v(" "),a("div",{staticClass:"spaceBetween"}),e._v(" "),a("div",{staticClass:"form-group col-md-4 px-md-3 px-1 float-left"},[a("label",[e._v("Phone Number")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.newCustomer.company_telno,expression:"newCustomer.company_telno"},{name:"validate",rawName:"v-validate",value:"required|numeric|max:11|min:11",expression:"'required|numeric|max:11|min:11'"}],staticClass:"form-control",attrs:{"data-vv-as":"company phone number",name:"company_phone_number",placeholder:"Enter city",type:"tel"},domProps:{value:e.newCustomer.company_telno},on:{input:function(t){t.target.composing||e.$set(e.newCustomer,"company_telno",t.target.value)}}}),e._v(" "),e.errors.first("company_phone_number")?a("small",[e._v(e._s(e.errors.first("company_phone_number"))+"\n                                ")]):e._e()]),e._v(" "),a("div",{staticClass:"form-group col-md-4 px-md-3 px-1 float-left"},[a("label",[e._v("Time Available for Visit: From")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.newCustomer.cvisit_hour_from,expression:"newCustomer.cvisit_hour_from"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",attrs:{"data-vv-as":"available from",name:"available_from",type:"time"},domProps:{value:e.newCustomer.cvisit_hour_from},on:{input:function(t){t.target.composing||e.$set(e.newCustomer,"cvisit_hour_from",t.target.value)}}}),e._v(" "),e.errors.first("available_from")?a("small",[e._v(e._s(e.errors.first("available_from"))+"\n                                ")]):e._e()]),e._v(" "),a("div",{staticClass:"form-group col-md-4 px-md-3 px-1 float-left"},[a("label",[e._v("To")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.newCustomer.cvisit_hour_to,expression:"newCustomer.cvisit_hour_to"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",attrs:{"data-vv-as":"available to",name:"available_to",type:"time"},domProps:{value:e.newCustomer.cvisit_hour_to},on:{input:function(t){t.target.composing||e.$set(e.newCustomer,"cvisit_hour_to",t.target.value)}}}),e._v(" "),e.errors.first("available_to")?a("small",[e._v(e._s(e.errors.first("available_to")))]):e._e()]),e._v(" "),a("div",{staticClass:"spaceBetween"}),e._v(" "),a("div",{staticClass:"form-group col-md-12 px-md-3 px-1 float-left"},[a("label",[e._v("Describe Location")]),e._v(" "),a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.newCustomer.cadd_addinfo,expression:"newCustomer.cadd_addinfo"}],staticClass:"form-control col-sm-12",attrs:{placeholder:"Describe the Location",rows:"1"},domProps:{value:e.newCustomer.cadd_addinfo},on:{input:function(t){t.target.composing||e.$set(e.newCustomer,"cadd_addinfo",t.target.value)}}})])]):a("div")]),e._v(" "),a("div",{staticClass:"spaceAfter"}),e._v(" "),a("h5",[e._v("Next of Kin")]),e._v(" "),a("div",{staticClass:"form-group col-md-4 px-md-3 px-1 float-left"},[a("label",[e._v("First Name")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.newCustomer.nextofkin_first_name,expression:"newCustomer.nextofkin_first_name"},{name:"validate",rawName:"v-validate",value:"required|max:25",expression:"'required|max:25'"}],staticClass:"form-control",attrs:{"data-vv-as":"next of kin first name",name:"NOK_first_name",placeholder:"Enter first name",type:"text"},domProps:{value:e.newCustomer.nextofkin_first_name},on:{input:function(t){t.target.composing||e.$set(e.newCustomer,"nextofkin_first_name",t.target.value)}}}),e._v(" "),e.errors.first("NOK_first_name")?a("small",[e._v(e._s(e.errors.first("NOK_first_name")))]):e._e()]),e._v(" "),a("div",{staticClass:"form-group col-md-4 px-md-3 px-1 float-left"},[a("label",[e._v("Middle Name")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.newCustomer.nextofkin_middle_name,expression:"newCustomer.nextofkin_middle_name"}],staticClass:"form-control",attrs:{placeholder:"Enter middle name",type:"text"},domProps:{value:e.newCustomer.nextofkin_middle_name},on:{input:function(t){t.target.composing||e.$set(e.newCustomer,"nextofkin_middle_name",t.target.value)}}})]),e._v(" "),a("div",{staticClass:"form-group col-md-4 px-md-3 px-1 float-left"},[a("label",[e._v("Last Name")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.newCustomer.nextofkin_last_name,expression:"newCustomer.nextofkin_last_name"},{name:"validate",rawName:"v-validate",value:"required|max:25",expression:"'required|max:25'"}],staticClass:"form-control",attrs:{"data-vv-as":"next of kin last name",name:"NOK_last_name",placeholder:"Enter last name",type:"text"},domProps:{value:e.newCustomer.nextofkin_last_name},on:{input:function(t){t.target.composing||e.$set(e.newCustomer,"nextofkin_last_name",t.target.value)}}}),e._v(" "),e.errors.first("NOK_last_name")?a("small",[e._v(e._s(e.errors.first("NOK_last_name")))]):e._e()]),e._v(" "),a("div",{staticClass:"spaceAfter"}),e._v(" "),a("div",{staticClass:"form-group col-md-4 px-md-3 px-1 float-left"},[a("label",{staticClass:"w-100 float-left pl-1"},[e._v("Gender")]),e._v(" "),e._l(e.gender,function(t){return a("div",{staticClass:"radio p-0 col-md-6 col-6 float-left"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.newCustomer.nextofkin_gender,expression:"newCustomer.nextofkin_gender"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{id:"nok"+t,"data-vv-as":"next of kin gender",name:"nokgender",type:"radio"},domProps:{value:t,checked:e._q(e.newCustomer.nextofkin_gender,t)},on:{change:function(a){e.$set(e.newCustomer,"nextofkin_gender",t)}}}),e._v(" "),a("label",{attrs:{for:"nok"+t}},[e._v(e._s(t))])])}),e._v(" "),e.errors.first("nokgender")?a("small",[e._v(e._s(e.errors.first("nokgender")))]):e._e()],2),e._v(" "),a("div",{staticClass:"form-group col-md-4 px-md-3 px-1 float-left"},[a("label",[e._v("Phone Number")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.newCustomer.nextofkin_telno,expression:"newCustomer.nextofkin_telno"},{name:"validate",rawName:"v-validate",value:"required|numeric|max:11|min:11",expression:"'required|numeric|max:11|min:11'"}],staticClass:"form-control",attrs:{"data-vv-as":"next of kin phone number",name:"NOK_phone_number",placeholder:"Enter phone number",type:"tel"},domProps:{value:e.newCustomer.nextofkin_telno},on:{input:function(t){t.target.composing||e.$set(e.newCustomer,"nextofkin_telno",t.target.value)}}}),e._v(" "),e.errors.first("NOK_phone_number")?a("small",[e._v(e._s(e.errors.first("NOK_phone_number")))]):e._e()]),e._v(" "),a("div",{staticClass:"form-group col-md-4 px-md-3 px-1 float-left"},[a("label",[e._v("Duration in Current work")]),e._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:e.newCustomer.nextofkin_work_duration,expression:"newCustomer.nextofkin_work_duration"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"custom-select w-100",attrs:{"data-vv-as":"next of kin duration of work","data-vv-validate-on":"blur",name:"NOK_work_duration"},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.$set(e.newCustomer,"nextofkin_work_duration",t.target.multiple?a:a[0])}}},[a("option",{attrs:{value:""}},[e._v("select duration")]),e._v(" "),e._l(e.durations,function(t){return a("option",{domProps:{value:t}},[e._v(e._s(t))])})],2),e._v(" "),e.errors.first("NOK_work_duration")?a("small",[e._v(e._s(e.errors.first("NOK_work_duration"))+"\n                        ")]):e._e()]),e._v(" "),a("div",{staticClass:"spaceAfter"}),e._v(" "),a("div",{staticClass:"form-group col-md-12 px-md-3 px-1 float-left"},[a("label",{staticClass:"w-100 float-left pl-1"},[e._v("Relationship")]),e._v(" "),e._l(e.relationships,function(t){return a("div",{staticClass:"radio p-0 col-md-2 col-4 float-left"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.newCustomer.nextofkin_relationship,expression:"newCustomer.nextofkin_relationship"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{id:t,"data-vv-as":"next of kin relationship",name:"relationship",type:"radio"},domProps:{value:t,checked:e._q(e.newCustomer.nextofkin_relationship,t)},on:{change:function(a){e.$set(e.newCustomer,"nextofkin_relationship",t)}}}),e._v(" "),a("label",{attrs:{for:t}},[e._v(e._s(t))])])}),e._v(" "),e.errors.first("relationship")?a("small",[e._v(e._s(e.errors.first("relationship")))]):e._e()],2)],1):e._e(),e._v(" "),a("div",{staticClass:"spaceAfter"}),e._v(" "),a("h5",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.fillWorkGuarantor,expression:"fillWorkGuarantor"}],staticClass:"form-check-input ml-1 mr-2",attrs:{type:"checkbox",value:"true"},domProps:{checked:Array.isArray(e.fillWorkGuarantor)?e._i(e.fillWorkGuarantor,"true")>-1:e.fillWorkGuarantor},on:{change:function(t){var a=e.fillWorkGuarantor,r=t.target,s=!!r.checked;if(Array.isArray(a)){var o=e._i(a,"true");r.checked?o<0&&(e.fillWorkGuarantor=a.concat(["true"])):o>-1&&(e.fillWorkGuarantor=a.slice(0,o).concat(a.slice(o+1)))}else e.fillWorkGuarantor=s}}}),e._v("Work Guarantor Personal Info\n                ")]),e._v(" "),e.fillWorkGuarantor?a("div",[a("div",{staticClass:"form-group col-md-4 px-md-3 px-1 float-left"},[a("label",[e._v("First Name")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.newCustomer.work_guarantor_first_name,expression:"newCustomer.work_guarantor_first_name"},{name:"validate",rawName:"v-validate",value:"required|max:25",expression:"'required|max:25'"}],staticClass:"form-control",attrs:{"data-vv-as":"work guarantors first name",name:"WG_first_name",placeholder:"Enter first name",type:"text"},domProps:{value:e.newCustomer.work_guarantor_first_name},on:{input:function(t){t.target.composing||e.$set(e.newCustomer,"work_guarantor_first_name",t.target.value)}}}),e._v(" "),e.errors.first("WG_first_name")?a("small",[e._v(e._s(e.errors.first("WG_first_name")))]):e._e()]),e._v(" "),a("div",{staticClass:"form-group col-md-4 px-md-3 px-1 float-left"},[a("label",[e._v("Middle Name")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.newCustomer.work_guarantor_middle_name,expression:"newCustomer.work_guarantor_middle_name"}],staticClass:"form-control",attrs:{placeholder:"Enter middle name",type:"text"},domProps:{value:e.newCustomer.work_guarantor_middle_name},on:{input:function(t){t.target.composing||e.$set(e.newCustomer,"work_guarantor_middle_name",t.target.value)}}})]),e._v(" "),a("div",{staticClass:"form-group col-md-4 px-md-3 px-1 float-left"},[a("label",[e._v("Last Name")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.newCustomer.work_guarantor_last_name,expression:"newCustomer.work_guarantor_last_name"},{name:"validate",rawName:"v-validate",value:"required|max:25",expression:"'required|max:25'"}],staticClass:"form-control",attrs:{"data-vv-as":"work guarantors last name",name:"WG_last_name",placeholder:"Enter last name",type:"text"},domProps:{value:e.newCustomer.work_guarantor_last_name},on:{input:function(t){t.target.composing||e.$set(e.newCustomer,"work_guarantor_last_name",t.target.value)}}}),e._v(" "),e.errors.first("WG_last_name")?a("small",[e._v(e._s(e.errors.first("WG_last_name")))]):e._e()]),e._v(" "),a("div",{staticClass:"spaceAfter"}),e._v(" "),a("div",{staticClass:"form-group col-md-9 col-sm-12 px-md-3 px-1 float-left"},[a("label",{staticClass:"w-100 float-left pl-1"},[e._v("Relationship")]),e._v(" "),e._l(e.relationshipWG,function(t){return a("div",{staticClass:"radio p-0 col-md-3 col-6 float-left"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.newCustomer.work_guarantor_relationship,expression:"newCustomer.work_guarantor_relationship"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{id:t+"wg","data-vv-as":"work guarantor relationship",name:"relationshipwg",type:"radio"},domProps:{value:t,checked:e._q(e.newCustomer.work_guarantor_relationship,t)},on:{change:function(a){e.$set(e.newCustomer,"work_guarantor_relationship",t)}}}),e._v(" "),a("label",{attrs:{for:t+"wg"}},[e._v(e._s(t))])])}),e._v(" "),e.errors.first("relationshipwg")?a("small",[e._v(e._s(e.errors.first("relationshipwg")))]):e._e()],2),e._v(" "),a("div",{staticClass:"form-group col-md-3 col-sm-6 px-md-3 px-1 float-left"},[a("label",{staticClass:"w-100 float-left pl-1"},[e._v("Gender")]),e._v(" "),e._l(e.gender,function(t){return a("div",{staticClass:"radio p-0 col-6 float-left"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.newCustomer.work_guarantor_gender,expression:"newCustomer.work_guarantor_gender"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{id:"gua"+t,"data-vv-as":"work guanrantor gender",name:"wggender",type:"radio"},domProps:{value:t,checked:e._q(e.newCustomer.work_guarantor_gender,t)},on:{change:function(a){e.$set(e.newCustomer,"work_guarantor_gender",t)}}}),e._v(" "),a("label",{attrs:{for:"gua"+t}},[e._v(e._s(t))])])}),e._v(" "),e.errors.first("wggender")?a("small",[e._v(e._s(e.errors.first("wggender")))]):e._e()],2),e._v(" "),a("div",{staticClass:"spaceAfter"}),e._v(" "),a("h5",[e._v("Work Guarantor office Details")]),e._v(" "),a("div",{staticClass:"form-group col-md-4 px-md-3 px-1 float-left"},[a("label",[e._v("Street Name")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.newCustomer.guaadd_street,expression:"newCustomer.guaadd_street"},{name:"validate",rawName:"v-validate",value:"required|max:25",expression:"'required|max:25'"}],staticClass:"form-control",attrs:{"data-vv-as":"work guarantor street",name:"work_guarantor_street_name",placeholder:"Enter Street name here",type:"text"},domProps:{value:e.newCustomer.guaadd_street},on:{input:function(t){t.target.composing||e.$set(e.newCustomer,"guaadd_street",t.target.value)}}}),e._v(" "),e.errors.first("work_guarantor_street_name")?a("small",[e._v(e._s(e.errors.first("work_guarantor_street_name"))+"\n                        ")]):e._e()]),e._v(" "),a("div",{staticClass:"form-group col-md-4 px-md-3 px-1 float-left"},[a("label",[e._v("Office Building Number")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.newCustomer.guaadd_houseno,expression:"newCustomer.guaadd_houseno"},{name:"validate",rawName:"v-validate",value:"required|max:25",expression:"'required|max:25'"}],staticClass:"form-control",attrs:{"data-vv-as":"work guarantor office building",name:"work_guarantor_office_building",placeholder:"Enter Building Number",type:"text"},domProps:{value:e.newCustomer.guaadd_houseno},on:{input:function(t){t.target.composing||e.$set(e.newCustomer,"guaadd_houseno",t.target.value)}}}),e._v(" "),e.errors.first("work_guarantor_office_building")?a("small",{staticClass:"text-muted"},[e._v(e._s(e.errors.first("work_guarantor_office_building"))+"\n                        ")]):e._e()]),e._v(" "),a("div",{staticClass:"form-group col-md-4 px-md-3 px-1 float-left"},[a("label",[e._v("Nearest Bus Stop")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.newCustomer.guaadd_nbstop,expression:"newCustomer.guaadd_nbstop"},{name:"validate",rawName:"v-validate",value:"required|max:25",expression:"'required|max:25'"}],staticClass:"form-control",attrs:{"data-vv-as":"work guarantor bus stop",name:"work_guarantor_bus_stop",placeholder:"Enter nearest bus stop",type:"text"},domProps:{value:e.newCustomer.guaadd_nbstop},on:{input:function(t){t.target.composing||e.$set(e.newCustomer,"guaadd_nbstop",t.target.value)}}}),e._v(" "),e.errors.first("work_guarantor_bus_stop")?a("small",[e._v(e._s(e.errors.first("work_guarantor_bus_stop"))+"\n                        ")]):e._e()]),e._v(" "),a("div",{staticClass:"spaceAfter"}),e._v(" "),a("div",{staticClass:"form-group col-md-4 px-md-3 px-1 float-left"},[a("label",[e._v("Area")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.newCustomer.gua_area,expression:"newCustomer.gua_area"},{name:"validate",rawName:"v-validate",value:"required|max:25",expression:"'required|max:25'"}],staticClass:"form-control",attrs:{"data-vv-as":"work guarantor area",name:"work_guarantor_area",placeholder:"Enter area",type:"text"},domProps:{value:e.newCustomer.gua_area},on:{input:function(t){t.target.composing||e.$set(e.newCustomer,"gua_area",t.target.value)}}}),e._v(" "),e.errors.first("work_guarantor_area")?a("small",[e._v(e._s(e.errors.first("work_guarantor_area"))+"\n                        ")]):e._e()]),e._v(" "),a("div",{staticClass:"form-group col-md-4 px-md-3 px-1 float-left"},[a("label",[e._v("City")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.newCustomer.work_guarantor_city,expression:"newCustomer.work_guarantor_city"},{name:"validate",rawName:"v-validate",value:"required|max:25",expression:"'required|max:25'"}],staticClass:"form-control",attrs:{"data-vv-as":"work guarantor city",name:"work_guarantor_city",placeholder:"Enter city",type:"text"},domProps:{value:e.newCustomer.work_guarantor_city},on:{input:function(t){t.target.composing||e.$set(e.newCustomer,"work_guarantor_city",t.target.value)}}}),e._v(" "),e.errors.first("work_guarantor_city")?a("small",[e._v(e._s(e.errors.first("work_guarantor_city"))+"\n                        ")]):e._e()]),e._v(" "),a("div",{staticClass:"form-group col-md-4 px-md-3 px-1 float-left"},[a("label",[e._v("State")]),e._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:e.newCustomer.work_guarantor_state,expression:"newCustomer.work_guarantor_state"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"custom-select w-100",attrs:{"data-vv-as":"work guarantor state","data-vv-validate-on":"blur",name:"work_guarantor_state"},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.$set(e.newCustomer,"work_guarantor_state",t.target.multiple?a:a[0])}}},[a("option",{attrs:{value:""}},[e._v("select state")]),e._v(" "),e._l(e.states,function(t){return a("option",{domProps:{value:t.name}},[e._v(e._s(t.name))])})],2),e._v(" "),e.errors.first("work_guarantor_state")?a("small",[e._v(e._s(e.errors.first("work_guarantor_state"))+"\n                        ")]):e._e()]),e._v(" "),a("div",{staticClass:"spaceAfter"}),e._v(" "),a("div",{staticClass:"form-group col-md-4 px-md-3 px-1 float-left"},[a("label",[e._v("Phone Number")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.newCustomer.work_guarantor_telno,expression:"newCustomer.work_guarantor_telno"},{name:"validate",rawName:"v-validate",value:"required|numeric|max:11|min:11",expression:"'required|numeric|max:11|min:11'"}],staticClass:"form-control",attrs:{"data-vv-as":"work guarantor phone",name:"work_guarantor_phone",placeholder:"Enter city",type:"tel"},domProps:{value:e.newCustomer.work_guarantor_telno},on:{input:function(t){t.target.composing||e.$set(e.newCustomer,"work_guarantor_telno",t.target.value)}}}),e._v(" "),e.errors.first("work_guarantor_phone")?a("small",[e._v(e._s(e.errors.first("work_guarantor_phone"))+"\n                        ")]):e._e()]),e._v(" "),a("div",{staticClass:"form-group col-md-4 px-md-3 px-1 float-left"},[a("label",[e._v("Duration in Current work")]),e._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:e.newCustomer.work_guarantor_work_duration,expression:"newCustomer.work_guarantor_work_duration"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"custom-select w-100",attrs:{"data-vv-as":"work guarantor work duration","data-vv-validate-on":"blur",name:"work_guarantor_work_duration"},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.$set(e.newCustomer,"work_guarantor_work_duration",t.target.multiple?a:a[0])}}},[a("option",{attrs:{value:""}},[e._v("select duration")]),e._v(" "),e._l(e.durations,function(t){return a("option",{domProps:{value:t}},[e._v(e._s(t))])})],2),e._v(" "),e.errors.first("work_guarantor_work_duration")?a("small",[e._v(e._s(e.errors.first("work_guarantor_work_duration"))+"\n                        ")]):e._e()]),e._v(" "),a("div",{staticClass:"form-group col-md-4 px-md-3 px-1 float-left"},[a("label",[e._v("Describe Location")]),e._v(" "),a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.newCustomer.guaadd_addinfo,expression:"newCustomer.guaadd_addinfo"}],staticClass:"form-control col-sm-12",attrs:{placeholder:"Describe the Location",rows:"1"},domProps:{value:e.newCustomer.guaadd_addinfo},on:{input:function(t){t.target.composing||e.$set(e.newCustomer,"guaadd_addinfo",t.target.value)}}})]),e._v(" "),a("div",{staticClass:"spaceAfter"})]):e._e(),e._v(" "),a("h5",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.fillPersonalGuarantor,expression:"fillPersonalGuarantor"}],staticClass:"form-check-input ml-1 mr-2",attrs:{type:"checkbox",value:"true"},domProps:{checked:Array.isArray(e.fillPersonalGuarantor)?e._i(e.fillPersonalGuarantor,"true")>-1:e.fillPersonalGuarantor},on:{change:function(t){var a=e.fillPersonalGuarantor,r=t.target,s=!!r.checked;if(Array.isArray(a)){var o=e._i(a,"true");r.checked?o<0&&(e.fillPersonalGuarantor=a.concat(["true"])):o>-1&&(e.fillPersonalGuarantor=a.slice(0,o).concat(a.slice(o+1)))}else e.fillPersonalGuarantor=s}}}),e._v("\n                    Personal Guarantor Personal Info\n                ")]),e._v(" "),e.fillPersonalGuarantor?a("div",[a("div",{staticClass:"form-group col-md-4 px-md-3 px-1 float-left"},[a("label",[e._v("First Name")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.newCustomer.personal_guarantor_first_name,expression:"newCustomer.personal_guarantor_first_name"},{name:"validate",rawName:"v-validate",value:"required|max:25",expression:"'required|max:25'"}],staticClass:"form-control",attrs:{"data-vv-as":"first name",name:"PG_first_name",placeholder:"Enter first name",type:"text"},domProps:{value:e.newCustomer.personal_guarantor_first_name},on:{input:function(t){t.target.composing||e.$set(e.newCustomer,"personal_guarantor_first_name",t.target.value)}}}),e._v(" "),e.errors.first("PG_first_name")?a("small",[e._v(e._s(e.errors.first("PG_first_name")))]):e._e()]),e._v(" "),a("div",{staticClass:"form-group col-md-4 px-md-3 px-1 float-left"},[a("label",[e._v("Middle Name")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.newCustomer.personal_guarantor_middle_name,expression:"newCustomer.personal_guarantor_middle_name"}],staticClass:"form-control",attrs:{placeholder:"Enter middle name",type:"text"},domProps:{value:e.newCustomer.personal_guarantor_middle_name},on:{input:function(t){t.target.composing||e.$set(e.newCustomer,"personal_guarantor_middle_name",t.target.value)}}})]),e._v(" "),a("div",{staticClass:"form-group col-md-4 px-md-3 px-1 float-left"},[a("label",[e._v("Last Name")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.newCustomer.personal_guarantor_last_name,expression:"newCustomer.personal_guarantor_last_name"},{name:"validate",rawName:"v-validate",value:"required|max:25",expression:"'required|max:25'"}],staticClass:"form-control",attrs:{"data-vv-as":"last name",name:"PG_last_name",placeholder:"Enter last name",type:"text"},domProps:{value:e.newCustomer.personal_guarantor_last_name},on:{input:function(t){t.target.composing||e.$set(e.newCustomer,"personal_guarantor_last_name",t.target.value)}}}),e._v(" "),e.errors.first("PG_last_name")?a("small",[e._v(e._s(e.errors.first("PG_last_name")))]):e._e()]),e._v(" "),a("div",{staticClass:"spaceAfter"}),e._v(" "),a("div",{staticClass:"form-group col-md-9 col-sm-12 px-md-3 px-1 float-left"},[a("label",{staticClass:"w-100 float-left pl-1"},[e._v("Relationship")]),e._v(" "),e._l(e.relationshipPG,function(t){return a("div",{staticClass:"radio p-0 col-md-3 col-6 float-left"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.newCustomer.personal_guarantor_relationship,expression:"newCustomer.personal_guarantor_relationship"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{id:t+"pg","data-vv-as":"personal guarantor relationship",name:"relationshippg",type:"radio"},domProps:{value:t,checked:e._q(e.newCustomer.personal_guarantor_relationship,t)},on:{change:function(a){e.$set(e.newCustomer,"personal_guarantor_relationship",t)}}}),e._v(" "),a("label",{attrs:{for:t+"pg"}},[e._v(e._s(t))])])}),e._v(" "),e.errors.first("relationshippg")?a("small",[e._v(e._s(e.errors.first("relationshippg")))]):e._e()],2),e._v(" "),a("div",{staticClass:"form-group col-md-3 col-sm-6 px-md-3 px-1 float-left"},[a("label",{staticClass:"w-100 float-left pl-1"},[e._v("Gender")]),e._v(" "),e._l(e.gender,function(t){return a("div",{staticClass:"radio p-0 col-md-6 col-6 float-left"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.newCustomer.personal_guarantor_gender,expression:"newCustomer.personal_guarantor_gender"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{id:"pg"+t,"data-vv-as":"personal guarantor gender",name:"pggender",type:"radio"},domProps:{value:t,checked:e._q(e.newCustomer.personal_guarantor_gender,t)},on:{change:function(a){e.$set(e.newCustomer,"personal_guarantor_gender",t)}}}),e._v(" "),a("label",{attrs:{for:"pg"+t}},[e._v(e._s(t))])])}),e._v(" "),e.errors.first("pggender")?a("small",[e._v(e._s(e.errors.first("pggender")))]):e._e()],2),e._v(" "),a("div",{staticClass:"spaceAfter"}),e._v(" "),a("h5",[e._v("Personal Guarantor office Details")]),e._v(" "),a("div",{staticClass:"form-group col-md-4 px-md-3 px-1 float-left"},[a("label",[e._v("Street Name")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.newCustomer.pguaadd_street,expression:"newCustomer.pguaadd_street"},{name:"validate",rawName:"v-validate",value:"required|max:25",expression:"'required|max:25'"}],staticClass:"form-control",attrs:{"data-vv-as":"street number",name:"pguaadd_street",placeholder:"Enter Street name here",type:"text"},domProps:{value:e.newCustomer.pguaadd_street},on:{input:function(t){t.target.composing||e.$set(e.newCustomer,"pguaadd_street",t.target.value)}}}),e._v(" "),e.errors.first("pguaadd_street")?a("small",[e._v(e._s(e.errors.first("pguaadd_street")))]):e._e()]),e._v(" "),a("div",{staticClass:"form-group col-md-4 px-md-3 px-1 float-left"},[a("label",[e._v("Office Building Number")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.newCustomer.pguaadd_houseno,expression:"newCustomer.pguaadd_houseno"},{name:"validate",rawName:"v-validate",value:"required|max:25",expression:"'required|max:25'"}],staticClass:"form-control",attrs:{"data-vv-as":"office building address",name:"pguaadd_houseno",placeholder:"Enter Building Number",type:"text"},domProps:{value:e.newCustomer.pguaadd_houseno},on:{input:function(t){t.target.composing||e.$set(e.newCustomer,"pguaadd_houseno",t.target.value)}}}),e._v(" "),e.errors.first("pguaadd_houseno")?a("small",[e._v(e._s(e.errors.first("pguaadd_houseno")))]):e._e()]),e._v(" "),a("div",{staticClass:"form-group col-md-4 px-md-3 px-1 float-left"},[a("label",[e._v("Nearest Bus Stop")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.newCustomer.pguaadd_nbstop,expression:"newCustomer.pguaadd_nbstop"},{name:"validate",rawName:"v-validate",value:"required|max:25",expression:"'required|max:25'"}],staticClass:"form-control",attrs:{"data-vv-as":"per. guarantor nearest stop",name:"pguaadd_nbstop",placeholder:"Enter nearest bus stop",type:"text"},domProps:{value:e.newCustomer.pguaadd_nbstop},on:{input:function(t){t.target.composing||e.$set(e.newCustomer,"pguaadd_nbstop",t.target.value)}}}),e._v(" "),e.errors.first("pguaadd_nbstop")?a("small",[e._v(e._s(e.errors.first("pguaadd_nbstop")))]):e._e()]),e._v(" "),a("div",{staticClass:"spaceAfter"}),e._v(" "),a("div",{staticClass:"form-group col-md-4 px-md-3 px-1 float-left"},[a("label",[e._v("Area")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.newCustomer.pgua_area,expression:"newCustomer.pgua_area"},{name:"validate",rawName:"v-validate",value:"required|max:25",expression:"'required|max:25'"}],staticClass:"form-control",attrs:{"data-vv-as":"personal guarantor area",name:"pgua_area",placeholder:"Enter area",type:"text"},domProps:{value:e.newCustomer.pgua_area},on:{input:function(t){t.target.composing||e.$set(e.newCustomer,"pgua_area",t.target.value)}}}),e._v(" "),e.errors.first("pgua_area")?a("small",[e._v(e._s(e.errors.first("pgua_area")))]):e._e()]),e._v(" "),a("div",{staticClass:"form-group col-md-4 px-md-3 px-1 float-left"},[a("label",[e._v("City")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.newCustomer.personal_guarantor_city,expression:"newCustomer.personal_guarantor_city"},{name:"validate",rawName:"v-validate",value:"required|max:25",expression:"'required|max:25'"}],staticClass:"form-control",attrs:{"data-vv-as":"personal guarantor city",name:"personal_guarantor_city",placeholder:"Enter city",type:"text"},domProps:{value:e.newCustomer.personal_guarantor_city},on:{input:function(t){t.target.composing||e.$set(e.newCustomer,"personal_guarantor_city",t.target.value)}}}),e._v(" "),e.errors.first("personal_guarantor_city")?a("small",[e._v(e._s(e.errors.first("personal_guarantor_city"))+"\n                        ")]):e._e()]),e._v(" "),a("div",{staticClass:"form-group col-md-4 px-md-3 px-1 float-left"},[a("label",[e._v("State")]),e._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:e.newCustomer.personal_guarantor_state,expression:"newCustomer.personal_guarantor_state"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"custom-select w-100",attrs:{"data-vv-as":"personal guarantor state","data-vv-validate-on":"blur",name:"personal_guarantor_state"},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.$set(e.newCustomer,"personal_guarantor_state",t.target.multiple?a:a[0])}}},[a("option",{attrs:{value:""}},[e._v("select state")]),e._v(" "),e._l(e.states,function(t){return a("option",{domProps:{value:t.name}},[e._v(e._s(t.name))])})],2),e._v(" "),e.errors.first("personal_guarantor_state")?a("small",[e._v(e._s(e.errors.first("personal_guarantor_state"))+"\n                        ")]):e._e()]),e._v(" "),a("div",{staticClass:"spaceAfter"}),e._v(" "),a("div",{staticClass:"form-group col-md-4 px-md-3 px-1 float-left"},[a("label",[e._v("Phone Number")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.newCustomer.personal_guarantor_telno,expression:"newCustomer.personal_guarantor_telno"},{name:"validate",rawName:"v-validate",value:"required|numeric|max:11|min:11",expression:"'required|numeric|max:11|min:11'"}],staticClass:"form-control",attrs:{"data-vv-as":"per. guarantor phone",name:"personal_guarantor_telno",placeholder:"Enter city",type:"tel"},domProps:{value:e.newCustomer.personal_guarantor_telno},on:{input:function(t){t.target.composing||e.$set(e.newCustomer,"personal_guarantor_telno",t.target.value)}}}),e._v(" "),e.errors.first("personal_guarantor_telno")?a("small",[e._v(e._s(e.errors.first("personal_guarantor_telno"))+"\n                        ")]):e._e()]),e._v(" "),a("div",{staticClass:"form-group col-md-4 px-md-3 px-1 float-left"},[a("label",[e._v("Duration in Current work")]),e._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:e.newCustomer.personal_guarantor_work_duration,expression:"newCustomer.personal_guarantor_work_duration"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"custom-select w-100",attrs:{"data-vv-as":"personal guarantor work duration","data-vv-validate-on":"blur",name:"personal_guarantor_work_duration"},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.$set(e.newCustomer,"personal_guarantor_work_duration",t.target.multiple?a:a[0])}}},[a("option",{attrs:{value:""}},[e._v("select duration")]),e._v(" "),e._l(e.durations,function(t){return a("option",{domProps:{value:t}},[e._v(e._s(t))])})],2),e._v(" "),e.errors.first("personal_guarantor_work_duration")?a("small",{staticClass:"text-muted"},[e._v(e._s(e.errors.first("personal_guarantor_work_duration"))+"\n                        ")]):e._e()]),e._v(" "),a("div",{staticClass:"form-group col-md-4 px-md-3 px-1 float-left"},[a("label",[e._v("Describe Location")]),e._v(" "),a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.newCustomer.pguaadd_addinfo,expression:"newCustomer.pguaadd_addinfo"}],staticClass:"form-control col-sm-12",attrs:{placeholder:"Describe the Location",rows:"1"},domProps:{value:e.newCustomer.pguaadd_addinfo},on:{input:function(t){t.target.composing||e.$set(e.newCustomer,"pguaadd_addinfo",t.target.value)}}})]),e._v(" "),a("div",{staticClass:"spaceAfter"})]):e._e(),e._v(" "),"register"===e.mode?a("div",[a("h5",[e._v("Other Questions")]),e._v(" "),a("div",{staticClass:"form-group col-md-4 px-md-3 px-1 float-left"},[a("label",[e._v("What product do you need?")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.newCustomer.what_product_do_you_need,expression:"newCustomer.what_product_do_you_need"},{name:"validate",rawName:"v-validate",value:"required|max:25",expression:"'required|max:25'"}],staticClass:"form-control",attrs:{"data-vv-as":"what product do you need",name:"what_product_do_you_need",placeholder:"Enter Product name",type:"text"},domProps:{value:e.newCustomer.what_product_do_you_need},on:{input:function(t){t.target.composing||e.$set(e.newCustomer,"what_product_do_you_need",t.target.value)}}}),e._v(" "),e.errors.first("what_product_do_you_need")?a("small",[e._v(e._s(e.errors.first("what_product_do_you_need"))+"\n                        ")]):e._e()]),e._v(" "),a("div",{staticClass:"form-group col-md-4 px-md-3 px-1 float-left"},[a("label",[e._v("What do you need it for?")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.newCustomer.what_do_you_need_it_for,expression:"newCustomer.what_do_you_need_it_for"},{name:"validate",rawName:"v-validate",value:"required|max:25",expression:"'required|max:25'"}],staticClass:"form-control",attrs:{"data-vv-as":"what do you need it for",name:"what_do_you_need_it_for",placeholder:"Enter Reason..",type:"text"},domProps:{value:e.newCustomer.what_do_you_need_it_for},on:{input:function(t){t.target.composing||e.$set(e.newCustomer,"what_do_you_need_it_for",t.target.value)}}}),e._v(" "),e.errors.first("what_do_you_need_it_for")?a("small",[e._v(e._s(e.errors.first("what_do_you_need_it_for"))+"\n                        ")]):e._e()]),e._v(" "),a("div",{staticClass:"form-group col-md-4 px-md-3 px-1 float-left"},[a("label",[e._v("Office Branch")]),e._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:e.newCustomer.branch_id,expression:"newCustomer.branch_id"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"custom-select w-100",attrs:{"data-vv-as":"office branch","data-vv-validate-on":"blur",disabled:"",name:"branch_id"},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.$set(e.newCustomer,"branch_id",t.target.multiple?a:a[0])}}},[a("option",{attrs:{value:""}},[e._v("select office branch")]),e._v(" "),e._l(e.branches,function(t){return a("option",{domProps:{value:t.id}},[e._v(e._s(t.name))])})],2),e._v(" "),e.errors.first("branch_id")?a("small",[e._v(e._s(e.errors.first("branch_id")))]):e._e()])]):e._e(),e._v(" "),a("hr",{staticClass:"style-two"}),e._v(" "),a("div",{staticClass:"col-sm-12 ml-auto mr-auto mt-md-2 mt-0 px-md-3 px-1 mb-3 float-right"},[a("button",{staticClass:"btn btn-block btn-lg bg-default",attrs:{disabled:e.$isProcessing,type:"submit"}},[e._v("\n                        "+e._s(e._f("capitalize")(e.mode))+" Customer\n                        "),a("i",{staticClass:"far fa-paper-plane ml-1"})])])])])]):e._e()],1)},staticRenderFns:[]}},wBhk:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:["pageTitle","pageTitleSmall","previous","forward"]}},xosg:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"image"},[e.value&&"verification"===e.usage?a("image-preview",{attrs:{preview:e.value},on:{close:function(t){e.$emit("input",null)}}}):a("div",[a("input",{attrs:{type:"file",accept:"images/*"},on:{change:e.upload}})])],1)},staticRenderFns:[]}}});
>>>>>>> 896a1818948e76f90b06f3a42ed60dfef98fa861
=======
webpackJsonp([0,1],{"1gIg":function(e,t,a){var r=a("VU/8")(a("wBhk"),a("9sZT"),!1,null,null,null);e.exports=r.exports},"2X8/":function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"clearfix pt-md-3 pt-2",attrs:{id:"customerRegister"}},["update"===e.mode?a("verification",{attrs:{action:"update"},on:{update:e.updateCustomer}}):e._e(),e._v(" "),e.newCustomer.id&&"update"===e.mode||"register"===e.mode?a("div",{staticClass:"card"},[a("ul",{staticClass:"nav nav-tabs justify-content-center bg-default"},[a("h6",[e._v(e._s(e._f("capitalize")(e.mode))+" Customer")])]),e._v(" "),a("div",{staticClass:"card-body pl-4 pr-4 clearfix"},[a("form",{on:{submit:function(t){return t.preventDefault(),e.register(t)}}},["register"===e.mode?a("div",[a("h5",[e._v("Employee Details")]),e._v(" "),a("div",{staticClass:"form-group col-md-4 px-md-3 px-1 float-left"},[a("label",[e._v("Employee Name")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.newCustomer.employee_name,expression:"newCustomer.employee_name"},{name:"validate",rawName:"v-validate",value:"required|max:50",expression:"'required|max:50'"}],staticClass:"form-control",attrs:{"data-vv-name":"employee name",disabled:"",name:"emp_name",placeholder:"Enter Employee name here",type:"text"},domProps:{value:e.newCustomer.employee_name},on:{input:function(t){t.target.composing||e.$set(e.newCustomer,"employee_name",t.target.value)}}}),e._v(" "),e.errors.first("emp_name")?a("small",[e._v(e._s(e.errors.first("emp_name")))]):e._e()]),e._v(" "),a("div",{staticClass:"form-group col-md-4 px-md-3 px-1 float-left"},[a("label",[e._v("Employee ID (Staff ID)")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.newCustomer.employee_id,expression:"newCustomer.employee_id"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",attrs:{"data-vv-as":"employee phone number",disabled:"",name:"employee_id",placeholder:"Enter Employee number here",type:"text"},domProps:{value:e.newCustomer.employee_id},on:{input:function(t){t.target.composing||e.$set(e.newCustomer,"employee_id",t.target.value)}}}),e._v(" "),e.errors.first("employee_id")?a("small",[e._v(e._s(e.errors.first("employee_id")))]):e._e()]),e._v(" "),a("div",{staticClass:"form-group col-md-4 px-md-3 px-1 float-left"},[a("label",[e._v("Date")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.newCustomer.date_of_registration,expression:"newCustomer.date_of_registration"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",attrs:{"data-vv-as":"Date of Registration",disabled:"",name:"date_of_registration",type:"date"},domProps:{value:e.newCustomer.date_of_registration},on:{input:function(t){t.target.composing||e.$set(e.newCustomer,"date_of_registration",t.target.value)}}}),e._v(" "),e.errors.first("date_of_registration")?a("small",[e._v(e._s(e.errors.first("date_of_registration"))+"\n                        ")]):e._e()]),e._v(" "),a("div",{staticClass:"spaceAfter"}),e._v(" "),a("h5",[e._v("Customer Personal Details")]),e._v(" "),a("div",{staticClass:"form-group col-md-4 px-md-3 px-1 float-left"},[a("label",[e._v("First Name")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.newCustomer.first_name,expression:"newCustomer.first_name"},{name:"validate",rawName:"v-validate",value:"required|max:25",expression:"'required|max:25'"}],staticClass:"form-control",attrs:{"data-vv-as":"first name",name:"first_name",placeholder:"Enter First name here..",type:"text"},domProps:{value:e.newCustomer.first_name},on:{input:function(t){t.target.composing||e.$set(e.newCustomer,"first_name",t.target.value)}}}),e._v(" "),e.errors.first("first_name")?a("small",[e._v(e._s(e.errors.first("first_name")))]):e._e()]),e._v(" "),a("div",{staticClass:"form-group col-md-4 px-md-3 px-1 float-left"},[a("label",[e._v("Middle Name")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.newCustomer.middle_name,expression:"newCustomer.middle_name"}],staticClass:"form-control",attrs:{placeholder:"Enter Middle name here..",type:"text"},domProps:{value:e.newCustomer.middle_name},on:{input:function(t){t.target.composing||e.$set(e.newCustomer,"middle_name",t.target.value)}}})]),e._v(" "),a("div",{staticClass:"form-group col-md-4 px-md-3 px-1 float-left"},[a("label",[e._v("Last Name")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.newCustomer.last_name,expression:"newCustomer.last_name"},{name:"validate",rawName:"v-validate",value:"required|max:25",expression:"'required|max:25'"}],staticClass:"form-control",attrs:{"data-vv-as":"last name",name:"last_name",placeholder:"Enter Last name here..",type:"text"},domProps:{value:e.newCustomer.last_name},on:{input:function(t){t.target.composing||e.$set(e.newCustomer,"last_name",t.target.value)}}}),e._v(" "),e.errors.first("last_name")?a("small",[e._v(e._s(e.errors.first("last_name")))]):e._e()]),e._v(" "),a("div",{staticClass:"spaceAfter"}),e._v(" "),a("div",{staticClass:"form-group col-md-4 px-md-3 px-1 float-left"},[a("label",{staticClass:"w-100 float-left"},[e._v("Gender")]),e._v(" "),e._l(e.gender,function(t){return a("div",{staticClass:"radio p-0 col-md-6 col-6 float-left"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.newCustomer.gender,expression:"newCustomer.gender"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{id:t,name:"gender",type:"radio"},domProps:{value:t,checked:e._q(e.newCustomer.gender,t)},on:{change:function(a){e.$set(e.newCustomer,"gender",t)}}}),e._v(" "),a("label",{attrs:{for:t}},[e._v(e._s(t))])])}),e._v(" "),e.errors.first("gender")?a("small",[e._v(e._s(e.errors.first("gender")))]):e._e()],2),e._v(" "),a("div",{staticClass:"form-group col-md-8 px-md-3 px-1 float-left"},[a("label",[e._v("Phone Number")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.newCustomer.telephone,expression:"newCustomer.telephone"},{name:"validate",rawName:"v-validate",value:"required|numeric|max:11|min:11",expression:"'required|numeric|max:11|min:11'"}],staticClass:"form-control",attrs:{name:"telephone",placeholder:"Enter Phone number here..",type:"tel"},domProps:{value:e.newCustomer.telephone},on:{input:function(t){t.target.composing||e.$set(e.newCustomer,"telephone",t.target.value)}}}),e._v(" "),e.errors.first("telephone")?a("small",[e._v(e._s(e.errors.first("telephone")))]):e._e(),e._v(" "),e.error.telephone?a("small",[e._v(e._s(e.error.telephone[0]))]):e._e()]),e._v(" "),a("div",{staticClass:"spaceAfter"})]):e._e(),e._v(" "),"register"===e.mode||e.$store.getters.auth("DVAAccess")?a("div",[a("h5",[e._v("Address")]),e._v(" "),a("div",{staticClass:"form-group col-md-4 px-md-3 px-1 float-left"},[a("label",[e._v("Street Name")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.newCustomer.add_street,expression:"newCustomer.add_street"},{name:"validate",rawName:"v-validate",value:"required|max:25",expression:"'required|max:25'"}],staticClass:"form-control",attrs:{"data-vv-as":"street name",name:"street_name",placeholder:"Enter street name here..",type:"text"},domProps:{value:e.newCustomer.add_street},on:{input:function(t){t.target.composing||e.$set(e.newCustomer,"add_street",t.target.value)}}}),e._v(" "),e.errors.first("street_name")?a("small",[e._v(e._s(e.errors.first("street_name")))]):e._e()]),e._v(" "),a("div",{staticClass:"form-group col-md-4 px-md-3 px-1 float-left"},[a("label",[e._v("House Number")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.newCustomer.add_houseno,expression:"newCustomer.add_houseno"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",attrs:{"data-vv-as":"house number",name:"house_number",placeholder:"Enter House number here..",type:"text"},domProps:{value:e.newCustomer.add_houseno},on:{input:function(t){t.target.composing||e.$set(e.newCustomer,"add_houseno",t.target.value)}}}),e._v(" "),e.errors.first("house_number")?a("small",[e._v(e._s(e.errors.first("house_number")))]):e._e()]),e._v(" "),a("div",{staticClass:"form-group col-md-4 px-md-3 px-1 float-left"},[a("label",[e._v("Nearest Bus Stop")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.newCustomer.add_nbstop,expression:"newCustomer.add_nbstop"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",attrs:{"data-vv-as":"nearest bus stop",name:"nearest_bus_stop",placeholder:"Enter nearest bus stop here..",type:"text"},domProps:{value:e.newCustomer.add_nbstop},on:{input:function(t){t.target.composing||e.$set(e.newCustomer,"add_nbstop",t.target.value)}}}),e._v(" "),e.errors.first("nearest_bus_stop")?a("small",[e._v(e._s(e.errors.first("nearest_bus_stop")))]):e._e()]),e._v(" "),a("div",{staticClass:"spaceAfter"}),e._v(" "),a("div",{staticClass:"form-group col-md-4 px-md-3 px-1 float-left"},[a("label",[e._v("Area")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.newCustomer.area_address,expression:"newCustomer.area_address"},{name:"validate",rawName:"v-validate",value:"required|max:25",expression:"'required|max:25'"}],staticClass:"form-control",attrs:{name:"area",placeholder:"Enter area here..",type:"text"},domProps:{value:e.newCustomer.area_address},on:{input:function(t){t.target.composing||e.$set(e.newCustomer,"area_address",t.target.value)}}}),e._v(" "),e.errors.first("area")?a("small",[e._v(e._s(e.errors.first("area")))]):e._e()]),e._v(" "),a("div",{staticClass:"form-group col-md-4 px-md-3 px-1 float-left"},[a("label",[e._v("City")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.newCustomer.city,expression:"newCustomer.city"},{name:"validate",rawName:"v-validate",value:"required|max:25",expression:"'required|max:25'"}],staticClass:"form-control",attrs:{name:"city",placeholder:"Enter city here..",type:"text"},domProps:{value:e.newCustomer.city},on:{input:function(t){t.target.composing||e.$set(e.newCustomer,"city",t.target.value)}}}),e._v(" "),e.errors.first("city")?a("small",[e._v(e._s(e.errors.first("city")))]):e._e()]),e._v(" "),a("div",{staticClass:"form-group col-md-4 px-md-3 px-1 float-left"},[a("label",[e._v("State")]),e._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:e.newCustomer.state,expression:"newCustomer.state"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"custom-select w-100",attrs:{"data-vv-validate-on":"blur",name:"state"},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.$set(e.newCustomer,"state",t.target.multiple?a:a[0])}}},[a("option",{attrs:{value:""}},[e._v("select state")]),e._v(" "),e._l(e.states,function(t){return a("option",{domProps:{value:t.name}},[e._v(e._s(t.name))])})],2),e._v(" "),e.errors.first("state")?a("small",[e._v(e._s(e.errors.first("state")))]):e._e()]),e._v(" "),a("div",{staticClass:"spaceAfter"}),e._v(" "),a("div",{staticClass:"form-group col-md-12 px-md-3 px-1 float-left"},[a("label",[e._v("Describe Location")]),e._v(" "),a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.newCustomer.add_addinfo_description,expression:"newCustomer.add_addinfo_description"}],staticClass:"form-control col-sm-12",attrs:{placeholder:"Describe the Location",rows:"1"},domProps:{value:e.newCustomer.add_addinfo_description},on:{input:function(t){t.target.composing||e.$set(e.newCustomer,"add_addinfo_description",t.target.value)}}})]),e._v(" "),a("div",{staticClass:"spaceAfter"})]):e._e(),e._v(" "),"register"===e.mode?a("div",[a("h5",[e._v("Others")]),e._v(" "),a("div",{staticClass:"form-group col-md-2 px-md-3 px-1 float-left"},[a("label",[e._v("Date of Birth")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.newCustomer.date_of_birth,expression:"newCustomer.date_of_birth"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",attrs:{"data-vv-as":"date of birth",name:"date_of_birth",type:"date"},domProps:{value:e.newCustomer.date_of_birth},on:{input:function(t){t.target.composing||e.$set(e.newCustomer,"date_of_birth",t.target.value)}}}),e._v(" "),e.errors.first("date_of_birth")?a("small",[e._v(e._s(e.errors.first("date_of_birth")))]):e._e()]),e._v(" "),a("div",{staticClass:"form-group col-md-8 px-md-3 px-1 float-left"},[a("label",{staticClass:"w-100 float-left pl-1"},[e._v("Civil Status")]),e._v(" "),e._l(e.civilStatus,function(t){return a("div",{staticClass:"radio pl-1 pr-3 float-left"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.newCustomer.civil_status,expression:"newCustomer.civil_status"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{id:t,"data-vv-as":"civil status",name:"civil_status",type:"radio"},domProps:{value:t,checked:e._q(e.newCustomer.civil_status,t)},on:{change:function(a){e.$set(e.newCustomer,"civil_status",t)}}}),e._v(" "),a("label",{attrs:{for:t}},[e._v(e._s(t))])])}),e._v(" "),e.errors.first("civil_status")?a("small",[e._v(e._s(e.errors.first("civil_status")))]):e._e()],2),e._v(" "),"single"!==e.newCustomer.civil_status?a("div",{staticClass:"form-group col-md-2 px-md-3 px-1 float-left"},[a("label",[e._v("Years together")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.newCustomer.year_together,expression:"newCustomer.year_together"},{name:"validate",rawName:"v-validate",value:"required|numeric|max:2",expression:"'required|numeric|max:2'"}],staticClass:"form-control",attrs:{"data-vv-as":"years together",name:"years_together",placeholder:"years together..",type:"number"},domProps:{value:e.newCustomer.year_together},on:{input:function(t){t.target.composing||e.$set(e.newCustomer,"year_together",t.target.value)}}}),e._v(" "),e.errors.first("years_together")?a("small",[e._v(e._s(e.errors.first("years_together")))]):e._e()]):e._e(),e._v(" "),a("div",{staticClass:"spaceAfter"}),e._v(" "),a("h5",[e._v("Household Details")]),e._v(" "),a("div",{staticClass:"form-group col-md-5 px-md-3 px-1 float-left"},[a("label",{staticClass:"w-100 float-left pl-1"},[e._v("Type of Home")]),e._v(" "),e._l(e.typesOfHome,function(t){return a("div",{staticClass:"radio pl-1 pr-3 float-left"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.newCustomer.type_of_home,expression:"newCustomer.type_of_home"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{id:t,"data-vv-as":"type of home",name:"typeOfHome",type:"radio"},domProps:{value:t,checked:e._q(e.newCustomer.type_of_home,t)},on:{change:function(a){e.$set(e.newCustomer,"type_of_home",t)}}}),e._v(" "),a("label",{attrs:{for:t}},[e._v(e._s(t))])])}),e._v(" "),e.errors.first("typeOfHome")?a("small",[e._v(e._s(e.errors.first("typeOfHome")))]):e._e()],2),e._v(" "),a("div",{staticClass:"form-group col-md-5 px-md-3 px-1 float-left"},[a("label",{staticClass:"w-100 float-left pl-1"},[e._v("Number of Rooms")]),e._v(" "),e._l(e.noOfRooms,function(t){return a("div",{staticClass:"radio pl-1 pr-3 float-left"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.newCustomer.no_of_rooms,expression:"newCustomer.no_of_rooms"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{id:t,"data-vv-as":"number of rooms",name:"noOfRoom",type:"radio"},domProps:{value:t,checked:e._q(e.newCustomer.no_of_rooms,t)},on:{change:function(a){e.$set(e.newCustomer,"no_of_rooms",t)}}}),e._v(" "),a("label",{attrs:{for:t}},[e._v(e._s(t))])])}),e._v(" "),e.errors.first("noOfRoom")?a("small",[e._v(e._s(e.errors.first("noOfRoom")))]):e._e()],2),e._v(" "),a("div",{staticClass:"form-group col-md-2 px-md-3 px-1 float-left"},[a("label",[e._v("Duration of Residence")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.newCustomer.duration_of_residence,expression:"newCustomer.duration_of_residence"},{name:"validate",rawName:"v-validate",value:"required|numeric|max:2",expression:"'required|numeric|max:2'"}],staticClass:"form-control",attrs:{"data-vv-as":"duration of residence",name:"duration_of_residence",placeholder:"Duration of residence..",type:"number"},domProps:{value:e.newCustomer.duration_of_residence},on:{input:function(t){t.target.composing||e.$set(e.newCustomer,"duration_of_residence",t.target.value)}}}),e._v(" "),e.errors.first("duration_of_residence")?a("small",[e._v(e._s(e.errors.first("duration_of_residence"))+"\n                        ")]):e._e()]),e._v(" "),a("div",{staticClass:"spaceAfter"}),e._v(" "),a("div",{staticClass:"form-group col-md-6 px-md-3 px-1 float-left"},[a("label",[e._v("How many people live in your household?")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.newCustomer.people_in_household,expression:"newCustomer.people_in_household"},{name:"validate",rawName:"v-validate",value:"required|numeric|max:2",expression:"'required|numeric|max:2'"}],staticClass:"form-control",attrs:{"data-vv-as":"number in household",name:"number_in_household",placeholder:"Enter number here..",type:"number"},domProps:{value:e.newCustomer.people_in_household},on:{input:function(t){t.target.composing||e.$set(e.newCustomer,"people_in_household",t.target.value)}}}),e._v(" "),e.errors.first("number_in_household")?a("small",[e._v(e._s(e.errors.first("number_in_household"))+"\n                        ")]):e._e()]),e._v(" "),a("div",{staticClass:"form-group col-md-6 px-md-3 px-1 float-left"},[a("label",[e._v("How many work?")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.newCustomer.number_of_work,expression:"newCustomer.number_of_work"},{name:"validate",rawName:"v-validate",value:"required|numeric|max:2",expression:"'required|numeric|max:2'"}],staticClass:"form-control",attrs:{"data-vv-as":"how many work",name:"how_many_work",placeholder:"Enter number here..",type:"number"},domProps:{value:e.newCustomer.number_of_work},on:{input:function(t){t.target.composing||e.$set(e.newCustomer,"number_of_work",t.target.value)}}}),e._v(" "),e.errors.first("how_many_work")?a("small",[e._v(e._s(e.errors.first("how_many_work")))]):e._e()]),e._v(" "),a("div",{staticClass:"spaceAfter"}),e._v(" "),a("div",{staticClass:"form-group col-md-6 px-md-3 px-1 float-left"},[a("label",[e._v("How many people depend on you?")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.newCustomer.depend_on_you,expression:"newCustomer.depend_on_you"},{name:"validate",rawName:"v-validate",value:"required|numeric|max:2",expression:"'required|numeric|max:2'"}],staticClass:"form-control",attrs:{"data-vv-as":"no depend on you",name:"no_depend_on_you",placeholder:"Enter number here..",type:"number"},domProps:{value:e.newCustomer.depend_on_you},on:{input:function(t){t.target.composing||e.$set(e.newCustomer,"depend_on_you",t.target.value)}}}),e._v(" "),e.errors.first("no_depend_on_you")?a("small",[e._v(e._s(e.errors.first("no_depend_on_you")))]):e._e()]),e._v(" "),a("div",{staticClass:"form-group col-md-6 px-md-3 px-1 float-left"},[a("label",[e._v("Number of Children")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.newCustomer.number_of_children,expression:"newCustomer.number_of_children"},{name:"validate",rawName:"v-validate",value:"required|numeric|max:2",expression:"'required|numeric|max:2'"}],staticClass:"form-control",attrs:{"data-vv-as":"number of children",name:"number_of_children",placeholder:"Enter number here..",type:"number"},domProps:{value:e.newCustomer.number_of_children},on:{input:function(t){t.target.composing||e.$set(e.newCustomer,"number_of_children",t.target.value)}}}),e._v(" "),e.errors.first("number_of_children")?a("small",[e._v(e._s(e.errors.first("number_of_children"))+"\n                        ")]):e._e()]),e._v(" "),a("div",{staticClass:"spaceAfter"}),e._v(" "),a("h5",[e._v("Education Details")]),e._v(" "),a("div",{staticClass:"form-group col-md-12 px-md-3 px-1 float-left"},[a("label",{staticClass:"w-100 float-left pl-1"},[e._v("Highest Level of Education")]),e._v(" "),e._l(e.highestLevelOfEdu,function(t){return a("div",{staticClass:"radio pl-1 pr-3 float-left"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.newCustomer.level_of_education,expression:"newCustomer.level_of_education"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{id:t,"data-vv-as":"highest level of education",name:"highestLevel",type:"radio"},domProps:{value:t,checked:e._q(e.newCustomer.level_of_education,t)},on:{change:function(a){e.$set(e.newCustomer,"level_of_education",t)}}}),e._v(" "),a("label",{attrs:{for:t}},[e._v(e._s(t))])])}),e._v(" "),e.errors.first("highestLevel")?a("small",[e._v(e._s(e.errors.first("highestLevel")))]):e._e()],2),e._v(" "),a("div",{staticClass:"spaceAfter"}),e._v(" "),a("h5",[e._v("Time Available for Visit")]),e._v(" "),a("div",{staticClass:"form-group col-md-6 float-left"},[a("label",[e._v("From")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.newCustomer.visit_hour_from,expression:"newCustomer.visit_hour_from"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",attrs:{"data-vv-as":"time from",name:"time_from",type:"time"},domProps:{value:e.newCustomer.visit_hour_from},on:{input:function(t){t.target.composing||e.$set(e.newCustomer,"visit_hour_from",t.target.value)}}}),e._v(" "),e.errors.first("time_from")?a("small",[e._v(e._s(e.errors.first("time_from")))]):e._e()]),e._v(" "),a("div",{staticClass:"form-group col-md-6 float-left"},[a("label",[e._v("To:")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.newCustomer.visit_hour_to,expression:"newCustomer.visit_hour_to"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",attrs:{"data-vv-as":"time to",name:"time_to",type:"time"},domProps:{value:e.newCustomer.visit_hour_to},on:{input:function(t){t.target.composing||e.$set(e.newCustomer,"visit_hour_to",t.target.value)}}}),e._v(" "),e.errors.first("time_to")?a("small",[e._v(e._s(e.errors.first("time_to")))]):e._e()]),e._v(" "),a("div",{staticClass:"spaceAfter"}),e._v(" "),a("h5",[e._v("Additional Information")]),e._v(" "),a("div",{staticClass:"form-group col-md-3 col-6 px-md-3 px-1 float-left"},[a("label",{staticClass:"w-100 float-left pl-1"},[e._v("Loan From other Institutions")]),e._v(" "),a("div",{staticClass:"radio pl-1 pr-3 float-left"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.newCustomer.loan_from_institution,expression:"newCustomer.loan_from_institution"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{"data-vv-as":"loan from other",id:"loanYes",name:"otherLoan",type:"radio",value:"yes"},domProps:{checked:e._q(e.newCustomer.loan_from_institution,"yes")},on:{change:function(t){e.$set(e.newCustomer,"loan_from_institution","yes")}}}),e._v(" "),a("label",{attrs:{for:"loanYes"}},[e._v("Yes")])]),e._v(" "),a("div",{staticClass:"radio pl-1 pr-3 float-left"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.newCustomer.loan_from_institution,expression:"newCustomer.loan_from_institution"}],attrs:{id:"loanNo",name:"otherLoan",type:"radio",value:"no"},domProps:{checked:e._q(e.newCustomer.loan_from_institution,"no")},on:{change:function(t){e.$set(e.newCustomer,"loan_from_institution","no")}}}),e._v(" "),a("label",{attrs:{for:"loanNo"}},[e._v("No")])]),e._v(" "),e.errors.first("otherLoan")?a("small",[e._v(e._s(e.errors.first("otherLoan")))]):e._e()]),e._v(" "),a("transition",{attrs:{name:"fade"}},["yes"===e.newCustomer.loan_from_institution?a("span",[a("div",{staticClass:"form-group col-md-3 col-6 px-md-3 px-1 float-left"},[a("label",{staticClass:"w-100 float-left pl-1"},[e._v("Did you pay back?")]),e._v(" "),a("div",{staticClass:"radio pl-1 pr-3 float-left"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.newCustomer.did_you_pay_back,expression:"newCustomer.did_you_pay_back"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{"data-vv-as":"did you pay back",id:"payBackYes",name:"payBack",type:"radio",value:"yes"},domProps:{checked:e._q(e.newCustomer.did_you_pay_back,"yes")},on:{change:function(t){e.$set(e.newCustomer,"did_you_pay_back","yes")}}}),e._v(" "),a("label",{attrs:{for:"payBackYes"}},[e._v("Yes")])]),e._v(" "),a("div",{staticClass:"radio pl-1 pr-3 float-left"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.newCustomer.did_you_pay_back,expression:"newCustomer.did_you_pay_back"}],attrs:{id:"payBackNo",name:"payBack",type:"radio",value:"no"},domProps:{checked:e._q(e.newCustomer.did_you_pay_back,"no")},on:{change:function(t){e.$set(e.newCustomer,"did_you_pay_back","no")}}}),e._v(" "),a("label",{attrs:{for:"payBackNo"}},[e._v("No")])]),e._v(" "),e.errors.first("payBack")?a("small",[e._v(e._s(e.errors.first("payBack")))]):e._e()]),e._v(" "),a("div",{staticClass:"form-group col-md-3 col-12 px-md-3 px-1 float-left"},[a("label",[e._v("Loan amount")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.newCustomer.loan_amount,expression:"newCustomer.loan_amount"}],staticClass:"form-control",attrs:{placeholder:"Enter amount here..",type:"number"},domProps:{value:e.newCustomer.loan_amount},on:{input:function(t){t.target.composing||e.$set(e.newCustomer,"loan_amount",t.target.value)}}})])]):e._e()]),e._v(" "),a("div",{staticClass:"form-group col-md-3 col-12 px-md-3 px-1 float-left"},[a("label",[e._v("Email Address")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.newCustomer.email,expression:"newCustomer.email"}],staticClass:"form-control",attrs:{placeholder:"Enter email here",type:"email"},domProps:{value:e.newCustomer.email},on:{input:function(t){t.target.composing||e.$set(e.newCustomer,"email",t.target.value)}}})]),e._v(" "),a("div",{staticClass:"spaceAfter"}),e._v(" "),a("h5",[e._v("Work Details - Select Occupation")]),e._v(" "),a("div",{staticClass:"form-group mb-5 col-md-12 px-md-3 px-1 float-left"},[a("br"),e._v(" "),e._l(e.occupations,function(t){return a("span",{staticClass:"badge badge-primary occupation-title",attrs:{"data-id":t.id},on:{click:function(a){e.checkOccupation(t.id)}}},[e._v(e._s(t.jobType))])}),e._v("  \n\n                        "),a("hr",{staticClass:"my-4"}),e._v(" "),e._l(e.occName,function(t){return e.isClick?a("span",{staticClass:"badge badge-default occupation-option",attrs:{"data-name":t},on:{click:function(a){e.setOccupation(t)}}},[e._v(e._s(t))]):e._e()}),e._v("\n                         \n                        "),a("div",{staticClass:"form-group col-md-3 col-12 px-md-3 px-1 mt-2 float-left"},[a("input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"},{name:"model",rawName:"v-model",value:e.newCustomer.occupation,expression:"newCustomer.occupation"}],staticClass:"form-control",attrs:{name:"occ",disabled:!(e.isOther&&e.isClick),placeholder:"Enter occupation here",type:"text"},domProps:{value:e.newCustomer.occupation},on:{input:function(t){t.target.composing||e.$set(e.newCustomer,"occupation",t.target.value)}}})]),e._v(" "),e.errors.has("occ")?a("small",[e._v("\n                            "+e._s(e.errors.first("occ"))+"\n                        ")]):e._e()],2),e._v(" "),a("transition",{attrs:{name:"fade"}},["formal"===e.newCustomer.employment_status?a("div",[a("div",{staticClass:"form-group col-md-6 px-md-3 px-1 float-left"},[a("label",[e._v("Phone number of working/business individual in household")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.newCustomer.working_individual_Phone_number,expression:"newCustomer.working_individual_Phone_number"},{name:"validate",rawName:"v-validate",value:"required|numeric|max:11|min:11",expression:"'required|numeric|max:11|min:11'"}],staticClass:"form-control",attrs:{"data-vv-as":"office phone",name:"office_phone",placeholder:"Enter Phone Number here",type:"tel"},domProps:{value:e.newCustomer.working_individual_Phone_number},on:{input:function(t){t.target.composing||e.$set(e.newCustomer,"working_individual_Phone_number",t.target.value)}}}),e._v(" "),e.errors.first("office_phone")?a("small",[e._v(e._s(e.errors.first("office_phone")))]):e._e()]),e._v(" "),a("div",{staticClass:"form-group col-md-6 px-md-3 px-1 float-left"},[a("label",[e._v("Name of the company")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.newCustomer.name_of_company_or_business,expression:"newCustomer.name_of_company_or_business"},{name:"validate",rawName:"v-validate",value:"required|max:100",expression:"'required|max:100'"}],staticClass:"form-control",attrs:{"data-vv-as":"name of firm",name:"name_of_firm",placeholder:"Enter name of company here",type:"text"},domProps:{value:e.newCustomer.name_of_company_or_business},on:{input:function(t){t.target.composing||e.$set(e.newCustomer,"name_of_company_or_business",t.target.value)}}}),e._v(" "),e.errors.first("name_of_firm")?a("small",[e._v(e._s(e.errors.first("name_of_firm")))]):e._e()]),e._v(" "),a("div",{staticClass:"spaceBetween"}),e._v(" "),a("div",{staticClass:"form-group col-md-6 px-md-3 px-1 float-left"},[a("label",[e._v("Current Salary")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.newCustomer.current_sal_or_business_income,expression:"newCustomer.current_sal_or_business_income"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",attrs:{"data-vv-as":"current salary",name:"current_salary",placeholder:"Current Salary or Monthly income",type:"number"},domProps:{value:e.newCustomer.current_sal_or_business_income},on:{input:function(t){t.target.composing||e.$set(e.newCustomer,"current_sal_or_business_income",t.target.value)}}}),e._v(" "),e.errors.has("current_salary")?a("small",[e._v(e._s(e.errors.first("current_salary"))+"\n                                ")]):e._e()]),e._v(" "),a("div",{staticClass:"form-group col-md-6 px-md-3 px-1 float-left"},[a("label",[e._v("Position/post in the company")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.newCustomer.post_in_company,expression:"newCustomer.post_in_company"}],staticClass:"form-control",attrs:{placeholder:"Enter position/post here",type:"text"},domProps:{value:e.newCustomer.post_in_company},on:{input:function(t){t.target.composing||e.$set(e.newCustomer,"post_in_company",t.target.value)}}})]),e._v(" "),a("div",{staticClass:"spaceBetween"}),e._v(" "),a("div",{staticClass:"form-group col-md-6 px-md-3 px-1 float-left"},[a("label",{staticClass:"w-100 float-left pl-1"},[e._v("How do you receive salary?")]),e._v(" "),e._l(e.receiveIncomeMeans,function(t){return a("div",{staticClass:"radio pl-1 pr-3 float-left"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.newCustomer.receive_income_means,expression:"newCustomer.receive_income_means"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{id:t,"data-vv-as":"income means",name:"means",type:"radio"},domProps:{value:t,checked:e._q(e.newCustomer.receive_income_means,t)},on:{change:function(a){e.$set(e.newCustomer,"receive_income_means",t)}}}),e._v(" "),a("label",{attrs:{for:t}},[e._v(e._s(t))])])}),e._v(" "),e.errors.first("means")?a("small",[e._v(e._s(e.errors.first("means")))]):e._e()],2),e._v(" "),a("div",{staticClass:"form-group col-md-6 px-md-3 px-1 float-left"},[a("label",{staticClass:"w-100 float-left pl-1"},[e._v("Payment Period")]),e._v(" "),e._l(e.paymentPeriod,function(t){return a("div",{staticClass:"radio pl-1 pr-3 float-left"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.newCustomer.payment_period,expression:"newCustomer.payment_period"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{id:t,"data-vv-as":"payment period",name:"period",type:"radio"},domProps:{value:t,checked:e._q(e.newCustomer.payment_period,t)},on:{change:function(a){e.$set(e.newCustomer,"payment_period",t)}}}),e._v(" "),a("label",{attrs:{for:t}},[e._v(e._s(t))])])}),e._v(" "),e.errors.first("period")?a("small",[e._v(e._s(e.errors.first("period")))]):e._e()],2),e._v(" "),a("div",{staticClass:"spaceBetween"}),e._v(" "),a("div",{staticClass:"form-group col-md-3 px-md-3 px-1 float-left"},[a("label",[e._v("Duration in Current work")]),e._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:e.newCustomer.years_of_existence_or_work_duration,expression:"newCustomer.years_of_existence_or_work_duration"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"custom-select w-100",attrs:{"data-vv-as":"work duration","data-vv-validate-on":"blur",name:"work_duration"},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.$set(e.newCustomer,"years_of_existence_or_work_duration",t.target.multiple?a:a[0])}}},[a("option",{attrs:{value:""}},[e._v("select duration")]),e._v(" "),e._l(e.durations,function(t){return a("option",{domProps:{value:t}},[e._v(e._s(t))])})],2),e._v(" "),e.errors.first("work_duration")?a("small",[e._v(e._s(e.errors.first("work_duration"))+"\n                                ")]):e._e()]),e._v(" "),a("div",{staticClass:"form-group col-md-9 px-md-3 px-1 float-left"},[a("label",{staticClass:"w-100 float-left"},[e._v("Days of Work")]),e._v(" "),e._l(e.weekdays,function(t){return a("div",{staticClass:"checkbox float-left pr-3"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.newCustomer.days_of_work,expression:"newCustomer.days_of_work"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{id:t,"data-vv-as":"days of work",name:"days_of_work",type:"checkbox"},domProps:{value:t,checked:Array.isArray(e.newCustomer.days_of_work)?e._i(e.newCustomer.days_of_work,t)>-1:e.newCustomer.days_of_work},on:{change:function(a){var r=e.newCustomer.days_of_work,s=a.target,o=!!s.checked;if(Array.isArray(r)){var n=t,i=e._i(r,n);s.checked?i<0&&e.$set(e.newCustomer,"days_of_work",r.concat([n])):i>-1&&e.$set(e.newCustomer,"days_of_work",r.slice(0,i).concat(r.slice(i+1)))}else e.$set(e.newCustomer,"days_of_work",o)}}}),e._v(" "),a("label",{attrs:{for:t}},[e._v(e._s(t))])])}),e._v(" "),e.errors.first("days_of_work")?a("small",[e._v(e._s(e.errors.first("days_of_work")))]):e._e()],2),e._v(" "),a("div",{staticClass:"spaceAfter"}),e._v(" "),a("h5",[e._v("Address of Office")]),e._v(" "),a("div",{staticClass:"form-group col-md-4 px-md-3 px-1 float-left"},[a("label",[e._v("Street Name")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.newCustomer.comp_street_name,expression:"newCustomer.comp_street_name"},{name:"validate",rawName:"v-validate",value:"required|max:50",expression:"'required|max:50'"}],staticClass:"form-control",attrs:{"data-vv-as":"office street name",name:"office_street_name",placeholder:"Enter Street name here",type:"text"},domProps:{value:e.newCustomer.comp_street_name},on:{input:function(t){t.target.composing||e.$set(e.newCustomer,"comp_street_name",t.target.value)}}}),e._v(" "),e.errors.first("office_street_name")?a("small",[e._v(e._s(e.errors.first("office_street_name"))+"\n                                ")]):e._e()]),e._v(" "),a("div",{staticClass:"form-group col-md-4 px-md-3 px-1 float-left"},[a("label",[e._v("Office Building Number")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.newCustomer.comp_house_no,expression:"newCustomer.comp_house_no"},{name:"validate",rawName:"v-validate",value:"required|max:50",expression:"'required|max:50'"}],staticClass:"form-control",attrs:{"data-vv-as":"office building number",name:"office_building_number",placeholder:"Enter Building Number",type:"text"},domProps:{value:e.newCustomer.comp_house_no},on:{input:function(t){t.target.composing||e.$set(e.newCustomer,"comp_house_no",t.target.value)}}}),e._v(" "),e.errors.first("office_building_number")?a("small",[e._v(e._s(e.errors.first("office_building_number"))+"\n                                ")]):e._e()]),e._v(" "),a("div",{staticClass:"form-group col-md-4 px-md-3 px-1 float-left"},[a("label",[e._v("Nearest Bus Stop")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.newCustomer.cadd_nbstop,expression:"newCustomer.cadd_nbstop"},{name:"validate",rawName:"v-validate",value:"required|max:50",expression:"'required|max:50'"}],staticClass:"form-control",attrs:{"data-vv-as":"office nearest bus stop",name:"office_nearest_bus_stop",placeholder:"Enter nearest bus stop",type:"text"},domProps:{value:e.newCustomer.cadd_nbstop},on:{input:function(t){t.target.composing||e.$set(e.newCustomer,"cadd_nbstop",t.target.value)}}}),e._v(" "),e.errors.first("office_nearest_bus_stop")?a("small",[e._v(e._s(e.errors.first("office_nearest_bus_stop"))+"\n                                ")]):e._e()]),e._v(" "),a("div",{staticClass:"spaceBetween"}),e._v(" "),a("div",{staticClass:"form-group col-md-4 px-md-3 px-1 float-left"},[a("label",[e._v("Area")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.newCustomer.comp_area,expression:"newCustomer.comp_area"},{name:"validate",rawName:"v-validate",value:"required|max:50",expression:"'required|max:50'"}],staticClass:"form-control",attrs:{"data-vv-as":"company area",name:"company_area",placeholder:"Enter area",type:"text"},domProps:{value:e.newCustomer.comp_area},on:{input:function(t){t.target.composing||e.$set(e.newCustomer,"comp_area",t.target.value)}}}),e._v(" "),e.errors.first("company_area")?a("small",[e._v(e._s(e.errors.first("company_area")))]):e._e()]),e._v(" "),a("div",{staticClass:"form-group col-md-4 px-md-3 px-1 float-left"},[a("label",[e._v("City")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.newCustomer.company_city,expression:"newCustomer.company_city"},{name:"validate",rawName:"v-validate",value:"required|max:50",expression:"'required|max:50'"}],staticClass:"form-control",attrs:{"data-vv-as":"company city",name:"company_city",placeholder:"Enter city",type:"text"},domProps:{value:e.newCustomer.company_city},on:{input:function(t){t.target.composing||e.$set(e.newCustomer,"company_city",t.target.value)}}}),e._v(" "),e.errors.first("company_city")?a("small",[e._v(e._s(e.errors.first("company_city")))]):e._e()]),e._v(" "),a("div",{staticClass:"form-group col-md-4 px-md-3 px-1 float-left"},[a("label",[e._v("State")]),e._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:e.newCustomer.company_state,expression:"newCustomer.company_state"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"custom-select w-100",attrs:{"data-vv-as":"company state","data-vv-validate-on":"blur",name:"company_state"},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.$set(e.newCustomer,"company_state",t.target.multiple?a:a[0])}}},[a("option",{attrs:{value:""}},[e._v("select state")]),e._v(" "),e._l(e.states,function(t){return a("option",{domProps:{value:t.name}},[e._v(e._s(t.name))])})],2),e._v(" "),e.errors.first("company_state")?a("small",[e._v(e._s(e.errors.first("company_state"))+"\n                                ")]):e._e()]),e._v(" "),a("div",{staticClass:"spaceBetween"}),e._v(" "),a("div",{staticClass:"form-group col-md-4 px-md-3 px-1 float-left"},[a("label",[e._v("Phone Number")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.newCustomer.company_telno,expression:"newCustomer.company_telno"},{name:"validate",rawName:"v-validate",value:"required|numeric|max:11|min:11",expression:"'required|numeric|max:11|min:11'"}],staticClass:"form-control",attrs:{"data-vv-as":"company phone number",name:"company_phone_number",placeholder:"Enter city",type:"tel"},domProps:{value:e.newCustomer.company_telno},on:{input:function(t){t.target.composing||e.$set(e.newCustomer,"company_telno",t.target.value)}}}),e._v(" "),e.errors.first("company_phone_number")?a("small",[e._v(e._s(e.errors.first("company_phone_number"))+"\n                                ")]):e._e()]),e._v(" "),a("div",{staticClass:"form-group col-md-4 px-md-3 px-1 float-left"},[a("label",[e._v("Time Available for Visit: From")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.newCustomer.cvisit_hour_from,expression:"newCustomer.cvisit_hour_from"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",attrs:{"data-vv-as":"available from",name:"available_from",type:"time"},domProps:{value:e.newCustomer.cvisit_hour_from},on:{input:function(t){t.target.composing||e.$set(e.newCustomer,"cvisit_hour_from",t.target.value)}}}),e._v(" "),e.errors.first("available_from")?a("small",[e._v(e._s(e.errors.first("available_from"))+"\n                                ")]):e._e()]),e._v(" "),a("div",{staticClass:"form-group col-md-4 px-md-3 px-1 float-left"},[a("label",[e._v("To")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.newCustomer.cvisit_hour_to,expression:"newCustomer.cvisit_hour_to"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",attrs:{"data-vv-as":"available to",name:"available_to",type:"time"},domProps:{value:e.newCustomer.cvisit_hour_to},on:{input:function(t){t.target.composing||e.$set(e.newCustomer,"cvisit_hour_to",t.target.value)}}}),e._v(" "),e.errors.first("available_to")?a("small",[e._v(e._s(e.errors.first("available_to")))]):e._e()]),e._v(" "),a("div",{staticClass:"spaceBetween"}),e._v(" "),a("div",{staticClass:"form-group col-md-12 px-md-3 px-1 float-left"},[a("label",[e._v("Describe Location")]),e._v(" "),a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.newCustomer.cadd_addinfo,expression:"newCustomer.cadd_addinfo"}],staticClass:"form-control col-sm-12",attrs:{placeholder:"Describe the Location",rows:"1"},domProps:{value:e.newCustomer.cadd_addinfo},on:{input:function(t){t.target.composing||e.$set(e.newCustomer,"cadd_addinfo",t.target.value)}}})])]):"informal(business)"===e.newCustomer.employment_status?a("div",[a("div",{staticClass:"form-group col-md-6 px-md-3 px-1 float-left"},[a("label",[e._v("Phone number of working/business individual in household")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.newCustomer.working_individual_Phone_number,expression:"newCustomer.working_individual_Phone_number"},{name:"validate",rawName:"v-validate",value:"required|numeric|max:11|min:11",expression:"'required|numeric|max:11|min:11'"}],staticClass:"form-control",attrs:{"data-vv-as":"office phone",name:"office_phone",placeholder:"Enter Phone Number here",type:"tel"},domProps:{value:e.newCustomer.working_individual_Phone_number},on:{input:function(t){t.target.composing||e.$set(e.newCustomer,"working_individual_Phone_number",t.target.value)}}}),e._v(" "),e.errors.first("office_phone")?a("small",[e._v(e._s(e.errors.first("office_phone")))]):e._e()]),e._v(" "),a("div",{staticClass:"form-group col-md-6 px-md-3 px-1 float-left"},[a("label",[e._v("Name of the Business")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.newCustomer.name_of_company_or_business,expression:"newCustomer.name_of_company_or_business"},{name:"validate",rawName:"v-validate",value:"required|max:100",expression:"'required|max:100'"}],staticClass:"form-control",attrs:{"data-vv-as":"name of firm",name:"name_of_firm",placeholder:"Enter name of company here",type:"text"},domProps:{value:e.newCustomer.name_of_company_or_business},on:{input:function(t){t.target.composing||e.$set(e.newCustomer,"name_of_company_or_business",t.target.value)}}}),e._v(" "),e.errors.first("name_of_firm")?a("small",[e._v(e._s(e.errors.first("name_of_firm")))]):e._e()]),e._v(" "),a("div",{staticClass:"spaceBetween"}),e._v(" "),a("div",{staticClass:"form-group col-md-6 px-md-3 px-1 float-left"},[a("label",[e._v("Name of Market")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.newCustomer.market_name,expression:"newCustomer.market_name"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",attrs:{"data-vv-as":"name of market",name:"market_of_name",placeholder:"name of market",type:"text"},domProps:{value:e.newCustomer.market_name},on:{input:function(t){t.target.composing||e.$set(e.newCustomer,"market_name",t.target.value)}}}),e._v(" "),e.errors.has("market_of_name")?a("small",[e._v(e._s(e.errors.first("market_of_name")))]):e._e()]),e._v(" "),a("div",{staticClass:"form-group col-md-6 px-md-3 px-1 float-left"},[a("label",[e._v("Monthly Businesss income")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.newCustomer.current_sal_or_business_income,expression:"newCustomer.current_sal_or_business_income"},{name:"validate",rawName:"v-validate",value:"required|numeric",expression:"'required|numeric'"}],staticClass:"form-control",attrs:{"data-vv-as":"current salary",name:"current_salary",placeholder:"Current Salary or Monthly income",type:"number"},domProps:{value:e.newCustomer.current_sal_or_business_income},on:{input:function(t){t.target.composing||e.$set(e.newCustomer,"current_sal_or_business_income",t.target.value)}}}),e._v(" "),e.errors.has("current_salary")?a("small",[e._v(e._s(e.errors.first("current_salary"))+"\n                                ")]):e._e()]),e._v(" "),a("div",{staticClass:"spaceBetween"}),e._v(" "),a("div",{staticClass:"form-group col-md-6 px-md-3 px-1 float-left"},[a("label",[e._v("Monthly Gains")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.newCustomer.monthly_gains,expression:"newCustomer.monthly_gains"},{name:"validate",rawName:"v-validate",value:"required|numeric",expression:"'required|numeric'"}],staticClass:"form-control",attrs:{"data-vv-as":"monthly gains",name:"monthly_gains",placeholder:"monthly gains",type:"number"},domProps:{value:e.newCustomer.monthly_gains},on:{input:function(t){t.target.composing||e.$set(e.newCustomer,"monthly_gains",t.target.value)}}}),e._v(" "),e.errors.first("monthly_gains")?a("small",[e._v(e._s(e.errors.first("monthly_gains"))+"\n                                ")]):e._e()]),e._v(" "),a("div",{staticClass:"form-group col-md-6 px-md-3 px-1 float-left"},[a("label",[e._v("Years of Existence")]),e._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:e.newCustomer.years_of_existence_or_work_duration,expression:"newCustomer.years_of_existence_or_work_duration"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"custom-select w-100",attrs:{"data-vv-as":"years of existence","data-vv-validate-on":"blur",name:"work_duration"},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.$set(e.newCustomer,"years_of_existence_or_work_duration",t.target.multiple?a:a[0])}}},[a("option",{attrs:{value:""}},[e._v("select duration")]),e._v(" "),e._l(e.durations,function(t){return a("option",{domProps:{value:t}},[e._v(e._s(t))])})],2),e._v(" "),e.errors.first("work_duration")?a("small",[e._v(e._s(e.errors.first("work_duration"))+"\n                                ")]):e._e()]),e._v(" "),a("div",{staticClass:"spaceBetween"}),e._v(" "),a("div",{staticClass:"form-group col-md-3 col-6 px-md-3 px-1 float-left"},[a("label",{staticClass:"w-100 float-left pl-1"},[e._v("Dou you have a bank account?")]),e._v(" "),a("div",{staticClass:"radio pl-1 pr-3 float-left"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.newCustomer.bank_account,expression:"newCustomer.bank_account"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{"data-vv-as":"bank account",id:"bank_account_yes",name:"bank_account",type:"radio",value:"Yes"},domProps:{checked:e._q(e.newCustomer.bank_account,"Yes")},on:{change:function(t){e.$set(e.newCustomer,"bank_account","Yes")}}}),e._v(" "),a("label",{attrs:{for:"bank_account_yes"}},[e._v("Yes")])]),e._v(" "),a("div",{staticClass:"radio pl-1 pr-3 float-left"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.newCustomer.bank_account,expression:"newCustomer.bank_account"}],attrs:{id:"bank_account_no",name:"bank_account",type:"radio",value:"No"},domProps:{checked:e._q(e.newCustomer.bank_account,"No")},on:{change:function(t){e.$set(e.newCustomer,"bank_account","No")}}}),e._v(" "),a("label",{attrs:{for:"bank_account_no"}},[e._v("No")])]),e._v(" "),e.errors.first("bank_account")?a("small",[e._v(e._s(e.errors.first("bank_account")))]):e._e()]),e._v(" "),a("div",{staticClass:"form-group col-md-9 px-md-3 px-1 float-left"},[a("label",{staticClass:"w-100 float-left"},[e._v("Days of Work")]),e._v(" "),e._l(e.weekdays,function(t){return a("div",{staticClass:"checkbox float-left pr-3"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.newCustomer.days_of_work,expression:"newCustomer.days_of_work"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{id:t,"data-vv-as":"days of work",name:"days_of_work",type:"checkbox"},domProps:{value:t,checked:Array.isArray(e.newCustomer.days_of_work)?e._i(e.newCustomer.days_of_work,t)>-1:e.newCustomer.days_of_work},on:{change:function(a){var r=e.newCustomer.days_of_work,s=a.target,o=!!s.checked;if(Array.isArray(r)){var n=t,i=e._i(r,n);s.checked?i<0&&e.$set(e.newCustomer,"days_of_work",r.concat([n])):i>-1&&e.$set(e.newCustomer,"days_of_work",r.slice(0,i).concat(r.slice(i+1)))}else e.$set(e.newCustomer,"days_of_work",o)}}}),e._v(" "),a("label",{attrs:{for:t}},[e._v(e._s(t))])])}),e._v(" "),e.errors.first("days_of_work")?a("small",[e._v(e._s(e.errors.first("days_of_work")))]):e._e()],2),e._v(" "),a("div",{staticClass:"spaceAfter"}),e._v(" "),a("h5",[e._v("Address of Business")]),e._v(" "),a("div",{staticClass:"form-group col-md-4 px-md-3 px-1 float-left"},[a("label",[e._v("Street Name")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.newCustomer.comp_street_name,expression:"newCustomer.comp_street_name"},{name:"validate",rawName:"v-validate",value:"required|max:50",expression:"'required|max:50'"}],staticClass:"form-control",attrs:{"data-vv-as":"office street name",name:"office_street_name",placeholder:"Enter Street name here",type:"text"},domProps:{value:e.newCustomer.comp_street_name},on:{input:function(t){t.target.composing||e.$set(e.newCustomer,"comp_street_name",t.target.value)}}}),e._v(" "),e.errors.first("office_street_name")?a("small",[e._v(e._s(e.errors.first("office_street_name"))+"\n                                ")]):e._e()]),e._v(" "),a("div",{staticClass:"form-group col-md-4 px-md-3 px-1 float-left"},[a("label",[e._v("Shop Number")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.newCustomer.comp_house_no,expression:"newCustomer.comp_house_no"},{name:"validate",rawName:"v-validate",value:"required|max:50",expression:"'required|max:50'"}],staticClass:"form-control",attrs:{"data-vv-as":"office building number",name:"office_building_number",placeholder:"Enter Building Number",type:"text"},domProps:{value:e.newCustomer.comp_house_no},on:{input:function(t){t.target.composing||e.$set(e.newCustomer,"comp_house_no",t.target.value)}}}),e._v(" "),e.errors.first("office_building_number")?a("small",[e._v(e._s(e.errors.first("office_building_number"))+"\n                                ")]):e._e()]),e._v(" "),a("div",{staticClass:"form-group col-md-4 px-md-3 px-1 float-left"},[a("label",[e._v("Nearest Bus Stop")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.newCustomer.cadd_nbstop,expression:"newCustomer.cadd_nbstop"},{name:"validate",rawName:"v-validate",value:"required|max:50",expression:"'required|max:50'"}],staticClass:"form-control",attrs:{"data-vv-as":"office nearest bus stop",name:"office_nearest_bus_stop",placeholder:"Enter nearest bus stop",type:"text"},domProps:{value:e.newCustomer.cadd_nbstop},on:{input:function(t){t.target.composing||e.$set(e.newCustomer,"cadd_nbstop",t.target.value)}}}),e._v(" "),e.errors.first("office_nearest_bus_stop")?a("small",[e._v(e._s(e.errors.first("office_nearest_bus_stop"))+"\n                                ")]):e._e()]),e._v(" "),a("div",{staticClass:"spaceBetween"}),e._v(" "),a("div",{staticClass:"form-group col-md-4 px-md-3 px-1 float-left"},[a("label",[e._v("Area")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.newCustomer.comp_area,expression:"newCustomer.comp_area"},{name:"validate",rawName:"v-validate",value:"required|max:50",expression:"'required|max:50'"}],staticClass:"form-control",attrs:{"data-vv-as":"company area",name:"company_area",placeholder:"Enter area",type:"text"},domProps:{value:e.newCustomer.comp_area},on:{input:function(t){t.target.composing||e.$set(e.newCustomer,"comp_area",t.target.value)}}}),e._v(" "),e.errors.first("company_area")?a("small",[e._v(e._s(e.errors.first("company_area")))]):e._e()]),e._v(" "),a("div",{staticClass:"form-group col-md-4 px-md-3 px-1 float-left"},[a("label",[e._v("City")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.newCustomer.company_city,expression:"newCustomer.company_city"},{name:"validate",rawName:"v-validate",value:"required|max:50",expression:"'required|max:50'"}],staticClass:"form-control",attrs:{"data-vv-as":"company city",name:"company_city",placeholder:"Enter city",type:"text"},domProps:{value:e.newCustomer.company_city},on:{input:function(t){t.target.composing||e.$set(e.newCustomer,"company_city",t.target.value)}}}),e._v(" "),e.errors.first("company_city")?a("small",[e._v(e._s(e.errors.first("company_city")))]):e._e()]),e._v(" "),a("div",{staticClass:"form-group col-md-4 px-md-3 px-1 float-left"},[a("label",[e._v("State")]),e._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:e.newCustomer.company_state,expression:"newCustomer.company_state"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"custom-select w-100",attrs:{"data-vv-as":"company state","data-vv-validate-on":"blur",name:"company_state"},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.$set(e.newCustomer,"company_state",t.target.multiple?a:a[0])}}},[a("option",{attrs:{value:""}},[e._v("select state")]),e._v(" "),e._l(e.states,function(t){return a("option",{domProps:{value:t.name}},[e._v(e._s(t.name))])})],2),e._v(" "),e.errors.first("company_state")?a("small",[e._v(e._s(e.errors.first("company_state"))+"\n                                ")]):e._e()]),e._v(" "),a("div",{staticClass:"spaceBetween"}),e._v(" "),a("div",{staticClass:"form-group col-md-4 px-md-3 px-1 float-left"},[a("label",[e._v("Phone Number")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.newCustomer.company_telno,expression:"newCustomer.company_telno"},{name:"validate",rawName:"v-validate",value:"required|numeric|max:11|min:11",expression:"'required|numeric|max:11|min:11'"}],staticClass:"form-control",attrs:{"data-vv-as":"company phone number",name:"company_phone_number",placeholder:"Enter city",type:"tel"},domProps:{value:e.newCustomer.company_telno},on:{input:function(t){t.target.composing||e.$set(e.newCustomer,"company_telno",t.target.value)}}}),e._v(" "),e.errors.first("company_phone_number")?a("small",[e._v(e._s(e.errors.first("company_phone_number"))+"\n                                ")]):e._e()]),e._v(" "),a("div",{staticClass:"form-group col-md-4 px-md-3 px-1 float-left"},[a("label",[e._v("Time Available for Visit: From")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.newCustomer.cvisit_hour_from,expression:"newCustomer.cvisit_hour_from"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",attrs:{"data-vv-as":"available from",name:"available_from",type:"time"},domProps:{value:e.newCustomer.cvisit_hour_from},on:{input:function(t){t.target.composing||e.$set(e.newCustomer,"cvisit_hour_from",t.target.value)}}}),e._v(" "),e.errors.first("available_from")?a("small",[e._v(e._s(e.errors.first("available_from"))+"\n                                ")]):e._e()]),e._v(" "),a("div",{staticClass:"form-group col-md-4 px-md-3 px-1 float-left"},[a("label",[e._v("To")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.newCustomer.cvisit_hour_to,expression:"newCustomer.cvisit_hour_to"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",attrs:{"data-vv-as":"available to",name:"available_to",type:"time"},domProps:{value:e.newCustomer.cvisit_hour_to},on:{input:function(t){t.target.composing||e.$set(e.newCustomer,"cvisit_hour_to",t.target.value)}}}),e._v(" "),e.errors.first("available_to")?a("small",[e._v(e._s(e.errors.first("available_to")))]):e._e()]),e._v(" "),a("div",{staticClass:"spaceBetween"}),e._v(" "),a("div",{staticClass:"form-group col-md-12 px-md-3 px-1 float-left"},[a("label",[e._v("Describe Location")]),e._v(" "),a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.newCustomer.cadd_addinfo,expression:"newCustomer.cadd_addinfo"}],staticClass:"form-control col-sm-12",attrs:{placeholder:"Describe the Location",rows:"1"},domProps:{value:e.newCustomer.cadd_addinfo},on:{input:function(t){t.target.composing||e.$set(e.newCustomer,"cadd_addinfo",t.target.value)}}})])]):a("div")]),e._v(" "),a("div",{staticClass:"spaceAfter"}),e._v(" "),a("h5",[e._v("Next of Kin")]),e._v(" "),a("div",{staticClass:"form-group col-md-4 px-md-3 px-1 float-left"},[a("label",[e._v("First Name")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.newCustomer.nextofkin_first_name,expression:"newCustomer.nextofkin_first_name"},{name:"validate",rawName:"v-validate",value:"required|max:25",expression:"'required|max:25'"}],staticClass:"form-control",attrs:{"data-vv-as":"next of kin first name",name:"NOK_first_name",placeholder:"Enter first name",type:"text"},domProps:{value:e.newCustomer.nextofkin_first_name},on:{input:function(t){t.target.composing||e.$set(e.newCustomer,"nextofkin_first_name",t.target.value)}}}),e._v(" "),e.errors.first("NOK_first_name")?a("small",[e._v(e._s(e.errors.first("NOK_first_name")))]):e._e()]),e._v(" "),a("div",{staticClass:"form-group col-md-4 px-md-3 px-1 float-left"},[a("label",[e._v("Middle Name")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.newCustomer.nextofkin_middle_name,expression:"newCustomer.nextofkin_middle_name"}],staticClass:"form-control",attrs:{placeholder:"Enter middle name",type:"text"},domProps:{value:e.newCustomer.nextofkin_middle_name},on:{input:function(t){t.target.composing||e.$set(e.newCustomer,"nextofkin_middle_name",t.target.value)}}})]),e._v(" "),a("div",{staticClass:"form-group col-md-4 px-md-3 px-1 float-left"},[a("label",[e._v("Last Name")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.newCustomer.nextofkin_last_name,expression:"newCustomer.nextofkin_last_name"},{name:"validate",rawName:"v-validate",value:"required|max:25",expression:"'required|max:25'"}],staticClass:"form-control",attrs:{"data-vv-as":"next of kin last name",name:"NOK_last_name",placeholder:"Enter last name",type:"text"},domProps:{value:e.newCustomer.nextofkin_last_name},on:{input:function(t){t.target.composing||e.$set(e.newCustomer,"nextofkin_last_name",t.target.value)}}}),e._v(" "),e.errors.first("NOK_last_name")?a("small",[e._v(e._s(e.errors.first("NOK_last_name")))]):e._e()]),e._v(" "),a("div",{staticClass:"spaceAfter"}),e._v(" "),a("div",{staticClass:"form-group col-md-4 px-md-3 px-1 float-left"},[a("label",{staticClass:"w-100 float-left pl-1"},[e._v("Gender")]),e._v(" "),e._l(e.gender,function(t){return a("div",{staticClass:"radio p-0 col-md-6 col-6 float-left"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.newCustomer.nextofkin_gender,expression:"newCustomer.nextofkin_gender"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{id:"nok"+t,"data-vv-as":"next of kin gender",name:"nokgender",type:"radio"},domProps:{value:t,checked:e._q(e.newCustomer.nextofkin_gender,t)},on:{change:function(a){e.$set(e.newCustomer,"nextofkin_gender",t)}}}),e._v(" "),a("label",{attrs:{for:"nok"+t}},[e._v(e._s(t))])])}),e._v(" "),e.errors.first("nokgender")?a("small",[e._v(e._s(e.errors.first("nokgender")))]):e._e()],2),e._v(" "),a("div",{staticClass:"form-group col-md-4 px-md-3 px-1 float-left"},[a("label",[e._v("Phone Number")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.newCustomer.nextofkin_telno,expression:"newCustomer.nextofkin_telno"},{name:"validate",rawName:"v-validate",value:"required|numeric|max:11|min:11",expression:"'required|numeric|max:11|min:11'"}],staticClass:"form-control",attrs:{"data-vv-as":"next of kin phone number",name:"NOK_phone_number",placeholder:"Enter phone number",type:"tel"},domProps:{value:e.newCustomer.nextofkin_telno},on:{input:function(t){t.target.composing||e.$set(e.newCustomer,"nextofkin_telno",t.target.value)}}}),e._v(" "),e.errors.first("NOK_phone_number")?a("small",[e._v(e._s(e.errors.first("NOK_phone_number")))]):e._e()]),e._v(" "),a("div",{staticClass:"form-group col-md-4 px-md-3 px-1 float-left"},[a("label",[e._v("Duration in Current work")]),e._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:e.newCustomer.nextofkin_work_duration,expression:"newCustomer.nextofkin_work_duration"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"custom-select w-100",attrs:{"data-vv-as":"next of kin duration of work","data-vv-validate-on":"blur",name:"NOK_work_duration"},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.$set(e.newCustomer,"nextofkin_work_duration",t.target.multiple?a:a[0])}}},[a("option",{attrs:{value:""}},[e._v("select duration")]),e._v(" "),e._l(e.durations,function(t){return a("option",{domProps:{value:t}},[e._v(e._s(t))])})],2),e._v(" "),e.errors.first("NOK_work_duration")?a("small",[e._v(e._s(e.errors.first("NOK_work_duration"))+"\n                        ")]):e._e()]),e._v(" "),a("div",{staticClass:"spaceAfter"}),e._v(" "),a("div",{staticClass:"form-group col-md-12 px-md-3 px-1 float-left"},[a("label",{staticClass:"w-100 float-left pl-1"},[e._v("Relationship")]),e._v(" "),e._l(e.relationships,function(t){return a("div",{staticClass:"radio p-0 col-md-2 col-4 float-left"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.newCustomer.nextofkin_relationship,expression:"newCustomer.nextofkin_relationship"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{id:t,"data-vv-as":"next of kin relationship",name:"relationship",type:"radio"},domProps:{value:t,checked:e._q(e.newCustomer.nextofkin_relationship,t)},on:{change:function(a){e.$set(e.newCustomer,"nextofkin_relationship",t)}}}),e._v(" "),a("label",{attrs:{for:t}},[e._v(e._s(t))])])}),e._v(" "),e.errors.first("relationship")?a("small",[e._v(e._s(e.errors.first("relationship")))]):e._e()],2)],1):e._e(),e._v(" "),a("div",{staticClass:"spaceAfter"}),e._v(" "),a("h5",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.fillWorkGuarantor,expression:"fillWorkGuarantor"}],staticClass:"form-check-input ml-1 mr-2",attrs:{type:"checkbox",value:"true"},domProps:{checked:Array.isArray(e.fillWorkGuarantor)?e._i(e.fillWorkGuarantor,"true")>-1:e.fillWorkGuarantor},on:{change:function(t){var a=e.fillWorkGuarantor,r=t.target,s=!!r.checked;if(Array.isArray(a)){var o=e._i(a,"true");r.checked?o<0&&(e.fillWorkGuarantor=a.concat(["true"])):o>-1&&(e.fillWorkGuarantor=a.slice(0,o).concat(a.slice(o+1)))}else e.fillWorkGuarantor=s}}}),e._v("Work Guarantor Personal Info\n                ")]),e._v(" "),e.fillWorkGuarantor?a("div",[a("div",{staticClass:"form-group col-md-4 px-md-3 px-1 float-left"},[a("label",[e._v("First Name")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.newCustomer.work_guarantor_first_name,expression:"newCustomer.work_guarantor_first_name"},{name:"validate",rawName:"v-validate",value:"required|max:25",expression:"'required|max:25'"}],staticClass:"form-control",attrs:{"data-vv-as":"work guarantors first name",name:"WG_first_name",placeholder:"Enter first name",type:"text"},domProps:{value:e.newCustomer.work_guarantor_first_name},on:{input:function(t){t.target.composing||e.$set(e.newCustomer,"work_guarantor_first_name",t.target.value)}}}),e._v(" "),e.errors.first("WG_first_name")?a("small",[e._v(e._s(e.errors.first("WG_first_name")))]):e._e()]),e._v(" "),a("div",{staticClass:"form-group col-md-4 px-md-3 px-1 float-left"},[a("label",[e._v("Middle Name")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.newCustomer.work_guarantor_middle_name,expression:"newCustomer.work_guarantor_middle_name"}],staticClass:"form-control",attrs:{placeholder:"Enter middle name",type:"text"},domProps:{value:e.newCustomer.work_guarantor_middle_name},on:{input:function(t){t.target.composing||e.$set(e.newCustomer,"work_guarantor_middle_name",t.target.value)}}})]),e._v(" "),a("div",{staticClass:"form-group col-md-4 px-md-3 px-1 float-left"},[a("label",[e._v("Last Name")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.newCustomer.work_guarantor_last_name,expression:"newCustomer.work_guarantor_last_name"},{name:"validate",rawName:"v-validate",value:"required|max:25",expression:"'required|max:25'"}],staticClass:"form-control",attrs:{"data-vv-as":"work guarantors last name",name:"WG_last_name",placeholder:"Enter last name",type:"text"},domProps:{value:e.newCustomer.work_guarantor_last_name},on:{input:function(t){t.target.composing||e.$set(e.newCustomer,"work_guarantor_last_name",t.target.value)}}}),e._v(" "),e.errors.first("WG_last_name")?a("small",[e._v(e._s(e.errors.first("WG_last_name")))]):e._e()]),e._v(" "),a("div",{staticClass:"spaceAfter"}),e._v(" "),a("div",{staticClass:"form-group col-md-9 col-sm-12 px-md-3 px-1 float-left"},[a("label",{staticClass:"w-100 float-left pl-1"},[e._v("Relationship")]),e._v(" "),e._l(e.relationshipWG,function(t){return a("div",{staticClass:"radio p-0 col-md-3 col-6 float-left"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.newCustomer.work_guarantor_relationship,expression:"newCustomer.work_guarantor_relationship"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{id:t+"wg","data-vv-as":"work guarantor relationship",name:"relationshipwg",type:"radio"},domProps:{value:t,checked:e._q(e.newCustomer.work_guarantor_relationship,t)},on:{change:function(a){e.$set(e.newCustomer,"work_guarantor_relationship",t)}}}),e._v(" "),a("label",{attrs:{for:t+"wg"}},[e._v(e._s(t))])])}),e._v(" "),e.errors.first("relationshipwg")?a("small",[e._v(e._s(e.errors.first("relationshipwg")))]):e._e()],2),e._v(" "),a("div",{staticClass:"form-group col-md-3 col-sm-6 px-md-3 px-1 float-left"},[a("label",{staticClass:"w-100 float-left pl-1"},[e._v("Gender")]),e._v(" "),e._l(e.gender,function(t){return a("div",{staticClass:"radio p-0 col-6 float-left"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.newCustomer.work_guarantor_gender,expression:"newCustomer.work_guarantor_gender"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{id:"gua"+t,"data-vv-as":"work guanrantor gender",name:"wggender",type:"radio"},domProps:{value:t,checked:e._q(e.newCustomer.work_guarantor_gender,t)},on:{change:function(a){e.$set(e.newCustomer,"work_guarantor_gender",t)}}}),e._v(" "),a("label",{attrs:{for:"gua"+t}},[e._v(e._s(t))])])}),e._v(" "),e.errors.first("wggender")?a("small",[e._v(e._s(e.errors.first("wggender")))]):e._e()],2),e._v(" "),a("div",{staticClass:"spaceAfter"}),e._v(" "),a("h5",[e._v("Work Guarantor office Details")]),e._v(" "),a("div",{staticClass:"form-group col-md-4 px-md-3 px-1 float-left"},[a("label",[e._v("Street Name")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.newCustomer.guaadd_street,expression:"newCustomer.guaadd_street"},{name:"validate",rawName:"v-validate",value:"required|max:25",expression:"'required|max:25'"}],staticClass:"form-control",attrs:{"data-vv-as":"work guarantor street",name:"work_guarantor_street_name",placeholder:"Enter Street name here",type:"text"},domProps:{value:e.newCustomer.guaadd_street},on:{input:function(t){t.target.composing||e.$set(e.newCustomer,"guaadd_street",t.target.value)}}}),e._v(" "),e.errors.first("work_guarantor_street_name")?a("small",[e._v(e._s(e.errors.first("work_guarantor_street_name"))+"\n                        ")]):e._e()]),e._v(" "),a("div",{staticClass:"form-group col-md-4 px-md-3 px-1 float-left"},[a("label",[e._v("Office Building Number")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.newCustomer.guaadd_houseno,expression:"newCustomer.guaadd_houseno"},{name:"validate",rawName:"v-validate",value:"required|max:25",expression:"'required|max:25'"}],staticClass:"form-control",attrs:{"data-vv-as":"work guarantor office building",name:"work_guarantor_office_building",placeholder:"Enter Building Number",type:"text"},domProps:{value:e.newCustomer.guaadd_houseno},on:{input:function(t){t.target.composing||e.$set(e.newCustomer,"guaadd_houseno",t.target.value)}}}),e._v(" "),e.errors.first("work_guarantor_office_building")?a("small",{staticClass:"text-muted"},[e._v(e._s(e.errors.first("work_guarantor_office_building"))+"\n                        ")]):e._e()]),e._v(" "),a("div",{staticClass:"form-group col-md-4 px-md-3 px-1 float-left"},[a("label",[e._v("Nearest Bus Stop")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.newCustomer.guaadd_nbstop,expression:"newCustomer.guaadd_nbstop"},{name:"validate",rawName:"v-validate",value:"required|max:25",expression:"'required|max:25'"}],staticClass:"form-control",attrs:{"data-vv-as":"work guarantor bus stop",name:"work_guarantor_bus_stop",placeholder:"Enter nearest bus stop",type:"text"},domProps:{value:e.newCustomer.guaadd_nbstop},on:{input:function(t){t.target.composing||e.$set(e.newCustomer,"guaadd_nbstop",t.target.value)}}}),e._v(" "),e.errors.first("work_guarantor_bus_stop")?a("small",[e._v(e._s(e.errors.first("work_guarantor_bus_stop"))+"\n                        ")]):e._e()]),e._v(" "),a("div",{staticClass:"spaceAfter"}),e._v(" "),a("div",{staticClass:"form-group col-md-4 px-md-3 px-1 float-left"},[a("label",[e._v("Area")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.newCustomer.gua_area,expression:"newCustomer.gua_area"},{name:"validate",rawName:"v-validate",value:"required|max:25",expression:"'required|max:25'"}],staticClass:"form-control",attrs:{"data-vv-as":"work guarantor area",name:"work_guarantor_area",placeholder:"Enter area",type:"text"},domProps:{value:e.newCustomer.gua_area},on:{input:function(t){t.target.composing||e.$set(e.newCustomer,"gua_area",t.target.value)}}}),e._v(" "),e.errors.first("work_guarantor_area")?a("small",[e._v(e._s(e.errors.first("work_guarantor_area"))+"\n                        ")]):e._e()]),e._v(" "),a("div",{staticClass:"form-group col-md-4 px-md-3 px-1 float-left"},[a("label",[e._v("City")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.newCustomer.work_guarantor_city,expression:"newCustomer.work_guarantor_city"},{name:"validate",rawName:"v-validate",value:"required|max:25",expression:"'required|max:25'"}],staticClass:"form-control",attrs:{"data-vv-as":"work guarantor city",name:"work_guarantor_city",placeholder:"Enter city",type:"text"},domProps:{value:e.newCustomer.work_guarantor_city},on:{input:function(t){t.target.composing||e.$set(e.newCustomer,"work_guarantor_city",t.target.value)}}}),e._v(" "),e.errors.first("work_guarantor_city")?a("small",[e._v(e._s(e.errors.first("work_guarantor_city"))+"\n                        ")]):e._e()]),e._v(" "),a("div",{staticClass:"form-group col-md-4 px-md-3 px-1 float-left"},[a("label",[e._v("State")]),e._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:e.newCustomer.work_guarantor_state,expression:"newCustomer.work_guarantor_state"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"custom-select w-100",attrs:{"data-vv-as":"work guarantor state","data-vv-validate-on":"blur",name:"work_guarantor_state"},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.$set(e.newCustomer,"work_guarantor_state",t.target.multiple?a:a[0])}}},[a("option",{attrs:{value:""}},[e._v("select state")]),e._v(" "),e._l(e.states,function(t){return a("option",{domProps:{value:t.name}},[e._v(e._s(t.name))])})],2),e._v(" "),e.errors.first("work_guarantor_state")?a("small",[e._v(e._s(e.errors.first("work_guarantor_state"))+"\n                        ")]):e._e()]),e._v(" "),a("div",{staticClass:"spaceAfter"}),e._v(" "),a("div",{staticClass:"form-group col-md-4 px-md-3 px-1 float-left"},[a("label",[e._v("Phone Number")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.newCustomer.work_guarantor_telno,expression:"newCustomer.work_guarantor_telno"},{name:"validate",rawName:"v-validate",value:"required|numeric|max:11|min:11",expression:"'required|numeric|max:11|min:11'"}],staticClass:"form-control",attrs:{"data-vv-as":"work guarantor phone",name:"work_guarantor_phone",placeholder:"Enter city",type:"tel"},domProps:{value:e.newCustomer.work_guarantor_telno},on:{input:function(t){t.target.composing||e.$set(e.newCustomer,"work_guarantor_telno",t.target.value)}}}),e._v(" "),e.errors.first("work_guarantor_phone")?a("small",[e._v(e._s(e.errors.first("work_guarantor_phone"))+"\n                        ")]):e._e()]),e._v(" "),a("div",{staticClass:"form-group col-md-4 px-md-3 px-1 float-left"},[a("label",[e._v("Duration in Current work")]),e._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:e.newCustomer.work_guarantor_work_duration,expression:"newCustomer.work_guarantor_work_duration"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"custom-select w-100",attrs:{"data-vv-as":"work guarantor work duration","data-vv-validate-on":"blur",name:"work_guarantor_work_duration"},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.$set(e.newCustomer,"work_guarantor_work_duration",t.target.multiple?a:a[0])}}},[a("option",{attrs:{value:""}},[e._v("select duration")]),e._v(" "),e._l(e.durations,function(t){return a("option",{domProps:{value:t}},[e._v(e._s(t))])})],2),e._v(" "),e.errors.first("work_guarantor_work_duration")?a("small",[e._v(e._s(e.errors.first("work_guarantor_work_duration"))+"\n                        ")]):e._e()]),e._v(" "),a("div",{staticClass:"form-group col-md-4 px-md-3 px-1 float-left"},[a("label",[e._v("Describe Location")]),e._v(" "),a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.newCustomer.guaadd_addinfo,expression:"newCustomer.guaadd_addinfo"}],staticClass:"form-control col-sm-12",attrs:{placeholder:"Describe the Location",rows:"1"},domProps:{value:e.newCustomer.guaadd_addinfo},on:{input:function(t){t.target.composing||e.$set(e.newCustomer,"guaadd_addinfo",t.target.value)}}})]),e._v(" "),a("div",{staticClass:"spaceAfter"})]):e._e(),e._v(" "),a("h5",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.fillPersonalGuarantor,expression:"fillPersonalGuarantor"}],staticClass:"form-check-input ml-1 mr-2",attrs:{type:"checkbox",value:"true"},domProps:{checked:Array.isArray(e.fillPersonalGuarantor)?e._i(e.fillPersonalGuarantor,"true")>-1:e.fillPersonalGuarantor},on:{change:function(t){var a=e.fillPersonalGuarantor,r=t.target,s=!!r.checked;if(Array.isArray(a)){var o=e._i(a,"true");r.checked?o<0&&(e.fillPersonalGuarantor=a.concat(["true"])):o>-1&&(e.fillPersonalGuarantor=a.slice(0,o).concat(a.slice(o+1)))}else e.fillPersonalGuarantor=s}}}),e._v("\n                    Personal Guarantor Personal Info\n                ")]),e._v(" "),e.fillPersonalGuarantor?a("div",[a("div",{staticClass:"form-group col-md-4 px-md-3 px-1 float-left"},[a("label",[e._v("First Name")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.newCustomer.personal_guarantor_first_name,expression:"newCustomer.personal_guarantor_first_name"},{name:"validate",rawName:"v-validate",value:"required|max:25",expression:"'required|max:25'"}],staticClass:"form-control",attrs:{"data-vv-as":"first name",name:"PG_first_name",placeholder:"Enter first name",type:"text"},domProps:{value:e.newCustomer.personal_guarantor_first_name},on:{input:function(t){t.target.composing||e.$set(e.newCustomer,"personal_guarantor_first_name",t.target.value)}}}),e._v(" "),e.errors.first("PG_first_name")?a("small",[e._v(e._s(e.errors.first("PG_first_name")))]):e._e()]),e._v(" "),a("div",{staticClass:"form-group col-md-4 px-md-3 px-1 float-left"},[a("label",[e._v("Middle Name")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.newCustomer.personal_guarantor_middle_name,expression:"newCustomer.personal_guarantor_middle_name"}],staticClass:"form-control",attrs:{placeholder:"Enter middle name",type:"text"},domProps:{value:e.newCustomer.personal_guarantor_middle_name},on:{input:function(t){t.target.composing||e.$set(e.newCustomer,"personal_guarantor_middle_name",t.target.value)}}})]),e._v(" "),a("div",{staticClass:"form-group col-md-4 px-md-3 px-1 float-left"},[a("label",[e._v("Last Name")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.newCustomer.personal_guarantor_last_name,expression:"newCustomer.personal_guarantor_last_name"},{name:"validate",rawName:"v-validate",value:"required|max:25",expression:"'required|max:25'"}],staticClass:"form-control",attrs:{"data-vv-as":"last name",name:"PG_last_name",placeholder:"Enter last name",type:"text"},domProps:{value:e.newCustomer.personal_guarantor_last_name},on:{input:function(t){t.target.composing||e.$set(e.newCustomer,"personal_guarantor_last_name",t.target.value)}}}),e._v(" "),e.errors.first("PG_last_name")?a("small",[e._v(e._s(e.errors.first("PG_last_name")))]):e._e()]),e._v(" "),a("div",{staticClass:"spaceAfter"}),e._v(" "),a("div",{staticClass:"form-group col-md-9 col-sm-12 px-md-3 px-1 float-left"},[a("label",{staticClass:"w-100 float-left pl-1"},[e._v("Relationship")]),e._v(" "),e._l(e.relationshipPG,function(t){return a("div",{staticClass:"radio p-0 col-md-3 col-6 float-left"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.newCustomer.personal_guarantor_relationship,expression:"newCustomer.personal_guarantor_relationship"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{id:t+"pg","data-vv-as":"personal guarantor relationship",name:"relationshippg",type:"radio"},domProps:{value:t,checked:e._q(e.newCustomer.personal_guarantor_relationship,t)},on:{change:function(a){e.$set(e.newCustomer,"personal_guarantor_relationship",t)}}}),e._v(" "),a("label",{attrs:{for:t+"pg"}},[e._v(e._s(t))])])}),e._v(" "),e.errors.first("relationshippg")?a("small",[e._v(e._s(e.errors.first("relationshippg")))]):e._e()],2),e._v(" "),a("div",{staticClass:"form-group col-md-3 col-sm-6 px-md-3 px-1 float-left"},[a("label",{staticClass:"w-100 float-left pl-1"},[e._v("Gender")]),e._v(" "),e._l(e.gender,function(t){return a("div",{staticClass:"radio p-0 col-md-6 col-6 float-left"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.newCustomer.personal_guarantor_gender,expression:"newCustomer.personal_guarantor_gender"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{id:"pg"+t,"data-vv-as":"personal guarantor gender",name:"pggender",type:"radio"},domProps:{value:t,checked:e._q(e.newCustomer.personal_guarantor_gender,t)},on:{change:function(a){e.$set(e.newCustomer,"personal_guarantor_gender",t)}}}),e._v(" "),a("label",{attrs:{for:"pg"+t}},[e._v(e._s(t))])])}),e._v(" "),e.errors.first("pggender")?a("small",[e._v(e._s(e.errors.first("pggender")))]):e._e()],2),e._v(" "),a("div",{staticClass:"spaceAfter"}),e._v(" "),a("h5",[e._v("Personal Guarantor office Details")]),e._v(" "),a("div",{staticClass:"form-group col-md-4 px-md-3 px-1 float-left"},[a("label",[e._v("Street Name")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.newCustomer.pguaadd_street,expression:"newCustomer.pguaadd_street"},{name:"validate",rawName:"v-validate",value:"required|max:25",expression:"'required|max:25'"}],staticClass:"form-control",attrs:{"data-vv-as":"street number",name:"pguaadd_street",placeholder:"Enter Street name here",type:"text"},domProps:{value:e.newCustomer.pguaadd_street},on:{input:function(t){t.target.composing||e.$set(e.newCustomer,"pguaadd_street",t.target.value)}}}),e._v(" "),e.errors.first("pguaadd_street")?a("small",[e._v(e._s(e.errors.first("pguaadd_street")))]):e._e()]),e._v(" "),a("div",{staticClass:"form-group col-md-4 px-md-3 px-1 float-left"},[a("label",[e._v("Office Building Number")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.newCustomer.pguaadd_houseno,expression:"newCustomer.pguaadd_houseno"},{name:"validate",rawName:"v-validate",value:"required|max:25",expression:"'required|max:25'"}],staticClass:"form-control",attrs:{"data-vv-as":"office building address",name:"pguaadd_houseno",placeholder:"Enter Building Number",type:"text"},domProps:{value:e.newCustomer.pguaadd_houseno},on:{input:function(t){t.target.composing||e.$set(e.newCustomer,"pguaadd_houseno",t.target.value)}}}),e._v(" "),e.errors.first("pguaadd_houseno")?a("small",[e._v(e._s(e.errors.first("pguaadd_houseno")))]):e._e()]),e._v(" "),a("div",{staticClass:"form-group col-md-4 px-md-3 px-1 float-left"},[a("label",[e._v("Nearest Bus Stop")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.newCustomer.pguaadd_nbstop,expression:"newCustomer.pguaadd_nbstop"},{name:"validate",rawName:"v-validate",value:"required|max:25",expression:"'required|max:25'"}],staticClass:"form-control",attrs:{"data-vv-as":"per. guarantor nearest stop",name:"pguaadd_nbstop",placeholder:"Enter nearest bus stop",type:"text"},domProps:{value:e.newCustomer.pguaadd_nbstop},on:{input:function(t){t.target.composing||e.$set(e.newCustomer,"pguaadd_nbstop",t.target.value)}}}),e._v(" "),e.errors.first("pguaadd_nbstop")?a("small",[e._v(e._s(e.errors.first("pguaadd_nbstop")))]):e._e()]),e._v(" "),a("div",{staticClass:"spaceAfter"}),e._v(" "),a("div",{staticClass:"form-group col-md-4 px-md-3 px-1 float-left"},[a("label",[e._v("Area")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.newCustomer.pgua_area,expression:"newCustomer.pgua_area"},{name:"validate",rawName:"v-validate",value:"required|max:25",expression:"'required|max:25'"}],staticClass:"form-control",attrs:{"data-vv-as":"personal guarantor area",name:"pgua_area",placeholder:"Enter area",type:"text"},domProps:{value:e.newCustomer.pgua_area},on:{input:function(t){t.target.composing||e.$set(e.newCustomer,"pgua_area",t.target.value)}}}),e._v(" "),e.errors.first("pgua_area")?a("small",[e._v(e._s(e.errors.first("pgua_area")))]):e._e()]),e._v(" "),a("div",{staticClass:"form-group col-md-4 px-md-3 px-1 float-left"},[a("label",[e._v("City")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.newCustomer.personal_guarantor_city,expression:"newCustomer.personal_guarantor_city"},{name:"validate",rawName:"v-validate",value:"required|max:25",expression:"'required|max:25'"}],staticClass:"form-control",attrs:{"data-vv-as":"personal guarantor city",name:"personal_guarantor_city",placeholder:"Enter city",type:"text"},domProps:{value:e.newCustomer.personal_guarantor_city},on:{input:function(t){t.target.composing||e.$set(e.newCustomer,"personal_guarantor_city",t.target.value)}}}),e._v(" "),e.errors.first("personal_guarantor_city")?a("small",[e._v(e._s(e.errors.first("personal_guarantor_city"))+"\n                        ")]):e._e()]),e._v(" "),a("div",{staticClass:"form-group col-md-4 px-md-3 px-1 float-left"},[a("label",[e._v("State")]),e._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:e.newCustomer.personal_guarantor_state,expression:"newCustomer.personal_guarantor_state"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"custom-select w-100",attrs:{"data-vv-as":"personal guarantor state","data-vv-validate-on":"blur",name:"personal_guarantor_state"},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.$set(e.newCustomer,"personal_guarantor_state",t.target.multiple?a:a[0])}}},[a("option",{attrs:{value:""}},[e._v("select state")]),e._v(" "),e._l(e.states,function(t){return a("option",{domProps:{value:t.name}},[e._v(e._s(t.name))])})],2),e._v(" "),e.errors.first("personal_guarantor_state")?a("small",[e._v(e._s(e.errors.first("personal_guarantor_state"))+"\n                        ")]):e._e()]),e._v(" "),a("div",{staticClass:"spaceAfter"}),e._v(" "),a("div",{staticClass:"form-group col-md-4 px-md-3 px-1 float-left"},[a("label",[e._v("Phone Number")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.newCustomer.personal_guarantor_telno,expression:"newCustomer.personal_guarantor_telno"},{name:"validate",rawName:"v-validate",value:"required|numeric|max:11|min:11",expression:"'required|numeric|max:11|min:11'"}],staticClass:"form-control",attrs:{"data-vv-as":"per. guarantor phone",name:"personal_guarantor_telno",placeholder:"Enter city",type:"tel"},domProps:{value:e.newCustomer.personal_guarantor_telno},on:{input:function(t){t.target.composing||e.$set(e.newCustomer,"personal_guarantor_telno",t.target.value)}}}),e._v(" "),e.errors.first("personal_guarantor_telno")?a("small",[e._v(e._s(e.errors.first("personal_guarantor_telno"))+"\n                        ")]):e._e()]),e._v(" "),a("div",{staticClass:"form-group col-md-4 px-md-3 px-1 float-left"},[a("label",[e._v("Duration in Current work")]),e._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:e.newCustomer.personal_guarantor_work_duration,expression:"newCustomer.personal_guarantor_work_duration"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"custom-select w-100",attrs:{"data-vv-as":"personal guarantor work duration","data-vv-validate-on":"blur",name:"personal_guarantor_work_duration"},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.$set(e.newCustomer,"personal_guarantor_work_duration",t.target.multiple?a:a[0])}}},[a("option",{attrs:{value:""}},[e._v("select duration")]),e._v(" "),e._l(e.durations,function(t){return a("option",{domProps:{value:t}},[e._v(e._s(t))])})],2),e._v(" "),e.errors.first("personal_guarantor_work_duration")?a("small",{staticClass:"text-muted"},[e._v(e._s(e.errors.first("personal_guarantor_work_duration"))+"\n                        ")]):e._e()]),e._v(" "),a("div",{staticClass:"form-group col-md-4 px-md-3 px-1 float-left"},[a("label",[e._v("Describe Location")]),e._v(" "),a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.newCustomer.pguaadd_addinfo,expression:"newCustomer.pguaadd_addinfo"}],staticClass:"form-control col-sm-12",attrs:{placeholder:"Describe the Location",rows:"1"},domProps:{value:e.newCustomer.pguaadd_addinfo},on:{input:function(t){t.target.composing||e.$set(e.newCustomer,"pguaadd_addinfo",t.target.value)}}})]),e._v(" "),a("div",{staticClass:"spaceAfter"})]):e._e(),e._v(" "),"register"===e.mode?a("div",[a("h5",[e._v("Other Questions")]),e._v(" "),a("div",{staticClass:"form-group col-md-4 px-md-3 px-1 float-left"},[a("label",[e._v("What product do you need?")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.newCustomer.what_product_do_you_need,expression:"newCustomer.what_product_do_you_need"},{name:"validate",rawName:"v-validate",value:"required|max:25",expression:"'required|max:25'"}],staticClass:"form-control",attrs:{"data-vv-as":"what product do you need",name:"what_product_do_you_need",placeholder:"Enter Product name",type:"text"},domProps:{value:e.newCustomer.what_product_do_you_need},on:{input:function(t){t.target.composing||e.$set(e.newCustomer,"what_product_do_you_need",t.target.value)}}}),e._v(" "),e.errors.first("what_product_do_you_need")?a("small",[e._v(e._s(e.errors.first("what_product_do_you_need"))+"\n                        ")]):e._e()]),e._v(" "),a("div",{staticClass:"form-group col-md-4 px-md-3 px-1 float-left"},[a("label",[e._v("What do you need it for?")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.newCustomer.what_do_you_need_it_for,expression:"newCustomer.what_do_you_need_it_for"},{name:"validate",rawName:"v-validate",value:"required|max:25",expression:"'required|max:25'"}],staticClass:"form-control",attrs:{"data-vv-as":"what do you need it for",name:"what_do_you_need_it_for",placeholder:"Enter Reason..",type:"text"},domProps:{value:e.newCustomer.what_do_you_need_it_for},on:{input:function(t){t.target.composing||e.$set(e.newCustomer,"what_do_you_need_it_for",t.target.value)}}}),e._v(" "),e.errors.first("what_do_you_need_it_for")?a("small",[e._v(e._s(e.errors.first("what_do_you_need_it_for"))+"\n                        ")]):e._e()]),e._v(" "),a("div",{staticClass:"form-group col-md-4 px-md-3 px-1 float-left"},[a("label",[e._v("Office Branch")]),e._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:e.newCustomer.branch_id,expression:"newCustomer.branch_id"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"custom-select w-100",attrs:{"data-vv-as":"office branch","data-vv-validate-on":"blur",disabled:"",name:"branch_id"},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.$set(e.newCustomer,"branch_id",t.target.multiple?a:a[0])}}},[a("option",{attrs:{value:""}},[e._v("select office branch")]),e._v(" "),e._l(e.branches,function(t){return a("option",{domProps:{value:t.id}},[e._v(e._s(t.name))])})],2),e._v(" "),e.errors.first("branch_id")?a("small",[e._v(e._s(e.errors.first("branch_id")))]):e._e()])]):e._e(),e._v(" "),a("hr",{staticClass:"style-two"}),e._v(" "),a("div",{staticClass:"col-sm-12 ml-auto mr-auto mt-md-2 mt-0 px-md-3 px-1 mb-3 float-right"},[a("button",{staticClass:"btn btn-block btn-lg bg-default",attrs:{disabled:e.$isProcessing,type:"submit"}},[e._v("\n                        "+e._s(e._f("capitalize")(e.mode))+" Customer\n                        "),a("i",{staticClass:"far fa-paper-plane ml-1"})])])])])]):e._e()],1)},staticRenderFns:[]}},"3o0A":function(e,t,a){var r=a("VU/8")(a("NOe0"),a("4GFf"),!1,null,null,null);e.exports=r.exports},"4GFf":function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("transition",{attrs:{name:"fade"}},[a("div",{staticClass:"pt-md-3 pt-2 verification",attrs:{id:"employeeRegister"}},[a("div",{staticClass:"card"},[a("ul",{staticClass:"nav nav-tabs bg-default justify-content-center"},[a("h6",[e._v(e._s(e._f("capitalize")(e.action))+" Customer")])]),e._v(" "),a("div",{staticClass:"card-body p-4"},[a("form",{on:{submit:function(t){return t.preventDefault(),e.processForm(t)}}},[a("div",{staticClass:"m-0 p-0 col-12 form-group clearfix"},[a("label",{staticClass:"w-100"},[e._v("Customer ID")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.customer_id,expression:"customer_id"},{name:"validate",rawName:"v-validate",value:"required|numeric",expression:"'required|numeric'"}],staticClass:"form-control col-lg-9 col-md-8 col-sm-8 col-12 float-left mt-1",attrs:{"data-vv-as":"customer id",name:"customer_id"},domProps:{value:e.customer_id},on:{onkeyUp:e.check,input:function(t){t.target.composing||(e.customer_id=t.target.value)}}}),e._v(" "),a("div",{staticClass:"col-lg-3 col-md-4 col-sm-4 col-12 float-right px-md-3 mt-md-0 px-sm-3 mt-sm-0 mt-2 px-0"},[a("button",{staticClass:"btn btn-block bg-default my-1",attrs:{disabled:e.check,type:"submit"}},[e._v("\n                                Fetch customer details "),a("i",{staticClass:"far fa-paper-plane ml-1"})])]),e._v(" "),e.errors.first("customer_id")?a("small",{staticClass:"form-text text-muted w-100"},[e._v("\n                            "+e._s(e.errors.first("customer_id"))+"\n                        ")]):e._e()])])])]),e._v(" "),a("transition",{attrs:{name:"fade"}},[e.customer?a("div",[a("customer-profile",{attrs:{"view-customer":e.customer}}),e._v(" "),"update"!==e.action?a("div",[e._l(e.cardView,function(t){return a("div",{staticClass:"float-left col-lg-3 col-sm-6 px-0 px-sm-3"},[a("div",{staticClass:"card card-stats",class:e.DivClass(t)},[a("div",{staticClass:"card-body "},[a("div",{staticClass:"statistics statistics-horizontal"},[a("div",{staticClass:"info info-horizontal"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-4"},[a("div",{staticClass:"icon icon-warning icon-circle position-relative"},[a("i",{staticClass:"fas",class:e.IconClass(t)})])]),e._v(" "),a("div",{staticClass:"col-8 text-right"},[a("h4",{staticClass:"info-title font-weight-bold mb-0"},[e._v(e._s(e._f("capitalize")(t)))]),e._v(" "),a("h6",{staticClass:"stats-title"},[e._v("\n                                                    "+e._s(e.key(t)?"Verified":"Not Verified")+"\n                                                ")])])])])])]),e._v(" "),a("div",{staticClass:"card-footer pointer",on:{click:function(a){e.modal(t+"_modal")}}},[a("i",{staticClass:"now-ui-icons ui-1_calendar-60 pr-1"}),e._v("\n                                "+e._s(e.key(t)?"Verified":"Not Verified")+"\n                                "),e.key(t)?a("span",{staticClass:"float-right",staticStyle:{"font-size":"10px"}},[e._v("\n                                        by - "+e._s(e._f("capitalize")("passport"==t||"id_card"==t?e.customer.document.staff_name:e.customer[t].staff_name))+"\n                                ")]):a("small",[e._v("(Click here to update status!)")])])])])}),e._v(" "),a("hr",{staticClass:"style-two"})],2):e._e()],1):e._e()]),e._v(" "),"update"!==e.action?a("div",[e._l(e.picsView,function(t){return a("div",{staticClass:"modal fade",attrs:{id:t+"_modal"}},[a("div",{staticClass:"modal-dialog"},[a("div",{staticClass:"modal-content"},[a("div",{staticClass:"modal-header py-2"},[a("h6",{staticClass:"modal-title py-1"},[e._v(e._s(e._f("capitalize")(t))+" Verification Status")]),e._v(" "),a("a",{staticClass:"close py-1",attrs:{"aria-label":"Close","data-dismiss":"modal",href:"javascript:"}},[a("span",{staticClass:"modal-close text-danger",attrs:{"aria-hidden":"true"}},[a("i",{staticClass:"fas fa-times"})])])]),e._v(" "),e.customer?a("form",{on:{submit:function(a){a.preventDefault(),e.save(t,t+"_modal")}}},[a("div",{staticClass:"modal-body"},[a("div",{staticClass:"upload-image p-2"},[a("div",{staticClass:"upload-box"},[a("image-upload",{model:{value:e.$data.form[t],callback:function(a){e.$set(e.$data.form,t,a)},expression:"$data['form'][type]"}})],1)]),e._v(" "),e.error[t]?a("small",[e._v(e._s(e.error[t][0]))]):e._e()]),e._v(" "),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"m-2 btn btn-secondary",attrs:{"data-dismiss":"modal",type:"button"}},[e._v("\n                                    cancel\n                                ")]),e._v(" "),a("button",{staticClass:"m-2 btn bg-default",attrs:{disabled:e.$isProcessing,type:"submit"}},[e._v("\n                                    Save changes "),a("i",{staticClass:"far fa-paper-plane ml-1"})])])]):e._e()])])])}),e._v(" "),a("div",{staticClass:"modal fade",attrs:{id:"address_modal"}},[a("div",{staticClass:"modal-dialog modal-lg"},[a("div",{staticClass:"modal-content"},[a("div",{staticClass:"modal-header py-2"},[a("h6",{staticClass:"modal-title py-1"},[e._v("Address Verification Status")]),e._v(" "),a("a",{staticClass:" py-1",staticStyle:{"min-height":"30px","min-width":"30px"},on:{click:function(t){e.modal("address_modal")}}},[a("span",{staticClass:"text-danger"},[a("i",{staticClass:"fas fa-times"})])])]),e._v(" "),a("form",{attrs:{"data-vv-scope":"address"},on:{submit:function(t){t.preventDefault(),e.validate("address")}}},[a("div",{staticClass:"modal-body p-5"},[a("table",{staticClass:"mb-3 w-100 info-table"},[a("tbody",{staticClass:"px-3"},[a("tr",[a("th",[a("i",{staticClass:"fas fa-map-marker-alt mx-4"})]),e._v(" "),a("td",[e._v(e._s(e.$getCustomerAddress(e.customer)))])])])]),e._v(" "),a("div",{staticClass:"w-100 p-3"},[a("div",{staticClass:"clearfix"},[a("div",{staticClass:"form-group float-left col-md-6 col-12 pr-md-3 pr-0 pl-0"},[a("label",[e._v("Date of Visitation")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.address.date_of_visit,expression:"address.date_of_visit"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",attrs:{"data-vv-as":"date of visit",name:"date_of_visit",type:"date"},domProps:{value:e.address.date_of_visit},on:{input:function(t){t.target.composing||e.$set(e.address,"date_of_visit",t.target.value)}}}),e._v(" "),e.errors.first("address.date_of_visit")?a("small",[e._v("\n                                                "+e._s(e.errors.first("address.date_of_visit"))+"\n                                            ")]):e._e()]),e._v(" "),a("div",{staticClass:"form-group float-left  col-md-6 col-12  pl-md-3 pl-0 pr-0"},[a("label",[e._v("Time of Visit")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.address.time_of_visit,expression:"address.time_of_visit"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",attrs:{"data-vv-as":"time of visit",name:"time_of_visit",type:"time"},domProps:{value:e.address.time_of_visit},on:{input:function(t){t.target.composing||e.$set(e.address,"time_of_visit",t.target.value)}}}),e._v(" "),e.errors.first("address.time_of_visit")?a("small",[e._v("\n                                                "+e._s(e.errors.first("address.time_of_visit"))+"\n                                            ")]):e._e()])]),e._v(" "),a("div",{staticClass:"form-group clearfix"},[a("label",[e._v("1. Did you meet the customer?")]),e._v(" "),a("span",{staticClass:"radio mx-5"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.address.customer_meetup,expression:"address.customer_meetup"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{"data-vv-as":"customer meetup",id:"yes",name:"customer_meetup",type:"radio",value:"yes"},domProps:{checked:e._q(e.address.customer_meetup,"yes")},on:{change:function(t){e.$set(e.address,"customer_meetup","yes")}}}),e._v(" "),a("label",{attrs:{for:"yes"}},[e._v("Yes")])]),e._v(" "),a("span",{staticClass:"radio ml-5"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.address.customer_meetup,expression:"address.customer_meetup"}],attrs:{id:"no",name:"customer_meetup",type:"radio",value:"no"},domProps:{checked:e._q(e.address.customer_meetup,"no")},on:{change:function(t){e.$set(e.address,"customer_meetup","no")}}}),e._v(" "),a("label",{attrs:{for:"no"}},[e._v("No")])]),e._v(" "),e.errors.first("address.customer_meetup")?a("small",[e._v("\n                                            "+e._s(e.errors.first("address.customer_meetup"))+"\n                                        ")]):e._e()]),e._v(" "),a("div",{staticClass:"form-group clearfix"},[a("label",[e._v("\n                                            2. Is the address/location same with what you have in the application\n                                            form?\n                                        ")]),e._v(" "),a("span",{staticClass:"radio mx-5"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.address.confirm_address,expression:"address.confirm_address"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{"data-vv-as":"confirm address",id:"add_yes",name:"confirm_address",type:"radio",value:"yes"},domProps:{checked:e._q(e.address.confirm_address,"yes")},on:{change:function(t){e.$set(e.address,"confirm_address","yes")}}}),e._v(" "),a("label",{attrs:{for:"add_yes"}},[e._v("Yes")])]),e._v(" "),a("span",{staticClass:"radio ml-5"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.address.confirm_address,expression:"address.confirm_address"}],attrs:{id:"add_no",name:"confirm_address",type:"radio",value:"no"},domProps:{checked:e._q(e.address.confirm_address,"no")},on:{change:function(t){e.$set(e.address,"confirm_address","no")}}}),e._v(" "),a("label",{attrs:{for:"add_no"}},[e._v("No")])]),e._v(" "),e.errors.first("address.confirm_address")?a("small",[e._v("\n                                            "+e._s(e.errors.first("address.confirm_address"))+"\n                                        ")]):e._e()]),e._v(" "),a("div",{staticClass:"form-group clearfix"},[a("label",[e._v("3. What does he/she do or sell?")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.address.what_he_sells,expression:"address.what_he_sells"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",attrs:{"data-vv-as":"what he sells",name:"what_he_sells",placeholder:"comment here...",type:"text"},domProps:{value:e.address.what_he_sells},on:{input:function(t){t.target.composing||e.$set(e.address,"what_he_sells",t.target.value)}}}),e._v(" "),e.errors.first("address.what_he_sells")?a("small",[e._v("\n                                            "+e._s(e.errors.first("address.what_he_sells"))+"\n                                        ")]):e._e()]),e._v(" "),a("div",{staticClass:"form-group clearfix"},[a("label",[e._v("4. Look around the shop and check the nature and condition of the\n                                            business. Write down what you see in terms of address, stock value,\n                                            premise, type of shop or business, sales etc.")]),e._v(" "),a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.address.business_info,expression:"address.business_info"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",attrs:{"data-vv-as":"business info",name:"business_info",placeholder:"comment here...",rows:"1"},domProps:{value:e.address.business_info},on:{input:function(t){t.target.composing||e.$set(e.address,"business_info",t.target.value)}}}),e._v(" "),e.errors.first("address.business_info")?a("small",[e._v("\n                                            "+e._s(e.errors.first("address.business_info"))+"\n                                        ")]):e._e()]),e._v(" "),a("div",{staticClass:"form-group clearfix"},[a("label",[e._v("5. Get exact information of choice of product and specification by\n                                            asking for\n                                            Example; what exact phone do you want? Let him/her specify e.g. INFINIX\n                                            SMART or HOT 4 IPHONE\n                                        ")]),e._v(" "),a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.address.product_info,expression:"address.product_info"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control w-100",attrs:{"data-vv-as":"product info",name:"product_info",placeholder:"comment here...",rows:"1"},domProps:{value:e.address.product_info},on:{input:function(t){t.target.composing||e.$set(e.address,"product_info",t.target.value)}}}),e._v(" "),e.errors.first("address.product_info")?a("small",[e._v("\n                                            "+e._s(e.errors.first("address.product_info"))+"\n                                        ")]):e._e()]),e._v(" "),a("div",{staticClass:"form-group clearfix"},[a("label",[e._v("\n                                            6. Are you aware of the payment plan?\n                                        ")]),e._v(" "),a("span",{staticClass:"radio mx-5"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.address.aware_of_plan,expression:"address.aware_of_plan"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{"data-vv-as":"aware of plan",id:"pay_yes",name:"aware_of_plan",type:"radio",value:"yes"},domProps:{checked:e._q(e.address.aware_of_plan,"yes")},on:{change:function(t){e.$set(e.address,"aware_of_plan","yes")}}}),e._v(" "),a("label",{attrs:{for:"pay_yes"}},[e._v("yes")])]),e._v(" "),a("span",{staticClass:"radio ml-5"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.address.aware_of_plan,expression:"address.aware_of_plan"}],attrs:{id:"pay_no",name:"aware_of_plan",type:"radio",value:"no"},domProps:{checked:e._q(e.address.aware_of_plan,"no")},on:{change:function(t){e.$set(e.address,"aware_of_plan","no")}}}),e._v(" "),a("label",{attrs:{for:"pay_no"}},[e._v("no")])]),e._v(" "),e.errors.first("address.aware_of_plan")?a("small",[e._v("\n                                            "+e._s(e.errors.first("address.aware_of_plan"))+"\n                                        ")]):e._e()]),e._v(" "),a("div",{staticClass:"form-group clearfix"},[a("label",[e._v("\n                                            7. Did you get information about the customer from his/her neighbours?\n                                        ")]),e._v(" "),a("span",{staticClass:"radio mx-5"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.info_from_neighbors,expression:"info_from_neighbors"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{"data-vv-as":"info from neighbors",id:"neigh_yes",name:"info_from_neighbors",type:"radio",value:"yes"},domProps:{checked:e._q(e.info_from_neighbors,"yes")},on:{change:function(t){e.info_from_neighbors="yes"}}}),e._v(" "),a("label",{attrs:{for:"neigh_yes"}},[e._v("yes")])]),e._v(" "),a("span",{staticClass:"radio ml-5"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.info_from_neighbors,expression:"info_from_neighbors"}],attrs:{id:"neigh_no",name:"info_from_neighbors",type:"radio",value:"no"},domProps:{checked:e._q(e.info_from_neighbors,"no")},on:{change:function(t){e.info_from_neighbors="no"}}}),e._v(" "),a("label",{attrs:{for:"neigh_no"}},[e._v("no")])]),e._v(" "),e.errors.first("address.info_from_neighbors")?a("small",[e._v("\n                                            "+e._s(e.errors.first("address.info_from_neighbors"))+"\n                                        ")]):e._e(),e._v(" "),"yes"==e.info_from_neighbors?a("div",[a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.address.info_from_neighbors_desc,expression:"address.info_from_neighbors_desc"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",attrs:{"data-vv-as":"info from neighbors desc",name:"info_from_neighbors_desc",placeholder:"comment here...",rows:"1"},domProps:{value:e.address.info_from_neighbors_desc},on:{input:function(t){t.target.composing||e.$set(e.address,"info_from_neighbors_desc",t.target.value)}}}),e._v(" "),e.errors.first("address.info_from_neighbors_desc")?a("small",[e._v("\n                                                "+e._s(e.errors.first("address.info_from_neighbors_desc"))+"\n                                            ")]):e._e()]):e._e()]),e._v(" "),a("div",{staticClass:"form-group clearfix"},[a("label",[e._v("8. And how long has he/she been working/trading in that particular\n                                            place?\n                                        ")]),e._v(" "),a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.address.business_or_work_duration,expression:"address.business_or_work_duration"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",attrs:{"data-vv-as":"business or work duration",name:"business_or_work_duration",placeholder:"address",rows:"1"},domProps:{value:e.address.business_or_work_duration},on:{input:function(t){t.target.composing||e.$set(e.address,"business_or_work_duration",t.target.value)}}}),e._v(" "),e.errors.first("address.business_or_work_duration")?a("small",[e._v("\n                                            "+e._s(e.errors.first("address.business_or_work_duration"))+"\n                                        ")]):e._e()]),e._v(" "),e.addressBtns?a("div",[a("div",{staticClass:"w-100 clearfix"},[a("button",{staticClass:"btn btn-success btn-lg btn-block",attrs:{disabled:e.$isProcessing,type:"submit"},on:{click:function(t){e.address.approval_status=1}}},[e._v("\n                                                Successful - Update Details\n                                                "),a("i",{staticClass:"far fa-paper-plane ml-1"})])]),e._v(" "),a("div",{staticClass:"pt-2 w-100 clearfix"},[a("div",{staticClass:"pr-2 pl-md-0 pl-2 col-md-6 col-12 m-0 float-left"},[a("button",{staticClass:"m-0 btn btn-lg btn-block btn-secondary",attrs:{type:"button"},on:{click:function(t){e.modal("address_modal")}}},[e._v("\n                                                    Cancel\n                                                ")])]),e._v(" "),a("div",{staticClass:"pl-2 pr-md-0 pr-2 col-md-6 col-12 float-left"},[a("button",{staticClass:"m-0 btn btn-lg btn-block btn-primary",attrs:{disabled:e.$isProcessing,type:"submit"},on:{click:function(t){e.address.approval_status=0}}},[e._v("\n                                                    Not-Successful - Update Details\n                                                    "),a("i",{staticClass:"far fa-paper-plane ml-1"})])])])]):a("h5",[e._v("\n                                        This customers details has already been updated once and cannot be changed!\n                                    ")])])])])])])]),e._v(" "),e._l(e.veriView,function(t){return a("div",{staticClass:"modal fade",attrs:{id:t+"_modal"}},[a("div",{staticClass:"modal-dialog"},[a("div",{staticClass:"modal-content"},[a("div",{staticClass:"modal-header py-2"},[a("h6",{staticClass:"modal-title py-1"},[e._v("\n                                "+e._s(e._f("capitalize")(t))+" "+e._s("processing_fee"!==t?"Verification":"")+" Status\n                            ")]),e._v(" "),a("a",{staticClass:"close py-1",attrs:{"aria-label":"Close","data-dismiss":"modal",href:"javascript:"}},[a("span",{staticClass:"modal-close text-danger"},[a("i",{staticClass:"fas fa-times"})])])]),e._v(" "),e.customer?a("form",{attrs:{"data-vv-scope":t},on:{submit:function(a){a.preventDefault(),e.validate(t)}}},[a("div",{staticClass:"modal-body"},["processing_fee"!==t?a("table",{staticClass:"mb-3 info-table"},[a("tbody",[a("tr",[a("th",[a("i",{staticClass:"fas fa-map-marker-alt"})]),e._v(" "),e.customer[t+"_state"]?a("td",[e._v(e._s(e.$data[t+"_address"]))]):a("td",[e._v("please update customer details!")])]),e._v(" "),a("tr",[a("th",[a("i",{staticClass:"fas fa-mobile-alt"})]),e._v(" "),e.customer[t+"_telno"]?a("td",[e._v(e._s(e.customer[t+"_telno"]))]):a("td",[e._v("please update customer details!")])]),e._v(" "),a("tr",[a("th",[a("i",{staticClass:" fas fa-user-circle"})]),e._v(" "),e.customer[t+"_first_name"]?a("td",[e._v("\n                                            "+e._s(e.customer[t+"_first_name"]+" "+e.customer[t+"_last_name"])+"\n                                        ")]):a("td",[e._v("please update customer details!")])]),e._v(" "),a("tr",[a("th",[a("i",{staticClass:"fas fa-user-circle"})]),e._v(" "),e.customer[t+"_relationship"]?a("td",[e._v(e._s(e._f("capitalize")(e.customer[t+"_relationship"]))+"\n                                        ")]):a("td",[e._v("please update customer details!")])])])]):e._e(),e._v(" "),a("div",{staticClass:"form-group col-12 px-2 clearfix my-0"},[a("div",{staticClass:"clearfix"},[a("div",{staticClass:"form-group float-left col-md-6 col-12 pr-md-3 pr-0 pl-0"},[a("label",[e._v("\n                                                Date "+e._s("processing_fee"!==t?"of Call":"Collected")+"\n                                            ")]),e._v(" "),a("input","processing_fee"!==t?{directives:[{name:"model",rawName:"v-model",value:e.$data[t].date_of_call,expression:"$data[type].date_of_call"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",attrs:{name:"date_of_call",type:"date"},domProps:{value:e.$data[t].date_of_call},on:{input:function(a){a.target.composing||e.$set(e.$data[t],"date_of_call",a.target.value)}}}:{directives:[{name:"model",rawName:"v-model",value:e.$data[t].date_collected,expression:"$data[type].date_collected"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",attrs:{name:"date_of_call",type:"date"},domProps:{value:e.$data[t].date_collected},on:{input:function(a){a.target.composing||e.$set(e.$data[t],"date_collected",a.target.value)}}}),e._v(" "),e.errors.first(t+".date_of_call")?a("small",[e._v("\n                                                "+e._s(e.errors.first(t+".date_of_call"))+"\n                                            ")]):e._e(),e._v(" "),e.errors.first(t+".date_collected")?a("small",[e._v("\n                                                "+e._s(e.errors.first(t+".date_collected"))+"\n                                            ")]):e._e()]),e._v(" "),a("div",{staticClass:"form-group float-left col-md-6 col-12 pl-md-3 pl-0 pr-0"},[a("label",[e._v("\n                                                Time "+e._s("processing_fee"!==t?"of Call":"Collected")+"\n                                            ")]),e._v(" "),a("input","processing_fee"!==t?{directives:[{name:"model",rawName:"v-model",value:e.$data[t].time_of_call,expression:"$data[type].time_of_call"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",attrs:{name:"time_of_call",type:"time"},domProps:{value:e.$data[t].time_of_call},on:{input:function(a){a.target.composing||e.$set(e.$data[t],"time_of_call",a.target.value)}}}:{directives:[{name:"model",rawName:"v-model",value:e.$data[t].time_collected,expression:"$data[type].time_collected"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",attrs:{name:"time_collected",type:"time"},domProps:{value:e.$data[t].time_collected},on:{input:function(a){a.target.composing||e.$set(e.$data[t],"time_collected",a.target.value)}}}),e._v(" "),e.errors.first(t+".time_of_call")?a("small",[e._v("\n                                                "+e._s(e.errors.first(t+".time_of_call"))+"\n                                            ")]):e._e(),e._v(" "),e.errors.first(t+".time_collected")?a("small",[e._v("\n                                                "+e._s(e.errors.first(t+".time_collected"))+"\n                                            ")]):e._e()])]),e._v(" "),a("div",{staticClass:"clearfix"},[a("label",{staticClass:"w-100"},[e._v("\n                                            "+e._s(e._f("capitalize")(t))+"\n                                            "+e._s("processing_fee"!==t?"Consent":"Amount(Naira)")+"\n                                        ")]),e._v(" "),a("div","processing_fee"!==t?[a("div",{staticClass:"radio p-0 col-6 float-left"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.$data[t].consent,expression:"$data[type].consent"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{id:t+"_yes",name:"consent",type:"radio",value:"1"},domProps:{checked:e._q(e.$data[t].consent,"1")},on:{change:function(a){e.$set(e.$data[t],"consent","1")}}}),e._v(" "),a("label",{attrs:{for:t+"_yes"}},[e._v("Gave Consent")])]),e._v(" "),a("div",{staticClass:"radio p-0 col-6 float-left"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.$data[t].consent,expression:"$data[type].consent"}],attrs:{id:t+"_no",name:"consent",type:"radio",value:"0"},domProps:{checked:e._q(e.$data[t].consent,"0")},on:{change:function(a){e.$set(e.$data[t],"consent","0")}}}),e._v(" "),a("label",{attrs:{for:t+"_no"}},[e._v("Did not Give Consent")])]),e._v(" "),e.errors.first(t+".consent")?a("small",[e._v("\n                                                "+e._s(e.errors.first(t+".consent"))+"\n                                            ")]):e._e()]:[a("div",{staticClass:"radio p-0 col-6 float-left"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.$data[t].amount,expression:"$data[type].amount"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",attrs:{disabled:"",name:"amount",type:"number"},domProps:{value:e.$data[t].amount},on:{input:function(a){a.target.composing||e.$set(e.$data[t],"amount",a.target.value)}}})]),e._v(" "),e.errors.first(t+".amount")?a("small",[e._v("\n                                                "+e._s(e.errors.first(t+".amount"))+"\n                                            ")]):e._e()])]),e._v(" "),a("div",{staticClass:"clearfix"},[a("label",[e._v("Report")]),e._v(" "),a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.$data[t].report,expression:"$data[type].report"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control w-100",attrs:{name:"report",placeholder:"comment here...",rows:"3"},domProps:{value:e.$data[t].report},on:{input:function(a){a.target.composing||e.$set(e.$data[t],"report",a.target.value)}}}),e._v(" "),e.errors.first(t+".report")?a("small",[e._v("\n                                            "+e._s(e.errors.first(t+".report"))+"\n                                        ")]):e._e()])])]),e._v(" "),e.$data[t+"Btns"]?a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"m-2 btn btn-secondary",attrs:{"data-dismiss":"modal",type:"button"}},[e._v("cancel\n                                ")]),e._v(" "),a("button",{staticClass:"m-2 btn bg-default",attrs:{disabled:e.$isProcessing,type:"submit"}},[e._v("\n                                    Save changes "),a("i",{staticClass:"far fa-paper-plane ml-1"})])]):a("div",{staticClass:"modal-footer"},[a("h5",[e._v("This customers details has already been updated once and cannot be changed!")])])]):e._e()])])])})],2):e._e()],1)])},staticRenderFns:[]}},"4I72":function(e,t,a){var r=a("VU/8")(a("WiSW"),a("r37U"),!1,null,null,null);e.exports=r.exports},"9sZT":function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("h4",{staticClass:"mx-md-3 mx-0 py-0 my-0 text-center clearfix",attrs:{id:"app-navigation"}},[e.$routerHistory.hasPrevious()?a("router-link",{staticClass:"text-secondary float-left ml-1 pl-2 ml-sm-4 pl-sm-3",attrs:{to:e.previous,id:"back"}},[a("span",{staticClass:"mr-5 float-left"},[a("i",{staticClass:"far fa-arrow-alt-circle-left float-left"}),e._v(" "),a("small",{staticClass:"float-left ml-2 d-none d-sm-block"},[e._v("Back")])])]):e._e(),e._v(" "),a("strong",{staticClass:"mx-auto w-100 float-left",attrs:{"data-title":"title"}},[a("span",{staticClass:"d-none d-sm-block"},[e._v(e._s(e.pageTitle))]),e._v(" "),a("span",{staticClass:"d-block d-sm-none"},[e._v(e._s(e.pageTitleSmall))])]),e._v(" "),e.$routerHistory.hasForward()?a("router-link",{staticClass:"text-secondary float-right mr-1 pr-2 mr-sm-4 pr-sm-3",attrs:{to:e.forward,id:"forward"}},[a("span",{staticClass:"ml-5 float-right"},[a("i",{staticClass:"far fa-arrow-alt-circle-right float-right"}),e._v(" "),a("small",{staticClass:"float-right mr-2 d-none d-sm-block"},[e._v("Forward")])])]):e._e()],1)},staticRenderFns:[]}},APzg:function(e,t,a){var r=a("VU/8")(a("nT0B"),a("RQTH"),!1,null,null,null);e.exports=r.exports},KUZS:function(e,t,a){var r=a("VU/8")(a("Wk+m"),a("xosg"),!1,null,null,null);e.exports=r.exports},NLw1:function(e,t,a){(e.exports=a("FZ+f")(!1)).push([e.i,".badge{cursor:pointer;font-size:1.2rem;font-weight:500}.badge:nth-child(n+3){margin-left:20px}.badge-primary{border-color:#084a73;color:#084a73}.badge-primary.active{background-color:#084a73;color:#fff}.badge-default.active{border-color:#084a73;color:#084a73;font-weight:700}hr.my-4+span.occupation-option{margin-left:0}",""])},NOe0:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=v(a("Xxa5")),s=v(a("I3G/")),o=a("ic49"),n=v(a("K23+")),i=a("m2tk"),l=a("p/p5"),m=a("nv24"),u=a("hyG2"),d=v(a("KUZS")),c=v(a("4I72"));function v(e){return e&&e.__esModule?e:{default:e}}function _(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,a){return function r(s,o){try{var n=t[s](o),i=n.value}catch(e){return void a(e)}if(!n.done)return Promise.resolve(i).then(function(e){r("next",e)},function(e){r("throw",e)});e(i)}("next")})}}var p=function(e){return"/api/customer/"+e.id};t.default={props:{action:{default:"verify"}},components:{ImageUpload:d.default,CustomerProfile:c.default},data:function(){return{customer:null,customer_id:"",addressBtns:!0,work_guarantorBtns:!0,personal_guarantorBtns:!0,processing_feeBtns:!0,info_from_neighbors:"",address:{},work_guarantor:{},personal_guarantor:{},processing_fee:{},picsView:["id_card","passport"],veriView:["work_guarantor","personal_guarantor","processing_fee"],veriData:["address","work_guarantor","personal_guarantor","processing_fee"],cardView:["passport","id_card","address","work_guarantor","personal_guarantor","processing_fee"],verification:{},form:{id_card:"",passport:"",document:""},error:{},storeURL:"",user:{},work_guarantor_address:"",personal_guarantor_address:""}},beforeRouteEnter:function(e,t,a){var r=e.query;r.id?(0,l.get)(p(r)).then(function(e){return a(function(t){return t.updateView(e.data)})}).catch(function(e){return a(function(t){return t.updateView(e.response.data)})}):a()},beforeRouteUpdate:function(e,t,a){var r=e.query,s=this;r.id?(0,l.get)(p(r)).then(function(e){return s.updateView(e.data)}).catch(function(e){return s.updateView(e.response.data)}).finally(function(){return a()}):a()},methods:{modal:function(e){$("#"+e).modal("toggle"),this.errors.clear(e)},key:function(e){return this.customer.verification[e]},IconClass:function(e){return{"fa-check":this.key(e),"fa-times":!this.key(e)}},DivClass:function(e){return{success:this.key(e),"no-success":!this.key(e)}},updateView:function(e){var t=this;this.user=e.hasOwnProperty("user")?e.user:null,s.default.set(this.$data,"customer",e.customer),this.$emit("update",e.customer),m.EventBus.$emit("customer",e.customer),e.customer?(this.verification=JSON.parse(JSON.stringify(e.customer.verification)),this.form.id_card=e.customer.document.id_card_url,this.form.passport=e.customer.document.passport_url,this.work_guarantor_address=this.customer.guaadd_houseno+",\n                    "+this.customer.guaadd_street+",\n                    "+this.customer.gua_area+",\n                    "+this.customer.work_guarantor_city+",\n                    "+this.customer.work_guarantor_state,this.personal_guarantor_address=this.customer.pguaadd_houseno+",\n                    "+this.customer.pguaadd_street+",\n                    "+this.customer.pgua_area+",\n                    "+this.customer.personal_guarantor_city+",\n                    "+this.customer.personal_guarantor_state,this.veriData.forEach(function(a){t[a+"Btns"]=!e.customer[a],t[a]=e.customer[a]?e.customer[a]:e["empty_"+a]})):n.default.setError(e.message,5e3)},done:function(){if(this.$getCustomerApprovalStatus(this.verification)){var e="Dear "+this.$getCustomerFullName(this.customer)+", Congratulations, You have been approved. Come to the store to make a purchase. Altara Credit Limited.";new i.Message(e,this.customer.telephone,!0,this.user.id).send()}},processForm:function(){var e=this;"verification"===this.$route.name&&this.$router.push("verification?id="+this.customer_id),"customerUpdate"===this.$route.name&&(this.$router.push("update?id="+this.customer_id),(0,l.get)(p(this.$route.query)).then(function(t){return e.updateView(t.data)}).catch(function(t){return e.updateView(t.response.data)}))},validate:function(e){var t,a=this;if(this.$network()){if(this.$LIPS(!0),this.veriView.includes(e)&&!this.customer.work_guarantor_first_name)return this.modal(e+"_modal"),this.$LIPS(!1),this.$scrollToTop(),void n.default.setError("Can not process verification. Update the customer guarantors details and try again!",1e4);"no"===this.info_from_neighbors&&(this.address.info_from_neighbors_desc=""),this[e].customer_id=this.customer.id,this[e].user_id=this.user.id,this[e].staff_name=this.user.full_name,this.$validator.validateAll(e).then((t=_(r.default.mark(function t(s){return r.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!s){t.next=7;break}return t.next=3,(0,l.post)("/api/"+e,a[e]).then(function(t){var r=t.data;a.updateView(r.response);var s="Customer ID : "+a.customer.id,i=a.$options.filters.capitalize(e),l="Customer"+i+"Verification";"address"===e&&(l+=a.address.approval_status?"Passed":"NotPassed"),(0,o.log)(l,s),n.default.setSuccess(i+" status updated!"),a.modal(e+"_modal"),a.done()}).catch(function(e){return n.default.setError(e.response.data.message)});case 3:a.$LIPS(!1),a.$scrollToTop(),t.next=8;break;case 7:a.$networkErr("form");case 8:case"end":return t.stop()}},t,a)})),function(e){return t.apply(this,arguments)}))}else this.$networkErr()},save:function(){var e=_(r.default.mark(function e(t,a){var s,i=this;return r.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.storeURL="/api/document/"+this.customer.document.id+"?_method=PUT&document="+t,this.$LIPS(!0),this.form.document=t,s=(0,u.toMulipartedForm)(this.form,"edit"),e.next=6,(0,l.post)(this.storeURL,s).then(function(e){var r=e.data;i.updateView(r.response),(0,o.log)("Customer"+i.$options.filters.capitalize(t)+"Upload","Customer ID : "+i.customer.id),i.modal(a),n.default.setSuccess("Document Updated Successfully!"),i.done()}).catch(function(e){return i.error=e.response.data.errors});case 6:this.$LIPS(!1),this.$scrollToTop();case 8:case"end":return e.stop()}},e,this)}));return function(t,a){return e.apply(this,arguments)}}()},computed:{check:function(){return!(!this.$isProcessing&&this.customer_id)}},mounted:function(){var e=this;$(document).on("hidden.bs.modal",".modal",function(){e.verification=JSON.parse(JSON.stringify(e.customer.verification))})}}},RQTH:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.image?a("div",{staticClass:"position-relative"},[a("img",{attrs:{src:e.image}}),e._v(" "),a("button",{staticClass:"btn btn-danger upload-close m-0 px-3 py-2",on:{click:function(t){t.preventDefault(),e.$emit("close")}}},[a("i",{staticClass:"fas fa-times text-white"})])]):e._e()},staticRenderFns:[]}},SldL:function(e,t){!function(t){"use strict";var a,r=Object.prototype,s=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},n=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",l=o.toStringTag||"@@toStringTag",m="object"==typeof e,u=t.regeneratorRuntime;if(u)m&&(e.exports=u);else{(u=t.regeneratorRuntime=m?e.exports:{}).wrap=C;var d="suspendedStart",c="suspendedYield",v="executing",_="completed",p={},f={};f[n]=function(){return this};var w=Object.getPrototypeOf,g=w&&w(w(S([])));g&&g!==r&&s.call(g,n)&&(f=g);var h=k.prototype=y.prototype=Object.create(f);b.prototype=h.constructor=k,k.constructor=b,k[l]=b.displayName="GeneratorFunction",u.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===b||"GeneratorFunction"===(t.displayName||t.name))},u.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,k):(e.__proto__=k,l in e||(e[l]="GeneratorFunction")),e.prototype=Object.create(h),e},u.awrap=function(e){return{__await:e}},N(q.prototype),q.prototype[i]=function(){return this},u.AsyncIterator=q,u.async=function(e,t,a,r){var s=new q(C(e,t,a,r));return u.isGeneratorFunction(t)?s:s.next().then(function(e){return e.done?e.value:s.next()})},N(h),h[l]="Generator",h[n]=function(){return this},h.toString=function(){return"[object Generator]"},u.keys=function(e){var t=[];for(var a in e)t.push(a);return t.reverse(),function a(){for(;t.length;){var r=t.pop();if(r in e)return a.value=r,a.done=!1,a}return a.done=!0,a}},u.values=S,A.prototype={constructor:A,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=a,this.done=!1,this.delegate=null,this.method="next",this.arg=a,this.tryEntries.forEach(E),!e)for(var t in this)"t"===t.charAt(0)&&s.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=a)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(r,s){return i.type="throw",i.arg=e,t.next=r,s&&(t.method="next",t.arg=a),!!s}for(var o=this.tryEntries.length-1;o>=0;--o){var n=this.tryEntries[o],i=n.completion;if("root"===n.tryLoc)return r("end");if(n.tryLoc<=this.prev){var l=s.call(n,"catchLoc"),m=s.call(n,"finallyLoc");if(l&&m){if(this.prev<n.catchLoc)return r(n.catchLoc,!0);if(this.prev<n.finallyLoc)return r(n.finallyLoc)}else if(l){if(this.prev<n.catchLoc)return r(n.catchLoc,!0)}else{if(!m)throw new Error("try statement without catch or finally");if(this.prev<n.finallyLoc)return r(n.finallyLoc)}}}},abrupt:function(e,t){for(var a=this.tryEntries.length-1;a>=0;--a){var r=this.tryEntries[a];if(r.tryLoc<=this.prev&&s.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var n=o?o.completion:{};return n.type=e,n.arg=t,o?(this.method="next",this.next=o.finallyLoc,p):this.complete(n)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),p},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.finallyLoc===e)return this.complete(a.completion,a.afterLoc),E(a),p}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.tryLoc===e){var r=a.completion;if("throw"===r.type){var s=r.arg;E(a)}return s}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:S(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=a),p}}}function C(e,t,a,r){var s=t&&t.prototype instanceof y?t:y,o=Object.create(s.prototype),n=new A(r||[]);return o._invoke=function(e,t,a){var r=d;return function(s,o){if(r===v)throw new Error("Generator is already running");if(r===_){if("throw"===s)throw o;return O()}for(a.method=s,a.arg=o;;){var n=a.delegate;if(n){var i=P(n,a);if(i){if(i===p)continue;return i}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if(r===d)throw r=_,a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);r=v;var l=x(e,t,a);if("normal"===l.type){if(r=a.done?_:c,l.arg===p)continue;return{value:l.arg,done:a.done}}"throw"===l.type&&(r=_,a.method="throw",a.arg=l.arg)}}}(e,a,n),o}function x(e,t,a){try{return{type:"normal",arg:e.call(t,a)}}catch(e){return{type:"throw",arg:e}}}function y(){}function b(){}function k(){}function N(e){["next","throw","return"].forEach(function(t){e[t]=function(e){return this._invoke(t,e)}})}function q(e){var t;this._invoke=function(a,r){function o(){return new Promise(function(t,o){!function t(a,r,o,n){var i=x(e[a],e,r);if("throw"!==i.type){var l=i.arg,m=l.value;return m&&"object"==typeof m&&s.call(m,"__await")?Promise.resolve(m.__await).then(function(e){t("next",e,o,n)},function(e){t("throw",e,o,n)}):Promise.resolve(m).then(function(e){l.value=e,o(l)},n)}n(i.arg)}(a,r,t,o)})}return t=t?t.then(o,o):o()}}function P(e,t){var r=e.iterator[t.method];if(r===a){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=a,P(e,t),"throw"===t.method))return p;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var s=x(r,e.iterator,t.arg);if("throw"===s.type)return t.method="throw",t.arg=s.arg,t.delegate=null,p;var o=s.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=a),t.delegate=null,p):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,p)}function $(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function E(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function A(e){this.tryEntries=[{tryLoc:"root"}],e.forEach($,this),this.reset(!0)}function S(e){if(e){var t=e[n];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,o=function t(){for(;++r<e.length;)if(s.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=a,t.done=!0,t};return o.next=o}}return{next:O}}function O(){return{value:a,done:!0}}}(function(){return this}()||Function("return this")())},WiSW:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(a("I3G/")),s=(a("N71M"),a("nv24")),o=n(a("1gIg"));function n(e){return e&&e.__esModule?e:{default:e}}t.default={props:["viewCustomer"],components:{AppNavigation:o.default},data:function(){return{customer:"",show:!1}},computed:{full:function(){return"full"===this.$route.meta.mode},passport:function(){return"https://s3.eu-west-2.amazonaws.com/altara-one/"+this.customer.document.passport_url},branch:function(){return this.customer.branch.description+" "+this.customer.branch.name},approved:function(){return this.$getCustomerApprovalStatus(this.customer.verification)}},created:function(){var e=this;$(".tooltip").remove(),this.viewCustomer&&this.setCustomer(this.viewCustomer),s.EventBus.$on("customer",function(t){return e.setCustomer(t)})},methods:{setCustomer:function(e){r.default.set(this.$data,"customer",e),this.show=!0}}}},"Wk+m":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,s=a("APzg"),o=(r=s)&&r.__esModule?r:{default:r};t.default={components:{ImagePreview:o.default},props:{value:{type:[String,File],default:null},usage:{type:[String],default:"verification"}},methods:{upload:function(e){var t=e.target.files;t&&t.length>0&&this.$emit("input",t[0])}}}},Xxa5:function(e,t,a){e.exports=a("jyFz")},hyG2:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};function s(e,t,a){var o=t||new FormData,n=void 0;for(var i in e)if(e.hasOwnProperty(i))if(n=a?a+"["+i+"]":i,e[i]instanceof Array)for(var l=0;l<e[i].length;l++)s(e[i][l],o,i+"["+l+"]");else"object"!==r(e[i])||e[i]instanceof File?o.append(n,e[i]):s(e[i],o,i);return o}t.toMulipartedForm=function(e,t){if("edit"===t&&"string"==typeof e.image){var a=JSON.parse(JSON.stringify(e));return delete a.image,a}return s(e)},t.objectToFormData=s},ic49:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.log=function(e,t){e=e.replace(/([A-Z])/g," $1").replace(/^./,function(e){return e.toUpperCase()}),(0,r.post)("/api/log",{action:e,description:t})};var r=a("p/p5")},jyFz:function(e,t,a){var r=function(){return this}()||Function("return this")(),s=r.regeneratorRuntime&&Object.getOwnPropertyNames(r).indexOf("regeneratorRuntime")>=0,o=s&&r.regeneratorRuntime;if(r.regeneratorRuntime=void 0,e.exports=a("SldL"),s)r.regeneratorRuntime=o;else try{delete r.regeneratorRuntime}catch(e){r.regeneratorRuntime=void 0}},lxeU:function(e,t,a){var r=a("VU/8")(a("oLXF"),a("2X8/"),!1,function(e){a("pbhl")},null,null);e.exports=r.exports},m2tk:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Message=void 0;var r=function(){function e(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,a,r){return a&&e(t.prototype,a),r&&e(t,r),t}}(),s=a("p/p5");t.Message=function(){function e(t,a){var r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.user_id=s,this.message=t,this.logToDB=r,this.contacts=a.split(",").filter(function(e){return/\S/.test(e)}).map(function(e){return"234"+e.trim().substr(1)}).join(","),this.setPages(),this.setContactCount()}return r(e,[{key:"setContactCount",value:function(){this.contact_count=this.contacts.split(",").length}},{key:"setPages",value:function(){this.pages=Math.ceil(this.message.length/160)}},{key:"send",value:function(e){var t=this;(0,s.get)("/api/message/create?to="+this.contacts+"&message="+this.message).then(function(a){return 200===a.status&&t.logToDB&&(delete t.logToDB,(0,s.post)("/api/message",t)),!!e&&e(a)}).catch(function(t){return!!e&&e(t)})}}]),e}()},nT0B:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{preview:{type:[String,File],default:null}},data:function(){return{image:null}},created:function(){this.setPreview()},watch:{preview:"setPreview"},methods:{setPreview:function(){var e=this;if(this.preview instanceof File){var t=new FileReader;t.onload=function(t){e.image=t.target.result},t.readAsDataURL(this.preview)}else"string"==typeof this.preview?this.image="https://s3.eu-west-2.amazonaws.com/altara-one/"+this.preview:this.image=null}}}},nv24:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.EventBus=void 0;var r,s=a("I3G/"),o=(r=s)&&r.__esModule?r:{default:r};t.EventBus=new o.default},oLXF:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=m(a("Xxa5")),s=a("m2tk"),o=a("ic49"),n=m(a("K23+")),i=a("p/p5"),l=m(a("3o0A"));function m(e){return e&&e.__esModule?e:{default:e}}t.default={components:{Verification:l.default},data:function(){return{occupations:[{id:1,jobType:"Trader",category:"informal(business)",names:["Food","Drinks","Homeware","Clothing","Miscellaneous"]},{id:2,jobType:"Driver",category:"informal(business)",names:["Keke Napep","Taxi","Motorbike","Bus driver","Private"]},{id:3,jobType:"Banker",category:"formal",names:["Teller","Financial Analyst","Loan Officer","Operation","Risk Specialist","Security & Fraud Specialist"]},{id:4,jobType:"Elementary workers",category:"informal(business)",names:["Mining worker","Construction worker","Manufacturing laborer"]},{id:5,jobType:"Maintenance Worker",category:"informal(business)",names:["Cleaner","Electrician","Plumber","Carpenter","Welder","Painter","Vulcanizer","Security Guard"]},{id:6,jobType:"Farming",category:"informal(business)",names:["Livestock farmer","Crop farmer"]},{id:7,jobType:"Civil Servant",category:"formal",names:[]},{id:8,jobType:"Sales & Services",category:"informal(business)",names:["Car-wash","Laundry","Sales Assistant","Cook","Hairdresser/Barber","Cashier","Waiter","Hotel Assistant","Receptionist"]},{id:9,jobType:"Technical Professionals",category:"formal",names:["Teacher","Doctor","Lawyer","Nurse","Pharmacist","Journalist","Engineer","Civic","Electrical","Chemical","Mechanical","I.T."]},{id:10,jobType:"Pastor",category:"informal(business)",names:[]},{id:11,jobType:"Entertainment",category:"informal(business)",names:["Actor/Actress","Event Planner","Musician","Producer","Tailor/Fashion Designer"]},{id:12,jobType:"Other",category:"informal(business)",names:[]}],mode:this.$route.meta.mode,user:{},error:{},states:{},branches:{},newCustomer:{},fillWorkGuarantor:!1,gender:["male","female"],fillPersonalGuarantor:!1,typesOfHome:["family","owned","rented"],paymentPeriod:["daily","weekly","monthly"],receiveIncomeMeans:["bank deposit","cheque","cash"],noOfRooms:["one room","two room","more than Two room"],employmentStatus:["formal","informal(business)","unemployed"],relationshipPG:["friend","family","co-worker","employee","other"],civilStatus:["single","married","divorced","widow","live together"],relationshipWG:["supervisor","neighbouring worker","co-worker","employee"],weekdays:["sunday","monday","tuesday","wednesday","thursday","friday","saturday"],highestLevelOfEdu:["no studies","secondary","polytechnic","primary","university","masters"],durations:["less than 1 year","1 year","2 years","3 years","between 4 - 9 years","more than 10 years","more than 20 years"],relationships:["spouse","mother","sibling","uncle","nephew","in-law","friend","child","father","grandparent","cousin","caretaker","grandchild"],isLifestyle:!1,isClick:!1,occName:[],isActive:!1,isOther:!1}},methods:{register:function(){var e,t,a=this;$('input[name="occ"]').attr("disabled",!1),this.$validator.validateAll().then((e=r.default.mark(function e(t){return r.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=20;break}if("unemployed"!==a.newCustomer.employment_status){e.next=4;break}return n.default.setError("you can only register customer from formal and informal sectors at the moment!"),e.abrupt("return",a.$scrollToTop());case 4:if(!a.$network()){e.next=17;break}if(a.$LIPS(!0),a.error={},"update"!==a.mode){e.next=11;break}if(a.$editAccess(a.user,a.newCustomer)){e.next=11;break}return e.abrupt("return",a.$networkErr("edit"));case 11:return e.next=13,(0,i.post)("/api/customer"+("update"===a.mode?"/"+a.newCustomer.id:""),a.newCustomer).then(function(e){var t=e.data,r=t.customer,i=r.first_name,l=r.last_name,m=r.id,u=r.branch,d=r.telephone;if(n.default.setSuccess("Customer "+a.mode+"d successful! Customer ID is: "+m,3e4),(0,o.log)(a.mode+"dCustomer","Customer ID :"+m),"register"===a.mode){var c="Dear "+i+" "+l+", Welcome to Altara Credit Limited, You are hereby invited to our showroom at "+u.description+" to learn more about our offerings. Pick up products now and pay later. We look forward to seeing you. For more info contact:"+u.phone_yoruba+". Your customer id is: "+m;new s.Message(c,d).send(function(e){return 200===e.status&&a.prepareForm(t.prepareForm)})}}).catch(function(e){422===(e=e.response).status&&(a.error=e.data.errors?e.data.errors:e.data),n.default.setError(422===e.status?"unique field":e.message,1e4)});case 13:a.$scrollToTop(),a.$LIPS(!1),e.next=18;break;case 17:a.$networkErr();case 18:e.next=21;break;case 20:a.$networkErr("form");case 21:$('input[name="occ"]').attr("disabled",!(a.isOther&&a.isClick));case 22:case"end":return e.stop()}},e,a)}),t=function(){var t=e.apply(this,arguments);return new Promise(function(e,a){return function r(s,o){try{var n=t[s](o),i=n.value}catch(e){return void a(e)}if(!n.done)return Promise.resolve(i).then(function(e){r("next",e)},function(e){r("throw",e)});e(i)}("next")})},function(e){return t.apply(this,arguments)}))},checkOccupation:function(e){var t=this;$(".occupation-title, .occupation-option").removeClass("active shadow-sm"),this.occupations.forEach(function(a){a.id===e&&($('.occupation-title[data-id="'+e+'"]').addClass("active shadow-sm"),t.occName=a.names,t.newCustomer.employment_status=a.category,t.isClick=!0,t.isOther=12===a.id,12===a.id?t.isOther=!0:t.isOther=!1)})},setOccupation:function(e){var t=this;$(".occupation-option").removeClass("active shadow-sm"),this.occName.forEach(function(a){a==e&&(t.newCustomer.occupation=a,$('.occupation-option[data-name="'+e+'"]').addClass("active shadow-sm"))})},prepareForm:function(e){this.states=e.states,this.branches=e.branches,this.newCustomer=e.form,this.user=e.user},updateCustomer:function(e){if("update"===this.mode){var t=[!0,!0];this.fillWorkGuarantor=t[0],this.fillPersonalGuarantor=t[1]}this.newCustomer=e}},created:function(){var e=this;(0,i.get)("/api/customer/create").then(function(t){var a=t.data;return e.prepareForm(a)})}}},pbhl:function(e,t,a){var r=a("NLw1");"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);a("rjj0")("15e90d43",r,!0,{})},r37U:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("transition",{attrs:{name:"fade"}},[a("div",{class:e.full&&"px-md-4 px-2"},[e.full?a("app-navigation",{attrs:{forward:{path:e.$routerHistory.next().path},previous:{path:e.$routerHistory.previous().path},pageTitle:"Customer Profile",pageTitleSmall:"Customer Profile"}}):e._e(),e._v(" "),e.show?a("div",{staticClass:"pt-md-3 pt-2 verification",attrs:{id:"employeeRegister"}},[a("div",{staticClass:"customer-profile card position-relative"},[a("div",{staticClass:"design"}),e._v(" "),a("div",{staticClass:"col-md-4 col-sm-4 col-12 px-0 pb-md-4 pb-sm-3 pb-0 pt-md-5 pt-4 float-left"},[a("div",{staticClass:"pt-md-3 pt-sm-2 pt-1"},[a("div",{staticClass:"justify-content-center d-flex position-relative z-1"},[a("span",{staticClass:"img-border"},[e.customer.document.passport_url?a("img",{staticClass:"profile-picture rounded-circle",attrs:{src:e.passport,alt:"customer profile pic"}}):a("i",{staticClass:"no-image fas fa-user-alt"})])]),e._v(" "),a("div",{staticClass:"justify-content-center d-flex position-relative z-1 pt-md-4 pt-sm-4 pt-2"},[a("span",{staticClass:"w-50"},[a("div",{staticClass:"text-right px-4 py-3 text-light text-muted m-0"},[e._v("\n                                    Status"),a("i",{staticClass:"ml-3 fas fa-briefcase"})]),e._v(" "),a("div",{staticClass:"data text-right px-4 py-3 m-0"},[e._v(e._s(e._f("capitalize")(e.customer.employment_status)))])]),e._v(" "),a("span",{staticClass:"separator"}),e._v(" "),a("span",{staticClass:"w-50"},[a("div",{staticClass:"px-4 py-3 text-muted text-light m-0"},[a("i",{staticClass:"mr-3 fas fa-transgender"}),e._v("Gender\n                                ")]),e._v(" "),a("div",{staticClass:"data px-4 py-3 m-0"},[e._v(e._s(e._f("capitalize")(e.customer.gender)))])])])])]),e._v(" "),a("div",{staticClass:"col-md-8 col-sm-8 col-12 px-0 pb-4 pt-md-5 pt-sm-5 pt-0 float-left"},[a("div",{staticClass:"pt-md-4 pt-0 clearfix"},[a("div",{staticClass:"float-left p-0 m-0 col-md-4 col-sm-6 small-center"},[a("h4",{staticClass:"mt-0 pt-md-5 pt-sm-4 pt-0 mb-md-5 mb-sm-4 mb-3"},[a("i",{staticClass:"mr-3 far fa-user-circle"}),e._v(" "),a("strong",[e._v(e._s(e._f("capitalize")(e.$getCustomerFullName(e.customer))))])])]),e._v(" "),a("div",{staticClass:"float-left p-0 m-0 col-md-4 col-sm-6 d-flex justify-content-center"},[a("h4",{staticClass:"mt-0 pt-md-5 pt-sm-4 pt-0 mb-md-5 mb-sm-4 mb-4 text-muted"},[a("strong",[e._v("Customer ID: "+e._s(e.customer.id))])])]),e._v(" "),a("div",{staticClass:"float-left p-0 m-0 col-md-4 col-12 d-flex justify-content-center"},[a("span",{class:"status mt-md-5 my-sm-2 mt-0 "+(e.approved?"approved":"not-approved")},[e._v("\n                                "+e._s(e.approved?"APPROVED":"NOT APPROVED")+"\n                                "),a("i",{class:"ml-3 fas fa-"+(e.approved?"check":"times")})])])]),e._v(" "),a("div",{staticClass:"pt-4"},[a("table",{staticClass:"table"},[a("tbody",[a("tr",[a("th",{staticClass:"text-muted"},[a("i",{staticClass:"mr-3 fas fa-mobile-alt"}),e._v("Phone Number")]),e._v(" "),a("td",[e._v(e._s(e.customer.telephone))])]),e._v(" "),e.$store.getters.auth("DVAAccess")?a("tr",[a("th",{staticClass:"text-muted"},[a("i",{staticClass:"mr-3 fas fa-map-marker-alt"}),e._v("Address")]),e._v(" "),a("td",[e._v(e._s(e._f("capitalize")(e.$getCustomerAddress(e.customer)))+"\n                                ")])]):e._e(),e._v(" "),a("tr",[a("th",{staticClass:"text-muted"},[a("i",{staticClass:"mr-3 fas fa-gift"}),e._v("Registered On")]),e._v(" "),a("td",[e._v(e._s(e.customer.date_of_registration))])]),e._v(" "),a("tr",[a("th",{staticClass:"text-muted"},[a("i",{staticClass:"mr-3 far fa-user-circle"}),e._v("Registered By")]),e._v(" "),a("td",[e._v(e._s(e._f("capitalize")(e.customer.user?e.customer.user.full_name:"user not in record"))+"\n                                ")])]),e._v(" "),a("tr",[a("th",{staticClass:"text-muted"},[a("i",{staticClass:"mr-3 far fa-building"}),e._v("Branch")]),e._v(" "),a("td",[e._v(e._s(e._f("capitalize")(e.branch)))])])])])])])]),e._v(" "),e.full?a("div",[e._v("Full profile goes here")]):e._e()]):e._e()],1)])},staticRenderFns:[]}},rjj0:function(e,t,a){var r="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!r)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var s=a("tTVk"),o={},n=r&&(document.head||document.getElementsByTagName("head")[0]),i=null,l=0,m=!1,u=function(){},d=null,c="data-vue-ssr-id",v="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function _(e){for(var t=0;t<e.length;t++){var a=e[t],r=o[a.id];if(r){r.refs++;for(var s=0;s<r.parts.length;s++)r.parts[s](a.parts[s]);for(;s<a.parts.length;s++)r.parts.push(f(a.parts[s]));r.parts.length>a.parts.length&&(r.parts.length=a.parts.length)}else{var n=[];for(s=0;s<a.parts.length;s++)n.push(f(a.parts[s]));o[a.id]={id:a.id,refs:1,parts:n}}}}function p(){var e=document.createElement("style");return e.type="text/css",n.appendChild(e),e}function f(e){var t,a,r=document.querySelector("style["+c+'~="'+e.id+'"]');if(r){if(m)return u;r.parentNode.removeChild(r)}if(v){var s=l++;r=i||(i=p()),t=h.bind(null,r,s,!1),a=h.bind(null,r,s,!0)}else r=p(),t=function(e,t){var a=t.css,r=t.media,s=t.sourceMap;r&&e.setAttribute("media",r);d.ssrId&&e.setAttribute(c,t.id);s&&(a+="\n/*# sourceURL="+s.sources[0]+" */",a+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */");if(e.styleSheet)e.styleSheet.cssText=a;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(a))}}.bind(null,r),a=function(){r.parentNode.removeChild(r)};return t(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;t(e=r)}else a()}}e.exports=function(e,t,a,r){m=a,d=r||{};var n=s(e,t);return _(n),function(t){for(var a=[],r=0;r<n.length;r++){var i=n[r];(l=o[i.id]).refs--,a.push(l)}t?_(n=s(e,t)):n=[];for(r=0;r<a.length;r++){var l;if(0===(l=a[r]).refs){for(var m=0;m<l.parts.length;m++)l.parts[m]();delete o[l.id]}}}};var w,g=(w=[],function(e,t){return w[e]=t,w.filter(Boolean).join("\n")});function h(e,t,a,r){var s=a?"":r.css;if(e.styleSheet)e.styleSheet.cssText=g(t,s);else{var o=document.createTextNode(s),n=e.childNodes;n[t]&&e.removeChild(n[t]),n.length?e.insertBefore(o,n[t]):e.appendChild(o)}}},tTVk:function(e,t){e.exports=function(e,t){for(var a=[],r={},s=0;s<t.length;s++){var o=t[s],n=o[0],i={id:e+":"+s,css:o[1],media:o[2],sourceMap:o[3]};r[n]?r[n].parts.push(i):a.push(r[n]={id:n,parts:[i]})}return a}},wBhk:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:["pageTitle","pageTitleSmall","previous","forward"]}},xosg:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"image"},[e.value&&"verification"===e.usage?a("image-preview",{attrs:{preview:e.value},on:{close:function(t){e.$emit("input",null)}}}):a("div",[a("input",{attrs:{type:"file",accept:"images/*"},on:{change:e.upload}})])],1)},staticRenderFns:[]}}});
>>>>>>> 976efb13563114c356a829a8b2f4c56625bbae52
