<<<<<<< HEAD
webpackJsonp([12],{

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"babel-preset-env\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"babel-plugin-syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/views/FSL/branch/form.vue":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = __webpack_require__("./node_modules/babel-runtime/regenerator/index.js");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _vue = __webpack_require__("./node_modules/vue/dist/vue.common.js");

var _vue2 = _interopRequireDefault(_vue);

var _log = __webpack_require__("./resources/assets/js/utilities/log.js");

var _flash = __webpack_require__("./resources/assets/js/utilities/flash.js");

var _flash2 = _interopRequireDefault(_flash);

var _api = __webpack_require__("./resources/assets/js/utilities/api.js");

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

function initialize(to) {
    var urls = { create: '/api/branch/create', edit: '/api/branch/' + to.params.id + '/edit' };
    return urls[to.meta.mode];
}

exports.default = {
    data: function data() {
        return {
            form: {},
            banks: {},
            error: {},
            mode: null,
            show: false,
            store: '/api/branch',
            method: 'POST'
        };
    },
    beforeRouteEnter: function beforeRouteEnter(to, from, next) {
        (0, _api.get)(initialize(to)).then(function (_ref) {
            var data = _ref.data;
            return next(function (vm) {
                return vm.prepareForm(data);
            });
        });
    },

    methods: {
        prepareForm: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee(data) {
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return this.$prepareStates();

                            case 2:
                                this.mode = this.$route.meta.mode;
                                //this function is used when a data is sent to this component
                                //or this component makes a request to backend the
                                //data received is used to prepare the form
                                this.error = {};
                                this.errors.clear();
                                _vue2.default.set(this.$data, 'form', data.form);
                                _vue2.default.set(this.$data, 'banks', data.banks);
                                if (this.$route.meta.mode === 'edit') {
                                    this.store = '/api/branch/' + this.$route.params.id;
                                    this.method = 'PUT';
                                }
                                this.show = true;

                            case 9:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function prepareForm(_x) {
                return _ref2.apply(this, arguments);
            }

            return prepareForm;
        }(),
        onSave: function () {
            var _ref3 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
                var _this = this;

                return _regenerator2.default.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                this.$validator.validateAll().then(function (result) {
                                    if (result) {
                                        if (_this.$network()) {
                                            _this.$LIPS(true);
                                            _this.error = {};
                                            (0, _api.byMethod)(_this.method, _this.store, _this.form).then(function (_ref4) {
                                                var data = _ref4.data;

                                                if (data.created || data.updated) {
                                                    (0, _log.log)('Branch ' + _this.mode + 'd', '' + _this.form.employee_id);
                                                    _flash2.default.setSuccess('Branch ' + _this.mode + 'd successfully!', 20000);
                                                }
                                                _this.done();
                                            }).catch(function (e) {
                                                e = e.response;
                                                if (e.status === 422) {
                                                    _this.error = e.data.errors ? e.data.errors : e.data;
                                                    _this.$networkErr('unique');
                                                }
                                            });
                                        } else _this.$networkErr();
                                    } else _this.$networkErr('form');
                                });

                            case 1:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function onSave() {
                return _ref3.apply(this, arguments);
            }

            return onSave;
        }(),
        done: function done() {
            this.$router.push('/fsl/branch');
        }
    }
};

/***/ }),

