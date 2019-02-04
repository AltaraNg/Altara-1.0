<<<<<<< HEAD
webpackJsonp([16],{

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
//
//
//
//
//
//
//

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2f542aae\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/AppNavigation.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*Not the css is included in this component to reduce\n* the size of the main css file because\n* the components are lazy loaded*/\n#index a#back {\n  left: 0;\n}\n#index a#forward {\n  right: 0;\n}\n#index a#back, #index a#forward {\n  margin-top: .8rem;\n  position: absolute;\n}\n#index a#back i, #index a#forward i {\n    font-size: 2.4rem;\n}\n#index .forward, #index .back {\n  line-height: 2.4rem;\n  margin-top: -.2rem;\n  font-weight: bold;\n}\n@media (max-width: 990px) {\n#index a#back i, #index a#forward i {\n    font-size: 2.6rem;\n}\n}\n@media (max-width: 600px) {\n#index a#back, #index a#forward, #index [data-title=\"title\"] {\n    margin-top: -.3rem;\n    margin-bottom: .3rem;\n}\n}\n", ""]);

// exports


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
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "h4",
    {
      staticClass: "mx-md-3 mx-0 py-0 my-0 text-center clearfix",
      attrs: { id: "index" }
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
                  { staticClass: "back float-left ml-2 d-none d-sm-block" },
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
            _vm._v(_vm._s(_vm.pageTitle) + " Portal")
          ]),
          _vm._v(" "),
          _c("span", { staticClass: "d-block d-sm-none" }, [
            _vm._v(_vm._s(_vm.pageTitleSmall) + " Portal")
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
                  { staticClass: "forward float-right mr-2 d-none d-sm-block" },
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

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2f542aae\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/AppNavigation.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2f542aae\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/AppNavigation.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("25e038e4", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2f542aae\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./AppNavigation.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2f542aae\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./AppNavigation.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./resources/assets/js/components/AppNavigation.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2f542aae\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/AppNavigation.vue")
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"babel-preset-env\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"babel-plugin-syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/AppNavigation.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-2f542aae\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/AppNavigation.vue")
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
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"babel-preset-env\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"babel-plugin-syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/views/DSA/index.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-066398eb\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/views/DSA/index.vue")
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
Component.options.__file = "resources\\assets\\js\\views\\DSA\\index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-066398eb", Component.options)
  } else {
    hotAPI.reload("data-v-066398eb", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});
=======
webpackJsonp([16,20],{"2Q7A":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.log=function(t,e){t=t.replace(/([A-Z])/g," $1").replace(/^./,function(t){return t.toUpperCase()}),(0,s.post)("/api/log",{action:t,description:e})};var s=a("uD8u")},AusK:function(t,e,a){var s=a("VU/8")(a("kyMT"),a("MS4y"),!1,null,null,null);t.exports=s.exports},Bph5:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});a("uD8u");e.default={message:"",welcome:function(t){this.message="Welcome to Altara credit. Please secure your login details. Staff ID: "+t.loginID+", password: "+t.loginPassword,this.send(t)},customerReg:function(t){this.message="Dear "+t.first_name+" "+t.last_name+", Welcome to Altara Credit Limited, You are hereby invited to our showroom at "+t.branch.description+" to learn more about our offerings. Pick up products now and pay later. We look forward to seeing you. For more info contact: "+t.branch.phone_yoruba+". Your customer id is: "+t.id,this.send({phone:t.telephone.substr(1)})},passwordReset:function(t){this.message="Password reset successful! if your did not request for a new password kindly report back immediately, your staff ID is "+t.staff_id+", new password: "+t.password,this.send(t)},dvaMessage:function(t){this.message=t.message,this.send(t)},send:function(t){console.log(t)}}},MS4y:function(t,e){t.exports={render:function(){var t=this.$createElement,e=this._self._c||t;return e("transition",{attrs:{name:"fade"}},[e("div",{staticClass:"pt-md-3 pt-2",attrs:{id:"index"}},[e("div",{staticClass:"card"},[e("ul",{staticClass:"nav nav-tabs justify-content-center bg-default"},[e("h6",[this._v("Manage Branches")])]),this._v(" "),e("data-viewer",{attrs:{source:"/api/branch",title:"Branch(s)",appModel:"branch"}})],1)])])},staticRenderFns:[]}},"X+Zd":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=c(a("I3G/")),o=c(a("Bph5")),r=a("2Q7A"),n=a("uD8u"),i=a("N71M"),l=c(a("TOoT"));function c(t){return t&&t.__esModule?t:{default:t}}e.default={data:function(){return{model:{},columns:{},query:{page:1,column:"id",direction:"desc",per_page:10,search_column:"id",search_operator:"greater_than",search_input:0},operators:{equal:"=",not_equal:"<>",less_than:"<",greater_than:">",less_than_or_equal_to:"<=",greater_than_or_equal_to:">=",in:"IN",like:"LIKE"},bus:new s.default,form:{},portal_access:[{name:"grant",value:1},{name:"deny",value:0}]}},created:function(){this.$prepareStates(),this.fetchIndexData(),$(document).on("click","tr",function(){$("tr.current").removeClass("current"),$(this).addClass("current")})},updated:function(){$('[data-toggle="tooltip"]').tooltip()},methods:{next:function(){this.model.next_page_url&&(this.query.page++,this.fetchIndexData())},prev:function(){this.model.prev_page_url&&(this.query.page--,this.fetchIndexData())},toggleOrder:function(t){t===this.query.column?this.query.direction="desc"===this.query.direction?"asc":"desc":(this.query.column=t,this.query.direcntion="asc"),this.fetchIndexData()},fetchIndexData:function(){var t=this;this.$LIPS(!0),$(".modal").modal("hide"),(0,n.get)(this.$route.meta.source+"?page="+this.query.page+"&column="+this.query.column+"&per_page="+this.query.per_page+"&direction="+this.query.direction+"&search_input="+this.query.search_input+"&search_column="+this.query.search_column+"&search_operator="+this.query.search_operator).then(function(e){var a=e.data.model.data;a.length&&a[0].state_id&&a.forEach(function(t){return t.state_id=i.store.getters.getStates.find(function(e){return e.id===t.state_id}).name}),s.default.set(t.$data,"model",e.data.model),s.default.set(t.$data,"columns",e.data.columns),t.$scrollToTop(),t.$LIPS(!1)})},accessStatus:function(t){return Boolean(Number(t))},update:function(t,e){this.form=t,$("#"+e).modal("toggle")},resetPassword:function(){var t=this;this.$network()?(this.$LIPS(!0),(0,n.get)("/api/reset-password/"+this.form.id).then(function(e){(0,r.log)("resetUserPassword",t.form.staff_id),l.default.setSuccess("Employee password reset successful!");var a={phone:String(parseInt(t.form.phone_number)),password:e.data.password,staff_id:t.form.staff_id};o.default.passwordReset(a)}).finally(function(){return t.done()})):this.$networkErr()},myLog:function(t){var e=this;this.$network()?(this.$LIPS(!0),(0,n.byMethod)("PUT","/api/user/"+t,this.form).then(function(t){(0,r.log)("PortalAccessUpdated",String(t.data.staff_id)),l.default.setSuccess("Portal access updated",2e4)}).catch(function(){return l.default.setError("Error updating status. Try again later!")}).finally(function(){return e.done()})):this.$networkErr()},done:function(){this.$scrollToTop(),this.$LIPS(!1),$(".modal").modal("hide")}},computed:{user:function(){return"user"===this.$route.meta.appModel},branch:function(){return"branch"===this.$route.meta.appModel},customer:function(){return"customer"===this.$route.meta.appModel}}}},Y1qv:function(t,e,a){var s=a("VU/8")(a("X+Zd"),a("mfxh"),!1,null,null,null);t.exports=s.exports},kyMT:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s,o=a("Y1qv"),r=(s=o)&&s.__esModule?s:{default:s};e.default={components:{DataViewer:r.default}}},mfxh:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("transition",{attrs:{name:"fade"}},[a("div",{staticClass:"pt-md-3 pt-2",attrs:{id:"employeeEdit"}},[a("div",{staticClass:"card",staticStyle:{"border-top":"4px solid #0e5f92"}},[a("div",{staticClass:"px-5 py-4"},[a("div",{staticClass:"px-3 clearfix"},[a("h5",{staticClass:"h5-custom float-left m-0"},[t._v("Staff Management")]),t._v(" "),a("router-link",{staticClass:"float-right btn btn-primary bg-default m-0",attrs:{to:"/hrm/employee/create"}},[t._v("Register a Staff!")])],1)]),t._v(" "),a("hr",{staticClass:"m-0"}),t._v(" "),a("div",[a("div",{staticClass:"card-body p-4 p-md-5"},[a("div",{staticClass:"clearfix w-100"},[a("div",{staticClass:"form-group col-md-2 col-sm-6 px-md-3 px-1 float-left"},[a("label",[t._v("Search Column")]),t._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.query.search_column,expression:"query.search_column"}],staticClass:"custom-select w-100",on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.$set(t.query,"search_column",e.target.multiple?a:a[0])}}},t._l(t.columns,function(e){return a("option",{domProps:{value:e}},[t._v(t._s(t._f("capitalize")(e)))])}))]),t._v(" "),a("div",{staticClass:"form-group col-md-2 col-sm-6 px-md-3 px-1 float-left"},[a("label",[t._v("Search Operator")]),t._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.query.search_operator,expression:"query.search_operator"}],staticClass:"custom-select w-100",on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.$set(t.query,"search_operator",e.target.multiple?a:a[0])}}},t._l(t.operators,function(e,s){return a("option",{domProps:{value:s}},[t._v(t._s(e))])}))]),t._v(" "),a("div",{staticClass:"form-group col-md-6 col-sm-6 px-md-3 px-1 float-left"},[a("label",[t._v("Search Input")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.query.search_input,expression:"query.search_input"}],staticClass:"form-control",attrs:{placeholder:"search...",type:"text"},domProps:{value:t.query.search_input},on:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;t.fetchIndexData()},input:function(e){e.target.composing||t.$set(t.query,"search_input",e.target.value)}}})]),t._v(" "),a("div",{staticClass:"form-group col-md-2 col-sm-6 px-md-3 px-1 pt-md-2 pt-0 float-left"},[a("button",{staticClass:"btn btn-block bg-default mb-0 mt-3 mt-md-4",on:{click:function(e){t.fetchIndexData()}}},[t._v("Filter")])])]),t._v(" "),a("div",{staticClass:"px-0 px-md-3 mt-3 table-responsive"},[a("table",{staticClass:"table m-0  table-bordered table-hover"},[a("thead",{staticClass:"thead-light"},[a("tr",[t._l(t.columns,function(e){return a("th",{attrs:{scope:"col"},on:{click:function(a){t.toggleOrder(e)}}},[a("span",[t._v(t._s(t._f("capitalize")(e)))]),t._v(" "),e===t.query.column?a("span",{staticClass:"dv-table-column"},["desc"===t.query.direction?a("span",[t._v("↑")]):a("span",[t._v("↓")])]):t._e()])}),t._v(" "),t.user||t.branch||t.customer?a("th",{attrs:{scope:"col"}},[a("span",[t._v("Action")])]):t._e()],2)]),t._v(" "),a("tbody",t._l(t.model.data,function(e){return a("tr",[t._l(e,function(e,s){return a("td",[t._v(t._s(e))])}),t._v(" "),t.user?a("td",[a("router-link",{staticClass:"text-center mx-2 btn btn-dark btn-icon btn-sm float-left btn-round",attrs:{to:"/hrm/employee/"+e.id+"/edit","data-placement":"top","data-toggle":"tooltip",title:"Edit Employee Detail"}},[a("i",{staticClass:"fas fa-user-edit"})]),t._v(" "),a("button",{staticClass:"text-center mr-2 btn btn-icon btn-sm float-left btn-round",class:{"btn-success":t.accessStatus(e.portal_access),"btn-danger":!t.accessStatus(e.portal_access)},attrs:{"data-placement":"top","data-toggle":"tooltip",title:"Edit Employee Portal Access"},on:{click:function(a){t.update(e,"editPortalAccess")}}},[t.accessStatus(e.portal_access)?a("i",{staticClass:"fas fa-lock-open"}):a("i",{staticClass:"fas fa-lock"})]),t._v(" "),a("button",{staticClass:"text-center mr-2 btn btn-warning btn-icon btn-sm float-left btn-round",attrs:{"data-placement":"top","data-toggle":"tooltip",title:"Reset Employee Password"},on:{click:function(a){t.update(e,"editPassword")}}},[a("i",{staticClass:"fas fa-key"})])],1):t._e(),t._v(" "),t.branch||t.customer?a("td",[a("button",{staticClass:"text-center mx-2 btn btn-success btn-icon btn-sm float-left btn-round",attrs:{title:t.branch?"update branch details":"view details","data-placement":"top","data-toggle":"tooltip"},on:{click:function(a){t.branch?t.$router.push("/fsl/branch/"+e.id+"/edit"):t.$router.push("/customer/"+e.id)}}},[t.branch?a("i",{staticClass:"fas fa-cog"}):t._e(),t._v(" "),t.customer?a("i",{staticClass:"far fa-user"}):t._e()])]):t._e()],2)}))])]),t._v(" "),a("nav",{staticClass:"clearfix pt-5",attrs:{"aria-label":"Page navigation example"}},[a("span",{staticClass:"float-left col-md-6 col-12 px-0 mb-5 mb-md-0"},[t._v("\n                 Displaying: "+t._s(t.model.from)+" - "+t._s(t.model.to)+" of "+t._s(t.model.total)+" "+t._s(t._f("capitalize")(t.$route.meta.appModel))+" (s)\n             ")]),t._v(" "),a("span",{staticClass:"justify-content-end float-right col-md-6 col-12 px-0 mb-5 mb-md-0"},[a("ul",{staticClass:"pagination m-0 float-right"},[a("li",{staticClass:"page-item"},[a("a",{staticClass:"page-link",on:{click:function(e){t.prev()}}},[a("i",{staticClass:"fas fa-arrow-circle-left"})])]),t._v(" "),a("li",{staticClass:"page-item"},[a("span",{staticClass:"page-link"},[t._v("Current Page: "+t._s(t.model.current_page))])]),t._v(" "),a("li",{staticClass:"page-item"},[a("a",{staticClass:"page-link",on:{click:function(e){t.next()}}},[a("i",{staticClass:"fas fa-arrow-circle-right"})])])]),t._v(" "),a("span",{staticClass:"float-left"},[a("span",{staticClass:"py-2 pr-3 float-left"},[t._v("Rows Per Page ")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.query.per_page,expression:"query.per_page"}],staticClass:"form-control float-left",attrs:{placeholder:"search...",type:"text"},domProps:{value:t.query.per_page},on:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;t.fetchIndexData()},input:function(e){e.target.composing||t.$set(t.query,"per_page",e.target.value)}}})])])])]),t._v(" "),a("div",{staticClass:"modal fade",attrs:{id:"editPortalAccess"}},[a("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[a("div",{staticClass:"modal-content"},[a("div",{staticClass:"modal-header py-2"},[a("h6",{staticClass:"modal-title py-1"},[t._v("Edit Employee Portal Access")]),t._v(" "),a("a",{staticClass:"close py-1",attrs:{"aria-label":"Close","data-dismiss":"modal"}},[a("span",{staticClass:"modal-close text-danger",attrs:{"aria-hidden":"true"}},[a("i",{staticClass:"fas fa-times"})])])]),t._v(" "),a("form",[a("div",{staticClass:"modal-body"},[a("div",{staticClass:"form-group col-12 float-left mt-0 mb-2"},[a("span",{staticClass:"mb-2 w-100 float-left pl-1 text-center",staticStyle:{"font-size":"14px"}},[t._v("\n                        Please Verify you selected the right access before clicking "),a("br"),t._v(" "),a("strong",[t._v("Save Changes ")]),t._v("!\n                     ")]),t._v(" "),t._l(t.portal_access,function(e){return a("div",{staticClass:"radio p-0 col-6 float-left text-center"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.portal_access,expression:"form.portal_access"}],attrs:{id:e.name,name:"access",type:"radio"},domProps:{value:e.value,checked:t._q(t.form.portal_access,e.value)},on:{change:function(a){t.$set(t.form,"portal_access",e.value)}}}),t._v(" "),a("label",{attrs:{for:e.name}},[t._v(t._s(t._f("capitalize")(e.name))+" Access")])])})],2)]),t._v(" "),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"m-2 btn btn-secondary",attrs:{"data-dismiss":"modal",type:"button"}},[t._v("cancel")]),t._v(" "),a("button",{staticClass:"m-2 btn bg-default",attrs:{disabled:t.$isProcessing,type:"button"},on:{click:function(e){t.myLog(t.form.id)}}},[t._v(" Save changes "),a("i",{staticClass:"far fa-paper-plane ml-1"})])])])])])]),t._v(" "),a("div",{staticClass:"modal fade",attrs:{id:"editPassword"}},[a("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[a("div",{staticClass:"modal-content"},[a("div",{staticClass:"modal-header py-2"},[a("h6",{staticClass:"modal-title py-1"},[t._v("Reset Employee Password")]),t._v(" "),a("a",{staticClass:"close py-1",attrs:{"aria-label":"Close","data-dismiss":"modal"}},[a("span",{staticClass:"modal-close text-danger",attrs:{"aria-hidden":"true"}},[a("i",{staticClass:"fas fa-times"})])])]),t._v(" "),a("form",[a("div",{staticClass:"modal-body"},[a("div",{staticClass:"form-group col-12 float-left mt-2 mb-4 "},[a("span",[t._v("A new password will be sent to the employee via "),a("strong",[t._v("sms")]),t._v(" on the\n                                   telephone He/She "),a("strong",[t._v("used for registration")]),t._v(" on this portal.\n                                 "),a("br"),a("br"),t._v("Please Kindly verify that the phone to receive the new password is on and active!\n                             ")]),a("br"),a("br"),t._v(" "),a("u",[a("em",[t._v("click the continue and reset password to finish this task!")])])])]),t._v(" "),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"m-2 btn btn-secondary",attrs:{"data-dismiss":"modal",type:"button"}},[t._v("cancel")]),t._v(" "),a("button",{staticClass:"m-2 btn bg-default",attrs:{disabled:t.$isProcessing,type:"button"},on:{click:t.resetPassword}},[t._v("\n                              continue and reset password "),a("i",{staticClass:"far fa-paper-plane ml-1"})])])])])])])])])])])},staticRenderFns:[]}}});
>>>>>>> 2dc2e2c495d18c7a9372aa09bf9e80a4bd45b742
