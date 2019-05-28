webpackJsonp([33],{

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"babel-preset-env\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"babel-plugin-syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/views/DVA/reminder/callReminder.vue":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _vue = __webpack_require__("./node_modules/vue/dist/vue.common.js");

var _vue2 = _interopRequireDefault(_vue);

var _flash = __webpack_require__("./resources/assets/js/helpers/flash.js");

var _flash2 = _interopRequireDefault(_flash);

var _api = __webpack_require__("./resources/assets/js/helpers/api.js");

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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var url = function url(to) {
    return "/api/reminder/create?list=" + to.query.list;
};

exports.default = {
    beforeRouteEnter: function beforeRouteEnter(to, from, next) {
        (0, _api.get)(url({ query: { list: 4 } })).then(function (_ref) {
            var data = _ref.data;

            next(function (vm) {
                return vm.prepareForm(data);
            });
        });
    },
    beforeRouteUpdate: function beforeRouteUpdate(to, from, next) {
        var _this = this;

        this.show = false;
        this.showModalContent = false;
        (0, _api.get)(url({ query: { list: 4 } })).then(function (_ref2) {
            var data = _ref2.data;

            _this.prepareForm(data);
            next();
        });
    },
    data: function data() {
        return {
            list: 4,
            orders: {},
            show: false,
            banks: null,
            reminder: null,
            currentOrder: {},
            promiseCalls: null,
            payment_methods: null,
            showModalContent: false,
            isCurrentOrderInformal: null,
            currentOrderRepaymentDates: null
        };
    },


    methods: {
        prepareForm: function prepareForm(res) {
            this.show = false;
            this.showModalContent = false;
            var _ref3 = [res.orders.filter(this.ordersFilter, res.branch), res.payment_methods, res.banks, res.dva_id];
            this.orders = _ref3[0];
            this.payment_methods = _ref3[1];
            this.banks = _ref3[2];
            this.dva_id = _ref3[3];

            this.initializeReminders() && (this.show = true);
        },
        ordersFilter: function ordersFilter(order, index, arr) {

            console.log(order, index, arr, this);

            return true;

            /*let hasMissedPayment = () => {
             }
             let isMyBranch = () => order.customer.branch.id === res.branch;
             return isMyBranch() && hasMissedPayment();*/
            //order => order.customer.branch.id === res.branch
        },
        initializeReminders: function initializeReminders() {
            var _this2 = this;

            this.reminder = [];
            this.promiseCalls = [];
            this.orders.forEach(function (order) {
                _this2.reminder.push({
                    'customer_id': order.customer.id,
                    'order_id': order.id,
                    'repayment_level': _this2.getRepaymentLevel(order),
                    'dva_id': _this2.dva_id,
                    'type': 'call',
                    'date': _this2.getDateString(), //double check this it might be unnecessary
                    'canBeSelected': _this2.isReminderSent(order)
                });
                _this2.promiseCalls.push({
                    order_id: order.id,
                    user_id: _this2.dva_id,
                    customer_id: order.customer.id,
                    date: null
                });
            });
            this.$LIPS(false);
            return true;
        },
        displayErrorMessage: function displayErrorMessage(error) {
            this.$scrollToTop();
            _flash2.default.setError(error, 50000);
            this.$LIPS(false);
        },
        checkIfAlreadySentReminder: function checkIfAlreadySentReminder(index) {
            if (this.reminder.length > 0) {
                return this.reminder[index].canBeSelected;
            }
        },
        isOrderFormal: function isOrderFormal(_ref4) {
            var repayment_informal = _ref4.repayment_informal;

            return repayment_informal === null;
        },
        generateDates: function generateDates(_ref5) {
            var startDate = _ref5.startDate,
                interval = _ref5.interval,
                count = _ref5.count;

            var dates = [];
            for (var i = 0; i < count; i++) {
                var orderDate = new Date(startDate).addDays((i + 1) * interval);
                var dateString = this.getDateString(orderDate);
                dates.push(dateString);
            }
            return dates;
        },
        getDateString: function getDateString() {
            var date = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Date();
            var monthStartsFromZero = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

            return date.getFullYear() + '-' + (date.getMonth() + (monthStartsFromZero && 1)) + '-' + date.getDate();
        },
        isReminderSent: function isReminderSent(order) {
            var _this3 = this;

            var value = true,
                date;
            if (!!order) {
                if (order.reminders.length > 0) {
                    var today = this.getDateString();
                    order.reminders.forEach(function (reminder) {
                        //refactor below by using regx characters to split
                        var reminderDateTimeArr = reminder.date.split(' '); //(2019-03-24 02:00:00) -> ['2019-03-24','02:00:00']
                        var dateArr = reminderDateTimeArr[0].split('-'); //'2019-03-24' -> ['2019','03','24']
                        var timeArr = reminderDateTimeArr[1].split(':'); //'02:00:00' -> ['02','00','00']
                        var arr = [].concat(_toConsumableArray(dateArr), _toConsumableArray(timeArr)) // ['2019','03','24','02','00','00']
                        .map(function (item) {
                            return parseInt(item, 10);
                        }); //[2019,3,24,2,0,0]
                        date = _this3.getDateString(new Date(Date.UTC.apply(Date, _toConsumableArray(arr))), false);
                        date === today && (value = false);
                    });
                }
            }
            return value;
        },
        renderMessage: function renderMessage(reminder) {
            return !!reminder['sms'] ? reminder.sms.message.replace(/%0a/g, '</br>') : 'call feedback: ' + reminder.feedback;
        },
        logReminder: function logReminder(index) {
            var _this4 = this;

            var reminder = this.reminder[index];
            delete reminder.order;
            delete reminder.canBeSelected;
            (0, _api.post)('/api/reminder', { reminders: [reminder] }).then(function (_ref6) {
                var data = _ref6.data;
                return data.saved ? _this4.logPromiseCall(_this4.promiseCalls[index]) : _this4.displayErrorMessage('Error Logging reminders!');
            });
        },
        logPromiseCall: function logPromiseCall(promiseCall) {
            var _this5 = this;

            if (!!promiseCall.date) {
                console.log(promiseCall);
                (0, _api.post)('/api/promise_call', promiseCall).then(function (_ref7) {
                    var data = _ref7.data;
                    return data.saved ? _this5.done("Reminder Logged!, Promise call added!") : _this5.displayErrorMessage('Error Logging promise call!');
                });
            } else this.done("Reminder Logged!");
        },
        done: function done(message) {
            this.initializeReminders() && this.$scrollToTop();
            _flash2.default.setSuccess(message, 5000);
            this.fetchList(this.list);
        },
        fetchList: function fetchList(list) {
            var _this6 = this;

            this.$LIPS(true);
            this.list = list;
            (0, _api.get)(url({ query: { list: list } })).then(function (_ref8) {
                var data = _ref8.data;

                _this6.prepareForm(data);
            });
        },
        isPaymentDue: function isPaymentDue(dueDate) {
            return new Date() > new Date(dueDate);
        },
        getDiscount: function getDiscount(_ref9) {
            var discount = _ref9.discount;

            return discount.name + " (" + discount.percentage_discount + ")";
        },
        isOrderRepaymentValid: function isOrderRepaymentValid(order) {
            return !(!order['repayment'] && !order['repayment_formal'] && !order['repayment_informal']);
        },
        getColumn: function getColumn(i) {
            var column = null;
            switch (i) {
                case 1:
                    column = i + 'st';
                    break;
                case 2:
                    column = i + 'nd';
                    break;
                case 3:
                    column = i + 'rd';
                    break;
                default:
                    column = i + 'th';
                    break;
            }
            return column;
        },
        displayDetails: function displayDetails(order, modal) {
            _vue2.default.set(this.$data, 'currentOrder', order);
            this.isCurrentOrderInformal = !['formal', 'salaried'].includes(order.customer.employment_status.toLowerCase());
            this.showModalContent = true;
            return $("#" + modal).modal('toggle');
        },
        getCountAndRepaymentData: function getCountAndRepaymentData(order) {
            var count = 0,
                repaymentData = null,
                repayment_formal = order.repayment_formal,
                repayment_informal = order.repayment_informal;
            if (order['repayment_formal'] != null) {
                count = 7;
                repaymentData = repayment_formal;
            }
            if (order['repayment_informal'] != null) {
                count = 13;
                repaymentData = repayment_informal;
            }
            return { count: count, repaymentData: repaymentData };
        },
        getPaymentSummary: function getPaymentSummary(order) {
            var amountPaid = parseInt(order.down_payment),
                outstandingDebt = 0,
                _getCountAndRepayment = this.getCountAndRepaymentData(order),
                count = _getCountAndRepayment.count,
                repaymentData = _getCountAndRepayment.repaymentData;

            for (var i = 1; i < count; i++) {
                amountPaid += repaymentData[this.getColumn(i) + '_pay'];
            }outstandingDebt = parseInt(order["product_price"]) - amountPaid;
            var discountAmount = order['discount']['percentage_discount'] / 100 * order["product_price"];
            var discountedTotal = order["product_price"] - discountAmount;
            return { amountPaid: amountPaid, outstandingDebt: outstandingDebt, discountAmount: discountAmount, discountedTotal: discountedTotal };
        },
        getFinancialStatus: function getFinancialStatus(order) {
            if (!this.isOrderRepaymentValid(order)) return 'no repayment detail';
            var values = this.getPaymentSummary(order);
            return 'Paid: ' + this.$format(values.amountPaid) + ' | Debt: ' + this.$format(values.outstandingDebt);
        },
        getRepayment: function getRepayment(order) {
            var clause = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

            if (!this.isOrderRepaymentValid(order)) return null;
            var data = [],
                _getCountAndRepayment2 = this.getCountAndRepaymentData(order),
                count = _getCountAndRepayment2.count,
                repaymentData = _getCountAndRepayment2.repaymentData;
            if (clause === null) {
                data = this.generateDates({
                    startDate: order.order_date,
                    interval: count === 7 ? 28 : 14,
                    count: count - 1
                });
                this.currentOrderRepaymentDates = data;
                return data;
            }
            if (clause === 'repayments') {
                var repayment_amount = order.repayment_amount;

                for (var i = 1; i < count; i++) {
                    data.push(this.isCurrentOrderInformal ? repayment_amount : repayment_amount * 2);
                }return data;
            }
            for (var _i = 1; _i < count; _i++) {
                data.push(repaymentData[this.getColumn(_i) + clause]);
            }return data;
        },
        getPaymentStatusClasses: function getPaymentStatusClasses(order) {
            if (!this.isOrderRepaymentValid(order)) return null;
            var data = [],
                _getCountAndRepayment3 = this.getCountAndRepaymentData(order),
                count = _getCountAndRepayment3.count,
                repaymentData = _getCountAndRepayment3.repaymentData;
            for (var i = 1; i < count; i++) {
                var status = { class: null, icon: null };
                var position = this.getColumn(i);
                var isDue = this.isPaymentDue(repaymentData[position + '_date']);
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
            if (!this.isOrderRepaymentValid(order)) return 0;
            var level = 0,
                _getCountAndRepayment4 = this.getCountAndRepaymentData(order),
                count = _getCountAndRepayment4.count,
                repaymentData = _getCountAndRepayment4.repaymentData;
            for (var i = 1; i < count; i++) {
                if (repaymentData[this.getColumn(i) + '_pay'] > 0) level++;
            }return level + "/" + (count - 1);
        },
        convertPaymentMethodOrBankToName: function convertPaymentMethodOrBankToName(id, type) {
            return !id ? null : this.$data[type === 'bank' ? 'banks' : 'payment_methods'].find(function (obj) {
                return obj.id === id;
            }).name;
        }
    },

    mounted: function mounted() {
        var _this7 = this;

        $(document).on("hidden.bs.modal", '.modal', function () {
            _this7.currentOrder = null;
            _this7.showModalContent = false;
        });

        //this is linked to the function that generates dates
        Date.prototype.addDays = function (days) {
            var date = new Date(this.valueOf());
            date.setDate(date.getDate() + days);
            return date;
        };
    }
};

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-37057f60\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/views/DVA/reminder/callReminder.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.check-box-overlay[data-v-37057f60] {\n    height: 100%;\n    width: 100%;\n    float: left;\n    position: absolute;\n    z-index: 1;\n}\n.table-separator[data-v-37057f60] {\n    border-top: 2px solid #dee1e4;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-37057f60\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/views/DVA/reminder/callReminder.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { attrs: { id: "reminder" } }, [
    _c("div", { staticClass: "mt-5 mb-3 attendance-head" }, [
      _c(
        "ul",
        {
          staticClass: "nav nav-tabs justify-content-center p-0",
          attrs: { role: "tablist" }
        },
        [
          _c("li", { staticClass: "col p-0 nav-item mb-0" }, [
            _c(
              "a",
              {
                staticClass: "nav-link active",
                attrs: {
                  "aria-selected": "true",
                  "data-toggle": "tab",
                  href: "#reminder-panel",
                  role: "tab"
                },
                on: {
                  click: function($event) {
                    _vm.fetchList(4)
                  }
                }
              },
              [_vm._v("1"), _c("sup", [_vm._v("st")]), _vm._v(" Reminder")]
            )
          ]),
          _vm._v(" "),
          _c("li", { staticClass: "col p-0 nav-item mb-0" }, [
            _c(
              "a",
              {
                staticClass: "nav-link",
                attrs: {
                  "aria-selected": "false",
                  "data-toggle": "tab",
                  href: "#reminder-panel",
                  role: "tab"
                },
                on: {
                  click: function($event) {
                    _vm.fetchList(5)
                  }
                }
              },
              [_vm._v("2"), _c("sup", [_vm._v("nd")]), _vm._v(" Reminder")]
            )
          ]),
          _vm._v(" "),
          _c("li", { staticClass: "col p-0 nav-item mb-0" }, [
            _c(
              "a",
              {
                staticClass: "nav-link",
                attrs: {
                  "aria-selected": "false",
                  "data-toggle": "tab",
                  href: "#reminder-panel",
                  role: "tab"
                },
                on: {
                  click: function($event) {
                    _vm.fetchList(6)
                  }
                }
              },
              [_vm._v("3"), _c("sup", [_vm._v("rd")]), _vm._v(" Reminder")]
            )
          ]),
          _vm._v(" "),
          _c("li", { staticClass: "col p-0 nav-item mb-0" }, [
            _c(
              "a",
              {
                staticClass: "nav-link",
                attrs: {
                  "aria-selected": "false",
                  "data-toggle": "tab",
                  href: "#reminder-panel",
                  role: "tab"
                },
                on: {
                  click: function($event) {
                    _vm.fetchList(7)
                  }
                }
              },
              [_vm._v("4"), _c("sup", [_vm._v("th")]), _vm._v(" Reminder")]
            )
          ]),
          _vm._v(" "),
          _c("li", { staticClass: "col p-0 nav-item mb-0" }, [
            _c(
              "a",
              {
                staticClass: "nav-link",
                attrs: {
                  "aria-selected": "false",
                  "data-toggle": "tab",
                  href: "#reminder-panel",
                  role: "tab"
                },
                on: {
                  click: function($event) {
                    _vm.fetchList(8)
                  }
                }
              },
              [_vm._v("5"), _c("sup", [_vm._v("th")]), _vm._v(" Reminder")]
            )
          ])
        ]
      )
    ]),
    _vm._v(" "),
    _vm._m(0),
    _vm._v(" "),
    _vm.show && !!_vm.orders.length
      ? _c("div", { staticClass: "tab-content mt-1 attendance-body" }, [
          _c(
            "div",
            {
              staticClass: "tab-pane active text-center",
              attrs: { id: "reminder-panel", role: "tabpanel" }
            },
            _vm._l(_vm.orders, function(order, index) {
              return !!_vm.orders.length
                ? _c("div", { staticClass: "mb-3 row attendance-item" }, [
                    _c(
                      "div",
                      {
                        staticClass:
                          "col-12 col-xs-2 col-md col-lg d-flex align-items-center",
                        staticStyle: { "max-width": "120px" }
                      },
                      [
                        _vm.checkIfAlreadySentReminder(index)
                          ? _c(
                              "span",
                              {
                                staticClass: "user mx-auto waiting-reminder",
                                on: {
                                  click: function($event) {
                                    _vm.logReminder(index)
                                  }
                                }
                              },
                              [
                                _c("i", {
                                  staticClass: "fas fa-hourglass-start"
                                })
                              ]
                            )
                          : _c(
                              "span",
                              { staticClass: "user mx-auto sent-reminder" },
                              [_c("i", { staticClass: "fas fa-check" })]
                            ),
                        _vm._v(" "),
                        _c("span", { staticClass: "user mx-auto" }, [
                          _vm._v(_vm._s(index + 1))
                        ])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass:
                          "col-12 col-xs-2 col-md col-lg user-name d-flex align-items-center justify-content-center",
                        attrs: { "data-reminder-1": "1" }
                      },
                      [_vm._v(_vm._s(order.id) + "\n                ")]
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
                            _vm.displayDetails(order, "purchase_order")
                          }
                        }
                      },
                      [
                        _vm._v(
                          "\n                    " +
                            _vm._s(order.order_date) +
                            "\n                "
                        )
                      ]
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
                            _vm.displayDetails(order, "customer_info")
                          }
                        }
                      },
                      [
                        _vm._v(
                          "\n                    ID: " +
                            _vm._s(order.customer.id) +
                            " - " +
                            _vm._s(
                              _vm._f("capitalize")(
                                order.customer.employment_status
                              )
                            ) +
                            "\n                "
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
                            _vm.displayDetails(order, "repayment")
                          }
                        }
                      },
                      [
                        _vm._v(
                          "\n                    " +
                            _vm._s(_vm.getFinancialStatus(order)) +
                            "\n                "
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
                            _vm.displayDetails(order, "reminder_history")
                          }
                        }
                      },
                      [
                        _vm._v(
                          "\n                    " +
                            _vm._s(order.reminders.length) +
                            " reminder(s) sent\n                "
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
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
                              value: _vm.reminder[index].feedback,
                              expression: "reminder[index].feedback"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: {
                            rows: "1",
                            disabled: !_vm.reminder[index].canBeSelected
                          },
                          domProps: { value: _vm.reminder[index].feedback },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.reminder[index],
                                "feedback",
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
                          "col-12 col-xs-2 col-md col-lg d-flex align-items-center"
                      },
                      [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.promiseCalls[index].date,
                              expression: "promiseCalls[index].date"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: {
                            type: "date",
                            disabled: !_vm.reminder[index].canBeSelected
                          },
                          domProps: { value: _vm.promiseCalls[index].date },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.promiseCalls[index],
                                "date",
                                $event.target.value
                              )
                            }
                          }
                        })
                      ]
                    )
                  ])
                : _vm._e()
            })
          )
        ])
      : _c("div", { staticClass: "tab-content mt-1 attendance-body" }, [
          _vm._m(1)
        ]),
    _vm._v(" "),
    _c("div", { staticClass: "w-100 my-5 mx-0 hr" }),
    _vm._v(" "),
    _c("div", { staticClass: "modal fade", attrs: { id: "purchase_order" } }, [
      _c("div", { staticClass: "modal-dialog", attrs: { role: "document" } }, [
        _c("div", { staticClass: "modal-content" }, [
          _vm._m(2),
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
                                _vm.$format(_vm.currentOrder.repayment_amount)
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
                              _vm._s(_vm.$format(_vm.currentOrder.down_payment))
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
                                _vm.$format(_vm.currentOrder.product_price)
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
          _vm._m(3)
        ])
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "modal fade", attrs: { id: "customer_info" } }, [
      _c("div", { staticClass: "modal-dialog", attrs: { role: "document" } }, [
        _c("div", { staticClass: "modal-content" }, [
          _vm._m(4),
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
                        _vm._m(5)
                      ])
                    ]
                  )
                ])
              ])
            : _vm._e(),
          _vm._v(" "),
          _vm._m(6)
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
                        "Repayment Plan/Summary - " +
                          _vm._s(
                            _vm._f("capitalize")(
                              _vm.currentOrder.customer.employment_status
                            )
                          )
                      )
                    ]),
                    _vm._v(" "),
                    _vm._m(7)
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "modal-body" }, [
                    _c("div", { staticClass: "table-responsive" }, [
                      _c("table", { staticClass: "table table-bordered" }, [
                        _c("tbody", { staticClass: "text-center" }, [
                          _c("tr", [
                            _c("th", [_vm._v("Repayment")]),
                            _vm._v(" "),
                            _vm._m(8),
                            _vm._v(" "),
                            _vm._m(9),
                            _vm._v(" "),
                            _vm._m(10),
                            _vm._v(" "),
                            _vm._m(11),
                            _vm._v(" "),
                            _vm._m(12),
                            _vm._v(" "),
                            _vm._m(13),
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
                                        _vm._s(_vm.$format(payment)) +
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
                                    _vm._v(_vm._s(_vm.$format(payment)))
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
                                              "payment"
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
                                              "bank"
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
                          _c("tr", { staticClass: "table-separator" }, [
                            _c("th", [_vm._v("Summary")]),
                            _vm._v(" "),
                            _c("td", [_vm._v("Discount Detail (%)")]),
                            _vm._v(" "),
                            _c(
                              "th",
                              {
                                attrs: {
                                  colspan: _vm.isCurrentOrderInformal ? 3 : 1
                                }
                              },
                              [
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
                              ]
                            ),
                            _vm._v(" "),
                            _c("td", [_vm._v("Total Before Discount")]),
                            _vm._v(" "),
                            _c(
                              "th",
                              {
                                attrs: {
                                  colspan: _vm.isCurrentOrderInformal ? 3 : 1
                                }
                              },
                              [
                                _vm._v(
                                  "\n                                    " +
                                    _vm._s(
                                      _vm.$format(
                                        _vm.currentOrder["product_price"]
                                      )
                                    ) +
                                    "\n                                "
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c("td", [_vm._v("Total Paid")]),
                            _vm._v(" "),
                            _c(
                              "th",
                              {
                                attrs: {
                                  colspan: _vm.isCurrentOrderInformal ? 3 : 1
                                }
                              },
                              [
                                _vm._v(
                                  "\n                                    " +
                                    _vm._s(
                                      _vm.$format(
                                        _vm.getPaymentSummary(_vm.currentOrder)
                                          .amountPaid
                                      )
                                    ) +
                                    "\n                                "
                                )
                              ]
                            )
                          ]),
                          _vm._v(" "),
                          _c("tr", [
                            _c("th"),
                            _vm._v(" "),
                            _c("td", [_vm._v("Discount Amount")]),
                            _vm._v(" "),
                            _c(
                              "th",
                              {
                                attrs: {
                                  colspan: _vm.isCurrentOrderInformal ? 3 : 1
                                }
                              },
                              [
                                _vm._v(
                                  "\n                                    " +
                                    _vm._s(
                                      _vm.$format(
                                        _vm.getPaymentSummary(_vm.currentOrder)
                                          .discountAmount
                                      )
                                    ) +
                                    "\n                                "
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c("td", [_vm._v("Total After Discount")]),
                            _vm._v(" "),
                            _c(
                              "th",
                              {
                                attrs: {
                                  colspan: _vm.isCurrentOrderInformal ? 3 : 1
                                }
                              },
                              [
                                _vm._v(
                                  "\n                                    " +
                                    _vm._s(
                                      _vm.$format(
                                        _vm.getPaymentSummary(_vm.currentOrder)
                                          .discountedTotal
                                      )
                                    ) +
                                    "\n                                "
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c("td", [_vm._v("Total Debt")]),
                            _vm._v(" "),
                            _c(
                              "th",
                              {
                                attrs: {
                                  colspan: _vm.isCurrentOrderInformal ? 3 : 1
                                }
                              },
                              [
                                _vm._v(
                                  "\n                                    " +
                                    _vm._s(
                                      _vm.$format(
                                        _vm.getPaymentSummary(_vm.currentOrder)
                                          .outstandingDebt
                                      )
                                    ) +
                                    "\n                                "
                                )
                              ]
                            )
                          ]),
                          _vm._v(" "),
                          _c("tr", [
                            _c("th"),
                            _vm._v(" "),
                            _c("td", [_vm._v("Down Payment")]),
                            _vm._v(" "),
                            _c(
                              "th",
                              {
                                attrs: {
                                  colspan: _vm.isCurrentOrderInformal ? 3 : 1
                                }
                              },
                              [
                                _vm._v(
                                  "\n                                    " +
                                    _vm._s(
                                      _vm.$format(_vm.currentOrder.down_payment)
                                    ) +
                                    "\n                                "
                                )
                              ]
                            )
                          ])
                        ])
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _vm._m(14)
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
              _vm._m(15),
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
                              _vm._m(16),
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
                                    _c("td", [_vm._v(_vm._s(reminder.date))]),
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
              _vm._m(17)
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
    return _c("div", { staticClass: "mt-5 mb-3 attendance-head" }, [
      _c("div", { staticClass: "row px-4 pt-3 pb-4 text-center" }, [
        _c(
          "div",
          {
            staticClass: "col light-heading",
            staticStyle: { "max-width": "120px" }
          },
          [_vm._v("Action")]
        ),
        _vm._v(" "),
        _c("div", { staticClass: "col light-heading" }, [
          _vm._v("Order Number")
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col light-heading" }, [
          _vm._v("Order Summary")
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col light-heading" }, [
          _vm._v("Customer Info Summary")
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col light-heading" }, [
          _vm._v("Repayment Summary")
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col light-heading" }, [
          _vm._v("Reminder History")
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col light-heading" }, [_vm._v("Feedback")]),
        _vm._v(" "),
        _c("div", { staticClass: "col light-heading" }, [
          _vm._v("Promise Date")
        ])
      ])
    ])
  },
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
    return _c("tr", [
      _c("th", [_vm._v("Verified by")]),
      _vm._v(" "),
      _c("td", [_vm._v("--")])
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
        _c("th", [_vm._v("Comment")]),
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
    require("vue-hot-reload-api")      .rerender("data-v-37057f60", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-37057f60\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/views/DVA/reminder/callReminder.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-37057f60\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/views/DVA/reminder/callReminder.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("2a869cc3", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-37057f60\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./callReminder.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-37057f60\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./callReminder.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./resources/assets/js/views/DVA/reminder/callReminder.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-37057f60\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/views/DVA/reminder/callReminder.vue")
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"babel-preset-env\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"babel-plugin-syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/views/DVA/reminder/callReminder.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-37057f60\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/views/DVA/reminder/callReminder.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-37057f60"
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
Component.options.__file = "resources\\assets\\js\\views\\DVA\\reminder\\callReminder.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-37057f60", Component.options)
  } else {
    hotAPI.reload("data-v-37057f60", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});