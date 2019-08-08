<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
webpackJsonp([3],{

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"babel-preset-env\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"babel-plugin-syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/OrderItem.vue":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _api = __webpack_require__("./resources/assets/js/utilities/api.js");

var _flash = __webpack_require__("./resources/assets/js/utilities/flash.js");

var _flash2 = _interopRequireDefault(_flash);

var _eventBus = __webpack_require__("./resources/assets/js/utilities/event-bus.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } } //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
        }
    }
};

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"babel-preset-env\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"babel-plugin-syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/Orders.vue":
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
        };
    },


    methods: {
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

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"babel-preset-env\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"babel-plugin-syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/views/DVA/reminder/reminder.vue":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Orders = __webpack_require__("./resources/assets/js/components/Orders.vue");

var _Orders2 = _interopRequireDefault(_Orders);

var _eventBus = __webpack_require__("./resources/assets/js/utilities/event-bus.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } } //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    components: { Order: _Orders2.default },

    data: function data() {
        return {
            listToOrder: null,
            doSelectAll: false
        };
    },


    methods: {
        selectAll: function selectAll() {
            this.doSelectAll = !this.doSelectAll;
            _eventBus.EventBus.$emit('selectOrderItem', this.doSelectAll);
        },
        mode: function mode() {
            var query = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
            var mode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.$route.meta.mode.toLowerCase();

            return query ? mode === query : mode;
        }
    },

    computed: {
        details: function details() {
            var list = 1,
                tabs = ["1<sup>st</sup>", "2<sup>nd</sup>", "3<sup>rd</sup>"],
                headings = ['Order Number', 'Order Summary', 'Customer Info Summary', 'Repayment Summary', 'Reminder History'];
            switch (this.mode()) {
                case 'call':
                    list = 4;
                    tabs = [].concat(_toConsumableArray(tabs), ["Guarantor's", "Promise"]);
                    headings = [].concat(_toConsumableArray(headings), ['Feedback', 'Promise Date']);
                    break;
                case 'collection':
                    list = 9;
                    tabs.splice(2, 1);
                    headings = [].concat(_toConsumableArray(headings), ['Visited?', 'Feedback']);
                    break;
                case 'recovery':
                    list = 11;
                    headings = [].concat(_toConsumableArray(headings), ['Visited?', 'Feedback']);
                    break;
            }
            if (!this.listToOrder) this.listToOrder = list;
            return { tabs: tabs, headings: headings, list: list };
        }
    }
};

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-426fb2d2\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/views/DVA/reminder/reminder.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.attendance-head .light-heading[data-v-426fb2d2]:nth-child(1) {\n    max-width: 120px;\n}\n", ""]);

// exports


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

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-426fb2d2\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/views/DVA/reminder/reminder.vue":
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
        _c("div", { staticClass: "mt-5 mb-3 attendance-head" }, [
          _c(
            "ul",
            {
              staticClass: "nav nav-tabs justify-content-center p-0",
              attrs: { role: "tablist" }
            },
            _vm._l(_vm.details.tabs, function(tab, index) {
              return _c("li", { staticClass: "col p-0 nav-item mb-0" }, [
                _c("a", {
                  staticClass: "nav-link",
                  class: index === 0 && "active",
                  attrs: {
                    "aria-selected": "true",
                    "data-toggle": "tab",
                    href: "#reminder-panel",
                    role: "tab"
                  },
                  domProps: { innerHTML: _vm._s(tab + " " + _vm.mode()) },
                  on: {
                    click: function($event) {
                      _vm.listToOrder = _vm.details.list + index
                    }
                  }
                })
              ])
            })
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "mt-5 mb-3 attendance-head" }, [
          _c(
            "div",
            { staticClass: "row px-4 pt-3 pb-4 text-center" },
            [
              _vm.mode("sms")
                ? _c(
                    "div",
                    {
                      staticClass: "col p-0 text-link",
                      staticStyle: { "max-width": "120px" },
                      on: { click: _vm.selectAll }
                    },
                    [
                      _vm._v(
                        "\n                    Click to " +
                          _vm._s(_vm.doSelectAll ? "De-select" : "Select") +
                          " all\n                "
                      )
                    ]
                  )
                : _c("div", { staticClass: "col light-heading" }, [
                    _vm._v("Action")
                  ]),
              _vm._v(" "),
              _vm._l(_vm.details.headings, function(header) {
                return _c("div", { staticClass: "col light-heading" }, [
                  _vm._v(_vm._s(header))
                ])
              })
            ],
            2
          )
        ]),
        _vm._v(" "),
        _c("order", { attrs: { list: _vm.listToOrder, mode: _vm.mode() } })
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
    require("vue-hot-reload-api")      .rerender("data-v-426fb2d2", module.exports)
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
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-5522319a", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-57fa0ac8\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/Orders.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
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
                                  index
                                ) {
                                  return _c("tr", [
                                    _c("th", [_vm._v(_vm._s(index + 1))]),
                                    _vm._v(" "),
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

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-426fb2d2\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/views/DVA/reminder/reminder.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-426fb2d2\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/views/DVA/reminder/reminder.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("73a6dfad", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-426fb2d2\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./reminder.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-426fb2d2\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./reminder.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-57fa0ac8\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/Orders.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-57fa0ac8\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/Orders.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("182478d3", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-57fa0ac8\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Orders.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-57fa0ac8\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Orders.vue");
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

/***/ "./resources/assets/js/components/OrderItem.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"babel-preset-env\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"babel-plugin-syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/OrderItem.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-5522319a\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/OrderItem.vue")
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
Component.options.__file = "resources\\assets\\js\\components\\OrderItem.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5522319a", Component.options)
  } else {
    hotAPI.reload("data-v-5522319a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

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
Component.options.__file = "resources\\assets\\js\\components\\Orders.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-57fa0ac8", Component.options)
  } else {
    hotAPI.reload("data-v-57fa0ac8", Component.options)
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

/***/ "./resources/assets/js/views/DVA/reminder/reminder.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-426fb2d2\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/views/DVA/reminder/reminder.vue")
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"babel-preset-env\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"babel-plugin-syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/views/DVA/reminder/reminder.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-426fb2d2\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/views/DVA/reminder/reminder.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-426fb2d2"
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
Component.options.__file = "resources\\assets\\js\\views\\DVA\\reminder\\reminder.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-426fb2d2", Component.options)
  } else {
    hotAPI.reload("data-v-426fb2d2", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});
=======
webpackJsonp([3],{"4R38":function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.show?a("div",{staticClass:"tab-content mt-1 attendance-body"},[a("div",{staticClass:"tab-pane active text-center",attrs:{id:"reminder-panel",role:"tabpanel"}},t._l(t.orders,function(e,r){return a("order-item",{key:e.id,attrs:{index:r,"start-index":t.startIndex,order:e,dva_id:t.dva_id,"is-repayment-valid":t.isRepaymentValid(e),"pay-summary":t.calcPaymentSummary(e),"repayment-level":t.getRepaymentLevel(e),mode:t.mode},on:{done:function(e){t.fetchList(t.list)},updateReminderList:t.updateReminder,display:t.displayDetails}})})),t._v(" "),"normal-list"!=t.mode?a("div",{staticClass:"w-100 my-5 mx-0 hr"}):t._e()]):a("div",{staticClass:"tab-content mt-1 attendance-body"},[t._m(0)]),t._v(" "),t.show&&"sms"===t.mode?a("div",{staticClass:"mt-1 attendance-body"},[a("div",{staticClass:"mb-5 px-0 row align-items-center"},[a("div",{staticClass:"clearfix d-flex justify-content-end w-100"},[a("button",{staticClass:"btn bg-default",attrs:{disabled:t.$isProcessing},on:{click:t.processSelected}},[t._v("\n                    Send Reminder(s) "),a("i",{staticClass:"far fa-paper-plane ml-1"})])])])]):t._e(),t._v(" "),a("div",{staticClass:"modal fade",attrs:{id:"purchase_order"}},[a("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[a("div",{staticClass:"modal-content"},[t._m(1),t._v(" "),t.showModalContent?a("div",{staticClass:"modal-body"},[a("div",{staticClass:"table-responsive"},[a("table",{staticClass:"table table-bordered table-striped"},[a("tbody",[a("tr",[a("th",[t._v("Order ID")]),t._v(" "),a("td",[t._v(t._s(t.currentOrder.id))])]),t._v(" "),a("tr",[a("th",[t._v("Order date")]),t._v(" "),a("td",[t._v(t._s(t.currentOrder.order_date))])]),t._v(" "),a("tr",[a("th",[t._v("Product")]),t._v(" "),a("td",[t._v(t._s(t.currentOrder.store_product.product_name))])]),t._v(" "),a("tr",[a("th",[t._v("Repayment")]),t._v(" "),a("td",[t._v(t._s(t.$formatCurrency(t.currentOrder.repayment_amount)))])]),t._v(" "),a("tr",[a("th",[t._v("Down Payment")]),t._v(" "),a("td",[t._v(t._s(t.$formatCurrency(t.currentOrder.down_payment)))])]),t._v(" "),a("tr",[a("th",[t._v("Discount (%)")]),t._v(" "),a("td",[t._v(t._s(t._f("capitalize")(t.getDiscount(t.currentOrder))))])]),t._v(" "),a("tr",[a("th",[t._v("Sale Type")]),t._v(" "),a("td",[t._v(t._s(t._f("capitalize")(t.currentOrder.sales_type.name)))])]),t._v(" "),a("tr",[a("th",[t._v("Total amount to Pay")]),t._v(" "),a("td",[t._v(t._s(t.$formatCurrency(t.currentOrder.product_price)))])]),t._v(" "),a("tr",[a("th",[t._v("Processed by")]),t._v(" "),a("td",[t._v(t._s(t.currentOrder.floor_agent?t.currentOrder.floor_agent.full_name:null))])])])])])]):t._e(),t._v(" "),t._m(2)])])]),t._v(" "),a("div",{staticClass:"modal fade",attrs:{id:"customer_info"}},[a("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[a("div",{staticClass:"modal-content"},[t._m(3),t._v(" "),t.showModalContent?a("div",{staticClass:"modal-body"},[a("div",{staticClass:"table-responsive"},[a("table",{staticClass:"table table-bordered table-striped"},[a("tbody",[a("tr",[a("th",[t._v("Customer ID")]),t._v(" "),a("td",[t._v(t._s(t.currentOrder.customer.id))])]),t._v(" "),a("tr",[a("th",[t._v("Full Name")]),t._v(" "),a("td",[t._v(t._s(t.$getCustomerFullName(t.currentOrder.customer)))])]),t._v(" "),a("tr",[a("th",[t._v("Address")]),t._v(" "),a("td",[t._v(t._s(t.$getCustomerAddress(t.currentOrder.customer)))])]),t._v(" "),a("tr",[a("th",[t._v("Phone")]),t._v(" "),a("td",[t._v(t._s(t.currentOrder.customer.telephone))])]),t._v(" "),a("tr",[a("th",[t._v("Branch")]),t._v(" "),a("td",[t._v(t._s(t.currentOrder.customer.branch.name))])]),t._v(" "),a("tr",[a("th",[t._v("Category")]),t._v(" "),a("td",[t._v(t._s(t.currentOrder.customer.employment_status))])]),t._v(" "),a("tr",[a("th",[t._v("Work guarantor name")]),t._v(" "),a("td",[t._v(t._s(t.currentOrder.customer.work_guarantor_first_name+" "+t.currentOrder.customer.work_guarantor_last_name+" - "+t.currentOrder.customer.work_guarantor_relationship)+"\n                                ")])]),t._v(" "),a("tr",[a("th",[t._v("Work guarantor phone")]),t._v(" "),a("td",[t._v(t._s(t.currentOrder.customer.work_guarantor_telno))])]),t._v(" "),a("tr",[a("th",[t._v("Personal guarantor name")]),t._v(" "),a("td",[t._v(t._s(t.currentOrder.customer.personal_guarantor_first_name+" "+t.currentOrder.customer.personal_guarantor_last_name+" - "+t.currentOrder.customer.personal_guarantor_relationship)+"\n                                ")])]),t._v(" "),a("tr",[a("th",[t._v("Personal guarantor phone")]),t._v(" "),a("td",[t._v(t._s(t.currentOrder.customer.personal_guarantor_telno))])]),t._v(" "),a("tr",[a("th",[t._v("Verified by")]),t._v(" "),a("td",[a("router-link",{staticClass:"text-link",attrs:{target:"_blank",to:"/dva/verification?id="+t.currentOrder.customer.id}},[t._v("\n                                        click here to see verifications status\n                                    ")])],1)])])])])]):t._e(),t._v(" "),t._m(4)])])]),t._v(" "),a("div",{staticClass:"modal fade repayment",attrs:{id:"repayment"}},[a("div",{staticClass:"modal-dialog modal-xl",attrs:{role:"document"}},[t.showModalContent?a("div",{staticClass:"modal-content"},[a("div",{staticClass:"modal-header py-2"},[a("h6",{staticClass:"modal-title py-1"},[t._v("\n                        Repayment Plan/Summary - "+t._s(t._f("capitalize")(t.currentOrder.customer.employment_status))+"\n                    ")]),t._v(" "),t._m(5)]),t._v(" "),a("div",{staticClass:"modal-body"},[a("div",{staticClass:"table-responsive"},[a("h5",{staticClass:"mt-3 mb-0"},[t._v("Amortization Schedule")]),t._v(" "),a("table",{staticClass:"table table-bordered"},[a("tbody",{staticClass:"text-center"},[a("tr",[a("th",[t._v("Repayment")]),t._v(" "),t._l(t.repaymentCaption(t.currentOrder),function(e){return a("td",{domProps:{innerHTML:t._s(e)}})})],2),t._v(" "),a("tr",{staticClass:"table-separator"},[a("th",[t._v("Due Date")]),t._v(" "),t._l(t.getRepayment(t.currentOrder),function(e){return a("td",[t._v(t._s(e))])})],2),t._v(" "),a("tr",[a("th",[t._v("Actual Pay Day")]),t._v(" "),t._l(t.getRepayment(t.currentOrder,"_date"),function(e){return a("td",[t._v(t._s(e))])})],2),t._v(" "),a("tr",{staticClass:"table-separator"},[a("th",[t._v("Status")]),t._v(" "),t._l(t.getPaymentStatusClasses(t.currentOrder),function(t){return a("td",{class:t.class},[a("i",{staticClass:"fas",class:t.icon})])})],2),t._v(" "),a("tr",{staticClass:"table-separator"},[a("th",[t._v("Repayment Amount")]),t._v(" "),t._l(t.getRepayment(t.currentOrder,"repayments"),function(e){return a("td",[t._v("\n                                    "+t._s(t.$formatCurrency(e))+"\n                                ")])})],2),t._v(" "),a("tr",[a("th",[t._v("Actual Amount Paid")]),t._v(" "),t._l(t.getRepayment(t.currentOrder,"_pay"),function(e){return a("td",[t._v("\n                                    "+t._s(t.$formatCurrency(e))+"\n                                ")])})],2),t._v(" "),a("tr",{staticClass:"table-separator"},[a("th",[t._v("Payment Method")]),t._v(" "),t._l(t.getRepayment(t.currentOrder,"_payment_method"),function(e){return a("td",{staticClass:"text-capitalize"},[t._v("\n                                    "+t._s(t.convertPaymentMethodOrBankToName(e,"payment_methods"))+"\n                                ")])})],2),t._v(" "),a("tr",[a("th",[t._v("Bank")]),t._v(" "),t._l(t.getRepayment(t.currentOrder,"_payment_bank"),function(e){return a("td",{staticClass:"text-capitalize"},[t._v("\n                                    "+t._s(t.convertPaymentMethodOrBankToName(e,"banks"))+"\n                                ")])})],2)])]),t._v(" "),a("h5",{staticClass:"mt-5 mb-0"},[t._v("Payment Summary")]),t._v(" "),a("table",{staticClass:"table table-bordered"},[a("tbody",{staticClass:"text-center"},[a("tr",{staticClass:"table-separator"},[a("td",{staticClass:"text-left"},[t._v("Discount Detail (%)")]),t._v(" "),a("th",[t._v("\n                                    "+t._s(t._f("capitalize")(t.currentOrder.discount.name))+"\n                                    -\n                                    ("+t._s(t.currentOrder.discount.percentage_discount)+")\n                                ")]),t._v(" "),a("td",[t._v("Total Before Discount")]),t._v(" "),a("th",[t._v(t._s(t.$formatCurrency(t.$roundDownAmt(t.currentOrder.product_price))))]),t._v(" "),a("td",[t._v("Total Paid")]),t._v(" "),a("th",[t._v(t._s(t.paymentSummary.amountPaid))])]),t._v(" "),a("tr",[a("td",{staticClass:"text-left"},[t._v("Discount Amount")]),t._v(" "),a("th",[t._v(t._s(t.paymentSummary.discountAmount))]),t._v(" "),a("td",[t._v("Total After Discount")]),t._v(" "),a("th",[t._v(t._s(t.paymentSummary.discountedTotal))]),t._v(" "),a("td",[t._v("Total Debt")]),t._v(" "),a("th",[t._v(t._s(t.paymentSummary.outstandingDebt))])]),t._v(" "),a("tr",[a("td",{staticClass:"text-left"},[t._v("Down Payment")]),t._v(" "),a("th",[t._v(t._s(t.$formatCurrency(t.$roundDownAmt(t.currentOrder.down_payment))))]),t._v(" "),a("td",[t._v("Total Plus Default Fee")]),t._v(" "),a("th",[t._v(t._s(t.paymentSummary.totalPlusDefault))]),t._v(" "),a("td",[t._v("Default Fee")]),t._v(" "),a("th",[t._v(t._s(t.paymentSummary.defaultFee))])])])])])]),t._v(" "),t._m(6)]):t._e()])]),t._v(" "),a("div",{staticClass:"modal fade repayment",attrs:{id:"reminder_history"}},[a("div",{staticClass:"modal-dialog modal-lg",attrs:{role:"document"}},[a("div",{staticClass:"modal-content"},[t._m(7),t._v(" "),t.showModalContent?a("div",{staticClass:"modal-body"},[a("div",{staticClass:"table-responsive"},[t.currentOrder.reminders.length?a("table",{staticClass:"table table-bordered table-striped"},[t._m(8),t._v(" "),a("tbody",t._l(t.currentOrder.reminders,function(e,r){return a("tr",[a("th",[t._v(t._s(r+1))]),t._v(" "),a("td",[t._v(t._s(t.$dateTimeConvert(e.date)))]),t._v(" "),a("td",[t._v(t._s(e.type))]),t._v(" "),a("td",{domProps:{innerHTML:t._s(t.renderMessage(e))}}),t._v(" "),a("td",[t._v(t._s(e.user.full_name))])])}))]):a("div",{staticClass:"my-4 text-center"},[t._v("\n                            no reminders have been sent yet!\n                        ")])])]):t._e(),t._v(" "),t._m(9)])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"tab-pane active text-center"},[e("div",{staticClass:"mb-3 row attendance-item"},[e("div",{staticClass:"col d-flex light-heading align-items-center justify-content-center"},[this._v("\n                    No records found!\n                ")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"modal-header py-2"},[e("h6",{staticClass:"modal-title py-1"},[this._v("Purchase Order Summary")]),this._v(" "),e("a",{staticClass:"close py-1",attrs:{"aria-label":"Close","data-dismiss":"modal"}},[e("span",{staticClass:"modal-close text-danger",attrs:{"aria-hidden":"true"}},[e("i",{staticClass:"fas fa-times"})])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"modal-footer"},[e("a",{staticClass:"text-link mt-3 w-100",staticStyle:{"text-align":"right"},attrs:{"data-dismiss":"modal",href:"javascript:"}},[this._v("close dialogue")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"modal-header py-2"},[e("h6",{staticClass:"modal-title py-1"},[this._v("Customer Info. Summary")]),this._v(" "),e("a",{staticClass:"close py-1",attrs:{"aria-label":"Close","data-dismiss":"modal"}},[e("span",{staticClass:"modal-close text-danger",attrs:{"aria-hidden":"true"}},[e("i",{staticClass:"fas fa-times"})])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"modal-footer"},[e("a",{staticClass:"text-link mt-3 w-100 text-right",attrs:{"data-dismiss":"modal",href:"#"}},[this._v("\n                        close dialogue\n                    ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"close py-1",attrs:{"aria-label":"Close","data-dismiss":"modal"}},[e("span",{staticClass:"modal-close text-danger",attrs:{"aria-hidden":"true"}},[e("i",{staticClass:"fas fa-times"})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"modal-footer"},[e("a",{staticClass:"text-link mt-3 w-100",staticStyle:{"text-align":"right"},attrs:{"data-dismiss":"modal",href:"javascript:"}},[this._v("close dialogue")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"modal-header py-2"},[e("h6",{staticClass:"modal-title py-1"},[this._v("Reminder History")]),this._v(" "),e("a",{staticClass:"close py-1",attrs:{"aria-label":"Close","data-dismiss":"modal"}},[e("span",{staticClass:"modal-close text-danger",attrs:{"aria-hidden":"true"}},[e("i",{staticClass:"fas fa-times"})])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",[t._v("S/N")]),t._v(" "),a("th",[t._v("Date")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("SMS/Feedback")]),t._v(" "),a("th",[t._v("sender")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"modal-footer"},[e("a",{staticClass:"text-link mt-3 w-100",staticStyle:{"text-align":"right"},attrs:{"data-dismiss":"modal",href:"javascript:"}},[this._v("close dialogue")])])}]}},"5CmT":function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,".attendance-head .light-heading[data-v-0a485430]:first-child{max-width:120px}",""])},"7elN":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r,s=a("p/p5"),n=a("K23+"),i=(r=n)&&r.__esModule?r:{default:r},o=a("nv24");function l(t){if(Array.isArray(t)){for(var e=0,a=Array(t.length);e<t.length;e++)a[e]=t[e];return a}return Array.from(t)}e.default={props:{mode:null,index:null,startIndex:{default:1},dva_id:null,paySummary:null,repaymentLevel:null,order:{default:{}},isRepaymentValid:null},data:function(){return{selected:!1}},created:function(){o.EventBus.$on("selectOrderItem",this.toggleSelect)},methods:{logReminder:function(){var t=this;this.$LIPS(!0),delete this.reminder.order,delete this.reminder.canBeSelected,(0,s.post)("/api/reminder",{reminders:[this.reminder]}).then(function(e){return e.data.saved?t.logPromiseCall():t.$displayErrorMessage("Error Logging reminders!")})},logPromiseCall:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Reminder Logged!";this.promiseCall.date?(0,s.post)("/api/promise_call",this.promiseCall).then(function(a){return a.data.saved?t.done(e+" Promise call added!"):t.$displayErrorMessage("Error Logging promise call!")}):this.done(e)},done:function(t){this.$scrollToTop(),i.default.setSuccess(t,5e3),this.$emit("done")},isReminderSent:function(){var t=this,e=!0;if(this.order.reminders.length>0){var a=this.$getDate();this.order.reminders.forEach(function(r){var s=r.date.split(" "),n=s[0].split("-"),i=s[1].split(":"),o=[].concat(l(n),l(i)).map(function(t){return parseInt(t,10)});t.$getDate(new Date(Date.UTC.apply(Date,l(o))),!1)===a&&(e=!1)})}return e},toggleSelect:function(t){this.reminder.canBeSelected&&(this.selected=t,this.$emit("updateReminderList",this.reminder,t))}},computed:{reminder:function(){var t={customer_id:this.order.customer.id,order_id:this.order.id,repayment_level:this.repaymentLevel,dva_id:this.dva_id,type:this.mode,canBeSelected:this.isReminderSent()};return"sms"===this.mode&&(t.contacts=this.order.customer.telephone,t.sms_id=null),t},promiseCall:function(){return{order_id:this.order.id,user_id:this.dva_id,customer_id:this.order.customer.id,date:null}},getFinancialStatus:function(){return this.isRepaymentValid?"Paid: "+this.paySummary.amountPaid+" | Debt: "+this.paySummary.outstandingDebt:"no detail!"}}}},AS3D:function(t,e,a){var r=a("zLlz");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);a("rjj0")("6cd2dcf8",r,!0,{})},CvDN:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mb-3 row attendance-item"},[a("div",{staticClass:"col-12 col-xs-2 col-md col-lg d-flex align-items-center",staticStyle:{"max-width":"120px"}},["normal-list"===t.mode?a("span"):t.reminder.canBeSelected&&["collection","recovery","call","external-recovery"].includes(t.mode)?a("span",{staticClass:"user mx-auto waiting-reminder",on:{click:t.logReminder}},[a("i",{staticClass:"fas fa-hourglass-start"})]):t.reminder.canBeSelected&&"sms"===t.mode?a("div",{staticClass:"d-flex align-items-center"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.selected,expression:"selected"}],staticClass:"form-check-input my-0 mx-4 float-left position-relative ",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.selected)?t._i(t.selected,null)>-1:t.selected},on:{click:function(e){t.toggleSelect(!t.selected)},change:function(e){var a=t.selected,r=e.target,s=!!r.checked;if(Array.isArray(a)){var n=t._i(a,null);r.checked?n<0&&(t.selected=a.concat([null])):n>-1&&(t.selected=a.slice(0,n).concat(a.slice(n+1)))}else t.selected=s}}})]):a("span",{staticClass:"user mx-auto sent-reminder"},[a("i",{staticClass:"fas fa-check"})]),t._v(" "),a("span",{staticClass:"user mx-auto"},[t._v(t._s(t.startIndex+t.index))])]),t._v(" "),a("div",{staticClass:"col-12 col-xs-2 col-md col-lg user-name d-flex align-items-center justify-content-center"},[t._v("\n        "+t._s(t.$vnode.key)+"\n    ")]),t._v(" "),a("div",{staticClass:"col-12 col-xs-2 col-md col-lg d-flex align-items-center justify-content-center",attrs:{"data-hoverable":"true"},on:{click:function(e){t.$emit("display",t.order,"purchase_order")}}},[t._v("\n        "+t._s(t.order.order_date)+"\n    ")]),t._v(" "),a("div",{staticClass:"col-12 col-xs-3 col-md col-lg d-flex align-items-center justify-content-center",attrs:{"data-hoverable":"true"},on:{click:function(e){t.$emit("display",t.order,"customer_info")}}},[t._v("\n        ID: "+t._s(t.order.customer.id)+" - "+t._s(t._f("capitalize")(t.order.customer.employment_status))+"\n    ")]),t._v(" "),a("div",{staticClass:"col-12 col-xs-2 col-md col-lg d-flex align-items-center justify-content-center",attrs:{"data-hoverable":"true"},on:{click:function(e){t.$emit("display",t.order,"repayment")}}},[t._v("\n        "+t._s(t.getFinancialStatus)+"\n    ")]),t._v(" "),a("div",{staticClass:"col-12 col-xs-2 col-md col-lg d-flex align-items-center justify-content-center",attrs:{"data-hoverable":"true"},on:{click:function(e){t.$emit("display",t.order,"reminder_history")}}},[t._v("\n        "+t._s(t.order.reminders.length)+" reminder(s) sent\n    ")]),t._v(" "),["collection","recovery","external-recovery"].includes(t.mode)?a("div",{staticClass:"col-12 col-xs-2 col-md col-lg d-flex align-items-center attendance-create"},[a("span",{staticClass:"present"},[a("span",{staticClass:"radio w-50 pr-3 mb-0 float-left"},[a("input",{attrs:{type:"radio",value:"yes",id:"present"+t.index,name:"isPresent"+t.index}}),t._v(" "),a("label",{attrs:{for:"present"+t.index}},[t._v("yes")])]),t._v(" "),a("span",{staticClass:"radio w-50 pl-3 mb-0 float-left"},[a("input",{attrs:{type:"radio",value:"no",id:"absent"+t.index,name:"isPresent"+t.index}}),t._v(" "),a("label",{attrs:{for:"absent"+t.index}},[t._v("no")])])])]):t._e(),t._v(" "),["collection","recovery","call","external-recovery"].includes(t.mode)?a("div",{staticClass:"col-12 col-xs-2 col-md col-lg d-flex align-items-center"},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.reminder.feedback,expression:"reminder.feedback"}],staticClass:"form-control",attrs:{rows:"1",disabled:!t.reminder.canBeSelected},domProps:{value:t.reminder.feedback},on:{input:function(e){e.target.composing||t.$set(t.reminder,"feedback",e.target.value)}}})]):t._e(),t._v(" "),"call"===t.mode?a("div",{staticClass:"col-12 col-xs-2 col-md col-lg d-flex align-items-center"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.promiseCall.date,expression:"promiseCall.date"}],staticClass:"form-control",attrs:{type:"date",disabled:!t.reminder.canBeSelected},domProps:{value:t.promiseCall.date},on:{input:function(e){e.target.composing||t.$set(t.promiseCall,"date",e.target.value)}}})]):t._e()])},staticRenderFns:[]}},TZKk:function(t,e,a){var r=a("VU/8")(a("7elN"),a("CvDN"),!1,null,null,null);t.exports=r.exports},XPj8:function(t,e,a){var r=a("VU/8")(a("aSpy"),a("4R38"),!1,function(t){a("AS3D")},"data-v-60774218",null);t.exports=r.exports},aSpy:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(t[r]=a[r])}return t},s=d(a("I3G/")),n=d(a("K23+")),i=a("m2tk"),o=a("p/p5"),l=d(a("TZKk"));function d(t){return t&&t.__esModule?t:{default:t}}e.default={components:{OrderItem:l.default},props:{list:{default:null},mode:null,preLoadedOrder:null,startIndex:null},watch:{list:function(t){this.fetchList(t)},preLoadedOrder:function(t){this.prepareForm(t)}},data:function(){return{orders:{},show:!1,banks:null,reminder:[],currentOrder:{},paymentSummary:null,payment_methods:null,showModalContent:!1}},methods:{prepareForm:function(t){var e=this;this.show=!1,this.showModalContent=!1,this.banks=t.banks,this.dva_id=t.dva_id,this.payment_methods=t.payment_methods,this.orders=t.orders.filter(function(a){var r=e.getCountAndRepaymentData(a).repaymentData,s=e.amortizationPlan(a),n=s.count,i=s.interval;return(!(!e.$store.getters.auth("DVALead")&&!e.$store.getters.auth("FSLLead"))||parseInt(a.store_product.store_name)===t.branch)&&function(){if([8,1].includes(e.list)||"normal-list"===e.mode)return!0;var t=void 0,s=void 0,o=[],l=new Date,d=1===l.getDay()||[9,10,11,12,13,14].includes(e.list)?3:1;if(!r)return!1;for(var c=1;c<n+1;c++){var u=e.$getColumn(c);if(!r[u+"_pay"]){t=e.generateDates({startDate:a.order_date,interval:i,count:n})[c-1];break}}switch(e.list){case 2:s=7;break;case 3:s=3;break;case 4:s=0;break;case 5:s=1;break;case 6:s=5;break;case 7:s=31;break;case 9:s=38;break;case 10:s=45;break;case 11:s=61;break;case 12:s=75;break;case 13:s=90;break;case 14:s=121}if(["collection","recovery","call","external-recovery"].includes(e.mode))for(var m=0;m<d;m++)o.push(e.$getDate(l.addDays(-(m+s))));if("sms"===e.mode)for(var v=0;v<d;v++)o.push(e.$getDate(l.addDays(v+s)));return o.includes(t)}()}),this.orders.length&&(this.show=!0),this.$LIPS(!1)},isOrderFormal:function(t){return["formal","salaried"].includes(t.customer.employment_status.toLowerCase())},generateDates:function(t){for(var e=t.startDate,a=t.interval,r=t.count,s=[],n=0;n<r;n++){var i=new Date(e).addDays((n+1)*a),o=this.$getDate(i);s.push(o)}return s},renderMessage:function(t){return t.sms?t.sms.message.replace(/%0a/g,"</br>"):t.feedback},fetchList:function(t){var e,a=this;this.$LIPS(!0),(0,o.get)((e={query:{list:t}},"/api/reminder/create?list="+e.query.list)).then(function(e){var r=e.data;if(8===t){var s=[];r.orders.forEach(function(t){return s.push(t.order)}),r.orders=s}a.prepareForm(r)})},isPaymentDue:function(t){return new Date>new Date(t)},getDiscount:function(t){var e=t.discount;return e.name+" ("+e.percentage_discount+")"},isRepaymentValid:function(t){return!(!t.repayment_formal&&!t.repayment_informal)},displayDetails:function(t,e){return this.paymentSummary=this.calcPaymentSummary(t),s.default.set(this.$data,"currentOrder",t),this.showModalContent=!0,$("#"+e).modal("toggle")},getCountAndRepaymentData:function(t){var e={count:this.amortizationPlan(t).count};return null!=t.repayment_formal&&(e.repaymentData=t.repayment_formal),null!=t.repayment_informal&&(e.repaymentData=t.repayment_informal),e},calcPaymentSummary:function(t){var e=this,a=[],r=function(t){return e.$formatCurrency(t)},s=this.$roundDownAmt(parseInt(t.down_payment)),n=this.amortizationPlan(t),i=n.count,o=n.interval,l=this.getCountAndRepaymentData(t).repaymentData;if(this.generateDates({startDate:t.order_date,interval:o,count:i}).forEach(function(t,r){return e.isPaymentDue(e.$getDate(new Date(t).addDays(5)))&&a.push({dueDate:t,actualPayDate:l[e.$getColumn(r)+"_date"]})}),l)for(var d=1;d<i+1;d++)s+=this.$roundDownAmt(l[this.$getColumn(d)+"_pay"]);else s=0;var c=t.discount.percentage_discount,u=6===i?.5:1,m=t.repayment_amount*u*(c>0?5===c?1:2:0);m=this.$roundDownAmt(m);var v=500*a.length,_=this.$roundDownAmt(t.product_price-m);return{amountPaid:r(s),discountAmount:r(this.$roundDownAmt(m)),outstandingDebt:r(this.$roundDownAmt(parseInt(t.product_price)-s)),discountedTotal:r(_),defaultFee:r(v),totalPlusDefault:r(_+v)}},getRepayment:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(!this.isRepaymentValid(t))return null;var a=[],r=this.getCountAndRepaymentData(t).repaymentData,s=this.amortizationPlan(t),n=s.interval,i=s.count;if(null===e)return this.generateDates({startDate:t.order_date,interval:n,count:i});if("repayments"===e)return new Array(i).fill(this.$roundDownAmt(t.repayment_amount),0,i);for(var o=1;o<i+1;o++)a.push(r[this.$getColumn(o)+e]);return a},getPaymentStatusClasses:function(t){if(!this.isRepaymentValid(t))return null;for(var e=[],a=this.getCountAndRepaymentData(t).repaymentData,r=this.amortizationPlan(t).count,s=this.getRepayment(t),n=1;n<r+1;n++){var i={class:null,icon:null},o=this.$getColumn(n),l=this.isPaymentDue(s[n-1]),d=parseInt(a[o+"_pay"]);d?(i.class="paid",i.icon="fa-check"):l&&!d?(i.class="missed",i.icon="fa-times"):l||(i.class="pending",i.icon="fa-hourglass-start"),e.push(i)}return e},getRepaymentLevel:function(t){if(!this.isRepaymentValid(t))return 0;for(var e=0,a=this.amortizationPlan(t).count,r=this.getCountAndRepaymentData(t).repaymentData,s=1;s<a+1;s++)r[this.$getColumn(s)+"_pay"]>0&&e++;return e+"/"+a},convertPaymentMethodOrBankToName:function(t,e){return t?this.$data[e].find(function(e){return e.id===t}).name:null},updateReminder:function(t,e){if(e)this.reminder.push(t);else{var a=void 0;this.reminder.forEach(function(e,r){return e.order_id===t.order_id&&(a=r)}),this.reminder.splice(a,1)}},processSelected:function(){var t=this;if(this.reminder.length){this.$LIPS(!0);var e=this.reminder.map(function(e){var a=JSON.parse(JSON.stringify(e));return a.order=t.orders.find(function(t){return t.id===e.order_id}),a.message=t.generateCustomMessage(a.order),a});this.sendSMSReminders(e)}else this.$displayErrorMessage("please select at least one!")},sendSMSReminders:function(t){var e=this,a=[];t.forEach(function(r,s){var n=new i.Message(r.message,r.contacts,!1,r.dva_id);n.send(function(r){200===r.status&&(delete n.logToDB,a.push(n)),s+1===t.length&&e.logSentMessages(a,t)})})},logSentMessages:function(t,e){var a=this;t?(0,o.post)("/api/message",{messages:t,bulk:!0}).then(function(t){var r=t.data,s=r.sentAndLogged,n=r.ids;s?a.logSentReminders(e,n):a.$displayErrorMessage("Error Logging sent sms details!")}):this.$displayErrorMessage("Error sending messages!")},logSentReminders:function(t,e){var a=this;e.reverse();var r=JSON.parse(JSON.stringify(t));r.forEach(function(t,a){t.sms_id=e[a],delete t.message,delete t.order,delete t.contacts,delete t.canBeSelected}),e.length>0?(0,o.post)("/api/reminder",{reminders:r}).then(function(t){t.data.saved?(n.default.setSuccess("Reminders have been sent successfully!",5e4),a.fetchList(a.list)):a.$displayErrorMessage("Error sending reminders!"),a.$scrollToTop()}):this.$displayErrorMessage("Error logging sent messages!")},generateCustomMessage:function(t){var e=this,a=t.customer,s=t.store_product,n=t.order_date,i=t.repayment_amount,o=s.product_name,l=a.first_name,d=a.last_name,c=void 0,u=r({startDate:n},this.amortizationPlan(t)),m=this.generateDates(u),v=this.getRepaymentLevel(t).split("/")[0];return 1===this.list?(c="Hello "+l+" "+d+", thanks for patronizing us. The following is the breakdown of the repayment plan for the purchase of "+o+":%0a",m.length>0&&m.forEach(function(t,a){return c+=e.$getColumn(a+1)+": "+t+" => "+e.$formatCurrency(e.$roundDownAmt(i))+"%0a"})):c="Hello "+l+" "+d+", This is to remind you that your "+this.$getColumn(parseInt(v)+1)+" repayment of "+this.$formatCurrency(this.$roundDownAmt(i))+" for "+o+" will be due on "+m[v]+". we will be expecting you.",c+"Please remember to pay on time to avoid late fees and other penalties.%0aThank you."},amortizationPlan:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.currentOrder,e=void 0,a=void 0;return new Date(t.order_date)<=new Date("2019-07-07")?(null!=t.repayment_formal&&(e=28,a=6),null!=t.repayment_informal&&(e=14,a=12)):this.isBankDraftAvailable(t)&&this.isOrderFormal(t)?(e=28,a=6):(e=14,a=12),{interval:e,count:a}},isBankDraftAvailable:function(){return!1},repaymentCaption:function(t){for(var e=this.amortizationPlan(t).count,a=[],r=1;r<=e;r++){for(var s=this.$getColumn(r).split(""),n=[],i=1;i<=2;i++)n.unshift(s.pop());a.push("<td>"+s.join("")+"<sup>"+n.join("")+"</sup></td>")}return a}},mounted:function(){var t=this;"normal-list"!=this.mode?this.fetchList(this.list):this.prepareForm(this.preLoadedOrder),$(document).on("hidden.bs.modal",".modal",function(){t.currentOrder=null,t.showModalContent=!1})}}},dBli:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r,s=a("XPj8"),n=(r=s)&&r.__esModule?r:{default:r},i=a("nv24");function o(t){if(Array.isArray(t)){for(var e=0,a=Array(t.length);e<t.length;e++)a[e]=t[e];return a}return Array.from(t)}e.default={components:{Order:n.default},data:function(){return{listToOrder:null,doSelectAll:!1}},methods:{selectAll:function(){this.doSelectAll=!this.doSelectAll,i.EventBus.$emit("selectOrderItem",this.doSelectAll)},mode:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.$route.meta.mode.toLowerCase();return t?e===t:e}},computed:{details:function(){var t=1,e=["1<sup>st</sup>","2<sup>nd</sup>","3<sup>rd</sup>"],a=["Order Number","Order Summary","Customer Info Summary","Repayment Summary","Reminder History"];switch(this.mode()){case"call":t=4,e=[].concat(o(e),["Guarantor's","Promise"]),a=[].concat(o(a),["Feedback","Promise Date"]);break;case"collection":t=9,e.splice(2,1),a=[].concat(o(a),["Visited?","Feedback"]);break;case"recovery":t=11,a=[].concat(o(a),["Visited?","Feedback"]);break;case"external-recovery":t=14,e.splice(1,2),a=[].concat(o(a),["Delivered Letter?","Feedback"])}return this.listToOrder||(this.listToOrder=t),{tabs:e,headings:a,list:t}}}}},dQDz:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("transition",{attrs:{name:"fade"}},[a("div",{attrs:{id:"reminder"}},[a("div",{staticClass:"mt-5 mb-3 attendance-head"},[a("ul",{staticClass:"nav nav-tabs justify-content-center p-0",attrs:{role:"tablist"}},t._l(t.details.tabs,function(e,r){return a("li",{staticClass:"col p-0 nav-item mb-0"},[a("a",{staticClass:"nav-link",class:0===r&&"active",attrs:{"aria-selected":"true","data-toggle":"tab",href:"#reminder-panel",role:"tab"},domProps:{innerHTML:t._s(e+" "+t.mode())},on:{click:function(e){t.listToOrder=t.details.list+r}}})])}))]),t._v(" "),a("div",{staticClass:"mt-5 mb-3 attendance-head"},[a("div",{staticClass:"row px-4 pt-3 pb-4 text-center"},[t.mode("sms")?a("div",{staticClass:"col p-0 text-link",staticStyle:{"max-width":"120px"},on:{click:t.selectAll}},[t._v("\n                    Click to "+t._s(t.doSelectAll?"De-select":"Select")+" all\n                ")]):a("div",{staticClass:"col light-heading"},[t._v("Action")]),t._v(" "),t._l(t.details.headings,function(e){return a("div",{staticClass:"col light-heading"},[t._v(t._s(e))])})],2)]),t._v(" "),a("order",{attrs:{list:t.listToOrder,mode:t.mode()}})],1)])},staticRenderFns:[]}},iNcs:function(t,e,a){var r=a("VU/8")(a("dBli"),a("dQDz"),!1,function(t){a("ilYn")},"data-v-0a485430",null);t.exports=r.exports},ilYn:function(t,e,a){var r=a("5CmT");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);a("rjj0")("7a1e36c9",r,!0,{})},m2tk:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Message=void 0;var r=function(){function t(t,e){for(var a=0;a<e.length;a++){var r=e[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,a,r){return a&&t(e.prototype,a),r&&t(e,r),e}}(),s=a("p/p5");e.Message=function(){function t(e,a){var r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.user_id=s,this.message=e,this.logToDB=r,this.contacts=a.split(",").filter(function(t){return/\S/.test(t)}).map(function(t){return"234"+t.trim().substr(1)}).join(","),this.setPages(),this.setContactCount()}return r(t,[{key:"setContactCount",value:function(){this.contact_count=this.contacts.split(",").length}},{key:"setPages",value:function(){this.pages=Math.ceil(this.message.length/160)}},{key:"send",value:function(t){var e=this;(0,s.get)("/api/message/create?to="+this.contacts+"&message="+this.message).then(function(a){return 200===a.status&&e.logToDB&&(delete e.logToDB,(0,s.post)("/api/message",e)),!!t&&t(a)}).catch(function(e){return!!t&&t(e)})}}]),t}()},nv24:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.EventBus=void 0;var r,s=a("I3G/"),n=(r=s)&&r.__esModule?r:{default:r};e.EventBus=new n.default},rjj0:function(t,e,a){var r="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!r)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var s=a("tTVk"),n={},i=r&&(document.head||document.getElementsByTagName("head")[0]),o=null,l=0,d=!1,c=function(){},u=null,m="data-vue-ssr-id",v="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function _(t){for(var e=0;e<t.length;e++){var a=t[e],r=n[a.id];if(r){r.refs++;for(var s=0;s<r.parts.length;s++)r.parts[s](a.parts[s]);for(;s<a.parts.length;s++)r.parts.push(h(a.parts[s]));r.parts.length>a.parts.length&&(r.parts.length=a.parts.length)}else{var i=[];for(s=0;s<a.parts.length;s++)i.push(h(a.parts[s]));n[a.id]={id:a.id,refs:1,parts:i}}}}function p(){var t=document.createElement("style");return t.type="text/css",i.appendChild(t),t}function h(t){var e,a,r=document.querySelector("style["+m+'~="'+t.id+'"]');if(r){if(d)return c;r.parentNode.removeChild(r)}if(v){var s=l++;r=o||(o=p()),e=g.bind(null,r,s,!1),a=g.bind(null,r,s,!0)}else r=p(),e=function(t,e){var a=e.css,r=e.media,s=e.sourceMap;r&&t.setAttribute("media",r);u.ssrId&&t.setAttribute(m,e.id);s&&(a+="\n/*# sourceURL="+s.sources[0]+" */",a+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */");if(t.styleSheet)t.styleSheet.cssText=a;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(a))}}.bind(null,r),a=function(){r.parentNode.removeChild(r)};return e(t),function(r){if(r){if(r.css===t.css&&r.media===t.media&&r.sourceMap===t.sourceMap)return;e(t=r)}else a()}}t.exports=function(t,e,a,r){d=a,u=r||{};var i=s(t,e);return _(i),function(e){for(var a=[],r=0;r<i.length;r++){var o=i[r];(l=n[o.id]).refs--,a.push(l)}e?_(i=s(t,e)):i=[];for(r=0;r<a.length;r++){var l;if(0===(l=a[r]).refs){for(var d=0;d<l.parts.length;d++)l.parts[d]();delete n[l.id]}}}};var f,y=(f=[],function(t,e){return f[t]=e,f.filter(Boolean).join("\n")});function g(t,e,a,r){var s=a?"":r.css;if(t.styleSheet)t.styleSheet.cssText=y(e,s);else{var n=document.createTextNode(s),i=t.childNodes;i[e]&&t.removeChild(i[e]),i.length?t.insertBefore(n,i[e]):t.appendChild(n)}}},tTVk:function(t,e){t.exports=function(t,e){for(var a=[],r={},s=0;s<e.length;s++){var n=e[s],i=n[0],o={id:t+":"+s,css:n[1],media:n[2],sourceMap:n[3]};r[i]?r[i].parts.push(o):a.push(r[i]={id:i,parts:[o]})}return a}},zLlz:function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,".table-separator[data-v-60774218]{border-top:2px solid #dee1e4}",""])}});
>>>>>>> 896a1818948e76f90b06f3a42ed60dfef98fa861
=======
webpackJsonp([3],{"+O4B":function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mt-5 attendance-head"},[a("div",{staticClass:"mb-5 row align-items-center"},[a("div",{staticClass:"col-12 title-con"},[a("span",{staticClass:"title"},[t._v(t._s(t._f("capitalize")(t.title)))]),t._v(" "),t.to?a("div",{staticClass:"row justify-content-end"},[a("router-link",{staticClass:"text-link mt-3",attrs:{to:t.to}},[t._v(t._s(t.buttonTitle))])],1):t._e()])])])},staticRenderFns:[]}},"4R38":function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.show?a("div",{staticClass:"tab-content mt-1 attendance-body"},[a("div",{staticClass:"tab-pane active text-center",attrs:{id:"reminder-panel",role:"tabpanel"}},t._l(t.orders,function(e,r){return a("order-item",{key:e.id,attrs:{index:r,"start-index":t.startIndex,order:e,dva_id:t.dva_id,"is-repayment-valid":t.isRepaymentValid(e),"pay-summary":t.calcPaymentSummary(e),"repayment-level":t.getRepaymentLevel(e),mode:t.mode},on:{done:function(e){t.fetchList(t.list)},updateReminderList:t.updateReminder,display:t.displayDetails}})})),t._v(" "),"normal-list"!=t.mode?a("div",{staticClass:"w-100 my-5 mx-0 hr"}):t._e()]):a("div",{staticClass:"tab-content mt-1 attendance-body"},[t._m(0)]),t._v(" "),t.show&&"sms"===t.mode?a("div",{staticClass:"mt-1 attendance-body"},[a("div",{staticClass:"mb-5 px-0 row align-items-center"},[a("div",{staticClass:"clearfix d-flex justify-content-end w-100"},[a("button",{staticClass:"btn bg-default",attrs:{disabled:t.$isProcessing},on:{click:t.processSelected}},[t._v("\n                    Send Reminder(s) "),a("i",{staticClass:"far fa-paper-plane ml-1"})])])])]):t._e(),t._v(" "),a("div",{staticClass:"modal fade",attrs:{id:"purchase_order"}},[a("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[a("div",{staticClass:"modal-content"},[t._m(1),t._v(" "),t.showModalContent?a("div",{staticClass:"modal-body"},[a("div",{staticClass:"table-responsive"},[a("table",{staticClass:"table table-bordered table-striped"},[a("tbody",[a("tr",[a("th",[t._v("Order ID")]),t._v(" "),a("td",[t._v(t._s(t.currentOrder.id))])]),t._v(" "),a("tr",[a("th",[t._v("Order date")]),t._v(" "),a("td",[t._v(t._s(t.currentOrder.order_date))])]),t._v(" "),a("tr",[a("th",[t._v("Product")]),t._v(" "),a("td",[t._v(t._s(t.currentOrder.store_product.product_name))])]),t._v(" "),a("tr",[a("th",[t._v("Repayment")]),t._v(" "),a("td",[t._v(t._s(t.$formatCurrency(t.currentOrder.repayment_amount)))])]),t._v(" "),a("tr",[a("th",[t._v("Down Payment")]),t._v(" "),a("td",[t._v(t._s(t.$formatCurrency(t.currentOrder.down_payment)))])]),t._v(" "),a("tr",[a("th",[t._v("Discount (%)")]),t._v(" "),a("td",[t._v(t._s(t._f("capitalize")(t.getDiscount(t.currentOrder))))])]),t._v(" "),a("tr",[a("th",[t._v("Sale Type")]),t._v(" "),a("td",[t._v(t._s(t._f("capitalize")(t.currentOrder.sales_type.name)))])]),t._v(" "),a("tr",[a("th",[t._v("Total amount to Pay")]),t._v(" "),a("td",[t._v(t._s(t.$formatCurrency(t.currentOrder.product_price)))])]),t._v(" "),a("tr",[a("th",[t._v("Processed by")]),t._v(" "),a("td",[t._v(t._s(t.currentOrder.floor_agent?t.currentOrder.floor_agent.full_name:null))])])])])])]):t._e(),t._v(" "),t._m(2)])])]),t._v(" "),a("div",{staticClass:"modal fade",attrs:{id:"customer_info"}},[a("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[a("div",{staticClass:"modal-content"},[t._m(3),t._v(" "),t.showModalContent?a("div",{staticClass:"modal-body"},[a("div",{staticClass:"table-responsive"},[a("table",{staticClass:"table table-bordered table-striped"},[a("tbody",[a("tr",[a("th",[t._v("Customer ID")]),t._v(" "),a("td",[t._v(t._s(t.currentOrder.customer.id))])]),t._v(" "),a("tr",[a("th",[t._v("Full Name")]),t._v(" "),a("td",[t._v(t._s(t.$getCustomerFullName(t.currentOrder.customer)))])]),t._v(" "),a("tr",[a("th",[t._v("Address")]),t._v(" "),a("td",[t._v(t._s(t.$getCustomerAddress(t.currentOrder.customer)))])]),t._v(" "),a("tr",[a("th",[t._v("Phone")]),t._v(" "),a("td",[t._v(t._s(t.currentOrder.customer.telephone))])]),t._v(" "),a("tr",[a("th",[t._v("Branch")]),t._v(" "),a("td",[t._v(t._s(t.currentOrder.customer.branch.name))])]),t._v(" "),a("tr",[a("th",[t._v("Category")]),t._v(" "),a("td",[t._v(t._s(t.currentOrder.customer.employment_status))])]),t._v(" "),a("tr",[a("th",[t._v("Work guarantor name")]),t._v(" "),a("td",[t._v(t._s(t.currentOrder.customer.work_guarantor_first_name+" "+t.currentOrder.customer.work_guarantor_last_name+" - "+t.currentOrder.customer.work_guarantor_relationship)+"\n                                ")])]),t._v(" "),a("tr",[a("th",[t._v("Work guarantor phone")]),t._v(" "),a("td",[t._v(t._s(t.currentOrder.customer.work_guarantor_telno))])]),t._v(" "),a("tr",[a("th",[t._v("Personal guarantor name")]),t._v(" "),a("td",[t._v(t._s(t.currentOrder.customer.personal_guarantor_first_name+" "+t.currentOrder.customer.personal_guarantor_last_name+" - "+t.currentOrder.customer.personal_guarantor_relationship)+"\n                                ")])]),t._v(" "),a("tr",[a("th",[t._v("Personal guarantor phone")]),t._v(" "),a("td",[t._v(t._s(t.currentOrder.customer.personal_guarantor_telno))])]),t._v(" "),a("tr",[a("th",[t._v("Verified by")]),t._v(" "),a("td",[a("router-link",{staticClass:"text-link",attrs:{target:"_blank",to:"/dva/verification?id="+t.currentOrder.customer.id}},[t._v("\n                                        click here to see verifications status\n                                    ")])],1)])])])])]):t._e(),t._v(" "),t._m(4)])])]),t._v(" "),a("div",{staticClass:"modal fade repayment",attrs:{id:"repayment"}},[a("div",{staticClass:"modal-dialog modal-xl",attrs:{role:"document"}},[t.showModalContent?a("div",{staticClass:"modal-content"},[a("div",{staticClass:"modal-header py-2"},[a("h6",{staticClass:"modal-title py-1"},[t._v("\n                        Repayment Plan/Summary - "+t._s(t._f("capitalize")(t.currentOrder.customer.employment_status))+"\n                    ")]),t._v(" "),t._m(5)]),t._v(" "),a("div",{staticClass:"modal-body"},[a("div",{staticClass:"table-responsive"},[a("h5",{staticClass:"mt-3 mb-0"},[t._v("Amortization Schedule")]),t._v(" "),a("table",{staticClass:"table table-bordered"},[a("tbody",{staticClass:"text-center"},[a("tr",[a("th",[t._v("Repayment")]),t._v(" "),t._l(t.repaymentCaption(t.currentOrder),function(e){return a("td",{domProps:{innerHTML:t._s(e)}})})],2),t._v(" "),a("tr",{staticClass:"table-separator"},[a("th",[t._v("Due Date")]),t._v(" "),t._l(t.getRepayment(t.currentOrder),function(e){return a("td",[t._v(t._s(e))])})],2),t._v(" "),a("tr",[a("th",[t._v("Actual Pay Day")]),t._v(" "),t._l(t.getRepayment(t.currentOrder,"_date"),function(e){return a("td",[t._v(t._s(e))])})],2),t._v(" "),a("tr",{staticClass:"table-separator"},[a("th",[t._v("Status")]),t._v(" "),t._l(t.getPaymentStatusClasses(t.currentOrder),function(t){return a("td",{class:t.class},[a("i",{staticClass:"fas",class:t.icon})])})],2),t._v(" "),a("tr",{staticClass:"table-separator"},[a("th",[t._v("Repayment Amount")]),t._v(" "),t._l(t.getRepayment(t.currentOrder,"repayments"),function(e){return a("td",[t._v("\n                                    "+t._s(t.$formatCurrency(e))+"\n                                ")])})],2),t._v(" "),a("tr",[a("th",[t._v("Actual Amount Paid")]),t._v(" "),t._l(t.getRepayment(t.currentOrder,"_pay"),function(e){return a("td",[t._v("\n                                    "+t._s(t.$formatCurrency(e))+"\n                                ")])})],2),t._v(" "),a("tr",{staticClass:"table-separator"},[a("th",[t._v("Payment Method")]),t._v(" "),t._l(t.getRepayment(t.currentOrder,"_payment_method"),function(e){return a("td",{staticClass:"text-capitalize"},[t._v("\n                                    "+t._s(t.convertPaymentMethodOrBankToName(e,"payment_methods"))+"\n                                ")])})],2),t._v(" "),a("tr",[a("th",[t._v("Bank")]),t._v(" "),t._l(t.getRepayment(t.currentOrder,"_payment_bank"),function(e){return a("td",{staticClass:"text-capitalize"},[t._v("\n                                    "+t._s(t.convertPaymentMethodOrBankToName(e,"banks"))+"\n                                ")])})],2)])]),t._v(" "),a("h5",{staticClass:"mt-5 mb-0"},[t._v("Payment Summary")]),t._v(" "),a("table",{staticClass:"table table-bordered"},[a("tbody",{staticClass:"text-center"},[a("tr",{staticClass:"table-separator"},[a("td",{staticClass:"text-left"},[t._v("Discount Detail (%)")]),t._v(" "),a("th",[t._v("\n                                    "+t._s(t._f("capitalize")(t.currentOrder.discount.name))+"\n                                    -\n                                    ("+t._s(t.currentOrder.discount.percentage_discount)+")\n                                ")]),t._v(" "),a("td",[t._v("Total Before Discount")]),t._v(" "),a("th",[t._v(t._s(t.$formatCurrency(t.$roundDownAmt(t.currentOrder.product_price))))]),t._v(" "),a("td",[t._v("Total Paid")]),t._v(" "),a("th",[t._v(t._s(t.paymentSummary.amountPaid))])]),t._v(" "),a("tr",[a("td",{staticClass:"text-left"},[t._v("Discount Amount")]),t._v(" "),a("th",[t._v(t._s(t.paymentSummary.discountAmount))]),t._v(" "),a("td",[t._v("Total After Discount")]),t._v(" "),a("th",[t._v(t._s(t.paymentSummary.discountedTotal))]),t._v(" "),a("td",[t._v("Total Debt")]),t._v(" "),a("th",[t._v(t._s(t.paymentSummary.outstandingDebt))])]),t._v(" "),a("tr",[a("td",{staticClass:"text-left"},[t._v("Down Payment")]),t._v(" "),a("th",[t._v(t._s(t.$formatCurrency(t.$roundDownAmt(t.currentOrder.down_payment))))]),t._v(" "),a("td",[t._v("Total Plus Default Fee")]),t._v(" "),a("th",[t._v(t._s(t.paymentSummary.totalPlusDefault))]),t._v(" "),a("td",[t._v("Default Fee")]),t._v(" "),a("th",[t._v(t._s(t.paymentSummary.defaultFee))])])])])])]),t._v(" "),t._m(6)]):t._e()])]),t._v(" "),a("div",{staticClass:"modal fade repayment",attrs:{id:"reminder_history"}},[a("div",{staticClass:"modal-dialog modal-lg",attrs:{role:"document"}},[a("div",{staticClass:"modal-content"},[t._m(7),t._v(" "),t.showModalContent?a("div",{staticClass:"modal-body"},[a("div",{staticClass:"table-responsive"},[t.currentOrder.reminders.length?a("table",{staticClass:"table table-bordered table-striped"},[t._m(8),t._v(" "),a("tbody",t._l(t.currentOrder.reminders,function(e,r){return a("tr",[a("th",[t._v(t._s(r+1))]),t._v(" "),a("td",[t._v(t._s(t.$dateTimeConvert(e.date)))]),t._v(" "),a("td",[t._v(t._s(e.type))]),t._v(" "),a("td",{domProps:{innerHTML:t._s(t.renderMessage(e))}}),t._v(" "),a("td",[t._v(t._s(e.user.full_name))])])}))]):a("div",{staticClass:"my-4 text-center"},[t._v("\n                            no reminders have been sent yet!\n                        ")])])]):t._e(),t._v(" "),t._m(9)])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"tab-pane active text-center"},[e("div",{staticClass:"mb-3 row attendance-item"},[e("div",{staticClass:"col d-flex light-heading align-items-center justify-content-center"},[this._v("\n                    No records found!\n                ")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"modal-header py-2"},[e("h6",{staticClass:"modal-title py-1"},[this._v("Purchase Order Summary")]),this._v(" "),e("a",{staticClass:"close py-1",attrs:{"aria-label":"Close","data-dismiss":"modal"}},[e("span",{staticClass:"modal-close text-danger",attrs:{"aria-hidden":"true"}},[e("i",{staticClass:"fas fa-times"})])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"modal-footer"},[e("a",{staticClass:"text-link mt-3 w-100",staticStyle:{"text-align":"right"},attrs:{"data-dismiss":"modal",href:"javascript:"}},[this._v("close dialogue")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"modal-header py-2"},[e("h6",{staticClass:"modal-title py-1"},[this._v("Customer Info. Summary")]),this._v(" "),e("a",{staticClass:"close py-1",attrs:{"aria-label":"Close","data-dismiss":"modal"}},[e("span",{staticClass:"modal-close text-danger",attrs:{"aria-hidden":"true"}},[e("i",{staticClass:"fas fa-times"})])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"modal-footer"},[e("a",{staticClass:"text-link mt-3 w-100 text-right",attrs:{"data-dismiss":"modal",href:"#"}},[this._v("\n                        close dialogue\n                    ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"close py-1",attrs:{"aria-label":"Close","data-dismiss":"modal"}},[e("span",{staticClass:"modal-close text-danger",attrs:{"aria-hidden":"true"}},[e("i",{staticClass:"fas fa-times"})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"modal-footer"},[e("a",{staticClass:"text-link mt-3 w-100",staticStyle:{"text-align":"right"},attrs:{"data-dismiss":"modal",href:"javascript:"}},[this._v("close dialogue")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"modal-header py-2"},[e("h6",{staticClass:"modal-title py-1"},[this._v("Reminder History")]),this._v(" "),e("a",{staticClass:"close py-1",attrs:{"aria-label":"Close","data-dismiss":"modal"}},[e("span",{staticClass:"modal-close text-danger",attrs:{"aria-hidden":"true"}},[e("i",{staticClass:"fas fa-times"})])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",[t._v("S/N")]),t._v(" "),a("th",[t._v("Date")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("SMS/Feedback")]),t._v(" "),a("th",[t._v("sender")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"modal-footer"},[e("a",{staticClass:"text-link mt-3 w-100",staticStyle:{"text-align":"right"},attrs:{"data-dismiss":"modal",href:"javascript:"}},[this._v("close dialogue")])])}]}},"7elN":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r,s=a("p/p5"),n=a("K23+"),i=(r=n)&&r.__esModule?r:{default:r},o=a("nv24");function l(t){if(Array.isArray(t)){for(var e=0,a=Array(t.length);e<t.length;e++)a[e]=t[e];return a}return Array.from(t)}e.default={props:{mode:null,index:null,startIndex:{default:1},dva_id:null,paySummary:null,repaymentLevel:null,order:{default:{}},isRepaymentValid:null},data:function(){return{selected:!1}},created:function(){o.EventBus.$on("selectOrderItem",this.toggleSelect)},methods:{logReminder:function(){var t=this;this.$LIPS(!0),delete this.reminder.order,delete this.reminder.canBeSelected,(0,s.post)("/api/reminder",{reminders:[this.reminder]}).then(function(e){return e.data.saved?t.logPromiseCall():t.$displayErrorMessage("Error Logging reminders!")})},logPromiseCall:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Reminder Logged!";this.promiseCall.date?(0,s.post)("/api/promise_call",this.promiseCall).then(function(a){return a.data.saved?t.done(e+" Promise call added!"):t.$displayErrorMessage("Error Logging promise call!")}):this.done(e)},done:function(t){this.$scrollToTop(),i.default.setSuccess(t,5e3),this.$emit("done")},isReminderSent:function(){var t=this,e=!0;if(this.order.reminders.length>0){var a=this.$getDate();this.order.reminders.forEach(function(r){var s=r.date.split(" "),n=s[0].split("-"),i=s[1].split(":"),o=[].concat(l(n),l(i)).map(function(t){return parseInt(t,10)});t.$getDate(new Date(Date.UTC.apply(Date,l(o))),!1)===a&&(e=!1)})}return e},toggleSelect:function(t){this.reminder.canBeSelected&&(this.selected=t,this.$emit("updateReminderList",this.reminder,t))}},computed:{reminder:function(){var t={customer_id:this.order.customer.id,order_id:this.order.id,repayment_level:this.repaymentLevel,dva_id:this.dva_id,type:this.mode,canBeSelected:this.isReminderSent()};return"sms"===this.mode&&(t.contacts=this.order.customer.telephone,t.sms_id=null),t},promiseCall:function(){return{order_id:this.order.id,user_id:this.dva_id,customer_id:this.order.customer.id,date:null}},getFinancialStatus:function(){return this.isRepaymentValid?"Paid: "+this.paySummary.amountPaid+" | Debt: "+this.paySummary.outstandingDebt:"no detail!"}}}},AS3D:function(t,e,a){var r=a("zLlz");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);a("rjj0")("6cd2dcf8",r,!0,{})},CvDN:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mb-3 row attendance-item"},[a("div",{staticClass:"col-12 col-xs-2 col-md col-lg d-flex align-items-center",staticStyle:{"max-width":"120px"}},["normal-list"===t.mode?a("span"):t.reminder.canBeSelected&&["collection","recovery","call","external-recovery"].includes(t.mode)?a("span",{staticClass:"user mx-auto waiting-reminder",on:{click:t.logReminder}},[a("i",{staticClass:"fas fa-hourglass-start"})]):t.reminder.canBeSelected&&"sms"===t.mode?a("div",{staticClass:"d-flex align-items-center"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.selected,expression:"selected"}],staticClass:"form-check-input my-0 mx-4 float-left position-relative ",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.selected)?t._i(t.selected,null)>-1:t.selected},on:{click:function(e){t.toggleSelect(!t.selected)},change:function(e){var a=t.selected,r=e.target,s=!!r.checked;if(Array.isArray(a)){var n=t._i(a,null);r.checked?n<0&&(t.selected=a.concat([null])):n>-1&&(t.selected=a.slice(0,n).concat(a.slice(n+1)))}else t.selected=s}}})]):a("span",{staticClass:"user mx-auto sent-reminder"},[a("i",{staticClass:"fas fa-check"})]),t._v(" "),a("span",{staticClass:"user mx-auto"},[t._v(t._s(t.startIndex+t.index))])]),t._v(" "),a("div",{staticClass:"col-12 col-xs-2 col-md col-lg user-name d-flex align-items-center justify-content-center"},[t._v("\n        "+t._s(t.$vnode.key)+"\n    ")]),t._v(" "),a("div",{staticClass:"col-12 col-xs-2 col-md col-lg d-flex align-items-center justify-content-center",attrs:{"data-hoverable":"true"},on:{click:function(e){t.$emit("display",t.order,"purchase_order")}}},[t._v("\n        "+t._s(t.order.order_date)+"\n    ")]),t._v(" "),a("div",{staticClass:"col-12 col-xs-3 col-md col-lg d-flex align-items-center justify-content-center",attrs:{"data-hoverable":"true"},on:{click:function(e){t.$emit("display",t.order,"customer_info")}}},[t._v("\n        ID: "+t._s(t.order.customer.id)+" - "+t._s(t._f("capitalize")(t.order.customer.employment_status))+"\n    ")]),t._v(" "),a("div",{staticClass:"col-12 col-xs-2 col-md col-lg d-flex align-items-center justify-content-center",attrs:{"data-hoverable":"true"},on:{click:function(e){t.$emit("display",t.order,"repayment")}}},[t._v("\n        "+t._s(t.getFinancialStatus)+"\n    ")]),t._v(" "),a("div",{staticClass:"col-12 col-xs-2 col-md col-lg d-flex align-items-center justify-content-center",attrs:{"data-hoverable":"true"},on:{click:function(e){t.$emit("display",t.order,"reminder_history")}}},[t._v("\n        "+t._s(t.order.reminders.length)+" reminder(s) sent\n    ")]),t._v(" "),["collection","recovery","external-recovery"].includes(t.mode)?a("div",{staticClass:"col-12 col-xs-2 col-md col-lg d-flex align-items-center attendance-create"},[a("span",{staticClass:"present"},[a("span",{staticClass:"radio w-50 pr-3 mb-0 float-left"},[a("input",{attrs:{type:"radio",value:"yes",id:"present"+t.index,name:"isPresent"+t.index}}),t._v(" "),a("label",{attrs:{for:"present"+t.index}},[t._v("yes")])]),t._v(" "),a("span",{staticClass:"radio w-50 pl-3 mb-0 float-left"},[a("input",{attrs:{type:"radio",value:"no",id:"absent"+t.index,name:"isPresent"+t.index}}),t._v(" "),a("label",{attrs:{for:"absent"+t.index}},[t._v("no")])])])]):t._e(),t._v(" "),["collection","recovery","call","external-recovery"].includes(t.mode)?a("div",{staticClass:"col-12 col-xs-2 col-md col-lg d-flex align-items-center"},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.reminder.feedback,expression:"reminder.feedback"}],staticClass:"form-control",attrs:{rows:"1",disabled:!t.reminder.canBeSelected},domProps:{value:t.reminder.feedback},on:{input:function(e){e.target.composing||t.$set(t.reminder,"feedback",e.target.value)}}})]):t._e(),t._v(" "),"call"===t.mode?a("div",{staticClass:"col-12 col-xs-2 col-md col-lg d-flex align-items-center"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.promiseCall.date,expression:"promiseCall.date"}],staticClass:"form-control",attrs:{type:"date",disabled:!t.reminder.canBeSelected},domProps:{value:t.promiseCall.date},on:{input:function(e){e.target.composing||t.$set(t.promiseCall,"date",e.target.value)}}})]):t._e()])},staticRenderFns:[]}},EJ7O:function(t,e,a){var r=a("VU/8")(a("oKx2"),a("+O4B"),!1,null,null,null);t.exports=r.exports},TZKk:function(t,e,a){var r=a("VU/8")(a("7elN"),a("CvDN"),!1,null,null,null);t.exports=r.exports},XPj8:function(t,e,a){var r=a("VU/8")(a("aSpy"),a("4R38"),!1,function(t){a("AS3D")},"data-v-60774218",null);t.exports=r.exports},aSpy:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(t[r]=a[r])}return t},s=d(a("I3G/")),n=d(a("K23+")),i=a("m2tk"),o=a("p/p5"),l=d(a("TZKk"));function d(t){return t&&t.__esModule?t:{default:t}}e.default={components:{OrderItem:l.default},props:{list:{default:null},mode:null,preLoadedOrder:null,startIndex:null},watch:{list:function(t){this.fetchList(t)},preLoadedOrder:function(t){this.prepareForm(t)}},data:function(){return{orders:{},show:!1,banks:null,reminder:[],currentOrder:{},paymentSummary:null,payment_methods:null,showModalContent:!1}},methods:{prepareForm:function(t){var e=this;this.show=!1,this.showModalContent=!1,this.banks=t.banks,this.dva_id=t.dva_id,this.payment_methods=t.payment_methods,this.orders=t.orders.filter(function(a){var r=e.getCountAndRepaymentData(a).repaymentData,s=e.amortizationPlan(a),n=s.count,i=s.interval;return(!(!e.$store.getters.auth("DVALead")&&!e.$store.getters.auth("FSLLead"))||parseInt(a.store_product.store_name)===t.branch)&&function(){if([8,1].includes(e.list)||"normal-list"===e.mode)return!0;var t=void 0,s=void 0,o=[],l=new Date,d=1===l.getDay()||[9,10,11,12,13,14].includes(e.list)?3:1;if(!r)return!1;for(var c=1;c<n+1;c++){var u=e.$getColumn(c);if(!r[u+"_pay"]){t=e.generateDates({startDate:a.order_date,interval:i,count:n})[c-1];break}}switch(e.list){case 2:s=7;break;case 3:s=3;break;case 4:s=0;break;case 5:s=1;break;case 6:s=5;break;case 7:s=31;break;case 9:s=38;break;case 10:s=45;break;case 11:s=61;break;case 12:s=75;break;case 13:s=90;break;case 14:s=121}if(["collection","recovery","call","external-recovery"].includes(e.mode))for(var m=0;m<d;m++)o.push(e.$getDate(l.addDays(-(m+s))));if("sms"===e.mode)for(var v=0;v<d;v++)o.push(e.$getDate(l.addDays(v+s)));return o.includes(t)}()}),this.orders.length&&(this.show=!0),this.$LIPS(!1)},isOrderFormal:function(t){return["formal","salaried"].includes(t.customer.employment_status.toLowerCase())},generateDates:function(t){for(var e=t.startDate,a=t.interval,r=t.count,s=[],n=0;n<r;n++){var i=new Date(e).addDays((n+1)*a),o=this.$getDate(i);s.push(o)}return s},renderMessage:function(t){return t.sms?t.sms.message.replace(/%0a/g,"</br>"):t.feedback},fetchList:function(t){var e,a=this;this.$LIPS(!0),(0,o.get)((e={query:{list:t}},"/api/reminder/create?list="+e.query.list)).then(function(e){var r=e.data;if(8===t){var s=[];r.orders.forEach(function(t){return s.push(t.order)}),r.orders=s}a.prepareForm(r)})},isPaymentDue:function(t){return new Date>new Date(t)},getDiscount:function(t){var e=t.discount;return e.name+" ("+e.percentage_discount+")"},isRepaymentValid:function(t){return!(!t.repayment_formal&&!t.repayment_informal)},displayDetails:function(t,e){return this.paymentSummary=this.calcPaymentSummary(t),s.default.set(this.$data,"currentOrder",t),this.showModalContent=!0,$("#"+e).modal("toggle")},getCountAndRepaymentData:function(t){var e={count:this.amortizationPlan(t).count};return null!=t.repayment_formal&&(e.repaymentData=t.repayment_formal),null!=t.repayment_informal&&(e.repaymentData=t.repayment_informal),e},calcPaymentSummary:function(t){var e=this,a=[],r=function(t){return e.$formatCurrency(t)},s=this.$roundDownAmt(parseInt(t.down_payment)),n=this.amortizationPlan(t),i=n.count,o=n.interval,l=this.getCountAndRepaymentData(t).repaymentData;if(this.generateDates({startDate:t.order_date,interval:o,count:i}).forEach(function(t,r){return e.isPaymentDue(e.$getDate(new Date(t).addDays(5)))&&a.push({dueDate:t,actualPayDate:l[e.$getColumn(r)+"_date"]})}),l)for(var d=1;d<i+1;d++)s+=this.$roundDownAmt(l[this.$getColumn(d)+"_pay"]);else s=0;var c=t.discount.percentage_discount,u=6===i?.5:1,m=t.repayment_amount*u*(c>0?5===c?1:2:0);m=this.$roundDownAmt(m);var v=500*a.length,_=this.$roundDownAmt(t.product_price-m);return{amountPaid:r(s),discountAmount:r(this.$roundDownAmt(m)),outstandingDebt:r(this.$roundDownAmt(parseInt(t.product_price)-s)),discountedTotal:r(_),defaultFee:r(v),totalPlusDefault:r(_+v)}},getRepayment:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(!this.isRepaymentValid(t))return null;var a=[],r=this.getCountAndRepaymentData(t).repaymentData,s=this.amortizationPlan(t),n=s.interval,i=s.count;if(null===e)return this.generateDates({startDate:t.order_date,interval:n,count:i});if("repayments"===e)return new Array(i).fill(this.$roundDownAmt(t.repayment_amount),0,i);for(var o=1;o<i+1;o++)a.push(r[this.$getColumn(o)+e]);return a},getPaymentStatusClasses:function(t){if(!this.isRepaymentValid(t))return null;for(var e=[],a=this.getCountAndRepaymentData(t).repaymentData,r=this.amortizationPlan(t).count,s=this.getRepayment(t),n=1;n<r+1;n++){var i={class:null,icon:null},o=this.$getColumn(n),l=this.isPaymentDue(s[n-1]),d=parseInt(a[o+"_pay"]);d?(i.class="paid",i.icon="fa-check"):l&&!d?(i.class="missed",i.icon="fa-times"):l||(i.class="pending",i.icon="fa-hourglass-start"),e.push(i)}return e},getRepaymentLevel:function(t){if(!this.isRepaymentValid(t))return 0;for(var e=0,a=this.amortizationPlan(t).count,r=this.getCountAndRepaymentData(t).repaymentData,s=1;s<a+1;s++)r[this.$getColumn(s)+"_pay"]>0&&e++;return e+"/"+a},convertPaymentMethodOrBankToName:function(t,e){return t?this.$data[e].find(function(e){return e.id===t}).name:null},updateReminder:function(t,e){if(e)this.reminder.push(t);else{var a=void 0;this.reminder.forEach(function(e,r){return e.order_id===t.order_id&&(a=r)}),this.reminder.splice(a,1)}},processSelected:function(){var t=this;if(this.reminder.length){this.$LIPS(!0);var e=this.reminder.map(function(e){var a=JSON.parse(JSON.stringify(e));return a.order=t.orders.find(function(t){return t.id===e.order_id}),a.message=t.generateCustomMessage(a.order),a});this.sendSMSReminders(e)}else this.$displayErrorMessage("please select at least one!")},sendSMSReminders:function(t){var e=this,a=[];t.forEach(function(r,s){var n=new i.Message(r.message,r.contacts,!1,r.dva_id);n.send(function(r){200===r.status&&(delete n.logToDB,a.push(n)),s+1===t.length&&e.logSentMessages(a,t)})})},logSentMessages:function(t,e){var a=this;t?(0,o.post)("/api/message",{messages:t,bulk:!0}).then(function(t){var r=t.data,s=r.sentAndLogged,n=r.ids;s?a.logSentReminders(e,n):a.$displayErrorMessage("Error Logging sent sms details!")}):this.$displayErrorMessage("Error sending messages!")},logSentReminders:function(t,e){var a=this;e.reverse();var r=JSON.parse(JSON.stringify(t));r.forEach(function(t,a){t.sms_id=e[a],delete t.message,delete t.order,delete t.contacts,delete t.canBeSelected}),e.length>0?(0,o.post)("/api/reminder",{reminders:r}).then(function(t){t.data.saved?(n.default.setSuccess("Reminders have been sent successfully!",5e4),a.fetchList(a.list)):a.$displayErrorMessage("Error sending reminders!"),a.$scrollToTop()}):this.$displayErrorMessage("Error logging sent messages!")},generateCustomMessage:function(t){var e=this,a=t.customer,s=t.store_product,n=t.order_date,i=t.repayment_amount,o=s.product_name,l=a.first_name,d=a.last_name,c=void 0,u=r({startDate:n},this.amortizationPlan(t)),m=this.generateDates(u),v=this.getRepaymentLevel(t).split("/")[0];return 1===this.list?(c="Hello "+l+" "+d+", thanks for patronizing us. The following is the breakdown of the repayment plan for the purchase of "+o+":%0a",m.length>0&&m.forEach(function(t,a){return c+=e.$getColumn(a+1)+": "+t+" => "+e.$formatCurrency(e.$roundDownAmt(i))+"%0a"})):c="Hello "+l+" "+d+", This is to remind you that your "+this.$getColumn(parseInt(v)+1)+" repayment of "+this.$formatCurrency(this.$roundDownAmt(i))+" for "+o+" will be due on "+m[v]+". we will be expecting you.",c+"Please remember to pay on time to avoid late fees and other penalties.%0aThank you."},amortizationPlan:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.currentOrder,e=void 0,a=void 0;return new Date(t.order_date)<=new Date("2019-07-07")?(null!=t.repayment_formal&&(e=28,a=6),null!=t.repayment_informal&&(e=14,a=12)):this.isBankDraftAvailable(t)&&this.isOrderFormal(t)?(e=28,a=6):(e=14,a=12),{interval:e,count:a}},isBankDraftAvailable:function(){return!1},repaymentCaption:function(t){for(var e=this.amortizationPlan(t).count,a=[],r=1;r<=e;r++){for(var s=this.$getColumn(r).split(""),n=[],i=1;i<=2;i++)n.unshift(s.pop());a.push("<td>"+s.join("")+"<sup>"+n.join("")+"</sup></td>")}return a}},mounted:function(){var t=this;"normal-list"!=this.mode?this.fetchList(this.list):this.prepareForm(this.preLoadedOrder),$(document).on("hidden.bs.modal",".modal",function(){t.currentOrder=null,t.showModalContent=!1})}}},m2tk:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Message=void 0;var r=function(){function t(t,e){for(var a=0;a<e.length;a++){var r=e[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,a,r){return a&&t(e.prototype,a),r&&t(e,r),e}}(),s=a("p/p5");e.Message=function(){function t(e,a){var r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.user_id=s,this.message=e,this.logToDB=r,this.contacts=a.split(",").filter(function(t){return/\S/.test(t)}).map(function(t){return"234"+t.trim().substr(1)}).join(","),this.setPages(),this.setContactCount()}return r(t,[{key:"setContactCount",value:function(){this.contact_count=this.contacts.split(",").length}},{key:"setPages",value:function(){this.pages=Math.ceil(this.message.length/160)}},{key:"send",value:function(t){var e=this;(0,s.get)("/api/message/create?to="+this.contacts+"&message="+this.message).then(function(a){return 200===a.status&&e.logToDB&&(delete e.logToDB,(0,s.post)("/api/message",e)),!!t&&t(a)}).catch(function(e){return!!t&&t(e)})}}]),t}()},nv24:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.EventBus=void 0;var r,s=a("I3G/"),n=(r=s)&&r.__esModule?r:{default:r};e.EventBus=new n.default},oKx2:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{title:"",buttonTitle:null,to:null}}},rjj0:function(t,e,a){var r="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!r)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var s=a("tTVk"),n={},i=r&&(document.head||document.getElementsByTagName("head")[0]),o=null,l=0,d=!1,c=function(){},u=null,m="data-vue-ssr-id",v="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function _(t){for(var e=0;e<t.length;e++){var a=t[e],r=n[a.id];if(r){r.refs++;for(var s=0;s<r.parts.length;s++)r.parts[s](a.parts[s]);for(;s<a.parts.length;s++)r.parts.push(f(a.parts[s]));r.parts.length>a.parts.length&&(r.parts.length=a.parts.length)}else{var i=[];for(s=0;s<a.parts.length;s++)i.push(f(a.parts[s]));n[a.id]={id:a.id,refs:1,parts:i}}}}function p(){var t=document.createElement("style");return t.type="text/css",i.appendChild(t),t}function f(t){var e,a,r=document.querySelector("style["+m+'~="'+t.id+'"]');if(r){if(d)return c;r.parentNode.removeChild(r)}if(v){var s=l++;r=o||(o=p()),e=y.bind(null,r,s,!1),a=y.bind(null,r,s,!0)}else r=p(),e=function(t,e){var a=e.css,r=e.media,s=e.sourceMap;r&&t.setAttribute("media",r);u.ssrId&&t.setAttribute(m,e.id);s&&(a+="\n/*# sourceURL="+s.sources[0]+" */",a+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */");if(t.styleSheet)t.styleSheet.cssText=a;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(a))}}.bind(null,r),a=function(){r.parentNode.removeChild(r)};return e(t),function(r){if(r){if(r.css===t.css&&r.media===t.media&&r.sourceMap===t.sourceMap)return;e(t=r)}else a()}}t.exports=function(t,e,a,r){d=a,u=r||{};var i=s(t,e);return _(i),function(e){for(var a=[],r=0;r<i.length;r++){var o=i[r];(l=n[o.id]).refs--,a.push(l)}e?_(i=s(t,e)):i=[];for(r=0;r<a.length;r++){var l;if(0===(l=a[r]).refs){for(var d=0;d<l.parts.length;d++)l.parts[d]();delete n[l.id]}}}};var h,g=(h=[],function(t,e){return h[t]=e,h.filter(Boolean).join("\n")});function y(t,e,a,r){var s=a?"":r.css;if(t.styleSheet)t.styleSheet.cssText=g(e,s);else{var n=document.createTextNode(s),i=t.childNodes;i[e]&&t.removeChild(i[e]),i.length?t.insertBefore(n,i[e]):t.appendChild(n)}}},tTVk:function(t,e){t.exports=function(t,e){for(var a=[],r={},s=0;s<e.length;s++){var n=e[s],i=n[0],o={id:t+":"+s,css:n[1],media:n[2],sourceMap:n[3]};r[i]?r[i].parts.push(o):a.push(r[i]={id:i,parts:[o]})}return a}},wwaW:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=a("p/p5"),s=o(a("K23+")),n=o(a("XPj8")),i=o(a("EJ7O"));function o(t){return t&&t.__esModule?t:{default:t}}e.default={components:{CustomHeader:i.default,Order:n.default},data:function(){return{branch_id:"",page_size:10,date_from:null,date_to:null,page:1,filters:[{name:"branch",model:"branch_id"},{name:"date from",model:"date_from"},{name:"date to",model:"date_to"}],orders:null,response:{},show:!1,headings:["Order Number","Order Summary","Customer Info Summary","Repayment Summary","Reminder History"]}},methods:{fetchData:function(){var t=this;this.$scrollToTop(),this.$LIPS(!0);var e=this.$data,a=e.page,n=e.page_size,i=e.date_from,o=e.date_to,l=e.branch_id;(0,r.get)("/api/reminder/create"+(a?"?page="+a:"")+(o?"&date_to="+o:"")+(n?"&page_size="+n:"")+(l?"&branch_id="+l:"")+(i?"&date_from="+i:"")).then(function(e){var a=e.data;return t.prepareForm(a)}).catch(function(){return s.default.setError("Error Preparing form")})},next:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;this.orders.next_page_url&&(this.page=t||this.page+1,this.fetchData())},prev:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;this.orders.prev_page_url&&(this.page=t||this.page+1,this.fetchData())},prepareForm:function(t){this.show=!1,this.orders=null,this.response={},this.orders=t.orders;var e=t.orders.data,a=t.payment_methods,r=t.banks,s=t.dva_id,n=t.branch;this.response={payment_methods:a,banks:r,dva_id:s,branch:n,orders:e},this.$scrollToTop(),this.$LIPS(!1),this.show=!0}},created:function(){this.$prepareBranches(),this.fetchData()}}},xPCN:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("transition",{attrs:{name:"fade"}},[a("div",{staticClass:"attendance",attrs:{id:"reminder"}},[a("custom-header",{attrs:{title:"Order Lists"}}),t._v(" "),a("div",{staticClass:"mt-5 row attendance-head"},t._l(t.filters,function(e){var r=e.name;return a("div",{staticClass:"col-4 col-sm-3"},[a("div",{staticClass:"row"},[a("div",{staticClass:"light-heading"},[a("span",{staticClass:"d-none d-sm-inline"},[t._v("Select")]),t._v(" "+t._s(t._f("capitalize")(r))+"\n                    ")])])])})),t._v(" "),a("div",{staticClass:"mt-2 mt-lg-3 row attendance-head attendance-view"},[t._l(t.filters,function(e){var r=e.name,s=e.model;return a("div",{staticClass:"col-4 col-sm-3"},[a("div",{staticClass:"row"},["branch"===r?a("select",{directives:[{name:"model",rawName:"v-model",value:t.$data[s],expression:"$data[model]"}],staticClass:"custom-select",on:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;t.fetchData()},change:function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.$set(t.$data,s,e.target.multiple?a:a[0])}}},[a("option",{attrs:{disabled:"",selected:"",value:""}},[t._v(t._s(t._f("capitalize")(r)))]),t._v(" "),t._l(t.$store.getters.getBranches,function(e){var r=e.name,s=e.id;return a("option",{domProps:{value:s}},[t._v("\n                            "+t._s(t._f("capitalize")(r))+"\n                        ")])})],2):a("div",{staticClass:"form-group w-100"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.$data[s],expression:"$data[model]"}],staticClass:"form-control",attrs:{type:"date"},domProps:{value:t.$data[s]},on:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;t.fetchData()},input:function(e){e.target.composing||t.$set(t.$data,s,e.target.value)}}})])])])}),t._v(" "),a("div",{staticClass:"col-12 col-sm-3"},[a("div",{staticClass:"row d-flex justify-content-end"},[a("button",{staticClass:"btn btn-primary bg-default mt-0 myBtn",on:{click:function(e){t.fetchData()}}},[t._v("Apply Filter")])])])],2),t._v(" "),a("div",{staticClass:"mt-5 mb-3 attendance-head"},[a("div",{staticClass:"w-100 my-5 mx-0 hr"}),t._v(" "),a("div",{staticClass:"row px-4 pt-3 pb-4 text-center"},[a("div",{staticClass:"col light-heading",staticStyle:{"max-width":"120px"}},[t._v("S/N")]),t._v(" "),t._l(t.headings,function(e){return a("div",{staticClass:"col light-heading"},[t._v(t._s(e))])})],2)]),t._v(" "),t.show?a("order",{attrs:{"start-index":t.orders.from,"pre-loaded-order":t.response,mode:"normal-list"}}):t._e(),t._v(" "),t.show?a("div",{staticClass:"mt-1 attendance-body"},[a("div",{staticClass:"mb-5 px-0 row align-items-center"},[a("div",{staticClass:"w-100 mb-4 mt-5 mx-0 hr"}),t._v(" "),a("div",{staticClass:"clearfix w-100 mt-4 d-flex bd-highlight"},[a("div",{staticClass:"col d-flex justify-content-start align-items-center pl-0"},[a("strong",{staticClass:"light-heading float-left"},[t._v("\n                            Displaying: "+t._s(t.orders.from)+" - "+t._s(t.orders.to)+" of "+t._s(t.orders.total)+"\n                        ")])]),t._v(" "),a("div",{staticClass:"col d-flex justify-content-center align-items-center"},[a("div",{staticClass:"mr-5"},[a("span",{staticClass:"d-inline light-heading mr-2"},[t._v("set current Page")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.page,expression:"page"}],staticClass:"d-inline form-control ",staticStyle:{"max-width":"50px"},attrs:{type:"number"},domProps:{value:t.page},on:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;t.fetchData()},input:function(e){e.target.composing||(t.page=e.target.value)}}})]),t._v(" "),a("div",{staticClass:"ml-5"},[a("span",{staticClass:"d-inline light-heading mr-2"},[t._v("set page-size")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.page_size,expression:"page_size"}],staticClass:"d-inline form-control",staticStyle:{"max-width":"50px"},attrs:{type:"number"},domProps:{value:t.page_size},on:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;t.fetchData()},input:function(e){e.target.composing||(t.page_size=e.target.value)}}})])]),t._v(" "),a("nav",{staticClass:"col d-flex justify-content-end align-items-center pr-0"},[a("ul",{staticClass:"pagination pagination-lg mb-0"},[a("li",{staticClass:"page-item",class:{disabled:!t.orders.first_page_url}},[a("a",{staticClass:"page-link",attrs:{href:"javascript:"},on:{click:function(e){t.prev(1)}}},[t._v("First")])]),t._v(" "),a("li",{staticClass:"page-item",class:{disabled:!t.orders.prev_page_url}},[a("a",{staticClass:"page-link",attrs:{href:"javascript:"},on:{click:function(e){t.prev()}}},[t._v("Next")])]),t._v(" "),a("li",{staticClass:"page-item"},[a("span",{staticClass:"page-link"},[t._v("Current Page: "+t._s(t.orders.current_page))])]),t._v(" "),a("li",{staticClass:"page-item",class:{disabled:!t.orders.next_page_url}},[a("a",{staticClass:"page-link",attrs:{href:"javascript:"},on:{click:function(e){t.next()}}},[t._v("Next")])]),t._v(" "),a("li",{staticClass:"page-item",class:{disabled:!t.orders.last_page_url}},[a("a",{staticClass:"page-link",attrs:{href:"javascript:"},on:{click:function(e){t.next(t.orders.last_page)}}},[t._v("Last")])])])])])])]):t._e()],1)])},staticRenderFns:[]}},yDPG:function(t,e,a){var r=a("VU/8")(a("wwaW"),a("xPCN"),!1,null,null,null);t.exports=r.exports},zLlz:function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,".table-separator[data-v-60774218]{border-top:2px solid #dee1e4}",""])}});
>>>>>>> a357cb0e61bf90f7c4463d8ad19bd409d7ce399e
=======
webpackJsonp([3],{"+O4B":function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mt-5 attendance-head"},[a("div",{staticClass:"mb-5 row align-items-center"},[a("div",{staticClass:"col-12 title-con"},[a("span",{staticClass:"title"},[t._v(t._s(t._f("capitalize")(t.title)))]),t._v(" "),t.to?a("div",{staticClass:"row justify-content-end"},[a("router-link",{staticClass:"text-link mt-3",attrs:{to:t.to}},[t._v(t._s(t.buttonTitle))])],1):t._e()])])])},staticRenderFns:[]}},"+YcG":function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,".attendance-view .custom-select[data-v-a957b8b2],.attendance-view input[data-v-a957b8b2]{width:85%}.attendance-view .myBtn[data-v-a957b8b2]{width:95%}",""])},"0M/v":function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.show?a("div",{staticClass:"tab-content mt-1 attendance-body"},[a("div",{staticClass:"tab-pane active text-center",attrs:{id:"reminder-panel",role:"tabpanel"}},t._l(t.orders,function(e,r){return a("order-item",{key:e.id,attrs:{index:r,"start-index":t.startIndex,order:e,dva_id:t.dva_id,"is-repayment-valid":t.isRepaymentValid(e),"pay-summary":t.calcPaymentSummary(e),"repayment-level":t.getRepaymentLevel(e),mode:t.mode},on:{done:function(e){t.fetchList(t.list)},updateReminderList:t.updateReminder,display:t.displayDetails}})})),t._v(" "),"normal-list"!=t.mode?a("div",{staticClass:"w-100 my-5 mx-0 hr"}):t._e()]):a("div",{staticClass:"tab-content mt-1 attendance-body"},[t._m(0)]),t._v(" "),t.show&&"sms"===t.mode?a("div",{staticClass:"mt-1 attendance-body"},[a("div",{staticClass:"mb-5 px-0 row align-items-center"},[a("div",{staticClass:"clearfix d-flex justify-content-end w-100"},[a("button",{staticClass:"btn bg-default",attrs:{disabled:t.$isProcessing},on:{click:t.processSelected}},[t._v("\n                    Send Reminder(s) "),a("i",{staticClass:"far fa-paper-plane ml-1"})])])])]):t._e(),t._v(" "),a("div",{staticClass:"modal fade",attrs:{id:"purchase_order"}},[a("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[a("div",{staticClass:"modal-content"},[t._m(1),t._v(" "),t.showModalContent?a("div",{staticClass:"modal-body"},[a("div",{staticClass:"table-responsive"},[a("table",{staticClass:"table table-bordered table-striped"},[a("tbody",[a("tr",[a("th",[t._v("Order ID")]),t._v(" "),a("td",[t._v(t._s(t.currentOrder.id))])]),t._v(" "),a("tr",[a("th",[t._v("Order date")]),t._v(" "),a("td",[t._v(t._s(t.currentOrder.order_date))])]),t._v(" "),a("tr",[a("th",[t._v("Product")]),t._v(" "),a("td",[t._v(t._s(t.currentOrder.store_product.product_name))])]),t._v(" "),a("tr",[a("th",[t._v("Repayment")]),t._v(" "),a("td",[t._v(t._s(t.$formatCurrency(t.currentOrder.repayment_amount)))])]),t._v(" "),a("tr",[a("th",[t._v("Down Payment")]),t._v(" "),a("td",[t._v(t._s(t.$formatCurrency(t.currentOrder.down_payment)))])]),t._v(" "),a("tr",[a("th",[t._v("Discount (%)")]),t._v(" "),a("td",[t._v(t._s(t._f("capitalize")(t.getDiscount(t.currentOrder))))])]),t._v(" "),a("tr",[a("th",[t._v("Sale Type")]),t._v(" "),a("td",[t._v(t._s(t._f("capitalize")(t.currentOrder.sales_type.name)))])]),t._v(" "),a("tr",[a("th",[t._v("Total amount to Pay")]),t._v(" "),a("td",[t._v(t._s(t.$formatCurrency(t.currentOrder.product_price)))])]),t._v(" "),a("tr",[a("th",[t._v("Processed by")]),t._v(" "),a("td",[t._v(t._s(t.currentOrder.floor_agent?t.currentOrder.floor_agent.full_name:null))])])])])])]):t._e(),t._v(" "),t._m(2)])])]),t._v(" "),a("div",{staticClass:"modal fade",attrs:{id:"customer_info"}},[a("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[a("div",{staticClass:"modal-content"},[t._m(3),t._v(" "),t.showModalContent?a("div",{staticClass:"modal-body"},[a("div",{staticClass:"table-responsive"},[a("table",{staticClass:"table table-bordered table-striped"},[a("tbody",[a("tr",[a("th",[t._v("Customer ID")]),t._v(" "),a("td",[t._v(t._s(t.currentOrder.customer.id))])]),t._v(" "),a("tr",[a("th",[t._v("Full Name")]),t._v(" "),a("td",[t._v(t._s(t.$getCustomerFullName(t.currentOrder.customer)))])]),t._v(" "),a("tr",[a("th",[t._v("Address")]),t._v(" "),a("td",[t._v(t._s(t.$getCustomerAddress(t.currentOrder.customer)))])]),t._v(" "),a("tr",[a("th",[t._v("Phone")]),t._v(" "),a("td",[t._v(t._s(t.currentOrder.customer.telephone))])]),t._v(" "),a("tr",[a("th",[t._v("Branch")]),t._v(" "),a("td",[t._v(t._s(t.currentOrder.customer.branch.name))])]),t._v(" "),a("tr",[a("th",[t._v("Category")]),t._v(" "),a("td",[t._v(t._s(t.currentOrder.customer.employment_status))])]),t._v(" "),a("tr",[a("th",[t._v("Work guarantor name")]),t._v(" "),a("td",[t._v(t._s(t.currentOrder.customer.work_guarantor_first_name+" "+t.currentOrder.customer.work_guarantor_last_name+" - "+t.currentOrder.customer.work_guarantor_relationship)+"\n                                ")])]),t._v(" "),a("tr",[a("th",[t._v("Work guarantor phone")]),t._v(" "),a("td",[t._v(t._s(t.currentOrder.customer.work_guarantor_telno))])]),t._v(" "),a("tr",[a("th",[t._v("Personal guarantor name")]),t._v(" "),a("td",[t._v(t._s(t.currentOrder.customer.personal_guarantor_first_name+" "+t.currentOrder.customer.personal_guarantor_last_name+" - "+t.currentOrder.customer.personal_guarantor_relationship)+"\n                                ")])]),t._v(" "),a("tr",[a("th",[t._v("Personal guarantor phone")]),t._v(" "),a("td",[t._v(t._s(t.currentOrder.customer.personal_guarantor_telno))])]),t._v(" "),a("tr",[a("th",[t._v("Verified by")]),t._v(" "),a("td",[a("router-link",{staticClass:"text-link",attrs:{target:"_blank",to:"/dva/verification?id="+t.currentOrder.customer.id}},[t._v("\n                                        click here to see verifications status\n                                    ")])],1)])])])])]):t._e(),t._v(" "),t._m(4)])])]),t._v(" "),a("div",{staticClass:"modal fade repayment",attrs:{id:"repayment"}},[a("div",{staticClass:"modal-dialog modal-xl",attrs:{role:"document"}},[t.showModalContent?a("div",{staticClass:"modal-content"},[a("div",{staticClass:"modal-header py-2"},[a("h6",{staticClass:"modal-title py-1"},[t._v("\n                        Repayment Plan/Summary - "+t._s(t._f("capitalize")(t.currentOrder.customer.employment_status))+"\n                    ")]),t._v(" "),t._m(5)]),t._v(" "),a("div",{staticClass:"modal-body"},[a("div",{staticClass:"table-responsive"},[a("h5",{staticClass:"mt-3 mb-0"},[t._v("Amortization Schedule")]),t._v(" "),a("table",{staticClass:"table table-bordered"},[a("tbody",{staticClass:"text-center"},[a("tr",[a("th",[t._v("Repayment")]),t._v(" "),t._l(t.repaymentCaption(t.currentOrder),function(e){return a("td",{domProps:{innerHTML:t._s(e)}})})],2),t._v(" "),a("tr",{staticClass:"table-separator"},[a("th",[t._v("Due Date")]),t._v(" "),t._l(t.getRepayment(t.currentOrder),function(e){return a("td",[t._v(t._s(e))])})],2),t._v(" "),a("tr",[a("th",[t._v("Actual Pay Day")]),t._v(" "),t._l(t.getRepayment(t.currentOrder,"_date"),function(e){return a("td",[t._v(t._s(e))])})],2),t._v(" "),a("tr",{staticClass:"table-separator"},[a("th",[t._v("Status")]),t._v(" "),t._l(t.getPaymentStatusClasses(t.currentOrder),function(t){return a("td",{class:t.class},[a("i",{staticClass:"fas",class:t.icon})])})],2),t._v(" "),a("tr",{staticClass:"table-separator"},[a("th",[t._v("Repayment Amount")]),t._v(" "),t._l(t.getRepayment(t.currentOrder,"repayments"),function(e){return a("td",[t._v("\n                                    "+t._s(t.$formatCurrency(e))+"\n                                ")])})],2),t._v(" "),a("tr",[a("th",[t._v("Actual Amount Paid")]),t._v(" "),t._l(t.getRepayment(t.currentOrder,"_pay"),function(e){return a("td",[t._v("\n                                    "+t._s(t.$formatCurrency(e))+"\n                                ")])})],2),t._v(" "),a("tr",{staticClass:"table-separator"},[a("th",[t._v("Payment Method")]),t._v(" "),t._l(t.getRepayment(t.currentOrder,"_payment_method"),function(e){return a("td",{staticClass:"text-capitalize"},[t._v("\n                                    "+t._s(t.convertPaymentMethodOrBankToName(e,"payment_methods"))+"\n                                ")])})],2),t._v(" "),a("tr",[a("th",[t._v("Bank")]),t._v(" "),t._l(t.getRepayment(t.currentOrder,"_payment_bank"),function(e){return a("td",{staticClass:"text-capitalize"},[t._v("\n                                    "+t._s(t.convertPaymentMethodOrBankToName(e,"banks"))+"\n                                ")])})],2)])]),t._v(" "),a("h5",{staticClass:"mt-5 mb-0"},[t._v("Payment Summary")]),t._v(" "),a("table",{staticClass:"table table-bordered"},[a("tbody",{staticClass:"text-center"},[a("tr",{staticClass:"table-separator"},[a("td",{staticClass:"text-left"},[t._v("Discount Detail (%)")]),t._v(" "),a("th",[t._v("\n                                    "+t._s(t._f("capitalize")(t.currentOrder.discount.name))+"\n                                    -\n                                    ("+t._s(t.currentOrder.discount.percentage_discount)+")\n                                ")]),t._v(" "),a("td",[t._v("Total Before Discount")]),t._v(" "),a("th",[t._v(t._s(t.$formatCurrency(t.$roundDownAmt(t.currentOrder.product_price))))]),t._v(" "),a("td",[t._v("Total Paid")]),t._v(" "),a("th",[t._v(t._s(t.paymentSummary.amountPaid))])]),t._v(" "),a("tr",[a("td",{staticClass:"text-left"},[t._v("Discount Amount")]),t._v(" "),a("th",[t._v(t._s(t.paymentSummary.discountAmount))]),t._v(" "),a("td",[t._v("Total After Discount")]),t._v(" "),a("th",[t._v(t._s(t.paymentSummary.discountedTotal))]),t._v(" "),a("td",[t._v("Total Debt")]),t._v(" "),a("th",[t._v(t._s(t.paymentSummary.outstandingDebt))])]),t._v(" "),a("tr",[a("td",{staticClass:"text-left"},[t._v("Down Payment")]),t._v(" "),a("th",[t._v(t._s(t.$formatCurrency(t.$roundDownAmt(t.currentOrder.down_payment))))]),t._v(" "),a("td",[t._v("Total Plus Default Fee")]),t._v(" "),a("th",[t._v(t._s(t.paymentSummary.totalPlusDefault))]),t._v(" "),a("td",[t._v("Default Fee")]),t._v(" "),a("th",[t._v(t._s(t.paymentSummary.defaultFee))])])])])])]),t._v(" "),t._m(6)]):t._e()])]),t._v(" "),a("div",{staticClass:"modal fade repayment",attrs:{id:"reminder_history"}},[a("div",{staticClass:"modal-dialog modal-lg",attrs:{role:"document"}},[a("div",{staticClass:"modal-content"},[t._m(7),t._v(" "),t.showModalContent?a("div",{staticClass:"modal-body"},[a("div",{staticClass:"table-responsive"},[t.currentOrder.reminders.length?a("table",{staticClass:"table table-bordered table-striped"},[t._m(8),t._v(" "),a("tbody",t._l(t.currentOrder.reminders,function(e,r){return a("tr",[a("th",[t._v(t._s(r+1))]),t._v(" "),a("td",[t._v(t._s(t.$dateTimeConvert(e.date)))]),t._v(" "),a("td",[t._v(t._s(e.type))]),t._v(" "),a("td",{domProps:{innerHTML:t._s(t.renderMessage(e))}}),t._v(" "),a("td",[t._v(t._s(e.user.full_name))])])}))]):a("div",{staticClass:"my-4 text-center"},[t._v("\n                            no reminders have been sent yet!\n                        ")])])]):t._e(),t._v(" "),t._m(9)])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"tab-pane active text-center"},[e("div",{staticClass:"mb-3 row attendance-item"},[e("div",{staticClass:"col d-flex light-heading align-items-center justify-content-center"},[this._v("\n                    No records found!\n                ")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"modal-header py-2"},[e("h6",{staticClass:"modal-title py-1"},[this._v("Purchase Order Summary")]),this._v(" "),e("a",{staticClass:"close py-1",attrs:{"aria-label":"Close","data-dismiss":"modal"}},[e("span",{staticClass:"modal-close text-danger",attrs:{"aria-hidden":"true"}},[e("i",{staticClass:"fas fa-times"})])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"modal-footer"},[e("a",{staticClass:"text-link mt-3 w-100",staticStyle:{"text-align":"right"},attrs:{"data-dismiss":"modal",href:"javascript:"}},[this._v("close dialogue")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"modal-header py-2"},[e("h6",{staticClass:"modal-title py-1"},[this._v("Customer Info. Summary")]),this._v(" "),e("a",{staticClass:"close py-1",attrs:{"aria-label":"Close","data-dismiss":"modal"}},[e("span",{staticClass:"modal-close text-danger",attrs:{"aria-hidden":"true"}},[e("i",{staticClass:"fas fa-times"})])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"modal-footer"},[e("a",{staticClass:"text-link mt-3 w-100 text-right",attrs:{"data-dismiss":"modal",href:"#"}},[this._v("\n                        close dialogue\n                    ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"close py-1",attrs:{"aria-label":"Close","data-dismiss":"modal"}},[e("span",{staticClass:"modal-close text-danger",attrs:{"aria-hidden":"true"}},[e("i",{staticClass:"fas fa-times"})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"modal-footer"},[e("a",{staticClass:"text-link mt-3 w-100",staticStyle:{"text-align":"right"},attrs:{"data-dismiss":"modal",href:"javascript:"}},[this._v("close dialogue")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"modal-header py-2"},[e("h6",{staticClass:"modal-title py-1"},[this._v("Reminder History")]),this._v(" "),e("a",{staticClass:"close py-1",attrs:{"aria-label":"Close","data-dismiss":"modal"}},[e("span",{staticClass:"modal-close text-danger",attrs:{"aria-hidden":"true"}},[e("i",{staticClass:"fas fa-times"})])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",[t._v("S/N")]),t._v(" "),a("th",[t._v("Date")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("SMS/Feedback")]),t._v(" "),a("th",[t._v("sender")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"modal-footer"},[e("a",{staticClass:"text-link mt-3 w-100",staticStyle:{"text-align":"right"},attrs:{"data-dismiss":"modal",href:"javascript:"}},[this._v("close dialogue")])])}]}},"7elN":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r,s=a("p/p5"),n=a("K23+"),i=(r=n)&&r.__esModule?r:{default:r},o=a("nv24");function l(t){if(Array.isArray(t)){for(var e=0,a=Array(t.length);e<t.length;e++)a[e]=t[e];return a}return Array.from(t)}e.default={props:{mode:null,index:null,startIndex:{default:1},dva_id:null,paySummary:null,repaymentLevel:null,order:{default:{}},isRepaymentValid:null},data:function(){return{selected:!1}},created:function(){o.EventBus.$on("selectOrderItem",this.toggleSelect)},methods:{logReminder:function(){var t=this;this.$LIPS(!0),delete this.reminder.order,delete this.reminder.canBeSelected,(0,s.post)("/api/reminder",{reminders:[this.reminder]}).then(function(e){return e.data.saved?t.logPromiseCall():t.$displayErrorMessage("Error Logging reminders!")})},logPromiseCall:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Reminder Logged!";this.promiseCall.date?(0,s.post)("/api/promise_call",this.promiseCall).then(function(a){return a.data.saved?t.done(e+" Promise call added!"):t.$displayErrorMessage("Error Logging promise call!")}):this.done(e)},done:function(t){this.$scrollToTop(),i.default.setSuccess(t,5e3),this.$emit("done")},isReminderSent:function(){var t=this,e=!0;if(this.order.reminders.length>0){var a=this.$getDate();this.order.reminders.forEach(function(r){var s=r.date.split(" "),n=s[0].split("-"),i=s[1].split(":"),o=[].concat(l(n),l(i)).map(function(t){return parseInt(t,10)});t.$getDate(new Date(Date.UTC.apply(Date,l(o))),!1)===a&&(e=!1)})}return e},toggleSelect:function(t){this.reminder.canBeSelected&&(this.selected=t,this.$emit("updateReminderList",this.reminder,t))}},computed:{reminder:function(){var t={customer_id:this.order.customer.id,order_id:this.order.id,repayment_level:this.repaymentLevel,dva_id:this.dva_id,type:this.mode,canBeSelected:this.isReminderSent()};return"sms"===this.mode&&(t.contacts=this.order.customer.telephone,t.sms_id=null),t},promiseCall:function(){return{order_id:this.order.id,user_id:this.dva_id,customer_id:this.order.customer.id,date:null}},getFinancialStatus:function(){return this.isRepaymentValid?"Paid: "+this.paySummary.amountPaid+" | Debt: "+this.paySummary.outstandingDebt:"no detail!"}}}},Bt6c:function(t,e,a){var r=a("jx6i");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);a("rjj0")("567ebe18",r,!0,{})},CvDN:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mb-3 row attendance-item"},[a("div",{staticClass:"col-12 col-xs-2 col-md col-lg d-flex align-items-center",staticStyle:{"max-width":"120px"}},["normal-list"===t.mode?a("span"):t.reminder.canBeSelected&&["collection","recovery","call","external-recovery"].includes(t.mode)?a("span",{staticClass:"user mx-auto waiting-reminder",on:{click:t.logReminder}},[a("i",{staticClass:"fas fa-hourglass-start"})]):t.reminder.canBeSelected&&"sms"===t.mode?a("div",{staticClass:"d-flex align-items-center"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.selected,expression:"selected"}],staticClass:"form-check-input my-0 mx-4 float-left position-relative ",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.selected)?t._i(t.selected,null)>-1:t.selected},on:{click:function(e){t.toggleSelect(!t.selected)},change:function(e){var a=t.selected,r=e.target,s=!!r.checked;if(Array.isArray(a)){var n=t._i(a,null);r.checked?n<0&&(t.selected=a.concat([null])):n>-1&&(t.selected=a.slice(0,n).concat(a.slice(n+1)))}else t.selected=s}}})]):a("span",{staticClass:"user mx-auto sent-reminder"},[a("i",{staticClass:"fas fa-check"})]),t._v(" "),a("span",{staticClass:"user mx-auto"},[t._v(t._s(t.startIndex+t.index))])]),t._v(" "),a("div",{staticClass:"col-12 col-xs-2 col-md col-lg user-name d-flex align-items-center justify-content-center"},[t._v("\n        "+t._s(t.$vnode.key)+"\n    ")]),t._v(" "),a("div",{staticClass:"col-12 col-xs-2 col-md col-lg d-flex align-items-center justify-content-center",attrs:{"data-hoverable":"true"},on:{click:function(e){t.$emit("display",t.order,"purchase_order")}}},[t._v("\n        "+t._s(t.order.order_date)+"\n    ")]),t._v(" "),a("div",{staticClass:"col-12 col-xs-3 col-md col-lg d-flex align-items-center justify-content-center",attrs:{"data-hoverable":"true"},on:{click:function(e){t.$emit("display",t.order,"customer_info")}}},[t._v("\n        ID: "+t._s(t.order.customer.id)+" - "+t._s(t._f("capitalize")(t.order.customer.employment_status))+"\n    ")]),t._v(" "),a("div",{staticClass:"col-12 col-xs-2 col-md col-lg d-flex align-items-center justify-content-center",attrs:{"data-hoverable":"true"},on:{click:function(e){t.$emit("display",t.order,"repayment")}}},[t._v("\n        "+t._s(t.getFinancialStatus)+"\n    ")]),t._v(" "),a("div",{staticClass:"col-12 col-xs-2 col-md col-lg d-flex align-items-center justify-content-center",attrs:{"data-hoverable":"true"},on:{click:function(e){t.$emit("display",t.order,"reminder_history")}}},[t._v("\n        "+t._s(t.order.reminders.length)+" reminder(s) sent\n    ")]),t._v(" "),["collection","recovery","external-recovery"].includes(t.mode)?a("div",{staticClass:"col-12 col-xs-2 col-md col-lg d-flex align-items-center attendance-create"},[a("span",{staticClass:"present"},[a("span",{staticClass:"radio w-50 pr-3 mb-0 float-left"},[a("input",{attrs:{type:"radio",value:"yes",id:"present"+t.index,name:"isPresent"+t.index}}),t._v(" "),a("label",{attrs:{for:"present"+t.index}},[t._v("yes")])]),t._v(" "),a("span",{staticClass:"radio w-50 pl-3 mb-0 float-left"},[a("input",{attrs:{type:"radio",value:"no",id:"absent"+t.index,name:"isPresent"+t.index}}),t._v(" "),a("label",{attrs:{for:"absent"+t.index}},[t._v("no")])])])]):t._e(),t._v(" "),["collection","recovery","call","external-recovery"].includes(t.mode)?a("div",{staticClass:"col-12 col-xs-2 col-md col-lg d-flex align-items-center"},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.reminder.feedback,expression:"reminder.feedback"}],staticClass:"form-control",attrs:{rows:"1",disabled:!t.reminder.canBeSelected},domProps:{value:t.reminder.feedback},on:{input:function(e){e.target.composing||t.$set(t.reminder,"feedback",e.target.value)}}})]):t._e(),t._v(" "),"call"===t.mode?a("div",{staticClass:"col-12 col-xs-2 col-md col-lg d-flex align-items-center"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.promiseCall.date,expression:"promiseCall.date"}],staticClass:"form-control",attrs:{type:"date",disabled:!t.reminder.canBeSelected},domProps:{value:t.promiseCall.date},on:{input:function(e){e.target.composing||t.$set(t.promiseCall,"date",e.target.value)}}})]):t._e()])},staticRenderFns:[]}},EJ7O:function(t,e,a){var r=a("VU/8")(a("oKx2"),a("+O4B"),!1,null,null,null);t.exports=r.exports},EfnB:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("transition",{attrs:{name:"fade"}},[a("div",{staticClass:"attendance",attrs:{id:"reminder"}},[a("custom-header",{attrs:{title:"All overdue(s) payments"}}),t._v(" "),a("div",{staticClass:"mt-5 row attendance-head"},[t._l(t.filters,function(e){var r=e.name;return a("div",{staticClass:"col-4 col-sm"},[a("div",{staticClass:"row"},[a("div",{staticClass:"light-heading"},[a("span",{staticClass:"d-none d-sm-inline"},[t._v("Select")]),t._v(" "+t._s(t._f("capitalize")(r))+"\n                    ")])])])}),t._v(" "),a("div",{staticClass:"col-3 col-sm"})],2),t._v(" "),a("div",{staticClass:"mt-2 mt-lg-3 row attendance-head attendance-view"},[t._l(t.filters,function(e){var r=e.name,s=e.model;return a("div",{staticClass:"col-4 col-sm"},[a("div",{staticClass:"row"},["branch"===r?a("select",{directives:[{name:"model",rawName:"v-model",value:t.$data[s],expression:"$data[model]"}],staticClass:"custom-select",on:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;t.fetchData()},change:function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.$set(t.$data,s,e.target.multiple?a:a[0])}}},[a("option",{attrs:{disabled:"",selected:"",value:""}},[t._v(t._s(t._f("capitalize")(r)))]),t._v(" "),t._l(t.$store.getters.getBranches,function(e){var r=e.name,s=e.id;return a("option",{domProps:{value:s}},[t._v("\n                            "+t._s(t._f("capitalize")(r))+"\n                        ")])})],2):a("div",{staticClass:"form-group w-100"},"overdue days"===r?[a("input",{directives:[{name:"model",rawName:"v-model",value:t.$data[s],expression:"$data[model]"}],staticClass:"form-control",attrs:{type:"number"},domProps:{value:t.$data[s]},on:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;t.fetchData()},input:function(e){e.target.composing||t.$set(t.$data,s,e.target.value)}}})]:[a("input",{directives:[{name:"model",rawName:"v-model",value:t.$data[s],expression:"$data[model]"}],staticClass:"form-control",attrs:{type:"date"},domProps:{value:t.$data[s]},on:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;t.fetchData()},input:function(e){e.target.composing||t.$set(t.$data,s,e.target.value)}}})])])])}),t._v(" "),a("div",{staticClass:"col-12 col-sm"},[a("div",{staticClass:"row d-flex justify-content-end"},[a("button",{staticClass:"btn btn-primary bg-default mt-0 myBtn",on:{click:function(e){t.fetchData()}}},[t._v("Apply Filter")])])])],2),t._v(" "),a("div",{staticClass:"mt-5 mb-3 attendance-head"},[a("div",{staticClass:"w-100 my-5 mx-0 hr"}),t._v(" "),a("div",{staticClass:"row px-4 pt-3 pb-4 text-center"},[a("div",{staticClass:"col light-heading",staticStyle:{"max-width":"120px"}},[t._v("S/N")]),t._v(" "),t._l(t.headings,function(e){return a("div",{staticClass:"col light-heading"},[t._v(t._s(e))])})],2)]),t._v(" "),t.show?a("order",{attrs:{"start-index":t.orders.from,"pre-loaded-order":t.response,mode:"normal-list"}}):t._e(),t._v(" "),a("div",{staticClass:"mt-5 mb-3 attendance-head"},[a("div",{staticClass:"w-100 my-5 mx-0 hr"})])],1)])},staticRenderFns:[]}},Oi84:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=a("p/p5"),s=o(a("K23+")),n=o(a("XPj8")),i=o(a("EJ7O"));function o(t){return t&&t.__esModule?t:{default:t}}e.default={components:{CustomHeader:i.default,Order:n.default},data:function(){return{branch_id:"",overdue_days:1,filters:[{name:"branch",model:"branch_id"},{name:"overdue days",model:"overdue_days"}],orders:null,response:{},show:!1,headings:["Order Number","Order Summary","Customer Info Summary","Repayment Summary","Reminder History"]}},methods:{fetchData:function(){var t=this;this.$scrollToTop(),this.$LIPS(!0);var e=this.$data,a=e.branch_id,n=e.overdue_days;(0,r.get)("/api/reminder/create"+(n?"?overdue_days="+n:"")+(a?"&branch_id="+a:"")).then(function(e){var a=e.data;return t.prepareForm(a)}).catch(function(){return s.default.setError("Error Preparing form")})},prepareForm:function(t){var e=this;this.show=!1,this.orders=null,this.response={},this.orders=t.orders.filter(function(t){var a=e.getCountAndRepaymentData(t).repaymentData,r=e.amortizationPlan(t),s=r.count,n=r.interval,i=void 0,o=new Date;if(!a)return!1;for(var l=1;l<s+1;l++){if(!a[e.$getColumn(l)+"_pay"]){i=e.generateDates({startDate:t.order_date,interval:n,count:s})[l-1];break}}return e.$getDate(o.addDays(-e.overdue_days))===i});var a=t.payment_methods,r=t.banks,s=t.dva_id,n=t.branch;this.response={payment_methods:a,banks:r,dva_id:s,branch:n,orders:this.orders},this.$scrollToTop(),this.$LIPS(!1),this.show=!0},getCountAndRepaymentData:function(t){var e={count:this.amortizationPlan(t).count};return null!=t.repayment_formal&&(e.repaymentData=t.repayment_formal),null!=t.repayment_informal&&(e.repaymentData=t.repayment_informal),e},amortizationPlan:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.currentOrder,e=void 0,a=void 0;return new Date(t.order_date)<=new Date("2019-07-07")?(null!=t.repayment_formal&&(e=28,a=6),null!=t.repayment_informal&&(e=14,a=12)):this.isBankDraftAvailable(t)&&this.isOrderFormal(t)?(e=28,a=6):(e=14,a=12),{interval:e,count:a}},isBankDraftAvailable:function(){return!1},isOrderFormal:function(t){return["formal","salaried"].includes(t.customer.employment_status.toLowerCase())},generateDates:function(t){for(var e=t.startDate,a=t.interval,r=t.count,s=[],n=0;n<r;n++){var i=new Date(e).addDays((n+1)*a),o=this.$getDate(i);s.push(o)}return s}},created:function(){this.$prepareBranches(),this.fetchData()}}},Sqeo:function(t,e,a){var r=a("+YcG");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);a("rjj0")("7ec579f1",r,!0,{})},TZKk:function(t,e,a){var r=a("VU/8")(a("7elN"),a("CvDN"),!1,null,null,null);t.exports=r.exports},"Umu/":function(t,e,a){var r=a("VU/8")(a("Oi84"),a("EfnB"),!1,function(t){a("Sqeo")},"data-v-a957b8b2",null);t.exports=r.exports},XPj8:function(t,e,a){var r=a("VU/8")(a("aSpy"),a("0M/v"),!1,function(t){a("Bt6c")},"data-v-21eb0612",null);t.exports=r.exports},aSpy:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(t[r]=a[r])}return t},s=c(a("I3G/")),n=a("NYxO"),i=c(a("K23+")),o=a("m2tk"),l=a("p/p5"),d=c(a("TZKk"));function c(t){return t&&t.__esModule?t:{default:t}}e.default={components:{OrderItem:d.default},props:{list:{default:null},mode:null,preLoadedOrder:null,startIndex:null},watch:{list:function(t){this.fetchList(t)},preLoadedOrder:function(t){this.prepareForm(t)}},data:function(){return{orders:{},show:!1,banks:null,reminder:[],currentOrder:{},paymentSummary:null,payment_methods:null,showModalContent:!1}},computed:r({},(0,n.mapGetters)(["auth"])),methods:{prepareForm:function(t){var e=this;this.show=!1,this.showModalContent=!1,this.banks=t.banks,this.dva_id=t.dva_id,this.payment_methods=t.payment_methods,this.orders=t.orders.filter(function(a){var r=e.getCountAndRepaymentData(a).repaymentData,s=e.amortizationPlan(a),n=s.count,i=s.interval;return(!!(e.auth("DVALead")||e.auth("FSLLead")||e.auth("CAGAccess"))||parseInt(a.store_product.store_name)===t.branch)&&function(){if([8,1].includes(e.list)||"normal-list"===e.mode)return!0;var t=void 0,s=void 0,o=[],l=new Date,d=1===l.getDay()||[9,10,11,12,13,14].includes(e.list)?3:1;if(!r)return!1;for(var c=1;c<n+1;c++){var u=e.$getColumn(c);if(!r[u+"_pay"]){t=e.generateDates({startDate:a.order_date,interval:i,count:n})[c-1];break}}switch(e.list){case 2:s=7;break;case 3:s=3;break;case 4:s=0;break;case 5:s=1;break;case 6:s=5;break;case 7:s=31;break;case 9:s=38;break;case 10:s=45;break;case 11:s=61;break;case 12:s=75;break;case 13:s=90;break;case 14:s=121}if(["collection","recovery","call","external-recovery"].includes(e.mode))for(var m=0;m<d;m++)o.push(e.$getDate(l.addDays(-(m+s))));if("sms"===e.mode)for(var v=0;v<d;v++)o.push(e.$getDate(l.addDays(v+s)));return o.includes(t)}()}),this.orders.length&&(this.show=!0),this.$LIPS(!1)},isOrderFormal:function(t){return["formal","salaried"].includes(t.customer.employment_status.toLowerCase())},generateDates:function(t){for(var e=t.startDate,a=t.interval,r=t.count,s=[],n=0;n<r;n++){var i=new Date(e).addDays((n+1)*a),o=this.$getDate(i);s.push(o)}return s},renderMessage:function(t){return t.sms?t.sms.message.replace(/%0a/g,"</br>"):t.feedback},fetchList:function(t){var e,a=this;this.$LIPS(!0),(0,l.get)((e={query:{list:t}},"/api/reminder/create?list="+e.query.list)).then(function(e){var r=e.data;if(8===t){var s=[];r.orders.forEach(function(t){return s.push(t.order)}),r.orders=s}a.prepareForm(r)})},isPaymentDue:function(t){return new Date>new Date(t)},getDiscount:function(t){var e=t.discount;return e.name+" ("+e.percentage_discount+")"},isRepaymentValid:function(t){return!(!t.repayment_formal&&!t.repayment_informal)},displayDetails:function(t,e){return this.paymentSummary=this.calcPaymentSummary(t),s.default.set(this.$data,"currentOrder",t),this.showModalContent=!0,$("#"+e).modal("toggle")},getCountAndRepaymentData:function(t){var e={count:this.amortizationPlan(t).count};return null!=t.repayment_formal&&(e.repaymentData=t.repayment_formal),null!=t.repayment_informal&&(e.repaymentData=t.repayment_informal),e},calcPaymentSummary:function(t){var e=this,a=[],r=function(t){return e.$formatCurrency(t)},s=this.$roundDownAmt(parseInt(t.down_payment)),n=this.amortizationPlan(t),i=n.count,o=n.interval,l=this.getCountAndRepaymentData(t).repaymentData;if(this.generateDates({startDate:t.order_date,interval:o,count:i}).forEach(function(t,r){return e.isPaymentDue(e.$getDate(new Date(t).addDays(5)))&&a.push({dueDate:t,actualPayDate:l[e.$getColumn(r)+"_date"]})}),l)for(var d=1;d<i+1;d++)s+=this.$roundDownAmt(l[this.$getColumn(d)+"_pay"]);else s=0;var c=t.discount.percentage_discount,u=6===i?.5:1,m=t.repayment_amount*u*(c>0?5===c?1:2:0);m=this.$roundDownAmt(m);var v=500*a.length,_=this.$roundDownAmt(t.product_price-m);return{amountPaid:r(s),discountAmount:r(this.$roundDownAmt(m)),outstandingDebt:r(this.$roundDownAmt(parseInt(t.product_price)-s)),discountedTotal:r(_),defaultFee:r(v),totalPlusDefault:r(_+v)}},getRepayment:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(!this.isRepaymentValid(t))return null;var a=[],r=this.getCountAndRepaymentData(t).repaymentData,s=this.amortizationPlan(t),n=s.interval,i=s.count;if(null===e)return this.generateDates({startDate:t.order_date,interval:n,count:i});if("repayments"===e)return new Array(i).fill(this.$roundDownAmt(t.repayment_amount),0,i);for(var o=1;o<i+1;o++)a.push(r[this.$getColumn(o)+e]);return a},getPaymentStatusClasses:function(t){if(!this.isRepaymentValid(t))return null;for(var e=[],a=this.getCountAndRepaymentData(t).repaymentData,r=this.amortizationPlan(t).count,s=this.getRepayment(t),n=1;n<r+1;n++){var i={class:null,icon:null},o=this.$getColumn(n),l=this.isPaymentDue(s[n-1]),d=parseInt(a[o+"_pay"]);d?(i.class="paid",i.icon="fa-check"):l&&!d?(i.class="missed",i.icon="fa-times"):l||(i.class="pending",i.icon="fa-hourglass-start"),e.push(i)}return e},getRepaymentLevel:function(t){if(!this.isRepaymentValid(t))return 0;for(var e=0,a=this.amortizationPlan(t).count,r=this.getCountAndRepaymentData(t).repaymentData,s=1;s<a+1;s++)r[this.$getColumn(s)+"_pay"]>0&&e++;return e+"/"+a},convertPaymentMethodOrBankToName:function(t,e){return t?this.$data[e].find(function(e){return e.id===t}).name:null},updateReminder:function(t,e){if(e)this.reminder.push(t);else{var a=void 0;this.reminder.forEach(function(e,r){return e.order_id===t.order_id&&(a=r)}),this.reminder.splice(a,1)}},processSelected:function(){var t=this;if(this.reminder.length){this.$LIPS(!0);var e=this.reminder.map(function(e){var a=JSON.parse(JSON.stringify(e));return a.order=t.orders.find(function(t){return t.id===e.order_id}),a.message=t.generateCustomMessage(a.order),a});this.sendSMSReminders(e)}else this.$displayErrorMessage("please select at least one!")},sendSMSReminders:function(t){var e=this,a=[];t.forEach(function(r,s){var n=new o.Message(r.message,r.contacts,!1,r.dva_id);n.send(function(r){200===r.status&&(delete n.logToDB,a.push(n)),s+1===t.length&&e.logSentMessages(a,t)})})},logSentMessages:function(t,e){var a=this;t?(0,l.post)("/api/message",{messages:t,bulk:!0}).then(function(t){var r=t.data,s=r.sentAndLogged,n=r.ids;s?a.logSentReminders(e,n):a.$displayErrorMessage("Error Logging sent sms details!")}):this.$displayErrorMessage("Error sending messages!")},logSentReminders:function(t,e){var a=this;e.reverse();var r=JSON.parse(JSON.stringify(t));r.forEach(function(t,a){t.sms_id=e[a],delete t.message,delete t.order,delete t.contacts,delete t.canBeSelected}),e.length>0?(0,l.post)("/api/reminder",{reminders:r}).then(function(t){t.data.saved?(i.default.setSuccess("Reminders have been sent successfully!",5e4),a.fetchList(a.list)):a.$displayErrorMessage("Error sending reminders!"),a.$scrollToTop()}):this.$displayErrorMessage("Error logging sent messages!")},generateCustomMessage:function(t){var e=this,a=t.customer,s=t.store_product,n=t.order_date,i=t.repayment_amount,o=s.product_name,l=a.first_name,d=a.last_name,c=void 0,u=r({startDate:n},this.amortizationPlan(t)),m=this.generateDates(u),v=this.getRepaymentLevel(t).split("/")[0];return 1===this.list?(c="Hello "+l+" "+d+", thanks for patronizing us. The following is the breakdown of the repayment plan for the purchase of "+o+":%0a",m.length>0&&m.forEach(function(t,a){return c+=e.$getColumn(a+1)+": "+t+" => "+e.$formatCurrency(e.$roundDownAmt(i))+"%0a"})):c="Hello "+l+" "+d+", This is to remind you that your "+this.$getColumn(parseInt(v)+1)+" repayment of "+this.$formatCurrency(this.$roundDownAmt(i))+" for "+o+" will be due on "+m[v]+". we will be expecting you.",c+"Please remember to pay on time to avoid late fees and other penalties.%0aThank you."},amortizationPlan:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.currentOrder,e=void 0,a=void 0;return new Date(t.order_date)<=new Date("2019-07-07")?(null!=t.repayment_formal&&(e=28,a=6),null!=t.repayment_informal&&(e=14,a=12)):this.isBankDraftAvailable(t)&&this.isOrderFormal(t)?(e=28,a=6):(e=14,a=12),{interval:e,count:a}},isBankDraftAvailable:function(){return!1},repaymentCaption:function(t){for(var e=this.amortizationPlan(t).count,a=[],r=1;r<=e;r++){for(var s=this.$getColumn(r).split(""),n=[],i=1;i<=2;i++)n.unshift(s.pop());a.push("<td>"+s.join("")+"<sup>"+n.join("")+"</sup></td>")}return a}},mounted:function(){var t=this;"normal-list"!=this.mode?this.fetchList(this.list):this.prepareForm(this.preLoadedOrder),$(document).on("hidden.bs.modal",".modal",function(){t.currentOrder=null,t.showModalContent=!1})}}},jx6i:function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,".table-separator[data-v-21eb0612]{border-top:2px solid #dee1e4}",""])},m2tk:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Message=void 0;var r=function(){function t(t,e){for(var a=0;a<e.length;a++){var r=e[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,a,r){return a&&t(e.prototype,a),r&&t(e,r),e}}(),s=a("p/p5");e.Message=function(){function t(e,a){var r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.user_id=s,this.message=e,this.logToDB=r,this.contacts=a.split(",").filter(function(t){return/\S/.test(t)}).map(function(t){return"234"+t.trim().substr(1)}).join(","),this.setPages(),this.setContactCount()}return r(t,[{key:"setContactCount",value:function(){this.contact_count=this.contacts.split(",").length}},{key:"setPages",value:function(){this.pages=Math.ceil(this.message.length/160)}},{key:"send",value:function(t){var e=this;(0,s.get)("/api/message/create?to="+this.contacts+"&message="+this.message).then(function(a){return 200===a.status&&e.logToDB&&(delete e.logToDB,(0,s.post)("/api/message",e)),!!t&&t(a)}).catch(function(e){return!!t&&t(e)})}}]),t}()},nv24:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.EventBus=void 0;var r,s=a("I3G/"),n=(r=s)&&r.__esModule?r:{default:r};e.EventBus=new n.default},oKx2:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{title:"",buttonTitle:null,to:null}}},rjj0:function(t,e,a){var r="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!r)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var s=a("tTVk"),n={},i=r&&(document.head||document.getElementsByTagName("head")[0]),o=null,l=0,d=!1,c=function(){},u=null,m="data-vue-ssr-id",v="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function _(t){for(var e=0;e<t.length;e++){var a=t[e],r=n[a.id];if(r){r.refs++;for(var s=0;s<r.parts.length;s++)r.parts[s](a.parts[s]);for(;s<a.parts.length;s++)r.parts.push(f(a.parts[s]));r.parts.length>a.parts.length&&(r.parts.length=a.parts.length)}else{var i=[];for(s=0;s<a.parts.length;s++)i.push(f(a.parts[s]));n[a.id]={id:a.id,refs:1,parts:i}}}}function p(){var t=document.createElement("style");return t.type="text/css",i.appendChild(t),t}function f(t){var e,a,r=document.querySelector("style["+m+'~="'+t.id+'"]');if(r){if(d)return c;r.parentNode.removeChild(r)}if(v){var s=l++;r=o||(o=p()),e=g.bind(null,r,s,!1),a=g.bind(null,r,s,!0)}else r=p(),e=function(t,e){var a=e.css,r=e.media,s=e.sourceMap;r&&t.setAttribute("media",r);u.ssrId&&t.setAttribute(m,e.id);s&&(a+="\n/*# sourceURL="+s.sources[0]+" */",a+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */");if(t.styleSheet)t.styleSheet.cssText=a;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(a))}}.bind(null,r),a=function(){r.parentNode.removeChild(r)};return e(t),function(r){if(r){if(r.css===t.css&&r.media===t.media&&r.sourceMap===t.sourceMap)return;e(t=r)}else a()}}t.exports=function(t,e,a,r){d=a,u=r||{};var i=s(t,e);return _(i),function(e){for(var a=[],r=0;r<i.length;r++){var o=i[r];(l=n[o.id]).refs--,a.push(l)}e?_(i=s(t,e)):i=[];for(r=0;r<a.length;r++){var l;if(0===(l=a[r]).refs){for(var d=0;d<l.parts.length;d++)l.parts[d]();delete n[l.id]}}}};var h,y=(h=[],function(t,e){return h[t]=e,h.filter(Boolean).join("\n")});function g(t,e,a,r){var s=a?"":r.css;if(t.styleSheet)t.styleSheet.cssText=y(e,s);else{var n=document.createTextNode(s),i=t.childNodes;i[e]&&t.removeChild(i[e]),i.length?t.insertBefore(n,i[e]):t.appendChild(n)}}},tTVk:function(t,e){t.exports=function(t,e){for(var a=[],r={},s=0;s<e.length;s++){var n=e[s],i=n[0],o={id:t+":"+s,css:n[1],media:n[2],sourceMap:n[3]};r[i]?r[i].parts.push(o):a.push(r[i]={id:i,parts:[o]})}return a}}});
>>>>>>> 976efb13563114c356a829a8b2f4c56625bbae52
