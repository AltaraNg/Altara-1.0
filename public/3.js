<<<<<<< HEAD
webpackJsonp([3],{

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"babel-preset-env\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"babel-plugin-syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/ImagePreview.vue":
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

exports.default = {
    props: {
        preview: {
            type: [String, File],
            default: null
        }
    },
    data: function data() {
        return {
            image: null
        };
    },
    created: function created() {
        this.setPreview();
    },

    watch: {
        'preview': 'setPreview'
    },
    methods: {
        setPreview: function setPreview() {
            var _this = this;

            if (this.preview instanceof File) {
                var fileReader = new FileReader();
                fileReader.onload = function (event) {
                    _this.image = event.target.result;
                };
                fileReader.readAsDataURL(this.preview);
            } else if (typeof this.preview === 'string') {
                this.image = 'https://s3.eu-west-2.amazonaws.com/altara-one/' + this.preview;
            } else this.image = null;
        }
    }
};

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"babel-preset-env\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"babel-plugin-syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/ImageUpload.vue":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _ImagePreview = __webpack_require__("./resources/assets/js/components/ImagePreview.vue");

var _ImagePreview2 = _interopRequireDefault(_ImagePreview);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    components: {
        ImagePreview: _ImagePreview2.default
    },
    props: {
        value: {
            type: [String, File],
            default: null
        },
        usage: {
            type: [String],
            default: 'verification'
        }
    },
    methods: {
        upload: function upload(e) {
            var files = e.target.files;
            if (files && files.length > 0) this.$emit('input', files[0]);
        }
    }
}; //
//
//
//
//
//

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"babel-preset-env\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"babel-plugin-syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/views/HRM/employee/employeeForm.vue":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
   value: true
});

var _regenerator = __webpack_require__("./node_modules/babel-runtime/regenerator/index.js");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _sms = __webpack_require__("./resources/assets/js/helpers/sms.js");

var _sms2 = _interopRequireDefault(_sms);

var _log = __webpack_require__("./resources/assets/js/helpers/log.js");

var _flash = __webpack_require__("./resources/assets/js/helpers/flash.js");

var _flash2 = _interopRequireDefault(_flash);

var _api = __webpack_require__("./resources/assets/js/helpers/api.js");

var _form = __webpack_require__("./resources/assets/js/helpers/form.js");

var _ImageUpload = __webpack_require__("./resources/assets/js/components/ImageUpload.vue");

var _ImageUpload2 = _interopRequireDefault(_ImageUpload);

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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
   var urls = { create: 'user/create', edit: 'user/' + to.params.id + '/edit' };
   return urls[to.meta.mode];
}

