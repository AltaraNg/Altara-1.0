webpackJsonp([4],{

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

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"babel-preset-env\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"babel-plugin-syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/CustomerProfile.vue":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _vue = __webpack_require__("./node_modules/vue/dist/vue.common.js");

var _vue2 = _interopRequireDefault(_vue);

var _store = __webpack_require__("./resources/assets/js/store/store.js");

var _eventBus = __webpack_require__("./resources/assets/js/utilities/event-bus.js");

var _AppNavigation = __webpack_require__("./resources/assets/js/components/AppNavigation.vue");

var _AppNavigation2 = _interopRequireDefault(_AppNavigation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var DVA = function DVA() {
    return _store.store.getters.auth('DVAAccess');
};

exports.default = {
    props: ['viewCustomer'],
    components: { AppNavigation: _AppNavigation2.default },
    data: function data() {
        return {
            customer: '',
            show: false
        };
    },

    computed: {
        full: function full() {
            return this.$route.meta.mode === 'full';
        },
        passport: function passport() {
            return 'https://s3.eu-west-2.amazonaws.com/altara-one/' + this.customer.document.passport_url;
        },
        branch: function branch() {
            return this.customer.branch.description + ' ' + this.customer.branch.name;
        },
        approved: function approved() {
            return this.$getCustomerApprovalStatus(this.customer.verification);
        }
    },
    created: function created() {
        var _this = this;

        $('.tooltip').remove();
        if (this.viewCustomer) this.setCustomer(this.viewCustomer);
        _eventBus.EventBus.$on('customer', function (customer) {
            return _this.setCustomer(customer);
        });
    },

    methods: {
        setCustomer: function setCustomer(customer) {
            _vue2.default.set(this.$data, 'customer', customer);
            this.show = true;
        }
    }
};

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"babel-preset-env\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"babel-plugin-syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/customHeader.vue":
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

exports.default = {
    props: {
        title: '',
        buttonTitle: null,
        to: null
    }
};

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"babel-preset-env\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"babel-plugin-syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/views/FSL/lookup/lookup.vue":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = __webpack_require__("./node_modules/babel-runtime/regenerator/index.js");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _vue = __webpack_require__("./node_modules/vue/dist/vue.common.js");

var _vue2 = _interopRequireDefault(_vue);

var _vuex = __webpack_require__("./node_modules/vuex/dist/vuex.esm.js");

var _auth = __webpack_require__("./resources/assets/js/utilities/auth.js");

var _auth2 = _interopRequireDefault(_auth);

var _flash = __webpack_require__("./resources/assets/js/utilities/flash.js");

var _flash2 = _interopRequireDefault(_flash);

var _api = __webpack_require__("./resources/assets/js/utilities/api.js");

var _Amortization = __webpack_require__("./resources/assets/js/utilities/Amortization.js");

var _customHeader = __webpack_require__("./resources/assets/js/components/customHeader.vue");

var _customHeader2 = _interopRequireDefault(_customHeader);

var _CustomerProfile = __webpack_require__("./resources/assets/js/components/CustomerProfile.vue");

var _CustomerProfile2 = _interopRequireDefault(_CustomerProfile);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; } //
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

    components: { CustomHeader: _customHeader2.default, CustomerProfile: _CustomerProfile2.default },

    data: function data() {
        return {
            Order: _Amortization.Order,
            customer: null,
            customer_id: '',
            user: {
                name: _auth2.default.state.user_name,
                id: _auth2.default.state.user_id
            },
            show: false,
            showModalContent: false,
            activeOrder: null,
            headers: ['Date', 'Order No.', 'Product Name', 'Total Product Price', 'Percentage', 'Down Payment', 'Repayment Plans'],
            paymentForm: null
        };
    },


    methods: {
        updateView: function updateView(data) {
            var customer = data.customer;

            if (!!customer.length) {
                customer = customer[0];
                if (!!!customer.document['id']) customer.document = { id_card_url: "", passport_url: "" };
                _vue2.default.set(this.$data, 'customer', customer);
                this.show = true;
            } else _flash2.default.setError("Customer not found.", 5000);
            this.$LIPS(false);
        },
        processForm: function processForm() {
            var _this = this;

            this.show = false;
            this.$LIPS(true);
            (0, _api.get)('/api/customer/lookup/' + this.customer_id).then(function (res) {
                return _this.updateView(res.data);
            }).catch(function () {
                _this.$LIPS(false);
                _flash2.default.setError('Error Fetching customer detail');
            });
        },
        displayAmortization: function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee(index) {
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return _vue2.default.set(this.$data, 'activeOrder', new _Amortization.Order(this.customer.orders[index], this.customer));

                            case 2:
                                this.paymentForm = { payments: [] };
                                this.showModalContent = true;
                                return _context.abrupt('return', $('#amortization').modal('toggle'));

                            case 5:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function displayAmortization(_x) {
                return _ref.apply(this, arguments);
            }

            return displayAmortization;
        }(),
        addPaymentForm: function addPaymentForm() {
            var level = this.activeOrder.repaymentLevel;
            var nextRepayment = parseInt(level + this.paymentForm.payments.length + 1);

            if (level === this.activeOrder._count) return;
            if (nextRepayment > this.activeOrder._count) return;

            this.paymentForm.payments.push({
                _pay: this.activeOrder.amountsToBePaid[0],
                _date: this.$getDate(),
                _payment_method: '',
                _payment_bank: '',
                _col: '',
                column: ''
            });

            this.reNumber();
        },
        deletePayment: function deletePayment(index) {
            this.paymentForm.payments.splice(index, 1);
            this.reNumber();
        },
        reNumber: function reNumber() {
            var _this2 = this;

            this.paymentForm.payments.forEach(function (payment, index) {
                /*this line below mean if the repayment level is 3 i.e the customer has made 3 repayment
                * u want to display on the ui "4th repayment"
                * so repaymentLevel(3) + index(0 - length of the added payments) + 1*/
                var next = _this2.activeOrder.repaymentLevel + index + 1;
                _this2.paymentForm.payments[index]._col = next;
                _this2.paymentForm.payments[index].column = _this2.$getColumn(next) + " Repayment";
            });
        },
        preparePayments: function preparePayments() {
            var _this3 = this;

            var payments = {};
            this.paymentForm.payments.forEach(function (payment) {
                var obj = {},
                    col = _this3.$getColumn(payment._col);
                obj[col + '_pay'] = payment._pay;
                obj[col + '_date'] = payment._date;
                obj[col + '_payment_bank'] = payment._payment_bank;
                obj[col + '_payment_method'] = payment._payment_method;
                payments = _extends({}, payments, obj);
            });
            this.activeOrder.payments = payments;
            !$.isEmptyObject(payments) ? this.savePayments() : _flash2.default.setError("You have not added any payment.");
        },
        savePayments: function savePayments() {
            var _this4 = this;

            this.$LIPS(true);
            var type = void 0,
                data = void 0,
                order = void 0;
            if (this.activeOrder.count === 6) type = 'formal';
            if (this.activeOrder.count === 12) type = 'informal';
            data = { payments: this.activeOrder.payments, repayment_id: this.activeOrder.order.id, type: type };

            (0, _api.post)('/api/repayment', data).then(function (res) {
                if (res.data.saved) {
                    order = _this4.customer.orders.find(function (order) {
                        return order.id === data.repayment_id;
                    });
                    order['repayment_' + type] = res.data.amortization;
                    _this4.activeOrder = new _Amortization.Order(order, _this4.customer);
                    _this4.paymentForm = { payments: [] };
                    _this4.$LIPS(false);
                }
            }).catch(function () {
                return _flash2.default.setError('Error adding payment! Please try again later.');
            });
        }
    },

    computed: _extends({}, (0, _vuex.mapGetters)(['getBanks', 'getPaymentMethods']), {
        check: function check() {
            return !(!this.$isProcessing && !!this.customer_id);
        }
    }),

    created: function created() {
        this.$prepareBanks();
        this.$prepareBranches();
        this.$preparePaymentMethods();
    }
};

/***/ }),

