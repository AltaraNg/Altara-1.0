<<<<<<< HEAD
webpackJsonp([19],{

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"babel-preset-env\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"babel-plugin-syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/views/HomePage.vue":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _auth = __webpack_require__("./resources/assets/js/store/auth.js");

var _auth2 = _interopRequireDefault(_auth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    data: function data() {
        return {
            cards: [{ name: 'DSA', url: 'dsa/home', icon: ['fa-id-card'] }, { name: 'DVA', url: 'dva/home', icon: ['fa-file-signature'] }, { name: 'HRM', url: 'hrm/home', icon: ['fa-female', 'fa-male'] }, { name: 'FSL', url: 'fsl/home', icon: ['fa-box'] }]
        };
    },
    beforeCreate: function beforeCreate() {
        _auth2.default.initialize();
        if (!this.$store.state.api_token && !this.$store.state.authRole) this.$store.dispatch('mutateAuth');
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

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-ed756bca\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/views/HomePage.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.product .card {\n  -webkit-transition: all 0.2s;\n  transition: all 0.2s;\n}\n.product .card:hover {\n    -webkit-transform: scale(1.02);\n            transform: scale(1.02);\n}\n.product .card i, .product .card svg {\n    font-size: 9rem;\n    opacity: .1;\n    margin: 1rem auto;\n}\n@media (max-width: 990px) {\n.product i, .product svg {\n    font-size: 1.2rem;\n}\n}\n@media (max-width: 600px) {\n.product i, .product svg {\n    font-size: 1rem;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-ed756bca\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/views/HomePage.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "col-md-12 px-md-3 p-0" },
    [
      _vm._l(_vm.cards, function(dept) {
        return _vm.$store.getters["verify" + dept.name + "Access"]
          ? _c(
              "div",
              {
                staticClass:
                  "col-md-4 col-sm-6 float-left product py-md-2 py-0 px-md-4 px-3"
              },
              [
                _c(
                  "router-link",
                  { staticClass: "card", attrs: { to: dept.url } },
                  [
                    _c(
                      "ul",
                      {
                        staticClass:
                          "nav nav-tabs bg-default justify-content-center"
                      },
                      [_c("h6", [_vm._v(_vm._s(dept.name) + " Portal")])]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "card-body float-left w-100" }, [
                      _c(
                        "div",
                        { staticClass: "text-center w-100 float-left" },
                        [
                          _vm._l(dept.icon, function(icon) {
                            return _c("i", { staticClass: "fas", class: icon })
                          }),
                          _vm._v(" "),
                          _c("p", { staticClass: "pt-md-3 pt-2" }, [
                            _vm._v("For the " + _vm._s(dept.name) + " Agents.")
                          ])
                        ],
                        2
                      )
                    ])
                  ]
                )
              ],
              1
            )
          : _vm._e()
      }),
      _vm._v(" "),
      _vm._m(0)
    ],
    2
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass:
          "col-md-4 col-sm-6 float-left product py-md-2 py-0 px-md-4 px-3"
      },
      [
        _c(
          "a",
          {
            staticClass: "card",
            attrs: {
              href: "http://catalog-altara.herokuapp.com/",
              target: "_blank"
            }
          },
          [
            _c(
              "ul",
              { staticClass: "nav nav-tabs bg-default justify-content-center" },
              [_c("h6", [_vm._v("Altara Catalogue")])]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "card-body float-left w-100" }, [
              _c("div", { staticClass: "text-center w-100 float-left" }, [
                _c("i", { staticClass: "far fa-images" }),
                _vm._v(" "),
                _c("p", { staticClass: "pt-md-3 pt-2" }, [
                  _vm._v("Official Altara Online Catalogue")
                ])
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
    require("vue-hot-reload-api")      .rerender("data-v-ed756bca", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-ed756bca\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/views/HomePage.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-ed756bca\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/views/HomePage.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("243eda0b", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-ed756bca\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./HomePage.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-ed756bca\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./HomePage.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./resources/assets/js/views/HomePage.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-ed756bca\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/views/HomePage.vue")
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"babel-preset-env\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"babel-plugin-syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/views/HomePage.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-ed756bca\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/views/HomePage.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
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
Component.options.__file = "resources\\assets\\js\\views\\HomePage.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-ed756bca", Component.options)
  } else {
    hotAPI.reload("data-v-ed756bca", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});
=======
webpackJsonp([19],{Mb2S:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,o=r("TOoT"),s=(a=o)&&a.__esModule?a:{default:a},n=r("uD8u");t.default={data:function(){return{users:null,report:null}},methods:{initForm:function(){this.report={user_id:"",date:this.$getDate(),number_on_portal:"",number_to_captain:"",remark:""}},submitReport:function(){var e=this;this.$validator.validateAll().then(function(t){t&&(e.$network()?(e.$LIPS(!0),(0,n.post)("/api/dsa_daily_registration",e.report).then(function(t){document.getElementById("dsaDailyReportForm").reset(),e.$validator.reset(),e.initForm(),e.$scrollToTop(),e.$LIPS(!1),t.data.submitted&&s.default.setSuccess(t.data.message)}).catch(function(){return s.default.setError("Error logging report please try again later!")})):e.$networkErr()),t||e.$networkErr("form")})}},created:function(){var e=this;this.initForm(),(0,n.get)("/api/user/getBranchUsers").then(function(t){return e.users=t.data.DSAs})},watch:{}}},RXo5:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"card"},[e._m(0),e._v(" "),r("div",{staticClass:"card-body px-4"},[r("form",{attrs:{id:"dsaDailyReportForm"},on:{submit:function(t){return t.preventDefault(),e.submitReport(t)}}},[r("div",{staticClass:"my-4 clearfix"},[r("div",{staticClass:"form-group col-md-3 col-sm-6 px-md-3 px-1 float-left"},[r("label",[e._v("DSA (Name-ID)")]),e._v(" "),r("select",{directives:[{name:"model",rawName:"v-model",value:e.report.user_id,expression:"report.user_id"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"custom-select w-100",attrs:{"data-vv-validate-on":"blur",name:"dsa"},on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.$set(e.report,"user_id",t.target.multiple?r:r[0])}}},[r("option",{attrs:{value:""}},[e._v("select DSA")]),e._v(" "),e._l(e.users,function(t){return r("option",{domProps:{value:t.id}},[e._v(e._s(t.full_name+" - ("+t.staff_id+")"))])})],2),e._v(" "),e.errors.first("dsa")?r("small",[e._v(e._s(e.errors.first("dsa")))]):e._e()]),e._v(" "),r("div",{staticClass:"form-group col-md-3 col-sm-6 px-md-3 px-1 float-left"},[r("label",[e._v("Date")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.report.date,expression:"report.date"},{name:"validate",rawName:"v-validate",value:"required|date_format:MM/DD/YYYY",expression:"'required|date_format:MM/DD/YYYY'"}],staticClass:"form-control",attrs:{name:"date",type:"date"},domProps:{value:e.report.date},on:{input:function(t){t.target.composing||e.$set(e.report,"date",t.target.value)}}}),e._v(" "),e.errors.first("date")?r("small",[e._v(e._s(e.errors.first("date")))]):e._e()]),e._v(" "),r("div",{staticClass:"form-group col-md-3 col-sm-6 px-md-3 px-1 float-left"},[r("label",[e._v("Number of forms registered on portal")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.report.number_on_portal,expression:"report.number_on_portal"},{name:"validate",rawName:"v-validate",value:"required|integer|min:0",expression:"'required|integer|min:0'"}],staticClass:"form-control",attrs:{"data-vv-as":"number on portal",name:"number_on_portal",type:"number"},domProps:{value:e.report.number_on_portal},on:{input:function(t){t.target.composing||e.$set(e.report,"number_on_portal",t.target.value)}}}),e._v(" "),e.errors.first("number_on_portal")?r("small",[e._v(e._s(e.errors.first("number_on_portal")))]):e._e()]),e._v(" "),r("div",{staticClass:"form-group col-md-3 col-sm-6 px-md-3 px-1 float-left"},[r("label",[e._v("Number of forms submitted too captain")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.report.number_to_captain,expression:"report.number_to_captain"},{name:"validate",rawName:"v-validate",value:"required|integer|min:0",expression:"'required|integer|min:0'"}],staticClass:"form-control",attrs:{"data-vv-as":"number to captain",name:"number_to_captain",type:"number"},domProps:{value:e.report.number_to_captain},on:{input:function(t){t.target.composing||e.$set(e.report,"number_to_captain",t.target.value)}}}),e._v(" "),e.errors.first("number_to_captain")?r("small",[e._v(e._s(e.errors.first("number_to_captain")))]):e._e()]),e._v(" "),r("div",{staticClass:"spaceAfter"}),e._v(" "),r("div",{staticClass:"form-group col-md-3 col-sm-6 px-md-3 px-1 float-left"},[r("label",{staticClass:"w-100 float-left"},[e._v("Remark/Comment")]),e._v(" "),r("textarea",{directives:[{name:"model",rawName:"v-model",value:e.report.remark,expression:"report.remark"},{name:"validate",rawName:"v-validate",value:"required|max:255",expression:"'required|max:255'"}],staticClass:"form-control",attrs:{cols:"3",name:"remark"},domProps:{value:e.report.remark},on:{input:function(t){t.target.composing||e.$set(e.report,"remark",t.target.value)}}}),e._v(" "),e.errors.first("remark")?r("small",[e._v(e._s(e.errors.first("remark")))]):e._e()])]),e._v(" "),r("div",{staticClass:"col-sm-12 mx-auto mt-md-2 mt-0 px-md-3 px-1 mb-4"},[r("button",{staticClass:"btn btn-block btn-lg bg-default",attrs:{disabled:e.$isProcessing,type:"submit"}},[e._v("\n               Log Report "),r("i",{staticClass:"far fa-paper-plane ml-1"})])])])])])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("ul",{staticClass:"nav nav-tabs justify-content-center bg-default"},[t("h6",[this._v("Daily Report (Captains)")])])}]}},U1xr:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("transition",{attrs:{name:"fade"}},[r("div",{staticClass:"pt-md-3 pt-2",attrs:{id:"employeeRegister"}},[e.$store.getters.verifyDSALead?r("div",{staticClass:"card"},[r("ul",{staticClass:"nav nav-tabs justify-content-center bg-default"},[r("h6",[e._v("Report Generation")])]),e._v(" "),r("div",{staticClass:"card-body px-4"},[r("form",{on:{submit:function(t){return t.preventDefault(),e.generateReport(t)}}},[r("div",{staticClass:"my-4 clearfix"},[r("div",{staticClass:"form-group col-md-3 col-sm-6 px-md-3 px-1 float-left"},[r("label",[e._v("Report Type")]),e._v(" "),r("select",{directives:[{name:"model",rawName:"v-model",value:e.report.type,expression:"report.type"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"custom-select w-100",attrs:{"data-vv-as":"report type","data-vv-validate-on":"blur",name:"report_type"},on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.$set(e.report,"type",t.target.multiple?r:r[0])}}},[r("option",{attrs:{value:""}},[e._v("select type")]),e._v(" "),e._l(e.types,function(t){return r("option",{domProps:{value:t.slug}},[e._v(e._s(e._f("capitalize")(t.name)))])})],2),e._v(" "),e.errors.first("report_type")?r("small",[e._v("\n                        "+e._s(e.errors.first("report_type"))+"\n                     ")]):e._e()]),e._v(" "),r("div",{staticClass:"form-group col-md-3 col-sm-6 px-md-3 px-1 float-left"},[r("label",[e._v("Branch")]),e._v(" "),r("select",{directives:[{name:"model",rawName:"v-model",value:e.report.branch.id,expression:"report.branch.id"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"custom-select w-100",attrs:{"data-vv-as":"office branch",name:"branch_id","data-vv-validate-on":"blur"},on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.$set(e.report.branch,"id",t.target.multiple?r:r[0])}}},[r("option",{attrs:{value:""}},[e._v("select branch")]),e._v(" "),e._l(e.$store.state.branches,function(t){return r("option",{domProps:{value:t.id}},[e._v("\n                           "+e._s(t.name)+"\n                        ")])})],2),e._v(" "),e.errors.first("branch_id")?r("small",[e._v("\n                        "+e._s(e.errors.first("branch_id"))+"\n                     ")]):e._e()]),e._v(" "),r("div",{staticClass:"form-group col-md-3 col-sm-6 px-md-3 px-1 float-left"},[r("label",[e._v("Date from:")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.report.from,expression:"report.from"},{name:"validate",rawName:"v-validate",value:"required|date_format:MM/DD/YYYY",expression:"'required|date_format:MM/DD/YYYY'"}],staticClass:"form-control",attrs:{type:"date","data-vv-as":"Date from",name:"date_from"},domProps:{value:e.report.from},on:{input:function(t){t.target.composing||e.$set(e.report,"from",t.target.value)}}}),e._v(" "),e.errors.first("date_from")?r("small",[e._v("\n                        "+e._s(e.errors.first("date_from"))+"\n                     ")]):e._e()]),e._v(" "),r("div",{staticClass:"form-group col-md-3 col-sm-6 px-md-3 px-1 float-left"},[r("label",[e._v("Date To:")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.report.to,expression:"report.to"},{name:"validate",rawName:"v-validate",value:"required|date_format:MM/DD/YYYY",expression:"'required|date_format:MM/DD/YYYY'"}],staticClass:"form-control",attrs:{type:"date","data-vv-as":"Date to",name:"date_to"},domProps:{value:e.report.to},on:{input:function(t){t.target.composing||e.$set(e.report,"to",t.target.value)}}}),e._v(" "),e.errors.first("date_to")?r("small",[e._v("\n                        "+e._s(e.errors.first("date_to"))+"\n                     ")]):e._e()])]),e._v(" "),r("div",{staticClass:"col-sm-12 mx-auto mt-md-2 mt-0 px-md-3 px-1 mb-4"},[r("button",{staticClass:"btn btn-block btn-lg bg-default",attrs:{type:"submit",disabled:e.$isProcessing}},[e._v("\n                     Generate Report "),r("i",{staticClass:"far fa-paper-plane ml-1"})])])])])]):e._e(),e._v(" "),e.$store.getters.verifyDSACaptain?r("daily-report"):e._e()],1)])},staticRenderFns:[]}},UorG:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,o=r("N71M"),s=r("uD8u"),n=r("oPea"),i=(a=n)&&a.__esModule?a:{default:a};t.default={components:{DailyReport:i.default},beforeCreate:function(){this.$store.getters.verifyDSACaptain||this.$networkErr("page"),this.$prepareBranches()},data:function(){return{types:[{name:"sales report",slug:"sales_report"},{name:"score card",slug:"score_card"},{name:"weekly operations",slug:"weekly_operations"}],report:{to:"",from:"",branch:{id:"",name:""},employee:"",type:""}}},created:function(){this.setDates()},methods:{generateReport:function(){var e=this;this.$validator.validateAll().then(function(t){if(t)if(e.$network()){var r=o.store.state.branches.find(function(t){return t.id===e.report.branch.id});e.report.branch=r,(0,s.postD)("/api/report",e.report).then(function(t){var a=window.URL.createObjectURL(new Blob([t.data])),o=document.createElement("a");o.href=a,o.setAttribute("download",e.report.type+"_for_"+r.name+".xlsx"),document.body.appendChild(o),o.click()})}else e.$networkErr();t||e.$networkErr("form")})},setDates:function(){var e=function(e){return e<10?"0"+e:e},t=function(t){return t.getFullYear()+"-"+e(t.getMonth()+1)+"-"+e(t.getDate())},r=new Date,a=r.getDay(),o=r.getDate()-a+(0===a?-6:1),s=new Date(r.setDate(o)),n=new Date;n.setDate(s.getDate()+5),this.report.from=s=t(s),this.report.to=n=t(n)}}}},khuM:function(e,t,r){var a=r("VU/8")(r("UorG"),r("U1xr"),!1,null,null,null);e.exports=a.exports},oPea:function(e,t,r){var a=r("VU/8")(r("Mb2S"),r("RXo5"),!1,null,null,null);e.exports=a.exports}});
>>>>>>> 5b66d6bd3124cd9c1e27808029b5045efc350129
