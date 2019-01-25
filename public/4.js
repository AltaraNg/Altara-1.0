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
webpackJsonp([4],{"1gIg":function(e,t,a){var r=a("VU/8")(a("wBhk"),a("wSO8"),!1,function(e){a("dvca")},null,null);e.exports=r.exports},"2Q7A":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.log=function(e,t){e=e.replace(/([A-Z])/g," $1").replace(/^./,function(e){return e.toUpperCase()}),(0,r.post)("/api/log",{action:e,description:t})};var r=a("uD8u")},Bph5:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a("uD8u");t.default={message:"",welcome:function(e){this.message="Welcome to Altara credit. Please secure your login details. Staff ID: "+e.loginID+", password: "+e.loginPassword,this.send(e)},customerReg:function(e){this.message="Dear "+e.first_name+" "+e.last_name+", Welcome to Altara Credit Limited, You are hereby invited to our showroom at "+e.branch.description+" to learn more about our offerings. Pick up products now and pay later. We look forward to seeing you. For more info contact: "+e.branch.phone_yoruba+". Your customer id is: "+e.id,this.send({phone:e.telephone.substr(1)})},passwordReset:function(e){this.message="Password reset successful! if your did not request for a new password kindly report back immediately, your staff ID is "+e.staff_id+", new password: "+e.password,this.send(e)},dvaMessage:function(e){this.message=e.message,this.send(e)},send:function(e){(0,r.get)("/api/message/create?to=234"+e.phone+"&message="+this.message).then(function(e){var t=JSON.parse(e.data);console.log(t),1===t.messages[0].status.groupId&&console.log("sms sent successfully")})}}},"K+9w":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(a("Bph5")),s=a("2Q7A"),o=n(a("TOoT")),i=a("uD8u");function n(e){return e&&e.__esModule?e:{default:e}}t.default={props:{action:"",receivedData:{default:""},bus:{default:""}},data:function(){return{form:{},error:{},roles:{},branches:{},password:"",countries:["nigeria"],gender:["male","female"],categories:{},textDetails:{phone:"",loginPassword:"",loginID:""},statuses:["married","single","divorced","complicated"],qualifications:["NCE","HND","OND","bachelors","masters","doctorate"]}},methods:{ifReg:function(e){return"register"===e},ifUp:function(e){return"update"===e},prepareForm:function(e){this.error={},this.form=e.form,this.roles=e.roles,this.branches=e.branches,this.categories=e.categories},register:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;1===a&&(this.updatingPortalAccess=!0),this.$validator.validateAll().then(function(n){if(1===a&&(e.errors.clear(),n=!0),n)if(e.$network()){e.$LIPS(!0),e.error={};var l="/api/register",c=void 0,m=void 0;"update"===e.action&&(l="/api/employee/"+t.id+"/update"),(0,i.post)(l,t).then(function(t){t.data.hasOwnProperty("registered")?(m="Registered",e.textDetails.loginID=String(t.data.staff_id),e.textDetails.phone=String(parseInt(e.form.phone_number)),e.textDetails.loginPassword=e.password=t.data.password,c="Staff registered with ID "+t.data.staff_id+". An sms has been sent to the employee with his Login details!",r.default.welcome(e.textDetails)):t.data.hasOwnProperty("updated")&&(m="Updated",c="Staff details updated!",e.$emit("done")),(0,s.log)("Staff"+m,String(t.data.staff_id)),o.default.setSuccess(c,2e4),e.ifReg(e.action)&&(e.form=t.data.form)}).catch(function(t){422===(t=t.response).status&&(e.error=t.data.errors?t.data.errors:t.data,e.$networkErr("unique"))}).finally(function(){e.$scrollToTop(),e.$LIPS(!1)})}else e.$networkErr();else e.$networkErr("form")})}},created:function(){var e=this;this.ifReg(this.action)&&(0,i.get)("/api/create").then(function(t){return e.prepareForm(t.data)}),"update"===this.action&&this.bus.$on("submit",this.register)},watch:{receivedData:function(e){this.prepareForm(e)}}}},Lom5:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=o(a("Y1qv")),s=o(a("1gIg"));function o(e){return e&&e.__esModule?e:{default:e}}t.default={components:{DataViewer:r.default,AppNavigation:s.default}}},Ueij:function(e,t,a){var r=a("VU/8")(a("K+9w"),a("pNt1"),!1,null,null,null);e.exports=r.exports},"X+Zd":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=m(a("I3G/")),s=m(a("Bph5")),o=a("2Q7A"),i=a("uD8u"),n=a("N71M"),l=m(a("TOoT")),c=m(a("Ueij"));function m(e){return e&&e.__esModule?e:{default:e}}t.default={components:{UtilityForm:c.default},data:function(){return{model:{},columns:{},query:{page:1,column:"id",direction:"desc",per_page:10,search_column:"id",search_operator:"greater_than",search_input:0},operators:{equal:"=",not_equal:"<>",less_than:"<",greater_than:">",less_than_or_equal_to:"<=",greater_than_or_equal_to:">=",in:"IN",like:"LIKE"},bus:new r.default,form:{},portal_access:[{name:"grant",value:1},{name:"deny",value:0}],sentData:{}}},props:["source","title","appModel"],created:function(){this.$prepareStates(),this.fetchIndexData(),$(document).on("click","tr",function(){$("tr.current").removeClass("current"),$(this).addClass("current")})},updated:function(){$('[data-toggle="tooltip"]').tooltip()},methods:{next:function(){this.model.next_page_url&&(this.query.page++,this.fetchIndexData())},prev:function(){this.model.prev_page_url&&(this.query.page--,this.fetchIndexData())},toggleOrder:function(e){e===this.query.column?this.query.direction="desc"===this.query.direction?"asc":"desc":(this.query.column=e,this.query.direcntion="asc"),this.fetchIndexData()},fetchIndexData:function(){var e=this;this.$LIPS(!0),$(".modal").modal("hide"),(0,i.get)(this.source+"?page="+this.query.page+"&column="+this.query.column+"&per_page="+this.query.per_page+"&direction="+this.query.direction+"&search_input="+this.query.search_input+"&search_column="+this.query.search_column+"&search_operator="+this.query.search_operator).then(function(t){var a=t.data.model.data;a.length&&a[0].state_id&&a.forEach(function(e){return e.state_id=n.store.getters.getStates.find(function(t){return t.id===e.state_id}).name}),r.default.set(e.$data,"model",t.data.model),r.default.set(e.$data,"columns",t.data.columns),e.$scrollToTop(),e.$LIPS(!1)})},accessStatus:function(e){return Boolean(Number(e))},update:function(e,t){var a=this,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;0===r?(this.form=e,$("#"+t).modal("toggle")):1===r&&(this.$network()?(this.$LIPS(!0),(0,i.get)("/api/employee/"+e.id+"/edit").then(function(e){a.sentData=e.data,$("#"+t).modal("toggle"),a.$LIPS(!1)})):this.$networkErr())},resetPassword:function(){var e=this;this.$network()?(this.$LIPS(!0),(0,i.get)("/api/reset-password/"+this.form.id).then(function(t){e.$scrollToTop(),$("#editPassword").modal("toggle"),(0,o.log)("resetUserPassword",e.form.staff_id),l.default.setSuccess("Employee password reset successful!");var a={phone:String(parseInt(e.form.phone_number)),password:t.data.password,staff_id:e.form.staff_id};s.default.passwordReset(a),e.$LIPS(!1)})):this.$networkErr()}},computed:{user:function(){return"user"===this.appModel},branch:function(){return"branch"===this.appModel},customer:function(){return"customer"===this.appModel}}}},Y1qv:function(e,t,a){var r=a("VU/8")(a("X+Zd"),a("fv3N"),!1,null,null,null);e.exports=r.exports},dvca:function(e,t,a){var r=a("kHNU");"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);a("rjj0")("95a6393e",r,!0,{})},fv3N:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"card-body p-4 p-md-5"},[a("div",{staticClass:"clearfix w-100"},[a("div",{staticClass:"form-group col-md-2 col-sm-6 px-md-3 px-1 float-left"},[a("label",[e._v("Search Column")]),e._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:e.query.search_column,expression:"query.search_column"}],staticClass:"custom-select w-100",on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.$set(e.query,"search_column",t.target.multiple?a:a[0])}}},e._l(e.columns,function(t){return a("option",{domProps:{value:t}},[e._v(e._s(e._f("capitalize")(t)))])}))]),e._v(" "),a("div",{staticClass:"form-group col-md-2 col-sm-6 px-md-3 px-1 float-left"},[a("label",[e._v("Search Operator")]),e._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:e.query.search_operator,expression:"query.search_operator"}],staticClass:"custom-select w-100",on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.$set(e.query,"search_operator",t.target.multiple?a:a[0])}}},e._l(e.operators,function(t,r){return a("option",{domProps:{value:r}},[e._v(e._s(t))])}))]),e._v(" "),a("div",{staticClass:"form-group col-md-6 col-sm-6 px-md-3 px-1 float-left"},[a("label",[e._v("Search Input")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.query.search_input,expression:"query.search_input"}],staticClass:"form-control",attrs:{placeholder:"search...",type:"text"},domProps:{value:e.query.search_input},on:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key,"Enter"))return null;e.fetchIndexData()},input:function(t){t.target.composing||e.$set(e.query,"search_input",t.target.value)}}})]),e._v(" "),a("div",{staticClass:"form-group col-md-2 col-sm-6 px-md-3 px-1 pt-md-2 pt-0 float-left"},[a("button",{staticClass:"btn btn-block bg-default mb-0 mt-3 mt-md-4",on:{click:function(t){e.fetchIndexData()}}},[e._v("Filter")])])]),e._v(" "),a("div",{staticClass:"px-0 px-md-3 mt-3 table-responsive"},[a("table",{staticClass:"table m-0  table-bordered table-hover"},[a("thead",{staticClass:"thead-light"},[a("tr",[e._l(e.columns,function(t){return a("th",{attrs:{scope:"col"},on:{click:function(a){e.toggleOrder(t)}}},[a("span",[e._v(e._s(e._f("capitalize")(t)))]),e._v(" "),t===e.query.column?a("span",{staticClass:"dv-table-column"},["desc"===e.query.direction?a("span",[e._v("↑")]):a("span",[e._v("↓")])]):e._e()])}),e._v(" "),e.user||e.branch||e.customer?a("th",{attrs:{scope:"col"}},[a("span",[e._v("Action")])]):e._e()],2)]),e._v(" "),a("tbody",e._l(e.model.data,function(t){return a("tr",[e._l(t,function(t,r){return a("td",[e._v(e._s(t))])}),e._v(" "),e.user?a("td",[a("button",{staticClass:"text-center mx-2 btn btn-dark btn-icon btn-sm float-left btn-round",attrs:{"data-placement":"top","data-toggle":"tooltip",title:"Edit Employee Detail"},on:{click:function(a){e.update(t,"updateEmployee",1)}}},[a("i",{staticClass:"fas fa-user-edit"})]),e._v(" "),a("button",{staticClass:"text-center mr-2 btn btn-icon btn-sm float-left btn-round",class:{"btn-success":e.accessStatus(t.portal_access),"btn-danger":!e.accessStatus(t.portal_access)},attrs:{"data-placement":"top","data-toggle":"tooltip",title:"Edit Employee Portal Access"},on:{click:function(a){e.update(t,"editPortalAccess")}}},[e.accessStatus(t.portal_access)?a("i",{staticClass:"fas fa-lock-open"}):a("i",{staticClass:"fas fa-lock"})]),e._v(" "),a("button",{staticClass:"text-center mr-2 btn btn-warning btn-icon btn-sm float-left btn-round",attrs:{"data-placement":"top","data-toggle":"tooltip",title:"Reset Employee Password"},on:{click:function(a){e.update(t,"editPassword")}}},[a("i",{staticClass:"fas fa-key"})])]):e._e(),e._v(" "),e.branch||e.customer?a("td",[a("button",{staticClass:"text-center mx-2 btn btn-success btn-icon btn-sm float-left btn-round",attrs:{title:e.branch?"update branch details":"view details","data-placement":"top","data-toggle":"tooltip"},on:{click:function(a){e.branch?e.$router.push("/fsl/branch/"+t.id+"/edit"):e.$router.push("/customer/"+t.id)}}},[e.branch?a("i",{staticClass:"fas fa-cog"}):e._e(),e._v(" "),e.customer?a("i",{staticClass:"far fa-user"}):e._e()])]):e._e()],2)}))])]),e._v(" "),a("nav",{staticClass:"clearfix pt-5",attrs:{"aria-label":"Page navigation example"}},[a("span",{staticClass:"float-left col-md-6 col-12 px-0 mb-5 mb-md-0"},[e._v("\n                 Displaying: "+e._s(e.model.from)+" - "+e._s(e.model.to)+" of "+e._s(e.model.total)+" "+e._s(e._f("capitalize")(e.appModel))+" (s)\n             ")]),e._v(" "),a("span",{staticClass:"justify-content-end float-right col-md-6 col-12 px-0 mb-5 mb-md-0"},[a("ul",{staticClass:"pagination m-0 float-right"},[a("li",{staticClass:"page-item"},[a("a",{staticClass:"page-link",on:{click:function(t){e.prev()}}},[a("i",{staticClass:"fas fa-arrow-circle-left"})])]),e._v(" "),a("li",{staticClass:"page-item"},[a("span",{staticClass:"page-link"},[e._v("Current Page: "+e._s(e.model.current_page))])]),e._v(" "),a("li",{staticClass:"page-item"},[a("a",{staticClass:"page-link",on:{click:function(t){e.next()}}},[a("i",{staticClass:"fas fa-arrow-circle-right"})])])]),e._v(" "),a("span",{staticClass:"float-left"},[a("span",{staticClass:"py-2 pr-3 float-left"},[e._v("Rows Per Page ")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.query.per_page,expression:"query.per_page"}],staticClass:"form-control float-left",attrs:{placeholder:"search...",type:"text"},domProps:{value:e.query.per_page},on:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key,"Enter"))return null;e.fetchIndexData()},input:function(t){t.target.composing||e.$set(e.query,"per_page",t.target.value)}}})])])])]),e._v(" "),a("div",{staticClass:"modal fade bd-example-modal-lg",attrs:{id:"updateEmployee"}},[a("div",{staticClass:"modal-dialog modal-lg"},[a("div",{staticClass:"modal-content"},[e._m(0),e._v(" "),a("div",{staticClass:"modal-body"},[a("utility-form",{attrs:{bus:e.bus,receivedData:e.sentData,action:"update"},on:{done:function(t){e.fetchIndexData()}}})],1)])])]),e._v(" "),a("div",{staticClass:"modal fade",attrs:{id:"editPortalAccess"}},[a("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[a("div",{staticClass:"modal-content"},[e._m(1),e._v(" "),a("form",[a("div",{staticClass:"modal-body"},[a("div",{staticClass:"form-group col-12 float-left mt-0 mb-2"},[e._m(2),e._v(" "),e._l(e.portal_access,function(t){return a("div",{staticClass:"radio p-0 col-6 float-left text-center"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.form.portal_access,expression:"form.portal_access"}],attrs:{id:t.name,name:"access",type:"radio"},domProps:{value:t.value,checked:e._q(e.form.portal_access,t.value)},on:{change:function(a){e.$set(e.form,"portal_access",t.value)}}}),e._v(" "),a("label",{attrs:{for:t.name}},[e._v(e._s(e._f("capitalize")(t.name))+" Access")])])})],2)]),e._v(" "),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"m-2 btn btn-secondary",attrs:{"data-dismiss":"modal",type:"button"}},[e._v("cancel")]),e._v(" "),a("button",{staticClass:"m-2 btn bg-default",attrs:{disabled:e.$isProcessing,type:"button"},on:{click:function(t){e.bus.$emit("submit",e.form)}}},[e._v(" Save changes "),a("i",{staticClass:"far fa-paper-plane ml-1"})])])])])])]),e._v(" "),a("div",{staticClass:"modal fade",attrs:{id:"editPassword"}},[a("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[a("div",{staticClass:"modal-content"},[e._m(3),e._v(" "),a("form",[e._m(4),e._v(" "),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"m-2 btn btn-secondary",attrs:{"data-dismiss":"modal",type:"button"}},[e._v("cancel")]),e._v(" "),a("button",{staticClass:"m-2 btn bg-default",attrs:{disabled:e.$isProcessing,type:"button"},on:{click:e.resetPassword}},[e._v("\n                     continue and reset password "),a("i",{staticClass:"far fa-paper-plane ml-1"})])])])])])])])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"modal-header py-2"},[t("h6",{staticClass:"modal-title py-1"},[this._v("Update Employee Details")]),this._v(" "),t("a",{staticClass:"close py-1",attrs:{"aria-label":"Close","data-dismiss":"modal"}},[t("span",{staticClass:"modal-close text-danger",attrs:{"aria-hidden":"true"}},[t("i",{staticClass:"fas fa-times"})])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"modal-header py-2"},[t("h6",{staticClass:"modal-title py-1"},[this._v("Edit Employee Portal Access")]),this._v(" "),t("a",{staticClass:"close py-1",attrs:{"aria-label":"Close","data-dismiss":"modal"}},[t("span",{staticClass:"modal-close text-danger",attrs:{"aria-hidden":"true"}},[t("i",{staticClass:"fas fa-times"})])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("span",{staticClass:"mb-2 w-100 float-left pl-1 text-center",staticStyle:{"font-size":"14px"}},[this._v("\n                        Please Verify you selected the right access before clicking "),t("br"),this._v(" "),t("strong",[this._v("Save Changes ")]),this._v("!\n                     ")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"modal-header py-2"},[t("h6",{staticClass:"modal-title py-1"},[this._v("Reset Employee Password")]),this._v(" "),t("a",{staticClass:"close py-1",attrs:{"aria-label":"Close","data-dismiss":"modal"}},[t("span",{staticClass:"modal-close text-danger",attrs:{"aria-hidden":"true"}},[t("i",{staticClass:"fas fa-times"})])])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"modal-body"},[a("div",{staticClass:"form-group col-12 float-left mt-2 mb-4 "},[a("span",[e._v("A new password will be sent to the employee via "),a("strong",[e._v("sms")]),e._v(" on the\n                                   telephone He/She "),a("strong",[e._v("used for registration")]),e._v(" on this portal.\n                                 "),a("br"),a("br"),e._v("Please Kindly verify that the phone to receive the new password is on and active!\n                             ")]),a("br"),a("br"),e._v(" "),a("u",[a("em",[e._v("click the continue and reset password to finish this task!")])])])])}]}},kHNU:function(e,t,a){(e.exports=a("FZ+f")(!1)).push([e.i,"#index a#back{left:0}#index a#forward{right:0}#index a#back,#index a#forward{margin-top:.8rem;position:absolute}#index a#back i,#index a#forward i{font-size:2.4rem}#index .back,#index .forward{line-height:2.4rem;margin-top:-.2rem;font-weight:700}@media (max-width:990px){#index a#back i,#index a#forward i{font-size:2.6rem}}@media (max-width:600px){#index [data-title=title],#index a#back,#index a#forward{margin-top:-.3rem;margin-bottom:.3rem}}",""])},pNt1:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("form",{on:{submit:function(t){t.preventDefault(),e.register(e.form,0)}}},[a("h5",[e._v("Employee Personal Details")]),e._v(" "),a("div",{staticClass:"form-group col-md-6 col-12 float-left px-0 px-md-3"},[a("label",[e._v("Full Name")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.form.full_name,expression:"form.full_name"},{name:"validate",rawName:"v-validate",value:"required|max:100",expression:"'required|max:100'"}],staticClass:"form-control",attrs:{type:"text",placeholder:"employee full name",name:"name"},domProps:{value:e.form.full_name},on:{input:function(t){t.target.composing||e.$set(e.form,"full_name",t.target.value)}}}),e._v(" "),e.errors.first("name")?a("small",[e._v(e._s(e.errors.first("name")))]):e._e()]),e._v(" "),a("div",{staticClass:"form-group col-md-6 col-12 float-left px-0 px-md-3"},[a("label",[e._v("Phone Number")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.form.phone_number,expression:"form.phone_number"},{name:"validate",rawName:"v-validate",value:"required|numeric|max:11|min:11",expression:"'required|numeric|max:11|min:11'"}],staticClass:"form-control",class:{"is-invalid":e.error.phone_number},attrs:{type:"tel",placeholder:"081xxxxxxxx",name:"phone_number","data-vv-as":"phone number"},domProps:{value:e.form.phone_number},on:{input:function(t){t.target.composing||e.$set(e.form,"phone_number",t.target.value)}}}),e._v(" "),e.errors.first("phone_number")?a("small",[e._v("\n            "+e._s(e.errors.first("phone_number"))+"\n        ")]):e._e(),e._v(" "),e.error.phone_number?a("small",[e._v("\n            "+e._s(e.error.phone_number[0])+"\n        ")]):e._e()]),e._v(" "),a("div",{staticClass:"spaceBetween  mb-md-2 mb-0"}),e._v(" "),a("div",{staticClass:"form-group col-md-6 col-12 float-left px-0 px-md-3"},[a("label",[e._v("Marital Status")]),e._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:e.form.status,expression:"form.status"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"custom-select w-100",attrs:{name:"status","data-vv-validate-on":"blur"},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.$set(e.form,"status",t.target.multiple?a:a[0])}}},[a("option",{attrs:{value:"",selected:""}},[e._v("select status")]),e._v(" "),e._l(e.statuses,function(t){return a("option",{domProps:{value:t}},[e._v("\n                "+e._s(e._f("capitalize")(t))+"\n            ")])})],2),e._v(" "),e.errors.first("status")?a("small",[e._v("\n            "+e._s(e.errors.first("status"))+"\n        ")]):e._e()]),e._v(" "),a("div",{staticClass:"form-group col-md-6 col-12 float-left px-0 px-md-3"},[a("label",[e._v("Nationality")]),e._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:e.form.nationality,expression:"form.nationality"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"custom-select w-100",attrs:{name:"nationality","data-vv-validate-on":"blur"},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.$set(e.form,"nationality",t.target.multiple?a:a[0])}}},[a("option",{attrs:{value:"",selected:""}},[e._v("select nationality")]),e._v(" "),e._l(e.countries,function(t){return a("option",{domProps:{value:t}},[e._v("\n                "+e._s(e._f("capitalize")(t))+"\n            ")])})],2),e._v(" "),e.errors.first("nationality")?a("small",[e._v("\n            "+e._s(e.errors.first("nationality"))+"\n        ")]):e._e()]),e._v(" "),a("div",{staticClass:"spaceBetween  mb-md-2 mb-0"}),e._v(" "),a("div",{staticClass:"form-group col-md-6 col-12 float-left px-0 px-md-3"},[a("label",[e._v("Date of Birth")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.form.date_of_birth,expression:"form.date_of_birth"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",attrs:{type:"date",name:"date_of_birth","data-vv-as":"date of birth"},domProps:{value:e.form.date_of_birth},on:{input:function(t){t.target.composing||e.$set(e.form,"date_of_birth",t.target.value)}}}),e._v(" "),e.errors.first("date_of_birth")?a("small",[e._v(e._s(e.errors.first("date_of_birth")))]):e._e(),e._v(" "),e.error.date_of_birth?a("small",[e._v(e._s(e.error.date_of_birth[0]))]):e._e()]),e._v(" "),a("div",{staticClass:"form-group col-md-6 col-12 float-left px-0 px-md-3"},[a("label",[e._v("Email")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.form.email,expression:"form.email"},{name:"validate",rawName:"v-validate",value:"required|email|min:1",expression:"'required|email|min:1'"}],staticClass:"form-control",class:{"is-invalid":e.error.email},attrs:{type:"email",placeholder:"name@example.com",name:"email"},domProps:{value:e.form.email},on:{input:function(t){t.target.composing||e.$set(e.form,"email",t.target.value)}}}),e._v(" "),e.errors.first("email")?a("small",[e._v("\n            "+e._s(e.errors.first("email"))+"\n        ")]):e._e(),e._v(" "),e.error.email?a("small",[e._v("\n            "+e._s(e.error.email[0])+"\n        ")]):e._e()]),e._v(" "),a("div",{staticClass:"spaceBetween  mb-md-2 mb-0"}),e._v(" "),a("div",{staticClass:"form-group col-md-6 col-12 float-left px-0 px-md-3"},[a("label",[e._v("Role in the company")]),e._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:e.form.role_id,expression:"form.role_id"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"custom-select w-100",attrs:{name:"role","data-vv-validate-on":"blur","data-vv-name":"role"},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.$set(e.form,"role_id",t.target.multiple?a:a[0])}}},[a("option",{attrs:{value:"",selected:""}},[e._v("select role")]),e._v(" "),e._l(e.roles,function(t){return a("option",{domProps:{value:t.id}},[e._v("\n                "+e._s(e._f("capitalize")(t.name))+"\n            ")])})],2),e._v(" "),e.errors.first("role")?a("small",[e._v("\n            "+e._s(e.errors.first("role"))+"\n        ")]):e._e()]),e._v(" "),a("div",{staticClass:"form-group col-md-6 col-12 float-left px-0 px-md-3"},[a("label",[e._v("Highest Qualification")]),e._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:e.form.highest_qualification,expression:"form.highest_qualification"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"custom-select w-100",attrs:{name:"qualification","data-vv-validate-on":"blur","data-vv-name":"qualification"},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.$set(e.form,"highest_qualification",t.target.multiple?a:a[0])}}},[a("option",{attrs:{value:"",selected:""}},[e._v("select qualification")]),e._v(" "),e._l(e.qualifications,function(t){return a("option",{domProps:{value:t}},[e._v("\n                "+e._s(e._f("capitalize")(t))+"\n            ")])})],2),e._v(" "),e.errors.has("qualification")?a("small",[e._v("\n            "+e._s(e.errors.first("qualification"))+"\n        ")]):e._e()]),e._v(" "),a("div",{staticClass:"spaceBetween mb-md-2 mb-0"}),e._v(" "),a("div",{staticClass:"form-group col-md-6 col-12 float-left px-0 px-md-3"},[a("label",[e._v("Operations Branch")]),e._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:e.form.branch_id,expression:"form.branch_id"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"custom-select w-100",attrs:{name:"branch","data-vv-validate-on":"blur","data-vv-name":"branch"},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.$set(e.form,"branch_id",t.target.multiple?a:a[0])}}},[a("option",{attrs:{value:"",selected:""}},[e._v("select branch")]),e._v(" "),e._l(e.branches,function(t){return a("option",{domProps:{value:t.id}},[e._v("\n                "+e._s(e._f("capitalize")(t.name))+"\n            ")])})],2),e._v(" "),e.errors.has("branch")?a("small",[e._v("\n            "+e._s(e.errors.first("branch"))+"\n        ")]):e._e()]),e._v(" "),a("div",{staticClass:"form-group col-md-6 col-12 float-left px-0 px-md-3"},[a("label",[e._v("Date of Appointment")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.form.date_of_appointment,expression:"form.date_of_appointment"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",attrs:{type:"date",name:"date_of_appointment","data-vv-as":"date of appointment"},domProps:{value:e.form.date_of_appointment},on:{input:function(t){t.target.composing||e.$set(e.form,"date_of_appointment",t.target.value)}}}),e._v(" "),e.errors.first("date_of_appointment")?a("small",[e._v("\n            "+e._s(e.errors.first("date_of_appointment"))+"\n        ")]):e._e()]),e._v(" "),a("div",{staticClass:"spaceBetween mb-md-2 mb-0"}),e._v(" "),e.ifUp(e.action)?a("div",{staticClass:"form-group col-md-6 col-12 float-left px-0 px-md-3"},[a("label",[e._v("Date of Exit")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.form.date_of_exit,expression:"form.date_of_exit"}],staticClass:"form-control",attrs:{type:"date"},domProps:{value:e.form.date_of_exit},on:{input:function(t){t.target.composing||e.$set(e.form,"date_of_exit",t.target.value)}}})]):e._e(),e._v(" "),a("div",{staticClass:"form-group col-md-6 col-12 float-left px-0 px-md-3"},[a("label",[e._v("Staff Category")]),e._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:e.form.category,expression:"form.category"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"custom-select w-100",attrs:{name:"qualification","data-vv-validate-on":"blur","data-vv-name":"category"},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.$set(e.form,"category",t.target.multiple?a:a[0])}}},[a("option",{attrs:{value:"",selected:""}},[e._v("select category")]),e._v(" "),e._l(e.categories,function(t){return a("option",{domProps:{value:t.name}},[e._v("\n                "+e._s(e._f("capitalize")(t.name))+"\n            ")])})],2),e._v(" "),e.errors.has("category")?a("small",[e._v("\n            "+e._s(e.errors.first("category"))+"\n        ")]):e._e()]),e._v(" "),a("div",{staticClass:"form-group col-md-6 col-12 float-left px-0 px-md-3"},[a("label",{staticClass:"w-100 float-left pl-1"},[e._v("Gender")]),e._v(" "),e._l(e.gender,function(t){return a("div",{staticClass:"radio p-0 col-md-6 col-6 float-left"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.form.gender,expression:"form.gender"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{name:"gender",type:"radio",id:t},domProps:{value:t,checked:e._q(e.form.gender,t)},on:{change:function(a){e.$set(e.form,"gender",t)}}}),e._v(" "),a("label",{attrs:{for:t}},[e._v("\n                "+e._s(t)+"\n            ")])])}),e._v(" "),e.errors.first("gender")?a("small",[e._v("\n            "+e._s(e.errors.first("gender"))+"\n        ")]):e._e()],2),e._v(" "),a("div",{staticClass:"spaceBetween mb-md-2 mb-0"}),e._v(" "),a("div",{staticClass:"form-group col-12 float-left px-0 px-md-3"},[a("label",[e._v("Describe Location")]),e._v(" "),a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.form.address,expression:"form.address"},{name:"validate",rawName:"v-validate",value:"required|max:255",expression:"'required|max:255'"}],staticClass:"form-control w-100",attrs:{placeholder:"address",rows:"1",name:"address"},domProps:{value:e.form.address},on:{input:function(t){t.target.composing||e.$set(e.form,"address",t.target.value)}}}),e._v(" "),e.errors.first("address")?a("small",[e._v("\n            "+e._s(e.errors.first("address"))+"\n        ")]):e._e()]),e._v(" "),a("div",{staticClass:"spaceAfter"}),e._v(" "),a("h5",[e._v("Referee Details")]),e._v(" "),a("div",{staticClass:"form-group col-md-6 col-12 float-left px-0 px-md-3"},[a("label",[e._v("Referee 1 Full Name")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.form.referee_1,expression:"form.referee_1"},{name:"validate",rawName:"v-validate",value:"required|max:50",expression:"'required|max:50'"}],staticClass:"form-control",attrs:{type:"text",placeholder:"enter full name here",name:"referee_1","data-vv-as":"referee 1 full name"},domProps:{value:e.form.referee_1},on:{input:function(t){t.target.composing||e.$set(e.form,"referee_1",t.target.value)}}}),e._v(" "),e.errors.first("referee_1")?a("small",[e._v("\n            "+e._s(e.errors.first("referee_1"))+"\n        ")]):e._e()]),e._v(" "),a("div",{staticClass:"form-group col-md-6 col-12 float-left px-0 px-md-3"},[a("label",[e._v("Referee 1 Phone Number")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.form.referee_1_phone_no,expression:"form.referee_1_phone_no"},{name:"validate",rawName:"v-validate",value:"required|numeric|max:11|min:11",expression:"'required|numeric|max:11|min:11'"}],staticClass:"form-control",attrs:{type:"tel",placeholder:"081xxxxxxxx",name:"referee_1_phone_no","data-vv-as":"referee 1 phone number"},domProps:{value:e.form.referee_1_phone_no},on:{input:function(t){t.target.composing||e.$set(e.form,"referee_1_phone_no",t.target.value)}}}),e._v(" "),e.errors.first("referee_1_phone_no")?a("small",[e._v("\n            "+e._s(e.errors.first("referee_1_phone_no"))+"\n        ")]):e._e()]),e._v(" "),a("div",{staticClass:"spaceBetween mb-md-2 mb-0"}),e._v(" "),a("div",{staticClass:"form-group col-md-6 col-12 float-left px-0 px-md-3"},[a("label",[e._v("Referee 2 Full Name")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.form.referee_2,expression:"form.referee_2"},{name:"validate",rawName:"v-validate",value:"required|max:50",expression:"'required|max:50'"}],staticClass:"form-control",attrs:{type:"text",placeholder:"enter full name here",name:"referee_2","data-vv-as":"referee 2 full name"},domProps:{value:e.form.referee_2},on:{input:function(t){t.target.composing||e.$set(e.form,"referee_2",t.target.value)}}}),e._v(" "),e.errors.first("referee_2")?a("small",[e._v("\n            "+e._s(e.errors.first("referee_2"))+"\n        ")]):e._e()]),e._v(" "),a("div",{staticClass:"form-group col-md-6 col-12 float-left px-0 px-md-3"},[a("label",[e._v("Referee 2 Phone Number")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.form.referee_2_phone_no,expression:"form.referee_2_phone_no"},{name:"validate",rawName:"v-validate",value:"required|numeric|max:11|min:11",expression:"'required|numeric|max:11|min:11'"}],staticClass:"form-control",attrs:{type:"tel",placeholder:"081xxxxxxxx",name:"referee_2_phone_no","data-vv-as":"referee 2 phone number"},domProps:{value:e.form.referee_2_phone_no},on:{input:function(t){t.target.composing||e.$set(e.form,"referee_2_phone_no",t.target.value)}}}),e._v(" "),e.errors.first("referee_2_phone_no")?a("small",[e._v("\n            "+e._s(e.errors.first("referee_2_phone_no"))+"\n        ")]):e._e()]),e._v(" "),a("div",{staticClass:"spaceAfter"}),e._v(" "),a("h5",[e._v("Next of Kin Details")]),e._v(" "),a("div",{staticClass:"form-group col-md-6 col-12 float-left px-0 px-md-3"},[a("label",[e._v("Next of Kin Full Name")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.form.next_of_kin_name,expression:"form.next_of_kin_name"},{name:"validate",rawName:"v-validate",value:"required|max:50",expression:"'required|max:50'"}],staticClass:"form-control",attrs:{type:"text",placeholder:"enter full name here",name:"next_of_kin_name","data-vv-as":"next of kin name"},domProps:{value:e.form.next_of_kin_name},on:{input:function(t){t.target.composing||e.$set(e.form,"next_of_kin_name",t.target.value)}}}),e._v(" "),e.errors.first("next_of_kin_name")?a("small",[e._v("\n            "+e._s(e.errors.first("next_of_kin_name"))+"\n        ")]):e._e()]),e._v(" "),a("div",{staticClass:"form-group col-md-6 col-12 float-left px-0 px-md-3"},[a("label",[e._v("Next of Kin Phone Number")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.form.next_of_kin_phone_no,expression:"form.next_of_kin_phone_no"},{name:"validate",rawName:"v-validate",value:"required|numeric|max:11|min:11",expression:"'required|numeric|max:11|min:11'"}],staticClass:"form-control",attrs:{type:"tel",placeholder:"081xxxxxxxx",name:"next_of_kin_phone_no","data-vv-as":"next of kin phone number"},domProps:{value:e.form.next_of_kin_phone_no},on:{input:function(t){t.target.composing||e.$set(e.form,"next_of_kin_phone_no",t.target.value)}}}),e._v(" "),e.errors.first("next_of_kin_phone_no")?a("small",[e._v("\n            "+e._s(e.errors.first("next_of_kin_phone_no"))+"\n        ")]):e._e()]),e._v(" "),a("div",{staticClass:"spaceBetween mb-md-2 mb-0"}),e._v(" "),a("hr",{staticClass:"style-two"}),e._v(" "),a("div",{staticClass:"col-sm-12 ml-auto mr-auto mt-md-2 mt-0 px-md-3 px-1 mb-3 float-right"},[e.ifReg(e.action)?a("div",[a("button",{staticClass:"btn btn-block btn-lg bg-default",attrs:{type:"submit",disabled:e.$isProcessing}},[e._v("\n                Register Employee "),a("i",{staticClass:"far fa-paper-plane ml-1"})])]):e._e(),e._v(" "),e.ifUp(e.action)?a("div",[a("button",{staticClass:"mx-3 btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"}},[e._v("Cancel")]),e._v(" "),a("button",{staticClass:"mx-3 btn bg-default float-right",attrs:{type:"submit",disabled:e.$isProcessing}},[e._v("\n                Update Employee "),a("i",{staticClass:"far fa-paper-plane ml-1"})])]):e._e()])])},staticRenderFns:[]}},wBhk:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:["pageTitle","pageTitleSmall","previous","forward"]}},wSO8:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("h4",{staticClass:"mx-md-3 mx-0 py-0 my-0 text-center clearfix",attrs:{id:"index"}},[e.$routerHistory.hasPrevious()?a("router-link",{staticClass:"text-secondary float-left ml-1 pl-2 ml-sm-4 pl-sm-3",attrs:{to:e.previous,id:"back"}},[a("span",{staticClass:"mr-5 float-left"},[a("i",{staticClass:"far fa-arrow-alt-circle-left float-left"}),e._v(" "),a("small",{staticClass:"back float-left ml-2 d-none d-sm-block"},[e._v("Back")])])]):e._e(),e._v(" "),a("strong",{staticClass:"mx-auto w-100 float-left",attrs:{"data-title":"title"}},[a("span",{staticClass:"d-none d-sm-block"},[e._v(e._s(e.pageTitle)+" Portal")]),e._v(" "),a("span",{staticClass:"d-block d-sm-none"},[e._v(e._s(e.pageTitleSmall)+" Portal")])]),e._v(" "),e.$routerHistory.hasForward()?a("router-link",{staticClass:"text-secondary float-right mr-1 pr-2 mr-sm-4 pr-sm-3",attrs:{to:e.forward,id:"forward"}},[a("span",{staticClass:"ml-5 float-right"},[a("i",{staticClass:"far fa-arrow-alt-circle-right float-right"}),e._v(" "),a("small",{staticClass:"forward float-right mr-2 d-none d-sm-block"},[e._v("Forward")])])]):e._e()],1)},staticRenderFns:[]}},yNep:function(e,t){e.exports={render:function(){var e=this.$createElement,t=this._self._c||e;return t("transition",{attrs:{name:"fade"}},[t("div",{staticClass:"px-md-4 px-2"},[t("app-navigation",{attrs:{pageTitle:"General Customer List",pageTitleSmall:"Customers",previous:{path:this.$routerHistory.previous().path},forward:{path:this.$routerHistory.next().path}}}),this._v(" "),t("div",{staticClass:"float-left w-100 pt-md-3 pt-2 clearfix",attrs:{id:"index"}},[t("div",{staticClass:"card"},[t("ul",{staticClass:"nav nav-tabs justify-content-center bg-default"},[t("h6",[this._v("Customer List")])]),this._v(" "),t("data-viewer",{attrs:{source:"/api/customer",title:"Customer Data",appModel:"customer"}})],1)])],1)])},staticRenderFns:[]}},yYih:function(e,t,a){var r=a("VU/8")(a("Lom5"),a("yNep"),!1,null,null,null);e.exports=r.exports}});
>>>>>>> 5b66d6bd3124cd9c1e27808029b5045efc350129
