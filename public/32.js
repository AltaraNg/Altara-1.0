webpackJsonp([32],{

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"babel-preset-env\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"babel-plugin-syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/views/DVA/reminder/reminder.vue":
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    data: function data() {
        return {
            customer: {
                id: 1,
                name: 'Ibeanu Hillary',
                messages: [{ id: 1, body: "This is the body of the random message sent to a customer!" }, { id: 2, body: "This is the body of the random message sent to a customer!" }, { id: 3, body: "This is the body of the random message sent to a customer!" }],
                repayments: [],
                orders: [{ id: 223131, date: '09-09-2017' }]
            },
            viewMore: {},
            customers: [{ check: false }, { check: false }, { check: false }, { check: false }, { check: false }]
        };
    },

    methods: {
        displayDetails: function displayDetails(customer) {
            var modal = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'viewMore';

            return $("#" + modal).modal('toggle');
        },
        selectAll: function selectAll() {
            this.customers.forEach(function (customer) {
                return customer.check = true;
            });
        }
    },
    mounted: function mounted() {
        var _this = this;

        $(document).on("hidden.bs.modal", '.modal', function () {
            return _this.viewMore = {};
        });
    }
};

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-426fb2d2\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/views/DVA/reminder/reminder.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { attrs: { id: "reminder" } }, [
    _vm._m(0),
    _vm._v(" "),
    _c("div", { staticClass: "mt-5 mb-3 attendance-head" }, [
      _c("div", { staticClass: "row px-4 pt-3 pb-4 text-center" }, [
        _c(
          "div",
          {
            staticClass: "col text-link",
            staticStyle: { "max-width": "120px" },
            on: { click: _vm.selectAll }
          },
          [_vm._v("Click to Select all")]
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
        _c("div", { staticClass: "col light-heading" }, [_vm._v("Comment")])
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "tab-content mt-1 attendance-body" }, [
      _c(
        "div",
        {
          staticClass: "tab-pane active text-center",
          attrs: { id: "reminder-1", role: "tabpanel" }
        },
        _vm._l(_vm.customers, function(customer) {
          return _c(
            "div",
            { staticClass: "mb-3 row align-items-center attendance-item" },
            [
              _c(
                "div",
                {
                  staticClass:
                    "col-12 col-xs-2 col-md col-lg d-flex align-items-center",
                  staticStyle: { "max-width": "120px" }
                },
                [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: customer.check,
                        expression: "customer.check"
                      }
                    ],
                    staticClass:
                      "form-check-input my-0 mx-4 float-left position-relative",
                    attrs: { type: "checkbox" },
                    domProps: {
                      checked: Array.isArray(customer.check)
                        ? _vm._i(customer.check, null) > -1
                        : customer.check
                    },
                    on: {
                      change: function($event) {
                        var $$a = customer.check,
                          $$el = $event.target,
                          $$c = $$el.checked ? true : false
                        if (Array.isArray($$a)) {
                          var $$v = null,
                            $$i = _vm._i($$a, $$v)
                          if ($$el.checked) {
                            $$i < 0 &&
                              _vm.$set(customer, "check", $$a.concat([$$v]))
                          } else {
                            $$i > -1 &&
                              _vm.$set(
                                customer,
                                "check",
                                $$a.slice(0, $$i).concat($$a.slice($$i + 1))
                              )
                          }
                        } else {
                          _vm.$set(customer, "check", $$c)
                        }
                      }
                    }
                  }),
                  _vm._v(" "),
                  _vm._m(1, true)
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "col-12 col-xs-2 col-md col-lg user-name",
                  attrs: { "data-reminder-1": "1" }
                },
                [_vm._v("LSB0839432")]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "col-12 col-xs-2 col-md col-lg",
                  attrs: { "data-hoverable": "true" },
                  on: {
                    click: function($event) {
                      _vm.displayDetails(customer, "purchase_order")
                    }
                  }
                },
                [
                  _vm._v(
                    "\n                    20th, June 2018\n                "
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "col-12 col-xs-3 col-md col-lg",
                  attrs: { "data-hoverable": "true" },
                  on: {
                    click: function($event) {
                      _vm.displayDetails(customer, "customer_info")
                    }
                  }
                },
                [_vm._v("\n                    ID: 4875\n                ")]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "col-12 col-xs-2 col-md col-lg",
                  attrs: { "data-hoverable": "true" },
                  on: {
                    click: function($event) {
                      _vm.displayDetails(customer, "repayment")
                    }
                  }
                },
                [
                  _vm._v(
                    "\n                    Paid: 20,000 Debt: 49,000\n                "
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "col-12 col-xs-2 col-md col-lg",
                  attrs: { "data-hoverable": "true" },
                  on: {
                    click: function($event) {
                      _vm.displayDetails(customer, "reminder_history")
                    }
                  }
                },
                [
                  _vm._v(
                    "\n                    3 Reminders sent\n                "
                  )
                ]
              ),
              _vm._v(" "),
              _vm._m(2, true)
            ]
          )
        })
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "tab-pane",
          attrs: { id: "reminder-2", role: "tabpanel" }
        },
        _vm._l(_vm.customers, function(customer) {
          return _c(
            "div",
            { staticClass: "mb-3 row align-items-center attendance-item" },
            [
              _c(
                "div",
                {
                  staticClass:
                    "col-12 col-xs-2 col-md col-lg d-flex align-items-center",
                  staticStyle: { "max-width": "120px" }
                },
                [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: customer.check,
                        expression: "customer.check"
                      }
                    ],
                    staticClass:
                      "form-check-input my-0 mx-4 float-left position-relative",
                    attrs: { type: "checkbox" },
                    domProps: {
                      checked: Array.isArray(customer.check)
                        ? _vm._i(customer.check, null) > -1
                        : customer.check
                    },
                    on: {
                      change: function($event) {
                        var $$a = customer.check,
                          $$el = $event.target,
                          $$c = $$el.checked ? true : false
                        if (Array.isArray($$a)) {
                          var $$v = null,
                            $$i = _vm._i($$a, $$v)
                          if ($$el.checked) {
                            $$i < 0 &&
                              _vm.$set(customer, "check", $$a.concat([$$v]))
                          } else {
                            $$i > -1 &&
                              _vm.$set(
                                customer,
                                "check",
                                $$a.slice(0, $$i).concat($$a.slice($$i + 1))
                              )
                          }
                        } else {
                          _vm.$set(customer, "check", $$c)
                        }
                      }
                    }
                  }),
                  _vm._v(" "),
                  _vm._m(3, true)
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "col-12 col-xs-2 col-md col-lg user-name",
                  attrs: { "data-reminder-1": "1" }
                },
                [_vm._v("LSB0839432")]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "col-12 col-xs-2 col-md col-lg",
                  attrs: { "data-hoverable": "true" },
                  on: {
                    click: function($event) {
                      _vm.displayDetails(customer, "purchase_order")
                    }
                  }
                },
                [
                  _vm._v(
                    "\n                    20th, June 2018\n                "
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "col-12 col-xs-3 col-md col-lg",
                  attrs: { "data-hoverable": "true" },
                  on: {
                    click: function($event) {
                      _vm.displayDetails(customer, "customer_info")
                    }
                  }
                },
                [_vm._v("\n                    ID: 4875\n                ")]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "col-12 col-xs-2 col-md col-lg",
                  attrs: { "data-hoverable": "true" },
                  on: {
                    click: function($event) {
                      _vm.displayDetails(customer, "repayment")
                    }
                  }
                },
                [
                  _vm._v(
                    "\n                    Paid: 20,000 Debt: 49,000\n                "
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "col-12 col-xs-2 col-md col-lg",
                  attrs: { "data-hoverable": "true" },
                  on: {
                    click: function($event) {
                      _vm.displayDetails(customer, "reminder_history")
                    }
                  }
                },
                [
                  _vm._v(
                    "\n                    3 Reminders sent\n                "
                  )
                ]
              ),
              _vm._v(" "),
              _vm._m(4, true)
            ]
          )
        })
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "tab-pane",
          attrs: { id: "reminder-3", role: "tabpanel" }
        },
        _vm._l(_vm.customers, function(customer) {
          return _c(
            "div",
            { staticClass: "mb-3 row align-items-center attendance-item" },
            [
              _c(
                "div",
                {
                  staticClass:
                    "col-12 col-xs-2 col-md col-lg d-flex align-items-center",
                  staticStyle: { "max-width": "120px" }
                },
                [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: customer.check,
                        expression: "customer.check"
                      }
                    ],
                    staticClass:
                      "form-check-input my-0 mx-4 float-left position-relative",
                    attrs: { type: "checkbox" },
                    domProps: {
                      checked: Array.isArray(customer.check)
                        ? _vm._i(customer.check, null) > -1
                        : customer.check
                    },
                    on: {
                      change: function($event) {
                        var $$a = customer.check,
                          $$el = $event.target,
                          $$c = $$el.checked ? true : false
                        if (Array.isArray($$a)) {
                          var $$v = null,
                            $$i = _vm._i($$a, $$v)
                          if ($$el.checked) {
                            $$i < 0 &&
                              _vm.$set(customer, "check", $$a.concat([$$v]))
                          } else {
                            $$i > -1 &&
                              _vm.$set(
                                customer,
                                "check",
                                $$a.slice(0, $$i).concat($$a.slice($$i + 1))
                              )
                          }
                        } else {
                          _vm.$set(customer, "check", $$c)
                        }
                      }
                    }
                  }),
                  _vm._v(" "),
                  _vm._m(5, true)
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "col-12 col-xs-2 col-md col-lg user-name",
                  attrs: { "data-reminder-1": "1" }
                },
                [_vm._v("LSB0839432")]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "col-12 col-xs-2 col-md col-lg",
                  attrs: { "data-hoverable": "true" },
                  on: {
                    click: function($event) {
                      _vm.displayDetails(customer, "purchase_order")
                    }
                  }
                },
                [
                  _vm._v(
                    "\n                    20th, June 2018\n                "
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "col-12 col-xs-3 col-md col-lg",
                  attrs: { "data-hoverable": "true" },
                  on: {
                    click: function($event) {
                      _vm.displayDetails(customer, "customer_info")
                    }
                  }
                },
                [_vm._v("\n                    ID: 4875\n                ")]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "col-12 col-xs-2 col-md col-lg",
                  attrs: { "data-hoverable": "true" },
                  on: {
                    click: function($event) {
                      _vm.displayDetails(customer, "repayment")
                    }
                  }
                },
                [
                  _vm._v(
                    "\n                    Paid: 20,000 Debt: 49,000\n                "
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "col-12 col-xs-2 col-md col-lg",
                  attrs: { "data-hoverable": "true" },
                  on: {
                    click: function($event) {
                      _vm.displayDetails(customer, "reminder_history")
                    }
                  }
                },
                [
                  _vm._v(
                    "\n                    3 Reminders sent\n                "
                  )
                ]
              ),
              _vm._v(" "),
              _vm._m(6, true)
            ]
          )
        })
      )
    ]),
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
                attrs: { disabled: _vm.$isProcessing }
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
    _vm._m(7),
    _vm._v(" "),
    _vm._m(8),
    _vm._v(" "),
    _vm._m(9),
    _vm._v(" "),
    _vm._m(10)
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "mt-5 mb-3 attendance-head" }, [
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
                  href: "#reminder-1",
                  role: "tab"
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
                  href: "#reminder-2",
                  role: "tab"
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
                  href: "#reminder-3",
                  role: "tab"
                }
              },
              [_vm._v("3"), _c("sup", [_vm._v("rd")]), _vm._v(" Reminder")]
            )
          ])
        ]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "user mx-auto" }, [
      _c("i", { staticClass: "user-icon fas fa-user-alt" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "col-12 col-xs-2 col-md col-lg d-flex align-items-center"
      },
      [_c("input", { staticClass: "form-control", attrs: { type: "text" } })]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "user mx-auto" }, [
      _c("i", { staticClass: "user-icon fas fa-user-alt" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "col-12 col-xs-2 col-md col-lg d-flex align-items-center"
      },
      [_c("input", { staticClass: "form-control", attrs: { type: "text" } })]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "user mx-auto" }, [
      _c("i", { staticClass: "user-icon fas fa-user-alt" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "col-12 col-xs-2 col-md col-lg d-flex align-items-center"
      },
      [_c("input", { staticClass: "form-control", attrs: { type: "text" } })]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "modal fade", attrs: { id: "purchase_order" } },
      [
        _c(
          "div",
          { staticClass: "modal-dialog", attrs: { role: "document" } },
          [
            _c("div", { staticClass: "modal-content" }, [
              _c("div", { staticClass: "modal-header py-2" }, [
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
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "modal-body" }, [
                _c("div", { staticClass: "table-responsive" }, [
                  _c(
                    "table",
                    { staticClass: "table table-bordered table-striped" },
                    [
                      _c("tbody", [
                        _c("tr", [
                          _c("th", [_vm._v("Order ID")]),
                          _vm._v(" "),
                          _c("td", [_vm._v("EFS002243")])
                        ]),
                        _vm._v(" "),
                        _c("tr", [
                          _c("th", [_vm._v("Product")]),
                          _vm._v(" "),
                          _c("td", [_vm._v("21 inches Samsung LED TV")])
                        ]),
                        _vm._v(" "),
                        _c("tr", [
                          _c("th", [_vm._v("Repayment (₦)")]),
                          _vm._v(" "),
                          _c("td", [_vm._v("45,600")])
                        ]),
                        _vm._v(" "),
                        _c("tr", [
                          _c("th", [_vm._v("Down Payment (%)")]),
                          _vm._v(" "),
                          _c("td", [_vm._v("40")])
                        ]),
                        _vm._v(" "),
                        _c("tr", [
                          _c("th", [_vm._v("Discount (₦)")]),
                          _vm._v(" "),
                          _c("td", [_vm._v("-")])
                        ]),
                        _vm._v(" "),
                        _c("tr", [
                          _c("th", [_vm._v("Total amount to Pay (₦)")]),
                          _vm._v(" "),
                          _c("td", [_vm._v("149,000")])
                        ])
                      ])
                    ]
                  )
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "modal-footer" }, [
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
            ])
          ]
        )
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "modal fade", attrs: { id: "customer_info" } },
      [
        _c(
          "div",
          { staticClass: "modal-dialog", attrs: { role: "document" } },
          [
            _c("div", { staticClass: "modal-content" }, [
              _c("div", { staticClass: "modal-header py-2" }, [
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
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "modal-body" }, [
                _c("div", { staticClass: "table-responsive" }, [
                  _c(
                    "table",
                    { staticClass: "table table-bordered table-striped" },
                    [
                      _c("tbody", [
                        _c("tr", [
                          _c("th", [_vm._v("Full Name")]),
                          _vm._v(" "),
                          _c("td", [_vm._v("EFS002243")])
                        ]),
                        _vm._v(" "),
                        _c("tr", [
                          _c("th", [_vm._v("Address")]),
                          _vm._v(" "),
                          _c("td", [
                            _vm._v("53 Akpo Street Achara Layout Enugu Nigeria")
                          ])
                        ]),
                        _vm._v(" "),
                        _c("tr", [
                          _c("th", [_vm._v("Branch")]),
                          _vm._v(" "),
                          _c("td", [_vm._v("Challenge Branch")])
                        ]),
                        _vm._v(" "),
                        _c("tr", [
                          _c("th", [_vm._v("Category")]),
                          _vm._v(" "),
                          _c("td", [_vm._v("Informal")])
                        ])
                      ])
                    ]
                  )
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "modal-footer" }, [
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
            ])
          ]
        )
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "modal fade repayment", attrs: { id: "repayment" } },
      [
        _c(
          "div",
          { staticClass: "modal-dialog modal-xl", attrs: { role: "document" } },
          [
            _c("div", { staticClass: "modal-content" }, [
              _c("div", { staticClass: "modal-header py-2" }, [
                _c("h6", { staticClass: "modal-title py-1" }, [
                  _vm._v("Repayment Plan/Summary")
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
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "modal-body" }, [
                _c("div", { staticClass: "table-responsive" }, [
                  _c("table", { staticClass: "table table-bordered" }, [
                    _c("tbody", { staticClass: "text-center" }, [
                      _c("tr", [
                        _c("th", [_vm._v("Repayment")]),
                        _vm._v(" "),
                        _c("td", [_vm._v("1"), _c("sup", [_vm._v("st")])]),
                        _vm._v(" "),
                        _c("td", [_vm._v("2"), _c("sup", [_vm._v("nd")])]),
                        _vm._v(" "),
                        _c("td", [_vm._v("3"), _c("sup", [_vm._v("rd")])]),
                        _vm._v(" "),
                        _c("td", [_vm._v("4"), _c("sup", [_vm._v("th")])]),
                        _vm._v(" "),
                        _c("td", [_vm._v("5"), _c("sup", [_vm._v("th")])]),
                        _vm._v(" "),
                        _c("td", [_vm._v("6"), _c("sup", [_vm._v("th")])]),
                        _vm._v(" "),
                        _c("td", [_vm._v("7"), _c("sup", [_vm._v("th")])]),
                        _vm._v(" "),
                        _c("td", [_vm._v("8"), _c("sup", [_vm._v("th")])]),
                        _vm._v(" "),
                        _c("td", [_vm._v("9"), _c("sup", [_vm._v("th")])]),
                        _vm._v(" "),
                        _c("td", [_vm._v("10"), _c("sup", [_vm._v("th")])]),
                        _vm._v(" "),
                        _c("td", [_vm._v("11"), _c("sup", [_vm._v("th")])]),
                        _vm._v(" "),
                        _c("td", [_vm._v("12"), _c("sup", [_vm._v("th")])])
                      ]),
                      _vm._v(" "),
                      _c("tr", [
                        _c("th", [_vm._v("Due date")]),
                        _vm._v(" "),
                        _c("td", [_vm._v("2019-2-19")]),
                        _vm._v(" "),
                        _c("td", [_vm._v("2019-2-19")]),
                        _vm._v(" "),
                        _c("td", [_vm._v("2019-2-19")]),
                        _vm._v(" "),
                        _c("td", [_vm._v("2019-2-19")]),
                        _vm._v(" "),
                        _c("td", [_vm._v("2019-2-19")]),
                        _vm._v(" "),
                        _c("td", [_vm._v("2019-2-19")]),
                        _vm._v(" "),
                        _c("td", [_vm._v("2019-2-19")]),
                        _vm._v(" "),
                        _c("td", [_vm._v("2019-2-19")]),
                        _vm._v(" "),
                        _c("td", [_vm._v("2019-2-19")]),
                        _vm._v(" "),
                        _c("td", [_vm._v("2019-2-19")]),
                        _vm._v(" "),
                        _c("td", [_vm._v("2019-2-19")]),
                        _vm._v(" "),
                        _c("td", [_vm._v("2019-2-19")])
                      ]),
                      _vm._v(" "),
                      _c("tr", [
                        _c("th", [_vm._v("Status")]),
                        _vm._v(" "),
                        _c("td", { staticClass: "paid" }, [
                          _c("i", { staticClass: "fas fa-check" })
                        ]),
                        _vm._v(" "),
                        _c("td", { staticClass: "paid" }, [
                          _c("i", { staticClass: "fas fa-check" })
                        ]),
                        _vm._v(" "),
                        _c("td", { staticClass: "paid" }, [
                          _c("i", { staticClass: "fas fa-check" })
                        ]),
                        _vm._v(" "),
                        _c("td", { staticClass: "paid" }, [
                          _c("i", { staticClass: "fas fa-check" })
                        ]),
                        _vm._v(" "),
                        _c("td", { staticClass: "missed" }, [
                          _c("i", { staticClass: "fas fa-times" })
                        ]),
                        _vm._v(" "),
                        _c("td", { staticClass: "missed" }, [
                          _c("i", { staticClass: "fas fa-times" })
                        ]),
                        _vm._v(" "),
                        _c("td", { staticClass: "missed" }, [
                          _c("i", { staticClass: "fas fa-times" })
                        ]),
                        _vm._v(" "),
                        _c("td", { staticClass: "missed" }, [
                          _c("i", { staticClass: "fas fa-times" })
                        ]),
                        _vm._v(" "),
                        _c("td", { staticClass: "pending" }, [
                          _c("i", { staticClass: "fas fa-hourglass-start" })
                        ]),
                        _vm._v(" "),
                        _c("td", { staticClass: "pending" }, [
                          _c("i", { staticClass: "fas fa-hourglass-start" })
                        ]),
                        _vm._v(" "),
                        _c("td", { staticClass: "pending" }, [
                          _c("i", { staticClass: "fas fa-hourglass-start" })
                        ]),
                        _vm._v(" "),
                        _c("td", { staticClass: "pending" }, [
                          _c("i", { staticClass: "fas fa-hourglass-start" })
                        ])
                      ]),
                      _vm._v(" "),
                      _c("tr", [
                        _c("th", [_vm._v("Pay Date")]),
                        _vm._v(" "),
                        _c("td", [_vm._v("2019-02-18")]),
                        _vm._v(" "),
                        _c("td", [_vm._v("2019-02-18")]),
                        _vm._v(" "),
                        _c("td", [_vm._v("2019-02-18")]),
                        _vm._v(" "),
                        _c("td", [_vm._v("2019-02-18")]),
                        _vm._v(" "),
                        _c("td", [_vm._v("-")]),
                        _vm._v(" "),
                        _c("td", [_vm._v("-")]),
                        _vm._v(" "),
                        _c("td", [_vm._v("-")]),
                        _vm._v(" "),
                        _c("td", [_vm._v("-")]),
                        _vm._v(" "),
                        _c("td", [_vm._v("-")]),
                        _vm._v(" "),
                        _c("td", [_vm._v("-")]),
                        _vm._v(" "),
                        _c("td", [_vm._v("-")]),
                        _vm._v(" "),
                        _c("td", [_vm._v("-")])
                      ]),
                      _vm._v(" "),
                      _c("tr", [
                        _c("th", [_vm._v("Amount Paid (₦)")]),
                        _vm._v(" "),
                        _c("td", [_vm._v("4200.00")]),
                        _vm._v(" "),
                        _c("td", [_vm._v("4200.00")]),
                        _vm._v(" "),
                        _c("td", [_vm._v("4200.00")]),
                        _vm._v(" "),
                        _c("td", [_vm._v("4200.00")]),
                        _vm._v(" "),
                        _c("td", [_vm._v("-")]),
                        _vm._v(" "),
                        _c("td", [_vm._v("-")]),
                        _vm._v(" "),
                        _c("td", [_vm._v("-")]),
                        _vm._v(" "),
                        _c("td", [_vm._v("-")]),
                        _vm._v(" "),
                        _c("td", [_vm._v("-")]),
                        _vm._v(" "),
                        _c("td", [_vm._v("-")]),
                        _vm._v(" "),
                        _c("td", [_vm._v("-")]),
                        _vm._v(" "),
                        _c("td", [_vm._v("-")])
                      ]),
                      _vm._v(" "),
                      _c("tr", [
                        _c("th", [_vm._v("Summary (₦)")]),
                        _vm._v(" "),
                        _c("td", [_vm._v("Grand Total")]),
                        _vm._v(" "),
                        _c("th", { attrs: { colspan: "3" } }, [
                          _vm._v("4200.00")
                        ]),
                        _vm._v(" "),
                        _c("td", [_vm._v("Total Paid")]),
                        _vm._v(" "),
                        _c("th", { attrs: { colspan: "3" } }, [
                          _vm._v("4200.00")
                        ]),
                        _vm._v(" "),
                        _c("td", [_vm._v("Total Debt")]),
                        _vm._v(" "),
                        _c("th", { attrs: { colspan: "3" } }, [
                          _vm._v("4200.00")
                        ])
                      ])
                    ])
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "modal-footer" }, [
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
            ])
          ]
        )
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
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
              _c("div", { staticClass: "modal-header py-2" }, [
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
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "modal-body" }, [
                _c("div", { staticClass: "table-responsive" }, [
                  _c(
                    "table",
                    { staticClass: "table table-bordered table-striped" },
                    [
                      _c("thead", [
                        _c("tr", [
                          _c("th", [_vm._v("S/N")]),
                          _vm._v(" "),
                          _c("th", [_vm._v("Date")]),
                          _vm._v(" "),
                          _c("th", [_vm._v("Comment")])
                        ])
                      ]),
                      _vm._v(" "),
                      _c("tbody", [
                        _c("tr", [
                          _c("th", [_vm._v("1")]),
                          _vm._v(" "),
                          _c("td", [_vm._v("20/03/2018")]),
                          _vm._v(" "),
                          _c("td", [
                            _vm._v(
                              "This man...he is a debtor niccur. Yeah does it sound like a comment This\n                                    man...he is a debtor niccur. Yeah\n                                    does it sound like a comment This man...he is a debtor niccur. Yeah does it\n                                    sound like a commentThis man.\n                                "
                            )
                          ])
                        ]),
                        _vm._v(" "),
                        _c("tr", [
                          _c("th", [_vm._v("2")]),
                          _vm._v(" "),
                          _c("td", [_vm._v("20/03/2018")]),
                          _vm._v(" "),
                          _c("td", [
                            _vm._v(
                              "This man...he is a debtor niccur. Yeah does it sound like a comment"
                            )
                          ])
                        ]),
                        _vm._v(" "),
                        _c("tr", [
                          _c("th", [_vm._v("3")]),
                          _vm._v(" "),
                          _c("td", [_vm._v("20/03/2018")]),
                          _vm._v(" "),
                          _c("td", [
                            _vm._v(
                              "This man...he is a debtor niccur. Yeah does it sound like a comment"
                            )
                          ])
                        ])
                      ])
                    ]
                  )
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "modal-footer" }, [
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
            ])
          ]
        )
      ]
    )
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-426fb2d2", module.exports)
  }
}

/***/ }),

/***/ "./resources/assets/js/views/DVA/reminder/reminder.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"babel-preset-env\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"babel-plugin-syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/views/DVA/reminder/reminder.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-426fb2d2\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/views/DVA/reminder/reminder.vue")
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