<<<<<<< HEAD
webpackJsonp([19],{

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"babel-preset-env\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"babel-plugin-syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/portalCard.vue":
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

exports.default = {
    props: { title: '', desc: '', url: '', url_c: '', aces: { default: true } }
    /*title is the card title also mean the portal title.
    * desc is a few word description of the portal
    * url is the link to the portal
    * url_c is the caption for the link
    * aces is used in situations when a particular portal is accessible to only few person in a
    * department hence from the parent component the aces will be set to false is want
    * only few people to access it. true means everyone in that dept can access it.*/
};

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"babel-preset-env\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"babel-plugin-syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/views/DSA/HomePage.vue":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _portalCard = __webpack_require__("./resources/assets/js/components/portalCard.vue");

var _portalCard2 = _interopRequireDefault(_portalCard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    components: { PortalCard: _portalCard2.default },
    data: function data() {
        return {
            portals: [{
                url: 'customer/create',
                title: 'Customer Registration',
                url_c: 'Register new customer now!',
                desc: 'Registering new customers'
            }, {
                url: 'customer/update',
                title: 'Customer Update',
                url_c: 'Update customers details!',
                desc: 'Updating customers details'
            }, {
                url: 'report',
                title: 'Sales Reporting',
                url_c: 'Get Reports',
                desc: 'Real time DSA reports!',
                aces: this.$store.getters.auth('DSACaptain')
            }, {
                url: '/customer',
                title: 'Customer List',
                url_c: 'View Customer List',
                desc: 'View all registered customers!'
            }]
        };
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

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-28781233\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/portalCard.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.aces
    ? _c("div", { staticClass: "col-md-4 col-sm-6 float-left product p-4" }, [
        _c("div", { staticClass: "portal-card clearfix" }, [
          _c("div", { staticClass: "first portion clearfix" }, [
            _c("span", { staticClass: "deco" }),
            _c("span", { staticClass: "deco second" }),
            _vm._v(" "),
            _c("span", { staticClass: "portal-title" }, [
              _vm._v(_vm._s(_vm._f("capitalize")(_vm.title)))
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "portion clearfix" }, [
            _c("p", [_vm._v(_vm._s(_vm._f("capitalize")(_vm.desc)))]),
            _vm._v(" "),
            _c("h6", { staticStyle: { "margin-top": "2rem" } }, [
              _vm._v(_vm._s(_vm._f("capitalize")(_vm.url_c)))
            ]),
            _vm._v(" "),
            _c("span", { staticClass: "deco-down first" }),
            _vm._v(" "),
            _c(
              "span",
              { staticClass: "deco-down second" },
              [
                _c(
                  "router-link",
                  {
                    staticClass: "btn bg-default btn-round m-0",
                    attrs: { to: _vm.url }
                  },
                  [
                    _vm._v("\n                   continue "),
                    _c("span", { staticClass: "custom-icon ml-2" }, [
                      _c("i", { staticClass: "now-ui-icons ui-1_send" })
                    ])
                  ]
                )
              ],
              1
            )
          ])
        ])
      ])
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-28781233", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-3c1dfcb6\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/views/DSA/HomePage.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("transition", { attrs: { name: "fade" } }, [
    _c(
      "div",
      _vm._l(_vm.portals, function(portal) {
        return _c(
          "div",
          [
            _c("portal-card", {
              attrs: {
                url: portal.url,
                title: portal.title,
                url_c: portal.url_c,
                desc: portal.desc,
                aces: portal.aces
              }
            })
          ],
          1
        )
      })
    )
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-3c1dfcb6", module.exports)
  }
}

/***/ }),

/***/ "./resources/assets/js/components/portalCard.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"babel-preset-env\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"babel-plugin-syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/portalCard.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-28781233\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/portalCard.vue")
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
Component.options.__file = "resources\\assets\\js\\components\\portalCard.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-28781233", Component.options)
  } else {
    hotAPI.reload("data-v-28781233", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/js/views/DSA/HomePage.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"babel-preset-env\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"babel-plugin-syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/views/DSA/HomePage.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-3c1dfcb6\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/views/DSA/HomePage.vue")
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
Component.options.__file = "resources\\assets\\js\\views\\DSA\\HomePage.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3c1dfcb6", Component.options)
  } else {
    hotAPI.reload("data-v-3c1dfcb6", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});
