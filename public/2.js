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

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"babel-preset-env\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"babel-plugin-syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/ApprovalStatusButton.vue":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var _vuex = __webpack_require__("./node_modules/vuex/dist/vuex.esm.js");

var _eventBus = __webpack_require__("./resources/assets/js/utilities/event-bus.js");

exports.default = {
    props: ['link', 'size', 'customer'],

    data: function data() {
        return {
            status: null,
            unfilteredOptions: [{
                caption: 'Change sales agent',
                modal: 'toggleChangeCustomerManagerModal',
                authAccess: 'DSACaptain'
            }]
        };
    },


    methods: {
        toggleModal: function toggleModal(modalName) {
            _eventBus.EventBus.$emit(modalName, this.customer);
        }
    },

    computed: _extends({}, (0, _vuex.mapGetters)(['auth']), {
        filteredOptions: function filteredOptions() {
            var _this = this;

            return this.unfilteredOptions.filter(function (option) {
                return _this.auth(option.authAccess);
            });
        },
        isApproved: function isApproved() {
            return this.$getCustomerApprovalStatus(this.customer.verification);
        },
        buttonClass: function buttonClass() {
            return this.size && (this.link ? "status status-sm " + this.status : "status mt-md-5 my-sm-2 mt-0 " + this.status);
        },
        getLink: function getLink() {
            if (this.link) {
                if (this.auth('DVAAccess')) return 'dva/' + this.link;
                if (this.auth('ALTARAPAYAccess')) return 'altarapay/' + this.link;
            }
            return '#';
        }
    }),

    created: function created() {
        this.status = this.isApproved ? 'approved' : 'not-approved';
    }
};

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"babel-preset-env\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"babel-plugin-syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/AutocompleteSearch/AutocompleteSearch.vue":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _api = __webpack_require__("./resources/assets/js/utilities/api.js");

var _flash = __webpack_require__("./resources/assets/js/utilities/flash.js");

var _flash2 = _interopRequireDefault(_flash);

var _customHeader = __webpack_require__("./resources/assets/js/components/customHeader.vue");

