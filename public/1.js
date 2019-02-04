webpackJsonp([1,2],{

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

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"babel-preset-env\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"babel-plugin-syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/customerProfile.vue":
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    props: ['customer'],
    computed: {
        approved: function approved() {
            return this.customer.verification.address === 1 && this.customer.verification.id_card === 1 && this.customer.verification.passport === 1 && this.customer.verification.processing_fee === 1 && this.customer.verification.work_guarantor === 1 && this.customer.verification.personal_guarantor === 1;
            /*This component is the customer profile proper. for optimal result.
            * The data passed to this should be a response
            * from the CustomerController@show
            * this method is used to check the approval
            * status for any customer details
            * supplied to it.
            * NB all the params above must be
            * 1 for a customer t be approved*/
        }
    }
};

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"babel-preset-env\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"babel-plugin-syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/views/DSA/utility/form.vue":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = __webpack_require__("./node_modules/babel-runtime/regenerator/index.js");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _sms = __webpack_require__("./resources/assets/js/helpers/sms.js");

var _sms2 = _interopRequireDefault(_sms);

var _log = __webpack_require__("./resources/assets/js/helpers/log.js");

var _flash = __webpack_require__("./resources/assets/js/helpers/flash.js");

var _flash2 = _interopRequireDefault(_flash);

var _api = __webpack_require__("./resources/assets/js/helpers/api.js");

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


exports.default = {
    components: { Verification: _verification2.default },
    props: { action: { default: 'update' } },
    data: function data() {
        return {
            user: {},
            error: {},
            states: {},
            branches: {},
            newCustomer: {},
            ifUp: function ifUp(a) {
                return a === 'update';
            },
            ifReg: function ifReg(a) {
                return a === 'register';
            },
            fillWorkGuarantor: false,
            gender: ['male', 'female'],
            fillPersonalGuarantor: false,
            typesOfHome: ['family', 'owned', 'rented'],
            paymentPeriod: ['daily', 'weekly', 'monthly'],
            receiveIncomeMeans: ['bank deposit', 'cheque', 'cash'],
            noOfRooms: ['one room', 'two room', 'more than Two room'],
            employmentStatus: ['formal', 'informal(business)', 'unemployed'],
            relationshipPG: ['friend', 'family', 'co-worker', 'employee', 'other'],
            civilStatus: ['single', 'married', 'divorced', 'widow', 'live together'],
            relationshipWG: ['supervisor', 'neighbouring worker', 'co-worker', 'employee'],
            weekdays: ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'],
            highestLevelOfEdu: ['no studies', 'secondary', 'polytechnic', 'primary', 'university', 'masters'],
            durations: ['less than 1 year', '1 year', '2 years', '3 years', 'between 4 - 9 years', 'more than 10 years', 'more than 20 years'],
            relationships: ['spouse', 'mother', 'sibling', 'uncle', 'nephew', 'in-law', 'friend', 'child', 'father', 'grandparent', 'cousin', 'caretaker', 'grandchild'],

            isLifestyle: false
        };
    },

    methods: {
        register: function register() {
            var _this = this;

            this.$validator.validateAll().then(function () {
                var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee(result) {
                    var newUrl, logMsg, acc;
                    return _regenerator2.default.wrap(function _callee$(_context) {
                        while (1) {
                            switch (_context.prev = _context.next) {
                                case 0:
                                    if (!result) {
                                        _context.next = 24;
                                        break;
                                    }

                                    if (!(_this.newCustomer.employment_status === 'unemployed')) {
                                        _context.next = 4;
                                        break;
                                    }

                                    _flash2.default.setError('you can only register customer from formal and informal sectors at the moment!');
                                    return _context.abrupt('return', _this.$scrollToTop());

                                case 4:
                                    if (!_this.$network()) {
                                        _context.next = 21;
                                        break;
                                    }

                                    _this.$LIPS(true);
                                    _this.error = {};
                                    newUrl = '/api/customer';
                                    logMsg = 'createdNew';

                                    if (!(_this.action === 'update')) {
                                        _context.next = 15;
                                        break;
                                    }

                                    newUrl = newUrl + '/' + _this.newCustomer.id;
                                    logMsg = 'updated';
                                    acc = _this.$editAccess(_this.user, _this.newCustomer);

                                    if (acc) {
                                        _context.next = 15;
                                        break;
                                    }

                                    return _context.abrupt('return', _this.$networkErr('edit'));

                                case 15:
                                    _context.next = 17;
                                    return (0, _api.post)(newUrl, _this.newCustomer).then(function (res) {
                                        _flash2.default.setSuccess('Customer ' + _this.action + ' successful! Customer ID is: ' + res.data.customer.id, 30000);
                                        (0, _log.log)(logMsg + 'Customer', 'Customer ID :' + res.data.customer.id);
                                        if (_this.action === 'register') _sms2.default.customerReg(res.data.customer);
                                        _this.prepareForm(res.data.prepareForm);
                                    }).catch(function (e) {
                                        e = e.response;
                                        if (e.status === 422) _this.error = e.data.errors ? e.data.errors : e.data;
                                        _flash2.default.setError(e.status === 422 ? 'unique' : e.message, 10000);
                                    });

                                case 17:
                                    _this.$scrollToTop();
                                    _this.$LIPS(false);
                                    _context.next = 22;
                                    break;

                                case 21:
                                    _this.$networkErr();

                                case 22:
                                    _context.next = 25;
                                    break;

                                case 24:
                                    _this.$networkErr('form');

                                case 25:
                                case 'end':
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
        prepareForm: function prepareForm(data) {
            this.states = data.states;
            this.branches = data.branches;
            this.newCustomer = data.form;
            this.user = data.user;
        },
        updateCustomer: function updateCustomer(customer) {
            if (this.ifUp('update')) {
                ;
                var _ref2 = [true, true];
                this.fillWorkGuarantor = _ref2[0];
                this.fillPersonalGuarantor = _ref2[1];
            }this.newCustomer = customer;
        }
    },
    created: function created() {
        var _this2 = this;

        (0, _api.get)('/api/customer/create').then(function (res) {
            return _this2.prepareForm(res.data);
        });
        /*on create of the component fetch the data required to prepare the form
        * states, branches and the currently logged in dsa details*/
    },

    watch: {
        isLifestyle: function isLifestyle(value) {
            this.newCustomer.branch_id = value ? 8 : this.user.branch_id;
        }
    }
};

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"babel-preset-env\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"babel-plugin-syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/views/DVA/verification/verification.vue":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = __webpack_require__("./node_modules/babel-runtime/regenerator/index.js");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _log = __webpack_require__("./resources/assets/js/helpers/log.js");

var _flash = __webpack_require__("./resources/assets/js/helpers/flash.js");

var _flash2 = _interopRequireDefault(_flash);

var _api = __webpack_require__("./resources/assets/js/helpers/api.js");

var _form = __webpack_require__("./resources/assets/js/helpers/form.js");

var _ImageUpload = __webpack_require__("./resources/assets/js/components/ImageUpload.vue");

var _ImageUpload2 = _interopRequireDefault(_ImageUpload);

var _customerProfile = __webpack_require__("./resources/assets/js/components/customerProfile.vue");

var _customerProfile2 = _interopRequireDefault(_customerProfile);

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
        CustomerProfile: _customerProfile2.default
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
            customerAddress: '',
            work_guarantor_address: '',
            personal_guarantor_address: ''
        };
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
        returnToInitialValues: function returnToInitialValues() {
            this.verification = JSON.parse(JSON.stringify(this.customer.verification));
            /*this.verification holds a copy of the this.customer.verification. this.verification is what is used to style
            * the card. this.customer.verification on the other hand is used to calculate the approval status, when
            * changing the status on the front end the this.verification is what is changed but when it is
            * reflected in the backend then the changes will be reflected on this.customer.verification
            * after going to database and returning the data again. NB: the purpose of this method
            * is revert the values of the this.verification to this.customer.verification
            * values, when a user selects a different option but doesn't submit
            * it after opening and closing the modal responsible for that
            * particular action*/
        },
        buttonStatus: function buttonStatus(data) {
            var _this = this;

            this.$emit('update', data.customer);
            /*$emit update event is used to send data to the parent component where this serves as a child
            * component. eg. dsa utility form. NB: The customer registration component(form)
            * is used as the customer update form for both dsa and dva portal.*/
            this.user = data.hasOwnProperty('user') ? data.user : null;
            this.customer = data.customer;
            if (data.customer != '') {
                this.verification = JSON.parse(JSON.stringify(data.customer.verification));
                this.form.id_card = data.customer.document.id_card_url;
                this.form.passport = data.customer.document.passport_url;
                this.customerAddress = this.customer.add_houseno + '\n                    ' + this.customer.add_street + '\n                    ' + this.customer.area_address + '\n                    ' + this.customer.city + '\n                    ' + this.customer.state;
                this.work_guarantor_address = this.customer.guaadd_houseno + ',\n                    ' + this.customer.guaadd_street + ',\n                    ' + this.customer.gua_area + ',\n                    ' + this.customer.work_guarantor_city + ',\n                    ' + this.customer.work_guarantor_state;
                this.personal_guarantor_address = this.customer.pguaadd_houseno + ',\n                    ' + this.customer.pguaadd_street + ',\n                    ' + this.customer.pgua_area + ',\n                    ' + this.customer.personal_guarantor_city + ',\n                    ' + this.customer.personal_guarantor_state;
                this.veriData.forEach(function (e) {
                    //e is the current array element during the foreach call;
                    _this[e + 'Btns'] = !!!data.customer[e];
                    //eg this.work_guarantorBtns = if (data.customer.work_guarantor) {return true} else {return false}
                    //and anything the if return will be inverted.
                    _this[e] = !!data.customer[e] ? data.customer[e] : data['empty_' + e];
                    //eg this.work_guarantor = if(data.customer.work_guarantor){ return data.customer.work_guarantor }
                    // else {return data.empty_work_guarantor}
                    //the empty_work_guarantor is returned from backend when no work guarantor has been added.
                });
            }
        },
        fetchCustomer: function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
                var _this2 = this;

                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                if (!this.$network()) {
                                    _context.next = 8;
                                    break;
                                }

                                this.$LIPS(true);
                                _context.next = 4;
                                return (0, _api.get)('/api/customer/' + this.customer_id).then(function (res) {
                                    return _this2.buttonStatus(res.data);
                                }).catch(function (e) {
                                    e = e.response;
                                    if (e.status === 422) _this2.buttonStatus(e.data);
                                    _flash2.default.setError(e.data.message);
                                });

                            case 4:
                                this.$scrollToTop();
                                this.$LIPS(false);
                                _context.next = 9;
                                break;

                            case 8:
                                this.$networkErr();

                            case 9:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function fetchCustomer() {
                return _ref.apply(this, arguments);
            }

            return fetchCustomer;
        }(),
        validate: function validate(type) {
            var _this3 = this;

            var acc = this.$editAccess(this.user, this.customer);
            if (acc) {
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
                        var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee2(result) {
                            return _regenerator2.default.wrap(function _callee2$(_context2) {
                                while (1) {
                                    switch (_context2.prev = _context2.next) {
                                        case 0:
                                            if (!result) {
                                                _context2.next = 7;
                                                break;
                                            }

                                            _context2.next = 3;
                                            return (0, _api.post)('/api/' + type, _this3[type]).then(function (res) {
                                                _this3.buttonStatus(res.data.response);
                                                var id = 'Customer ID : ' + _this3.customer.id,
                                                    typeCaps = _this3.$options.filters.capitalize(type),
                                                    action = 'Customer' + typeCaps + 'Verification';
                                                if (type === 'address') action += _this3.address.approval_status ? 'Passed' : 'NotPassed';
                                                (0, _log.log)(action, id);
                                                _flash2.default.setSuccess(typeCaps + ' status updated!');
                                                _this3.modal(type + '_modal');
                                            }).catch(function (e) {
                                                return _flash2.default.setError(e.response.data.message);
                                            });

                                        case 3:
                                            _this3.$LIPS(false);
                                            _this3.$scrollToTop();
                                            _context2.next = 8;
                                            break;

                                        case 7:
                                            _this3.$networkErr('form');

                                        case 8:
                                        case 'end':
                                            return _context2.stop();
                                    }
                                }
                            }, _callee2, _this3);
                        }));

                        return function (_x) {
                            return _ref2.apply(this, arguments);
                        };
                    }());
                } else this.$networkErr();
            } else {
                this.$networkErr('edit');
                $('.modal').modal('hide');
            }
        },
        save: function () {
            var _ref3 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee3(document, modal) {
                var _this4 = this;

                var acc, form;
                return _regenerator2.default.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                acc = this.$editAccess(this.user, this.customer);

                                if (!acc) {
                                    _context3.next = 12;
                                    break;
                                }

                                this.storeURL = '/api/document/' + this.customer.document.id + '?_method=PUT&document=' + document;
                                this.$LIPS(true);
                                this.form.document = document;
                                form = (0, _form.toMulipartedForm)(this.form, 'edit');
                                _context3.next = 8;
                                return (0, _api.post)(this.storeURL, form).then(function (res) {
                                    _this4.buttonStatus(res.data.response);
                                    (0, _log.log)('Customer' + _this4.$options.filters.capitalize(document) + 'Upload', 'Customer ID : ' + _this4.customer.id);
                                    _this4.modal(modal);
                                    _flash2.default.setSuccess('Document Updated Successfully!');
                                }).catch(function (e) {
                                    return _this4.error = e.response.data.errors;
                                });

                            case 8:
                                this.$LIPS(false);
                                this.$scrollToTop();
                                _context3.next = 14;
                                break;

                            case 12:
                                this.$networkErr('edit');
                                $('.modal').modal('hide');

                            case 14:
                            case 'end':
                                return _context3.stop();
                        }
                    }
                }, _callee3, this);
            }));

            function save(_x2, _x3) {
                return _ref3.apply(this, arguments);
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
        $(document).on("hidden.bs.modal", '.modal', this.returnToInitialValues);
    }
};

