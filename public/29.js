<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
webpackJsonp([29],{

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"babel-preset-env\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"babel-plugin-syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/views/DVA/messaging/message.vue":
=======
webpackJsonp([29],{

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"babel-preset-env\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"babel-plugin-syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/AppNavigation.vue":
>>>>>>> ed6e59048439b31995f360ff7e04db059d027dbb
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
<<<<<<< HEAD

var _sms = __webpack_require__("./resources/assets/js/utilities/sms.js");

var _flash = __webpack_require__("./resources/assets/js/utilities/flash.js");

var _flash2 = _interopRequireDefault(_flash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
//
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
    /*router navigation is used in the entire app for in app navigation (basically previous and next)
    * the : pageTitle is the title of the page where this navigation component is used
    * the : pageTitleSmall is the minimized title for the small screen view
    * the previous is the this.$routerHistory.previous().path sent from the parent component
    * the forward is the this.$routerHistory.next().path sent from the parent component*/
    props: ['pageTitle', 'pageTitleSmall', 'previous', 'forward']
};

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"babel-preset-env\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"babel-plugin-syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/views/DSA/index.vue":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _AppNavigation = __webpack_require__("./resources/assets/js/components/AppNavigation.vue");

var _AppNavigation2 = _interopRequireDefault(_AppNavigation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    components: { AppNavigation: _AppNavigation2.default }
}; //
>>>>>>> ed6e59048439b31995f360ff7e04db059d027dbb
//
//
//
//
//
//
//

<<<<<<< HEAD
exports.default = {
    data: function data() {
        return {
            contacts: '',
            message: '',
            form: {}
        };
    },

    methods: {
        sendMessage: function sendMessage() {
            var _this = this;

            this.$validator.validateAll().then(function (result) {
                if (result) {
                    if (_this.$network()) {
                        _this.$LIPS(true);
                        new _sms.Message(_this.message, _this.contacts).send(function (r) {
                            return r.status === 200 && _this.done();
                        });
                    } else _this.$networkErr();
                } else _this.$networkErr('form');
            });
        },
        done: function done() {
            this.$scrollToTop();
            this.$LIPS(false);
            _flash2.default.setSuccess('Messages sent!');
            this.resetData();
        },
        resetData: function resetData() {
            this.contacts = '';
            this.message = '';
            for (var key in this.form) {
                this.form[key] = null;
            }
        }
    },
    created: function created() {
        this.resetData();
    }
};

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-7f0e0036\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/views/DVA/messaging/message.vue":
=======
/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-066398eb\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/views/DSA/index.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "px-md-4 px-2" },
    [
      _c("app-navigation", {
        attrs: {
          pageTitle: "Direct Sales Agents",
          pageTitleSmall: "DSA",
          previous: { path: _vm.$routerHistory.previous().path },
          forward: { path: _vm.$routerHistory.next().path }
        }
      }),
      _vm._v(" "),
      _c("router-view")
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
    require("vue-hot-reload-api")      .rerender("data-v-066398eb", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-2f542aae\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/AppNavigation.vue":
>>>>>>> ed6e59048439b31995f360ff7e04db059d027dbb
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
<<<<<<< HEAD
  return _c("transition", { attrs: { name: "fade" } }, [
    _c(
      "div",
      { staticClass: "pt-md-3 pt-2", attrs: { id: "employeeRegister" } },
      [
        _c("div", { staticClass: "card" }, [
          _c(
            "ul",
            { staticClass: "nav nav-tabs bg-default justify-content-center" },
            [_c("h6", [_vm._v("Messaging")])]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "card-body p-4 " }, [
            _c(
              "form",
              {
                staticClass: "clearfix",
                attrs: { id: "messaging" },
                on: {
                  submit: function($event) {
                    $event.preventDefault()
                    return _vm.sendMessage($event)
                  }
                }
              },
              [
                _c(
                  "div",
                  {
                    staticClass: "form-group col-md-12 px-md-3 px-1 float-left"
                  },
                  [
                    _c("label", [_vm._v("Phone Numbers")]),
                    _vm._v(" "),
                    _c("textarea", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.contacts,
                          expression: "contacts"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required",
                          expression: "'required'"
                        }
                      ],
                      staticClass: "form-control col-sm-12",
                      attrs: {
                        name: "contacts",
                        placeholder:
                          "Kindly add the number and separate each with a semi-colon ';'",
                        rows: "3"
                      },
                      domProps: { value: _vm.contacts },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.contacts = $event.target.value
                        }
                      }
                    }),
                    _vm._v(" "),
                    _vm.errors.first("contacts")
                      ? _c("small", [
                          _vm._v(_vm._s(_vm.errors.first("contacts")))
                        ])
                      : _vm._e()
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "form-group col-md-12 px-md-3 px-1 float-left"
                  },
                  [
                    _c("label", [_vm._v("Message Body")]),
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
                          value: _vm.message,
                          expression: "message"
                        }
                      ],
                      staticClass: "form-control col-sm-12",
                      attrs: {
                        name: "message",
                        placeholder: "the content of the message goes here",
                        rows: "3"
                      },
                      domProps: { value: _vm.message },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.message = $event.target.value
                        }
                      }
                    }),
                    _vm._v(" "),
                    _vm.errors.first("message")
                      ? _c("small", [
                          _vm._v(_vm._s(_vm.errors.first("message")))
                        ])
                      : _vm._e()
                  ]
                ),
                _vm._v(" "),
                _c("hr", { staticClass: "style-two" }),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass:
                      "col-sm-12 ml-auto mr-auto mt-md-2 mt-0 px-md-3 px-1 mb-3 float-right"
                  },
                  [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-block btn-lg bg-default",
                        attrs: { disabled: _vm.$isProcessing, type: "submit" }
                      },
                      [
                        _vm._v("\n                            Send messages "),
                        _c("i", { staticClass: "far fa-paper-plane ml-1" })
                      ]
                    )
                  ]
                )
              ]
            )
          ])
        ])
      ]
    )
  ])
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
>>>>>>> ed6e59048439b31995f360ff7e04db059d027dbb
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
<<<<<<< HEAD
    require("vue-hot-reload-api")      .rerender("data-v-7f0e0036", module.exports)
