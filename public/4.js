<<<<<<< HEAD
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

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"babel-preset-env\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"babel-plugin-syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/CustomerProfileFull.vue":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = __webpack_require__("./node_modules/babel-runtime/regenerator/index.js");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _api = __webpack_require__("./resources/assets/js/helpers/api.js");

var _flash = __webpack_require__("./resources/assets/js/helpers/flash.js");

var _flash2 = _interopRequireDefault(_flash);

var _customerProfile = __webpack_require__("./resources/assets/js/components/customerProfile.vue");

var _customerProfile2 = _interopRequireDefault(_customerProfile);

var _AppNavigation = __webpack_require__("./resources/assets/js/components/AppNavigation.vue");

var _AppNavigation2 = _interopRequireDefault(_AppNavigation);

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

exports.default = {
    data: function data() {
        return { customer: '' };
    },

    components: { CustomerProfile: _customerProfile2.default, AppNavigation: _AppNavigation2.default },
    created: function created() {
        $('.tooltip').remove();
        this.fetch();
    },

    methods: {
        fetch: function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
                var _this = this;

                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                if (!this.$network()) {
                                    _context.next = 8;
                                    break;
                                }

                                this.$LIPS(true);
                                _context.next = 4;
                                return (0, _api.get)('/api/customer/' + this.$route.params.id).then(function (r) {
                                    return _this.customer = r.data.customer;
                                }).catch(function (e) {
                                    return _flash2.default.setError(e.response.status === 422 ? e.response.data.message : 'Something went wrong, try again later!');
                                });

                            case 4:
                                this.$LIPS(false);
                                this.$scrollToTop();
                                _context.next = 9;
                                break;

                            case 8:
                                this.$networkErr();

                            case 9:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function fetch() {
                return _ref.apply(this, arguments);
            }

            return fetch;
        }()
    }
};

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"babel-preset-env\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"babel-plugin-syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/customerProfile.vue":
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    props: ['customer'],
    computed: {
        approved: function approved() {
            return this.customer.verification.address === 1 && this.customer.verification.id_card === 1 && this.customer.verification.passport === 1 && this.customer.verification.processing_fee === 1 && this.customer.verification.work_guarantor === 1 && this.customer.verification.personal_guarantor === 1;
            /*This component is the customer profile proper. for optimal result.
            * The data passed to this should be a response
            * from the CustomerController@show
            * this method is used to check the approval
            * status for any customer details
            * supplied to it.
            * NB all the params above must be
            * 1 for a customer t be approved*/
        }
    }
};

/***/ }),

