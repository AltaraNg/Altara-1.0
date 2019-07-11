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

exports.default = {
    props: {
        mode: null,
        index: null,
        startIndex: { default: 1 },
        dva_id: null,
        paySummary: null,
        repaymentLevel: null,
        order: { default: {} },
        isRepaymentValid: null,
        getCountAndRepaymentData: null
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
                'type': this.mode === 'call' ? 'call' : 'sms',
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
            showModalContent: false,
            isCurrentOrderInformal: null
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
                    count = _getCountAndRepayment.count,
                    repaymentData = _getCountAndRepayment.repaymentData;

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

                    accumulatedDays = isMonday ? 3 : 1;
                    /*accumulatedDays hold 1 or 3,
                    1 if the current date is not on a monday and
                    3 if the current date is on a monday*/

                    /*step 1::
                    * the count is either 7 or 13,
                    * the loop runs for 6 or 12 times*/
                    for (var i = 1; i < count; i++) {

                        /*get the resultant column 1st, 2nd, 3rd etc*/
                        var column = _this.$getColumn(i);

                        /*step 2. get the first occurrence of a vacant pay eg. 5th_pay*/
                        if (!repaymentData[column + "_pay"]) {

                            /*step 3. find the corresponding due date for the vacant pay
                            * The generateDates returns an array of the due
                            dates for the order under consideration*/
                            payDay = _this.generateDates({
                                interval: count === 7 ? 28 : 14,
                                startDate: order.order_date,
                                count: count - 1
                            })[i - 1];
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
                    }

                    if (_this.mode === "call") for (var p = 0; p < accumulatedDays; p++) {
                        datePool.push(_this.$getDate(today.addDays(-(p + dayInterval))));
                    }if (_this.mode === 'sms') for (var _p = 0; _p < accumulatedDays; _p++) {
                        datePool.push(_this.$getDate(today.addDays(_p + dayInterval)));
                    }return datePool.includes(payDay);
                };

                var isMyBranch = function isMyBranch() {
                    if (_this.$store.getters.auth('DVALead')) return true;
                    return order.customer.branch.id === res.branch;
                };

                return isMyBranch() && hasMissedPayment();
            });

            !!this.orders.length && (this.show = true);
            this.$LIPS(false);
        },


        isOrderFormal: function isOrderFormal(_ref) {
            var repayment_informal = _ref.repayment_informal;
            return repayment_informal === null;
        },

        generateDates: function generateDates(_ref2) {
            var startDate = _ref2.startDate,
                interval = _ref2.interval,
                count = _ref2.count;

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
            (0, _api.get)(url({ query: { list: list } })).then(function (_ref3) {
                var data = _ref3.data;

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

        getDiscount: function getDiscount(_ref4) {
            var discount = _ref4.discount;
            return discount.name + " (" + discount.percentage_discount + ")";
        },

        isRepaymentValid: function isRepaymentValid(order) {
            return !(!order['repayment'] && !order['repayment_formal'] && !order['repayment_informal']);
        },

        displayDetails: function displayDetails(order, modal) {
            this.paymentSummary = this.calcPaymentSummary(order);
            _vue2.default.set(this.$data, 'currentOrder', order);
            this.isCurrentOrderInformal = !['formal', 'salaried'].includes(order.customer.employment_status.toLowerCase());
            this.showModalContent = true;
            return $("#" + modal).modal('toggle');
        },
        getCountAndRepaymentData: function getCountAndRepaymentData(order) {
            var data = {};
            if (order['repayment_formal'] != null) data = { count: 7, repaymentData: order.repayment_formal };
            if (order['repayment_informal'] != null) data = { count: 13, repaymentData: order.repayment_informal };
            return data;
        },
        calcPaymentSummary: function calcPaymentSummary(order) {
            var _this3 = this;

            var datesDefaulted = [];
            var amountPerDefault = 500;
            var fmt = function fmt(cur) {
                return _this3.$formatCurrency(cur);
            };
            var amountPaid = parseInt(order.down_payment);

            var _getCountAndRepayment2 = this.getCountAndRepaymentData(order),
                count = _getCountAndRepayment2.count,
                repaymentData = _getCountAndRepayment2.repaymentData;

            var dueDates = this.generateDates({
                startDate: order.order_date,
                interval: count === 7 ? 28 : 14,
                count: count - 1
            });

            dueDates.forEach(function (dueDate, index) {
                return _this3.isPaymentDue(_this3.$getDate(new Date(dueDate).addDays(5))) && datesDefaulted.push({ dueDate: dueDate, actualPayDate: repaymentData[_this3.$getColumn(index) + "_date"] });
            });

            for (var i = 1; i < count; i++) {
                amountPaid += repaymentData[this.$getColumn(i) + '_pay'];
            }var discountAmount = order['discount']['percentage_discount'] / 100 * order["product_price"];
            var defaultFee = datesDefaulted.length * amountPerDefault;
            var discountedTotal = order["product_price"] - discountAmount;
            return {
                amountPaid: fmt(amountPaid),
                discountAmount: fmt(discountAmount),
                outstandingDebt: fmt(parseInt(order["product_price"]) - amountPaid),
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
                count = _getCountAndRepayment3.count,
                repaymentData = _getCountAndRepayment3.repaymentData;
            if (clause === null) {
                return this.generateDates({
                    startDate: order.order_date,
                    interval: count === 7 ? 28 : 14,
                    count: count - 1
                });
            }
            if (clause === 'repayments') {
                var repayment_amount = order.repayment_amount;

                for (var i = 1; i < count; i++) {
                    data.push(this.isCurrentOrderInformal ? repayment_amount : repayment_amount * 2);
                }return data;
            }
            for (var _i = 1; _i < count; _i++) {
                data.push(repaymentData[this.$getColumn(_i) + clause]);
            }return data;
        },
        getPaymentStatusClasses: function getPaymentStatusClasses(order) {
            if (!this.isRepaymentValid(order)) return null;
            var data = [],
                _getCountAndRepayment4 = this.getCountAndRepaymentData(order),
                count = _getCountAndRepayment4.count,
                repaymentData = _getCountAndRepayment4.repaymentData,
                dueDates = this.getRepayment(order);
            for (var i = 1; i < count; i++) {
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
                _getCountAndRepayment5 = this.getCountAndRepaymentData(order),
                count = _getCountAndRepayment5.count,
                repaymentData = _getCountAndRepayment5.repaymentData;
            for (var i = 1; i < count; i++) {
                if (repaymentData[this.$getColumn(i) + '_pay'] > 0) level++;
            }return level + "/" + (count - 1);
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
                newObject.order = _this4.orders.find(function (_ref5) {
                    var id = _ref5.id;
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
                (0, _api.post)('/api/message', { messages: messages, bulk: true }).then(function (_ref6) {
                    var data = _ref6.data;
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
                (0, _api.post)('/api/reminder', { reminders: newList }).then(function (_ref7) {
                    var data = _ref7.data;

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
                product_price = order.product_price,
                repayment_amount = order.repayment_amount;
            var product_name = store_product.product_name,
                first_name = customer.first_name,
                last_name = customer.last_name;
            var message = void 0;
            var isFormal = this.isOrderFormal(order);
            var genDateArgs = {};
            if (isFormal) genDateArgs = { startDate: order_date, interval: 28, count: 6 };
            if (!isFormal) genDateArgs = { startDate: order_date, interval: 14, count: 12 };
            var dates = this.generateDates(genDateArgs);

            var repaymentLevel = this.getRepaymentLevel(order).split("/")[0];
            if (this.list === 1) {
                message = "Hello " + first_name + " " + last_name + ", thanks for patronizing us." + " The following is the breakdown of the repayment plan for" + (" the purchase of " + product_name + ":%0a");
                if (dates.length > 0) dates.forEach(function (date, index) {
                    return message += _this8.$getColumn(index + 1) + ": " + date + " => " + _this8.$formatCurrency(repayment_amount) + "%0a";
                });
            } else {
                message = "Hello " + first_name + " " + last_name + ", This is to remind you that your" + (" " + this.$getColumn(parseInt(repaymentLevel) + 1) + " repayment of " + this.$formatCurrency(product_price) + " for " + product_name) + (" will be due on " + dates[repaymentLevel] + ". we will be expecting you.");
            }
            return message + "Please remember to pay on time to avoid late fees and other penalties.%0aThank you.";
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
            list: this.mode('sms') ? 1 : 4,
            doSelectAll: false
        };
    },


    methods: {
        selectAll: function selectAll() {
            this.doSelectAll = !this.doSelectAll;
            _eventBus.EventBus.$emit('selectOrderItem', this.doSelectAll);
        },
        setList: function setList(index) {
            this.list = index + 1 + (this.mode('call') && 3);
        },
        mode: function mode() {
            var query = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
            var mode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.$route.meta.mode;

            return query ? mode === query : mode;
        }
    },

    computed: {
        tabs: function tabs() {
            var tabs = ["1<sup>st</sup>", "2<sup>nd</sup>", "3<sup>rd</sup>"];
            this.mode('call') && (tabs = [].concat(_toConsumableArray(tabs), ["Guarantor's", "Promise"]));
            return tabs;
        },
        headings: function headings() {
            var headings = ['Order Number', 'Order Summary', 'Customer Info Summary', 'Repayment Summary', 'Reminder History'];
            this.mode('call') && (headings = [].concat(_toConsumableArray(headings), ['Feedback', 'Promise Date']));
            return headings;
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
            _vm._l(_vm.tabs, function(tab, index) {
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
                      _vm.setList(index)
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
        _c("order", { attrs: { list: _vm.list, mode: _vm.mode() } })
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
          : _vm.reminder.canBeSelected && _vm.mode === "call"
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
    _vm.mode === "call"
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
                  "get-count-and-repayment-data": _vm.getCountAndRepaymentData(
                    order
                  ),
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
                          _c("tr", [
                            _c("th", [_vm._v("Repayment")]),
                            _vm._v(" "),
                            _vm._m(6),
                            _vm._v(" "),
                            _vm._m(7),
                            _vm._v(" "),
                            _vm._m(8),
                            _vm._v(" "),
                            _vm._m(9),
                            _vm._v(" "),
                            _vm._m(10),
                            _vm._v(" "),
                            _vm._m(11),
                            _vm._v(" "),
                            _vm.isCurrentOrderInformal
                              ? _c("td", [
                                  _vm._v("7"),
                                  _c("sup", [_vm._v("th")])
                                ])
                              : _vm._e(),
                            _vm._v(" "),
                            _vm.isCurrentOrderInformal
                              ? _c("td", [
                                  _vm._v("8"),
                                  _c("sup", [_vm._v("th")])
                                ])
                              : _vm._e(),
                            _vm._v(" "),
                            _vm.isCurrentOrderInformal
                              ? _c("td", [
                                  _vm._v("9"),
                                  _c("sup", [_vm._v("th")])
                                ])
                              : _vm._e(),
                            _vm._v(" "),
                            _vm.isCurrentOrderInformal
                              ? _c("td", [
                                  _vm._v("10"),
                                  _c("sup", [_vm._v("th")])
                                ])
                              : _vm._e(),
                            _vm._v(" "),
                            _vm.isCurrentOrderInformal
                              ? _c("td", [
                                  _vm._v("11"),
                                  _c("sup", [_vm._v("th")])
                                ])
                              : _vm._e(),
                            _vm._v(" "),
                            _vm.isCurrentOrderInformal
                              ? _c("td", [
                                  _vm._v("12"),
                                  _c("sup", [_vm._v("th")])
                                ])
                              : _vm._e()
                          ]),
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
                                    _vm.currentOrder["product_price"]
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
                                    _vm.currentOrder.down_payment
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
                  _vm._m(12)
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
              _vm._m(13),
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
                              _vm._m(14),
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
              _vm._m(15)
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
    return _c("td", [_vm._v("1"), _c("sup", [_vm._v("st")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", [_vm._v("2"), _c("sup", [_vm._v("nd")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", [_vm._v("3"), _c("sup", [_vm._v("rd")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", [_vm._v("4"), _c("sup", [_vm._v("th")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", [_vm._v("5"), _c("sup", [_vm._v("th")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", [_vm._v("6"), _c("sup", [_vm._v("th")])])
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
webpackJsonp([3],{"7elN":function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a,s=r("p/p5"),n=r("K23+"),i=(a=n)&&a.__esModule?a:{default:a},o=r("nv24");function l(t){if(Array.isArray(t)){for(var e=0,r=Array(t.length);e<t.length;e++)r[e]=t[e];return r}return Array.from(t)}e.default={props:{mode:null,index:null,startIndex:{default:1},dva_id:null,paySummary:null,repaymentLevel:null,order:{default:{}},isRepaymentValid:null},data:function(){return{selected:!1}},created:function(){o.EventBus.$on("selectOrderItem",this.toggleSelect)},methods:{logReminder:function(){var t=this;this.$LIPS(!0),delete this.reminder.order,delete this.reminder.canBeSelected,(0,s.post)("/api/reminder",{reminders:[this.reminder]}).then(function(e){return e.data.saved?t.logPromiseCall():t.$displayErrorMessage("Error Logging reminders!")})},logPromiseCall:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Reminder Logged!";this.promiseCall.date?(0,s.post)("/api/promise_call",this.promiseCall).then(function(r){return r.data.saved?t.done(e+" Promise call added!"):t.$displayErrorMessage("Error Logging promise call!")}):this.done(e)},done:function(t){this.$scrollToTop(),i.default.setSuccess(t,5e3),this.$emit("done")},isReminderSent:function(){var t=this,e=!0;if(this.order.reminders.length>0){var r=this.$getDate();this.order.reminders.forEach(function(a){var s=a.date.split(" "),n=s[0].split("-"),i=s[1].split(":"),o=[].concat(l(n),l(i)).map(function(t){return parseInt(t,10)});t.$getDate(new Date(Date.UTC.apply(Date,l(o))),!1)===r&&(e=!1)})}return e},toggleSelect:function(t){this.reminder.canBeSelected&&(this.selected=t,this.$emit("updateReminderList",this.reminder,t))}},computed:{reminder:function(){var t={customer_id:this.order.customer.id,order_id:this.order.id,repayment_level:this.repaymentLevel,dva_id:this.dva_id,type:"call"===this.mode?"call":"sms",canBeSelected:this.isReminderSent()};return"sms"===this.mode&&(t.contacts=this.order.customer.telephone,t.sms_id=null),t},promiseCall:function(){return{order_id:this.order.id,user_id:this.dva_id,customer_id:this.order.customer.id,date:null}},getFinancialStatus:function(){return this.isRepaymentValid?"Paid: "+this.paySummary.amountPaid+" | Debt: "+this.paySummary.outstandingDebt:"no detail!"}}}},BXYC:function(t,e,r){(t.exports=r("FZ+f")(!1)).push([t.i,".attendance-head .light-heading[data-v-6067f3ca]:first-child{max-width:120px}",""])},OKUn:function(t,e,r){(t.exports=r("FZ+f")(!1)).push([t.i,".table-separator[data-v-754e8852]{border-top:2px solid #dee1e4}",""])},QRu0:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t.show?r("div",{staticClass:"tab-content mt-1 attendance-body"},[r("div",{staticClass:"tab-pane active text-center",attrs:{id:"reminder-panel",role:"tabpanel"}},t._l(t.orders,function(e,a){return r("order-item",{key:e.id,attrs:{index:a,"start-index":t.startIndex,order:e,dva_id:t.dva_id,"is-repayment-valid":t.isRepaymentValid(e),"pay-summary":t.calcPaymentSummary(e),"repayment-level":t.getRepaymentLevel(e),mode:t.mode},on:{done:function(e){t.fetchList(t.list)},updateReminderList:t.updateReminder,display:t.displayDetails}})})),t._v(" "),"normal-list"!=t.mode?r("div",{staticClass:"w-100 my-5 mx-0 hr"}):t._e()]):r("div",{staticClass:"tab-content mt-1 attendance-body"},[t._m(0)]),t._v(" "),t.show&&"sms"===t.mode?r("div",{staticClass:"mt-1 attendance-body"},[r("div",{staticClass:"mb-5 px-0 row align-items-center"},[r("div",{staticClass:"clearfix d-flex justify-content-end w-100"},[r("button",{staticClass:"btn bg-default",attrs:{disabled:t.$isProcessing},on:{click:t.processSelected}},[t._v("\n                        Send Reminder(s) "),r("i",{staticClass:"far fa-paper-plane ml-1"})])])])]):t._e(),t._v(" "),r("div",{staticClass:"modal fade",attrs:{id:"purchase_order"}},[r("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[r("div",{staticClass:"modal-content"},[t._m(1),t._v(" "),t.showModalContent?r("div",{staticClass:"modal-body"},[r("div",{staticClass:"table-responsive"},[r("table",{staticClass:"table table-bordered table-striped"},[r("tbody",[r("tr",[r("th",[t._v("Order ID")]),t._v(" "),r("td",[t._v(t._s(t.currentOrder.id))])]),t._v(" "),r("tr",[r("th",[t._v("Order date")]),t._v(" "),r("td",[t._v(t._s(t.currentOrder.order_date))])]),t._v(" "),r("tr",[r("th",[t._v("Product")]),t._v(" "),r("td",[t._v(t._s(t.currentOrder.store_product.product_name))])]),t._v(" "),r("tr",[r("th",[t._v("Repayment")]),t._v(" "),r("td",[t._v(t._s(t.$formatCurrency(t.currentOrder.repayment_amount)))])]),t._v(" "),r("tr",[r("th",[t._v("Down Payment")]),t._v(" "),r("td",[t._v(t._s(t.$formatCurrency(t.currentOrder.down_payment)))])]),t._v(" "),r("tr",[r("th",[t._v("Discount (%)")]),t._v(" "),r("td",[t._v(t._s(t._f("capitalize")(t.getDiscount(t.currentOrder))))])]),t._v(" "),r("tr",[r("th",[t._v("Sale Type")]),t._v(" "),r("td",[t._v(t._s(t._f("capitalize")(t.currentOrder.sales_type.name)))])]),t._v(" "),r("tr",[r("th",[t._v("Total amount to Pay")]),t._v(" "),r("td",[t._v(t._s(t.$formatCurrency(t.currentOrder.product_price)))])]),t._v(" "),r("tr",[r("th",[t._v("Processed by")]),t._v(" "),r("td",[t._v(t._s(t.currentOrder.floor_agent?t.currentOrder.floor_agent.full_name:null))])])])])])]):t._e(),t._v(" "),t._m(2)])])]),t._v(" "),r("div",{staticClass:"modal fade",attrs:{id:"customer_info"}},[r("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[r("div",{staticClass:"modal-content"},[t._m(3),t._v(" "),t.showModalContent?r("div",{staticClass:"modal-body"},[r("div",{staticClass:"table-responsive"},[r("table",{staticClass:"table table-bordered table-striped"},[r("tbody",[r("tr",[r("th",[t._v("Customer ID")]),t._v(" "),r("td",[t._v(t._s(t.currentOrder.customer.id))])]),t._v(" "),r("tr",[r("th",[t._v("Full Name")]),t._v(" "),r("td",[t._v(t._s(t.$getCustomerFullName(t.currentOrder.customer)))])]),t._v(" "),r("tr",[r("th",[t._v("Address")]),t._v(" "),r("td",[t._v(t._s(t.$getCustomerAddress(t.currentOrder.customer)))])]),t._v(" "),r("tr",[r("th",[t._v("Phone")]),t._v(" "),r("td",[t._v(t._s(t.currentOrder.customer.telephone))])]),t._v(" "),r("tr",[r("th",[t._v("Branch")]),t._v(" "),r("td",[t._v(t._s(t.currentOrder.customer.branch.name))])]),t._v(" "),r("tr",[r("th",[t._v("Category")]),t._v(" "),r("td",[t._v(t._s(t.currentOrder.customer.employment_status))])]),t._v(" "),r("tr",[r("th",[t._v("Work guarantor name")]),t._v(" "),r("td",[t._v(t._s(t.currentOrder.customer.work_guarantor_first_name+" "+t.currentOrder.customer.work_guarantor_last_name+" - "+t.currentOrder.customer.work_guarantor_relationship)+"\n                                    ")])]),t._v(" "),r("tr",[r("th",[t._v("Work guarantor phone")]),t._v(" "),r("td",[t._v(t._s(t.currentOrder.customer.work_guarantor_telno))])]),t._v(" "),r("tr",[r("th",[t._v("Personal guarantor name")]),t._v(" "),r("td",[t._v(t._s(t.currentOrder.customer.personal_guarantor_first_name+" "+t.currentOrder.customer.personal_guarantor_last_name+" - "+t.currentOrder.customer.personal_guarantor_relationship)+"\n                                    ")])]),t._v(" "),r("tr",[r("th",[t._v("Personal guarantor phone")]),t._v(" "),r("td",[t._v(t._s(t.currentOrder.customer.personal_guarantor_telno))])]),t._v(" "),r("tr",[r("th",[t._v("Verified by")]),t._v(" "),r("td",[r("router-link",{staticClass:"text-link",attrs:{target:"_blank",to:"/dva/verification?id="+t.currentOrder.customer.id}},[t._v("\n                                            click here to see verifications status\n                                        ")])],1)])])])])]):t._e(),t._v(" "),t._m(4)])])]),t._v(" "),r("div",{staticClass:"modal fade repayment",attrs:{id:"repayment"}},[r("div",{staticClass:"modal-dialog modal-xl",attrs:{role:"document"}},[t.showModalContent?r("div",{staticClass:"modal-content"},[r("div",{staticClass:"modal-header py-2"},[r("h6",{staticClass:"modal-title py-1"},[t._v("\n                            Repayment Plan/Summary - "+t._s(t._f("capitalize")(t.currentOrder.customer.employment_status))+"\n                        ")]),t._v(" "),t._m(5)]),t._v(" "),r("div",{staticClass:"modal-body"},[r("div",{staticClass:"table-responsive"},[r("h5",{staticClass:"mt-3 mb-0"},[t._v("Amortization Schedule")]),t._v(" "),r("table",{staticClass:"table table-bordered"},[r("tbody",{staticClass:"text-center"},[r("tr",[r("th",[t._v("Repayment")]),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),t.isCurrentOrderInformal?r("td",[t._v("7"),r("sup",[t._v("th")])]):t._e(),t._v(" "),t.isCurrentOrderInformal?r("td",[t._v("8"),r("sup",[t._v("th")])]):t._e(),t._v(" "),t.isCurrentOrderInformal?r("td",[t._v("9"),r("sup",[t._v("th")])]):t._e(),t._v(" "),t.isCurrentOrderInformal?r("td",[t._v("10"),r("sup",[t._v("th")])]):t._e(),t._v(" "),t.isCurrentOrderInformal?r("td",[t._v("11"),r("sup",[t._v("th")])]):t._e(),t._v(" "),t.isCurrentOrderInformal?r("td",[t._v("12"),r("sup",[t._v("th")])]):t._e()]),t._v(" "),r("tr",{staticClass:"table-separator"},[r("th",[t._v("Due Date")]),t._v(" "),t._l(t.getRepayment(t.currentOrder),function(e){return r("td",[t._v(t._s(e))])})],2),t._v(" "),r("tr",[r("th",[t._v("Actual Pay Day")]),t._v(" "),t._l(t.getRepayment(t.currentOrder,"_date"),function(e){return r("td",[t._v(t._s(e))])})],2),t._v(" "),r("tr",{staticClass:"table-separator"},[r("th",[t._v("Status")]),t._v(" "),t._l(t.getPaymentStatusClasses(t.currentOrder),function(t){return r("td",{class:t.class},[r("i",{staticClass:"fas",class:t.icon})])})],2),t._v(" "),r("tr",{staticClass:"table-separator"},[r("th",[t._v("Repayment Amount")]),t._v(" "),t._l(t.getRepayment(t.currentOrder,"repayments"),function(e){return r("td",[t._v("\n                                        "+t._s(t.$formatCurrency(e))+"\n                                    ")])})],2),t._v(" "),r("tr",[r("th",[t._v("Actual Amount Paid")]),t._v(" "),t._l(t.getRepayment(t.currentOrder,"_pay"),function(e){return r("td",[t._v("\n                                        "+t._s(t.$formatCurrency(e))+"\n                                    ")])})],2),t._v(" "),r("tr",{staticClass:"table-separator"},[r("th",[t._v("Payment Method")]),t._v(" "),t._l(t.getRepayment(t.currentOrder,"_payment_method"),function(e){return r("td",{staticClass:"text-capitalize"},[t._v("\n                                        "+t._s(t.convertPaymentMethodOrBankToName(e,"payment_methods"))+"\n                                    ")])})],2),t._v(" "),r("tr",[r("th",[t._v("Bank")]),t._v(" "),t._l(t.getRepayment(t.currentOrder,"_payment_bank"),function(e){return r("td",{staticClass:"text-capitalize"},[t._v("\n                                        "+t._s(t.convertPaymentMethodOrBankToName(e,"banks"))+"\n                                    ")])})],2)])]),t._v(" "),r("h5",{staticClass:"mt-5 mb-0"},[t._v("Payment Summary")]),t._v(" "),r("table",{staticClass:"table table-bordered"},[r("tbody",{staticClass:"text-center"},[r("tr",{staticClass:"table-separator"},[r("td",{staticClass:"text-left"},[t._v("Discount Detail (%)")]),t._v(" "),r("th",[t._v("\n                                        "+t._s(t._f("capitalize")(t.currentOrder.discount.name))+"\n                                        -\n                                        ("+t._s(t.currentOrder.discount.percentage_discount)+")\n                                    ")]),t._v(" "),r("td",[t._v("Total Before Discount")]),t._v(" "),r("th",[t._v(t._s(t.$formatCurrency(t.currentOrder.product_price)))]),t._v(" "),r("td",[t._v("Total Paid")]),t._v(" "),r("th",[t._v(t._s(t.paymentSummary.amountPaid))])]),t._v(" "),r("tr",[r("td",{staticClass:"text-left"},[t._v("Discount Amount")]),t._v(" "),r("th",[t._v(t._s(t.paymentSummary.discountAmount))]),t._v(" "),r("td",[t._v("Total After Discount")]),t._v(" "),r("th",[t._v(t._s(t.paymentSummary.discountedTotal))]),t._v(" "),r("td",[t._v("Total Debt")]),t._v(" "),r("th",[t._v(t._s(t.paymentSummary.outstandingDebt))])]),t._v(" "),r("tr",[r("td",{staticClass:"text-left"},[t._v("Down Payment")]),t._v(" "),r("th",[t._v(t._s(t.$formatCurrency(t.currentOrder.down_payment)))]),t._v(" "),r("td",[t._v("Total Plus Default Fee")]),t._v(" "),r("th",[t._v(t._s(t.paymentSummary.totalPlusDefault))]),t._v(" "),r("td",[t._v("Default Fee")]),t._v(" "),r("th",[t._v(t._s(t.paymentSummary.defaultFee))])])])])])]),t._v(" "),t._m(12)]):t._e()])]),t._v(" "),r("div",{staticClass:"modal fade repayment",attrs:{id:"reminder_history"}},[r("div",{staticClass:"modal-dialog modal-lg",attrs:{role:"document"}},[r("div",{staticClass:"modal-content"},[t._m(13),t._v(" "),t.showModalContent?r("div",{staticClass:"modal-body"},[r("div",{staticClass:"table-responsive"},[t.currentOrder.reminders.length?r("table",{staticClass:"table table-bordered table-striped"},[t._m(14),t._v(" "),r("tbody",t._l(t.currentOrder.reminders,function(e,a){return r("tr",[r("th",[t._v(t._s(a+1))]),t._v(" "),r("td",[t._v(t._s(t.$dateTimeConvert(e.date)))]),t._v(" "),r("td",[t._v(t._s(e.type))]),t._v(" "),r("td",{domProps:{innerHTML:t._s(t.renderMessage(e))}}),t._v(" "),r("td",[t._v(t._s(e.user.full_name))])])}))]):r("div",{staticClass:"my-4 text-center"},[t._v("\n                                no reminders have been sent yet!\n                            ")])])]):t._e(),t._v(" "),t._m(15)])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"tab-pane active text-center"},[e("div",{staticClass:"mb-3 row attendance-item"},[e("div",{staticClass:"col d-flex light-heading align-items-center justify-content-center"},[this._v("\n                        No records found!\n                    ")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"modal-header py-2"},[e("h6",{staticClass:"modal-title py-1"},[this._v("Purchase Order Summary")]),this._v(" "),e("a",{staticClass:"close py-1",attrs:{"aria-label":"Close","data-dismiss":"modal"}},[e("span",{staticClass:"modal-close text-danger",attrs:{"aria-hidden":"true"}},[e("i",{staticClass:"fas fa-times"})])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"modal-footer"},[e("a",{staticClass:"text-link mt-3 w-100",staticStyle:{"text-align":"right"},attrs:{"data-dismiss":"modal",href:"javascript:"}},[this._v("close dialogue")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"modal-header py-2"},[e("h6",{staticClass:"modal-title py-1"},[this._v("Customer Info. Summary")]),this._v(" "),e("a",{staticClass:"close py-1",attrs:{"aria-label":"Close","data-dismiss":"modal"}},[e("span",{staticClass:"modal-close text-danger",attrs:{"aria-hidden":"true"}},[e("i",{staticClass:"fas fa-times"})])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"modal-footer"},[e("a",{staticClass:"text-link mt-3 w-100 text-right",attrs:{"data-dismiss":"modal",href:"#"}},[this._v("\n                            close dialogue\n                        ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"close py-1",attrs:{"aria-label":"Close","data-dismiss":"modal"}},[e("span",{staticClass:"modal-close text-danger",attrs:{"aria-hidden":"true"}},[e("i",{staticClass:"fas fa-times"})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",[this._v("1"),e("sup",[this._v("st")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",[this._v("2"),e("sup",[this._v("nd")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",[this._v("3"),e("sup",[this._v("rd")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",[this._v("4"),e("sup",[this._v("th")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",[this._v("5"),e("sup",[this._v("th")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",[this._v("6"),e("sup",[this._v("th")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"modal-footer"},[e("a",{staticClass:"text-link mt-3 w-100",staticStyle:{"text-align":"right"},attrs:{"data-dismiss":"modal",href:"javascript:"}},[this._v("close dialogue")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"modal-header py-2"},[e("h6",{staticClass:"modal-title py-1"},[this._v("Reminder History")]),this._v(" "),e("a",{staticClass:"close py-1",attrs:{"aria-label":"Close","data-dismiss":"modal"}},[e("span",{staticClass:"modal-close text-danger",attrs:{"aria-hidden":"true"}},[e("i",{staticClass:"fas fa-times"})])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("thead",[r("tr",[r("th",[t._v("S/N")]),t._v(" "),r("th",[t._v("Date")]),t._v(" "),r("th",[t._v("Type")]),t._v(" "),r("th",[t._v("SMS/Feedback")]),t._v(" "),r("th",[t._v("sender")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"modal-footer"},[e("a",{staticClass:"text-link mt-3 w-100",staticStyle:{"text-align":"right"},attrs:{"data-dismiss":"modal",href:"javascript:"}},[this._v("close dialogue")])])}]}},TZKk:function(t,e,r){var a=r("VU/8")(r("7elN"),r("WUtB"),!1,null,null,null);t.exports=a.exports},WUtB:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"mb-3 row attendance-item"},[r("div",{staticClass:"col-12 col-xs-2 col-md col-lg d-flex align-items-center",staticStyle:{"max-width":"120px"}},["normal-list"===t.mode?r("span"):t.reminder.canBeSelected&&"call"===t.mode?r("span",{staticClass:"user mx-auto waiting-reminder",on:{click:t.logReminder}},[r("i",{staticClass:"fas fa-hourglass-start"})]):t.reminder.canBeSelected&&"sms"===t.mode?r("div",{staticClass:"d-flex align-items-center"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.selected,expression:"selected"}],staticClass:"form-check-input my-0 mx-4 float-left position-relative ",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.selected)?t._i(t.selected,null)>-1:t.selected},on:{click:function(e){t.toggleSelect(!t.selected)},change:function(e){var r=t.selected,a=e.target,s=!!a.checked;if(Array.isArray(r)){var n=t._i(r,null);a.checked?n<0&&(t.selected=r.concat([null])):n>-1&&(t.selected=r.slice(0,n).concat(r.slice(n+1)))}else t.selected=s}}})]):r("span",{staticClass:"user mx-auto sent-reminder"},[r("i",{staticClass:"fas fa-check"})]),t._v(" "),r("span",{staticClass:"user mx-auto"},[t._v(t._s(t.startIndex+t.index))])]),t._v(" "),r("div",{staticClass:"col-12 col-xs-2 col-md col-lg user-name d-flex align-items-center justify-content-center"},[t._v("\n        "+t._s(t.$vnode.key)+"\n    ")]),t._v(" "),r("div",{staticClass:"col-12 col-xs-2 col-md col-lg d-flex align-items-center justify-content-center",attrs:{"data-hoverable":"true"},on:{click:function(e){t.$emit("display",t.order,"purchase_order")}}},[t._v("\n        "+t._s(t.order.order_date)+"\n    ")]),t._v(" "),r("div",{staticClass:"col-12 col-xs-3 col-md col-lg d-flex align-items-center justify-content-center",attrs:{"data-hoverable":"true"},on:{click:function(e){t.$emit("display",t.order,"customer_info")}}},[t._v("\n        ID: "+t._s(t.order.customer.id)+" - "+t._s(t._f("capitalize")(t.order.customer.employment_status))+"\n    ")]),t._v(" "),r("div",{staticClass:"col-12 col-xs-2 col-md col-lg d-flex align-items-center justify-content-center",attrs:{"data-hoverable":"true"},on:{click:function(e){t.$emit("display",t.order,"repayment")}}},[t._v("\n        "+t._s(t.getFinancialStatus)+"\n    ")]),t._v(" "),r("div",{staticClass:"col-12 col-xs-2 col-md col-lg d-flex align-items-center justify-content-center",attrs:{"data-hoverable":"true"},on:{click:function(e){t.$emit("display",t.order,"reminder_history")}}},[t._v("\n        "+t._s(t.order.reminders.length)+" reminder(s) sent\n    ")]),t._v(" "),"call"===t.mode?r("div",{staticClass:"col-12 col-xs-2 col-md col-lg d-flex align-items-center"},[r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.reminder.feedback,expression:"reminder.feedback"}],staticClass:"form-control",attrs:{rows:"1",disabled:!t.reminder.canBeSelected},domProps:{value:t.reminder.feedback},on:{input:function(e){e.target.composing||t.$set(t.reminder,"feedback",e.target.value)}}})]):t._e(),t._v(" "),"call"===t.mode?r("div",{staticClass:"col-12 col-xs-2 col-md col-lg d-flex align-items-center"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.promiseCall.date,expression:"promiseCall.date"}],staticClass:"form-control",attrs:{type:"date",disabled:!t.reminder.canBeSelected},domProps:{value:t.promiseCall.date},on:{input:function(e){e.target.composing||t.$set(t.promiseCall,"date",e.target.value)}}})]):t._e()])},staticRenderFns:[]}},XPj8:function(t,e,r){var a=r("VU/8")(r("aSpy"),r("QRu0"),!1,function(t){r("c33b")},"data-v-754e8852",null);t.exports=a.exports},aSpy:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=l(r("I3G/")),s=l(r("K23+")),n=r("m2tk"),i=r("p/p5"),o=l(r("TZKk"));function l(t){return t&&t.__esModule?t:{default:t}}e.default={components:{OrderItem:o.default},props:{list:{default:null},mode:null,preLoadedOrder:null,startIndex:null},watch:{list:function(t){this.fetchList(t)},preLoadedOrder:function(t){this.prepareForm(t)}},data:function(){return{orders:{},show:!1,banks:null,reminder:[],currentOrder:{},paymentSummary:null,payment_methods:null,showModalContent:!1,isCurrentOrderInformal:null}},methods:{prepareForm:function(t){var e=this;this.show=!1,this.showModalContent=!1,this.banks=t.banks,this.dva_id=t.dva_id,this.payment_methods=t.payment_methods,this.orders=t.orders.filter(function(r){var a=e.getCountAndRepaymentData(r).repaymentData,s=e.amortizationPlan(r),n=s.count,i=s.interval;return(!!e.$store.getters.auth("DVALead")||r.customer.branch.id===t.branch)&&function(){if([8,1].includes(e.list)||"normal-list"===e.mode)return!0;for(var t=void 0,s=void 0,o=[],l=new Date,d=1===l.getDay()?3:1,c=1;c<n+1;c++){var u=e.$getColumn(c);if(!a[u+"_pay"]){t=e.generateDates({interval:i,startDate:r.order_date,count:n})[c-1];break}}switch(e.list){case 2:s=7;break;case 3:s=3;break;case 4:s=0;break;case 5:s=1;break;case 6:s=5;break;case 7:s=31}if("call"===e.mode)for(var m=0;m<d;m++)o.push(e.$getDate(l.addDays(-(m+s))));if("sms"===e.mode)for(var v=0;v<d;v++)o.push(e.$getDate(l.addDays(v+s)));return o.includes(t)}()}),this.orders.length&&(this.show=!0),this.$LIPS(!1)},isOrderFormal:function(t){return null===t.repayment_informal},generateDates:function(t){for(var e=t.startDate,r=t.interval,a=t.count,s=[],n=0;n<a;n++){var i=new Date(e).addDays((n+1)*r),o=this.$getDate(i);s.push(o)}return s},renderMessage:function(t){return t.sms?t.sms.message.replace(/%0a/g,"</br>"):t.feedback},fetchList:function(t){var e,r=this;this.$LIPS(!0),(0,i.get)((e={query:{list:t}},"/api/reminder/create?list="+e.query.list)).then(function(e){var a=e.data;if(8===t){var s=[];a.orders.forEach(function(t){return s.push(t.order)}),a.orders=s}r.prepareForm(a)})},isPaymentDue:function(t){return new Date>new Date(t)},getDiscount:function(t){var e=t.discount;return e.name+" ("+e.percentage_discount+")"},isRepaymentValid:function(t){return!(!t.repayment&&!t.repayment_formal&&!t.repayment_informal)},displayDetails:function(t,e){return this.paymentSummary=this.calcPaymentSummary(t),a.default.set(this.$data,"currentOrder",t),this.isCurrentOrderInformal=!["formal","salaried"].includes(t.customer.employment_status.toLowerCase()),this.showModalContent=!0,$("#"+e).modal("toggle")},getCountAndRepaymentData:function(t){var e={count:this.amortizationPlan(t).count};return null!=t.repayment_formal&&(e.repaymentData=t.repayment_formal),null!=t.repayment_informal&&(e.repaymentData=t.repayment_informal),e},calcPaymentSummary:function(t){var e=this,r=[],a=function(t){return e.$formatCurrency(t)},s=parseInt(t.down_payment),n=this.amortizationPlan(t),i=n.count,o=n.interval,l=this.getCountAndRepaymentData(t).repaymentData;this.generateDates({startDate:t.order_date,interval:o,count:i}).forEach(function(t,a){return e.isPaymentDue(e.$getDate(new Date(t).addDays(5)))&&r.push({dueDate:t,actualPayDate:l[e.$getColumn(a)+"_date"]})});for(var d=1;d<i+1;d++)s+=l[this.$getColumn(d)+"_pay"];var c=t.discount.percentage_discount/100*t.product_price,u=500*r.length,m=t.product_price-c;return{amountPaid:a(s),discountAmount:a(c),outstandingDebt:a(parseInt(t.product_price)-s),discountedTotal:a(m),defaultFee:a(u),totalPlusDefault:a(m+u)}},getRepayment:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(!this.isRepaymentValid(t))return null;var r=[],a=this.getCountAndRepaymentData(t).repaymentData,s=this.amortizationPlan(t),n=s.interval,i=s.count;if(null===e)return this.generateDates({startDate:t.order_date,interval:n,count:i});if("repayments"===e)return new Array(i).fill(this.$roundDownAmt(t.repayment_amount),0,i);for(var o=1;o<i+1;o++)r.push(a[this.$getColumn(o)+e]);return r},getPaymentStatusClasses:function(t){if(!this.isRepaymentValid(t))return null;for(var e=[],r=this.getCountAndRepaymentData(t).repaymentData,a=this.amortizationPlan(t).count,s=this.getRepayment(t),n=1;n<a+1;n++){var i={class:null,icon:null},o=this.$getColumn(n),l=this.isPaymentDue(s[n-1]),d=parseInt(r[o+"_pay"]);d?(i.class="paid",i.icon="fa-check"):l&&!d?(i.class="missed",i.icon="fa-times"):l||(i.class="pending",i.icon="fa-hourglass-start"),e.push(i)}return e},getRepaymentLevel:function(t){if(!this.isRepaymentValid(t))return 0;for(var e=0,r=this.amortizationPlan(t).count,a=this.getCountAndRepaymentData(t).repaymentData,s=1;s<r+1;s++)a[this.$getColumn(s)+"_pay"]>0&&e++;return e+"/"+r},convertPaymentMethodOrBankToName:function(t,e){return t?this.$data[e].find(function(e){return e.id===t}).name:null},updateReminder:function(t,e){if(e)this.reminder.push(t);else{var r=void 0;this.reminder.forEach(function(e,a){return e.order_id===t.order_id&&(r=a)}),this.reminder.splice(r,1)}},processSelected:function(){var t=this;if(this.reminder.length){this.$LIPS(!0);var e=this.reminder.map(function(e){var r=JSON.parse(JSON.stringify(e));return r.order=t.orders.find(function(t){return t.id===e.order_id}),r.message=t.generateCustomMessage(r.order),r});this.sendSMSReminders(e)}else this.$displayErrorMessage("please select at least one!")},sendSMSReminders:function(t){var e=this,r=[];t.forEach(function(a,s){var i=new n.Message(a.message,a.contacts,!1,a.dva_id);i.send(function(a){200===a.status&&(delete i.logToDB,r.push(i)),s+1===t.length&&e.logSentMessages(r,t)})})},logSentMessages:function(t,e){var r=this;t?(0,i.post)("/api/message",{messages:t,bulk:!0}).then(function(t){var a=t.data,s=a.sentAndLogged,n=a.ids;s?r.logSentReminders(e,n):r.$displayErrorMessage("Error Logging sent sms details!")}):this.$displayErrorMessage("Error sending messages!")},logSentReminders:function(t,e){var r=this;e.reverse();var a=JSON.parse(JSON.stringify(t));a.forEach(function(t,r){t.sms_id=e[r],delete t.message,delete t.order,delete t.contacts,delete t.canBeSelected}),e.length>0?(0,i.post)("/api/reminder",{reminders:a}).then(function(t){t.data.saved?(s.default.setSuccess("Reminders have been sent successfully!",5e4),r.fetchList(r.list)):r.$displayErrorMessage("Error sending reminders!"),r.$scrollToTop()}):this.$displayErrorMessage("Error logging sent messages!")},generateCustomMessage:function(t){var e=this,r=t.customer,a=t.store_product,s=t.order_date,n=t.repayment_amount,i=a.product_name,o=r.first_name,l=r.last_name,d=void 0,c=this.isOrderFormal(t),u={};c&&(u={startDate:s,interval:28,count:6}),c||(u={startDate:s,interval:14,count:12});var m=this.generateDates(u),v=this.getRepaymentLevel(t).split("/")[0];return 1===this.list?(d="Hello "+o+" "+l+", thanks for patronizing us. The following is the breakdown of the repayment plan for the purchase of "+i+":%0a",m.length>0&&m.forEach(function(t,r){return d+=e.$getColumn(r+1)+": "+t+" => "+e.$formatCurrency(e.$roundDownAmt(n))+"%0a"})):d="Hello "+o+" "+l+", This is to remind you that your "+this.$getColumn(parseInt(v)+1)+" repayment of "+this.$formatCurrency(this.$roundDownAmt(n))+" for "+i+" will be due on "+m[v]+". we will be expecting you.",d+"Please remember to pay on time to avoid late fees and other penalties.%0aThank you."},amortizationPlan:function(t){var e=void 0,r=void 0;return t.order_date<="2019-07-07"?(null!=t.repayment_formal&&(e=28,r=6),null!=t.repayment_informal&&(e=14,r=12),{interval:e,count:r}):(t.order_date>"2019-07-07"&&this.isBankDraftAvailable(t)&&this.isOrderFormal?(e=28,r=6):(e=14,r=12),{interval:e,count:r})},isBankDraftAvailable:function(){return!1}},mounted:function(){var t=this;"normal-list"!=this.mode?this.fetchList(this.list):this.prepareForm(this.preLoadedOrder),$(document).on("hidden.bs.modal",".modal",function(){t.currentOrder=null,t.showModalContent=!1})}}},c33b:function(t,e,r){var a=r("OKUn");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);r("rjj0")("543d0bab",a,!0,{})},dBli:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a,s=r("XPj8"),n=(a=s)&&a.__esModule?a:{default:a},i=r("nv24");function o(t){if(Array.isArray(t)){for(var e=0,r=Array(t.length);e<t.length;e++)r[e]=t[e];return r}return Array.from(t)}e.default={components:{Order:n.default},data:function(){return{list:this.mode("sms")?1:4,doSelectAll:!1}},methods:{selectAll:function(){this.doSelectAll=!this.doSelectAll,i.EventBus.$emit("selectOrderItem",this.doSelectAll)},setList:function(t){this.list=t+1+(this.mode("call")&&3)},mode:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.$route.meta.mode;return t?e===t:e}},computed:{tabs:function(){var t=["1<sup>st</sup>","2<sup>nd</sup>","3<sup>rd</sup>"];return this.mode("call")&&(t=[].concat(o(t),["Guarantor's","Promise"])),t},headings:function(){var t=["Order Number","Order Summary","Customer Info Summary","Repayment Summary","Reminder History"];return this.mode("call")&&(t=[].concat(o(t),["Feedback","Promise Date"])),t}}}},iNcs:function(t,e,r){var a=r("VU/8")(r("dBli"),r("kReU"),!1,function(t){r("zTXI")},"data-v-6067f3ca",null);t.exports=a.exports},kReU:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("transition",{attrs:{name:"fade"}},[r("div",{attrs:{id:"reminder"}},[r("div",{staticClass:"mt-5 mb-3 attendance-head"},[r("ul",{staticClass:"nav nav-tabs justify-content-center p-0",attrs:{role:"tablist"}},t._l(t.tabs,function(e,a){return r("li",{staticClass:"col p-0 nav-item mb-0"},[r("a",{staticClass:"nav-link",class:0===a&&"active",attrs:{"aria-selected":"true","data-toggle":"tab",href:"#reminder-panel",role:"tab"},domProps:{innerHTML:t._s(e+" "+t.mode())},on:{click:function(e){t.setList(a)}}})])}))]),t._v(" "),r("div",{staticClass:"mt-5 mb-3 attendance-head"},[r("div",{staticClass:"row px-4 pt-3 pb-4 text-center"},[t.mode("sms")?r("div",{staticClass:"col p-0 text-link",staticStyle:{"max-width":"120px"},on:{click:t.selectAll}},[t._v("\n                    Click to "+t._s(t.doSelectAll?"De-select":"Select")+" all\n                ")]):r("div",{staticClass:"col light-heading"},[t._v("Action")]),t._v(" "),t._l(t.headings,function(e){return r("div",{staticClass:"col light-heading"},[t._v(t._s(e))])})],2)]),t._v(" "),r("order",{attrs:{list:t.list,mode:t.mode()}})],1)])},staticRenderFns:[]}},m2tk:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Message=void 0;var a=function(){function t(t,e){for(var r=0;r<e.length;r++){var a=e[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(e,r,a){return r&&t(e.prototype,r),a&&t(e,a),e}}(),s=r("p/p5");e.Message=function(){function t(e,r){var a=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.user_id=s,this.message=e,this.logToDB=a,this.contacts=r.split(",").filter(function(t){return/\S/.test(t)}).map(function(t){return"234"+t.trim().substr(1)}).join(","),this.setPages(),this.setContactCount()}return a(t,[{key:"setContactCount",value:function(){this.contact_count=this.contacts.split(",").length}},{key:"setPages",value:function(){this.pages=Math.ceil(this.message.length/160)}},{key:"send",value:function(t){var e=this;(0,s.get)("/api/message/create?to="+this.contacts+"&message="+this.message).then(function(r){return 200===r.status&&e.logToDB&&(delete e.logToDB,(0,s.post)("/api/message",e)),!!t&&t(r)}).catch(function(e){return!!t&&t(e)})}}]),t}()},nv24:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.EventBus=void 0;var a,s=r("I3G/"),n=(a=s)&&a.__esModule?a:{default:a};e.EventBus=new n.default},rjj0:function(t,e,r){var a="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!a)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var s=r("tTVk"),n={},i=a&&(document.head||document.getElementsByTagName("head")[0]),o=null,l=0,d=!1,c=function(){},u=null,m="data-vue-ssr-id",v="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function _(t){for(var e=0;e<t.length;e++){var r=t[e],a=n[r.id];if(a){a.refs++;for(var s=0;s<a.parts.length;s++)a.parts[s](r.parts[s]);for(;s<r.parts.length;s++)a.parts.push(f(r.parts[s]));a.parts.length>r.parts.length&&(a.parts.length=r.parts.length)}else{var i=[];for(s=0;s<r.parts.length;s++)i.push(f(r.parts[s]));n[r.id]={id:r.id,refs:1,parts:i}}}}function h(){var t=document.createElement("style");return t.type="text/css",i.appendChild(t),t}function f(t){var e,r,a=document.querySelector("style["+m+'~="'+t.id+'"]');if(a){if(d)return c;a.parentNode.removeChild(a)}if(v){var s=l++;a=o||(o=h()),e=g.bind(null,a,s,!1),r=g.bind(null,a,s,!0)}else a=h(),e=function(t,e){var r=e.css,a=e.media,s=e.sourceMap;a&&t.setAttribute("media",a);u.ssrId&&t.setAttribute(m,e.id);s&&(r+="\n/*# sourceURL="+s.sources[0]+" */",r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */");if(t.styleSheet)t.styleSheet.cssText=r;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(r))}}.bind(null,a),r=function(){a.parentNode.removeChild(a)};return e(t),function(a){if(a){if(a.css===t.css&&a.media===t.media&&a.sourceMap===t.sourceMap)return;e(t=a)}else r()}}t.exports=function(t,e,r,a){d=r,u=a||{};var i=s(t,e);return _(i),function(e){for(var r=[],a=0;a<i.length;a++){var o=i[a];(l=n[o.id]).refs--,r.push(l)}e?_(i=s(t,e)):i=[];for(a=0;a<r.length;a++){var l;if(0===(l=r[a]).refs){for(var d=0;d<l.parts.length;d++)l.parts[d]();delete n[l.id]}}}};var p,y=(p=[],function(t,e){return p[t]=e,p.filter(Boolean).join("\n")});function g(t,e,r,a){var s=r?"":a.css;if(t.styleSheet)t.styleSheet.cssText=y(e,s);else{var n=document.createTextNode(s),i=t.childNodes;i[e]&&t.removeChild(i[e]),i.length?t.insertBefore(n,i[e]):t.appendChild(n)}}},tTVk:function(t,e){t.exports=function(t,e){for(var r=[],a={},s=0;s<e.length;s++){var n=e[s],i=n[0],o={id:t+":"+s,css:n[1],media:n[2],sourceMap:n[3]};a[i]?a[i].parts.push(o):r.push(a[i]={id:i,parts:[o]})}return r}},zTXI:function(t,e,r){var a=r("BXYC");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);r("rjj0")("678c16b4",a,!0,{})}});
>>>>>>> e8ef8fcaf83759c3b485554f474e51526aa63b61
