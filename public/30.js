<<<<<<< HEAD
webpackJsonp([30],{

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"babel-preset-env\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"babel-plugin-syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/views/LOG/category/form.vue":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
   value: true
});

var _vue = __webpack_require__("./node_modules/vue/dist/vue.common.js");

var _vue2 = _interopRequireDefault(_vue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
   props: {},
   data: function data() {
      return {
         form: {
            category_id: 'CT-0001', //Expected to come from a counter in the db
            category_name: null
         },
         mode: null,
         error: {},
         show: false,
         resource: 'categories',
         store: '/api/categories',
         method: 'POST',
         title: 'Create'
      };
   },
   beforeRouteEnter: function beforeRouteEnter(to, from, next) {
      //1. make request to back end for the form to be used

      //2 send to the method in this component that will handle it when component is created

      //3. set the current mode of the form
      next(function (vm) {
         return vm.setMode(to.meta.mode);
      });
   },
   beforeRouteUpdate: function beforeRouteUpdate(to, from, next) {
      //1. make request to back end for the form to be used

      //2 send to the method in this component that will handle it when component is created

      //3. Edit data that will be used for api update call
      this.store = '/api/category/' + this.$route.params.id;
      this.method = 'PUT';

      //3. set the current mode of the form
      this.setMode(to.meta.mode);
      next();
   },

   methods: {
      setMode: function setMode(mode) {
         this.show = false;
         /** set the current mode of the form*/
         _vue2.default.set(this.$data, 'mode', mode);
      },
      onCancel: function onCancel() {},
      onSave: function onSave() {
         var _this = this;

         /** 1. Validate form*/
         this.$validator.validateAll().then(function (result) {
            /** 2.if validation is successful*/
            if (result) {
               /** 3. Check is there is network*/
               if (_this.$network()) {
                  //There is network
                  /** 4. Show loader and set isProcessing to true*/
                  _this.$LIPS(true);
                  /** 5. Clear errors*/
                  _this.error = {};
                  /** 6 make request to BE*/
                  console.log(_this.form);

                  _this.$LIPS(false);

                  /** 7. Log the process*/

                  /** 8. Throw success message*/

                  /** 9. Take to the page view of the current supplier created*/
               } else _this.$networkErr();
            } else _this.$networkErr('form');
         });
      }
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
//
//
//
//
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

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-0e6ca50d\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/views/LOG/category/form.vue":
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
            { staticClass: "nav nav-tabs justify-content-center bg-default" },
            [_c("h6", [_vm._v(_vm._s(_vm.mode) + " Category")])]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "card-body pl-4 pr-4" }, [
            _c(
              "form",
              {
                on: {
                  submit: function($event) {
                    $event.preventDefault()
                    return _vm.onSave($event)
                  }
                }
              },
              [
                _c("h5", [_vm._v("Category Details")]),
                _vm._v(" "),
                _c("div", { staticClass: "clearfix" }, [
                  _c(
                    "div",
                    {
                      staticClass:
                        "form-group col-md-6 col-12 float-left px-0 px-md-3"
                    },
                    [
                      _c("label", [_vm._v("Category ID")]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.category_id,
                            expression: "form.category_id"
                          },
                          {
                            name: "validate",
                            rawName: "v-validate",
                            value: "required|max:50",
                            expression: "'required|max:50'"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          "data-vv-as": "category id",
                          name: "category_id",
                          placeholder: "category id",
                          type: "text",
                          disabled: ""
                        },
                        domProps: { value: _vm.form.category_id },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.form,
                              "category_id",
                              $event.target.value
                            )
                          }
                        }
                      }),
                      _vm._v(" "),
                      _vm.errors.first("category_id")
                        ? _c("small", [
                            _vm._v(_vm._s(_vm.errors.first("category_id")))
                          ])
                        : _vm._e()
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "form-group col-md-6 col-12 float-left px-0 px-md-3"
                    },
                    [
                      _c("label", [_vm._v("Category name")]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.category_name,
                            expression: "form.category_name"
                          },
                          {
                            name: "validate",
                            rawName: "v-validate",
                            value: "required|max:150",
                            expression: "'required|max:150'"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          "data-vv-as": "category name",
                          name: "category_name",
                          placeholder: "category name",
                          type: "text"
                        },
                        domProps: { value: _vm.form.category_name },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.form,
                              "category_name",
                              $event.target.value
                            )
                          }
                        }
                      }),
                      _vm._v(" "),
                      _vm.errors.first("category_name")
                        ? _c("small", [
                            _vm._v(_vm._s(_vm.errors.first("category_name")))
                          ])
                        : _vm._e()
                    ]
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "spaceBetween mb-md-2 mb-0" }),
                  _vm._v(" "),
                  _c("hr", { staticClass: "style-two" })
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass:
                      "col-sm-12 ml-auto mr-auto mt-md-2 mt-0 px-md-3 px-1 mb-3"
                  },
                  [
                    _c(
                      "div",
                      { staticClass: "clearfix d-flex justify-content-end" },
                      [
                        _vm.mode === "edit"
                          ? _c(
                              "button",
                              {
                                staticClass: "mx-3 btn btn-secondary",
                                attrs: { type: "button" },
                                on: { click: _vm.onCancel }
                              },
                              [_vm._v("Cancel")]
                            )
                          : _vm._e(),
                        _vm._v(" "),
                        _c(
                          "button",
                          {
                            staticClass: "mx-3 btn bg-default",
                            attrs: {
                              disabled: _vm.$isProcessing,
                              type: "submit"
                            }
                          },
                          [
                            _vm._v(
                              "\n                        " +
                                _vm._s(_vm._f("capitalize")(_vm.mode)) +
                                " Category "
                            ),
                            _c("i", { staticClass: "far fa-paper-plane ml-1" })
                          ]
                        )
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
    require("vue-hot-reload-api")      .rerender("data-v-0e6ca50d", module.exports)
  }
}

/***/ }),