/***/ "./node_modules/babel-runtime/regenerator/index.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./node_modules/regenerator-runtime/runtime-module.js");


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2f542aae\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/AppNavigation.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*Not the css is included in this component to reduce\n* the size of the main css file because\n* the components are lazy loaded*/\n#index a#back {\n  left: 0;\n}\n#index a#forward {\n  right: 0;\n}\n#index a#back, #index a#forward {\n  margin-top: .8rem;\n  position: absolute;\n}\n#index a#back i, #index a#forward i {\n    font-size: 2.4rem;\n}\n#index .forward, #index .back {\n  line-height: 2.4rem;\n  margin-top: -.2rem;\n  font-weight: bold;\n}\n@media (max-width: 990px) {\n#index a#back i, #index a#forward i {\n    font-size: 2.6rem;\n}\n}\n@media (max-width: 600px) {\n#index a#back, #index a#forward, #index [data-title=\"title\"] {\n    margin-top: -.3rem;\n    margin-bottom: .3rem;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3b07ec64\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/customerProfile.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.customer-profile {\n  position: relative;\n}\n.customer-profile th {\n    width: auto;\n    font-weight: normal;\n}\n.customer-profile td, .customer-profile .data {\n    font-size: 1.5rem;\n    font-weight: 500;\n}\n.customer-profile .status {\n    padding: 1.2rem 3rem;\n    float: left;\n    color: white;\n    border-radius: .5rem;\n    -webkit-box-shadow: 0 7px 15px rgba(0, 0, 0, 0.15), 0 4px 4px rgba(0, 0, 0, 0.2);\n            box-shadow: 0 7px 15px rgba(0, 0, 0, 0.15), 0 4px 4px rgba(0, 0, 0, 0.2);\n    font-weight: 700;\n    font-size: 1.3rem;\n}\n.customer-profile .status.approved {\n      background-color: #00a368;\n}\n.customer-profile .status.not-approved {\n      background-color: #c81618;\n}\n.customer-profile .design {\n    position: absolute;\n    top: 13rem;\n    bottom: 0;\n    left: 0;\n    width: 101%;\n    height: calc(100% - 8.1rem);\n    z-index: 0;\n    background: linear-gradient(45deg, #dedede 0%, #ffffff 100%);\n}\n.customer-profile .profile-picture, .customer-profile .no-image {\n    height: 16rem;\n    width: 16rem;\n    -webkit-box-shadow: 0 7px 15px rgba(0, 0, 0, 0.15), 0 4px 4px rgba(0, 0, 0, 0.2);\n            box-shadow: 0 7px 15px rgba(0, 0, 0, 0.15), 0 4px 4px rgba(0, 0, 0, 0.2);\n}\n.customer-profile .no-image {\n    background-color: #e3e3e3;\n    border-radius: 50%;\n    line-height: 16rem;\n    text-align: center;\n    font-size: 8rem;\n    color: rgba(0, 0, 0, 0.15);\n}\n.customer-profile .img-border {\n    padding: 1.1rem;\n    background-color: white;\n    border-radius: 50%;\n}\n.customer-profile .separator {\n    position: absolute;\n    left: 50%;\n    height: 70%;\n    width: 1px;\n    background-color: rgba(0, 0, 0, 0.1);\n    top: 3%;\n}\n@media (max-width: 600px) {\n.customer-profile .design {\n    background: -webkit-gradient(linear, left top, left bottom, from(#dedede), to(#ffffff));\n    background: linear-gradient(180deg, #dedede 0%, #ffffff 100%);\n}\n.customer-profile .separator {\n    top: -11%;\n}\n.customer-profile .small-center {\n    text-align: center;\n}\n.customer-profile th {\n    width: 35%;\n}\n.customer-profile tbody {\n    padding: 1rem 1rem 0;\n    float: left;\n}\n}\n", ""]);

