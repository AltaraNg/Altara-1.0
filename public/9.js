webpackJsonp([9],{

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

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"babel-preset-env\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"babel-plugin-syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/DataViewer.vue":
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

var _vue = __webpack_require__("./node_modules/vue/dist/vue.common.js");

var _vue2 = _interopRequireDefault(_vue);

var _vuex = __webpack_require__("./node_modules/vuex/dist/vuex.esm.js");

var _log = __webpack_require__("./resources/assets/js/utilities/log.js");

var _flash = __webpack_require__("./resources/assets/js/utilities/flash.js");

var _flash2 = _interopRequireDefault(_flash);

var _sms = __webpack_require__("./resources/assets/js/utilities/sms.js");

var _api = __webpack_require__("./resources/assets/js/utilities/api.js");

var _AppNavigation = __webpack_require__("./resources/assets/js/components/AppNavigation.vue");

var _AppNavigation2 = _interopRequireDefault(_AppNavigation);

var _ApprovalStatusButton = __webpack_require__("./resources/assets/js/components/ApprovalStatusButton.vue");

var _ApprovalStatusButton2 = _interopRequireDefault(_ApprovalStatusButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {

    components: { ApprovalStatusButton: _ApprovalStatusButton2.default, AppNavigation: _AppNavigation2.default },

    data: function data() {
        return {
            /*data generic to data viewer starts here*/
            model: {},
            columns: {},
            query: {
                page: 1,
                column: 'id',
                direction: 'desc',
                per_page: 10,
                search_column: 'id',
                search_operator: 'greater_than',
                search_input: 0
            },
            operators: {
                equal: '=',
                not_equal: '<>',
                less_than: '<',
                greater_than: '>',
                less_than_or_equal_to: '<=',
                greater_than_or_equal_to: '>=',
                in: 'IN',
                like: 'LIKE'
            },
            /*data generic to data viewer stops here*/

            /*data peculiar to hrm portal data viewer starts here*/
            form: {},
            portal_access: [{ name: 'grant', value: 1 }, { name: 'deny', value: 0 }]
            /*data peculiar to hrm portal data viewer stops here*/
        };
    },
    created: function created() {
        this.$prepareStates();
        this.$prepareBranches();
        this.fetchIndexData();
        $(document).on('click', 'tr', function () {
            $('tr.current').removeClass('current');
            $(this).addClass('current');
        });
        this.addCustomerOptionsModalsToDom();
    },
    updated: function updated() {
        $('[data-toggle="tooltip"]').tooltip();
    },


    methods: _extends({
        /*methods exclusive to data viewer starts here*/

        next: function next() {
            if (this.model.next_page_url) {
                this.query.page++;
                this.fetchIndexData();
            }
        },
        prev: function prev() {
            if (this.model.prev_page_url) {
                this.query.page--;
                this.fetchIndexData();
            }
        },
        toggleOrder: function toggleOrder(column) {
            if (column === this.query.column) this.query.direction = this.query.direction === 'desc' ? 'asc' : 'desc';else {
                this.query.column = column;
                this.query.direcntion = 'asc';
            }
            this.fetchIndexData();
        },
        fetchIndexData: function fetchIndexData() {
            var _this = this;

            this.$LIPS(true);
            $('.modal').modal('hide');
            (0, _api.get)('' + this.$route.meta.source + ('?page=' + this.query.page) + ('&column=' + this.query.column) + ('&per_page=' + this.query.per_page) + ('&direction=' + this.query.direction) + ('&search_input=' + this.query.search_input) + ('&search_column=' + this.query.search_column) + ('&search_operator=' + this.query.search_operator)).then(function (res) {
                var data = res.data.model.data;
                /*the state id for the branch fetched from the db is a number
                * hence the code below is used to get the state name
                * corresponding to the state id and display it
                * instead of showing state id as a number*/
                if (data.length) {
                    data.forEach(function (curr) {
                        if (data[0].state_id) curr.state_id = _this.$store.getters.getStates.find(function (obj) {
                            return obj.id === curr.state_id;
                        }).name;
                        if (data[0].branch_id) curr.branch_id = _this.$store.getters.getBranches.find(function (obj) {
                            return obj.id === curr.branch_id;
                        }).name;
                        if (_this.isModel('customer')) curr.verification = _this.$getCustomerApprovalStatus(curr.verification);
                    });
                }
                _vue2.default.set(_this.$data, 'model', res.data.model);
                _vue2.default.set(_this.$data, 'columns', res.data.columns);
                _this.$scrollToTop();
                _this.$LIPS(false);
            });
        },

        /*methods exclusive to data viewer stop here*/

        /*methods exclusive to hrm data viewer starts here*/
        update: function update(emp, mod) {
            this.form = emp;
            $('#' + mod).modal('toggle');
        },
        resetPassword: function resetPassword() {
            var _this2 = this;

            if (this.$network()) {
                this.$LIPS(true);
                (0, _api.get)('/api/reset-password/' + this.form.id).then(function (_ref) {
                    var data = _ref.data;
                    var psw = data.password,
                        _form = _this2.form,
                        id = _form.staff_id,
                        tel = _form.phone_number,
                        body = 'Password reset successful! if your did not request for a new password kindly' + (' report back immediately, your staff ID is ' + id + ', new password: ' + psw);
                    (0, _log.log)('resetUserPassword', id);
                    new _sms.Message(body, tel, false).send(function (r) {
                        return r.status === 200 && _this2.done();
                    });
                    _flash2.default.setSuccess('Password reset successful!');
                });
            } else this.$networkErr();
        },
        myLog: function myLog(id) {
            var _this3 = this;

            if (this.$network()) {
                this.$LIPS(true);
                (0, _api.byMethod)('PUT', '/api/user/' + id, this.form).then(function (_ref2) {
                    var data = _ref2.data;

                    (0, _log.log)('PortalAccessUpdated', String(data.staff_id));
                    _flash2.default.setSuccess('Portal access updated', 20000);
                }).catch(function (_ref3) {
                    var r = _ref3.response;
                    var message = r.data.message;

                    _flash2.default.setError(message ? message : 'Error updating status. Try again later!', 10000);
                }).finally(function () {
                    return _this3.done();
                });
            } else this.$networkErr();
        },
        done: function done() {
            this.$scrollToTop();
            this.$LIPS(false);
            $('.modal').modal('hide');
        },

        /*methods exclusive to hrm data viewer stops here*/

        isModel: function isModel(m) {
            return this.$route.meta.appModel === m;
        }
    }, (0, _vuex.mapActions)('ModalAccess', ['addCustomerOptionsModalsToDom', 'removeCustomerOptionsModalsFromDom'])),

    destroyed: function destroyed() {
        this.removeCustomerOptionsModalsFromDom();
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

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-fa04345a\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/DataViewer.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("transition", { attrs: { name: "fade" } }, [
    _c(
      "div",
      { class: _vm.isModel("customer") && "px-md-4 px-2" },
      [
        _vm.isModel("customer")
          ? _c("app-navigation", {
              attrs: {
                forward: { path: _vm.$routerHistory.next().path },
                previous: { path: _vm.$routerHistory.previous().path },
                pageTitle: _vm._f("capitalize")(
                  _vm.$route.meta.appModel + " List"
                ),
                pageTitleSmall: _vm._f("capitalize")(
                  _vm.$route.meta.appModel + ". List"
                )
              }
            })
          : _vm._e(),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "pt-md-3 pt-2", attrs: { id: "employeeEdit" } },
          [
            _c("div", { staticClass: "card" }, [
              _c("div", { staticClass: "px-5 py-4" }, [
                _c(
                  "div",
                  { staticClass: "px-3 clearfix" },
                  [
                    _c("h5", { staticClass: "h5-custom float-left m-0" }, [
                      _vm._v(
                        _vm._s(_vm._f("capitalize")(_vm.$route.meta.appModel)) +
                          " Management"
                      )
                    ]),
                    _vm._v(" "),
                    _c(
                      "router-link",
                      {
                        staticClass:
                          "float-right btn btn-primary bg-default m-0",
                        attrs: { to: _vm.$route.meta.new + "/create" }
                      },
                      [
                        _vm._v(
                          "\n                            Add " +
                            _vm._s(_vm.$route.meta.appModel) +
                            "!\n                        "
                        )
                      ]
                    )
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              _c("hr", { staticClass: "m-0" }),
              _vm._v(" "),
              _c("div", [
                _c("div", { staticClass: "card-body p-4 p-md-5" }, [
                  _c("div", { staticClass: "clearfix w-100" }, [
                    _c(
                      "div",
                      {
                        staticClass:
                          "form-group col-md-2 col-sm-6 px-md-3 px-1 float-left"
                      },
                      [
                        _c("label", [_vm._v("Search Column")]),
                        _vm._v(" "),
                        _c(
                          "select",
                          {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.query.search_column,
                                expression: "query.search_column"
                              }
                            ],
                            staticClass: "custom-select w-100",
                            on: {
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
                                  _vm.query,
                                  "search_column",
                                  $event.target.multiple
                                    ? $$selectedVal
                                    : $$selectedVal[0]
                                )
                              }
                            }
                          },
                          _vm._l(_vm.columns, function(column) {
                            return _c(
                              "option",
                              { domProps: { value: column } },
                              [
                                _vm._v(
                                  _vm._s(_vm._f("capitalize")(column)) +
                                    "\n                                    "
                                )
                              ]
                            )
                          }),
                          0
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass:
                          "form-group col-md-2 col-sm-6 px-md-3 px-1 float-left"
                      },
                      [
                        _c("label", [_vm._v("Search Operator")]),
                        _vm._v(" "),
                        _c(
                          "select",
                          {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.query.search_operator,
                                expression: "query.search_operator"
                              }
                            ],
                            staticClass: "custom-select w-100",
                            on: {
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
                                  _vm.query,
                                  "search_operator",
                                  $event.target.multiple
                                    ? $$selectedVal
                                    : $$selectedVal[0]
                                )
                              }
                            }
                          },
                          _vm._l(_vm.operators, function(value, key) {
                            return _c("option", { domProps: { value: key } }, [
                              _vm._v(_vm._s(value))
                            ])
                          }),
                          0
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass:
                          "form-group col-md-6 col-sm-6 px-md-3 px-1 float-left"
                      },
                      [
                        _c("label", [_vm._v("Search Input")]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.query.search_input,
                              expression: "query.search_input"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: { placeholder: "search...", type: "text" },
                          domProps: { value: _vm.query.search_input },
                          on: {
                            keyup: function($event) {
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
                              return _vm.fetchIndexData()
                            },
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.query,
                                "search_input",
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
                          "form-group col-md-2 col-sm-6 px-md-3 px-1 pt-md-2 pt-0 float-left"
                      },
                      [
                        _c(
                          "button",
                          {
                            staticClass:
                              "btn btn-block bg-default mb-0 mt-3 mt-md-4",
                            on: {
                              click: function($event) {
                                return _vm.fetchIndexData()
                              }
                            }
                          },
                          [_vm._v("Filter\n                                ")]
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "px-0 px-md-3 mt-3 table-responsive" },
                    [
                      _c(
                        "table",
                        { staticClass: "table m-0 table-bordered table-hover" },
                        [
                          _c("thead", { staticClass: "thead-light" }, [
                            _c(
                              "tr",
                              [
                                _vm._l(_vm.columns, function(column) {
                                  return _c(
                                    "th",
                                    {
                                      attrs: { scope: "col" },
                                      on: {
                                        click: function($event) {
                                          return _vm.toggleOrder(column)
                                        }
                                      }
                                    },
                                    [
                                      _c("span", [
                                        _vm._v(
                                          _vm._s(_vm._f("capitalize")(column))
                                        )
                                      ]),
                                      _vm._v(" "),
                                      column === _vm.query.column
                                        ? _c(
                                            "span",
                                            { staticClass: "dv-table-column" },
                                            [
                                              _vm.query.direction === "desc"
                                                ? _c("span", [_vm._v("↑")])
                                                : _c("span", [_vm._v("↓")])
                                            ]
                                          )
                                        : _vm._e()
                                    ]
                                  )
                                }),
                                _vm._v(" "),
                                _c("th", { attrs: { scope: "col" } }, [
                                  _c("span", [_vm._v("Action")])
                                ])
                              ],
                              2
                            )
                          ]),
                          _vm._v(" "),
                          _c(
                            "tbody",
                            _vm._l(_vm.model.data, function(model) {
                              return _c(
                                "tr",
                                [
                                  _vm._l(model, function(value, key) {
                                    return _c(
                                      "td",
                                      [
                                        !["verification"].includes(key)
                                          ? _c("span", [_vm._v(_vm._s(value))])
                                          : _c("ApprovalStatusButton", {
                                              key: model.id,
                                              attrs: {
                                                size: "small",
                                                customer: model,
                                                link:
                                                  "verification?id=" + model.id
                                              }
                                            })
                                      ],
                                      1
                                    )
                                  }),
                                  _vm._v(" "),
                                  _vm.isModel("user")
                                    ? _c(
                                        "td",
                                        [
                                          _c(
                                            "router-link",
                                            {
                                              staticClass:
                                                "text-center mx-2 btn btn-dark btn-icon btn-sm float-left btn-round",
                                              attrs: {
                                                to:
                                                  "employee/" +
                                                  model.id +
                                                  "/edit",
                                                "data-placement": "top",
                                                "data-toggle": "tooltip",
                                                title: "Edit Employee Detail"
                                              }
                                            },
                                            [
                                              _c("i", {
                                                staticClass: "fas fa-user-edit"
                                              })
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "button",
                                            {
                                              staticClass:
                                                "text-center mr-2 btn btn-icon btn-sm float-left btn-round",
                                              class: {
                                                "btn-success":
                                                  model.portal_access,
                                                "btn-danger": !model.portal_access
                                              },
                                              attrs: {
                                                "data-placement": "top",
                                                "data-toggle": "tooltip",
                                                title:
                                                  "Edit Employee Portal Access"
                                              },
                                              on: {
                                                click: function($event) {
                                                  return _vm.update(
                                                    model,
                                                    "editPortalAccess"
                                                  )
                                                }
                                              }
                                            },
                                            [
                                              model.portal_access
                                                ? _c("i", {
                                                    staticClass:
                                                      "fas fa-lock-open"
                                                  })
                                                : _c("i", {
                                                    staticClass: "fas fa-lock"
                                                  })
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "button",
                                            {
                                              staticClass:
                                                "text-center mr-2 btn btn-warning btn-icon btn-sm float-left btn-round",
                                              attrs: {
                                                "data-placement": "top",
                                                "data-toggle": "tooltip",
                                                title: "Reset Employee Password"
                                              },
                                              on: {
                                                click: function($event) {
                                                  return _vm.update(
                                                    model,
                                                    "editPassword"
                                                  )
                                                }
                                              }
                                            },
                                            [
                                              _c("i", {
                                                staticClass: "fas fa-key"
                                              })
                                            ]
                                          )
                                        ],
                                        1
                                      )
                                    : _vm._e(),
                                  _vm._v(" "),
                                  _vm.isModel("branch") ||
                                  _vm.isModel("product") ||
                                  _vm.isModel("brand") ||
                                  _vm.isModel("category") ||
                                  _vm.isModel("supplier")
                                    ? _c("td", [
                                        _c(
                                          "button",
                                          {
                                            staticClass:
                                              "text-center mx-2 btn btn-success btn-icon btn-sm float-left btn-round",
                                            attrs: {
                                              "data-placement": "top",
                                              "data-toggle": "tooltip",
                                              title: "update details"
                                            },
                                            on: {
                                              click: function($event) {
                                                return _vm.$router.push(
                                                  _vm.$route.meta.new +
                                                    "/" +
                                                    model.id +
                                                    "/edit"
                                                )
                                              }
                                            }
                                          },
                                          [
                                            _c("i", {
                                              staticClass: "fas fa-cog"
                                            })
                                          ]
                                        )
                                      ])
                                    : _vm._e()
                                ],
                                2
                              )
                            }),
                            0
                          )
                        ]
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "nav",
                    {
                      staticClass: "clearfix pt-5",
                      attrs: { "aria-label": "Page navigation example" }
                    },
                    [
                      _c(
                        "span",
                        {
                          staticClass:
                            "float-left col-md-6 col-12 px-0 mb-5 mb-md-0"
                        },
                        [
                          _vm._v(
                            "\n                                Displaying: " +
                              _vm._s(_vm.model.from) +
                              " - " +
                              _vm._s(_vm.model.to) +
                              " of " +
                              _vm._s(_vm.model.total) +
                              " " +
                              _vm._s(
                                _vm._f("capitalize")(_vm.$route.meta.appModel)
                              ) +
                              " (s)\n                            "
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "span",
                        {
                          staticClass:
                            "justify-content-end float-right col-md-6 col-12 px-0 mb-5 mb-md-0"
                        },
                        [
                          _c(
                            "ul",
                            { staticClass: "pagination m-0 float-right" },
                            [
                              _c("li", { staticClass: "page-item" }, [
                                _c(
                                  "a",
                                  {
                                    staticClass: "page-link",
                                    on: {
                                      click: function($event) {
                                        return _vm.prev()
                                      }
                                    }
                                  },
                                  [
                                    _c("i", {
                                      staticClass: "fas fa-arrow-circle-left"
                                    })
                                  ]
                                )
                              ]),
                              _vm._v(" "),
                              _c("li", { staticClass: "page-item" }, [
                                _c("span", { staticClass: "page-link" }, [
                                  _vm._v(
                                    "Current Page: " +
                                      _vm._s(_vm.model.current_page)
                                  )
                                ])
                              ]),
                              _vm._v(" "),
                              _c("li", { staticClass: "page-item" }, [
                                _c(
                                  "a",
                                  {
                                    staticClass: "page-link",
                                    on: {
                                      click: function($event) {
                                        return _vm.next()
                                      }
                                    }
                                  },
                                  [
                                    _c("i", {
                                      staticClass: "fas fa-arrow-circle-right"
                                    })
                                  ]
                                )
                              ])
                            ]
                          ),
                          _vm._v(" "),
                          _c("span", { staticClass: "float-left" }, [
                            _c(
                              "span",
                              { staticClass: "py-2 pr-3 float-left" },
                              [_vm._v("Rows Per Page ")]
                            ),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.query.per_page,
                                  expression: "query.per_page"
                                }
                              ],
                              staticClass: "form-control w-25",
                              attrs: { placeholder: "search...", type: "text" },
                              domProps: { value: _vm.query.per_page },
                              on: {
                                keyup: function($event) {
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
                                  return _vm.fetchIndexData()
                                },
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.query,
                                    "per_page",
                                    $event.target.value
                                  )
                                }
                              }
                            })
                          ])
                        ]
                      )
                    ]
                  )
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "modal fade",
                    attrs: { id: "editPortalAccess" }
                  },
                  [
                    _c(
                      "div",
                      {
                        staticClass: "modal-dialog",
                        attrs: { role: "document" }
                      },
                      [
                        _c("div", { staticClass: "modal-content" }, [
                          _c("div", { staticClass: "modal-header py-2" }, [
                            _c("h6", { staticClass: "modal-title py-1" }, [
                              _vm._v("Edit Employee Portal Access")
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
                          _c("form", [
                            _c("div", { staticClass: "modal-body" }, [
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "form-group col-12 float-left mt-0 mb-2"
                                },
                                [
                                  _c(
                                    "span",
                                    {
                                      staticClass:
                                        "mb-2 w-100 float-left pl-1 text-center"
                                    },
                                    [
                                      _vm._v(
                                        "\n                                               Please Verify you selected the right access before clicking "
                                      ),
                                      _c("br"),
                                      _vm._v(" "),
                                      _c("strong", [_vm._v("Save Changes ")]),
                                      _vm._v(
                                        "!\n                                            "
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _vm._l(_vm.portal_access, function(ref) {
                                    var name = ref.name
                                    var value = ref.value
                                    return _c(
                                      "div",
                                      {
                                        staticClass:
                                          "radio p-0 col-6 float-left text-center"
                                      },
                                      [
                                        _c("input", {
                                          directives: [
                                            {
                                              name: "model",
                                              rawName: "v-model",
                                              value: _vm.form.portal_access,
                                              expression: "form.portal_access"
                                            }
                                          ],
                                          attrs: {
                                            id: name,
                                            name: "access",
                                            type: "radio"
                                          },
                                          domProps: {
                                            value: value,
                                            checked: _vm._q(
                                              _vm.form.portal_access,
                                              value
                                            )
                                          },
                                          on: {
                                            change: function($event) {
                                              return _vm.$set(
                                                _vm.form,
                                                "portal_access",
                                                value
                                              )
                                            }
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c("label", { attrs: { for: name } }, [
                                          _vm._v(
                                            _vm._s(_vm._f("capitalize")(name)) +
                                              " Access"
                                          )
                                        ])
                                      ]
                                    )
                                  })
                                ],
                                2
                              )
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
                                    "\n                                            cancel\n                                        "
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
                                    type: "button"
                                  },
                                  on: {
                                    click: function($event) {
                                      return _vm.myLog(_vm.form.id)
                                    }
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n                                            Save changes\n                                            "
                                  ),
                                  _c("i", {
                                    staticClass: "far fa-paper-plane ml-1"
                                  })
                                ]
                              )
                            ])
                          ])
                        ])
                      ]
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "modal fade", attrs: { id: "editPassword" } },
                  [
                    _c(
                      "div",
                      {
                        staticClass: "modal-dialog",
                        attrs: { role: "document" }
                      },
                      [
                        _c("div", { staticClass: "modal-content" }, [
                          _c("div", { staticClass: "modal-header py-2" }, [
                            _c("h6", { staticClass: "modal-title py-1" }, [
                              _vm._v("Reset Employee Password")
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
                          _c("form", [
                            _c("div", { staticClass: "modal-body" }, [
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "form-group col-12 float-left mt-2 mb-4 "
                                },
                                [
                                  _c("span", [
                                    _vm._v(
                                      "A new password will be sent to the employee via "
                                    ),
                                    _c("strong", [_vm._v("sms")]),
                                    _vm._v(
                                      " on the\n                                                  telephone He/She "
                                    ),
                                    _c("strong", [
                                      _vm._v("used for registration")
                                    ]),
                                    _vm._v(
                                      " on this portal.\n                                                "
                                    ),
                                    _c("br"),
                                    _c("br"),
                                    _vm._v(
                                      "Please Kindly verify that the phone to receive the new password is on and active!\n                                            "
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c("br"),
                                  _c("br"),
                                  _vm._v(" "),
                                  _c("u", [
                                    _c("em", [
                                      _vm._v(
                                        "click the continue and reset password to finish this\n                                                task!"
                                      )
                                    ])
                                  ])
                                ]
                              )
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
                                    "\n                                            cancel\n                                        "
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
                                    type: "button"
                                  },
                                  on: { click: _vm.resetPassword }
                                },
                                [
                                  _vm._v(
                                    "\n                                            continue and reset password "
                                  ),
                                  _c("i", {
                                    staticClass: "far fa-paper-plane ml-1"
                                  })
                                ]
                              )
                            ])
                          ])
                        ])
                      ]
                    )
                  ]
                )
              ])
            ])
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
    require("vue-hot-reload-api")      .rerender("data-v-fa04345a", module.exports)
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

/***/ "./resources/assets/js/components/DataViewer.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"babel-preset-env\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"babel-plugin-syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/DataViewer.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-fa04345a\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/DataViewer.vue")
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
Component.options.__file = "resources/assets/js/components/DataViewer.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-fa04345a", Component.options)
  } else {
    hotAPI.reload("data-v-fa04345a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});