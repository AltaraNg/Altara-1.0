webpackJsonp([41],{

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"babel-preset-env\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"babel-plugin-syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/views/FSL/attendance/form.vue":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = __webpack_require__("./node_modules/babel-runtime/regenerator/index.js");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _vue = __webpack_require__("./node_modules/vue/dist/vue.common.js");

var _vue2 = _interopRequireDefault(_vue);

var _log = __webpack_require__("./resources/assets/js/helpers/log.js");

var _flash = __webpack_require__("./resources/assets/js/helpers/flash.js");

var _flash2 = _interopRequireDefault(_flash);

var _api = __webpack_require__("./resources/assets/js/helpers/api.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

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

function initialize(to) {
    var urls = { create: '/api/attendance/create' + (to.query.branch ? '?branch=' + to.query.branch : '') };
    return urls[to.meta.mode];
}

exports.default = {
    data: function data() {
        return {
            window: window,
            form: {},
            mode: null,
            show: false,
            today: '',
            newDate: '',
            submittedToday: '',
            resource: '/attendance',
            store: '/api/attendance',
            method: 'POST',
            columns: ['Employee', 'ID', 'Date', 'Arr. Time', 'Dep. Time', 'Present?', 'Remark'],
            branch: ''
        };
    },
    beforeRouteEnter: function beforeRouteEnter(to, from, next) {
        //1. make request to back-end
        (0, _api.get)(initialize(to)).then(function (res) {
            //2 send to the method to prepare form
            next(function (vm) {
                return vm.prepareForm(res.data);
            });
        });
    },
    beforeRouteUpdate: function beforeRouteUpdate(to, from, next) {
        var _this = this;

        this.show = false;
        //1. make request to back-end
        (0, _api.get)(initialize(to)).then(function (res) {
            //2 send to the method to prepare form
            _this.prepareForm(res.data);
            next();
        });
    },
    created: function created() {
        this.$prepareBranches();
    },

    methods: {
        prepareForm: function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee(data) {
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                if (!(this.$store.getters.auth('peoplesOps') || !this.$route.query['branch'])) {
                                    _context.next = 12;
                                    break;
                                }

                                this.mode = this.$route.meta.mode;
                                //this function is used when a data is sent to this component
                                //or this component makes a request to backend the
                                //data received is used to prepare the form
                                if (data.form.length) data.form.forEach(function (obj) {
                                    return obj['no_signout'] = false;
                                });
                                _context.next = 5;
                                return _vue2.default.set(this.$data, 'form', data.form);

                            case 5:
                                _context.next = 7;
                                return _vue2.default.set(this.$data, 'today', data.today);

                            case 7:
                                _context.next = 9;
                                return _vue2.default.set(this.$data, 'submittedToday', data.submittedToday);

                            case 9:
                                this.show = !this.submittedToday;
                                _context.next = 14;
                                break;

                            case 12:
                                _flash2.default.setError('You cannot create attendance for a branch other than yours', 5000);
                                this.$router.push({ path: '../home' });

                            case 14:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function prepareForm(_x) {
                return _ref.apply(this, arguments);
            }

            return prepareForm;
        }(),
        onSave: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
                var _this2 = this;

                return _regenerator2.default.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                this.$validator.validateAll().then(function (result) {
                                    if (result) {
                                        if (_this2.$network()) {
                                            _this2.$LIPS(true);
                                            _this2.form.forEach(function (obj) {
                                                return delete obj.no_signout;
                                            });
                                            (0, _api.byMethod)(_this2.method, _this2.store, { form: _this2.form }).then(function (res) {
                                                if (res.data.saved || res.data.updated) {
                                                    (0, _log.log)('Attendance ' + _this2.mode + 'd', '' + res.employee_id);
                                                    _flash2.default.setSuccess('Attendance Submitted successfully!', 3000);
                                                    _this2.$router.push('/');
                                                }
                                            }).catch(function (e) {
                                                e = e.response;
                                                if (e.status === 422) _flash2.default.setError(e.data.message ? e.data.message : e.data);
                                            }).finally(function () {
                                                _this2.$LIPS(false);
                                                _this2.$scrollToTop();
                                            });
                                        } else _this2.$networkErr();
                                    } else _this2.$networkErr('form');
                                });

                            case 1:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function onSave() {
                return _ref2.apply(this, arguments);
            }

            return onSave;
        }(),
        clearTime: function clearTime(index) {
            this.form[index].arrival_time = '';
            this.form[index].departure_time = '';
        },
        no_signout: function no_signout(index, e) {
            _vue2.default.set(this.$data.form[index], 'departure_time', '');
            _vue2.default.set(this.$data.form[index], 'remark', e ? '' : 'Did not sign out.');
        },
        fetchAttendanceByDate: function fetchAttendanceByDate() {
            var _this3 = this;

            if (this.newDate) {
                var newDate = new Date(this.newDate);
                var today = new Date();
                if (newDate < today) {
                    newDate = newDate.toDateString().split(' ');
                    newDate.shift();
                    this.form.forEach(function (obj) {
                        return obj.date = _this3.newDate;
                    });
                    this.submittedToday = false;
                    this.show = true;
                    this.today = [].concat(_toConsumableArray(newDate)).join(' ');
                } else _flash2.default.setError('Sorry you cannot create attendance for a feature date!', 2000);
            } else _flash2.default.setError('Select date to continue!', 2000);
            this.$scrollToTop();
        }
    }
};

/***/ }),

