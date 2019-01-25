<<<<<<< HEAD
webpackJsonp([25],{

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"babel-preset-env\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"babel-plugin-syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/views/DSA/report/report.vue":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _store = __webpack_require__("./resources/assets/js/store/store.js");

var _api = __webpack_require__("./resources/assets/js/helpers/api.js");

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
    beforeCreate: function beforeCreate() {
        if (!this.$store.getters.verifyDSALead) this.$networkErr('page');
        /*this component can only be accessed by the dsa lead hence this route guard
        * if the role of the dsa agent logged in is contained in the
        * array of the dsa lead then access will be granted*/

        this.$prepareBranches();

        // console.log(store.state.branches);
    },
    data: function data() {
        return {
            // branches: {},
            types: [{
                name: "sales report",
                slug: "sales_report"
            }, {
                name: "score card",
                slug: "score_card"
            }, {
                name: "weekly operations",
                slug: "weekly_operations"
            }],
            report: {
                to: '',
                from: '',
                branch: {
                    id: '',
                    name: ''
                },
                employee: '',
                type: ''
            }
        };
    },
    created: function created() {

        // this.$prepareBranches();


        // console.log(store.state.branches);

        this.setDates();

        // this.branches = res.data.branches;

        /* get('/api/create')
             .then(res => {
                 this.setDates();
                 /!*set dates*!/
                 this.branches = res.data.branches;
                 /!*fetch the list of branches and
                 prepare the form with it*!/
             });*/
    },

    methods: {
        generateReport: function generateReport() {
            var _this = this;

            this.$validator.validateAll().then(function (result) {
                if (result) {
                    if (_this.$network()) {
                        // let branch = this.branches.find(obj => obj.id == this.report.branch.id);
                        var branch = _store.store.state.branches.find(function (obj) {
                            return obj.id == _this.report.branch.id;
                        });
                        _this.report.branch = branch;
                        (0, _api.postD)('/api/report', _this.report).then(function (res) {
                            var url = window.URL.createObjectURL(new Blob([res.data]));
                            var link = document.createElement('a');
                            link.href = url;
                            link.setAttribute('download', _this.report.type + '_for_' + branch.name + '.xlsx');
                            document.body.appendChild(link);
                            link.click();
                        });
                    } else _this.$networkErr();
                }
                if (!result) _this.$networkErr('form');
            });
        },
        setDates: function setDates() {
            var toTwoDigs = function toTwoDigs(num) {
                return num < 10 ? '0' + num : num;
            };
            var reformatDate = function reformatDate(d) {
                return d.getFullYear() + '-' + toTwoDigs(d.getMonth() + 1) + '-' + toTwoDigs(d.getDate());
            },
                d = new Date(),
                day = d.getDay(),
                diff = d.getDate() - day + (day === 0 ? -6 : 1),
                m = new Date(d.setDate(diff)),
                f = new Date();
            f.setDate(m.getDate() + 5);
            this.report.from = m = reformatDate(m);
            this.report.to = f = reformatDate(f);
            /*this function returns the monday ie this.report.from
            * and the saturday of the : this.report.to of the
            * current week*/
        }
    }
};

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-53ac12f5\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/views/DSA/report/report.vue":
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
            [_c("h6", [_vm._v("Report Generation")])]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "card-body px-4" }, [
            _c(
              "form",
              {
                on: {
                  submit: function($event) {
                    $event.preventDefault()
                    return _vm.generateReport($event)
                  }
                }
              },
              [
                _c("div", { staticClass: "my-4 clearfix" }, [
                  _c(
                    "div",
                    {
                      staticClass:
                        "form-group col-md-3 col-sm-6 px-md-3 px-1 float-left"
                    },
                    [
                      _c("label", [_vm._v("Report Type")]),
                      _vm._v(" "),
                      _c(
                        "select",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.report.type,
                              expression: "report.type"
                            },
                            {
                              name: "validate",
                              rawName: "v-validate",
                              value: "required",
                              expression: "'required'"
                            }
                          ],
                          staticClass: "custom-select w-100",
                          attrs: {
                            "data-vv-as": "report type",
                            "data-vv-validate-on": "blur",
                            name: "report_type"
                          },
                          on: {
                            change: function($event) {
                              var $$selectedVal = Array.prototype.filter
                                .call($event.target.options, function(o) {
                                  return o.selected
                                })
                                .map(function(o) {
                                  var val = "_value" in o ? o._value : o.value
                                  return val
                                })
                              _vm.$set(
                                _vm.report,
                                "type",
                                $event.target.multiple
                                  ? $$selectedVal
                                  : $$selectedVal[0]
                              )
                            }
                          }
                        },
                        [
                          _c("option", { attrs: { value: "" } }, [
                            _vm._v("select type")
                          ]),
                          _vm._v(" "),
                          _vm._l(_vm.types, function(type) {
                            return _c(
                              "option",
                              { domProps: { value: type.slug } },
                              [_vm._v(_vm._s(_vm._f("capitalize")(type.name)))]
                            )
                          })
                        ],
                        2
                      ),
                      _vm._v(" "),
                      _vm.errors.first("report_type")
                        ? _c("small", [
                            _vm._v(
                              "\n                                " +
                                _vm._s(_vm.errors.first("report_type")) +
                                "\n                            "
                            )
                          ])
                        : _vm._e()
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "form-group col-md-3 col-sm-6 px-md-3 px-1 float-left"
                    },
                    [
                      _c("label", [_vm._v("Branch")]),
                      _vm._v(" "),
                      _c(
                        "select",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.report.branch.id,
                              expression: "report.branch.id"
                            },
                            {
                              name: "validate",
                              rawName: "v-validate",
                              value: "required",
                              expression: "'required'"
                            }
                          ],
                          staticClass: "custom-select w-100",
                          attrs: {
                            "data-vv-as": "office branch",
                            name: "branch_id",
                            "data-vv-validate-on": "blur"
                          },
                          on: {
                            change: function($event) {
                              var $$selectedVal = Array.prototype.filter
                                .call($event.target.options, function(o) {
                                  return o.selected
                                })
                                .map(function(o) {
                                  var val = "_value" in o ? o._value : o.value
                                  return val
                                })
                              _vm.$set(
                                _vm.report.branch,
                                "id",
                                $event.target.multiple
                                  ? $$selectedVal
                                  : $$selectedVal[0]
                              )
                            }
                          }
                        },
                        [
                          _c("option", { attrs: { value: "" } }, [
                            _vm._v("select branch")
                          ]),
                          _vm._v(" "),
                          _vm._l(_vm.$store.state.branches, function(branch) {
                            return _c(
                              "option",
                              { domProps: { value: branch.id } },
                              [
                                _vm._v(
                                  "\n                                    " +
                                    _vm._s(branch.name)
                                )
                              ]
                            )
                          })
                        ],
                        2
                      ),
                      _vm._v(" "),
                      _vm.errors.first("branch_id")
                        ? _c("small", [
                            _vm._v(
                              "\n                                " +
                                _vm._s(_vm.errors.first("branch_id")) +
                                "\n                            "
                            )
                          ])
                        : _vm._e()
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "form-group col-md-3 col-sm-6 px-md-3 px-1 float-left"
                    },
                    [
                      _c("label", [_vm._v("Date from:")]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.report.from,
                            expression: "report.from"
                          },
                          {
                            name: "validate",
                            rawName: "v-validate",
                            value: "required|date_format:MM/DD/YYYY",
                            expression: "'required|date_format:MM/DD/YYYY'"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          type: "date",
                          "data-vv-as": "Date from",
                          name: "date_from"
                        },
                        domProps: { value: _vm.report.from },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.report, "from", $event.target.value)
                          }
                        }
                      }),
                      _vm._v(" "),
                      _vm.errors.first("date_from")
                        ? _c("small", [
                            _vm._v(
                              "\n                                " +
                                _vm._s(_vm.errors.first("date_from")) +
                                "\n                            "
                            )
                          ])
                        : _vm._e()
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "form-group col-md-3 col-sm-6 px-md-3 px-1 float-left"
                    },
                    [
                      _c("label", [_vm._v("Date To:")]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.report.to,
                            expression: "report.to"
                          },
                          {
                            name: "validate",
                            rawName: "v-validate",
                            value: "required|date_format:MM/DD/YYYY",
                            expression: "'required|date_format:MM/DD/YYYY'"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          type: "date",
                          "data-vv-as": "Date to",
                          name: "date_to"
                        },
                        domProps: { value: _vm.report.to },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.report, "to", $event.target.value)
                          }
                        }
                      }),
                      _vm._v(" "),
                      _vm.errors.first("date_to")
                        ? _c("small", [
                            _vm._v(
                              "\n                                " +
                                _vm._s(_vm.errors.first("date_to")) +
                                "\n                            "
                            )
                          ])
                        : _vm._e()
                    ]
                  )
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass:
                      "col-sm-12 mx-auto mt-md-2 mt-0 px-md-3 px-1 mb-4"
                  },
                  [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-block btn-lg bg-default",
                        attrs: { type: "submit", disabled: _vm.$isProcessing }
                      },
                      [
                        _vm._v(
                          "\n                            Generate Report "
                        ),
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
    require("vue-hot-reload-api")      .rerender("data-v-53ac12f5", module.exports)
  }
}