=======
webpackJsonp([19],{"+O4B":function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"mt-5 attendance-head"},[s("div",{staticClass:"mb-5 row align-items-center"},[s("div",{staticClass:"col-12 title-con"},[s("span",{staticClass:"title"},[t._v(t._s(t._f("capitalize")(t.title)))]),t._v(" "),t.to?s("div",{staticClass:"row justify-content-end"},[s("router-link",{staticClass:"text-link mt-3",attrs:{to:t.to}},[t._v(t._s(t.buttonTitle))])],1):t._e()])])])},staticRenderFns:[]}},"57Cy":function(t,a,s){var i=s("VU/8")(s("N2ek"),s("WNta"),!1,null,null,null);t.exports=i.exports},EJ7O:function(t,a,s){var i=s("VU/8")(s("oKx2"),s("+O4B"),!1,null,null,null);t.exports=i.exports},N2ek:function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var i=o(s("I3G/")),e=s("p/p5"),l=o(s("K23+")),n=o(s("EJ7O"));function o(t){return t&&t.__esModule?t:{default:t}}var c=function(t){var a=t.page;return"/caution"+(a?"?page="+a:"")};a.default={components:{CustomHeader:n.default},data:function(){return{show:!1,caution:null,cautions:{},columns:[{name:"Employee",col:4},{name:"Issued by",col:3},{name:"Reason",col:2},{name:"Penalty",col:2},{name:"Date",col:1}]}},beforeRouteEnter:function(t,a,s){var i=t.query;(0,e.get)("/api"+c(i)).then(function(t){var a=t.data;return s(function(t){return t.prepareForm(a)})}).catch(function(t){return s(function(a){return a.handleErr(t)})})},beforeRouteUpdate:function(t,a,s){var i=t.query,l=this;this.show=!1,this.$LIPS(!0),(0,e.get)("/api"+c(i)).then(function(t){var a=t.data;l.prepareForm(a),s()}).catch(function(t){l.handleErr(t),s()})},methods:{prepareForm:function(t){var a=t.cautions;a.data.length<1&&0!==a.total&&this.$router.push({query:{page:a.last_page}}),a.data.length&&(i.default.set(this.$data,"cautions",a),this.show=!0),this.$LIPS(!1)},handleErr:function(t){l.default.setError("Error Fetching Cautions")},displayInfo:function(t){return i.default.set(this.$data,"caution",t),$("#view-caution").modal("toggle")}},updated:function(){var t=this;$('[data-toggle="tooltip"]').tooltip({boundary:"window",html:!0}),$(document).on("hidden.bs.modal",".modal",function(){return t.caution=""})}}},WNta:function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("transition",{attrs:{name:"fade"}},[s("div",{staticClass:"pt-md-3 pt-2 attendance-view",attrs:{id:"index"}},[s("custom-header",{attrs:{to:"caution/create",title:"Caution(s) register","button-title":"click here to send caution a staff!"}}),t._v(" "),t.show?s("div",{staticClass:"mt-5 row attendance-head mb-4"},t._l(t.columns,function(a){var i=a.name,e=a.col;return s("div",{class:"col-"+e},[s("div",{staticClass:"row"},[s("div",{staticClass:"light-heading"},[s("span",{staticClass:"d-none d-sm-inline"}),t._v(" "+t._s(i))])])])})):t._e(),t._v(" "),s("div",{staticClass:"mt-1 attendance-body"},[t.show?s("div",[t._l(t.cautions.data,function(a,i){return s("div",{staticClass:"mb-3 px-0 row align-items-center attendance-item",attrs:{"data-toggle":"tooltip","data-placement":"top",title:"click on here to view full details!"},on:{click:function(s){t.displayInfo(a)}}},[s("div",{staticClass:"col-12 col-xs-4 col-md-4 col-lg-4"},[s("div",{staticClass:"row align-items-center"},[s("div",{staticClass:"ml-5 mr-3 sm-hide"},[s("span",{staticClass:"user mx-auto"},[t._v("\n                                    "+t._s(i+1+10*(t.cautions.current_page-1))+"\n                                ")])]),t._v(" "),s("div",{staticClass:"col"},[s("span",{staticClass:"user-name"},[t._v(t._s(a.user.full_name))])])])]),t._v(" "),s("div",{staticClass:"col-12 col-xs-3 col-md-3 col-lg-3"},[s("div",{staticClass:"row"},[s("span",[t._v(t._s(a.issuer.full_name))])])]),t._v(" "),s("div",{staticClass:"col-12 col-xs-2 col-md-2 col-lg-2 sm-hide"},[s("div",{staticClass:"row"},[s("span",[t._v(t._s(a.reason_min))])])]),t._v(" "),s("div",{staticClass:"col-6 col-xs-2 col-md-2 col-lg-2 pr-3 py-4 py-sm-0 px-sm-0 px-lg-4 sm-hide"},[s("div",{staticClass:"row"},[s("span",[t._v(t._s(a.penalty_min))])])]),t._v(" "),s("div",{staticClass:"col-6 col-xs-1 col-md-1 col-lg-1 pl-3 py-4 py-sm-0"},[s("div",{staticClass:"row"},[s("span",[t._v("\n                                "+t._s(a.date)+"\n                            ")])])])])}),t._v(" "),s("div",{staticClass:"mb-5 px-0 row align-items-center"},[s("div",{staticClass:"w-100 mb-4 mt-5 mx-0 hr"}),t._v(" "),s("div",{staticClass:"clearfix w-100 mt-4"},[s("div",{staticClass:"float-left"},[s("strong",{staticClass:"light-heading float-left"},[t._v("\n                                Displaying: "+t._s(t.cautions.from)+" - "+t._s(t.cautions.to)+" of "+t._s(t.cautions.total)+"\n                            ")])]),t._v(" "),s("nav",{staticClass:"float-right",attrs:{"aria-label":"Page navigation example"}},[s("ul",{staticClass:"pagination pagination-lg float-left"},[s("li",{staticClass:"page-item",class:t.cautions.first_page_url?"":"disabled"},[s("router-link",{staticClass:"page-link",attrs:{to:{query:{page:1}}}},[t._v("\n                                        First\n                                    ")])],1),t._v(" "),s("li",{staticClass:"page-item",class:t.cautions.prev_page_url?"":"disabled"},[s("router-link",{staticClass:"page-link",attrs:{to:{query:{page:t.cautions.current_page-1}}}},[t._v("\n                                        Previous\n                                    ")])],1),t._v(" "),s("li",{staticClass:"page-item"},[s("span",{staticClass:"page-link"},[t._v("Current Page: "+t._s(t.cautions.current_page))])]),t._v(" "),s("li",{staticClass:"page-item",class:t.cautions.next_page_url?"":"disabled"},[s("router-link",{staticClass:"page-link",attrs:{to:{query:{page:t.cautions.current_page+1}}}},[t._v("\n                                        Next\n                                    ")])],1),t._v(" "),s("li",{staticClass:"page-item",class:t.cautions.last_page_url?"":"disabled"},[s("router-link",{staticClass:"page-link",attrs:{to:{query:{page:t.cautions.last_page}}}},[t._v("\n                                        Last\n                                    ")])],1)])])])])],2):s("div",{staticClass:"row attendance-item p-5 mb-5"},[s("span",{staticClass:"no-attendance"},[t._v("No cautions has been issued!")])])]),t._v(" "),s("div",{staticClass:"modal fade",attrs:{id:"view-caution"}},[s("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[s("div",{staticClass:"modal-content"},[s("div",{staticClass:"modal-header py-2"},[s("h6",{staticClass:"modal-title py-1"},[t._v("Caution")]),t._v(" "),s("a",{staticClass:"close py-1",attrs:{"aria-label":"Close","data-dismiss":"modal"}},[s("span",{staticClass:"modal-close text-danger",attrs:{"aria-hidden":"true"}},[s("i",{staticClass:"fas fa-times"})])])]),t._v(" "),s("div",{staticClass:"modal-body"},[t.caution?s("div",{staticClass:"px-2"},[s("div",{staticClass:"px-4"},[s("div",{staticClass:"row"},[s("span",[s("strong",[t._v("Employee : ")])]),t._v(" "),s("div",{staticClass:"col"},[t._v(t._s(t.caution.user.full_name))])]),t._v(" "),s("div",{staticClass:"row"},[s("span",[s("strong",[t._v("Issued by : ")])]),t._v(" "),s("div",{staticClass:"col"},[t._v(t._s(t.caution.issuer.full_name))])]),t._v(" "),s("div",{staticClass:"row"},[s("span",[s("strong",[t._v("Reason : ")])]),t._v(" "),s("div",{staticClass:"col"},[t._v(t._s(t.caution.reason))])]),t._v(" "),s("div",{staticClass:"row"},[s("span",[s("strong",[t._v("Penalty : ")])]),t._v(" "),s("div",{staticClass:"col"},[t._v(t._s(t.caution.penalty))])]),t._v(" "),s("div",{staticClass:"row"},[s("span",[s("strong",[t._v("Date : ")])]),t._v(" "),s("div",{staticClass:"col"},[t._v(t._s(t.caution.date))])])])]):t._e()]),t._v(" "),s("div",{staticClass:"modal-footer"},[s("a",{staticClass:"text-link mt-3 w-100",staticStyle:{"text-align":"right"},attrs:{"data-dismiss":"modal",href:"javascript:"}},[t._v("close dialogue")])])])])])],1)])},staticRenderFns:[]}},oKx2:function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default={props:{title:"",buttonTitle:null,to:null}}}});
>>>>>>> 717b73666b06ef9a4098637f6e3966e98184a99e