/***/ "./node_modules/babel-runtime/regenerator/index.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./node_modules/regenerator-runtime/runtime-module.js");


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

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-27d1d1a4\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/views/FSL/branch/form.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("transition", { attrs: { name: "fade" } }, [
    _c("div", { staticClass: "pt-md-3 pt-2", attrs: { id: "employeeEdit" } }, [
      _c("div", { staticClass: "card" }, [
        _c(
          "ul",
          { staticClass: "nav nav-tabs justify-content-center bg-default" },
          [
            _c("h6", [
              _vm._v(_vm._s(_vm._f("capitalize")(_vm.mode)) + " Branch")
            ])
          ]
        ),
        _vm._v(" "),
        _c("div", { staticClass: "card-body pl-4 pr-4" }, [
          _vm.show
            ? _c(
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
                  _c("h5", [_vm._v("Branch Details")]),
                  _vm._v(" "),
                  _c("div", { staticClass: "clearfix" }, [
                    _c(
                      "div",
                      {
                        staticClass:
                          "form-group col-md-6 col-12 float-left px-0 px-md-3"
                      },
                      [
                        _c("label", [_vm._v("Branch Name")]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.name,
                              expression: "form.name"
                            },
                            {
                              name: "validate",
                              rawName: "v-validate",
                              value: "required",
                              expression: "'required'"
                            }
                          ],
                          staticClass: "form-control",
                          class: { "is-invalid": _vm.error.name },
                          attrs: {
                            "data-vv-as": "branch name",
                            name: "branch_name",
                            placeholder: "branch name",
                            type: "text"
                          },
                          domProps: { value: _vm.form.name },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(_vm.form, "name", $event.target.value)
                            }
                          }
                        }),
                        _vm._v(" "),
                        _vm.errors.first("branch_name")
                          ? _c("small", [
                              _vm._v(_vm._s(_vm.errors.first("branch_name")))
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.error.name
                          ? _c("small", [_vm._v(_vm._s(_vm.error.name[0]))])
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
                        _c("label", [_vm._v("State")]),
                        _vm._v(" "),
                        _c(
                          "select",
                          {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.form.state_id,
                                expression: "form.state_id"
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
                              "data-vv-validate-on": "blur",
                              name: "state"
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
                                  _vm.form,
                                  "state_id",
                                  $event.target.multiple
                                    ? $$selectedVal
                                    : $$selectedVal[0]
                                )
                              }
                            }
                          },
                          [
                            _c(
                              "option",
                              { attrs: { selected: "", value: "" } },
                              [_vm._v("select state")]
                            ),
                            _vm._v(" "),
                            _vm._l(_vm.$store.getters.getStates, function(ref) {
                              var id = ref.id
                              var name = ref.name
                              return _c("option", { domProps: { value: id } }, [
                                _vm._v(
                                  "\n                                    " +
                                    _vm._s(_vm._f("capitalize")(name)) +
                                    "\n                                "
                                )
                              ])
                            })
                          ],
                          2
                        ),
                        _vm._v(" "),
                        _vm.errors.first("state")
                          ? _c("small", [
                              _vm._v(_vm._s(_vm.errors.first("state")))
                            ])
                          : _vm._e()
                      ]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "spaceBetween  mb-md-2 mb-0" }),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass:
                          "form-group col-md-6 col-12 float-left px-0 px-md-3"
                      },
                      [
                        _c("label", [_vm._v("Phone (English)")]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.phone_english,
                              expression: "form.phone_english"
                            },
                            {
                              name: "validate",
                              rawName: "v-validate",
                              value: "required|numeric|max:11|min:11",
                              expression: "'required|numeric|max:11|min:11'"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: {
                            "data-vv-as": "phone english",
                            name: "phone_english",
                            placeholder: "081xxxxxxxx",
                            type: "tel"
                          },
                          domProps: { value: _vm.form.phone_english },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.form,
                                "phone_english",
                                $event.target.value
                              )
                            }
                          }
                        }),
                        _vm._v(" "),
                        _vm.errors.first("phone_english")
                          ? _c("small", [
                              _vm._v(_vm._s(_vm.errors.first("phone_english")))
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
                        _c("label", [_vm._v("Phone (Yoruba)")]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.phone_yoruba,
                              expression: "form.phone_yoruba"
                            },
                            {
                              name: "validate",
                              rawName: "v-validate",
                              value: "required|numeric|max:11|min:11",
                              expression: "'required|numeric|max:11|min:11'"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: {
                            "data-vv-as": "phone yoruba",
                            name: "phone_yoruba",
                            placeholder: "081xxxxxxxx",
                            type: "tel"
                          },
                          domProps: { value: _vm.form.phone_yoruba },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.form,
                                "phone_yoruba",
                                $event.target.value
                              )
                            }
                          }
                        }),
                        _vm._v(" "),
                        _vm.errors.first("phone_yoruba")
                          ? _c("small", [
                              _vm._v(_vm._s(_vm.errors.first("phone_yoruba")))
                            ])
                          : _vm._e()
                      ]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "spaceBetween  mb-md-2 mb-0" }),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass:
                          "form-group col-md-6 col-12 float-left px-0 px-md-3"
                      },
                      [
                        _c("label", { staticClass: "w-100 float-left pl-1" }, [
                          _vm._v("Status")
                        ]),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "radio pl-1 w-50 pr-3 float-left" },
                          [
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.form.status,
                                  expression: "form.status"
                                },
                                {
                                  name: "validate",
                                  rawName: "v-validate",
                                  value: "required",
                                  expression: "'required'"
                                }
                              ],
                              attrs: {
                                id: "active",
                                name: "status",
                                type: "radio",
                                value: "active"
                              },
                              domProps: {
                                checked: _vm._q(_vm.form.status, "active")
                              },
                              on: {
                                change: function($event) {
                                  _vm.$set(_vm.form, "status", "active")
                                }
                              }
                            }),
                            _vm._v(" "),
                            _c("label", { attrs: { for: "active" } }, [
                              _vm._v("Active")
                            ])
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "radio pl-1 w-50 pr-3 float-left" },
                          [
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.form.status,
                                  expression: "form.status"
                                }
                              ],
                              attrs: {
                                id: "passive",
                                name: "status",
                                type: "radio",
                                value: "passive"
                              },
                              domProps: {
                                checked: _vm._q(_vm.form.status, "passive")
                              },
                              on: {
                                change: function($event) {
                                  _vm.$set(_vm.form, "status", "passive")
                                }
                              }
                            }),
                            _vm._v(" "),
                            _c("label", { attrs: { for: "passive" } }, [
                              _vm._v("Passive")
                            ])
                          ]
                        ),
                        _vm._v(" "),
                        _vm.errors.first("status")
                          ? _c("small", [
                              _vm._v(_vm._s(_vm.errors.first("status")))
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
                        _c("label", [_vm._v("Describe Location")]),
                        _vm._v(" "),
                        _c("textarea", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.description,
                              expression: "form.description"
                            },
                            {
                              name: "validate",
                              rawName: "v-validate",
                              value: "required|max:255",
                              expression: "'required|max:255'"
                            }
                          ],
                          staticClass: "form-control w-100",
                          attrs: {
                            name: "description",
                            placeholder: "address description",
                            rows: "1"
                          },
                          domProps: { value: _vm.form.description },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.form,
                                "description",
                                $event.target.value
                              )
                            }
                          }
                        }),
                        _vm._v(" "),
                        _vm.errors.first("description")
                          ? _c("small", [
                              _vm._v(_vm._s(_vm.errors.first("description")))
                            ])
                          : _vm._e()
                      ]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "spaceAfter" }),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass:
                          "form-group col-md-6 col-12 float-left px-0 px-md-3"
                      },
                      [
                        _c("label", [_vm._v("Category")]),
                        _vm._v(" "),
                        _c(
                          "select",
                          {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.form.category,
                                expression: "form.category"
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
                              "data-vv-validate-on": "blur",
                              name: "category"
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
                                  _vm.form,
                                  "category",
                                  $event.target.multiple
                                    ? $$selectedVal
                                    : $$selectedVal[0]
                                )
                              }
                            }
                          },
                          [
                            _c(
                              "option",
                              { attrs: { selected: "", value: "" } },
                              [_vm._v("select Category")]
                            ),
                            _vm._v(" "),
                            _vm._l(
                              ["lifestyle", "appliances", "admin"],
                              function(category) {
                                return _c(
                                  "option",
                                  { domProps: { value: category } },
                                  [
                                    _vm._v(
                                      "\n                                    " +
                                        _vm._s(_vm._f("capitalize")(category)) +
                                        "\n                                "
                                    )
                                  ]
                                )
                              }
                            )
                          ],
                          2
                        ),
                        _vm._v(" "),
                        _vm.errors.first("category")
                          ? _c("small", [
                              _vm._v(_vm._s(_vm.errors.first("category")))
                            ])
                          : _vm._e()
                      ]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "spaceAfter" }),
                    _vm._v(" "),
                    _c("h5", [_vm._v("Account Details")]),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass:
                          "form-group col-md-6 col-12 float-left px-0 px-md-3"
                      },
                      [
                        _c("label", [_vm._v("Email")]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.email,
                              expression: "form.email"
                            },
                            {
                              name: "validate",
                              rawName: "v-validate",
                              value: "email",
                              expression: "'email'"
                            }
                          ],
                          staticClass: "form-control",
                          class: { "is-invalid": _vm.error.email },
                          attrs: {
                            name: "email",
                            placeholder: "name@example.com",
                            type: "email"
                          },
                          domProps: { value: _vm.form.email },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(_vm.form, "email", $event.target.value)
                            }
                          }
                        }),
                        _vm._v(" "),
                        _vm.errors.first("email")
                          ? _c("small", [
                              _vm._v(_vm._s(_vm.errors.first("email")))
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.error.email
                          ? _c("small", [_vm._v(_vm._s(_vm.error.email[0]))])
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
                        _c("label", [_vm._v("Bank")]),
                        _vm._v(" "),
                        _c(
                          "select",
                          {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.form.bank,
                                expression: "form.bank"
                              }
                            ],
                            staticClass: "custom-select w-100",
                            attrs: {
                              "data-vv-validate-on": "blur",
                              name: "bank"
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
                                  _vm.form,
                                  "bank",
                                  $event.target.multiple
                                    ? $$selectedVal
                                    : $$selectedVal[0]
                                )
                              }
                            }
                          },
                          [
                            _c(
                              "option",
                              { attrs: { selected: "", value: "" } },
                              [_vm._v("select bank")]
                            ),
                            _vm._v(" "),
                            _vm._l(_vm.banks, function(ref) {
                              var id = ref.id
                              var name = ref.name
                              return _c("option", { domProps: { value: id } }, [
                                _vm._v(_vm._s(_vm._f("capitalize")(name)))
                              ])
                            })
                          ],
                          2
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "spaceBetween  mb-md-2 mb-0" }),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass:
                          "form-group col-md-6 col-12 float-left px-0 px-md-3"
                      },
                      [
                        _c("label", [_vm._v("Account Name")]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.account_name,
                              expression: "form.account_name"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: {
                            "data-vv-as": "account name",
                            name: "account_name",
                            placeholder: "branch name",
                            type: "text"
                          },
                          domProps: { value: _vm.form.account_name },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.form,
                                "account_name",
                                $event.target.value
                              )
                            }
                          }
                        })
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
                        _c("label", [_vm._v("Account Number")]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.account_number,
                              expression: "form.account_number"
                            },
                            {
                              name: "validate",
                              rawName: "v-validate",
                              value: "numeric|max:10|min:10",
                              expression: "'numeric|max:10|min:10'"
                            }
                          ],
                          staticClass: "form-control",
                          class: { "is-invalid": _vm.error.account_number },
                          attrs: {
                            "data-vv-as": "account number",
                            name: "account_number",
                            placeholder: "01xxxxxxxx",
                            type: "tel"
                          },
                          domProps: { value: _vm.form.account_number },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.form,
                                "account_number",
                                $event.target.value
                              )
                            }
                          }
                        }),
                        _vm._v(" "),
                        _vm.errors.first("account_number")
                          ? _c("small", [
                              _vm._v(_vm._s(_vm.errors.first("account_number")))
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.error.account_number
                          ? _c("small", [
                              _vm._v(_vm._s(_vm.error.account_number[0]))
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
                                  on: { click: _vm.done }
                                },
                                [_vm._v("Cancel\n                            ")]
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
                                "\n                                " +
                                  _vm._s(_vm._f("capitalize")(_vm.mode)) +
                                  " Branch "
                              ),
                              _c("i", {
                                staticClass: "far fa-paper-plane ml-1"
                              })
                            ]
                          )
                        ]
                      )
                    ]
                  )
                ]
              )
            : _vm._e()
        ])
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
    require("vue-hot-reload-api")      .rerender("data-v-27d1d1a4", module.exports)
  }
}