// exports


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

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-3b07ec64\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/customerProfile.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "customer-profile card position-relative" }, [
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
              staticClass: "justify-content-center d-flex position-relative z-1"
            },
            [
              _c("span", { staticClass: "img-border" }, [
                _vm.customer.document.passport_url
                  ? _c("img", {
                      staticClass: "profile-picture rounded-circle",
                      attrs: {
                        src:
                          "https://s3.eu-west-2.amazonaws.com/altara-one/" +
                          _vm.customer.document.passport_url,
                        alt: "customer profile pic"
                      }
                    })
                  : _c("i", { staticClass: "no-image fas fa-user-alt" })
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
                _vm._m(0),
                _vm._v(" "),
                _c("div", { staticClass: "data text-right px-4 py-3 m-0" }, [
                  _vm._v(
                    _vm._s(_vm._f("capitalize")(_vm.customer.employment_status))
                  )
                ])
              ]),
              _vm._v(" "),
              _c("span", { staticClass: "separator" }),
              _vm._v(" "),
              _c("span", { staticClass: "w-50" }, [
                _vm._m(1),
                _vm._v(" "),
                _c("div", { staticClass: "data px-4 py-3 m-0" }, [
                  _vm._v(_vm._s(_vm._f("capitalize")(_vm.customer.gender)))
                ])
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
              staticClass: "float-left p-0 m-0 col-md-4 col-sm-6 small-center"
            },
            [
              _c(
                "h4",
                {
                  staticClass: "mt-0 pt-md-5 pt-sm-4 pt-0 mb-md-5 mb-sm-4 mb-3"
                },
                [
                  _c("i", { staticClass: "mr-3 far fa-user-circle" }),
                  _vm._v(" "),
                  _c("strong", [
                    _vm._v(
                      _vm._s(
                        _vm._f("capitalize")(
                          _vm.customer.first_name + " " + _vm.customer.last_name
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
                    _vm._v("Customer ID: " + _vm._s(_vm.customer.id))
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
              _vm.approved
                ? _c(
                    "span",
                    {
                      staticClass:
                        "status mt-md-5 my-sm-2 mt-0 approved shadow-sm"
                    },
                    [
                      _vm._v("\n                    APPROVED"),
                      _c("i", { staticClass: "ml-3 fas fa-check" })
                    ]
                  )
                : _c(
                    "span",
                    {
                      staticClass:
                        "status mt-md-5 my-sm-2 mt-0 not-approved shadow-sm"
                    },
                    [
                      _vm._v("\n                    NOT APPROVED"),
                      _c("i", { staticClass: "ml-3 fas fa-times" })
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
                _vm._m(2),
                _vm._v(" "),
                _c("td", [_vm._v(_vm._s(_vm.customer.telephone))])
              ]),
              _vm._v(" "),
              _c("tr", [
                _vm._m(3),
                _vm._v(" "),
                _c("td", [
                  _vm._v(
                    _vm._s(
                      _vm._f("capitalize")(
                        _vm.customer.add_houseno +
                          " " +
                          _vm.customer.add_street +
                          " " +
                          _vm.customer.area_address +
                          ", " +
                          _vm.customer.city +
                          ", " +
                          _vm.customer.state +
                          "."
                      )
                    ) + "\n                    "
                  )
                ])
              ]),
              _vm._v(" "),
              _c("tr", [
                _vm._m(4),
                _vm._v(" "),
                _c("td", [_vm._v(_vm._s(_vm.customer.date_of_registration))])
              ]),
              _vm._v(" "),
              _c("tr", [
                _vm._m(5),
                _vm._v(" "),
                _c("td", [
                  _vm._v(
                    _vm._s(_vm._f("capitalize")(_vm.customer.user.full_name))
                  )
                ])
              ]),
              _vm._v(" "),
              _c("tr", [
                _vm._m(6),
                _vm._v(" "),
                _c("td", [
                  _vm._v(
                    _vm._s(
                      _vm._f("capitalize")(
                        _vm.customer.branch.description +
                          " " +
                          _vm.customer.branch.name
                      )
                    )
                  )
                ])
              ])
            ])
          ])
        ])
      ]
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "text-right px-4 py-3 text-light text-muted m-0" },
      [
        _vm._v("\n                        Status"),
        _c("i", { staticClass: "ml-3 fas fa-briefcase" })
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "px-4 py-3 text-muted text-light m-0" }, [
      _c("i", { staticClass: "mr-3 fas fa-transgender" }),
      _vm._v("Gender\n                    ")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("th", { staticClass: "text-muted" }, [
      _c("i", { staticClass: "mr-3 fas fa-mobile-alt" }),
      _vm._v("Phone Number")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("th", { staticClass: "text-muted" }, [
      _c("i", { staticClass: "mr-3 fas fa-map-marker-alt" }),
      _vm._v("Address")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("th", { staticClass: "text-muted" }, [
      _c("i", { staticClass: "mr-3 fas fa-gift" }),
      _vm._v("Registered On")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("th", { staticClass: "text-muted" }, [
      _c("i", { staticClass: "mr-3 far fa-user-circle" }),
      _vm._v("Registered By")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("th", { staticClass: "text-muted" }, [
      _c("i", { staticClass: "mr-3 far fa-building" }),
      _vm._v("Branch")
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-3b07ec64", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-d458b51a\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/CustomerProfileFull.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("transition", { attrs: { name: "fade" } }, [
    _c(
      "div",
      { staticClass: "px-md-4 px-2" },
      [
        _c("app-navigation", {
          attrs: {
            pageTitle: "Customer Profile",
            pageTitleSmall: "Profile",
            previous: { path: _vm.$routerHistory.previous().path },
            forward: { path: _vm.$routerHistory.next().path }
          }
        }),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "pt-md-3 pt-2 verification",
            attrs: { id: "employeeRegister" }
          },
          [
            _vm.customer
              ? _c("customer-profile", { attrs: { customer: _vm.customer } })
              : _vm._e()
          ],
          1
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
    require("vue-hot-reload-api")      .rerender("data-v-d458b51a", module.exports)
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

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3b07ec64\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/customerProfile.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3b07ec64\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/customerProfile.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("6dcd5458", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3b07ec64\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./customerProfile.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3b07ec64\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./customerProfile.vue");
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

/***/ "./resources/assets/js/components/CustomerProfileFull.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"babel-preset-env\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"babel-plugin-syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/CustomerProfileFull.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-d458b51a\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/CustomerProfileFull.vue")
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
Component.options.__file = "resources\\assets\\js\\components\\CustomerProfileFull.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-d458b51a", Component.options)
  } else {
    hotAPI.reload("data-v-d458b51a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/js/components/customerProfile.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3b07ec64\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/customerProfile.vue")
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"babel-preset-env\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"babel-plugin-syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/customerProfile.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-3b07ec64\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/customerProfile.vue")
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
Component.options.__file = "resources\\assets\\js\\components\\customerProfile.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3b07ec64", Component.options)
  } else {
    hotAPI.reload("data-v-3b07ec64", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});
=======
webpackJsonp([4],{"1gIg":function(t,e,r){var o=r("VU/8")(r("wBhk"),r("wSO8"),!1,function(t){r("dvca")},null,null);t.exports=o.exports},IVuq:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=c(r("Xxa5")),a=r("uD8u"),i=c(r("TOoT")),n=c(r("KjZf")),s=c(r("1gIg"));function c(t){return t&&t.__esModule?t:{default:t}}e.default={data:function(){return{customer:""}},components:{CustomerProfile:n.default,AppNavigation:s.default},created:function(){$(".tooltip").remove(),this.fetch()},methods:{fetch:function(){var t,e=(t=o.default.mark(function t(){var e=this;return o.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!this.$network()){t.next=8;break}return this.$LIPS(!0),t.next=4,(0,a.get)("/api/customer/"+this.$route.params.id).then(function(t){return e.customer=t.data.customer}).catch(function(t){return i.default.setError(422===t.response.status?t.response.data.message:"Something went wrong, try again later!")});case 4:this.$LIPS(!1),this.$scrollToTop(),t.next=9;break;case 8:this.$networkErr();case 9:case"end":return t.stop()}},t,this)}),function(){var e=t.apply(this,arguments);return new Promise(function(t,r){return function o(a,i){try{var n=e[a](i),s=n.value}catch(t){return void r(t)}if(!n.done)return Promise.resolve(s).then(function(t){o("next",t)},function(t){o("throw",t)});t(s)}("next")})});return function(){return e.apply(this,arguments)}}()}}},KjZf:function(t,e,r){var o=r("VU/8")(r("rNNu"),r("oJ9/"),!1,function(t){r("RtVY")},null,null);t.exports=o.exports},Otht:function(t,e,r){var o=r("VU/8")(r("IVuq"),r("x/cd"),!1,null,null,null);t.exports=o.exports},RtVY:function(t,e,r){var o=r("v2hL");"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);r("rjj0")("7cbcb43e",o,!0,{})},SldL:function(t,e){!function(e){"use strict";var r,o=Object.prototype,a=o.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},n=i.iterator||"@@iterator",s=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag",l="object"==typeof t,u=e.regeneratorRuntime;if(u)l&&(t.exports=u);else{(u=e.regeneratorRuntime=l?t.exports:{}).wrap=y;var f="suspendedStart",p="suspendedYield",m="executing",d="completed",h={},v={};v[n]=function(){return this};var g=Object.getPrototypeOf,_=g&&g(g(R([])));_&&_!==o&&a.call(_,n)&&(v=_);var x=k.prototype=b.prototype=Object.create(v);C.prototype=x.constructor=k,k.constructor=C,k[c]=C.displayName="GeneratorFunction",u.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===C||"GeneratorFunction"===(e.displayName||e.name))},u.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,k):(t.__proto__=k,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(x),t},u.awrap=function(t){return{__await:t}},E(L.prototype),L.prototype[s]=function(){return this},u.AsyncIterator=L,u.async=function(t,e,r,o){var a=new L(y(t,e,r,o));return u.isGeneratorFunction(e)?a:a.next().then(function(t){return t.done?t.value:a.next()})},E(x),x[c]="Generator",x[n]=function(){return this},x.toString=function(){return"[object Generator]"},u.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var o=e.pop();if(o in t)return r.value=o,r.done=!1,r}return r.done=!0,r}},u.values=R,$.prototype={constructor:$,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(O),!t)for(var e in this)"t"===e.charAt(0)&&a.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function o(o,a){return s.type="throw",s.arg=t,e.next=o,a&&(e.method="next",e.arg=r),!!a}for(var i=this.tryEntries.length-1;i>=0;--i){var n=this.tryEntries[i],s=n.completion;if("root"===n.tryLoc)return o("end");if(n.tryLoc<=this.prev){var c=a.call(n,"catchLoc"),l=a.call(n,"finallyLoc");if(c&&l){if(this.prev<n.catchLoc)return o(n.catchLoc,!0);if(this.prev<n.finallyLoc)return o(n.finallyLoc)}else if(c){if(this.prev<n.catchLoc)return o(n.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<n.finallyLoc)return o(n.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&a.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var n=i?i.completion:{};return n.type=t,n.arg=e,i?(this.method="next",this.next=i.finallyLoc,h):this.complete(n)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),O(r),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var o=r.completion;if("throw"===o.type){var a=o.arg;O(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,o){return this.delegate={iterator:R(t),resultName:e,nextLoc:o},"next"===this.method&&(this.arg=r),h}}}function y(t,e,r,o){var a=e&&e.prototype instanceof b?e:b,i=Object.create(a.prototype),n=new $(o||[]);return i._invoke=function(t,e,r){var o=f;return function(a,i){if(o===m)throw new Error("Generator is already running");if(o===d){if("throw"===a)throw i;return N()}for(r.method=a,r.arg=i;;){var n=r.delegate;if(n){var s=j(n,r);if(s){if(s===h)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(o===f)throw o=d,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o=m;var c=w(t,e,r);if("normal"===c.type){if(o=r.done?d:p,c.arg===h)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(o=d,r.method="throw",r.arg=c.arg)}}}(t,r,n),i}function w(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}function b(){}function C(){}function k(){}function E(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function L(t){var e;this._invoke=function(r,o){function i(){return new Promise(function(e,i){!function e(r,o,i,n){var s=w(t[r],t,o);if("throw"!==s.type){var c=s.arg,l=c.value;return l&&"object"==typeof l&&a.call(l,"__await")?Promise.resolve(l.__await).then(function(t){e("next",t,i,n)},function(t){e("throw",t,i,n)}):Promise.resolve(l).then(function(t){c.value=t,i(c)},n)}n(s.arg)}(r,o,e,i)})}return e=e?e.then(i,i):i()}}function j(t,e){var o=t.iterator[e.method];if(o===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=r,j(t,e),"throw"===e.method))return h;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var a=w(o,t.iterator,e.arg);if("throw"===a.type)return e.method="throw",e.arg=a.arg,e.delegate=null,h;var i=a.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,h):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function P(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function $(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(P,this),this.reset(!0)}function R(t){if(t){var e=t[n];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function e(){for(;++o<t.length;)if(a.call(t,o))return e.value=t[o],e.done=!1,e;return e.value=r,e.done=!0,e};return i.next=i}}return{next:N}}function N(){return{value:r,done:!0}}}(function(){return this}()||Function("return this")())},Xxa5:function(t,e,r){t.exports=r("jyFz")},dvca:function(t,e,r){var o=r("kHNU");"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);r("rjj0")("95a6393e",o,!0,{})},jyFz:function(t,e,r){var o=function(){return this}()||Function("return this")(),a=o.regeneratorRuntime&&Object.getOwnPropertyNames(o).indexOf("regeneratorRuntime")>=0,i=a&&o.regeneratorRuntime;if(o.regeneratorRuntime=void 0,t.exports=r("SldL"),a)o.regeneratorRuntime=i;else try{delete o.regeneratorRuntime}catch(t){o.regeneratorRuntime=void 0}},kHNU:function(t,e,r){(t.exports=r("FZ+f")(!1)).push([t.i,"#index a#back{left:0}#index a#forward{right:0}#index a#back,#index a#forward{margin-top:.8rem;position:absolute}#index a#back i,#index a#forward i{font-size:2.4rem}#index .back,#index .forward{line-height:2.4rem;margin-top:-.2rem;font-weight:700}@media (max-width:990px){#index a#back i,#index a#forward i{font-size:2.6rem}}@media (max-width:600px){#index [data-title=title],#index a#back,#index a#forward{margin-top:-.3rem;margin-bottom:.3rem}}",""])},"oJ9/":function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"customer-profile card position-relative"},[r("div",{staticClass:"design"}),t._v(" "),r("div",{staticClass:"col-md-4 col-sm-4 col-12 px-0 pb-md-4 pb-sm-3 pb-0 pt-md-5 pt-4 float-left"},[r("div",{staticClass:"pt-md-3 pt-sm-2 pt-1"},[r("div",{staticClass:"justify-content-center d-flex position-relative z-1"},[r("span",{staticClass:"img-border"},[t.customer.document.passport_url?r("img",{staticClass:"profile-picture rounded-circle",attrs:{src:"https://s3.eu-west-2.amazonaws.com/altara-one/"+t.customer.document.passport_url,alt:"customer profile pic"}}):r("i",{staticClass:"no-image fas fa-user-alt"})])]),t._v(" "),r("div",{staticClass:"justify-content-center d-flex position-relative z-1 pt-md-4 pt-sm-4 pt-2"},[r("span",{staticClass:"w-50"},[t._m(0),t._v(" "),r("div",{staticClass:"data text-right px-4 py-3 m-0"},[t._v(t._s(t._f("capitalize")(t.customer.employment_status)))])]),t._v(" "),r("span",{staticClass:"separator"}),t._v(" "),r("span",{staticClass:"w-50"},[t._m(1),t._v(" "),r("div",{staticClass:"data px-4 py-3 m-0"},[t._v(t._s(t._f("capitalize")(t.customer.gender)))])])])])]),t._v(" "),r("div",{staticClass:"col-md-8 col-sm-8 col-12 px-0 pb-4 pt-md-5 pt-sm-5 pt-0 float-left"},[r("div",{staticClass:"pt-md-4 pt-0 clearfix"},[r("div",{staticClass:"float-left p-0 m-0 col-md-4 col-sm-6 small-center"},[r("h4",{staticClass:"mt-0 pt-md-5 pt-sm-4 pt-0 mb-md-5 mb-sm-4 mb-3"},[r("i",{staticClass:"mr-3 far fa-user-circle"}),t._v(" "),r("strong",[t._v(t._s(t._f("capitalize")(t.customer.first_name+" "+t.customer.last_name)))])])]),t._v(" "),r("div",{staticClass:"float-left p-0 m-0 col-md-4 col-sm-6 d-flex justify-content-center"},[r("h4",{staticClass:"mt-0 pt-md-5 pt-sm-4 pt-0 mb-md-5 mb-sm-4 mb-4 text-muted"},[r("strong",[t._v("Customer ID: "+t._s(t.customer.id))])])]),t._v(" "),r("div",{staticClass:"float-left p-0 m-0 col-md-4 col-12 d-flex justify-content-center"},[t.approved?r("span",{staticClass:"status mt-md-5 my-sm-2 mt-0 approved shadow-sm"},[t._v("\n                    APPROVED"),r("i",{staticClass:"ml-3 fas fa-check"})]):r("span",{staticClass:"status mt-md-5 my-sm-2 mt-0 not-approved shadow-sm"},[t._v("\n                    NOT APPROVED"),r("i",{staticClass:"ml-3 fas fa-times"})])])]),t._v(" "),r("div",{staticClass:"pt-4"},[r("table",{staticClass:"table"},[r("tbody",[r("tr",[t._m(2),t._v(" "),r("td",[t._v(t._s(t.customer.telephone))])]),t._v(" "),r("tr",[t._m(3),t._v(" "),r("td",[t._v(t._s(t._f("capitalize")(t.customer.add_houseno+" "+t.customer.add_street+" "+t.customer.area_address+", "+t.customer.city+", "+t.customer.state+"."))+"\n                    ")])]),t._v(" "),r("tr",[t._m(4),t._v(" "),r("td",[t._v(t._s(t.customer.date_of_registration))])]),t._v(" "),r("tr",[t._m(5),t._v(" "),r("td",[t._v(t._s(t._f("capitalize")(t.customer.user.full_name)))])]),t._v(" "),r("tr",[t._m(6),t._v(" "),r("td",[t._v(t._s(t._f("capitalize")(t.customer.branch.description+" "+t.customer.branch.name)))])])])])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"text-right px-4 py-3 text-light text-muted m-0"},[this._v("\n                        Status"),e("i",{staticClass:"ml-3 fas fa-briefcase"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"px-4 py-3 text-muted text-light m-0"},[e("i",{staticClass:"mr-3 fas fa-transgender"}),this._v("Gender\n                    ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("th",{staticClass:"text-muted"},[e("i",{staticClass:"mr-3 fas fa-mobile-alt"}),this._v("Phone Number")])},function(){var t=this.$createElement,e=this._self._c||t;return e("th",{staticClass:"text-muted"},[e("i",{staticClass:"mr-3 fas fa-map-marker-alt"}),this._v("Address")])},function(){var t=this.$createElement,e=this._self._c||t;return e("th",{staticClass:"text-muted"},[e("i",{staticClass:"mr-3 fas fa-gift"}),this._v("Registered On")])},function(){var t=this.$createElement,e=this._self._c||t;return e("th",{staticClass:"text-muted"},[e("i",{staticClass:"mr-3 far fa-user-circle"}),this._v("Registered By")])},function(){var t=this.$createElement,e=this._self._c||t;return e("th",{staticClass:"text-muted"},[e("i",{staticClass:"mr-3 far fa-building"}),this._v("Branch")])}]}},rNNu:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["customer"],computed:{approved:function(){return 1===this.customer.verification.address&&1===this.customer.verification.id_card&&1===this.customer.verification.passport&&1===this.customer.verification.processing_fee&&1===this.customer.verification.work_guarantor&&1===this.customer.verification.personal_guarantor}}}},v2hL:function(t,e,r){(t.exports=r("FZ+f")(!1)).push([t.i,".customer-profile{position:relative}.customer-profile th{width:auto;font-weight:400}.customer-profile .data,.customer-profile td{font-size:1.5rem;font-weight:500}.customer-profile .status{padding:1.2rem 3rem;float:left;color:#fff;border-radius:.5rem;-webkit-box-shadow:0 7px 15px rgba(0,0,0,.15),0 4px 4px rgba(0,0,0,.2);box-shadow:0 7px 15px rgba(0,0,0,.15),0 4px 4px rgba(0,0,0,.2);font-weight:700;font-size:1.3rem}.customer-profile .status.approved{background-color:#00a368}.customer-profile .status.not-approved{background-color:#c81618}.customer-profile .design{position:absolute;top:13rem;bottom:0;left:0;width:101%;height:calc(100% - 8.1rem);z-index:0;background:linear-gradient(45deg,#dedede,#fff)}.customer-profile .no-image,.customer-profile .profile-picture{height:16rem;width:16rem;-webkit-box-shadow:0 7px 15px rgba(0,0,0,.15),0 4px 4px rgba(0,0,0,.2);box-shadow:0 7px 15px rgba(0,0,0,.15),0 4px 4px rgba(0,0,0,.2)}.customer-profile .no-image{background-color:#e3e3e3;border-radius:50%;line-height:16rem;text-align:center;font-size:8rem;color:rgba(0,0,0,.15)}.customer-profile .img-border{padding:1.1rem;background-color:#fff;border-radius:50%}.customer-profile .separator{position:absolute;left:50%;height:70%;width:1px;background-color:rgba(0,0,0,.1);top:3%}@media (max-width:600px){.customer-profile .design{background:-webkit-gradient(linear,left top,left bottom,from(#dedede),to(#fff));background:linear-gradient(180deg,#dedede,#fff)}.customer-profile .separator{top:-11%}.customer-profile .small-center{text-align:center}.customer-profile th{width:35%}.customer-profile tbody{padding:1rem 1rem 0;float:left}}",""])},wBhk:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["pageTitle","pageTitleSmall","previous","forward"]}},wSO8:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("h4",{staticClass:"mx-md-3 mx-0 py-0 my-0 text-center clearfix",attrs:{id:"index"}},[t.$routerHistory.hasPrevious()?r("router-link",{staticClass:"text-secondary float-left ml-1 pl-2 ml-sm-4 pl-sm-3",attrs:{to:t.previous,id:"back"}},[r("span",{staticClass:"mr-5 float-left"},[r("i",{staticClass:"far fa-arrow-alt-circle-left float-left"}),t._v(" "),r("small",{staticClass:"back float-left ml-2 d-none d-sm-block"},[t._v("Back")])])]):t._e(),t._v(" "),r("strong",{staticClass:"mx-auto w-100 float-left",attrs:{"data-title":"title"}},[r("span",{staticClass:"d-none d-sm-block"},[t._v(t._s(t.pageTitle)+" Portal")]),t._v(" "),r("span",{staticClass:"d-block d-sm-none"},[t._v(t._s(t.pageTitleSmall)+" Portal")])]),t._v(" "),t.$routerHistory.hasForward()?r("router-link",{staticClass:"text-secondary float-right mr-1 pr-2 mr-sm-4 pr-sm-3",attrs:{to:t.forward,id:"forward"}},[r("span",{staticClass:"ml-5 float-right"},[r("i",{staticClass:"far fa-arrow-alt-circle-right float-right"}),t._v(" "),r("small",{staticClass:"forward float-right mr-2 d-none d-sm-block"},[t._v("Forward")])])]):t._e()],1)},staticRenderFns:[]}},"x/cd":function(t,e){t.exports={render:function(){var t=this.$createElement,e=this._self._c||t;return e("transition",{attrs:{name:"fade"}},[e("div",{staticClass:"px-md-4 px-2"},[e("app-navigation",{attrs:{pageTitle:"Customer Profile",pageTitleSmall:"Profile",previous:{path:this.$routerHistory.previous().path},forward:{path:this.$routerHistory.next().path}}}),this._v(" "),e("div",{staticClass:"pt-md-3 pt-2 verification",attrs:{id:"employeeRegister"}},[this.customer?e("customer-profile",{attrs:{customer:this.customer}}):this._e()],1)],1)])},staticRenderFns:[]}}});
>>>>>>> 2dc2e2c495d18c7a9372aa09bf9e80a4bd45b742
