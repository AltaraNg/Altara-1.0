<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
webpackJsonp([33],{

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"babel-preset-env\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"babel-plugin-syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/views/profile/Edit.vue":
=======
webpackJsonp([33],{

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"babel-preset-env\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"babel-plugin-syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/views/profile/Index.vue":
>>>>>>> ed6e59048439b31995f360ff7e04db059d027dbb
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
<<<<<<< HEAD
  value: true
});
=======
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
>>>>>>> ed6e59048439b31995f360ff7e04db059d027dbb
//
//
//
//
<<<<<<< HEAD
//
//

exports.default = {};

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-02551c6a\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/views/profile/Edit.vue":
=======

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-ebf3aabc\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/views/profile/Index.vue":
>>>>>>> ed6e59048439b31995f360ff7e04db059d027dbb
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
<<<<<<< HEAD
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { attrs: { id: "profile-edit" } }, [
      _c("h4", [_vm._v("Edit Profile")])
    ])
  }
]
=======
  return _c("div", { attrs: { id: "profile-view" } }, [_c("router-view")], 1)
}
var staticRenderFns = []
>>>>>>> ed6e59048439b31995f360ff7e04db059d027dbb
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
<<<<<<< HEAD
    require("vue-hot-reload-api")      .rerender("data-v-02551c6a", module.exports)
=======
    require("vue-hot-reload-api")      .rerender("data-v-ebf3aabc", module.exports)
>>>>>>> ed6e59048439b31995f360ff7e04db059d027dbb
  }
}

/***/ }),

<<<<<<< HEAD
/***/ "./resources/assets/js/views/profile/Edit.vue":
=======
/***/ "./resources/assets/js/views/profile/Index.vue":
>>>>>>> ed6e59048439b31995f360ff7e04db059d027dbb
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
<<<<<<< HEAD
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"babel-preset-env\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"babel-plugin-syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/views/profile/Edit.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-02551c6a\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/views/profile/Edit.vue")
=======
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"babel-preset-env\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"babel-plugin-syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/views/profile/Index.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-ebf3aabc\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/views/profile/Index.vue")
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
Component.options.__file = "resources\\assets\\js\\views\\profile\\Edit.vue"
=======
Component.options.__file = "resources\\assets\\js\\views\\profile\\Index.vue"
>>>>>>> ed6e59048439b31995f360ff7e04db059d027dbb

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
<<<<<<< HEAD
    hotAPI.createRecord("data-v-02551c6a", Component.options)
  } else {
    hotAPI.reload("data-v-02551c6a", Component.options)
=======
    hotAPI.createRecord("data-v-ebf3aabc", Component.options)
  } else {
    hotAPI.reload("data-v-ebf3aabc", Component.options)
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
webpackJsonp([33],{"+/kq":function(e,t){e.exports={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"profile-page sidebar-collapse"},[t("h1",[this._v("This is the profile page")])])}]}},W7ej:function(e,t,s){var n=s("VU/8")(s("zShF"),s("+/kq"),!1,null,null,null);e.exports=n.exports},zShF:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={}}});
>>>>>>> 896a1818948e76f90b06f3a42ed60dfef98fa861
=======
webpackJsonp([33],{"24V1":function(e,t){e.exports={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"profile-view"}},[t("router-view")],1)},staticRenderFns:[]}},RXsi:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,s=r("K23+"),a=(o=s)&&o.__esModule?o:{default:o};t.default={beforeCreate:function(){var e=parseInt(localStorage.getItem("role"));this.$store.dispatch("mutateProfileAccess",e),-1!==this.$store.state.ProfileAccess.indexOf(e)||localStorage.getItem("api_token")||(a.default.setError("You do not have access to that page!"),this.$router.push("/login"))}}},dgKe:function(e,t,r){var o=r("VU/8")(r("RXsi"),r("24V1"),!1,null,null,null);e.exports=o.exports}});
>>>>>>> 976efb13563114c356a829a8b2f4c56625bbae52
=======
});
>>>>>>> ed6e59048439b31995f360ff7e04db059d027dbb