=======
    require("vue-hot-reload-api")      .rerender("data-v-2f542aae", module.exports)
>>>>>>> ed6e59048439b31995f360ff7e04db059d027dbb
  }
}

/***/ }),

<<<<<<< HEAD
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

/***/ "./resources/assets/js/views/DVA/messaging/message.vue":
=======
/***/ "./resources/assets/js/components/AppNavigation.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"babel-preset-env\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"babel-plugin-syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/AppNavigation.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-2f542aae\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/AppNavigation.vue")
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
Component.options.__file = "resources\\assets\\js\\components\\AppNavigation.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2f542aae", Component.options)
  } else {
    hotAPI.reload("data-v-2f542aae", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/js/views/DSA/index.vue":
>>>>>>> ed6e59048439b31995f360ff7e04db059d027dbb
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
<<<<<<< HEAD
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"babel-preset-env\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"babel-plugin-syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/views/DVA/messaging/message.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-7f0e0036\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/views/DVA/messaging/message.vue")
=======
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"babel-preset-env\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"babel-plugin-syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/views/DSA/index.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-066398eb\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/views/DSA/index.vue")
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
Component.options.__file = "resources\\assets\\js\\views\\DVA\\messaging\\message.vue"
=======
Component.options.__file = "resources\\assets\\js\\views\\DSA\\index.vue"
>>>>>>> ed6e59048439b31995f360ff7e04db059d027dbb

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
<<<<<<< HEAD
    hotAPI.createRecord("data-v-7f0e0036", Component.options)
  } else {
    hotAPI.reload("data-v-7f0e0036", Component.options)
=======
    hotAPI.createRecord("data-v-066398eb", Component.options)
  } else {
    hotAPI.reload("data-v-066398eb", Component.options)
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
webpackJsonp([29],{"+1DB":function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e,r=s("1gIg"),l=(e=r)&&e.__esModule?e:{default:e};a.default={components:{AppNavigation:l.default}}},"1gIg":function(t,a,s){var e=s("VU/8")(s("wBhk"),s("9sZT"),!1,null,null,null);t.exports=e.exports},"9sZT":function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("h4",{staticClass:"mx-md-3 mx-0 py-0 my-0 text-center clearfix",attrs:{id:"app-navigation"}},[t.$routerHistory.hasPrevious()?s("router-link",{staticClass:"text-secondary float-left ml-1 pl-2 ml-sm-4 pl-sm-3",attrs:{to:t.previous,id:"back"}},[s("span",{staticClass:"mr-5 float-left"},[s("i",{staticClass:"far fa-arrow-alt-circle-left float-left"}),t._v(" "),s("small",{staticClass:"float-left ml-2 d-none d-sm-block"},[t._v("Back")])])]):t._e(),t._v(" "),s("strong",{staticClass:"mx-auto w-100 float-left",attrs:{"data-title":"title"}},[s("span",{staticClass:"d-none d-sm-block"},[t._v(t._s(t.pageTitle))]),t._v(" "),s("span",{staticClass:"d-block d-sm-none"},[t._v(t._s(t.pageTitleSmall))])]),t._v(" "),t.$routerHistory.hasForward()?s("router-link",{staticClass:"text-secondary float-right mr-1 pr-2 mr-sm-4 pr-sm-3",attrs:{to:t.forward,id:"forward"}},[s("span",{staticClass:"ml-5 float-right"},[s("i",{staticClass:"far fa-arrow-alt-circle-right float-right"}),t._v(" "),s("small",{staticClass:"float-right mr-2 d-none d-sm-block"},[t._v("Forward")])])]):t._e()],1)},staticRenderFns:[]}},HCpP:function(t,a){t.exports={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"px-md-4 px-2"},[a("app-navigation",{attrs:{pageTitle:"Compliance Agents",pageTitleSmall:"CAG",previous:{path:this.$routerHistory.previous().path},forward:{path:this.$routerHistory.next().path}}}),this._v(" "),a("router-view")],1)},staticRenderFns:[]}},MVkH:function(t,a,s){var e=s("VU/8")(s("+1DB"),s("HCpP"),!1,null,null,null);t.exports=e.exports},wBhk:function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default={props:["pageTitle","pageTitleSmall","previous","forward"]}}});
>>>>>>> 896a1818948e76f90b06f3a42ed60dfef98fa861
=======
webpackJsonp([29],{"1gIg":function(t,a,s){var e=s("VU/8")(s("wBhk"),s("9sZT"),!1,null,null,null);t.exports=e.exports},"9sZT":function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("h4",{staticClass:"mx-md-3 mx-0 py-0 my-0 text-center clearfix",attrs:{id:"app-navigation"}},[t.$routerHistory.hasPrevious()?s("router-link",{staticClass:"text-secondary float-left ml-1 pl-2 ml-sm-4 pl-sm-3",attrs:{to:t.previous,id:"back"}},[s("span",{staticClass:"mr-5 float-left"},[s("i",{staticClass:"far fa-arrow-alt-circle-left float-left"}),t._v(" "),s("small",{staticClass:"float-left ml-2 d-none d-sm-block"},[t._v("Back")])])]):t._e(),t._v(" "),s("strong",{staticClass:"mx-auto w-100 float-left",attrs:{"data-title":"title"}},[s("span",{staticClass:"d-none d-sm-block"},[t._v(t._s(t.pageTitle))]),t._v(" "),s("span",{staticClass:"d-block d-sm-none"},[t._v(t._s(t.pageTitleSmall))])]),t._v(" "),t.$routerHistory.hasForward()?s("router-link",{staticClass:"text-secondary float-right mr-1 pr-2 mr-sm-4 pr-sm-3",attrs:{to:t.forward,id:"forward"}},[s("span",{staticClass:"ml-5 float-right"},[s("i",{staticClass:"far fa-arrow-alt-circle-right float-right"}),t._v(" "),s("small",{staticClass:"float-right mr-2 d-none d-sm-block"},[t._v("Forward")])])]):t._e()],1)},staticRenderFns:[]}},MheA:function(t,a){t.exports={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"px-md-4 px-2"},[a("app-navigation",{attrs:{pageTitle:"Direct Sales Agents",pageTitleSmall:"DSA",previous:{path:this.$routerHistory.previous().path},forward:{path:this.$routerHistory.next().path}}}),this._v(" "),a("router-view")],1)},staticRenderFns:[]}},bzLm:function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e,r=s("1gIg"),l=(e=r)&&e.__esModule?e:{default:e};a.default={components:{AppNavigation:l.default}}},oPon:function(t,a,s){var e=s("VU/8")(s("bzLm"),s("MheA"),!1,null,null,null);t.exports=e.exports},wBhk:function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default={props:["pageTitle","pageTitleSmall","previous","forward"]}}});
>>>>>>> 976efb13563114c356a829a8b2f4c56625bbae52
=======
});
>>>>>>> ed6e59048439b31995f360ff7e04db059d027dbb