/***/ }),

/***/ "./resources/assets/js/views/DSA/report/report.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"babel-preset-env\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"babel-plugin-syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/views/DSA/report/report.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-53ac12f5\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/views/DSA/report/report.vue")
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
Component.options.__file = "resources\\assets\\js\\views\\DSA\\report\\report.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-53ac12f5", Component.options)
  } else {
    hotAPI.reload("data-v-53ac12f5", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});
=======
webpackJsonp([25],{"LxI/":function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("transition",{attrs:{name:"fade"}},[a("div",{staticClass:"pt-md-3 pt-2",attrs:{id:"employeeRegister"}},[a("div",{staticClass:"card"},[a("ul",{staticClass:"nav nav-tabs justify-content-center bg-default"},[a("h6",[e._v(e._s(e.mode)+" Supplier")])]),e._v(" "),a("div",{staticClass:"card-body pl-4 pr-4"},[a("form",{on:{submit:function(t){return t.preventDefault(),e.onSave(t)}}},[a("h5",[e._v("Supplier Details")]),e._v(" "),a("div",{staticClass:"clearfix"},[a("div",{staticClass:"form-group col-md-6 col-12 float-left px-0 px-md-3"},[a("label",[e._v("Supplier ID")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.form.supplier_id,expression:"form.supplier_id"},{name:"validate",rawName:"v-validate",value:"required|max:50",expression:"'required|max:50'"}],staticClass:"form-control",attrs:{"data-vv-as":"supplier id",name:"supplier_id",placeholder:"supplier id",type:"text",disabled:""},domProps:{value:e.form.supplier_id},on:{input:function(t){t.target.composing||e.$set(e.form,"supplier_id",t.target.value)}}}),e._v(" "),e.errors.first("supplier_id")?a("small",[e._v(e._s(e.errors.first("supplier_id")))]):e._e()]),e._v(" "),a("div",{staticClass:"form-group col-md-6 col-12 float-left px-0 px-md-3"},[a("label",[e._v("Supplier name")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.form.supplier_name,expression:"form.supplier_name"},{name:"validate",rawName:"v-validate",value:"required|max:150",expression:"'required|max:150'"}],staticClass:"form-control",attrs:{"data-vv-as":"supplier name",name:"supplier_name",placeholder:"supplier name",type:"text"},domProps:{value:e.form.supplier_name},on:{input:function(t){t.target.composing||e.$set(e.form,"supplier_name",t.target.value)}}}),e._v(" "),e.errors.first("supplier_name")?a("small",[e._v(e._s(e.errors.first("supplier_name")))]):e._e()]),e._v(" "),a("div",{staticClass:"spaceBetween  mb-md-2 mb-0"}),e._v(" "),a("div",{staticClass:"form-group col-md-6 col-12 float-left px-0 px-md-3"},[a("label",[e._v("Category")]),e._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:e.form.category_id,expression:"form.category_id"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"custom-select w-100",attrs:{"data-vv-validate-on":"blur",name:"category"},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.$set(e.form,"category_id",t.target.multiple?a:a[0])}}},[a("option",{attrs:{selected:"",value:""}},[e._v("-- select category --")]),e._v(" "),e._l(e.categories,function(t){return a("option",{domProps:{value:t.id}},[e._v("\n                           "+e._s(e._f("capitalize")(t.name))+"\n                        ")])})],2),e._v(" "),e.errors.first("category")?a("small",[e._v("\n                        "+e._s(e.errors.first("category"))+"\n                     ")]):e._e()]),e._v(" "),a("div",{staticClass:"form-group col-md-6 col-12 float-left px-0 px-md-3"},[a("label",[e._v("Date of registration")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.form.date_of_reg,expression:"form.date_of_reg"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",attrs:{"data-vv-as":"date of reg",name:"date_of_reg",type:"date"},domProps:{value:e.form.date_of_reg},on:{input:function(t){t.target.composing||e.$set(e.form,"date_of_reg",t.target.value)}}}),e._v(" "),e.errors.first("date_of_reg")?a("small",[e._v(e._s(e.errors.first("date_of_reg")))]):e._e()]),e._v(" "),a("div",{staticClass:"spaceBetween  mb-md-2 mb-0"}),e._v(" "),a("div",{staticClass:"form-group col-md-6 col-12 float-left px-0 px-md-3"},[a("label",{staticClass:"w-100 float-left pl-1"},[e._v("Status")]),e._v(" "),e._l(e.statuses,function(t){return a("div",{staticClass:"radio p-0 col-md-6 col-6 float-left"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.form.status,expression:"form.status"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{id:t,name:"status",type:"radio"},domProps:{value:t,checked:e._q(e.form.status,t)},on:{change:function(a){e.$set(e.form,"status",t)}}}),e._v(" "),a("label",{attrs:{for:t}},[e._v(e._s(t))])])}),e._v(" "),e.errors.first("status")?a("small",[e._v("\n                        "+e._s(e.errors.first("status"))+"\n                     ")]):e._e()],2),e._v(" "),a("div",{staticClass:"form-group col-md-6 col-12 float-left px-0 px-md-3"},[a("label",[e._v("Address")]),e._v(" "),a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.form.address,expression:"form.address"},{name:"validate",rawName:"v-validate",value:"required|max:255",expression:"'required|max:255'"}],staticClass:"form-control w-100",attrs:{name:"address",placeholder:"address",rows:"1"},domProps:{value:e.form.address},on:{input:function(t){t.target.composing||e.$set(e.form,"address",t.target.value)}}}),e._v(" "),e.errors.first("address")?a("small",[e._v("\n                        "+e._s(e.errors.first("address"))+"\n                     ")]):e._e()]),e._v(" "),a("div",{staticClass:"spaceBetween  mb-md-2 mb-0"}),e._v(" "),a("div",{staticClass:"form-group col-md-6 col-12 float-left px-0 px-md-3"},[a("label",[e._v("Phone Number")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.form.contact_phone_no,expression:"form.contact_phone_no"},{name:"validate",rawName:"v-validate",value:"required|numeric|max:11|min:11",expression:"'required|numeric|max:11|min:11'"}],staticClass:"form-control",class:{"is-invalid":e.error.phone_number},attrs:{"data-vv-as":"phone number",name:"phone_number",placeholder:"081xxxxxxxx",type:"tel"},domProps:{value:e.form.contact_phone_no},on:{input:function(t){t.target.composing||e.$set(e.form,"contact_phone_no",t.target.value)}}}),e._v(" "),e.errors.first("phone_number")?a("small",[e._v("\n                        "+e._s(e.errors.first("phone_number"))+"\n                     ")]):e._e(),e._v(" "),e.error.contact_phone_no?a("small",[e._v("\n                        "+e._s(e.error.contact_phone_no[0])+"\n                     ")]):e._e()]),e._v(" "),a("div",{staticClass:"form-group col-md-6 col-12 float-left px-0 px-md-3"},[a("label",[e._v("Contact person name")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.form.contact_person_name,expression:"form.contact_person_name"},{name:"validate",rawName:"v-validate",value:"required|max:50",expression:"'required|max:50'"}],staticClass:"form-control",attrs:{"data-vv-as":"contact name",name:"contact_name",placeholder:"enter full name here",type:"text"},domProps:{value:e.form.contact_person_name},on:{input:function(t){t.target.composing||e.$set(e.form,"contact_person_name",t.target.value)}}}),e._v(" "),e.errors.first("contact_name")?a("small",[e._v("\n                        "+e._s(e.errors.first("contact_name"))+"\n                     ")]):e._e()]),e._v(" "),a("div",{staticClass:"spaceBetween mb-md-2 mb-0"}),e._v(" "),a("hr",{staticClass:"style-two"})]),e._v(" "),a("div",{staticClass:"col-sm-12 ml-auto mr-auto mt-md-2 mt-0 px-md-3 px-1 mb-3"},[a("div",{staticClass:"clearfix d-flex justify-content-end"},["edit"===e.mode?a("button",{staticClass:"mx-3 btn btn-secondary",attrs:{type:"button"},on:{click:e.onCancel}},[e._v("Cancel")]):e._e(),e._v(" "),a("button",{staticClass:"mx-3 btn bg-default",attrs:{disabled:e.$isProcessing,type:"submit"}},[e._v("\n                        "+e._s(e._f("capitalize")(e.mode))+" Supplier "),a("i",{staticClass:"far fa-paper-plane ml-1"})])])])])])])])])},staticRenderFns:[]}},X3FS:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,s=a("I3G/"),o=(r=s)&&r.__esModule?r:{default:r};t.default={props:{},data:function(){return{form:{supplier_id:"SP-0001",supplier_name:null,category_id:"",date_of_reg:this.$getDate(),status:"active",address:null,contact_phone_no:null,contact_person_name:null},mode:null,error:{},show:!1,resource:"suppliers",store:"/api/suppliers",method:"POST",title:"Create",statuses:["active","suspended"],categories:[{id:1,name:"First Category"},{id:2,name:"Second Category"}]}},beforeRouteEnter:function(e,t,a){a(function(t){return t.setMode(e.meta.mode)})},beforeRouteUpdate:function(e,t,a){this.store="/api/suppliers/"+this.$route.params.id,this.method="PUT",this.setMode(e.meta.mode),a()},methods:{setMode:function(e){this.show=!1,o.default.set(this.$data,"mode",e)},onCancel:function(){},onSave:function(){var e=this;this.$validator.validateAll().then(function(t){t?e.$network()?(e.$LIPS(!0),e.error={},console.log(e.form),e.$LIPS(!1)):e.$networkErr():e.$networkErr("form")})}}}},i4Zg:function(e,t,a){var r=a("VU/8")(a("X3FS"),a("LxI/"),!1,null,null,null);e.exports=r.exports}});
>>>>>>> 5b66d6bd3124cd9c1e27808029b5045efc350129
