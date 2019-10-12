<<<<<<< HEAD
<<<<<<< HEAD

webpackJsonp([2],{

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


/***/ })

});
=======
webpackJsonp([2],{"1gIg":function(t,e,a){var s=a("VU/8")(a("wBhk"),a("9sZT"),!1,null,null,null);t.exports=s.exports},"3o0A":function(t,e,a){var s=a("VU/8")(a("NOe0"),a("4GFf"),!1,null,null,null);t.exports=s.exports},"4GFf":function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("transition",{attrs:{name:"fade"}},[a("div",{staticClass:"pt-md-3 pt-2 verification",attrs:{id:"employeeRegister"}},[a("div",{staticClass:"card"},[a("ul",{staticClass:"nav nav-tabs bg-default justify-content-center"},[a("h6",[t._v(t._s(t._f("capitalize")(t.action))+" Customer")])]),t._v(" "),a("div",{staticClass:"card-body p-4"},[a("form",{on:{submit:function(e){return e.preventDefault(),t.processForm(e)}}},[a("div",{staticClass:"m-0 p-0 col-12 form-group clearfix"},[a("label",{staticClass:"w-100"},[t._v("Customer ID")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.customer_id,expression:"customer_id"},{name:"validate",rawName:"v-validate",value:"required|numeric",expression:"'required|numeric'"}],staticClass:"form-control col-lg-9 col-md-8 col-sm-8 col-12 float-left mt-1",attrs:{"data-vv-as":"customer id",name:"customer_id"},domProps:{value:t.customer_id},on:{onkeyUp:t.check,input:function(e){e.target.composing||(t.customer_id=e.target.value)}}}),t._v(" "),a("div",{staticClass:"col-lg-3 col-md-4 col-sm-4 col-12 float-right px-md-3 mt-md-0 px-sm-3 mt-sm-0 mt-2 px-0"},[a("button",{staticClass:"btn btn-block bg-default my-1",attrs:{disabled:t.check,type:"submit"}},[t._v("\n                                Fetch customer details "),a("i",{staticClass:"far fa-paper-plane ml-1"})])]),t._v(" "),t.errors.first("customer_id")?a("small",{staticClass:"form-text text-muted w-100"},[t._v("\n                            "+t._s(t.errors.first("customer_id"))+"\n                        ")]):t._e()])])])]),t._v(" "),a("transition",{attrs:{name:"fade"}},[t.customer?a("div",[a("customer-profile",{attrs:{"view-customer":t.customer}}),t._v(" "),"update"!==t.action?a("div",[t._l(t.cardView,function(e){return a("div",{staticClass:"float-left col-lg-3 col-sm-6 px-0 px-sm-3"},[a("div",{staticClass:"card card-stats",class:t.DivClass(e)},[a("div",{staticClass:"card-body "},[a("div",{staticClass:"statistics statistics-horizontal"},[a("div",{staticClass:"info info-horizontal"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-4"},[a("div",{staticClass:"icon icon-warning icon-circle position-relative"},[a("i",{staticClass:"fas",class:t.IconClass(e)})])]),t._v(" "),a("div",{staticClass:"col-8 text-right"},[a("h4",{staticClass:"info-title font-weight-bold mb-0"},[t._v(t._s(t._f("capitalize")(e)))]),t._v(" "),a("h6",{staticClass:"stats-title"},[t._v("\n                                                    "+t._s(t.key(e)?"Verified":"Not Verified")+"\n                                                ")])])])])])]),t._v(" "),a("div",{staticClass:"card-footer pointer",on:{click:function(a){t.modal(e+"_modal")}}},[a("i",{staticClass:"now-ui-icons ui-1_calendar-60 pr-1"}),t._v("\n                                "+t._s(t.key(e)?"Verified":"Not Verified")+"\n                                "),t.key(e)?a("span",{staticClass:"float-right",staticStyle:{"font-size":"10px"}},[t._v("\n                                        by - "+t._s(t._f("capitalize")("passport"==e||"id_card"==e?t.customer.document.staff_name:t.customer[e].staff_name))+"\n                                ")]):a("small",[t._v("(Click here to update status!)")])])])])}),t._v(" "),a("hr",{staticClass:"style-two"})],2):t._e()],1):t._e()]),t._v(" "),"update"!==t.action?a("div",[t._l(t.picsView,function(e){return a("div",{staticClass:"modal fade",attrs:{id:e+"_modal"}},[a("div",{staticClass:"modal-dialog"},[a("div",{staticClass:"modal-content"},[a("div",{staticClass:"modal-header py-2"},[a("h6",{staticClass:"modal-title py-1"},[t._v(t._s(t._f("capitalize")(e))+" Verification Status")]),t._v(" "),a("a",{staticClass:"close py-1",attrs:{"aria-label":"Close","data-dismiss":"modal",href:"javascript:"}},[a("span",{staticClass:"modal-close text-danger",attrs:{"aria-hidden":"true"}},[a("i",{staticClass:"fas fa-times"})])])]),t._v(" "),t.customer?a("form",{on:{submit:function(a){a.preventDefault(),t.save(e,e+"_modal")}}},[a("div",{staticClass:"modal-body"},[a("div",{staticClass:"upload-image p-2"},[a("div",{staticClass:"upload-box"},[a("image-upload",{model:{value:t.$data.form[e],callback:function(a){t.$set(t.$data.form,e,a)},expression:"$data['form'][type]"}})],1)]),t._v(" "),t.error[e]?a("small",[t._v(t._s(t.error[e][0]))]):t._e()]),t._v(" "),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"m-2 btn btn-secondary",attrs:{"data-dismiss":"modal",type:"button"}},[t._v("\n                                    cancel\n                                ")]),t._v(" "),a("button",{staticClass:"m-2 btn bg-default",attrs:{disabled:t.$isProcessing,type:"submit"}},[t._v("\n                                    Save changes "),a("i",{staticClass:"far fa-paper-plane ml-1"})])])]):t._e()])])])}),t._v(" "),a("div",{staticClass:"modal fade",attrs:{id:"address_modal"}},[a("div",{staticClass:"modal-dialog modal-lg"},[a("div",{staticClass:"modal-content"},[a("div",{staticClass:"modal-header py-2"},[a("h6",{staticClass:"modal-title py-1"},[t._v("Address Verification Status")]),t._v(" "),a("a",{staticClass:" py-1",staticStyle:{"min-height":"30px","min-width":"30px"},on:{click:function(e){t.modal("address_modal")}}},[a("span",{staticClass:"text-danger"},[a("i",{staticClass:"fas fa-times"})])])]),t._v(" "),a("form",{attrs:{"data-vv-scope":"address"},on:{submit:function(e){e.preventDefault(),t.validate("address")}}},[a("div",{staticClass:"modal-body p-5"},[a("table",{staticClass:"mb-3 w-100 info-table"},[a("tbody",{staticClass:"px-3"},[a("tr",[a("th",[a("i",{staticClass:"fas fa-map-marker-alt mx-4"})]),t._v(" "),a("td",[t._v(t._s(t.$getCustomerAddress(t.customer)))])])])]),t._v(" "),a("div",{staticClass:"w-100 p-3"},[a("div",{staticClass:"clearfix"},[a("div",{staticClass:"form-group float-left col-md-6 col-12 pr-md-3 pr-0 pl-0"},[a("label",[t._v("Date of Visitation")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.address.date_of_visit,expression:"address.date_of_visit"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",attrs:{"data-vv-as":"date of visit",name:"date_of_visit",type:"date"},domProps:{value:t.address.date_of_visit},on:{input:function(e){e.target.composing||t.$set(t.address,"date_of_visit",e.target.value)}}}),t._v(" "),t.errors.first("address.date_of_visit")?a("small",[t._v("\n                                                "+t._s(t.errors.first("address.date_of_visit"))+"\n                                            ")]):t._e()]),t._v(" "),a("div",{staticClass:"form-group float-left  col-md-6 col-12  pl-md-3 pl-0 pr-0"},[a("label",[t._v("Time of Visit")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.address.time_of_visit,expression:"address.time_of_visit"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",attrs:{"data-vv-as":"time of visit",name:"time_of_visit",type:"time"},domProps:{value:t.address.time_of_visit},on:{input:function(e){e.target.composing||t.$set(t.address,"time_of_visit",e.target.value)}}}),t._v(" "),t.errors.first("address.time_of_visit")?a("small",[t._v("\n                                                "+t._s(t.errors.first("address.time_of_visit"))+"\n                                            ")]):t._e()])]),t._v(" "),a("div",{staticClass:"form-group clearfix"},[a("label",[t._v("1. Did you meet the customer?")]),t._v(" "),a("span",{staticClass:"radio mx-5"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.address.customer_meetup,expression:"address.customer_meetup"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{"data-vv-as":"customer meetup",id:"yes",name:"customer_meetup",type:"radio",value:"yes"},domProps:{checked:t._q(t.address.customer_meetup,"yes")},on:{change:function(e){t.$set(t.address,"customer_meetup","yes")}}}),t._v(" "),a("label",{attrs:{for:"yes"}},[t._v("Yes")])]),t._v(" "),a("span",{staticClass:"radio ml-5"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.address.customer_meetup,expression:"address.customer_meetup"}],attrs:{id:"no",name:"customer_meetup",type:"radio",value:"no"},domProps:{checked:t._q(t.address.customer_meetup,"no")},on:{change:function(e){t.$set(t.address,"customer_meetup","no")}}}),t._v(" "),a("label",{attrs:{for:"no"}},[t._v("No")])]),t._v(" "),t.errors.first("address.customer_meetup")?a("small",[t._v("\n                                            "+t._s(t.errors.first("address.customer_meetup"))+"\n                                        ")]):t._e()]),t._v(" "),a("div",{staticClass:"form-group clearfix"},[a("label",[t._v("\n                                            2. Is the address/location same with what you have in the application\n                                            form?\n                                        ")]),t._v(" "),a("span",{staticClass:"radio mx-5"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.address.confirm_address,expression:"address.confirm_address"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{"data-vv-as":"confirm address",id:"add_yes",name:"confirm_address",type:"radio",value:"yes"},domProps:{checked:t._q(t.address.confirm_address,"yes")},on:{change:function(e){t.$set(t.address,"confirm_address","yes")}}}),t._v(" "),a("label",{attrs:{for:"add_yes"}},[t._v("Yes")])]),t._v(" "),a("span",{staticClass:"radio ml-5"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.address.confirm_address,expression:"address.confirm_address"}],attrs:{id:"add_no",name:"confirm_address",type:"radio",value:"no"},domProps:{checked:t._q(t.address.confirm_address,"no")},on:{change:function(e){t.$set(t.address,"confirm_address","no")}}}),t._v(" "),a("label",{attrs:{for:"add_no"}},[t._v("No")])]),t._v(" "),t.errors.first("address.confirm_address")?a("small",[t._v("\n                                            "+t._s(t.errors.first("address.confirm_address"))+"\n                                        ")]):t._e()]),t._v(" "),a("div",{staticClass:"form-group clearfix"},[a("label",[t._v("3. What does he/she do or sell?")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.address.what_he_sells,expression:"address.what_he_sells"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",attrs:{"data-vv-as":"what he sells",name:"what_he_sells",placeholder:"comment here...",type:"text"},domProps:{value:t.address.what_he_sells},on:{input:function(e){e.target.composing||t.$set(t.address,"what_he_sells",e.target.value)}}}),t._v(" "),t.errors.first("address.what_he_sells")?a("small",[t._v("\n                                            "+t._s(t.errors.first("address.what_he_sells"))+"\n                                        ")]):t._e()]),t._v(" "),a("div",{staticClass:"form-group clearfix"},[a("label",[t._v("4. Look around the shop and check the nature and condition of the\n                                            business. Write down what you see in terms of address, stock value,\n                                            premise, type of shop or business, sales etc.")]),t._v(" "),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.address.business_info,expression:"address.business_info"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",attrs:{"data-vv-as":"business info",name:"business_info",placeholder:"comment here...",rows:"1"},domProps:{value:t.address.business_info},on:{input:function(e){e.target.composing||t.$set(t.address,"business_info",e.target.value)}}}),t._v(" "),t.errors.first("address.business_info")?a("small",[t._v("\n                                            "+t._s(t.errors.first("address.business_info"))+"\n                                        ")]):t._e()]),t._v(" "),a("div",{staticClass:"form-group clearfix"},[a("label",[t._v("5. Get exact information of choice of product and specification by\n                                            asking for\n                                            Example; what exact phone do you want? Let him/her specify e.g. INFINIX\n                                            SMART or HOT 4 IPHONE\n                                        ")]),t._v(" "),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.address.product_info,expression:"address.product_info"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control w-100",attrs:{"data-vv-as":"product info",name:"product_info",placeholder:"comment here...",rows:"1"},domProps:{value:t.address.product_info},on:{input:function(e){e.target.composing||t.$set(t.address,"product_info",e.target.value)}}}),t._v(" "),t.errors.first("address.product_info")?a("small",[t._v("\n                                            "+t._s(t.errors.first("address.product_info"))+"\n                                        ")]):t._e()]),t._v(" "),a("div",{staticClass:"form-group clearfix"},[a("label",[t._v("\n                                            6. Are you aware of the payment plan?\n                                        ")]),t._v(" "),a("span",{staticClass:"radio mx-5"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.address.aware_of_plan,expression:"address.aware_of_plan"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{"data-vv-as":"aware of plan",id:"pay_yes",name:"aware_of_plan",type:"radio",value:"yes"},domProps:{checked:t._q(t.address.aware_of_plan,"yes")},on:{change:function(e){t.$set(t.address,"aware_of_plan","yes")}}}),t._v(" "),a("label",{attrs:{for:"pay_yes"}},[t._v("yes")])]),t._v(" "),a("span",{staticClass:"radio ml-5"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.address.aware_of_plan,expression:"address.aware_of_plan"}],attrs:{id:"pay_no",name:"aware_of_plan",type:"radio",value:"no"},domProps:{checked:t._q(t.address.aware_of_plan,"no")},on:{change:function(e){t.$set(t.address,"aware_of_plan","no")}}}),t._v(" "),a("label",{attrs:{for:"pay_no"}},[t._v("no")])]),t._v(" "),t.errors.first("address.aware_of_plan")?a("small",[t._v("\n                                            "+t._s(t.errors.first("address.aware_of_plan"))+"\n                                        ")]):t._e()]),t._v(" "),a("div",{staticClass:"form-group clearfix"},[a("label",[t._v("\n                                            7. Did you get information about the customer from his/her neighbours?\n                                        ")]),t._v(" "),a("span",{staticClass:"radio mx-5"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.info_from_neighbors,expression:"info_from_neighbors"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{"data-vv-as":"info from neighbors",id:"neigh_yes",name:"info_from_neighbors",type:"radio",value:"yes"},domProps:{checked:t._q(t.info_from_neighbors,"yes")},on:{change:function(e){t.info_from_neighbors="yes"}}}),t._v(" "),a("label",{attrs:{for:"neigh_yes"}},[t._v("yes")])]),t._v(" "),a("span",{staticClass:"radio ml-5"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.info_from_neighbors,expression:"info_from_neighbors"}],attrs:{id:"neigh_no",name:"info_from_neighbors",type:"radio",value:"no"},domProps:{checked:t._q(t.info_from_neighbors,"no")},on:{change:function(e){t.info_from_neighbors="no"}}}),t._v(" "),a("label",{attrs:{for:"neigh_no"}},[t._v("no")])]),t._v(" "),t.errors.first("address.info_from_neighbors")?a("small",[t._v("\n                                            "+t._s(t.errors.first("address.info_from_neighbors"))+"\n                                        ")]):t._e(),t._v(" "),"yes"==t.info_from_neighbors?a("div",[a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.address.info_from_neighbors_desc,expression:"address.info_from_neighbors_desc"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",attrs:{"data-vv-as":"info from neighbors desc",name:"info_from_neighbors_desc",placeholder:"comment here...",rows:"1"},domProps:{value:t.address.info_from_neighbors_desc},on:{input:function(e){e.target.composing||t.$set(t.address,"info_from_neighbors_desc",e.target.value)}}}),t._v(" "),t.errors.first("address.info_from_neighbors_desc")?a("small",[t._v("\n                                                "+t._s(t.errors.first("address.info_from_neighbors_desc"))+"\n                                            ")]):t._e()]):t._e()]),t._v(" "),a("div",{staticClass:"form-group clearfix"},[a("label",[t._v("8. And how long has he/she been working/trading in that particular\n                                            place?\n                                        ")]),t._v(" "),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.address.business_or_work_duration,expression:"address.business_or_work_duration"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",attrs:{"data-vv-as":"business or work duration",name:"business_or_work_duration",placeholder:"address",rows:"1"},domProps:{value:t.address.business_or_work_duration},on:{input:function(e){e.target.composing||t.$set(t.address,"business_or_work_duration",e.target.value)}}}),t._v(" "),t.errors.first("address.business_or_work_duration")?a("small",[t._v("\n                                            "+t._s(t.errors.first("address.business_or_work_duration"))+"\n                                        ")]):t._e()]),t._v(" "),t.addressBtns?a("div",[a("div",{staticClass:"w-100 clearfix"},[a("button",{staticClass:"btn btn-success btn-lg btn-block",attrs:{disabled:t.$isProcessing,type:"submit"},on:{click:function(e){t.address.approval_status=1}}},[t._v("\n                                                Successful - Update Details\n                                                "),a("i",{staticClass:"far fa-paper-plane ml-1"})])]),t._v(" "),a("div",{staticClass:"pt-2 w-100 clearfix"},[a("div",{staticClass:"pr-2 pl-md-0 pl-2 col-md-6 col-12 m-0 float-left"},[a("button",{staticClass:"m-0 btn btn-lg btn-block btn-secondary",attrs:{type:"button"},on:{click:function(e){t.modal("address_modal")}}},[t._v("\n                                                    Cancel\n                                                ")])]),t._v(" "),a("div",{staticClass:"pl-2 pr-md-0 pr-2 col-md-6 col-12 float-left"},[a("button",{staticClass:"m-0 btn btn-lg btn-block btn-primary",attrs:{disabled:t.$isProcessing,type:"submit"},on:{click:function(e){t.address.approval_status=0}}},[t._v("\n                                                    Not-Successful - Update Details\n                                                    "),a("i",{staticClass:"far fa-paper-plane ml-1"})])])])]):a("h5",[t._v("\n                                        This customers details has already been updated once and cannot be changed!\n                                    ")])])])])])])]),t._v(" "),t._l(t.veriView,function(e){return a("div",{staticClass:"modal fade",attrs:{id:e+"_modal"}},[a("div",{staticClass:"modal-dialog"},[a("div",{staticClass:"modal-content"},[a("div",{staticClass:"modal-header py-2"},[a("h6",{staticClass:"modal-title py-1"},[t._v("\n                                "+t._s(t._f("capitalize")(e))+" "+t._s("processing_fee"!==e?"Verification":"")+" Status\n                            ")]),t._v(" "),a("a",{staticClass:"close py-1",attrs:{"aria-label":"Close","data-dismiss":"modal",href:"javascript:"}},[a("span",{staticClass:"modal-close text-danger"},[a("i",{staticClass:"fas fa-times"})])])]),t._v(" "),t.customer?a("form",{attrs:{"data-vv-scope":e},on:{submit:function(a){a.preventDefault(),t.validate(e)}}},[a("div",{staticClass:"modal-body"},["processing_fee"!==e?a("table",{staticClass:"mb-3 info-table"},[a("tbody",[a("tr",[a("th",[a("i",{staticClass:"fas fa-map-marker-alt"})]),t._v(" "),t.customer[e+"_state"]?a("td",[t._v(t._s(t.$data[e+"_address"]))]):a("td",[t._v("please update customer details!")])]),t._v(" "),a("tr",[a("th",[a("i",{staticClass:"fas fa-mobile-alt"})]),t._v(" "),t.customer[e+"_telno"]?a("td",[t._v(t._s(t.customer[e+"_telno"]))]):a("td",[t._v("please update customer details!")])]),t._v(" "),a("tr",[a("th",[a("i",{staticClass:" fas fa-user-circle"})]),t._v(" "),t.customer[e+"_first_name"]?a("td",[t._v("\n                                            "+t._s(t.customer[e+"_first_name"]+" "+t.customer[e+"_last_name"])+"\n                                        ")]):a("td",[t._v("please update customer details!")])]),t._v(" "),a("tr",[a("th",[a("i",{staticClass:"fas fa-user-circle"})]),t._v(" "),t.customer[e+"_relationship"]?a("td",[t._v(t._s(t._f("capitalize")(t.customer[e+"_relationship"]))+"\n                                        ")]):a("td",[t._v("please update customer details!")])])])]):t._e(),t._v(" "),a("div",{staticClass:"form-group col-12 px-2 clearfix my-0"},[a("div",{staticClass:"clearfix"},[a("div",{staticClass:"form-group float-left col-md-6 col-12 pr-md-3 pr-0 pl-0"},[a("label",[t._v("\n                                                Date "+t._s("processing_fee"!==e?"of Call":"Collected")+"\n                                            ")]),t._v(" "),a("input","processing_fee"!==e?{directives:[{name:"model",rawName:"v-model",value:t.$data[e].date_of_call,expression:"$data[type].date_of_call"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",attrs:{name:"date_of_call",type:"date"},domProps:{value:t.$data[e].date_of_call},on:{input:function(a){a.target.composing||t.$set(t.$data[e],"date_of_call",a.target.value)}}}:{directives:[{name:"model",rawName:"v-model",value:t.$data[e].date_collected,expression:"$data[type].date_collected"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",attrs:{name:"date_of_call",type:"date"},domProps:{value:t.$data[e].date_collected},on:{input:function(a){a.target.composing||t.$set(t.$data[e],"date_collected",a.target.value)}}}),t._v(" "),t.errors.first(e+".date_of_call")?a("small",[t._v("\n                                                "+t._s(t.errors.first(e+".date_of_call"))+"\n                                            ")]):t._e(),t._v(" "),t.errors.first(e+".date_collected")?a("small",[t._v("\n                                                "+t._s(t.errors.first(e+".date_collected"))+"\n                                            ")]):t._e()]),t._v(" "),a("div",{staticClass:"form-group float-left col-md-6 col-12 pl-md-3 pl-0 pr-0"},[a("label",[t._v("\n                                                Time "+t._s("processing_fee"!==e?"of Call":"Collected")+"\n                                            ")]),t._v(" "),a("input","processing_fee"!==e?{directives:[{name:"model",rawName:"v-model",value:t.$data[e].time_of_call,expression:"$data[type].time_of_call"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",attrs:{name:"time_of_call",type:"time"},domProps:{value:t.$data[e].time_of_call},on:{input:function(a){a.target.composing||t.$set(t.$data[e],"time_of_call",a.target.value)}}}:{directives:[{name:"model",rawName:"v-model",value:t.$data[e].time_collected,expression:"$data[type].time_collected"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",attrs:{name:"time_collected",type:"time"},domProps:{value:t.$data[e].time_collected},on:{input:function(a){a.target.composing||t.$set(t.$data[e],"time_collected",a.target.value)}}}),t._v(" "),t.errors.first(e+".time_of_call")?a("small",[t._v("\n                                                "+t._s(t.errors.first(e+".time_of_call"))+"\n                                            ")]):t._e(),t._v(" "),t.errors.first(e+".time_collected")?a("small",[t._v("\n                                                "+t._s(t.errors.first(e+".time_collected"))+"\n                                            ")]):t._e()])]),t._v(" "),a("div",{staticClass:"clearfix"},[a("label",{staticClass:"w-100"},[t._v("\n                                            "+t._s(t._f("capitalize")(e))+"\n                                            "+t._s("processing_fee"!==e?"Consent":"Amount(Naira)")+"\n                                        ")]),t._v(" "),a("div","processing_fee"!==e?[a("div",{staticClass:"radio p-0 col-6 float-left"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.$data[e].consent,expression:"$data[type].consent"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{id:e+"_yes",name:"consent",type:"radio",value:"1"},domProps:{checked:t._q(t.$data[e].consent,"1")},on:{change:function(a){t.$set(t.$data[e],"consent","1")}}}),t._v(" "),a("label",{attrs:{for:e+"_yes"}},[t._v("Gave Consent")])]),t._v(" "),a("div",{staticClass:"radio p-0 col-6 float-left"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.$data[e].consent,expression:"$data[type].consent"}],attrs:{id:e+"_no",name:"consent",type:"radio",value:"0"},domProps:{checked:t._q(t.$data[e].consent,"0")},on:{change:function(a){t.$set(t.$data[e],"consent","0")}}}),t._v(" "),a("label",{attrs:{for:e+"_no"}},[t._v("Did not Give Consent")])]),t._v(" "),t.errors.first(e+".consent")?a("small",[t._v("\n                                                "+t._s(t.errors.first(e+".consent"))+"\n                                            ")]):t._e()]:[a("div",{staticClass:"radio p-0 col-6 float-left"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.$data[e].amount,expression:"$data[type].amount"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",attrs:{disabled:"",name:"amount",type:"number"},domProps:{value:t.$data[e].amount},on:{input:function(a){a.target.composing||t.$set(t.$data[e],"amount",a.target.value)}}})]),t._v(" "),t.errors.first(e+".amount")?a("small",[t._v("\n                                                "+t._s(t.errors.first(e+".amount"))+"\n                                            ")]):t._e()])]),t._v(" "),a("div",{staticClass:"clearfix"},[a("label",[t._v("Report")]),t._v(" "),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.$data[e].report,expression:"$data[type].report"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control w-100",attrs:{name:"report",placeholder:"comment here...",rows:"3"},domProps:{value:t.$data[e].report},on:{input:function(a){a.target.composing||t.$set(t.$data[e],"report",a.target.value)}}}),t._v(" "),t.errors.first(e+".report")?a("small",[t._v("\n                                            "+t._s(t.errors.first(e+".report"))+"\n                                        ")]):t._e()])])]),t._v(" "),t.$data[e+"Btns"]?a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"m-2 btn btn-secondary",attrs:{"data-dismiss":"modal",type:"button"}},[t._v("cancel\n                                ")]),t._v(" "),a("button",{staticClass:"m-2 btn bg-default",attrs:{disabled:t.$isProcessing,type:"submit"}},[t._v("\n                                    Save changes "),a("i",{staticClass:"far fa-paper-plane ml-1"})])]):a("div",{staticClass:"modal-footer"},[a("h5",[t._v("This customers details has already been updated once and cannot be changed!")])])]):t._e()])])])})],2):t._e()],1)])},staticRenderFns:[]}},"4I72":function(t,e,a){var s=a("VU/8")(a("WiSW"),a("r37U"),!1,null,null,null);t.exports=s.exports},"9sZT":function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h4",{staticClass:"mx-md-3 mx-0 py-0 my-0 text-center clearfix",attrs:{id:"app-navigation"}},[t.$routerHistory.hasPrevious()?a("router-link",{staticClass:"text-secondary float-left ml-1 pl-2 ml-sm-4 pl-sm-3",attrs:{to:t.previous,id:"back"}},[a("span",{staticClass:"mr-5 float-left"},[a("i",{staticClass:"far fa-arrow-alt-circle-left float-left"}),t._v(" "),a("small",{staticClass:"float-left ml-2 d-none d-sm-block"},[t._v("Back")])])]):t._e(),t._v(" "),a("strong",{staticClass:"mx-auto w-100 float-left",attrs:{"data-title":"title"}},[a("span",{staticClass:"d-none d-sm-block"},[t._v(t._s(t.pageTitle))]),t._v(" "),a("span",{staticClass:"d-block d-sm-none"},[t._v(t._s(t.pageTitleSmall))])]),t._v(" "),t.$routerHistory.hasForward()?a("router-link",{staticClass:"text-secondary float-right mr-1 pr-2 mr-sm-4 pr-sm-3",attrs:{to:t.forward,id:"forward"}},[a("span",{staticClass:"ml-5 float-right"},[a("i",{staticClass:"far fa-arrow-alt-circle-right float-right"}),t._v(" "),a("small",{staticClass:"float-right mr-2 d-none d-sm-block"},[t._v("Forward")])])]):t._e()],1)},staticRenderFns:[]}},APzg:function(t,e,a){var s=a("VU/8")(a("nT0B"),a("RQTH"),!1,null,null,null);t.exports=s.exports},KUZS:function(t,e,a){var s=a("VU/8")(a("Wk+m"),a("xosg"),!1,null,null,null);t.exports=s.exports},NOe0:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=f(a("Xxa5")),r=f(a("I3G/")),o=a("ic49"),i=f(a("K23+")),n=a("m2tk"),l=a("p/p5"),d=a("nv24"),c=a("hyG2"),u=f(a("KUZS")),m=f(a("4I72"));function f(t){return t&&t.__esModule?t:{default:t}}function v(t){return function(){var e=t.apply(this,arguments);return new Promise(function(t,a){return function s(r,o){try{var i=e[r](o),n=i.value}catch(t){return void a(t)}if(!i.done)return Promise.resolve(n).then(function(t){s("next",t)},function(t){s("throw",t)});t(n)}("next")})}}var p=function(t){return"/api/customer/"+t.id};e.default={props:{action:{default:"verify"}},components:{ImageUpload:u.default,CustomerProfile:m.default},data:function(){return{customer:null,customer_id:"",addressBtns:!0,work_guarantorBtns:!0,personal_guarantorBtns:!0,processing_feeBtns:!0,info_from_neighbors:"",address:{},work_guarantor:{},personal_guarantor:{},processing_fee:{},picsView:["id_card","passport"],veriView:["work_guarantor","personal_guarantor","processing_fee"],veriData:["address","work_guarantor","personal_guarantor","processing_fee"],cardView:["passport","id_card","address","work_guarantor","personal_guarantor","processing_fee"],verification:{},form:{id_card:"",passport:"",document:""},error:{},storeURL:"",user:{},work_guarantor_address:"",personal_guarantor_address:""}},beforeRouteEnter:function(t,e,a){var s=t.query;s.id?(0,l.get)(p(s)).then(function(t){return a(function(e){return e.updateView(t.data)})}).catch(function(t){return a(function(e){return e.updateView(t.response.data)})}):a()},beforeRouteUpdate:function(t,e,a){var s=t.query,r=this;s.id?(0,l.get)(p(s)).then(function(t){return r.updateView(t.data)}).catch(function(t){return r.updateView(t.response.data)}).finally(function(){return a()}):a()},methods:{modal:function(t){$("#"+t).modal("toggle"),this.errors.clear(t)},key:function(t){return this.customer.verification[t]},IconClass:function(t){return{"fa-check":this.key(t),"fa-times":!this.key(t)}},DivClass:function(t){return{success:this.key(t),"no-success":!this.key(t)}},updateView:function(t){var e=this;this.user=t.hasOwnProperty("user")?t.user:null,r.default.set(this.$data,"customer",t.customer),this.$emit("update",t.customer),d.EventBus.$emit("customer",t.customer),t.customer?(this.verification=JSON.parse(JSON.stringify(t.customer.verification)),this.form.id_card=t.customer.document.id_card_url,this.form.passport=t.customer.document.passport_url,this.work_guarantor_address=this.customer.guaadd_houseno+",\n                    "+this.customer.guaadd_street+",\n                    "+this.customer.gua_area+",\n                    "+this.customer.work_guarantor_city+",\n                    "+this.customer.work_guarantor_state,this.personal_guarantor_address=this.customer.pguaadd_houseno+",\n                    "+this.customer.pguaadd_street+",\n                    "+this.customer.pgua_area+",\n                    "+this.customer.personal_guarantor_city+",\n                    "+this.customer.personal_guarantor_state,this.veriData.forEach(function(a){e[a+"Btns"]=!t.customer[a],e[a]=t.customer[a]?t.customer[a]:t["empty_"+a]})):i.default.setError(t.message,5e3)},done:function(){if(this.$getCustomerApprovalStatus(this.verification)){var t="Dear "+this.$getCustomerFullName(this.customer)+", Congratulations, You have been approved. Come to the store to make a purchase. Altara Credit Limited.";new n.Message(t,this.customer.telephone,!0,this.user.id).send()}},processForm:function(){var t=this;"verification"===this.$route.name&&this.$router.push("verification?id="+this.customer_id),"customerUpdate"===this.$route.name&&(this.$router.push("update?id="+this.customer_id),(0,l.get)(p(this.$route.query)).then(function(e){return t.updateView(e.data)}).catch(function(e){return t.updateView(e.response.data)}))},validate:function(t){var e,a=this;if(this.$network()){if(this.$LIPS(!0),this.veriView.includes(t)&&!this.customer.work_guarantor_first_name)return this.modal(t+"_modal"),this.$LIPS(!1),this.$scrollToTop(),void i.default.setError("Can not process verification. Update the customer guarantors details and try again!",1e4);"no"===this.info_from_neighbors&&(this.address.info_from_neighbors_desc=""),this[t].customer_id=this.customer.id,this[t].user_id=this.user.id,this[t].staff_name=this.user.full_name,this.$validator.validateAll(t).then((e=v(s.default.mark(function e(r){return s.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!r){e.next=7;break}return e.next=3,(0,l.post)("/api/"+t,a[t]).then(function(e){var s=e.data;a.updateView(s.response);var r="Customer ID : "+a.customer.id,n=a.$options.filters.capitalize(t),l="Customer"+n+"Verification";"address"===t&&(l+=a.address.approval_status?"Passed":"NotPassed"),(0,o.log)(l,r),i.default.setSuccess(n+" status updated!"),a.modal(t+"_modal"),a.done()}).catch(function(t){return i.default.setError(t.response.data.message)});case 3:a.$LIPS(!1),a.$scrollToTop(),e.next=8;break;case 7:a.$networkErr("form");case 8:case"end":return e.stop()}},e,a)})),function(t){return e.apply(this,arguments)}))}else this.$networkErr()},save:function(){var t=v(s.default.mark(function t(e,a){var r,n=this;return s.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this.storeURL="/api/document/"+this.customer.document.id+"?_method=PUT&document="+e,this.$LIPS(!0),this.form.document=e,r=(0,c.toMulipartedForm)(this.form,"edit"),t.next=6,(0,l.post)(this.storeURL,r).then(function(t){var s=t.data;n.updateView(s.response),(0,o.log)("Customer"+n.$options.filters.capitalize(e)+"Upload","Customer ID : "+n.customer.id),n.modal(a),i.default.setSuccess("Document Updated Successfully!"),n.done()}).catch(function(t){return n.error=t.response.data.errors});case 6:this.$LIPS(!1),this.$scrollToTop();case 8:case"end":return t.stop()}},t,this)}));return function(e,a){return t.apply(this,arguments)}}()},computed:{check:function(){return!(!this.$isProcessing&&this.customer_id)}},mounted:function(){var t=this;$(document).on("hidden.bs.modal",".modal",function(){t.verification=JSON.parse(JSON.stringify(t.customer.verification))})}}},RQTH:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.image?a("div",{staticClass:"position-relative"},[a("img",{attrs:{src:t.image}}),t._v(" "),a("button",{staticClass:"btn btn-danger upload-close m-0 px-3 py-2",on:{click:function(e){e.preventDefault(),t.$emit("close")}}},[a("i",{staticClass:"fas fa-times text-white"})])]):t._e()},staticRenderFns:[]}},SldL:function(t,e){!function(e){"use strict";var a,s=Object.prototype,r=s.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",n=o.asyncIterator||"@@asyncIterator",l=o.toStringTag||"@@toStringTag",d="object"==typeof t,c=e.regeneratorRuntime;if(c)d&&(t.exports=c);else{(c=e.regeneratorRuntime=d?t.exports:{}).wrap=b;var u="suspendedStart",m="suspendedYield",f="executing",v="completed",p={},_={};_[i]=function(){return this};var h=Object.getPrototypeOf,g=h&&h(h(L([])));g&&g!==s&&r.call(g,i)&&(_=g);var y=$.prototype=C.prototype=Object.create(_);x.prototype=y.constructor=$,$.constructor=x,$[l]=x.displayName="GeneratorFunction",c.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===x||"GeneratorFunction"===(e.displayName||e.name))},c.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,$):(t.__proto__=$,l in t||(t[l]="GeneratorFunction")),t.prototype=Object.create(y),t},c.awrap=function(t){return{__await:t}},k(P.prototype),P.prototype[n]=function(){return this},c.AsyncIterator=P,c.async=function(t,e,a,s){var r=new P(b(t,e,a,s));return c.isGeneratorFunction(e)?r:r.next().then(function(t){return t.done?t.value:r.next()})},k(y),y[l]="Generator",y[i]=function(){return this},y.toString=function(){return"[object Generator]"},c.keys=function(t){var e=[];for(var a in t)e.push(a);return e.reverse(),function a(){for(;e.length;){var s=e.pop();if(s in t)return a.value=s,a.done=!1,a}return a.done=!0,a}},c.values=L,E.prototype={constructor:E,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=a,this.done=!1,this.delegate=null,this.method="next",this.arg=a,this.tryEntries.forEach(S),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=a)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function s(s,r){return n.type="throw",n.arg=t,e.next=s,r&&(e.method="next",e.arg=a),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],n=i.completion;if("root"===i.tryLoc)return s("end");if(i.tryLoc<=this.prev){var l=r.call(i,"catchLoc"),d=r.call(i,"finallyLoc");if(l&&d){if(this.prev<i.catchLoc)return s(i.catchLoc,!0);if(this.prev<i.finallyLoc)return s(i.finallyLoc)}else if(l){if(this.prev<i.catchLoc)return s(i.catchLoc,!0)}else{if(!d)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return s(i.finallyLoc)}}}},abrupt:function(t,e){for(var a=this.tryEntries.length-1;a>=0;--a){var s=this.tryEntries[a];if(s.tryLoc<=this.prev&&r.call(s,"finallyLoc")&&this.prev<s.finallyLoc){var o=s;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,p):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var a=this.tryEntries[e];if(a.finallyLoc===t)return this.complete(a.completion,a.afterLoc),S(a),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var a=this.tryEntries[e];if(a.tryLoc===t){var s=a.completion;if("throw"===s.type){var r=s.arg;S(a)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,s){return this.delegate={iterator:L(t),resultName:e,nextLoc:s},"next"===this.method&&(this.arg=a),p}}}function b(t,e,a,s){var r=e&&e.prototype instanceof C?e:C,o=Object.create(r.prototype),i=new E(s||[]);return o._invoke=function(t,e,a){var s=u;return function(r,o){if(s===f)throw new Error("Generator is already running");if(s===v){if("throw"===r)throw o;return O()}for(a.method=r,a.arg=o;;){var i=a.delegate;if(i){var n=N(i,a);if(n){if(n===p)continue;return n}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if(s===u)throw s=v,a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);s=f;var l=w(t,e,a);if("normal"===l.type){if(s=a.done?v:m,l.arg===p)continue;return{value:l.arg,done:a.done}}"throw"===l.type&&(s=v,a.method="throw",a.arg=l.arg)}}}(t,a,i),o}function w(t,e,a){try{return{type:"normal",arg:t.call(e,a)}}catch(t){return{type:"throw",arg:t}}}function C(){}function x(){}function $(){}function k(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function P(t){var e;this._invoke=function(a,s){function o(){return new Promise(function(e,o){!function e(a,s,o,i){var n=w(t[a],t,s);if("throw"!==n.type){var l=n.arg,d=l.value;return d&&"object"==typeof d&&r.call(d,"__await")?Promise.resolve(d.__await).then(function(t){e("next",t,o,i)},function(t){e("throw",t,o,i)}):Promise.resolve(d).then(function(t){l.value=t,o(l)},i)}i(n.arg)}(a,s,e,o)})}return e=e?e.then(o,o):o()}}function N(t,e){var s=t.iterator[e.method];if(s===a){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=a,N(t,e),"throw"===e.method))return p;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var r=w(s,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,p;var o=r.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=a),e.delegate=null,p):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,p)}function q(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function S(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function E(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(q,this),this.reset(!0)}function L(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var s=-1,o=function e(){for(;++s<t.length;)if(r.call(t,s))return e.value=t[s],e.done=!1,e;return e.value=a,e.done=!0,e};return o.next=o}}return{next:O}}function O(){return{value:a,done:!0}}}(function(){return this}()||Function("return this")())},WiSW:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i(a("I3G/")),r=(a("N71M"),a("nv24")),o=i(a("1gIg"));function i(t){return t&&t.__esModule?t:{default:t}}e.default={props:["viewCustomer"],components:{AppNavigation:o.default},data:function(){return{customer:"",show:!1}},computed:{full:function(){return"full"===this.$route.meta.mode},passport:function(){return"https://s3.eu-west-2.amazonaws.com/altara-one/"+this.customer.document.passport_url},branch:function(){return this.customer.branch.description+" "+this.customer.branch.name},approved:function(){return this.$getCustomerApprovalStatus(this.customer.verification)}},created:function(){var t=this;$(".tooltip").remove(),this.viewCustomer&&this.setCustomer(this.viewCustomer),r.EventBus.$on("customer",function(e){return t.setCustomer(e)})},methods:{setCustomer:function(t){s.default.set(this.$data,"customer",t),this.show=!0}}}},"Wk+m":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s,r=a("APzg"),o=(s=r)&&s.__esModule?s:{default:s};e.default={components:{ImagePreview:o.default},props:{value:{type:[String,File],default:null},usage:{type:[String],default:"verification"}},methods:{upload:function(t){var e=t.target.files;e&&e.length>0&&this.$emit("input",e[0])}}}},Xxa5:function(t,e,a){t.exports=a("jyFz")},hyG2:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};function r(t,e,a){var o=e||new FormData,i=void 0;for(var n in t)if(t.hasOwnProperty(n))if(i=a?a+"["+n+"]":n,t[n]instanceof Array)for(var l=0;l<t[n].length;l++)r(t[n][l],o,n+"["+l+"]");else"object"!==s(t[n])||t[n]instanceof File?o.append(i,t[n]):r(t[n],o,n);return o}e.toMulipartedForm=function(t,e){if("edit"===e&&"string"==typeof t.image){var a=JSON.parse(JSON.stringify(t));return delete a.image,a}return r(t)},e.objectToFormData=r},ic49:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.log=function(t,e){t=t.replace(/([A-Z])/g," $1").replace(/^./,function(t){return t.toUpperCase()}),(0,s.post)("/api/log",{action:t,description:e})};var s=a("p/p5")},jyFz:function(t,e,a){var s=function(){return this}()||Function("return this")(),r=s.regeneratorRuntime&&Object.getOwnPropertyNames(s).indexOf("regeneratorRuntime")>=0,o=r&&s.regeneratorRuntime;if(s.regeneratorRuntime=void 0,t.exports=a("SldL"),r)s.regeneratorRuntime=o;else try{delete s.regeneratorRuntime}catch(t){s.regeneratorRuntime=void 0}},m2tk:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Message=void 0;var s=function(){function t(t,e){for(var a=0;a<e.length;a++){var s=e[a];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}return function(e,a,s){return a&&t(e.prototype,a),s&&t(e,s),e}}(),r=a("p/p5");e.Message=function(){function t(e,a){var s=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.user_id=r,this.message=e,this.logToDB=s,this.contacts=a.split(",").filter(function(t){return/\S/.test(t)}).map(function(t){return"234"+t.trim().substr(1)}).join(","),this.setPages(),this.setContactCount()}return s(t,[{key:"setContactCount",value:function(){this.contact_count=this.contacts.split(",").length}},{key:"setPages",value:function(){this.pages=Math.ceil(this.message.length/160)}},{key:"send",value:function(t){var e=this;(0,r.get)("/api/message/create?to="+this.contacts+"&message="+this.message).then(function(a){return 200===a.status&&e.logToDB&&(delete e.logToDB,(0,r.post)("/api/message",e)),!!t&&t(a)}).catch(function(e){return!!t&&t(e)})}}]),t}()},nT0B:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{preview:{type:[String,File],default:null}},data:function(){return{image:null}},created:function(){this.setPreview()},watch:{preview:"setPreview"},methods:{setPreview:function(){var t=this;if(this.preview instanceof File){var e=new FileReader;e.onload=function(e){t.image=e.target.result},e.readAsDataURL(this.preview)}else"string"==typeof this.preview?this.image="https://s3.eu-west-2.amazonaws.com/altara-one/"+this.preview:this.image=null}}}},nv24:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.EventBus=void 0;var s,r=a("I3G/"),o=(s=r)&&s.__esModule?s:{default:s};e.EventBus=new o.default},r37U:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("transition",{attrs:{name:"fade"}},[a("div",{class:t.full&&"px-md-4 px-2"},[t.full?a("app-navigation",{attrs:{forward:{path:t.$routerHistory.next().path},previous:{path:t.$routerHistory.previous().path},pageTitle:"Customer Profile",pageTitleSmall:"Customer Profile"}}):t._e(),t._v(" "),t.show?a("div",{staticClass:"pt-md-3 pt-2 verification",attrs:{id:"employeeRegister"}},[a("div",{staticClass:"customer-profile card position-relative"},[a("div",{staticClass:"design"}),t._v(" "),a("div",{staticClass:"col-md-4 col-sm-4 col-12 px-0 pb-md-4 pb-sm-3 pb-0 pt-md-5 pt-4 float-left"},[a("div",{staticClass:"pt-md-3 pt-sm-2 pt-1"},[a("div",{staticClass:"justify-content-center d-flex position-relative z-1"},[a("span",{staticClass:"img-border"},[t.customer.document.passport_url?a("img",{staticClass:"profile-picture rounded-circle",attrs:{src:t.passport,alt:"customer profile pic"}}):a("i",{staticClass:"no-image fas fa-user-alt"})])]),t._v(" "),a("div",{staticClass:"justify-content-center d-flex position-relative z-1 pt-md-4 pt-sm-4 pt-2"},[a("span",{staticClass:"w-50"},[a("div",{staticClass:"text-right px-4 py-3 text-light text-muted m-0"},[t._v("\n                                    Status"),a("i",{staticClass:"ml-3 fas fa-briefcase"})]),t._v(" "),a("div",{staticClass:"data text-right px-4 py-3 m-0"},[t._v(t._s(t._f("capitalize")(t.customer.employment_status)))])]),t._v(" "),a("span",{staticClass:"separator"}),t._v(" "),a("span",{staticClass:"w-50"},[a("div",{staticClass:"px-4 py-3 text-muted text-light m-0"},[a("i",{staticClass:"mr-3 fas fa-transgender"}),t._v("Gender\n                                ")]),t._v(" "),a("div",{staticClass:"data px-4 py-3 m-0"},[t._v(t._s(t._f("capitalize")(t.customer.gender)))])])])])]),t._v(" "),a("div",{staticClass:"col-md-8 col-sm-8 col-12 px-0 pb-4 pt-md-5 pt-sm-5 pt-0 float-left"},[a("div",{staticClass:"pt-md-4 pt-0 clearfix"},[a("div",{staticClass:"float-left p-0 m-0 col-md-4 col-sm-6 small-center"},[a("h4",{staticClass:"mt-0 pt-md-5 pt-sm-4 pt-0 mb-md-5 mb-sm-4 mb-3"},[a("i",{staticClass:"mr-3 far fa-user-circle"}),t._v(" "),a("strong",[t._v(t._s(t._f("capitalize")(t.$getCustomerFullName(t.customer))))])])]),t._v(" "),a("div",{staticClass:"float-left p-0 m-0 col-md-4 col-sm-6 d-flex justify-content-center"},[a("h4",{staticClass:"mt-0 pt-md-5 pt-sm-4 pt-0 mb-md-5 mb-sm-4 mb-4 text-muted"},[a("strong",[t._v("Customer ID: "+t._s(t.customer.id))])])]),t._v(" "),a("div",{staticClass:"float-left p-0 m-0 col-md-4 col-12 d-flex justify-content-center"},[a("span",{class:"status mt-md-5 my-sm-2 mt-0 "+(t.approved?"approved":"not-approved")},[t._v("\n                                "+t._s(t.approved?"APPROVED":"NOT APPROVED")+"\n                                "),a("i",{class:"ml-3 fas fa-"+(t.approved?"check":"times")})])])]),t._v(" "),a("div",{staticClass:"pt-4"},[a("table",{staticClass:"table"},[a("tbody",[a("tr",[a("th",{staticClass:"text-muted"},[a("i",{staticClass:"mr-3 fas fa-mobile-alt"}),t._v("Phone Number")]),t._v(" "),a("td",[t._v(t._s(t.customer.telephone))])]),t._v(" "),t.$store.getters.auth("DVAAccess")?a("tr",[a("th",{staticClass:"text-muted"},[a("i",{staticClass:"mr-3 fas fa-map-marker-alt"}),t._v("Address")]),t._v(" "),a("td",[t._v(t._s(t._f("capitalize")(t.$getCustomerAddress(t.customer)))+"\n                                ")])]):t._e(),t._v(" "),a("tr",[a("th",{staticClass:"text-muted"},[a("i",{staticClass:"mr-3 fas fa-gift"}),t._v("Registered On")]),t._v(" "),a("td",[t._v(t._s(t.customer.date_of_registration))])]),t._v(" "),a("tr",[a("th",{staticClass:"text-muted"},[a("i",{staticClass:"mr-3 far fa-user-circle"}),t._v("Registered By")]),t._v(" "),a("td",[t._v(t._s(t._f("capitalize")(t.customer.user?t.customer.user.full_name:"user not in record"))+"\n                                ")])]),t._v(" "),a("tr",[a("th",{staticClass:"text-muted"},[a("i",{staticClass:"mr-3 far fa-building"}),t._v("Branch")]),t._v(" "),a("td",[t._v(t._s(t._f("capitalize")(t.branch)))])])])])])])]),t._v(" "),t.full?a("div",[t._v("Full profile goes here")]):t._e()]):t._e()],1)])},staticRenderFns:[]}},wBhk:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["pageTitle","pageTitleSmall","previous","forward"]}},xosg:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"image"},[t.value&&"verification"===t.usage?a("image-preview",{attrs:{preview:t.value},on:{close:function(e){t.$emit("input",null)}}}):a("div",[a("input",{attrs:{type:"file",accept:"images/*"},on:{change:t.upload}})])],1)},staticRenderFns:[]}}});
>>>>>>> 3b6f3e88764ac65706212613df83edc0b1107b38
=======
webpackJsonp([2],{"+O4B":function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mt-5 attendance-head"},[a("div",{staticClass:"mb-5 row align-items-center"},[a("div",{staticClass:"col-12 title-con"},[a("span",{staticClass:"title"},[t._v(t._s(t._f("capitalize")(t.title)))]),t._v(" "),t.to?a("div",{staticClass:"row justify-content-end"},[a("router-link",{staticClass:"text-link mt-3",attrs:{to:t.to}},[t._v(t._s(t.buttonTitle))])],1):t._e()])])])},staticRenderFns:[]}},"1gIg":function(t,e,a){var r=a("VU/8")(a("wBhk"),a("9sZT"),!1,null,null,null);t.exports=r.exports},"4I72":function(t,e,a){var r=a("VU/8")(a("WiSW"),a("r37U"),!1,null,null,null);t.exports=r.exports},"9sZT":function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h4",{staticClass:"mx-md-3 mx-0 py-0 my-0 text-center clearfix",attrs:{id:"app-navigation"}},[t.$routerHistory.hasPrevious()?a("router-link",{staticClass:"text-secondary float-left ml-1 pl-2 ml-sm-4 pl-sm-3",attrs:{to:t.previous,id:"back"}},[a("span",{staticClass:"mr-5 float-left"},[a("i",{staticClass:"far fa-arrow-alt-circle-left float-left"}),t._v(" "),a("small",{staticClass:"float-left ml-2 d-none d-sm-block"},[t._v("Back")])])]):t._e(),t._v(" "),a("strong",{staticClass:"mx-auto w-100 float-left",attrs:{"data-title":"title"}},[a("span",{staticClass:"d-none d-sm-block"},[t._v(t._s(t.pageTitle))]),t._v(" "),a("span",{staticClass:"d-block d-sm-none"},[t._v(t._s(t.pageTitleSmall))])]),t._v(" "),t.$routerHistory.hasForward()?a("router-link",{staticClass:"text-secondary float-right mr-1 pr-2 mr-sm-4 pr-sm-3",attrs:{to:t.forward,id:"forward"}},[a("span",{staticClass:"ml-5 float-right"},[a("i",{staticClass:"far fa-arrow-alt-circle-right float-right"}),t._v(" "),a("small",{staticClass:"float-right mr-2 d-none d-sm-block"},[t._v("Forward")])])]):t._e()],1)},staticRenderFns:[]}},EJ7O:function(t,e,a){var r=a("VU/8")(a("oKx2"),a("+O4B"),!1,null,null,null);t.exports=r.exports},HY2W:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=f(a("Xxa5")),n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(t[r]=a[r])}return t},s=(f(a("I3G/")),a("NYxO")),i=a("ic49"),o=f(a("KVer")),c=f(a("K23+")),u=a("m2tk"),l=a("p/p5"),d=a("rN6N"),m=f(a("EJ7O")),p=f(a("4I72"));function f(t){return t&&t.__esModule?t:{default:t}}function v(t){return function(){var e=t.apply(this,arguments);return new Promise(function(t,a){return function r(n,s){try{var i=e[n](s),o=i.value}catch(t){return void a(t)}if(!i.done)return Promise.resolve(o).then(function(t){r("next",t)},function(t){r("throw",t)});t(o)}("next")})}}e.default={components:{CustomHeader:m.default,CustomerProfile:p.default},data:function(){return{Order:d.Order,customer:null,customer_id:"",user:{name:o.default.state.user_name,id:o.default.state.user_id},show:!1,showModalContent:!1,activeOrder:null,headers:["Date","Order No.","Product Name","Total Product Price","Percentage","Down Payment","Repayment Plans"],paymentForm:null,canAddPayment:null}},methods:{updateView:function(){var t=v(r.default.mark(function t(e){var a,n;return r.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:a=e.customer,n=e.user,a.length?((a=a[0]).document.id||(a.document={id_card_url:"",passport_url:""}),this.user.branch=n.branch_id,this.customer=a,this.customer.orders=a.orders.map(function(t){return new d.Order(t,a)}),this.show=!0):c.default.setError("Customer not found.",5e3),this.$LIPS(!1);case 3:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),processForm:function(){var t=this;this.show=!1,this.$LIPS(!0),(0,l.get)("/api/customer/lookup/"+this.customer_id).then(function(e){return t.updateView(e.data)}).catch(function(){t.$LIPS(!1),c.default.setError("Error Fetching customer detail")})},displayAmortization:function(t){return this.activeOrder=this.customer.orders[t],this.canAddPayment=this.canUserAddPayment,this.paymentForm={payments:[]},this.showModalContent=!0,$("#amortization").modal("toggle")},addPaymentForm:function(){var t=this.activeOrder.repaymentLevel,e=parseInt(t+this.paymentForm.payments.length+1);t!==this.activeOrder._count&&(e>this.activeOrder._count||(this.paymentForm.payments.push({_pay:this.activeOrder.amountsToBePaid[0],_date:this.$getDate(),_payment_method:"",_payment_bank:"",_col:"",column:""}),this.reNumber()))},deletePayment:function(t){this.paymentForm.payments.splice(t,1),this.reNumber()},reNumber:function(){var t=this;this.paymentForm.payments.forEach(function(e,a){var r=t.activeOrder.repaymentLevel+a+1;t.paymentForm.payments[a]._col=r,t.paymentForm.payments[a].column=t.$getColumn(r)+" Repayment"})},preparePayments:function(){var t=this;if(this.canAddPayment){var e={};this.paymentForm.payments.forEach(function(a){var r={},s=t.$getColumn(a._col);r[s+"_pay"]=a._pay,r[s+"_date"]=a._date,r[s+"_payment_bank"]=a._payment_bank,r[s+"_payment_method"]=a._payment_method,e=n({},e,r)}),this.activeOrder.payments=e,$.isEmptyObject(e)?c.default.setError("You have not added any payment."):this.savePayments()}},savePayments:function(){var t=this;if(this.canAddPayment){this.$LIPS(!0);var e,a,n=void 0,s=void 0,i=void 0;6===this.activeOrder.count&&(n="formal"),12===this.activeOrder.count&&(n="informal"),e={payments:this.activeOrder.payments,repayment_id:this.activeOrder.order.id,type:n},(0,l.post)("/api/repayment",e).then((a=v(r.default.mark(function a(o){return r.default.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(!o.data.saved){a.next=13;break}return(s=t.customer.orders.find(function(t,a){var r=t.order.id===e.repayment_id;return r&&(i=a),r}).order)["repayment_"+n]=o.data.amortization,a.next=5,new d.Order(s,t.customer);case 5:return t.activeOrder=a.sent,t.customer.orders[i]=t.activeOrder,a.next=9,t.logAddedPayment(e);case 9:t.activeOrder.repaymentLevel===t.activeOrder.count&&t.sendPaymentCompleteSMS(),t.paymentForm={payments:[]},t.$scrollToTop(),t.$LIPS(!1);case 13:case"end":return a.stop()}},a,t)})),function(t){return a.apply(this,arguments)})).catch(function(){return c.default.setError("Error adding payment! Please try again later.")})}},sendPaymentCompleteSMS:function(){var t="Dear "+this.activeOrder.customerName+", you have successfully completed your payment for "+this.activeOrder.order.store_product.product_name+". Thanks for patronizing us.";new u.Message(t,this.activeOrder.customer.telephone).send(function(t){return 200===t.status&&c.default.setSuccess("Repayments Completed. SMS sent.")})},logAddedPayment:function(t){var e=this.paymentForm.payments.map(function(t){return t.column.replace(/ /g,"_")}).join(" ")+". Order: ID: "+t.repayment_id+". Customer ID: "+this.customer_id;return(0,i.log)("Payment(s) added",e)}},computed:n({},(0,s.mapGetters)(["getBanks","getPaymentMethods","auth"]),{check:function(){return!(!this.$isProcessing&&this.customer_id)},canUserAddPayment:function(){return this.auth("supervisor")&&this.user.branch===this.activeOrder.branch.id}}),created:function(){this.$prepareBanks(),this.$prepareBranches(),this.$preparePaymentMethods()}}},JoKY:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("transition",{attrs:{name:"fade"}},[a("div",{attrs:{id:"reminder"}},[a("div",{staticClass:"mt-5 attendance-head"},[a("div",{staticClass:"card"},[a("ul",{staticClass:"nav nav-tabs bg-default justify-content-center"},[a("h6",[t._v("Customer Lookup")])]),t._v(" "),a("div",{staticClass:"card-body p-4"},[a("form",{on:{submit:function(e){return e.preventDefault(),t.processForm(e)}}},[a("div",{staticClass:"m-0 p-0 col-12 form-group clearfix"},[a("label",{staticClass:"w-100"},[t._v("Customer ID")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.customer_id,expression:"customer_id"},{name:"validate",rawName:"v-validate",value:"required|numeric",expression:"'required|numeric'"}],staticClass:"form-control col-lg-9 col-md-8 col-sm-8 col-12 float-left mt-1",attrs:{"data-vv-as":"customer id",name:"customer_id"},domProps:{value:t.customer_id},on:{onkeyUp:t.check,input:function(e){e.target.composing||(t.customer_id=e.target.value)}}}),t._v(" "),a("div",{staticClass:"col-lg-3 col-md-4 col-sm-4 col-12 float-right px-md-3 mt-md-0 px-sm-3 mt-sm-0 mt-2 px-0"},[a("button",{staticClass:"btn btn-block bg-default my-1",attrs:{disabled:t.check,type:"submit"}},[t._v("\n                                    Fetch customer details "),a("i",{staticClass:"far fa-paper-plane ml-1"})])]),t._v(" "),t.errors.has("customer_id")?a("small",{staticClass:"form-text text-muted w-100"},[t._v("\n                                "+t._s(t.errors.first("customer_id"))+"\n                            ")]):t._e()])])])])]),t._v(" "),a("transition",{attrs:{name:"fade"}},[t.customer&&t.show?a("div",[a("div",{staticClass:"attendance-head"},[a("customer-profile",{attrs:{"view-customer":t.customer}})],1),t._v(" "),a("custom-header",{attrs:{title:"All order(s)"}}),t._v(" "),a("div",{staticClass:"mt-5 mb-3 attendance-head"},[a("div",{staticClass:"row px-4 pt-3 pb-4 text-center"},[a("div",{staticClass:"col light-heading",staticStyle:{"max-width":"100px"}},[t._v("S/No.")]),t._v(" "),t._l(t.headers,function(e){return a("div",{staticClass:"col light-heading"},[t._v(t._s(e))])})],2)]),t._v(" "),a("div",{staticClass:"tab-content mt-1 attendance-body"},[t.show&&t.customer.orders.length>0?a("div",{staticClass:"tab-pane active text-center"},t._l(t.customer.orders,function(e,r){return a("div",{staticClass:"mb-3 row attendance-item"},[a("div",{staticClass:"col-12 col-xs-2 col-md col-lg d-flex align-items-center",staticStyle:{"max-width":"100px"}},[a("span",{staticClass:"user mx-auto"},[t._v(t._s(r+1))])]),t._v(" "),a("div",{staticClass:"col-12 col-xs-2 col-md col-lg d-flex align-items-center justify-content-center"},[t._v("\n                                "+t._s(e.order.order_date)+"\n                            ")]),t._v(" "),a("div",{staticClass:"col-12 col-xs-2 col-md col-lg d-flex user-name align-items-center justify-content-center"},[t._v("\n                                "+t._s(e.order.id)+"\n                            ")]),t._v(" "),a("div",{staticClass:"col-12 col-xs-3 col-md col-lg d-flex align-items-center justify-content-center"},[t._v("\n                                "+t._s(e.order.store_product.product_name)+"\n                            ")]),t._v(" "),a("div",{staticClass:"col-12 col-xs-2 col-md col-lg d-flex align-items-center justify-content-center"},[t._v("\n                                "+t._s(t.$formatCurrency(e.order.product_price))+"\n                            ")]),t._v(" "),a("div",{staticClass:"col-12 col-xs-2 col-md col-lg d-flex align-items-center justify-content-center"},[t._v("\n                                "+t._s(e.order.sales_category.name)+"\n                            ")]),t._v(" "),a("div",{staticClass:"col-12 col-xs-2 col-md col-lg d-flex align-items-center justify-content-center"},[t._v("\n                                "+t._s(t.$formatCurrency(e.order.down_payment))+"\n                            ")]),t._v(" "),a("div",{staticClass:"col-12 col-xs-2 col-md col-lg d-flex align-items-center justify-content-center"},[a("button",{staticClass:"btn status my-sm-2",class:e.count===e.repaymentLevel?"approved":"pending",on:{click:function(e){t.displayAmortization(r)}}},[t._v("\n                                    View Plan\n                                    "),a("i",{staticClass:"fas ml-3",class:e.count===e.repaymentLevel?"fa-check-circle":"fa-hourglass-half",staticStyle:{"font-size":"1.4rem"}})])])])})):a("div",{staticClass:"tab-pane active text-center"},[a("div",{staticClass:"mb-3 row attendance-item"},[a("div",{staticClass:"col d-flex light-heading align-items-center justify-content-center"},[t._v("\n                                No records found!\n                            ")])])])]),t._v(" "),a("div",{staticClass:"mt-5 mb-3 attendance-head"},[a("div",{staticClass:"w-100 my-5 mx-0 hr"})])],1):t._e()]),t._v(" "),a("div",{staticClass:"modal fade repayment",attrs:{id:"amortization"}},[a("div",{staticClass:"modal-dialog modal-xl",attrs:{role:"document"}},[t.showModalContent?a("div",{staticClass:"modal-content"},[a("div",{staticClass:"modal-header py-2"},[a("h6",{staticClass:"modal-title py-1"},[t._v("\n                            Repayment Plan/Summary - "+t._s(t._f("capitalize")(t.customer.employment_status))+"\n                        ")]),t._v(" "),a("a",{staticClass:"close py-1",attrs:{"aria-label":"Close","data-dismiss":"modal"}},[a("span",{staticClass:"modal-close text-danger",attrs:{"aria-hidden":"true"}},[a("i",{staticClass:"fas fa-times"})])])]),t._v(" "),a("div",{staticClass:"modal-body"},[a("div",{staticClass:"table-responsive"},[a("h5",{staticClass:"mt-3 mb-0"},[t._v("Order Information")]),t._v(" "),a("table",{staticClass:"table table-bordered"},[a("tbody",[a("tr",{staticClass:"table-separator"},[a("td",[t._v("Name")]),t._v(" "),a("td",[t._v("Order Id")]),t._v(" "),a("td",[t._v("Product")]),t._v(" "),a("th",[t._v("Branch")])]),t._v(" "),a("tr",[a("td",{staticClass:"font-weight-bold"},[t._v(t._s(t.activeOrder.customerName)+"\n                                    ")]),t._v(" "),a("th",[t._v(t._s(t.activeOrder.order.id))]),t._v(" "),a("th",[t._v(t._s(t.activeOrder.order.store_product.product_name))]),t._v(" "),a("td",{staticClass:"font-weight-bold"},[t._v(t._s(t.activeOrder.branch.name))])])])]),t._v(" "),a("h5",{staticClass:"mt-5 mb-0"},[t._v("Amortization Schedule")]),t._v(" "),a("table",{staticClass:"table table-bordered"},[a("tbody",{staticClass:"text-center"},[a("tr",[a("th",[t._v("Repayment")]),t._v(" "),t._l(t.activeOrder.repaymentCaptions,function(e){return a("td",{domProps:{innerHTML:t._s(e)}})})],2),t._v(" "),a("tr",{staticClass:"table-separator"},[a("th",[t._v("Due Date")]),t._v(" "),t._l(t.activeOrder.dueDates,function(e){return a("td",[t._v(t._s(e))])})],2),t._v(" "),a("tr",[a("th",[t._v("Actual Pay Day")]),t._v(" "),t._l(t.activeOrder.actualPayDates,function(e){return a("td",[t._v(t._s(e))])})],2),t._v(" "),a("tr",{staticClass:"table-separator"},[a("th",[t._v("Status")]),t._v(" "),t._l(t.activeOrder.paymentStatusClasses,function(t){return a("td",{class:t.class},[a("i",{staticClass:"fas",class:t.icon})])})],2),t._v(" "),a("tr",{staticClass:"table-separator"},[a("th",[t._v("Repayment Amount")]),t._v(" "),t._l(t.activeOrder.amountsToBePaid,function(e){return a("td",[t._v("\n                                        "+t._s(t.$formatCurrency(e))+"\n                                    ")])})],2),t._v(" "),a("tr",[a("th",[t._v("Actual Amount Paid")]),t._v(" "),t._l(t.activeOrder.actualAmountsPaid,function(e){return a("td",[t._v("\n                                        "+t._s(t.$formatCurrency(e))+"\n                                    ")])})],2),t._v(" "),a("tr",{staticClass:"table-separator"},[a("th",[t._v("Payment Method")]),t._v(" "),t._l(t.activeOrder.paymentMethods,function(e){return a("td",{staticClass:"text-capitalize"},[t._v("\n                                        "+t._s(t.Order.convertToName(e,"paymentMethods"))+"\n                                    ")])})],2),t._v(" "),a("tr",[a("th",[t._v("Bank")]),t._v(" "),t._l(t.activeOrder.paymentBanks,function(e){return a("td",{staticClass:"text-capitalize"},[t._v("\n                                        "+t._s(t.Order.convertToName(e,"banks"))+"\n                                    ")])})],2)])]),t._v(" "),a("h5",{staticClass:"mt-5 mb-0"},[t._v("Payment Summary")]),t._v(" "),a("table",{staticClass:"table table-bordered"},[a("tbody",{staticClass:"text-center"},[a("tr",{staticClass:"table-separator"},[a("td",{staticClass:"text-left"},[t._v("Discount Detail (%)")]),t._v(" "),a("th",[t._v(t._s(t._f("capitalize")(t.activeOrder.discount)))]),t._v(" "),a("td",[t._v("Total Before Discount")]),t._v(" "),a("th",[t._v(t._s(t.$formatCurrency(t.$roundDownAmt(t.activeOrder.order.product_price))))]),t._v(" "),a("td",[t._v("Total Paid (+discount)")]),t._v(" "),a("th",[t._v(t._s(t.activeOrder.amountPaid))])]),t._v(" "),a("tr",[a("td",{staticClass:"text-left"},[t._v("Discount Amount")]),t._v(" "),a("th",[t._v(t._s(t.activeOrder.discountAmount))]),t._v(" "),a("td",[t._v("Total After Discount")]),t._v(" "),a("th",[t._v(t._s(t.activeOrder.discountedTotal))]),t._v(" "),a("td",[t._v("Total Debt")]),t._v(" "),a("th",[t._v(t._s(t.activeOrder.outstandingDebt))])]),t._v(" "),a("tr",[a("td",{staticClass:"text-left"},[t._v("Down Payment")]),t._v(" "),a("th",[t._v(t._s(t.$formatCurrency(t.$roundDownAmt(t.activeOrder.order.down_payment))))]),t._v(" "),a("td",[t._v("Total Plus Default Fee")]),t._v(" "),a("th",[t._v(t._s(t.activeOrder.totalPlusDefault))]),t._v(" "),a("td",[t._v("Default Fee")]),t._v(" "),a("th",[t._v(t._s(t.activeOrder.defaultFee))])])])]),t._v(" "),t.canAddPayment?a("h5",{staticClass:"mt-5 mb-0"},[t._v("Add a new payment")]):t._e(),t._v(" "),t.canAddPayment?a("table",{staticClass:"table table-bordered"},[a("tbody",{staticClass:"text-center"},[a("tr",{staticClass:"table-separator"},[a("td",{staticClass:"text-left"},[t._v("S/No.")]),t._v(" "),a("th",[t._v("Repayment")]),t._v(" "),a("th",[t._v("Amount")]),t._v(" "),a("th",[t._v("Payment Method")]),t._v(" "),a("th",[t._v("Bank")]),t._v(" "),a("th",[t._v("Date")]),t._v(" "),a("th",[t._v("Collected By")]),t._v(" "),a("th",[t._v("Action")])]),t._v(" "),t._l(t.paymentForm.payments,function(e,r){return a("tr",[a("th",[t._v(t._s(r+1))]),t._v(" "),a("th",[a("div",{staticClass:"form-group mb-0"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.paymentForm.payments[r].column,expression:"paymentForm.payments[index].column"}],staticClass:"form-control",attrs:{name:"date",type:"text",disabled:""},domProps:{value:t.paymentForm.payments[r].column},on:{input:function(e){e.target.composing||t.$set(t.paymentForm.payments[r],"column",e.target.value)}}})])]),t._v(" "),a("th",[a("div",{staticClass:"form-group mb-0"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.paymentForm.payments[r]._pay,expression:"paymentForm.payments[index]._pay"}],staticClass:"form-control",attrs:{name:"date",type:"text"},domProps:{value:t.paymentForm.payments[r]._pay},on:{input:function(e){e.target.composing||t.$set(t.paymentForm.payments[r],"_pay",e.target.value)}}})])]),t._v(" "),a("th",[a("select",{directives:[{name:"model",rawName:"v-model",value:t.paymentForm.payments[r]._payment_method,expression:"paymentForm.payments[index]._payment_method"}],staticClass:"custom-select w-100",on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.$set(t.paymentForm.payments[r],"_payment_method",e.target.multiple?a:a[0])}}},t._l(t.getPaymentMethods,function(e){var r=e.name,n=e.id;return a("option",{domProps:{value:n}},[t._v("\n                                                "+t._s(t._f("capitalize")(r))+"\n                                            ")])}))]),t._v(" "),a("th",[a("select",{directives:[{name:"model",rawName:"v-model",value:t.paymentForm.payments[r]._payment_bank,expression:"paymentForm.payments[index]._payment_bank"}],staticClass:"custom-select w-100",on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.$set(t.paymentForm.payments[r],"_payment_bank",e.target.multiple?a:a[0])}}},t._l(t.getBanks,function(e){var r=e.name,n=e.id;return a("option",{domProps:{value:n}},[t._v(t._s(r))])}))]),t._v(" "),a("th",[a("div",{staticClass:"form-group mb-0"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.paymentForm.payments[r]._date,expression:"paymentForm.payments[index]._date"}],staticClass:"form-control",attrs:{name:"date",type:"date"},domProps:{value:t.paymentForm.payments[r]._date},on:{input:function(e){e.target.composing||t.$set(t.paymentForm.payments[r],"_date",e.target.value)}}})])]),t._v(" "),a("th",[a("div",{staticClass:"form-group mb-0"},[a("input",{staticClass:"form-control",attrs:{"data-vv-as":"date",name:"date",type:"text",disabled:""},domProps:{value:t.user.name}})])]),t._v(" "),a("th",[a("button",{staticClass:"ml-2 btn status status-sm my-sm-2 not-approved",on:{click:function(e){t.deletePayment(r)}}},[a("i",{staticClass:"fas fa-times"})])])])})],2)]):t._e()])]),t._v(" "),a("div",{staticClass:"modal-footer",class:{"d-flex justify-content-end":!t.canAddPayment}},[t.canAddPayment?a("button",{staticClass:"btn status my-sm-2",on:{click:function(e){t.addPaymentForm()}}},[t._v("\n                            Add Payment\n                        ")]):t._e(),t._v(" "),t.canAddPayment?a("button",{staticClass:"btn status my-sm-2 approved ml-4",on:{click:function(e){t.preparePayments()}}},[t._v("\n                            Click here to Submit Payment(s)!\n                        ")]):t._e(),t._v(" "),a("a",{staticClass:"text-link mt-3",staticStyle:{"text-align":"right"},attrs:{"data-dismiss":"modal",href:"javascript:"}},[t._v("close dialogue")])])]):t._e()])])],1)])},staticRenderFns:[]}},N9TL:function(t,e,a){var r=a("VU/8")(a("HY2W"),a("JoKY"),!1,function(t){a("h2EW")},"data-v-934e31f6",null);t.exports=r.exports},SldL:function(t,e){!function(e){"use strict";var a,r=Object.prototype,n=r.hasOwnProperty,s="function"==typeof Symbol?Symbol:{},i=s.iterator||"@@iterator",o=s.asyncIterator||"@@asyncIterator",c=s.toStringTag||"@@toStringTag",u="object"==typeof t,l=e.regeneratorRuntime;if(l)u&&(t.exports=l);else{(l=e.regeneratorRuntime=u?t.exports:{}).wrap=C;var d="suspendedStart",m="suspendedYield",p="executing",f="completed",v={},h={};h[i]=function(){return this};var _=Object.getPrototypeOf,y=_&&_(_($([])));y&&y!==r&&n.call(y,i)&&(h=y);var g=k.prototype=x.prototype=Object.create(h);w.prototype=g.constructor=k,k.constructor=w,k[c]=w.displayName="GeneratorFunction",l.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===w||"GeneratorFunction"===(e.displayName||e.name))},l.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,k):(t.__proto__=k,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(g),t},l.awrap=function(t){return{__await:t}},P(D.prototype),D.prototype[o]=function(){return this},l.AsyncIterator=D,l.async=function(t,e,a,r){var n=new D(C(t,e,a,r));return l.isGeneratorFunction(e)?n:n.next().then(function(t){return t.done?t.value:n.next()})},P(g),g[c]="Generator",g[i]=function(){return this},g.toString=function(){return"[object Generator]"},l.keys=function(t){var e=[];for(var a in t)e.push(a);return e.reverse(),function a(){for(;e.length;){var r=e.pop();if(r in t)return a.value=r,a.done=!1,a}return a.done=!0,a}},l.values=$,F.prototype={constructor:F,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=a,this.done=!1,this.delegate=null,this.method="next",this.arg=a,this.tryEntries.forEach(A),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=a)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,n){return o.type="throw",o.arg=t,e.next=r,n&&(e.method="next",e.arg=a),!!n}for(var s=this.tryEntries.length-1;s>=0;--s){var i=this.tryEntries[s],o=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var c=n.call(i,"catchLoc"),u=n.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,e){for(var a=this.tryEntries.length-1;a>=0;--a){var r=this.tryEntries[a];if(r.tryLoc<=this.prev&&n.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var s=r;break}}s&&("break"===t||"continue"===t)&&s.tryLoc<=e&&e<=s.finallyLoc&&(s=null);var i=s?s.completion:{};return i.type=t,i.arg=e,s?(this.method="next",this.next=s.finallyLoc,v):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var a=this.tryEntries[e];if(a.finallyLoc===t)return this.complete(a.completion,a.afterLoc),A(a),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var a=this.tryEntries[e];if(a.tryLoc===t){var r=a.completion;if("throw"===r.type){var n=r.arg;A(a)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:$(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=a),v}}}function C(t,e,a,r){var n=e&&e.prototype instanceof x?e:x,s=Object.create(n.prototype),i=new F(r||[]);return s._invoke=function(t,e,a){var r=d;return function(n,s){if(r===p)throw new Error("Generator is already running");if(r===f){if("throw"===n)throw s;return T()}for(a.method=n,a.arg=s;;){var i=a.delegate;if(i){var o=O(i,a);if(o){if(o===v)continue;return o}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if(r===d)throw r=f,a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);r=p;var c=b(t,e,a);if("normal"===c.type){if(r=a.done?f:m,c.arg===v)continue;return{value:c.arg,done:a.done}}"throw"===c.type&&(r=f,a.method="throw",a.arg=c.arg)}}}(t,a,i),s}function b(t,e,a){try{return{type:"normal",arg:t.call(e,a)}}catch(t){return{type:"throw",arg:t}}}function x(){}function w(){}function k(){}function P(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function D(t){var e;this._invoke=function(a,r){function s(){return new Promise(function(e,s){!function e(a,r,s,i){var o=b(t[a],t,r);if("throw"!==o.type){var c=o.arg,u=c.value;return u&&"object"==typeof u&&n.call(u,"__await")?Promise.resolve(u.__await).then(function(t){e("next",t,s,i)},function(t){e("throw",t,s,i)}):Promise.resolve(u).then(function(t){c.value=t,s(c)},i)}i(o.arg)}(a,r,e,s)})}return e=e?e.then(s,s):s()}}function O(t,e){var r=t.iterator[e.method];if(r===a){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=a,O(t,e),"throw"===e.method))return v;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var n=b(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,v;var s=n.arg;return s?s.done?(e[t.resultName]=s.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=a),e.delegate=null,v):s:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,v)}function S(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function A(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function F(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(S,this),this.reset(!0)}function $(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,s=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=a,e.done=!0,e};return s.next=s}}return{next:T}}function T(){return{value:a,done:!0}}}(function(){return this}()||Function("return this")())},WiSW:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=i(a("I3G/")),n=(a("N71M"),a("nv24")),s=i(a("1gIg"));function i(t){return t&&t.__esModule?t:{default:t}}e.default={props:["viewCustomer"],components:{AppNavigation:s.default},data:function(){return{customer:"",show:!1}},computed:{full:function(){return"full"===this.$route.meta.mode},passport:function(){return"https://s3.eu-west-2.amazonaws.com/altara-one/"+this.customer.document.passport_url},branch:function(){return this.customer.branch.description+" "+this.customer.branch.name},approved:function(){return this.$getCustomerApprovalStatus(this.customer.verification)}},created:function(){var t=this;$(".tooltip").remove(),this.viewCustomer&&this.setCustomer(this.viewCustomer),n.EventBus.$on("customer",function(e){return t.setCustomer(e)})},methods:{setCustomer:function(t){r.default.set(this.$data,"customer",t),this.show=!0}}}},Xxa5:function(t,e,a){t.exports=a("jyFz")},h2EW:function(t,e,a){var r=a("n9Ml");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);a("rjj0")("6d8aab8e",r,!0,{})},ic49:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.log=function(t,e){t=t.replace(/([A-Z])/g," $1").replace(/^./,function(t){return t.toUpperCase()}),(0,r.post)("/api/log",{action:t,description:e})};var r=a("p/p5")},jyFz:function(t,e,a){var r=function(){return this}()||Function("return this")(),n=r.regeneratorRuntime&&Object.getOwnPropertyNames(r).indexOf("regeneratorRuntime")>=0,s=n&&r.regeneratorRuntime;if(r.regeneratorRuntime=void 0,t.exports=a("SldL"),n)r.regeneratorRuntime=s;else try{delete r.regeneratorRuntime}catch(t){r.regeneratorRuntime=void 0}},m2tk:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Message=void 0;var r=function(){function t(t,e){for(var a=0;a<e.length;a++){var r=e[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,a,r){return a&&t(e.prototype,a),r&&t(e,r),e}}(),n=a("p/p5");e.Message=function(){function t(e,a){var r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.user_id=n,this.message=e,this.logToDB=r,this.contacts=a.split(",").filter(function(t){return/\S/.test(t)}).map(function(t){return"234"+t.trim().substr(1)}).join(","),this.setPages(),this.setContactCount()}return r(t,[{key:"setContactCount",value:function(){this.contact_count=this.contacts.split(",").length}},{key:"setPages",value:function(){this.pages=Math.ceil(this.message.length/160)}},{key:"send",value:function(t){var e=this;(0,n.get)("/api/message/create?to="+this.contacts+"&message="+this.message).then(function(a){return 200===a.status&&e.logToDB&&(delete e.logToDB,(0,n.post)("/api/message",e)),!!t&&t(a)}).catch(function(e){return!!t&&t(e)})}}]),t}()},n9Ml:function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,".attendance-item[data-v-934e31f6]{cursor:auto}",""])},nv24:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.EventBus=void 0;var r,n=a("I3G/"),s=(r=n)&&r.__esModule?r:{default:r};e.EventBus=new s.default},oKx2:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{title:"",buttonTitle:null,to:null}}},r37U:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("transition",{attrs:{name:"fade"}},[a("div",{class:t.full&&"px-md-4 px-2"},[t.full?a("app-navigation",{attrs:{forward:{path:t.$routerHistory.next().path},previous:{path:t.$routerHistory.previous().path},pageTitle:"Customer Profile",pageTitleSmall:"Customer Profile"}}):t._e(),t._v(" "),t.show?a("div",{staticClass:"pt-md-3 pt-2 verification",attrs:{id:"employeeRegister"}},[a("div",{staticClass:"customer-profile card position-relative"},[a("div",{staticClass:"design"}),t._v(" "),a("div",{staticClass:"col-md-4 col-sm-4 col-12 px-0 pb-md-4 pb-sm-3 pb-0 pt-md-5 pt-4 float-left"},[a("div",{staticClass:"pt-md-3 pt-sm-2 pt-1"},[a("div",{staticClass:"justify-content-center d-flex position-relative z-1"},[a("span",{staticClass:"img-border"},[t.customer.document.passport_url?a("img",{staticClass:"profile-picture rounded-circle",attrs:{src:t.passport,alt:"customer profile pic"}}):a("i",{staticClass:"no-image fas fa-user-alt"})])]),t._v(" "),a("div",{staticClass:"justify-content-center d-flex position-relative z-1 pt-md-4 pt-sm-4 pt-2"},[a("span",{staticClass:"w-50"},[a("div",{staticClass:"text-right px-4 py-3 text-light text-muted m-0"},[t._v("\n                                    Status"),a("i",{staticClass:"ml-3 fas fa-briefcase"})]),t._v(" "),a("div",{staticClass:"data text-right px-4 py-3 m-0"},[t._v(t._s(t._f("capitalize")(t.customer.employment_status)))])]),t._v(" "),a("span",{staticClass:"separator"}),t._v(" "),a("span",{staticClass:"w-50"},[a("div",{staticClass:"px-4 py-3 text-muted text-light m-0"},[a("i",{staticClass:"mr-3 fas fa-transgender"}),t._v("Gender\n                                ")]),t._v(" "),a("div",{staticClass:"data px-4 py-3 m-0"},[t._v(t._s(t._f("capitalize")(t.customer.gender)))])])])])]),t._v(" "),a("div",{staticClass:"col-md-8 col-sm-8 col-12 px-0 pb-4 pt-md-5 pt-sm-5 pt-0 float-left"},[a("div",{staticClass:"pt-md-4 pt-0 clearfix"},[a("div",{staticClass:"float-left p-0 m-0 col-md-4 col-sm-6 small-center"},[a("h4",{staticClass:"mt-0 pt-md-5 pt-sm-4 pt-0 mb-md-5 mb-sm-4 mb-3"},[a("i",{staticClass:"mr-3 far fa-user-circle"}),t._v(" "),a("strong",[t._v(t._s(t._f("capitalize")(t.$getCustomerFullName(t.customer))))])])]),t._v(" "),a("div",{staticClass:"float-left p-0 m-0 col-md-4 col-sm-6 d-flex justify-content-center"},[a("h4",{staticClass:"mt-0 pt-md-5 pt-sm-4 pt-0 mb-md-5 mb-sm-4 mb-4 text-muted"},[a("strong",[t._v("Customer ID: "+t._s(t.customer.id))])])]),t._v(" "),a("div",{staticClass:"float-left p-0 m-0 col-md-4 col-12 d-flex justify-content-center"},[a("span",{class:"status mt-md-5 my-sm-2 mt-0 "+(t.approved?"approved":"not-approved")},[t._v("\n                                "+t._s(t.approved?"APPROVED":"NOT APPROVED")+"\n                                "),a("i",{class:"ml-3 fas fa-"+(t.approved?"check":"times")})])])]),t._v(" "),a("div",{staticClass:"pt-4"},[a("table",{staticClass:"table"},[a("tbody",[a("tr",[a("th",{staticClass:"text-muted"},[a("i",{staticClass:"mr-3 fas fa-mobile-alt"}),t._v("Phone Number")]),t._v(" "),a("td",[t._v(t._s(t.customer.telephone))])]),t._v(" "),t.$store.getters.auth("DVAAccess")?a("tr",[a("th",{staticClass:"text-muted"},[a("i",{staticClass:"mr-3 fas fa-map-marker-alt"}),t._v("Address")]),t._v(" "),a("td",[t._v(t._s(t._f("capitalize")(t.$getCustomerAddress(t.customer)))+"\n                                ")])]):t._e(),t._v(" "),a("tr",[a("th",{staticClass:"text-muted"},[a("i",{staticClass:"mr-3 fas fa-gift"}),t._v("Registered On")]),t._v(" "),a("td",[t._v(t._s(t.customer.date_of_registration))])]),t._v(" "),a("tr",[a("th",{staticClass:"text-muted"},[a("i",{staticClass:"mr-3 far fa-user-circle"}),t._v("Registered By")]),t._v(" "),a("td",[t._v(t._s(t._f("capitalize")(t.customer.user?t.customer.user.full_name:"user not in record"))+"\n                                ")])]),t._v(" "),a("tr",[a("th",{staticClass:"text-muted"},[a("i",{staticClass:"mr-3 far fa-building"}),t._v("Branch")]),t._v(" "),a("td",[t._v(t._s(t._f("capitalize")(t.branch)))])])])])])])]),t._v(" "),t.full?a("div",[t._v("Full profile goes here")]):t._e()]):t._e()],1)])},staticRenderFns:[]}},rN6N:function(t,e,a){"use strict";var r,n=function(){function t(t,e){for(var a=0;a<e.length;a++){var r=e[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,a,r){return a&&t(e.prototype,a),r&&t(e,r),e}}(),s=a("I3G/"),i=(r=s)&&r.__esModule?r:{default:r},o=a("N71M");function c(t){if(Array.isArray(t)){for(var e=0,a=Array(t.length);e<t.length;e++)a[e]=t[e];return a}return Array.from(t)}function u(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var l=new i.default,d=function(){function t(e,a){u(this,t),this._order=e,this._customer=a,this._paymentBanks=[],this._paymentMethods=[],this._actualPayDates=[],this._actualAmountsPaid=[],this._amountsToBePaid=[],this._repaymentCaptions=[],this._paymentStatusClasses=[],this._repaymentLevel=0,this._amountPaid=null,this._discountAmount=null,this._outstandingDebt=null,this._discountedTotal=null,this._defaultFee=null,this._totalPlusDefault=null,this._payments={},this.setIsOrderFormal(),this.setIsRepaymentValid(),this.setRepaymentData(),this.setCountAndInterval(),this.setCommonDetails(),this.setDueDates(),this.setPaymentStatusClasses(),this.calcAndSetPaymentSummary(),this.setBranch(),this.setDiscount()}return n(t,[{key:"setIsRepaymentValid",value:function(){this._isRepaymentValid=!(!this.order.repayment_formal&&!this.order.repayment_informal)}},{key:"setIsOrderFormal",value:function(){this._isOrderFormal=["formal","salaried"].includes(this._customer.employment_status.toLowerCase())}},{key:"setRepaymentData",value:function(){null!=this.order.repayment_formal&&(this._repaymentData=this.order.repayment_formal),null!=this.order.repayment_informal&&(this._repaymentData=this.order.repayment_informal)}},{key:"setCountAndInterval",value:function(){var e=void 0,a=void 0;new Date(this.order.order_date)<=new Date("2019-07-07")?(null!=this.order.repayment_formal&&(e=28,a=6),null!=this.order.repayment_informal&&(e=14,a=12)):t.isBankDraftAvailable()&&this.isOrderFormal?(e=28,a=6):(e=14,a=12),this._count=a,this._interval=e}},{key:"setDueDates",value:function(){this._dueDates=t.generateDueDates(this.order.order_date,this.interval,this.count)}},{key:"setCommonDetails",value:function(){if(this.isRepaymentValid)for(var t=1;t<this.count+1;t++){for(var e=l.$getColumn(t).split(""),a=[],r=1;r<=2;r++)a.unshift(e.pop());this._repaymentCaptions.push("<td>"+e.join("")+"<sup>"+a.join("")+"</sup></td>"),this._actualPayDates.push(this.repaymentData[l.$getColumn(t)+"_date"]),this._actualAmountsPaid.push(this.repaymentData[l.$getColumn(t)+"_pay"]),this._paymentBanks.push(this.repaymentData[l.$getColumn(t)+"_payment_bank"]),this._paymentMethods.push(this.repaymentData[l.$getColumn(t)+"_payment_method"]),this._amountsToBePaid.push(l.$roundDownAmt(this.order.repayment_amount)),this.repaymentData[l.$getColumn(t)+"_pay"]>0&&this._repaymentLevel++}}},{key:"setBranch",value:function(){var t=this;this._branch=o.store.state.branches.find(function(e){return parseInt(e.id)===parseInt(t.order.store_product.store_name)})}},{key:"setPaymentStatusClasses",value:function(){if(this.isRepaymentValid)for(var e=1;e<this.count+1;e++){var a={class:null,icon:null},r=l.$getColumn(e),n=t.isPaymentDue(this.dueDates[e-1]),s=parseInt(this.repaymentData[r+"_pay"]);s?(a.class="paid",a.icon="fa-check"):n&&!s?(a.class="missed",a.icon="fa-times"):n||(a.class="pending",a.icon="fa-hourglass-start"),this._paymentStatusClasses.push(a)}}},{key:"calcAndSetPaymentSummary",value:function(){var t=function(t){return l.$formatCurrency(t)},e=this.order,a=e.repayment_amount,r=e.down_payment,n=e.product_price,s=6===this.count?.5:1,i=this.order.discount.percentage_discount,o=i>0?5===i?1:2:0,c=l.$roundDownAmt(a*s*o);this._discountAmount=t(c);var u=0,d=0;if(this.repaymentData){for(var m=0;m<this.count+1;m++){var p=parseInt(this.actualAmountsPaid[m]);d+=p?l.$roundDownAmt(p):0}u=l.$roundDownAmt(parseInt(r))+d+c}this._amountPaid=t(u);var f=l.$roundDownAmt(n-c);this._discountedTotal=t(f);var v=0;new Date(this.order.order_date)>new Date("2019-07-07")&&(v=500*[].length),this._defaultFee=t(v),this._totalPlusDefault=t(f+v),this._outstandingDebt=t(l.$roundDownAmt(parseInt(n)-u))}},{key:"setDiscount",value:function(){this._discount=this.order.discount.name+" "+this.order.discount.percentage_discount}},{key:"payments",set:function(t){this._payments=t},get:function(){return this._payments}},{key:"repaymentLevel",get:function(){return this._repaymentLevel}},{key:"order",get:function(){return this._order}},{key:"customer",get:function(){return this._customer}},{key:"isRepaymentValid",get:function(){return this._isRepaymentValid}},{key:"isOrderFormal",get:function(){return this._isOrderFormal}},{key:"repaymentData",get:function(){return this._repaymentData}},{key:"count",get:function(){return this._count}},{key:"interval",get:function(){return this._interval}},{key:"dueDates",get:function(){return this._dueDates}},{key:"paymentStatusClasses",get:function(){return this._paymentStatusClasses}},{key:"repaymentCaptions",get:function(){return this._repaymentCaptions}},{key:"paymentBanks",get:function(){return this._paymentBanks}},{key:"paymentMethods",get:function(){return this._paymentMethods}},{key:"actualPayDates",get:function(){return this._actualPayDates}},{key:"actualAmountsPaid",get:function(){return this._actualAmountsPaid}},{key:"amountsToBePaid",get:function(){return this._amountsToBePaid}},{key:"amountPaid",get:function(){return this._amountPaid}},{key:"discountAmount",get:function(){return this._discountAmount}},{key:"outstandingDebt",get:function(){return this._outstandingDebt}},{key:"discountedTotal",get:function(){return this._discountedTotal}},{key:"defaultFee",get:function(){return this._defaultFee}},{key:"totalPlusDefault",get:function(){return this._totalPlusDefault}},{key:"branch",get:function(){return this._branch}},{key:"discount",get:function(){return this._discount}},{key:"customerName",get:function(){return this.customer.first_name+" "+this.customer.last_name}},{key:"customerWGName",get:function(){var t=this.customer;return t.work_guarantor_first_name+" "+t.work_guarantor_last_name+" - "+t.work_guarantor_relationship}},{key:"customerPGName",get:function(){var t=this.customer;return t.personal_guarantor_first_name+" "+t.personal_guarantor_last_name+" - "+t.personal_guarantor_relationship}}],[{key:"generateDueDates",value:function(t,e,a){for(var r=[],n=0;n<a;n++){var s=new Date(t).addDays((n+1)*e),i=l.$getDate(s);r.push(i)}return r}},{key:"isPaymentDue",value:function(t){return new Date>new Date(t)}},{key:"isBankDraftAvailable",value:function(){return!1}},{key:"renderMessage",value:function(t){return t.sms?t.sms.message.replace(/%0a/g,"</br>"):t.feedback}},{key:"convertToName",value:function(t,e){return t?o.store.state[e].find(function(e){return e.id===t}).name:null}}]),t}(),m=function(t){function e(t,a){u(this,e);var r=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,t.customer));return r._isReminderSent=!1,r._dvaId=a,r._isSelected=!1,r.setReminder(null),r.setIsReminderSent(),r.setFinancialStatus(),r.setPromiseCall(),r.generateAndSetNextSMSReminder(),r}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,d),n(e,[{key:"setIsReminderSent",value:function(){var t=this,e=l.$getDate();this.order.reminders.forEach(function(a){var r=a.date.split(" "),n=r[0].split("-"),s=r[1].split(":"),i=[].concat(c(n),c(s)).map(function(t){return parseInt(t,10)});l.$getDate(new Date(Date.UTC.apply(Date,c(i))),!1)===e&&(t._isReminderSent=!0)})}},{key:"setFinancialStatus",value:function(){this._financialStatus=this.isRepaymentValid?"Paid: "+this.amountPaid+" | Debt: "+this.outstandingDebt:"no detail!"}},{key:"generateAndSetNextSMSReminder",value:function(){var t=this.order,e=t.repayment_amount,a=t.order_date,r=this.order.store_product.product_name,n=void 0;a===l.$getDate()?(n="Hello "+this.customerName+", thanks for patronizing us. The following is the breakdown of the repayment plan for the purchase of "+r+":%0a",this.dueDates.forEach(function(t,a){return n+=l.$getColumn(a+1)+": "+t+" => "+l.$formatCurrency(l.$roundDownAmt(e))+"%0a"})):n="Hello "+this.customerName+", This is to remind you that your "+l.$getColumn(parseInt(this.repaymentLevel)+1)+" repayment of "+l.$formatCurrency(l.$roundDownAmt(e))+" for "+r+" will be due on "+this.dueDates[this.repaymentLevel]+". we will be expecting you.",this._nextSMSReminder=n+"Please remember to pay on time to avoid late fees and other penalties.%0aThank you."}},{key:"setReminder",value:function(t){this._reminder={type:t,feedback:null,is_visited:null,dva_id:this.dvaId,order_id:this.order.id,customer_id:this.customer.id,canBeSelected:!this.isReminderSent,repayment_level:this.repaymentLevel+"/"+this.count},"sms"===t&&(this._reminder.sms_id=null,this._reminder.contacts=this.customer.telephone)}},{key:"setPromiseCall",value:function(){this._promiseCall={order_id:this.order.id,user_id:this.dvaId,customer_id:this.customer.id,date:null}}},{key:"isSelected",set:function(t){this._isSelected=t},get:function(){return this._isSelected}},{key:"isReminderSent",get:function(){return this._isReminderSent}},{key:"dvaId",get:function(){return this._dvaId}},{key:"financialStatus",get:function(){return this._financialStatus}},{key:"nextSMSReminder",get:function(){return this._nextSMSReminder}},{key:"reminder",get:function(){return this._reminder}},{key:"promiseCall",get:function(){return this._promiseCall}}]),e}();t.exports={Order:d,OrderWithPromiseCall:m}},rjj0:function(t,e,a){var r="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!r)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var n=a("tTVk"),s={},i=r&&(document.head||document.getElementsByTagName("head")[0]),o=null,c=0,u=!1,l=function(){},d=null,m="data-vue-ssr-id",p="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function f(t){for(var e=0;e<t.length;e++){var a=t[e],r=s[a.id];if(r){r.refs++;for(var n=0;n<r.parts.length;n++)r.parts[n](a.parts[n]);for(;n<a.parts.length;n++)r.parts.push(h(a.parts[n]));r.parts.length>a.parts.length&&(r.parts.length=a.parts.length)}else{var i=[];for(n=0;n<a.parts.length;n++)i.push(h(a.parts[n]));s[a.id]={id:a.id,refs:1,parts:i}}}}function v(){var t=document.createElement("style");return t.type="text/css",i.appendChild(t),t}function h(t){var e,a,r=document.querySelector("style["+m+'~="'+t.id+'"]');if(r){if(u)return l;r.parentNode.removeChild(r)}if(p){var n=c++;r=o||(o=v()),e=g.bind(null,r,n,!1),a=g.bind(null,r,n,!0)}else r=v(),e=function(t,e){var a=e.css,r=e.media,n=e.sourceMap;r&&t.setAttribute("media",r);d.ssrId&&t.setAttribute(m,e.id);n&&(a+="\n/*# sourceURL="+n.sources[0]+" */",a+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */");if(t.styleSheet)t.styleSheet.cssText=a;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(a))}}.bind(null,r),a=function(){r.parentNode.removeChild(r)};return e(t),function(r){if(r){if(r.css===t.css&&r.media===t.media&&r.sourceMap===t.sourceMap)return;e(t=r)}else a()}}t.exports=function(t,e,a,r){u=a,d=r||{};var i=n(t,e);return f(i),function(e){for(var a=[],r=0;r<i.length;r++){var o=i[r];(c=s[o.id]).refs--,a.push(c)}e?f(i=n(t,e)):i=[];for(r=0;r<a.length;r++){var c;if(0===(c=a[r]).refs){for(var u=0;u<c.parts.length;u++)c.parts[u]();delete s[c.id]}}}};var _,y=(_=[],function(t,e){return _[t]=e,_.filter(Boolean).join("\n")});function g(t,e,a,r){var n=a?"":r.css;if(t.styleSheet)t.styleSheet.cssText=y(e,n);else{var s=document.createTextNode(n),i=t.childNodes;i[e]&&t.removeChild(i[e]),i.length?t.insertBefore(s,i[e]):t.appendChild(s)}}},tTVk:function(t,e){t.exports=function(t,e){for(var a=[],r={},n=0;n<e.length;n++){var s=e[n],i=s[0],o={id:t+":"+n,css:s[1],media:s[2],sourceMap:s[3]};r[i]?r[i].parts.push(o):a.push(r[i]={id:i,parts:[o]})}return a}},wBhk:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["pageTitle","pageTitleSmall","previous","forward"]}}});
>>>>>>> 947d9829b705f35de1ea598304b979ddd1e01bad
=======
webpackJsonp([2],{"+O4B":function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mt-5 attendance-head"},[a("div",{staticClass:"mb-5 row align-items-center"},[a("div",{staticClass:"col-12 title-con"},[a("span",{staticClass:"title"},[t._v(t._s(t._f("capitalize")(t.title)))]),t._v(" "),t.to?a("div",{staticClass:"row justify-content-end"},[a("router-link",{staticClass:"text-link mt-3",attrs:{to:t.to}},[t._v(t._s(t.buttonTitle))])],1):t._e()])])])},staticRenderFns:[]}},"1gIg":function(t,e,a){var r=a("VU/8")(a("wBhk"),a("9sZT"),!1,null,null,null);t.exports=r.exports},"4I72":function(t,e,a){var r=a("VU/8")(a("WiSW"),a("r37U"),!1,null,null,null);t.exports=r.exports},"9sZT":function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h4",{staticClass:"mx-md-3 mx-0 py-0 my-0 text-center clearfix",attrs:{id:"app-navigation"}},[t.$routerHistory.hasPrevious()?a("router-link",{staticClass:"text-secondary float-left ml-1 pl-2 ml-sm-4 pl-sm-3",attrs:{to:t.previous,id:"back"}},[a("span",{staticClass:"mr-5 float-left"},[a("i",{staticClass:"far fa-arrow-alt-circle-left float-left"}),t._v(" "),a("small",{staticClass:"float-left ml-2 d-none d-sm-block"},[t._v("Back")])])]):t._e(),t._v(" "),a("strong",{staticClass:"mx-auto w-100 float-left",attrs:{"data-title":"title"}},[a("span",{staticClass:"d-none d-sm-block"},[t._v(t._s(t.pageTitle))]),t._v(" "),a("span",{staticClass:"d-block d-sm-none"},[t._v(t._s(t.pageTitleSmall))])]),t._v(" "),t.$routerHistory.hasForward()?a("router-link",{staticClass:"text-secondary float-right mr-1 pr-2 mr-sm-4 pr-sm-3",attrs:{to:t.forward,id:"forward"}},[a("span",{staticClass:"ml-5 float-right"},[a("i",{staticClass:"far fa-arrow-alt-circle-right float-right"}),t._v(" "),a("small",{staticClass:"float-right mr-2 d-none d-sm-block"},[t._v("Forward")])])]):t._e()],1)},staticRenderFns:[]}},EJ7O:function(t,e,a){var r=a("VU/8")(a("oKx2"),a("+O4B"),!1,null,null,null);t.exports=r.exports},HY2W:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=f(a("Xxa5")),n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(t[r]=a[r])}return t},s=(f(a("I3G/")),a("NYxO")),i=a("ic49"),o=f(a("KVer")),c=f(a("K23+")),u=a("m2tk"),l=a("p/p5"),d=a("rN6N"),m=f(a("EJ7O")),p=f(a("4I72"));function f(t){return t&&t.__esModule?t:{default:t}}function v(t){return function(){var e=t.apply(this,arguments);return new Promise(function(t,a){return function r(n,s){try{var i=e[n](s),o=i.value}catch(t){return void a(t)}if(!i.done)return Promise.resolve(o).then(function(t){r("next",t)},function(t){r("throw",t)});t(o)}("next")})}}e.default={components:{CustomHeader:m.default,CustomerProfile:p.default},data:function(){return{Order:d.Order,customer:null,customer_id:"",user:{name:o.default.state.user_name,id:o.default.state.user_id},show:!1,showModalContent:!1,activeOrder:null,headers:["Date","Order No.","Product Name","Total Product Price","Percentage","Down Payment","Repayment Plans"],paymentForm:null,canAddPayment:null}},methods:{updateView:function(){var t=v(r.default.mark(function t(e){var a,n;return r.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:a=e.customer,n=e.user,a.length?((a=a[0]).document.id||(a.document={id_card_url:"",passport_url:""}),this.user.branch=n.branch_id,this.customer=a,this.customer.orders=a.orders.map(function(t){return new d.Order(t,a)}),this.show=!0):c.default.setError("Customer not found.",5e3),this.$LIPS(!1);case 3:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),processForm:function(){var t=this;this.show=!1,this.$LIPS(!0),(0,l.get)("/api/customer/lookup/"+this.customer_id).then(function(e){return t.updateView(e.data)}).catch(function(){t.$LIPS(!1),c.default.setError("Error Fetching customer detail")})},displayAmortization:function(t){return this.activeOrder=this.customer.orders[t],this.canAddPayment=this.canUserAddPayment,this.paymentForm={payments:[]},this.showModalContent=!0,$("#amortization").modal("toggle")},addPaymentForm:function(){var t=this.activeOrder.repaymentLevel,e=parseInt(t+this.paymentForm.payments.length+1);t!==this.activeOrder._count&&(e>this.activeOrder._count||(this.paymentForm.payments.push({_pay:this.activeOrder.amountsToBePaid[0],_date:this.$getDate(),_payment_method:"",_payment_bank:"",_col:"",column:""}),this.reNumber()))},deletePayment:function(t){this.paymentForm.payments.splice(t,1),this.reNumber()},reNumber:function(){var t=this;this.paymentForm.payments.forEach(function(e,a){var r=t.activeOrder.repaymentLevel+a+1;t.paymentForm.payments[a]._col=r,t.paymentForm.payments[a].column=t.$getColumn(r)+" Repayment"})},preparePayments:function(){var t=this;if(this.canAddPayment){var e={};this.paymentForm.payments.forEach(function(a){var r={},s=t.$getColumn(a._col);r[s+"_pay"]=a._pay,r[s+"_date"]=a._date,r[s+"_payment_bank"]=a._payment_bank,r[s+"_payment_method"]=a._payment_method,e=n({},e,r)}),this.activeOrder.payments=e,$.isEmptyObject(e)?c.default.setError("You have not added any payment."):this.savePayments()}},savePayments:function(){var t=this;if(this.canAddPayment){this.$LIPS(!0);var e,a,n=void 0,s=void 0,i=void 0;6===this.activeOrder.count&&(n="formal"),12===this.activeOrder.count&&(n="informal"),e={payments:this.activeOrder.payments,repayment_id:this.activeOrder.order.id,type:n},(0,l.post)("/api/repayment",e).then((a=v(r.default.mark(function a(o){return r.default.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(!o.data.saved){a.next=13;break}return(s=t.customer.orders.find(function(t,a){var r=t.order.id===e.repayment_id;return r&&(i=a),r}).order)["repayment_"+n]=o.data.amortization,a.next=5,new d.Order(s,t.customer);case 5:return t.activeOrder=a.sent,t.customer.orders[i]=t.activeOrder,a.next=9,t.logAddedPayment(e);case 9:t.activeOrder.repaymentLevel===t.activeOrder.count&&t.sendPaymentCompleteSMS(),t.paymentForm={payments:[]},t.$scrollToTop(),t.$LIPS(!1);case 13:case"end":return a.stop()}},a,t)})),function(t){return a.apply(this,arguments)})).catch(function(){return c.default.setError("Error adding payment! Please try again later.")})}},sendPaymentCompleteSMS:function(){var t="Dear "+this.activeOrder.customerName+", you have successfully completed your payment for "+this.activeOrder.order.store_product.product_name+". Thanks for patronizing us.";new u.Message(t,this.activeOrder.customer.telephone).send(function(t){return 200===t.status&&c.default.setSuccess("Repayments Completed. SMS sent.")})},logAddedPayment:function(t){var e=this.paymentForm.payments.map(function(t){return t.column.replace(/ /g,"_")}).join(" ")+". Order: ID: "+t.repayment_id+". Customer ID: "+this.customer_id;return(0,i.log)("Payment(s) added",e)}},computed:n({},(0,s.mapGetters)(["getBanks","getPaymentMethods","auth"]),{check:function(){return!(!this.$isProcessing&&this.customer_id)},canUserAddPayment:function(){return this.auth("supervisor")&&this.user.branch===this.activeOrder.branch.id}}),created:function(){this.$prepareBanks(),this.$prepareBranches(),this.$preparePaymentMethods()}}},JoKY:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("transition",{attrs:{name:"fade"}},[a("div",{attrs:{id:"reminder"}},[a("div",{staticClass:"mt-5 attendance-head"},[a("div",{staticClass:"card"},[a("ul",{staticClass:"nav nav-tabs bg-default justify-content-center"},[a("h6",[t._v("Customer Lookup")])]),t._v(" "),a("div",{staticClass:"card-body p-4"},[a("form",{on:{submit:function(e){return e.preventDefault(),t.processForm(e)}}},[a("div",{staticClass:"m-0 p-0 col-12 form-group clearfix"},[a("label",{staticClass:"w-100"},[t._v("Customer ID")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.customer_id,expression:"customer_id"},{name:"validate",rawName:"v-validate",value:"required|numeric",expression:"'required|numeric'"}],staticClass:"form-control col-lg-9 col-md-8 col-sm-8 col-12 float-left mt-1",attrs:{"data-vv-as":"customer id",name:"customer_id"},domProps:{value:t.customer_id},on:{onkeyUp:t.check,input:function(e){e.target.composing||(t.customer_id=e.target.value)}}}),t._v(" "),a("div",{staticClass:"col-lg-3 col-md-4 col-sm-4 col-12 float-right px-md-3 mt-md-0 px-sm-3 mt-sm-0 mt-2 px-0"},[a("button",{staticClass:"btn btn-block bg-default my-1",attrs:{disabled:t.check,type:"submit"}},[t._v("\n                                    Fetch customer details "),a("i",{staticClass:"far fa-paper-plane ml-1"})])]),t._v(" "),t.errors.has("customer_id")?a("small",{staticClass:"form-text text-muted w-100"},[t._v("\n                                "+t._s(t.errors.first("customer_id"))+"\n                            ")]):t._e()])])])])]),t._v(" "),a("transition",{attrs:{name:"fade"}},[t.customer&&t.show?a("div",[a("div",{staticClass:"attendance-head"},[a("customer-profile",{attrs:{"view-customer":t.customer}})],1),t._v(" "),a("custom-header",{attrs:{title:"All order(s)"}}),t._v(" "),a("div",{staticClass:"mt-5 mb-3 attendance-head"},[a("div",{staticClass:"row px-4 pt-3 pb-4 text-center"},[a("div",{staticClass:"col light-heading",staticStyle:{"max-width":"100px"}},[t._v("S/No.")]),t._v(" "),t._l(t.headers,function(e){return a("div",{staticClass:"col light-heading"},[t._v(t._s(e))])})],2)]),t._v(" "),a("div",{staticClass:"tab-content mt-1 attendance-body"},[t.show&&t.customer.orders.length>0?a("div",{staticClass:"tab-pane active text-center"},t._l(t.customer.orders,function(e,r){return a("div",{staticClass:"mb-3 row attendance-item"},[a("div",{staticClass:"col-12 col-xs-2 col-md col-lg d-flex align-items-center",staticStyle:{"max-width":"100px"}},[a("span",{staticClass:"user mx-auto"},[t._v(t._s(r+1))])]),t._v(" "),a("div",{staticClass:"col-12 col-xs-2 col-md col-lg d-flex align-items-center justify-content-center"},[t._v("\n                                "+t._s(e.order.order_date)+"\n                            ")]),t._v(" "),a("div",{staticClass:"col-12 col-xs-2 col-md col-lg d-flex user-name align-items-center justify-content-center"},[t._v("\n                                "+t._s(e.order.id)+"\n                            ")]),t._v(" "),a("div",{staticClass:"col-12 col-xs-3 col-md col-lg d-flex align-items-center justify-content-center"},[t._v("\n                                "+t._s(e.order.store_product.product_name)+"\n                            ")]),t._v(" "),a("div",{staticClass:"col-12 col-xs-2 col-md col-lg d-flex align-items-center justify-content-center"},[t._v("\n                                "+t._s(t.$formatCurrency(e.order.product_price))+"\n                            ")]),t._v(" "),a("div",{staticClass:"col-12 col-xs-2 col-md col-lg d-flex align-items-center justify-content-center"},[t._v("\n                                "+t._s(e.order.sales_category.name)+"\n                            ")]),t._v(" "),a("div",{staticClass:"col-12 col-xs-2 col-md col-lg d-flex align-items-center justify-content-center"},[t._v("\n                                "+t._s(t.$formatCurrency(e.order.down_payment))+"\n                            ")]),t._v(" "),a("div",{staticClass:"col-12 col-xs-2 col-md col-lg d-flex align-items-center justify-content-center"},[a("button",{staticClass:"btn status my-sm-2",class:e.count===e.repaymentLevel?"approved":"pending",on:{click:function(e){t.displayAmortization(r)}}},[t._v("\n                                    View Plan\n                                    "),a("i",{staticClass:"fas ml-3",class:e.count===e.repaymentLevel?"fa-check-circle":"fa-hourglass-half",staticStyle:{"font-size":"1.4rem"}})])])])})):a("div",{staticClass:"tab-pane active text-center"},[a("div",{staticClass:"mb-3 row attendance-item"},[a("div",{staticClass:"col d-flex light-heading align-items-center justify-content-center"},[t._v("\n                                No records found!\n                            ")])])])]),t._v(" "),a("div",{staticClass:"mt-5 mb-3 attendance-head"},[a("div",{staticClass:"w-100 my-5 mx-0 hr"})])],1):t._e()]),t._v(" "),a("div",{staticClass:"modal fade repayment",attrs:{id:"amortization"}},[a("div",{staticClass:"modal-dialog modal-xl",attrs:{role:"document"}},[t.showModalContent?a("div",{staticClass:"modal-content"},[a("div",{staticClass:"modal-header py-2"},[a("h6",{staticClass:"modal-title py-1"},[t._v("\n                            Repayment Plan/Summary - "+t._s(t._f("capitalize")(t.customer.employment_status))+"\n                        ")]),t._v(" "),a("a",{staticClass:"close py-1",attrs:{"aria-label":"Close","data-dismiss":"modal"}},[a("span",{staticClass:"modal-close text-danger",attrs:{"aria-hidden":"true"}},[a("i",{staticClass:"fas fa-times"})])])]),t._v(" "),a("div",{staticClass:"modal-body"},[a("div",{staticClass:"table-responsive"},[a("h5",{staticClass:"mt-3 mb-0"},[t._v("Order Information")]),t._v(" "),a("table",{staticClass:"table table-bordered"},[a("tbody",[a("tr",{staticClass:"table-separator"},[a("td",[t._v("Name")]),t._v(" "),a("td",[t._v("Order Id")]),t._v(" "),a("td",[t._v("Product")]),t._v(" "),a("th",[t._v("Branch")])]),t._v(" "),a("tr",[a("td",{staticClass:"font-weight-bold"},[t._v(t._s(t.activeOrder.customerName)+"\n                                    ")]),t._v(" "),a("th",[t._v(t._s(t.activeOrder.order.id))]),t._v(" "),a("th",[t._v(t._s(t.activeOrder.order.store_product.product_name))]),t._v(" "),a("td",{staticClass:"font-weight-bold"},[t._v(t._s(t.activeOrder.branch.name))])])])]),t._v(" "),a("h5",{staticClass:"mt-5 mb-0"},[t._v("Amortization Schedule")]),t._v(" "),a("table",{staticClass:"table table-bordered"},[a("tbody",{staticClass:"text-center"},[a("tr",[a("th",[t._v("Repayment")]),t._v(" "),t._l(t.activeOrder.repaymentCaptions,function(e){return a("td",{domProps:{innerHTML:t._s(e)}})})],2),t._v(" "),a("tr",{staticClass:"table-separator"},[a("th",[t._v("Due Date")]),t._v(" "),t._l(t.activeOrder.dueDates,function(e){return a("td",[t._v(t._s(e))])})],2),t._v(" "),a("tr",[a("th",[t._v("Actual Pay Day")]),t._v(" "),t._l(t.activeOrder.actualPayDates,function(e){return a("td",[t._v(t._s(e))])})],2),t._v(" "),a("tr",{staticClass:"table-separator"},[a("th",[t._v("Status")]),t._v(" "),t._l(t.activeOrder.paymentStatusClasses,function(t){return a("td",{class:t.class},[a("i",{staticClass:"fas",class:t.icon})])})],2),t._v(" "),a("tr",{staticClass:"table-separator"},[a("th",[t._v("Repayment Amount")]),t._v(" "),t._l(t.activeOrder.amountsToBePaid,function(e){return a("td",[t._v("\n                                        "+t._s(t.$formatCurrency(e))+"\n                                    ")])})],2),t._v(" "),a("tr",[a("th",[t._v("Actual Amount Paid")]),t._v(" "),t._l(t.activeOrder.actualAmountsPaid,function(e){return a("td",[t._v("\n                                        "+t._s(t.$formatCurrency(e))+"\n                                    ")])})],2),t._v(" "),a("tr",{staticClass:"table-separator"},[a("th",[t._v("Payment Method")]),t._v(" "),t._l(t.activeOrder.paymentMethods,function(e){return a("td",{staticClass:"text-capitalize"},[t._v("\n                                        "+t._s(t.Order.convertToName(e,"paymentMethods"))+"\n                                    ")])})],2),t._v(" "),a("tr",[a("th",[t._v("Bank")]),t._v(" "),t._l(t.activeOrder.paymentBanks,function(e){return a("td",{staticClass:"text-capitalize"},[t._v("\n                                        "+t._s(t.Order.convertToName(e,"banks"))+"\n                                    ")])})],2)])]),t._v(" "),a("h5",{staticClass:"mt-5 mb-0"},[t._v("Payment Summary")]),t._v(" "),a("table",{staticClass:"table table-bordered"},[a("tbody",{staticClass:"text-center"},[a("tr",{staticClass:"table-separator"},[a("td",{staticClass:"text-left"},[t._v("Discount Detail (%)")]),t._v(" "),a("th",[t._v(t._s(t._f("capitalize")(t.activeOrder.discount)))]),t._v(" "),a("td",[t._v("Total Before Discount")]),t._v(" "),a("th",[t._v(t._s(t.$formatCurrency(t.$roundDownAmt(t.activeOrder.order.product_price))))]),t._v(" "),a("td",[t._v("Total Paid (+discount)")]),t._v(" "),a("th",[t._v(t._s(t.activeOrder.amountPaid))])]),t._v(" "),a("tr",[a("td",{staticClass:"text-left"},[t._v("Discount Amount")]),t._v(" "),a("th",[t._v(t._s(t.activeOrder.discountAmount))]),t._v(" "),a("td",[t._v("Total After Discount")]),t._v(" "),a("th",[t._v(t._s(t.activeOrder.discountedTotal))]),t._v(" "),a("td",[t._v("Total Debt")]),t._v(" "),a("th",[t._v(t._s(t.activeOrder.outstandingDebt))])]),t._v(" "),a("tr",[a("td",{staticClass:"text-left"},[t._v("Down Payment")]),t._v(" "),a("th",[t._v(t._s(t.$formatCurrency(t.$roundDownAmt(t.activeOrder.order.down_payment))))]),t._v(" "),a("td",[t._v("Total Plus Default Fee")]),t._v(" "),a("th",[t._v(t._s(t.activeOrder.totalPlusDefault))]),t._v(" "),a("td",[t._v("Default Fee")]),t._v(" "),a("th",[t._v(t._s(t.activeOrder.defaultFee))])])])]),t._v(" "),t.canAddPayment?a("h5",{staticClass:"mt-5 mb-0"},[t._v("Add a new payment")]):t._e(),t._v(" "),t.canAddPayment?a("table",{staticClass:"table table-bordered"},[a("tbody",{staticClass:"text-center"},[a("tr",{staticClass:"table-separator"},[a("td",{staticClass:"text-left"},[t._v("S/No.")]),t._v(" "),a("th",[t._v("Repayment")]),t._v(" "),a("th",[t._v("Amount")]),t._v(" "),a("th",[t._v("Payment Method")]),t._v(" "),a("th",[t._v("Bank")]),t._v(" "),a("th",[t._v("Date")]),t._v(" "),a("th",[t._v("Collected By")]),t._v(" "),a("th",[t._v("Action")])]),t._v(" "),t._l(t.paymentForm.payments,function(e,r){return a("tr",[a("th",[t._v(t._s(r+1))]),t._v(" "),a("th",[a("div",{staticClass:"form-group mb-0"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.paymentForm.payments[r].column,expression:"paymentForm.payments[index].column"}],staticClass:"form-control",attrs:{name:"date",type:"text",disabled:""},domProps:{value:t.paymentForm.payments[r].column},on:{input:function(e){e.target.composing||t.$set(t.paymentForm.payments[r],"column",e.target.value)}}})])]),t._v(" "),a("th",[a("div",{staticClass:"form-group mb-0"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.paymentForm.payments[r]._pay,expression:"paymentForm.payments[index]._pay"}],staticClass:"form-control",attrs:{name:"date",type:"text"},domProps:{value:t.paymentForm.payments[r]._pay},on:{input:function(e){e.target.composing||t.$set(t.paymentForm.payments[r],"_pay",e.target.value)}}})])]),t._v(" "),a("th",[a("select",{directives:[{name:"model",rawName:"v-model",value:t.paymentForm.payments[r]._payment_method,expression:"paymentForm.payments[index]._payment_method"}],staticClass:"custom-select w-100",on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.$set(t.paymentForm.payments[r],"_payment_method",e.target.multiple?a:a[0])}}},t._l(t.getPaymentMethods,function(e){var r=e.name,n=e.id;return a("option",{domProps:{value:n}},[t._v("\n                                                "+t._s(t._f("capitalize")(r))+"\n                                            ")])}))]),t._v(" "),a("th",[a("select",{directives:[{name:"model",rawName:"v-model",value:t.paymentForm.payments[r]._payment_bank,expression:"paymentForm.payments[index]._payment_bank"}],staticClass:"custom-select w-100",on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.$set(t.paymentForm.payments[r],"_payment_bank",e.target.multiple?a:a[0])}}},t._l(t.getBanks,function(e){var r=e.name,n=e.id;return a("option",{domProps:{value:n}},[t._v(t._s(r))])}))]),t._v(" "),a("th",[a("div",{staticClass:"form-group mb-0"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.paymentForm.payments[r]._date,expression:"paymentForm.payments[index]._date"}],staticClass:"form-control",attrs:{name:"date",type:"date"},domProps:{value:t.paymentForm.payments[r]._date},on:{input:function(e){e.target.composing||t.$set(t.paymentForm.payments[r],"_date",e.target.value)}}})])]),t._v(" "),a("th",[a("div",{staticClass:"form-group mb-0"},[a("input",{staticClass:"form-control",attrs:{"data-vv-as":"date",name:"date",type:"text",disabled:""},domProps:{value:t.user.name}})])]),t._v(" "),a("th",[a("button",{staticClass:"ml-2 btn status status-sm my-sm-2 not-approved",on:{click:function(e){t.deletePayment(r)}}},[a("i",{staticClass:"fas fa-times"})])])])})],2)]):t._e()])]),t._v(" "),a("div",{staticClass:"modal-footer",class:{"d-flex justify-content-end":!t.canAddPayment}},[t.canAddPayment?a("button",{staticClass:"btn status my-sm-2",on:{click:function(e){t.addPaymentForm()}}},[t._v("\n                            Add Payment\n                        ")]):t._e(),t._v(" "),t.canAddPayment?a("button",{staticClass:"btn status my-sm-2 approved ml-4",on:{click:function(e){t.preparePayments()}}},[t._v("\n                            Click here to Submit Payment(s)!\n                        ")]):t._e(),t._v(" "),a("a",{staticClass:"text-link mt-3",staticStyle:{"text-align":"right"},attrs:{"data-dismiss":"modal",href:"javascript:"}},[t._v("close dialogue")])])]):t._e()])])],1)])},staticRenderFns:[]}},N9TL:function(t,e,a){var r=a("VU/8")(a("HY2W"),a("JoKY"),!1,function(t){a("h2EW")},"data-v-934e31f6",null);t.exports=r.exports},SldL:function(t,e){!function(e){"use strict";var a,r=Object.prototype,n=r.hasOwnProperty,s="function"==typeof Symbol?Symbol:{},i=s.iterator||"@@iterator",o=s.asyncIterator||"@@asyncIterator",c=s.toStringTag||"@@toStringTag",u="object"==typeof t,l=e.regeneratorRuntime;if(l)u&&(t.exports=l);else{(l=e.regeneratorRuntime=u?t.exports:{}).wrap=C;var d="suspendedStart",m="suspendedYield",p="executing",f="completed",v={},h={};h[i]=function(){return this};var _=Object.getPrototypeOf,y=_&&_(_($([])));y&&y!==r&&n.call(y,i)&&(h=y);var g=k.prototype=x.prototype=Object.create(h);w.prototype=g.constructor=k,k.constructor=w,k[c]=w.displayName="GeneratorFunction",l.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===w||"GeneratorFunction"===(e.displayName||e.name))},l.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,k):(t.__proto__=k,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(g),t},l.awrap=function(t){return{__await:t}},P(D.prototype),D.prototype[o]=function(){return this},l.AsyncIterator=D,l.async=function(t,e,a,r){var n=new D(C(t,e,a,r));return l.isGeneratorFunction(e)?n:n.next().then(function(t){return t.done?t.value:n.next()})},P(g),g[c]="Generator",g[i]=function(){return this},g.toString=function(){return"[object Generator]"},l.keys=function(t){var e=[];for(var a in t)e.push(a);return e.reverse(),function a(){for(;e.length;){var r=e.pop();if(r in t)return a.value=r,a.done=!1,a}return a.done=!0,a}},l.values=$,F.prototype={constructor:F,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=a,this.done=!1,this.delegate=null,this.method="next",this.arg=a,this.tryEntries.forEach(A),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=a)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,n){return o.type="throw",o.arg=t,e.next=r,n&&(e.method="next",e.arg=a),!!n}for(var s=this.tryEntries.length-1;s>=0;--s){var i=this.tryEntries[s],o=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var c=n.call(i,"catchLoc"),u=n.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,e){for(var a=this.tryEntries.length-1;a>=0;--a){var r=this.tryEntries[a];if(r.tryLoc<=this.prev&&n.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var s=r;break}}s&&("break"===t||"continue"===t)&&s.tryLoc<=e&&e<=s.finallyLoc&&(s=null);var i=s?s.completion:{};return i.type=t,i.arg=e,s?(this.method="next",this.next=s.finallyLoc,v):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var a=this.tryEntries[e];if(a.finallyLoc===t)return this.complete(a.completion,a.afterLoc),A(a),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var a=this.tryEntries[e];if(a.tryLoc===t){var r=a.completion;if("throw"===r.type){var n=r.arg;A(a)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:$(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=a),v}}}function C(t,e,a,r){var n=e&&e.prototype instanceof x?e:x,s=Object.create(n.prototype),i=new F(r||[]);return s._invoke=function(t,e,a){var r=d;return function(n,s){if(r===p)throw new Error("Generator is already running");if(r===f){if("throw"===n)throw s;return T()}for(a.method=n,a.arg=s;;){var i=a.delegate;if(i){var o=O(i,a);if(o){if(o===v)continue;return o}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if(r===d)throw r=f,a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);r=p;var c=b(t,e,a);if("normal"===c.type){if(r=a.done?f:m,c.arg===v)continue;return{value:c.arg,done:a.done}}"throw"===c.type&&(r=f,a.method="throw",a.arg=c.arg)}}}(t,a,i),s}function b(t,e,a){try{return{type:"normal",arg:t.call(e,a)}}catch(t){return{type:"throw",arg:t}}}function x(){}function w(){}function k(){}function P(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function D(t){var e;this._invoke=function(a,r){function s(){return new Promise(function(e,s){!function e(a,r,s,i){var o=b(t[a],t,r);if("throw"!==o.type){var c=o.arg,u=c.value;return u&&"object"==typeof u&&n.call(u,"__await")?Promise.resolve(u.__await).then(function(t){e("next",t,s,i)},function(t){e("throw",t,s,i)}):Promise.resolve(u).then(function(t){c.value=t,s(c)},i)}i(o.arg)}(a,r,e,s)})}return e=e?e.then(s,s):s()}}function O(t,e){var r=t.iterator[e.method];if(r===a){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=a,O(t,e),"throw"===e.method))return v;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var n=b(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,v;var s=n.arg;return s?s.done?(e[t.resultName]=s.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=a),e.delegate=null,v):s:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,v)}function S(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function A(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function F(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(S,this),this.reset(!0)}function $(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,s=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=a,e.done=!0,e};return s.next=s}}return{next:T}}function T(){return{value:a,done:!0}}}(function(){return this}()||Function("return this")())},WiSW:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=i(a("I3G/")),n=(a("N71M"),a("nv24")),s=i(a("1gIg"));function i(t){return t&&t.__esModule?t:{default:t}}e.default={props:["viewCustomer"],components:{AppNavigation:s.default},data:function(){return{customer:"",show:!1}},computed:{full:function(){return"full"===this.$route.meta.mode},passport:function(){return"https://s3.eu-west-2.amazonaws.com/altara-one/"+this.customer.document.passport_url},branch:function(){return this.customer.branch.description+" "+this.customer.branch.name},approved:function(){return this.$getCustomerApprovalStatus(this.customer.verification)}},created:function(){var t=this;$(".tooltip").remove(),this.viewCustomer&&this.setCustomer(this.viewCustomer),n.EventBus.$on("customer",function(e){return t.setCustomer(e)})},methods:{setCustomer:function(t){r.default.set(this.$data,"customer",t),this.show=!0}}}},Xxa5:function(t,e,a){t.exports=a("jyFz")},h2EW:function(t,e,a){var r=a("n9Ml");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);a("rjj0")("6d8aab8e",r,!0,{})},ic49:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.log=function(t,e){t=t.replace(/([A-Z])/g," $1").replace(/^./,function(t){return t.toUpperCase()}),(0,r.post)("/api/log",{action:t,description:e})};var r=a("p/p5")},jyFz:function(t,e,a){var r=function(){return this}()||Function("return this")(),n=r.regeneratorRuntime&&Object.getOwnPropertyNames(r).indexOf("regeneratorRuntime")>=0,s=n&&r.regeneratorRuntime;if(r.regeneratorRuntime=void 0,t.exports=a("SldL"),n)r.regeneratorRuntime=s;else try{delete r.regeneratorRuntime}catch(t){r.regeneratorRuntime=void 0}},m2tk:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Message=void 0;var r=function(){function t(t,e){for(var a=0;a<e.length;a++){var r=e[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,a,r){return a&&t(e.prototype,a),r&&t(e,r),e}}(),n=a("p/p5");e.Message=function(){function t(e,a){var r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.user_id=n,this.message=e,this.logToDB=r,this.contacts=a.split(",").filter(function(t){return/\S/.test(t)}).map(function(t){return"234"+t.trim().substr(1)}).join(","),this.setPages(),this.setContactCount()}return r(t,[{key:"setContactCount",value:function(){this.contact_count=this.contacts.split(",").length}},{key:"setPages",value:function(){this.pages=Math.ceil(this.message.length/160)}},{key:"send",value:function(t){var e=this;(0,n.get)("/api/message/create?to="+this.contacts+"&message="+this.message).then(function(a){return 200===a.status&&e.logToDB&&(delete e.logToDB,(0,n.post)("/api/message",e)),!!t&&t(a)}).catch(function(e){return!!t&&t(e)})}}]),t}()},n9Ml:function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,".attendance-item[data-v-934e31f6]{cursor:auto}",""])},nv24:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.EventBus=void 0;var r,n=a("I3G/"),s=(r=n)&&r.__esModule?r:{default:r};e.EventBus=new s.default},oKx2:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{title:"",buttonTitle:null,to:null}}},r37U:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("transition",{attrs:{name:"fade"}},[a("div",{class:t.full&&"px-md-4 px-2"},[t.full?a("app-navigation",{attrs:{forward:{path:t.$routerHistory.next().path},previous:{path:t.$routerHistory.previous().path},pageTitle:"Customer Profile",pageTitleSmall:"Customer Profile"}}):t._e(),t._v(" "),t.show?a("div",{staticClass:"pt-md-3 pt-2 verification",attrs:{id:"employeeRegister"}},[a("div",{staticClass:"customer-profile card position-relative"},[a("div",{staticClass:"design"}),t._v(" "),a("div",{staticClass:"col-md-4 col-sm-4 col-12 px-0 pb-md-4 pb-sm-3 pb-0 pt-md-5 pt-4 float-left"},[a("div",{staticClass:"pt-md-3 pt-sm-2 pt-1"},[a("div",{staticClass:"justify-content-center d-flex position-relative z-1"},[a("span",{staticClass:"img-border"},[t.customer.document.passport_url?a("img",{staticClass:"profile-picture rounded-circle",attrs:{src:t.passport,alt:"customer profile pic"}}):a("i",{staticClass:"no-image fas fa-user-alt"})])]),t._v(" "),a("div",{staticClass:"justify-content-center d-flex position-relative z-1 pt-md-4 pt-sm-4 pt-2"},[a("span",{staticClass:"w-50"},[a("div",{staticClass:"text-right px-4 py-3 text-light text-muted m-0"},[t._v("\n                                    Status"),a("i",{staticClass:"ml-3 fas fa-briefcase"})]),t._v(" "),a("div",{staticClass:"data text-right px-4 py-3 m-0"},[t._v(t._s(t._f("capitalize")(t.customer.employment_status)))])]),t._v(" "),a("span",{staticClass:"separator"}),t._v(" "),a("span",{staticClass:"w-50"},[a("div",{staticClass:"px-4 py-3 text-muted text-light m-0"},[a("i",{staticClass:"mr-3 fas fa-transgender"}),t._v("Gender\n                                ")]),t._v(" "),a("div",{staticClass:"data px-4 py-3 m-0"},[t._v(t._s(t._f("capitalize")(t.customer.gender)))])])])])]),t._v(" "),a("div",{staticClass:"col-md-8 col-sm-8 col-12 px-0 pb-4 pt-md-5 pt-sm-5 pt-0 float-left"},[a("div",{staticClass:"pt-md-4 pt-0 clearfix"},[a("div",{staticClass:"float-left p-0 m-0 col-md-4 col-sm-6 small-center"},[a("h4",{staticClass:"mt-0 pt-md-5 pt-sm-4 pt-0 mb-md-5 mb-sm-4 mb-3"},[a("i",{staticClass:"mr-3 far fa-user-circle"}),t._v(" "),a("strong",[t._v(t._s(t._f("capitalize")(t.$getCustomerFullName(t.customer))))])])]),t._v(" "),a("div",{staticClass:"float-left p-0 m-0 col-md-4 col-sm-6 d-flex justify-content-center"},[a("h4",{staticClass:"mt-0 pt-md-5 pt-sm-4 pt-0 mb-md-5 mb-sm-4 mb-4 text-muted"},[a("strong",[t._v("Customer ID: "+t._s(t.customer.id))])])]),t._v(" "),a("div",{staticClass:"float-left p-0 m-0 col-md-4 col-12 d-flex justify-content-center"},[a("span",{class:"status mt-md-5 my-sm-2 mt-0 "+(t.approved?"approved":"not-approved")},[t._v("\n                                "+t._s(t.approved?"APPROVED":"NOT APPROVED")+"\n                                "),a("i",{class:"ml-3 fas fa-"+(t.approved?"check":"times")})])])]),t._v(" "),a("div",{staticClass:"pt-4"},[a("table",{staticClass:"table"},[a("tbody",[a("tr",[a("th",{staticClass:"text-muted"},[a("i",{staticClass:"mr-3 fas fa-mobile-alt"}),t._v("Phone Number")]),t._v(" "),a("td",[t._v(t._s(t.customer.telephone))])]),t._v(" "),t.$store.getters.auth("DVAAccess")?a("tr",[a("th",{staticClass:"text-muted"},[a("i",{staticClass:"mr-3 fas fa-map-marker-alt"}),t._v("Address")]),t._v(" "),a("td",[t._v(t._s(t._f("capitalize")(t.$getCustomerAddress(t.customer)))+"\n                                ")])]):t._e(),t._v(" "),a("tr",[a("th",{staticClass:"text-muted"},[a("i",{staticClass:"mr-3 fas fa-gift"}),t._v("Registered On")]),t._v(" "),a("td",[t._v(t._s(t.customer.date_of_registration))])]),t._v(" "),a("tr",[a("th",{staticClass:"text-muted"},[a("i",{staticClass:"mr-3 far fa-user-circle"}),t._v("Registered By")]),t._v(" "),a("td",[t._v(t._s(t._f("capitalize")(t.customer.user?t.customer.user.full_name:"user not in record"))+"\n                                ")])]),t._v(" "),a("tr",[a("th",{staticClass:"text-muted"},[a("i",{staticClass:"mr-3 far fa-building"}),t._v("Branch")]),t._v(" "),a("td",[t._v(t._s(t._f("capitalize")(t.branch)))])])])])])])]),t._v(" "),t.full?a("div",[t._v("Full profile goes here")]):t._e()]):t._e()],1)])},staticRenderFns:[]}},rN6N:function(t,e,a){"use strict";var r,n=function(){function t(t,e){for(var a=0;a<e.length;a++){var r=e[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,a,r){return a&&t(e.prototype,a),r&&t(e,r),e}}(),s=a("I3G/"),i=(r=s)&&r.__esModule?r:{default:r},o=a("N71M");function c(t){if(Array.isArray(t)){for(var e=0,a=Array(t.length);e<t.length;e++)a[e]=t[e];return a}return Array.from(t)}function u(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var l=new i.default,d=function(){function t(e,a){u(this,t),this._order=e,this._customer=a,this._paymentBanks=[],this._paymentMethods=[],this._actualPayDates=[],this._actualAmountsPaid=[],this._amountsToBePaid=[],this._repaymentCaptions=[],this._paymentStatusClasses=[],this._repaymentLevel=0,this._amountPaid=null,this._discountAmount=null,this._outstandingDebt=null,this._discountedTotal=null,this._defaultFee=null,this._totalPlusDefault=null,this._payments={},this.setIsOrderFormal(),this.setIsRepaymentValid(),this.setRepaymentData(),this.setCountAndInterval(),this.setCommonDetails(),this.setDueDates(),this.setPaymentStatusClasses(),this.calcAndSetPaymentSummary(),this.setBranch(),this.setDiscount()}return n(t,[{key:"setIsRepaymentValid",value:function(){this._isRepaymentValid=!(!this.order.repayment_formal&&!this.order.repayment_informal)}},{key:"setIsOrderFormal",value:function(){this._isOrderFormal=["formal","salaried"].includes(this._customer.employment_status.toLowerCase())}},{key:"setRepaymentData",value:function(){null!=this.order.repayment_formal&&(this._repaymentData=this.order.repayment_formal),null!=this.order.repayment_informal&&(this._repaymentData=this.order.repayment_informal)}},{key:"setCountAndInterval",value:function(){var e=void 0,a=void 0;new Date(this.order.order_date)<=new Date("2019-07-07")?(null!=this.order.repayment_formal&&(e=28,a=6),null!=this.order.repayment_informal&&(e=14,a=12)):t.isBankDraftAvailable()&&this.isOrderFormal?(e=28,a=6):(e=14,a=12),this._count=a,this._interval=e}},{key:"setDueDates",value:function(){this._dueDates=t.generateDueDates(this.order.order_date,this.interval,this.count)}},{key:"setCommonDetails",value:function(){if(this.isRepaymentValid)for(var t=1;t<this.count+1;t++){for(var e=l.$getColumn(t).split(""),a=[],r=1;r<=2;r++)a.unshift(e.pop());this._repaymentCaptions.push("<td>"+e.join("")+"<sup>"+a.join("")+"</sup></td>"),this._actualPayDates.push(this.repaymentData[l.$getColumn(t)+"_date"]),this._actualAmountsPaid.push(this.repaymentData[l.$getColumn(t)+"_pay"]),this._paymentBanks.push(this.repaymentData[l.$getColumn(t)+"_payment_bank"]),this._paymentMethods.push(this.repaymentData[l.$getColumn(t)+"_payment_method"]),this._amountsToBePaid.push(l.$roundDownAmt(this.order.repayment_amount)),this.repaymentData[l.$getColumn(t)+"_pay"]>0&&this._repaymentLevel++}}},{key:"setBranch",value:function(){var t=this;this.order.store_product?this._branch=o.store.state.branches.find(function(e){return parseInt(e.id)===parseInt(t.order.store_product.store_name)}):this._branch=null}},{key:"setPaymentStatusClasses",value:function(){if(this.isRepaymentValid)for(var e=1;e<this.count+1;e++){var a={class:null,icon:null},r=l.$getColumn(e),n=t.isPaymentDue(this.dueDates[e-1]),s=parseInt(this.repaymentData[r+"_pay"]);s?(a.class="paid",a.icon="fa-check"):n&&!s?(a.class="missed",a.icon="fa-times"):n||(a.class="pending",a.icon="fa-hourglass-start"),this._paymentStatusClasses.push(a)}}},{key:"calcAndSetPaymentSummary",value:function(){var t=function(t){return l.$formatCurrency(t)},e=this.order,a=e.repayment_amount,r=e.down_payment,n=e.product_price,s=6===this.count?.5:1,i=this.order.discount.percentage_discount,o=i>0?5===i?1:2:0,c=l.$roundDownAmt(a*s*o);this._discountAmount=t(c);var u=0,d=0;if(this.repaymentData){for(var m=0;m<this.count+1;m++){var p=parseInt(this.actualAmountsPaid[m]);d+=p?l.$roundDownAmt(p):0}u=l.$roundDownAmt(parseInt(r))+d+c}this._amountPaid=t(u);var f=l.$roundDownAmt(n-c);this._discountedTotal=t(f);var v=0;new Date(this.order.order_date)>new Date("2019-07-07")&&(v=500*[].length),this._defaultFee=t(v),this._totalPlusDefault=t(f+v),this._outstandingDebt=t(l.$roundDownAmt(parseInt(n)-u))}},{key:"setDiscount",value:function(){this._discount=this.order.discount.name+" "+this.order.discount.percentage_discount}},{key:"payments",set:function(t){this._payments=t},get:function(){return this._payments}},{key:"repaymentLevel",get:function(){return this._repaymentLevel}},{key:"order",get:function(){return this._order}},{key:"customer",get:function(){return this._customer}},{key:"isRepaymentValid",get:function(){return this._isRepaymentValid}},{key:"isOrderFormal",get:function(){return this._isOrderFormal}},{key:"repaymentData",get:function(){return this._repaymentData}},{key:"count",get:function(){return this._count}},{key:"interval",get:function(){return this._interval}},{key:"dueDates",get:function(){return this._dueDates}},{key:"paymentStatusClasses",get:function(){return this._paymentStatusClasses}},{key:"repaymentCaptions",get:function(){return this._repaymentCaptions}},{key:"paymentBanks",get:function(){return this._paymentBanks}},{key:"paymentMethods",get:function(){return this._paymentMethods}},{key:"actualPayDates",get:function(){return this._actualPayDates}},{key:"actualAmountsPaid",get:function(){return this._actualAmountsPaid}},{key:"amountsToBePaid",get:function(){return this._amountsToBePaid}},{key:"amountPaid",get:function(){return this._amountPaid}},{key:"discountAmount",get:function(){return this._discountAmount}},{key:"outstandingDebt",get:function(){return this._outstandingDebt}},{key:"discountedTotal",get:function(){return this._discountedTotal}},{key:"defaultFee",get:function(){return this._defaultFee}},{key:"totalPlusDefault",get:function(){return this._totalPlusDefault}},{key:"branch",get:function(){return this._branch}},{key:"discount",get:function(){return this._discount}},{key:"customerName",get:function(){return this.customer.first_name+" "+this.customer.last_name}},{key:"customerWGName",get:function(){var t=this.customer;return t.work_guarantor_first_name+" "+t.work_guarantor_last_name+" - "+t.work_guarantor_relationship}},{key:"customerPGName",get:function(){var t=this.customer;return t.personal_guarantor_first_name+" "+t.personal_guarantor_last_name+" - "+t.personal_guarantor_relationship}}],[{key:"generateDueDates",value:function(t,e,a){for(var r=[],n=0;n<a;n++){var s=new Date(t).addDays((n+1)*e),i=l.$getDate(s);r.push(i)}return r}},{key:"isPaymentDue",value:function(t){return new Date>new Date(t)}},{key:"isBankDraftAvailable",value:function(){return!1}},{key:"renderMessage",value:function(t){return t.sms?t.sms.message.replace(/%0a/g,"</br>"):t.feedback}},{key:"convertToName",value:function(t,e){return t?o.store.state[e].find(function(e){return e.id===t}).name:null}}]),t}(),m=function(t){function e(t,a){u(this,e);var r=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,t.customer));return r._isReminderSent=!1,r._dvaId=a,r._isSelected=!1,r.setReminder(null),r.setIsReminderSent(),r.setFinancialStatus(),r.setPromiseCall(),r.generateAndSetNextSMSReminder(),r}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,d),n(e,[{key:"setIsReminderSent",value:function(){var t=this,e=l.$getDate();this.order.reminders.forEach(function(a){var r=a.date.split(" "),n=r[0].split("-"),s=r[1].split(":"),i=[].concat(c(n),c(s)).map(function(t){return parseInt(t,10)});l.$getDate(new Date(Date.UTC.apply(Date,c(i))),!1)===e&&(t._isReminderSent=!0)})}},{key:"setFinancialStatus",value:function(){this._financialStatus=this.isRepaymentValid?"Paid: "+this.amountPaid+" | Debt: "+this.outstandingDebt:"no detail!"}},{key:"generateAndSetNextSMSReminder",value:function(){var t=null;this.order.store_product&&(t=this.order.store_product.product_name);var e=this.order,a=e.repayment_amount,r=void 0;e.order_date===l.$getDate()?(r="Hello "+this.customerName+", thanks for patronizing us. The following is the breakdown of the repayment plan for the purchase of "+t+":%0a",this.dueDates.forEach(function(t,e){return r+=l.$getColumn(e+1)+": "+t+" => "+l.$formatCurrency(l.$roundDownAmt(a))+"%0a"})):r="Hello "+this.customerName+", This is to remind you that your "+l.$getColumn(parseInt(this.repaymentLevel)+1)+" repayment of "+l.$formatCurrency(l.$roundDownAmt(a))+" for "+t+" will be due on "+this.dueDates[this.repaymentLevel]+". we will be expecting you.",this._nextSMSReminder=r+"Please remember to pay on time to avoid late fees and other penalties.%0aThank you."}},{key:"setReminder",value:function(t){this._reminder={type:t,feedback:null,is_visited:null,dva_id:this.dvaId,order_id:this.order.id,customer_id:this.customer.id,canBeSelected:!this.isReminderSent,repayment_level:this.repaymentLevel+"/"+this.count},"sms"===t&&(this._reminder.sms_id=null,this._reminder.contacts=this.customer.telephone)}},{key:"setPromiseCall",value:function(){this._promiseCall={order_id:this.order.id,user_id:this.dvaId,customer_id:this.customer.id,date:null}}},{key:"isSelected",set:function(t){this._isSelected=t},get:function(){return this._isSelected}},{key:"isReminderSent",get:function(){return this._isReminderSent}},{key:"dvaId",get:function(){return this._dvaId}},{key:"financialStatus",get:function(){return this._financialStatus}},{key:"nextSMSReminder",get:function(){return this._nextSMSReminder}},{key:"reminder",get:function(){return this._reminder}},{key:"promiseCall",get:function(){return this._promiseCall}}]),e}();t.exports={Order:d,OrderWithPromiseCall:m}},rjj0:function(t,e,a){var r="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!r)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var n=a("tTVk"),s={},i=r&&(document.head||document.getElementsByTagName("head")[0]),o=null,c=0,u=!1,l=function(){},d=null,m="data-vue-ssr-id",p="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function f(t){for(var e=0;e<t.length;e++){var a=t[e],r=s[a.id];if(r){r.refs++;for(var n=0;n<r.parts.length;n++)r.parts[n](a.parts[n]);for(;n<a.parts.length;n++)r.parts.push(h(a.parts[n]));r.parts.length>a.parts.length&&(r.parts.length=a.parts.length)}else{var i=[];for(n=0;n<a.parts.length;n++)i.push(h(a.parts[n]));s[a.id]={id:a.id,refs:1,parts:i}}}}function v(){var t=document.createElement("style");return t.type="text/css",i.appendChild(t),t}function h(t){var e,a,r=document.querySelector("style["+m+'~="'+t.id+'"]');if(r){if(u)return l;r.parentNode.removeChild(r)}if(p){var n=c++;r=o||(o=v()),e=g.bind(null,r,n,!1),a=g.bind(null,r,n,!0)}else r=v(),e=function(t,e){var a=e.css,r=e.media,n=e.sourceMap;r&&t.setAttribute("media",r);d.ssrId&&t.setAttribute(m,e.id);n&&(a+="\n/*# sourceURL="+n.sources[0]+" */",a+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */");if(t.styleSheet)t.styleSheet.cssText=a;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(a))}}.bind(null,r),a=function(){r.parentNode.removeChild(r)};return e(t),function(r){if(r){if(r.css===t.css&&r.media===t.media&&r.sourceMap===t.sourceMap)return;e(t=r)}else a()}}t.exports=function(t,e,a,r){u=a,d=r||{};var i=n(t,e);return f(i),function(e){for(var a=[],r=0;r<i.length;r++){var o=i[r];(c=s[o.id]).refs--,a.push(c)}e?f(i=n(t,e)):i=[];for(r=0;r<a.length;r++){var c;if(0===(c=a[r]).refs){for(var u=0;u<c.parts.length;u++)c.parts[u]();delete s[c.id]}}}};var _,y=(_=[],function(t,e){return _[t]=e,_.filter(Boolean).join("\n")});function g(t,e,a,r){var n=a?"":r.css;if(t.styleSheet)t.styleSheet.cssText=y(e,n);else{var s=document.createTextNode(n),i=t.childNodes;i[e]&&t.removeChild(i[e]),i.length?t.insertBefore(s,i[e]):t.appendChild(s)}}},tTVk:function(t,e){t.exports=function(t,e){for(var a=[],r={},n=0;n<e.length;n++){var s=e[n],i=s[0],o={id:t+":"+n,css:s[1],media:s[2],sourceMap:s[3]};r[i]?r[i].parts.push(o):a.push(r[i]={id:i,parts:[o]})}return a}},wBhk:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["pageTitle","pageTitleSmall","previous","forward"]}}});
>>>>>>> 74194a5f1cc9829de2f06759c7ace0b254cd3b2f
=======
webpackJsonp([2],{"+O4B":function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"mt-5 attendance-head"},[r("div",{staticClass:"mb-5 row align-items-center"},[r("div",{staticClass:"col-12 title-con"},[r("span",{staticClass:"title"},[t._v(t._s(t._f("capitalize")(t.title)))]),t._v(" "),t.to?r("div",{staticClass:"row justify-content-end"},[r("router-link",{staticClass:"text-link mt-3",attrs:{to:t.to}},[t._v(t._s(t.buttonTitle))])],1):t._e()])])])},staticRenderFns:[]}},"7elN":function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a,n=r("p/p5"),s=r("K23+"),i=(a=s)&&a.__esModule?a:{default:a},o=(r("nv24"),r("rN6N"));e.default={props:{mode:null,index:null,startIndex:{default:1},order:{default:null,type:o.Order}},created:function(){this.order.setReminder(this.mode)},methods:{logReminder:function(){var t=this;this.$LIPS(!0),delete this.order.reminder.order,delete this.order.reminder.canBeSelected,(0,n.post)("/api/reminder",{reminders:[this.order.reminder]}).then(function(e){return e.data.saved&&t.logPromiseCall()}).catch(function(){return t.$displayErrorMessage("Error Logging reminders!")})},logPromiseCall:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Reminder Logged!";this.order.promiseCall.date?(0,n.post)("/api/promise_call",this.order.promiseCall).then(function(r){return r.data.saved&&t.done(e+" Promise call added!")}).catch(function(){return t.$displayErrorMessage("Error Logging promise call!")}):this.done(e)},done:function(t){this.$scrollToTop(),i.default.setSuccess(t,5e3),this.$emit("done")},toggleSelect:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;this.order.reminder.canBeSelected&&(this.order.isSelected=null!==t?t:!this.order.isSelected)}}}},C326:function(t,e,r){var a=r("I/R6");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);r("rjj0")("b73e2b8a",a,!0,{})},EJ7O:function(t,e,r){var a=r("VU/8")(r("oKx2"),r("+O4B"),!1,null,null,null);t.exports=a.exports},"I/R6":function(t,e,r){(t.exports=r("FZ+f")(!1)).push([t.i,".table-separator[data-v-ec211ae4]{border-top:2px solid #dee1e4}",""])},Oi84:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=r("p/p5"),n=l(r("K23+")),s=l(r("XPj8")),i=l(r("EJ7O")),o=r("rN6N");function l(t){return t&&t.__esModule?t:{default:t}}e.default={components:{CustomHeader:i.default,Order:s.default},data:function(){return{branch_id:"",overdue_days:1,filters:[{name:"branch",model:"branch_id"},{name:"overdue days",model:"overdue_days"}],orders:null,response:{},show:!1,headings:["Order Number","Order Summary","Customer Info Summary","Repayment Summary","Reminder History"]}},methods:{fetchData:function(){var t=this;this.$scrollToTop(),this.$LIPS(!0);var e=this.$data,r=e.branch_id,s=e.overdue_days;(0,a.get)("/api/reminder/create"+(s?"?overdue_days="+s:"")+(r?"&branch_id="+r:"")).then(function(e){var r=e.data;return t.prepareForm(r)}).catch(function(){return n.default.setError("Error Preparing form")})},prepareForm:function(t){var e=this;this.show=!1,this.orders=null,this.response={};var r=[];t.orders.forEach(function(a){var n=void 0,s=new Date,i=new o.OrderWithPromiseCall(a,t.dva_id);if(!i.repaymentData)return!1;for(var l=1;l<i.count+1;l++){var d=e.$getColumn(l);if(!i.repaymentData[d+"_pay"]){n=i.dueDates[l-1];break}}e.$getDate(s.addDays(-e.overdue_days))===n&&r.push(i)}),this.orders=r;var a=t.payment_methods,n=t.banks,s=t.dva_id,i=t.branch;this.response={payment_methods:a,banks:n,dva_id:s,branch:i,orders:this.orders},this.$scrollToTop(),this.$LIPS(!1),this.show=!0}},created:function(){this.$prepareBranches(),this.fetchData()}}},SldL:function(t,e){!function(e){"use strict";var r,a=Object.prototype,n=a.hasOwnProperty,s="function"==typeof Symbol?Symbol:{},i=s.iterator||"@@iterator",o=s.asyncIterator||"@@asyncIterator",l=s.toStringTag||"@@toStringTag",d="object"==typeof t,c=e.regeneratorRuntime;if(c)d&&(t.exports=c);else{(c=e.regeneratorRuntime=d?t.exports:{}).wrap=b;var u="suspendedStart",m="suspendedYield",v="executing",h="completed",f={},_={};_[i]=function(){return this};var p=Object.getPrototypeOf,y=p&&p(p(L([])));y&&y!==a&&n.call(y,i)&&(_=y);var g=k.prototype=x.prototype=Object.create(_);w.prototype=g.constructor=k,k.constructor=w,k[l]=w.displayName="GeneratorFunction",c.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===w||"GeneratorFunction"===(e.displayName||e.name))},c.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,k):(t.__proto__=k,l in t||(t[l]="GeneratorFunction")),t.prototype=Object.create(g),t},c.awrap=function(t){return{__await:t}},D(S.prototype),S.prototype[o]=function(){return this},c.AsyncIterator=S,c.async=function(t,e,r,a){var n=new S(b(t,e,r,a));return c.isGeneratorFunction(e)?n:n.next().then(function(t){return t.done?t.value:n.next()})},D(g),g[l]="Generator",g[i]=function(){return this},g.toString=function(){return"[object Generator]"},c.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var a=e.pop();if(a in t)return r.value=a,r.done=!1,r}return r.done=!0,r}},c.values=L,E.prototype={constructor:E,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach($),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function a(a,n){return o.type="throw",o.arg=t,e.next=a,n&&(e.method="next",e.arg=r),!!n}for(var s=this.tryEntries.length-1;s>=0;--s){var i=this.tryEntries[s],o=i.completion;if("root"===i.tryLoc)return a("end");if(i.tryLoc<=this.prev){var l=n.call(i,"catchLoc"),d=n.call(i,"finallyLoc");if(l&&d){if(this.prev<i.catchLoc)return a(i.catchLoc,!0);if(this.prev<i.finallyLoc)return a(i.finallyLoc)}else if(l){if(this.prev<i.catchLoc)return a(i.catchLoc,!0)}else{if(!d)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return a(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var s=a;break}}s&&("break"===t||"continue"===t)&&s.tryLoc<=e&&e<=s.finallyLoc&&(s=null);var i=s?s.completion:{};return i.type=t,i.arg=e,s?(this.method="next",this.next=s.finallyLoc,f):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),$(r),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var a=r.completion;if("throw"===a.type){var n=a.arg;$(r)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,a){return this.delegate={iterator:L(t),resultName:e,nextLoc:a},"next"===this.method&&(this.arg=r),f}}}function b(t,e,r,a){var n=e&&e.prototype instanceof x?e:x,s=Object.create(n.prototype),i=new E(a||[]);return s._invoke=function(t,e,r){var a=u;return function(n,s){if(a===v)throw new Error("Generator is already running");if(a===h){if("throw"===n)throw s;return R()}for(r.method=n,r.arg=s;;){var i=r.delegate;if(i){var o=O(i,r);if(o){if(o===f)continue;return o}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(a===u)throw a=h,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);a=v;var l=C(t,e,r);if("normal"===l.type){if(a=r.done?h:m,l.arg===f)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(a=h,r.method="throw",r.arg=l.arg)}}}(t,r,i),s}function C(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}function x(){}function w(){}function k(){}function D(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function S(t){var e;this._invoke=function(r,a){function s(){return new Promise(function(e,s){!function e(r,a,s,i){var o=C(t[r],t,a);if("throw"!==o.type){var l=o.arg,d=l.value;return d&&"object"==typeof d&&n.call(d,"__await")?Promise.resolve(d.__await).then(function(t){e("next",t,s,i)},function(t){e("throw",t,s,i)}):Promise.resolve(d).then(function(t){l.value=t,s(l)},i)}i(o.arg)}(r,a,e,s)})}return e=e?e.then(s,s):s()}}function O(t,e){var a=t.iterator[e.method];if(a===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=r,O(t,e),"throw"===e.method))return f;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return f}var n=C(a,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,f;var s=n.arg;return s?s.done?(e[t.resultName]=s.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,f):s:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function P(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function $(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function E(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(P,this),this.reset(!0)}function L(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var a=-1,s=function e(){for(;++a<t.length;)if(n.call(t,a))return e.value=t[a],e.done=!1,e;return e.value=r,e.done=!0,e};return s.next=s}}return{next:R}}function R(){return{value:r,done:!0}}}(function(){return this}()||Function("return this")())},TZKk:function(t,e,r){var a=r("VU/8")(r("7elN"),r("b4Eb"),!1,null,null,null);t.exports=a.exports},"Umu/":function(t,e,r){var a=r("VU/8")(r("Oi84"),r("pcd0"),!1,function(t){r("yWHZ")},"data-v-9e8b36c0",null);t.exports=a.exports},XPKX:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t.show?r("div",{staticClass:"tab-content mt-1 attendance-body"},[r("div",{staticClass:"tab-pane active text-center",attrs:{id:"reminder-panel",role:"tabpanel"}},t._l(t.orders,function(e,a){return r("order-item",{key:e.order.id,attrs:{index:a,"start-index":t.startIndex,order:e,mode:t.mode},on:{done:function(e){t.fetchList(t.list)},display:t.displayDetails}})})),t._v(" "),"normal-list"!=t.mode?r("div",{staticClass:"w-100 my-5 mx-0 hr"}):t._e()]):r("div",{staticClass:"tab-content mt-1 attendance-body"},[t._m(0)]),t._v(" "),t.show&&"sms"===t.mode?r("div",{staticClass:"mt-1 attendance-body"},[r("div",{staticClass:"mb-5 px-0 row align-items-center"},[r("div",{staticClass:"clearfix d-flex justify-content-end w-100"},[r("button",{staticClass:"btn bg-default",attrs:{disabled:t.$isProcessing},on:{click:t.processSelected}},[t._v("\n                    Send Reminder(s) "),r("i",{staticClass:"far fa-paper-plane ml-1"})])])])]):t._e(),t._v(" "),r("div",{staticClass:"modal fade",attrs:{id:"purchase_order"}},[r("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[r("div",{staticClass:"modal-content"},[t._m(1),t._v(" "),t.showModalContent?r("div",{staticClass:"modal-body"},[r("div",{staticClass:"table-responsive"},[r("table",{staticClass:"table table-bordered table-striped"},[r("tbody",[r("tr",[r("th",[t._v("Order ID")]),t._v(" "),r("td",[t._v(t._s(t.activeOrder.order.id))])]),t._v(" "),r("tr",[r("th",[t._v("Order date")]),t._v(" "),r("td",[t._v(t._s(t.activeOrder.order.order_date))])]),t._v(" "),r("tr",[r("th",[t._v("Product")]),t._v(" "),r("td",[t._v(t._s(t.activeOrder.order.store_product.product_name))])]),t._v(" "),r("tr",[r("th",[t._v("Repayment")]),t._v(" "),r("td",[t._v(t._s(t.$formatCurrency(t.activeOrder.amountsToBePaid[0])))])]),t._v(" "),r("tr",[r("th",[t._v("Down Payment")]),t._v(" "),r("td",[t._v(t._s(t.$formatCurrency(t.activeOrder.order.down_payment)))])]),t._v(" "),r("tr",[r("th",[t._v("Discount (%)")]),t._v(" "),r("td",[t._v(t._s(t._f("capitalize")(t.activeOrder.discount)))])]),t._v(" "),r("tr",[r("th",[t._v("Sale Type")]),t._v(" "),r("td",[t._v(t._s(t._f("capitalize")(t.activeOrder.order.sales_type.name)))])]),t._v(" "),r("tr",[r("th",[t._v("Total amount to Pay")]),t._v(" "),r("td",[t._v(t._s(t.$formatCurrency(t.activeOrder.order.product_price)))])]),t._v(" "),r("tr",[r("th",[t._v("Processed by")]),t._v(" "),r("td",[t._v(t._s(t.activeOrder.order.floor_agent?t.activeOrder.order.floor_agent.full_name:null)+"\n                                ")])])])])])]):t._e(),t._v(" "),t._m(2)])])]),t._v(" "),r("div",{staticClass:"modal fade",attrs:{id:"customer_info"}},[r("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[r("div",{staticClass:"modal-content"},[t._m(3),t._v(" "),t.showModalContent?r("div",{staticClass:"modal-body"},[r("div",{staticClass:"table-responsive"},[r("table",{staticClass:"table table-bordered table-striped"},[r("tbody",[r("tr",[r("th",[t._v("Customer ID")]),t._v(" "),r("td",[t._v(t._s(t.activeOrder.customer.id))])]),t._v(" "),r("tr",[r("th",[t._v("Full Name")]),t._v(" "),r("td",[t._v(t._s(t.$getCustomerFullName(t.activeOrder.customer)))])]),t._v(" "),r("tr",[r("th",[t._v("Address")]),t._v(" "),r("td",[t._v(t._s(t.$getCustomerAddress(t.activeOrder.customer)))])]),t._v(" "),r("tr",[r("th",[t._v("Phone")]),t._v(" "),r("td",[t._v(t._s(t.activeOrder.customer.telephone))])]),t._v(" "),r("tr",[r("th",[t._v("Branch")]),t._v(" "),r("td",[t._v(t._s(t.activeOrder.customer.branch.name))])]),t._v(" "),r("tr",[r("th",[t._v("Category")]),t._v(" "),r("td",[t._v(t._s(t.activeOrder.customer.employment_status))])]),t._v(" "),r("tr",[r("th",[t._v("Work guarantor name")]),t._v(" "),r("td",[t._v(t._s(t.activeOrder.customerWGName)+"\n                                ")])]),t._v(" "),r("tr",[r("th",[t._v("Work guarantor phone")]),t._v(" "),r("td",[t._v(t._s(t.activeOrder.customer.work_guarantor_telno))])]),t._v(" "),r("tr",[r("th",[t._v("Personal guarantor name")]),t._v(" "),r("td",[t._v(t._s(t.activeOrder.customerPGName)+"\n                                ")])]),t._v(" "),r("tr",[r("th",[t._v("Personal guarantor phone")]),t._v(" "),r("td",[t._v(t._s(t.activeOrder.customer.personal_guarantor_telno))])]),t._v(" "),r("tr",[r("th",[t._v("Verified by")]),t._v(" "),r("td",[r("router-link",{staticClass:"text-link",attrs:{target:"_blank",to:"/dva/verification?id="+t.activeOrder.customer.id}},[t._v("\n                                        click here to see verifications status\n                                    ")])],1)])])])])]):t._e(),t._v(" "),t._m(4)])])]),t._v(" "),r("div",{staticClass:"modal fade repayment",attrs:{id:"repayment"}},[r("div",{staticClass:"modal-dialog modal-xl",attrs:{role:"document"}},[t.showModalContent?r("div",{staticClass:"modal-content"},[r("div",{staticClass:"modal-header py-2"},[r("h6",{staticClass:"modal-title py-1"},[t._v("\n                        Repayment Plan/Summary - "+t._s(t._f("capitalize")(t.activeOrder.customer.employment_status))+"\n                    ")]),t._v(" "),t._m(5)]),t._v(" "),r("div",{staticClass:"modal-body"},[r("div",{staticClass:"table-responsive"},[r("h5",{staticClass:"mt-3 mb-0"},[t._v("Order Information")]),t._v(" "),r("table",{staticClass:"table table-bordered"},[r("tbody",[t._m(6),t._v(" "),r("tr",[r("td",{staticClass:"font-weight-bold"},[t._v(t._s(t.activeOrder.customerName)+"\n                                ")]),t._v(" "),r("th",[t._v(t._s(t.activeOrder.order.id))]),t._v(" "),r("th",[t._v(t._s(t.activeOrder.order.store_product.product_name))]),t._v(" "),r("td",{staticClass:"font-weight-bold"},[t._v(t._s(t.activeOrder.branch.name))])])])]),t._v(" "),r("h5",{staticClass:"mt-5 mb-0"},[t._v("Amortization Schedule")]),t._v(" "),r("table",{staticClass:"table table-bordered"},[r("tbody",{staticClass:"text-center"},[r("tr",[r("th",[t._v("Repayment")]),t._v(" "),t._l(t.activeOrder.repaymentCaptions,function(e){return r("td",{domProps:{innerHTML:t._s(e)}})})],2),t._v(" "),r("tr",{staticClass:"table-separator"},[r("th",[t._v("Due Date")]),t._v(" "),t._l(t.activeOrder.dueDates,function(e){return r("td",[t._v(t._s(e))])})],2),t._v(" "),r("tr",[r("th",[t._v("Actual Pay Day")]),t._v(" "),t._l(t.activeOrder.actualPayDates,function(e){return r("td",[t._v(t._s(e))])})],2),t._v(" "),r("tr",{staticClass:"table-separator"},[r("th",[t._v("Status")]),t._v(" "),t._l(t.activeOrder.paymentStatusClasses,function(t){return r("td",{class:t.class},[r("i",{staticClass:"fas",class:t.icon})])})],2),t._v(" "),r("tr",{staticClass:"table-separator"},[r("th",[t._v("Repayment Amount")]),t._v(" "),t._l(t.activeOrder.amountsToBePaid,function(e){return r("td",[t._v(t._s(t.$formatCurrency(e)))])})],2),t._v(" "),r("tr",[r("th",[t._v("Actual Amount Paid")]),t._v(" "),t._l(t.activeOrder.actualAmountsPaid,function(e){return r("td",[t._v(t._s(t.$formatCurrency(e))+"\n                                ")])})],2),t._v(" "),r("tr",{staticClass:"table-separator"},[r("th",[t._v("Payment Method")]),t._v(" "),t._l(t.activeOrder.paymentMethods,function(e){return r("td",{staticClass:"text-capitalize"},[t._v("\n                                    "+t._s(t.Order.convertToName(e,"paymentMethods"))+"\n                                ")])})],2),t._v(" "),r("tr",[r("th",[t._v("Bank")]),t._v(" "),t._l(t.activeOrder.paymentBanks,function(e){return r("td",{staticClass:"text-capitalize"},[t._v("\n                                    "+t._s(t.Order.convertToName(e,"banks"))+"\n                                ")])})],2)])]),t._v(" "),r("h5",{staticClass:"mt-5 mb-0"},[t._v("Payment Summary")]),t._v(" "),r("table",{staticClass:"table table-bordered"},[r("tbody",{staticClass:"text-center"},[r("tr",{staticClass:"table-separator"},[r("td",{staticClass:"text-left"},[t._v("Discount Detail (%)")]),t._v(" "),r("th",[t._v(t._s(t._f("capitalize")(t.activeOrder.discount)))]),t._v(" "),r("td",[t._v("Total Before Discount")]),t._v(" "),r("th",[t._v(t._s(t.$formatCurrency(t.$roundDownAmt(t.activeOrder.order.product_price))))]),t._v(" "),r("td",[t._v("Total Paid")]),t._v(" "),r("th",[t._v(t._s(t.activeOrder.amountPaid))])]),t._v(" "),r("tr",[r("td",{staticClass:"text-left"},[t._v("Discount Amount")]),t._v(" "),r("th",[t._v(t._s(t.activeOrder.discountAmount))]),t._v(" "),r("td",[t._v("Total After Discount")]),t._v(" "),r("th",[t._v(t._s(t.activeOrder.discountedTotal))]),t._v(" "),r("td",[t._v("Total Debt")]),t._v(" "),r("th",[t._v(t._s(t.activeOrder.outstandingDebt))])]),t._v(" "),r("tr",[r("td",{staticClass:"text-left"},[t._v("Down Payment")]),t._v(" "),r("th",[t._v(t._s(t.$formatCurrency(t.$roundDownAmt(t.activeOrder.order.down_payment))))]),t._v(" "),r("td",[t._v("Total Plus Default Fee")]),t._v(" "),r("th",[t._v(t._s(t.activeOrder.totalPlusDefault))]),t._v(" "),r("td",[t._v("Default Fee")]),t._v(" "),r("th",[t._v(t._s(t.activeOrder.defaultFee))])])])])])]),t._v(" "),t._m(7)]):t._e()])]),t._v(" "),r("div",{staticClass:"modal fade repayment",attrs:{id:"reminder_history"}},[r("div",{staticClass:"modal-dialog modal-lg",attrs:{role:"document"}},[r("div",{staticClass:"modal-content"},[t._m(8),t._v(" "),t.showModalContent?r("div",{staticClass:"modal-body"},[r("div",{staticClass:"table-responsive"},[t.activeOrder.order.reminders.length?r("table",{staticClass:"table table-bordered table-striped"},[t._m(9),t._v(" "),r("tbody",t._l(t.activeOrder.order.reminders,function(e,a){return r("tr",[r("th",[t._v(t._s(a+1))]),t._v(" "),r("td",[t._v(t._s(t.$dateTimeConvert(e.date)))]),t._v(" "),r("td",[t._v(t._s(e.type))]),t._v(" "),r("td",{domProps:{innerHTML:t._s(t.Order.renderMessage(e))}}),t._v(" "),r("td",[t._v(t._s(e.user.full_name))])])}))]):r("div",{staticClass:"my-4 text-center"},[t._v("\n                            no reminders have been sent yet!\n                        ")])])]):t._e(),t._v(" "),t._m(10)])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"tab-pane active text-center"},[e("div",{staticClass:"mb-3 row attendance-item"},[e("div",{staticClass:"col d-flex light-heading align-items-center justify-content-center"},[this._v("\n                    No records found!\n                ")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"modal-header py-2"},[e("h6",{staticClass:"modal-title py-1"},[this._v("Purchase Order Summary")]),this._v(" "),e("a",{staticClass:"close py-1",attrs:{"aria-label":"Close","data-dismiss":"modal"}},[e("span",{staticClass:"modal-close text-danger",attrs:{"aria-hidden":"true"}},[e("i",{staticClass:"fas fa-times"})])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"modal-footer"},[e("a",{staticClass:"text-link mt-3 w-100",staticStyle:{"text-align":"right"},attrs:{"data-dismiss":"modal",href:"javascript:"}},[this._v("close dialogue")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"modal-header py-2"},[e("h6",{staticClass:"modal-title py-1"},[this._v("Customer Info. Summary")]),this._v(" "),e("a",{staticClass:"close py-1",attrs:{"aria-label":"Close","data-dismiss":"modal"}},[e("span",{staticClass:"modal-close text-danger",attrs:{"aria-hidden":"true"}},[e("i",{staticClass:"fas fa-times"})])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"modal-footer"},[e("a",{staticClass:"text-link mt-3 w-100 text-right",attrs:{"data-dismiss":"modal",href:"#"}},[this._v("\n                        close dialogue\n                    ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"close py-1",attrs:{"aria-label":"Close","data-dismiss":"modal"}},[e("span",{staticClass:"modal-close text-danger",attrs:{"aria-hidden":"true"}},[e("i",{staticClass:"fas fa-times"})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",{staticClass:"table-separator"},[e("td",[this._v("Name")]),this._v(" "),e("td",[this._v("Order Id")]),this._v(" "),e("td",[this._v("Product")]),this._v(" "),e("th",[this._v("Branch")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"modal-footer d-flex justify-content-end"},[e("a",{staticClass:"text-link mt-3",attrs:{"data-dismiss":"modal",href:"javascript:"}},[this._v("close dialogue")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"modal-header py-2"},[e("h6",{staticClass:"modal-title py-1"},[this._v("History")]),this._v(" "),e("a",{staticClass:"close py-1",attrs:{"aria-label":"Close","data-dismiss":"modal"}},[e("span",{staticClass:"modal-close text-danger",attrs:{"aria-hidden":"true"}},[e("i",{staticClass:"fas fa-times"})])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("thead",[r("tr",[r("th",[t._v("S/N")]),t._v(" "),r("th",[t._v("Date")]),t._v(" "),r("th",[t._v("Type")]),t._v(" "),r("th",[t._v("SMS/Feedback")]),t._v(" "),r("th",[t._v("sender")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"modal-footer"},[e("a",{staticClass:"text-link mt-3 w-100",staticStyle:{"text-align":"right"},attrs:{"data-dismiss":"modal",href:"javascript:"}},[this._v("close dialogue")])])}]}},XPj8:function(t,e,r){var a=r("VU/8")(r("aSpy"),r("XPKX"),!1,function(t){r("C326")},"data-v-ec211ae4",null);t.exports=a.exports},Xxa5:function(t,e,r){t.exports=r("jyFz")},aSpy:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=m(r("Xxa5")),n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(t[a]=r[a])}return t},s=m(r("I3G/")),i=r("NYxO"),o=m(r("K23+")),l=r("m2tk"),d=r("p/p5"),c=m(r("TZKk")),u=r("rN6N");function m(t){return t&&t.__esModule?t:{default:t}}function v(t){return function(){var e=t.apply(this,arguments);return new Promise(function(t,r){return function a(n,s){try{var i=e[n](s),o=i.value}catch(t){return void r(t)}if(!i.done)return Promise.resolve(o).then(function(t){a("next",t)},function(t){a("throw",t)});t(o)}("next")})}}e.default={components:{OrderItem:c.default},props:{list:{default:null},mode:null,preLoadedOrder:null,startIndex:null},watch:{list:function(t){this.fetchList(t)},preLoadedOrder:function(t){this.prepareForm(t)}},data:function(){return{orders:[],show:!1,showModalContent:!1,Order:u.Order,activeOrder:null}},computed:n({},(0,i.mapGetters)(["auth"])),methods:{prepareForm:function(){var t=v(a.default.mark(function t(e){var r=this;return a.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this.show=!1,this.showModalContent=!1,this.orders=[],t.next=5,e.orders.forEach(function(t,a){var n=t instanceof u.Order?t:new u.OrderWithPromiseCall(t,e.dva_id);(r.auth("DVALead")||r.auth("FSLLead")||r.auth("CAGAccess")||parseInt(n.order.store_product.store_name)===e.branch)&&function(){if([8,1].includes(r.list)||"normal-list"===r.mode)return!0;var t=void 0,e=void 0,a=[],s=new Date,i=1===s.getDay()||[9,10,11,12,13,14].includes(r.list)?3:1;if(!n.repaymentData)return!1;for(var o=1;o<n.count+1;o++){var l=r.$getColumn(o);if(!n.repaymentData[l+"_pay"]){t=u.OrderWithPromiseCall.generateDueDates(n.order.order_date,n.interval,n.count)[o-1];break}}switch(r.list){case 2:e=7;break;case 3:e=3;break;case 4:e=0;break;case 5:e=1;break;case 6:e=5;break;case 7:e=31;break;case 9:e=38;break;case 10:e=45;break;case 11:e=61;break;case 12:e=75;break;case 13:e=90;break;case 14:e=121}if(["collection","recovery","call","external-recovery"].includes(r.mode))for(var d=0;d<i;d++)a.push(r.$getDate(s.addDays(-(d+e))));if("sms"===r.mode)for(var c=0;c<i;c++)a.push(r.$getDate(s.addDays(c+e)));return a.includes(t)}()&&r.orders.push(n)});case 5:this.orders.length&&(this.show=!0),this.$LIPS(!1);case 7:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),fetchList:function(t){var e,r=this;this.$LIPS(!0),(0,d.get)((e={query:{list:t}},"/api/reminder/create?list="+e.query.list)).then(function(e){var a=e.data;8===t&&(a.orders=a.orders.map(function(t){return t.order})),r.prepareForm(a)})},displayDetails:function(){var t=v(a.default.mark(function t(e,r){return a.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.default.set(this.$data,"activeOrder",e);case 2:return this.showModalContent=!0,t.abrupt("return",$("#"+r).modal("toggle"));case 4:case"end":return t.stop()}},t,this)}));return function(e,r){return t.apply(this,arguments)}}(),processSelected:function(){this.$LIPS(!0);var t=this.orders.filter(function(t){return t.isSelected});if(!t.length)return this.$displayErrorMessage("please select at least one!"),this.$LIPS(!1);this.sendSMSReminders(t)},sendSMSReminders:function(t){var e=this,r=[];t.forEach(function(a,n){var s=new l.Message(a.nextSMSReminder,a.reminder.contacts,!1,a.dvaId);s.send(function(a){200===a.status&&(delete s.logToDB,r.push(s)),n+1===t.length&&e.logSentMessages(t,r)})})},logSentMessages:function(t,e){var r=this;e.length>0?(0,d.post)("/api/message",{messages:e,bulk:!0}).then(function(e){var a=e.data,n=a.sentAndLogged,s=a.ids;n?r.logSentReminders(t,s):r.$displayErrorMessage("Error Logging sent sms details!")}):this.$displayErrorMessage("Error sending messages!")},logSentReminders:function(t,e){var r=this;if(e.reverse(),e.length>0){var a=t.map(function(t,r){return t.reminder.sms_id=e[r],delete t.reminder.contacts,delete t.reminder.canBeSelected,t.reminder});(0,d.post)("/api/reminder",{reminders:a}).then(function(t){t.data.saved?(o.default.setSuccess("Reminders have been sent successfully!",5e4),r.fetchList(r.list)):r.$displayErrorMessage("Error sending reminders!"),r.$scrollToTop()})}else this.$displayErrorMessage("Error logging sent messages!")}},mounted:function(){var t=this;"normal-list"!=this.mode?this.fetchList(this.list):this.prepareForm(this.preLoadedOrder),$(document).on("hidden.bs.modal",".modal",function(){t.activeOrder=null,t.showModalContent=!1})},created:function(){this.$prepareBanks(),this.$prepareBranches(),this.$preparePaymentMethods()}}},b4Eb:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"mb-3 row attendance-item"},[r("div",{staticClass:"col-12 col-xs-2 col-md col-lg d-flex align-items-center",staticStyle:{"max-width":"120px"}},["normal-list"===t.mode?r("span"):t.order.reminder.canBeSelected&&["collection","recovery","call","external-recovery"].includes(t.mode)?r("span",{staticClass:"user mx-auto bg-pending text-white",on:{click:t.logReminder}},[r("i",{staticClass:"fas fa-hourglass-start"})]):t.order.reminder.canBeSelected&&"sms"===t.mode?r("div",{staticClass:"d-flex align-items-center"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.order.isSelected,expression:"order.isSelected"}],staticClass:"form-check-input my-0 mx-4 float-left position-relative ",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.order.isSelected)?t._i(t.order.isSelected,null)>-1:t.order.isSelected},on:{click:t.toggleSelect,change:function(e){var r=t.order.isSelected,a=e.target,n=!!a.checked;if(Array.isArray(r)){var s=t._i(r,null);a.checked?s<0&&t.$set(t.order,"isSelected",r.concat([null])):s>-1&&t.$set(t.order,"isSelected",r.slice(0,s).concat(r.slice(s+1)))}else t.$set(t.order,"isSelected",n)}}})]):r("span",{staticClass:"user mx-auto sent-reminder"},[r("i",{staticClass:"fas fa-check"})]),t._v(" "),r("span",{staticClass:"user mx-auto"},[t._v(t._s(t.startIndex+t.index))])]),t._v(" "),r("div",{staticClass:"col-12 col-xs-2 col-md col-lg user-name d-flex align-items-center justify-content-center"},[t._v("\n        "+t._s(t.$vnode.key)+"\n    ")]),t._v(" "),r("div",{staticClass:"col-12 col-xs-2 col-md col-lg d-flex align-items-center justify-content-center",attrs:{"data-hoverable":"true"},on:{click:function(e){t.$emit("display",t.order,"purchase_order")}}},[t._v("\n        "+t._s(t.order.order.order_date)+"\n    ")]),t._v(" "),r("div",{staticClass:"col-12 col-xs-3 col-md col-lg d-flex align-items-center justify-content-center",attrs:{"data-hoverable":"true"},on:{click:function(e){t.$emit("display",t.order,"customer_info")}}},[t._v("\n        ID: "+t._s(t.order.customer.id)+" - "+t._s(t._f("capitalize")(t.order.customer.employment_status))+"\n    ")]),t._v(" "),r("div",{staticClass:"col-12 col-xs-2 col-md col-lg d-flex align-items-center justify-content-center",attrs:{"data-hoverable":"true"},on:{click:function(e){t.$emit("display",t.order,"repayment")}}},[t._v("\n        "+t._s(t.order.financialStatus)+"\n    ")]),t._v(" "),r("div",{staticClass:"col-12 col-xs-2 col-md col-lg d-flex align-items-center justify-content-center",attrs:{"data-hoverable":"true"},on:{click:function(e){t.$emit("display",t.order,"reminder_history")}}},[t._v("\n        "+t._s(t.order.order.reminders.length)+" reminder(s) sent\n    ")]),t._v(" "),["collection","recovery","external-recovery"].includes(t.mode)?r("div",{staticClass:"col-12 col-xs-2 col-md col-lg d-flex align-items-center attendance-create"},[r("span",{staticClass:"present"},[r("span",{staticClass:"radio w-50 pr-3 mb-0 float-left"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.order.reminder.is_visited,expression:"order.reminder.is_visited"}],attrs:{type:"radio",id:"present"+t.index,name:"isPresent"+t.index},domProps:{value:!0,checked:t._q(t.order.reminder.is_visited,!0)},on:{change:function(e){t.$set(t.order.reminder,"is_visited",!0)}}}),t._v(" "),r("label",{attrs:{for:"present"+t.index}},[t._v("yes")])]),t._v(" "),r("span",{staticClass:"radio w-50 pl-3 mb-0 float-left"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.order.reminder.is_visited,expression:"order.reminder.is_visited"}],attrs:{type:"radio",id:"absent"+t.index,name:"isPresent"+t.index},domProps:{value:!1,checked:t._q(t.order.reminder.is_visited,!1)},on:{change:function(e){t.$set(t.order.reminder,"is_visited",!1)}}}),t._v(" "),r("label",{attrs:{for:"absent"+t.index}},[t._v("no")])])])]):t._e(),t._v(" "),["collection","recovery","call","external-recovery"].includes(t.mode)?r("div",{staticClass:"col-12 col-xs-2 col-md col-lg d-flex align-items-center"},[r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.order.reminder.feedback,expression:"order.reminder.feedback"}],staticClass:"form-control",attrs:{rows:"1",disabled:!t.order.reminder.canBeSelected},domProps:{value:t.order.reminder.feedback},on:{input:function(e){e.target.composing||t.$set(t.order.reminder,"feedback",e.target.value)}}})]):t._e(),t._v(" "),"call"===t.mode?r("div",{staticClass:"col-12 col-xs-2 col-md col-lg d-flex align-items-center"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.order.promiseCall.date,expression:"order.promiseCall.date"}],staticClass:"form-control",attrs:{type:"date",disabled:!t.order.reminder.canBeSelected},domProps:{value:t.order.promiseCall.date},on:{input:function(e){e.target.composing||t.$set(t.order.promiseCall,"date",e.target.value)}}})]):t._e()])},staticRenderFns:[]}},hfxd:function(t,e,r){(t.exports=r("FZ+f")(!1)).push([t.i,".attendance-view .custom-select[data-v-9e8b36c0],.attendance-view input[data-v-9e8b36c0]{width:85%}.attendance-view .myBtn[data-v-9e8b36c0]{width:95%}",""])},jyFz:function(t,e,r){var a=function(){return this}()||Function("return this")(),n=a.regeneratorRuntime&&Object.getOwnPropertyNames(a).indexOf("regeneratorRuntime")>=0,s=n&&a.regeneratorRuntime;if(a.regeneratorRuntime=void 0,t.exports=r("SldL"),n)a.regeneratorRuntime=s;else try{delete a.regeneratorRuntime}catch(t){a.regeneratorRuntime=void 0}},m2tk:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Message=void 0;var a=function(){function t(t,e){for(var r=0;r<e.length;r++){var a=e[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(e,r,a){return r&&t(e.prototype,r),a&&t(e,a),e}}(),n=r("p/p5");e.Message=function(){function t(e,r){var a=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.user_id=n,this.message=e,this.logToDB=a,this.contacts=r.split(",").filter(function(t){return/\S/.test(t)}).map(function(t){return"234"+t.trim().substr(1)}).join(","),this.setPages(),this.setContactCount()}return a(t,[{key:"setContactCount",value:function(){this.contact_count=this.contacts.split(",").length}},{key:"setPages",value:function(){this.pages=Math.ceil(this.message.length/160)}},{key:"send",value:function(t){var e=this;(0,n.get)("/api/message/create?to="+this.contacts+"&message="+this.message).then(function(r){return 200===r.status&&e.logToDB&&(delete e.logToDB,(0,n.post)("/api/message",e)),!!t&&t(r)}).catch(function(e){return!!t&&t(e)})}}]),t}()},nv24:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.EventBus=void 0;var a,n=r("I3G/"),s=(a=n)&&a.__esModule?a:{default:a};e.EventBus=new s.default},oKx2:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{title:"",buttonTitle:null,to:null}}},pcd0:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("transition",{attrs:{name:"fade"}},[r("div",{staticClass:"attendance",attrs:{id:"reminder"}},[r("custom-header",{attrs:{title:"All overdue(s) payments"}}),t._v(" "),r("div",{staticClass:"mt-5 row attendance-head"},[t._l(t.filters,function(e){var a=e.name;return r("div",{staticClass:"col-4 col-sm"},[r("div",{staticClass:"row"},[r("div",{staticClass:"light-heading"},[r("span",{staticClass:"d-none d-sm-inline"},[t._v("Select")]),t._v(" "+t._s(t._f("capitalize")(a))+"\n                    ")])])])}),t._v(" "),r("div",{staticClass:"col-3 col-sm"})],2),t._v(" "),r("div",{staticClass:"mt-2 mt-lg-3 row attendance-head attendance-view"},[t._l(t.filters,function(e){var a=e.name,n=e.model;return r("div",{staticClass:"col-4 col-sm"},[r("div",{staticClass:"row"},["branch"===a?r("select",{directives:[{name:"model",rawName:"v-model",value:t.$data[n],expression:"$data[model]"}],staticClass:"custom-select",on:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;t.fetchData()},change:function(e){var r=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.$set(t.$data,n,e.target.multiple?r:r[0])}}},[r("option",{attrs:{disabled:"",selected:"",value:""}},[t._v(t._s(t._f("capitalize")(a)))]),t._v(" "),t._l(t.$store.getters.getBranches,function(e){var a=e.name,n=e.id;return r("option",{domProps:{value:n}},[t._v("\n                            "+t._s(t._f("capitalize")(a))+"\n                        ")])})],2):r("div",{staticClass:"form-group w-100"},"overdue days"===a?[r("input",{directives:[{name:"model",rawName:"v-model",value:t.$data[n],expression:"$data[model]"}],staticClass:"form-control",attrs:{type:"number"},domProps:{value:t.$data[n]},on:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;t.fetchData()},input:function(e){e.target.composing||t.$set(t.$data,n,e.target.value)}}})]:[r("input",{directives:[{name:"model",rawName:"v-model",value:t.$data[n],expression:"$data[model]"}],staticClass:"form-control",attrs:{type:"date"},domProps:{value:t.$data[n]},on:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;t.fetchData()},input:function(e){e.target.composing||t.$set(t.$data,n,e.target.value)}}})])])])}),t._v(" "),r("div",{staticClass:"col-12 col-sm"},[r("div",{staticClass:"row d-flex justify-content-end"},[r("button",{staticClass:"btn btn-primary bg-default mt-0 myBtn",on:{click:function(e){t.fetchData()}}},[t._v("Apply Filter")])])])],2),t._v(" "),r("div",{staticClass:"mt-5 mb-3 attendance-head"},[r("div",{staticClass:"w-100 my-5 mx-0 hr"}),t._v(" "),r("div",{staticClass:"row px-4 pt-3 pb-4 text-center"},[r("div",{staticClass:"col light-heading",staticStyle:{"max-width":"120px"}},[t._v("S/N")]),t._v(" "),t._l(t.headings,function(e){return r("div",{staticClass:"col light-heading"},[t._v(t._s(e))])})],2)]),t._v(" "),t.show?r("order",{attrs:{"pre-loaded-order":t.response,mode:"normal-list"}}):t._e(),t._v(" "),r("div",{staticClass:"mt-5 mb-3 attendance-head"},[r("div",{staticClass:"w-100 my-5 mx-0 hr"})])],1)])},staticRenderFns:[]}},rN6N:function(t,e,r){"use strict";var a,n=function(){function t(t,e){for(var r=0;r<e.length;r++){var a=e[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(e,r,a){return r&&t(e.prototype,r),a&&t(e,a),e}}(),s=r("I3G/"),i=(a=s)&&a.__esModule?a:{default:a},o=r("N71M");function l(t){if(Array.isArray(t)){for(var e=0,r=Array(t.length);e<t.length;e++)r[e]=t[e];return r}return Array.from(t)}function d(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var c=new i.default,u=function(){function t(e,r){d(this,t),this._order=e,this._customer=r,this._paymentBanks=[],this._paymentMethods=[],this._actualPayDates=[],this._actualAmountsPaid=[],this._amountsToBePaid=[],this._repaymentCaptions=[],this._paymentStatusClasses=[],this._repaymentLevel=0,this._amountPaid=null,this._discountAmount=null,this._outstandingDebt=null,this._discountedTotal=null,this._defaultFee=null,this._totalPlusDefault=null,this._payments={},this.setIsOrderFormal(),this.setIsRepaymentValid(),this.setRepaymentData(),this.setCountAndInterval(),this.setCommonDetails(),this.setDueDates(),this.setPaymentStatusClasses(),this.calcAndSetPaymentSummary(),this.setBranch(),this.setDiscount()}return n(t,[{key:"setIsRepaymentValid",value:function(){this._isRepaymentValid=!(!this.order.repayment_formal&&!this.order.repayment_informal)}},{key:"setIsOrderFormal",value:function(){this._isOrderFormal=["formal","salaried"].includes(this._customer.employment_status.toLowerCase()),4===parseInt(this.order.payment_method_id)&&(this._isOrderFormal=!0)}},{key:"setRepaymentData",value:function(){null!=this.order.repayment_formal&&(this._repaymentData=this.order.repayment_formal),null!=this.order.repayment_informal&&(this._repaymentData=this.order.repayment_informal)}},{key:"setCountAndInterval",value:function(){var e=void 0,r=void 0;new Date(this.order.order_date)<=new Date("2019-07-07")?(null!=this.order.repayment_formal&&(e=28,r=6),null!=this.order.repayment_informal&&(e=14,r=12)):t.isBankDraftAvailable()&&this.isOrderFormal||4===parseInt(this.order.payment_method_id)?(e=28,r=6):(e=14,r=12),this._count=r,this._interval=e}},{key:"setDueDates",value:function(){this._dueDates=t.generateDueDates(this.order.order_date,this.interval,this.count)}},{key:"setCommonDetails",value:function(){if(this.isRepaymentValid)for(var t=1;t<this.count+1;t++){for(var e=c.$getColumn(t).split(""),r=[],a=1;a<=2;a++)r.unshift(e.pop());this._repaymentCaptions.push("<td>"+e.join("")+"<sup>"+r.join("")+"</sup></td>"),this._actualPayDates.push(this.repaymentData[c.$getColumn(t)+"_date"]),this._actualAmountsPaid.push(this.repaymentData[c.$getColumn(t)+"_pay"]),this._paymentBanks.push(this.repaymentData[c.$getColumn(t)+"_payment_bank"]),this._paymentMethods.push(this.repaymentData[c.$getColumn(t)+"_payment_method"]),this._amountsToBePaid.push(c.$roundDownAmt(this.order.repayment_amount)),this.repaymentData[c.$getColumn(t)+"_pay"]>0&&this._repaymentLevel++}}},{key:"setBranch",value:function(){var t=this;this.order.store_product?this._branch=o.store.state.branches.find(function(e){return parseInt(e.id)===parseInt(t.order.store_product.store_name)}):this._branch=null}},{key:"setPaymentStatusClasses",value:function(){if(this.isRepaymentValid)for(var e=1;e<this.count+1;e++){var r={class:null,icon:null},a=c.$getColumn(e),n=t.isPaymentDue(this.dueDates[e-1]),s=parseInt(this.repaymentData[a+"_pay"]);s?(r.class="paid",r.icon="fa-check"):n&&!s?(r.class="missed",r.icon="fa-times"):n||(r.class="pending",r.icon="fa-hourglass-start"),this._paymentStatusClasses.push(r)}}},{key:"calcAndSetPaymentSummary",value:function(){var t=function(t){return c.$formatCurrency(t)},e=this.order,r=e.repayment_amount,a=e.down_payment,n=e.product_price,s=6===this.count?.5:1,i=this.order.discount.percentage_discount,o=i>0?5===i?1:2:0,l=c.$roundDownAmt(r*s*o);this._discountAmount=t(l);var d=0,u=0;if(this.repaymentData){for(var m=0;m<this.count+1;m++){var v=parseInt(this.actualAmountsPaid[m]);u+=v?c.$roundDownAmt(v):0}d=c.$roundDownAmt(parseInt(a))+u+l}this._amountPaid=t(d);var h=c.$roundDownAmt(n-l);this._discountedTotal=t(h);var f=0;new Date(this.order.order_date)>new Date("2019-07-07")&&(f=500*[].length),this._defaultFee=t(f),this._totalPlusDefault=t(h+f),this._outstandingDebt=t(c.$roundDownAmt(parseInt(n)-d))}},{key:"setDiscount",value:function(){this._discount=this.order.discount.name+" "+this.order.discount.percentage_discount}},{key:"payments",set:function(t){this._payments=t},get:function(){return this._payments}},{key:"repaymentLevel",get:function(){return this._repaymentLevel}},{key:"order",get:function(){return this._order}},{key:"customer",get:function(){return this._customer}},{key:"isRepaymentValid",get:function(){return this._isRepaymentValid}},{key:"isOrderFormal",get:function(){return this._isOrderFormal}},{key:"repaymentData",get:function(){return this._repaymentData}},{key:"count",get:function(){return this._count}},{key:"interval",get:function(){return this._interval}},{key:"dueDates",get:function(){return this._dueDates}},{key:"paymentStatusClasses",get:function(){return this._paymentStatusClasses}},{key:"repaymentCaptions",get:function(){return this._repaymentCaptions}},{key:"paymentBanks",get:function(){return this._paymentBanks}},{key:"paymentMethods",get:function(){return this._paymentMethods}},{key:"actualPayDates",get:function(){return this._actualPayDates}},{key:"actualAmountsPaid",get:function(){return this._actualAmountsPaid}},{key:"amountsToBePaid",get:function(){return this._amountsToBePaid}},{key:"amountPaid",get:function(){return this._amountPaid}},{key:"discountAmount",get:function(){return this._discountAmount}},{key:"outstandingDebt",get:function(){return this._outstandingDebt}},{key:"discountedTotal",get:function(){return this._discountedTotal}},{key:"defaultFee",get:function(){return this._defaultFee}},{key:"totalPlusDefault",get:function(){return this._totalPlusDefault}},{key:"branch",get:function(){return this._branch}},{key:"discount",get:function(){return this._discount}},{key:"customerName",get:function(){return this.customer.first_name+" "+this.customer.last_name}},{key:"customerWGName",get:function(){var t=this.customer;return t.work_guarantor_first_name+" "+t.work_guarantor_last_name+" - "+t.work_guarantor_relationship}},{key:"customerPGName",get:function(){var t=this.customer;return t.personal_guarantor_first_name+" "+t.personal_guarantor_last_name+" - "+t.personal_guarantor_relationship}}],[{key:"generateDueDates",value:function(t,e,r){for(var a=[],n=0;n<r;n++){var s=new Date(t).addDays((n+1)*e),i=c.$getDate(s);a.push(i)}return a}},{key:"isPaymentDue",value:function(t){return new Date>new Date(t)}},{key:"isBankDraftAvailable",value:function(){return!1}},{key:"renderMessage",value:function(t){return t.sms?t.sms.message.replace(/%0a/g,"</br>"):t.feedback}},{key:"convertToName",value:function(t,e){return t?o.store.state[e].find(function(e){return e.id===t}).name:null}}]),t}(),m=function(t){function e(t,r){d(this,e);var a=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,t.customer));return a._isReminderSent=!1,a._dvaId=r,a._isSelected=!1,a.setReminder(null),a.setIsReminderSent(),a.setFinancialStatus(),a.setPromiseCall(),a.generateAndSetNextSMSReminder(),a}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,u),n(e,[{key:"setIsReminderSent",value:function(){var t=this,e=c.$getDate();this.order.reminders.forEach(function(r){var a=r.date.split(" "),n=a[0].split("-"),s=a[1].split(":"),i=[].concat(l(n),l(s)).map(function(t){return parseInt(t,10)});c.$getDate(new Date(Date.UTC.apply(Date,l(i))),!1)===e&&(t._isReminderSent=!0)})}},{key:"setFinancialStatus",value:function(){this._financialStatus=this.isRepaymentValid?"Paid: "+this.amountPaid+" | Debt: "+this.outstandingDebt:"no detail!"}},{key:"generateAndSetNextSMSReminder",value:function(){var t=null;this.order.store_product&&(t=this.order.store_product.product_name);var e=this.order,r=e.repayment_amount,a=void 0;e.order_date===c.$getDate()?(a="Hello "+this.customerName+", thanks for patronizing us. The following is the breakdown of the repayment plan for the purchase of "+t+":%0a",this.dueDates.forEach(function(t,e){return a+=c.$getColumn(e+1)+": "+t+" => "+c.$formatCurrency(c.$roundDownAmt(r))+"%0a"})):a="Hello "+this.customerName+", This is to remind you that your "+c.$getColumn(parseInt(this.repaymentLevel)+1)+" repayment of "+c.$formatCurrency(c.$roundDownAmt(r))+" for "+t+" will be due on "+this.dueDates[this.repaymentLevel]+". we will be expecting you.",this._nextSMSReminder=a+"Please remember to pay on time to avoid late fees and other penalties.%0aThank you."}},{key:"setReminder",value:function(t){this._reminder={type:t,feedback:null,is_visited:null,dva_id:this.dvaId,order_id:this.order.id,customer_id:this.customer.id,canBeSelected:!this.isReminderSent,repayment_level:this.repaymentLevel+"/"+this.count},"sms"===t&&(this._reminder.sms_id=null,this._reminder.contacts=this.customer.telephone)}},{key:"setPromiseCall",value:function(){this._promiseCall={order_id:this.order.id,user_id:this.dvaId,customer_id:this.customer.id,date:null}}},{key:"isSelected",set:function(t){this._isSelected=t},get:function(){return this._isSelected}},{key:"isReminderSent",get:function(){return this._isReminderSent}},{key:"dvaId",get:function(){return this._dvaId}},{key:"financialStatus",get:function(){return this._financialStatus}},{key:"nextSMSReminder",get:function(){return this._nextSMSReminder}},{key:"reminder",get:function(){return this._reminder}},{key:"promiseCall",get:function(){return this._promiseCall}}]),e}();t.exports={Order:u,OrderWithPromiseCall:m}},rjj0:function(t,e,r){var a="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!a)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var n=r("tTVk"),s={},i=a&&(document.head||document.getElementsByTagName("head")[0]),o=null,l=0,d=!1,c=function(){},u=null,m="data-vue-ssr-id",v="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function h(t){for(var e=0;e<t.length;e++){var r=t[e],a=s[r.id];if(a){a.refs++;for(var n=0;n<a.parts.length;n++)a.parts[n](r.parts[n]);for(;n<r.parts.length;n++)a.parts.push(_(r.parts[n]));a.parts.length>r.parts.length&&(a.parts.length=r.parts.length)}else{var i=[];for(n=0;n<r.parts.length;n++)i.push(_(r.parts[n]));s[r.id]={id:r.id,refs:1,parts:i}}}}function f(){var t=document.createElement("style");return t.type="text/css",i.appendChild(t),t}function _(t){var e,r,a=document.querySelector("style["+m+'~="'+t.id+'"]');if(a){if(d)return c;a.parentNode.removeChild(a)}if(v){var n=l++;a=o||(o=f()),e=g.bind(null,a,n,!1),r=g.bind(null,a,n,!0)}else a=f(),e=function(t,e){var r=e.css,a=e.media,n=e.sourceMap;a&&t.setAttribute("media",a);u.ssrId&&t.setAttribute(m,e.id);n&&(r+="\n/*# sourceURL="+n.sources[0]+" */",r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */");if(t.styleSheet)t.styleSheet.cssText=r;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(r))}}.bind(null,a),r=function(){a.parentNode.removeChild(a)};return e(t),function(a){if(a){if(a.css===t.css&&a.media===t.media&&a.sourceMap===t.sourceMap)return;e(t=a)}else r()}}t.exports=function(t,e,r,a){d=r,u=a||{};var i=n(t,e);return h(i),function(e){for(var r=[],a=0;a<i.length;a++){var o=i[a];(l=s[o.id]).refs--,r.push(l)}e?h(i=n(t,e)):i=[];for(a=0;a<r.length;a++){var l;if(0===(l=r[a]).refs){for(var d=0;d<l.parts.length;d++)l.parts[d]();delete s[l.id]}}}};var p,y=(p=[],function(t,e){return p[t]=e,p.filter(Boolean).join("\n")});function g(t,e,r,a){var n=r?"":a.css;if(t.styleSheet)t.styleSheet.cssText=y(e,n);else{var s=document.createTextNode(n),i=t.childNodes;i[e]&&t.removeChild(i[e]),i.length?t.insertBefore(s,i[e]):t.appendChild(s)}}},tTVk:function(t,e){t.exports=function(t,e){for(var r=[],a={},n=0;n<e.length;n++){var s=e[n],i=s[0],o={id:t+":"+n,css:s[1],media:s[2],sourceMap:s[3]};a[i]?a[i].parts.push(o):r.push(a[i]={id:i,parts:[o]})}return r}},yWHZ:function(t,e,r){var a=r("hfxd");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);r("rjj0")("0a2d2aab",a,!0,{})}});
>>>>>>> 2af5591af0f26df8f2c1780fcb86a777932bf705
