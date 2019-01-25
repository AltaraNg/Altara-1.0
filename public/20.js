<<<<<<< HEAD
webpackJsonp([20],{

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"babel-preset-env\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"babel-plugin-syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/views/profile/Index.vue":
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

var _vuex = __webpack_require__("./node_modules/vuex/dist/vuex.esm.js");

var _auth = __webpack_require__("./resources/assets/js/store/auth.js");

var _auth2 = _interopRequireDefault(_auth);

var _flash = __webpack_require__("./resources/assets/js/helpers/flash.js");

var _flash2 = _interopRequireDefault(_flash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    data: function data() {
        return {
            Auth: _auth2.default.state
        };
    },

    computed: _extends({}, (0, _vuex.mapGetters)(['getProfileAccess'])),
    methods: _extends({}, (0, _vuex.mapActions)([])),
    beforeCreate: function beforeCreate() {
        var role_id = parseInt(localStorage.getItem('role'));
        this.$store.dispatch('mutateProfileAccess', role_id);
        if (!(this.$store.state.ProfileAccess.indexOf(role_id) !== -1) && !localStorage.getItem('api_token')) {
            _flash2.default.setError('You do not have access to that page!');
            this.$router.push('/login');
        }
    }
};

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
webpackJsonp([20],{"6jbp":function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s,r=e("qYF3"),i=(s=r)&&s.__esModule?s:{default:s};a.default={data:function(){return{cards:[{name:"DSA",url:"dsa/home",icon:["fa-id-card"]},{name:"DVA",url:"dva/home",icon:["fa-file-signature"]},{name:"HRM",url:"hrm/home",icon:["fa-female","fa-male"]},{name:"FSL",url:"fsl/home",icon:["fa-box"]}]}},beforeCreate:function(){i.default.initialize(),this.$store.state.api_token||this.$store.state.authRole||this.$store.dispatch("mutateAuth")}}},NZZK:function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"col-md-12 px-md-3 p-0"},[t._l(t.cards,function(a){return t.$store.getters["verify"+a.name+"Access"]?e("div",{staticClass:"col-md-4 col-sm-6 float-left product py-md-2 py-0 px-md-4 px-3"},[e("router-link",{staticClass:"card",attrs:{to:a.url}},[e("ul",{staticClass:"nav nav-tabs bg-default justify-content-center"},[e("h6",[t._v(t._s(a.name)+" Portal")])]),t._v(" "),e("div",{staticClass:"card-body float-left w-100"},[e("div",{staticClass:"text-center w-100 float-left"},[t._l(a.icon,function(t){return e("i",{staticClass:"fas",class:t})}),t._v(" "),e("p",{staticClass:"pt-md-3 pt-2"},[t._v("For the "+t._s(a.name)+" Agents.")])],2)])])],1):t._e()}),t._v(" "),t._m(0)],2)},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"col-md-4 col-sm-6 float-left product py-md-2 py-0 px-md-4 px-3"},[a("a",{staticClass:"card",attrs:{href:"http://catalog-altara.herokuapp.com/",target:"_blank"}},[a("ul",{staticClass:"nav nav-tabs bg-default justify-content-center"},[a("h6",[this._v("Altara Catalogue")])]),this._v(" "),a("div",{staticClass:"card-body float-left w-100"},[a("div",{staticClass:"text-center w-100 float-left"},[a("i",{staticClass:"far fa-images"}),this._v(" "),a("p",{staticClass:"pt-md-3 pt-2"},[this._v("Official Altara Online Catalogue")])])])])])}]}},NhpB:function(t,a,e){var s=e("uvy2");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);e("rjj0")("7b8b8536",s,!0,{})},gWaj:function(t,a,e){var s=e("VU/8")(e("6jbp"),e("NZZK"),!1,function(t){e("NhpB")},null,null);t.exports=s.exports},uvy2:function(t,a,e){(t.exports=e("FZ+f")(!1)).push([t.i,".product .card{-webkit-transition:all .2s;transition:all .2s}.product .card:hover{-webkit-transform:scale(1.02);transform:scale(1.02)}.product .card i,.product .card svg{font-size:9rem;opacity:.1;margin:1rem auto}@media (max-width:990px){.product i,.product svg{font-size:1.2rem}}@media (max-width:600px){.product i,.product svg{font-size:1rem}}",""])}});
>>>>>>> 5b66d6bd3124cd9c1e27808029b5045efc350129
