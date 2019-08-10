<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
webpackJsonp([2],{

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"babel-preset-env\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"babel-plugin-syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/OrderItem.vue":
=======
webpackJsonp([2],{

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"babel-preset-env\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"babel-plugin-syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/AppNavigation.vue":
>>>>>>> ed6e59048439b31995f360ff7e04db059d027dbb
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
<<<<<<< HEAD

var _api = __webpack_require__("./resources/assets/js/utilities/api.js");

var _flash = __webpack_require__("./resources/assets/js/utilities/flash.js");

var _flash2 = _interopRequireDefault(_flash);

var _eventBus = __webpack_require__("./resources/assets/js/utilities/event-bus.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } } //
=======
//
//
//
//
//
//
//
//
//
//
//
//
//
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
>>>>>>> ed6e59048439b31995f360ff7e04db059d027dbb
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

<<<<<<< HEAD
exports.default = {
    props: {
        mode: null,
        index: null,
        startIndex: { default: 1 },
        dva_id: null,
        paySummary: null,
        repaymentLevel: null,
        order: { default: {} },
        isRepaymentValid: null
    },

    data: function data() {
        return {
            selected: false
        };
    },
    created: function created() {
        _eventBus.EventBus.$on('selectOrderItem', this.toggleSelect);
    },


    methods: {
        logReminder: function logReminder() {
            var _this = this;

            this.$LIPS(true);
            delete this.reminder.order;
            delete this.reminder.canBeSelected;
            (0, _api.post)('/api/reminder', { reminders: [this.reminder] }).then(function (_ref) {
                var data = _ref.data;
                return data.saved ? _this.logPromiseCall() : _this.$displayErrorMessage('Error Logging reminders!');
            });
        },
        logPromiseCall: function logPromiseCall() {
            var _this2 = this;

            var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "Reminder Logged!";

            if (this.promiseCall.date) {
                (0, _api.post)('/api/promise_call', this.promiseCall).then(function (_ref2) {
                    var data = _ref2.data;
                    return data.saved ? _this2.done(message + " Promise call added!") : _this2.$displayErrorMessage('Error Logging promise call!');
                });
            } else this.done(message);
        },
        done: function done(message) {
            this.$scrollToTop();
            _flash2.default.setSuccess(message, 5000);
            this.$emit('done');
        },
        isReminderSent: function isReminderSent() {
            var _this3 = this;

            var value = true,
                date;
            if (this.order.reminders.length > 0) {
                var today = this.$getDate();
                this.order.reminders.forEach(function (reminder) {
                    //refactor below by using regx characters to split
                    var reminderDateTimeArr = reminder.date.split(' '); //(2019-03-24 02:00:00) -> ['2019-03-24','02:00:00']
                    var dateArr = reminderDateTimeArr[0].split('-'); //'2019-03-24' -> ['2019','03','24']
                    var timeArr = reminderDateTimeArr[1].split(':'); //'02:00:00' -> ['02','00','00']
                    var arr = [].concat(_toConsumableArray(dateArr), _toConsumableArray(timeArr)) // ['2019','03','24','02','00','00']
                    .map(function (item) {
                        return parseInt(item, 10);
                    }); //[2019,3,24,2,0,0]
                    date = _this3.$getDate(new Date(Date.UTC.apply(Date, _toConsumableArray(arr))), false);
                    date === today && (value = false);
                });
            }
            return value;
        },
        toggleSelect: function toggleSelect(value) {
            if (this.reminder.canBeSelected) {
                this.selected = value;
                this.$emit('updateReminderList', this.reminder, value);
            }
        }
    },
    computed: {
        reminder: function reminder() {
            var reminder = {
                'customer_id': this.order.customer.id,
                'order_id': this.order.id,
                'repayment_level': this.repaymentLevel,
                'dva_id': this.dva_id,
                'type': this.mode,
                'canBeSelected': this.isReminderSent()
            };
            if (this.mode === 'sms') {
                reminder.contacts = this.order.customer.telephone;
                reminder.sms_id = null;
            }
            return reminder;
        },
        promiseCall: function promiseCall() {
            return {
                order_id: this.order.id,
                user_id: this.dva_id,
                customer_id: this.order.customer.id,
                date: null
            };
        },
        getFinancialStatus: function getFinancialStatus() {
            return !this.isRepaymentValid ? 'no detail!' : "Paid: " + this.paySummary.amountPaid + " | Debt: " + this.paySummary.outstandingDebt;
=======
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
>>>>>>> ed6e59048439b31995f360ff7e04db059d027dbb
        }
    }
};

/***/ }),

<<<<<<< HEAD
/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"babel-preset-env\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"babel-plugin-syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/Orders.vue":
=======
/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"babel-preset-env\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"babel-plugin-syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/customHeader.vue":
>>>>>>> ed6e59048439b31995f360ff7e04db059d027dbb
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
<<<<<<< HEAD

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
=======
>>>>>>> ed6e59048439b31995f360ff7e04db059d027dbb
//
//
//
//
//
//
//
//
//
//
//
//
<<<<<<< HEAD
=======

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

var _vue = __webpack_require__("./node_modules/vue/dist/vue.common.js");

var _vue2 = _interopRequireDefault(_vue);

var _vuex = __webpack_require__("./node_modules/vuex/dist/vuex.esm.js");

var _auth = __webpack_require__("./resources/assets/js/utilities/auth.js");

var _auth2 = _interopRequireDefault(_auth);

var _flash = __webpack_require__("./resources/assets/js/utilities/flash.js");

var _flash2 = _interopRequireDefault(_flash);

var _api = __webpack_require__("./resources/assets/js/utilities/api.js");

var _Amortization = __webpack_require__("./resources/assets/js/utilities/Amortization.js");

var _customHeader = __webpack_require__("./resources/assets/js/components/customHeader.vue");

var _customHeader2 = _interopRequireDefault(_customHeader);

var _CustomerProfile = __webpack_require__("./resources/assets/js/components/CustomerProfile.vue");

var _CustomerProfile2 = _interopRequireDefault(_CustomerProfile);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; } //
>>>>>>> ed6e59048439b31995f360ff7e04db059d027dbb
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

<<<<<<< HEAD
var _vue = __webpack_require__("./node_modules/vue/dist/vue.common.js");

var _vue2 = _interopRequireDefault(_vue);

var _flash = __webpack_require__("./resources/assets/js/utilities/flash.js");

var _flash2 = _interopRequireDefault(_flash);

var _sms = __webpack_require__("./resources/assets/js/utilities/sms.js");

var _api = __webpack_require__("./resources/assets/js/utilities/api.js");

var _OrderItem = __webpack_require__("./resources/assets/js/components/OrderItem.vue");

var _OrderItem2 = _interopRequireDefault(_OrderItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var url = function url(to) {
    return "/api/reminder/create?list=" + to.query.list;
};

exports.default = {
    components: { OrderItem: _OrderItem2.default },

    props: { list: { default: null }, mode: null, preLoadedOrder: null, startIndex: null },

    watch: {
        list: function list(_list) {
            this.fetchList(_list);
        },
        preLoadedOrder: function preLoadedOrder(data) {
            this.prepareForm(data);
        }
    },

    data: function data() {
        return {
            orders: {},
            show: false,
            banks: null,
            reminder: [],
            currentOrder: {},
            paymentSummary: null,
            payment_methods: null,
            showModalContent: false
=======
exports.default = {

    components: { CustomHeader: _customHeader2.default, CustomerProfile: _CustomerProfile2.default },

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
            paymentForm: null
>>>>>>> ed6e59048439b31995f360ff7e04db059d027dbb
        };
    },


    methods: {
<<<<<<< HEAD
        prepareForm: function prepareForm(res) {
            var _this = this;

            this.show = false;
            this.showModalContent = false;
            this.banks = res.banks;
            this.dva_id = res.dva_id;
            this.payment_methods = res.payment_methods;

            this.orders = res.orders.filter(function (order) {
                var _getCountAndRepayment = _this.getCountAndRepaymentData(order),
                    repaymentData = _getCountAndRepayment.repaymentData,
                    _amortizationPlan = _this.amortizationPlan(order),
                    count = _amortizationPlan.count,
                    interval = _amortizationPlan.interval;

                var hasMissedPayment = function hasMissedPayment() {
                    /*for the list 1 and 8 return true i.e no need for has
                    missed payment since it's obvious we are dealing with just one date
                    * 1st list is for all the customers that picked today
                    * 8th list is for all the promise calls all the promise call must be shown to */
                    if ([8, 1].includes(_this.list) || _this.mode === "normal-list") return true;

                    var payDay = void 0,

                    /*payDay holds the date
                    of the first vacant repayment*/

                    dayInterval = void 0,

                    /*dayInterval the number of days before or after a certain
                    repayment date. this varies according to collections app brief*/

                    datePool = [],

                    /*datePool hold an array of dates of length ranging from 1 to 3 in length
                    * is the current date is monday the date-pool will include dates for
                    * monday, sunday and saturday else it just hold the current date*/

                    today = new Date(),
                        isMonday = today.getDay() === 1,

                    /*isMonday how a boolean value of whether
                    the current date is monday or not*/

                    collectionsList = [9, 10, 11, 12, 13],
                        accumulatedDays = isMonday || collectionsList.includes(_this.list) ? 3 : 1;
                    /*accumulatedDays hold 1 or 3,
                    1 if the current date is not on a monday and
                    3 if the current date is on a monday*/

                    if (!!!repaymentData) return false;

                    /*step 1::
                    * the count is either 7 or 13,
                    * the loop runs for 6 or 12 times*/
                    for (var i = 1; i < count + 1; i++) {

                        /*get the resultant column 1st, 2nd, 3rd etc*/
                        var column = _this.$getColumn(i);

                        /*step 2. get the first occurrence of a vacant pay eg. 5th_pay*/
                        if (!repaymentData[column + "_pay"]) {

                            /*step 3. find the corresponding due date for the vacant pay
                            * The generateDates returns an array of the due
                            dates for the order under consideration*/
                            payDay = _this.generateDates({ startDate: order.order_date, interval: interval, count: count })[i - 1];
                            /*[i - 1] explained.
                            * eg if the i = 5,
                            * column = 5th_pay,
                            * then the 4th ( [5-1] - this is the 5th element or 4th index, array is 0 indexed)
                            * index of the resultant array is the pay day we are interested in*/
                            break;
                        }
                    }

                    /*step 4. assign the appropriate intervals
                    * NB:: This intervals where generated from the days
                    * stipulated on the collections app brief note that the case
                    * corresponds to the steps also indicated in the collections app brief*/
                    switch (_this.list) {
                        case 2:
                            dayInterval = 7;
                            break;
                        case 3:
                            dayInterval = 3;
                            break;
                        case 4:
                            dayInterval = 0;
                            break;
                        case 5:
                            dayInterval = 1;
                            break;
                        case 6:
                            dayInterval = 5;
                            break;
                        case 7:
                            dayInterval = 31;
                            break;

                        case 9:
                            //collections visit: 1
                            dayInterval = 38;
                            break;
                        case 10:
                            //collections visit: 2
                            dayInterval = 45;
                            break;

                        case 11:
                            //recovery visit: 1
                            dayInterval = 61;
                            break;
                        case 12:
                            //recovery visit: 2
                            dayInterval = 75;
                            break;
                        case 13:
                            //recovery visit: 2
                            dayInterval = 90;
                            break;

                        case 14:
                            //external recovery - lawyer visit: 2
                            dayInterval = 121;
                            break;
                    }

                    //if (this.mode === "collection" || this.mode === "recovery" || this.mode === "call"){
                    if (["collection", "recovery", "call"].includes(_this.mode)) {
                        for (var p = 0; p < accumulatedDays; p++) {
                            datePool.push(_this.$getDate(today.addDays(-(p + dayInterval))));
                        }
                    }

                    if (_this.mode === 'sms') {
                        for (var _p = 0; _p < accumulatedDays; _p++) {
                            datePool.push(_this.$getDate(today.addDays(_p + dayInterval)));
                        }
                    }

                    return datePool.includes(payDay);
                };

                var isMyBranch = function isMyBranch() {
                    if (_this.$store.getters.auth('DVALead') || _this.$store.getters.auth('FSLLead')) return true;
                    //the branch to be used for this filter should be the branch of the
                    // product being bought not the branch of the customer
                    return parseInt(order.store_product.store_name) === res.branch;
                    //return order.customer.branch.id === res.branch;
                };

                /*console.log('store name: ' + parseInt(order.store_product.store_name) + ' | ' + order.store_product.store_name,
                    '--------- res branch: ' + res.branch,
                    '--------- isMyBranch: ' + isMyBranch(),
                    '--------- hasMissedPayment: ' + hasMissedPayment(),
                    '--------- final: ' + (isMyBranch() && hasMissedPayment()));*/

                return isMyBranch() && hasMissedPayment();
            });

            !!this.orders.length && (this.show = true);
            this.$LIPS(false);
        },


        isOrderFormal: function isOrderFormal(order) {
            return ['formal', 'salaried'].includes(order.customer.employment_status.toLowerCase());
        },

        generateDates: function generateDates(_ref) {
            var startDate = _ref.startDate,
                interval = _ref.interval,
                count = _ref.count;

            var dates = [];
            for (var i = 0; i < count; i++) {
                var orderDate = new Date(startDate).addDays((i + 1) * interval);
                var dateString = this.$getDate(orderDate);
                dates.push(dateString);
            }
            return dates;
        },


        renderMessage: function renderMessage(reminder) {
            return !!reminder['sms'] ? reminder.sms.message.replace(/%0a/g, '</br>') : reminder.feedback;
        },

        fetchList: function fetchList(list) {
            var _this2 = this;

            this.$LIPS(true);
            (0, _api.get)(url({ query: { list: list } })).then(function (_ref2) {
                var data = _ref2.data;

                if (list === 8) {
                    var orders = [];
                    data.orders.forEach(function (promiseCall) {
                        return orders.push(promiseCall.order);
                    });
                    data.orders = orders;
                }
                _this2.prepareForm(data);
            });
        },


        isPaymentDue: function isPaymentDue(dueDate) {
            return new Date() > new Date(dueDate);
        },

        getDiscount: function getDiscount(_ref3) {
            var discount = _ref3.discount;
            return discount.name + " (" + discount.percentage_discount + ")";
        },

        isRepaymentValid: function isRepaymentValid(order) {
            return !( /*!order['repayment'] && */!order['repayment_formal'] && !order['repayment_informal']);
        },

        displayDetails: function displayDetails(order, modal) {
            this.paymentSummary = this.calcPaymentSummary(order);
            _vue2.default.set(this.$data, 'currentOrder', order);
            this.showModalContent = true;
            return $("#" + modal).modal('toggle');
        },
        getCountAndRepaymentData: function getCountAndRepaymentData(order) {
            var data = { count: this.amortizationPlan(order).count };
            if (order['repayment_formal'] != null) data.repaymentData = order.repayment_formal;
            if (order['repayment_informal'] != null) data.repaymentData = order.repayment_informal;
            return data;
        },
        calcPaymentSummary: function calcPaymentSummary(order) {
            var _this3 = this;

            var datesDefaulted = [];
            var amountPerDefault = 500;
            var fmt = function fmt(cur) {
                return _this3.$formatCurrency(cur);
            };
            var amountPaid = this.$roundDownAmt(parseInt(order.down_payment));

            var _amortizationPlan2 = this.amortizationPlan(order),
                count = _amortizationPlan2.count,
                interval = _amortizationPlan2.interval;

            var _getCountAndRepayment2 = this.getCountAndRepaymentData(order),
                repaymentData = _getCountAndRepayment2.repaymentData;

            var dueDates = this.generateDates({ startDate: order.order_date, interval: interval, count: count });
            dueDates.forEach(function (dueDate, index) {
                return _this3.isPaymentDue(_this3.$getDate(new Date(dueDate).addDays(5))) && datesDefaulted.push({ dueDate: dueDate, actualPayDate: repaymentData[_this3.$getColumn(index) + "_date"] });
            });
            if (!!repaymentData) {
                for (var i = 1; i < count + 1; i++) {
                    amountPaid += this.$roundDownAmt(repaymentData[this.$getColumn(i) + '_pay']);
                }
            } else amountPaid = 0;
            var discount = order.discount.percentage_discount;

            var multiplicationFactor = count === 6 ? 0.5 : 1;
            var repaymentCoveredAsDiscount = function repaymentCoveredAsDiscount() {
                return discount > 0 ? discount === 5 ? 1 : 2 : 0;
            };
            var discountAmount = order.repayment_amount * multiplicationFactor * repaymentCoveredAsDiscount();
            discountAmount = this.$roundDownAmt(discountAmount);

            var defaultFee = datesDefaulted.length * amountPerDefault;
            var discountedTotal = this.$roundDownAmt(order["product_price"] - discountAmount);

            return {
                amountPaid: fmt(amountPaid),
                discountAmount: fmt(this.$roundDownAmt(discountAmount)),
                outstandingDebt: fmt(this.$roundDownAmt(parseInt(order["product_price"]) - amountPaid)),
                discountedTotal: fmt(discountedTotal),
                defaultFee: fmt(defaultFee),
                totalPlusDefault: fmt(discountedTotal + defaultFee)
            };
        },
        getRepayment: function getRepayment(order) {
            var clause = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

            if (!this.isRepaymentValid(order)) return null;
            var data = [],
                _getCountAndRepayment3 = this.getCountAndRepaymentData(order),
                repaymentData = _getCountAndRepayment3.repaymentData;
            var _amortizationPlan3 = this.amortizationPlan(order),
                interval = _amortizationPlan3.interval,
                count = _amortizationPlan3.count;

            if (clause === null) return this.generateDates({ startDate: order.order_date, interval: interval, count: count });
            if (clause === 'repayments') return new Array(count).fill(this.$roundDownAmt(order.repayment_amount), 0, count);
            for (var i = 1; i < count + 1; i++) {
                data.push(repaymentData[this.$getColumn(i) + clause]);
            }return data;
        },
        getPaymentStatusClasses: function getPaymentStatusClasses(order) {
            if (!this.isRepaymentValid(order)) return null;
            var data = [],
                _getCountAndRepayment4 = this.getCountAndRepaymentData(order),
                repaymentData = _getCountAndRepayment4.repaymentData,
                _amortizationPlan4 = this.amortizationPlan(order),
                count = _amortizationPlan4.count,
                dueDates = this.getRepayment(order);

            for (var i = 1; i < count + 1; i++) {
                var status = { class: null, icon: null };
                var position = this.$getColumn(i);
                var isDue = this.isPaymentDue(dueDates[i - 1]);
                var amountPaid = parseInt(repaymentData[position + '_pay']);
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
                data.push(status);
            }
            return data;
        },
        getRepaymentLevel: function getRepaymentLevel(order) {
            if (!this.isRepaymentValid(order)) return 0;
            var level = 0,
                _amortizationPlan5 = this.amortizationPlan(order),
                count = _amortizationPlan5.count,
                _getCountAndRepayment5 = this.getCountAndRepaymentData(order),
                repaymentData = _getCountAndRepayment5.repaymentData;

            for (var i = 1; i < count + 1; i++) {
                if (repaymentData[this.$getColumn(i) + '_pay'] > 0) level++;
            }return level + "/" + count;
        },
        convertPaymentMethodOrBankToName: function convertPaymentMethodOrBankToName(id, type) {
            return !id ? null : this.$data[type].find(function (obj) {
                return obj.id === id;
            }).name;
        },
        updateReminder: function updateReminder(reminder, selected) {
            if (!selected) {
                var index = void 0;
                this.reminder.forEach(function (obj, i) {
                    return obj.order_id === reminder.order_id && (index = i);
                });
                this.reminder.splice(index, 1);
            } else this.reminder.push(reminder);
        },
        processSelected: function processSelected() {
            var _this4 = this;

            if (!this.reminder.length) {
                this.$displayErrorMessage('please select at least one!');
                return;
            }
            this.$LIPS(true);
            var smsContactList = this.reminder.map(function (obj) {
                var newObject = JSON.parse(JSON.stringify(obj));
                newObject.order = _this4.orders.find(function (_ref4) {
                    var id = _ref4.id;
                    return id === obj.order_id;
                });
                newObject.message = _this4.generateCustomMessage(newObject.order);
                return newObject;
            });
            this.sendSMSReminders(smsContactList);
        },
        sendSMSReminders: function sendSMSReminders(smsContactList) {
            var _this5 = this;

            var messages = [];
            smsContactList.forEach(function (value, index) {
                var sms = new _sms.Message(value.message, value.contacts, false, value.dva_id);
                sms.send(function (r) {
                    if (r.status === 200) {
                        delete sms.logToDB;
                        messages.push(sms);
                    }
                    if (index + 1 === smsContactList.length) _this5.logSentMessages(messages, smsContactList);
                });
            });
        },
        logSentMessages: function logSentMessages(messages, smsContactList) {
            var _this6 = this;

            if (!!messages) {
                (0, _api.post)('/api/message', { messages: messages, bulk: true }).then(function (_ref5) {
                    var data = _ref5.data;
                    var sentAndLogged = data.sentAndLogged,
                        ids = data.ids;

                    if (sentAndLogged) _this6.logSentReminders(smsContactList, ids);else _this6.$displayErrorMessage('Error Logging sent sms details!');
                });
            } else this.$displayErrorMessage('Error sending messages!');
        },
        logSentReminders: function logSentReminders(selectedList, ids) {
            var _this7 = this;

            ids.reverse();
            var newList = JSON.parse(JSON.stringify(selectedList));
            newList.forEach(function (value, index) {
                value.sms_id = ids[index];
                delete value.message;
                delete value.order;
                delete value.contacts;
                delete value.canBeSelected;
            });
            if (ids.length > 0) {
                (0, _api.post)('/api/reminder', { reminders: newList }).then(function (_ref6) {
                    var data = _ref6.data;

                    if (data.saved) {
                        _flash2.default.setSuccess('Reminders have been sent successfully!', 50000);
                        _this7.fetchList(_this7.list);
                    } else _this7.$displayErrorMessage('Error sending reminders!');
                    _this7.$scrollToTop();
                });
            } else this.$displayErrorMessage('Error logging sent messages!');
        },
        generateCustomMessage: function generateCustomMessage(order) {
            var _this8 = this;

            var customer = order.customer,
                store_product = order.store_product,
                order_date = order.order_date,
                repayment_amount = order.repayment_amount;
            var product_name = store_product.product_name,
                first_name = customer.first_name,
                last_name = customer.last_name;
            var message = void 0,
                genDateArgs = _extends({ startDate: order_date }, this.amortizationPlan(order));
            var dates = this.generateDates(genDateArgs);
            var repaymentLevel = this.getRepaymentLevel(order).split("/")[0];
            if (this.list === 1) {
                message = "Hello " + first_name + " " + last_name + ", thanks for patronizing us." + " The following is the breakdown of the repayment plan for" + (" the purchase of " + product_name + ":%0a");
                if (dates.length > 0) dates.forEach(function (date, index) {
                    return message += _this8.$getColumn(index + 1) + ": " + date + " => " + _this8.$formatCurrency(_this8.$roundDownAmt(repayment_amount)) + "%0a";
                });
            } else {
                message = "Hello " + first_name + " " + last_name + ", This is to remind you that your" + (" " + this.$getColumn(parseInt(repaymentLevel) + 1) + " repayment of " + this.$formatCurrency(this.$roundDownAmt(repayment_amount)) + " for " + product_name) + (" will be due on " + dates[repaymentLevel] + ". we will be expecting you.");
            }
            return message + "Please remember to pay on time to avoid late fees and other penalties.%0aThank you.";
        },
        amortizationPlan: function amortizationPlan() {
            var order = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.currentOrder;

            //'2019-07-07' this is the date the bank draft was implemented
            // and hence used as a factor to check for
            // if amortization should be 12 or 6
            var interval = void 0,
                count = void 0;
            if (new Date(order.order_date) <= new Date('2019-07-07')) {
                if (order['repayment_formal'] != null) {
                    interval = 28;
                    count = 6;
                }
                if (order['repayment_informal'] != null) {
                    interval = 14;
                    count = 12;
                }
            } else {
                if (this.isBankDraftAvailable(order) && this.isOrderFormal(order)) {
                    interval = 28;
                    count = 6;
                } else {
                    interval = 14;
                    count = 12;
                }
            }
            return { interval: interval, count: count };
        },
        isBankDraftAvailable: function isBankDraftAvailable() {
            //this is where the code for checking for bank draft will go
            return false;
        },
        repaymentCaption: function repaymentCaption(order) {
            var _amortizationPlan6 = this.amortizationPlan(order),
                count = _amortizationPlan6.count,
                data = [];

            for (var i = 1; i <= count; i++) {
                var prefix = this.$getColumn(i).split('');
                var appendix = [];
                for (var j = 1; j <= 2; j++) {
                    appendix.unshift(prefix.pop());
                }data.push("<td>" + prefix.join('') + "<sup>" + appendix.join('') + "</sup></td>");
            }
            return data;
        }
    },

    mounted: function mounted() {
        var _this9 = this;

        this.mode != 'normal-list' ? this.fetchList(this.list) : this.prepareForm(this.preLoadedOrder);
        $(document).on("hidden.bs.modal", '.modal', function () {
            _this9.currentOrder = null;
            _this9.showModalContent = false;
        });
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

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"babel-preset-env\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"babel-plugin-syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/views/DVA/order/orderList.vue":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _api = __webpack_require__("./resources/assets/js/utilities/api.js");

var _flash = __webpack_require__("./resources/assets/js/utilities/flash.js");

var _flash2 = _interopRequireDefault(_flash);

var _Orders = __webpack_require__("./resources/assets/js/components/Orders.vue");

var _Orders2 = _interopRequireDefault(_Orders);

var _customHeader = __webpack_require__("./resources/assets/js/components/customHeader.vue");

var _customHeader2 = _interopRequireDefault(_customHeader);

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

exports.default = {

    components: { CustomHeader: _customHeader2.default, Order: _Orders2.default },

    data: function data() {
        return {
            branch_id: '',
            page_size: 10,
            date_from: null,
            date_to: null,
            page: 1,
            filters: [{ name: 'branch', model: 'branch_id' }, { name: 'date from', model: 'date_from' }, { name: 'date to', model: 'date_to' }],
            orders: null,
            response: {},
            show: false,
            headings: ['Order Number', 'Order Summary', 'Customer Info Summary', 'Repayment Summary', 'Reminder History']
        };
    },


    methods: {
        fetchData: function fetchData() {
            var _this = this;

            this.$scrollToTop();
            this.$LIPS(true);
            var _$data = this.$data,
                page = _$data.page,
                page_size = _$data.page_size,
                date_from = _$data.date_from,
                date_to = _$data.date_to,
                branch_id = _$data.branch_id;

            (0, _api.get)("/api/reminder/create" + ("" + (!!page ? "?page=" + page : '')) + ("" + (!!date_to ? "&date_to=" + date_to : '')) + ("" + (!!page_size ? "&page_size=" + page_size : '')) + ("" + (!!branch_id ? "&branch_id=" + branch_id : '')) + ("" + (!!date_from ? "&date_from=" + date_from : ''))).then(function (_ref) {
                var data = _ref.data;
                return _this.prepareForm(data);
            }).catch(function () {
                return _flash2.default.setError('Error Preparing form');
            });
        },
        next: function next() {
            var firstPage = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

            if (this.orders.next_page_url) {
                this.page = firstPage ? firstPage : this.page + 1;
                this.fetchData();
            }
        },
        prev: function prev() {
            var lastPage = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

            if (this.orders.prev_page_url) {
                this.page = lastPage ? lastPage : this.page + 1;
                this.fetchData();
            }
        },
        prepareForm: function prepareForm(data) {
            this.show = false;
            this.orders = null;
            this.response = {};
            this.orders = data.orders;
            var orders = data.orders.data,
                payment_methods = data.payment_methods,
                banks = data.banks,
                dva_id = data.dva_id,
                branch = data.branch;

            this.response = { payment_methods: payment_methods, banks: banks, dva_id: dva_id, branch: branch, orders: orders };
            this.$scrollToTop();
            this.$LIPS(false);
            this.show = true;
        }
    },
    created: function created() {
        this.$prepareBranches();
        this.fetchData();
    }
};

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-57fa0ac8\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/Orders.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.table-separator[data-v-57fa0ac8] {\n    border-top: 2px solid #dee1e4;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-02013d35\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/customHeader.vue":
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
    require("vue-hot-reload-api")      .rerender("data-v-02013d35", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-5522319a\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/OrderItem.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "mb-3 row attendance-item" }, [
    _c(
      "div",
      {
        staticClass: "col-12 col-xs-2 col-md col-lg d-flex align-items-center",
        staticStyle: { "max-width": "120px" }
      },
      [
        _vm.mode === "normal-list"
          ? _c("span")
          : _vm.reminder.canBeSelected &&
            ["collection", "recovery", "call"].includes(_vm.mode)
            ? _c(
                "span",
                {
                  staticClass: "user mx-auto waiting-reminder",
                  on: { click: _vm.logReminder }
                },
                [_c("i", { staticClass: "fas fa-hourglass-start" })]
              )
            : _vm.reminder.canBeSelected && _vm.mode === "sms"
              ? _c("div", { staticClass: "d-flex align-items-center" }, [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.selected,
                        expression: "selected"
                      }
                    ],
                    staticClass:
                      "form-check-input my-0 mx-4 float-left position-relative ",
                    attrs: { type: "checkbox" },
                    domProps: {
                      checked: Array.isArray(_vm.selected)
                        ? _vm._i(_vm.selected, null) > -1
                        : _vm.selected
                    },
                    on: {
                      click: function($event) {
                        _vm.toggleSelect(!_vm.selected)
                      },
                      change: function($event) {
                        var $$a = _vm.selected,
                          $$el = $event.target,
                          $$c = $$el.checked ? true : false
                        if (Array.isArray($$a)) {
                          var $$v = null,
                            $$i = _vm._i($$a, $$v)
                          if ($$el.checked) {
                            $$i < 0 && (_vm.selected = $$a.concat([$$v]))
                          } else {
                            $$i > -1 &&
                              (_vm.selected = $$a
                                .slice(0, $$i)
                                .concat($$a.slice($$i + 1)))
                          }
                        } else {
                          _vm.selected = $$c
                        }
                      }
                    }
                  })
                ])
              : _c("span", { staticClass: "user mx-auto sent-reminder" }, [
                  _c("i", { staticClass: "fas fa-check" })
                ]),
        _vm._v(" "),
        _c("span", { staticClass: "user mx-auto" }, [
          _vm._v(_vm._s(_vm.startIndex + _vm.index))
        ])
      ]
    ),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass:
          "col-12 col-xs-2 col-md col-lg user-name d-flex align-items-center justify-content-center"
      },
      [_vm._v("\n        " + _vm._s(_vm.$vnode.key) + "\n    ")]
    ),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass:
          "col-12 col-xs-2 col-md col-lg d-flex align-items-center justify-content-center",
        attrs: { "data-hoverable": "true" },
        on: {
          click: function($event) {
            _vm.$emit("display", _vm.order, "purchase_order")
          }
        }
      },
      [_vm._v("\n        " + _vm._s(_vm.order.order_date) + "\n    ")]
    ),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass:
          "col-12 col-xs-3 col-md col-lg d-flex align-items-center justify-content-center",
        attrs: { "data-hoverable": "true" },
        on: {
          click: function($event) {
            _vm.$emit("display", _vm.order, "customer_info")
          }
        }
      },
      [
        _vm._v(
          "\n        ID: " +
            _vm._s(_vm.order.customer.id) +
            " - " +
            _vm._s(_vm._f("capitalize")(_vm.order.customer.employment_status)) +
            "\n    "
        )
      ]
    ),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass:
          "col-12 col-xs-2 col-md col-lg d-flex align-items-center justify-content-center",
        attrs: { "data-hoverable": "true" },
        on: {
          click: function($event) {
            _vm.$emit("display", _vm.order, "repayment")
          }
        }
      },
      [_vm._v("\n        " + _vm._s(_vm.getFinancialStatus) + "\n    ")]
    ),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass:
          "col-12 col-xs-2 col-md col-lg d-flex align-items-center justify-content-center",
        attrs: { "data-hoverable": "true" },
        on: {
          click: function($event) {
            _vm.$emit("display", _vm.order, "reminder_history")
          }
        }
      },
      [
        _vm._v(
          "\n        " +
            _vm._s(_vm.order.reminders.length) +
            " reminder(s) sent\n    "
        )
      ]
    ),
    _vm._v(" "),
    ["collection", "recovery"].includes(_vm.mode)
      ? _c(
          "div",
          {
            staticClass:
              "col-12 col-xs-2 col-md col-lg d-flex align-items-center attendance-create"
          },
          [
            _c("span", { staticClass: "present" }, [
              _c("span", { staticClass: "radio w-50 pr-3 mb-0 float-left" }, [
                _c("input", {
                  attrs: {
                    type: "radio",
                    value: "yes",
                    id: "present" + _vm.index,
                    name: "isPresent" + _vm.index
                  }
                }),
                _vm._v(" "),
                _c("label", { attrs: { for: "present" + _vm.index } }, [
                  _vm._v("yes")
                ])
              ]),
              _vm._v(" "),
              _c("span", { staticClass: "radio w-50 pl-3 mb-0 float-left" }, [
                _c("input", {
                  attrs: {
                    type: "radio",
                    value: "no",
                    id: "absent" + _vm.index,
                    name: "isPresent" + _vm.index
                  }
                }),
                _vm._v(" "),
                _c("label", { attrs: { for: "absent" + _vm.index } }, [
                  _vm._v("no")
                ])
              ])
            ])
          ]
        )
      : _vm._e(),
    _vm._v(" "),
    ["collection", "recovery", "call"].includes(_vm.mode)
      ? _c(
          "div",
          {
            staticClass:
              "col-12 col-xs-2 col-md col-lg d-flex align-items-center"
          },
          [
            _c("textarea", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.reminder.feedback,
                  expression: "reminder.feedback"
                }
              ],
              staticClass: "form-control",
              attrs: { rows: "1", disabled: !_vm.reminder.canBeSelected },
              domProps: { value: _vm.reminder.feedback },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.reminder, "feedback", $event.target.value)
                }
              }
            })
          ]
        )
      : _vm._e(),
    _vm._v(" "),
    _vm.mode === "call"
      ? _c(
          "div",
          {
            staticClass:
              "col-12 col-xs-2 col-md col-lg d-flex align-items-center"
          },
          [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.promiseCall.date,
                  expression: "promiseCall.date"
                }
              ],
              staticClass: "form-control",
              attrs: { type: "date", disabled: !_vm.reminder.canBeSelected },
              domProps: { value: _vm.promiseCall.date },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.promiseCall, "date", $event.target.value)
                }
              }
            })
          ]
        )
      : _vm._e()
