<<<<<<< HEAD
<<<<<<< HEAD
webpackJsonp([23],{

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

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"babel-preset-env\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"babel-plugin-syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/views/LOG/index.vue":
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
//
//
//
//
//
//
//

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-2f542aae\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/AppNavigation.vue":
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
    require("vue-hot-reload-api")      .rerender("data-v-2f542aae", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-4ddd3006\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/views/LOG/index.vue":
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
          pageTitle: "Logistic Agents",
          pageTitleSmall: "LOG",
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
    require("vue-hot-reload-api")      .rerender("data-v-4ddd3006", module.exports)
  }
}

/***/ }),

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

/***/ "./resources/assets/js/views/LOG/index.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"babel-preset-env\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"babel-plugin-syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/views/LOG/index.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-4ddd3006\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/views/LOG/index.vue")
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
Component.options.__file = "resources\\assets\\js\\views\\LOG\\index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4ddd3006", Component.options)
  } else {
    hotAPI.reload("data-v-4ddd3006", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});
=======
webpackJsonp([23],{"+O4B":function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"mt-5 attendance-head"},[r("div",{staticClass:"mb-5 row align-items-center"},[r("div",{staticClass:"col-12 title-con"},[r("span",{staticClass:"title"},[e._v(e._s(e._f("capitalize")(e.title)))]),e._v(" "),e.to?r("div",{staticClass:"row justify-content-end"},[r("router-link",{staticClass:"text-link mt-3",attrs:{to:e.to}},[e._v(e._s(e.buttonTitle))])],1):e._e()])])])},staticRenderFns:[]}},EJ7O:function(e,t,r){var a=r("VU/8")(r("oKx2"),r("+O4B"),!1,null,null,null);e.exports=a.exports},UorG:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=i(r("K23+")),o=r("p/p5"),s=i(r("EJ7O"));function i(e){return e&&e.__esModule?e:{default:e}}t.default={components:{CustomHeader:s.default},beforeCreate:function(){var e=this;!this.$store.getters.auth("DSACaptain")&&this.$networkErr("page"),(0,o.get)("/api/user/"+this.$store.state.user_id).then(function(t){var r=t.data;e.report.branch=r.user.branch,e.pageBranch.push(r.user.branch)}),(0,o.get)("/api/user/getBranchUsers").then(function(t){var r=t.data;return e.users=r.DSAs}),this.$prepareBranches()},created:function(){this.setDates(),this.initForm()},data:function(){return{types:[{name:"sales report",slug:"sales_report"},{name:"score card",slug:"score_card"},{name:"weekly operations",slug:"weekly_operations"}],report:{to:"",from:"",branch:{id:"",name:""},employee:"",type:""},users:null,dailyReport:null,pageBranch:[]}},methods:{initForm:function(){this.dailyReport={user_id:"",date:this.$getDate(),number_on_portal:"",number_to_captain:"",remark:""}},generateReport:function(){var e=this;this.$validator.validateAll("f1").then(function(t){if(t)if(e.$network()){var r=e.$store.state.branches.find(function(t){return t.id===e.report.branch.id});e.report.branch=r,(0,o.postD)("/api/report",e.report).then(function(t){var a=t.data,o=window.URL.createObjectURL(new Blob([a])),s=document.createElement("a");s.href=o,s.setAttribute("download",e.report.type+"_for_"+r.name+".xlsx"),document.body.appendChild(s),s.click()})}else e.$networkErr();else e.$networkErr("form")})},setDates:function(){var e=function(e){return e<10?"0"+e:e},t=function(t){return t.getFullYear()+"-"+e(t.getMonth()+1)+"-"+e(t.getDate())},r=new Date,a=r.getDay(),o=r.getDate()-a+(0===a?-6:1),s=new Date(r.setDate(o)),i=new Date;i.setDate(s.getDate()+5),this.report.from=s=t(s),this.report.to=i=t(i)},submitReport:function(){var e=this;this.$validator.validateAll("f2").then(function(t){t?e.$network()?(e.$LIPS(!0),(0,o.post)("/api/dsa_daily_registration",e.dailyReport).then(function(t){var r=t.data;e.$validator.reset(),e.initForm(),e.$scrollToTop(),e.$LIPS(!1),r.submitted&&a.default.setSuccess(r.message)}).catch(function(){return a.default.setError("Error logging report please try again later!")})):e.$networkErr():e.$networkErr("form")})}}}},khuM:function(e,t,r){var a=r("VU/8")(r("UorG"),r("rgtB"),!1,null,null,null);e.exports=a.exports},oKx2:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{title:"",buttonTitle:null,to:null}}},rgtB:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("transition",{attrs:{name:"fade"}},[r("div",{staticClass:"pt-md-3 pt-2 attendance-view",attrs:{id:"index"}},[r("custom-header",{attrs:{title:"Generate Report"}}),e._v(" "),r("div",{staticClass:"attendance-body"},[r("form",{attrs:{"data-vv-scope":"f1"},on:{submit:function(t){return t.preventDefault(),e.generateReport(t)}}},[r("div",{staticClass:"my-4 clearfix p-5 row bg-white shadow-sm card-radius"},[r("div",{staticClass:"form-group col-md-3 col-sm-6 px-md-3 px-1 float-left"},[r("label",[e._v("Type")]),e._v(" "),r("select",{directives:[{name:"model",rawName:"v-model",value:e.report.type,expression:"report.type"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"custom-select w-100",attrs:{"data-vv-as":"report type","data-vv-validate-on":"blur",name:"report_type"},on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.$set(e.report,"type",t.target.multiple?r:r[0])}}},[r("option",{attrs:{value:""}},[e._v("select type")]),e._v(" "),e._l(e.types,function(t){var a=t.slug,o=t.name;return r("option",{domProps:{value:a}},[e._v(e._s(e._f("capitalize")(o)))])})],2),e._v(" "),e.errors.first("f1.report_type")?r("small",[e._v(e._s(e.errors.first("f1.report_type")))]):e._e()]),e._v(" "),r("div",{staticClass:"form-group col-md-3 col-sm-6 px-md-3 px-1 float-left"},[r("label",[e._v("Branch")]),e._v(" "),r("select",{directives:[{name:"model",rawName:"v-model",value:e.report.branch.id,expression:"report.branch.id"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"custom-select w-100",attrs:{disabled:!e.$store.getters.auth("DSALead"),"data-vv-as":"office branch","data-vv-validate-on":"blur",name:"branch_id"},on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.$set(e.report.branch,"id",t.target.multiple?r:r[0])}}},[r("option",{attrs:{value:""}},[e._v("select branch")]),e._v(" "),e._l(e.$store.getters.auth("DSALead")?e.$store.state.branches:e.pageBranch,function(t){return r("option",{domProps:{value:t.id}},[e._v("\n                                "+e._s(t.name)+"\n                            ")])})],2),e._v(" "),e.errors.first("f1.branch_id")?r("small",[e._v(e._s(e.errors.first("f1.branch_id")))]):e._e()]),e._v(" "),r("div",{staticClass:"form-group col-md-3 col-sm-6 px-md-3 px-1 float-left"},[r("label",[e._v("Date from:")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.report.from,expression:"report.from"},{name:"validate",rawName:"v-validate",value:"required|date_format:MM/DD/YYYY",expression:"'required|date_format:MM/DD/YYYY'"}],staticClass:"form-control",attrs:{"data-vv-as":"Date from",name:"date_from",type:"date"},domProps:{value:e.report.from},on:{input:function(t){t.target.composing||e.$set(e.report,"from",t.target.value)}}}),e._v(" "),e.errors.first("f1.date_from")?r("small",[e._v(e._s(e.errors.first("f1.date_from")))]):e._e()]),e._v(" "),r("div",{staticClass:"form-group col-md-3 col-sm-6 px-md-3 px-1 float-left"},[r("label",[e._v("Date To:")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.report.to,expression:"report.to"},{name:"validate",rawName:"v-validate",value:"required|date_format:MM/DD/YYYY",expression:"'required|date_format:MM/DD/YYYY'"}],staticClass:"form-control",attrs:{"data-vv-as":"Date to",name:"date_to",type:"date"},domProps:{value:e.report.to},on:{input:function(t){t.target.composing||e.$set(e.report,"to",t.target.value)}}}),e._v(" "),e.errors.first("f1.date_to")?r("small",[e._v(e._s(e.errors.first("f1.date_to")))]):e._e()])]),e._v(" "),r("div",{staticClass:"mb-5 px-0 row align-items-center"},[r("div",{staticClass:"clearfix d-flex justify-content-end w-100"},[r("button",{staticClass:"btn bg-default",attrs:{disabled:e.$isProcessing,type:"submit"}},[e._v("\n                            Generate Report "),r("i",{staticClass:"far fa-paper-plane ml-1"})])])])])]),e._v(" "),r("custom-header",{attrs:{title:"Send Daily Report"}}),e._v(" "),r("div",{staticClass:"attendance-body"},[r("form",{attrs:{"data-vv-scope":"f2",id:"dsaDailyReportForm"},on:{submit:function(t){return t.preventDefault(),e.submitReport(t)}}},[r("div",{staticClass:"my-4 clearfix p-5 row bg-white shadow-sm card-radius"},[r("div",{staticClass:"form-group col-md-3 col-sm-6 px-md-3 px-1 float-left"},[r("label",[e._v("DSA (Name-ID)")]),e._v(" "),r("select",{directives:[{name:"model",rawName:"v-model",value:e.dailyReport.user_id,expression:"dailyReport.user_id"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"custom-select w-100",attrs:{"data-vv-validate-on":"blur",name:"dsa"},on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.$set(e.dailyReport,"user_id",t.target.multiple?r:r[0])}}},[r("option",{attrs:{value:""}},[e._v("select DSA")]),e._v(" "),e._l(e.users,function(t){return r("option",{domProps:{value:t.id}},[e._v(e._s(t.full_name+" - ("+t.staff_id+")"))])})],2),e._v(" "),e.errors.first("f2.dsa")?r("small",[e._v(e._s(e.errors.first("f2.dsa")))]):e._e()]),e._v(" "),r("div",{staticClass:"form-group col-md-2 col-sm-6 px-md-3 px-1 float-left"},[r("label",[e._v("Date")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.dailyReport.date,expression:"dailyReport.date"},{name:"validate",rawName:"v-validate",value:"required|date_format:MM/DD/YYYY",expression:"'required|date_format:MM/DD/YYYY'"}],staticClass:"form-control",attrs:{name:"date",type:"date"},domProps:{value:e.dailyReport.date},on:{input:function(t){t.target.composing||e.$set(e.dailyReport,"date",t.target.value)}}}),e._v(" "),e.errors.first("f2.date")?r("small",[e._v(e._s(e.errors.first("f2.date")))]):e._e()]),e._v(" "),r("div",{staticClass:"form-group col-md-2 col-sm-6 px-md-3 px-1 float-left"},[r("label",[e._v("Forms registered on portal")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.dailyReport.number_on_portal,expression:"dailyReport.number_on_portal"},{name:"validate",rawName:"v-validate",value:"required|integer|min:0",expression:"'required|integer|min:0'"}],staticClass:"form-control",attrs:{"data-vv-as":"number on portal",name:"number_on_portal",type:"number"},domProps:{value:e.dailyReport.number_on_portal},on:{input:function(t){t.target.composing||e.$set(e.dailyReport,"number_on_portal",t.target.value)}}}),e._v(" "),e.errors.first("f2.number_on_portal")?r("small",[e._v(e._s(e.errors.first("f2.number_on_portal")))]):e._e()]),e._v(" "),r("div",{staticClass:"form-group col-md-2 col-sm-6 px-md-3 px-1 float-left"},[r("label",[e._v("Forms submitted to captain")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.dailyReport.number_to_captain,expression:"dailyReport.number_to_captain"},{name:"validate",rawName:"v-validate",value:"required|integer|min:0",expression:"'required|integer|min:0'"}],staticClass:"form-control",attrs:{"data-vv-as":"number to captain",name:"number_to_captain",type:"number"},domProps:{value:e.dailyReport.number_to_captain},on:{input:function(t){t.target.composing||e.$set(e.dailyReport,"number_to_captain",t.target.value)}}}),e._v(" "),e.errors.first("f2.number_to_captain")?r("small",[e._v(e._s(e.errors.first("f2.number_to_captain")))]):e._e()]),e._v(" "),r("div",{staticClass:"form-group col-md-3 col-sm-6 px-md-3 px-1 float-left"},[r("label",{staticClass:"w-100 float-left"},[e._v("Remark/Comment")]),e._v(" "),r("textarea",{directives:[{name:"model",rawName:"v-model",value:e.dailyReport.remark,expression:"dailyReport.remark"},{name:"validate",rawName:"v-validate",value:"required|max:255",expression:"'required|max:255'"}],staticClass:"form-control",attrs:{cols:"1",name:"remark"},domProps:{value:e.dailyReport.remark},on:{input:function(t){t.target.composing||e.$set(e.dailyReport,"remark",t.target.value)}}}),e._v(" "),e.errors.first("f2.remark")?r("small",[e._v(e._s(e.errors.first("f2.remark")))]):e._e()])]),e._v(" "),r("div",{staticClass:"mb-5 px-0 row align-items-center"},[r("div",{staticClass:"clearfix d-flex justify-content-end w-100"},[r("button",{staticClass:"btn bg-default",attrs:{disabled:e.$isProcessing,type:"submit"}},[e._v("\n                            Log Report "),r("i",{staticClass:"far fa-paper-plane ml-1"})])])])])])],1)])},staticRenderFns:[]}}});
>>>>>>> 896a1818948e76f90b06f3a42ed60dfef98fa861
=======
webpackJsonp([23],{"+O4B":function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"mt-5 attendance-head"},[s("div",{staticClass:"mb-5 row align-items-center"},[s("div",{staticClass:"col-12 title-con"},[s("span",{staticClass:"title"},[t._v(t._s(t._f("capitalize")(t.title)))]),t._v(" "),t.to?s("div",{staticClass:"row justify-content-end"},[s("router-link",{staticClass:"text-link mt-3",attrs:{to:t.to}},[t._v(t._s(t.buttonTitle))])],1):t._e()])])])},staticRenderFns:[]}},"57Cy":function(t,a,s){var i=s("VU/8")(s("N2ek"),s("WNta"),!1,null,null,null);t.exports=i.exports},EJ7O:function(t,a,s){var i=s("VU/8")(s("oKx2"),s("+O4B"),!1,null,null,null);t.exports=i.exports},N2ek:function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var i=o(s("I3G/")),e=s("p/p5"),l=o(s("K23+")),n=o(s("EJ7O"));function o(t){return t&&t.__esModule?t:{default:t}}var c=function(t){var a=t.page;return"/caution"+(a?"?page="+a:"")};a.default={components:{CustomHeader:n.default},data:function(){return{show:!1,caution:null,cautions:{},columns:[{name:"Employee",col:4},{name:"Issued by",col:3},{name:"Reason",col:2},{name:"Penalty",col:2},{name:"Date",col:1}]}},beforeRouteEnter:function(t,a,s){var i=t.query;(0,e.get)("/api"+c(i)).then(function(t){var a=t.data;return s(function(t){return t.prepareForm(a)})}).catch(function(t){return s(function(a){return a.handleErr(t)})})},beforeRouteUpdate:function(t,a,s){var i=t.query,l=this;this.show=!1,this.$LIPS(!0),(0,e.get)("/api"+c(i)).then(function(t){var a=t.data;l.prepareForm(a),s()}).catch(function(t){l.handleErr(t),s()})},methods:{prepareForm:function(t){var a=t.cautions;a.data.length<1&&0!==a.total&&this.$router.push({query:{page:a.last_page}}),a.data.length&&(i.default.set(this.$data,"cautions",a),this.show=!0),this.$LIPS(!1)},handleErr:function(t){l.default.setError("Error Fetching Cautions")},displayInfo:function(t){return i.default.set(this.$data,"caution",t),$("#view-caution").modal("toggle")}},updated:function(){var t=this;$('[data-toggle="tooltip"]').tooltip({boundary:"window",html:!0}),$(document).on("hidden.bs.modal",".modal",function(){return t.caution=""})}}},WNta:function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("transition",{attrs:{name:"fade"}},[s("div",{staticClass:"pt-md-3 pt-2 attendance-view",attrs:{id:"index"}},[s("custom-header",{attrs:{to:"caution/create",title:"Caution(s) register","button-title":"click here to send caution a staff!"}}),t._v(" "),t.show?s("div",{staticClass:"mt-5 row attendance-head mb-4"},t._l(t.columns,function(a){var i=a.name,e=a.col;return s("div",{class:"col-"+e},[s("div",{staticClass:"row"},[s("div",{staticClass:"light-heading"},[s("span",{staticClass:"d-none d-sm-inline"}),t._v(" "+t._s(i))])])])})):t._e(),t._v(" "),s("div",{staticClass:"mt-1 attendance-body"},[t.show?s("div",[t._l(t.cautions.data,function(a,i){return s("div",{staticClass:"mb-3 px-0 row align-items-center attendance-item",attrs:{"data-toggle":"tooltip","data-placement":"top",title:"click on here to view full details!"},on:{click:function(s){t.displayInfo(a)}}},[s("div",{staticClass:"col-12 col-xs-4 col-md-4 col-lg-4"},[s("div",{staticClass:"row align-items-center"},[s("div",{staticClass:"ml-5 mr-3 sm-hide"},[s("span",{staticClass:"user mx-auto"},[t._v("\n                                    "+t._s(i+1+10*(t.cautions.current_page-1))+"\n                                ")])]),t._v(" "),s("div",{staticClass:"col"},[s("span",{staticClass:"user-name"},[t._v(t._s(a.user.full_name))])])])]),t._v(" "),s("div",{staticClass:"col-12 col-xs-3 col-md-3 col-lg-3"},[s("div",{staticClass:"row"},[s("span",[t._v(t._s(a.issuer.full_name))])])]),t._v(" "),s("div",{staticClass:"col-12 col-xs-2 col-md-2 col-lg-2 sm-hide"},[s("div",{staticClass:"row"},[s("span",[t._v(t._s(a.reason_min))])])]),t._v(" "),s("div",{staticClass:"col-6 col-xs-2 col-md-2 col-lg-2 pr-3 py-4 py-sm-0 px-sm-0 px-lg-4 sm-hide"},[s("div",{staticClass:"row"},[s("span",[t._v(t._s(a.penalty_min))])])]),t._v(" "),s("div",{staticClass:"col-6 col-xs-1 col-md-1 col-lg-1 pl-3 py-4 py-sm-0"},[s("div",{staticClass:"row"},[s("span",[t._v("\n                                "+t._s(a.date)+"\n                            ")])])])])}),t._v(" "),s("div",{staticClass:"mb-5 px-0 row align-items-center"},[s("div",{staticClass:"w-100 mb-4 mt-5 mx-0 hr"}),t._v(" "),s("div",{staticClass:"clearfix w-100 mt-4"},[s("div",{staticClass:"float-left"},[s("strong",{staticClass:"light-heading float-left"},[t._v("\n                                Displaying: "+t._s(t.cautions.from)+" - "+t._s(t.cautions.to)+" of "+t._s(t.cautions.total)+"\n                            ")])]),t._v(" "),s("nav",{staticClass:"float-right",attrs:{"aria-label":"Page navigation example"}},[s("ul",{staticClass:"pagination pagination-lg float-left"},[s("li",{staticClass:"page-item",class:t.cautions.first_page_url?"":"disabled"},[s("router-link",{staticClass:"page-link",attrs:{to:{query:{page:1}}}},[t._v("\n                                        First\n                                    ")])],1),t._v(" "),s("li",{staticClass:"page-item",class:t.cautions.prev_page_url?"":"disabled"},[s("router-link",{staticClass:"page-link",attrs:{to:{query:{page:t.cautions.current_page-1}}}},[t._v("\n                                        Previous\n                                    ")])],1),t._v(" "),s("li",{staticClass:"page-item"},[s("span",{staticClass:"page-link"},[t._v("Current Page: "+t._s(t.cautions.current_page))])]),t._v(" "),s("li",{staticClass:"page-item",class:t.cautions.next_page_url?"":"disabled"},[s("router-link",{staticClass:"page-link",attrs:{to:{query:{page:t.cautions.current_page+1}}}},[t._v("\n                                        Next\n                                    ")])],1),t._v(" "),s("li",{staticClass:"page-item",class:t.cautions.last_page_url?"":"disabled"},[s("router-link",{staticClass:"page-link",attrs:{to:{query:{page:t.cautions.last_page}}}},[t._v("\n                                        Last\n                                    ")])],1)])])])])],2):s("div",{staticClass:"row attendance-item p-5 mb-5"},[s("span",{staticClass:"no-attendance"},[t._v("No cautions has been issued!")])])]),t._v(" "),s("div",{staticClass:"modal fade",attrs:{id:"view-caution"}},[s("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[s("div",{staticClass:"modal-content"},[s("div",{staticClass:"modal-header py-2"},[s("h6",{staticClass:"modal-title py-1"},[t._v("Caution")]),t._v(" "),s("a",{staticClass:"close py-1",attrs:{"aria-label":"Close","data-dismiss":"modal"}},[s("span",{staticClass:"modal-close text-danger",attrs:{"aria-hidden":"true"}},[s("i",{staticClass:"fas fa-times"})])])]),t._v(" "),s("div",{staticClass:"modal-body"},[t.caution?s("div",{staticClass:"px-2"},[s("div",{staticClass:"px-4"},[s("div",{staticClass:"row"},[s("span",[s("strong",[t._v("Employee : ")])]),t._v(" "),s("div",{staticClass:"col"},[t._v(t._s(t.caution.user.full_name))])]),t._v(" "),s("div",{staticClass:"row"},[s("span",[s("strong",[t._v("Issued by : ")])]),t._v(" "),s("div",{staticClass:"col"},[t._v(t._s(t.caution.issuer.full_name))])]),t._v(" "),s("div",{staticClass:"row"},[s("span",[s("strong",[t._v("Reason : ")])]),t._v(" "),s("div",{staticClass:"col"},[t._v(t._s(t.caution.reason))])]),t._v(" "),s("div",{staticClass:"row"},[s("span",[s("strong",[t._v("Penalty : ")])]),t._v(" "),s("div",{staticClass:"col"},[t._v(t._s(t.caution.penalty))])]),t._v(" "),s("div",{staticClass:"row"},[s("span",[s("strong",[t._v("Date : ")])]),t._v(" "),s("div",{staticClass:"col"},[t._v(t._s(t.caution.date))])])])]):t._e()]),t._v(" "),s("div",{staticClass:"modal-footer"},[s("a",{staticClass:"text-link mt-3 w-100",staticStyle:{"text-align":"right"},attrs:{"data-dismiss":"modal",href:"javascript:"}},[t._v("close dialogue")])])])])])],1)])},staticRenderFns:[]}},oKx2:function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default={props:{title:"",buttonTitle:null,to:null}}}});
>>>>>>> 976efb13563114c356a829a8b2f4c56625bbae52