/***/ "./node_modules/babel-runtime/regenerator/index.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./node_modules/regenerator-runtime/runtime-module.js");


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6defbd3d\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/views/FSL/attendance/form.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\ninput[data-v-6defbd3d] {\n    background-color: white;\n}\n.checkbox[data-v-6defbd3d], .radio[data-v-6defbd3d] {\n    margin-bottom: 0;\n}\n@media (max-width: 990px) {\n.user[data-v-6defbd3d] {\n        display: none;\n}\n[type=\"radio\"] + label[data-v-6defbd3d] {\n        font-size: 1.2rem;\n}\n}\n@media (max-width: 600px) {\n.staff_id-sm[data-v-6defbd3d] {\n        color: #b6a5ab;\n        font-size: 1.4rem;\n        float: right;\n}\n}\n", ""]);

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

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-6defbd3d\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/views/FSL/attendance/form.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("transition", { attrs: { name: "fade" } }, [
    _c(
      "div",
      {
        staticClass: "pt-md-3 pt-2 attendance attendance-create",
        attrs: { id: "index" }
      },
      [
        _c("div", { staticClass: "mt-5 attendance-head" }, [
          _c("div", { staticClass: "mb-5 row" }, [
            _c("div", { staticClass: "col-12 title-con" }, [
              _c("span", { staticClass: "title" }, [
                _vm._v(
                  _vm._s(_vm._f("capitalize")("attendance for " + _vm.today))
                )
              ]),
              _vm._v(" "),
              _vm.$store.getters.auth("peoplesOps")
                ? _c(
                    "div",
                    {
                      staticClass: "row justify-content-end align-items-center"
                    },
                    [
                      _c(
                        "a",
                        {
                          staticClass: "text-link pr-4 text-capitalize",
                          attrs: { href: "javascript:" },
                          on: {
                            click: function($event) {
                              _vm.$router.push(
                                "" + (_vm.branch ? "?branch=" + _vm.branch : "")
                              )
                            }
                          }
                        },
                        [
                          _vm._v(
                            "\n                            get attendance list for :\n                        "
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "select",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.branch,
                              expression: "branch"
                            }
                          ],
                          staticClass: "custom-select",
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
                              _vm.branch = $event.target.multiple
                                ? $$selectedVal
                                : $$selectedVal[0]
                            }
                          }
                        },
                        [
                          _c(
                            "option",
                            {
                              attrs: { disabled: "", selected: "", value: "" }
                            },
                            [_vm._v("branch")]
                          ),
                          _vm._v(" "),
                          _vm._l(_vm.$store.getters.getBranches, function(
                            branch
                          ) {
                            return _c(
                              "option",
                              { domProps: { value: branch.id } },
                              [
                                _vm._v(
                                  "\n                                " +
                                    _vm._s(_vm._f("capitalize")(branch.name)) +
                                    "\n                            "
                                )
                              ]
                            )
                          })
                        ],
                        2
                      )
                    ]
                  )
                : _vm._e()
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "mt-5 attendance-head" }, [
          _c("div", { staticClass: "row px-5 pt-3 pb-4" }, [
            _c("div", { staticClass: "col-10 col-xs-3 col-md-3 col-lg-3" }, [
              _c("div", { staticClass: "row align-items-center" }, [
                _c("div", { staticClass: "mx-5 col-1 p-0 sm-hide" }),
                _vm._v(" "),
                _c("div", { staticClass: "col pl-4 ml-1 ml-xs-0 pl-xs-3" }, [
                  _c("span", { staticClass: "user-name light-heading" }, [
                    _vm._v(_vm._s(_vm.columns[0]))
                  ])
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-2 light-heading" }, [
              _vm._v(_vm._s(_vm.columns[1]))
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-12 col-xs-3 col-md-3 col-lg-3" }, [
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col light-heading pr-1 pr-lg-4" }, [
                  _vm._v(_vm._s(_vm.columns[3]))
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col light-heading pl-1 pl-lg-4" }, [
                  _vm._v(_vm._s(_vm.columns[4]))
                ])
              ])
            ]),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass:
                  "col-6 col-xs-2 col-md-2 col-lg-2 px-0 px-lg-4 light-heading"
              },
              [_vm._v(_vm._s(_vm.columns[5]))]
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col-6 col-xs-2 col-md-2 col-lg-2 light-heading" },
              [_vm._v(_vm._s(_vm.columns[6]))]
            )
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "mt-1 attendance-body" }, [
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
                  _vm._l(_vm.form, function(user, index) {
                    return _c(
                      "div",
                      {
                        staticClass:
                          "mb-3 px-4 row align-items-center attendance-item"
                      },
                      [
                        _c(
                          "div",
                          {
                            staticClass:
                              "col-12 col-xs-3 col-md-3 col-lg-3 pt-2 pb-3 p-xs-0"
                          },
                          [
                            _c(
                              "div",
                              { staticClass: "row align-items-center" },
                              [
                                _c(
                                  "div",
                                  { staticClass: "ml-5 mr-3 sm-hide" },
                                  [
                                    _c(
                                      "span",
                                      { staticClass: "user mx-auto" },
                                      [
                                        _c("i", {
                                          staticClass:
                                            "user-icon fas fa-user-alt"
                                        })
                                      ]
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c("div", { staticClass: "col" }, [
                                  _c("span", { staticClass: "user-name" }, [
                                    _vm._v(
                                      _vm._s(
                                        _vm._f("capitalize")(
                                          user.user.full_name
                                        )
                                      )
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "span",
                                    { staticClass: "sm-show staff_id-sm" },
                                    [
                                      _vm._v(
                                        "\n                                    - " +
                                          _vm._s(user.user.staff_id) +
                                          "\n                                "
                                      )
                                    ]
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
                              "col-12 col-xs-2 col-md-2 col-lg-2 sm-hide"
                          },
                          [
                            _vm._v(
                              "\n                        " +
                                _vm._s(user.user.staff_id) +
                                "\n                    "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "col-12 col-xs-3 col-md-3 col-lg-3" },
                          [
                            _c("div", { staticClass: "row" }, [
                              _c(
                                "div",
                                { staticClass: "col pr-3 pr-sm-1 pr-lg-4" },
                                [
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.form[index].arrival_time,
                                        expression: "form[index].arrival_time"
                                      },
                                      {
                                        name: "validate",
                                        rawName: "v-validate",
                                        value: "required",
                                        expression: "'required'"
                                      }
                                    ],
                                    staticClass: "form-control",
                                    attrs: {
                                      disabled:
                                        _vm.form[index].is_present === "0",
                                      name: "arrival_time_" + index,
                                      type: "time"
                                    },
                                    domProps: {
                                      value: _vm.form[index].arrival_time
                                    },
                                    on: {
                                      input: function($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          _vm.form[index],
                                          "arrival_time",
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
                                { staticClass: "col pl-3 pl-sm-1 pl-lg-4" },
                                [
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.form[index].departure_time,
                                        expression: "form[index].departure_time"
                                      },
                                      {
                                        name: "validate",
                                        rawName: "v-validate",
                                        value: "required",
                                        expression: "'required'"
                                      }
                                    ],
                                    staticClass: "form-control",
                                    attrs: {
                                      disabled:
                                        _vm.form[index].is_present === "0" ||
                                        _vm.form[index].no_signout,
                                      name: "departure_time_" + index,
                                      type: "time"
                                    },
                                    domProps: {
                                      value: _vm.form[index].departure_time
                                    },
                                    on: {
                                      input: function($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          _vm.form[index],
                                          "departure_time",
                                          $event.target.value
                                        )
                                      }
                                    }
                                  })
                                ]
                              ),
                              _vm._v(" "),
                              _c("div", { staticClass: "mr-5" }, [
                                _c("div", { staticClass: "form-check" }, [
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.form[index].no_signout,
                                        expression: "form[index].no_signout"
                                      }
                                    ],
                                    staticClass: "form-check-input mt-3 ml-2",
                                    attrs: {
                                      disabled:
                                        _vm.form[index].is_present === "0",
                                      id: "exampleCheck1",
                                      type: "checkbox",
                                      value: "true"
                                    },
                                    domProps: {
                                      checked: Array.isArray(
                                        _vm.form[index].no_signout
                                      )
                                        ? _vm._i(
                                            _vm.form[index].no_signout,
                                            "true"
                                          ) > -1
                                        : _vm.form[index].no_signout
                                    },
                                    on: {
                                      click: function($event) {
                                        _vm.no_signout(
                                          index,
                                          _vm.form[index].no_signout
                                        )
                                      },
                                      change: function($event) {
                                        var $$a = _vm.form[index].no_signout,
                                          $$el = $event.target,
                                          $$c = $$el.checked ? true : false
                                        if (Array.isArray($$a)) {
                                          var $$v = "true",
                                            $$i = _vm._i($$a, $$v)
                                          if ($$el.checked) {
                                            $$i < 0 &&
                                              _vm.$set(
                                                _vm.form[index],
                                                "no_signout",
                                                $$a.concat([$$v])
                                              )
                                          } else {
                                            $$i > -1 &&
                                              _vm.$set(
                                                _vm.form[index],
                                                "no_signout",
                                                $$a
                                                  .slice(0, $$i)
                                                  .concat($$a.slice($$i + 1))
                                              )
                                          }
                                        } else {
                                          _vm.$set(
                                            _vm.form[index],
                                            "no_signout",
                                            $$c
                                          )
                                        }
                                      }
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("label", {
                                    staticClass: "form-check-label",
                                    attrs: { for: "exampleCheck1" }
                                  })
                                ])
                              ])
                            ])
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass:
                              "col-6 col-xs-2 col-md-2 col-lg-2 pr-3 py-4 py-sm-0 px-sm-0 px-lg-4"
                          },
                          [
                            _c(
                              "div",
                              {
                                staticClass: "clearfix",
                                class:
                                  _vm.form[index].is_present === "0"
                                    ? "absent"
                                    : "present"
                              },
                              [
                                _c(
                                  "div",
                                  { staticClass: "radio w-50 pr-3 float-left" },
                                  [
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.form[index].is_present,
                                          expression: "form[index].is_present"
                                        },
                                        {
                                          name: "validate",
                                          rawName: "v-validate",
                                          value: "required",
                                          expression: "'required'"
                                        }
                                      ],
                                      attrs: {
                                        id: "yes_" + index,
                                        name: "status_" + index,
                                        type: "radio",
                                        value: "1"
                                      },
                                      domProps: {
                                        checked: _vm._q(
                                          _vm.form[index].is_present,
                                          "1"
                                        )
                                      },
                                      on: {
                                        change: function($event) {
                                          _vm.$set(
                                            _vm.form[index],
                                            "is_present",
                                            "1"
                                          )
                                        }
                                      }
                                    }),
                                    _vm._v(" "),
                                    _c(
                                      "label",
                                      { attrs: { for: "yes_" + index } },
                                      [_vm._v("yes")]
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  { staticClass: "radio w-50 pl-3 float-left" },
                                  [
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.form[index].is_present,
                                          expression: "form[index].is_present"
                                        }
                                      ],
                                      attrs: {
                                        id: "no_" + index,
                                        name: "status_" + index,
                                        type: "radio",
                                        value: "0"
                                      },
                                      domProps: {
                                        checked: _vm._q(
                                          _vm.form[index].is_present,
                                          "0"
                                        )
                                      },
                                      on: {
                                        click: function($event) {
                                          _vm.clearTime(index)
                                        },
                                        change: function($event) {
                                          _vm.$set(
                                            _vm.form[index],
                                            "is_present",
                                            "0"
                                          )
                                        }
                                      }
                                    }),
                                    _vm._v(" "),
                                    _c(
                                      "label",
                                      { attrs: { for: "no_" + index } },
                                      [_vm._v("no")]
                                    )
                                  ]
                                )
                              ]
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass:
                              "col-6 col-xs-2 col-md-2 col-lg-2 pl-3 py-4 py-sm-0"
                          },
                          [
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.form[index].remark,
                                  expression: "form[index].remark"
                                },
                                {
                                  name: "validate",
                                  rawName: "v-validate",
                                  value: {
                                    required: _vm.form[index].is_present == 0
                                  },
                                  expression:
                                    "{ required: form[index].is_present == 0 }"
                                }
                              ],
                              staticClass: "form-control",
                              attrs: {
                                disabled: _vm.form[index].no_signout,
                                name: "remark_" + index,
                                type: "text"
                              },
                              domProps: { value: _vm.form[index].remark },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.form[index],
                                    "remark",
                                    $event.target.value
                                  )
                                }
                              }
                            })
                          ]
                        )
                      ]
                    )
                  }),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "mb-5 px-0 row align-items-center" },
                    [
                      _c("div", { staticClass: "w-100 my-5 mx-0 hr" }),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass:
                            "clearfix d-flex justify-content-end w-100"
                        },
                        [
                          _c(
                            "button",
                            {
                              staticClass: "btn bg-default",
                              attrs: {
                                disabled: _vm.$isProcessing,
                                type: "submit"
                              }
                            },
                            [
                              _vm._v(
                                "\n                            " +
                                  _vm._s(_vm._f("capitalize")(_vm.mode)) +
                                  " Attendance "
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
                ],
                2
              )
            : _c("div", { staticClass: "row attendance-item p-5 mb-5" }, [
                _c("span", { staticClass: "no-attendance" }, [
                  _vm._v("You have already submitted attendance for today!")
                ])
              ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "mt-5 attendance-head" }, [
          _c("div", { staticClass: "w-100 my-5 mx-0 hr" }),
          _vm._v(" "),
          _c("div", { staticClass: "pt-3 pb-4 align-items-center" }, [
            _c("div", { staticClass: "light-heading d-flex" }, [
              _c("div", { staticClass: "float-left align-self-center" }, [
                _vm._v(
                  "\n                        To fill attendance for a past date kindly select the date and click get attendance list.\n                        "
                ),
                _c("span", { staticClass: "mx-5" }, [
                  _vm._v(
                    "\n                            ||\n                        "
                  )
                ])
              ]),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "float-left align-self-center",
                  on: {
                    click: function($event) {
                      _vm.fetchAttendanceByDate()
                    }
                  }
                },
                [
                  _c(
                    "a",
                    {
                      staticClass: "text-link text-capitalize",
                      attrs: { href: "javascript:" }
                    },
                    [
                      _vm._v("get attendance list for "),
                      _c("strong", [_vm._v("Date")]),
                      _vm._v(" : ")
                    ]
                  )
                ]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "float-left align-self-center ml-3" }, [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.newDate,
                      expression: "newDate"
                    }
                  ],
                  staticClass: "form-control float-left",
                  attrs: { type: "date" },
                  domProps: { value: _vm.newDate },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.newDate = $event.target.value
                    }
                  }
                })
              ])
            ])
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
    require("vue-hot-reload-api")      .rerender("data-v-6defbd3d", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6defbd3d\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/views/FSL/attendance/form.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6defbd3d\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/views/FSL/attendance/form.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("4b3000d4", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6defbd3d\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./form.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6defbd3d\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./form.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./resources/assets/js/helpers/log.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.log = log;

var _api = __webpack_require__("./resources/assets/js/helpers/api.js");

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

/***/ "./resources/assets/js/views/FSL/attendance/form.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6defbd3d\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/views/FSL/attendance/form.vue")
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"babel-preset-env\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"babel-plugin-syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/views/FSL/attendance/form.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-6defbd3d\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/views/FSL/attendance/form.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-6defbd3d"
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
Component.options.__file = "resources\\assets\\js\\views\\FSL\\attendance\\form.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6defbd3d", Component.options)
  } else {
    hotAPI.reload("data-v-6defbd3d", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});