=======
        updateView: function updateView(data) {
            var customer = data.customer;

            if (!!customer.length) {
                customer = customer[0];
                if (!!!customer.document['id']) customer.document = { id_card_url: "", passport_url: "" };
                _vue2.default.set(this.$data, 'customer', customer);
                this.show = true;
            } else _flash2.default.setError("Customer not found.", 5000);
            this.$LIPS(false);
        },
        processForm: function processForm() {
            var _this = this;

            this.show = false;
            this.$LIPS(true);
            (0, _api.get)('/api/customer/lookup/' + this.customer_id).then(function (res) {
                return _this.updateView(res.data);
            }).catch(function () {
                _this.$LIPS(false);
                _flash2.default.setError('Error Fetching customer detail');
            });
        },
        displayAmortization: function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee(index) {
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return _vue2.default.set(this.$data, 'activeOrder', new _Amortization.Order(this.customer.orders[index], this.customer));

                            case 2:
                                this.paymentForm = { payments: [] };
                                this.showModalContent = true;
                                return _context.abrupt('return', $('#amortization').modal('toggle'));

                            case 5:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function displayAmortization(_x) {
                return _ref.apply(this, arguments);
            }

            return displayAmortization;
        }(),
        addPaymentForm: function addPaymentForm() {
            var level = this.activeOrder.repaymentLevel;
            var nextRepayment = parseInt(level + this.paymentForm.payments.length + 1);

            if (level === this.activeOrder._count) return;
            if (nextRepayment > this.activeOrder._count) return;

            this.paymentForm.payments.push({
                _pay: this.activeOrder.amountsToBePaid[0],
                _date: this.$getDate(),
                _payment_method: '',
                _payment_bank: '',
                _col: '',
                column: ''
            });

            this.reNumber();
        },
        deletePayment: function deletePayment(index) {
            this.paymentForm.payments.splice(index, 1);
            this.reNumber();
        },
        reNumber: function reNumber() {
            var _this2 = this;

            this.paymentForm.payments.forEach(function (payment, index) {
                /*this line below mean if the repayment level is 3 i.e the customer has made 3 repayment
                * u want to display on the ui "4th repayment"
                * so repaymentLevel(3) + index(0 - length of the added payments) + 1*/
                var next = _this2.activeOrder.repaymentLevel + index + 1;
                _this2.paymentForm.payments[index]._col = next;
                _this2.paymentForm.payments[index].column = _this2.$getColumn(next) + " Repayment";
            });
        },
        preparePayments: function preparePayments() {
            var _this3 = this;

            var payments = {};
            this.paymentForm.payments.forEach(function (payment) {
                var obj = {},
                    col = _this3.$getColumn(payment._col);
                obj[col + '_pay'] = payment._pay;
                obj[col + '_date'] = payment._date;
                obj[col + '_payment_bank'] = payment._payment_bank;
                obj[col + '_payment_method'] = payment._payment_method;
                payments = _extends({}, payments, obj);
            });
            this.activeOrder.payments = payments;
            !$.isEmptyObject(payments) ? this.savePayments() : _flash2.default.setError("You have not added any payment.");
        },
        savePayments: function savePayments() {
            var _this4 = this;

            this.$LIPS(true);
            var type = void 0,
                data = void 0,
                order = void 0;
            if (this.activeOrder.count === 6) type = 'formal';
            if (this.activeOrder.count === 12) type = 'informal';
            data = { payments: this.activeOrder.payments, repayment_id: this.activeOrder.order.id, type: type };

            (0, _api.post)('/api/repayment', data).then(function (res) {
                if (res.data.saved) {
                    order = _this4.customer.orders.find(function (order) {
                        return order.id === data.repayment_id;
                    });
                    order['repayment_' + type] = res.data.amortization;
                    _this4.activeOrder = new _Amortization.Order(order, _this4.customer);
                    _this4.paymentForm = { payments: [] };
                    _this4.$LIPS(false);
                }
            }).catch(function () {
                return _flash2.default.setError('Error adding payment! Please try again later.');
            });
        }
    },

    computed: _extends({}, (0, _vuex.mapGetters)(['getBanks', 'getPaymentMethods']), {
        check: function check() {
            return !(!this.$isProcessing && !!this.customer_id);
        }
    }),

    created: function created() {
        this.$prepareBanks();
        this.$prepareBranches();
        this.$preparePaymentMethods();
    }
};

/***/ }),

/***/ "./node_modules/babel-runtime/regenerator/index.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./node_modules/regenerator-runtime/runtime-module.js");


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-569152fc\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/views/FSL/lookup/lookup.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.attendance-item[data-v-569152fc] {\n    cursor: auto;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


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

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-02013d35\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/customHeader.vue":
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
>>>>>>> ed6e59048439b31995f360ff7e04db059d027dbb
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
<<<<<<< HEAD
    require("vue-hot-reload-api")      .rerender("data-v-5522319a", module.exports)
=======
    require("vue-hot-reload-api")      .rerender("data-v-02013d35", module.exports)
>>>>>>> ed6e59048439b31995f360ff7e04db059d027dbb
  }
}

/***/ }),

