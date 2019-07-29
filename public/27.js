<<<<<<< HEAD
webpackJsonp([27],{

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"babel-preset-env\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"babel-plugin-syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/views/DVA/messaging/message.vue":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _sms = __webpack_require__("./resources/assets/js/utilities/sms.js");

var _flash = __webpack_require__("./resources/assets/js/utilities/flash.js");

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
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"babel-preset-env\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"babel-plugin-syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/views/DVA/messaging/message.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-7f0e0036\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/views/DVA/messaging/message.vue")
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
=======
webpackJsonp([27],{A7oB:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a,n=s("m2tk"),o=s("K23+"),r=(a=o)&&a.__esModule?a:{default:a};e.default={data:function(){return{contacts:"",message:"",form:{}}},methods:{sendMessage:function(){var t=this;this.$validator.validateAll().then(function(e){e?t.$network()?(t.$LIPS(!0),new n.Message(t.message,t.contacts).send(function(e){return 200===e.status&&t.done()})):t.$networkErr():t.$networkErr("form")})},done:function(){this.$scrollToTop(),this.$LIPS(!1),r.default.setSuccess("Messages sent!"),this.resetData()},resetData:function(){for(var t in this.contacts="",this.message="",this.form)this.form[t]=null}},created:function(){this.resetData()}}},bZ5I:function(t,e,s){var a=s("VU/8")(s("A7oB"),s("gYso"),!1,null,null,null);t.exports=a.exports},gYso:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("transition",{attrs:{name:"fade"}},[s("div",{staticClass:"pt-md-3 pt-2",attrs:{id:"employeeRegister"}},[s("div",{staticClass:"card"},[s("ul",{staticClass:"nav nav-tabs bg-default justify-content-center"},[s("h6",[t._v("Messaging")])]),t._v(" "),s("div",{staticClass:"card-body p-4 "},[s("form",{staticClass:"clearfix",attrs:{id:"messaging"},on:{submit:function(e){return e.preventDefault(),t.sendMessage(e)}}},[s("div",{staticClass:"form-group col-md-12 px-md-3 px-1 float-left"},[s("label",[t._v("Phone Numbers")]),t._v(" "),s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.contacts,expression:"contacts"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control col-sm-12",attrs:{name:"contacts",placeholder:"Kindly add the number and separate each with a semi-colon ';'",rows:"3"},domProps:{value:t.contacts},on:{input:function(e){e.target.composing||(t.contacts=e.target.value)}}}),t._v(" "),t.errors.first("contacts")?s("small",[t._v(t._s(t.errors.first("contacts")))]):t._e()]),t._v(" "),s("div",{staticClass:"form-group col-md-12 px-md-3 px-1 float-left"},[s("label",[t._v("Message Body")]),t._v(" "),s("textarea",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"},{name:"model",rawName:"v-model",value:t.message,expression:"message"}],staticClass:"form-control col-sm-12",attrs:{name:"message",placeholder:"the content of the message goes here",rows:"3"},domProps:{value:t.message},on:{input:function(e){e.target.composing||(t.message=e.target.value)}}}),t._v(" "),t.errors.first("message")?s("small",[t._v(t._s(t.errors.first("message")))]):t._e()]),t._v(" "),s("hr",{staticClass:"style-two"}),t._v(" "),s("div",{staticClass:"col-sm-12 ml-auto mr-auto mt-md-2 mt-0 px-md-3 px-1 mb-3 float-right"},[s("button",{staticClass:"btn btn-block btn-lg bg-default",attrs:{disabled:t.$isProcessing,type:"submit"}},[t._v("\n                            Send messages "),s("i",{staticClass:"far fa-paper-plane ml-1"})])])])])])])])},staticRenderFns:[]}},m2tk:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Message=void 0;var a=function(){function t(t,e){for(var s=0;s<e.length;s++){var a=e[s];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(e,s,a){return s&&t(e.prototype,s),a&&t(e,a),e}}(),n=s("p/p5");e.Message=function(){function t(e,s){var a=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.user_id=n,this.message=e,this.logToDB=a,this.contacts=s.split(",").filter(function(t){return/\S/.test(t)}).map(function(t){return"234"+t.trim().substr(1)}).join(","),this.setPages(),this.setContactCount()}return a(t,[{key:"setContactCount",value:function(){this.contact_count=this.contacts.split(",").length}},{key:"setPages",value:function(){this.pages=Math.ceil(this.message.length/160)}},{key:"send",value:function(t){var e=this;(0,n.get)("/api/message/create?to="+this.contacts+"&message="+this.message).then(function(s){return 200===s.status&&e.logToDB&&(delete e.logToDB,(0,n.post)("/api/message",e)),!!t&&t(s)}).catch(function(e){return!!t&&t(e)})}}]),t}()}});
>>>>>>> 717b73666b06ef9a4098637f6e3966e98184a99e
