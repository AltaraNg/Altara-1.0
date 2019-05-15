webpackJsonp([23],{

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"babel-preset-env\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"babel-plugin-syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/views/DVA/reminder/SMSReminder.vue":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _vue = __webpack_require__("./node_modules/vue/dist/vue.common.js");

var _vue2 = _interopRequireDefault(_vue);

var _sms = __webpack_require__("./resources/assets/js/helpers/sms.js");

var _sms2 = _interopRequireDefault(_sms);

var _flash = __webpack_require__("./resources/assets/js/helpers/flash.js");

var _flash2 = _interopRequireDefault(_flash);

var _api = __webpack_require__("./resources/assets/js/helpers/api.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function initialize(to) {
    var urls = { create: "/api/reminder/create" + (to.query.list ? '?list=' + to.query.list : '') };
    return urls.create;
} //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    beforeRouteEnter: function beforeRouteEnter(to, from, next) {
        (0, _api.get)(initialize(to)).then(function (_ref) {
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
        (0, _api.get)(initialize(to)).then(function (_ref2) {
            var data = _ref2.data;

            _this.prepareForm(data);
            next();
        });
    },
    data: function data() {
        return {
            form: {},
            orders: {},
            show: false,
            banks: null,
            reminder: null,
            currentOrder: {},
            doSelectAll: false,
            payment_methods: null,
            showModalContent: false,
            isCurrentOrderInformal: null
        };
    },

    methods: {
        prepareForm: function prepareForm(res) {
            this.show = false;
            this.showModalContent = false;
            var _ref3 = [res.orders, res.payment_methods, res.banks, res.dva_id];
            this.orders = _ref3[0];
            this.payment_methods = _ref3[1];
            this.banks = _ref3[2];
            this.dva_id = _ref3[3];

            this.initializeReminders() && (this.show = true);
        },
        initializeReminders: function initializeReminders() {
            var _this2 = this;

            var today = new Date();
            this.reminder = [];
            this.orders.forEach(function (order) {
                _this2.reminder.push({
                    'selected': false,
                    'customer_id': order.customer.id,
                    'phone': order.customer.telephone,
                    'order_id': order.id,
                    'sms_id': null,
                    'repayment_level': _this2.getRepaymentLevel(order),
                    'feedback': null,
                    'dva_id': _this2.dva_id,
                    'type': 'sms',
                    'date': today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate()
                });
            });
            this.$LIPS(false);
            return true;
        },
        displayErrorMessage: function displayErrorMessage(error) {
            this.$scrollToTop();
            _flash2.default.setError(error, 50000);
            this.$LIPS(true);
        },
        selectAll: function selectAll() {
            var _this3 = this;

            this.doSelectAll = !this.doSelectAll;
            this.reminder.forEach(function (order) {
                return order.selected = _this3.doSelectAll;
            });
        },


        /*processSelected() {
            this.$LIPS(true);
            //get the list of the selected reminders
            let selectedList = this.reminder.filter(obj => !!obj.selected);
            //prepare an array for the contact list and format the numbers like so
            // eg. 08163145041 changes to +2348163145041
            /!*let SMSContactList = selectedList.map(obj => '234' + obj.phone.trim().substr(1));*!/
             //generate 2 array for contact list and message
            // list for each of the contacts generated
            /!*let messageBodyList = selectedList.map(obj => {
                //get the order object for each of the selected reminders
                let order = this.orders.find(order => order.id === obj.order_id);
                //generate a custom reminder message for that order
                return this.generateCustomMessage(order);
            });*!/
              let contactsAndMessages = selectedList.map(obj => {
                let phone = '234' + obj.phone.trim().substr(1);
                let order = this.orders.find(order => order.id === obj.order_id);
                let message =  this.generateCustomMessage(order);
                return {phone, message};
            });
              if (!!contactsAndMessages.length) this.sendSMSReminders(selectedList, contactsAndMessages);
            // if (!!SMSContactList.length) this.sendSMSReminders(selectedList, SMSContactList);
            else this.displayErrorMessage('please select at least one!');
        },*/

        generateCustomMessage: function generateCustomMessage(order) {
            return 'For another testing clinsmann : ' + order.customer.telephone;
        },
        processSelected: function processSelected() {
            var _this4 = this;

            this.$LIPS(true);
            var smsContactList = this.reminder.filter(function (obj) {
                return !!obj.selected;
            }).map(function (obj) {
                var newObject = JSON.parse(JSON.stringify(obj));
                newObject.phone = '234' + obj.phone.trim().substr(1);
                newObject.order = _this4.orders.find(function (order) {
                    return order.id === obj.order_id;
                });
                newObject.message = _this4.generateCustomMessage(newObject.order);
                newObject.isSent = false;
                return newObject;
            });
            if (!!smsContactList.length) this.sendSMSReminders(smsContactList);else this.displayErrorMessage('please select at least one!');
        },
        sendSMSReminders: function sendSMSReminders(smsContactList) {
            var _this5 = this;

            smsContactList.forEach(function (value, index) {
                _sms2.default.sendFirstReminder(value, function (res) {
                    value.isSent = res.status === 200;
                    if (index + 1 === smsContactList.length) {
                        _this5.logSentMessages(smsContactList);
                    }
                });
            });
        },
        logSentMessages: function logSentMessages(smsContactList) {
            var _this6 = this;

            var messages = [];
            smsContactList.forEach(function (obj, index) {
                obj.isSent && messages.push(new _sms.Message(obj.dva_id, obj.message, obj.phone));
                if (index + 1 === smsContactList.length) {
                    if (messages.length > 0) {
                        (0, _api.post)('/api/message', { messages: messages, bulk: true }).then(function (_ref4) {
                            var data = _ref4.data;
                            var sentAndLogged = data.sentAndLogged,
                                ids = data.ids;

                            if (sentAndLogged) _this6.logSentReminders(smsContactList, ids);else _this6.displayErrorMessage('Error Logging sent sms details!');
                        });
                    } else _this6.displayErrorMessage('Error sending messages!');
                }
            });
        },
        logSentReminders: function logSentReminders(selectedList, ids) {
            var _this7 = this;

            ids.reverse();
            var newList = JSON.parse(JSON.stringify(selectedList));
            newList.forEach(function (value, index) {
                value.sms_id = ids[index];
                delete value.isSent;
                delete value.message;
                delete value.order;
                delete value.phone;
                delete value.selected;
            });
            if (ids.length > 0) {
                (0, _api.post)('/api/reminder', { reminders: newList }).then(function (_ref5) {
                    var data = _ref5.data;

                    _this7.initializeReminders() && _this7.$scrollToTop();
                    if (data.saved) _flash2.default.setSuccess('Reminders have been sent successfully!', 50000);else _this7.displayErrorMessage('Error sending reminders!');
                });
            } else this.displayErrorMessage('Error logging sent messages!');
        },


        /*sendSMSReminders(selectedList, SMSContactList) {
            SMS.sendFirstReminder({SMSContactList}, ({status}) => {
                if (status === 200) this.logSentMessages(selectedList);
                else this.displayErrorMessage('Error Sending SMS to contact(s)!');
            });
        },*/

        /*logSentMessages(selectedList) {
            let messages = [];
            selectedList.forEach(reminder => {
                messages.push(new Message(reminder.dva_id, 'message', reminder.phone));
                delete reminder.phone;
                delete reminder.selected;
            });
            post('/api/message', {messages, bulk: true}).then(({data}) => {
                let {sentAndLogged, ids} = data;
                if (sentAndLogged) this.logSentReminders(selectedList, ids);
                else this.displayErrorMessage('Error Logging sent sms details!');
            });
        },*/

        /* logSentReminders(selectedList, ids) {
             ids.reverse();
             selectedList.forEach((value, index) => value.sms_id = ids[index]);
             post('/api/reminder', {reminders: selectedList}).then(({data}) => {
                 this.initializeReminders() && this.$scrollToTop();
                 if (data.saved) Flash.setSuccess('Reminders have been sent successfully!', 50000);
                 else this.displayErrorMessage('Reminders have been sent successfully!');
             })
         },*/

        isPaymentDue: function isPaymentDue(dueDate) {
            return new Date() > new Date(dueDate);
        },
        getDiscount: function getDiscount(_ref6) {
            var discount = _ref6.discount;

            return discount.name + " (" + discount.percentage + ")";
        },
        isOrderRepaymentValid: function isOrderRepaymentValid(order) {
            return !(!order['repayment'] && !order['repayment_formal'] && !order['repayment_informal']);
        },
        getReminderList: function getReminderList(list) {
            return null;
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
            this.isCurrentOrderInformal = order.customer.employment_status === 'informal(business)';
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
        getAmountPaidAndOutStandingDebt: function getAmountPaidAndOutStandingDebt(order) {
            var amountPaid = 0,
                outstandingDebt = 0,
                _getCountAndRepayment = this.getCountAndRepaymentData(order),
                count = _getCountAndRepayment.count,
                repaymentData = _getCountAndRepayment.repaymentData;
            for (var i = 1; i < count; i++) {
                amountPaid += repaymentData[this.getColumn(i) + '_pay'];
            }outstandingDebt = parseInt(order["product_price"]) - amountPaid;
            return { amountPaid: amountPaid, outstandingDebt: outstandingDebt };
        },
        getFinancialStatus: function getFinancialStatus(order) {
            if (!this.isOrderRepaymentValid(order)) return 'no repayment detail';
            var values = this.getAmountPaidAndOutStandingDebt(order);
            return 'paid: ' + values.amountPaid + ' debt: ' + values.outstandingDebt;
        },
        getRepayment: function getRepayment(order, clause) {
            if (!this.isOrderRepaymentValid(order)) return null;
            var data = [],
                _getCountAndRepayment2 = this.getCountAndRepaymentData(order),
                count = _getCountAndRepayment2.count,
                repaymentData = _getCountAndRepayment2.repaymentData;
            for (var i = 1; i < count; i++) {
                data.push(repaymentData[this.getColumn(i) + clause]);
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
        var _this8 = this;

        $(document).on("hidden.bs.modal", '.modal', function () {
            _this8.currentOrder = null;
            _this8.showModalContent = false;
        });
    }
};

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-633d941b\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/views/DVA/reminder/SMSReminder.vue":
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
                    _vm.getReminderList(1)
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
                    _vm.getReminderList(2)
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
                    _vm.getReminderList(3)
                  }
                }
              },
              [_vm._v("3"), _c("sup", [_vm._v("rd")]), _vm._v(" Reminder")]
            )
          ])
        ]
      )
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "mt-5 mb-3 attendance-head" }, [
      _c("div", { staticClass: "row px-4 pt-3 pb-4 text-center" }, [
        _c(
          "div",
          {
            staticClass: "col p-0 text-link",
            staticStyle: { "max-width": "120px" },
            on: { click: _vm.selectAll }
          },
          [
            _vm._v(
              "\n                Click to " +
                _vm._s(_vm.doSelectAll ? "Select" : "De-select") +
                " all\n            "
            )
          ]
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
        ])
      ])
    ]),
    _vm._v(" "),
    _vm.show
      ? _c("div", { staticClass: "tab-content mt-1 attendance-body" }, [
          _c(
            "div",
            {
              staticClass: "tab-pane active text-center",
              attrs: { id: "reminder-panel", role: "tabpanel" }
            },
            _vm._l(_vm.orders, function(order, index) {
              return _c("div", { staticClass: "mb-3 row attendance-item" }, [
                _c(
                  "div",
                  {
                    staticClass:
                      "col-12 col-xs-2 col-md col-lg d-flex align-items-center ",
                    staticStyle: { "max-width": "120px" }
                  },
                  [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.reminder[index].selected,
                          expression: "reminder[index].selected"
                        }
                      ],
                      staticClass:
                        "form-check-input my-0 mx-4 float-left position-relative",
                      attrs: { type: "checkbox" },
                      domProps: {
                        checked: Array.isArray(_vm.reminder[index].selected)
                          ? _vm._i(_vm.reminder[index].selected, null) > -1
                          : _vm.reminder[index].selected
                      },
                      on: {
                        change: function($event) {
                          var $$a = _vm.reminder[index].selected,
                            $$el = $event.target,
                            $$c = $$el.checked ? true : false
                          if (Array.isArray($$a)) {
                            var $$v = null,
                              $$i = _vm._i($$a, $$v)
                            if ($$el.checked) {
                              $$i < 0 &&
                                _vm.$set(
                                  _vm.reminder[index],
                                  "selected",
                                  $$a.concat([$$v])
                                )
                            } else {
                              $$i > -1 &&
                                _vm.$set(
                                  _vm.reminder[index],
                                  "selected",
                                  $$a.slice(0, $$i).concat($$a.slice($$i + 1))
                                )
                            }
                          } else {
                            _vm.$set(_vm.reminder[index], "selected", $$c)
                          }
                        }
                      }
                    }),
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
                          _vm._f("capitalize")(order.customer.employment_status)
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
                )
              ])
            })
          )
        ])
      : _vm._e(),
    _vm._v(" "),
    _c("div", { staticClass: "mt-1 attendance-body" }, [
      _c("div", { staticClass: "mb-5 px-0 row align-items-center" }, [
        _c("div", { staticClass: "w-100 my-5 mx-0 hr" }),
        _vm._v(" "),
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
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "modal fade", attrs: { id: "purchase_order" } }, [
      _c("div", { staticClass: "modal-dialog", attrs: { role: "document" } }, [
        _c("div", { staticClass: "modal-content" }, [
          _vm._m(0),
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
                          _c("th", [_vm._v("Repayment (₦)")]),
                          _vm._v(" "),
                          _c("td", [
                            _vm._v(_vm._s(_vm.currentOrder.repayment_amount))
                          ])
                        ]),
                        _vm._v(" "),
                        _c("tr", [
                          _c("th", [_vm._v("Down Payment (%)")]),
                          _vm._v(" "),
                          _c("td", [
                            _vm._v(_vm._s(_vm.currentOrder.down_payment))
                          ])
                        ]),
                        _vm._v(" "),
                        _c("tr", [
                          _c("th", [_vm._v("Discount (₦)")]),
                          _vm._v(" "),
                          _c("td", [
                            _vm._v(_vm._s(_vm.getDiscount(_vm.currentOrder)))
                          ])
                        ]),
                        _vm._v(" "),
                        _c("tr", [
                          _c("th", [_vm._v("Total amount to Pay (₦)")]),
                          _vm._v(" "),
                          _c("td", [
                            _vm._v(_vm._s(_vm.currentOrder.product_price))
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
          _vm._m(1)
        ])
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "modal fade", attrs: { id: "customer_info" } }, [
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
                        _vm._m(3)
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
                        "Repayment Plan/Summary - " +
                          _vm._s(
                            _vm._f("capitalize")(
                              _vm.currentOrder.customer.employment_status
                            )
                          )
                      )
                    ]),
                    _vm._v(" "),
                    _vm._m(5)
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "modal-body" }, [
                    _c("div", { staticClass: "table-responsive" }, [
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
                            [
                              _c("th", [_vm._v("Due date")]),
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
                            [
                              _c("th", [_vm._v("Amount Paid (₦)")]),
                              _vm._v(" "),
                              _vm._l(
                                _vm.getRepayment(_vm.currentOrder, "_pay"),
                                function(payment) {
                                  return _c("td", [_vm._v(_vm._s(payment))])
                                }
                              )
                            ],
                            2
                          ),
                          _vm._v(" "),
                          _c(
                            "tr",
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
                          _c("tr", [
                            _c("th", [_vm._v("Summary (₦)")]),
                            _vm._v(" "),
                            _c("td", [_vm._v("Grand Total")]),
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
                                  _vm._s(_vm.currentOrder["product_price"])
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
                                      _vm.getAmountPaidAndOutStandingDebt(
                                        _vm.currentOrder
                                      ).amountPaid
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
                                      _vm.getAmountPaidAndOutStandingDebt(
                                        _vm.currentOrder
                                      ).outstandingDebt
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
                                    _c("td", [_vm._v(_vm._s(reminder.date))]),
                                    _vm._v(" "),
                                    _c("td", [_vm._v(_vm._s(reminder.type))]),
                                    _vm._v(" "),
                                    _c("td", [
                                      _vm._v(
                                        _vm._s(
                                          reminder["sms"]
                                            ? reminder.sms.message
                                            : "call feedback: " +
                                              reminder.feedback
                                        ) + "\n                                "
                                      )
                                    ]),
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
    require("vue-hot-reload-api")      .rerender("data-v-633d941b", module.exports)
  }
}

/***/ }),

/***/ "./resources/assets/js/helpers/sms.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Message = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _api = __webpack_require__("./resources/assets/js/helpers/api.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Message = exports.Message = function () {
    function Message(userId, message, contacts) {
        _classCallCheck(this, Message);

        this.user_id = userId;
        this.message = message;
        this.contacts = contacts;
        this.setPages();
        this.setContactCount();
    }

    _createClass(Message, [{
        key: "setContactCount",
        value: function setContactCount() {
            if (this.contacts.constructor === String) this.contact_count = this.contacts.split(',').length;
            if (this.contacts.constructor === Array) this.contact_count = this.contacts.length;
        }
    }, {
        key: "setPages",
        value: function setPages() {
            this.pages = Math.ceil(this.message.length / 160);
        }
    }]);

    return Message;
}();

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
    transfer: function transfer(details) {
        this.message = "Transfer Successful, your new staff ID is " + details.loginID + " ";
        this.send(details);
    },
    dvaMessage: function dvaMessage(details, callback) {
        this.message = details.message;
        this.sendWithCallback(details, callback);
    },


    /*sendFirstReminder(details, callback) {
        this.message = "Thanks for patronizing us. lol its working";
        details.contacts = details.SMSContactList.join(',');
        delete details.SMSContactList;
        return this.sendWithCallback(details, callback);
    },*/

    sendFirstReminder: function sendFirstReminder(details, callback) {
        this.message = details.message;
        return this.sendWithCallback(details, callback);
    },
    sendWithCallback: function sendWithCallback(_ref, callback) {
        var phone = _ref.phone;

        (0, _api.get)("/api/message/create?to=" + phone + "&message=" + this.message).then(function (res) {
            res.status === 200 && console.log("sms sent successfully");
            return !!callback && callback(res);
        }).catch(function (err) {
            return !!callback && callback(err);
        });
    },
    send: function send(details) {
        (0, _api.get)("/api/message/create?to=234" + details.phone + "&message=" + this.message).then(function (res) {
            res.status === 200 && console.log("sms sent successfully");
        });
    }
};

/***/ }),

/***/ "./resources/assets/js/views/DVA/reminder/SMSReminder.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"babel-preset-env\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"babel-plugin-syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/views/DVA/reminder/SMSReminder.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-633d941b\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/views/DVA/reminder/SMSReminder.vue")
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
Component.options.__file = "resources\\assets\\js\\views\\DVA\\reminder\\SMSReminder.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-633d941b", Component.options)
  } else {
    hotAPI.reload("data-v-633d941b", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});