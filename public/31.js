<<<<<<< HEAD
<<<<<<< HEAD
webpackJsonp([31],{

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"babel-preset-env\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"babel-plugin-syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/views/profile/Index.vue":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _flash = __webpack_require__("./resources/assets/js/utilities/flash.js");

var _flash2 = _interopRequireDefault(_flash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    beforeCreate: function beforeCreate() {
        var role_id = parseInt(localStorage.getItem('role'));
        this.$store.dispatch('mutateProfileAccess', role_id);
        if (!(this.$store.state.ProfileAccess.indexOf(role_id) !== -1) && !localStorage.getItem('api_token')) {
            _flash2.default.setError('You do not have access to that page!');
            this.$router.push('/login');
        }
    }
}; //
//
//
//
//

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-ebf3aabc\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/views/profile/Index.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { attrs: { id: "profile-view" } }, [_c("router-view")], 1)
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-ebf3aabc", module.exports)
  }
}

/***/ }),

/***/ "./resources/assets/js/views/profile/Index.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"babel-preset-env\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"babel-plugin-syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/views/profile/Index.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-ebf3aabc\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/views/profile/Index.vue")
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
Component.options.__file = "resources\\assets\\js\\views\\profile\\Index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-ebf3aabc", Component.options)
  } else {
    hotAPI.reload("data-v-ebf3aabc", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});