/***/ }),

/***/ "./resources/assets/js/utilities/log.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.log = log;

var _api = __webpack_require__("./resources/assets/js/utilities/api.js");

function log(action, description) {
    /*actions is the action performed
    * description is reference of the data the action was taken on*/
    action = action.replace(/([A-Z])/g, ' $1').replace(/^./, function (str) {
        return str.toUpperCase();
    });
    //formats and capitalize the action performed
    (0, _api.post)('/api/log', { action: action, description: description });
    //and logs then on the log table;
}

/***/ }),

/***/ "./resources/assets/js/views/FSL/branch/form.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"babel-preset-env\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"babel-plugin-syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/views/FSL/branch/form.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-27d1d1a4\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/views/FSL/branch/form.vue")
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
Component.options.__file = "resources\\assets\\js\\views\\FSL\\branch\\form.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-27d1d1a4", Component.options)
  } else {
    hotAPI.reload("data-v-27d1d1a4", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});
=======
webpackJsonp([12],{"1H2j":function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("transition",{attrs:{name:"fade"}},[r("div",{staticClass:"pt-md-3 pt-2",attrs:{id:"employeeEdit"}},[r("div",{staticClass:"card"},[r("ul",{staticClass:"nav nav-tabs justify-content-center bg-default"},[r("h6",[e._v(e._s(e._f("capitalize")(e.mode))+" Branch")])]),e._v(" "),r("div",{staticClass:"card-body pl-4 pr-4"},[e.show?r("form",{on:{submit:function(t){return t.preventDefault(),e.onSave(t)}}},[r("h5",[e._v("Branch Details")]),e._v(" "),r("div",{staticClass:"clearfix"},[r("div",{staticClass:"form-group col-md-6 col-12 float-left px-0 px-md-3"},[r("label",[e._v("Branch Name")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.name,expression:"form.name"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",class:{"is-invalid":e.error.name},attrs:{"data-vv-as":"branch name",name:"branch_name",placeholder:"branch name",type:"text"},domProps:{value:e.form.name},on:{input:function(t){t.target.composing||e.$set(e.form,"name",t.target.value)}}}),e._v(" "),e.errors.first("branch_name")?r("small",[e._v(e._s(e.errors.first("branch_name")))]):e._e(),e._v(" "),e.error.name?r("small",[e._v(e._s(e.error.name[0]))]):e._e()]),e._v(" "),r("div",{staticClass:"form-group col-md-6 col-12 float-left px-0 px-md-3"},[r("label",[e._v("State")]),e._v(" "),r("select",{directives:[{name:"model",rawName:"v-model",value:e.form.state_id,expression:"form.state_id"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"custom-select w-100",attrs:{"data-vv-validate-on":"blur",name:"state"},on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.$set(e.form,"state_id",t.target.multiple?r:r[0])}}},[r("option",{attrs:{selected:"",value:""}},[e._v("select state")]),e._v(" "),e._l(e.$store.getters.getStates,function(t){var a=t.id,n=t.name;return r("option",{domProps:{value:a}},[e._v("\n                                    "+e._s(e._f("capitalize")(n))+"\n                                ")])})],2),e._v(" "),e.errors.first("state")?r("small",[e._v(e._s(e.errors.first("state")))]):e._e()]),e._v(" "),r("div",{staticClass:"spaceBetween  mb-md-2 mb-0"}),e._v(" "),r("div",{staticClass:"form-group col-md-6 col-12 float-left px-0 px-md-3"},[r("label",[e._v("Phone (English)")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.phone_english,expression:"form.phone_english"},{name:"validate",rawName:"v-validate",value:"required|numeric|max:11|min:11",expression:"'required|numeric|max:11|min:11'"}],staticClass:"form-control",attrs:{"data-vv-as":"phone english",name:"phone_english",placeholder:"081xxxxxxxx",type:"tel"},domProps:{value:e.form.phone_english},on:{input:function(t){t.target.composing||e.$set(e.form,"phone_english",t.target.value)}}}),e._v(" "),e.errors.first("phone_english")?r("small",[e._v(e._s(e.errors.first("phone_english")))]):e._e()]),e._v(" "),r("div",{staticClass:"form-group col-md-6 col-12 float-left px-0 px-md-3"},[r("label",[e._v("Phone (Yoruba)")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.phone_yoruba,expression:"form.phone_yoruba"},{name:"validate",rawName:"v-validate",value:"required|numeric|max:11|min:11",expression:"'required|numeric|max:11|min:11'"}],staticClass:"form-control",attrs:{"data-vv-as":"phone yoruba",name:"phone_yoruba",placeholder:"081xxxxxxxx",type:"tel"},domProps:{value:e.form.phone_yoruba},on:{input:function(t){t.target.composing||e.$set(e.form,"phone_yoruba",t.target.value)}}}),e._v(" "),e.errors.first("phone_yoruba")?r("small",[e._v(e._s(e.errors.first("phone_yoruba")))]):e._e()]),e._v(" "),r("div",{staticClass:"spaceBetween  mb-md-2 mb-0"}),e._v(" "),r("div",{staticClass:"form-group col-md-6 col-12 float-left px-0 px-md-3"},[r("label",{staticClass:"w-100 float-left pl-1"},[e._v("Status")]),e._v(" "),r("div",{staticClass:"radio pl-1 w-50 pr-3 float-left"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.status,expression:"form.status"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{id:"active",name:"status",type:"radio",value:"active"},domProps:{checked:e._q(e.form.status,"active")},on:{change:function(t){e.$set(e.form,"status","active")}}}),e._v(" "),r("label",{attrs:{for:"active"}},[e._v("Active")])]),e._v(" "),r("div",{staticClass:"radio pl-1 w-50 pr-3 float-left"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.status,expression:"form.status"}],attrs:{id:"passive",name:"status",type:"radio",value:"passive"},domProps:{checked:e._q(e.form.status,"passive")},on:{change:function(t){e.$set(e.form,"status","passive")}}}),e._v(" "),r("label",{attrs:{for:"passive"}},[e._v("Passive")])]),e._v(" "),e.errors.first("status")?r("small",[e._v(e._s(e.errors.first("status")))]):e._e()]),e._v(" "),r("div",{staticClass:"form-group col-md-6 col-12 float-left px-0 px-md-3"},[r("label",[e._v("Describe Location")]),e._v(" "),r("textarea",{directives:[{name:"model",rawName:"v-model",value:e.form.description,expression:"form.description"},{name:"validate",rawName:"v-validate",value:"required|max:255",expression:"'required|max:255'"}],staticClass:"form-control w-100",attrs:{name:"description",placeholder:"address description",rows:"1"},domProps:{value:e.form.description},on:{input:function(t){t.target.composing||e.$set(e.form,"description",t.target.value)}}}),e._v(" "),e.errors.first("description")?r("small",[e._v(e._s(e.errors.first("description")))]):e._e()]),e._v(" "),r("div",{staticClass:"spaceAfter"}),e._v(" "),r("div",{staticClass:"form-group col-md-6 col-12 float-left px-0 px-md-3"},[r("label",[e._v("Category")]),e._v(" "),r("select",{directives:[{name:"model",rawName:"v-model",value:e.form.category,expression:"form.category"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"custom-select w-100",attrs:{"data-vv-validate-on":"blur",name:"category"},on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.$set(e.form,"category",t.target.multiple?r:r[0])}}},[r("option",{attrs:{selected:"",value:""}},[e._v("select Category")]),e._v(" "),e._l(["lifestyle","appliances","admin"],function(t){return r("option",{domProps:{value:t}},[e._v("\n                                    "+e._s(e._f("capitalize")(t))+"\n                                ")])})],2),e._v(" "),e.errors.first("category")?r("small",[e._v(e._s(e.errors.first("category")))]):e._e()]),e._v(" "),r("div",{staticClass:"spaceAfter"}),e._v(" "),r("h5",[e._v("Account Details")]),e._v(" "),r("div",{staticClass:"form-group col-md-6 col-12 float-left px-0 px-md-3"},[r("label",[e._v("Email")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.email,expression:"form.email"},{name:"validate",rawName:"v-validate",value:"required|email",expression:"'required|email'"}],staticClass:"form-control",class:{"is-invalid":e.error.email},attrs:{name:"email",placeholder:"name@example.com",type:"email"},domProps:{value:e.form.email},on:{input:function(t){t.target.composing||e.$set(e.form,"email",t.target.value)}}}),e._v(" "),e.errors.first("email")?r("small",[e._v(e._s(e.errors.first("email")))]):e._e(),e._v(" "),e.error.email?r("small",[e._v(e._s(e.error.email[0]))]):e._e()]),e._v(" "),r("div",{staticClass:"form-group col-md-6 col-12 float-left px-0 px-md-3"},[r("label",[e._v("Bank")]),e._v(" "),r("select",{directives:[{name:"model",rawName:"v-model",value:e.form.bank,expression:"form.bank"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"custom-select w-100",attrs:{"data-vv-validate-on":"blur",name:"bank"},on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.$set(e.form,"bank",t.target.multiple?r:r[0])}}},[r("option",{attrs:{selected:"",value:""}},[e._v("select bank")]),e._v(" "),e._l(e.banks,function(t){var a=t.id,n=t.name;return r("option",{domProps:{value:a}},[e._v(e._s(e._f("capitalize")(n)))])})],2),e._v(" "),e.errors.first("bank")?r("small",[e._v(e._s(e.errors.first("bank")))]):e._e()]),e._v(" "),r("div",{staticClass:"spaceBetween  mb-md-2 mb-0"}),e._v(" "),r("div",{staticClass:"form-group col-md-6 col-12 float-left px-0 px-md-3"},[r("label",[e._v("Account Name")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.account_name,expression:"form.account_name"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",attrs:{"data-vv-as":"account name",name:"account_name",placeholder:"branch name",type:"text"},domProps:{value:e.form.account_name},on:{input:function(t){t.target.composing||e.$set(e.form,"account_name",t.target.value)}}}),e._v(" "),e.errors.first("account_name")?r("small",[e._v(e._s(e.errors.first("account_name")))]):e._e()]),e._v(" "),r("div",{staticClass:"form-group col-md-6 col-12 float-left px-0 px-md-3"},[r("label",[e._v("Account Number")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.account_number,expression:"form.account_number"},{name:"validate",rawName:"v-validate",value:"required|numeric|max:10|min:10",expression:"'required|numeric|max:10|min:10'"}],staticClass:"form-control",class:{"is-invalid":e.error.account_number},attrs:{"data-vv-as":"account number",name:"account_number",placeholder:"01xxxxxxxx",type:"tel"},domProps:{value:e.form.account_number},on:{input:function(t){t.target.composing||e.$set(e.form,"account_number",t.target.value)}}}),e._v(" "),e.errors.first("account_number")?r("small",[e._v(e._s(e.errors.first("account_number")))]):e._e(),e._v(" "),e.error.account_number?r("small",[e._v(e._s(e.error.account_number[0]))]):e._e()]),e._v(" "),r("div",{staticClass:"spaceBetween mb-md-2 mb-0"}),e._v(" "),r("hr",{staticClass:"style-two"})]),e._v(" "),r("div",{staticClass:"col-sm-12 ml-auto mr-auto mt-md-2 mt-0 px-md-3 px-1 mb-3"},[r("div",{staticClass:"clearfix d-flex justify-content-end"},["edit"===e.mode?r("button",{staticClass:"mx-3 btn btn-secondary",attrs:{type:"button"},on:{click:e.done}},[e._v("Cancel\n                            ")]):e._e(),e._v(" "),r("button",{staticClass:"mx-3 btn bg-default",attrs:{disabled:e.$isProcessing,type:"submit"}},[e._v("\n                                "+e._s(e._f("capitalize")(e.mode))+" Branch "),r("i",{staticClass:"far fa-paper-plane ml-1"})])])])]):e._e()])])])])},staticRenderFns:[]}},I6iU:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=l(r("Xxa5")),n=l(r("I3G/")),o=r("ic49"),i=l(r("K23+")),s=r("p/p5");function l(e){return e&&e.__esModule?e:{default:e}}function c(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,r){return function a(n,o){try{var i=t[n](o),s=i.value}catch(e){return void r(e)}if(!i.done)return Promise.resolve(s).then(function(e){a("next",e)},function(e){a("throw",e)});e(s)}("next")})}}t.default={data:function(){return{form:{},banks:{},error:{},mode:null,show:!1,store:"/api/branch",method:"POST"}},beforeRouteEnter:function(e,t,r){(0,s.get)(function(e){return{create:"/api/branch/create",edit:"/api/branch/"+e.params.id+"/edit"}[e.meta.mode]}(e)).then(function(e){var t=e.data;return r(function(e){return e.prepareForm(t)})})},methods:{prepareForm:function(){var e=c(a.default.mark(function e(t){return a.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.$prepareStates();case 2:this.mode=this.$route.meta.mode,this.error={},this.errors.clear(),n.default.set(this.$data,"form",t.form),n.default.set(this.$data,"banks",t.banks),"edit"===this.$route.meta.mode&&(this.store="/api/branch/"+this.$route.params.id,this.method="PUT"),this.show=!0;case 9:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),onSave:function(){var e=c(a.default.mark(function e(){var t=this;return a.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:this.$validator.validateAll().then(function(e){e?t.$network()?(t.$LIPS(!0),t.error={},(0,s.byMethod)(t.method,t.store,t.form).then(function(e){var r=e.data;(r.saved||r.updated)&&((0,o.log)("Branch "+t.mode+"d",""+t.form.employee_id),i.default.setSuccess("Branch "+t.mode+"d successfully!",2e4))}).catch(function(e){422===(e=e.response).status&&(t.error=e.data.errors?e.data.errors:e.data,t.$networkErr("unique"))}).finally(function(){return t.done()})):t.$networkErr():t.$networkErr("form")});case 1:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),done:function(){this.$router.push("/fsl/branch")}}}},SldL:function(e,t){!function(t){"use strict";var r,a=Object.prototype,n=a.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",s=o.asyncIterator||"@@asyncIterator",l=o.toStringTag||"@@toStringTag",c="object"==typeof e,u=t.regeneratorRuntime;if(u)c&&(e.exports=u);else{(u=t.regeneratorRuntime=c?e.exports:{}).wrap=x;var m="suspendedStart",v="suspendedYield",f="executing",d="completed",p={},h={};h[i]=function(){return this};var _=Object.getPrototypeOf,g=_&&_(_(j([])));g&&g!==a&&n.call(g,i)&&(h=g);var y=N.prototype=w.prototype=Object.create(h);C.prototype=y.constructor=N,N.constructor=C,N[l]=C.displayName="GeneratorFunction",u.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===C||"GeneratorFunction"===(t.displayName||t.name))},u.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,N):(e.__proto__=N,l in e||(e[l]="GeneratorFunction")),e.prototype=Object.create(y),e},u.awrap=function(e){return{__await:e}},L(P.prototype),P.prototype[s]=function(){return this},u.AsyncIterator=P,u.async=function(e,t,r,a){var n=new P(x(e,t,r,a));return u.isGeneratorFunction(t)?n:n.next().then(function(e){return e.done?e.value:n.next()})},L(y),y[l]="Generator",y[i]=function(){return this},y.toString=function(){return"[object Generator]"},u.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var a=t.pop();if(a in e)return r.value=a,r.done=!1,r}return r.done=!0,r}},u.values=j,q.prototype={constructor:q,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach($),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=r)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function a(a,n){return s.type="throw",s.arg=e,t.next=a,n&&(t.method="next",t.arg=r),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],s=i.completion;if("root"===i.tryLoc)return a("end");if(i.tryLoc<=this.prev){var l=n.call(i,"catchLoc"),c=n.call(i,"finallyLoc");if(l&&c){if(this.prev<i.catchLoc)return a(i.catchLoc,!0);if(this.prev<i.finallyLoc)return a(i.finallyLoc)}else if(l){if(this.prev<i.catchLoc)return a(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return a(i.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,p):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),p},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),$(r),p}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var a=r.completion;if("throw"===a.type){var n=a.arg;$(r)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,a){return this.delegate={iterator:j(e),resultName:t,nextLoc:a},"next"===this.method&&(this.arg=r),p}}}function x(e,t,r,a){var n=t&&t.prototype instanceof w?t:w,o=Object.create(n.prototype),i=new q(a||[]);return o._invoke=function(e,t,r){var a=m;return function(n,o){if(a===f)throw new Error("Generator is already running");if(a===d){if("throw"===n)throw o;return O()}for(r.method=n,r.arg=o;;){var i=r.delegate;if(i){var s=k(i,r);if(s){if(s===p)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(a===m)throw a=d,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);a=f;var l=b(e,t,r);if("normal"===l.type){if(a=r.done?d:v,l.arg===p)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(a=d,r.method="throw",r.arg=l.arg)}}}(e,r,i),o}function b(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}function w(){}function C(){}function N(){}function L(e){["next","throw","return"].forEach(function(t){e[t]=function(e){return this._invoke(t,e)}})}function P(e){var t;this._invoke=function(r,a){function o(){return new Promise(function(t,o){!function t(r,a,o,i){var s=b(e[r],e,a);if("throw"!==s.type){var l=s.arg,c=l.value;return c&&"object"==typeof c&&n.call(c,"__await")?Promise.resolve(c.__await).then(function(e){t("next",e,o,i)},function(e){t("throw",e,o,i)}):Promise.resolve(c).then(function(e){l.value=e,o(l)},i)}i(s.arg)}(r,a,t,o)})}return t=t?t.then(o,o):o()}}function k(e,t){var a=e.iterator[t.method];if(a===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=r,k(e,t),"throw"===t.method))return p;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var n=b(a,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,p;var o=n.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=r),t.delegate=null,p):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,p)}function E(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function $(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function q(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(E,this),this.reset(!0)}function j(e){if(e){var t=e[i];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var a=-1,o=function t(){for(;++a<e.length;)if(n.call(e,a))return t.value=e[a],t.done=!1,t;return t.value=r,t.done=!0,t};return o.next=o}}return{next:O}}function O(){return{value:r,done:!0}}}(function(){return this}()||Function("return this")())},Xxa5:function(e,t,r){e.exports=r("jyFz")},ic49:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.log=function(e,t){e=e.replace(/([A-Z])/g," $1").replace(/^./,function(e){return e.toUpperCase()}),(0,a.post)("/api/log",{action:e,description:t})};var a=r("p/p5")},jyFz:function(e,t,r){var a=function(){return this}()||Function("return this")(),n=a.regeneratorRuntime&&Object.getOwnPropertyNames(a).indexOf("regeneratorRuntime")>=0,o=n&&a.regeneratorRuntime;if(a.regeneratorRuntime=void 0,e.exports=r("SldL"),n)a.regeneratorRuntime=o;else try{delete a.regeneratorRuntime}catch(e){a.regeneratorRuntime=void 0}},npFL:function(e,t,r){var a=r("VU/8")(r("I6iU"),r("1H2j"),!1,null,null,null);e.exports=a.exports}});
>>>>>>> 74194a5f1cc9829de2f06759c7ace0b254cd3b2f