/***/ }),

/***/ "./node_modules/babel-runtime/regenerator/index.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./node_modules/regenerator-runtime/runtime-module.js");


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-07317a72\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/views/DVA/verification/verification.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\ntr[data-v-07317a72] {\n  margin-bottom: .4rem;\n  float: left;\n  width: 100%;\n  font-weight: 400;\n  background-color: rgba(7, 74, 116, 0.1);\n}\ntbody tr th[data-v-07317a72] {\n  width: 4rem;\n  text-align: center;\n  border-right: .4rem solid white;\n  border-left: 0.3rem solid rgba(7, 74, 116, 0.7);\n}\ntbody tr td[data-v-07317a72] {\n  padding: .4rem 1.5rem;\n}\n.verification .card-stats .icon[data-v-07317a72] {\n  margin: 0 1.5rem;\n}\n.verification .info .icon.icon-circle[data-v-07317a72] {\n  width: 8rem;\n  height: 8rem;\n  border-radius: 50%;\n}\n.verification .info-horizontal .icon.icon-circle i[data-v-07317a72] {\n  display: table;\n  margin: 0 auto;\n  line-height: 8rem;\n  font-size: 2.4rem;\n}\n.verification .stats-title[data-v-07317a72] {\n  font-weight: 300;\n  font-size: 1.2rem;\n}\n.verification .card-footer[data-v-07317a72]:hover {\n  background-image: -webkit-gradient(linear, left top, left bottom, from(white), to(#eeeeee));\n  background-image: linear-gradient(to bottom, white, #eeeeee);\n}\n.verification h4.info-title[data-v-07317a72] {\n  margin: 0;\n  font-size: 2.2rem;\n}\n.verification .no-success .icon.icon-warning.icon-circle[data-v-07317a72] {\n  border: 1px solid #b30000;\n  -webkit-box-shadow: 0 0.9rem 1.5rem -0.6rem rgba(179, 0, 0, 0.5) !important;\n          box-shadow: 0 0.9rem 1.5rem -0.6rem rgba(179, 0, 0, 0.5) !important;\n}\n.verification .success .icon.icon-warning.icon-circle[data-v-07317a72] {\n  border: 1px solid #488413;\n  -webkit-box-shadow: 0 0.9rem 1.5rem -0.6rem rgba(72, 132, 19, 0.5) !important;\n          box-shadow: 0 0.9rem 1.5rem -0.6rem rgba(72, 132, 19, 0.5) !important;\n}\n.verification .card.card-stats[data-v-07317a72]::before {\n  content: '';\n  width: 3px;\n  height: 100%;\n  position: absolute;\n  left: 0;\n  top: 0;\n}\n.verification .success[data-v-07317a72]::before {\n  background: linear-gradient(45deg, #8ef985 0%, #01af13 100%);\n}\n.verification .no-success[data-v-07317a72]::before {\n  background: linear-gradient(45deg, #ff9b83 0%, #a40000 100%);\n}\n.verification .success i[data-v-07317a72] {\n  color: #63b61a;\n}\n.verification .no-success i[data-v-07317a72] {\n  color: #c70000;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3b07ec64\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/customerProfile.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.customer-profile {\n  position: relative;\n}\n.customer-profile th {\n    width: auto;\n    font-weight: normal;\n}\n.customer-profile td, .customer-profile .data {\n    font-size: 1.5rem;\n    font-weight: 500;\n}\n.customer-profile .status {\n    padding: 1.2rem 3rem;\n    float: left;\n    color: white;\n    border-radius: .5rem;\n    -webkit-box-shadow: 0 7px 15px rgba(0, 0, 0, 0.15), 0 4px 4px rgba(0, 0, 0, 0.2);\n            box-shadow: 0 7px 15px rgba(0, 0, 0, 0.15), 0 4px 4px rgba(0, 0, 0, 0.2);\n    font-weight: 700;\n    font-size: 1.3rem;\n}\n.customer-profile .status.approved {\n      background-color: #00a368;\n}\n.customer-profile .status.not-approved {\n      background-color: #c81618;\n}\n.customer-profile .design {\n    position: absolute;\n    top: 13rem;\n    bottom: 0;\n    left: 0;\n    width: 101%;\n    height: calc(100% - 8.1rem);\n    z-index: 0;\n    background: linear-gradient(45deg, #dedede 0%, #ffffff 100%);\n}\n.customer-profile .profile-picture, .customer-profile .no-image {\n    height: 16rem;\n    width: 16rem;\n    -webkit-box-shadow: 0 7px 15px rgba(0, 0, 0, 0.15), 0 4px 4px rgba(0, 0, 0, 0.2);\n            box-shadow: 0 7px 15px rgba(0, 0, 0, 0.15), 0 4px 4px rgba(0, 0, 0, 0.2);\n}\n.customer-profile .no-image {\n    background-color: #e3e3e3;\n    border-radius: 50%;\n    line-height: 16rem;\n    text-align: center;\n    font-size: 8rem;\n    color: rgba(0, 0, 0, 0.15);\n}\n.customer-profile .img-border {\n    padding: 1.1rem;\n    background-color: white;\n    border-radius: 50%;\n}\n.customer-profile .separator {\n    position: absolute;\n    left: 50%;\n    height: 70%;\n    width: 1px;\n    background-color: rgba(0, 0, 0, 0.1);\n    top: 3%;\n}\n@media (max-width: 600px) {\n.customer-profile .design {\n    background: -webkit-gradient(linear, left top, left bottom, from(#dedede), to(#ffffff));\n    background: linear-gradient(180deg, #dedede 0%, #ffffff 100%);\n}\n.customer-profile .separator {\n    top: -11%;\n}\n.customer-profile .small-center {\n    text-align: center;\n}\n.customer-profile th {\n    width: 35%;\n}\n.customer-profile tbody {\n    padding: 1rem 1rem 0;\n    float: left;\n}\n}\n", ""]);

// exports


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

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-051c502b\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/views/DSA/utility/form.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "clearfix pt-md-3 pt-2", attrs: { id: "customerRegister" } },
    [
      _vm.ifUp(_vm.action)
        ? _c("verification", {
            attrs: { action: _vm.action },
            on: { update: _vm.updateCustomer }
          })
        : _vm._e(),
      _vm._v(" "),
      (_vm.newCustomer.id && _vm.ifUp(_vm.action)) || _vm.ifReg(_vm.action)
        ? _c("div", { staticClass: "card" }, [
            _c(
              "ul",
              { staticClass: "nav nav-tabs justify-content-center bg-default" },
              [
                _c("h6", [
                  _vm._v(_vm._s(_vm._f("capitalize")(_vm.action)) + " Customer")
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
                  _vm.ifReg(_vm.action)
                    ? _c(
                        "div",
                        [
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
                                  type: "text",
                                  placeholder: "Enter Employee name here",
                                  disabled: "",
                                  name: "emp_name",
                                  "data-vv-name": "employee name"
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
                                    _vm._v(
                                      "\n                            " +
                                        _vm._s(_vm.errors.first("emp_name")) +
                                        "\n                        "
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
                                  type: "text",
                                  placeholder: "Enter Employee number here",
                                  disabled: "",
                                  name: "employee_id",
                                  "data-vv-as": "employee phone number"
                                },
                                domProps: {
                                  value: _vm.newCustomer.employee_id
                                },
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
                                      "\n                            " +
                                        _vm._s(
                                          _vm.errors.first("employee_id")
                                        ) +
                                        "\n                        "
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
                                    expression:
                                      "newCustomer.date_of_registration"
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
                                  disabled: "",
                                  "data-vv-as": "Date of Registration",
                                  name: "date_of_registration"
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
                                      "\n                            " +
                                        _vm._s(
                                          _vm.errors.first(
                                            "date_of_registration"
                                          )
                                        ) +
                                        "\n                        "
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
                                  type: "text",
                                  placeholder: "Enter First name here..",
                                  name: "first_name",
                                  "data-vv-as": "first name"
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
                                    _vm._v(
                                      "\n                            " +
                                        _vm._s(_vm.errors.first("first_name")) +
                                        "\n                        "
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
                                    value: _vm.newCustomer.middle_name,
                                    expression: "newCustomer.middle_name"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: {
                                  type: "text",
                                  placeholder: "Enter Middle name here.."
                                },
                                domProps: {
                                  value: _vm.newCustomer.middle_name
                                },
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
                                  type: "text",
                                  placeholder: "Enter Last name here..",
                                  name: "last_name",
                                  "data-vv-as": "last name"
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
                                    _vm._v(
                                      "\n                            " +
                                        _vm._s(_vm.errors.first("last_name")) +
                                        "\n                        "
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
                                        name: "gender",
                                        type: "radio",
                                        id: sex
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
                                          _vm.$set(
                                            _vm.newCustomer,
                                            "gender",
                                            sex
                                          )
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
                                    _vm._v(
                                      "\n                            " +
                                        _vm._s(_vm.errors.first("gender")) +
                                        "\n                        "
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
                                    expression:
                                      "'required|numeric|max:11|min:11'"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: {
                                  type: "tel",
                                  placeholder: "Enter Phone number here..",
                                  name: "telephone"
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
                                    _vm._v(
                                      _vm._s(_vm.errors.first("telephone"))
                                    )
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
                          _c("div", { staticClass: "spaceAfter" }),
                          _vm._v(" "),
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
                                  type: "text",
                                  placeholder: "Enter street name here..",
                                  name: "street_name",
                                  "data-vv-as": "street name"
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
                                      "\n                            " +
                                        _vm._s(
                                          _vm.errors.first("street_name")
                                        ) +
                                        "\n                        "
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
                                  type: "text",
                                  placeholder: "Enter House number here..",
                                  "data-vv-as": "house number",
                                  name: "house_number"
                                },
                                domProps: {
                                  value: _vm.newCustomer.add_houseno
                                },
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
                                      "\n                            " +
                                        _vm._s(
                                          _vm.errors.first("house_number")
                                        ) +
                                        "\n                        "
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
                                  type: "text",
                                  placeholder: "Enter nearest bus stop here..",
                                  name: "nearest_bus_stop",
                                  "data-vv-as": "nearest bus stop"
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
                                      "\n                            " +
                                        _vm._s(
                                          _vm.errors.first("nearest_bus_stop")
                                        ) +
                                        "\n                        "
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
                                  type: "text",
                                  placeholder: "Enter area here..",
                                  name: "area"
                                },
                                domProps: {
                                  value: _vm.newCustomer.area_address
                                },
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
                                    _vm._v(
                                      "\n                            " +
                                        _vm._s(_vm.errors.first("area")) +
                                        "\n                        "
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
                                  type: "text",
                                  placeholder: "Enter city here..",
                                  name: "city"
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
                                    _vm._v(
                                      "\n                            " +
                                        _vm._s(_vm.errors.first("city")) +
                                        "\n                        "
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
                                    name: "state",
                                    "data-vv-validate-on": "blur"
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
                          _c("div", { staticClass: "spaceBetween" }),
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
                          _c("div", { staticClass: "spaceAfter" }),
                          _vm._v(" "),
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
                                  type: "date",
                                  name: "date_of_birth",
                                  "data-vv-as": "date of birth"
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
                                      "\n                            " +
                                        _vm._s(
                                          _vm.errors.first("date_of_birth")
                                        ) +
                                        "\n                        "
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
                                        type: "radio",
                                        name: "civil_status",
                                        id: status,
                                        "data-vv-as": "civil status"
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
                                      "\n                            " +
                                        _vm._s(
                                          _vm.errors.first("civil_status")
                                        ) +
                                        "\n                        "
                                    )
                                  ])
                                : _vm._e()
                            ],
                            2
                          ),
                          _vm._v(" "),
                          !(_vm.newCustomer.civil_status == "single")
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
                                      type: "number",
                                      placeholder: "years together..",
                                      name: "years_together",
                                      "data-vv-as": "years together"
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
                                          "\n                            " +
                                            _vm._s(
                                              _vm.errors.first("years_together")
                                            ) +
                                            "\n                        "
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
                                        type: "radio",
                                        name: "typeOfHome",
                                        id: typeOfHome,
                                        "data-vv-as": "type of home"
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
                                      "\n                            " +
                                        _vm._s(_vm.errors.first("typeOfHome")) +
                                        "\n                        "
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
                                        type: "radio",
                                        name: "noOfRoom",
                                        id: noOfRoom,
                                        "data-vv-as": "number of rooms"
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
                                    _vm._v(
                                      "\n                            " +
                                        _vm._s(_vm.errors.first("noOfRoom")) +
                                        "\n                        "
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
                                  type: "number",
                                  placeholder: "Duration of residence..",
                                  name: "duration_of_residence",
                                  "data-vv-as": "duration of residence"
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
                                      "\n                            " +
                                        _vm._s(
                                          _vm.errors.first(
                                            "duration_of_residence"
                                          )
                                        ) +
                                        "\n                        "
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
                                  type: "number",
                                  placeholder: "Enter number here..",
                                  name: "number_in_household",
                                  "data-vv-as": "number in household"
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
                                      "\n                            " +
                                        _vm._s(
                                          _vm.errors.first(
                                            "number_in_household"
                                          )
                                        ) +
                                        "\n                        "
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
                                  type: "number",
                                  placeholder: "Enter number here..",
                                  name: "how_many_work",
                                  "data-vv-as": "how many work"
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
                                      "\n                            " +
                                        _vm._s(
                                          _vm.errors.first("how_many_work")
                                        ) +
                                        "\n                        "
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
                                  type: "number",
                                  placeholder: "Enter number here..",
                                  name: "no_depend_on_you",
                                  "data-vv-as": "no depend on you"
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
                                      "\n                            " +
                                        _vm._s(
                                          _vm.errors.first("no_depend_on_you")
                                        ) +
                                        "\n                        "
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
                                  type: "number",
                                  placeholder: "Enter number here..",
                                  name: "number_of_children",
                                  "data-vv-as": "number of children"
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
                                      "\n                            " +
                                        _vm._s(
                                          _vm.errors.first("number_of_children")
                                        ) +
                                        "\n                        "
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
                                        type: "radio",
                                        name: "highestLevel",
                                        id: highestLevel,
                                        "data-vv-as":
                                          "highest level of education"
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
                                      "\n                            " +
                                        _vm._s(
                                          _vm.errors.first("highestLevel")
                                        ) +
                                        "\n                        "
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
                                  type: "time",
                                  name: "time_from",
                                  "data-vv-as": "time from"
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
                                      "\n                            " +
                                        _vm._s(_vm.errors.first("time_from")) +
                                        "\n                        "
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
                                  type: "time",
                                  name: "time_to",
                                  "data-vv-as": "time to"
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
                                    _vm._v(
                                      "\n                            " +
                                        _vm._s(_vm.errors.first("time_to")) +
                                        "\n                        "
                                    )
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
                                      type: "radio",
                                      name: "otherLoan",
                                      id: "loanYes",
                                      value: "yes",
                                      "data-vv-as": "loan from other"
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
                                      type: "radio",
                                      name: "otherLoan",
                                      id: "loanNo",
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
                                      "\n                            " +
                                        _vm._s(_vm.errors.first("otherLoan")) +
                                        "\n                        "
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
                                              type: "radio",
                                              name: "payBack",
                                              id: "payBackYes",
                                              value: "yes",
                                              "data-vv-as": "did you pay back"
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
                                              type: "radio",
                                              name: "payBack",
                                              id: "payBackNo",
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
                                              "\n                                " +
                                                _vm._s(
                                                  _vm.errors.first("payBack")
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
                                          type: "number",
                                          placeholder: "Enter amount here.."
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
                                  type: "email",
                                  placeholder: "Enter email here"
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
                          _c("h5", [_vm._v("Work Details")]),
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
                                [_vm._v("Employment Status")]
                              ),
                              _vm._v(" "),
                              _vm._l(_vm.employmentStatus, function(status) {
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
                                            _vm.newCustomer.employment_status,
                                          expression:
                                            "newCustomer.employment_status"
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
                                        id: status,
                                        "data-vv-as": "employment status"
                                      },
                                      domProps: {
                                        value: status,
                                        checked: _vm._q(
                                          _vm.newCustomer.employment_status,
                                          status
                                        )
                                      },
                                      on: {
                                        change: function($event) {
                                          _vm.$set(
                                            _vm.newCustomer,
                                            "employment_status",
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
                              _vm.errors.first("status")
                                ? _c("small", [
                                    _vm._v(
                                      "\n                            " +
                                        _vm._s(_vm.errors.first("status")) +
                                        "\n                        "
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
                                          type: "tel",
                                          placeholder:
                                            "Enter Phone Number here",
                                          name: "office_phone",
                                          "data-vv-as": "office phone"
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
                                              "\n                                    " +
                                                _vm._s(
                                                  _vm.errors.first(
                                                    "office_phone"
                                                  )
                                                ) +
                                                "\n                                "
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
                                          type: "text",
                                          placeholder:
                                            "Enter name of company here",
                                          name: "name_of_firm",
                                          "data-vv-as": "name of firm"
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
                                              "\n                                    " +
                                                _vm._s(
                                                  _vm.errors.first(
                                                    "name_of_firm"
                                                  )
                                                ) +
                                                "\n                                "
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
                                          type: "number",
                                          placeholder:
                                            "Current Salary or Monthly income",
                                          name: "current_salary",
                                          "data-vv-as": "current salary"
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
                                              "\n                                    " +
                                                _vm._s(
                                                  _vm.errors.first(
                                                    "current_salary"
                                                  )
                                                ) +
                                                "\n                                "
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
                                          type: "text",
                                          placeholder:
                                            "Enter position/post here"
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
                                                type: "radio",
                                                name: "means",
                                                id: means,
                                                "data-vv-as": "income means"
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
                                              "\n                                    " +
                                                _vm._s(
                                                  _vm.errors.first("means")
                                                ) +
                                                "\n                                "
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
                                                type: "radio",
                                                name: "period",
                                                id: period,
                                                "data-vv-as": "payment period"
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
                                              "\n                                    " +
                                                _vm._s(
                                                  _vm.errors.first("period")
                                                ) +
                                                "\n                                "
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
                                            "data-vv-validate-on": "blur",
                                            name: "work_duration",
                                            "data-vv-as": "work duration"
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
                                              "\n                                    " +
                                                _vm._s(
                                                  _vm.errors.first(
                                                    "work_duration"
                                                  )
                                                ) +
                                                "\n                                "
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
                                                type: "checkbox",
                                                name: "days_of_work",
                                                "data-vv-as": "days of work"
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
                                              "\n                                    " +
                                                _vm._s(
                                                  _vm.errors.first(
                                                    "days_of_work"
                                                  )
                                                ) +
                                                "\n                                "
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
                                          type: "text",
                                          placeholder: "Enter Street name here",
                                          name: "office_street_name",
                                          "data-vv-as": "office street name"
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
                                              "\n                                    " +
                                                _vm._s(
                                                  _vm.errors.first(
                                                    "office_street_name"
                                                  )
                                                ) +
                                                "\n                                "
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
                                          type: "text",
                                          placeholder: "Enter Building Number",
                                          name: "office_building_number",
                                          "data-vv-as": "office building number"
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
                                              "\n                                    " +
                                                _vm._s(
                                                  _vm.errors.first(
                                                    "office_building_number"
                                                  )
                                                ) +
                                                "\n                                "
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
                                          type: "text",
                                          placeholder: "Enter nearest bus stop",
                                          name: "office_nearest_bus_stop",
                                          "data-vv-as":
                                            "office nearest bus stop"
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
                                              "\n                                    " +
                                                _vm._s(
                                                  _vm.errors.first(
                                                    "office_nearest_bus_stop"
                                                  )
                                                ) +
                                                "\n                                "
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
                                          type: "text",
                                          placeholder: "Enter area",
                                          name: "company_area",
                                          "data-vv-as": "company area"
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
                                              "\n                                    " +
                                                _vm._s(
                                                  _vm.errors.first(
                                                    "company_area"
                                                  )
                                                ) +
                                                "\n                                "
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
                                          type: "text",
                                          placeholder: "Enter city",
                                          name: "company_city",
                                          "data-vv-as": "company city"
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
                                              "\n                                    " +
                                                _vm._s(
                                                  _vm.errors.first(
                                                    "company_city"
                                                  )
                                                ) +
                                                "\n                                "
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
                                            name: "company_state",
                                            "data-vv-validate-on": "blur",
                                            "data-vv-as": "company state"
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
                                              "\n                                    " +
                                                _vm._s(
                                                  _vm.errors.first(
                                                    "company_state"
                                                  )
                                                ) +
                                                "\n                                "
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
                                          type: "tel",
                                          placeholder: "Enter city",
                                          name: "company_phone_number",
                                          "data-vv-as": "company phone number"
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
                                              "\n                                    " +
                                                _vm._s(
                                                  _vm.errors.first(
                                                    "company_phone_number"
                                                  )
                                                ) +
                                                "\n                                "
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
                                          type: "time",
                                          name: "available_from",
                                          "data-vv-as": "available from"
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
                                              "\n                                    " +
                                                _vm._s(
                                                  _vm.errors.first(
                                                    "available_from"
                                                  )
                                                ) +
                                                "\n                                "
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
                                          type: "time",
                                          name: "available_to",
                                          "data-vv-as": "available to"
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
                                              "\n                                    " +
                                                _vm._s(
                                                  _vm.errors.first(
                                                    "available_to"
                                                  )
                                                ) +
                                                "\n                                "
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
                                            type: "tel",
                                            placeholder:
                                              "Enter Phone Number here",
                                            name: "office_phone",
                                            "data-vv-as": "office phone"
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
                                                "\n                                    " +
                                                  _vm._s(
                                                    _vm.errors.first(
                                                      "office_phone"
                                                    )
                                                  ) +
                                                  "\n                                "
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
                                            type: "text",
                                            placeholder:
                                              "Enter name of company here",
                                            name: "name_of_firm",
                                            "data-vv-as": "name of firm"
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
                                                "\n                                    " +
                                                  _vm._s(
                                                    _vm.errors.first(
                                                      "name_of_firm"
                                                    )
                                                  ) +
                                                  "\n                                "
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
                                            type: "text",
                                            placeholder: "name of market",
                                            "data-vv-as": "name of market",
                                            name: "market_name"
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
                                                "\n                                    " +
                                                  _vm._s(
                                                    _vm.errors.first(
                                                      "market_name"
                                                    )
                                                  ) +
                                                  "\n                                "
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
                                            type: "number",
                                            placeholder:
                                              "Current Salary or Monthly income",
                                            name: "current_salary",
                                            "data-vv-as": "current salary"
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
                                                "\n                                    " +
                                                  _vm._s(
                                                    _vm.errors.first(
                                                      "current_salary"
                                                    )
                                                  ) +
                                                  "\n                                "
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
                                            type: "number",
                                            placeholder: "monthly gains",
                                            name: "monthly_gains",
                                            "data-vv-as": "monthly gains"
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
                                                "\n                                    " +
                                                  _vm._s(
                                                    _vm.errors.first(
                                                      "monthly_gains"
                                                    )
                                                  ) +
                                                  "\n                                "
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
                                              "data-vv-validate-on": "blur",
                                              name: "work_duration",
                                              "data-vv-as": "years of existence"
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
                                                "\n                                    " +
                                                  _vm._s(
                                                    _vm.errors.first(
                                                      "work_duration"
                                                    )
                                                  ) +
                                                  "\n                                "
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
                                                type: "radio",
                                                name: "bank_account",
                                                id: "bank_account_yes",
                                                value: "Yes",
                                                "data-vv-as": "bank account"
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
                                                type: "radio",
                                                name: "bank_account",
                                                id: "bank_account_no",
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
                                                "\n                                    " +
                                                  _vm._s(
                                                    _vm.errors.first(
                                                      "bank_account"
                                                    )
                                                  ) +
                                                  "\n                                "
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
                                                  type: "checkbox",
                                                  name: "days_of_work",
                                                  "data-vv-as": "days of work"
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
                                                "\n                                    " +
                                                  _vm._s(
                                                    _vm.errors.first(
                                                      "days_of_work"
                                                    )
                                                  ) +
                                                  "\n                                "
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
                                            type: "text",
                                            placeholder:
                                              "Enter Street name here",
                                            name: "office_street_name",
                                            "data-vv-as": "office street name"
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
                                                "\n                                    " +
                                                  _vm._s(
                                                    _vm.errors.first(
                                                      "office_street_name"
                                                    )
                                                  ) +
                                                  "\n                                "
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
                                            type: "text",
                                            placeholder:
                                              "Enter Building Number",
                                            name: "office_building_number",
                                            "data-vv-as":
                                              "office building number"
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
                                                "\n                                    " +
                                                  _vm._s(
                                                    _vm.errors.first(
                                                      "office_building_number"
                                                    )
                                                  ) +
                                                  "\n                                "
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
                                            type: "text",
                                            placeholder:
                                              "Enter nearest bus stop",
                                            name: "office_nearest_bus_stop",
                                            "data-vv-as":
                                              "office nearest bus stop"
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
                                                "\n                                    " +
                                                  _vm._s(
                                                    _vm.errors.first(
                                                      "office_nearest_bus_stop"
                                                    )
                                                  ) +
                                                  "\n                                "
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
                                            type: "text",
                                            placeholder: "Enter area",
                                            name: "company_area",
                                            "data-vv-as": "company area"
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
                                                "\n                                    " +
                                                  _vm._s(
                                                    _vm.errors.first(
                                                      "company_area"
                                                    )
                                                  ) +
                                                  "\n                                "
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
                                            type: "text",
                                            placeholder: "Enter city",
                                            name: "company_city",
                                            "data-vv-as": "company city"
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
                                                "\n                                    " +
                                                  _vm._s(
                                                    _vm.errors.first(
                                                      "company_city"
                                                    )
                                                  ) +
                                                  "\n                                "
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
                                              name: "company_state",
                                              "data-vv-validate-on": "blur",
                                              "data-vv-as": "company state"
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
                                                "\n                                    " +
                                                  _vm._s(
                                                    _vm.errors.first(
                                                      "company_state"
                                                    )
                                                  ) +
                                                  "\n                                "
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
                                            type: "tel",
                                            placeholder: "Enter city",
                                            name: "company_phone_number",
                                            "data-vv-as": "company phone number"
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
                                                "\n                                    " +
                                                  _vm._s(
                                                    _vm.errors.first(
                                                      "company_phone_number"
                                                    )
                                                  ) +
                                                  "\n                                "
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
                                            type: "time",
                                            name: "available_from",
                                            "data-vv-as": "available from"
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
                                                "\n                                    " +
                                                  _vm._s(
                                                    _vm.errors.first(
                                                      "available_from"
                                                    )
                                                  ) +
                                                  "\n                                "
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
                                            type: "time",
                                            name: "available_to",
                                            "data-vv-as": "available to"
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
                                                "\n                                    " +
                                                  _vm._s(
                                                    _vm.errors.first(
                                                      "available_to"
                                                    )
                                                  ) +
                                                  "\n                                "
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
                                  type: "text",
                                  placeholder: "Enter first name",
                                  "data-vv-as": "next of kin first name",
                                  name: "NOK_first_name"
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
                                      "\n                            " +
                                        _vm._s(
                                          _vm.errors.first("NOK_first_name")
                                        ) +
                                        "\n                        "
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
                                  type: "text",
                                  placeholder: "Enter middle name"
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
                                  type: "text",
                                  placeholder: "Enter last name",
                                  "data-vv-as": "next of kin last name",
                                  name: "NOK_last_name"
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
                                      "\n                            " +
                                        _vm._s(
                                          _vm.errors.first("NOK_last_name")
                                        ) +
                                        "\n                        "
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
                                        name: "nokgender",
                                        type: "radio",
                                        id: "nok" + sex,
                                        "data-vv-as": "next of kin gender"
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
                                      "\n                            " +
                                        _vm._s(_vm.errors.first("nokgender")) +
                                        "\n                        "
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
                                  type: "tel",
                                  placeholder: "Enter phone number",
                                  "data-vv-as": "next of kin phone number",
                                  name: "NOK_phone_number"
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
                                      "\n                            " +
                                        _vm._s(
                                          _vm.errors.first("NOK_phone_number")
                                        ) +
                                        "\n                        "
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
                                      "\n                            " +
                                        _vm._s(
                                          _vm.errors.first("NOK_work_duration")
                                        ) +
                                        "\n                        "
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
                                        type: "radio",
                                        name: "relationship",
                                        id: rela,
                                        "data-vv-as": "next of kin relationship"
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
                                      "\n                            " +
                                        _vm._s(
                                          _vm.errors.first("relationship")
                                        ) +
                                        "\n                        "
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
                  _c("div", { staticClass: "spaceBetween" }),
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
                    _vm._v("Work Guarantor Personal Info\n                ")
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
                                type: "text",
                                placeholder: "Enter first name",
                                "data-vv-as": "work guarantors first name",
                                name: "WG_first_name"
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
                                    "\n                            " +
                                      _vm._s(
                                        _vm.errors.first("WG_first_name")
                                      ) +
                                      "\n                        "
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
                                type: "text",
                                placeholder: "Enter middle name"
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
                                type: "text",
                                placeholder: "Enter last name",
                                "data-vv-as": "work guarantors last name",
                                name: "WG_last_name"
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
                                    "\n                            " +
                                      _vm._s(_vm.errors.first("WG_last_name")) +
                                      "\n                        "
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
                                      type: "radio",
                                      name: "relationshipwg",
                                      id: rela + "wg",
                                      "data-vv-as":
                                        "work guarantor relationship"
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
                                    "\n                            " +
                                      _vm._s(
                                        _vm.errors.first("relationshipwg")
                                      ) +
                                      "\n                        "
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
                                      name: "wggender",
                                      type: "radio",
                                      id: "gua" + sex,
                                      "data-vv-as": "work guanrantor gender"
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
                                  _vm._v(
                                    "\n                            " +
                                      _vm._s(_vm.errors.first("wggender")) +
                                      "\n                        "
                                  )
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
                                type: "text",
                                placeholder: "Enter Street name here",
                                "data-vv-as": "work guarantor street",
                                name: "work_guarantor_street_name"
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
                                    "\n                            " +
                                      _vm._s(
                                        _vm.errors.first(
                                          "work_guarantor_street_name"
                                        )
                                      ) +
                                      "\n                        "
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
                                type: "text",
                                placeholder: "Enter Building Number",
                                "data-vv-as": "work guarantor office building",
                                name: "work_guarantor_office_building"
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
                                    "\n                            " +
                                      _vm._s(
                                        _vm.errors.first(
                                          "work_guarantor_office_building"
                                        )
                                      ) +
                                      "\n                        "
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
                                type: "text",
                                placeholder: "Enter nearest bus stop",
                                "data-vv-as": "work guarantor bus stop",
                                name: "work_guarantor_bus_stop"
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
                                    "\n                            " +
                                      _vm._s(
                                        _vm.errors.first(
                                          "work_guarantor_bus_stop"
                                        )
                                      ) +
                                      "\n                        "
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
                                type: "text",
                                placeholder: "Enter area",
                                "data-vv-as": "work guarantor area",
                                name: "work_guarantor_area"
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
                                    "\n                            " +
                                      _vm._s(
                                        _vm.errors.first("work_guarantor_area")
                                      ) +
                                      "\n                        "
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
                                type: "text",
                                placeholder: "Enter city",
                                "data-vv-as": "work guarantor city",
                                name: "work_guarantor_city"
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
                                    "\n                            " +
                                      _vm._s(
                                        _vm.errors.first("work_guarantor_city")
                                      ) +
                                      "\n                        "
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
                                    "\n                            " +
                                      _vm._s(
                                        _vm.errors.first("work_guarantor_state")
                                      ) +
                                      "\n                        "
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
                                type: "tel",
                                placeholder: "Enter city",
                                "data-vv-as": "work guarantor phone",
                                name: "work_guarantor_phone"
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
                                    "\n                            " +
                                      _vm._s(
                                        _vm.errors.first("work_guarantor_phone")
                                      ) +
                                      "\n                        "
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
                                    "\n                            " +
                                      _vm._s(
                                        _vm.errors.first(
                                          "work_guarantor_work_duration"
                                        )
                                      ) +
                                      "\n                        "
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
                        _c("div", { staticClass: "spaceBetween" })
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
                    _vm._v("Personal Guarantor Personal Info\n                ")
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
                                type: "text",
                                placeholder: "Enter first name",
                                "data-vv-as": "first name",
                                name: "PG_first_name"
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
                                    "\n                            " +
                                      _vm._s(
                                        _vm.errors.first("PG_first_name")
                                      ) +
                                      "\n                        "
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
                                type: "text",
                                placeholder: "Enter middle name"
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
                                type: "text",
                                placeholder: "Enter last name",
                                "data-vv-as": "last name",
                                name: "PG_last_name"
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
                                    "\n                            " +
                                      _vm._s(_vm.errors.first("PG_last_name")) +
                                      "\n                        "
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
                                      type: "radio",
                                      name: "relationshippg",
                                      id: rela + "pg",
                                      "data-vv-as":
                                        "personal guarantor relationship"
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
                                    "\n                            " +
                                      _vm._s(
                                        _vm.errors.first("relationshippg")
                                      ) +
                                      "\n                        "
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
                                      name: "pggender",
                                      type: "radio",
                                      id: "pg" + sex,
                                      "data-vv-as": "personal guarantor gender"
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
                                  _vm._v(
                                    "\n                            " +
                                      _vm._s(_vm.errors.first("pggender")) +
                                      "\n                        "
                                  )
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
                                type: "text",
                                placeholder: "Enter Street name here",
                                "data-vv-as": "street number",
                                name: "pguaadd_street"
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
                                    "\n                            " +
                                      _vm._s(
                                        _vm.errors.first("pguaadd_street")
                                      ) +
                                      "\n                        "
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
                                type: "text",
                                placeholder: "Enter Building Number",
                                "data-vv-as": "office building address",
                                name: "pguaadd_houseno"
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
                                    "\n                            " +
                                      _vm._s(
                                        _vm.errors.first("pguaadd_houseno")
                                      ) +
                                      "\n                        "
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
                                type: "text",
                                placeholder: "Enter nearest bus stop",
                                "data-vv-as": "per. guarantor nearest stop",
                                name: "pguaadd_nbstop"
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
                                    "\n                            " +
                                      _vm._s(
                                        _vm.errors.first("pguaadd_nbstop")
                                      ) +
                                      "\n                        "
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
                                type: "text",
                                placeholder: "Enter area",
                                "data-vv-as": "personal guarantor area",
                                name: "pgua_area"
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
                                  _vm._v(
                                    "\n                            " +
                                      _vm._s(_vm.errors.first("pgua_area")) +
                                      "\n                        "
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
                                type: "text",
                                placeholder: "Enter city",
                                "data-vv-as": "personal guarantor city",
                                name: "personal_guarantor_city"
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
                                    "\n                            " +
                                      _vm._s(
                                        _vm.errors.first(
                                          "personal_guarantor_city"
                                        )
                                      ) +
                                      "\n                        "
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
                                    "\n                            " +
                                      _vm._s(
                                        _vm.errors.first(
                                          "personal_guarantor_state"
                                        )
                                      ) +
                                      "\n                        "
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
                                type: "tel",
                                placeholder: "Enter city",
                                "data-vv-as": "per. guarantor phone",
                                name: "personal_guarantor_telno"
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
                                    "\n                            " +
                                      _vm._s(
                                        _vm.errors.first(
                                          "personal_guarantor_telno"
                                        )
                                      ) +
                                      "\n                        "
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
                                    "\n                            " +
                                      _vm._s(
                                        _vm.errors.first(
                                          "personal_guarantor_work_duration"
                                        )
                                      ) +
                                      "\n                        "
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
                  _vm.ifReg(_vm.action)
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
                                type: "text",
                                placeholder: "Enter Product name",
                                "data-vv-as": "what product do you need",
                                name: "what_product_do_you_need"
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
                                    "\n                            " +
                                      _vm._s(
                                        _vm.errors.first(
                                          "what_product_do_you_need"
                                        )
                                      ) +
                                      "\n                        "
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
                                type: "text",
                                placeholder: "Enter Reason..",
                                "data-vv-as": "what do you need it for",
                                name: "what_do_you_need_it_for"
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
                                    "\n                            " +
                                      _vm._s(
                                        _vm.errors.first(
                                          "what_do_you_need_it_for"
                                        )
                                      ) +
                                      "\n                        "
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
                            _c(
                              "label",
                              { staticClass: "w-100 float-left pl-1" },
                              [_vm._v("Category")]
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "radio p-0 col-6 float-left" },
                              [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.isLifestyle,
                                      expression: "isLifestyle"
                                    }
                                  ],
                                  attrs: { type: "radio", id: "lifestyle" },
                                  domProps: {
                                    value: true,
                                    checked: _vm._q(_vm.isLifestyle, true)
                                  },
                                  on: {
                                    change: function($event) {
                                      _vm.isLifestyle = true
                                    }
                                  }
                                }),
                                _vm._v(" "),
                                _c("label", { attrs: { for: "lifestyle" } }, [
                                  _vm._v("lifestyle")
                                ])
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "radio p-0 col-6 float-left" },
                              [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.isLifestyle,
                                      expression: "isLifestyle"
                                    }
                                  ],
                                  attrs: { type: "radio", id: "appliance" },
                                  domProps: {
                                    value: false,
                                    checked: _vm._q(_vm.isLifestyle, false)
                                  },
                                  on: {
                                    change: function($event) {
                                      _vm.isLifestyle = false
                                    }
                                  }
                                }),
                                _vm._v(" "),
                                _c("label", { attrs: { for: "appliance" } }, [
                                  _vm._v("appliance")
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
                                  disabled: "",
                                  "data-vv-as": "office branch",
                                  name: "branch_id",
                                  "data-vv-validate-on": "blur"
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
                                  _vm._v(
                                    "\n                            " +
                                      _vm._s(_vm.errors.first("branch_id")) +
                                      "\n                        "
                                  )
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
                          attrs: { type: "submit", disabled: _vm.$isProcessing }
                        },
                        [
                          _vm._v(
                            "\n                        " +
                              _vm._s(_vm._f("capitalize")(_vm.action)) +
                              " Customer "
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
    require("vue-hot-reload-api")      .rerender("data-v-051c502b", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-07317a72\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/views/DVA/verification/verification.vue":
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
                    return _vm.fetchCustomer($event)
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
                            attrs: { type: "submit", disabled: _vm.check }
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
                  _c("customer-profile", { attrs: { customer: _vm.customer } }),
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
                                                  "\n                                    by - " +
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
                                  href: "javascript:",
                                  "data-dismiss": "modal",
                                  "aria-label": "Close"
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
                                          type: "button",
                                          "data-dismiss": "modal"
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
                                          type: "submit",
                                          disabled: _vm.$isProcessing
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
                              _c("table", { staticClass: "mb-3 w-100" }, [
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
                                      _vm._v(_vm._s(_vm.customerAddress))
                                    ])
                                  ])
                                ])
                              ]),
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
                                          type: "date",
                                          name: "date_of_visit",
                                          "data-vv-as": "date of visit"
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
                                          type: "time",
                                          name: "time_of_visit",
                                          "data-vv-as": "time of visit"
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
                                          type: "radio",
                                          name: "customer_meetup",
                                          id: "yes",
                                          value: "yes",
                                          "data-vv-as": "customer meetup"
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
                                          type: "radio",
                                          name: "customer_meetup",
                                          id: "no",
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
                                        "\n                                            2. Is the address/location same with what you have in the application form?\n                                        "
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
                                          name: "confirm_address",
                                          type: "radio",
                                          id: "add_yes",
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
                                          name: "confirm_address",
                                          type: "radio",
                                          id: "add_no",
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
                                        type: "text",
                                        placeholder: "comment here...",
                                        name: "what_he_sells",
                                        "data-vv-as": "what he sells"
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
                                        "4. Look around the shop and check the nature and condition of the\n                                               business. Write down what you see in terms of address, stock value, premise, type of shop or business, sales etc."
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c("textarea", {
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
                                          value: _vm.address.business_info,
                                          expression: "address.business_info"
                                        }
                                      ],
                                      staticClass: "form-control",
                                      attrs: {
                                        placeholder: "comment here...",
                                        rows: "1",
                                        name: "business_info",
                                        "data-vv-as": "business info"
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
                                        "5. Get exact information of choice of product and specification by asking for\n                                               Example; what exact phone do you want? Let him/her specify e.g. INFINIX\n                                               SMART or HOT 4 IPHONE\n                                        "
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c("textarea", {
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
                                          value: _vm.address.product_info,
                                          expression: "address.product_info"
                                        }
                                      ],
                                      staticClass: "form-control w-100",
                                      attrs: {
                                        placeholder: "comment here...",
                                        rows: "1",
                                        "data-vv-as": "product info",
                                        name: "product_info"
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
                                          name: "aware_of_plan",
                                          type: "radio",
                                          "data-vv-as": "aware of plan",
                                          id: "pay_yes",
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
                                          name: "aware_of_plan",
                                          type: "radio",
                                          id: "pay_no",
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
                                          name: "info_from_neighbors",
                                          type: "radio",
                                          "data-vv-as": "info from neighbors",
                                          id: "neigh_yes",
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
                                          name: "info_from_neighbors",
                                          type: "radio",
                                          id: "neigh_no",
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
                                                name: "validate",
                                                rawName: "v-validate",
                                                value: "required",
                                                expression: "'required'"
                                              },
                                              {
                                                name: "model",
                                                rawName: "v-model",
                                                value:
                                                  _vm.address
                                                    .info_from_neighbors_desc,
                                                expression:
                                                  "address.info_from_neighbors_desc"
                                              }
                                            ],
                                            staticClass: "form-control",
                                            attrs: {
                                              placeholder: "comment here...",
                                              rows: "1",
                                              name: "info_from_neighbors_desc",
                                              "data-vv-as":
                                                "info from neighbors desc"
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
                                        "8. And how long has he/she been working/trading in that particular place?\n                                        "
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c("textarea", {
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
                                          value:
                                            _vm.address
                                              .business_or_work_duration,
                                          expression:
                                            "address.business_or_work_duration"
                                        }
                                      ],
                                      staticClass: "form-control",
                                      attrs: {
                                        placeholder: "address",
                                        rows: "1",
                                        name: "business_or_work_duration",
                                        "data-vv-as":
                                          "business or work duration"
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
                                                type: "submit",
                                                disabled: _vm.$isProcessing
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
                                                    type: "submit",
                                                    disabled: _vm.$isProcessing
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
                                  href: "javascript:",
                                  "data-dismiss": "modal",
                                  "aria-label": "Close"
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
                                      ? _c("table", { staticClass: "mb-3" }, [
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
                                              _vm.customer[type + "_first_name"]
                                                ? _c("td", [
                                                    _vm._v(
                                                      "\n                                            " +
                                                        _vm._s(
                                                          _vm.customer[
                                                            type + "_first_name"
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
                                                      )
                                                    )
                                                  ])
                                                : _c("td", [
                                                    _vm._v(
                                                      "please update customer details!"
                                                    )
                                                  ])
                                            ])
                                          ])
                                        ])
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
                                                      type: "date",
                                                      name: "date_of_call"
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
                                                      type: "date",
                                                      name: "date_of_call"
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
                                                      type: "time",
                                                      name: "time_of_call"
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
                                                      type: "time",
                                                      name: "time_collected"
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
                                                        type: "radio",
                                                        id: type + "_yes",
                                                        value: "1",
                                                        name: "consent"
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
                                                        type: "radio",
                                                        id: type + "_no",
                                                        value: "0",
                                                        name: "consent"
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
                                                        type: "number",
                                                        disabled: "",
                                                        name: "amount"
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
                                              placeholder: "comment here...",
                                              rows: "3",
                                              name: "report"
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
                                                type: "button",
                                                "data-dismiss": "modal"
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
                                                type: "submit",
                                                disabled: _vm.$isProcessing
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

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-3b07ec64\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/customerProfile.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "customer-profile card position-relative" }, [
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
              staticClass: "justify-content-center d-flex position-relative z-1"
            },
            [
              _c("span", { staticClass: "img-border" }, [
                _vm.customer.document.passport_url
                  ? _c("img", {
                      staticClass: "profile-picture rounded-circle",
                      attrs: {
                        src:
                          "https://s3.eu-west-2.amazonaws.com/altara-one/" +
                          _vm.customer.document.passport_url,
                        alt: "customer profile pic"
                      }
                    })
                  : _c("i", { staticClass: "no-image fas fa-user-alt" })
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
                _vm._m(0),
                _vm._v(" "),
                _c("div", { staticClass: "data text-right px-4 py-3 m-0" }, [
                  _vm._v(
                    _vm._s(_vm._f("capitalize")(_vm.customer.employment_status))
                  )
                ])
              ]),
              _vm._v(" "),
              _c("span", { staticClass: "separator" }),
              _vm._v(" "),
              _c("span", { staticClass: "w-50" }, [
                _vm._m(1),
                _vm._v(" "),
                _c("div", { staticClass: "data px-4 py-3 m-0" }, [
                  _vm._v(_vm._s(_vm._f("capitalize")(_vm.customer.gender)))
                ])
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
              staticClass: "float-left p-0 m-0 col-md-4 col-sm-6 small-center"
            },
            [
              _c(
                "h4",
                {
                  staticClass: "mt-0 pt-md-5 pt-sm-4 pt-0 mb-md-5 mb-sm-4 mb-3"
                },
                [
                  _c("i", { staticClass: "mr-3 far fa-user-circle" }),
                  _vm._v(" "),
                  _c("strong", [
                    _vm._v(
                      _vm._s(
                        _vm._f("capitalize")(
                          _vm.customer.first_name + " " + _vm.customer.last_name
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
                    _vm._v("Customer ID: " + _vm._s(_vm.customer.id))
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
              _vm.approved
                ? _c(
                    "span",
                    {
                      staticClass:
                        "status mt-md-5 my-sm-2 mt-0 approved shadow-sm"
                    },
                    [
                      _vm._v("\n                    APPROVED"),
                      _c("i", { staticClass: "ml-3 fas fa-check" })
                    ]
                  )
                : _c(
                    "span",
                    {
                      staticClass:
                        "status mt-md-5 my-sm-2 mt-0 not-approved shadow-sm"
                    },
                    [
                      _vm._v("\n                    NOT APPROVED"),
                      _c("i", { staticClass: "ml-3 fas fa-times" })
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
                _vm._m(2),
                _vm._v(" "),
                _c("td", [_vm._v(_vm._s(_vm.customer.telephone))])
              ]),
              _vm._v(" "),
              _c("tr", [
                _vm._m(3),
                _vm._v(" "),
                _c("td", [
                  _vm._v(
                    _vm._s(
                      _vm._f("capitalize")(
                        _vm.customer.add_houseno +
                          " " +
                          _vm.customer.add_street +
                          " " +
                          _vm.customer.area_address +
                          ", " +
                          _vm.customer.city +
                          ", " +
                          _vm.customer.state +
                          "."
                      )
                    ) + "\n                    "
                  )
                ])
              ]),
              _vm._v(" "),
              _c("tr", [
                _vm._m(4),
                _vm._v(" "),
                _c("td", [_vm._v(_vm._s(_vm.customer.date_of_registration))])
              ]),
              _vm._v(" "),
              _c("tr", [
                _vm._m(5),
                _vm._v(" "),
                _c("td", [
                  _vm._v(
                    _vm._s(_vm._f("capitalize")(_vm.customer.user.full_name))
                  )
                ])
              ]),
              _vm._v(" "),
              _c("tr", [
                _vm._m(6),
                _vm._v(" "),
                _c("td", [
                  _vm._v(
                    _vm._s(
                      _vm._f("capitalize")(
                        _vm.customer.branch.description +
                          " " +
                          _vm.customer.branch.name
                      )
                    )
                  )
                ])
              ])
            ])
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
    return _c(
      "div",
      { staticClass: "text-right px-4 py-3 text-light text-muted m-0" },
      [
        _vm._v("\n                        Status"),
        _c("i", { staticClass: "ml-3 fas fa-briefcase" })
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "px-4 py-3 text-muted text-light m-0" }, [
      _c("i", { staticClass: "mr-3 fas fa-transgender" }),
      _vm._v("Gender\n                    ")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("th", { staticClass: "text-muted" }, [
      _c("i", { staticClass: "mr-3 fas fa-mobile-alt" }),
      _vm._v("Phone Number")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("th", { staticClass: "text-muted" }, [
      _c("i", { staticClass: "mr-3 fas fa-map-marker-alt" }),
      _vm._v("Address")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("th", { staticClass: "text-muted" }, [
      _c("i", { staticClass: "mr-3 fas fa-gift" }),
      _vm._v("Registered On")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("th", { staticClass: "text-muted" }, [
      _c("i", { staticClass: "mr-3 far fa-user-circle" }),
      _vm._v("Registered By")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("th", { staticClass: "text-muted" }, [
      _c("i", { staticClass: "mr-3 far fa-building" }),
      _vm._v("Branch")
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-3b07ec64", module.exports)
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

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-07317a72\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/views/DVA/verification/verification.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-07317a72\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/views/DVA/verification/verification.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("a7d0a87e", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-07317a72\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./verification.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-07317a72\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./verification.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3b07ec64\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/customerProfile.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3b07ec64\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/customerProfile.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("6dcd5458", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3b07ec64\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./customerProfile.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3b07ec64\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./customerProfile.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
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

/***/ "./resources/assets/js/components/customerProfile.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3b07ec64\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/customerProfile.vue")
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"babel-preset-env\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"babel-plugin-syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/customerProfile.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-3b07ec64\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/customerProfile.vue")
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
Component.options.__file = "resources\\assets\\js\\components\\customerProfile.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3b07ec64", Component.options)
  } else {
    hotAPI.reload("data-v-3b07ec64", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/js/helpers/form.js":
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
      console.log(details);
      /*get(`/api/message/create?to=234${details.phone}&message=${this.message}`).then(res => {
         let data = JSON.parse(res.data);
         if (data.messages[0].status.groupId === 1) {
            console.log("sms sent successfully");
         }
      });*/
   }
};

/***/ }),

/***/ "./resources/assets/js/views/DSA/utility/form.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"babel-preset-env\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"babel-plugin-syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/views/DSA/utility/form.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-051c502b\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/views/DSA/utility/form.vue")
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
Component.options.__file = "resources\\assets\\js\\views\\DSA\\utility\\form.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-051c502b", Component.options)
  } else {
    hotAPI.reload("data-v-051c502b", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/js/views/DVA/verification/verification.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-07317a72\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/views/DVA/verification/verification.vue")
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"babel-preset-env\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"babel-plugin-syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/views/DVA/verification/verification.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-07317a72\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/views/DVA/verification/verification.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-07317a72"
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


/***/ })

});