<<<<<<< HEAD
/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-57fa0ac8\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/Orders.vue":
=======
/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-2f542aae\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/AppNavigation.vue":
>>>>>>> ed6e59048439b31995f360ff7e04db059d027dbb
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
<<<<<<< HEAD
  return _c("div", [
    _vm.show
      ? _c("div", { staticClass: "tab-content mt-1 attendance-body" }, [
          _c(
            "div",
            {
              staticClass: "tab-pane active text-center",
              attrs: { id: "reminder-panel", role: "tabpanel" }
            },
            _vm._l(_vm.orders, function(order, index) {
              return _c("order-item", {
                key: order.id,
                attrs: {
                  index: index,
                  "start-index": _vm.startIndex,
                  order: order,
                  dva_id: _vm.dva_id,
                  "is-repayment-valid": _vm.isRepaymentValid(order),
                  "pay-summary": _vm.calcPaymentSummary(order),
                  "repayment-level": _vm.getRepaymentLevel(order),
                  mode: _vm.mode
                },
                on: {
                  done: function($event) {
                    _vm.fetchList(_vm.list)
                  },
                  updateReminderList: _vm.updateReminder,
                  display: _vm.displayDetails
                }
              })
            })
          ),
          _vm._v(" "),
          _vm.mode != "normal-list"
            ? _c("div", { staticClass: "w-100 my-5 mx-0 hr" })
            : _vm._e()
        ])
      : _c("div", { staticClass: "tab-content mt-1 attendance-body" }, [
          _vm._m(0)
        ]),
    _vm._v(" "),
    _vm.show && _vm.mode === "sms"
      ? _c("div", { staticClass: "mt-1 attendance-body" }, [
          _c("div", { staticClass: "mb-5 px-0 row align-items-center" }, [
            _c(
              "div",
              { staticClass: "clearfix d-flex justify-content-end w-100" },
              [
                _c(
                  "button",
                  {
                    staticClass: "btn bg-default",
                    attrs: { disabled: _vm.$isProcessing },
                    on: { click: _vm.processSelected }
                  },
                  [
                    _vm._v("\n                    Send Reminder(s) "),
                    _c("i", { staticClass: "far fa-paper-plane ml-1" })
                  ]
                )
              ]
            )
          ])
        ])
      : _vm._e(),
    _vm._v(" "),
    _c("div", { staticClass: "modal fade", attrs: { id: "purchase_order" } }, [
      _c("div", { staticClass: "modal-dialog", attrs: { role: "document" } }, [
        _c("div", { staticClass: "modal-content" }, [
          _vm._m(1),
          _vm._v(" "),
          _vm.showModalContent
            ? _c("div", { staticClass: "modal-body" }, [
                _c("div", { staticClass: "table-responsive" }, [
                  _c(
                    "table",
                    { staticClass: "table table-bordered table-striped" },
                    [
                      _c("tbody", [
                        _c("tr", [
                          _c("th", [_vm._v("Order ID")]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(_vm.currentOrder.id))])
                        ]),
                        _vm._v(" "),
                        _c("tr", [
                          _c("th", [_vm._v("Order date")]),
                          _vm._v(" "),
                          _c("td", [
                            _vm._v(_vm._s(_vm.currentOrder.order_date))
                          ])
                        ]),
                        _vm._v(" "),
                        _c("tr", [
                          _c("th", [_vm._v("Product")]),
                          _vm._v(" "),
                          _c("td", [
                            _vm._v(
                              _vm._s(
                                _vm.currentOrder.store_product.product_name
                              )
                            )
                          ])
                        ]),
                        _vm._v(" "),
                        _c("tr", [
                          _c("th", [_vm._v("Repayment")]),
                          _vm._v(" "),
                          _c("td", [
                            _vm._v(
                              _vm._s(
                                _vm.$formatCurrency(
                                  _vm.currentOrder.repayment_amount
                                )
                              )
                            )
                          ])
                        ]),
                        _vm._v(" "),
                        _c("tr", [
                          _c("th", [_vm._v("Down Payment")]),
                          _vm._v(" "),
                          _c("td", [
                            _vm._v(
                              _vm._s(
                                _vm.$formatCurrency(
                                  _vm.currentOrder.down_payment
                                )
                              )
                            )
                          ])
                        ]),
                        _vm._v(" "),
                        _c("tr", [
                          _c("th", [_vm._v("Discount (%)")]),
                          _vm._v(" "),
                          _c("td", [
                            _vm._v(
                              _vm._s(
                                _vm._f("capitalize")(
                                  _vm.getDiscount(_vm.currentOrder)
                                )
                              )
                            )
                          ])
                        ]),
                        _vm._v(" "),
                        _c("tr", [
                          _c("th", [_vm._v("Sale Type")]),
                          _vm._v(" "),
                          _c("td", [
                            _vm._v(
                              _vm._s(
                                _vm._f("capitalize")(
                                  _vm.currentOrder.sales_type.name
                                )
                              )
                            )
                          ])
                        ]),
                        _vm._v(" "),
                        _c("tr", [
                          _c("th", [_vm._v("Total amount to Pay")]),
                          _vm._v(" "),
                          _c("td", [
                            _vm._v(
                              _vm._s(
                                _vm.$formatCurrency(
                                  _vm.currentOrder.product_price
                                )
                              )
                            )
                          ])
                        ]),
                        _vm._v(" "),
                        _c("tr", [
                          _c("th", [_vm._v("Processed by")]),
                          _vm._v(" "),
                          _c("td", [
                            _vm._v(
                              _vm._s(
                                _vm.currentOrder["floor_agent"]
                                  ? _vm.currentOrder.floor_agent.full_name
                                  : null
                              )
                            )
                          ])
                        ])
                      ])
                    ]
                  )
                ])
              ])
            : _vm._e(),
          _vm._v(" "),
          _vm._m(2)
        ])
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "modal fade", attrs: { id: "customer_info" } }, [
      _c("div", { staticClass: "modal-dialog", attrs: { role: "document" } }, [
        _c("div", { staticClass: "modal-content" }, [
          _vm._m(3),
          _vm._v(" "),
          _vm.showModalContent
            ? _c("div", { staticClass: "modal-body" }, [
                _c("div", { staticClass: "table-responsive" }, [
                  _c(
                    "table",
                    { staticClass: "table table-bordered table-striped" },
                    [
                      _c("tbody", [
                        _c("tr", [
                          _c("th", [_vm._v("Customer ID")]),
                          _vm._v(" "),
                          _c("td", [
                            _vm._v(_vm._s(_vm.currentOrder.customer.id))
                          ])
                        ]),
                        _vm._v(" "),
                        _c("tr", [
                          _c("th", [_vm._v("Full Name")]),
                          _vm._v(" "),
                          _c("td", [
                            _vm._v(
                              _vm._s(
                                _vm.$getCustomerFullName(
                                  _vm.currentOrder.customer
                                )
                              )
                            )
                          ])
                        ]),
                        _vm._v(" "),
                        _c("tr", [
                          _c("th", [_vm._v("Address")]),
                          _vm._v(" "),
                          _c("td", [
                            _vm._v(
                              _vm._s(
                                _vm.$getCustomerAddress(
                                  _vm.currentOrder.customer
                                )
                              )
                            )
                          ])
                        ]),
                        _vm._v(" "),
                        _c("tr", [
                          _c("th", [_vm._v("Phone")]),
                          _vm._v(" "),
                          _c("td", [
                            _vm._v(_vm._s(_vm.currentOrder.customer.telephone))
                          ])
                        ]),
                        _vm._v(" "),
                        _c("tr", [
                          _c("th", [_vm._v("Branch")]),
                          _vm._v(" "),
                          _c("td", [
                            _vm._v(
                              _vm._s(_vm.currentOrder.customer.branch.name)
                            )
                          ])
                        ]),
                        _vm._v(" "),
                        _c("tr", [
                          _c("th", [_vm._v("Category")]),
                          _vm._v(" "),
                          _c("td", [
                            _vm._v(
                              _vm._s(
                                _vm.currentOrder.customer.employment_status
                              )
                            )
                          ])
                        ]),
                        _vm._v(" "),
                        _c("tr", [
                          _c("th", [_vm._v("Work guarantor name")]),
                          _vm._v(" "),
                          _c("td", [
                            _vm._v(
                              _vm._s(
                                _vm.currentOrder.customer
                                  .work_guarantor_first_name +
                                  " " +
                                  _vm.currentOrder.customer
                                    .work_guarantor_last_name +
                                  " - " +
                                  _vm.currentOrder.customer
                                    .work_guarantor_relationship
                              ) + "\n                                "
                            )
                          ])
                        ]),
                        _vm._v(" "),
                        _c("tr", [
                          _c("th", [_vm._v("Work guarantor phone")]),
                          _vm._v(" "),
                          _c("td", [
                            _vm._v(
                              _vm._s(
                                _vm.currentOrder.customer.work_guarantor_telno
                              )
                            )
                          ])
                        ]),
                        _vm._v(" "),
                        _c("tr", [
                          _c("th", [_vm._v("Personal guarantor name")]),
                          _vm._v(" "),
                          _c("td", [
                            _vm._v(
                              _vm._s(
                                _vm.currentOrder.customer
                                  .personal_guarantor_first_name +
                                  " " +
                                  _vm.currentOrder.customer
                                    .personal_guarantor_last_name +
                                  " - " +
                                  _vm.currentOrder.customer
                                    .personal_guarantor_relationship
                              ) + "\n                                "
                            )
                          ])
                        ]),
                        _vm._v(" "),
                        _c("tr", [
                          _c("th", [_vm._v("Personal guarantor phone")]),
                          _vm._v(" "),
                          _c("td", [
                            _vm._v(
                              _vm._s(
                                _vm.currentOrder.customer
                                  .personal_guarantor_telno
                              )
                            )
                          ])
                        ]),
                        _vm._v(" "),
                        _c("tr", [
                          _c("th", [_vm._v("Verified by")]),
                          _vm._v(" "),
                          _c(
                            "td",
                            [
                              _c(
                                "router-link",
                                {
                                  staticClass: "text-link",
                                  attrs: {
                                    target: "_blank",
                                    to:
                                      "/dva/verification?id=" +
                                      _vm.currentOrder.customer.id
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n                                        click here to see verifications status\n                                    "
                                  )
                                ]
                              )
                            ],
                            1
                          )
                        ])
                      ])
                    ]
                  )
                ])
              ])
            : _vm._e(),
          _vm._v(" "),
          _vm._m(4)
        ])
      ])
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "modal fade repayment", attrs: { id: "repayment" } },
      [
        _c(
          "div",
          { staticClass: "modal-dialog modal-xl", attrs: { role: "document" } },
          [
            _vm.showModalContent
              ? _c("div", { staticClass: "modal-content" }, [
                  _c("div", { staticClass: "modal-header py-2" }, [
                    _c("h6", { staticClass: "modal-title py-1" }, [
                      _vm._v(
                        "\n                        Repayment Plan/Summary - " +
                          _vm._s(
                            _vm._f("capitalize")(
                              _vm.currentOrder.customer.employment_status
                            )
                          ) +
                          "\n                    "
                      )
                    ]),
                    _vm._v(" "),
                    _vm._m(5)
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "modal-body" }, [
                    _c("div", { staticClass: "table-responsive" }, [
                      _c("h5", { staticClass: "mt-3 mb-0" }, [
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
                                _vm.repaymentCaption(_vm.currentOrder),
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
                              _vm._l(
                                _vm.getRepayment(_vm.currentOrder),
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
                            [
                              _c("th", [_vm._v("Actual Pay Day")]),
                              _vm._v(" "),
                              _vm._l(
                                _vm.getRepayment(_vm.currentOrder, "_date"),
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
                                _vm.getPaymentStatusClasses(_vm.currentOrder),
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
                                _vm.getRepayment(
                                  _vm.currentOrder,
                                  "repayments"
                                ),
                                function(payment) {
                                  return _c("td", [
                                    _vm._v(
                                      "\n                                    " +
                                        _vm._s(_vm.$formatCurrency(payment)) +
                                        "\n                                "
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
                                _vm.getRepayment(_vm.currentOrder, "_pay"),
                                function(payment) {
                                  return _c("td", [
                                    _vm._v(
                                      "\n                                    " +
                                        _vm._s(_vm.$formatCurrency(payment)) +
                                        "\n                                "
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
                                _vm.getRepayment(
                                  _vm.currentOrder,
                                  "_payment_method"
                                ),
                                function(repaymentMethod) {
                                  return _c(
                                    "td",
                                    { staticClass: "text-capitalize" },
                                    [
                                      _vm._v(
                                        "\n                                    " +
                                          _vm._s(
                                            _vm.convertPaymentMethodOrBankToName(
                                              repaymentMethod,
                                              "payment_methods"
                                            )
                                          ) +
                                          "\n                                "
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
                              _vm._l(
                                _vm.getRepayment(
                                  _vm.currentOrder,
                                  "_payment_bank"
                                ),
                                function(repaymentBank) {
                                  return _c(
                                    "td",
                                    { staticClass: "text-capitalize" },
                                    [
                                      _vm._v(
                                        "\n                                    " +
                                          _vm._s(
                                            _vm.convertPaymentMethodOrBankToName(
                                              repaymentBank,
                                              "banks"
                                            )
                                          ) +
                                          "\n                                "
                                      )
                                    ]
                                  )
                                }
                              )
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
                                "\n                                    " +
                                  _vm._s(
                                    _vm._f("capitalize")(
                                      _vm.currentOrder["discount"]["name"]
                                    )
                                  ) +
                                  "\n                                    -\n                                    (" +
                                  _vm._s(
                                    _vm.currentOrder["discount"][
                                      "percentage_discount"
                                    ]
                                  ) +
                                  ")\n                                "
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
                                      _vm.currentOrder["product_price"]
                                    )
                                  )
                                )
                              )
                            ]),
                            _vm._v(" "),
                            _c("td", [_vm._v("Total Paid")]),
                            _vm._v(" "),
                            _c("th", [
                              _vm._v(_vm._s(_vm.paymentSummary.amountPaid))
                            ])
                          ]),
                          _vm._v(" "),
                          _c("tr", [
                            _c("td", { staticClass: "text-left" }, [
                              _vm._v("Discount Amount")
                            ]),
                            _vm._v(" "),
                            _c("th", [
                              _vm._v(_vm._s(_vm.paymentSummary.discountAmount))
                            ]),
                            _vm._v(" "),
                            _c("td", [_vm._v("Total After Discount")]),
                            _vm._v(" "),
                            _c("th", [
                              _vm._v(_vm._s(_vm.paymentSummary.discountedTotal))
                            ]),
                            _vm._v(" "),
                            _c("td", [_vm._v("Total Debt")]),
                            _vm._v(" "),
                            _c("th", [
                              _vm._v(_vm._s(_vm.paymentSummary.outstandingDebt))
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
                                      _vm.currentOrder.down_payment
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
                                _vm._s(_vm.paymentSummary.totalPlusDefault)
                              )
                            ]),
                            _vm._v(" "),
                            _c("td", [_vm._v("Default Fee")]),
                            _vm._v(" "),
                            _c("th", [
                              _vm._v(_vm._s(_vm.paymentSummary.defaultFee))
                            ])
                          ])
                        ])
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _vm._m(6)
                ])
              : _vm._e()
          ]
        )
      ]
    ),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "modal fade repayment",
        attrs: { id: "reminder_history" }
      },
      [
        _c(
          "div",
          { staticClass: "modal-dialog modal-lg", attrs: { role: "document" } },
          [
            _c("div", { staticClass: "modal-content" }, [
              _vm._m(7),
              _vm._v(" "),
              _vm.showModalContent
                ? _c("div", { staticClass: "modal-body" }, [
                    _c("div", { staticClass: "table-responsive" }, [
                      _vm.currentOrder.reminders.length
                        ? _c(
                            "table",
                            {
                              staticClass: "table table-bordered table-striped"
                            },
                            [
                              _vm._m(8),
                              _vm._v(" "),
                              _c(
                                "tbody",
                                _vm._l(_vm.currentOrder.reminders, function(
                                  reminder,
=======
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

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-569152fc\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/views/FSL/lookup/lookup.vue":
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
        _c("div", { staticClass: "mt-5 attendance-head" }, [
          _c("div", { staticClass: "card" }, [
            _c(
              "ul",
              { staticClass: "nav nav-tabs bg-default justify-content-center" },
              [_c("h6", [_vm._v("Customer Lookup")])]
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
                                "\n                                    Fetch customer details "
                              ),
                              _c("i", {
                                staticClass: "far fa-paper-plane ml-1"
                              })
                            ]
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _vm.errors.has("customer_id")
                        ? _c(
                            "small",
                            { staticClass: "form-text text-muted w-100" },
                            [
                              _vm._v(
                                "\n                                " +
                                  _vm._s(_vm.errors.first("customer_id")) +
                                  "\n                            "
                              )
                            ]
                          )
                        : _vm._e()
                    ]
                  )
                ]
              )
            ])
          ])
        ]),
        _vm._v(" "),
        _c("transition", { attrs: { name: "fade" } }, [
          _vm.customer && _vm.show
            ? _c(
                "div",
                [
                  _c(
                    "div",
                    { staticClass: "attendance-head" },
                    [
                      _c("customer-profile", {
                        attrs: { "view-customer": _vm.customer }
                      })
                    ],
                    1
                  ),
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
                                        "\n                                " +
                                          _vm._s(order.order_date) +
                                          "\n                            "
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
                                        "\n                                " +
                                          _vm._s(order.id) +
                                          "\n                            "
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
                                        "\n                                " +
                                          _vm._s(
                                            order.store_product.product_name
                                          ) +
                                          "\n                            "
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
                                        "\n                                " +
                                          _vm._s(
                                            _vm.$formatCurrency(
                                              order.product_price
                                            )
                                          ) +
                                          "\n                            "
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
                                        "\n                                " +
                                          _vm._s(order.sales_category.name) +
                                          "\n                            "
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
                                        "\n                                " +
                                          _vm._s(
                                            _vm.$formatCurrency(
                                              order.down_payment
                                            )
                                          ) +
                                          "\n                            "
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
                                          staticClass:
                                            "btn status my-sm-2 approved",
                                          on: {
                                            click: function($event) {
                                              _vm.displayAmortization(index)
                                            }
                                          }
                                        },
                                        [
                                          _vm._v(
                                            "\n                                    View Plan\n                                "
                                          )
                                        ]
                                      )
                                    ]
                                  )
                                ]
                              )
                            })
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
                                        "\n                                No records found!\n                            "
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
                            "\n                            Repayment Plan/Summary - " +
                              _vm._s(
                                _vm._f("capitalize")(
                                  _vm.customer.employment_status
                                )
                              ) +
                              "\n                        "
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
                                _c("th", [_vm._v("Branch")])
                              ]),
                              _vm._v(" "),
                              _c("tr", [
                                _c("td", { staticClass: "font-weight-bold" }, [
                                  _vm._v(
                                    _vm._s(_vm.activeOrder.customerName) +
                                      "\n                                    "
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
                                ])
                              ])
                            ])
                          ]),
                          _vm._v(" "),
                          _c("h5", { staticClass: "mt-3 mb-0" }, [
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
                                          "\n                                        " +
                                            _vm._s(
                                              _vm.$formatCurrency(payment)
                                            ) +
                                            "\n                                    "
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
                                          "\n                                        " +
                                            _vm._s(
                                              _vm.$formatCurrency(payment)
                                            ) +
                                            "\n                                    "
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
                                            "\n                                        " +
                                              _vm._s(
                                                _vm.Order.convertToName(
                                                  repaymentMethod,
                                                  "paymentMethods"
                                                )
                                              ) +
                                              "\n                                    "
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
                                          "\n                                        " +
                                            _vm._s(
                                              _vm.Order.convertToName(
                                                repaymentBank,
                                                "banks"
                                              )
                                            ) +
                                            "\n                                    "
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
                                _c("td", [_vm._v("Total Paid")]),
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
                          _c("h5", { staticClass: "mt-5 mb-0" }, [
                            _vm._v("Add a new payment")
                          ]),
                          _vm._v(" "),
                          _c("table", { staticClass: "table table-bordered" }, [
                            _c(
                              "tbody",
                              { staticClass: "text-center" },
                              [
                                _c("tr", { staticClass: "table-separator" }, [
                                  _c("td", { staticClass: "text-left" }, [
                                    _vm._v("S/No.")
                                  ]),
                                  _vm._v(" "),
                                  _c("th", [_vm._v("Repayment")]),
                                  _vm._v(" "),
                                  _c("th", [_vm._v("Amount")]),
                                  _vm._v(" "),
                                  _c("th", [_vm._v("Payment Method")]),
                                  _vm._v(" "),
                                  _c("th", [_vm._v("Bank")]),
                                  _vm._v(" "),
                                  _c("th", [_vm._v("Date")]),
                                  _vm._v(" "),
                                  _c("th", [_vm._v("Collected By")]),
                                  _vm._v(" "),
                                  _c("th", [_vm._v("Action")])
                                ]),
                                _vm._v(" "),
                                _vm._l(_vm.paymentForm.payments, function(
                                  payment,
>>>>>>> ed6e59048439b31995f360ff7e04db059d027dbb
                                  index
                                ) {
                                  return _c("tr", [
                                    _c("th", [_vm._v(_vm._s(index + 1))]),
                                    _vm._v(" "),
<<<<<<< HEAD
                                    _c("td", [
                                      _vm._v(
                                        _vm._s(
                                          _vm.$dateTimeConvert(reminder.date)
                                        )
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c("td", [_vm._v(_vm._s(reminder.type))]),
                                    _vm._v(" "),
                                    _c("td", {
                                      domProps: {
                                        innerHTML: _vm._s(
                                          _vm.renderMessage(reminder)
                                        )
                                      }
                                    }),
                                    _vm._v(" "),
                                    _c("td", [
                                      _vm._v(_vm._s(reminder.user.full_name))
                                    ])
                                  ])
                                })
                              )
                            ]
                          )
                        : _c("div", { staticClass: "my-4 text-center" }, [
                            _vm._v(
                              "\n                            no reminders have been sent yet!\n                        "
                            )
                          ])
                    ])
                  ])
                : _vm._e(),
              _vm._v(" "),
              _vm._m(9)
            ])
          ]
        )
      ]
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "tab-pane active text-center" }, [
      _c("div", { staticClass: "mb-3 row attendance-item" }, [
        _c(
          "div",
          {
            staticClass:
              "col d-flex light-heading align-items-center justify-content-center"
          },
          [_vm._v("\n                    No records found!\n                ")]
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-header py-2" }, [
      _c("h6", { staticClass: "modal-title py-1" }, [
        _vm._v("Purchase Order Summary")
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
    return _c("div", { staticClass: "modal-footer" }, [
      _c(
        "a",
        {
          staticClass: "text-link mt-3 w-100",
          staticStyle: { "text-align": "right" },
          attrs: { "data-dismiss": "modal", href: "javascript:" }
        },
        [_vm._v("close dialogue")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-header py-2" }, [
      _c("h6", { staticClass: "modal-title py-1" }, [
        _vm._v("Customer Info. Summary")
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
    return _c("div", { staticClass: "modal-footer" }, [
      _c(
        "a",
        {
          staticClass: "text-link mt-3 w-100 text-right",
          attrs: { "data-dismiss": "modal", href: "#" }
        },
        [
          _vm._v(
            "\n                        close dialogue\n                    "
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
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-footer" }, [
      _c(
        "a",
        {
          staticClass: "text-link mt-3 w-100",
          staticStyle: { "text-align": "right" },
          attrs: { "data-dismiss": "modal", href: "javascript:" }
        },
        [_vm._v("close dialogue")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-header py-2" }, [
      _c("h6", { staticClass: "modal-title py-1" }, [
        _vm._v("Reminder History")
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
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("S/N")]),
        _vm._v(" "),
        _c("th", [_vm._v("Date")]),
        _vm._v(" "),
        _c("th", [_vm._v("Type")]),
        _vm._v(" "),
        _c("th", [_vm._v("SMS/Feedback")]),
        _vm._v(" "),
        _c("th", [_vm._v("sender")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-footer" }, [
      _c(
        "a",
        {
          staticClass: "text-link mt-3 w-100",
          staticStyle: { "text-align": "right" },
          attrs: { "data-dismiss": "modal", href: "javascript:" }
        },
        [_vm._v("close dialogue")]
      )
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-57fa0ac8", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-c9b61298\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/views/DVA/order/orderList.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("transition", { attrs: { name: "fade" } }, [
    _c(
      "div",
      { staticClass: "attendance", attrs: { id: "reminder" } },
      [
        _c("custom-header", { attrs: { title: "Order Lists" } }),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "mt-5 row attendance-head" },
          _vm._l(_vm.filters, function(ref) {
            var name = ref.name
            return _c("div", { staticClass: "col-4 col-sm-3" }, [
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "light-heading" }, [
                  _c("span", { staticClass: "d-none d-sm-inline" }, [
                    _vm._v("Select")
                  ]),
                  _vm._v(
                    " " +
                      _vm._s(_vm._f("capitalize")(name)) +
                      "\n                    "
                  )
                ])
              ])
            ])
          })
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "mt-2 mt-lg-3 row attendance-head attendance-view" },
          [
            _vm._l(_vm.filters, function(ref) {
              var filter = ref.name
              var model = ref.model
              return _c("div", { staticClass: "col-4 col-sm-3" }, [
                _c("div", { staticClass: "row" }, [
                  filter === "branch"
                    ? _c(
                        "select",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.$data[model],
                              expression: "$data[model]"
                            }
                          ],
                          staticClass: "custom-select",
                          on: {
                            keyup: function($event) {
                              if (
                                !("button" in $event) &&
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
                              _vm.fetchData()
                            },
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
                                _vm.$data,
                                model,
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
                            {
                              attrs: { disabled: "", selected: "", value: "" }
                            },
                            [_vm._v(_vm._s(_vm._f("capitalize")(filter)))]
                          ),
                          _vm._v(" "),
                          _vm._l(_vm.$store.getters.getBranches, function(ref) {
                            var name = ref.name
                            var id = ref.id
                            return _c("option", { domProps: { value: id } }, [
                              _vm._v(
                                "\n                            " +
                                  _vm._s(_vm._f("capitalize")(name)) +
                                  "\n                        "
                              )
                            ])
                          })
                        ],
                        2
                      )
                    : _c("div", { staticClass: "form-group w-100" }, [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.$data[model],
                              expression: "$data[model]"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: { type: "date" },
                          domProps: { value: _vm.$data[model] },
                          on: {
                            keyup: function($event) {
                              if (
                                !("button" in $event) &&
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
                              _vm.fetchData()
                            },
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(_vm.$data, model, $event.target.value)
                            }
                          }
                        })
                      ])
                ])
              ])
            }),
            _vm._v(" "),
            _c("div", { staticClass: "col-12 col-sm-3" }, [
              _c("div", { staticClass: "row d-flex justify-content-end" }, [
                _c(
                  "button",
                  {
                    staticClass: "btn btn-primary bg-default mt-0 myBtn",
                    on: {
                      click: function($event) {
                        _vm.fetchData()
                      }
                    }
                  },
                  [_vm._v("Apply Filter")]
                )
              ])
            ])
          ],
          2
        ),
        _vm._v(" "),
        _c("div", { staticClass: "mt-5 mb-3 attendance-head" }, [
          _c("div", { staticClass: "w-100 my-5 mx-0 hr" }),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "row px-4 pt-3 pb-4 text-center" },
            [
              _c(
                "div",
                {
                  staticClass: "col light-heading",
                  staticStyle: { "max-width": "120px" }
                },
                [_vm._v("S/N")]
              ),
              _vm._v(" "),
              _vm._l(_vm.headings, function(header) {
                return _c("div", { staticClass: "col light-heading" }, [
                  _vm._v(_vm._s(header))
                ])
              })
            ],
            2
          )
        ]),
        _vm._v(" "),
        _vm.show
          ? _c("order", {
              attrs: {
                "start-index": _vm.orders.from,
                "pre-loaded-order": _vm.response,
                mode: "normal-list"
=======
                                    _c("th", [
                                      _c(
                                        "div",
                                        { staticClass: "form-group mb-0" },
                                        [
                                          _c("input", {
                                            directives: [
                                              {
                                                name: "model",
                                                rawName: "v-model",
                                                value:
                                                  _vm.paymentForm.payments[
                                                    index
                                                  ].column,
                                                expression:
                                                  "paymentForm.payments[index].column"
                                              }
                                            ],
                                            staticClass: "form-control",
                                            attrs: {
                                              name: "date",
                                              type: "text",
                                              disabled: ""
                                            },
                                            domProps: {
                                              value:
                                                _vm.paymentForm.payments[index]
                                                  .column
                                            },
                                            on: {
                                              input: function($event) {
                                                if ($event.target.composing) {
                                                  return
                                                }
                                                _vm.$set(
                                                  _vm.paymentForm.payments[
                                                    index
                                                  ],
                                                  "column",
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
                                        { staticClass: "form-group mb-0" },
                                        [
                                          _c("input", {
                                            directives: [
                                              {
                                                name: "model",
                                                rawName: "v-model",
                                                value:
                                                  _vm.paymentForm.payments[
                                                    index
                                                  ]._pay,
                                                expression:
                                                  "paymentForm.payments[index]._pay"
                                              }
                                            ],
                                            staticClass: "form-control",
                                            attrs: {
                                              name: "date",
                                              type: "text"
                                            },
                                            domProps: {
                                              value:
                                                _vm.paymentForm.payments[index]
                                                  ._pay
                                            },
                                            on: {
                                              input: function($event) {
                                                if ($event.target.composing) {
                                                  return
                                                }
                                                _vm.$set(
                                                  _vm.paymentForm.payments[
                                                    index
                                                  ],
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
                                                _vm.paymentForm.payments[index]
                                                  ._payment_method,
                                              expression:
                                                "paymentForm.payments[index]._payment_method"
                                            }
                                          ],
                                          staticClass: "custom-select w-100",
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
                                                _vm.paymentForm.payments[index],
                                                "_payment_method",
                                                $event.target.multiple
                                                  ? $$selectedVal
                                                  : $$selectedVal[0]
                                              )
                                            }
                                          }
                                        },
                                        _vm._l(_vm.getPaymentMethods, function(
                                          ref
                                        ) {
                                          var name = ref.name
                                          var id = ref.id
                                          return _c(
                                            "option",
                                            { domProps: { value: id } },
                                            [
                                              _vm._v(
                                                "\n                                                " +
                                                  _vm._s(
                                                    _vm._f("capitalize")(name)
                                                  ) +
                                                  "\n                                            "
                                              )
                                            ]
                                          )
                                        })
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
                                                _vm.paymentForm.payments[index]
                                                  ._payment_bank,
                                              expression:
                                                "paymentForm.payments[index]._payment_bank"
                                            }
                                          ],
                                          staticClass: "custom-select w-100",
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
                                                _vm.paymentForm.payments[index],
                                                "_payment_bank",
                                                $event.target.multiple
                                                  ? $$selectedVal
                                                  : $$selectedVal[0]
                                              )
                                            }
                                          }
                                        },
                                        _vm._l(_vm.getBanks, function(ref) {
                                          var name = ref.name
                                          var id = ref.id
                                          return _c(
                                            "option",
                                            { domProps: { value: id } },
                                            [_vm._v(_vm._s(name))]
                                          )
                                        })
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c("th", [
                                      _c(
                                        "div",
                                        { staticClass: "form-group mb-0" },
                                        [
                                          _c("input", {
                                            directives: [
                                              {
                                                name: "model",
                                                rawName: "v-model",
                                                value:
                                                  _vm.paymentForm.payments[
                                                    index
                                                  ]._date,
                                                expression:
                                                  "paymentForm.payments[index]._date"
                                              }
                                            ],
                                            staticClass: "form-control",
                                            attrs: {
                                              name: "date",
                                              type: "date"
                                            },
                                            domProps: {
                                              value:
                                                _vm.paymentForm.payments[index]
                                                  ._date
                                            },
                                            on: {
                                              input: function($event) {
                                                if ($event.target.composing) {
                                                  return
                                                }
                                                _vm.$set(
                                                  _vm.paymentForm.payments[
                                                    index
                                                  ],
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
                                        { staticClass: "form-group mb-0" },
                                        [
                                          _c("input", {
                                            staticClass: "form-control",
                                            attrs: {
                                              "data-vv-as": "date",
                                              name: "date",
                                              type: "text",
                                              disabled: ""
                                            },
                                            domProps: { value: _vm.user.name }
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
                                              _vm.deletePayment(index)
                                            }
                                          }
                                        },
                                        [
                                          _c("i", {
                                            staticClass: "fas fa-times"
                                          })
                                        ]
                                      )
                                    ])
                                  ])
                                })
                              ],
                              2
                            )
                          ])
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "modal-footer" }, [
                        _c(
                          "button",
                          {
                            staticClass: "btn status my-sm-2",
                            on: {
                              click: function($event) {
                                _vm.addPaymentForm()
                              }
                            }
                          },
                          [_vm._v("Add Payment")]
                        ),
                        _vm._v(" "),
                        _c(
                          "button",
                          {
                            staticClass: "btn status my-sm-2 approved ml-4",
                            on: {
                              click: function($event) {
                                _vm.preparePayments()
                              }
                            }
                          },
                          [
                            _vm._v(
                              "Click here to\n                            Submit\n                            Payment(s)!\n                        "
                            )
                          ]
                        ),
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
                          [_vm._v("close dialogue")]
                        )
                      ])
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
    require("vue-hot-reload-api")      .rerender("data-v-569152fc", module.exports)
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
>>>>>>> ed6e59048439b31995f360ff7e04db059d027dbb
              }
            })
          : _vm._e(),
        _vm._v(" "),
        _vm.show
<<<<<<< HEAD
          ? _c("div", { staticClass: "mt-1 attendance-body" }, [
              _c("div", { staticClass: "mb-5 px-0 row align-items-center" }, [
                _c("div", { staticClass: "w-100 mb-4 mt-5 mx-0 hr" }),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "clearfix w-100 mt-4 d-flex bd-highlight" },
                  [
                    _c(
                      "div",
                      {
                        staticClass:
                          "col d-flex justify-content-start align-items-center pl-0"
                      },
                      [
                        _c(
                          "strong",
                          { staticClass: "light-heading float-left" },
                          [
                            _vm._v(
                              "\n                            Displaying: " +
                                _vm._s(_vm.orders.from) +
                                " - " +
                                _vm._s(_vm.orders.to) +
                                " of " +
                                _vm._s(_vm.orders.total) +
                                "\n                        "
                            )
                          ]
                        )
                      ]
                    ),
=======
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
>>>>>>> ed6e59048439b31995f360ff7e04db059d027dbb
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass:
<<<<<<< HEAD
                          "col d-flex justify-content-center align-items-center"
                      },
                      [
                        _c("div", { staticClass: "mr-5" }, [
                          _c(
                            "span",
                            { staticClass: "d-inline light-heading mr-2" },
                            [_vm._v("set current Page")]
                          ),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.page,
                                expression: "page"
                              }
                            ],
                            staticClass: "d-inline form-control ",
                            staticStyle: { "max-width": "50px" },
                            attrs: { type: "number" },
                            domProps: { value: _vm.page },
                            on: {
                              keyup: function($event) {
                                if (
                                  !("button" in $event) &&
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
                                _vm.fetchData()
                              },
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.page = $event.target.value
                              }
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "ml-5" }, [
                          _c(
                            "span",
                            { staticClass: "d-inline light-heading mr-2" },
                            [_vm._v("set page-size")]
                          ),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.page_size,
                                expression: "page_size"
                              }
                            ],
                            staticClass: "d-inline form-control",
                            staticStyle: { "max-width": "50px" },
                            attrs: { type: "number" },
                            domProps: { value: _vm.page_size },
                            on: {
                              keyup: function($event) {
                                if (
                                  !("button" in $event) &&
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
                                _vm.fetchData()
                              },
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.page_size = $event.target.value
                              }
                            }
                          })
                        ])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "nav",
                      {
                        staticClass:
                          "col d-flex justify-content-end align-items-center pr-0"
                      },
                      [
                        _c(
                          "ul",
                          { staticClass: "pagination pagination-lg mb-0" },
                          [
                            _c(
                              "li",
                              {
                                staticClass: "page-item",
                                class: { disabled: !_vm.orders.first_page_url }
                              },
                              [
                                _c(
                                  "a",
                                  {
                                    staticClass: "page-link",
                                    attrs: { href: "javascript:" },
                                    on: {
                                      click: function($event) {
                                        _vm.prev(1)
                                      }
                                    }
                                  },
                                  [_vm._v("First")]
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "li",
                              {
                                staticClass: "page-item",
                                class: { disabled: !_vm.orders.prev_page_url }
                              },
                              [
                                _c(
                                  "a",
                                  {
                                    staticClass: "page-link",
                                    attrs: { href: "javascript:" },
                                    on: {
                                      click: function($event) {
                                        _vm.prev()
                                      }
                                    }
                                  },
                                  [_vm._v("Next")]
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c("li", { staticClass: "page-item" }, [
                              _c("span", { staticClass: "page-link" }, [
                                _vm._v(
                                  "Current Page: " +
                                    _vm._s(_vm.orders.current_page)
                                )
                              ])
                            ]),
                            _vm._v(" "),
                            _c(
                              "li",
                              {
                                staticClass: "page-item",
                                class: { disabled: !_vm.orders.next_page_url }
                              },
                              [
                                _c(
                                  "a",
                                  {
                                    staticClass: "page-link",
                                    attrs: { href: "javascript:" },
                                    on: {
                                      click: function($event) {
                                        _vm.next()
                                      }
                                    }
                                  },
                                  [_vm._v("Next")]
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "li",
                              {
                                staticClass: "page-item",
                                class: { disabled: !_vm.orders.last_page_url }
                              },
                              [
                                _c(
                                  "a",
                                  {
                                    staticClass: "page-link",
                                    attrs: { href: "javascript:" },
                                    on: {
                                      click: function($event) {
                                        _vm.next(_vm.orders.last_page)
                                      }
                                    }
                                  },
                                  [_vm._v("Last")]
                                )
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
=======
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
>>>>>>> ed6e59048439b31995f360ff7e04db059d027dbb
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
<<<<<<< HEAD
    require("vue-hot-reload-api")      .rerender("data-v-c9b61298", module.exports)
=======
    require("vue-hot-reload-api")      .rerender("data-v-f4889778", module.exports)
>>>>>>> ed6e59048439b31995f360ff7e04db059d027dbb
  }
}

/***/ }),

<<<<<<< HEAD
/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-57fa0ac8\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/Orders.vue":
=======
/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-569152fc\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/views/FSL/lookup/lookup.vue":
>>>>>>> ed6e59048439b31995f360ff7e04db059d027dbb
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
<<<<<<< HEAD
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-57fa0ac8\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/Orders.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("182478d3", content, false, {});
=======
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-569152fc\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/views/FSL/lookup/lookup.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("e69d9284", content, false, {});
>>>>>>> ed6e59048439b31995f360ff7e04db059d027dbb
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
<<<<<<< HEAD
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-57fa0ac8\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Orders.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-57fa0ac8\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Orders.vue");
=======
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-569152fc\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./lookup.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-569152fc\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./lookup.vue");
>>>>>>> ed6e59048439b31995f360ff7e04db059d027dbb
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

<<<<<<< HEAD
/***/ "./resources/assets/js/components/OrderItem.vue":
=======
/***/ "./resources/assets/js/components/AppNavigation.vue":
>>>>>>> ed6e59048439b31995f360ff7e04db059d027dbb
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
<<<<<<< HEAD
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"babel-preset-env\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"babel-plugin-syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/OrderItem.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-5522319a\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/OrderItem.vue")
=======
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"babel-preset-env\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"babel-plugin-syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/AppNavigation.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-2f542aae\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/AppNavigation.vue")
>>>>>>> ed6e59048439b31995f360ff7e04db059d027dbb
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
<<<<<<< HEAD
Component.options.__file = "resources\\assets\\js\\components\\OrderItem.vue"
=======
Component.options.__file = "resources\\assets\\js\\components\\AppNavigation.vue"
>>>>>>> ed6e59048439b31995f360ff7e04db059d027dbb

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
<<<<<<< HEAD
    hotAPI.createRecord("data-v-5522319a", Component.options)
  } else {
    hotAPI.reload("data-v-5522319a", Component.options)
=======
    hotAPI.createRecord("data-v-2f542aae", Component.options)
  } else {
    hotAPI.reload("data-v-2f542aae", Component.options)
>>>>>>> ed6e59048439b31995f360ff7e04db059d027dbb
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

<<<<<<< HEAD
/***/ "./resources/assets/js/components/Orders.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-57fa0ac8\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/Orders.vue")
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"babel-preset-env\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"babel-plugin-syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/Orders.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-57fa0ac8\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/Orders.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-57fa0ac8"
=======
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
>>>>>>> ed6e59048439b31995f360ff7e04db059d027dbb
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
<<<<<<< HEAD
Component.options.__file = "resources\\assets\\js\\components\\Orders.vue"
=======
Component.options.__file = "resources\\assets\\js\\components\\CustomerProfile.vue"
>>>>>>> ed6e59048439b31995f360ff7e04db059d027dbb

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
<<<<<<< HEAD
    hotAPI.createRecord("data-v-57fa0ac8", Component.options)
  } else {
    hotAPI.reload("data-v-57fa0ac8", Component.options)
=======
    hotAPI.createRecord("data-v-f4889778", Component.options)
  } else {
    hotAPI.reload("data-v-f4889778", Component.options)
>>>>>>> ed6e59048439b31995f360ff7e04db059d027dbb
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
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-02013d35\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/customHeader.vue")
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
Component.options.__file = "resources\\assets\\js\\components\\customHeader.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-02013d35", Component.options)
  } else {
    hotAPI.reload("data-v-02013d35", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

<<<<<<< HEAD
/***/ "./resources/assets/js/utilities/event-bus.js":
=======
/***/ "./resources/assets/js/utilities/Amortization.js":
>>>>>>> ed6e59048439b31995f360ff7e04db059d027dbb
/***/ (function(module, exports, __webpack_require__) {

"use strict";


<<<<<<< HEAD
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EventBus = undefined;
=======
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
>>>>>>> ed6e59048439b31995f360ff7e04db059d027dbb

var _vue = __webpack_require__("./node_modules/vue/dist/vue.common.js");

var _vue2 = _interopRequireDefault(_vue);

<<<<<<< HEAD
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EventBus = exports.EventBus = new _vue2.default();

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

/***/ "./resources/assets/js/views/DVA/order/orderList.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"babel-preset-env\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"babel-plugin-syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/views/DVA/order/orderList.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-c9b61298\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/views/DVA/order/orderList.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
=======
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
                if (Order.isBankDraftAvailable() && this.isOrderFormal) {
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

            this._branch = _store.store.state.branches.find(function (branch) {
                return parseInt(branch.id) === parseInt(_this.order.store_product.store_name);
            });
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
            var _this2 = this;

            var datesDefaulted = [];
            var amountPerDefault = 500;
            var fmt = function fmt(cur) {
                return vue.$formatCurrency(cur);
            };
            var amountPaid = vue.$roundDownAmt(parseInt(this.order.down_payment));

            this.dueDates.forEach(function (dueDate, index) {
                return Order.isPaymentDue(vue.$getDate(new Date(dueDate).addDays(5))) && datesDefaulted.push({ dueDate: dueDate, actualPayDate: _this2.actualPayDates[index] });
            });

            if (!!this.repaymentData) {
                for (var i = 0; i < this.count + 1; i++) {
                    var amtPaid = parseInt(this.actualAmountsPaid[i]);
                    amountPaid += !!amtPaid ? vue.$roundDownAmt(amtPaid) : 0;
                }
            } else amountPaid = 0;

            var discount = this.order.discount.percentage_discount;

            var multiplicationFactor = this.count === 6 ? 0.5 : 1;
            var repaymentCoveredAsDiscount = function repaymentCoveredAsDiscount() {
                return discount > 0 ? discount === 5 ? 1 : 2 : 0;
            };

            var discountAmount = this.order.repayment_amount * multiplicationFactor * repaymentCoveredAsDiscount();
            discountAmount = vue.$roundDownAmt(discountAmount);

            var defaultFee = datesDefaulted.length * amountPerDefault;
            var discountedTotal = vue.$roundDownAmt(this.order["product_price"] - discountAmount);

            this._amountPaid = fmt(amountPaid);
            this._discountAmount = fmt(vue.$roundDownAmt(discountAmount));
            this._outstandingDebt = fmt(vue.$roundDownAmt(parseInt(this.order["product_price"]) - amountPaid));
            this._discountedTotal = fmt(discountedTotal);
            this._defaultFee = fmt(defaultFee);
            this._totalPlusDefault = fmt(discountedTotal + defaultFee);
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

        var _this3 = _possibleConstructorReturn(this, (OrderWithPromiseCall.__proto__ || Object.getPrototypeOf(OrderWithPromiseCall)).call(this, order, order.customer));

        _this3._isReminderSent = false;
        _this3._dvaId = dvaId;
        _this3._isSelected = false;
        _this3.setReminder(null);
        _this3.setIsReminderSent();
        _this3.setFinancialStatus();
        _this3.setPromiseCall();
        _this3.generateAndSetNextSMSReminder();
        return _this3;
    }

    /*custom setters*/


    _createClass(OrderWithPromiseCall, [{
        key: 'setIsReminderSent',
        value: function setIsReminderSent() {
            var _this4 = this;

            var date = void 0;
            var today = vue.$getDate();
            this.order.reminders.forEach(function (reminder) {
                //refactor below by using regx characters to split
                var reminderDateTimeArr = reminder.date.split(' '); //(2019-03-24 02:00:00) -> ['2019-03-24','02:00:00']
                var dateArr = reminderDateTimeArr[0].split('-'); //'2019-03-24' -> ['2019','03','24']
                var timeArr = reminderDateTimeArr[1].split(':'); //'02:00:00' -> ['02','00','00']
                var arr = [].concat(_toConsumableArray(dateArr), _toConsumableArray(timeArr)) // ['2019','03','24','02','00','00']
                .map(function (item) {
                    return parseInt(item, 10);
                }); //[2019,3,24,2,0,0]
                date = vue.$getDate(new Date(Date.UTC.apply(Date, _toConsumableArray(arr))), false);
                date === today && (_this4._isReminderSent = true);
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
            var _order = this.order,
                store_product = _order.store_product,
                repayment_amount = _order.repayment_amount,
                customer = _order.customer,
                order_date = _order.order_date,
                first_name = customer.first_name,
                last_name = customer.last_name,
                name = first_name + " " + last_name,
                product_name = store_product.product_name;


            var message = void 0;
            if (order_date === vue.$getDate()) {
                message = 'Hello ' + name + ', thanks for patronizing us.' + ' The following is the breakdown of the repayment plan for' + (' the purchase of ' + product_name + ':%0a');
                this.dueDates.forEach(function (date, index) {
                    return message += vue.$getColumn(index + 1) + ": " + date + " => " + vue.$formatCurrency(vue.$roundDownAmt(repayment_amount)) + "%0a";
                });
            } else {
                message = 'Hello ' + name + ', This is to remind you that your' + (' ' + vue.$getColumn(parseInt(this.repaymentLevel) + 1) + ' repayment of') + (' ' + vue.$formatCurrency(vue.$roundDownAmt(repayment_amount)) + ' for ' + product_name) + (' will be due on ' + this.dueDates[this.repaymentLevel] + '. we will be expecting you.');
            }
            this._nextSMSReminder = message + "Please remember to pay on time to avoid" + " late fees and other penalties.%0aThank you.";
        }

        //NB:: this method is called from outside of this class.
        //to use always call this method after instantiating the class.

    }, {
        key: 'setReminder',
        value: function setReminder(type) {
            this._reminder = {
                type: type,
                'dva_id': this.dvaId,
                'order_id': this.order.id,
                'feedback': null,
                'customer_id': this.customer.id,
                'canBeSelected': !this.isReminderSent,
                'repayment_level': this.repaymentLevel
            };
            if (type === 'sms') {
                this._reminder.sms_id = null;
                this._reminder.contacts = this.customer.telephone;
            }
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

/***/ "./resources/assets/js/views/FSL/lookup/lookup.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-569152fc\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/views/FSL/lookup/lookup.vue")
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"babel-preset-env\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"babel-plugin-syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/views/FSL/lookup/lookup.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-569152fc\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/views/FSL/lookup/lookup.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-569152fc"
>>>>>>> ed6e59048439b31995f360ff7e04db059d027dbb
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
<<<<<<< HEAD
Component.options.__file = "resources\\assets\\js\\views\\DVA\\order\\orderList.vue"
=======
Component.options.__file = "resources\\assets\\js\\views\\FSL\\lookup\\lookup.vue"
>>>>>>> ed6e59048439b31995f360ff7e04db059d027dbb

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
<<<<<<< HEAD
    hotAPI.createRecord("data-v-c9b61298", Component.options)
  } else {
    hotAPI.reload("data-v-c9b61298", Component.options)
=======
    hotAPI.createRecord("data-v-569152fc", Component.options)
  } else {
    hotAPI.reload("data-v-569152fc", Component.options)
>>>>>>> ed6e59048439b31995f360ff7e04db059d027dbb
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

<<<<<<< HEAD
});
=======
webpackJsonp([2],{"+O4B":function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mt-5 attendance-head"},[a("div",{staticClass:"mb-5 row align-items-center"},[a("div",{staticClass:"col-12 title-con"},[a("span",{staticClass:"title"},[t._v(t._s(t._f("capitalize")(t.title)))]),t._v(" "),t.to?a("div",{staticClass:"row justify-content-end"},[a("router-link",{staticClass:"text-link mt-3",attrs:{to:t.to}},[t._v(t._s(t.buttonTitle))])],1):t._e()])])])},staticRenderFns:[]}},"4R38":function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.show?a("div",{staticClass:"tab-content mt-1 attendance-body"},[a("div",{staticClass:"tab-pane active text-center",attrs:{id:"reminder-panel",role:"tabpanel"}},t._l(t.orders,function(e,r){return a("order-item",{key:e.id,attrs:{index:r,"start-index":t.startIndex,order:e,dva_id:t.dva_id,"is-repayment-valid":t.isRepaymentValid(e),"pay-summary":t.calcPaymentSummary(e),"repayment-level":t.getRepaymentLevel(e),mode:t.mode},on:{done:function(e){t.fetchList(t.list)},updateReminderList:t.updateReminder,display:t.displayDetails}})})),t._v(" "),"normal-list"!=t.mode?a("div",{staticClass:"w-100 my-5 mx-0 hr"}):t._e()]):a("div",{staticClass:"tab-content mt-1 attendance-body"},[t._m(0)]),t._v(" "),t.show&&"sms"===t.mode?a("div",{staticClass:"mt-1 attendance-body"},[a("div",{staticClass:"mb-5 px-0 row align-items-center"},[a("div",{staticClass:"clearfix d-flex justify-content-end w-100"},[a("button",{staticClass:"btn bg-default",attrs:{disabled:t.$isProcessing},on:{click:t.processSelected}},[t._v("\n                    Send Reminder(s) "),a("i",{staticClass:"far fa-paper-plane ml-1"})])])])]):t._e(),t._v(" "),a("div",{staticClass:"modal fade",attrs:{id:"purchase_order"}},[a("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[a("div",{staticClass:"modal-content"},[t._m(1),t._v(" "),t.showModalContent?a("div",{staticClass:"modal-body"},[a("div",{staticClass:"table-responsive"},[a("table",{staticClass:"table table-bordered table-striped"},[a("tbody",[a("tr",[a("th",[t._v("Order ID")]),t._v(" "),a("td",[t._v(t._s(t.currentOrder.id))])]),t._v(" "),a("tr",[a("th",[t._v("Order date")]),t._v(" "),a("td",[t._v(t._s(t.currentOrder.order_date))])]),t._v(" "),a("tr",[a("th",[t._v("Product")]),t._v(" "),a("td",[t._v(t._s(t.currentOrder.store_product.product_name))])]),t._v(" "),a("tr",[a("th",[t._v("Repayment")]),t._v(" "),a("td",[t._v(t._s(t.$formatCurrency(t.currentOrder.repayment_amount)))])]),t._v(" "),a("tr",[a("th",[t._v("Down Payment")]),t._v(" "),a("td",[t._v(t._s(t.$formatCurrency(t.currentOrder.down_payment)))])]),t._v(" "),a("tr",[a("th",[t._v("Discount (%)")]),t._v(" "),a("td",[t._v(t._s(t._f("capitalize")(t.getDiscount(t.currentOrder))))])]),t._v(" "),a("tr",[a("th",[t._v("Sale Type")]),t._v(" "),a("td",[t._v(t._s(t._f("capitalize")(t.currentOrder.sales_type.name)))])]),t._v(" "),a("tr",[a("th",[t._v("Total amount to Pay")]),t._v(" "),a("td",[t._v(t._s(t.$formatCurrency(t.currentOrder.product_price)))])]),t._v(" "),a("tr",[a("th",[t._v("Processed by")]),t._v(" "),a("td",[t._v(t._s(t.currentOrder.floor_agent?t.currentOrder.floor_agent.full_name:null))])])])])])]):t._e(),t._v(" "),t._m(2)])])]),t._v(" "),a("div",{staticClass:"modal fade",attrs:{id:"customer_info"}},[a("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[a("div",{staticClass:"modal-content"},[t._m(3),t._v(" "),t.showModalContent?a("div",{staticClass:"modal-body"},[a("div",{staticClass:"table-responsive"},[a("table",{staticClass:"table table-bordered table-striped"},[a("tbody",[a("tr",[a("th",[t._v("Customer ID")]),t._v(" "),a("td",[t._v(t._s(t.currentOrder.customer.id))])]),t._v(" "),a("tr",[a("th",[t._v("Full Name")]),t._v(" "),a("td",[t._v(t._s(t.$getCustomerFullName(t.currentOrder.customer)))])]),t._v(" "),a("tr",[a("th",[t._v("Address")]),t._v(" "),a("td",[t._v(t._s(t.$getCustomerAddress(t.currentOrder.customer)))])]),t._v(" "),a("tr",[a("th",[t._v("Phone")]),t._v(" "),a("td",[t._v(t._s(t.currentOrder.customer.telephone))])]),t._v(" "),a("tr",[a("th",[t._v("Branch")]),t._v(" "),a("td",[t._v(t._s(t.currentOrder.customer.branch.name))])]),t._v(" "),a("tr",[a("th",[t._v("Category")]),t._v(" "),a("td",[t._v(t._s(t.currentOrder.customer.employment_status))])]),t._v(" "),a("tr",[a("th",[t._v("Work guarantor name")]),t._v(" "),a("td",[t._v(t._s(t.currentOrder.customer.work_guarantor_first_name+" "+t.currentOrder.customer.work_guarantor_last_name+" - "+t.currentOrder.customer.work_guarantor_relationship)+"\n                                ")])]),t._v(" "),a("tr",[a("th",[t._v("Work guarantor phone")]),t._v(" "),a("td",[t._v(t._s(t.currentOrder.customer.work_guarantor_telno))])]),t._v(" "),a("tr",[a("th",[t._v("Personal guarantor name")]),t._v(" "),a("td",[t._v(t._s(t.currentOrder.customer.personal_guarantor_first_name+" "+t.currentOrder.customer.personal_guarantor_last_name+" - "+t.currentOrder.customer.personal_guarantor_relationship)+"\n                                ")])]),t._v(" "),a("tr",[a("th",[t._v("Personal guarantor phone")]),t._v(" "),a("td",[t._v(t._s(t.currentOrder.customer.personal_guarantor_telno))])]),t._v(" "),a("tr",[a("th",[t._v("Verified by")]),t._v(" "),a("td",[a("router-link",{staticClass:"text-link",attrs:{target:"_blank",to:"/dva/verification?id="+t.currentOrder.customer.id}},[t._v("\n                                        click here to see verifications status\n                                    ")])],1)])])])])]):t._e(),t._v(" "),t._m(4)])])]),t._v(" "),a("div",{staticClass:"modal fade repayment",attrs:{id:"repayment"}},[a("div",{staticClass:"modal-dialog modal-xl",attrs:{role:"document"}},[t.showModalContent?a("div",{staticClass:"modal-content"},[a("div",{staticClass:"modal-header py-2"},[a("h6",{staticClass:"modal-title py-1"},[t._v("\n                        Repayment Plan/Summary - "+t._s(t._f("capitalize")(t.currentOrder.customer.employment_status))+"\n                    ")]),t._v(" "),t._m(5)]),t._v(" "),a("div",{staticClass:"modal-body"},[a("div",{staticClass:"table-responsive"},[a("h5",{staticClass:"mt-3 mb-0"},[t._v("Amortization Schedule")]),t._v(" "),a("table",{staticClass:"table table-bordered"},[a("tbody",{staticClass:"text-center"},[a("tr",[a("th",[t._v("Repayment")]),t._v(" "),t._l(t.repaymentCaption(t.currentOrder),function(e){return a("td",{domProps:{innerHTML:t._s(e)}})})],2),t._v(" "),a("tr",{staticClass:"table-separator"},[a("th",[t._v("Due Date")]),t._v(" "),t._l(t.getRepayment(t.currentOrder),function(e){return a("td",[t._v(t._s(e))])})],2),t._v(" "),a("tr",[a("th",[t._v("Actual Pay Day")]),t._v(" "),t._l(t.getRepayment(t.currentOrder,"_date"),function(e){return a("td",[t._v(t._s(e))])})],2),t._v(" "),a("tr",{staticClass:"table-separator"},[a("th",[t._v("Status")]),t._v(" "),t._l(t.getPaymentStatusClasses(t.currentOrder),function(t){return a("td",{class:t.class},[a("i",{staticClass:"fas",class:t.icon})])})],2),t._v(" "),a("tr",{staticClass:"table-separator"},[a("th",[t._v("Repayment Amount")]),t._v(" "),t._l(t.getRepayment(t.currentOrder,"repayments"),function(e){return a("td",[t._v("\n                                    "+t._s(t.$formatCurrency(e))+"\n                                ")])})],2),t._v(" "),a("tr",[a("th",[t._v("Actual Amount Paid")]),t._v(" "),t._l(t.getRepayment(t.currentOrder,"_pay"),function(e){return a("td",[t._v("\n                                    "+t._s(t.$formatCurrency(e))+"\n                                ")])})],2),t._v(" "),a("tr",{staticClass:"table-separator"},[a("th",[t._v("Payment Method")]),t._v(" "),t._l(t.getRepayment(t.currentOrder,"_payment_method"),function(e){return a("td",{staticClass:"text-capitalize"},[t._v("\n                                    "+t._s(t.convertPaymentMethodOrBankToName(e,"payment_methods"))+"\n                                ")])})],2),t._v(" "),a("tr",[a("th",[t._v("Bank")]),t._v(" "),t._l(t.getRepayment(t.currentOrder,"_payment_bank"),function(e){return a("td",{staticClass:"text-capitalize"},[t._v("\n                                    "+t._s(t.convertPaymentMethodOrBankToName(e,"banks"))+"\n                                ")])})],2)])]),t._v(" "),a("h5",{staticClass:"mt-5 mb-0"},[t._v("Payment Summary")]),t._v(" "),a("table",{staticClass:"table table-bordered"},[a("tbody",{staticClass:"text-center"},[a("tr",{staticClass:"table-separator"},[a("td",{staticClass:"text-left"},[t._v("Discount Detail (%)")]),t._v(" "),a("th",[t._v("\n                                    "+t._s(t._f("capitalize")(t.currentOrder.discount.name))+"\n                                    -\n                                    ("+t._s(t.currentOrder.discount.percentage_discount)+")\n                                ")]),t._v(" "),a("td",[t._v("Total Before Discount")]),t._v(" "),a("th",[t._v(t._s(t.$formatCurrency(t.$roundDownAmt(t.currentOrder.product_price))))]),t._v(" "),a("td",[t._v("Total Paid")]),t._v(" "),a("th",[t._v(t._s(t.paymentSummary.amountPaid))])]),t._v(" "),a("tr",[a("td",{staticClass:"text-left"},[t._v("Discount Amount")]),t._v(" "),a("th",[t._v(t._s(t.paymentSummary.discountAmount))]),t._v(" "),a("td",[t._v("Total After Discount")]),t._v(" "),a("th",[t._v(t._s(t.paymentSummary.discountedTotal))]),t._v(" "),a("td",[t._v("Total Debt")]),t._v(" "),a("th",[t._v(t._s(t.paymentSummary.outstandingDebt))])]),t._v(" "),a("tr",[a("td",{staticClass:"text-left"},[t._v("Down Payment")]),t._v(" "),a("th",[t._v(t._s(t.$formatCurrency(t.$roundDownAmt(t.currentOrder.down_payment))))]),t._v(" "),a("td",[t._v("Total Plus Default Fee")]),t._v(" "),a("th",[t._v(t._s(t.paymentSummary.totalPlusDefault))]),t._v(" "),a("td",[t._v("Default Fee")]),t._v(" "),a("th",[t._v(t._s(t.paymentSummary.defaultFee))])])])])])]),t._v(" "),t._m(6)]):t._e()])]),t._v(" "),a("div",{staticClass:"modal fade repayment",attrs:{id:"reminder_history"}},[a("div",{staticClass:"modal-dialog modal-lg",attrs:{role:"document"}},[a("div",{staticClass:"modal-content"},[t._m(7),t._v(" "),t.showModalContent?a("div",{staticClass:"modal-body"},[a("div",{staticClass:"table-responsive"},[t.currentOrder.reminders.length?a("table",{staticClass:"table table-bordered table-striped"},[t._m(8),t._v(" "),a("tbody",t._l(t.currentOrder.reminders,function(e,r){return a("tr",[a("th",[t._v(t._s(r+1))]),t._v(" "),a("td",[t._v(t._s(t.$dateTimeConvert(e.date)))]),t._v(" "),a("td",[t._v(t._s(e.type))]),t._v(" "),a("td",{domProps:{innerHTML:t._s(t.renderMessage(e))}}),t._v(" "),a("td",[t._v(t._s(e.user.full_name))])])}))]):a("div",{staticClass:"my-4 text-center"},[t._v("\n                            no reminders have been sent yet!\n                        ")])])]):t._e(),t._v(" "),t._m(9)])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"tab-pane active text-center"},[e("div",{staticClass:"mb-3 row attendance-item"},[e("div",{staticClass:"col d-flex light-heading align-items-center justify-content-center"},[this._v("\n                    No records found!\n                ")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"modal-header py-2"},[e("h6",{staticClass:"modal-title py-1"},[this._v("Purchase Order Summary")]),this._v(" "),e("a",{staticClass:"close py-1",attrs:{"aria-label":"Close","data-dismiss":"modal"}},[e("span",{staticClass:"modal-close text-danger",attrs:{"aria-hidden":"true"}},[e("i",{staticClass:"fas fa-times"})])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"modal-footer"},[e("a",{staticClass:"text-link mt-3 w-100",staticStyle:{"text-align":"right"},attrs:{"data-dismiss":"modal",href:"javascript:"}},[this._v("close dialogue")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"modal-header py-2"},[e("h6",{staticClass:"modal-title py-1"},[this._v("Customer Info. Summary")]),this._v(" "),e("a",{staticClass:"close py-1",attrs:{"aria-label":"Close","data-dismiss":"modal"}},[e("span",{staticClass:"modal-close text-danger",attrs:{"aria-hidden":"true"}},[e("i",{staticClass:"fas fa-times"})])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"modal-footer"},[e("a",{staticClass:"text-link mt-3 w-100 text-right",attrs:{"data-dismiss":"modal",href:"#"}},[this._v("\n                        close dialogue\n                    ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"close py-1",attrs:{"aria-label":"Close","data-dismiss":"modal"}},[e("span",{staticClass:"modal-close text-danger",attrs:{"aria-hidden":"true"}},[e("i",{staticClass:"fas fa-times"})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"modal-footer"},[e("a",{staticClass:"text-link mt-3 w-100",staticStyle:{"text-align":"right"},attrs:{"data-dismiss":"modal",href:"javascript:"}},[this._v("close dialogue")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"modal-header py-2"},[e("h6",{staticClass:"modal-title py-1"},[this._v("Reminder History")]),this._v(" "),e("a",{staticClass:"close py-1",attrs:{"aria-label":"Close","data-dismiss":"modal"}},[e("span",{staticClass:"modal-close text-danger",attrs:{"aria-hidden":"true"}},[e("i",{staticClass:"fas fa-times"})])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",[t._v("S/N")]),t._v(" "),a("th",[t._v("Date")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("SMS/Feedback")]),t._v(" "),a("th",[t._v("sender")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"modal-footer"},[e("a",{staticClass:"text-link mt-3 w-100",staticStyle:{"text-align":"right"},attrs:{"data-dismiss":"modal",href:"javascript:"}},[this._v("close dialogue")])])}]}},"7elN":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r,s=a("p/p5"),n=a("K23+"),i=(r=n)&&r.__esModule?r:{default:r},o=a("nv24");function l(t){if(Array.isArray(t)){for(var e=0,a=Array(t.length);e<t.length;e++)a[e]=t[e];return a}return Array.from(t)}e.default={props:{mode:null,index:null,startIndex:{default:1},dva_id:null,paySummary:null,repaymentLevel:null,order:{default:{}},isRepaymentValid:null},data:function(){return{selected:!1}},created:function(){o.EventBus.$on("selectOrderItem",this.toggleSelect)},methods:{logReminder:function(){var t=this;this.$LIPS(!0),delete this.reminder.order,delete this.reminder.canBeSelected,(0,s.post)("/api/reminder",{reminders:[this.reminder]}).then(function(e){return e.data.saved?t.logPromiseCall():t.$displayErrorMessage("Error Logging reminders!")})},logPromiseCall:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Reminder Logged!";this.promiseCall.date?(0,s.post)("/api/promise_call",this.promiseCall).then(function(a){return a.data.saved?t.done(e+" Promise call added!"):t.$displayErrorMessage("Error Logging promise call!")}):this.done(e)},done:function(t){this.$scrollToTop(),i.default.setSuccess(t,5e3),this.$emit("done")},isReminderSent:function(){var t=this,e=!0;if(this.order.reminders.length>0){var a=this.$getDate();this.order.reminders.forEach(function(r){var s=r.date.split(" "),n=s[0].split("-"),i=s[1].split(":"),o=[].concat(l(n),l(i)).map(function(t){return parseInt(t,10)});t.$getDate(new Date(Date.UTC.apply(Date,l(o))),!1)===a&&(e=!1)})}return e},toggleSelect:function(t){this.reminder.canBeSelected&&(this.selected=t,this.$emit("updateReminderList",this.reminder,t))}},computed:{reminder:function(){var t={customer_id:this.order.customer.id,order_id:this.order.id,repayment_level:this.repaymentLevel,dva_id:this.dva_id,type:this.mode,canBeSelected:this.isReminderSent()};return"sms"===this.mode&&(t.contacts=this.order.customer.telephone,t.sms_id=null),t},promiseCall:function(){return{order_id:this.order.id,user_id:this.dva_id,customer_id:this.order.customer.id,date:null}},getFinancialStatus:function(){return this.isRepaymentValid?"Paid: "+this.paySummary.amountPaid+" | Debt: "+this.paySummary.outstandingDebt:"no detail!"}}}},AS3D:function(t,e,a){var r=a("zLlz");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);a("rjj0")("6cd2dcf8",r,!0,{})},CvDN:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mb-3 row attendance-item"},[a("div",{staticClass:"col-12 col-xs-2 col-md col-lg d-flex align-items-center",staticStyle:{"max-width":"120px"}},["normal-list"===t.mode?a("span"):t.reminder.canBeSelected&&["collection","recovery","call","external-recovery"].includes(t.mode)?a("span",{staticClass:"user mx-auto waiting-reminder",on:{click:t.logReminder}},[a("i",{staticClass:"fas fa-hourglass-start"})]):t.reminder.canBeSelected&&"sms"===t.mode?a("div",{staticClass:"d-flex align-items-center"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.selected,expression:"selected"}],staticClass:"form-check-input my-0 mx-4 float-left position-relative ",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.selected)?t._i(t.selected,null)>-1:t.selected},on:{click:function(e){t.toggleSelect(!t.selected)},change:function(e){var a=t.selected,r=e.target,s=!!r.checked;if(Array.isArray(a)){var n=t._i(a,null);r.checked?n<0&&(t.selected=a.concat([null])):n>-1&&(t.selected=a.slice(0,n).concat(a.slice(n+1)))}else t.selected=s}}})]):a("span",{staticClass:"user mx-auto sent-reminder"},[a("i",{staticClass:"fas fa-check"})]),t._v(" "),a("span",{staticClass:"user mx-auto"},[t._v(t._s(t.startIndex+t.index))])]),t._v(" "),a("div",{staticClass:"col-12 col-xs-2 col-md col-lg user-name d-flex align-items-center justify-content-center"},[t._v("\n        "+t._s(t.$vnode.key)+"\n    ")]),t._v(" "),a("div",{staticClass:"col-12 col-xs-2 col-md col-lg d-flex align-items-center justify-content-center",attrs:{"data-hoverable":"true"},on:{click:function(e){t.$emit("display",t.order,"purchase_order")}}},[t._v("\n        "+t._s(t.order.order_date)+"\n    ")]),t._v(" "),a("div",{staticClass:"col-12 col-xs-3 col-md col-lg d-flex align-items-center justify-content-center",attrs:{"data-hoverable":"true"},on:{click:function(e){t.$emit("display",t.order,"customer_info")}}},[t._v("\n        ID: "+t._s(t.order.customer.id)+" - "+t._s(t._f("capitalize")(t.order.customer.employment_status))+"\n    ")]),t._v(" "),a("div",{staticClass:"col-12 col-xs-2 col-md col-lg d-flex align-items-center justify-content-center",attrs:{"data-hoverable":"true"},on:{click:function(e){t.$emit("display",t.order,"repayment")}}},[t._v("\n        "+t._s(t.getFinancialStatus)+"\n    ")]),t._v(" "),a("div",{staticClass:"col-12 col-xs-2 col-md col-lg d-flex align-items-center justify-content-center",attrs:{"data-hoverable":"true"},on:{click:function(e){t.$emit("display",t.order,"reminder_history")}}},[t._v("\n        "+t._s(t.order.reminders.length)+" reminder(s) sent\n    ")]),t._v(" "),["collection","recovery","external-recovery"].includes(t.mode)?a("div",{staticClass:"col-12 col-xs-2 col-md col-lg d-flex align-items-center attendance-create"},[a("span",{staticClass:"present"},[a("span",{staticClass:"radio w-50 pr-3 mb-0 float-left"},[a("input",{attrs:{type:"radio",value:"yes",id:"present"+t.index,name:"isPresent"+t.index}}),t._v(" "),a("label",{attrs:{for:"present"+t.index}},[t._v("yes")])]),t._v(" "),a("span",{staticClass:"radio w-50 pl-3 mb-0 float-left"},[a("input",{attrs:{type:"radio",value:"no",id:"absent"+t.index,name:"isPresent"+t.index}}),t._v(" "),a("label",{attrs:{for:"absent"+t.index}},[t._v("no")])])])]):t._e(),t._v(" "),["collection","recovery","call","external-recovery"].includes(t.mode)?a("div",{staticClass:"col-12 col-xs-2 col-md col-lg d-flex align-items-center"},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.reminder.feedback,expression:"reminder.feedback"}],staticClass:"form-control",attrs:{rows:"1",disabled:!t.reminder.canBeSelected},domProps:{value:t.reminder.feedback},on:{input:function(e){e.target.composing||t.$set(t.reminder,"feedback",e.target.value)}}})]):t._e(),t._v(" "),"call"===t.mode?a("div",{staticClass:"col-12 col-xs-2 col-md col-lg d-flex align-items-center"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.promiseCall.date,expression:"promiseCall.date"}],staticClass:"form-control",attrs:{type:"date",disabled:!t.reminder.canBeSelected},domProps:{value:t.promiseCall.date},on:{input:function(e){e.target.composing||t.$set(t.promiseCall,"date",e.target.value)}}})]):t._e()])},staticRenderFns:[]}},EJ7O:function(t,e,a){var r=a("VU/8")(a("oKx2"),a("+O4B"),!1,null,null,null);t.exports=r.exports},TZKk:function(t,e,a){var r=a("VU/8")(a("7elN"),a("CvDN"),!1,null,null,null);t.exports=r.exports},XPj8:function(t,e,a){var r=a("VU/8")(a("aSpy"),a("4R38"),!1,function(t){a("AS3D")},"data-v-60774218",null);t.exports=r.exports},aSpy:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(t[r]=a[r])}return t},s=d(a("I3G/")),n=d(a("K23+")),i=a("m2tk"),o=a("p/p5"),l=d(a("TZKk"));function d(t){return t&&t.__esModule?t:{default:t}}e.default={components:{OrderItem:l.default},props:{list:{default:null},mode:null,preLoadedOrder:null,startIndex:null},watch:{list:function(t){this.fetchList(t)},preLoadedOrder:function(t){this.prepareForm(t)}},data:function(){return{orders:{},show:!1,banks:null,reminder:[],currentOrder:{},paymentSummary:null,payment_methods:null,showModalContent:!1}},methods:{prepareForm:function(t){var e=this;this.show=!1,this.showModalContent=!1,this.banks=t.banks,this.dva_id=t.dva_id,this.payment_methods=t.payment_methods,this.orders=t.orders.filter(function(a){var r=e.getCountAndRepaymentData(a).repaymentData,s=e.amortizationPlan(a),n=s.count,i=s.interval;return(!(!e.$store.getters.auth("DVALead")&&!e.$store.getters.auth("FSLLead"))||parseInt(a.store_product.store_name)===t.branch)&&function(){if([8,1].includes(e.list)||"normal-list"===e.mode)return!0;var t=void 0,s=void 0,o=[],l=new Date,d=1===l.getDay()||[9,10,11,12,13,14].includes(e.list)?3:1;if(!r)return!1;for(var c=1;c<n+1;c++){var u=e.$getColumn(c);if(!r[u+"_pay"]){t=e.generateDates({startDate:a.order_date,interval:i,count:n})[c-1];break}}switch(e.list){case 2:s=7;break;case 3:s=3;break;case 4:s=0;break;case 5:s=1;break;case 6:s=5;break;case 7:s=31;break;case 9:s=38;break;case 10:s=45;break;case 11:s=61;break;case 12:s=75;break;case 13:s=90;break;case 14:s=121}if(["collection","recovery","call","external-recovery"].includes(e.mode))for(var m=0;m<d;m++)o.push(e.$getDate(l.addDays(-(m+s))));if("sms"===e.mode)for(var v=0;v<d;v++)o.push(e.$getDate(l.addDays(v+s)));return o.includes(t)}()}),this.orders.length&&(this.show=!0),this.$LIPS(!1)},isOrderFormal:function(t){return["formal","salaried"].includes(t.customer.employment_status.toLowerCase())},generateDates:function(t){for(var e=t.startDate,a=t.interval,r=t.count,s=[],n=0;n<r;n++){var i=new Date(e).addDays((n+1)*a),o=this.$getDate(i);s.push(o)}return s},renderMessage:function(t){return t.sms?t.sms.message.replace(/%0a/g,"</br>"):t.feedback},fetchList:function(t){var e,a=this;this.$LIPS(!0),(0,o.get)((e={query:{list:t}},"/api/reminder/create?list="+e.query.list)).then(function(e){var r=e.data;if(8===t){var s=[];r.orders.forEach(function(t){return s.push(t.order)}),r.orders=s}a.prepareForm(r)})},isPaymentDue:function(t){return new Date>new Date(t)},getDiscount:function(t){var e=t.discount;return e.name+" ("+e.percentage_discount+")"},isRepaymentValid:function(t){return!(!t.repayment_formal&&!t.repayment_informal)},displayDetails:function(t,e){return this.paymentSummary=this.calcPaymentSummary(t),s.default.set(this.$data,"currentOrder",t),this.showModalContent=!0,$("#"+e).modal("toggle")},getCountAndRepaymentData:function(t){var e={count:this.amortizationPlan(t).count};return null!=t.repayment_formal&&(e.repaymentData=t.repayment_formal),null!=t.repayment_informal&&(e.repaymentData=t.repayment_informal),e},calcPaymentSummary:function(t){var e=this,a=[],r=function(t){return e.$formatCurrency(t)},s=this.$roundDownAmt(parseInt(t.down_payment)),n=this.amortizationPlan(t),i=n.count,o=n.interval,l=this.getCountAndRepaymentData(t).repaymentData;if(this.generateDates({startDate:t.order_date,interval:o,count:i}).forEach(function(t,r){return e.isPaymentDue(e.$getDate(new Date(t).addDays(5)))&&a.push({dueDate:t,actualPayDate:l[e.$getColumn(r)+"_date"]})}),l)for(var d=1;d<i+1;d++)s+=this.$roundDownAmt(l[this.$getColumn(d)+"_pay"]);else s=0;var c=t.discount.percentage_discount,u=6===i?.5:1,m=t.repayment_amount*u*(c>0?5===c?1:2:0);m=this.$roundDownAmt(m);var v=500*a.length,_=this.$roundDownAmt(t.product_price-m);return{amountPaid:r(s),discountAmount:r(this.$roundDownAmt(m)),outstandingDebt:r(this.$roundDownAmt(parseInt(t.product_price)-s)),discountedTotal:r(_),defaultFee:r(v),totalPlusDefault:r(_+v)}},getRepayment:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(!this.isRepaymentValid(t))return null;var a=[],r=this.getCountAndRepaymentData(t).repaymentData,s=this.amortizationPlan(t),n=s.interval,i=s.count;if(null===e)return this.generateDates({startDate:t.order_date,interval:n,count:i});if("repayments"===e)return new Array(i).fill(this.$roundDownAmt(t.repayment_amount),0,i);for(var o=1;o<i+1;o++)a.push(r[this.$getColumn(o)+e]);return a},getPaymentStatusClasses:function(t){if(!this.isRepaymentValid(t))return null;for(var e=[],a=this.getCountAndRepaymentData(t).repaymentData,r=this.amortizationPlan(t).count,s=this.getRepayment(t),n=1;n<r+1;n++){var i={class:null,icon:null},o=this.$getColumn(n),l=this.isPaymentDue(s[n-1]),d=parseInt(a[o+"_pay"]);d?(i.class="paid",i.icon="fa-check"):l&&!d?(i.class="missed",i.icon="fa-times"):l||(i.class="pending",i.icon="fa-hourglass-start"),e.push(i)}return e},getRepaymentLevel:function(t){if(!this.isRepaymentValid(t))return 0;for(var e=0,a=this.amortizationPlan(t).count,r=this.getCountAndRepaymentData(t).repaymentData,s=1;s<a+1;s++)r[this.$getColumn(s)+"_pay"]>0&&e++;return e+"/"+a},convertPaymentMethodOrBankToName:function(t,e){return t?this.$data[e].find(function(e){return e.id===t}).name:null},updateReminder:function(t,e){if(e)this.reminder.push(t);else{var a=void 0;this.reminder.forEach(function(e,r){return e.order_id===t.order_id&&(a=r)}),this.reminder.splice(a,1)}},processSelected:function(){var t=this;if(this.reminder.length){this.$LIPS(!0);var e=this.reminder.map(function(e){var a=JSON.parse(JSON.stringify(e));return a.order=t.orders.find(function(t){return t.id===e.order_id}),a.message=t.generateCustomMessage(a.order),a});this.sendSMSReminders(e)}else this.$displayErrorMessage("please select at least one!")},sendSMSReminders:function(t){var e=this,a=[];t.forEach(function(r,s){var n=new i.Message(r.message,r.contacts,!1,r.dva_id);n.send(function(r){200===r.status&&(delete n.logToDB,a.push(n)),s+1===t.length&&e.logSentMessages(a,t)})})},logSentMessages:function(t,e){var a=this;t?(0,o.post)("/api/message",{messages:t,bulk:!0}).then(function(t){var r=t.data,s=r.sentAndLogged,n=r.ids;s?a.logSentReminders(e,n):a.$displayErrorMessage("Error Logging sent sms details!")}):this.$displayErrorMessage("Error sending messages!")},logSentReminders:function(t,e){var a=this;e.reverse();var r=JSON.parse(JSON.stringify(t));r.forEach(function(t,a){t.sms_id=e[a],delete t.message,delete t.order,delete t.contacts,delete t.canBeSelected}),e.length>0?(0,o.post)("/api/reminder",{reminders:r}).then(function(t){t.data.saved?(n.default.setSuccess("Reminders have been sent successfully!",5e4),a.fetchList(a.list)):a.$displayErrorMessage("Error sending reminders!"),a.$scrollToTop()}):this.$displayErrorMessage("Error logging sent messages!")},generateCustomMessage:function(t){var e=this,a=t.customer,s=t.store_product,n=t.order_date,i=t.repayment_amount,o=s.product_name,l=a.first_name,d=a.last_name,c=void 0,u=r({startDate:n},this.amortizationPlan(t)),m=this.generateDates(u),v=this.getRepaymentLevel(t).split("/")[0];return 1===this.list?(c="Hello "+l+" "+d+", thanks for patronizing us. The following is the breakdown of the repayment plan for the purchase of "+o+":%0a",m.length>0&&m.forEach(function(t,a){return c+=e.$getColumn(a+1)+": "+t+" => "+e.$formatCurrency(e.$roundDownAmt(i))+"%0a"})):c="Hello "+l+" "+d+", This is to remind you that your "+this.$getColumn(parseInt(v)+1)+" repayment of "+this.$formatCurrency(this.$roundDownAmt(i))+" for "+o+" will be due on "+m[v]+". we will be expecting you.",c+"Please remember to pay on time to avoid late fees and other penalties.%0aThank you."},amortizationPlan:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.currentOrder,e=void 0,a=void 0;return new Date(t.order_date)<=new Date("2019-07-07")?(null!=t.repayment_formal&&(e=28,a=6),null!=t.repayment_informal&&(e=14,a=12)):this.isBankDraftAvailable(t)&&this.isOrderFormal(t)?(e=28,a=6):(e=14,a=12),{interval:e,count:a}},isBankDraftAvailable:function(){return!1},repaymentCaption:function(t){for(var e=this.amortizationPlan(t).count,a=[],r=1;r<=e;r++){for(var s=this.$getColumn(r).split(""),n=[],i=1;i<=2;i++)n.unshift(s.pop());a.push("<td>"+s.join("")+"<sup>"+n.join("")+"</sup></td>")}return a}},mounted:function(){var t=this;"normal-list"!=this.mode?this.fetchList(this.list):this.prepareForm(this.preLoadedOrder),$(document).on("hidden.bs.modal",".modal",function(){t.currentOrder=null,t.showModalContent=!1})}}},m2tk:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Message=void 0;var r=function(){function t(t,e){for(var a=0;a<e.length;a++){var r=e[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,a,r){return a&&t(e.prototype,a),r&&t(e,r),e}}(),s=a("p/p5");e.Message=function(){function t(e,a){var r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.user_id=s,this.message=e,this.logToDB=r,this.contacts=a.split(",").filter(function(t){return/\S/.test(t)}).map(function(t){return"234"+t.trim().substr(1)}).join(","),this.setPages(),this.setContactCount()}return r(t,[{key:"setContactCount",value:function(){this.contact_count=this.contacts.split(",").length}},{key:"setPages",value:function(){this.pages=Math.ceil(this.message.length/160)}},{key:"send",value:function(t){var e=this;(0,s.get)("/api/message/create?to="+this.contacts+"&message="+this.message).then(function(a){return 200===a.status&&e.logToDB&&(delete e.logToDB,(0,s.post)("/api/message",e)),!!t&&t(a)}).catch(function(e){return!!t&&t(e)})}}]),t}()},nv24:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.EventBus=void 0;var r,s=a("I3G/"),n=(r=s)&&r.__esModule?r:{default:r};e.EventBus=new n.default},oKx2:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{title:"",buttonTitle:null,to:null}}},rjj0:function(t,e,a){var r="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!r)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var s=a("tTVk"),n={},i=r&&(document.head||document.getElementsByTagName("head")[0]),o=null,l=0,d=!1,c=function(){},u=null,m="data-vue-ssr-id",v="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function _(t){for(var e=0;e<t.length;e++){var a=t[e],r=n[a.id];if(r){r.refs++;for(var s=0;s<r.parts.length;s++)r.parts[s](a.parts[s]);for(;s<a.parts.length;s++)r.parts.push(f(a.parts[s]));r.parts.length>a.parts.length&&(r.parts.length=a.parts.length)}else{var i=[];for(s=0;s<a.parts.length;s++)i.push(f(a.parts[s]));n[a.id]={id:a.id,refs:1,parts:i}}}}function p(){var t=document.createElement("style");return t.type="text/css",i.appendChild(t),t}function f(t){var e,a,r=document.querySelector("style["+m+'~="'+t.id+'"]');if(r){if(d)return c;r.parentNode.removeChild(r)}if(v){var s=l++;r=o||(o=p()),e=y.bind(null,r,s,!1),a=y.bind(null,r,s,!0)}else r=p(),e=function(t,e){var a=e.css,r=e.media,s=e.sourceMap;r&&t.setAttribute("media",r);u.ssrId&&t.setAttribute(m,e.id);s&&(a+="\n/*# sourceURL="+s.sources[0]+" */",a+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */");if(t.styleSheet)t.styleSheet.cssText=a;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(a))}}.bind(null,r),a=function(){r.parentNode.removeChild(r)};return e(t),function(r){if(r){if(r.css===t.css&&r.media===t.media&&r.sourceMap===t.sourceMap)return;e(t=r)}else a()}}t.exports=function(t,e,a,r){d=a,u=r||{};var i=s(t,e);return _(i),function(e){for(var a=[],r=0;r<i.length;r++){var o=i[r];(l=n[o.id]).refs--,a.push(l)}e?_(i=s(t,e)):i=[];for(r=0;r<a.length;r++){var l;if(0===(l=a[r]).refs){for(var d=0;d<l.parts.length;d++)l.parts[d]();delete n[l.id]}}}};var h,g=(h=[],function(t,e){return h[t]=e,h.filter(Boolean).join("\n")});function y(t,e,a,r){var s=a?"":r.css;if(t.styleSheet)t.styleSheet.cssText=g(e,s);else{var n=document.createTextNode(s),i=t.childNodes;i[e]&&t.removeChild(i[e]),i.length?t.insertBefore(n,i[e]):t.appendChild(n)}}},tTVk:function(t,e){t.exports=function(t,e){for(var a=[],r={},s=0;s<e.length;s++){var n=e[s],i=n[0],o={id:t+":"+s,css:n[1],media:n[2],sourceMap:n[3]};r[i]?r[i].parts.push(o):a.push(r[i]={id:i,parts:[o]})}return a}},wwaW:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=a("p/p5"),s=o(a("K23+")),n=o(a("XPj8")),i=o(a("EJ7O"));function o(t){return t&&t.__esModule?t:{default:t}}e.default={components:{CustomHeader:i.default,Order:n.default},data:function(){return{branch_id:"",page_size:10,date_from:null,date_to:null,page:1,filters:[{name:"branch",model:"branch_id"},{name:"date from",model:"date_from"},{name:"date to",model:"date_to"}],orders:null,response:{},show:!1,headings:["Order Number","Order Summary","Customer Info Summary","Repayment Summary","Reminder History"]}},methods:{fetchData:function(){var t=this;this.$scrollToTop(),this.$LIPS(!0);var e=this.$data,a=e.page,n=e.page_size,i=e.date_from,o=e.date_to,l=e.branch_id;(0,r.get)("/api/reminder/create"+(a?"?page="+a:"")+(o?"&date_to="+o:"")+(n?"&page_size="+n:"")+(l?"&branch_id="+l:"")+(i?"&date_from="+i:"")).then(function(e){var a=e.data;return t.prepareForm(a)}).catch(function(){return s.default.setError("Error Preparing form")})},next:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;this.orders.next_page_url&&(this.page=t||this.page+1,this.fetchData())},prev:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;this.orders.prev_page_url&&(this.page=t||this.page+1,this.fetchData())},prepareForm:function(t){this.show=!1,this.orders=null,this.response={},this.orders=t.orders;var e=t.orders.data,a=t.payment_methods,r=t.banks,s=t.dva_id,n=t.branch;this.response={payment_methods:a,banks:r,dva_id:s,branch:n,orders:e},this.$scrollToTop(),this.$LIPS(!1),this.show=!0}},created:function(){this.$prepareBranches(),this.fetchData()}}},xPCN:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("transition",{attrs:{name:"fade"}},[a("div",{staticClass:"attendance",attrs:{id:"reminder"}},[a("custom-header",{attrs:{title:"Order Lists"}}),t._v(" "),a("div",{staticClass:"mt-5 row attendance-head"},t._l(t.filters,function(e){var r=e.name;return a("div",{staticClass:"col-4 col-sm-3"},[a("div",{staticClass:"row"},[a("div",{staticClass:"light-heading"},[a("span",{staticClass:"d-none d-sm-inline"},[t._v("Select")]),t._v(" "+t._s(t._f("capitalize")(r))+"\n                    ")])])])})),t._v(" "),a("div",{staticClass:"mt-2 mt-lg-3 row attendance-head attendance-view"},[t._l(t.filters,function(e){var r=e.name,s=e.model;return a("div",{staticClass:"col-4 col-sm-3"},[a("div",{staticClass:"row"},["branch"===r?a("select",{directives:[{name:"model",rawName:"v-model",value:t.$data[s],expression:"$data[model]"}],staticClass:"custom-select",on:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;t.fetchData()},change:function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.$set(t.$data,s,e.target.multiple?a:a[0])}}},[a("option",{attrs:{disabled:"",selected:"",value:""}},[t._v(t._s(t._f("capitalize")(r)))]),t._v(" "),t._l(t.$store.getters.getBranches,function(e){var r=e.name,s=e.id;return a("option",{domProps:{value:s}},[t._v("\n                            "+t._s(t._f("capitalize")(r))+"\n                        ")])})],2):a("div",{staticClass:"form-group w-100"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.$data[s],expression:"$data[model]"}],staticClass:"form-control",attrs:{type:"date"},domProps:{value:t.$data[s]},on:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;t.fetchData()},input:function(e){e.target.composing||t.$set(t.$data,s,e.target.value)}}})])])])}),t._v(" "),a("div",{staticClass:"col-12 col-sm-3"},[a("div",{staticClass:"row d-flex justify-content-end"},[a("button",{staticClass:"btn btn-primary bg-default mt-0 myBtn",on:{click:function(e){t.fetchData()}}},[t._v("Apply Filter")])])])],2),t._v(" "),a("div",{staticClass:"mt-5 mb-3 attendance-head"},[a("div",{staticClass:"w-100 my-5 mx-0 hr"}),t._v(" "),a("div",{staticClass:"row px-4 pt-3 pb-4 text-center"},[a("div",{staticClass:"col light-heading",staticStyle:{"max-width":"120px"}},[t._v("S/N")]),t._v(" "),t._l(t.headings,function(e){return a("div",{staticClass:"col light-heading"},[t._v(t._s(e))])})],2)]),t._v(" "),t.show?a("order",{attrs:{"start-index":t.orders.from,"pre-loaded-order":t.response,mode:"normal-list"}}):t._e(),t._v(" "),t.show?a("div",{staticClass:"mt-1 attendance-body"},[a("div",{staticClass:"mb-5 px-0 row align-items-center"},[a("div",{staticClass:"w-100 mb-4 mt-5 mx-0 hr"}),t._v(" "),a("div",{staticClass:"clearfix w-100 mt-4 d-flex bd-highlight"},[a("div",{staticClass:"col d-flex justify-content-start align-items-center pl-0"},[a("strong",{staticClass:"light-heading float-left"},[t._v("\n                            Displaying: "+t._s(t.orders.from)+" - "+t._s(t.orders.to)+" of "+t._s(t.orders.total)+"\n                        ")])]),t._v(" "),a("div",{staticClass:"col d-flex justify-content-center align-items-center"},[a("div",{staticClass:"mr-5"},[a("span",{staticClass:"d-inline light-heading mr-2"},[t._v("set current Page")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.page,expression:"page"}],staticClass:"d-inline form-control ",staticStyle:{"max-width":"50px"},attrs:{type:"number"},domProps:{value:t.page},on:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;t.fetchData()},input:function(e){e.target.composing||(t.page=e.target.value)}}})]),t._v(" "),a("div",{staticClass:"ml-5"},[a("span",{staticClass:"d-inline light-heading mr-2"},[t._v("set page-size")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.page_size,expression:"page_size"}],staticClass:"d-inline form-control",staticStyle:{"max-width":"50px"},attrs:{type:"number"},domProps:{value:t.page_size},on:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;t.fetchData()},input:function(e){e.target.composing||(t.page_size=e.target.value)}}})])]),t._v(" "),a("nav",{staticClass:"col d-flex justify-content-end align-items-center pr-0"},[a("ul",{staticClass:"pagination pagination-lg mb-0"},[a("li",{staticClass:"page-item",class:{disabled:!t.orders.first_page_url}},[a("a",{staticClass:"page-link",attrs:{href:"javascript:"},on:{click:function(e){t.prev(1)}}},[t._v("First")])]),t._v(" "),a("li",{staticClass:"page-item",class:{disabled:!t.orders.prev_page_url}},[a("a",{staticClass:"page-link",attrs:{href:"javascript:"},on:{click:function(e){t.prev()}}},[t._v("Next")])]),t._v(" "),a("li",{staticClass:"page-item"},[a("span",{staticClass:"page-link"},[t._v("Current Page: "+t._s(t.orders.current_page))])]),t._v(" "),a("li",{staticClass:"page-item",class:{disabled:!t.orders.next_page_url}},[a("a",{staticClass:"page-link",attrs:{href:"javascript:"},on:{click:function(e){t.next()}}},[t._v("Next")])]),t._v(" "),a("li",{staticClass:"page-item",class:{disabled:!t.orders.last_page_url}},[a("a",{staticClass:"page-link",attrs:{href:"javascript:"},on:{click:function(e){t.next(t.orders.last_page)}}},[t._v("Last")])])])])])])]):t._e()],1)])},staticRenderFns:[]}},yDPG:function(t,e,a){var r=a("VU/8")(a("wwaW"),a("xPCN"),!1,null,null,null);t.exports=r.exports},zLlz:function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,".table-separator[data-v-60774218]{border-top:2px solid #dee1e4}",""])}});
>>>>>>> 896a1818948e76f90b06f3a42ed60dfef98fa861
=======
webpackJsonp([2],{"+O4B":function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mt-5 attendance-head"},[a("div",{staticClass:"mb-5 row align-items-center"},[a("div",{staticClass:"col-12 title-con"},[a("span",{staticClass:"title"},[t._v(t._s(t._f("capitalize")(t.title)))]),t._v(" "),t.to?a("div",{staticClass:"row justify-content-end"},[a("router-link",{staticClass:"text-link mt-3",attrs:{to:t.to}},[t._v(t._s(t.buttonTitle))])],1):t._e()])])])},staticRenderFns:[]}},"4R38":function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.show?a("div",{staticClass:"tab-content mt-1 attendance-body"},[a("div",{staticClass:"tab-pane active text-center",attrs:{id:"reminder-panel",role:"tabpanel"}},t._l(t.orders,function(e,r){return a("order-item",{key:e.id,attrs:{index:r,"start-index":t.startIndex,order:e,dva_id:t.dva_id,"is-repayment-valid":t.isRepaymentValid(e),"pay-summary":t.calcPaymentSummary(e),"repayment-level":t.getRepaymentLevel(e),mode:t.mode},on:{done:function(e){t.fetchList(t.list)},updateReminderList:t.updateReminder,display:t.displayDetails}})})),t._v(" "),"normal-list"!=t.mode?a("div",{staticClass:"w-100 my-5 mx-0 hr"}):t._e()]):a("div",{staticClass:"tab-content mt-1 attendance-body"},[t._m(0)]),t._v(" "),t.show&&"sms"===t.mode?a("div",{staticClass:"mt-1 attendance-body"},[a("div",{staticClass:"mb-5 px-0 row align-items-center"},[a("div",{staticClass:"clearfix d-flex justify-content-end w-100"},[a("button",{staticClass:"btn bg-default",attrs:{disabled:t.$isProcessing},on:{click:t.processSelected}},[t._v("\n                    Send Reminder(s) "),a("i",{staticClass:"far fa-paper-plane ml-1"})])])])]):t._e(),t._v(" "),a("div",{staticClass:"modal fade",attrs:{id:"purchase_order"}},[a("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[a("div",{staticClass:"modal-content"},[t._m(1),t._v(" "),t.showModalContent?a("div",{staticClass:"modal-body"},[a("div",{staticClass:"table-responsive"},[a("table",{staticClass:"table table-bordered table-striped"},[a("tbody",[a("tr",[a("th",[t._v("Order ID")]),t._v(" "),a("td",[t._v(t._s(t.currentOrder.id))])]),t._v(" "),a("tr",[a("th",[t._v("Order date")]),t._v(" "),a("td",[t._v(t._s(t.currentOrder.order_date))])]),t._v(" "),a("tr",[a("th",[t._v("Product")]),t._v(" "),a("td",[t._v(t._s(t.currentOrder.store_product.product_name))])]),t._v(" "),a("tr",[a("th",[t._v("Repayment")]),t._v(" "),a("td",[t._v(t._s(t.$formatCurrency(t.currentOrder.repayment_amount)))])]),t._v(" "),a("tr",[a("th",[t._v("Down Payment")]),t._v(" "),a("td",[t._v(t._s(t.$formatCurrency(t.currentOrder.down_payment)))])]),t._v(" "),a("tr",[a("th",[t._v("Discount (%)")]),t._v(" "),a("td",[t._v(t._s(t._f("capitalize")(t.getDiscount(t.currentOrder))))])]),t._v(" "),a("tr",[a("th",[t._v("Sale Type")]),t._v(" "),a("td",[t._v(t._s(t._f("capitalize")(t.currentOrder.sales_type.name)))])]),t._v(" "),a("tr",[a("th",[t._v("Total amount to Pay")]),t._v(" "),a("td",[t._v(t._s(t.$formatCurrency(t.currentOrder.product_price)))])]),t._v(" "),a("tr",[a("th",[t._v("Processed by")]),t._v(" "),a("td",[t._v(t._s(t.currentOrder.floor_agent?t.currentOrder.floor_agent.full_name:null))])])])])])]):t._e(),t._v(" "),t._m(2)])])]),t._v(" "),a("div",{staticClass:"modal fade",attrs:{id:"customer_info"}},[a("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[a("div",{staticClass:"modal-content"},[t._m(3),t._v(" "),t.showModalContent?a("div",{staticClass:"modal-body"},[a("div",{staticClass:"table-responsive"},[a("table",{staticClass:"table table-bordered table-striped"},[a("tbody",[a("tr",[a("th",[t._v("Customer ID")]),t._v(" "),a("td",[t._v(t._s(t.currentOrder.customer.id))])]),t._v(" "),a("tr",[a("th",[t._v("Full Name")]),t._v(" "),a("td",[t._v(t._s(t.$getCustomerFullName(t.currentOrder.customer)))])]),t._v(" "),a("tr",[a("th",[t._v("Address")]),t._v(" "),a("td",[t._v(t._s(t.$getCustomerAddress(t.currentOrder.customer)))])]),t._v(" "),a("tr",[a("th",[t._v("Phone")]),t._v(" "),a("td",[t._v(t._s(t.currentOrder.customer.telephone))])]),t._v(" "),a("tr",[a("th",[t._v("Branch")]),t._v(" "),a("td",[t._v(t._s(t.currentOrder.customer.branch.name))])]),t._v(" "),a("tr",[a("th",[t._v("Category")]),t._v(" "),a("td",[t._v(t._s(t.currentOrder.customer.employment_status))])]),t._v(" "),a("tr",[a("th",[t._v("Work guarantor name")]),t._v(" "),a("td",[t._v(t._s(t.currentOrder.customer.work_guarantor_first_name+" "+t.currentOrder.customer.work_guarantor_last_name+" - "+t.currentOrder.customer.work_guarantor_relationship)+"\n                                ")])]),t._v(" "),a("tr",[a("th",[t._v("Work guarantor phone")]),t._v(" "),a("td",[t._v(t._s(t.currentOrder.customer.work_guarantor_telno))])]),t._v(" "),a("tr",[a("th",[t._v("Personal guarantor name")]),t._v(" "),a("td",[t._v(t._s(t.currentOrder.customer.personal_guarantor_first_name+" "+t.currentOrder.customer.personal_guarantor_last_name+" - "+t.currentOrder.customer.personal_guarantor_relationship)+"\n                                ")])]),t._v(" "),a("tr",[a("th",[t._v("Personal guarantor phone")]),t._v(" "),a("td",[t._v(t._s(t.currentOrder.customer.personal_guarantor_telno))])]),t._v(" "),a("tr",[a("th",[t._v("Verified by")]),t._v(" "),a("td",[a("router-link",{staticClass:"text-link",attrs:{target:"_blank",to:"/dva/verification?id="+t.currentOrder.customer.id}},[t._v("\n                                        click here to see verifications status\n                                    ")])],1)])])])])]):t._e(),t._v(" "),t._m(4)])])]),t._v(" "),a("div",{staticClass:"modal fade repayment",attrs:{id:"repayment"}},[a("div",{staticClass:"modal-dialog modal-xl",attrs:{role:"document"}},[t.showModalContent?a("div",{staticClass:"modal-content"},[a("div",{staticClass:"modal-header py-2"},[a("h6",{staticClass:"modal-title py-1"},[t._v("\n                        Repayment Plan/Summary - "+t._s(t._f("capitalize")(t.currentOrder.customer.employment_status))+"\n                    ")]),t._v(" "),t._m(5)]),t._v(" "),a("div",{staticClass:"modal-body"},[a("div",{staticClass:"table-responsive"},[a("h5",{staticClass:"mt-3 mb-0"},[t._v("Amortization Schedule")]),t._v(" "),a("table",{staticClass:"table table-bordered"},[a("tbody",{staticClass:"text-center"},[a("tr",[a("th",[t._v("Repayment")]),t._v(" "),t._l(t.repaymentCaption(t.currentOrder),function(e){return a("td",{domProps:{innerHTML:t._s(e)}})})],2),t._v(" "),a("tr",{staticClass:"table-separator"},[a("th",[t._v("Due Date")]),t._v(" "),t._l(t.getRepayment(t.currentOrder),function(e){return a("td",[t._v(t._s(e))])})],2),t._v(" "),a("tr",[a("th",[t._v("Actual Pay Day")]),t._v(" "),t._l(t.getRepayment(t.currentOrder,"_date"),function(e){return a("td",[t._v(t._s(e))])})],2),t._v(" "),a("tr",{staticClass:"table-separator"},[a("th",[t._v("Status")]),t._v(" "),t._l(t.getPaymentStatusClasses(t.currentOrder),function(t){return a("td",{class:t.class},[a("i",{staticClass:"fas",class:t.icon})])})],2),t._v(" "),a("tr",{staticClass:"table-separator"},[a("th",[t._v("Repayment Amount")]),t._v(" "),t._l(t.getRepayment(t.currentOrder,"repayments"),function(e){return a("td",[t._v("\n                                    "+t._s(t.$formatCurrency(e))+"\n                                ")])})],2),t._v(" "),a("tr",[a("th",[t._v("Actual Amount Paid")]),t._v(" "),t._l(t.getRepayment(t.currentOrder,"_pay"),function(e){return a("td",[t._v("\n                                    "+t._s(t.$formatCurrency(e))+"\n                                ")])})],2),t._v(" "),a("tr",{staticClass:"table-separator"},[a("th",[t._v("Payment Method")]),t._v(" "),t._l(t.getRepayment(t.currentOrder,"_payment_method"),function(e){return a("td",{staticClass:"text-capitalize"},[t._v("\n                                    "+t._s(t.convertPaymentMethodOrBankToName(e,"payment_methods"))+"\n                                ")])})],2),t._v(" "),a("tr",[a("th",[t._v("Bank")]),t._v(" "),t._l(t.getRepayment(t.currentOrder,"_payment_bank"),function(e){return a("td",{staticClass:"text-capitalize"},[t._v("\n                                    "+t._s(t.convertPaymentMethodOrBankToName(e,"banks"))+"\n                                ")])})],2)])]),t._v(" "),a("h5",{staticClass:"mt-5 mb-0"},[t._v("Payment Summary")]),t._v(" "),a("table",{staticClass:"table table-bordered"},[a("tbody",{staticClass:"text-center"},[a("tr",{staticClass:"table-separator"},[a("td",{staticClass:"text-left"},[t._v("Discount Detail (%)")]),t._v(" "),a("th",[t._v("\n                                    "+t._s(t._f("capitalize")(t.currentOrder.discount.name))+"\n                                    -\n                                    ("+t._s(t.currentOrder.discount.percentage_discount)+")\n                                ")]),t._v(" "),a("td",[t._v("Total Before Discount")]),t._v(" "),a("th",[t._v(t._s(t.$formatCurrency(t.$roundDownAmt(t.currentOrder.product_price))))]),t._v(" "),a("td",[t._v("Total Paid")]),t._v(" "),a("th",[t._v(t._s(t.paymentSummary.amountPaid))])]),t._v(" "),a("tr",[a("td",{staticClass:"text-left"},[t._v("Discount Amount")]),t._v(" "),a("th",[t._v(t._s(t.paymentSummary.discountAmount))]),t._v(" "),a("td",[t._v("Total After Discount")]),t._v(" "),a("th",[t._v(t._s(t.paymentSummary.discountedTotal))]),t._v(" "),a("td",[t._v("Total Debt")]),t._v(" "),a("th",[t._v(t._s(t.paymentSummary.outstandingDebt))])]),t._v(" "),a("tr",[a("td",{staticClass:"text-left"},[t._v("Down Payment")]),t._v(" "),a("th",[t._v(t._s(t.$formatCurrency(t.$roundDownAmt(t.currentOrder.down_payment))))]),t._v(" "),a("td",[t._v("Total Plus Default Fee")]),t._v(" "),a("th",[t._v(t._s(t.paymentSummary.totalPlusDefault))]),t._v(" "),a("td",[t._v("Default Fee")]),t._v(" "),a("th",[t._v(t._s(t.paymentSummary.defaultFee))])])])])])]),t._v(" "),t._m(6)]):t._e()])]),t._v(" "),a("div",{staticClass:"modal fade repayment",attrs:{id:"reminder_history"}},[a("div",{staticClass:"modal-dialog modal-lg",attrs:{role:"document"}},[a("div",{staticClass:"modal-content"},[t._m(7),t._v(" "),t.showModalContent?a("div",{staticClass:"modal-body"},[a("div",{staticClass:"table-responsive"},[t.currentOrder.reminders.length?a("table",{staticClass:"table table-bordered table-striped"},[t._m(8),t._v(" "),a("tbody",t._l(t.currentOrder.reminders,function(e,r){return a("tr",[a("th",[t._v(t._s(r+1))]),t._v(" "),a("td",[t._v(t._s(t.$dateTimeConvert(e.date)))]),t._v(" "),a("td",[t._v(t._s(e.type))]),t._v(" "),a("td",{domProps:{innerHTML:t._s(t.renderMessage(e))}}),t._v(" "),a("td",[t._v(t._s(e.user.full_name))])])}))]):a("div",{staticClass:"my-4 text-center"},[t._v("\n                            no reminders have been sent yet!\n                        ")])])]):t._e(),t._v(" "),t._m(9)])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"tab-pane active text-center"},[e("div",{staticClass:"mb-3 row attendance-item"},[e("div",{staticClass:"col d-flex light-heading align-items-center justify-content-center"},[this._v("\n                    No records found!\n                ")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"modal-header py-2"},[e("h6",{staticClass:"modal-title py-1"},[this._v("Purchase Order Summary")]),this._v(" "),e("a",{staticClass:"close py-1",attrs:{"aria-label":"Close","data-dismiss":"modal"}},[e("span",{staticClass:"modal-close text-danger",attrs:{"aria-hidden":"true"}},[e("i",{staticClass:"fas fa-times"})])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"modal-footer"},[e("a",{staticClass:"text-link mt-3 w-100",staticStyle:{"text-align":"right"},attrs:{"data-dismiss":"modal",href:"javascript:"}},[this._v("close dialogue")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"modal-header py-2"},[e("h6",{staticClass:"modal-title py-1"},[this._v("Customer Info. Summary")]),this._v(" "),e("a",{staticClass:"close py-1",attrs:{"aria-label":"Close","data-dismiss":"modal"}},[e("span",{staticClass:"modal-close text-danger",attrs:{"aria-hidden":"true"}},[e("i",{staticClass:"fas fa-times"})])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"modal-footer"},[e("a",{staticClass:"text-link mt-3 w-100 text-right",attrs:{"data-dismiss":"modal",href:"#"}},[this._v("\n                        close dialogue\n                    ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"close py-1",attrs:{"aria-label":"Close","data-dismiss":"modal"}},[e("span",{staticClass:"modal-close text-danger",attrs:{"aria-hidden":"true"}},[e("i",{staticClass:"fas fa-times"})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"modal-footer"},[e("a",{staticClass:"text-link mt-3 w-100",staticStyle:{"text-align":"right"},attrs:{"data-dismiss":"modal",href:"javascript:"}},[this._v("close dialogue")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"modal-header py-2"},[e("h6",{staticClass:"modal-title py-1"},[this._v("Reminder History")]),this._v(" "),e("a",{staticClass:"close py-1",attrs:{"aria-label":"Close","data-dismiss":"modal"}},[e("span",{staticClass:"modal-close text-danger",attrs:{"aria-hidden":"true"}},[e("i",{staticClass:"fas fa-times"})])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",[t._v("S/N")]),t._v(" "),a("th",[t._v("Date")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("SMS/Feedback")]),t._v(" "),a("th",[t._v("sender")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"modal-footer"},[e("a",{staticClass:"text-link mt-3 w-100",staticStyle:{"text-align":"right"},attrs:{"data-dismiss":"modal",href:"javascript:"}},[this._v("close dialogue")])])}]}},"6VfS":function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("transition",{attrs:{name:"fade"}},[a("div",{staticClass:"attendance",attrs:{id:"reminder"}},[a("custom-header",{attrs:{title:"All overdue(s) payments"}}),t._v(" "),a("div",{staticClass:"mt-5 row attendance-head"},[t._l(t.filters,function(e){var r=e.name;return a("div",{staticClass:"col-3 col-sm"},[a("div",{staticClass:"row"},[a("div",{staticClass:"light-heading"},[a("span",{staticClass:"d-none d-sm-inline"},[t._v("Select")]),t._v(" "+t._s(t._f("capitalize")(r))+"\n                    ")])])])}),t._v(" "),a("div",{staticClass:"col-3 col-sm-2"})],2),t._v(" "),a("div",{staticClass:"mt-2 mt-lg-3 row attendance-head attendance-view"},[t._l(t.filters,function(e){var r=e.name,s=e.model;return a("div",{staticClass:"col-4 col-sm"},[a("div",{staticClass:"row"},["branch"===r?a("select",{directives:[{name:"model",rawName:"v-model",value:t.$data[s],expression:"$data[model]"}],staticClass:"custom-select",on:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;t.fetchData()},change:function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.$set(t.$data,s,e.target.multiple?a:a[0])}}},[a("option",{attrs:{disabled:"",selected:"",value:""}},[t._v(t._s(t._f("capitalize")(r)))]),t._v(" "),t._l(t.$store.getters.getBranches,function(e){var r=e.name,s=e.id;return a("option",{domProps:{value:s}},[t._v("\n                            "+t._s(t._f("capitalize")(r))+"\n                        ")])})],2):a("div",{staticClass:"form-group w-100"},"overdue days"===r?[a("input",{directives:[{name:"model",rawName:"v-model",value:t.$data[s],expression:"$data[model]"}],staticClass:"form-control",attrs:{type:"number"},domProps:{value:t.$data[s]},on:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;t.fetchData()},input:function(e){e.target.composing||t.$set(t.$data,s,e.target.value)}}})]:[a("input",{directives:[{name:"model",rawName:"v-model",value:t.$data[s],expression:"$data[model]"}],staticClass:"form-control",attrs:{type:"date"},domProps:{value:t.$data[s]},on:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;t.fetchData()},input:function(e){e.target.composing||t.$set(t.$data,s,e.target.value)}}})])])])}),t._v(" "),a("div",{staticClass:"col-12 col-sm-2"},[a("div",{staticClass:"row d-flex justify-content-end"},[a("button",{staticClass:"btn btn-primary bg-default mt-0 myBtn",on:{click:function(e){t.fetchData()}}},[t._v("Apply Filter")])])])],2),t._v(" "),a("div",{staticClass:"mt-5 mb-3 attendance-head"},[a("div",{staticClass:"w-100 my-5 mx-0 hr"}),t._v(" "),a("div",{staticClass:"row px-4 pt-3 pb-4 text-center"},[a("div",{staticClass:"col light-heading",staticStyle:{"max-width":"120px"}},[t._v("S/N")]),t._v(" "),t._l(t.headings,function(e){return a("div",{staticClass:"col light-heading"},[t._v(t._s(e))])})],2)]),t._v(" "),t.show?a("order",{attrs:{"start-index":t.orders.from,"pre-loaded-order":t.response,mode:"normal-list"}}):t._e(),t._v(" "),a("div",{staticClass:"mt-5 mb-3 attendance-head"},[a("div",{staticClass:"w-100 my-5 mx-0 hr"})])],1)])},staticRenderFns:[]}},"7elN":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r,s=a("p/p5"),n=a("K23+"),i=(r=n)&&r.__esModule?r:{default:r},o=a("nv24");function l(t){if(Array.isArray(t)){for(var e=0,a=Array(t.length);e<t.length;e++)a[e]=t[e];return a}return Array.from(t)}e.default={props:{mode:null,index:null,startIndex:{default:1},dva_id:null,paySummary:null,repaymentLevel:null,order:{default:{}},isRepaymentValid:null},data:function(){return{selected:!1}},created:function(){o.EventBus.$on("selectOrderItem",this.toggleSelect)},methods:{logReminder:function(){var t=this;this.$LIPS(!0),delete this.reminder.order,delete this.reminder.canBeSelected,(0,s.post)("/api/reminder",{reminders:[this.reminder]}).then(function(e){return e.data.saved?t.logPromiseCall():t.$displayErrorMessage("Error Logging reminders!")})},logPromiseCall:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Reminder Logged!";this.promiseCall.date?(0,s.post)("/api/promise_call",this.promiseCall).then(function(a){return a.data.saved?t.done(e+" Promise call added!"):t.$displayErrorMessage("Error Logging promise call!")}):this.done(e)},done:function(t){this.$scrollToTop(),i.default.setSuccess(t,5e3),this.$emit("done")},isReminderSent:function(){var t=this,e=!0;if(this.order.reminders.length>0){var a=this.$getDate();this.order.reminders.forEach(function(r){var s=r.date.split(" "),n=s[0].split("-"),i=s[1].split(":"),o=[].concat(l(n),l(i)).map(function(t){return parseInt(t,10)});t.$getDate(new Date(Date.UTC.apply(Date,l(o))),!1)===a&&(e=!1)})}return e},toggleSelect:function(t){this.reminder.canBeSelected&&(this.selected=t,this.$emit("updateReminderList",this.reminder,t))}},computed:{reminder:function(){var t={customer_id:this.order.customer.id,order_id:this.order.id,repayment_level:this.repaymentLevel,dva_id:this.dva_id,type:this.mode,canBeSelected:this.isReminderSent()};return"sms"===this.mode&&(t.contacts=this.order.customer.telephone,t.sms_id=null),t},promiseCall:function(){return{order_id:this.order.id,user_id:this.dva_id,customer_id:this.order.customer.id,date:null}},getFinancialStatus:function(){return this.isRepaymentValid?"Paid: "+this.paySummary.amountPaid+" | Debt: "+this.paySummary.outstandingDebt:"no detail!"}}}},AS3D:function(t,e,a){var r=a("zLlz");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);a("rjj0")("6cd2dcf8",r,!0,{})},AvNK:function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,".attendance-view .custom-select[data-v-9e8481b0],.attendance-view input[data-v-9e8481b0]{width:85%}.attendance-view .myBtn[data-v-9e8481b0]{width:95%}",""])},CvDN:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mb-3 row attendance-item"},[a("div",{staticClass:"col-12 col-xs-2 col-md col-lg d-flex align-items-center",staticStyle:{"max-width":"120px"}},["normal-list"===t.mode?a("span"):t.reminder.canBeSelected&&["collection","recovery","call","external-recovery"].includes(t.mode)?a("span",{staticClass:"user mx-auto waiting-reminder",on:{click:t.logReminder}},[a("i",{staticClass:"fas fa-hourglass-start"})]):t.reminder.canBeSelected&&"sms"===t.mode?a("div",{staticClass:"d-flex align-items-center"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.selected,expression:"selected"}],staticClass:"form-check-input my-0 mx-4 float-left position-relative ",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.selected)?t._i(t.selected,null)>-1:t.selected},on:{click:function(e){t.toggleSelect(!t.selected)},change:function(e){var a=t.selected,r=e.target,s=!!r.checked;if(Array.isArray(a)){var n=t._i(a,null);r.checked?n<0&&(t.selected=a.concat([null])):n>-1&&(t.selected=a.slice(0,n).concat(a.slice(n+1)))}else t.selected=s}}})]):a("span",{staticClass:"user mx-auto sent-reminder"},[a("i",{staticClass:"fas fa-check"})]),t._v(" "),a("span",{staticClass:"user mx-auto"},[t._v(t._s(t.startIndex+t.index))])]),t._v(" "),a("div",{staticClass:"col-12 col-xs-2 col-md col-lg user-name d-flex align-items-center justify-content-center"},[t._v("\n        "+t._s(t.$vnode.key)+"\n    ")]),t._v(" "),a("div",{staticClass:"col-12 col-xs-2 col-md col-lg d-flex align-items-center justify-content-center",attrs:{"data-hoverable":"true"},on:{click:function(e){t.$emit("display",t.order,"purchase_order")}}},[t._v("\n        "+t._s(t.order.order_date)+"\n    ")]),t._v(" "),a("div",{staticClass:"col-12 col-xs-3 col-md col-lg d-flex align-items-center justify-content-center",attrs:{"data-hoverable":"true"},on:{click:function(e){t.$emit("display",t.order,"customer_info")}}},[t._v("\n        ID: "+t._s(t.order.customer.id)+" - "+t._s(t._f("capitalize")(t.order.customer.employment_status))+"\n    ")]),t._v(" "),a("div",{staticClass:"col-12 col-xs-2 col-md col-lg d-flex align-items-center justify-content-center",attrs:{"data-hoverable":"true"},on:{click:function(e){t.$emit("display",t.order,"repayment")}}},[t._v("\n        "+t._s(t.getFinancialStatus)+"\n    ")]),t._v(" "),a("div",{staticClass:"col-12 col-xs-2 col-md col-lg d-flex align-items-center justify-content-center",attrs:{"data-hoverable":"true"},on:{click:function(e){t.$emit("display",t.order,"reminder_history")}}},[t._v("\n        "+t._s(t.order.reminders.length)+" reminder(s) sent\n    ")]),t._v(" "),["collection","recovery","external-recovery"].includes(t.mode)?a("div",{staticClass:"col-12 col-xs-2 col-md col-lg d-flex align-items-center attendance-create"},[a("span",{staticClass:"present"},[a("span",{staticClass:"radio w-50 pr-3 mb-0 float-left"},[a("input",{attrs:{type:"radio",value:"yes",id:"present"+t.index,name:"isPresent"+t.index}}),t._v(" "),a("label",{attrs:{for:"present"+t.index}},[t._v("yes")])]),t._v(" "),a("span",{staticClass:"radio w-50 pl-3 mb-0 float-left"},[a("input",{attrs:{type:"radio",value:"no",id:"absent"+t.index,name:"isPresent"+t.index}}),t._v(" "),a("label",{attrs:{for:"absent"+t.index}},[t._v("no")])])])]):t._e(),t._v(" "),["collection","recovery","call","external-recovery"].includes(t.mode)?a("div",{staticClass:"col-12 col-xs-2 col-md col-lg d-flex align-items-center"},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.reminder.feedback,expression:"reminder.feedback"}],staticClass:"form-control",attrs:{rows:"1",disabled:!t.reminder.canBeSelected},domProps:{value:t.reminder.feedback},on:{input:function(e){e.target.composing||t.$set(t.reminder,"feedback",e.target.value)}}})]):t._e(),t._v(" "),"call"===t.mode?a("div",{staticClass:"col-12 col-xs-2 col-md col-lg d-flex align-items-center"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.promiseCall.date,expression:"promiseCall.date"}],staticClass:"form-control",attrs:{type:"date",disabled:!t.reminder.canBeSelected},domProps:{value:t.promiseCall.date},on:{input:function(e){e.target.composing||t.$set(t.promiseCall,"date",e.target.value)}}})]):t._e()])},staticRenderFns:[]}},EJ7O:function(t,e,a){var r=a("VU/8")(a("oKx2"),a("+O4B"),!1,null,null,null);t.exports=r.exports},Oi84:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=a("p/p5"),s=o(a("K23+")),n=o(a("XPj8")),i=o(a("EJ7O"));function o(t){return t&&t.__esModule?t:{default:t}}e.default={components:{CustomHeader:i.default,Order:n.default},data:function(){return{branch_id:"",date_from:null,date_to:null,overdue_days:1,page:1,filters:[{name:"branch",model:"branch_id"},{name:"date from",model:"date_from"},{name:"date to",model:"date_to"},{name:"overdue days",model:"overdue_days"}],orders:null,response:{},show:!1,headings:["Order Number","Order Summary","Customer Info Summary","Repayment Summary","Reminder History"]}},methods:{fetchData:function(){var t=this;this.$scrollToTop(),this.$LIPS(!0);var e=this.$data,a=e.page,n=e.date_from,i=e.date_to,o=e.branch_id,l=e.overdue_days;(0,r.get)("/api/reminder/create"+(a?"?page="+a:"")+(i?"&date_to="+i:"")+(o?"&branch_id="+o:"")+(l?"&overdue_days="+l:"")+(n?"&date_from="+n:"")).then(function(e){var a=e.data;return t.prepareForm(a)}).catch(function(){return s.default.setError("Error Preparing form")})},next:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;this.orders.next_page_url&&(this.page=t||this.page+1,this.fetchData())},prev:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;this.orders.prev_page_url&&(this.page=t||this.page+1,this.fetchData())},prepareForm:function(t){var e=this;this.show=!1,this.orders=null,this.response={},this.orders=t.orders.filter(function(t){var a=e.getCountAndRepaymentData(t).repaymentData,r=e.amortizationPlan(t),s=r.count,n=r.interval,i=void 0,o=new Date;if(!a)return!1;for(var l=1;l<s+1;l++){if(!a[e.$getColumn(l)+"_pay"]){i=e.generateDates({startDate:t.order_date,interval:n,count:s})[l-1];break}}return e.$getDate(o.addDays(-e.overdue_days))===i});var a=t.payment_methods,r=t.banks,s=t.dva_id,n=t.branch;this.response={payment_methods:a,banks:r,dva_id:s,branch:n,orders:this.orders},this.$scrollToTop(),this.$LIPS(!1),this.show=!0},getCountAndRepaymentData:function(t){var e={count:this.amortizationPlan(t).count};return null!=t.repayment_formal&&(e.repaymentData=t.repayment_formal),null!=t.repayment_informal&&(e.repaymentData=t.repayment_informal),e},amortizationPlan:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.currentOrder,e=void 0,a=void 0;return new Date(t.order_date)<=new Date("2019-07-07")?(null!=t.repayment_formal&&(e=28,a=6),null!=t.repayment_informal&&(e=14,a=12)):this.isBankDraftAvailable(t)&&this.isOrderFormal(t)?(e=28,a=6):(e=14,a=12),{interval:e,count:a}},isBankDraftAvailable:function(){return!1},isOrderFormal:function(t){return["formal","salaried"].includes(t.customer.employment_status.toLowerCase())},generateDates:function(t){for(var e=t.startDate,a=t.interval,r=t.count,s=[],n=0;n<r;n++){var i=new Date(e).addDays((n+1)*a),o=this.$getDate(i);s.push(o)}return s}},created:function(){this.$prepareBranches(),this.fetchData()}}},TZKk:function(t,e,a){var r=a("VU/8")(a("7elN"),a("CvDN"),!1,null,null,null);t.exports=r.exports},"Umu/":function(t,e,a){var r=a("VU/8")(a("Oi84"),a("6VfS"),!1,function(t){a("dUjQ")},"data-v-9e8481b0",null);t.exports=r.exports},XPj8:function(t,e,a){var r=a("VU/8")(a("aSpy"),a("4R38"),!1,function(t){a("AS3D")},"data-v-60774218",null);t.exports=r.exports},aSpy:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(t[r]=a[r])}return t},s=d(a("I3G/")),n=d(a("K23+")),i=a("m2tk"),o=a("p/p5"),l=d(a("TZKk"));function d(t){return t&&t.__esModule?t:{default:t}}e.default={components:{OrderItem:l.default},props:{list:{default:null},mode:null,preLoadedOrder:null,startIndex:null},watch:{list:function(t){this.fetchList(t)},preLoadedOrder:function(t){this.prepareForm(t)}},data:function(){return{orders:{},show:!1,banks:null,reminder:[],currentOrder:{},paymentSummary:null,payment_methods:null,showModalContent:!1}},methods:{prepareForm:function(t){var e=this;this.show=!1,this.showModalContent=!1,this.banks=t.banks,this.dva_id=t.dva_id,this.payment_methods=t.payment_methods,this.orders=t.orders.filter(function(a){var r=e.getCountAndRepaymentData(a).repaymentData,s=e.amortizationPlan(a),n=s.count,i=s.interval;return(!(!e.$store.getters.auth("DVALead")&&!e.$store.getters.auth("FSLLead"))||parseInt(a.store_product.store_name)===t.branch)&&function(){if([8,1].includes(e.list)||"normal-list"===e.mode)return!0;var t=void 0,s=void 0,o=[],l=new Date,d=1===l.getDay()||[9,10,11,12,13,14].includes(e.list)?3:1;if(!r)return!1;for(var c=1;c<n+1;c++){var u=e.$getColumn(c);if(!r[u+"_pay"]){t=e.generateDates({startDate:a.order_date,interval:i,count:n})[c-1];break}}switch(e.list){case 2:s=7;break;case 3:s=3;break;case 4:s=0;break;case 5:s=1;break;case 6:s=5;break;case 7:s=31;break;case 9:s=38;break;case 10:s=45;break;case 11:s=61;break;case 12:s=75;break;case 13:s=90;break;case 14:s=121}if(["collection","recovery","call","external-recovery"].includes(e.mode))for(var m=0;m<d;m++)o.push(e.$getDate(l.addDays(-(m+s))));if("sms"===e.mode)for(var v=0;v<d;v++)o.push(e.$getDate(l.addDays(v+s)));return o.includes(t)}()}),this.orders.length&&(this.show=!0),this.$LIPS(!1)},isOrderFormal:function(t){return["formal","salaried"].includes(t.customer.employment_status.toLowerCase())},generateDates:function(t){for(var e=t.startDate,a=t.interval,r=t.count,s=[],n=0;n<r;n++){var i=new Date(e).addDays((n+1)*a),o=this.$getDate(i);s.push(o)}return s},renderMessage:function(t){return t.sms?t.sms.message.replace(/%0a/g,"</br>"):t.feedback},fetchList:function(t){var e,a=this;this.$LIPS(!0),(0,o.get)((e={query:{list:t}},"/api/reminder/create?list="+e.query.list)).then(function(e){var r=e.data;if(8===t){var s=[];r.orders.forEach(function(t){return s.push(t.order)}),r.orders=s}a.prepareForm(r)})},isPaymentDue:function(t){return new Date>new Date(t)},getDiscount:function(t){var e=t.discount;return e.name+" ("+e.percentage_discount+")"},isRepaymentValid:function(t){return!(!t.repayment_formal&&!t.repayment_informal)},displayDetails:function(t,e){return this.paymentSummary=this.calcPaymentSummary(t),s.default.set(this.$data,"currentOrder",t),this.showModalContent=!0,$("#"+e).modal("toggle")},getCountAndRepaymentData:function(t){var e={count:this.amortizationPlan(t).count};return null!=t.repayment_formal&&(e.repaymentData=t.repayment_formal),null!=t.repayment_informal&&(e.repaymentData=t.repayment_informal),e},calcPaymentSummary:function(t){var e=this,a=[],r=function(t){return e.$formatCurrency(t)},s=this.$roundDownAmt(parseInt(t.down_payment)),n=this.amortizationPlan(t),i=n.count,o=n.interval,l=this.getCountAndRepaymentData(t).repaymentData;if(this.generateDates({startDate:t.order_date,interval:o,count:i}).forEach(function(t,r){return e.isPaymentDue(e.$getDate(new Date(t).addDays(5)))&&a.push({dueDate:t,actualPayDate:l[e.$getColumn(r)+"_date"]})}),l)for(var d=1;d<i+1;d++)s+=this.$roundDownAmt(l[this.$getColumn(d)+"_pay"]);else s=0;var c=t.discount.percentage_discount,u=6===i?.5:1,m=t.repayment_amount*u*(c>0?5===c?1:2:0);m=this.$roundDownAmt(m);var v=500*a.length,_=this.$roundDownAmt(t.product_price-m);return{amountPaid:r(s),discountAmount:r(this.$roundDownAmt(m)),outstandingDebt:r(this.$roundDownAmt(parseInt(t.product_price)-s)),discountedTotal:r(_),defaultFee:r(v),totalPlusDefault:r(_+v)}},getRepayment:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(!this.isRepaymentValid(t))return null;var a=[],r=this.getCountAndRepaymentData(t).repaymentData,s=this.amortizationPlan(t),n=s.interval,i=s.count;if(null===e)return this.generateDates({startDate:t.order_date,interval:n,count:i});if("repayments"===e)return new Array(i).fill(this.$roundDownAmt(t.repayment_amount),0,i);for(var o=1;o<i+1;o++)a.push(r[this.$getColumn(o)+e]);return a},getPaymentStatusClasses:function(t){if(!this.isRepaymentValid(t))return null;for(var e=[],a=this.getCountAndRepaymentData(t).repaymentData,r=this.amortizationPlan(t).count,s=this.getRepayment(t),n=1;n<r+1;n++){var i={class:null,icon:null},o=this.$getColumn(n),l=this.isPaymentDue(s[n-1]),d=parseInt(a[o+"_pay"]);d?(i.class="paid",i.icon="fa-check"):l&&!d?(i.class="missed",i.icon="fa-times"):l||(i.class="pending",i.icon="fa-hourglass-start"),e.push(i)}return e},getRepaymentLevel:function(t){if(!this.isRepaymentValid(t))return 0;for(var e=0,a=this.amortizationPlan(t).count,r=this.getCountAndRepaymentData(t).repaymentData,s=1;s<a+1;s++)r[this.$getColumn(s)+"_pay"]>0&&e++;return e+"/"+a},convertPaymentMethodOrBankToName:function(t,e){return t?this.$data[e].find(function(e){return e.id===t}).name:null},updateReminder:function(t,e){if(e)this.reminder.push(t);else{var a=void 0;this.reminder.forEach(function(e,r){return e.order_id===t.order_id&&(a=r)}),this.reminder.splice(a,1)}},processSelected:function(){var t=this;if(this.reminder.length){this.$LIPS(!0);var e=this.reminder.map(function(e){var a=JSON.parse(JSON.stringify(e));return a.order=t.orders.find(function(t){return t.id===e.order_id}),a.message=t.generateCustomMessage(a.order),a});this.sendSMSReminders(e)}else this.$displayErrorMessage("please select at least one!")},sendSMSReminders:function(t){var e=this,a=[];t.forEach(function(r,s){var n=new i.Message(r.message,r.contacts,!1,r.dva_id);n.send(function(r){200===r.status&&(delete n.logToDB,a.push(n)),s+1===t.length&&e.logSentMessages(a,t)})})},logSentMessages:function(t,e){var a=this;t?(0,o.post)("/api/message",{messages:t,bulk:!0}).then(function(t){var r=t.data,s=r.sentAndLogged,n=r.ids;s?a.logSentReminders(e,n):a.$displayErrorMessage("Error Logging sent sms details!")}):this.$displayErrorMessage("Error sending messages!")},logSentReminders:function(t,e){var a=this;e.reverse();var r=JSON.parse(JSON.stringify(t));r.forEach(function(t,a){t.sms_id=e[a],delete t.message,delete t.order,delete t.contacts,delete t.canBeSelected}),e.length>0?(0,o.post)("/api/reminder",{reminders:r}).then(function(t){t.data.saved?(n.default.setSuccess("Reminders have been sent successfully!",5e4),a.fetchList(a.list)):a.$displayErrorMessage("Error sending reminders!"),a.$scrollToTop()}):this.$displayErrorMessage("Error logging sent messages!")},generateCustomMessage:function(t){var e=this,a=t.customer,s=t.store_product,n=t.order_date,i=t.repayment_amount,o=s.product_name,l=a.first_name,d=a.last_name,c=void 0,u=r({startDate:n},this.amortizationPlan(t)),m=this.generateDates(u),v=this.getRepaymentLevel(t).split("/")[0];return 1===this.list?(c="Hello "+l+" "+d+", thanks for patronizing us. The following is the breakdown of the repayment plan for the purchase of "+o+":%0a",m.length>0&&m.forEach(function(t,a){return c+=e.$getColumn(a+1)+": "+t+" => "+e.$formatCurrency(e.$roundDownAmt(i))+"%0a"})):c="Hello "+l+" "+d+", This is to remind you that your "+this.$getColumn(parseInt(v)+1)+" repayment of "+this.$formatCurrency(this.$roundDownAmt(i))+" for "+o+" will be due on "+m[v]+". we will be expecting you.",c+"Please remember to pay on time to avoid late fees and other penalties.%0aThank you."},amortizationPlan:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.currentOrder,e=void 0,a=void 0;return new Date(t.order_date)<=new Date("2019-07-07")?(null!=t.repayment_formal&&(e=28,a=6),null!=t.repayment_informal&&(e=14,a=12)):this.isBankDraftAvailable(t)&&this.isOrderFormal(t)?(e=28,a=6):(e=14,a=12),{interval:e,count:a}},isBankDraftAvailable:function(){return!1},repaymentCaption:function(t){for(var e=this.amortizationPlan(t).count,a=[],r=1;r<=e;r++){for(var s=this.$getColumn(r).split(""),n=[],i=1;i<=2;i++)n.unshift(s.pop());a.push("<td>"+s.join("")+"<sup>"+n.join("")+"</sup></td>")}return a}},mounted:function(){var t=this;"normal-list"!=this.mode?this.fetchList(this.list):this.prepareForm(this.preLoadedOrder),$(document).on("hidden.bs.modal",".modal",function(){t.currentOrder=null,t.showModalContent=!1})}}},dUjQ:function(t,e,a){var r=a("AvNK");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);a("rjj0")("bacdcffc",r,!0,{})},m2tk:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Message=void 0;var r=function(){function t(t,e){for(var a=0;a<e.length;a++){var r=e[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,a,r){return a&&t(e.prototype,a),r&&t(e,r),e}}(),s=a("p/p5");e.Message=function(){function t(e,a){var r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.user_id=s,this.message=e,this.logToDB=r,this.contacts=a.split(",").filter(function(t){return/\S/.test(t)}).map(function(t){return"234"+t.trim().substr(1)}).join(","),this.setPages(),this.setContactCount()}return r(t,[{key:"setContactCount",value:function(){this.contact_count=this.contacts.split(",").length}},{key:"setPages",value:function(){this.pages=Math.ceil(this.message.length/160)}},{key:"send",value:function(t){var e=this;(0,s.get)("/api/message/create?to="+this.contacts+"&message="+this.message).then(function(a){return 200===a.status&&e.logToDB&&(delete e.logToDB,(0,s.post)("/api/message",e)),!!t&&t(a)}).catch(function(e){return!!t&&t(e)})}}]),t}()},nv24:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.EventBus=void 0;var r,s=a("I3G/"),n=(r=s)&&r.__esModule?r:{default:r};e.EventBus=new n.default},oKx2:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{title:"",buttonTitle:null,to:null}}},rjj0:function(t,e,a){var r="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!r)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var s=a("tTVk"),n={},i=r&&(document.head||document.getElementsByTagName("head")[0]),o=null,l=0,d=!1,c=function(){},u=null,m="data-vue-ssr-id",v="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function _(t){for(var e=0;e<t.length;e++){var a=t[e],r=n[a.id];if(r){r.refs++;for(var s=0;s<r.parts.length;s++)r.parts[s](a.parts[s]);for(;s<a.parts.length;s++)r.parts.push(f(a.parts[s]));r.parts.length>a.parts.length&&(r.parts.length=a.parts.length)}else{var i=[];for(s=0;s<a.parts.length;s++)i.push(f(a.parts[s]));n[a.id]={id:a.id,refs:1,parts:i}}}}function p(){var t=document.createElement("style");return t.type="text/css",i.appendChild(t),t}function f(t){var e,a,r=document.querySelector("style["+m+'~="'+t.id+'"]');if(r){if(d)return c;r.parentNode.removeChild(r)}if(v){var s=l++;r=o||(o=p()),e=g.bind(null,r,s,!1),a=g.bind(null,r,s,!0)}else r=p(),e=function(t,e){var a=e.css,r=e.media,s=e.sourceMap;r&&t.setAttribute("media",r);u.ssrId&&t.setAttribute(m,e.id);s&&(a+="\n/*# sourceURL="+s.sources[0]+" */",a+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */");if(t.styleSheet)t.styleSheet.cssText=a;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(a))}}.bind(null,r),a=function(){r.parentNode.removeChild(r)};return e(t),function(r){if(r){if(r.css===t.css&&r.media===t.media&&r.sourceMap===t.sourceMap)return;e(t=r)}else a()}}t.exports=function(t,e,a,r){d=a,u=r||{};var i=s(t,e);return _(i),function(e){for(var a=[],r=0;r<i.length;r++){var o=i[r];(l=n[o.id]).refs--,a.push(l)}e?_(i=s(t,e)):i=[];for(r=0;r<a.length;r++){var l;if(0===(l=a[r]).refs){for(var d=0;d<l.parts.length;d++)l.parts[d]();delete n[l.id]}}}};var h,y=(h=[],function(t,e){return h[t]=e,h.filter(Boolean).join("\n")});function g(t,e,a,r){var s=a?"":r.css;if(t.styleSheet)t.styleSheet.cssText=y(e,s);else{var n=document.createTextNode(s),i=t.childNodes;i[e]&&t.removeChild(i[e]),i.length?t.insertBefore(n,i[e]):t.appendChild(n)}}},tTVk:function(t,e){t.exports=function(t,e){for(var a=[],r={},s=0;s<e.length;s++){var n=e[s],i=n[0],o={id:t+":"+s,css:n[1],media:n[2],sourceMap:n[3]};r[i]?r[i].parts.push(o):a.push(r[i]={id:i,parts:[o]})}return a}},zLlz:function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,".table-separator[data-v-60774218]{border-top:2px solid #dee1e4}",""])}});
>>>>>>> a357cb0e61bf90f7c4463d8ad19bd409d7ce399e
=======
webpackJsonp([2],{"+O4B":function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mt-5 attendance-head"},[a("div",{staticClass:"mb-5 row align-items-center"},[a("div",{staticClass:"col-12 title-con"},[a("span",{staticClass:"title"},[t._v(t._s(t._f("capitalize")(t.title)))]),t._v(" "),t.to?a("div",{staticClass:"row justify-content-end"},[a("router-link",{staticClass:"text-link mt-3",attrs:{to:t.to}},[t._v(t._s(t.buttonTitle))])],1):t._e()])])])},staticRenderFns:[]}},"1gIg":function(t,e,a){var r=a("VU/8")(a("wBhk"),a("9sZT"),!1,null,null,null);t.exports=r.exports},"4I72":function(t,e,a){var r=a("VU/8")(a("WiSW"),a("r37U"),!1,null,null,null);t.exports=r.exports},"9sZT":function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h4",{staticClass:"mx-md-3 mx-0 py-0 my-0 text-center clearfix",attrs:{id:"app-navigation"}},[t.$routerHistory.hasPrevious()?a("router-link",{staticClass:"text-secondary float-left ml-1 pl-2 ml-sm-4 pl-sm-3",attrs:{to:t.previous,id:"back"}},[a("span",{staticClass:"mr-5 float-left"},[a("i",{staticClass:"far fa-arrow-alt-circle-left float-left"}),t._v(" "),a("small",{staticClass:"float-left ml-2 d-none d-sm-block"},[t._v("Back")])])]):t._e(),t._v(" "),a("strong",{staticClass:"mx-auto w-100 float-left",attrs:{"data-title":"title"}},[a("span",{staticClass:"d-none d-sm-block"},[t._v(t._s(t.pageTitle))]),t._v(" "),a("span",{staticClass:"d-block d-sm-none"},[t._v(t._s(t.pageTitleSmall))])]),t._v(" "),t.$routerHistory.hasForward()?a("router-link",{staticClass:"text-secondary float-right mr-1 pr-2 mr-sm-4 pr-sm-3",attrs:{to:t.forward,id:"forward"}},[a("span",{staticClass:"ml-5 float-right"},[a("i",{staticClass:"far fa-arrow-alt-circle-right float-right"}),t._v(" "),a("small",{staticClass:"float-right mr-2 d-none d-sm-block"},[t._v("Forward")])])]):t._e()],1)},staticRenderFns:[]}},EJ7O:function(t,e,a){var r=a("VU/8")(a("oKx2"),a("+O4B"),!1,null,null,null);t.exports=r.exports},H4Yb:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("transition",{attrs:{name:"fade"}},[a("div",{attrs:{id:"reminder"}},[a("div",{staticClass:"mt-5 attendance-head"},[a("div",{staticClass:"card"},[a("ul",{staticClass:"nav nav-tabs bg-default justify-content-center"},[a("h6",[t._v("Customer Lookup")])]),t._v(" "),a("div",{staticClass:"card-body p-4"},[a("form",{on:{submit:function(e){return e.preventDefault(),t.processForm(e)}}},[a("div",{staticClass:"m-0 p-0 col-12 form-group clearfix"},[a("label",{staticClass:"w-100"},[t._v("Customer ID")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.customer_id,expression:"customer_id"},{name:"validate",rawName:"v-validate",value:"required|numeric",expression:"'required|numeric'"}],staticClass:"form-control col-lg-9 col-md-8 col-sm-8 col-12 float-left mt-1",attrs:{"data-vv-as":"customer id",name:"customer_id"},domProps:{value:t.customer_id},on:{onkeyUp:t.check,input:function(e){e.target.composing||(t.customer_id=e.target.value)}}}),t._v(" "),a("div",{staticClass:"col-lg-3 col-md-4 col-sm-4 col-12 float-right px-md-3 mt-md-0 px-sm-3 mt-sm-0 mt-2 px-0"},[a("button",{staticClass:"btn btn-block bg-default my-1",attrs:{disabled:t.check,type:"submit"}},[t._v("\n                                    Fetch customer details "),a("i",{staticClass:"far fa-paper-plane ml-1"})])]),t._v(" "),t.errors.has("customer_id")?a("small",{staticClass:"form-text text-muted w-100"},[t._v("\n                                "+t._s(t.errors.first("customer_id"))+"\n                            ")]):t._e()])])])])]),t._v(" "),a("transition",{attrs:{name:"fade"}},[t.customer&&t.show?a("div",[a("div",{staticClass:"attendance-head"},[a("customer-profile",{attrs:{"view-customer":t.customer}})],1),t._v(" "),a("custom-header",{attrs:{title:"All order(s)"}}),t._v(" "),a("div",{staticClass:"mt-5 mb-3 attendance-head"},[a("div",{staticClass:"row px-4 pt-3 pb-4 text-center"},[a("div",{staticClass:"col light-heading",staticStyle:{"max-width":"100px"}},[t._v("S/No.")]),t._v(" "),t._l(t.headers,function(e){return a("div",{staticClass:"col light-heading"},[t._v(t._s(e))])})],2)]),t._v(" "),a("div",{staticClass:"tab-content mt-1 attendance-body"},[t.show&&t.customer.orders.length>0?a("div",{staticClass:"tab-pane active text-center"},t._l(t.customer.orders,function(e,r){return a("div",{staticClass:"mb-3 row attendance-item"},[a("div",{staticClass:"col-12 col-xs-2 col-md col-lg d-flex align-items-center",staticStyle:{"max-width":"100px"}},[a("span",{staticClass:"user mx-auto"},[t._v(t._s(r+1))])]),t._v(" "),a("div",{staticClass:"col-12 col-xs-2 col-md col-lg d-flex align-items-center justify-content-center"},[t._v("\n                                "+t._s(e.order_date)+"\n                            ")]),t._v(" "),a("div",{staticClass:"col-12 col-xs-2 col-md col-lg d-flex user-name align-items-center justify-content-center"},[t._v("\n                                "+t._s(e.id)+"\n                            ")]),t._v(" "),a("div",{staticClass:"col-12 col-xs-3 col-md col-lg d-flex align-items-center justify-content-center"},[t._v("\n                                "+t._s(e.store_product.product_name)+"\n                            ")]),t._v(" "),a("div",{staticClass:"col-12 col-xs-2 col-md col-lg d-flex align-items-center justify-content-center"},[t._v("\n                                "+t._s(t.$formatCurrency(e.product_price))+"\n                            ")]),t._v(" "),a("div",{staticClass:"col-12 col-xs-2 col-md col-lg d-flex align-items-center justify-content-center"},[t._v("\n                                "+t._s(e.sales_category.name))]),t._v(" "),a("div",{staticClass:"col-12 col-xs-2 col-md col-lg d-flex align-items-center justify-content-center"},[t._v("\n                                "+t._s(t.$formatCurrency(e.down_payment))+"\n                            ")]),t._v(" "),a("div",{staticClass:"col-12 col-xs-2 col-md col-lg d-flex align-items-center justify-content-center"},[a("button",{staticClass:"btn status my-sm-2 approved",on:{click:function(e){t.displayAmortization(r)}}},[t._v("View\n                                    Plan\n                                ")])])])})):a("div",{staticClass:"tab-pane active text-center"},[a("div",{staticClass:"mb-3 row attendance-item"},[a("div",{staticClass:"col d-flex light-heading align-items-center justify-content-center"},[t._v("\n                                No records found!\n                            ")])])])]),t._v(" "),a("div",{staticClass:"mt-5 mb-3 attendance-head"},[a("div",{staticClass:"w-100 my-5 mx-0 hr"})])],1):t._e()]),t._v(" "),a("div",{staticClass:"modal fade repayment",attrs:{id:"amortization"}},[a("div",{staticClass:"modal-dialog modal-xl",attrs:{role:"document"}},[t.showModalContent?a("div",{staticClass:"modal-content"},[a("div",{staticClass:"modal-header py-2"},[a("h6",{staticClass:"modal-title py-1"},[t._v("\n                            Repayment Plan/Summary - "+t._s(t._f("capitalize")(t.customer.employment_status))+"\n                        ")]),t._v(" "),a("a",{staticClass:"close py-1",attrs:{"aria-label":"Close","data-dismiss":"modal"}},[a("span",{staticClass:"modal-close text-danger",attrs:{"aria-hidden":"true"}},[a("i",{staticClass:"fas fa-times"})])])]),t._v(" "),a("div",{staticClass:"modal-body"},[a("div",{staticClass:"table-responsive"},[a("h5",{staticClass:"mt-3 mb-0"},[t._v("Order Information")]),t._v(" "),a("table",{staticClass:"table table-bordered"},[a("tbody",[a("tr",{staticClass:"table-separator"},[a("td",[t._v("Name")]),t._v(" "),a("td",[t._v("Order Id")]),t._v(" "),a("td",[t._v("Product")]),t._v(" "),a("th",[t._v("Branch")])]),t._v(" "),a("tr",[a("td",{staticClass:"font-weight-bold"},[t._v(t._s(t.customer.first_name+" "+t.customer.last_name))]),t._v(" "),a("th",[t._v(t._s(t.activeOrder.order.id))]),t._v(" "),a("th",[t._v(t._s(t.activeOrder.order.store_product.product_name))]),t._v(" "),a("td",{staticClass:"font-weight-bold"},[t._v(t._s(t.activeOrder.branch.name))])])])]),t._v(" "),a("h5",{staticClass:"mt-3 mb-0"},[t._v("Amortization Schedule")]),t._v(" "),a("table",{staticClass:"table table-bordered"},[a("tbody",{staticClass:"text-center"},[a("tr",[a("th",[t._v("Repayment")]),t._v(" "),t._l(t.activeOrder.repaymentCaptions,function(e){return a("td",{domProps:{innerHTML:t._s(e)}})})],2),t._v(" "),a("tr",{staticClass:"table-separator"},[a("th",[t._v("Due Date")]),t._v(" "),t._l(t.activeOrder.dueDates,function(e){return a("td",[t._v(t._s(e))])})],2),t._v(" "),a("tr",[a("th",[t._v("Actual Pay Day")]),t._v(" "),t._l(t.activeOrder.actualPayDates,function(e){return a("td",[t._v(t._s(e))])})],2),t._v(" "),a("tr",{staticClass:"table-separator"},[a("th",[t._v("Status")]),t._v(" "),t._l(t.activeOrder.paymentStatusClasses,function(t){return a("td",{class:t.class},[a("i",{staticClass:"fas",class:t.icon})])})],2),t._v(" "),a("tr",{staticClass:"table-separator"},[a("th",[t._v("Repayment Amount")]),t._v(" "),t._l(t.activeOrder.amountsToBePaid,function(e){return a("td",[t._v("\n                                        "+t._s(t.$formatCurrency(e))+"\n                                    ")])})],2),t._v(" "),a("tr",[a("th",[t._v("Actual Amount Paid")]),t._v(" "),t._l(t.activeOrder.actualAmountsPaid,function(e){return a("td",[t._v("\n                                        "+t._s(t.$formatCurrency(e))+"\n                                    ")])})],2),t._v(" "),a("tr",{staticClass:"table-separator"},[a("th",[t._v("Payment Method")]),t._v(" "),t._l(t.activeOrder.paymentMethods,function(e){return a("td",{staticClass:"text-capitalize"},[t._v("\n                                        "+t._s(t.convertPaymentMethodOrBankToName(e,"payment_methods"))+"\n                                    ")])})],2),t._v(" "),a("tr",[a("th",[t._v("Bank")]),t._v(" "),t._l(t.activeOrder.paymentBanks,function(e){return a("td",{staticClass:"text-capitalize"},[t._v("\n                                        "+t._s(t.convertPaymentMethodOrBankToName(e,"banks"))+"\n                                    ")])})],2)])]),t._v(" "),a("h5",{staticClass:"mt-5 mb-0"},[t._v("Payment Summary")]),t._v(" "),a("table",{staticClass:"table table-bordered"},[a("tbody",{staticClass:"text-center"},[a("tr",{staticClass:"table-separator"},[a("td",{staticClass:"text-left"},[t._v("Discount Detail (%)")]),t._v(" "),a("th",[t._v("\n                                        "+t._s(t._f("capitalize")(t.activeOrder.order.discount.name))+"\n                                        -\n                                        ("+t._s(t.activeOrder.order.discount.percentage_discount)+")\n                                    ")]),t._v(" "),a("td",[t._v("Total Before Discount")]),t._v(" "),a("th",[t._v(t._s(t.$formatCurrency(t.$roundDownAmt(t.activeOrder.order.product_price))))]),t._v(" "),a("td",[t._v("Total Paid")]),t._v(" "),a("th",[t._v(t._s(t.activeOrder.amountPaid))])]),t._v(" "),a("tr",[a("td",{staticClass:"text-left"},[t._v("Discount Amount")]),t._v(" "),a("th",[t._v(t._s(t.activeOrder.discountAmount))]),t._v(" "),a("td",[t._v("Total After Discount")]),t._v(" "),a("th",[t._v(t._s(t.activeOrder.discountedTotal))]),t._v(" "),a("td",[t._v("Total Debt")]),t._v(" "),a("th",[t._v(t._s(t.activeOrder.outstandingDebt))])]),t._v(" "),a("tr",[a("td",{staticClass:"text-left"},[t._v("Down Payment")]),t._v(" "),a("th",[t._v(t._s(t.$formatCurrency(t.$roundDownAmt(t.activeOrder.order.down_payment))))]),t._v(" "),a("td",[t._v("Total Plus Default Fee")]),t._v(" "),a("th",[t._v(t._s(t.activeOrder.totalPlusDefault))]),t._v(" "),a("td",[t._v("Default Fee")]),t._v(" "),a("th",[t._v(t._s(t.activeOrder.defaultFee))])])])]),t._v(" "),a("h5",{staticClass:"mt-5 mb-0"},[t._v("Add a new payment")]),t._v(" "),a("table",{staticClass:"table table-bordered"},[a("tbody",{staticClass:"text-center"},[a("tr",{staticClass:"table-separator"},[a("td",{staticClass:"text-left"},[t._v("S/No.")]),t._v(" "),a("th",[t._v("Repayment")]),t._v(" "),a("th",[t._v("Amount")]),t._v(" "),a("th",[t._v("Payment Method")]),t._v(" "),a("th",[t._v("Bank")]),t._v(" "),a("th",[t._v("Date")]),t._v(" "),a("th",[t._v("Collected By")]),t._v(" "),a("th",[t._v("Action")])]),t._v(" "),t._l(t.paymentForm.payments,function(e,r){return a("tr",[a("th",[t._v(t._s(r+1))]),t._v(" "),a("th",[a("div",{staticClass:"form-group mb-0"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.paymentForm.payments[r].column,expression:"paymentForm.payments[index].column"}],staticClass:"form-control",attrs:{name:"date",type:"text",disabled:""},domProps:{value:t.paymentForm.payments[r].column},on:{input:function(e){e.target.composing||t.$set(t.paymentForm.payments[r],"column",e.target.value)}}})])]),t._v(" "),a("th",[a("div",{staticClass:"form-group mb-0"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.paymentForm.payments[r]._pay,expression:"paymentForm.payments[index]._pay"}],staticClass:"form-control",attrs:{name:"date",type:"text"},domProps:{value:t.paymentForm.payments[r]._pay},on:{input:function(e){e.target.composing||t.$set(t.paymentForm.payments[r],"_pay",e.target.value)}}})])]),t._v(" "),a("th",[a("select",{directives:[{name:"model",rawName:"v-model",value:t.paymentForm.payments[r]._payment_method,expression:"paymentForm.payments[index]._payment_method"}],staticClass:"custom-select w-100",on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.$set(t.paymentForm.payments[r],"_payment_method",e.target.multiple?a:a[0])}}},t._l(t.payment_methods,function(e){var r=e.name,n=e.id;return a("option",{domProps:{value:n}},[t._v("\n                                                "+t._s(t._f("capitalize")(r))+"\n                                            ")])}))]),t._v(" "),a("th",[a("select",{directives:[{name:"model",rawName:"v-model",value:t.paymentForm.payments[r]._payment_bank,expression:"paymentForm.payments[index]._payment_bank"}],staticClass:"custom-select w-100",on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.$set(t.paymentForm.payments[r],"_payment_bank",e.target.multiple?a:a[0])}}},t._l(t.banks,function(e){var r=e.name,n=e.id;return a("option",{domProps:{value:n}},[t._v(t._s(r))])}))]),t._v(" "),a("th",[a("div",{staticClass:"form-group mb-0"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.paymentForm.payments[r]._date,expression:"paymentForm.payments[index]._date"}],staticClass:"form-control",attrs:{name:"date",type:"date"},domProps:{value:t.paymentForm.payments[r]._date},on:{input:function(e){e.target.composing||t.$set(t.paymentForm.payments[r],"_date",e.target.value)}}})])]),t._v(" "),a("th",[a("div",{staticClass:"form-group mb-0"},[a("input",{staticClass:"form-control",attrs:{"data-vv-as":"date",name:"date",type:"text",disabled:""},domProps:{value:t.user.full_name}})])]),t._v(" "),a("th",[a("button",{staticClass:"ml-2 btn status status-sm my-sm-2 not-approved",on:{click:function(e){t.deletePayment(r)}}},[a("i",{staticClass:"fas fa-times"})])])])})],2)])])]),t._v(" "),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn status my-sm-2",on:{click:function(e){t.addPaymentForm()}}},[t._v("Add Payment")]),t._v(" "),a("button",{staticClass:"btn status my-sm-2 approved ml-4",on:{click:function(e){t.preparePayments()}}},[t._v("Click here to\n                            Submit\n                            Payment(s)!\n                        ")]),t._v(" "),a("a",{staticClass:"text-link mt-3",staticStyle:{"text-align":"right"},attrs:{"data-dismiss":"modal",href:"javascript:"}},[t._v("close dialogue")])])]):t._e()])])],1)])},staticRenderFns:[]}},HY2W:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=d(a("Xxa5")),n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(t[r]=a[r])}return t},s=d(a("I3G/")),o=d(a("K23+")),i=a("p/p5"),l=d(a("EJ7O")),c=d(a("4I72")),u=a("rN6N");function d(t){return t&&t.__esModule?t:{default:t}}e.default={components:{CustomHeader:l.default,CustomerProfile:c.default},data:function(){return{customer:null,customer_id:"",user:null,show:!1,showModalContent:!1,activeOrder:null,banks:[],payment_methods:[],headers:["Date","Order No.","Product Name","Total Product Price","Percentage","Down Payment","Repayment Plans"],paymentForm:null}},methods:{updateView:function(t){var e=t.customer,a=t.user,r=t.banks,n=t.payment_methods;this.user=t.hasOwnProperty("user")?a:null,e.length?((e=e[0]).document.id||(e.document={id_card_url:"",passport_url:""}),s.default.set(this.$data,"banks",r),s.default.set(this.$data,"customer",e),s.default.set(this.$data,"payment_methods",n),this.show=!0):o.default.setError("Customer not found.",5e3),this.$LIPS(!1)},processForm:function(){var t=this;this.show=!1,this.$LIPS(!0),(0,i.get)("/api/customer/lookup/"+this.customer_id).then(function(e){return t.updateView(e.data)}).catch(function(){t.$LIPS(!1),o.default.setError("Error Fetching customer detail")})},displayAmortization:function(){var t,e=(t=r.default.mark(function t(e){return r.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.default.set(this.$data,"activeOrder",new u.Order(this.customer.orders[e],this.customer));case 2:return this.paymentForm={payments:[]},this.showModalContent=!0,t.abrupt("return",$("#amortization").modal("toggle"));case 5:case"end":return t.stop()}},t,this)}),function(){var e=t.apply(this,arguments);return new Promise(function(t,a){return function r(n,s){try{var o=e[n](s),i=o.value}catch(t){return void a(t)}if(!o.done)return Promise.resolve(i).then(function(t){r("next",t)},function(t){r("throw",t)});t(i)}("next")})});return function(t){return e.apply(this,arguments)}}(),convertPaymentMethodOrBankToName:function(t,e){return t?this.$data[e].find(function(e){return e.id===t}).name:null},addPaymentForm:function(){var t=this.activeOrder.repaymentLevel,e=parseInt(t+this.paymentForm.payments.length+1);t!==this.activeOrder._count&&(e>this.activeOrder._count||(this.paymentForm.payments.push(this.getFreshPayment()),this.reNumber()))},getFreshPayment:function(){return{_pay:this.activeOrder.amountsToBePaid[0],_date:this.$getDate(),_payment_method:"",_payment_bank:"",_col:"",column:""}},deletePayment:function(t){console.log("deleting...",t),this.paymentForm.payments.splice(t,1),this.reNumber()},reNumber:function(){var t=this,e=this.activeOrder.repaymentLevel;this.paymentForm.payments.forEach(function(a,r){var n=e+r+1;t.paymentForm.payments[r]._col=n,t.paymentForm.payments[r].column=t.$getColumn(n)+" Repayment"})},preparePayments:function(){var t=this,e={};this.paymentForm.payments.forEach(function(a){var r={},s=t.$getColumn(a._col);r[s+"_pay"]=a._pay,r[s+"_date"]=a._date,r[s+"_payment_bank"]=a._payment_bank,r[s+"_payment_method"]=a._payment_method,e=n({},e,r)}),this.activeOrder.payments=e,$.isEmptyObject(e)?o.default.setError("You have not added any payment."):this.savePayments()},savePayments:function(){var t=this;this.$LIPS(!0);var e,a=void 0,r=void 0;6===this.activeOrder.count&&(a="formal"),12===this.activeOrder.count&&(a="informal"),e={payments:this.activeOrder.payments,repayment_id:this.activeOrder.order.id,type:a},(0,i.post)("/api/repayment",e).then(function(n){n.data.saved&&((r=t.customer.orders.find(function(t){return t.id===e.repayment_id}))["repayment_"+a]=n.data.amortization,t.activeOrder=new u.Order(r,t.customer),t.paymentForm={payments:[]},t.$LIPS(!1))}).catch(function(){return o.default.setError("Error adding payment! Please try again later.")})}},computed:{check:function(){return!(!this.$isProcessing&&this.customer_id)}},created:function(){this.$prepareBranches()}}},N9TL:function(t,e,a){var r=a("VU/8")(a("HY2W"),a("H4Yb"),!1,function(t){a("Z8mg")},"data-v-dfc1a94e",null);t.exports=r.exports},SldL:function(t,e){!function(e){"use strict";var a,r=Object.prototype,n=r.hasOwnProperty,s="function"==typeof Symbol?Symbol:{},o=s.iterator||"@@iterator",i=s.asyncIterator||"@@asyncIterator",l=s.toStringTag||"@@toStringTag",c="object"==typeof t,u=e.regeneratorRuntime;if(u)c&&(t.exports=u);else{(u=e.regeneratorRuntime=c?t.exports:{}).wrap=C;var d="suspendedStart",m="suspendedYield",p="executing",v="completed",f={},h={};h[o]=function(){return this};var _=Object.getPrototypeOf,y=_&&_(_(E([])));y&&y!==r&&n.call(y,o)&&(h=y);var g=P.prototype=x.prototype=Object.create(h);w.prototype=g.constructor=P,P.constructor=w,P[l]=w.displayName="GeneratorFunction",u.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===w||"GeneratorFunction"===(e.displayName||e.name))},u.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,P):(t.__proto__=P,l in t||(t[l]="GeneratorFunction")),t.prototype=Object.create(g),t},u.awrap=function(t){return{__await:t}},k(D.prototype),D.prototype[i]=function(){return this},u.AsyncIterator=D,u.async=function(t,e,a,r){var n=new D(C(t,e,a,r));return u.isGeneratorFunction(e)?n:n.next().then(function(t){return t.done?t.value:n.next()})},k(g),g[l]="Generator",g[o]=function(){return this},g.toString=function(){return"[object Generator]"},u.keys=function(t){var e=[];for(var a in t)e.push(a);return e.reverse(),function a(){for(;e.length;){var r=e.pop();if(r in t)return a.value=r,a.done=!1,a}return a.done=!0,a}},u.values=E,A.prototype={constructor:A,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=a,this.done=!1,this.delegate=null,this.method="next",this.arg=a,this.tryEntries.forEach($),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=a)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=a),!!n}for(var s=this.tryEntries.length-1;s>=0;--s){var o=this.tryEntries[s],i=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var l=n.call(o,"catchLoc"),c=n.call(o,"finallyLoc");if(l&&c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(l){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(t,e){for(var a=this.tryEntries.length-1;a>=0;--a){var r=this.tryEntries[a];if(r.tryLoc<=this.prev&&n.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var s=r;break}}s&&("break"===t||"continue"===t)&&s.tryLoc<=e&&e<=s.finallyLoc&&(s=null);var o=s?s.completion:{};return o.type=t,o.arg=e,s?(this.method="next",this.next=s.finallyLoc,f):this.complete(o)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var a=this.tryEntries[e];if(a.finallyLoc===t)return this.complete(a.completion,a.afterLoc),$(a),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var a=this.tryEntries[e];if(a.tryLoc===t){var r=a.completion;if("throw"===r.type){var n=r.arg;$(a)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:E(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=a),f}}}function C(t,e,a,r){var n=e&&e.prototype instanceof x?e:x,s=Object.create(n.prototype),o=new A(r||[]);return s._invoke=function(t,e,a){var r=d;return function(n,s){if(r===p)throw new Error("Generator is already running");if(r===v){if("throw"===n)throw s;return L()}for(a.method=n,a.arg=s;;){var o=a.delegate;if(o){var i=O(o,a);if(i){if(i===f)continue;return i}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if(r===d)throw r=v,a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);r=p;var l=b(t,e,a);if("normal"===l.type){if(r=a.done?v:m,l.arg===f)continue;return{value:l.arg,done:a.done}}"throw"===l.type&&(r=v,a.method="throw",a.arg=l.arg)}}}(t,a,o),s}function b(t,e,a){try{return{type:"normal",arg:t.call(e,a)}}catch(t){return{type:"throw",arg:t}}}function x(){}function w(){}function P(){}function k(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function D(t){var e;this._invoke=function(a,r){function s(){return new Promise(function(e,s){!function e(a,r,s,o){var i=b(t[a],t,r);if("throw"!==i.type){var l=i.arg,c=l.value;return c&&"object"==typeof c&&n.call(c,"__await")?Promise.resolve(c.__await).then(function(t){e("next",t,s,o)},function(t){e("throw",t,s,o)}):Promise.resolve(c).then(function(t){l.value=t,s(l)},o)}o(i.arg)}(a,r,e,s)})}return e=e?e.then(s,s):s()}}function O(t,e){var r=t.iterator[e.method];if(r===a){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=a,O(t,e),"throw"===e.method))return f;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return f}var n=b(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,f;var s=n.arg;return s?s.done?(e[t.resultName]=s.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=a),e.delegate=null,f):s:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function F(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function $(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function A(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(F,this),this.reset(!0)}function E(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,s=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=a,e.done=!0,e};return s.next=s}}return{next:L}}function L(){return{value:a,done:!0}}}(function(){return this}()||Function("return this")())},WiSW:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=o(a("I3G/")),n=(a("N71M"),a("nv24")),s=o(a("1gIg"));function o(t){return t&&t.__esModule?t:{default:t}}e.default={props:["viewCustomer"],components:{AppNavigation:s.default},data:function(){return{customer:"",show:!1}},computed:{full:function(){return"full"===this.$route.meta.mode},passport:function(){return"https://s3.eu-west-2.amazonaws.com/altara-one/"+this.customer.document.passport_url},branch:function(){return this.customer.branch.description+" "+this.customer.branch.name},approved:function(){return this.$getCustomerApprovalStatus(this.customer.verification)}},created:function(){var t=this;$(".tooltip").remove(),this.viewCustomer&&this.setCustomer(this.viewCustomer),n.EventBus.$on("customer",function(e){return t.setCustomer(e)})},methods:{setCustomer:function(t){r.default.set(this.$data,"customer",t),this.show=!0}}}},Xxa5:function(t,e,a){t.exports=a("jyFz")},Z8mg:function(t,e,a){var r=a("cuZ9");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);a("rjj0")("3b2512ce",r,!0,{})},cuZ9:function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,".attendance-item[data-v-dfc1a94e]{cursor:auto}",""])},jyFz:function(t,e,a){var r=function(){return this}()||Function("return this")(),n=r.regeneratorRuntime&&Object.getOwnPropertyNames(r).indexOf("regeneratorRuntime")>=0,s=n&&r.regeneratorRuntime;if(r.regeneratorRuntime=void 0,t.exports=a("SldL"),n)r.regeneratorRuntime=s;else try{delete r.regeneratorRuntime}catch(t){r.regeneratorRuntime=void 0}},nv24:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.EventBus=void 0;var r,n=a("I3G/"),s=(r=n)&&r.__esModule?r:{default:r};e.EventBus=new s.default},oKx2:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{title:"",buttonTitle:null,to:null}}},r37U:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("transition",{attrs:{name:"fade"}},[a("div",{class:t.full&&"px-md-4 px-2"},[t.full?a("app-navigation",{attrs:{forward:{path:t.$routerHistory.next().path},previous:{path:t.$routerHistory.previous().path},pageTitle:"Customer Profile",pageTitleSmall:"Customer Profile"}}):t._e(),t._v(" "),t.show?a("div",{staticClass:"pt-md-3 pt-2 verification",attrs:{id:"employeeRegister"}},[a("div",{staticClass:"customer-profile card position-relative"},[a("div",{staticClass:"design"}),t._v(" "),a("div",{staticClass:"col-md-4 col-sm-4 col-12 px-0 pb-md-4 pb-sm-3 pb-0 pt-md-5 pt-4 float-left"},[a("div",{staticClass:"pt-md-3 pt-sm-2 pt-1"},[a("div",{staticClass:"justify-content-center d-flex position-relative z-1"},[a("span",{staticClass:"img-border"},[t.customer.document.passport_url?a("img",{staticClass:"profile-picture rounded-circle",attrs:{src:t.passport,alt:"customer profile pic"}}):a("i",{staticClass:"no-image fas fa-user-alt"})])]),t._v(" "),a("div",{staticClass:"justify-content-center d-flex position-relative z-1 pt-md-4 pt-sm-4 pt-2"},[a("span",{staticClass:"w-50"},[a("div",{staticClass:"text-right px-4 py-3 text-light text-muted m-0"},[t._v("\n                                    Status"),a("i",{staticClass:"ml-3 fas fa-briefcase"})]),t._v(" "),a("div",{staticClass:"data text-right px-4 py-3 m-0"},[t._v(t._s(t._f("capitalize")(t.customer.employment_status)))])]),t._v(" "),a("span",{staticClass:"separator"}),t._v(" "),a("span",{staticClass:"w-50"},[a("div",{staticClass:"px-4 py-3 text-muted text-light m-0"},[a("i",{staticClass:"mr-3 fas fa-transgender"}),t._v("Gender\n                                ")]),t._v(" "),a("div",{staticClass:"data px-4 py-3 m-0"},[t._v(t._s(t._f("capitalize")(t.customer.gender)))])])])])]),t._v(" "),a("div",{staticClass:"col-md-8 col-sm-8 col-12 px-0 pb-4 pt-md-5 pt-sm-5 pt-0 float-left"},[a("div",{staticClass:"pt-md-4 pt-0 clearfix"},[a("div",{staticClass:"float-left p-0 m-0 col-md-4 col-sm-6 small-center"},[a("h4",{staticClass:"mt-0 pt-md-5 pt-sm-4 pt-0 mb-md-5 mb-sm-4 mb-3"},[a("i",{staticClass:"mr-3 far fa-user-circle"}),t._v(" "),a("strong",[t._v(t._s(t._f("capitalize")(t.$getCustomerFullName(t.customer))))])])]),t._v(" "),a("div",{staticClass:"float-left p-0 m-0 col-md-4 col-sm-6 d-flex justify-content-center"},[a("h4",{staticClass:"mt-0 pt-md-5 pt-sm-4 pt-0 mb-md-5 mb-sm-4 mb-4 text-muted"},[a("strong",[t._v("Customer ID: "+t._s(t.customer.id))])])]),t._v(" "),a("div",{staticClass:"float-left p-0 m-0 col-md-4 col-12 d-flex justify-content-center"},[a("span",{class:"status mt-md-5 my-sm-2 mt-0 "+(t.approved?"approved":"not-approved")},[t._v("\n                                "+t._s(t.approved?"APPROVED":"NOT APPROVED")+"\n                                "),a("i",{class:"ml-3 fas fa-"+(t.approved?"check":"times")})])])]),t._v(" "),a("div",{staticClass:"pt-4"},[a("table",{staticClass:"table"},[a("tbody",[a("tr",[a("th",{staticClass:"text-muted"},[a("i",{staticClass:"mr-3 fas fa-mobile-alt"}),t._v("Phone Number")]),t._v(" "),a("td",[t._v(t._s(t.customer.telephone))])]),t._v(" "),t.$store.getters.auth("DVAAccess")?a("tr",[a("th",{staticClass:"text-muted"},[a("i",{staticClass:"mr-3 fas fa-map-marker-alt"}),t._v("Address")]),t._v(" "),a("td",[t._v(t._s(t._f("capitalize")(t.$getCustomerAddress(t.customer)))+"\n                                ")])]):t._e(),t._v(" "),a("tr",[a("th",{staticClass:"text-muted"},[a("i",{staticClass:"mr-3 fas fa-gift"}),t._v("Registered On")]),t._v(" "),a("td",[t._v(t._s(t.customer.date_of_registration))])]),t._v(" "),a("tr",[a("th",{staticClass:"text-muted"},[a("i",{staticClass:"mr-3 far fa-user-circle"}),t._v("Registered By")]),t._v(" "),a("td",[t._v(t._s(t._f("capitalize")(t.customer.user?t.customer.user.full_name:"user not in record"))+"\n                                ")])]),t._v(" "),a("tr",[a("th",{staticClass:"text-muted"},[a("i",{staticClass:"mr-3 far fa-building"}),t._v("Branch")]),t._v(" "),a("td",[t._v(t._s(t._f("capitalize")(t.branch)))])])])])])])]),t._v(" "),t.full?a("div",[t._v("Full profile goes here")]):t._e()]):t._e()],1)])},staticRenderFns:[]}},rN6N:function(t,e,a){"use strict";var r,n=function(){function t(t,e){for(var a=0;a<e.length;a++){var r=e[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,a,r){return a&&t(e.prototype,a),r&&t(e,r),e}}(),s=a("I3G/"),o=(r=s)&&r.__esModule?r:{default:r},i=a("N71M");var l=new o.default,c=function(){function t(e,a){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._order=e,this._customer=a,this._paymentBanks=[],this._paymentMethods=[],this._actualPayDates=[],this._actualAmountsPaid=[],this._amountsToBePaid=[],this._repaymentCaptions=[],this._paymentStatusClasses=[],this._repaymentLevel=0,this._amountPaid=null,this._discountAmount=null,this._outstandingDebt=null,this._discountedTotal=null,this._defaultFee=null,this._totalPlusDefault=null,this._payments={},this.setIsOrderFormal(),this.setIsRepaymentValid(),this.setRepaymentData(),this.setCountAndInterval(),this.setCommonDetails(),this.setDueDates(),this.setPaymentStatusClasses(),this.calcAndSetPaymentSummary(),this.setBranch()}return n(t,[{key:"setIsRepaymentValid",value:function(){this._isRepaymentValid=!(!this.order.repayment_formal&&!this.order.repayment_informal)}},{key:"setIsOrderFormal",value:function(){this._isOrderFormal=["formal","salaried"].includes(this._customer.employment_status.toLowerCase())}},{key:"setRepaymentData",value:function(){null!=this.order.repayment_formal&&(this._repaymentData=this.order.repayment_formal),null!=this.order.repayment_informal&&(this._repaymentData=this.order.repayment_informal)}},{key:"setCountAndInterval",value:function(){var e=void 0,a=void 0;new Date(this.order.order_date)<=new Date("2019-07-07")?(null!=this.order.repayment_formal&&(e=28,a=6),null!=this.order.repayment_informal&&(e=14,a=12)):t.isBankDraftAvailable()&&this.isOrderFormal?(e=28,a=6):(e=14,a=12),this._count=a,this._interval=e}},{key:"setDueDates",value:function(){this._dueDates=t.generateDueDates(this.order.order_date,this.interval,this.count)}},{key:"setCommonDetails",value:function(){for(var t=1;t<this.count+1;t++){for(var e=l.$getColumn(t).split(""),a=[],r=1;r<=2;r++)a.unshift(e.pop());this._repaymentCaptions.push("<td>"+e.join("")+"<sup>"+a.join("")+"</sup></td>"),this._actualPayDates.push(this.repaymentData[l.$getColumn(t)+"_date"]),this._actualAmountsPaid.push(this.repaymentData[l.$getColumn(t)+"_pay"]),this._paymentBanks.push(this.repaymentData[l.$getColumn(t)+"_payment_bank"]),this._paymentMethods.push(this.repaymentData[l.$getColumn(t)+"_payment_method"]),this._amountsToBePaid.push(l.$roundDownAmt(this.order.repayment_amount)),this.repaymentData[l.$getColumn(t)+"_pay"]>0&&this._repaymentLevel++}}},{key:"setBranch",value:function(){var t=this;this._branch=i.store.state.branches.find(function(e){return parseInt(e.id)===parseInt(t.order.store_product.store_name)})}},{key:"setPaymentStatusClasses",value:function(){this.isRepaymentValid||(this._paymentStatusClasses=null);for(var e=1;e<this.count+1;e++){var a={class:null,icon:null},r=l.$getColumn(e),n=t.isPaymentDue(this.dueDates[e-1]),s=parseInt(this.repaymentData[r+"_pay"]);s?(a.class="paid",a.icon="fa-check"):n&&!s?(a.class="missed",a.icon="fa-times"):n||(a.class="pending",a.icon="fa-hourglass-start"),this._paymentStatusClasses.push(a)}}},{key:"calcAndSetPaymentSummary",value:function(){var e=this,a=[],r=function(t){return l.$formatCurrency(t)},n=l.$roundDownAmt(parseInt(this.order.down_payment));if(this.dueDates.forEach(function(r,n){return t.isPaymentDue(l.$getDate(new Date(r).addDays(5)))&&a.push({dueDate:r,actualPayDate:e.actualPayDates[n]})}),this.repaymentData)for(var s=1;s<this.count+1;s++){var o=parseInt(this.actualAmountsPaid[s]);n+=o?l.$roundDownAmt(o):0}else n=0;var i=this.order.discount.percentage_discount,c=6===this.count?.5:1,u=this.order.repayment_amount*c*(i>0?5===i?1:2:0);u=l.$roundDownAmt(u);var d=500*a.length,m=l.$roundDownAmt(this.order.product_price-u);this._amountPaid=r(n),this._discountAmount=r(l.$roundDownAmt(u)),this._outstandingDebt=r(l.$roundDownAmt(parseInt(this.order.product_price)-n)),this._discountedTotal=r(m),this._defaultFee=r(d),this._totalPlusDefault=r(m+d)}},{key:"payments",set:function(t){this._payments=t},get:function(){return this._payments}},{key:"repaymentLevel",get:function(){return this._repaymentLevel}},{key:"order",get:function(){return this._order}},{key:"isRepaymentValid",get:function(){return this._isRepaymentValid}},{key:"isOrderFormal",get:function(){return this._isOrderFormal}},{key:"repaymentData",get:function(){return this._repaymentData}},{key:"count",get:function(){return this._count}},{key:"interval",get:function(){return this._interval}},{key:"dueDates",get:function(){return this._dueDates}},{key:"paymentStatusClasses",get:function(){return this._paymentStatusClasses}},{key:"repaymentCaptions",get:function(){return this._repaymentCaptions}},{key:"paymentBanks",get:function(){return this._paymentBanks}},{key:"paymentMethods",get:function(){return this._paymentMethods}},{key:"actualPayDates",get:function(){return this._actualPayDates}},{key:"actualAmountsPaid",get:function(){return this._actualAmountsPaid}},{key:"amountsToBePaid",get:function(){return this._amountsToBePaid}},{key:"amountPaid",get:function(){return this._amountPaid}},{key:"discountAmount",get:function(){return this._discountAmount}},{key:"outstandingDebt",get:function(){return this._outstandingDebt}},{key:"discountedTotal",get:function(){return this._discountedTotal}},{key:"defaultFee",get:function(){return this._defaultFee}},{key:"totalPlusDefault",get:function(){return this._totalPlusDefault}},{key:"branch",get:function(){return this._branch}}],[{key:"generateDueDates",value:function(t,e,a){for(var r=[],n=0;n<a;n++){var s=new Date(t).addDays((n+1)*e),o=l.$getDate(s);r.push(o)}return r}},{key:"isPaymentDue",value:function(t){return new Date>new Date(t)}},{key:"isBankDraftAvailable",value:function(){return!1}}]),t}();t.exports={Order:c}},rjj0:function(t,e,a){var r="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!r)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var n=a("tTVk"),s={},o=r&&(document.head||document.getElementsByTagName("head")[0]),i=null,l=0,c=!1,u=function(){},d=null,m="data-vue-ssr-id",p="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function v(t){for(var e=0;e<t.length;e++){var a=t[e],r=s[a.id];if(r){r.refs++;for(var n=0;n<r.parts.length;n++)r.parts[n](a.parts[n]);for(;n<a.parts.length;n++)r.parts.push(h(a.parts[n]));r.parts.length>a.parts.length&&(r.parts.length=a.parts.length)}else{var o=[];for(n=0;n<a.parts.length;n++)o.push(h(a.parts[n]));s[a.id]={id:a.id,refs:1,parts:o}}}}function f(){var t=document.createElement("style");return t.type="text/css",o.appendChild(t),t}function h(t){var e,a,r=document.querySelector("style["+m+'~="'+t.id+'"]');if(r){if(c)return u;r.parentNode.removeChild(r)}if(p){var n=l++;r=i||(i=f()),e=g.bind(null,r,n,!1),a=g.bind(null,r,n,!0)}else r=f(),e=function(t,e){var a=e.css,r=e.media,n=e.sourceMap;r&&t.setAttribute("media",r);d.ssrId&&t.setAttribute(m,e.id);n&&(a+="\n/*# sourceURL="+n.sources[0]+" */",a+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */");if(t.styleSheet)t.styleSheet.cssText=a;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(a))}}.bind(null,r),a=function(){r.parentNode.removeChild(r)};return e(t),function(r){if(r){if(r.css===t.css&&r.media===t.media&&r.sourceMap===t.sourceMap)return;e(t=r)}else a()}}t.exports=function(t,e,a,r){c=a,d=r||{};var o=n(t,e);return v(o),function(e){for(var a=[],r=0;r<o.length;r++){var i=o[r];(l=s[i.id]).refs--,a.push(l)}e?v(o=n(t,e)):o=[];for(r=0;r<a.length;r++){var l;if(0===(l=a[r]).refs){for(var c=0;c<l.parts.length;c++)l.parts[c]();delete s[l.id]}}}};var _,y=(_=[],function(t,e){return _[t]=e,_.filter(Boolean).join("\n")});function g(t,e,a,r){var n=a?"":r.css;if(t.styleSheet)t.styleSheet.cssText=y(e,n);else{var s=document.createTextNode(n),o=t.childNodes;o[e]&&t.removeChild(o[e]),o.length?t.insertBefore(s,o[e]):t.appendChild(s)}}},tTVk:function(t,e){t.exports=function(t,e){for(var a=[],r={},n=0;n<e.length;n++){var s=e[n],o=s[0],i={id:t+":"+n,css:s[1],media:s[2],sourceMap:s[3]};r[o]?r[o].parts.push(i):a.push(r[o]={id:o,parts:[i]})}return a}},wBhk:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["pageTitle","pageTitleSmall","previous","forward"]}}});
>>>>>>> 976efb13563114c356a829a8b2f4c56625bbae52
=======
});
>>>>>>> ed6e59048439b31995f360ff7e04db059d027dbb
