webpackJsonp([40],{

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"babel-preset-env\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"babel-plugin-syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/views/DVA/messaging/message.vue":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _sms = __webpack_require__("./resources/assets/js/utilities/sms.js");

var _sms2 = _interopRequireDefault(_sms);

var _api = __webpack_require__("./resources/assets/js/utilities/api.js");

var _flash = __webpack_require__("./resources/assets/js/utilities/flash.js");

var _flash2 = _interopRequireDefault(_flash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
                        /*let phone = this.contacts
                            .split(",").filter(e => /\S/.test(e))
                            .map(contact => '234' + contact.trim().substr(1))
                            .join(',');*/
                        //SMS.dvaMessage({message: this.message, phone}, r => r.status === 200 && this.done(phone));
                        var message = new _sms.Message(null, _this.message, _this.contacts);
                        _sms2.default.sendMessage(message, function (r) {
                            return r.status === 200 && _this.done(message);
                        });
                    } else _this.$networkErr();
                } else _this.$networkErr('form');
            });
        },
        done: function done(message) {
            var _this2 = this;

            this.$scrollToTop();
            this.$LIPS(false);
            _flash2.default.setSuccess('Messages sent!');
            (0, _api.post)('/api/message', message).then(function () {
                return _this2.resetData();
            });
        },

        /*done(contacts) {
            this.$scrollToTop();
            this.$LIPS(false);
            Flash.setSuccess('Messages sent!');
            this.form = {
                contacts,
                contact_count: contacts.split(",").length,
                message: this.message,
                pages: Math.ceil(this.message.length / 160),
            };
            post('/api/message', this.form).then(() => this.resetData());
        },*/
        resetData: function resetData() {
            this.contacts = null;
            this.message = null;
            for (var key in this.form) {
                this.form[key] = null;
            }
        }
    },
    created: function created() {
        this.resetData();
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

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7f0e0036\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/views/DVA/messaging/message.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n#messaging textarea[data-v-7f0e0036] {\n  font: 500 1.5rem \"Raleway\", sans-serif !important;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-7f0e0036\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/views/DVA/messaging/message.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
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
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-7f0e0036", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7f0e0036\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/views/DVA/messaging/message.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7f0e0036\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/views/DVA/messaging/message.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("0ce36a93", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7f0e0036\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./message.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7f0e0036\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./message.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

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
    function Message(userId, message, contacts) {
        _classCallCheck(this, Message);

        this.user_id = userId;
        this.message = message;
        this.contacts = contacts.constructor === String ? contacts.split(",").filter(function (e) {
            return (/\S/.test(e)
            );
        }).map(function (contact) {
            return '234' + contact.trim().substr(1);
        }).join(',') : contacts;
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


    /*dvaMessage(details, callback) {
        //this.message = details.message;
        //this.sendWithCallback(details, callback);
        this.sendWithCallbackMain(details, callback);
    },*/

    /*sendFirstReminder(details, callback) {
        this.message = details.message;
        return this.sendWithCallback(details, callback);
    },*/

    sendWithCallback: function sendWithCallback(_ref, callback) {
        var phone = _ref.phone;

        (0, _api.get)("/api/message/create?to=" + phone + "&message=" + this.message).then(function (res) {
            res.status === 200 && console.log("sms sent successfully");
            return !!callback && callback(res);
        }).catch(function (err) {
            return !!callback && callback(err);
        });
    },
    sendMessage: function sendMessage(_ref2, callback) {
        var contacts = _ref2.contacts,
            message = _ref2.message;

        (0, _api.get)("/api/message/create?to=" + contacts + "&message=" + message).then(function (res) {
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

/***/ "./resources/assets/js/views/DVA/messaging/message.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7f0e0036\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/views/DVA/messaging/message.vue")
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"babel-preset-env\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"babel-plugin-syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/views/DVA/messaging/message.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-7f0e0036\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/views/DVA/messaging/message.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-7f0e0036"
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
Component.options.__file = "resources\\assets\\js\\views\\DVA\\messaging\\message.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7f0e0036", Component.options)
  } else {
    hotAPI.reload("data-v-7f0e0036", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});