exports.default = {

   components: { ImageUpload: _ImageUpload2.default },

   data: function data() {

      return {
         mode: null,
         show: false,
         store: '/api/user',
         method: 'POST',
         form: {},
         error: {},
         roles: {},
         branches: {},
         password: '',
         countries: ['nigeria'],
         gender: ['male', 'female'],
         categories: {},
         textDetails: { phone: '', loginPassword: '', loginID: '' },
         statuses: ['married', 'single', 'divorced', 'complicated'],
         qualifications: ['NCE', 'HND', 'OND', 'bachelors', 'masters', 'doctorate']
      };
   },
   beforeRouteEnter: function beforeRouteEnter(to, from, next) {
      //1. make request to back-end
      (0, _api.get)('/api/' + initialize(to)).then(function (res) {
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


   methods: {
      done: function done() {
         this.$router.push('/hrm/employee');
      },
      prepareForm: function () {
         var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee(data) {
            return _regenerator2.default.wrap(function _callee$(_context) {
               while (1) {
                  switch (_context.prev = _context.next) {
                     case 0:
                        _context.next = 2;
                        return this.$prepareStates();

                     case 2:
                        this.mode = this.$route.meta.mode;
                        this.error = {};
                        this.errors.clear();
                        this.form = data.form;
                        this.roles = data.roles;
                        this.branches = data.branches;
                        this.categories = data.categories;
                        if (this.$route.meta.mode === 'edit') {
                           this.store = '/api/user/' + this.$route.params.id;
                           // this.method = 'PUT';
                           this.method = 'POST';
                        }
                        this.show = true;

                     case 11:
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
      onSave: function onSave() {
         var _this2 = this;

         this.$validator.validateAll().then(function (result) {
            if (result) {
               if (_this2.$network()) {
                  _this2.$LIPS(true);
                  _this2.error = {};
                  var form = (0, _form.toMulipartedForm)(_this2.form, 'edit');
                  (0, _api.byMethod)(_this2.method, _this2.store, form).then(function (res) {
                     if (res.data['success']) {
                        _this2.textDetails.loginID = String(res.data.staff_id);
                        _this2.textDetails.phone = String(parseInt(_this2.form.phone_number));
                        _this2.textDetails.loginPassword = _this2.password = res.data.password;
                        _sms2.default.welcome(_this2.textDetails);
                     }
                     (0, _log.log)('Staff ' + _this2.mode, String(res.data.staff_id));
                     _flash2.default.setSuccess(_this2.mode === 'edit' ? 'Staff ' + _this2.mode + 'd successfully' : 'Staff ' + _this2.mode + 'd with ID ' + res.data.staff_id + '. Login details has been sent via SMS to the employee!', 20000);
                     _this2.done();
                  }).catch(function (e) {
                     e = e.response;
                     if (e.status === 422) {
                        _this2.error = e.data.errors ? e.data.errors : e.data;
                        _this2.$networkErr('unique');
                     }
                  }).finally(function () {
                     _this2.$scrollToTop();
                     _this2.$LIPS(false);
                  });
               } else _this2.$networkErr();
            } else _this2.$networkErr('form');
         });
      },
      viewCV: function viewCV(path) {
         window.open('https://s3.eu-west-2.amazonaws.com/altara-one/' + path, '_blank');
      },
      editCV: function editCV() {
         this.form.cv_url = '';
      }
   }
};

/***/ }),

/***/ "./node_modules/babel-runtime/regenerator/index.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./node_modules/regenerator-runtime/runtime-module.js");


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-529d75ca\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/views/HRM/employee/employeeForm.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.view_cv[data-v-529d75ca] {\n  text-decoration: underline;\n  font-size: 13px;\n  font-weight: 700;\n}\n.view_cv[data-v-529d75ca]:hover {\n    text-decoration: underline !important;\n}\n.cv_label[data-v-529d75ca] {\n  font-size: 1.6rem;\n  line-height: 36px;\n  float: left;\n}\n.cv_upload[data-v-529d75ca] {\n  background-color: rgba(0, 0, 0, 0.05);\n  border: 1px dotted rgba(0, 0, 0, 0.15);\n  border-radius: 5px;\n  padding: 0.8rem .8rem;\n  float: left;\n}\n", ""]);

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

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-529d75ca\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/views/HRM/employee/employeeForm.vue":
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
            [_c("h6", [_vm._v(_vm._s(_vm.mode) + " Staff")])]
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
                    _c("div", { staticClass: "clearfix" }, [
                      _c("h5", [_vm._v("Employee Personal Details")]),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass:
                            "form-group col-md-6 col-12 float-left px-0 px-md-3"
                        },
                        [
                          _c("label", [_vm._v("Full Name")]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.form.full_name,
                                expression: "form.full_name"
                              },
                              {
                                name: "validate",
                                rawName: "v-validate",
                                value: "required|max:100",
                                expression: "'required|max:100'"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: {
                              name: "name",
                              placeholder: "employee full name",
                              type: "text"
                            },
                            domProps: { value: _vm.form.full_name },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.form,
                                  "full_name",
                                  $event.target.value
                                )
                              }
                            }
                          }),
                          _vm._v(" "),
                          _vm.errors.first("name")
                            ? _c("small", [
                                _vm._v(_vm._s(_vm.errors.first("name")))
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
                          _c("label", [_vm._v("Phone Number")]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.form.phone_number,
                                expression: "form.phone_number"
                              },
                              {
                                name: "validate",
                                rawName: "v-validate",
                                value: "required|numeric|max:11|min:11",
                                expression: "'required|numeric|max:11|min:11'"
                              }
                            ],
                            staticClass: "form-control",
                            class: { "is-invalid": _vm.error.phone_number },
                            attrs: {
                              "data-vv-as": "phone number",
                              name: "phone_number",
                              placeholder: "081xxxxxxxx",
                              type: "tel"
                            },
                            domProps: { value: _vm.form.phone_number },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.form,
                                  "phone_number",
                                  $event.target.value
                                )
                              }
                            }
                          }),
                          _vm._v(" "),
                          _vm.errors.first("phone_number")
                            ? _c("small", [
                                _vm._v(
                                  "\n                        " +
                                    _vm._s(_vm.errors.first("phone_number")) +
                                    "\n                     "
                                )
                              ])
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.error.phone_number
                            ? _c("small", [
                                _vm._v(
                                  "\n                        " +
                                    _vm._s(_vm.error.phone_number[0]) +
                                    "\n                     "
                                )
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
                          _c("label", [_vm._v("Marital Status")]),
                          _vm._v(" "),
                          _c(
                            "select",
                            {
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
                              staticClass: "custom-select w-100",
                              attrs: {
                                "data-vv-validate-on": "blur",
                                name: "status"
                              },
                              on: {
                                change: function($event) {
                                  var $$selectedVal = Array.prototype.filter
                                    .call($event.target.options, function(o) {
                                      return o.selected
                                    })
                                    .map(function(o) {
                                      var val =
                                        "_value" in o ? o._value : o.value
                                      return val
                                    })
                                  _vm.$set(
                                    _vm.form,
                                    "status",
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
                                [_vm._v("select status")]
                              ),
                              _vm._v(" "),
                              _vm._l(_vm.statuses, function(status) {
                                return _c(
                                  "option",
                                  { domProps: { value: status } },
                                  [
                                    _vm._v(
                                      "\n                           " +
                                        _vm._s(_vm._f("capitalize")(status)) +
                                        "\n                        "
                                    )
                                  ]
                                )
                              })
                            ],
                            2
                          ),
                          _vm._v(" "),
                          _vm.errors.first("status")
                            ? _c("small", [
                                _vm._v(
                                  "\n                        " +
                                    _vm._s(_vm.errors.first("status")) +
                                    "\n                     "
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
                            "form-group col-md-6 col-12 float-left px-0 px-md-3"
                        },
                        [
                          _c("label", [_vm._v("Nationality")]),
                          _vm._v(" "),
                          _c(
                            "select",
                            {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.form.nationality,
                                  expression: "form.nationality"
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
                                name: "nationality"
                              },
                              on: {
                                change: function($event) {
                                  var $$selectedVal = Array.prototype.filter
                                    .call($event.target.options, function(o) {
                                      return o.selected
                                    })
                                    .map(function(o) {
                                      var val =
                                        "_value" in o ? o._value : o.value
                                      return val
                                    })
                                  _vm.$set(
                                    _vm.form,
                                    "nationality",
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
                                [_vm._v("select nationality")]
                              ),
                              _vm._v(" "),
                              _vm._l(_vm.countries, function(country) {
                                return _c(
                                  "option",
                                  { domProps: { value: country } },
                                  [
                                    _vm._v(
                                      "\n                           " +
                                        _vm._s(_vm._f("capitalize")(country)) +
                                        "\n                        "
                                    )
                                  ]
                                )
                              })
                            ],
                            2
                          ),
                          _vm._v(" "),
                          _vm.errors.first("nationality")
                            ? _c("small", [
                                _vm._v(
                                  "\n                        " +
                                    _vm._s(_vm.errors.first("nationality")) +
                                    "\n                     "
                                )
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
                          _c("label", [_vm._v("Date of Birth")]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.form.date_of_birth,
                                expression: "form.date_of_birth"
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
                              "data-vv-as": "date of birth",
                              name: "date_of_birth",
                              type: "date"
                            },
                            domProps: { value: _vm.form.date_of_birth },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.form,
                                  "date_of_birth",
                                  $event.target.value
                                )
                              }
                            }
                          }),
                          _vm._v(" "),
                          _vm.errors.first("date_of_birth")
                            ? _c("small", [
                                _vm._v(
                                  _vm._s(_vm.errors.first("date_of_birth"))
                                )
                              ])
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.error.date_of_birth
                            ? _c("small", [
                                _vm._v(_vm._s(_vm.error.date_of_birth[0]))
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
                                value: "required|email|min:1",
                                expression: "'required|email|min:1'"
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
                                _vm._v(
                                  "\n                        " +
                                    _vm._s(_vm.errors.first("email")) +
                                    "\n                     "
                                )
                              ])
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.error.email
                            ? _c("small", [
                                _vm._v(
                                  "\n                        " +
                                    _vm._s(_vm.error.email[0]) +
                                    "\n                     "
                                )
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
                          _c("label", [_vm._v("Role in the company")]),
                          _vm._v(" "),
                          _c(
                            "select",
                            {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.form.role_id,
                                  expression: "form.role_id"
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
                                "data-vv-name": "role",
                                "data-vv-validate-on": "blur",
                                name: "role"
                              },
                              on: {
                                change: function($event) {
                                  var $$selectedVal = Array.prototype.filter
                                    .call($event.target.options, function(o) {
                                      return o.selected
                                    })
                                    .map(function(o) {
                                      var val =
                                        "_value" in o ? o._value : o.value
                                      return val
                                    })
                                  _vm.$set(
                                    _vm.form,
                                    "role_id",
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
                                [_vm._v("select role")]
                              ),
                              _vm._v(" "),
                              _vm._l(_vm.roles, function(role) {
                                return _c(
                                  "option",
                                  { domProps: { value: role.id } },
                                  [
                                    _vm._v(
                                      "\n                           " +
                                        _vm._s(
                                          _vm._f("capitalize")(role.name)
                                        ) +
                                        "\n                        "
                                    )
                                  ]
                                )
                              })
                            ],
                            2
                          ),
                          _vm._v(" "),
                          _vm.errors.first("role")
                            ? _c("small", [
                                _vm._v(
                                  "\n                        " +
                                    _vm._s(_vm.errors.first("role")) +
                                    "\n                     "
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
                            "form-group col-md-6 col-12 float-left px-0 px-md-3"
                        },
                        [
                          _c("label", [_vm._v("Highest Qualification")]),
                          _vm._v(" "),
                          _c(
                            "select",
                            {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.form.highest_qualification,
                                  expression: "form.highest_qualification"
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
                                "data-vv-name": "qualification",
                                "data-vv-validate-on": "blur",
                                name: "qualification"
                              },
                              on: {
                                change: function($event) {
                                  var $$selectedVal = Array.prototype.filter
                                    .call($event.target.options, function(o) {
                                      return o.selected
                                    })
                                    .map(function(o) {
                                      var val =
                                        "_value" in o ? o._value : o.value
                                      return val
                                    })
                                  _vm.$set(
                                    _vm.form,
                                    "highest_qualification",
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
                                [_vm._v("select qualification")]
                              ),
                              _vm._v(" "),
                              _vm._l(_vm.qualifications, function(
                                qualification
                              ) {
                                return _c(
                                  "option",
                                  { domProps: { value: qualification } },
                                  [
                                    _vm._v(
                                      "\n                           " +
                                        _vm._s(
                                          _vm._f("capitalize")(qualification)
                                        ) +
                                        "\n                        "
                                    )
                                  ]
                                )
                              })
                            ],
                            2
                          ),
                          _vm._v(" "),
                          _vm.errors.has("qualification")
                            ? _c("small", [
                                _vm._v(
                                  "\n                        " +
                                    _vm._s(_vm.errors.first("qualification")) +
                                    "\n                     "
                                )
                              ])
                            : _vm._e()
                        ]
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "spaceBetween mb-md-2 mb-0" }),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass:
                            "form-group col-md-6 col-12 float-left px-0 px-md-3"
                        },
                        [
                          _c("label", [_vm._v("Operations Branch")]),
                          _vm._v(" "),
                          _c(
                            "select",
                            {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.form.branch_id,
                                  expression: "form.branch_id"
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
                                "data-vv-name": "branch",
                                "data-vv-validate-on": "blur",
                                name: "branch"
                              },
                              on: {
                                change: function($event) {
                                  var $$selectedVal = Array.prototype.filter
                                    .call($event.target.options, function(o) {
                                      return o.selected
                                    })
                                    .map(function(o) {
                                      var val =
                                        "_value" in o ? o._value : o.value
                                      return val
                                    })
                                  _vm.$set(
                                    _vm.form,
                                    "branch_id",
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
                                [_vm._v("select branch")]
                              ),
                              _vm._v(" "),
                              _vm._l(_vm.branches, function(branch) {
                                return _c(
                                  "option",
                                  { domProps: { value: branch.id } },
                                  [
                                    _vm._v(
                                      "\n                           " +
                                        _vm._s(
                                          _vm._f("capitalize")(branch.name)
                                        ) +
                                        "\n                        "
                                    )
                                  ]
                                )
                              })
                            ],
                            2
                          ),
                          _vm._v(" "),
                          _vm.errors.has("branch")
                            ? _c("small", [
                                _vm._v(
                                  "\n                        " +
                                    _vm._s(_vm.errors.first("branch")) +
                                    "\n                     "
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
                            "form-group col-md-6 col-12 float-left px-0 px-md-3"
                        },
                        [
                          _c("label", [_vm._v("Date of Appointment")]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.form.date_of_appointment,
                                expression: "form.date_of_appointment"
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
                              "data-vv-as": "date of appointment",
                              name: "date_of_appointment",
                              type: "date"
                            },
                            domProps: { value: _vm.form.date_of_appointment },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.form,
                                  "date_of_appointment",
                                  $event.target.value
                                )
                              }
                            }
                          }),
                          _vm._v(" "),
                          _vm.errors.first("date_of_appointment")
                            ? _c("small", [
                                _vm._v(
                                  "\n                        " +
                                    _vm._s(
                                      _vm.errors.first("date_of_appointment")
                                    ) +
                                    "\n                     "
                                )
                              ])
                            : _vm._e()
                        ]
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "spaceBetween mb-md-2 mb-0" }),
                      _vm._v(" "),
                      _vm.mode === "edit"
                        ? _c(
                            "div",
                            {
                              staticClass:
                                "form-group col-md-6 col-12 float-left px-0 px-md-3"
                            },
                            [
                              _c("label", [_vm._v("Date of Exit")]),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.form.date_of_exit,
                                    expression: "form.date_of_exit"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: { type: "date" },
                                domProps: { value: _vm.form.date_of_exit },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.form,
                                      "date_of_exit",
                                      $event.target.value
                                    )
                                  }
                                }
                              })
                            ]
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass:
                            "form-group col-md-6 col-12 float-left px-0 px-md-3"
                        },
                        [
                          _c("label", [_vm._v("Staff Category")]),
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
                                "data-vv-name": "category",
                                "data-vv-validate-on": "blur",
                                name: "qualification"
                              },
                              on: {
                                change: function($event) {
                                  var $$selectedVal = Array.prototype.filter
                                    .call($event.target.options, function(o) {
                                      return o.selected
                                    })
                                    .map(function(o) {
                                      var val =
                                        "_value" in o ? o._value : o.value
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
                                [_vm._v("select category")]
                              ),
                              _vm._v(" "),
                              _vm._l(_vm.categories, function(category) {
                                return _c(
                                  "option",
                                  { domProps: { value: category.name } },
                                  [
                                    _vm._v(
                                      "\n                           " +
                                        _vm._s(
                                          _vm._f("capitalize")(category.name)
                                        ) +
                                        "\n                        "
                                    )
                                  ]
                                )
                              })
                            ],
                            2
                          ),
                          _vm._v(" "),
                          _vm.errors.has("category")
                            ? _c("small", [
                                _vm._v(
                                  "\n                        " +
                                    _vm._s(_vm.errors.first("category")) +
                                    "\n                     "
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
                            "form-group col-md-6 col-12 float-left px-0 px-md-3"
                        },
                        [
                          _c(
                            "label",
                            { staticClass: "w-100 float-left pl-1" },
                            [_vm._v("Gender")]
                          ),
                          _vm._v(" "),
                          _vm._l(_vm.gender, function(sex) {
                            return _c(
                              "div",
                              {
                                staticClass:
                                  "radio p-0 col-md-6 col-6 float-left"
                              },
                              [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.form.gender,
                                      expression: "form.gender"
                                    },
                                    {
                                      name: "validate",
                                      rawName: "v-validate",
                                      value: "required",
                                      expression: "'required'"
                                    }
                                  ],
                                  attrs: {
                                    id: sex,
                                    name: "gender",
                                    type: "radio"
                                  },
                                  domProps: {
                                    value: sex,
                                    checked: _vm._q(_vm.form.gender, sex)
                                  },
                                  on: {
                                    change: function($event) {
                                      _vm.$set(_vm.form, "gender", sex)
                                    }
                                  }
                                }),
                                _vm._v(" "),
                                _c("label", { attrs: { for: sex } }, [
                                  _vm._v(
                                    "\n                           " +
                                      _vm._s(sex) +
                                      "\n                        "
                                  )
                                ])
                              ]
                            )
                          }),
                          _vm._v(" "),
                          _vm.errors.first("gender")
                            ? _c("small", [
                                _vm._v(
                                  "\n                        " +
                                    _vm._s(_vm.errors.first("gender")) +
                                    "\n                     "
                                )
                              ])
                            : _vm._e()
                        ],
                        2
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "spaceBetween mb-md-2 mb-0" }),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass:
                            "form-group col-12 float-left px-0 px-md-3"
                        },
                        [
                          _c("label", [_vm._v("Describe Location")]),
                          _vm._v(" "),
                          _c("textarea", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.form.address,
                                expression: "form.address"
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
                              name: "address",
                              placeholder: "address",
                              rows: "1"
                            },
                            domProps: { value: _vm.form.address },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.form,
                                  "address",
                                  $event.target.value
                                )
                              }
                            }
                          }),
                          _vm._v(" "),
                          _vm.errors.first("address")
                            ? _c("small", [
                                _vm._v(
                                  "\n                        " +
                                    _vm._s(_vm.errors.first("address")) +
                                    "\n                     "
                                )
                              ])
                            : _vm._e()
                        ]
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "spaceAfter" }),
                      _vm._v(" "),
                      _c("h5", [_vm._v("Referee Details")]),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass:
                            "form-group col-md-6 col-12 float-left px-0 px-md-3"
                        },
                        [
                          _c("label", [_vm._v("Referee 1 Full Name")]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.form.referee_1,
                                expression: "form.referee_1"
                              },
                              {
                                name: "validate",
                                rawName: "v-validate",
                                value: "required|max:50",
                                expression: "'required|max:50'"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: {
                              "data-vv-as": "referee 1 full name",
                              name: "referee_1",
                              placeholder: "enter full name here",
                              type: "text"
                            },
                            domProps: { value: _vm.form.referee_1 },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.form,
                                  "referee_1",
                                  $event.target.value
                                )
                              }
                            }
                          }),
                          _vm._v(" "),
                          _vm.errors.first("referee_1")
                            ? _c("small", [
                                _vm._v(
                                  "\n                        " +
                                    _vm._s(_vm.errors.first("referee_1")) +
                                    "\n                     "
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
                            "form-group col-md-6 col-12 float-left px-0 px-md-3"
                        },
                        [
                          _c("label", [_vm._v("Referee 1 Phone Number")]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.form.referee_1_phone_no,
                                expression: "form.referee_1_phone_no"
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
                              "data-vv-as": "referee 1 phone number",
                              name: "referee_1_phone_no",
                              placeholder: "081xxxxxxxx",
                              type: "tel"
                            },
                            domProps: { value: _vm.form.referee_1_phone_no },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.form,
                                  "referee_1_phone_no",
                                  $event.target.value
                                )
                              }
                            }
                          }),
                          _vm._v(" "),
                          _vm.errors.first("referee_1_phone_no")
                            ? _c("small", [
                                _vm._v(
                                  "\n                        " +
                                    _vm._s(
                                      _vm.errors.first("referee_1_phone_no")
                                    ) +
                                    "\n                     "
                                )
                              ])
                            : _vm._e()
                        ]
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "spaceBetween mb-md-2 mb-0" }),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass:
                            "form-group col-md-6 col-12 float-left px-0 px-md-3"
                        },
                        [
                          _c("label", [_vm._v("Referee 2 Full Name")]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.form.referee_2,
                                expression: "form.referee_2"
                              },
                              {
                                name: "validate",
                                rawName: "v-validate",
                                value: "required|max:50",
                                expression: "'required|max:50'"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: {
                              "data-vv-as": "referee 2 full name",
                              name: "referee_2",
                              placeholder: "enter full name here",
                              type: "text"
                            },
                            domProps: { value: _vm.form.referee_2 },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.form,
                                  "referee_2",
                                  $event.target.value
                                )
                              }
                            }
                          }),
                          _vm._v(" "),
                          _vm.errors.first("referee_2")
                            ? _c("small", [
                                _vm._v(
                                  "\n                        " +
                                    _vm._s(_vm.errors.first("referee_2")) +
                                    "\n                     "
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
                            "form-group col-md-6 col-12 float-left px-0 px-md-3"
                        },
                        [
                          _c("label", [_vm._v("Referee 2 Phone Number")]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.form.referee_2_phone_no,
                                expression: "form.referee_2_phone_no"
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
                              "data-vv-as": "referee 2 phone number",
                              name: "referee_2_phone_no",
                              placeholder: "081xxxxxxxx",
                              type: "tel"
                            },
                            domProps: { value: _vm.form.referee_2_phone_no },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.form,
                                  "referee_2_phone_no",
                                  $event.target.value
                                )
                              }
                            }
                          }),
                          _vm._v(" "),
                          _vm.errors.first("referee_2_phone_no")
                            ? _c("small", [
                                _vm._v(
                                  "\n                        " +
                                    _vm._s(
                                      _vm.errors.first("referee_2_phone_no")
                                    ) +
                                    "\n                     "
                                )
                              ])
                            : _vm._e()
                        ]
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "spaceAfter" }),
                      _vm._v(" "),
                      _c("h5", [_vm._v("Next of Kin Details")]),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass:
                            "form-group col-md-6 col-12 float-left px-0 px-md-3"
                        },
                        [
                          _c("label", [_vm._v("Next of Kin Full Name")]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.form.next_of_kin_name,
                                expression: "form.next_of_kin_name"
                              },
                              {
                                name: "validate",
                                rawName: "v-validate",
                                value: "required|max:50",
                                expression: "'required|max:50'"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: {
                              "data-vv-as": "next of kin name",
                              name: "next_of_kin_name",
                              placeholder: "enter full name here",
                              type: "text"
                            },
                            domProps: { value: _vm.form.next_of_kin_name },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.form,
                                  "next_of_kin_name",
                                  $event.target.value
                                )
                              }
                            }
                          }),
                          _vm._v(" "),
                          _vm.errors.first("next_of_kin_name")
                            ? _c("small", [
                                _vm._v(
                                  "\n                        " +
                                    _vm._s(
                                      _vm.errors.first("next_of_kin_name")
                                    ) +
                                    "\n                     "
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
                            "form-group col-md-6 col-12 float-left px-0 px-md-3"
                        },
                        [
                          _c("label", [_vm._v("Next of Kin Phone Number")]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.form.next_of_kin_phone_no,
                                expression: "form.next_of_kin_phone_no"
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
                              "data-vv-as": "next of kin phone number",
                              name: "next_of_kin_phone_no",
                              placeholder: "081xxxxxxxx",
                              type: "tel"
                            },
                            domProps: { value: _vm.form.next_of_kin_phone_no },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.form,
                                  "next_of_kin_phone_no",
                                  $event.target.value
                                )
                              }
                            }
                          }),
                          _vm._v(" "),
                          _vm.errors.first("next_of_kin_phone_no")
                            ? _c("small", [
                                _vm._v(
                                  "\n                        " +
                                    _vm._s(
                                      _vm.errors.first("next_of_kin_phone_no")
                                    ) +
                                    "\n                     "
                                )
                              ])
                            : _vm._e()
                        ]
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "spaceBetween mb-md-2 mb-0" }),
                      _vm._v(" "),
                      _c("div", { staticClass: "spaceAfter" }),
                      _vm._v(" "),
                      _c("h5", [_vm._v("Guarantor Details")]),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass:
                            "form-group col-md-6 col-12 float-left px-0 px-md-3"
                        },
                        [
                          _c("label", [_vm._v("Guarantor's Full Name")]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.form.guarantor_name,
                                expression: "form.guarantor_name"
                              },
                              {
                                name: "validate",
                                rawName: "v-validate",
                                value: "required|max:50",
                                expression: "'required|max:50'"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: {
                              "data-vv-as": "guarantor name",
                              name: "guarantor_name",
                              placeholder: "enter full name here",
                              type: "text"
                            },
                            domProps: { value: _vm.form.guarantor_name },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.form,
                                  "guarantor_name",
                                  $event.target.value
                                )
                              }
                            }
                          }),
                          _vm._v(" "),
                          _vm.errors.first("guarantor_name")
                            ? _c("small", [
                                _vm._v(
                                  "\n                        " +
                                    _vm._s(_vm.errors.first("guarantor_name")) +
                                    "\n                     "
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
                            "form-group col-md-6 col-12 float-left px-0 px-md-3"
                        },
                        [
                          _c("label", [_vm._v("Guarantor's Number")]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.form.guarantor_phone_no,
                                expression: "form.guarantor_phone_no"
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
                              "data-vv-as": "guarantor number",
                              name: "guarantor_phone_no",
                              placeholder: "081xxxxxxxx",
                              type: "tel"
                            },
                            domProps: { value: _vm.form.guarantor_phone_no },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.form,
                                  "guarantor_phone_no",
                                  $event.target.value
                                )
                              }
                            }
                          }),
                          _vm._v(" "),
                          _vm.errors.first("guarantor_phone_no")
                            ? _c("small", [
                                _vm._v(
                                  "\n                        " +
                                    _vm._s(
                                      _vm.errors.first("guarantor_phone_no")
                                    ) +
                                    "\n                     "
                                )
                              ])
                            : _vm._e()
                        ]
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "spaceBetween mb-md-2 mb-0" }),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass:
                            "form-group col-md-6 col-12 float-left px-0 px-md-3"
                        },
                        [
                          _c("label", [_vm._v("Guarantor's relationship")]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.form.guarantor_relationship,
                                expression: "form.guarantor_relationship"
                              },
                              {
                                name: "validate",
                                rawName: "v-validate",
                                value: "required|max:50",
                                expression: "'required|max:50'"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: {
                              "data-vv-as": "guarantor relationship",
                              name: "guarantor_relationship",
                              placeholder: "enter guarantor relationship here",
                              type: "text"
                            },
                            domProps: {
                              value: _vm.form.guarantor_relationship
                            },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.form,
                                  "guarantor_relationship",
                                  $event.target.value
                                )
                              }
                            }
                          }),
                          _vm._v(" "),
                          _vm.errors.first("guarantor_relationship")
                            ? _c("small", [
                                _vm._v(
                                  "\n                        " +
                                    _vm._s(
                                      _vm.errors.first("guarantor_relationship")
                                    ) +
                                    "\n                     "
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
                            "form-group col-md-6 col-12 float-left px-0 px-md-3"
                        },
                        [
                          _c("label", [_vm._v("Guarantor's address")]),
                          _vm._v(" "),
                          _c("textarea", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.form.guarantor_address,
                                expression: "form.guarantor_address"
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
                              name: "guarantor address",
                              placeholder: "guarantor address",
                              rows: "1"
                            },
                            domProps: { value: _vm.form.guarantor_address },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.form,
                                  "guarantor_address",
                                  $event.target.value
                                )
                              }
                            }
                          }),
                          _vm._v(" "),
                          _vm.errors.first("guarantor_address")
                            ? _c("small", [
                                _vm._v(
                                  "\n                        " +
                                    _vm._s(
                                      _vm.errors.first("guarantor_address")
                                    ) +
                                    "\n                     "
                                )
                              ])
                            : _vm._e()
                        ]
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "spaceBetween mb-md-2 mb-0" }),
                      _vm._v(" "),
                      _c("h5", [_vm._v("Upload Documents")]),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass:
                            "form-group col-md-6 col-12 float-left px-0 px-md-3"
                        },
                        [
                          _c("div", [
                            _vm.mode === "edit" && _vm.$data.form["cv_url"]
                              ? _c("div", [
                                  _c(
                                    "a",
                                    {
                                      staticClass: "view_cv mr-4",
                                      on: {
                                        click: function($event) {
                                          _vm.viewCV(_vm.form.cv_url)
                                        }
                                      }
                                    },
                                    [
                                      _vm._v(
                                        _vm._s(_vm.form.cv_url.substring(3))
                                      )
                                    ]
                                  ),
                                  _vm._v(
                                    "\n                           ||\n                           "
                                  ),
                                  _c(
                                    "a",
                                    {
                                      staticClass: "view_cv ml-4",
                                      on: { click: _vm.editCV }
                                    },
                                    [_vm._v("Edit CV")]
                                  )
                                ])
                              : _c(
                                  "div",
                                  [
                                    _c(
                                      "label",
                                      { staticClass: "cv_label mr-4" },
                                      [_vm._v("CV")]
                                    ),
                                    _vm._v(" "),
                                    _c("image-upload", {
                                      staticClass: "cv_upload",
                                      attrs: { usage: "cv" },
                                      model: {
                                        value: _vm.form.cv,
                                        callback: function($$v) {
                                          _vm.$set(_vm.form, "cv", $$v)
                                        },
                                        expression: "form.cv"
                                      }
                                    })
                                  ],
                                  1
                                )
                          ])
                        ]
                      ),
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
                          {
                            staticClass: "clearfix d-flex justify-content-end"
                          },
                          [
                            _vm.mode === "edit"
                              ? _c(
                                  "button",
                                  {
                                    staticClass: "mx-3 btn btn-secondary",
                                    attrs: { type: "button" },
                                    on: { click: _vm.done }
                                  },
                                  [_vm._v("Cancel")]
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
                                  "\n                        " +
                                    _vm._s(_vm._f("capitalize")(_vm.mode)) +
                                    " Employee "
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
    require("vue-hot-reload-api")      .rerender("data-v-529d75ca", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-78eff338\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/ImagePreview.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.image
    ? _c("div", { staticClass: "position-relative" }, [
        _c("img", { attrs: { src: _vm.image } }),
        _vm._v(" "),
        _c(
          "button",
          {
            staticClass: "btn btn-danger upload-close m-0 px-3 py-2",
            on: {
              click: function($event) {
                $event.preventDefault()
                _vm.$emit("close")
              }
            }
          },
          [_c("i", { staticClass: "fas fa-times text-white" })]
        )
      ])
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-78eff338", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-7e5db395\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/ImageUpload.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "image" },
    [
      _vm.value && _vm.usage === "verification"
        ? _c("image-preview", {
            attrs: { preview: _vm.value },
            on: {
              close: function($event) {
                _vm.$emit("input", null)
              }
            }
          })
        : _c("div", [
            _c("input", {
              attrs: { type: "file", accept: "images/*" },
              on: { change: _vm.upload }
            })
          ])
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
    require("vue-hot-reload-api")      .rerender("data-v-7e5db395", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-529d75ca\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/views/HRM/employee/employeeForm.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-529d75ca\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/views/HRM/employee/employeeForm.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("6691d52a", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-529d75ca\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./employeeForm.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-529d75ca\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./employeeForm.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./resources/assets/js/components/ImagePreview.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"babel-preset-env\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"babel-plugin-syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/ImagePreview.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-78eff338\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/ImagePreview.vue")
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
Component.options.__file = "resources\\assets\\js\\components\\ImagePreview.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-78eff338", Component.options)
  } else {
    hotAPI.reload("data-v-78eff338", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/js/components/ImageUpload.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"babel-preset-env\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"babel-plugin-syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/ImageUpload.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-7e5db395\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/ImageUpload.vue")
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
Component.options.__file = "resources\\assets\\js\\components\\ImageUpload.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7e5db395", Component.options)
  } else {
    hotAPI.reload("data-v-7e5db395", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/js/helpers/form.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.toMulipartedForm = toMulipartedForm;
exports.objectToFormData = objectToFormData;
function toMulipartedForm(form, mode) {
    if (mode === 'edit' && typeof form.image === 'string') {
        //remove reactivity
        var temp = JSON.parse(JSON.stringify(form));
        delete temp.image;
        return temp;
    } else {
        return objectToFormData(form);
    }
}

function objectToFormData(obj, form, namespace) {
    var fd = form || new FormData();
    var formKey = void 0;
    for (var property in obj) {
        if (obj.hasOwnProperty(property)) {
            if (namespace) {
                formKey = namespace + '[' + property + ']';
            } else {
                formKey = property;
            }
            if (obj[property] instanceof Array) {
                for (var i = 0; i < obj[property].length; i++) {
                    objectToFormData(obj[property][i], fd, property + '[' + i + ']');
                }
            } else if (_typeof(obj[property]) === 'object' && !(obj[property] instanceof File)) {
                objectToFormData(obj[property], fd, property);
            } else {
                fd.append(formKey, obj[property]);
            }
        }
    }
    return fd;
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

/***/ "./resources/assets/js/helpers/sms.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
   value: true
});

var _api = __webpack_require__("./resources/assets/js/helpers/api.js");

exports.default = {
   message: "",
   welcome: function welcome(details) {
      this.message = "Welcome to Altara credit. Please secure your login details. Staff ID: " + details.loginID + ", password: " + details.loginPassword;
      this.send(details);
   },
   customerReg: function customerReg(details) {
      this.message = "Dear " + details.first_name + " " + details.last_name + ", Welcome to Altara Credit Limited, You are hereby invited to our showroom at " + details.branch.description + " to learn more about our offerings. Pick up products now and pay later. We look forward to seeing you. For more info contact: " + details.branch.phone_yoruba + ". Your customer id is: " + details.id;
      this.send({ phone: details.telephone.substr(1) });
   },
   passwordReset: function passwordReset(details) {
      this.message = "Password reset successful! if your did not request for a new password kindly report back immediately, your staff ID is " + details.staff_id + ", new password: " + details.password;
      this.send(details);
   },
   dvaMessage: function dvaMessage(details) {
      this.message = details.message;
      this.send(details);
   },
   send: function send(details) {
      console.log(details);
      /*get(`/api/message/create?to=234${details.phone}&message=${this.message}`).then(res => {
         let data = JSON.parse(res.data);
         if (data.messages[0].status.groupId === 1) {
            console.log("sms sent successfully");
         }
      });*/
   }
};

/***/ }),

/***/ "./resources/assets/js/views/HRM/employee/employeeForm.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-529d75ca\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/views/HRM/employee/employeeForm.vue")
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"babel-preset-env\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"babel-plugin-syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/views/HRM/employee/employeeForm.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-529d75ca\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/views/HRM/employee/employeeForm.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-529d75ca"
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
Component.options.__file = "resources\\assets\\js\\views\\HRM\\employee\\employeeForm.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-529d75ca", Component.options)
  } else {
    hotAPI.reload("data-v-529d75ca", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});
