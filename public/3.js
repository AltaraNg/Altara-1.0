<<<<<<< HEAD
webpackJsonp([3],{

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
exports.push([module.i, "\ntr[data-v-07317a72] {\n  margin-bottom: .4rem;\n  float: left;\n  width: 100%;\n  font-weight: 400;\n  background-color: rgba(7, 74, 116, 0.1);\n}\ntbody tr th[data-v-07317a72] {\n  width: 4rem;\n  text-align: center;\n  border-right: .4rem solid white;\n  border-left: 0.3rem solid rgba(7, 74, 116, 0.7);\n}\ntbody tr td[data-v-07317a72] {\n  padding: .4rem 1.5rem;\n}\n.upload-image[data-v-07317a72] {\n  min-height: 20rem;\n  min-width: 20rem;\n  margin: 0 auto;\n  background: #fafafa;\n  border: 1px dashed rgba(0, 0, 0, 0.1);\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.upload-box[data-v-07317a72] {\n  padding: 1rem;\n}\n.upload-close[data-v-07317a72] {\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n.verification .card-stats .icon[data-v-07317a72] {\n  margin: 0 1.5rem;\n}\n.verification .info .icon.icon-circle[data-v-07317a72] {\n  width: 8rem;\n  height: 8rem;\n  border-radius: 50%;\n}\n.verification .info-horizontal .icon.icon-circle i[data-v-07317a72] {\n  display: table;\n  margin: 0 auto;\n  line-height: 8rem;\n  font-size: 2.4rem;\n}\n.verification .stats-title[data-v-07317a72] {\n  font-weight: 300;\n  font-size: 1.2rem;\n}\n.verification .card-footer[data-v-07317a72]:hover {\n  background-image: -webkit-gradient(linear, left top, left bottom, from(white), to(#eeeeee));\n  background-image: linear-gradient(to bottom, white, #eeeeee);\n}\n.verification h4.info-title[data-v-07317a72] {\n  margin: 0;\n  font-size: 2.2rem;\n}\n.verification .no-success .icon.icon-warning.icon-circle[data-v-07317a72] {\n  border: 1px solid #b30000;\n  -webkit-box-shadow: 0 0.9rem 1.5rem -0.6rem rgba(179, 0, 0, 0.5) !important;\n          box-shadow: 0 0.9rem 1.5rem -0.6rem rgba(179, 0, 0, 0.5) !important;\n}\n.verification .success .icon.icon-warning.icon-circle[data-v-07317a72] {\n  border: 1px solid #488413;\n  -webkit-box-shadow: 0 0.9rem 1.5rem -0.6rem rgba(72, 132, 19, 0.5) !important;\n          box-shadow: 0 0.9rem 1.5rem -0.6rem rgba(72, 132, 19, 0.5) !important;\n}\n.verification .card.card-stats[data-v-07317a72]::before {\n  content: '';\n  width: 3px;\n  height: 100%;\n  position: absolute;\n  left: 0;\n  top: 0;\n}\n.verification .success[data-v-07317a72]::before {\n  background: linear-gradient(45deg, #8ef985 0%, #01af13 100%);\n}\n.verification .no-success[data-v-07317a72]::before {\n  background: linear-gradient(45deg, #ff9b83 0%, #a40000 100%);\n}\n.verification .success i[data-v-07317a72] {\n  color: #63b61a;\n}\n.verification .no-success i[data-v-07317a72] {\n  color: #c70000;\n}\n", ""]);

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
=======
webpackJsonp([3],{"2Q7A":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.log=function(e,t){e=e.replace(/([A-Z])/g," $1").replace(/^./,function(e){return e.toUpperCase()}),(0,a.post)("/api/log",{action:e,description:t})};var a=r("uD8u")},"6Gnn":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=m(r("Xxa5")),o=m(r("Bph5")),n=r("2Q7A"),i=m(r("TOoT")),s=r("uD8u"),l=r("qqQK"),u=m(r("KUZS"));function m(e){return e&&e.__esModule?e:{default:e}}function c(e){return{create:"user/create",edit:"user/"+e.params.id+"/edit"}[e.meta.mode]}t.default={components:{ImageUpload:u.default},data:function(){return{mode:null,show:!1,store:"/api/user",method:"POST",form:{},error:{},roles:{},branches:{},password:"",countries:["nigeria"],gender:["male","female"],categories:{},textDetails:{phone:"",loginPassword:"",loginID:""},statuses:["married","single","divorced","complicated"],qualifications:["NCE","HND","OND","bachelors","masters","doctorate"]}},beforeRouteEnter:function(e,t,r){(0,s.get)("/api/"+c(e)).then(function(e){r(function(t){return t.prepareForm(e.data)})})},beforeRouteUpdate:function(e,t,r){var a=this;this.show=!1,(0,s.get)(c(e)).then(function(e){a.prepareForm(e.data),r()})},methods:{done:function(){this.$router.push("/hrm/employee")},prepareForm:function(){var e,t=(e=a.default.mark(function e(t){return a.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.$prepareStates();case 2:this.mode=this.$route.meta.mode,this.error={},this.errors.clear(),this.form=t.form,this.roles=t.roles,this.branches=t.branches,this.categories=t.categories,"edit"===this.$route.meta.mode&&(this.store="/api/user/"+this.$route.params.id,this.method="POST"),this.show=!0;case 11:case"end":return e.stop()}},e,this)}),function(){var t=e.apply(this,arguments);return new Promise(function(e,r){return function a(o,n){try{var i=t[o](n),s=i.value}catch(e){return void r(e)}if(!i.done)return Promise.resolve(s).then(function(e){a("next",e)},function(e){a("throw",e)});e(s)}("next")})});return function(e){return t.apply(this,arguments)}}(),onSave:function(){var e=this;this.$validator.validateAll().then(function(t){if(t)if(e.$network()){e.$LIPS(!0),e.error={};var r=(0,l.toMulipartedForm)(e.form,"edit");(0,s.byMethod)(e.method,e.store,r).then(function(t){t.data.success&&(e.textDetails.loginID=String(t.data.staff_id),e.textDetails.phone=String(parseInt(e.form.phone_number)),e.textDetails.loginPassword=e.password=t.data.password,o.default.welcome(e.textDetails)),(0,n.log)("Staff "+e.mode,String(t.data.staff_id)),i.default.setSuccess("edit"===e.mode?"Staff "+e.mode+"d successfully":"Staff "+e.mode+"d with ID "+t.data.staff_id+". Login details has been sent via SMS to the employee!",2e4),e.done()}).catch(function(t){422===(t=t.response).status&&(e.error=t.data.errors?t.data.errors:t.data,e.$networkErr("unique"))}).finally(function(){e.$scrollToTop(),e.$LIPS(!1)})}else e.$networkErr();else e.$networkErr("form")})},viewCV:function(e){window.open("https://s3.eu-west-2.amazonaws.com/altara-one/"+e,"_blank")},editCV:function(){this.form.cv_url=""}}}},APzg:function(e,t,r){var a=r("VU/8")(r("nT0B"),r("RQTH"),!1,null,null,null);e.exports=a.exports},Bph5:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});r("uD8u");t.default={message:"",welcome:function(e){this.message="Welcome to Altara credit. Please secure your login details. Staff ID: "+e.loginID+", password: "+e.loginPassword,this.send(e)},customerReg:function(e){this.message="Dear "+e.first_name+" "+e.last_name+", Welcome to Altara Credit Limited, You are hereby invited to our showroom at "+e.branch.description+" to learn more about our offerings. Pick up products now and pay later. We look forward to seeing you. For more info contact: "+e.branch.phone_yoruba+". Your customer id is: "+e.id,this.send({phone:e.telephone.substr(1)})},passwordReset:function(e){this.message="Password reset successful! if your did not request for a new password kindly report back immediately, your staff ID is "+e.staff_id+", new password: "+e.password,this.send(e)},dvaMessage:function(e){this.message=e.message,this.send(e)},send:function(e){console.log(e)}}},KUZS:function(e,t,r){var a=r("VU/8")(r("Wk+m"),r("xosg"),!1,null,null,null);e.exports=a.exports},RQTH:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.image?r("div",{staticClass:"position-relative"},[r("img",{attrs:{src:e.image}}),e._v(" "),r("button",{staticClass:"btn btn-danger upload-close m-0 px-3 py-2",on:{click:function(t){t.preventDefault(),e.$emit("close")}}},[r("i",{staticClass:"fas fa-times text-white"})])]):e._e()},staticRenderFns:[]}},SldL:function(e,t){!function(t){"use strict";var r,a=Object.prototype,o=a.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},i=n.iterator||"@@iterator",s=n.asyncIterator||"@@asyncIterator",l=n.toStringTag||"@@toStringTag",u="object"==typeof e,m=t.regeneratorRuntime;if(m)u&&(e.exports=m);else{(m=t.regeneratorRuntime=u?e.exports:{}).wrap=y;var c="suspendedStart",f="suspendedYield",d="executing",v="completed",p={},_={};_[i]=function(){return this};var h=Object.getPrototypeOf,g=h&&h(h(L([])));g&&g!==a&&o.call(g,i)&&(_=g);var x=N.prototype=b.prototype=Object.create(_);C.prototype=x.constructor=N,N.constructor=C,N[l]=C.displayName="GeneratorFunction",m.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===C||"GeneratorFunction"===(t.displayName||t.name))},m.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,N):(e.__proto__=N,l in e||(e[l]="GeneratorFunction")),e.prototype=Object.create(x),e},m.awrap=function(e){return{__await:e}},q(P.prototype),P.prototype[s]=function(){return this},m.AsyncIterator=P,m.async=function(e,t,r,a){var o=new P(y(e,t,r,a));return m.isGeneratorFunction(t)?o:o.next().then(function(e){return e.done?e.value:o.next()})},q(x),x[l]="Generator",x[i]=function(){return this},x.toString=function(){return"[object Generator]"},m.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var a=t.pop();if(a in e)return r.value=a,r.done=!1,r}return r.done=!0,r}},m.values=L,E.prototype={constructor:E,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(S),!e)for(var t in this)"t"===t.charAt(0)&&o.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=r)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function a(a,o){return s.type="throw",s.arg=e,t.next=a,o&&(t.method="next",t.arg=r),!!o}for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n],s=i.completion;if("root"===i.tryLoc)return a("end");if(i.tryLoc<=this.prev){var l=o.call(i,"catchLoc"),u=o.call(i,"finallyLoc");if(l&&u){if(this.prev<i.catchLoc)return a(i.catchLoc,!0);if(this.prev<i.finallyLoc)return a(i.finallyLoc)}else if(l){if(this.prev<i.catchLoc)return a(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return a(i.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&o.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var n=a;break}}n&&("break"===e||"continue"===e)&&n.tryLoc<=t&&t<=n.finallyLoc&&(n=null);var i=n?n.completion:{};return i.type=e,i.arg=t,n?(this.method="next",this.next=n.finallyLoc,p):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),p},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),S(r),p}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var a=r.completion;if("throw"===a.type){var o=a.arg;S(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,a){return this.delegate={iterator:L(e),resultName:t,nextLoc:a},"next"===this.method&&(this.arg=r),p}}}function y(e,t,r,a){var o=t&&t.prototype instanceof b?t:b,n=Object.create(o.prototype),i=new E(a||[]);return n._invoke=function(e,t,r){var a=c;return function(o,n){if(a===d)throw new Error("Generator is already running");if(a===v){if("throw"===o)throw n;return D()}for(r.method=o,r.arg=n;;){var i=r.delegate;if(i){var s=$(i,r);if(s){if(s===p)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(a===c)throw a=v,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);a=d;var l=w(e,t,r);if("normal"===l.type){if(a=r.done?v:f,l.arg===p)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(a=v,r.method="throw",r.arg=l.arg)}}}(e,r,i),n}function w(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}function b(){}function C(){}function N(){}function q(e){["next","throw","return"].forEach(function(t){e[t]=function(e){return this._invoke(t,e)}})}function P(e){var t;this._invoke=function(r,a){function n(){return new Promise(function(t,n){!function t(r,a,n,i){var s=w(e[r],e,a);if("throw"!==s.type){var l=s.arg,u=l.value;return u&&"object"==typeof u&&o.call(u,"__await")?Promise.resolve(u.__await).then(function(e){t("next",e,n,i)},function(e){t("throw",e,n,i)}):Promise.resolve(u).then(function(e){l.value=e,n(l)},i)}i(s.arg)}(r,a,t,n)})}return t=t?t.then(n,n):n()}}function $(e,t){var a=e.iterator[t.method];if(a===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=r,$(e,t),"throw"===t.method))return p;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var o=w(a,e.iterator,t.arg);if("throw"===o.type)return t.method="throw",t.arg=o.arg,t.delegate=null,p;var n=o.arg;return n?n.done?(t[e.resultName]=n.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=r),t.delegate=null,p):n:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,p)}function k(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function S(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function E(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(k,this),this.reset(!0)}function L(e){if(e){var t=e[i];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var a=-1,n=function t(){for(;++a<e.length;)if(o.call(e,a))return t.value=e[a],t.done=!1,t;return t.value=r,t.done=!0,t};return n.next=n}}return{next:D}}function D(){return{value:r,done:!0}}}(function(){return this}()||Function("return this")())},"Wk+m":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,o=r("APzg"),n=(a=o)&&a.__esModule?a:{default:a};t.default={components:{ImagePreview:n.default},props:{value:{type:[String,File],default:null},usage:{type:[String],default:"verification"}},methods:{upload:function(e){var t=e.target.files;t&&t.length>0&&this.$emit("input",t[0])}}}},Xxa5:function(e,t,r){e.exports=r("jyFz")},fuDW:function(e,t,r){(e.exports=r("FZ+f")(!1)).push([e.i,".view_cv[data-v-211dfb80]{text-decoration:underline;font-size:13px;font-weight:700}.view_cv[data-v-211dfb80]:hover{text-decoration:underline!important}.cv_label[data-v-211dfb80]{font-size:1.6rem;line-height:36px;float:left}.cv_upload[data-v-211dfb80]{background-color:rgba(0,0,0,.05);border:1px dotted rgba(0,0,0,.15);border-radius:5px;padding:.8rem;float:left}",""])},jyFz:function(e,t,r){var a=function(){return this}()||Function("return this")(),o=a.regeneratorRuntime&&Object.getOwnPropertyNames(a).indexOf("regeneratorRuntime")>=0,n=o&&a.regeneratorRuntime;if(a.regeneratorRuntime=void 0,e.exports=r("SldL"),o)a.regeneratorRuntime=n;else try{delete a.regeneratorRuntime}catch(e){a.regeneratorRuntime=void 0}},n21J:function(e,t,r){var a=r("fuDW");"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);r("rjj0")("6ebe356a",a,!0,{})},nT0B:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{preview:{type:[String,File],default:null}},data:function(){return{image:null}},created:function(){this.setPreview()},watch:{preview:"setPreview"},methods:{setPreview:function(){var e=this;if(this.preview instanceof File){var t=new FileReader;t.onload=function(t){e.image=t.target.result},t.readAsDataURL(this.preview)}else"string"==typeof this.preview?this.image="https://s3.eu-west-2.amazonaws.com/altara-one/"+this.preview:this.image=null}}}},pEc7:function(e,t,r){var a=r("VU/8")(r("6Gnn"),r("zjwK"),!1,function(e){r("n21J")},"data-v-211dfb80",null);e.exports=a.exports},qqQK:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};function o(e,t,r){var n=t||new FormData,i=void 0;for(var s in e)if(e.hasOwnProperty(s))if(i=r?r+"["+s+"]":s,e[s]instanceof Array)for(var l=0;l<e[s].length;l++)o(e[s][l],n,s+"["+l+"]");else"object"!==a(e[s])||e[s]instanceof File?n.append(i,e[s]):o(e[s],n,s);return n}t.toMulipartedForm=function(e,t){if("edit"===t&&"string"==typeof e.image){var r=JSON.parse(JSON.stringify(e));return delete r.image,r}return o(e)},t.objectToFormData=o},xosg:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"image"},[e.value&&"verification"===e.usage?r("image-preview",{attrs:{preview:e.value},on:{close:function(t){e.$emit("input",null)}}}):r("div",[r("input",{attrs:{type:"file",accept:"images/*"},on:{change:e.upload}})])],1)},staticRenderFns:[]}},zjwK:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("transition",{attrs:{name:"fade"}},[r("div",{staticClass:"pt-md-3 pt-2",attrs:{id:"employeeRegister"}},[r("div",{staticClass:"card"},[r("ul",{staticClass:"nav nav-tabs justify-content-center bg-default"},[r("h6",[e._v(e._s(e.mode)+" Staff")])]),e._v(" "),r("div",{staticClass:"card-body pl-4 pr-4"},[e.show?r("form",{on:{submit:function(t){return t.preventDefault(),e.onSave(t)}}},[r("div",{staticClass:"clearfix"},[r("h5",[e._v("Employee Personal Details")]),e._v(" "),r("div",{staticClass:"form-group col-md-6 col-12 float-left px-0 px-md-3"},[r("label",[e._v("Full Name")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.full_name,expression:"form.full_name"},{name:"validate",rawName:"v-validate",value:"required|max:100",expression:"'required|max:100'"}],staticClass:"form-control",attrs:{name:"name",placeholder:"employee full name",type:"text"},domProps:{value:e.form.full_name},on:{input:function(t){t.target.composing||e.$set(e.form,"full_name",t.target.value)}}}),e._v(" "),e.errors.first("name")?r("small",[e._v(e._s(e.errors.first("name")))]):e._e()]),e._v(" "),r("div",{staticClass:"form-group col-md-6 col-12 float-left px-0 px-md-3"},[r("label",[e._v("Phone Number")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.phone_number,expression:"form.phone_number"},{name:"validate",rawName:"v-validate",value:"required|numeric|max:11|min:11",expression:"'required|numeric|max:11|min:11'"}],staticClass:"form-control",class:{"is-invalid":e.error.phone_number},attrs:{"data-vv-as":"phone number",name:"phone_number",placeholder:"081xxxxxxxx",type:"tel"},domProps:{value:e.form.phone_number},on:{input:function(t){t.target.composing||e.$set(e.form,"phone_number",t.target.value)}}}),e._v(" "),e.errors.first("phone_number")?r("small",[e._v("\n                        "+e._s(e.errors.first("phone_number"))+"\n                     ")]):e._e(),e._v(" "),e.error.phone_number?r("small",[e._v("\n                        "+e._s(e.error.phone_number[0])+"\n                     ")]):e._e()]),e._v(" "),r("div",{staticClass:"spaceBetween  mb-md-2 mb-0"}),e._v(" "),r("div",{staticClass:"form-group col-md-6 col-12 float-left px-0 px-md-3"},[r("label",[e._v("Marital Status")]),e._v(" "),r("select",{directives:[{name:"model",rawName:"v-model",value:e.form.status,expression:"form.status"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"custom-select w-100",attrs:{"data-vv-validate-on":"blur",name:"status"},on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.$set(e.form,"status",t.target.multiple?r:r[0])}}},[r("option",{attrs:{selected:"",value:""}},[e._v("select status")]),e._v(" "),e._l(e.statuses,function(t){return r("option",{domProps:{value:t}},[e._v("\n                           "+e._s(e._f("capitalize")(t))+"\n                        ")])})],2),e._v(" "),e.errors.first("status")?r("small",[e._v("\n                        "+e._s(e.errors.first("status"))+"\n                     ")]):e._e()]),e._v(" "),r("div",{staticClass:"form-group col-md-6 col-12 float-left px-0 px-md-3"},[r("label",[e._v("Nationality")]),e._v(" "),r("select",{directives:[{name:"model",rawName:"v-model",value:e.form.nationality,expression:"form.nationality"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"custom-select w-100",attrs:{"data-vv-validate-on":"blur",name:"nationality"},on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.$set(e.form,"nationality",t.target.multiple?r:r[0])}}},[r("option",{attrs:{selected:"",value:""}},[e._v("select nationality")]),e._v(" "),e._l(e.countries,function(t){return r("option",{domProps:{value:t}},[e._v("\n                           "+e._s(e._f("capitalize")(t))+"\n                        ")])})],2),e._v(" "),e.errors.first("nationality")?r("small",[e._v("\n                        "+e._s(e.errors.first("nationality"))+"\n                     ")]):e._e()]),e._v(" "),r("div",{staticClass:"spaceBetween  mb-md-2 mb-0"}),e._v(" "),r("div",{staticClass:"form-group col-md-6 col-12 float-left px-0 px-md-3"},[r("label",[e._v("Date of Birth")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.date_of_birth,expression:"form.date_of_birth"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",attrs:{"data-vv-as":"date of birth",name:"date_of_birth",type:"date"},domProps:{value:e.form.date_of_birth},on:{input:function(t){t.target.composing||e.$set(e.form,"date_of_birth",t.target.value)}}}),e._v(" "),e.errors.first("date_of_birth")?r("small",[e._v(e._s(e.errors.first("date_of_birth")))]):e._e(),e._v(" "),e.error.date_of_birth?r("small",[e._v(e._s(e.error.date_of_birth[0]))]):e._e()]),e._v(" "),r("div",{staticClass:"form-group col-md-6 col-12 float-left px-0 px-md-3"},[r("label",[e._v("Email")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.email,expression:"form.email"},{name:"validate",rawName:"v-validate",value:"required|email|min:1",expression:"'required|email|min:1'"}],staticClass:"form-control",class:{"is-invalid":e.error.email},attrs:{name:"email",placeholder:"name@example.com",type:"email"},domProps:{value:e.form.email},on:{input:function(t){t.target.composing||e.$set(e.form,"email",t.target.value)}}}),e._v(" "),e.errors.first("email")?r("small",[e._v("\n                        "+e._s(e.errors.first("email"))+"\n                     ")]):e._e(),e._v(" "),e.error.email?r("small",[e._v("\n                        "+e._s(e.error.email[0])+"\n                     ")]):e._e()]),e._v(" "),r("div",{staticClass:"spaceBetween  mb-md-2 mb-0"}),e._v(" "),r("div",{staticClass:"form-group col-md-6 col-12 float-left px-0 px-md-3"},[r("label",[e._v("Role in the company")]),e._v(" "),r("select",{directives:[{name:"model",rawName:"v-model",value:e.form.role_id,expression:"form.role_id"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"custom-select w-100",attrs:{"data-vv-name":"role","data-vv-validate-on":"blur",name:"role"},on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.$set(e.form,"role_id",t.target.multiple?r:r[0])}}},[r("option",{attrs:{selected:"",value:""}},[e._v("select role")]),e._v(" "),e._l(e.roles,function(t){return r("option",{domProps:{value:t.id}},[e._v("\n                           "+e._s(e._f("capitalize")(t.name))+"\n                        ")])})],2),e._v(" "),e.errors.first("role")?r("small",[e._v("\n                        "+e._s(e.errors.first("role"))+"\n                     ")]):e._e()]),e._v(" "),r("div",{staticClass:"form-group col-md-6 col-12 float-left px-0 px-md-3"},[r("label",[e._v("Highest Qualification")]),e._v(" "),r("select",{directives:[{name:"model",rawName:"v-model",value:e.form.highest_qualification,expression:"form.highest_qualification"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"custom-select w-100",attrs:{"data-vv-name":"qualification","data-vv-validate-on":"blur",name:"qualification"},on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.$set(e.form,"highest_qualification",t.target.multiple?r:r[0])}}},[r("option",{attrs:{selected:"",value:""}},[e._v("select qualification")]),e._v(" "),e._l(e.qualifications,function(t){return r("option",{domProps:{value:t}},[e._v("\n                           "+e._s(e._f("capitalize")(t))+"\n                        ")])})],2),e._v(" "),e.errors.has("qualification")?r("small",[e._v("\n                        "+e._s(e.errors.first("qualification"))+"\n                     ")]):e._e()]),e._v(" "),r("div",{staticClass:"spaceBetween mb-md-2 mb-0"}),e._v(" "),r("div",{staticClass:"form-group col-md-6 col-12 float-left px-0 px-md-3"},[r("label",[e._v("Operations Branch")]),e._v(" "),r("select",{directives:[{name:"model",rawName:"v-model",value:e.form.branch_id,expression:"form.branch_id"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"custom-select w-100",attrs:{"data-vv-name":"branch","data-vv-validate-on":"blur",name:"branch"},on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.$set(e.form,"branch_id",t.target.multiple?r:r[0])}}},[r("option",{attrs:{selected:"",value:""}},[e._v("select branch")]),e._v(" "),e._l(e.branches,function(t){return r("option",{domProps:{value:t.id}},[e._v("\n                           "+e._s(e._f("capitalize")(t.name))+"\n                        ")])})],2),e._v(" "),e.errors.has("branch")?r("small",[e._v("\n                        "+e._s(e.errors.first("branch"))+"\n                     ")]):e._e()]),e._v(" "),r("div",{staticClass:"form-group col-md-6 col-12 float-left px-0 px-md-3"},[r("label",[e._v("Date of Appointment")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.date_of_appointment,expression:"form.date_of_appointment"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",attrs:{"data-vv-as":"date of appointment",name:"date_of_appointment",type:"date"},domProps:{value:e.form.date_of_appointment},on:{input:function(t){t.target.composing||e.$set(e.form,"date_of_appointment",t.target.value)}}}),e._v(" "),e.errors.first("date_of_appointment")?r("small",[e._v("\n                        "+e._s(e.errors.first("date_of_appointment"))+"\n                     ")]):e._e()]),e._v(" "),r("div",{staticClass:"spaceBetween mb-md-2 mb-0"}),e._v(" "),"edit"===e.mode?r("div",{staticClass:"form-group col-md-6 col-12 float-left px-0 px-md-3"},[r("label",[e._v("Date of Exit")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.date_of_exit,expression:"form.date_of_exit"}],staticClass:"form-control",attrs:{type:"date"},domProps:{value:e.form.date_of_exit},on:{input:function(t){t.target.composing||e.$set(e.form,"date_of_exit",t.target.value)}}})]):e._e(),e._v(" "),r("div",{staticClass:"form-group col-md-6 col-12 float-left px-0 px-md-3"},[r("label",[e._v("Staff Category")]),e._v(" "),r("select",{directives:[{name:"model",rawName:"v-model",value:e.form.category,expression:"form.category"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"custom-select w-100",attrs:{"data-vv-name":"category","data-vv-validate-on":"blur",name:"qualification"},on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.$set(e.form,"category",t.target.multiple?r:r[0])}}},[r("option",{attrs:{selected:"",value:""}},[e._v("select category")]),e._v(" "),e._l(e.categories,function(t){return r("option",{domProps:{value:t.name}},[e._v("\n                           "+e._s(e._f("capitalize")(t.name))+"\n                        ")])})],2),e._v(" "),e.errors.has("category")?r("small",[e._v("\n                        "+e._s(e.errors.first("category"))+"\n                     ")]):e._e()]),e._v(" "),r("div",{staticClass:"form-group col-md-6 col-12 float-left px-0 px-md-3"},[r("label",{staticClass:"w-100 float-left pl-1"},[e._v("Gender")]),e._v(" "),e._l(e.gender,function(t){return r("div",{staticClass:"radio p-0 col-md-6 col-6 float-left"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.gender,expression:"form.gender"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{id:t,name:"gender",type:"radio"},domProps:{value:t,checked:e._q(e.form.gender,t)},on:{change:function(r){e.$set(e.form,"gender",t)}}}),e._v(" "),r("label",{attrs:{for:t}},[e._v("\n                           "+e._s(t)+"\n                        ")])])}),e._v(" "),e.errors.first("gender")?r("small",[e._v("\n                        "+e._s(e.errors.first("gender"))+"\n                     ")]):e._e()],2),e._v(" "),r("div",{staticClass:"spaceBetween mb-md-2 mb-0"}),e._v(" "),r("div",{staticClass:"form-group col-12 float-left px-0 px-md-3"},[r("label",[e._v("Describe Location")]),e._v(" "),r("textarea",{directives:[{name:"model",rawName:"v-model",value:e.form.address,expression:"form.address"},{name:"validate",rawName:"v-validate",value:"required|max:255",expression:"'required|max:255'"}],staticClass:"form-control w-100",attrs:{name:"address",placeholder:"address",rows:"1"},domProps:{value:e.form.address},on:{input:function(t){t.target.composing||e.$set(e.form,"address",t.target.value)}}}),e._v(" "),e.errors.first("address")?r("small",[e._v("\n                        "+e._s(e.errors.first("address"))+"\n                     ")]):e._e()]),e._v(" "),r("div",{staticClass:"spaceAfter"}),e._v(" "),r("h5",[e._v("Referee Details")]),e._v(" "),r("div",{staticClass:"form-group col-md-6 col-12 float-left px-0 px-md-3"},[r("label",[e._v("Referee 1 Full Name")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.referee_1,expression:"form.referee_1"},{name:"validate",rawName:"v-validate",value:"required|max:50",expression:"'required|max:50'"}],staticClass:"form-control",attrs:{"data-vv-as":"referee 1 full name",name:"referee_1",placeholder:"enter full name here",type:"text"},domProps:{value:e.form.referee_1},on:{input:function(t){t.target.composing||e.$set(e.form,"referee_1",t.target.value)}}}),e._v(" "),e.errors.first("referee_1")?r("small",[e._v("\n                        "+e._s(e.errors.first("referee_1"))+"\n                     ")]):e._e()]),e._v(" "),r("div",{staticClass:"form-group col-md-6 col-12 float-left px-0 px-md-3"},[r("label",[e._v("Referee 1 Phone Number")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.referee_1_phone_no,expression:"form.referee_1_phone_no"},{name:"validate",rawName:"v-validate",value:"required|numeric|max:11|min:11",expression:"'required|numeric|max:11|min:11'"}],staticClass:"form-control",attrs:{"data-vv-as":"referee 1 phone number",name:"referee_1_phone_no",placeholder:"081xxxxxxxx",type:"tel"},domProps:{value:e.form.referee_1_phone_no},on:{input:function(t){t.target.composing||e.$set(e.form,"referee_1_phone_no",t.target.value)}}}),e._v(" "),e.errors.first("referee_1_phone_no")?r("small",[e._v("\n                        "+e._s(e.errors.first("referee_1_phone_no"))+"\n                     ")]):e._e()]),e._v(" "),r("div",{staticClass:"spaceBetween mb-md-2 mb-0"}),e._v(" "),r("div",{staticClass:"form-group col-md-6 col-12 float-left px-0 px-md-3"},[r("label",[e._v("Referee 2 Full Name")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.referee_2,expression:"form.referee_2"},{name:"validate",rawName:"v-validate",value:"required|max:50",expression:"'required|max:50'"}],staticClass:"form-control",attrs:{"data-vv-as":"referee 2 full name",name:"referee_2",placeholder:"enter full name here",type:"text"},domProps:{value:e.form.referee_2},on:{input:function(t){t.target.composing||e.$set(e.form,"referee_2",t.target.value)}}}),e._v(" "),e.errors.first("referee_2")?r("small",[e._v("\n                        "+e._s(e.errors.first("referee_2"))+"\n                     ")]):e._e()]),e._v(" "),r("div",{staticClass:"form-group col-md-6 col-12 float-left px-0 px-md-3"},[r("label",[e._v("Referee 2 Phone Number")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.referee_2_phone_no,expression:"form.referee_2_phone_no"},{name:"validate",rawName:"v-validate",value:"required|numeric|max:11|min:11",expression:"'required|numeric|max:11|min:11'"}],staticClass:"form-control",attrs:{"data-vv-as":"referee 2 phone number",name:"referee_2_phone_no",placeholder:"081xxxxxxxx",type:"tel"},domProps:{value:e.form.referee_2_phone_no},on:{input:function(t){t.target.composing||e.$set(e.form,"referee_2_phone_no",t.target.value)}}}),e._v(" "),e.errors.first("referee_2_phone_no")?r("small",[e._v("\n                        "+e._s(e.errors.first("referee_2_phone_no"))+"\n                     ")]):e._e()]),e._v(" "),r("div",{staticClass:"spaceAfter"}),e._v(" "),r("h5",[e._v("Next of Kin Details")]),e._v(" "),r("div",{staticClass:"form-group col-md-6 col-12 float-left px-0 px-md-3"},[r("label",[e._v("Next of Kin Full Name")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.next_of_kin_name,expression:"form.next_of_kin_name"},{name:"validate",rawName:"v-validate",value:"required|max:50",expression:"'required|max:50'"}],staticClass:"form-control",attrs:{"data-vv-as":"next of kin name",name:"next_of_kin_name",placeholder:"enter full name here",type:"text"},domProps:{value:e.form.next_of_kin_name},on:{input:function(t){t.target.composing||e.$set(e.form,"next_of_kin_name",t.target.value)}}}),e._v(" "),e.errors.first("next_of_kin_name")?r("small",[e._v("\n                        "+e._s(e.errors.first("next_of_kin_name"))+"\n                     ")]):e._e()]),e._v(" "),r("div",{staticClass:"form-group col-md-6 col-12 float-left px-0 px-md-3"},[r("label",[e._v("Next of Kin Phone Number")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.next_of_kin_phone_no,expression:"form.next_of_kin_phone_no"},{name:"validate",rawName:"v-validate",value:"required|numeric|max:11|min:11",expression:"'required|numeric|max:11|min:11'"}],staticClass:"form-control",attrs:{"data-vv-as":"next of kin phone number",name:"next_of_kin_phone_no",placeholder:"081xxxxxxxx",type:"tel"},domProps:{value:e.form.next_of_kin_phone_no},on:{input:function(t){t.target.composing||e.$set(e.form,"next_of_kin_phone_no",t.target.value)}}}),e._v(" "),e.errors.first("next_of_kin_phone_no")?r("small",[e._v("\n                        "+e._s(e.errors.first("next_of_kin_phone_no"))+"\n                     ")]):e._e()]),e._v(" "),r("div",{staticClass:"spaceBetween mb-md-2 mb-0"}),e._v(" "),r("div",{staticClass:"spaceAfter"}),e._v(" "),r("h5",[e._v("Guarantor Details")]),e._v(" "),r("div",{staticClass:"form-group col-md-6 col-12 float-left px-0 px-md-3"},[r("label",[e._v("Guarantor's Full Name")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.guarantor_name,expression:"form.guarantor_name"},{name:"validate",rawName:"v-validate",value:"required|max:50",expression:"'required|max:50'"}],staticClass:"form-control",attrs:{"data-vv-as":"guarantor name",name:"guarantor_name",placeholder:"enter full name here",type:"text"},domProps:{value:e.form.guarantor_name},on:{input:function(t){t.target.composing||e.$set(e.form,"guarantor_name",t.target.value)}}}),e._v(" "),e.errors.first("guarantor_name")?r("small",[e._v("\n                        "+e._s(e.errors.first("guarantor_name"))+"\n                     ")]):e._e()]),e._v(" "),r("div",{staticClass:"form-group col-md-6 col-12 float-left px-0 px-md-3"},[r("label",[e._v("Guarantor's Number")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.guarantor_phone_no,expression:"form.guarantor_phone_no"},{name:"validate",rawName:"v-validate",value:"required|numeric|max:11|min:11",expression:"'required|numeric|max:11|min:11'"}],staticClass:"form-control",attrs:{"data-vv-as":"guarantor number",name:"guarantor_phone_no",placeholder:"081xxxxxxxx",type:"tel"},domProps:{value:e.form.guarantor_phone_no},on:{input:function(t){t.target.composing||e.$set(e.form,"guarantor_phone_no",t.target.value)}}}),e._v(" "),e.errors.first("guarantor_phone_no")?r("small",[e._v("\n                        "+e._s(e.errors.first("guarantor_phone_no"))+"\n                     ")]):e._e()]),e._v(" "),r("div",{staticClass:"spaceBetween mb-md-2 mb-0"}),e._v(" "),r("div",{staticClass:"form-group col-md-6 col-12 float-left px-0 px-md-3"},[r("label",[e._v("Guarantor's relationship")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.guarantor_relationship,expression:"form.guarantor_relationship"},{name:"validate",rawName:"v-validate",value:"required|max:50",expression:"'required|max:50'"}],staticClass:"form-control",attrs:{"data-vv-as":"guarantor relationship",name:"guarantor_relationship",placeholder:"enter guarantor relationship here",type:"text"},domProps:{value:e.form.guarantor_relationship},on:{input:function(t){t.target.composing||e.$set(e.form,"guarantor_relationship",t.target.value)}}}),e._v(" "),e.errors.first("guarantor_relationship")?r("small",[e._v("\n                        "+e._s(e.errors.first("guarantor_relationship"))+"\n                     ")]):e._e()]),e._v(" "),r("div",{staticClass:"form-group col-md-6 col-12 float-left px-0 px-md-3"},[r("label",[e._v("Guarantor's address")]),e._v(" "),r("textarea",{directives:[{name:"model",rawName:"v-model",value:e.form.guarantor_address,expression:"form.guarantor_address"},{name:"validate",rawName:"v-validate",value:"required|max:255",expression:"'required|max:255'"}],staticClass:"form-control w-100",attrs:{name:"guarantor address",placeholder:"guarantor address",rows:"1"},domProps:{value:e.form.guarantor_address},on:{input:function(t){t.target.composing||e.$set(e.form,"guarantor_address",t.target.value)}}}),e._v(" "),e.errors.first("guarantor_address")?r("small",[e._v("\n                        "+e._s(e.errors.first("guarantor_address"))+"\n                     ")]):e._e()]),e._v(" "),r("div",{staticClass:"spaceBetween mb-md-2 mb-0"}),e._v(" "),r("h5",[e._v("Upload Documents")]),e._v(" "),r("div",{staticClass:"form-group col-md-6 col-12 float-left px-0 px-md-3"},[r("div",["edit"===e.mode&&e.$data.form.cv_url?r("div",[r("a",{staticClass:"view_cv mr-4",on:{click:function(t){e.viewCV(e.form.cv_url)}}},[e._v(e._s(e.form.cv_url.substring(3)))]),e._v("\n                           ||\n                           "),r("a",{staticClass:"view_cv ml-4",on:{click:e.editCV}},[e._v("Edit CV")])]):r("div",[r("label",{staticClass:"cv_label mr-4"},[e._v("CV")]),e._v(" "),r("image-upload",{staticClass:"cv_upload",attrs:{usage:"cv"},model:{value:e.form.cv,callback:function(t){e.$set(e.form,"cv",t)},expression:"form.cv"}})],1)])]),e._v(" "),r("hr",{staticClass:"style-two"})]),e._v(" "),r("div",{staticClass:"col-sm-12 ml-auto mr-auto mt-md-2 mt-0 px-md-3 px-1 mb-3"},[r("div",{staticClass:"clearfix d-flex justify-content-end"},["edit"===e.mode?r("button",{staticClass:"mx-3 btn btn-secondary",attrs:{type:"button"},on:{click:e.done}},[e._v("Cancel")]):e._e(),e._v(" "),r("button",{staticClass:"mx-3 btn bg-default",attrs:{disabled:e.$isProcessing,type:"submit"}},[e._v("\n                        "+e._s(e._f("capitalize")(e.mode))+" Employee "),r("i",{staticClass:"far fa-paper-plane ml-1"})])])])]):e._e()])])])])},staticRenderFns:[]}}});
>>>>>>> 2dc2e2c495d18c7a9372aa09bf9e80a4bd45b742