/***/ "./resources/assets/js/views/LOG/category/form.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"babel-preset-env\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"babel-plugin-syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/views/LOG/category/form.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-0e6ca50d\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/views/LOG/category/form.vue")
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
Component.options.__file = "resources\\assets\\js\\views\\LOG\\category\\form.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0e6ca50d", Component.options)
  } else {
    hotAPI.reload("data-v-0e6ca50d", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});
=======
webpackJsonp([30],{"I+tM":function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("transition",{attrs:{name:"fade"}},[a("div",{staticClass:"pt-md-3 pt-2 attendance attendance-view",attrs:{id:"index"}},[a("div",{staticClass:"mt-5 attendance-head"},[a("div",{staticClass:"mb-5 row align-items-center"},[a("div",{staticClass:"col-12 title-con"},[a("span",{staticClass:"title"},[e._v("Generate Report")])])])]),e._v(" "),a("div",{staticClass:"attendance-body"},[a("form",{attrs:{"data-vv-scope":"f1"},on:{submit:function(t){return t.preventDefault(),e.generateReport(t)}}},[a("div",{staticClass:"my-4 clearfix p-5 row bg-white shadow-sm",staticStyle:{"border-radius":".4rem"}},[a("div",{staticClass:"form-group col-md-3 col-sm-6 px-md-3 px-1 float-left"},[a("label",[e._v("Type")]),e._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:e.report.type,expression:"report.type"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"custom-select w-100",attrs:{"data-vv-as":"report type","data-vv-validate-on":"blur",name:"report_type"},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.$set(e.report,"type",t.target.multiple?a:a[0])}}},[a("option",{attrs:{value:""}},[e._v("select type")]),e._v(" "),e._l(e.types,function(t){return a("option",{domProps:{value:t.slug}},[e._v(e._s(e._f("capitalize")(t.name)))])})],2),e._v(" "),e.errors.first("f1.report_type")?a("small",[e._v(e._s(e.errors.first("f1.report_type")))]):e._e()]),e._v(" "),a("div",{staticClass:"form-group col-md-3 col-sm-6 px-md-3 px-1 float-left"},[a("label",[e._v("Branch")]),e._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:e.report.branch.id,expression:"report.branch.id"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"custom-select w-100",attrs:{"data-vv-as":"office branch",name:"branch_id","data-vv-validate-on":"blur",disabled:!e.$store.getters.auth("DSALead")},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.$set(e.report.branch,"id",t.target.multiple?a:a[0])}}},[a("option",{attrs:{value:""}},[e._v("select branch")]),e._v(" "),e._l(e.$store.getters.auth("DSALead")?e.$store.state.branches:e.pageBranch,function(t){return a("option",{domProps:{value:t.id}},[e._v("\n                           "+e._s(t.name)+"\n                        ")])})],2),e._v(" "),e.errors.first("f1.branch_id")?a("small",[e._v(e._s(e.errors.first("f1.branch_id")))]):e._e()]),e._v(" "),a("div",{staticClass:"form-group col-md-3 col-sm-6 px-md-3 px-1 float-left"},[a("label",[e._v("Date from:")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.report.from,expression:"report.from"},{name:"validate",rawName:"v-validate",value:"required|date_format:MM/DD/YYYY",expression:"'required|date_format:MM/DD/YYYY'"}],staticClass:"form-control",attrs:{type:"date","data-vv-as":"Date from",name:"date_from"},domProps:{value:e.report.from},on:{input:function(t){t.target.composing||e.$set(e.report,"from",t.target.value)}}}),e._v(" "),e.errors.first("f1.date_from")?a("small",[e._v(e._s(e.errors.first("f1.date_from")))]):e._e()]),e._v(" "),a("div",{staticClass:"form-group col-md-3 col-sm-6 px-md-3 px-1 float-left"},[a("label",[e._v("Date To:")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.report.to,expression:"report.to"},{name:"validate",rawName:"v-validate",value:"required|date_format:MM/DD/YYYY",expression:"'required|date_format:MM/DD/YYYY'"}],staticClass:"form-control",attrs:{type:"date","data-vv-as":"Date to",name:"date_to"},domProps:{value:e.report.to},on:{input:function(t){t.target.composing||e.$set(e.report,"to",t.target.value)}}}),e._v(" "),e.errors.first("f1.date_to")?a("small",[e._v(e._s(e.errors.first("f1.date_to")))]):e._e()])]),e._v(" "),a("div",{staticClass:"mb-5 px-0 row align-items-center"},[a("div",{staticClass:"clearfix d-flex justify-content-end w-100"},[a("button",{staticClass:"btn bg-default",attrs:{disabled:e.$isProcessing,type:"submit"}},[e._v("\n                        Generate Report "),a("i",{staticClass:"far fa-paper-plane ml-1"})])])])])]),e._v(" "),a("div",{staticClass:"mt-5 attendance-head"},[a("div",{staticClass:"mb-5 row align-items-center"},[a("div",{staticClass:"col-12 title-con"},[a("span",{staticClass:"title"},[e._v("Send Daily Report")])])])]),e._v(" "),a("div",{staticClass:"attendance-body"},[a("form",{attrs:{id:"dsaDailyReportForm","data-vv-scope":"f2"},on:{submit:function(t){return t.preventDefault(),e.submitReport(t)}}},[a("div",{staticClass:"my-4 clearfix p-5 row bg-white shadow-sm",staticStyle:{"border-radius":".4rem"}},[a("div",{staticClass:"form-group col-md-3 col-sm-6 px-md-3 px-1 float-left"},[a("label",[e._v("DSA (Name-ID)")]),e._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:e.dailyReport.user_id,expression:"dailyReport.user_id"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"custom-select w-100",attrs:{"data-vv-validate-on":"blur",name:"dsa"},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.$set(e.dailyReport,"user_id",t.target.multiple?a:a[0])}}},[a("option",{attrs:{value:""}},[e._v("select DSA")]),e._v(" "),e._l(e.users,function(t){return a("option",{domProps:{value:t.id}},[e._v(e._s(t.full_name+" - ("+t.staff_id+")"))])})],2),e._v(" "),e.errors.first("f2.dsa")?a("small",[e._v(e._s(e.errors.first("f2.dsa")))]):e._e()]),e._v(" "),a("div",{staticClass:"form-group col-md-2 col-sm-6 px-md-3 px-1 float-left"},[a("label",[e._v("Date")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.dailyReport.date,expression:"dailyReport.date"},{name:"validate",rawName:"v-validate",value:"required|date_format:MM/DD/YYYY",expression:"'required|date_format:MM/DD/YYYY'"}],staticClass:"form-control",attrs:{name:"date",type:"date"},domProps:{value:e.dailyReport.date},on:{input:function(t){t.target.composing||e.$set(e.dailyReport,"date",t.target.value)}}}),e._v(" "),e.errors.first("f2.date")?a("small",[e._v(e._s(e.errors.first("f2.date")))]):e._e()]),e._v(" "),a("div",{staticClass:"form-group col-md-2 col-sm-6 px-md-3 px-1 float-left"},[a("label",[e._v("Forms registered on portal")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.dailyReport.number_on_portal,expression:"dailyReport.number_on_portal"},{name:"validate",rawName:"v-validate",value:"required|integer|min:0",expression:"'required|integer|min:0'"}],staticClass:"form-control",attrs:{"data-vv-as":"number on portal",name:"number_on_portal",type:"number"},domProps:{value:e.dailyReport.number_on_portal},on:{input:function(t){t.target.composing||e.$set(e.dailyReport,"number_on_portal",t.target.value)}}}),e._v(" "),e.errors.first("f2.number_on_portal")?a("small",[e._v(e._s(e.errors.first("f2.number_on_portal")))]):e._e()]),e._v(" "),a("div",{staticClass:"form-group col-md-2 col-sm-6 px-md-3 px-1 float-left"},[a("label",[e._v("Forms submitted to captain")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.dailyReport.number_to_captain,expression:"dailyReport.number_to_captain"},{name:"validate",rawName:"v-validate",value:"required|integer|min:0",expression:"'required|integer|min:0'"}],staticClass:"form-control",attrs:{"data-vv-as":"number to captain",name:"number_to_captain",type:"number"},domProps:{value:e.dailyReport.number_to_captain},on:{input:function(t){t.target.composing||e.$set(e.dailyReport,"number_to_captain",t.target.value)}}}),e._v(" "),e.errors.first("f2.number_to_captain")?a("small",[e._v(e._s(e.errors.first("f2.number_to_captain")))]):e._e()]),e._v(" "),a("div",{staticClass:"form-group col-md-3 col-sm-6 px-md-3 px-1 float-left"},[a("label",{staticClass:"w-100 float-left"},[e._v("Remark/Comment")]),e._v(" "),a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.dailyReport.remark,expression:"dailyReport.remark"},{name:"validate",rawName:"v-validate",value:"required|max:255",expression:"'required|max:255'"}],staticClass:"form-control",attrs:{cols:"1",name:"remark"},domProps:{value:e.dailyReport.remark},on:{input:function(t){t.target.composing||e.$set(e.dailyReport,"remark",t.target.value)}}}),e._v(" "),e.errors.first("f2.remark")?a("small",[e._v(e._s(e.errors.first("f2.remark")))]):e._e()])]),e._v(" "),a("div",{staticClass:"mb-5 px-0 row align-items-center"},[a("div",{staticClass:"clearfix d-flex justify-content-end w-100"},[a("button",{staticClass:"btn bg-default",attrs:{disabled:e.$isProcessing,type:"submit"}},[e._v("\n                        Log Report "),a("i",{staticClass:"far fa-paper-plane ml-1"})])])])])])])])},staticRenderFns:[]}},UorG:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=a("TOoT"),s=(r=o)&&r.__esModule?r:{default:r},i=a("uD8u");t.default={beforeCreate:function(){var e=this;this.$store.getters.auth("DSACaptain")||this.$networkErr("page"),(0,i.get)("/api/user/"+this.$store.state.user_id).then(function(t){e.report.branch=t.data.user.branch,e.pageBranch.push(t.data.user.branch)}),(0,i.get)("/api/user/getBranchUsers").then(function(t){return e.users=t.data.DSAs}),this.$prepareBranches()},created:function(){this.setDates(),this.initForm()},data:function(){return{types:[{name:"sales report",slug:"sales_report"},{name:"score card",slug:"score_card"},{name:"weekly operations",slug:"weekly_operations"}],report:{to:"",from:"",branch:{id:"",name:""},employee:"",type:""},users:null,dailyReport:null,pageBranch:[]}},methods:{initForm:function(){this.dailyReport={user_id:"",date:this.$getDate(),number_on_portal:"",number_to_captain:"",remark:""}},generateReport:function(){var e=this;this.$validator.validateAll("f1").then(function(t){if(t)if(e.$network()){var a=e.$store.state.branches.find(function(t){return t.id===e.report.branch.id});e.report.branch=a,(0,i.postD)("/api/report",e.report).then(function(t){var r=window.URL.createObjectURL(new Blob([t.data])),o=document.createElement("a");o.href=r,o.setAttribute("download",e.report.type+"_for_"+a.name+".xlsx"),document.body.appendChild(o),o.click()})}else e.$networkErr();else e.$networkErr("form")})},setDates:function(){var e=function(e){return e<10?"0"+e:e},t=function(t){return t.getFullYear()+"-"+e(t.getMonth()+1)+"-"+e(t.getDate())},a=new Date,r=a.getDay(),o=a.getDate()-r+(0===r?-6:1),s=new Date(a.setDate(o)),i=new Date;i.setDate(s.getDate()+5),this.report.from=s=t(s),this.report.to=i=t(i)},submitReport:function(){var e=this;this.$validator.validateAll("f2").then(function(t){t?e.$network()?(e.$LIPS(!0),(0,i.post)("/api/dsa_daily_registration",e.dailyReport).then(function(t){e.$validator.reset(),e.initForm(),e.$scrollToTop(),e.$LIPS(!1),t.data.submitted&&s.default.setSuccess(t.data.message)}).catch(function(){return s.default.setError("Error logging report please try again later!")})):e.$networkErr():e.$networkErr("form")})}}}},khuM:function(e,t,a){var r=a("VU/8")(a("UorG"),a("I+tM"),!1,null,null,null);e.exports=r.exports}});
>>>>>>> a6badb66dd1c3c9d8d4944777dabf072e5614b15