var _customHeader2 = _interopRequireDefault(_customHeader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    name: "AutocompleteSearch",
    components: { CustomHeader: _customHeader2.default },
    props: {
        url: { type: String, required: true },
        title: { type: String, required: true }
    },

    data: function data() {
        return {
            search: '',
            open: false,
            customers: [],
            selectIndex: 0,
            displayText: '',
            searchColumn: 'name',
            searchColumns: [{ title: 'customer id', column: 'id' }, { title: 'customer name', column: 'name' }, { title: 'phone number', column: 'telephone' }]
        };
    },


    watch: {
        searchColumn: function searchColumn(newVal) {
            newVal === "telephone" && (this.customers = []);
        },

        search: function search(newVal) {
            var _this = this;

            if (!!newVal.trim()) {
                if (!this.isStringLengthValid(newVal)) return _flash2.default.setError("search should not be more than " + (this.searchColumn === 'name' ? " 3 " : " 1 ") + "words");

                var searchableFields = {};
                if (this.searchColumn === 'name') {
                    searchableFields['first_name'] = this.search;
                    searchableFields['middle_name'] = this.search;
                    searchableFields['last_name'] = this.search;
                } else searchableFields[this.searchColumn] = this.search;

                (0, _api.post)(this.url, { searchableFields: searchableFields }).then(function (_ref) {
                    var customers = _ref.data.customers;
                    return _this.customers = customers;
                }).catch(function () {
                    return _flash2.default.setError('error fetching result');
                });
            }
        }
    },

    methods: {
        onDownKey: function onDownKey() {
            this.customers.length - 1 > this.selectIndex && this.selectIndex++;
        },
        onUpKey: function onUpKey() {
            this.selectIndex > 0 && this.selectIndex--;
        },
        onEnterKey: function onEnterKey() {
            var option = this.customers[this.selectIndex];
            if (option) this.select(option);
        },
        select: function select(option) {
            this.displayText = this.getAutocomplete(option);
            this.$emit('customer-selected', option.id);
            this.$refs.search.blur();
        },
        toggle: function toggle(_ref2) {
            var target = _ref2.target;

            if (target === this.$refs.toggle || target === this.$refs.search) {
                if (this.open) {
                    if (target !== this.$refs.search) this.$refs.search.blur();
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
        },
        getAutocomplete: function getAutocomplete(option) {
            var optionArr = [];
            this.searchColumn === 'id' && optionArr.push(option.id);
            this.searchColumn === 'telephone' && optionArr.push(option.telephone);
            var fullName = option.hasOwnProperty('full_name') ? option.full_name : this.$getCustomerFullName(option, !!option.middle_name);
            optionArr.push(fullName);
            return this.styleAutocomplete(optionArr);
        },
        styleAutocomplete: function styleAutocomplete(optionArr) {
            var HTMLElement = '';
            optionArr.forEach(function (option) {
                return HTMLElement += "<span class=\"col\">" + option + "</span>";
            });
            return HTMLElement;
        },
        isStringLengthValid: function isStringLengthValid(str) {
            var wordCount = str.split(' ').length;
            return this.searchColumn === 'name' && wordCount <= 3 || wordCount <= 1;
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

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"babel-preset-env\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"babel-plugin-syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/CustomSMSButton/CustomSMSButton.vue":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _eventBus = __webpack_require__("./resources/assets/js/utilities/event-bus.js");

exports.default = {
    /**
     *
     * @Component Usage:
     *
     * @Interface : A button Which triggers a modal onClick.
     *
     * To add this component to any component it will be used:
     *
     * NB: You can use any method best suited for you to grant access to this feature by
     * using v-if and passing your logic.
     * eg: <span v-if='true'><CustomSMSButton/></span>
     *
     * 1.   Import the CustomSMSButton into any component and position as desired
     *      NB: Add only customer or order as a props DO NOT ADD BOTH AT THE SAME TIME!.
     *      NB: The order passed as a prop must be an instance of the
     *      Order, OrderWithPromiseCall class from the Amortization.js
     *      If Order is supplied the sms sent is linked to an order
     *      If customer is supplied then its just an sms that is not tied to any reminder.
     *      Add a :key prop when adding the component for performance purposes.(Recommended)
     *
     * 2.   On the parent component(usually the immediate child component on the
     *      index component for the portal this component is used as a sub-component)
     *      eg. for the use case on the sales list -> Root/App/Index/AllOrdersList is where the command following is added.
     *      To get this component structure use vue-devtools.
     *      NB: this is step is important as it cleans up the DOM when the modal is not in use.
     *
     *      ...mapActions('ModalAccess', [
     *          'addCustomerOptionsModalsToDom',
     *          'removeCustomerOptionsModalsFromDom'
     *      ])
     *
     *      Map the actions above in the method for the component (eg the AllOrdersList)
     *      this.addCustomerOptionsModalsToDom(); add this to the created hook to add the modal to the DOM
     *      this.removeCustomerOptionsModalsFromDom(); add this to the destroyed hook to remove the modal from the DOM
     *      The modal is added to the root vue component App.vue and dynamically displayed based on the need.
     *
     * */
    props: {
        order: { default: null },
        customer: { default: null }
    },

    methods: {
        toggleModal: function toggleModal(modalName) {
            _eventBus.EventBus.$emit(modalName, { order: this.order, customer: this.customer });
        }
    }
}; //
//
//
//
//
//

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"babel-preset-env\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"babel-plugin-syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/CustomerProfile.vue":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var _vue = __webpack_require__("./node_modules/vue/dist/vue.common.js");

var _vue2 = _interopRequireDefault(_vue);

var _vuex = __webpack_require__("./node_modules/vuex/dist/vuex.esm.js");

var _eventBus = __webpack_require__("./resources/assets/js/utilities/event-bus.js");

var _AppNavigation = __webpack_require__("./resources/assets/js/components/AppNavigation.vue");

var _AppNavigation2 = _interopRequireDefault(_AppNavigation);

var _ApprovalStatusButton = __webpack_require__("./resources/assets/js/components/ApprovalStatusButton.vue");

var _ApprovalStatusButton2 = _interopRequireDefault(_ApprovalStatusButton);

var _CustomSMSButton = __webpack_require__("./resources/assets/js/components/CustomSMSButton/CustomSMSButton.vue");

var _CustomSMSButton2 = _interopRequireDefault(_CustomSMSButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    props: ['viewCustomer'],

    components: { ApprovalStatusButton: _ApprovalStatusButton2.default, AppNavigation: _AppNavigation2.default, CustomSMSButton: _CustomSMSButton2.default },

    data: function data() {
        return {
            customer: '',
            show: false
        };
    },


    computed: _extends({
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
    }, (0, _vuex.mapGetters)(['auth'])),

    created: function created() {
        var _this = this;

        $('.tooltip').remove();
        if (this.viewCustomer) this.setCustomer(this.viewCustomer);
        _eventBus.EventBus.$on('customer', function (customer) {
            return _this.setCustomer(customer);
        });
        this.addCustomerOptionsModalsToDom();
    },


    methods: _extends({
        setCustomer: function setCustomer(customer) {
            _vue2.default.set(this.$data, 'customer', customer);
            this.show = true;
        }
    }, (0, _vuex.mapActions)('ModalAccess', ['addCustomerOptionsModalsToDom', 'removeCustomerOptionsModalsFromDom'])),

    destroyed: function destroyed() {
        this.removeCustomerOptionsModalsFromDom();
    }
};

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

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"babel-preset-env\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"babel-plugin-syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/views/FSL/lookup/lookup.vue":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = __webpack_require__("./node_modules/babel-runtime/regenerator/index.js");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _vuex = __webpack_require__("./node_modules/vuex/dist/vuex.esm.js");

var _log = __webpack_require__("./resources/assets/js/utilities/log.js");

var _auth = __webpack_require__("./resources/assets/js/utilities/auth.js");

var _auth2 = _interopRequireDefault(_auth);

var _flash = __webpack_require__("./resources/assets/js/utilities/flash.js");

var _flash2 = _interopRequireDefault(_flash);

var _api = __webpack_require__("./resources/assets/js/utilities/api.js");

var _customHeader = __webpack_require__("./resources/assets/js/components/customHeader.vue");

var _customHeader2 = _interopRequireDefault(_customHeader);

var _CustomerProfile = __webpack_require__("./resources/assets/js/components/CustomerProfile.vue");

var _CustomerProfile2 = _interopRequireDefault(_CustomerProfile);

var _Amortization = __webpack_require__("./resources/assets/js/utilities/Amortization.js");

var _CustomSMSButton = __webpack_require__("./resources/assets/js/components/CustomSMSButton/CustomSMSButton.vue");

var _CustomSMSButton2 = _interopRequireDefault(_CustomSMSButton);

var _AutocompleteSearch = __webpack_require__("./resources/assets/js/components/AutocompleteSearch/AutocompleteSearch.vue");

var _AutocompleteSearch2 = _interopRequireDefault(_AutocompleteSearch);

var _orderStatusCssClass = __webpack_require__("./resources/assets/js/components/order/orderStatusCssClass.js");

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

exports.default = {

    components: { CustomHeader: _customHeader2.default, CustomerProfile: _CustomerProfile2.default, CustomSMSButton: _CustomSMSButton2.default, AutocompleteSearch: _AutocompleteSearch2.default },

    data: function data() {
        return {
            Order: _Amortization.Order,
            customer: null,
            customer_id: '',
            user: {
                name: _auth2.default.state.user_name,
                id: _auth2.default.state.user_id
            },
            show: false,
            showModalContent: false,
            activeOrder: null,
            headers: ['Date', 'Order No.', 'Product Name', 'Total Product Price', 'Percentage', 'Down Payment', 'Repayment Plans'],
            paymentForm: null,
            paymentFormType: 'add'
        };
    },


    methods: {
        updateView: function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee(data) {
                var _this = this;

                var customer, user;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                customer = data.customer, user = data.user;

                                if (!!customer.length) {
                                    customer = customer[0];
                                    !customer.document && (customer.document = { id_card_url: "", passport_url: "" });
                                    this.user.branch = user.branch_id;
                                    this.customer = customer;
                                    this.customer.orders = customer.orders.map(function (order) {
                                        var orderWithCustomer = order;
                                        orderWithCustomer.customer = _this.customer;
                                        return new _Amortization.OrderWithPromiseCall(orderWithCustomer, _this.getAuthUserDetails.userId);
                                    });
                                    this.show = true;
                                } else _flash2.default.setError("Customer not found.", 5000);
                                this.$LIPS(false);

                            case 3:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function updateView(_x) {
                return _ref.apply(this, arguments);
            }

            return updateView;
        }(),
        processForm: function processForm(id) {
            var _this2 = this;

            this.show = false;
            this.$LIPS(true);
            (0, _api.get)('/api/customer/lookup/' + id).then(function (res) {
                return _this2.updateView(res.data);
            }).catch(function () {
                _this2.$LIPS(false);
                _flash2.default.setError('Error Fetching customer detail');
            });
        },
        displayAmortization: function displayAmortization(index) {
            this.activeOrder = this.customer.orders[index];
            this.paymentForm = { payments: [] };
            this.showModalContent = true;
            return $('#amortization').modal('toggle');
        },
        addPaymentForm: function addPaymentForm(type) {
            var level = this.activeOrder.repaymentLevel;
            var nextRepayment = parseInt(level + this.paymentForm.payments.length + 1);

            if (type !== this.paymentFormType) this.paymentForm.payments = [];
            if (type === 'edit' && (level < 1 || this.paymentForm.payments.length >= level)) return;
            if (level === this.activeOrder._count) return;
            if (nextRepayment > this.activeOrder._count) return;

            this.paymentFormType = type;

            var newPaymentData = {
                _pay: this.activeOrder.amountsToBePaid[0],
                _date: this.$getDate(),
                _col: '',
                column: ''
            };

            if (type === 'add') {
                newPaymentData._payment_bank = '';
                newPaymentData._payment_method = '';
            }

            this.paymentForm.payments.push(newPaymentData);

            this.reNumber();
        },
        deletePayment: function deletePayment(index) {
            this.paymentForm.payments.splice(index, 1);
            this.reNumber();
        },
        reNumber: function reNumber() {
            var _this3 = this;

            this.paymentForm.payments.forEach(function (payment, index) {
                /*this line below mean if the repayment level is 3 i.e the customer has made 3 repayment
                * u want to display on the ui "4th repayment"
                * so repaymentLevel(3) + index(0 - length of the added payments) + 1*/
                var next = _this3.activeOrder.repaymentLevel + index + 1;
                _this3.paymentForm.payments[index]._col = next;
                _this3.paymentForm.payments[index].column = _this3.$getColumn(next) + " Repayment";
            });
        },
        preparePayments: function preparePayments() {
            var _this4 = this;

            if (!this.canAddPayment) return;
            var payments = {};
            this.paymentForm.payments.forEach(function (payment) {
                var obj = {},
                    col = _this4.$getColumn(payment._col);
                obj[col + '_pay'] = payment._pay;
                obj[col + '_date'] = payment._date;
                if (_this4.paymentFormType === 'add') {
                    obj[col + '_payment_bank'] = payment._payment_bank;
                    obj[col + '_payment_method'] = payment._payment_method;
                }
                payments = _extends({}, payments, obj);
            });
            this.activeOrder.payments = payments;
            !$.isEmptyObject(payments) ? this.savePayments() : _flash2.default.setError("You have not added any payment.");
        },
        savePayments: function savePayments() {
            var _this5 = this;

            if (!this.canAddPayment) return;
            this.$LIPS(true);
            var type = void 0,
                data = void 0,
                order = void 0,
                orderIndex = void 0;
            if (this.activeOrder.count === 6) type = 'formal';
            if (this.activeOrder.count === 12) type = 'informal';
            data = { payments: this.activeOrder.payments, repayment_id: this.activeOrder.order.id, type: type };

            (0, _api.post)('/api/repayment', data).then(function () {
                var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee2(res) {
                    return _regenerator2.default.wrap(function _callee2$(_context2) {
                        while (1) {
                            switch (_context2.prev = _context2.next) {
                                case 0:
                                    if (!res.data.saved) {
                                        _context2.next = 13;
                                        break;
                                    }

                                    order = _this5.customer.orders.find(function (order, index) {
                                        var found = order.order.id === data.repayment_id;
                                        if (found) orderIndex = index;
                                        return found;
                                    }).order;

                                    order['repayment_' + type] = res.data.amortization;
                                    _context2.next = 5;
                                    return new _Amortization.Order(order, _this5.customer);

                                case 5:
                                    _this5.activeOrder = _context2.sent;

                                    _this5.customer.orders[orderIndex] = _this5.activeOrder;
                                    _context2.next = 9;
                                    return _this5.logAddedPayment(data);

                                case 9:
                                    if (_this5.activeOrder.repaymentLevel === _this5.activeOrder.count) _this5.sendPaymentCompleteSMS();
                                    _this5.paymentForm = { payments: [] };
                                    _this5.$scrollToTop();
                                    _this5.$LIPS(false);

                                case 13:
                                case 'end':
                                    return _context2.stop();
                            }
                        }
                    }, _callee2, _this5);
                }));

                return function (_x2) {
                    return _ref2.apply(this, arguments);
                };
            }()).catch(function () {
                return _flash2.default.setError('Error adding payment! Please try again later.');
            });
        },
        sendPaymentCompleteSMS: function sendPaymentCompleteSMS() {
            return null; //TODO: i was asked to disable the sms sent when a customer has completed payments.
            /*let messageBody = `Dear ${this.activeOrder.customerName}, you have successfully completed ` +
                `your payment for ${this.activeOrder.order.store_product.product_name}. ` +
                `Thanks for patronizing us.`,
                message = new Message(messageBody, this.activeOrder.customer.telephone);
            message.send(r => r.status === 200 && Flash.setSuccess('Repayments Completed. SMS sent.'));*/
        },
        logAddedPayment: function logAddedPayment(data) {
            var paymentsMade = this.paymentForm.payments.map(function (pmt) {
                return pmt.column.replace(/ /g, '_');
            }).join(' '),
                desc = paymentsMade + '. Order: ID: ' + data.repayment_id + '. Customer ID: ' + this.customer_id;
            return (0, _log.log)('Payment(s) added', desc);
        },


        getOrderStatus: function getOrderStatus(activeOrder) {
            return (0, _orderStatusCssClass.getOrderStatus)(activeOrder);
        },

        getOrderStatusClass: function getOrderStatusClass(orderStatus) {
            return (0, _orderStatusCssClass.getOrderStatusClass)(orderStatus);
        }
    },

    computed: _extends({}, (0, _vuex.mapGetters)(['getBanks', 'getPaymentMethods', 'auth', 'getAuthUserDetails']), {
        check: function check() {
            return !(!this.$isProcessing && !!this.customer_id);
        },
        canAddPayment: function canAddPayment() {
            if (this.auth('FSLLead')) return true;
            return this.auth('supervisor') && this.user.branch === this.activeOrder.branch.id;
        },
        canEditPayment: function canEditPayment() {
            if (this.auth('FSLLead')) return true;
            return this.auth('FSLAccess') && this.user.branch === this.activeOrder.branch.id;
        }
    }),

    created: function created() {
        this.$prepareBanks();
        this.$prepareBranches();
        this.$preparePaymentMethods();
    }
};

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-49386ade\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/ApprovalStatusButton.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n[data-function=\"display\"].status[data-v-49386ade] {\n    border-top-right-radius: 0;\n    border-bottom-right-radius: 0;\n}\n.status.dropdown-toggle[data-v-49386ade] {\n    border-top-left-radius: 0 !important;\n    border-bottom-left-radius: 0 !important;\n    padding: 1rem 1rem !important;\n}\n.approved.dropdown-toggle[data-v-49386ade] {\n    background: -webkit-gradient(linear, left top, left bottom, from(#00a368), to(#00662a));\n    background: linear-gradient(180deg, #00a368 0%, #00662a 100%)\n}\n.not-approved.dropdown-toggle[data-v-49386ade] {\n    background: -webkit-gradient(linear, left top, left bottom, from(#e12424), to(#a40000));\n    background: linear-gradient(180deg, #e12424 0%, #a40000 100%)\n}\n.dropdown-toggle[data-v-49386ade]::after {\n    border-top: .6em solid;\n    border-right: .6em solid transparent;\n    border-left: .6em solid transparent;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-582e561c\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/views/FSL/lookup/lookup.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.attendance-item[data-v-582e561c] {\n    cursor: auto;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6c389568\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/AutocompleteSearch/AutocompleteSearch.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.typeahead.typeahead__open .typeahead__text[data-v-6c389568] {\n  opacity: 0;\n}\n.typeahead.typeahead__open input[data-v-6c389568] {\n  color: rgba(142, 151, 160, 0.8);\n}\n.typeahead input[data-v-6c389568] {\n  color: rgba(142, 151, 160, 0);\n}\n.typeahead__text > span[data-v-6c389568] {\n  padding-left: 0 !important;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-18fd8fee\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/AppNavigation.vue":
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
    require("vue-hot-reload-api")      .rerender("data-v-18fd8fee", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-3c04515e\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/CustomSMSButton/CustomSMSButton.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "span",
    {
      staticClass:
        "CustomSMSButton d-flex align-items-center justify-content-center",
      on: {
        click: function($event) {
          return _vm.toggleModal("SMSModal")
        }
      }
    },
    [_c("i", { staticClass: "fas fa-envelope" })]
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-3c04515e", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-49386ade\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/ApprovalStatusButton.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "position-relative d-flex align-items-stretch" },
    [
      _c(
        "router-link",
        {
          class: _vm.buttonClass + " text-uppercase",
          attrs: {
            tag: _vm.link ? "a" : "span",
            to: _vm.getLink,
            "data-function": "display"
          }
        },
        [
          _vm._v(
            "\n        " +
              _vm._s(_vm.status.split("-").join(" ")) +
              "\n        "
          ),
          _c("i", {
            class: "ml-3 fas fa-" + (_vm.isApproved ? "check" : "times")
          })
        ]
      ),
      _vm._v(" "),
      _c("span", {
        class:
          _vm.buttonClass +
          " dropdown-toggle dropdown-toggle-split d-flex align-items-center",
        attrs: {
          "data-toggle": "dropdown",
          "aria-haspopup": "true",
          "aria-expanded": "false"
        }
      }),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "dropdown-menu" },
        _vm._l(_vm.filteredOptions, function(option) {
          return _c(
            "a",
            {
              key: option.modal,
              staticClass: "dropdown-item",
              attrs: { href: "javascript:" },
              on: {
                click: function($event) {
                  return _vm.toggleModal(option.modal)
                }
              }
            },
            [_vm._v("\n            " + _vm._s(option.caption) + "\n        ")]
          )
        }),
        0
      )
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
    require("vue-hot-reload-api")      .rerender("data-v-49386ade", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-582e561c\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/views/FSL/lookup/lookup.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("transition", { attrs: { name: "fade" } }, [
    _c(
      "div",
      { attrs: { id: "reminder" } },
      [
        _c("AutocompleteSearch", {
          attrs: {
            title: "customer lookup",
            url: "/api/customer/autocomplete"
          },
          on: { "customer-selected": _vm.processForm }
        }),
        _vm._v(" "),
        _c("transition", { attrs: { name: "fade" } }, [
          _vm.customer && _vm.show
            ? _c(
                "div",
                [
                  _c("customer-profile", {
                    attrs: { "view-customer": _vm.customer }
                  }),
                  _vm._v(" "),
                  _c("custom-header", { attrs: { title: "All order(s)" } }),
                  _vm._v(" "),
                  _c("div", { staticClass: "mt-5 mb-3 attendance-head" }, [
                    _c(
                      "div",
                      { staticClass: "row px-4 pt-3 pb-4 text-center" },
                      [
                        _c(
                          "div",
                          {
                            staticClass: "col light-heading",
                            staticStyle: { "max-width": "100px" }
                          },
                          [_vm._v("S/No.")]
                        ),
                        _vm._v(" "),
                        _vm._l(_vm.headers, function(header) {
                          return _c(
                            "div",
                            { staticClass: "col light-heading" },
                            [_vm._v(_vm._s(header))]
                          )
                        })
                      ],
                      2
                    )
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "tab-content mt-1 attendance-body" },
                    [
                      _vm.show && _vm.customer.orders.length > 0
                        ? _c(
                            "div",
                            { staticClass: "tab-pane active text-center" },
                            _vm._l(_vm.customer.orders, function(order, index) {
                              return _c(
                                "div",
                                { staticClass: "mb-3 row attendance-item" },
                                [
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "col-12 col-xs-2 col-md col-lg d-flex align-items-center",
                                      staticStyle: { "max-width": "100px" }
                                    },
                                    [
                                      _c(
                                        "span",
                                        { staticClass: "user mx-auto" },
                                        [_vm._v(_vm._s(index + 1))]
                                      ),
                                      _vm._v(" "),
                                      _vm.$route.meta.customSMS
                                        ? _c(
                                            "span",
                                            [
                                              _c("CustomSMSButton", {
                                                key: order.order.id,
                                                attrs: {
                                                  order: order,
                                                  customer: _vm.customer
                                                }
                                              })
                                            ],
                                            1
                                          )
                                        : _vm._e()
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "col-12 col-xs-2 col-md col-lg d-flex align-items-center justify-content-center"
                                    },
                                    [
                                      _vm._v(
                                        "\n                                    " +
                                          _vm._s(order.order.order_date) +
                                          "\n                                "
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "col-12 col-xs-2 col-md col-lg d-flex user-name align-items-center justify-content-center"
                                    },
                                    [
                                      _vm._v(
                                        "\n                                    " +
                                          _vm._s(order.order.id) +
                                          "\n                                "
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "col-12 col-xs-3 col-md col-lg d-flex align-items-center justify-content-center"
                                    },
                                    [
                                      _vm._v(
                                        "\n                                    " +
                                          _vm._s(
                                            order.order.store_product
                                              .product_name
                                          ) +
                                          "\n                                "
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "col-12 col-xs-2 col-md col-lg d-flex align-items-center justify-content-center"
                                    },
                                    [
                                      _vm._v(
                                        "\n                                    " +
                                          _vm._s(
                                            _vm.$formatCurrency(
                                              order.order.product_price
                                            )
                                          ) +
                                          "\n                                "
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "col-12 col-xs-2 col-md col-lg d-flex align-items-center justify-content-center"
                                    },
                                    [
                                      _vm._v(
                                        "\n                                    " +
                                          _vm._s(
                                            order.order.sales_category.name
                                          ) +
                                          "\n                                "
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "col-12 col-xs-2 col-md col-lg d-flex align-items-center justify-content-center"
                                    },
                                    [
                                      _vm._v(
                                        "\n                                    " +
                                          _vm._s(
                                            _vm.$formatCurrency(
                                              order.order.down_payment
                                            )
                                          ) +
                                          "\n                                "
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "col-12 col-xs-2 col-md col-lg d-flex align-items-center justify-content-center"
                                    },
                                    [
                                      _c(
                                        "button",
                                        {
                                          staticClass: "btn status my-sm-2",
                                          class:
                                            order.count === order.repaymentLevel
                                              ? "approved"
                                              : "pending",
                                          on: {
                                            click: function($event) {
                                              return _vm.displayAmortization(
                                                index
                                              )
                                            }
                                          }
                                        },
                                        [
                                          _vm._v(
                                            "\n                                        View Plan\n                                        "
                                          ),
                                          _c("i", {
                                            staticClass: "fas ml-3",
                                            class:
                                              order.count ===
                                              order.repaymentLevel
                                                ? "fa-check-circle"
                                                : "fa-hourglass-half",
                                            staticStyle: {
                                              "font-size": "1.4rem"
                                            }
                                          })
                                        ]
                                      )
                                    ]
                                  )
                                ]
                              )
                            }),
                            0
                          )
                        : _c(
                            "div",
                            { staticClass: "tab-pane active text-center" },
                            [
                              _c(
                                "div",
                                { staticClass: "mb-3 row attendance-item" },
                                [
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "col d-flex light-heading align-items-center justify-content-center"
                                    },
                                    [
                                      _vm._v(
                                        "\n                                    No records found!\n                                "
                                      )
                                    ]
                                  )
                                ]
                              )
                            ]
                          )
                    ]
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "mt-5 mb-3 attendance-head" }, [
                    _c("div", { staticClass: "w-100 my-5 mx-0 hr" })
                  ])
                ],
                1
              )
            : _vm._e()
        ]),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "modal fade repayment",
            attrs: { id: "amortization" }
          },
          [
            _c(
              "div",
              {
                staticClass: "modal-dialog modal-xl",
                attrs: { role: "document" }
              },
              [
                _vm.showModalContent
                  ? _c("div", { staticClass: "modal-content" }, [
                      _c("div", { staticClass: "modal-header py-2" }, [
                        _c("h6", { staticClass: "modal-title py-1" }, [
                          _vm._v(
                            "\n                                Repayment Plan/Summary - " +
                              _vm._s(
                                _vm._f("capitalize")(
                                  _vm.customer.employment_status
                                )
                              ) +
                              "\n                            "
                          )
                        ]),
                        _vm._v(" "),
                        _c(
                          "a",
                          {
                            staticClass: "close py-1",
                            attrs: {
                              "aria-label": "Close",
                              "data-dismiss": "modal"
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
                      _c("div", { staticClass: "modal-body" }, [
                        _c("div", { staticClass: "table-responsive" }, [
                          _c("h5", { staticClass: "mt-3 mb-0" }, [
                            _vm._v("Order Information")
                          ]),
                          _vm._v(" "),
                          _c("table", { staticClass: "table table-bordered" }, [
                            _c("tbody", [
                              _c("tr", { staticClass: "table-separator" }, [
                                _c("td", [_vm._v("Name")]),
                                _vm._v(" "),
                                _c("td", [_vm._v("Order Id")]),
                                _vm._v(" "),
                                _c("td", [_vm._v("Product")]),
                                _vm._v(" "),
                                _c("th", [_vm._v("Branch")]),
                                _vm._v(" "),
                                _c("th", [_vm._v("Status")])
                              ]),
                              _vm._v(" "),
                              _c("tr", [
                                _c("td", { staticClass: "font-weight-bold" }, [
                                  _vm._v(
                                    _vm._s(_vm.activeOrder.customerName) +
                                      "\n                                        "
                                  )
                                ]),
                                _vm._v(" "),
                                _c("th", [
                                  _vm._v(_vm._s(_vm.activeOrder.order.id))
                                ]),
                                _vm._v(" "),
                                _c("th", [
                                  _vm._v(
                                    _vm._s(
                                      _vm.activeOrder.order.store_product
                                        .product_name
                                    )
                                  )
                                ]),
                                _vm._v(" "),
                                _c("td", { staticClass: "font-weight-bold" }, [
                                  _vm._v(_vm._s(_vm.activeOrder.branch.name))
                                ]),
                                _vm._v(" "),
                                _c(
                                  "td",
                                  {
                                    staticClass: "font-weight-bold",
                                    class: _vm.getOrderStatusClass(
                                      _vm.getOrderStatus(_vm.activeOrder)
                                    )
                                  },
                                  [
                                    _vm._v(
                                      "\n                                            " +
                                        _vm._s(
                                          _vm.getOrderStatus(_vm.activeOrder)
                                        ) +
                                        "\n                                        "
                                    )
                                  ]
                                )
                              ])
                            ])
                          ]),
                          _vm._v(" "),
                          _c("h5", { staticClass: "mt-5 mb-0" }, [
                            _vm._v("Amortization Schedule")
                          ]),
                          _vm._v(" "),
                          _c("table", { staticClass: "table table-bordered" }, [
                            _c("tbody", { staticClass: "text-center" }, [
                              _c(
                                "tr",
                                [
                                  _c("th", [_vm._v("Repayment")]),
                                  _vm._v(" "),
                                  _vm._l(
                                    _vm.activeOrder.repaymentCaptions,
                                    function(caption) {
                                      return _c("td", {
                                        domProps: { innerHTML: _vm._s(caption) }
                                      })
                                    }
                                  )
                                ],
                                2
                              ),
                              _vm._v(" "),
                              _c(
                                "tr",
                                { staticClass: "table-separator" },
                                [
                                  _c("th", [_vm._v("Due Date")]),
                                  _vm._v(" "),
                                  _vm._l(_vm.activeOrder.dueDates, function(
                                    date
                                  ) {
                                    return _c("td", [_vm._v(_vm._s(date))])
                                  })
                                ],
                                2
                              ),
                              _vm._v(" "),
                              _c(
                                "tr",
                                [
                                  _c("th", [_vm._v("Actual Pay Day")]),
                                  _vm._v(" "),
                                  _vm._l(
                                    _vm.activeOrder.actualPayDates,
                                    function(date) {
                                      return _c("td", [_vm._v(_vm._s(date))])
                                    }
                                  )
                                ],
                                2
                              ),
                              _vm._v(" "),
                              _c(
                                "tr",
                                { staticClass: "table-separator" },
                                [
                                  _c("th", [_vm._v("Status")]),
                                  _vm._v(" "),
                                  _vm._l(
                                    _vm.activeOrder.paymentStatusClasses,
                                    function(status) {
                                      return _c("td", { class: status.class }, [
                                        _c("i", {
                                          staticClass: "fas",
                                          class: status.icon
                                        })
                                      ])
                                    }
                                  )
                                ],
                                2
                              ),
                              _vm._v(" "),
                              _c(
                                "tr",
                                { staticClass: "table-separator" },
                                [
                                  _c("th", [_vm._v("Repayment Amount")]),
                                  _vm._v(" "),
                                  _vm._l(
                                    _vm.activeOrder.amountsToBePaid,
                                    function(payment) {
                                      return _c("td", [
                                        _vm._v(
                                          "\n                                            " +
                                            _vm._s(
                                              _vm.$formatCurrency(payment)
                                            ) +
                                            "\n                                        "
                                        )
                                      ])
                                    }
                                  )
                                ],
                                2
                              ),
                              _vm._v(" "),
                              _c(
                                "tr",
                                [
                                  _c("th", [_vm._v("Actual Amount Paid")]),
                                  _vm._v(" "),
                                  _vm._l(
                                    _vm.activeOrder.actualAmountsPaid,
                                    function(payment) {
                                      return _c("td", [
                                        _vm._v(
                                          "\n                                            " +
                                            _vm._s(
                                              _vm.$formatCurrency(payment)
                                            ) +
                                            "\n                                        "
                                        )
                                      ])
                                    }
                                  )
                                ],
                                2
                              ),
                              _vm._v(" "),
                              _c(
                                "tr",
                                { staticClass: "table-separator" },
                                [
                                  _c("th", [_vm._v("Payment Method")]),
                                  _vm._v(" "),
                                  _vm._l(
                                    _vm.activeOrder.paymentMethods,
                                    function(repaymentMethod) {
                                      return _c(
                                        "td",
                                        { staticClass: "text-capitalize" },
                                        [
                                          _vm._v(
                                            "\n                                            " +
                                              _vm._s(
                                                _vm.Order.convertToName(
                                                  repaymentMethod,
                                                  "paymentMethods"
                                                )
                                              ) +
                                              "\n                                        "
                                          )
                                        ]
                                      )
                                    }
                                  )
                                ],
                                2
                              ),
                              _vm._v(" "),
                              _c(
                                "tr",
                                [
                                  _c("th", [_vm._v("Bank")]),
                                  _vm._v(" "),
                                  _vm._l(_vm.activeOrder.paymentBanks, function(
                                    repaymentBank
                                  ) {
                                    return _c(
                                      "td",
                                      { staticClass: "text-capitalize" },
                                      [
                                        _vm._v(
                                          "\n                                            " +
                                            _vm._s(
                                              _vm.Order.convertToName(
                                                repaymentBank,
                                                "banks"
                                              )
                                            ) +
                                            "\n                                        "
                                        )
                                      ]
                                    )
                                  })
                                ],
                                2
                              )
                            ])
                          ]),
                          _vm._v(" "),
                          _c("h5", { staticClass: "mt-5 mb-0" }, [
                            _vm._v("Payment Summary")
                          ]),
                          _vm._v(" "),
                          _c("table", { staticClass: "table table-bordered" }, [
                            _c("tbody", { staticClass: "text-center" }, [
                              _c("tr", { staticClass: "table-separator" }, [
                                _c("td", { staticClass: "text-left" }, [
                                  _vm._v("Discount Detail (%)")
                                ]),
                                _vm._v(" "),
                                _c("th", [
                                  _vm._v(
                                    _vm._s(
                                      _vm._f("capitalize")(
                                        _vm.activeOrder.discount
                                      )
                                    )
                                  )
                                ]),
                                _vm._v(" "),
                                _c("td", [_vm._v("Total Before Discount")]),
                                _vm._v(" "),
                                _c("th", [
                                  _vm._v(
                                    _vm._s(
                                      _vm.$formatCurrency(
                                        _vm.$roundDownAmt(
                                          _vm.activeOrder.order["product_price"]
                                        )
                                      )
                                    )
                                  )
                                ]),
                                _vm._v(" "),
                                _c("td", [_vm._v("Total Paid (+discount)")]),
                                _vm._v(" "),
                                _c("th", [
                                  _vm._v(_vm._s(_vm.activeOrder.amountPaid))
                                ])
                              ]),
                              _vm._v(" "),
                              _c("tr", [
                                _c("td", { staticClass: "text-left" }, [
                                  _vm._v("Discount Amount")
                                ]),
                                _vm._v(" "),
                                _c("th", [
                                  _vm._v(_vm._s(_vm.activeOrder.discountAmount))
                                ]),
                                _vm._v(" "),
                                _c("td", [_vm._v("Total After Discount")]),
                                _vm._v(" "),
                                _c("th", [
                                  _vm._v(
                                    _vm._s(_vm.activeOrder.discountedTotal)
                                  )
                                ]),
                                _vm._v(" "),
                                _c("td", [_vm._v("Total Debt")]),
                                _vm._v(" "),
                                _c("th", [
                                  _vm._v(
                                    _vm._s(_vm.activeOrder.outstandingDebt)
                                  )
                                ])
                              ]),
                              _vm._v(" "),
                              _c("tr", [
                                _c("td", { staticClass: "text-left" }, [
                                  _vm._v("Down Payment")
                                ]),
                                _vm._v(" "),
                                _c("th", [
                                  _vm._v(
                                    _vm._s(
                                      _vm.$formatCurrency(
                                        _vm.$roundDownAmt(
                                          _vm.activeOrder.order["down_payment"]
                                        )
                                      )
                                    )
                                  )
                                ]),
                                _vm._v(" "),
                                _c("td", [_vm._v("Total Plus Default Fee")]),
                                _vm._v(" "),
                                _c("th", [
                                  _vm._v(
                                    _vm._s(_vm.activeOrder.totalPlusDefault)
                                  )
                                ]),
                                _vm._v(" "),
                                _c("td", [_vm._v("Default Fee")]),
                                _vm._v(" "),
                                _c("th", [
                                  _vm._v(_vm._s(_vm.activeOrder.defaultFee))
                                ])
                              ])
                            ])
                          ]),
                          _vm._v(" "),
                          _vm.canEditPayment
                            ? _c("div", [
                                _c("h5", { staticClass: "mt-5 mb-0" }, [
                                  _vm._v(
                                    "\n                                        " +
                                      _vm._s(
                                        _vm._f("capitalize")(
                                          _vm.paymentFormType
                                        )
                                      ) +
                                      " a new payment\n                                    "
                                  )
                                ]),
                                _vm._v(" "),
                                _c(
                                  "table",
                                  { staticClass: "table table-bordered" },
                                  [
                                    _c(
                                      "tbody",
                                      { staticClass: "text-center" },
                                      [
                                        _c(
                                          "tr",
                                          { staticClass: "table-separator" },
                                          [
                                            _c(
                                              "td",
                                              { staticClass: "text-left" },
                                              [_vm._v("S/No.")]
                                            ),
                                            _vm._v(" "),
                                            _c("th", [_vm._v("Repayment")]),
                                            _vm._v(" "),
                                            _c("th", [_vm._v("Amount")]),
                                            _vm._v(" "),
                                            _c("th", [
                                              _vm._v("Payment Method")
                                            ]),
                                            _vm._v(" "),
                                            _c("th", [_vm._v("Bank")]),
                                            _vm._v(" "),
                                            _c("th", [_vm._v("Date")]),
                                            _vm._v(" "),
                                            _c("th", [_vm._v("Collected By")]),
                                            _vm._v(" "),
                                            _c("th", [_vm._v("Action")])
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _vm._l(
                                          _vm.paymentForm.payments,
                                          function(payment, index) {
                                            return _c("tr", [
                                              _c("th", [
                                                _vm._v(_vm._s(index + 1))
                                              ]),
                                              _vm._v(" "),
                                              _c("th", [
                                                _vm.paymentFormType === "add"
                                                  ? _c(
                                                      "div",
                                                      {
                                                        staticClass:
                                                          "form-group mb-0"
                                                      },
                                                      [
                                                        _c("input", {
                                                          directives: [
                                                            {
                                                              name: "model",
                                                              rawName:
                                                                "v-model",
                                                              value:
                                                                _vm.paymentForm
                                                                  .payments[
                                                                  index
                                                                ].column,
                                                              expression:
                                                                "paymentForm.payments[index].column"
                                                            }
                                                          ],
                                                          staticClass:
                                                            "form-control",
                                                          attrs: {
                                                            disabled: "",
                                                            name: "date",
                                                            type: "text"
                                                          },
                                                          domProps: {
                                                            value:
                                                              _vm.paymentForm
                                                                .payments[index]
                                                                .column
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
                                                                _vm.paymentForm
                                                                  .payments[
                                                                  index
                                                                ],
                                                                "column",
                                                                $event.target
                                                                  .value
                                                              )
                                                            }
                                                          }
                                                        })
                                                      ]
                                                    )
                                                  : _c(
                                                      "select",
                                                      {
                                                        directives: [
                                                          {
                                                            name: "model",
                                                            rawName: "v-model",
                                                            value:
                                                              _vm.paymentForm
                                                                .payments[index]
                                                                ._col,
                                                            expression:
                                                              "paymentForm.payments[index]._col"
                                                          }
                                                        ],
                                                        staticClass:
                                                          "custom-select w-100",
                                                        on: {
                                                          change: function(
                                                            $event
                                                          ) {
                                                            var $$selectedVal = Array.prototype.filter
                                                              .call(
                                                                $event.target
                                                                  .options,
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
                                                              _vm.paymentForm
                                                                .payments[
                                                                index
                                                              ],
                                                              "_col",
                                                              $event.target
                                                                .multiple
                                                                ? $$selectedVal
                                                                : $$selectedVal[0]
                                                            )
                                                          }
                                                        }
                                                      },
                                                      _vm._l(
                                                        _vm.activeOrder
                                                          .repaymentLevel,
                                                        function(i) {
                                                          return _c(
                                                            "option",
                                                            {
                                                              domProps: {
                                                                value: i
                                                              }
                                                            },
                                                            [
                                                              _vm._v(
                                                                "\n                                                        " +
                                                                  _vm._s(
                                                                    _vm.$getColumn(
                                                                      i
                                                                    )
                                                                  ) +
                                                                  " Repayment\n                                                    "
                                                              )
                                                            ]
                                                          )
                                                        }
                                                      ),
                                                      0
                                                    )
                                              ]),
                                              _vm._v(" "),
                                              _c("th", [
                                                _c(
                                                  "div",
                                                  {
                                                    staticClass:
                                                      "form-group mb-0"
                                                  },
                                                  [
                                                    _c("input", {
                                                      directives: [
                                                        {
                                                          name: "model",
                                                          rawName: "v-model",
                                                          value:
                                                            _vm.paymentForm
                                                              .payments[index]
                                                              ._pay,
                                                          expression:
                                                            "paymentForm.payments[index]._pay"
                                                        }
                                                      ],
                                                      staticClass:
                                                        "form-control",
                                                      attrs: {
                                                        name: "date",
                                                        type: "text"
                                                      },
                                                      domProps: {
                                                        value:
                                                          _vm.paymentForm
                                                            .payments[index]
                                                            ._pay
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
                                                            _vm.paymentForm
                                                              .payments[index],
                                                            "_pay",
                                                            $event.target.value
                                                          )
                                                        }
                                                      }
                                                    })
                                                  ]
                                                )
                                              ]),
                                              _vm._v(" "),
                                              _c("th", [
                                                _c(
                                                  "select",
                                                  {
                                                    directives: [
                                                      {
                                                        name: "model",
                                                        rawName: "v-model",
                                                        value:
                                                          _vm.paymentForm
                                                            .payments[index]
                                                            ._payment_method,
                                                        expression:
                                                          "paymentForm.payments[index]._payment_method"
                                                      }
                                                    ],
                                                    staticClass:
                                                      "custom-select w-100",
                                                    attrs: {
                                                      disabled:
                                                        _vm.paymentFormType ===
                                                        "edit"
                                                    },
                                                    on: {
                                                      change: function($event) {
                                                        var $$selectedVal = Array.prototype.filter
                                                          .call(
                                                            $event.target
                                                              .options,
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
                                                          _vm.paymentForm
                                                            .payments[index],
                                                          "_payment_method",
                                                          $event.target.multiple
                                                            ? $$selectedVal
                                                            : $$selectedVal[0]
                                                        )
                                                      }
                                                    }
                                                  },
                                                  _vm._l(
                                                    _vm.getPaymentMethods,
                                                    function(ref) {
                                                      var name = ref.name
                                                      var id = ref.id
                                                      return _c(
                                                        "option",
                                                        {
                                                          domProps: {
                                                            value: id
                                                          }
                                                        },
                                                        [
                                                          _vm._v(
                                                            "\n                                                        " +
                                                              _vm._s(
                                                                _vm._f(
                                                                  "capitalize"
                                                                )(name)
                                                              ) +
                                                              "\n                                                    "
                                                          )
                                                        ]
                                                      )
                                                    }
                                                  ),
                                                  0
                                                )
                                              ]),
                                              _vm._v(" "),
                                              _c("th", [
                                                _c(
                                                  "select",
                                                  {
                                                    directives: [
                                                      {
                                                        name: "model",
                                                        rawName: "v-model",
                                                        value:
                                                          _vm.paymentForm
                                                            .payments[index]
                                                            ._payment_bank,
                                                        expression:
                                                          "paymentForm.payments[index]._payment_bank"
                                                      }
                                                    ],
                                                    staticClass:
                                                      "custom-select w-100",
                                                    attrs: {
                                                      disabled:
                                                        _vm.paymentFormType ===
                                                        "edit"
                                                    },
                                                    on: {
                                                      change: function($event) {
                                                        var $$selectedVal = Array.prototype.filter
                                                          .call(
                                                            $event.target
                                                              .options,
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
                                                          _vm.paymentForm
                                                            .payments[index],
                                                          "_payment_bank",
                                                          $event.target.multiple
                                                            ? $$selectedVal
                                                            : $$selectedVal[0]
                                                        )
                                                      }
                                                    }
                                                  },
                                                  _vm._l(_vm.getBanks, function(
                                                    ref
                                                  ) {
                                                    var name = ref.name
                                                    var id = ref.id
                                                    return _c(
                                                      "option",
                                                      {
                                                        domProps: { value: id }
                                                      },
                                                      [_vm._v(_vm._s(name))]
                                                    )
                                                  }),
                                                  0
                                                )
                                              ]),
                                              _vm._v(" "),
                                              _c("th", [
                                                _c(
                                                  "div",
                                                  {
                                                    staticClass:
                                                      "form-group mb-0"
                                                  },
                                                  [
                                                    _c("input", {
                                                      directives: [
                                                        {
                                                          name: "model",
                                                          rawName: "v-model",
                                                          value:
                                                            _vm.paymentForm
                                                              .payments[index]
                                                              ._date,
                                                          expression:
                                                            "paymentForm.payments[index]._date"
                                                        }
                                                      ],
                                                      staticClass:
                                                        "form-control",
                                                      attrs: {
                                                        disabled:
                                                          _vm.paymentFormType ===
                                                          "edit",
                                                        name: "date",
                                                        type: "date"
                                                      },
                                                      domProps: {
                                                        value:
                                                          _vm.paymentForm
                                                            .payments[index]
                                                            ._date
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
                                                            _vm.paymentForm
                                                              .payments[index],
                                                            "_date",
                                                            $event.target.value
                                                          )
                                                        }
                                                      }
                                                    })
                                                  ]
                                                )
                                              ]),
                                              _vm._v(" "),
                                              _c("th", [
                                                _c(
                                                  "div",
                                                  {
                                                    staticClass:
                                                      "form-group mb-0"
                                                  },
                                                  [
                                                    _c("input", {
                                                      staticClass:
                                                        "form-control",
                                                      attrs: {
                                                        "data-vv-as": "date",
                                                        disabled: "",
                                                        name: "date",
                                                        type: "text"
                                                      },
                                                      domProps: {
                                                        value: _vm.user.name
                                                      }
                                                    })
                                                  ]
                                                )
                                              ]),
                                              _vm._v(" "),
                                              _c("th", [
                                                _c(
                                                  "button",
                                                  {
                                                    staticClass:
                                                      "ml-2 btn status status-sm my-sm-2 not-approved",
                                                    on: {
                                                      click: function($event) {
                                                        return _vm.deletePayment(
                                                          index
                                                        )
                                                      }
                                                    }
                                                  },
                                                  [
                                                    _c("i", {
                                                      staticClass:
                                                        "fas fa-times"
                                                    })
                                                  ]
                                                )
                                              ])
                                            ])
                                          }
                                        )
                                      ],
                                      2
                                    )
                                  ]
                                )
                              ])
                            : _vm._e()
                        ])
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass: "modal-footer",
                          class: {
                            "d-flex justify-content-end": !_vm.canEditPayment
                          }
                        },
                        [
                          _vm.canAddPayment
                            ? _c(
                                "button",
                                {
                                  staticClass: "btn status my-sm-2",
                                  on: {
                                    click: function($event) {
                                      return _vm.addPaymentForm("add")
                                    }
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n                                Add Payment\n                            "
                                  )
                                ]
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.canEditPayment
                            ? _c(
                                "button",
                                {
                                  staticClass: "btn status my-sm-2",
                                  on: {
                                    click: function($event) {
                                      return _vm.addPaymentForm("edit")
                                    }
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n                                Edit Payment\n                            "
                                  )
                                ]
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.canEditPayment
                            ? _c(
                                "button",
                                {
                                  staticClass:
                                    "btn status my-sm-2 approved ml-4",
                                  on: {
                                    click: function($event) {
                                      return _vm.preparePayments()
                                    }
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n                                Click here to Submit Payment(s)!\n                            "
                                  )
                                ]
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          _c(
                            "a",
                            {
                              staticClass: "text-link mt-3",
                              staticStyle: { "text-align": "right" },
                              attrs: {
                                "data-dismiss": "modal",
                                href: "javascript:"
                              }
                            },
                            [
                              _vm._v(
                                "\n                                close dialogue\n                            "
                              )
                            ]
                          )
                        ]
                      )
                    ])
                  : _vm._e()
              ]
            )
          ]
        )
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
    require("vue-hot-reload-api")      .rerender("data-v-582e561c", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-6c389568\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/AutocompleteSearch/AutocompleteSearch.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("transition", { attrs: { name: "fade" } }, [
    _c(
      "div",
      {
        staticClass: "pt-md-3 pt-2 attendance-view mb-4 z-2 position-relative",
        attrs: { id: "index" }
      },
      [
        _c("custom-header", { attrs: { title: _vm.title } }),
        _vm._v(" "),
        _c("div", { staticClass: "attendance-body" }, [
          _c("div", { staticClass: "p-5 row bg-white shadow-sm card-radius" }, [
            _c("div", { staticClass: "col px-0 px-md-3" }, [
              _c(
                "div",
                {
                  staticClass:
                    "position-relative col-md-6 col-12 float-left typeahead",
                  class: _vm.open && "typeahead__open"
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
                        attrs: { type: "text" },
                        domProps: { value: _vm.search },
                        on: {
                          blur: _vm.onBlur,
                          focus: _vm.onFocus,
                          keydown: [
                            function($event) {
                              if (
                                !$event.type.indexOf("key") &&
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
                                !$event.type.indexOf("key") &&
                                _vm._k(
                                  $event.keyCode,
                                  "enter",
                                  13,
                                  $event.key,
                                  "Enter"
                                )
                              ) {
                                return null
                              }
                              return _vm.onEnterKey($event)
                            },
                            function($event) {
                              if (
                                !$event.type.indexOf("key") &&
                                _vm._k($event.keyCode, "esc", 27, $event.key, [
                                  "Esc",
                                  "Escape"
                                ])
                              ) {
                                return null
                              }
                              return _vm.onEscape($event)
                            },
                            function($event) {
                              if (
                                !$event.type.indexOf("key") &&
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
                      _c("span", {
                        ref: "text",
                        staticClass: "typeahead__text",
                        domProps: { innerHTML: _vm._s(_vm.displayText) }
                      })
                    ]
                  ),
                  _vm._v(" "),
                  _vm.open && _vm.customers.length
                    ? _c(
                        "ul",
                        { staticClass: "typeahead__list" },
                        _vm._l(_vm.customers, function(customer, index) {
                          return _c(
                            "li",
                            { key: index, staticClass: "typeahead__item" },
                            [
                              _c("a", {
                                staticClass:
                                  "typeahead__link d-flex justify-content-between",
                                class:
                                  _vm.selectIndex === index &&
                                  "typeahead__active",
                                domProps: {
                                  innerHTML: _vm._s(
                                    _vm.getAutocomplete(customer)
                                  )
                                },
                                on: {
                                  mousedown: function($event) {
                                    $event.preventDefault()
                                    return _vm.select(customer)
                                  }
                                }
                              })
                            ]
                          )
                        }),
                        0
                      )
                    : _vm._e()
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass:
                    "col-md-6 col-12 float-left d-flex justify-content-around align-items-center"
                },
                _vm._l(_vm.searchColumns, function(ref) {
                  var title = ref.title
                  var column = ref.column
                  return _c(
                    "span",
                    { staticClass: "position-relative radio mb-0" },
                    [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.searchColumn,
                            expression: "searchColumn"
                          }
                        ],
                        attrs: { id: column, type: "radio" },
                        domProps: {
                          value: column,
                          checked: _vm._q(_vm.searchColumn, column)
                        },
                        on: {
                          change: function($event) {
                            _vm.searchColumn = column
                          }
                        }
                      }),
                      _vm._v(" "),
                      _c("label", { attrs: { for: column } }, [
                        _vm._v(_vm._s(_vm._f("capitalize")(title)))
                      ])
                    ]
                  )
                }),
                0
              )
            ])
          ])
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
    require("vue-hot-reload-api")      .rerender("data-v-6c389568", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-9213a016\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/customHeader.vue":
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
    require("vue-hot-reload-api")      .rerender("data-v-9213a016", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-aabe6cf8\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/CustomerProfile.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("transition", { attrs: { name: "fade" } }, [
    _c(
      "div",
      {
        class: _vm.full && "px-md-4 px-2",
        staticStyle: { "margin-left": "5rem", "margin-right": "5rem" }
      },
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
                              ),
                              _vm._v(" "),
                              _vm.auth("DVAAccess") ||
                              _vm.auth("ALTARAPAYAccess") ||
                              _vm.auth("FSLAccess")
                                ? _c(
                                    "span",
                                    {
                                      staticClass:
                                        "mt-0 pt-md-4 pt-sm-3 pt-0 mb-md-5 mb-sm-4 mb-4 px-3"
                                    },
                                    [
                                      _c("CustomSMSButton", {
                                        key: _vm.customer.id,
                                        attrs: { customer: _vm.customer }
                                      })
                                    ],
                                    1
                                  )
                                : _vm._e()
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
                              _c("ApprovalStatusButton", {
                                key: _vm.customer.id,
                                attrs: { size: "big", customer: _vm.customer }
                              })
                            ],
                            1
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
                              _vm.auth("DVAAccess")
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
    require("vue-hot-reload-api")      .rerender("data-v-aabe6cf8", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-49386ade\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/ApprovalStatusButton.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-49386ade\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/ApprovalStatusButton.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("74d94cf8", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-49386ade\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./ApprovalStatusButton.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-49386ade\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./ApprovalStatusButton.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-582e561c\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/views/FSL/lookup/lookup.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-582e561c\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/views/FSL/lookup/lookup.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("3925d202", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-582e561c\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./lookup.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-582e561c\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./lookup.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6c389568\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/AutocompleteSearch/AutocompleteSearch.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6c389568\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/AutocompleteSearch/AutocompleteSearch.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("3aac25dc", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6c389568\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./AutocompleteSearch.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6c389568\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./AutocompleteSearch.vue");
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

/***/ "./resources/assets/js/components/AppNavigation.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"babel-preset-env\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"babel-plugin-syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/AppNavigation.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-18fd8fee\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/AppNavigation.vue")
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
Component.options.__file = "resources/assets/js/components/AppNavigation.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-18fd8fee", Component.options)
  } else {
    hotAPI.reload("data-v-18fd8fee", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/js/components/ApprovalStatusButton.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-49386ade\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/ApprovalStatusButton.vue")
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"babel-preset-env\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"babel-plugin-syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/ApprovalStatusButton.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-49386ade\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/ApprovalStatusButton.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-49386ade"
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
Component.options.__file = "resources/assets/js/components/ApprovalStatusButton.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-49386ade", Component.options)
  } else {
    hotAPI.reload("data-v-49386ade", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/js/components/AutocompleteSearch/AutocompleteSearch.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6c389568\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/AutocompleteSearch/AutocompleteSearch.vue")
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"babel-preset-env\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"babel-plugin-syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/AutocompleteSearch/AutocompleteSearch.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-6c389568\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/AutocompleteSearch/AutocompleteSearch.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-6c389568"
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
Component.options.__file = "resources/assets/js/components/AutocompleteSearch/AutocompleteSearch.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6c389568", Component.options)
  } else {
    hotAPI.reload("data-v-6c389568", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/js/components/CustomSMSButton/CustomSMSButton.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"babel-preset-env\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"babel-plugin-syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/CustomSMSButton/CustomSMSButton.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-3c04515e\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/CustomSMSButton/CustomSMSButton.vue")
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
Component.options.__file = "resources/assets/js/components/CustomSMSButton/CustomSMSButton.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3c04515e", Component.options)
  } else {
    hotAPI.reload("data-v-3c04515e", Component.options)
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
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-aabe6cf8\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/CustomerProfile.vue")
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
Component.options.__file = "resources/assets/js/components/CustomerProfile.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-aabe6cf8", Component.options)
  } else {
    hotAPI.reload("data-v-aabe6cf8", Component.options)
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
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-9213a016\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/customHeader.vue")
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
Component.options.__file = "resources/assets/js/components/customHeader.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-9213a016", Component.options)
  } else {
    hotAPI.reload("data-v-9213a016", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/js/components/order/orderStatusCssClass.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var getOrderStatus = exports.getOrderStatus = function getOrderStatus(activeOrder) {
    return activeOrder.order.status ? activeOrder.order.status.name : 0;
};

var getOrderStatusClass = exports.getOrderStatusClass = function getOrderStatusClass(orderStatus) {
    if (!orderStatus) return;
    switch (orderStatus.toLowerCase()) {
        case 'ok':
            return 'ok';
        case 'returned':
            return 'returned';
        case 'repossessed':
            return 'repossessed';
    }
};

/***/ }),

/***/ "./resources/assets/js/utilities/Amortization.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _vue = __webpack_require__("./node_modules/vue/dist/vue.common.js");

var _vue2 = _interopRequireDefault(_vue);

var _store = __webpack_require__("./resources/assets/js/store/store.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var vue = new _vue2.default();

var Order = function () {
    function Order(order, customer) {
        _classCallCheck(this, Order);

        this._order = order;
        this._customer = customer;
        this._paymentBanks = [];
        this._paymentMethods = [];
        this._actualPayDates = [];
        this._actualAmountsPaid = [];
        this._amountsToBePaid = [];
        this._repaymentCaptions = [];
        this._paymentStatusClasses = [];
        this._repaymentLevel = 0;

        /*summary*/
        this._amountPaid = null;
        this._discountAmount = null;
        this._outstandingDebt = null;
        this._discountedTotal = null;
        this._defaultFee = null;
        this._totalPlusDefault = null;

        /*for repayments*/
        this._payments = {};

        /*init setters*/
        this.setIsOrderFormal();
        this.setIsRepaymentValid();
        this.setRepaymentData();
        this.setCountAndInterval();
        this.setCommonDetails();
        this.setDueDates();
        this.setPaymentStatusClasses();
        this.calcAndSetPaymentSummary();
        this.setBranch();
        this.setDiscount();
    }

    /*custom setters*/


    _createClass(Order, [{
        key: 'setIsRepaymentValid',
        value: function setIsRepaymentValid() {
            this._isRepaymentValid = !(!this.order['repayment_formal'] && !this.order['repayment_informal']);
        }
    }, {
        key: 'setIsOrderFormal',
        value: function setIsOrderFormal() {
            this._isOrderFormal = ['formal', 'salaried'].includes(this._customer.employment_status.toLowerCase());
            if (parseInt(this.order.payment_method_id) === 4) {
                this._isOrderFormal = true;
            }
        }
    }, {
        key: 'setRepaymentData',
        value: function setRepaymentData() {
            if (this.order['repayment_formal'] != null) this._repaymentData = this.order.repayment_formal;
            if (this.order['repayment_informal'] != null) this._repaymentData = this.order.repayment_informal;
        }
    }, {
        key: 'setCountAndInterval',
        value: function setCountAndInterval() {
            //'2019-07-07' this is the date the bank draft was implemented
            // and hence used as a factor to check for
            // if amortization should be 12 or 6
            var interval = void 0,
                count = void 0;
            if (new Date(this.order.order_date) <= new Date('2019-07-07')) {
                if (this.order['repayment_formal'] != null) {
                    interval = 28;
                    count = 6;
                }
                if (this.order['repayment_informal'] != null) {
                    interval = 14;
                    count = 12;
                }
            } else {
                if (Order.isBankDraftAvailable() && this.isOrderFormal || parseInt(this.order.payment_method_id) === 4) {
                    interval = 28;
                    count = 6;
                } else {
                    interval = 14;
                    count = 12;
                }
            }
            this._count = count;
            this._interval = interval;
        }
    }, {
        key: 'setDueDates',
        value: function setDueDates() {
            this._dueDates = Order.generateDueDates(this.order.order_date, this.interval, this.count);
        }
    }, {
        key: 'setCommonDetails',
        value: function setCommonDetails() {
            if (!this.isRepaymentValid) return;
            for (var i = 1; i < this.count + 1; i++) {
                /*for repayment captions*/
                var prefix = vue.$getColumn(i).split('');
                var appendix = [];
                for (var j = 1; j <= 2; j++) {
                    appendix.unshift(prefix.pop());
                }this._repaymentCaptions.push('<td>' + prefix.join('') + '<sup>' + appendix.join('') + '</sup></td>');

                this._actualPayDates.push(this.repaymentData[vue.$getColumn(i) + '_date']);
                this._actualAmountsPaid.push(this.repaymentData[vue.$getColumn(i) + '_pay']);
                this._paymentBanks.push(this.repaymentData[vue.$getColumn(i) + '_payment_bank']);
                this._paymentMethods.push(this.repaymentData[vue.$getColumn(i) + '_payment_method']);
                this._amountsToBePaid.push(vue.$roundDownAmt(this.order.repayment_amount));

                if (this.repaymentData[vue.$getColumn(i) + '_pay'] > 0) this._repaymentLevel++;
            }
        }
    }, {
        key: 'setBranch',
        value: function setBranch() {
            var _this = this;

            if (this.order['store_product']) {
                this._branch = _store.store.state.branches.find(function (branch) {
                    return parseInt(branch.id) === parseInt(_this.order.store_product['store_name']);
                });
            } else this._branch = null;
        }
    }, {
        key: 'setPaymentStatusClasses',
        value: function setPaymentStatusClasses() {
            if (!this.isRepaymentValid) /*this._repayment = null;*/return;
            for (var i = 1; i < this.count + 1; i++) {
                var status = { class: null, icon: null };
                var position = vue.$getColumn(i);
                var isDue = Order.isPaymentDue(this.dueDates[i - 1]);
                var amountPaid = parseInt(this.repaymentData[position + '_pay']);
                if (amountPaid) {
                    status.class = 'paid';
                    status.icon = 'fa-check';
                } else if (isDue && !amountPaid) {
                    status.class = 'missed';
                    status.icon = 'fa-times';
                } else if (!isDue) {
                    status.class = 'pending';
                    status.icon = 'fa-hourglass-start';
                }
                this._paymentStatusClasses.push(status);
            }
        }
    }, {
        key: 'calcAndSetPaymentSummary',
        value: function calcAndSetPaymentSummary() {
            /*helper function*/
            var fmt = function fmt(cur) {
                return vue.$formatCurrency(cur);
            },
                _order = this.order,
                repayment_amount = _order.repayment_amount,
                down_payment = _order.down_payment,
                product_price = _order.product_price;

            /*discount amount*/
            var mFactor = this.count === 6 ? 0.5 : 1,
                discount = this.order.discount.percentage_discount,
                repaymentAsDiscount = discount > 0 ? discount === 5 ? 1 : 2 : 0,
                discountAmount = vue.$roundDownAmt(repayment_amount * mFactor * repaymentAsDiscount);

            this._discountAmount = fmt(discountAmount);

            /*(total)amount paid = down payment + total repayments  + discount(if any)*/
            var amountPaid = 0,
                totalRepayments = 0;
            if (!!this.repaymentData) {
                for (var i = 0; i < this.count + 1; i++) {
                    var repayment = parseInt(this.actualAmountsPaid[i]);
                    totalRepayments += !!repayment ? vue.$roundDownAmt(repayment) : 0;
                }
                amountPaid = vue.$roundDownAmt(parseInt(down_payment)) + totalRepayments + discountAmount;
            }
            this._amountPaid = fmt(amountPaid);

            /*discounted total :: total amount to be paid - discount*/
            var discountedTotal = vue.$roundDownAmt(product_price - discountAmount);
            this._discountedTotal = fmt(discountedTotal);

            /*total default fee*/
            var amountPerDefault = 500;
            var datesDefaulted = [];
            var defaultFee = 0;
            if (new Date(this.order.order_date) > new Date('2019-07-07')) {
                //the order is a new record then use the default fee
                /**this is where the calculation for the default fee goes into*/
                /*this.dueDates.forEach((dueDate, index) =>
                Order.isPaymentDue(vue.$getDate(new Date(dueDate).addDays(5))) &&
                datesDefaulted.push({dueDate, actualPayDate: this.actualPayDates[index]}));*/
                defaultFee = datesDefaulted.length * amountPerDefault;
            }
            this._defaultFee = fmt(defaultFee);

            /*total plus default*/
            this._totalPlusDefault = fmt(discountedTotal + defaultFee);

            /*outstanding debt*/
            this._outstandingDebt = fmt(vue.$roundDownAmt(parseInt(product_price) - amountPaid));
        }
    }, {
        key: 'setDiscount',
        value: function setDiscount() {
            this._discount = this.order.discount.name + " " + this.order.discount.percentage_discount;
        }

        /*getters*/

    }, {
        key: 'payments',
        set: function set(payments) {
            this._payments = payments;
        },
        get: function get() {
            return this._payments;
        }
    }, {
        key: 'repaymentLevel',
        get: function get() {
            return this._repaymentLevel;
        }
    }, {
        key: 'order',
        get: function get() {
            return this._order;
        }
    }, {
        key: 'customer',
        get: function get() {
            return this._customer;
        }
    }, {
        key: 'isRepaymentValid',
        get: function get() {
            return this._isRepaymentValid;
        }
    }, {
        key: 'isOrderFormal',
        get: function get() {
            return this._isOrderFormal;
        }
    }, {
        key: 'repaymentData',
        get: function get() {
            return this._repaymentData;
        }
    }, {
        key: 'count',
        get: function get() {
            return this._count;
        }
    }, {
        key: 'interval',
        get: function get() {
            return this._interval;
        }
    }, {
        key: 'dueDates',
        get: function get() {
            return this._dueDates;
        }
    }, {
        key: 'paymentStatusClasses',
        get: function get() {
            return this._paymentStatusClasses;
        }
    }, {
        key: 'repaymentCaptions',
        get: function get() {
            return this._repaymentCaptions;
        }
    }, {
        key: 'paymentBanks',
        get: function get() {
            return this._paymentBanks;
        }
    }, {
        key: 'paymentMethods',
        get: function get() {
            return this._paymentMethods;
        }
    }, {
        key: 'actualPayDates',
        get: function get() {
            return this._actualPayDates;
        }
    }, {
        key: 'actualAmountsPaid',
        get: function get() {
            return this._actualAmountsPaid;
        }
    }, {
        key: 'amountsToBePaid',
        get: function get() {
            return this._amountsToBePaid;
        }
    }, {
        key: 'amountPaid',
        get: function get() {
            return this._amountPaid;
        }
    }, {
        key: 'discountAmount',
        get: function get() {
            return this._discountAmount;
        }
    }, {
        key: 'outstandingDebt',
        get: function get() {
            return this._outstandingDebt;
        }
    }, {
        key: 'discountedTotal',
        get: function get() {
            return this._discountedTotal;
        }
    }, {
        key: 'defaultFee',
        get: function get() {
            return this._defaultFee;
        }
    }, {
        key: 'totalPlusDefault',
        get: function get() {
            return this._totalPlusDefault;
        }
    }, {
        key: 'branch',
        get: function get() {
            return this._branch;
        }
    }, {
        key: 'discount',
        get: function get() {
            return this._discount;
        }
    }, {
        key: 'customerName',
        get: function get() {
            return this.customer.first_name + " " + this.customer.last_name;
        }
    }, {
        key: 'customerWGName',
        get: function get() {
            var _customer = this.customer,
                a = _customer.work_guarantor_first_name,
                b = _customer.work_guarantor_last_name,
                c = _customer.work_guarantor_relationship;

            return a + ' ' + b + ' - ' + c;
        }
    }, {
        key: 'customerPGName',
        get: function get() {
            var _customer2 = this.customer,
                a = _customer2.personal_guarantor_first_name,
                b = _customer2.personal_guarantor_last_name,
                c = _customer2.personal_guarantor_relationship;

            return a + ' ' + b + ' - ' + c;
        }

        /*static methods*/

    }], [{
        key: 'generateDueDates',
        value: function generateDueDates(startDate, interval, count) {
            var dates = [];
            for (var i = 0; i < count; i++) {
                var orderDate = new Date(startDate).addDays((i + 1) * interval);
                var dateString = vue.$getDate(orderDate);
                dates.push(dateString);
            }
            return dates;
        }
    }, {
        key: 'isPaymentDue',
        value: function isPaymentDue(dueDate) {
            return new Date() > new Date(dueDate);
        }
    }, {
        key: 'isBankDraftAvailable',
        value: function isBankDraftAvailable() {
            return false;
        }
    }, {
        key: 'renderMessage',
        value: function renderMessage(reminder) {
            return !!reminder['sms'] ? reminder.sms.message.replace(/%0a/g, '</br>') : reminder.feedback;
        }
    }, {
        key: 'convertToName',
        value: function convertToName(id, type) {
            return !id ? null : _store.store.state[type].find(function (obj) {
                return obj.id === id;
            }).name;
        }
    }]);

    return Order;
}();

var OrderWithPromiseCall = function (_Order) {
    _inherits(OrderWithPromiseCall, _Order);

    function OrderWithPromiseCall(order, dvaId) {
        _classCallCheck(this, OrderWithPromiseCall);

        var _this2 = _possibleConstructorReturn(this, (OrderWithPromiseCall.__proto__ || Object.getPrototypeOf(OrderWithPromiseCall)).call(this, order, order.customer));

        _this2._isReminderSent = false;
        _this2._dvaId = dvaId;
        _this2._isSelected = false;
        _this2.setReminder(null);
        _this2.setIsReminderSent();
        _this2.setFinancialStatus();
        _this2.setPromiseCall();
        _this2.generateAndSetNextSMSReminder();
        return _this2;
    }

    /*custom setters*/


    _createClass(OrderWithPromiseCall, [{
        key: 'setIsReminderSent',
        value: function setIsReminderSent() {
            var _this3 = this;

            var date = void 0;
            var today = vue.$getDate();
            if (!this.order.reminders || this.order.reminders.length < 1) return;
            this.order.reminders.forEach(function (reminder) {
                //refactor below by using regx characters to split
                var reminderDateTimeArr = reminder.date.split(' '); //(2019-03-24 02:00:00) -> ['2019-03-24','02:00:00']
                var dateArr = reminderDateTimeArr[0].split('-'); //'2019-03-24' -> ['2019','03','24']
                var timeArr = reminderDateTimeArr[1].split(':'); //'02:00:00' -> ['02','00','00']
                var arr = [].concat(_toConsumableArray(dateArr), _toConsumableArray(timeArr)) // ['2019','03','24','02','00','00']
                .map(function (item) {
                    return parseInt(item, 10);
                }); //[2019,3,24,2,0,0]
                arr[1]--; //month starts from 0 in javascript dates hence january(1) will be january(0) in javascript dates
                date = vue.$getDate(new Date(Date.UTC.apply(Date, _toConsumableArray(arr))));
                date === today && (_this3._isReminderSent = true);
            });
        }
    }, {
        key: 'setFinancialStatus',
        value: function setFinancialStatus() {
            this._financialStatus = !this.isRepaymentValid ? 'no detail!' : 'Paid: ' + this.amountPaid + ' | Debt: ' + this.outstandingDebt;
        }
    }, {
        key: 'generateAndSetNextSMSReminder',
        value: function generateAndSetNextSMSReminder() {
            var product_name = null;
            if (this.order['store_product']) product_name = this.order.store_product.product_name;
            var _order2 = this.order,
                repayment_amount = _order2.repayment_amount,
                order_date = _order2.order_date;


            var message = void 0;
            if (order_date === vue.$getDate()) {
                message = 'Hello ' + this.customerName + ', thanks for patronizing us.' + ' The following is the breakdown of the repayment plan for' + (' the purchase of ' + product_name + ':%0a');
                this.dueDates.forEach(function (date, index) {
                    return message += vue.$getColumn(index + 1) + ": " + date + " => " + vue.$formatCurrency(vue.$roundDownAmt(repayment_amount)) + "%0a";
                });
            } else {
                message = 'Hello ' + this.customerName + ', This is to remind you that your' + (' ' + vue.$getColumn(parseInt(this.repaymentLevel) + 1) + ' repayment of') + (' ' + vue.$formatCurrency(vue.$roundDownAmt(repayment_amount)) + ' for ' + product_name) + (' will be due on ' + this.dueDates[this.repaymentLevel] + '. we will be expecting you.');
            }
            this._nextSMSReminder = message + "Please remember to pay on time to avoid" + " late fees and other penalties.%0aThank you.";
        }

        //NB:: this method is called from outside of this class.
        //to use always call this method after instantiating the class.

    }, {
        key: 'setReminder',
        value: function setReminder(type) {
            var SMSId = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

            this._reminder = {
                type: type,
                'feedback': null,
                'is_visited': null,
                'dva_id': this.dvaId,
                'order_id': this.order.id.replace(/ +/g, ""),
                'customer_id': this.customer.id,
                'canBeSelected': !this.isReminderSent,
                'repayment_level': this.repaymentLevel + "/" + this.count
            };
            if (type === 'sms') this._reminder.contacts = this.customer.telephone;
            if (type === 'sms' || 'custom-sms') this._reminder.sms_id = SMSId;
        }
    }, {
        key: 'setPromiseCall',
        value: function setPromiseCall() {
            this._promiseCall = {
                order_id: this.order.id,
                user_id: this.dvaId,
                customer_id: this.customer.id,
                date: null
            };
        }

        /*setters*/

    }, {
        key: 'isSelected',
        set: function set(value) {
            this._isSelected = value;
        }

        /*getters*/
        ,
        get: function get() {
            return this._isSelected;
        }
    }, {
        key: 'isReminderSent',
        get: function get() {
            return this._isReminderSent;
        }
    }, {
        key: 'dvaId',
        get: function get() {
            return this._dvaId;
        }
    }, {
        key: 'financialStatus',
        get: function get() {
            return this._financialStatus;
        }
    }, {
        key: 'nextSMSReminder',
        get: function get() {
            return this._nextSMSReminder;
        }
    }, {
        key: 'reminder',
        get: function get() {
            return this._reminder;
        }
    }, {
        key: 'promiseCall',
        get: function get() {
            return this._promiseCall;
        }
    }]);

    return OrderWithPromiseCall;
}(Order);

module.exports = { Order: Order, OrderWithPromiseCall: OrderWithPromiseCall };

/***/ }),

/***/ "./resources/assets/js/views/FSL/lookup/lookup.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-582e561c\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/views/FSL/lookup/lookup.vue")
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"babel-preset-env\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"babel-plugin-syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/views/FSL/lookup/lookup.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-582e561c\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/views/FSL/lookup/lookup.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-582e561c"
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
Component.options.__file = "resources/assets/js/views/FSL/lookup/lookup.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-582e561c", Component.options)
  } else {
    hotAPI.reload("data-v-582e561c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});