=======
webpackJsonp([31],{"4Ppo":function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("transition",{attrs:{name:"fade"}},[a("div",{staticClass:"pt-md-3 pt-2 attendance attendance-create",attrs:{id:"index"}},[a("div",{staticClass:"mt-5 attendance-head"},[a("div",{staticClass:"mb-5 row"},[a("div",{staticClass:"col-12 title-con"},[a("span",{staticClass:"title"},[t._v(t._s(t._f("capitalize")("attendance for "+t.today)))]),t._v(" "),t.$store.getters.auth("peoplesOps")?a("div",{staticClass:"row justify-content-end align-items-center"},[a("a",{staticClass:"text-link pr-4 text-capitalize",attrs:{href:"javascript:"},on:{click:function(e){t.$router.push(t.branch?"?branch="+t.branch:"")}}},[t._v("\n                            get attendance list for :\n                        ")]),t._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.branch,expression:"branch"}],staticClass:"custom-select",on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.branch=e.target.multiple?a:a[0]}}},[a("option",{attrs:{disabled:"",selected:"",value:""}},[t._v("branch")]),t._v(" "),t._l(t.$store.getters.getBranches,function(e){return a("option",{domProps:{value:e.id}},[t._v("\n                                "+t._s(t._f("capitalize")(e.name))+"\n                            ")])})],2)]):t._e()])])]),t._v(" "),a("div",{staticClass:"mt-5 attendance-head"},[a("div",{staticClass:"row px-5 pt-3 pb-4"},[a("div",{staticClass:"col-10 col-xs-3 col-md-3 col-lg-3"},[a("div",{staticClass:"row align-items-center"},[a("div",{staticClass:"mx-5 col-1 p-0 sm-hide"}),t._v(" "),a("div",{staticClass:"col pl-4 ml-1 ml-xs-0 pl-xs-3"},[a("span",{staticClass:"user-name light-heading"},[t._v(t._s(t.columns[0]))])])])]),t._v(" "),a("div",{staticClass:"col-2 light-heading"},[t._v(t._s(t.columns[1]))]),t._v(" "),a("div",{staticClass:"col-12 col-xs-3 col-md-3 col-lg-3"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col light-heading pr-1 pr-lg-4"},[t._v(t._s(t.columns[3]))]),t._v(" "),a("div",{staticClass:"col light-heading pl-1 pl-lg-4"},[t._v(t._s(t.columns[4]))])])]),t._v(" "),a("div",{staticClass:"col-6 col-xs-2 col-md-2 col-lg-2 px-0 px-lg-4 light-heading"},[t._v(t._s(t.columns[5]))]),t._v(" "),a("div",{staticClass:"col-6 col-xs-2 col-md-2 col-lg-2 light-heading"},[t._v(t._s(t.columns[6]))])])]),t._v(" "),a("div",{staticClass:"mt-1 attendance-body"},[t.show?a("form",{on:{submit:function(e){return e.preventDefault(),t.onSave(e)}}},[t._l(t.form,function(e,s){return a("div",{staticClass:"mb-3 px-4 row align-items-center attendance-item"},[a("div",{staticClass:"col-12 col-xs-3 col-md-3 col-lg-3 pt-2 pb-3 p-xs-0"},[a("div",{staticClass:"row align-items-center"},[a("div",{staticClass:"ml-5 mr-3 sm-hide"},[a("span",{staticClass:"user mx-auto"},[a("i",{staticClass:"user-icon fas fa-user-alt"})])]),t._v(" "),a("div",{staticClass:"col"},[a("span",{staticClass:"user-name"},[t._v(t._s(t._f("capitalize")(e.user.full_name)))]),t._v(" "),a("span",{staticClass:"sm-show staff_id-sm"},[t._v("\n                                    - "+t._s(e.user.staff_id)+"\n                                ")])])])]),t._v(" "),a("div",{staticClass:"col-12 col-xs-2 col-md-2 col-lg-2 sm-hide"},[t._v("\n                        "+t._s(e.user.staff_id)+"\n                    ")]),t._v(" "),a("div",{staticClass:"col-12 col-xs-3 col-md-3 col-lg-3"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col pr-3 pr-sm-1 pr-lg-4"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.form[s].arrival_time,expression:"form[index].arrival_time"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",attrs:{disabled:"0"===t.form[s].is_present,name:"arrival_time_"+s,type:"time"},domProps:{value:t.form[s].arrival_time},on:{input:function(e){e.target.composing||t.$set(t.form[s],"arrival_time",e.target.value)}}})]),t._v(" "),a("div",{staticClass:"col pl-3 pl-sm-1 pl-lg-4"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.form[s].departure_time,expression:"form[index].departure_time"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",attrs:{disabled:"0"===t.form[s].is_present||t.form[s].no_signout,name:"departure_time_"+s,type:"time"},domProps:{value:t.form[s].departure_time},on:{input:function(e){e.target.composing||t.$set(t.form[s],"departure_time",e.target.value)}}})]),t._v(" "),a("div",{staticClass:"mr-5"},[a("div",{staticClass:"form-check"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.form[s].no_signout,expression:"form[index].no_signout"}],staticClass:"form-check-input mt-3 ml-2",attrs:{disabled:"0"===t.form[s].is_present,id:"exampleCheck1",type:"checkbox",value:"true"},domProps:{checked:Array.isArray(t.form[s].no_signout)?t._i(t.form[s].no_signout,"true")>-1:t.form[s].no_signout},on:{click:function(e){t.no_signout(s,t.form[s].no_signout)},change:function(e){var a=t.form[s].no_signout,r=e.target,i=!!r.checked;if(Array.isArray(a)){var n=t._i(a,"true");r.checked?n<0&&t.$set(t.form[s],"no_signout",a.concat(["true"])):n>-1&&t.$set(t.form[s],"no_signout",a.slice(0,n).concat(a.slice(n+1)))}else t.$set(t.form[s],"no_signout",i)}}}),t._v(" "),a("label",{staticClass:"form-check-label",attrs:{for:"exampleCheck1"}})])])])]),t._v(" "),a("div",{staticClass:"col-6 col-xs-2 col-md-2 col-lg-2 pr-3 py-4 py-sm-0 px-sm-0 px-lg-4"},[a("div",{staticClass:"clearfix",class:"0"===t.form[s].is_present?"absent":"present"},[a("div",{staticClass:"radio w-50 pr-3 float-left"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.form[s].is_present,expression:"form[index].is_present"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{id:"yes_"+s,name:"status_"+s,type:"radio",value:"1"},domProps:{checked:t._q(t.form[s].is_present,"1")},on:{change:function(e){t.$set(t.form[s],"is_present","1")}}}),t._v(" "),a("label",{attrs:{for:"yes_"+s}},[t._v("yes")])]),t._v(" "),a("div",{staticClass:"radio w-50 pl-3 float-left"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.form[s].is_present,expression:"form[index].is_present"}],attrs:{id:"no_"+s,name:"status_"+s,type:"radio",value:"0"},domProps:{checked:t._q(t.form[s].is_present,"0")},on:{click:function(e){t.clearTime(s)},change:function(e){t.$set(t.form[s],"is_present","0")}}}),t._v(" "),a("label",{attrs:{for:"no_"+s}},[t._v("no")])])])]),t._v(" "),a("div",{staticClass:"col-6 col-xs-2 col-md-2 col-lg-2 pl-3 py-4 py-sm-0"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.form[s].remark,expression:"form[index].remark"},{name:"validate",rawName:"v-validate",value:{required:0==t.form[s].is_present},expression:"{ required: form[index].is_present == 0 }"}],staticClass:"form-control",attrs:{disabled:t.form[s].no_signout,name:"remark_"+s,type:"text"},domProps:{value:t.form[s].remark},on:{input:function(e){e.target.composing||t.$set(t.form[s],"remark",e.target.value)}}})])])}),t._v(" "),a("div",{staticClass:"mb-5 px-0 row align-items-center"},[a("div",{staticClass:"w-100 my-5 mx-0 hr"}),t._v(" "),a("div",{staticClass:"clearfix d-flex justify-content-end w-100"},[a("button",{staticClass:"btn bg-default",attrs:{disabled:t.$isProcessing,type:"submit"}},[t._v("\n                            "+t._s(t._f("capitalize")(t.mode))+" Attendance "),a("i",{staticClass:"far fa-paper-plane ml-1"})])])])],2):a("div",{staticClass:"row attendance-item p-5 mb-5"},[a("span",{staticClass:"no-attendance"},[t._v("You have already submitted attendance for today!")])])]),t._v(" "),a("div",{staticClass:"mt-5 attendance-head"},[a("div",{staticClass:"w-100 my-5 mx-0 hr"}),t._v(" "),a("div",{staticClass:"pt-3 pb-4 align-items-center"},[a("div",{staticClass:"light-heading d-flex"},[a("div",{staticClass:"float-left align-self-center"},[t._v("\n                        To fill attendance for a past date kindly select the date and\n                    ")]),t._v(" "),a("button",{staticClass:"btn btn-secondary btn-sm mx-3",staticStyle:{width:"auto"},on:{click:function(e){t.fetchAttendanceByDate()}}},[t._v("\n                        CLICK HERE\n                    ")]),t._v(" "),a("div",{staticClass:"float-left align-self-center"},[t._v("\n                        to update the list with the added date!\n                    ")]),t._v(" "),a("div",{staticClass:"float-left align-self-center ml-3"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.newDate,expression:"newDate"}],staticClass:"form-control float-left",attrs:{type:"date"},domProps:{value:t.newDate},on:{input:function(e){e.target.composing||(t.newDate=e.target.value)}}})])])])])])])},staticRenderFns:[]}},ic49:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.log=function(t,e){t=t.replace(/([A-Z])/g," $1").replace(/^./,function(t){return t.toUpperCase()}),(0,s.post)("/api/log",{action:t,description:e})};var s=a("p/p5")},v7K3:function(t,e,a){var s=a("VU/8")(a("xgek"),a("4Ppo"),!1,null,null,null);t.exports=s.exports},xgek:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=o(a("I3G/")),r=a("ic49"),i=o(a("K23+")),n=a("p/p5");function o(t){return t&&t.__esModule?t:{default:t}}var l=function(t){var e=t.branch;return"/api/attendance/create"+(e?"?branch="+e:"")};e.default={data:function(){return{form:{},mode:null,show:!1,today:"",newDate:"",submittedToday:"",columns:["Employee","ID","Date","Arr. Time","Dep. Time","Present?","Remark"],branch:""}},beforeRouteEnter:function(t,e,a){var s=t.query;(0,n.get)(l(s)).then(function(t){var e=t.data;return a(function(t){return t.prepareForm(e)})})},beforeRouteUpdate:function(t,e,a){var s=t.query,r=this;this.show=!1,(0,n.get)(l(s)).then(function(t){var e=t.data;r.prepareForm(e),a()})},created:function(){this.$prepareBranches()},methods:{prepareForm:function(t){this.$store.getters.auth("peoplesOps")||!this.$route.query.branch?(this.mode=this.$route.meta.mode,t.form.length&&t.form.forEach(function(t){return t.no_signout=!1}),s.default.set(this.$data,"form",t.form),s.default.set(this.$data,"today",t.today),s.default.set(this.$data,"submittedToday",t.submittedToday),this.show=!this.submittedToday):(i.default.setError("You cannot create attendance for a branch other than yours",5e3),this.$router.push({path:"../home"}))},onSave:function(){var t=this;this.$validator.validateAll().then(function(e){e?t.$network()?(t.$LIPS(!0),t.form.forEach(function(t){return delete t.no_signout}),(0,n.post)("/api/attendance",{form:t.form}).then(function(e){var a=e.data,s=e.employee_id;(a.saved||a.updated)&&((0,r.log)("Attendance "+t.mode+"d",""+s),i.default.setSuccess("Attendance Submitted successfully!",3e3),t.$router.push("/"))}).catch(function(t){422===(t=t.response).status&&i.default.setError(t.data.message?t.data.message:t.data)}).finally(function(){t.$LIPS(!1),t.$scrollToTop()})):t.$networkErr():t.$networkErr("form")})},clearTime:function(t){var e=["",""];this.form[t].arrival_time=e[0],this.form[t].departure_time=e[1]},no_signout:function(t,e){s.default.set(this.$data.form[t],"departure_time",""),s.default.set(this.$data.form[t],"remark",e?"":"Did not sign out.")},fetchAttendanceByDate:function(){var t=this;if(this.newDate){var e=new Date(this.newDate);e<new Date?((e=e.toDateString().split(" ")).shift(),this.form.forEach(function(e){return e.date=t.newDate}),this.submittedToday=!1,this.show=!0,this.today=[].concat(function(t){if(Array.isArray(t)){for(var e=0,a=Array(t.length);e<t.length;e++)a[e]=t[e];return a}return Array.from(t)}(e)).join(" "),i.default.setSuccess("You can now proceed and add attendance for "+this.today)):i.default.setError("Sorry you cannot create attendance for a feature date!",2e3)}else i.default.setError("Select date to continue!",2e3);this.$scrollToTop()}}}}});
>>>>>>> 896a1818948e76f90b06f3a42ed60dfef98fa861
=======
webpackJsonp([31],{A7oB:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a,n=s("m2tk"),o=s("K23+"),r=(a=o)&&a.__esModule?a:{default:a};e.default={data:function(){return{contacts:"",message:"",form:{}}},methods:{sendMessage:function(){var t=this;this.$validator.validateAll().then(function(e){e?t.$network()?(t.$LIPS(!0),new n.Message(t.message,t.contacts).send(function(e){return 200===e.status&&t.done()})):t.$networkErr():t.$networkErr("form")})},done:function(){this.$scrollToTop(),this.$LIPS(!1),r.default.setSuccess("Messages sent!"),this.resetData()},resetData:function(){for(var t in this.contacts="",this.message="",this.form)this.form[t]=null}},created:function(){this.resetData()}}},bZ5I:function(t,e,s){var a=s("VU/8")(s("A7oB"),s("gYso"),!1,null,null,null);t.exports=a.exports},gYso:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("transition",{attrs:{name:"fade"}},[s("div",{staticClass:"pt-md-3 pt-2",attrs:{id:"employeeRegister"}},[s("div",{staticClass:"card"},[s("ul",{staticClass:"nav nav-tabs bg-default justify-content-center"},[s("h6",[t._v("Messaging")])]),t._v(" "),s("div",{staticClass:"card-body p-4 "},[s("form",{staticClass:"clearfix",attrs:{id:"messaging"},on:{submit:function(e){return e.preventDefault(),t.sendMessage(e)}}},[s("div",{staticClass:"form-group col-md-12 px-md-3 px-1 float-left"},[s("label",[t._v("Phone Numbers")]),t._v(" "),s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.contacts,expression:"contacts"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control col-sm-12",attrs:{name:"contacts",placeholder:"Kindly add the number and separate each with a semi-colon ';'",rows:"3"},domProps:{value:t.contacts},on:{input:function(e){e.target.composing||(t.contacts=e.target.value)}}}),t._v(" "),t.errors.first("contacts")?s("small",[t._v(t._s(t.errors.first("contacts")))]):t._e()]),t._v(" "),s("div",{staticClass:"form-group col-md-12 px-md-3 px-1 float-left"},[s("label",[t._v("Message Body")]),t._v(" "),s("textarea",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"},{name:"model",rawName:"v-model",value:t.message,expression:"message"}],staticClass:"form-control col-sm-12",attrs:{name:"message",placeholder:"the content of the message goes here",rows:"3"},domProps:{value:t.message},on:{input:function(e){e.target.composing||(t.message=e.target.value)}}}),t._v(" "),t.errors.first("message")?s("small",[t._v(t._s(t.errors.first("message")))]):t._e()]),t._v(" "),s("hr",{staticClass:"style-two"}),t._v(" "),s("div",{staticClass:"col-sm-12 ml-auto mr-auto mt-md-2 mt-0 px-md-3 px-1 mb-3 float-right"},[s("button",{staticClass:"btn btn-block btn-lg bg-default",attrs:{disabled:t.$isProcessing,type:"submit"}},[t._v("\n                            Send messages "),s("i",{staticClass:"far fa-paper-plane ml-1"})])])])])])])])},staticRenderFns:[]}},m2tk:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Message=void 0;var a=function(){function t(t,e){for(var s=0;s<e.length;s++){var a=e[s];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(e,s,a){return s&&t(e.prototype,s),a&&t(e,a),e}}(),n=s("p/p5");e.Message=function(){function t(e,s){var a=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.user_id=n,this.message=e,this.logToDB=a,this.contacts=s.split(",").filter(function(t){return/\S/.test(t)}).map(function(t){return"234"+t.trim().substr(1)}).join(","),this.setPages(),this.setContactCount()}return a(t,[{key:"setContactCount",value:function(){this.contact_count=this.contacts.split(",").length}},{key:"setPages",value:function(){this.pages=Math.ceil(this.message.length/160)}},{key:"send",value:function(t){var e=this;(0,n.get)("/api/message/create?to="+this.contacts+"&message="+this.message).then(function(s){return 200===s.status&&e.logToDB&&(delete e.logToDB,(0,n.post)("/api/message",e)),!!t&&t(s)}).catch(function(e){return!!t&&t(e)})}}]),t}()}});
>>>>>>> 976efb13563114c356a829a8b2f4c56625bbae52
