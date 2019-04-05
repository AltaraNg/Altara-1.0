<<<<<<< HEAD
webpackJsonp([26],{

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"babel-preset-env\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"babel-plugin-syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/views/NotFound.vue":
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

exports.default = {};

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-334cb5fc\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/views/NotFound.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("transition", { attrs: { name: "fade" } }, [
    _c("div", { staticClass: "container" }, [
      _c("h3", { staticClass: "text-center text-secondary" }, [
        _vm._v(
          "\n            Error 404! Sorry the page you are looking for could not be found!\n        "
        )
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-334cb5fc", module.exports)
  }
}

/***/ }),

/***/ "./resources/assets/js/views/NotFound.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"babel-preset-env\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"babel-plugin-syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/views/NotFound.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-334cb5fc\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/views/NotFound.vue")
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
Component.options.__file = "resources\\assets\\js\\views\\NotFound.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-334cb5fc", Component.options)
  } else {
    hotAPI.reload("data-v-334cb5fc", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});
=======
webpackJsonp([26],{W9uF:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=a("I3G/"),s=(r=o)&&r.__esModule?r:{default:r};t.default={props:{},data:function(){return{form:{product_id:"PID-0001",product_name:null,product_desc:null,category_id:"",supplier_id:"",brand_id:"",date_supplied:this.$getDate(),date_sold:null,sold_by:"",inventory_agent:""},categories:[{id:1,name:"Fans"},{id:2,name:"Refrigerators"},{id:3,name:"Sound systems"},{id:4,name:"Phones"}],suppliers:[{id:1,name:"Supplier 1"},{id:2,name:"Supplier 2"},{id:3,name:"Supplier 3"},{id:4,name:"Supplier 4"}],brands:[{id:1,name:"synix"},{id:2,name:"samsung"},{id:3,name:"toshiba"},{id:4,name:"panasoni"}],floorAgents:[{id:1,name:"agent-name-1"},{id:2,name:"agent-name-1"},{id:3,name:"agent-name-1"},{id:4,name:"agent-name-1"}],inventoryAgents:[{id:1,name:"officer-name-1"},{id:2,name:"officer-name-1"},{id:3,name:"officer-name-1"},{id:4,name:"officer-name-1"}],mode:null,error:{},show:!1,resource:"products",store:"/api/products",method:"POST",title:"Create"}},beforeRouteEnter:function(e,t,a){a(function(t){return t.setMode(e.meta.mode)})},beforeRouteUpdate:function(e,t,a){this.store="/api/products/"+this.$route.params.id,this.method="PUT",this.setMode(e.meta.mode),a()},methods:{setMode:function(e){this.show=!1,s.default.set(this.$data,"mode",e)},onCancel:function(){},onSave:function(){var e=this;this.$validator.validateAll().then(function(t){t?e.$network()?(e.$LIPS(!0),e.error={},console.log(e.form),e.$LIPS(!1)):e.$networkErr():e.$networkErr("form")})}}}},"b+Kk":function(e,t,a){var r=a("VU/8")(a("W9uF"),a("yIdl"),!1,null,null,null);e.exports=r.exports},yIdl:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("transition",{attrs:{name:"fade"}},[a("div",{staticClass:"pt-md-3 pt-2",attrs:{id:"employeeRegister"}},[a("div",{staticClass:"card"},[a("ul",{staticClass:"nav nav-tabs justify-content-center bg-default"},[a("h6",[e._v(e._s(e.mode)+" Product")])]),e._v(" "),a("div",{staticClass:"card-body pl-4 pr-4"},[a("form",{on:{submit:function(t){return t.preventDefault(),e.onSave(t)}}},[a("h5",[e._v("Product Details")]),e._v(" "),a("div",{staticClass:"clearfix"},[a("div",{staticClass:"form-group col-md-6 col-12 float-left px-0 px-md-3"},[a("label",[e._v("Product ID")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.form.product_id,expression:"form.product_id"},{name:"validate",rawName:"v-validate",value:"required|max:50",expression:"'required|max:50'"}],staticClass:"form-control",attrs:{"data-vv-as":"product id",name:"product_id",placeholder:"product id",type:"text",disabled:""},domProps:{value:e.form.product_id},on:{input:function(t){t.target.composing||e.$set(e.form,"product_id",t.target.value)}}}),e._v(" "),e.errors.first("product_id")?a("small",[e._v(e._s(e.errors.first("product_id")))]):e._e()]),e._v(" "),a("div",{staticClass:"form-group col-md-6 col-12 float-left px-0 px-md-3"},[a("label",[e._v("Product name")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.form.product_name,expression:"form.product_name"},{name:"validate",rawName:"v-validate",value:"required|max:150",expression:"'required|max:150'"}],staticClass:"form-control",attrs:{"data-vv-as":"product name",name:"product_name",placeholder:"product name",type:"text"},domProps:{value:e.form.product_name},on:{input:function(t){t.target.composing||e.$set(e.form,"product_name",t.target.value)}}}),e._v(" "),e.errors.first("product_name")?a("small",[e._v(e._s(e.errors.first("product_name")))]):e._e()]),e._v(" "),a("div",{staticClass:"spaceBetween mb-md-2 mb-0"}),e._v(" "),a("div",{staticClass:"form-group col-md-6 col-12 float-left px-0 px-md-3"},[a("label",[e._v("Product description")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.form.product_desc,expression:"form.product_desc"},{name:"validate",rawName:"v-validate",value:"required|max:50",expression:"'required|max:50'"}],staticClass:"form-control",attrs:{"data-vv-as":"product description",name:"product_desc",placeholder:"product desc",type:"text"},domProps:{value:e.form.product_desc},on:{input:function(t){t.target.composing||e.$set(e.form,"product_desc",t.target.value)}}}),e._v(" "),e.errors.first("product_desc")?a("small",[e._v(e._s(e.errors.first("product_desc")))]):e._e()]),e._v(" "),a("div",{staticClass:"form-group col-md-6 col-12 float-left px-0 px-md-3"},[a("label",[e._v("Category ID")]),e._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:e.form.category_id,expression:"form.category_id"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"custom-select w-100",attrs:{name:"category_id","data-vv-validate-on":"blur","data-vv-as":"category id"},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.$set(e.form,"category_id",t.target.multiple?a:a[0])}}},[a("option",{attrs:{value:"",selected:""}},[e._v("-- select category --")]),e._v(" "),e._l(e.categories,function(t){return a("option",{domProps:{value:t.id}},[e._v(e._s(e._f("capitalize")(t.name)))])})],2),e._v(" "),e.errors.first("category_id")?a("small",[e._v(e._s(e.errors.first("category_id")))]):e._e()]),e._v(" "),a("div",{staticClass:"spaceBetween mb-md-2 mb-0"}),e._v(" "),a("div",{staticClass:"form-group col-md-6 col-12 float-left px-0 px-md-3"},[a("label",[e._v("Supplier ID")]),e._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:e.form.supplier_id,expression:"form.supplier_id"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"custom-select w-100",attrs:{name:"supplier_id","data-vv-validate-on":"blur","data-vv-as":"supplier id"},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.$set(e.form,"supplier_id",t.target.multiple?a:a[0])}}},[a("option",{attrs:{value:"",selected:""}},[e._v("-- select supplier --")]),e._v(" "),e._l(e.suppliers,function(t){return a("option",{domProps:{value:t.id}},[e._v(e._s(e._f("capitalize")(t.name)))])})],2),e._v(" "),e.errors.first("supplier_id")?a("small",[e._v(e._s(e.errors.first("supplier_id")))]):e._e()]),e._v(" "),a("div",{staticClass:"form-group col-md-6 col-12 float-left px-0 px-md-3"},[a("label",[e._v("Brand ID")]),e._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:e.form.brand_id,expression:"form.brand_id"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"custom-select w-100",attrs:{name:"brand_id","data-vv-validate-on":"blur","data-vv-as":"brand id"},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.$set(e.form,"brand_id",t.target.multiple?a:a[0])}}},[a("option",{attrs:{value:"",selected:""}},[e._v("-- select brand --")]),e._v(" "),e._l(e.brands,function(t){return a("option",{domProps:{value:t.id}},[e._v(e._s(e._f("capitalize")(t.name)))])})],2),e._v(" "),e.errors.first("brand_id")?a("small",[e._v(e._s(e.errors.first("brand_id")))]):e._e()]),e._v(" "),a("div",{staticClass:"spaceBetween mb-md-2 mb-0"}),e._v(" "),a("div",{staticClass:"form-group col-md-6 col-12 float-left px-0 px-md-3"},[a("label",[e._v("Date supplied")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.form.date_supplied,expression:"form.date_supplied"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",attrs:{"data-vv-as":"date supplied",name:"date_supplied",type:"date"},domProps:{value:e.form.date_supplied},on:{input:function(t){t.target.composing||e.$set(e.form,"date_supplied",t.target.value)}}}),e._v(" "),e.errors.first("date_supplied")?a("small",[e._v(e._s(e.errors.first("date_supplied")))]):e._e()]),e._v(" "),a("div",{staticClass:"form-group col-md-6 col-12 float-left px-0 px-md-3"},[a("label",[e._v("Date sold")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.form.date_sold,expression:"form.date_sold"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",attrs:{"data-vv-as":"date sold",name:"date_sold",type:"date"},domProps:{value:e.form.date_sold},on:{input:function(t){t.target.composing||e.$set(e.form,"date_sold",t.target.value)}}}),e._v(" "),e.errors.first("date_sold")?a("small",[e._v(e._s(e.errors.first("date_sold")))]):e._e()]),e._v(" "),a("div",{staticClass:"spaceBetween mb-md-2 mb-0"}),e._v(" "),a("div",{staticClass:"form-group col-md-6 col-12 float-left px-0 px-md-3"},[a("label",[e._v("Sold by")]),e._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:e.form.sold_by,expression:"form.sold_by"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"custom-select w-100",attrs:{name:"sold_by","data-vv-validate-on":"blur","data-vv-as":"sold by"},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.$set(e.form,"sold_by",t.target.multiple?a:a[0])}}},[a("option",{attrs:{value:"",selected:""}},[e._v("-- select floor agent --")]),e._v(" "),e._l(e.floorAgents,function(t){return a("option",{domProps:{value:t.id}},[e._v(e._s(e._f("capitalize")(t.name)))])})],2),e._v(" "),e.errors.first("sold_by")?a("small",[e._v(e._s(e.errors.first("sold_by")))]):e._e()]),e._v(" "),a("div",{staticClass:"form-group col-md-6 col-12 float-left px-0 px-md-3"},[a("label",[e._v("Inventory agent")]),e._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:e.form.inventory_agent,expression:"form.inventory_agent"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"custom-select w-100",attrs:{name:"inventory_agent","data-vv-validate-on":"blur","data-vv-as":"inventory agent"},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.$set(e.form,"inventory_agent",t.target.multiple?a:a[0])}}},[a("option",{attrs:{value:"",selected:""}},[e._v("-- select inventory agents --")]),e._v(" "),e._l(e.inventoryAgents,function(t){return a("option",{domProps:{value:t.id}},[e._v(e._s(e._f("capitalize")(t.name)))])})],2),e._v(" "),e.errors.first("inventory_agent")?a("small",[e._v(e._s(e.errors.first("inventory_agent")))]):e._e()]),e._v(" "),a("div",{staticClass:"spaceBetween mb-md-2 mb-0"}),e._v(" "),a("hr",{staticClass:"style-two"})]),e._v(" "),a("div",{staticClass:"col-sm-12 ml-auto mr-auto mt-md-2 mt-0 px-md-3 px-1 mb-3"},[a("div",{staticClass:"clearfix d-flex justify-content-end"},["edit"===e.mode?a("button",{staticClass:"mx-3 btn btn-secondary",attrs:{type:"button"},on:{click:e.onCancel}},[e._v("Cancel")]):e._e(),e._v(" "),a("button",{staticClass:"mx-3 btn bg-default",attrs:{disabled:e.$isProcessing,type:"submit"}},[e._v("\n                        "+e._s(e._f("capitalize")(e.mode))+" Product "),a("i",{staticClass:"far fa-paper-plane ml-1"})])])])])])])])])},staticRenderFns:[]}}});
>>>>>>> a6badb66dd1c3c9d8d4944777dabf072e5614b15