=======
webpackJsonp([3],{"1gIg":function(t,e,s){var a=s("VU/8")(s("wBhk"),s("Zdt2"),!1,function(t){s("qM0B")},null,null);t.exports=a.exports},"3OWs":function(t,e,s){var a=s("NFFb");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);s("rjj0")("74ff447a",a,!0,{})},"4I72":function(t,e,s){var a=s("VU/8")(s("WiSW"),s("LbNp"),!1,function(t){s("3OWs")},null,null);t.exports=a.exports},LbNp:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("transition",{attrs:{name:"fade"}},[s("div",{class:"full"===t.$route.meta.mode?"px-md-4 px-2":""},["full"===t.$route.meta.mode?s("app-navigation",{attrs:{forward:{path:t.$routerHistory.next().path},pageTitle:"Customer Profile",pageTitleSmall:"Customer Profile",previous:{path:t.$routerHistory.previous().path}}}):t._e(),t._v(" "),t.show?s("div",{staticClass:"pt-md-3 pt-2 verification",attrs:{id:"employeeRegister"}},[s("div",{staticClass:"customer-profile card position-relative"},[s("div",{staticClass:"design"}),t._v(" "),s("div",{staticClass:"col-md-4 col-sm-4 col-12 px-0 pb-md-4 pb-sm-3 pb-0 pt-md-5 pt-4 float-left"},[s("div",{staticClass:"pt-md-3 pt-sm-2 pt-1"},[s("div",{staticClass:"justify-content-center d-flex position-relative z-1"},[s("span",{staticClass:"img-border"},[t.customer.document.passport_url?s("img",{staticClass:"profile-picture rounded-circle",attrs:{src:t.passport,alt:"customer profile pic"}}):s("i",{staticClass:"no-image fas fa-user-alt"})])]),t._v(" "),s("div",{staticClass:"justify-content-center d-flex position-relative z-1 pt-md-4 pt-sm-4 pt-2"},[s("span",{staticClass:"w-50"},[s("div",{staticClass:"text-right px-4 py-3 text-light text-muted m-0"},[t._v("\n                                    Status"),s("i",{staticClass:"ml-3 fas fa-briefcase"})]),t._v(" "),s("div",{staticClass:"data text-right px-4 py-3 m-0"},[t._v(t._s(t._f("capitalize")(t.customer.employment_status)))])]),t._v(" "),s("span",{staticClass:"separator"}),t._v(" "),s("span",{staticClass:"w-50"},[s("div",{staticClass:"px-4 py-3 text-muted text-light m-0"},[s("i",{staticClass:"mr-3 fas fa-transgender"}),t._v("Gender\n                                ")]),t._v(" "),s("div",{staticClass:"data px-4 py-3 m-0"},[t._v(t._s(t._f("capitalize")(t.customer.gender)))])])])])]),t._v(" "),s("div",{staticClass:"col-md-8 col-sm-8 col-12 px-0 pb-4 pt-md-5 pt-sm-5 pt-0 float-left"},[s("div",{staticClass:"pt-md-4 pt-0 clearfix"},[s("div",{staticClass:"float-left p-0 m-0 col-md-4 col-sm-6 small-center"},[s("h4",{staticClass:"mt-0 pt-md-5 pt-sm-4 pt-0 mb-md-5 mb-sm-4 mb-3"},[s("i",{staticClass:"mr-3 far fa-user-circle"}),t._v(" "),s("strong",[t._v(t._s(t._f("capitalize")(t.name)))])])]),t._v(" "),s("div",{staticClass:"float-left p-0 m-0 col-md-4 col-sm-6 d-flex justify-content-center"},[s("h4",{staticClass:"mt-0 pt-md-5 pt-sm-4 pt-0 mb-md-5 mb-sm-4 mb-4 text-muted"},[s("strong",[t._v("Customer ID: "+t._s(t.customer.id))])])]),t._v(" "),s("div",{staticClass:"float-left p-0 m-0 col-md-4 col-12 d-flex justify-content-center"},[t.approved?s("span",{staticClass:"status mt-md-5 my-sm-2 mt-0 approved shadow-sm"},[t._v("\n                                APPROVED"),s("i",{staticClass:"ml-3 fas fa-check"})]):s("span",{staticClass:"status mt-md-5 my-sm-2 mt-0 not-approved shadow-sm"},[t._v("\n                                NOT APPROVED"),s("i",{staticClass:"ml-3 fas fa-times"})])])]),t._v(" "),s("div",{staticClass:"pt-4"},[s("table",{staticClass:"table"},[s("tbody",[s("tr",[s("th",{staticClass:"text-muted"},[s("i",{staticClass:"mr-3 fas fa-mobile-alt"}),t._v("Phone Number")]),t._v(" "),s("td",[t._v(t._s(t.customer.telephone))])]),t._v(" "),s("tr",[s("th",{staticClass:"text-muted"},[s("i",{staticClass:"mr-3 fas fa-map-marker-alt"}),t._v("Address")]),t._v(" "),s("td",[t._v(t._s(t._f("capitalize")(t.address))+"\n                                ")])]),t._v(" "),s("tr",[s("th",{staticClass:"text-muted"},[s("i",{staticClass:"mr-3 fas fa-gift"}),t._v("Registered On")]),t._v(" "),s("td",[t._v(t._s(t.customer.date_of_registration))])]),t._v(" "),s("tr",[s("th",{staticClass:"text-muted"},[s("i",{staticClass:"mr-3 far fa-user-circle"}),t._v("Registered By")]),t._v(" "),s("td",[t._v(t._s(t._f("capitalize")(t.customer.user.full_name)))])]),t._v(" "),s("tr",[s("th",{staticClass:"text-muted"},[s("i",{staticClass:"mr-3 far fa-building"}),t._v("Branch")]),t._v(" "),s("td",[t._v(t._s(t._f("capitalize")(t.branch)))])])])])])])]),t._v(" "),"full"===t.$route.meta.mode?s("div",{staticClass:"clearfix"},[s("div",[t._v("This is full profile!")])]):t._e()]):t._e()],1)])},staticRenderFns:[]}},NFFb:function(t,e,s){(t.exports=s("FZ+f")(!1)).push([t.i,".customer-profile{position:relative}.customer-profile th{width:auto;font-weight:400}.customer-profile .data,.customer-profile td{font-size:1.5rem;font-weight:500}.customer-profile .status{padding:1.2rem 3rem;float:left;color:#fff;border-radius:.5rem;-webkit-box-shadow:0 7px 15px rgba(0,0,0,.15),0 4px 4px rgba(0,0,0,.2);box-shadow:0 7px 15px rgba(0,0,0,.15),0 4px 4px rgba(0,0,0,.2);font-weight:700;font-size:1.3rem}.customer-profile .status.approved{background-color:#00a368}.customer-profile .status.not-approved{background-color:#c81618}.customer-profile .design{position:absolute;top:13rem;bottom:0;left:0;width:101%;height:calc(100% - 8.1rem);z-index:0;background:linear-gradient(45deg,#dedede,#fff)}.customer-profile .no-image,.customer-profile .profile-picture{height:16rem;width:16rem;-webkit-box-shadow:0 7px 15px rgba(0,0,0,.15),0 4px 4px rgba(0,0,0,.2);box-shadow:0 7px 15px rgba(0,0,0,.15),0 4px 4px rgba(0,0,0,.2)}.customer-profile .no-image{background-color:#e3e3e3;border-radius:50%;line-height:16rem;text-align:center;font-size:8rem;color:rgba(0,0,0,.15)}.customer-profile .img-border{padding:1.1rem;background-color:#fff;border-radius:50%}.customer-profile .separator{position:absolute;left:50%;height:70%;width:1px;background-color:rgba(0,0,0,.1);top:3%}@media (max-width:600px){.customer-profile .design{background:-webkit-gradient(linear,left top,left bottom,from(#dedede),to(#fff));background:linear-gradient(180deg,#dedede,#fff)}.customer-profile .separator{top:-11%}.customer-profile .small-center{text-align:center}.customer-profile th{width:35%}.customer-profile tbody{padding:1rem 1rem 0;float:left}}",""])},WiSW:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=l(s("I3G/")),r=s("uD8u"),i=l(s("4I72")),o=l(s("1gIg"));function l(t){return t&&t.__esModule?t:{default:t}}e.default={props:["viewCustomer"],components:{CustomerProfile:i.default,AppNavigation:o.default},data:function(){return{customer:"",show:!1}},computed:{passport:function(){return"https://s3.eu-west-2.amazonaws.com/altara-one/"+this.customer.document.passport_url},name:function(){return this.customer.first_name+" "+this.customer.last_name},branch:function(){return this.customer.branch.description+" "+this.customer.branch.name},address:function(){return this.customer.add_houseno+" "+this.customer.add_street+" "+this.customer.area_address+", "+this.customer.city+", "+this.customer.state+"."},approved:function(){return 1===this.customer.verification.address&&1===this.customer.verification.id_card&&1===this.customer.verification.passport&&1===this.customer.verification.processing_fee&&1===this.customer.verification.work_guarantor&&1===this.customer.verification.personal_guarantor}},created:function(){$(".tooltip").remove(),this.viewCustomer&&this.setCustomer(this.viewCustomer)},beforeRouteEnter:function(t,e,s){(0,r.get)("/api/customer/"+t.params.id).then(function(t){s(function(e){return e.setCustomer(t.data.customer)})})},beforeRouteUpdate:function(t,e,s){var a=this;(0,r.get)("/api/customer/"+t.params.id).then(function(t){a.setCustomer(t.data.customer),s()})},methods:{setCustomer:function(t){a.default.set(this.$data,"customer",t),this.show=!0}}}},Zdt2:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("h4",{staticClass:"mx-md-3 mx-0 py-0 my-0 text-center clearfix",attrs:{id:"index"}},[t.$routerHistory.hasPrevious()?s("router-link",{staticClass:"text-secondary float-left ml-1 pl-2 ml-sm-4 pl-sm-3",attrs:{to:t.previous,id:"back"}},[s("span",{staticClass:"mr-5 float-left"},[s("i",{staticClass:"far fa-arrow-alt-circle-left float-left"}),t._v(" "),s("small",{staticClass:"back float-left ml-2 d-none d-sm-block"},[t._v("Back")])])]):t._e(),t._v(" "),s("strong",{staticClass:"mx-auto w-100 float-left",attrs:{"data-title":"title"}},[s("span",{staticClass:"d-none d-sm-block"},[t._v(t._s(t.pageTitle))]),t._v(" "),s("span",{staticClass:"d-block d-sm-none"},[t._v(t._s(t.pageTitleSmall))])]),t._v(" "),t.$routerHistory.hasForward()?s("router-link",{staticClass:"text-secondary float-right mr-1 pr-2 mr-sm-4 pr-sm-3",attrs:{to:t.forward,id:"forward"}},[s("span",{staticClass:"ml-5 float-right"},[s("i",{staticClass:"far fa-arrow-alt-circle-right float-right"}),t._v(" "),s("small",{staticClass:"forward float-right mr-2 d-none d-sm-block"},[t._v("Forward")])])]):t._e()],1)},staticRenderFns:[]}},qM0B:function(t,e,s){var a=s("xucE");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);s("rjj0")("27e3f694",a,!0,{})},wBhk:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["pageTitle","pageTitleSmall","previous","forward"]}},xucE:function(t,e,s){(t.exports=s("FZ+f")(!1)).push([t.i,"#index a#back{left:0}#index a#forward{right:0}#index a#back,#index a#forward{margin-top:.8rem;position:absolute}#index a#back i,#index a#forward i{font-size:2.4rem}#index .back,#index .forward{line-height:2.4rem;margin-top:-.2rem;font-weight:700}@media (max-width:990px){#index a#back i,#index a#forward i{font-size:2.6rem}}@media (max-width:600px){#index [data-title=title],#index a#back,#index a#forward{margin-top:-.3rem;margin-bottom:.3rem}}",""])}});
>>>>>>> 592c4ccc33c040d78da2c20bf08dc4e818f089b9