/***/ "./node_modules/babel-runtime/regenerator/index.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./node_modules/regenerator-runtime/runtime-module.js");


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-569152fc\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/views/FSL/lookup/lookup.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.attendance-item[data-v-569152fc] {\n    cursor: auto;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime-module.js":
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = (function() { return this })() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__("./node_modules/regenerator-runtime/runtime.js");

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}


/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration. If the Promise is rejected, however, the
          // result for this iteration will be rejected with the same
          // reason. Note that rejections of yielded Promises are not
          // thrown back into the generator function, as is the case
          // when an awaited Promise is rejected. This difference in
          // behavior between yield and await is important, because it
          // allows the consumer to decide what to do with the yielded
          // rejection (swallow it and continue, manually .throw it back
          // into the generator, abandon iteration, whatever). With
          // await, by contrast, there is no opportunity to examine the
          // rejection reason outside the generator function, so the
          // only option is to throw it from the await expression, and
          // let the generator function handle the exception.
          result.value = unwrapped;
          resolve(result);
        }, reject);
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() { return this })() || Function("return this")()
);


/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-02013d35\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/customHeader.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "mt-5 attendance-head" }, [
    _c("div", { staticClass: "mb-5 row align-items-center" }, [
      _c("div", { staticClass: "col-12 title-con" }, [
        _c("span", { staticClass: "title" }, [
          _vm._v(_vm._s(_vm._f("capitalize")(_vm.title)))
        ]),
        _vm._v(" "),
        _vm.to
          ? _c(
              "div",
              { staticClass: "row justify-content-end" },
              [
                _c(
                  "router-link",
                  { staticClass: "text-link mt-3", attrs: { to: _vm.to } },
                  [_vm._v(_vm._s(_vm.buttonTitle))]
                )
              ],
              1
            )
          : _vm._e()
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
    require("vue-hot-reload-api")      .rerender("data-v-02013d35", module.exports)
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

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-569152fc\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/views/FSL/lookup/lookup.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("transition", { attrs: { name: "fade" } }, [
    _c(
      "div",
      { attrs: { id: "reminder" } },
      [
        _c("div", { staticClass: "mt-5 attendance-head" }, [
          _c("div", { staticClass: "card" }, [
            _c(
              "ul",
              { staticClass: "nav nav-tabs bg-default justify-content-center" },
              [_c("h6", [_vm._v("Customer Lookup")])]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "card-body p-4" }, [
              _c(
                "form",
                {
                  on: {
                    submit: function($event) {
                      $event.preventDefault()
                      return _vm.processForm($event)
                    }
                  }
                },
                [
                  _c(
                    "div",
                    { staticClass: "m-0 p-0 col-12 form-group clearfix" },
                    [
                      _c("label", { staticClass: "w-100" }, [
                        _vm._v("Customer ID")
                      ]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.customer_id,
                            expression: "customer_id"
                          },
                          {
                            name: "validate",
                            rawName: "v-validate",
                            value: "required|numeric",
                            expression: "'required|numeric'"
                          }
                        ],
                        staticClass:
                          "form-control col-lg-9 col-md-8 col-sm-8 col-12 float-left mt-1",
                        attrs: {
                          "data-vv-as": "customer id",
                          name: "customer_id"
                        },
                        domProps: { value: _vm.customer_id },
                        on: {
                          onkeyUp: _vm.check,
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.customer_id = $event.target.value
                          }
                        }
                      }),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass:
                            "col-lg-3 col-md-4 col-sm-4 col-12 float-right px-md-3 mt-md-0 px-sm-3 mt-sm-0 mt-2 px-0"
                        },
                        [
                          _c(
                            "button",
                            {
                              staticClass: "btn btn-block bg-default my-1",
                              attrs: { disabled: _vm.check, type: "submit" }
                            },
                            [
                              _vm._v(
                                "\n                                    Fetch customer details "
                              ),
                              _c("i", {
                                staticClass: "far fa-paper-plane ml-1"
                              })
                            ]
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _vm.errors.has("customer_id")
                        ? _c(
                            "small",
                            { staticClass: "form-text text-muted w-100" },
                            [
                              _vm._v(
                                "\n                                " +
                                  _vm._s(_vm.errors.first("customer_id")) +
                                  "\n                            "
                              )
                            ]
                          )
                        : _vm._e()
                    ]
                  )
                ]
              )
            ])
          ])
        ]),
        _vm._v(" "),
        _c("transition", { attrs: { name: "fade" } }, [
          _vm.customer && _vm.show
            ? _c(
                "div",
                [
                  _c(
                    "div",
                    { staticClass: "attendance-head" },
                    [
                      _c("customer-profile", {
                        attrs: { "view-customer": _vm.customer }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("custom-header", { attrs: { title: "All order(s)" } }),
                  _vm._v(" "),
                  _c("div", { staticClass: "mt-5 mb-3 attendance-head" }, [
                    _c(
                      "div",
                      { staticClass: "row px-4 pt-3 pb-4 text-center" },
                      [
                        _c(
                          "div",
                          {
                            staticClass: "col light-heading",
                            staticStyle: { "max-width": "100px" }
                          },
                          [_vm._v("S/No.")]
                        ),
                        _vm._v(" "),
                        _vm._l(_vm.headers, function(header) {
                          return _c(
                            "div",
                            { staticClass: "col light-heading" },
                            [_vm._v(_vm._s(header))]
                          )
                        })
                      ],
                      2
                    )
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "tab-content mt-1 attendance-body" },
                    [
                      _vm.show && _vm.customer.orders.length > 0
                        ? _c(
                            "div",
                            { staticClass: "tab-pane active text-center" },
                            _vm._l(_vm.customer.orders, function(order, index) {
                              return _c(
                                "div",
                                { staticClass: "mb-3 row attendance-item" },
                                [
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "col-12 col-xs-2 col-md col-lg d-flex align-items-center",
                                      staticStyle: { "max-width": "100px" }
                                    },
                                    [
                                      _c(
                                        "span",
                                        { staticClass: "user mx-auto" },
                                        [_vm._v(_vm._s(index + 1))]
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "col-12 col-xs-2 col-md col-lg d-flex align-items-center justify-content-center"
                                    },
                                    [
                                      _vm._v(
                                        "\n                                " +
                                          _vm._s(order.order_date) +
                                          "\n                            "
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "col-12 col-xs-2 col-md col-lg d-flex user-name align-items-center justify-content-center"
                                    },
                                    [
                                      _vm._v(
                                        "\n                                " +
                                          _vm._s(order.id) +
                                          "\n                            "
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "col-12 col-xs-3 col-md col-lg d-flex align-items-center justify-content-center"
                                    },
                                    [
                                      _vm._v(
                                        "\n                                " +
                                          _vm._s(
                                            order.store_product.product_name
                                          ) +
                                          "\n                            "
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "col-12 col-xs-2 col-md col-lg d-flex align-items-center justify-content-center"
                                    },
                                    [
                                      _vm._v(
                                        "\n                                " +
                                          _vm._s(
                                            _vm.$formatCurrency(
                                              order.product_price
                                            )
                                          ) +
                                          "\n                            "
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "col-12 col-xs-2 col-md col-lg d-flex align-items-center justify-content-center"
                                    },
                                    [
                                      _vm._v(
                                        "\n                                " +
                                          _vm._s(order.sales_category.name) +
                                          "\n                            "
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "col-12 col-xs-2 col-md col-lg d-flex align-items-center justify-content-center"
                                    },
                                    [
                                      _vm._v(
                                        "\n                                " +
                                          _vm._s(
                                            _vm.$formatCurrency(
                                              order.down_payment
                                            )
                                          ) +
                                          "\n                            "
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "col-12 col-xs-2 col-md col-lg d-flex align-items-center justify-content-center"
                                    },
                                    [
                                      _c(
                                        "button",
                                        {
                                          staticClass:
                                            "btn status my-sm-2 approved",
                                          on: {
                                            click: function($event) {
                                              _vm.displayAmortization(index)
                                            }
                                          }
                                        },
                                        [
                                          _vm._v(
                                            "\n                                    View Plan\n                                "
                                          )
                                        ]
                                      )
                                    ]
                                  )
                                ]
                              )
                            })
                          )
                        : _c(
                            "div",
                            { staticClass: "tab-pane active text-center" },
                            [
                              _c(
                                "div",
                                { staticClass: "mb-3 row attendance-item" },
                                [
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "col d-flex light-heading align-items-center justify-content-center"
                                    },
                                    [
                                      _vm._v(
                                        "\n                                No records found!\n                            "
                                      )
                                    ]
                                  )
                                ]
                              )
                            ]
                          )
                    ]
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "mt-5 mb-3 attendance-head" }, [
                    _c("div", { staticClass: "w-100 my-5 mx-0 hr" })
                  ])
                ],
                1
              )
            : _vm._e()
        ]),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "modal fade repayment",
            attrs: { id: "amortization" }
          },
          [
            _c(
              "div",
              {
                staticClass: "modal-dialog modal-xl",
                attrs: { role: "document" }
              },
              [
                _vm.showModalContent
                  ? _c("div", { staticClass: "modal-content" }, [
                      _c("div", { staticClass: "modal-header py-2" }, [
                        _c("h6", { staticClass: "modal-title py-1" }, [
                          _vm._v(
                            "\n                            Repayment Plan/Summary - " +
                              _vm._s(
                                _vm._f("capitalize")(
                                  _vm.customer.employment_status
                                )
                              ) +
                              "\n                        "
                          )
                        ]),
                        _vm._v(" "),
                        _c(
                          "a",
                          {
                            staticClass: "close py-1",
                            attrs: {
                              "aria-label": "Close",
                              "data-dismiss": "modal"
                            }
                          },
                          [
                            _c(
                              "span",
                              {
                                staticClass: "modal-close text-danger",
                                attrs: { "aria-hidden": "true" }
                              },
                              [_c("i", { staticClass: "fas fa-times" })]
                            )
                          ]
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "modal-body" }, [
                        _c("div", { staticClass: "table-responsive" }, [
                          _c("h5", { staticClass: "mt-3 mb-0" }, [
                            _vm._v("Order Information")
                          ]),
                          _vm._v(" "),
                          _c("table", { staticClass: "table table-bordered" }, [
                            _c("tbody", [
                              _c("tr", { staticClass: "table-separator" }, [
                                _c("td", [_vm._v("Name")]),
                                _vm._v(" "),
                                _c("td", [_vm._v("Order Id")]),
                                _vm._v(" "),
                                _c("td", [_vm._v("Product")]),
                                _vm._v(" "),
                                _c("th", [_vm._v("Branch")])
                              ]),
                              _vm._v(" "),
                              _c("tr", [
                                _c("td", { staticClass: "font-weight-bold" }, [
                                  _vm._v(
                                    _vm._s(_vm.activeOrder.customerName) +
                                      "\n                                    "
                                  )
                                ]),
                                _vm._v(" "),
                                _c("th", [
                                  _vm._v(_vm._s(_vm.activeOrder.order.id))
                                ]),
                                _vm._v(" "),
                                _c("th", [
                                  _vm._v(
                                    _vm._s(
                                      _vm.activeOrder.order.store_product
                                        .product_name
                                    )
                                  )
                                ]),
                                _vm._v(" "),
                                _c("td", { staticClass: "font-weight-bold" }, [
                                  _vm._v(_vm._s(_vm.activeOrder.branch.name))
                                ])
                              ])
                            ])
                          ]),
                          _vm._v(" "),
                          _c("h5", { staticClass: "mt-3 mb-0" }, [
                            _vm._v("Amortization Schedule")
                          ]),
                          _vm._v(" "),
                          _c("table", { staticClass: "table table-bordered" }, [
                            _c("tbody", { staticClass: "text-center" }, [
                              _c(
                                "tr",
                                [
                                  _c("th", [_vm._v("Repayment")]),
                                  _vm._v(" "),
                                  _vm._l(
                                    _vm.activeOrder.repaymentCaptions,
                                    function(caption) {
                                      return _c("td", {
                                        domProps: { innerHTML: _vm._s(caption) }
                                      })
                                    }
                                  )
                                ],
                                2
                              ),
                              _vm._v(" "),
                              _c(
                                "tr",
                                { staticClass: "table-separator" },
                                [
                                  _c("th", [_vm._v("Due Date")]),
                                  _vm._v(" "),
                                  _vm._l(_vm.activeOrder.dueDates, function(
                                    date
                                  ) {
                                    return _c("td", [_vm._v(_vm._s(date))])
                                  })
                                ],
                                2
                              ),
                              _vm._v(" "),
                              _c(
                                "tr",
                                [
                                  _c("th", [_vm._v("Actual Pay Day")]),
                                  _vm._v(" "),
                                  _vm._l(
                                    _vm.activeOrder.actualPayDates,
                                    function(date) {
                                      return _c("td", [_vm._v(_vm._s(date))])
                                    }
                                  )
                                ],
                                2
                              ),
                              _vm._v(" "),
                              _c(
                                "tr",
                                { staticClass: "table-separator" },
                                [
                                  _c("th", [_vm._v("Status")]),
                                  _vm._v(" "),
                                  _vm._l(
                                    _vm.activeOrder.paymentStatusClasses,
                                    function(status) {
                                      return _c("td", { class: status.class }, [
                                        _c("i", {
                                          staticClass: "fas",
                                          class: status.icon
                                        })
                                      ])
                                    }
                                  )
                                ],
                                2
                              ),
                              _vm._v(" "),
                              _c(
                                "tr",
                                { staticClass: "table-separator" },
                                [
                                  _c("th", [_vm._v("Repayment Amount")]),
                                  _vm._v(" "),
                                  _vm._l(
                                    _vm.activeOrder.amountsToBePaid,
                                    function(payment) {
                                      return _c("td", [
                                        _vm._v(
                                          "\n                                        " +
                                            _vm._s(
                                              _vm.$formatCurrency(payment)
                                            ) +
                                            "\n                                    "
                                        )
                                      ])
                                    }
                                  )
                                ],
                                2
                              ),
                              _vm._v(" "),
                              _c(
                                "tr",
                                [
                                  _c("th", [_vm._v("Actual Amount Paid")]),
                                  _vm._v(" "),
                                  _vm._l(
                                    _vm.activeOrder.actualAmountsPaid,
                                    function(payment) {
                                      return _c("td", [
                                        _vm._v(
                                          "\n                                        " +
                                            _vm._s(
                                              _vm.$formatCurrency(payment)
                                            ) +
                                            "\n                                    "
                                        )
                                      ])
                                    }
                                  )
                                ],
                                2
                              ),
                              _vm._v(" "),
                              _c(
                                "tr",
                                { staticClass: "table-separator" },
                                [
                                  _c("th", [_vm._v("Payment Method")]),
                                  _vm._v(" "),
                                  _vm._l(
                                    _vm.activeOrder.paymentMethods,
                                    function(repaymentMethod) {
                                      return _c(
                                        "td",
                                        { staticClass: "text-capitalize" },
                                        [
                                          _vm._v(
                                            "\n                                        " +
                                              _vm._s(
                                                _vm.Order.convertToName(
                                                  repaymentMethod,
                                                  "paymentMethods"
                                                )
                                              ) +
                                              "\n                                    "
                                          )
                                        ]
                                      )
                                    }
                                  )
                                ],
                                2
                              ),
                              _vm._v(" "),
                              _c(
                                "tr",
                                [
                                  _c("th", [_vm._v("Bank")]),
                                  _vm._v(" "),
                                  _vm._l(_vm.activeOrder.paymentBanks, function(
                                    repaymentBank
                                  ) {
                                    return _c(
                                      "td",
                                      { staticClass: "text-capitalize" },
                                      [
                                        _vm._v(
                                          "\n                                        " +
                                            _vm._s(
                                              _vm.Order.convertToName(
                                                repaymentBank,
                                                "banks"
                                              )
                                            ) +
                                            "\n                                    "
                                        )
                                      ]
                                    )
                                  })
                                ],
                                2
                              )
                            ])
                          ]),
                          _vm._v(" "),
                          _c("h5", { staticClass: "mt-5 mb-0" }, [
                            _vm._v("Payment Summary")
                          ]),
                          _vm._v(" "),
                          _c("table", { staticClass: "table table-bordered" }, [
                            _c("tbody", { staticClass: "text-center" }, [
                              _c("tr", { staticClass: "table-separator" }, [
                                _c("td", { staticClass: "text-left" }, [
                                  _vm._v("Discount Detail (%)")
                                ]),
                                _vm._v(" "),
                                _c("th", [
                                  _vm._v(
                                    _vm._s(
                                      _vm._f("capitalize")(
                                        _vm.activeOrder.discount
                                      )
                                    )
                                  )
                                ]),
                                _vm._v(" "),
                                _c("td", [_vm._v("Total Before Discount")]),
                                _vm._v(" "),
                                _c("th", [
                                  _vm._v(
                                    _vm._s(
                                      _vm.$formatCurrency(
                                        _vm.$roundDownAmt(
                                          _vm.activeOrder.order["product_price"]
                                        )
                                      )
                                    )
                                  )
                                ]),
                                _vm._v(" "),
                                _c("td", [_vm._v("Total Paid")]),
                                _vm._v(" "),
                                _c("th", [
                                  _vm._v(_vm._s(_vm.activeOrder.amountPaid))
                                ])
                              ]),
                              _vm._v(" "),
                              _c("tr", [
                                _c("td", { staticClass: "text-left" }, [
                                  _vm._v("Discount Amount")
                                ]),
                                _vm._v(" "),
                                _c("th", [
                                  _vm._v(_vm._s(_vm.activeOrder.discountAmount))
                                ]),
                                _vm._v(" "),
                                _c("td", [_vm._v("Total After Discount")]),
                                _vm._v(" "),
                                _c("th", [
                                  _vm._v(
                                    _vm._s(_vm.activeOrder.discountedTotal)
                                  )
                                ]),
                                _vm._v(" "),
                                _c("td", [_vm._v("Total Debt")]),
                                _vm._v(" "),
                                _c("th", [
                                  _vm._v(
                                    _vm._s(_vm.activeOrder.outstandingDebt)
                                  )
                                ])
                              ]),
                              _vm._v(" "),
                              _c("tr", [
                                _c("td", { staticClass: "text-left" }, [
                                  _vm._v("Down Payment")
                                ]),
                                _vm._v(" "),
                                _c("th", [
                                  _vm._v(
                                    _vm._s(
                                      _vm.$formatCurrency(
                                        _vm.$roundDownAmt(
                                          _vm.activeOrder.order["down_payment"]
                                        )
                                      )
                                    )
                                  )
                                ]),
                                _vm._v(" "),
                                _c("td", [_vm._v("Total Plus Default Fee")]),
                                _vm._v(" "),
                                _c("th", [
                                  _vm._v(
                                    _vm._s(_vm.activeOrder.totalPlusDefault)
                                  )
                                ]),
                                _vm._v(" "),
                                _c("td", [_vm._v("Default Fee")]),
                                _vm._v(" "),
                                _c("th", [
                                  _vm._v(_vm._s(_vm.activeOrder.defaultFee))
                                ])
                              ])
                            ])
                          ]),
                          _vm._v(" "),
                          _c("h5", { staticClass: "mt-5 mb-0" }, [
                            _vm._v("Add a new payment")
                          ]),
                          _vm._v(" "),
                          _c("table", { staticClass: "table table-bordered" }, [
                            _c(
                              "tbody",
                              { staticClass: "text-center" },
                              [
                                _c("tr", { staticClass: "table-separator" }, [
                                  _c("td", { staticClass: "text-left" }, [
                                    _vm._v("S/No.")
                                  ]),
                                  _vm._v(" "),
                                  _c("th", [_vm._v("Repayment")]),
                                  _vm._v(" "),
                                  _c("th", [_vm._v("Amount")]),
                                  _vm._v(" "),
                                  _c("th", [_vm._v("Payment Method")]),
                                  _vm._v(" "),
                                  _c("th", [_vm._v("Bank")]),
                                  _vm._v(" "),
                                  _c("th", [_vm._v("Date")]),
                                  _vm._v(" "),
                                  _c("th", [_vm._v("Collected By")]),
                                  _vm._v(" "),
                                  _c("th", [_vm._v("Action")])
                                ]),
                                _vm._v(" "),
                                _vm._l(_vm.paymentForm.payments, function(
                                  payment,
                                  index
                                ) {
                                  return _c("tr", [
                                    _c("th", [_vm._v(_vm._s(index + 1))]),
                                    _vm._v(" "),
                                    _c("th", [
                                      _c(
                                        "div",
                                        { staticClass: "form-group mb-0" },
                                        [
                                          _c("input", {
                                            directives: [
                                              {
                                                name: "model",
                                                rawName: "v-model",
                                                value:
                                                  _vm.paymentForm.payments[
                                                    index
                                                  ].column,
                                                expression:
                                                  "paymentForm.payments[index].column"
                                              }
                                            ],
                                            staticClass: "form-control",
                                            attrs: {
                                              name: "date",
                                              type: "text",
                                              disabled: ""
                                            },
                                            domProps: {
                                              value:
                                                _vm.paymentForm.payments[index]
                                                  .column
                                            },
                                            on: {
                                              input: function($event) {
                                                if ($event.target.composing) {
                                                  return
                                                }
                                                _vm.$set(
                                                  _vm.paymentForm.payments[
                                                    index
                                                  ],
                                                  "column",
                                                  $event.target.value
                                                )
                                              }
                                            }
                                          })
                                        ]
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c("th", [
                                      _c(
                                        "div",
                                        { staticClass: "form-group mb-0" },
                                        [
                                          _c("input", {
                                            directives: [
                                              {
                                                name: "model",
                                                rawName: "v-model",
                                                value:
                                                  _vm.paymentForm.payments[
                                                    index
                                                  ]._pay,
                                                expression:
                                                  "paymentForm.payments[index]._pay"
                                              }
                                            ],
                                            staticClass: "form-control",
                                            attrs: {
                                              name: "date",
                                              type: "text"
                                            },
                                            domProps: {
                                              value:
                                                _vm.paymentForm.payments[index]
                                                  ._pay
                                            },
                                            on: {
                                              input: function($event) {
                                                if ($event.target.composing) {
                                                  return
                                                }
                                                _vm.$set(
                                                  _vm.paymentForm.payments[
                                                    index
                                                  ],
                                                  "_pay",
                                                  $event.target.value
                                                )
                                              }
                                            }
                                          })
                                        ]
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c("th", [
                                      _c(
                                        "select",
                                        {
                                          directives: [
                                            {
                                              name: "model",
                                              rawName: "v-model",
                                              value:
                                                _vm.paymentForm.payments[index]
                                                  ._payment_method,
                                              expression:
                                                "paymentForm.payments[index]._payment_method"
                                            }
                                          ],
                                          staticClass: "custom-select w-100",
                                          on: {
                                            change: function($event) {
                                              var $$selectedVal = Array.prototype.filter
                                                .call(
                                                  $event.target.options,
                                                  function(o) {
                                                    return o.selected
                                                  }
                                                )
                                                .map(function(o) {
                                                  var val =
                                                    "_value" in o
                                                      ? o._value
                                                      : o.value
                                                  return val
                                                })
                                              _vm.$set(
                                                _vm.paymentForm.payments[index],
                                                "_payment_method",
                                                $event.target.multiple
                                                  ? $$selectedVal
                                                  : $$selectedVal[0]
                                              )
                                            }
                                          }
                                        },
                                        _vm._l(_vm.getPaymentMethods, function(
                                          ref
                                        ) {
                                          var name = ref.name
                                          var id = ref.id
                                          return _c(
                                            "option",
                                            { domProps: { value: id } },
                                            [
                                              _vm._v(
                                                "\n                                                " +
                                                  _vm._s(
                                                    _vm._f("capitalize")(name)
                                                  ) +
                                                  "\n                                            "
                                              )
                                            ]
                                          )
                                        })
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c("th", [
                                      _c(
                                        "select",
                                        {
                                          directives: [
                                            {
                                              name: "model",
                                              rawName: "v-model",
                                              value:
                                                _vm.paymentForm.payments[index]
                                                  ._payment_bank,
                                              expression:
                                                "paymentForm.payments[index]._payment_bank"
                                            }
                                          ],
                                          staticClass: "custom-select w-100",
                                          on: {
                                            change: function($event) {
                                              var $$selectedVal = Array.prototype.filter
                                                .call(
                                                  $event.target.options,
                                                  function(o) {
                                                    return o.selected
                                                  }
                                                )
                                                .map(function(o) {
                                                  var val =
                                                    "_value" in o
                                                      ? o._value
                                                      : o.value
                                                  return val
                                                })
                                              _vm.$set(
                                                _vm.paymentForm.payments[index],
                                                "_payment_bank",
                                                $event.target.multiple
                                                  ? $$selectedVal
                                                  : $$selectedVal[0]
                                              )
                                            }
                                          }
                                        },
                                        _vm._l(_vm.getBanks, function(ref) {
                                          var name = ref.name
                                          var id = ref.id
                                          return _c(
                                            "option",
                                            { domProps: { value: id } },
                                            [_vm._v(_vm._s(name))]
                                          )
                                        })
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c("th", [
                                      _c(
                                        "div",
                                        { staticClass: "form-group mb-0" },
                                        [
                                          _c("input", {
                                            directives: [
                                              {
                                                name: "model",
                                                rawName: "v-model",
                                                value:
                                                  _vm.paymentForm.payments[
                                                    index
                                                  ]._date,
                                                expression:
                                                  "paymentForm.payments[index]._date"
                                              }
                                            ],
                                            staticClass: "form-control",
                                            attrs: {
                                              name: "date",
                                              type: "date"
                                            },
                                            domProps: {
                                              value:
                                                _vm.paymentForm.payments[index]
                                                  ._date
                                            },
                                            on: {
                                              input: function($event) {
                                                if ($event.target.composing) {
                                                  return
                                                }
                                                _vm.$set(
                                                  _vm.paymentForm.payments[
                                                    index
                                                  ],
                                                  "_date",
                                                  $event.target.value
                                                )
                                              }
                                            }
                                          })
                                        ]
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c("th", [
                                      _c(
                                        "div",
                                        { staticClass: "form-group mb-0" },
                                        [
                                          _c("input", {
                                            staticClass: "form-control",
                                            attrs: {
                                              "data-vv-as": "date",
                                              name: "date",
                                              type: "text",
                                              disabled: ""
                                            },
                                            domProps: { value: _vm.user.name }
                                          })
                                        ]
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c("th", [
                                      _c(
                                        "button",
                                        {
                                          staticClass:
                                            "ml-2 btn status status-sm my-sm-2 not-approved",
                                          on: {
                                            click: function($event) {
                                              _vm.deletePayment(index)
                                            }
                                          }
                                        },
                                        [
                                          _c("i", {
                                            staticClass: "fas fa-times"
                                          })
                                        ]
                                      )
                                    ])
                                  ])
                                })
                              ],
                              2
                            )
                          ])
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "modal-footer" }, [
                        _c(
                          "button",
                          {
                            staticClass: "btn status my-sm-2",
                            on: {
                              click: function($event) {
                                _vm.addPaymentForm()
                              }
                            }
                          },
                          [_vm._v("Add Payment")]
                        ),
                        _vm._v(" "),
                        _c(
                          "button",
                          {
                            staticClass: "btn status my-sm-2 approved ml-4",
                            on: {
                              click: function($event) {
                                _vm.preparePayments()
                              }
                            }
                          },
                          [
                            _vm._v(
                              "Click here to\n                            Submit\n                            Payment(s)!\n                        "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "a",
                          {
                            staticClass: "text-link mt-3",
                            staticStyle: { "text-align": "right" },
                            attrs: {
                              "data-dismiss": "modal",
                              href: "javascript:"
                            }
                          },
                          [_vm._v("close dialogue")]
                        )
                      ])
                    ])
                  : _vm._e()
              ]
            )
          ]
        )
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-569152fc", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-f4889778\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/CustomerProfile.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("transition", { attrs: { name: "fade" } }, [
    _c(
      "div",
      { class: _vm.full && "px-md-4 px-2" },
      [
        _vm.full
          ? _c("app-navigation", {
              attrs: {
                forward: { path: _vm.$routerHistory.next().path },
                previous: { path: _vm.$routerHistory.previous().path },
                pageTitle: "Customer Profile",
                pageTitleSmall: "Customer Profile"
              }
            })
          : _vm._e(),
        _vm._v(" "),
        _vm.show
          ? _c(
              "div",
              {
                staticClass: "pt-md-3 pt-2 verification",
                attrs: { id: "employeeRegister" }
              },
              [
                _c(
                  "div",
                  { staticClass: "customer-profile card position-relative" },
                  [
                    _c("div", { staticClass: "design" }),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass:
                          "col-md-4 col-sm-4 col-12 px-0 pb-md-4 pb-sm-3 pb-0 pt-md-5 pt-4 float-left"
                      },
                      [
                        _c("div", { staticClass: "pt-md-3 pt-sm-2 pt-1" }, [
                          _c(
                            "div",
                            {
                              staticClass:
                                "justify-content-center d-flex position-relative z-1"
                            },
                            [
                              _c("span", { staticClass: "img-border" }, [
                                _vm.customer.document.passport_url
                                  ? _c("img", {
                                      staticClass:
                                        "profile-picture rounded-circle",
                                      attrs: {
                                        src: _vm.passport,
                                        alt: "customer profile pic"
                                      }
                                    })
                                  : _c("i", {
                                      staticClass: "no-image fas fa-user-alt"
                                    })
                              ])
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass:
                                "justify-content-center d-flex position-relative z-1 pt-md-4 pt-sm-4 pt-2"
                            },
                            [
                              _c("span", { staticClass: "w-50" }, [
                                _c(
                                  "div",
                                  {
                                    staticClass:
                                      "text-right px-4 py-3 text-light text-muted m-0"
                                  },
                                  [
                                    _vm._v(
                                      "\n                                    Status"
                                    ),
                                    _c("i", {
                                      staticClass: "ml-3 fas fa-briefcase"
                                    })
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  {
                                    staticClass: "data text-right px-4 py-3 m-0"
                                  },
                                  [
                                    _vm._v(
                                      _vm._s(
                                        _vm._f("capitalize")(
                                          _vm.customer.employment_status
                                        )
                                      )
                                    )
                                  ]
                                )
                              ]),
                              _vm._v(" "),
                              _c("span", { staticClass: "separator" }),
                              _vm._v(" "),
                              _c("span", { staticClass: "w-50" }, [
                                _c(
                                  "div",
                                  {
                                    staticClass:
                                      "px-4 py-3 text-muted text-light m-0"
                                  },
                                  [
                                    _c("i", {
                                      staticClass: "mr-3 fas fa-transgender"
                                    }),
                                    _vm._v(
                                      "Gender\n                                "
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  { staticClass: "data px-4 py-3 m-0" },
                                  [
                                    _vm._v(
                                      _vm._s(
                                        _vm._f("capitalize")(
                                          _vm.customer.gender
                                        )
                                      )
                                    )
                                  ]
                                )
                              ])
                            ]
                          )
                        ])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass:
                          "col-md-8 col-sm-8 col-12 px-0 pb-4 pt-md-5 pt-sm-5 pt-0 float-left"
                      },
                      [
                        _c("div", { staticClass: "pt-md-4 pt-0 clearfix" }, [
                          _c(
                            "div",
                            {
                              staticClass:
                                "float-left p-0 m-0 col-md-4 col-sm-6 small-center"
                            },
                            [
                              _c(
                                "h4",
                                {
                                  staticClass:
                                    "mt-0 pt-md-5 pt-sm-4 pt-0 mb-md-5 mb-sm-4 mb-3"
                                },
                                [
                                  _c("i", {
                                    staticClass: "mr-3 far fa-user-circle"
                                  }),
                                  _vm._v(" "),
                                  _c("strong", [
                                    _vm._v(
                                      _vm._s(
                                        _vm._f("capitalize")(
                                          _vm.$getCustomerFullName(_vm.customer)
                                        )
                                      )
                                    )
                                  ])
                                ]
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass:
                                "float-left p-0 m-0 col-md-4 col-sm-6 d-flex justify-content-center"
                            },
                            [
                              _c(
                                "h4",
                                {
                                  staticClass:
                                    "mt-0 pt-md-5 pt-sm-4 pt-0 mb-md-5 mb-sm-4 mb-4 text-muted"
                                },
                                [
                                  _c("strong", [
                                    _vm._v(
                                      "Customer ID: " + _vm._s(_vm.customer.id)
                                    )
                                  ])
                                ]
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass:
                                "float-left p-0 m-0 col-md-4 col-12 d-flex justify-content-center"
                            },
                            [
                              _c(
                                "span",
                                {
                                  class:
                                    "status mt-md-5 my-sm-2 mt-0 " +
                                    (_vm.approved ? "approved" : "not-approved")
                                },
                                [
                                  _vm._v(
                                    "\n                                " +
                                      _vm._s(
                                        _vm.approved
                                          ? "APPROVED"
                                          : "NOT APPROVED"
                                      ) +
                                      "\n                                "
                                  ),
                                  _c("i", {
                                    class:
                                      "ml-3 fas fa-" +
                                      (_vm.approved ? "check" : "times")
                                  })
                                ]
                              )
                            ]
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "pt-4" }, [
                          _c("table", { staticClass: "table" }, [
                            _c("tbody", [
                              _c("tr", [
                                _c("th", { staticClass: "text-muted" }, [
                                  _c("i", {
                                    staticClass: "mr-3 fas fa-mobile-alt"
                                  }),
                                  _vm._v("Phone Number")
                                ]),
                                _vm._v(" "),
                                _c("td", [
                                  _vm._v(_vm._s(_vm.customer.telephone))
                                ])
                              ]),
                              _vm._v(" "),
                              _vm.$store.getters.auth("DVAAccess")
                                ? _c("tr", [
                                    _c("th", { staticClass: "text-muted" }, [
                                      _c("i", {
                                        staticClass:
                                          "mr-3 fas fa-map-marker-alt"
                                      }),
                                      _vm._v("Address")
                                    ]),
                                    _vm._v(" "),
                                    _c("td", [
                                      _vm._v(
                                        _vm._s(
                                          _vm._f("capitalize")(
                                            _vm.$getCustomerAddress(
                                              _vm.customer
                                            )
                                          )
                                        ) + "\n                                "
                                      )
                                    ])
                                  ])
                                : _vm._e(),
                              _vm._v(" "),
                              _c("tr", [
                                _c("th", { staticClass: "text-muted" }, [
                                  _c("i", { staticClass: "mr-3 fas fa-gift" }),
                                  _vm._v("Registered On")
                                ]),
                                _vm._v(" "),
                                _c("td", [
                                  _vm._v(
                                    _vm._s(_vm.customer.date_of_registration)
                                  )
                                ])
                              ]),
                              _vm._v(" "),
                              _c("tr", [
                                _c("th", { staticClass: "text-muted" }, [
                                  _c("i", {
                                    staticClass: "mr-3 far fa-user-circle"
                                  }),
                                  _vm._v("Registered By")
                                ]),
                                _vm._v(" "),
                                _c("td", [
                                  _vm._v(
                                    _vm._s(
                                      _vm._f("capitalize")(
                                        _vm.customer.user
                                          ? _vm.customer.user.full_name
                                          : "user not in record"
                                      )
                                    ) + "\n                                "
                                  )
                                ])
                              ]),
                              _vm._v(" "),
                              _c("tr", [
                                _c("th", { staticClass: "text-muted" }, [
                                  _c("i", {
                                    staticClass: "mr-3 far fa-building"
                                  }),
                                  _vm._v("Branch")
                                ]),
                                _vm._v(" "),
                                _c("td", [
                                  _vm._v(
                                    _vm._s(_vm._f("capitalize")(_vm.branch))
                                  )
                                ])
                              ])
                            ])
                          ])
                        ])
                      ]
                    )
                  ]
                ),
                _vm._v(" "),
                _vm.full
                  ? _c("div", [_vm._v("Full profile goes here")])
                  : _vm._e()
              ]
            )
          : _vm._e()
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-f4889778", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-569152fc\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/views/FSL/lookup/lookup.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-569152fc\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/views/FSL/lookup/lookup.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("e69d9284", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-569152fc\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./lookup.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-569152fc\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./lookup.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/vue-style-loader/lib/addStylesClient.js":
/***/ (function(module, exports, __webpack_require__) {

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/

var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

var listToStyles = __webpack_require__("./node_modules/vue-style-loader/lib/listToStyles.js")

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

module.exports = function (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),

/***/ "./node_modules/vue-style-loader/lib/listToStyles.js":
/***/ (function(module, exports) {

/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
module.exports = function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
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

/***/ "./resources/assets/js/components/CustomerProfile.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"babel-preset-env\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"babel-plugin-syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/CustomerProfile.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-f4889778\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/CustomerProfile.vue")
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
Component.options.__file = "resources\\assets\\js\\components\\CustomerProfile.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-f4889778", Component.options)
  } else {
    hotAPI.reload("data-v-f4889778", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/js/components/customHeader.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"babel-preset-env\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"babel-plugin-syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/customHeader.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-02013d35\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/customHeader.vue")
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
Component.options.__file = "resources\\assets\\js\\components\\customHeader.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-02013d35", Component.options)
  } else {
    hotAPI.reload("data-v-02013d35", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/js/utilities/Amortization.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _vue = __webpack_require__("./node_modules/vue/dist/vue.common.js");

var _vue2 = _interopRequireDefault(_vue);

var _store = __webpack_require__("./resources/assets/js/store/store.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var vue = new _vue2.default();

var Order = function () {
    function Order(order, customer) {
        _classCallCheck(this, Order);

        this._order = order;
        this._customer = customer;
        this._paymentBanks = [];
        this._paymentMethods = [];
        this._actualPayDates = [];
        this._actualAmountsPaid = [];
        this._amountsToBePaid = [];
        this._repaymentCaptions = [];
        this._paymentStatusClasses = [];
        this._repaymentLevel = 0;

        /*summary*/
        this._amountPaid = null;
        this._discountAmount = null;
        this._outstandingDebt = null;
        this._discountedTotal = null;
        this._defaultFee = null;
        this._totalPlusDefault = null;

        /*for repayments*/
        this._payments = {};

        /*init setters*/
        this.setIsOrderFormal();
        this.setIsRepaymentValid();
        this.setRepaymentData();
        this.setCountAndInterval();
        this.setCommonDetails();
        this.setDueDates();
        this.setPaymentStatusClasses();
        this.calcAndSetPaymentSummary();
        this.setBranch();
        this.setDiscount();
    }

    /*custom setters*/


    _createClass(Order, [{
        key: 'setIsRepaymentValid',
        value: function setIsRepaymentValid() {
            this._isRepaymentValid = !(!this.order['repayment_formal'] && !this.order['repayment_informal']);
        }
    }, {
        key: 'setIsOrderFormal',
        value: function setIsOrderFormal() {
            this._isOrderFormal = ['formal', 'salaried'].includes(this._customer.employment_status.toLowerCase());
        }
    }, {
        key: 'setRepaymentData',
        value: function setRepaymentData() {
            if (this.order['repayment_formal'] != null) this._repaymentData = this.order.repayment_formal;
            if (this.order['repayment_informal'] != null) this._repaymentData = this.order.repayment_informal;
        }
    }, {
        key: 'setCountAndInterval',
        value: function setCountAndInterval() {
            //'2019-07-07' this is the date the bank draft was implemented
            // and hence used as a factor to check for
            // if amortization should be 12 or 6
            var interval = void 0,
                count = void 0;
            if (new Date(this.order.order_date) <= new Date('2019-07-07')) {
                if (this.order['repayment_formal'] != null) {
                    interval = 28;
                    count = 6;
                }
                if (this.order['repayment_informal'] != null) {
                    interval = 14;
                    count = 12;
                }
            } else {
                if (Order.isBankDraftAvailable() && this.isOrderFormal) {
                    interval = 28;
                    count = 6;
                } else {
                    interval = 14;
                    count = 12;
                }
            }
            this._count = count;
            this._interval = interval;
        }
    }, {
        key: 'setDueDates',
        value: function setDueDates() {
            this._dueDates = Order.generateDueDates(this.order.order_date, this.interval, this.count);
        }
    }, {
        key: 'setCommonDetails',
        value: function setCommonDetails() {
            if (!this.isRepaymentValid) return;
            for (var i = 1; i < this.count + 1; i++) {
                /*for repayment captions*/
                var prefix = vue.$getColumn(i).split('');
                var appendix = [];
                for (var j = 1; j <= 2; j++) {
                    appendix.unshift(prefix.pop());
                }this._repaymentCaptions.push('<td>' + prefix.join('') + '<sup>' + appendix.join('') + '</sup></td>');

                this._actualPayDates.push(this.repaymentData[vue.$getColumn(i) + '_date']);
                this._actualAmountsPaid.push(this.repaymentData[vue.$getColumn(i) + '_pay']);
                this._paymentBanks.push(this.repaymentData[vue.$getColumn(i) + '_payment_bank']);
                this._paymentMethods.push(this.repaymentData[vue.$getColumn(i) + '_payment_method']);
                this._amountsToBePaid.push(vue.$roundDownAmt(this.order.repayment_amount));

                if (this.repaymentData[vue.$getColumn(i) + '_pay'] > 0) this._repaymentLevel++;
            }
        }
    }, {
        key: 'setBranch',
        value: function setBranch() {
            var _this = this;

            this._branch = _store.store.state.branches.find(function (branch) {
                return parseInt(branch.id) === parseInt(_this.order.store_product.store_name);
            });
        }
    }, {
        key: 'setPaymentStatusClasses',
        value: function setPaymentStatusClasses() {
            if (!this.isRepaymentValid) /*this._repayment = null;*/return;
            for (var i = 1; i < this.count + 1; i++) {
                var status = { class: null, icon: null };
                var position = vue.$getColumn(i);
                var isDue = Order.isPaymentDue(this.dueDates[i - 1]);
                var amountPaid = parseInt(this.repaymentData[position + '_pay']);
                if (amountPaid) {
                    status.class = 'paid';
                    status.icon = 'fa-check';
                } else if (isDue && !amountPaid) {
                    status.class = 'missed';
                    status.icon = 'fa-times';
                } else if (!isDue) {
                    status.class = 'pending';
                    status.icon = 'fa-hourglass-start';
                }
                this._paymentStatusClasses.push(status);
            }
        }
    }, {
        key: 'calcAndSetPaymentSummary',
        value: function calcAndSetPaymentSummary() {
            var _this2 = this;

            var datesDefaulted = [];
            var amountPerDefault = 500;
            var fmt = function fmt(cur) {
                return vue.$formatCurrency(cur);
            };
            var amountPaid = vue.$roundDownAmt(parseInt(this.order.down_payment));

            this.dueDates.forEach(function (dueDate, index) {
                return Order.isPaymentDue(vue.$getDate(new Date(dueDate).addDays(5))) && datesDefaulted.push({ dueDate: dueDate, actualPayDate: _this2.actualPayDates[index] });
            });

            if (!!this.repaymentData) {
                for (var i = 0; i < this.count + 1; i++) {
                    var amtPaid = parseInt(this.actualAmountsPaid[i]);
                    amountPaid += !!amtPaid ? vue.$roundDownAmt(amtPaid) : 0;
                }
            } else amountPaid = 0;

            var discount = this.order.discount.percentage_discount;

            var multiplicationFactor = this.count === 6 ? 0.5 : 1;
            var repaymentCoveredAsDiscount = function repaymentCoveredAsDiscount() {
                return discount > 0 ? discount === 5 ? 1 : 2 : 0;
            };

            var discountAmount = this.order.repayment_amount * multiplicationFactor * repaymentCoveredAsDiscount();
            discountAmount = vue.$roundDownAmt(discountAmount);

            var defaultFee = datesDefaulted.length * amountPerDefault;
            var discountedTotal = vue.$roundDownAmt(this.order["product_price"] - discountAmount);

            this._amountPaid = fmt(amountPaid);
            this._discountAmount = fmt(vue.$roundDownAmt(discountAmount));
            this._outstandingDebt = fmt(vue.$roundDownAmt(parseInt(this.order["product_price"]) - amountPaid));
            this._discountedTotal = fmt(discountedTotal);
            this._defaultFee = fmt(defaultFee);
            this._totalPlusDefault = fmt(discountedTotal + defaultFee);
        }
    }, {
        key: 'setDiscount',
        value: function setDiscount() {
            this._discount = this.order.discount.name + " " + this.order.discount.percentage_discount;
        }

        /*getters*/

    }, {
        key: 'payments',
        set: function set(payments) {
            this._payments = payments;
        },
        get: function get() {
            return this._payments;
        }
    }, {
        key: 'repaymentLevel',
        get: function get() {
            return this._repaymentLevel;
        }
    }, {
        key: 'order',
        get: function get() {
            return this._order;
        }
    }, {
        key: 'customer',
        get: function get() {
            return this._customer;
        }
    }, {
        key: 'isRepaymentValid',
        get: function get() {
            return this._isRepaymentValid;
        }
    }, {
        key: 'isOrderFormal',
        get: function get() {
            return this._isOrderFormal;
        }
    }, {
        key: 'repaymentData',
        get: function get() {
            return this._repaymentData;
        }
    }, {
        key: 'count',
        get: function get() {
            return this._count;
        }
    }, {
        key: 'interval',
        get: function get() {
            return this._interval;
        }
    }, {
        key: 'dueDates',
        get: function get() {
            return this._dueDates;
        }
    }, {
        key: 'paymentStatusClasses',
        get: function get() {
            return this._paymentStatusClasses;
        }
    }, {
        key: 'repaymentCaptions',
        get: function get() {
            return this._repaymentCaptions;
        }
    }, {
        key: 'paymentBanks',
        get: function get() {
            return this._paymentBanks;
        }
    }, {
        key: 'paymentMethods',
        get: function get() {
            return this._paymentMethods;
        }
    }, {
        key: 'actualPayDates',
        get: function get() {
            return this._actualPayDates;
        }
    }, {
        key: 'actualAmountsPaid',
        get: function get() {
            return this._actualAmountsPaid;
        }
    }, {
        key: 'amountsToBePaid',
        get: function get() {
            return this._amountsToBePaid;
        }
    }, {
        key: 'amountPaid',
        get: function get() {
            return this._amountPaid;
        }
    }, {
        key: 'discountAmount',
        get: function get() {
            return this._discountAmount;
        }
    }, {
        key: 'outstandingDebt',
        get: function get() {
            return this._outstandingDebt;
        }
    }, {
        key: 'discountedTotal',
        get: function get() {
            return this._discountedTotal;
        }
    }, {
        key: 'defaultFee',
        get: function get() {
            return this._defaultFee;
        }
    }, {
        key: 'totalPlusDefault',
        get: function get() {
            return this._totalPlusDefault;
        }
    }, {
        key: 'branch',
        get: function get() {
            return this._branch;
        }
    }, {
        key: 'discount',
        get: function get() {
            return this._discount;
        }
    }, {
        key: 'customerName',
        get: function get() {
            return this.customer.first_name + " " + this.customer.last_name;
        }
    }, {
        key: 'customerWGName',
        get: function get() {
            var _customer = this.customer,
                a = _customer.work_guarantor_first_name,
                b = _customer.work_guarantor_last_name,
                c = _customer.work_guarantor_relationship;

            return a + ' ' + b + ' - ' + c;
        }
    }, {
        key: 'customerPGName',
        get: function get() {
            var _customer2 = this.customer,
                a = _customer2.personal_guarantor_first_name,
                b = _customer2.personal_guarantor_last_name,
                c = _customer2.personal_guarantor_relationship;

            return a + ' ' + b + ' - ' + c;
        }

        /*static methods*/

    }], [{
        key: 'generateDueDates',
        value: function generateDueDates(startDate, interval, count) {
            var dates = [];
            for (var i = 0; i < count; i++) {
                var orderDate = new Date(startDate).addDays((i + 1) * interval);
                var dateString = vue.$getDate(orderDate);
                dates.push(dateString);
            }
            return dates;
        }
    }, {
        key: 'isPaymentDue',
        value: function isPaymentDue(dueDate) {
            return new Date() > new Date(dueDate);
        }
    }, {
        key: 'isBankDraftAvailable',
        value: function isBankDraftAvailable() {
            return false;
        }
    }, {
        key: 'renderMessage',
        value: function renderMessage(reminder) {
            return !!reminder['sms'] ? reminder.sms.message.replace(/%0a/g, '</br>') : reminder.feedback;
        }
    }, {
        key: 'convertToName',
        value: function convertToName(id, type) {
            return !id ? null : _store.store.state[type].find(function (obj) {
                return obj.id === id;
            }).name;
        }
    }]);

    return Order;
}();

var OrderWithPromiseCall = function (_Order) {
    _inherits(OrderWithPromiseCall, _Order);

    function OrderWithPromiseCall(order, dvaId) {
        _classCallCheck(this, OrderWithPromiseCall);

        var _this3 = _possibleConstructorReturn(this, (OrderWithPromiseCall.__proto__ || Object.getPrototypeOf(OrderWithPromiseCall)).call(this, order, order.customer));

        _this3._isReminderSent = false;
        _this3._dvaId = dvaId;
        _this3._isSelected = false;
        _this3.setReminder(null);
        _this3.setIsReminderSent();
        _this3.setFinancialStatus();
        _this3.setPromiseCall();
        _this3.generateAndSetNextSMSReminder();
        return _this3;
    }

    /*custom setters*/


    _createClass(OrderWithPromiseCall, [{
        key: 'setIsReminderSent',
        value: function setIsReminderSent() {
            var _this4 = this;

            var date = void 0;
            var today = vue.$getDate();
            this.order.reminders.forEach(function (reminder) {
                //refactor below by using regx characters to split
                var reminderDateTimeArr = reminder.date.split(' '); //(2019-03-24 02:00:00) -> ['2019-03-24','02:00:00']
                var dateArr = reminderDateTimeArr[0].split('-'); //'2019-03-24' -> ['2019','03','24']
                var timeArr = reminderDateTimeArr[1].split(':'); //'02:00:00' -> ['02','00','00']
                var arr = [].concat(_toConsumableArray(dateArr), _toConsumableArray(timeArr)) // ['2019','03','24','02','00','00']
                .map(function (item) {
                    return parseInt(item, 10);
                }); //[2019,3,24,2,0,0]
                date = vue.$getDate(new Date(Date.UTC.apply(Date, _toConsumableArray(arr))), false);
                date === today && (_this4._isReminderSent = true);
            });
        }
    }, {
        key: 'setFinancialStatus',
        value: function setFinancialStatus() {
            this._financialStatus = !this.isRepaymentValid ? 'no detail!' : 'Paid: ' + this.amountPaid + ' | Debt: ' + this.outstandingDebt;
        }
    }, {
        key: 'generateAndSetNextSMSReminder',
        value: function generateAndSetNextSMSReminder() {
            var _order = this.order,
                store_product = _order.store_product,
                repayment_amount = _order.repayment_amount,
                customer = _order.customer,
                order_date = _order.order_date,
                first_name = customer.first_name,
                last_name = customer.last_name,
                name = first_name + " " + last_name,
                product_name = store_product.product_name;


            var message = void 0;
            if (order_date === vue.$getDate()) {
                message = 'Hello ' + name + ', thanks for patronizing us.' + ' The following is the breakdown of the repayment plan for' + (' the purchase of ' + product_name + ':%0a');
                this.dueDates.forEach(function (date, index) {
                    return message += vue.$getColumn(index + 1) + ": " + date + " => " + vue.$formatCurrency(vue.$roundDownAmt(repayment_amount)) + "%0a";
                });
            } else {
                message = 'Hello ' + name + ', This is to remind you that your' + (' ' + vue.$getColumn(parseInt(this.repaymentLevel) + 1) + ' repayment of') + (' ' + vue.$formatCurrency(vue.$roundDownAmt(repayment_amount)) + ' for ' + product_name) + (' will be due on ' + this.dueDates[this.repaymentLevel] + '. we will be expecting you.');
            }
            this._nextSMSReminder = message + "Please remember to pay on time to avoid" + " late fees and other penalties.%0aThank you.";
        }

        //NB:: this method is called from outside of this class.
        //to use always call this method after instantiating the class.

    }, {
        key: 'setReminder',
        value: function setReminder(type) {
            this._reminder = {
                type: type,
                'dva_id': this.dvaId,
                'order_id': this.order.id,
                'feedback': null,
                'customer_id': this.customer.id,
                'canBeSelected': !this.isReminderSent,
                'repayment_level': this.repaymentLevel
            };
            if (type === 'sms') {
                this._reminder.sms_id = null;
                this._reminder.contacts = this.customer.telephone;
            }
        }
    }, {
        key: 'setPromiseCall',
        value: function setPromiseCall() {
            this._promiseCall = {
                order_id: this.order.id,
                user_id: this.dvaId,
                customer_id: this.customer.id,
                date: null
            };
        }

        /*setters*/

    }, {
        key: 'isSelected',
        set: function set(value) {
            this._isSelected = value;
        }

        /*getters*/
        ,
        get: function get() {
            return this._isSelected;
        }
    }, {
        key: 'isReminderSent',
        get: function get() {
            return this._isReminderSent;
        }
    }, {
        key: 'dvaId',
        get: function get() {
            return this._dvaId;
        }
    }, {
        key: 'financialStatus',
        get: function get() {
            return this._financialStatus;
        }
    }, {
        key: 'nextSMSReminder',
        get: function get() {
            return this._nextSMSReminder;
        }
    }, {
        key: 'reminder',
        get: function get() {
            return this._reminder;
        }
    }, {
        key: 'promiseCall',
        get: function get() {
            return this._promiseCall;
        }
    }]);

    return OrderWithPromiseCall;
}(Order);

module.exports = { Order: Order, OrderWithPromiseCall: OrderWithPromiseCall };

/***/ }),

/***/ "./resources/assets/js/utilities/event-bus.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EventBus = undefined;

var _vue = __webpack_require__("./node_modules/vue/dist/vue.common.js");

var _vue2 = _interopRequireDefault(_vue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EventBus = exports.EventBus = new _vue2.default();

/***/ }),

/***/ "./resources/assets/js/views/FSL/lookup/lookup.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-569152fc\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/views/FSL/lookup/lookup.vue")
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"babel-preset-env\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"babel-plugin-syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/views/FSL/lookup/lookup.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-569152fc\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/views/FSL/lookup/lookup.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-569152fc"
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
Component.options.__file = "resources\\assets\\js\\views\\FSL\\lookup\\lookup.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-569152fc", Component.options)
  } else {
    hotAPI.reload("data-v-569152fc", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});