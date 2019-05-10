webpackJsonp([21],{

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"babel-preset-env\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"babel-plugin-syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/views/DVA/reminder/SMSReminder.vue":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _vue = __webpack_require__("./node_modules/vue/dist/vue.common.js");

var _vue2 = _interopRequireDefault(_vue);

var _api = __webpack_require__("./resources/assets/js/helpers/api.js");

var _sms = __webpack_require__("./resources/assets/js/helpers/sms.js");

var _sms2 = _interopRequireDefault(_sms);

var _flash = __webpack_require__("./resources/assets/js/helpers/flash.js");

var _flash2 = _interopRequireDefault(_flash);

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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

function initialize(to) {
    var urls = { create: "/api/reminder/create" + (to.query.list ? '?list=' + to.query.list : '') };
    return urls.create;
}

exports.default = {
    beforeRouteEnter: function beforeRouteEnter(to, from, next) {
        //1. make request to back-end
        (0, _api.get)(initialize(to)).then(function (_ref) {
            var data = _ref.data;

            //2 send to the method to prepare form//
            next(function (vm) {
                return vm.prepareForm(data);
            });
        });
    },
    beforeRouteUpdate: function beforeRouteUpdate(to, from, next) {
        var _this = this;

        this.show = false;
        this.showModalContent = false;
        //1. make request to back-end
        (0, _api.get)(initialize(to)).then(function (_ref2) {
            var data = _ref2.data;

            //2 send to the method to prepare form
            _this.prepareForm(data);
            next();
        });
    },
    data: function data() {
        return {
            form: {},
            show: false,
            showModalContent: false,
            orders: {},
            currentOrder: {},
            doSelectAll: false,
            banks: null,
            payment_methods: null,
            isCurrentOrderInformal: null,
            reminder: []
        };
    },

    methods: {
        prepareForm: function prepareForm(res) {
            this.show = false;
            this.showModalContent = false;
            //this function is used when a data is sent to this component
            //or this component makes a request to backend the
            //data received is used to prepare the form
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
            return true;
        },
        selectAll: function selectAll() {
            var _this3 = this;

            this.doSelectAll = !this.doSelectAll;
            this.reminder.forEach(function (order) {
                return order.selected = _this3.doSelectAll;
            });
        },
        processSelected: function processSelected() {
            var SMSContactList = this.reminder.filter(function (obj) {
                return !!obj.selected;
            }).map(function (obj) {
                return '234' + obj.phone.trim().substr(1);
            });
            if (!!SMSContactList.length) _sms2.default.sendFirstReminder({ SMSContactList: SMSContactList }, this.saveReminders);else {
                this.$scrollToTop();
                _flash2.default.setError('please select at least one order!', 50000);
            }
        },
        saveReminders: function saveReminders(_ref4) {
            var _this4 = this;

            var messages = _ref4.messages;

            var contactsSentSMSFromReminderList = this.reminder.filter(function (obj) {
                return !!obj.selected;
            });
            contactsSentSMSFromReminderList.forEach(function (value, index) {
                value.sms_id = messages[index].messageId;
                value.feedback = 'sms sent';
                delete value.phone;
                delete value.selected;
            });
            (0, _api.post)('/api/reminder', { reminders: contactsSentSMSFromReminderList }).then(function (_ref5) {
                var data = _ref5.data;

                _this4.initializeReminders() && _this4.$scrollToTop();
                if (data.saved) _flash2.default.setSuccess('Reminders have been sent successfully!', 10000);
            });
        },
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
            this.$router.push({ query: { list: list } });
            if (this.$route.query.list != list) this.$LIPS(true);
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
        var _this5 = this;

        $(document).on("hidden.bs.modal", '.modal', function () {
            _this5.currentOrder = null;
            _this5.showModalContent = false;
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
                staticClass: "nav-link",
                class: {
                  active:
                    _vm.$route.query.list === "1" || !_vm.$route.query.list
                },
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
                class: { active: _vm.$route.query.list === "2" },
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
                class: { active: _vm.$route.query.list === "3" },
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
                                      _vm._v(_vm._s(reminder.feedback))
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
   transfer: function transfer(details) {
      this.message = "Transfer Successful, your new staff ID is " + details.loginID + " ";
      this.send(details);
   },
   dvaMessage: function dvaMessage(details) {
      this.message = details.message;
      this.send(details);
   },
   sendFirstReminder: function sendFirstReminder(details, callback) {
      this.message = "Thanks for patronizing us. lol its working";
      details.phone = details.SMSContactList.join(',');
      delete details.SMSContactList;
      return this.send(details, callback);
   },
   send: function send(details, callback) {
      (0, _api.get)("/api/message/create?to=" + details.phone + "&message=" + this.message).then(function (res) {
         if (res.status === 200) console.log("sms sent successfully");
         return callback(JSON.parse(res.data));
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