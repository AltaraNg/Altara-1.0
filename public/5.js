<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
webpackJsonp([5],{

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"babel-preset-env\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"babel-plugin-syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/OrderItem.vue":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _api = __webpack_require__("./resources/assets/js/utilities/api.js");

var _flash = __webpack_require__("./resources/assets/js/utilities/flash.js");

var _flash2 = _interopRequireDefault(_flash);

var _eventBus = __webpack_require__("./resources/assets/js/utilities/event-bus.js");

var _Amortization = __webpack_require__("./resources/assets/js/utilities/Amortization.js");

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

exports.default = {
    props: {
        mode: null,
        index: null,
        startIndex: { default: 1 },
        order: { default: null, type: _Amortization.Order }
    },

    created: function created() {
        _eventBus.EventBus.$on('selectOrderItem', this.toggleSelect);
        this.order.setReminder(this.mode);
    },


    methods: {
        logReminder: function logReminder() {
            var _this = this;

            this.$LIPS(true);
            delete this.order.reminder.order;
            delete this.order.reminder.canBeSelected;
            (0, _api.post)('/api/reminder', { reminders: [this.order.reminder] }).then(function (_ref) {
                var data = _ref.data;
                return data.saved && _this.logPromiseCall();
            }).catch(function () {
                return _this.$displayErrorMessage('Error Logging reminders!');
            });
        },
        logPromiseCall: function logPromiseCall() {
            var _this2 = this;

            var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "Reminder Logged!";

            if (this.order.promiseCall.date) {
                (0, _api.post)('/api/promise_call', this.order.promiseCall).then(function (_ref2) {
                    var data = _ref2.data;
                    return data.saved && _this2.done(message + " Promise call added!");
                }).catch(function () {
                    return _this2.$displayErrorMessage('Error Logging promise call!');
                });
            } else this.done(message);
        },
        done: function done(message) {
            this.$scrollToTop();
            _flash2.default.setSuccess(message, 5000);
            this.$emit('done');
        },
        toggleSelect: function toggleSelect() {
            var val = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

            if (this.order.reminder.canBeSelected) {
                this.order.isSelected = val !== null ? val : !this.order.isSelected;
            }
        }
    }
};

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"babel-preset-env\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"babel-plugin-syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/Orders.vue":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = __webpack_require__("./node_modules/babel-runtime/regenerator/index.js");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var _vue = __webpack_require__("./node_modules/vue/dist/vue.common.js");

var _vue2 = _interopRequireDefault(_vue);

var _vuex = __webpack_require__("./node_modules/vuex/dist/vuex.esm.js");

var _flash = __webpack_require__("./resources/assets/js/utilities/flash.js");

var _flash2 = _interopRequireDefault(_flash);

var _sms = __webpack_require__("./resources/assets/js/utilities/sms.js");

var _api = __webpack_require__("./resources/assets/js/utilities/api.js");

var _OrderItem = __webpack_require__("./resources/assets/js/components/OrderItem.vue");

var _OrderItem2 = _interopRequireDefault(_OrderItem);

var _Amortization = __webpack_require__("./resources/assets/js/utilities/Amortization.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var url = function url(to) {
    return '/api/reminder/create?list=' + to.query.list;
};

exports.default = {
    components: { OrderItem: _OrderItem2.default },

    props: { list: { default: null }, mode: null, preLoadedOrder: null, startIndex: null },

    watch: {
        list: function list(_list) {
            this.fetchList(_list);
        },
        preLoadedOrder: function preLoadedOrder(data) {
            this.prepareForm(data);
        }
    },

    data: function data() {
        return {
            orders: [],
            show: false,
            showModalContent: false,
            Order: _Amortization.Order,
            activeOrder: null
        };
    },


    computed: _extends({}, (0, _vuex.mapGetters)(['auth'])),

    methods: {
        prepareForm: function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee(res) {
                var _this = this;

                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                this.show = false;
                                this.showModalContent = false;
                                this.orders = [];
                                _context.next = 5;
                                return res.orders.forEach(function (order) {

                                    console.log(order instanceof _Amortization.Order);

                                    var newOrder = order instanceof _Amortization.Order ? order : new _Amortization.OrderWithPromiseCall(order, res.dva_id);

                                    var hasMissedPayment = function hasMissedPayment() {
                                        /*for the list 1 and 8 return true i.e no need for has
                                        missed payment since it's obvious we are dealing with just one date
                                        * 1st list is for all the customers that picked today
                                        * 8th list is for all the promise calls all the promise call must be shown to */
                                        if ([8, 1].includes(_this.list) || _this.mode === "normal-list") return true;

                                        var payDay = void 0,

                                        /*payDay holds the date
                                        of the first vacant repayment*/

                                        dayInterval = void 0,

                                        /*dayInterval the number of days before or after a certain
                                        repayment date. this varies according to collections app brief*/

                                        datePool = [],

                                        /*datePool hold an array of dates of length ranging from 1 to 3 in length
                                        * is the current date is monday the date-pool will include dates for
                                        * monday, sunday and saturday else it just hold the current date*/

                                        today = new Date(),
                                            isMonday = today.getDay() === 1,

                                        /*isMonday how a boolean value of whether
                                        the current date is monday or not*/

                                        collectionsList = [9, 10, 11, 12, 13, 14],
                                            accumulatedDays = isMonday || collectionsList.includes(_this.list) ? 3 : 1;
                                        /*accumulatedDays hold 1 or 3,
                                        1 if the current date is not on a monday and
                                        3 if the current date is on a monday*/

                                        if (!!!newOrder.repaymentData) return false;

                                        /*step 1::
                                        * the count is either 7 or 13,
                                        * the loop runs for 6 or 12 times*/
                                        for (var i = 1; i < newOrder.count + 1; i++) {

                                            /*get the resultant column 1st, 2nd, 3rd etc*/
                                            var column = _this.$getColumn(i);

                                            /*step 2. get the first occurrence of a vacant pay eg. 5th_pay*/
                                            if (!newOrder.repaymentData[column + "_pay"]) {

                                                /*step 3. find the corresponding due date for the vacant pay
                                                * The generateDates returns an array of the due
                                                dates for the order under consideration*/
                                                payDay = _Amortization.OrderWithPromiseCall.generateDueDates(newOrder.order.order_date, newOrder.interval, newOrder.count)[i - 1];

                                                /*[i - 1] explained.
                                                * eg if the i = 5,
                                                * column = 5th_pay,
                                                * then the 4th ( [5-1] - this is the 5th element or 4th index, array is 0 indexed)
                                                * index of the resultant array is the pay day we are interested in*/
                                                break;
                                            }
                                        }

                                        /*step 4. assign the appropriate intervals
                                        * NB:: This intervals where generated from the days
                                        * stipulated on the collections app brief note that the case
                                        * corresponds to the steps also indicated in the collections app brief*/
                                        switch (_this.list) {
                                            case 2:
                                                dayInterval = 7;
                                                break;
                                            case 3:
                                                dayInterval = 3;
                                                break;
                                            case 4:
                                                dayInterval = 0;
                                                break;
                                            case 5:
                                                dayInterval = 1;
                                                break;
                                            case 6:
                                                dayInterval = 5;
                                                break;
                                            case 7:
                                                dayInterval = 31;
                                                break;

                                            case 9:
                                                //collections visit: 1
                                                dayInterval = 38;
                                                break;
                                            case 10:
                                                //collections visit: 2
                                                dayInterval = 45;
                                                break;

                                            case 11:
                                                //recovery visit: 1
                                                dayInterval = 61;
                                                break;
                                            case 12:
                                                //recovery visit: 2
                                                dayInterval = 75;
                                                break;
                                            case 13:
                                                //recovery visit: 2
                                                dayInterval = 90;
                                                break;

                                            case 14:
                                                //external recovery - lawyer visit: 2
                                                dayInterval = 121;
                                                break;
                                        }

                                        if (["collection", "recovery", "call", "external-recovery"].includes(_this.mode)) {
                                            for (var p = 0; p < accumulatedDays; p++) {
                                                datePool.push(_this.$getDate(today.addDays(-(p + dayInterval))));
                                            }
                                        }

                                        if (_this.mode === 'sms') {
                                            for (var _p = 0; _p < accumulatedDays; _p++) {
                                                datePool.push(_this.$getDate(today.addDays(_p + dayInterval)));
                                            }
                                        }

                                        return datePool.includes(payDay);
                                    };

                                    var isMyBranch = function isMyBranch() {
                                        if (_this.auth('DVALead') || _this.auth('FSLLead') || _this.auth('CAGAccess')) return true;
                                        //the branch to be used for this filter should be the branch of the
                                        // product being bought not the branch of the customer
                                        return parseInt(newOrder.order.store_product.store_name) === res.branch;
                                    };

                                    if (isMyBranch() && hasMissedPayment()) _this.orders.push(newOrder);
                                });

                            case 5:

                                !!this.orders.length && (this.show = true);
                                this.$LIPS(false);

                            case 7:
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
        fetchList: function fetchList(list) {
            var _this2 = this;

            this.$LIPS(true);
            (0, _api.get)(url({ query: { list: list } })).then(function (_ref2) {
                var data = _ref2.data;

                if (list === 8) data.orders = data.orders.map(function (promiseCall) {
                    return promiseCall.order;
                });
                _this2.prepareForm(data);
            });
        },
        displayDetails: function () {
            var _ref3 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee2(order, modal) {
                return _regenerator2.default.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                _context2.next = 2;
                                return _vue2.default.set(this.$data, 'activeOrder', order);

                            case 2:
                                this.showModalContent = true;
                                return _context2.abrupt('return', $('#' + modal).modal('toggle'));

                            case 4:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function displayDetails(_x2, _x3) {
                return _ref3.apply(this, arguments);
            }

            return displayDetails;
        }(),
        processSelected: function processSelected() {
            this.$LIPS(true);
            var selectedOrders = this.orders.filter(function (order) {
                return order.isSelected;
            });
            if (!selectedOrders.length) {
                this.$displayErrorMessage('please select at least one!');
                return this.$LIPS(false);
            }
            this.sendSMSReminders(selectedOrders);
        },
        sendSMSReminders: function sendSMSReminders(selectedOrders) {
            var _this3 = this;

            var messages = [];
            selectedOrders.forEach(function (order, index) {
                var sms = new _sms.Message(order.nextSMSReminder, order.reminder.contacts, false, order.dvaId);
                sms.send(function (r) {
                    if (r.status === 200) {
                        delete sms.logToDB;
                        messages.push(sms);
                    }
                    if (index + 1 === selectedOrders.length) _this3.logSentMessages(selectedOrders, messages);
                });
            });
        },
        logSentMessages: function logSentMessages(selectedOrders, messages) {
            var _this4 = this;

            if (messages.length > 0) {
                (0, _api.post)('/api/message', { messages: messages, bulk: true }).then(function (_ref4) {
                    var data = _ref4.data;
                    var sentAndLogged = data.sentAndLogged,
                        ids = data.ids;

                    if (sentAndLogged) _this4.logSentReminders(selectedOrders, ids);else _this4.$displayErrorMessage('Error Logging sent sms details!');
                });
            } else this.$displayErrorMessage('Error sending messages!');
        },
        logSentReminders: function logSentReminders(selectedOrders, ids) {
            var _this5 = this;

            ids.reverse();
            if (ids.length > 0) {
                var newList = selectedOrders.map(function (order, index) {
                    order.reminder.sms_id = ids[index];
                    delete order.reminder.contacts;
                    delete order.reminder.canBeSelected;
                    return order.reminder;
                });
                (0, _api.post)('/api/reminder', { reminders: newList }).then(function (_ref5) {
                    var data = _ref5.data;

                    if (data.saved) {
                        _flash2.default.setSuccess('Reminders have been sent successfully!', 50000);
                        _this5.fetchList(_this5.list);
                    } else _this5.$displayErrorMessage('Error sending reminders!');
                    _this5.$scrollToTop();
                });
            } else this.$displayErrorMessage('Error logging sent messages!');
        }
    },

    mounted: function mounted() {
        var _this6 = this;

        this.mode != 'normal-list' ? this.fetchList(this.list) : this.prepareForm(this.preLoadedOrder);
        $(document).on("hidden.bs.modal", '.modal', function () {
            _this6.activeOrder = null;
            _this6.showModalContent = false;
        });
    },
    created: function created() {
        this.$prepareBanks();
        this.$prepareBranches();
        this.$preparePaymentMethods();
    }
};

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"babel-preset-env\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"babel-plugin-syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/views/DVA/reminder/reminder.vue":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Orders = __webpack_require__("./resources/assets/js/components/Orders.vue");

var _Orders2 = _interopRequireDefault(_Orders);

var _eventBus = __webpack_require__("./resources/assets/js/utilities/event-bus.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } } //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    components: { Order: _Orders2.default },

    data: function data() {
        return {
            listToOrder: null,
            doSelectAll: false
        };
    },


    methods: {
        selectAll: function selectAll() {
            this.doSelectAll = !this.doSelectAll;
            _eventBus.EventBus.$emit('selectOrderItem', this.doSelectAll);
        },
        mode: function mode() {
            var query = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
            var mode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.$route.meta.mode.toLowerCase();

            return query ? mode === query : mode;
        }
    },

    computed: {
        details: function details() {
            var list = 1,
                tabs = ["1<sup>st</sup>", "2<sup>nd</sup>", "3<sup>rd</sup>"],
                headings = ['Order Number', 'Order Summary', 'Customer Info Summary', 'Repayment Summary', 'History'];
            switch (this.mode()) {
                case 'call':
                    list = 4;
                    tabs = [].concat(_toConsumableArray(tabs), ["Guarantor's", "Promise"]);
                    headings = [].concat(_toConsumableArray(headings), ['Feedback', 'Promise Date']);
                    break;
                case 'collection':
                    list = 9;
                    tabs.splice(2, 1);
                    headings = [].concat(_toConsumableArray(headings), ['Visited?', 'Feedback']);
                    break;
                case 'recovery':
                    list = 11;
                    headings = [].concat(_toConsumableArray(headings), ['Visited?', 'Feedback']);
                    break;
                case 'external-recovery':
                    list = 14;
                    tabs.splice(1, 2);
                    headings = [].concat(_toConsumableArray(headings), ['Delivered Letter?', 'Feedback']);
                    break;
            }
            if (!this.listToOrder) this.listToOrder = list;
            return { tabs: tabs, headings: headings, list: list };
        }
    }
};

/***/ }),

/***/ "./node_modules/babel-runtime/regenerator/index.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./node_modules/regenerator-runtime/runtime-module.js");


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-426fb2d2\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/views/DVA/reminder/reminder.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.attendance-head .light-heading[data-v-426fb2d2]:nth-child(1) {\n    max-width: 120px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-57fa0ac8\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/Orders.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.table-separator[data-v-57fa0ac8] {\n    border-top: 2px solid #dee1e4;\n}\n", ""]);

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

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-426fb2d2\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/views/DVA/reminder/reminder.vue":
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
        _c("div", { staticClass: "mt-5 mb-3 attendance-head" }, [
          _c(
            "ul",
            {
              staticClass: "nav nav-tabs justify-content-center p-0",
              attrs: { role: "tablist" }
            },
            _vm._l(_vm.details.tabs, function(tab, index) {
              return _c("li", { staticClass: "col p-0 nav-item mb-0" }, [
                _c("a", {
                  staticClass: "nav-link",
                  class: index === 0 && "active",
                  attrs: {
                    "aria-selected": "true",
                    "data-toggle": "tab",
                    href: "#reminder-panel",
                    role: "tab"
                  },
                  domProps: { innerHTML: _vm._s(tab + " " + _vm.mode()) },
                  on: {
                    click: function($event) {
                      _vm.listToOrder = _vm.details.list + index
                    }
                  }
                })
              ])
            })
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "mt-5 mb-3 attendance-head" }, [
          _c(
            "div",
            { staticClass: "row px-4 pt-3 pb-4 text-center" },
            [
              _vm.mode("sms")
                ? _c(
                    "div",
                    {
                      staticClass: "col p-0 text-link",
                      staticStyle: { "max-width": "120px" },
                      on: { click: _vm.selectAll }
                    },
                    [
                      _vm._v(
                        "\n                    Click to " +
                          _vm._s(_vm.doSelectAll ? "De-select" : "Select") +
                          " all\n                "
                      )
                    ]
                  )
                : _c("div", { staticClass: "col light-heading" }, [
                    _vm._v("Action")
                  ]),
              _vm._v(" "),
              _vm._l(_vm.details.headings, function(header) {
                return _c("div", { staticClass: "col light-heading" }, [
                  _vm._v(_vm._s(header))
                ])
              })
            ],
            2
          )
        ]),
        _vm._v(" "),
        _c("order", { attrs: { list: _vm.listToOrder, mode: _vm.mode() } })
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
    require("vue-hot-reload-api")      .rerender("data-v-426fb2d2", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-5522319a\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/OrderItem.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "mb-3 row attendance-item" }, [
    _c(
      "div",
      {
        staticClass: "col-12 col-xs-2 col-md col-lg d-flex align-items-center",
        staticStyle: { "max-width": "120px" }
      },
      [
        _vm.mode === "normal-list"
          ? _c("span")
          : _vm.order.reminder.canBeSelected &&
            ["collection", "recovery", "call", "external-recovery"].includes(
              _vm.mode
            )
            ? _c(
                "span",
                {
                  staticClass: "user mx-auto bg-pending text-white",
                  on: { click: _vm.logReminder }
                },
                [_c("i", { staticClass: "fas fa-hourglass-start" })]
              )
            : _vm.order.reminder.canBeSelected && _vm.mode === "sms"
              ? _c("div", { staticClass: "d-flex align-items-center" }, [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.order.isSelected,
                        expression: "order.isSelected"
                      }
                    ],
                    staticClass:
                      "form-check-input my-0 mx-4 float-left position-relative ",
                    attrs: { type: "checkbox" },
                    domProps: {
                      checked: Array.isArray(_vm.order.isSelected)
                        ? _vm._i(_vm.order.isSelected, null) > -1
                        : _vm.order.isSelected
                    },
                    on: {
                      click: _vm.toggleSelect,
                      change: function($event) {
                        var $$a = _vm.order.isSelected,
                          $$el = $event.target,
                          $$c = $$el.checked ? true : false
                        if (Array.isArray($$a)) {
                          var $$v = null,
                            $$i = _vm._i($$a, $$v)
                          if ($$el.checked) {
                            $$i < 0 &&
                              _vm.$set(
                                _vm.order,
                                "isSelected",
                                $$a.concat([$$v])
                              )
                          } else {
                            $$i > -1 &&
                              _vm.$set(
                                _vm.order,
                                "isSelected",
                                $$a.slice(0, $$i).concat($$a.slice($$i + 1))
                              )
                          }
                        } else {
                          _vm.$set(_vm.order, "isSelected", $$c)
                        }
                      }
                    }
                  })
                ])
              : _c("span", { staticClass: "user mx-auto sent-reminder" }, [
                  _c("i", { staticClass: "fas fa-check" })
                ]),
        _vm._v(" "),
        _c("span", { staticClass: "user mx-auto" }, [
          _vm._v(_vm._s(_vm.startIndex + _vm.index))
        ])
      ]
    ),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass:
          "col-12 col-xs-2 col-md col-lg user-name d-flex align-items-center justify-content-center"
      },
      [_vm._v("\n        " + _vm._s(_vm.$vnode.key) + "\n    ")]
    ),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass:
          "col-12 col-xs-2 col-md col-lg d-flex align-items-center justify-content-center",
        attrs: { "data-hoverable": "true" },
        on: {
          click: function($event) {
            _vm.$emit("display", _vm.order, "purchase_order")
          }
        }
      },
      [_vm._v("\n        " + _vm._s(_vm.order.order.order_date) + "\n    ")]
    ),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass:
          "col-12 col-xs-3 col-md col-lg d-flex align-items-center justify-content-center",
        attrs: { "data-hoverable": "true" },
        on: {
          click: function($event) {
            _vm.$emit("display", _vm.order, "customer_info")
          }
        }
      },
      [
        _vm._v(
          "\n        ID: " +
            _vm._s(_vm.order.customer.id) +
            " - " +
            _vm._s(_vm._f("capitalize")(_vm.order.customer.employment_status)) +
            "\n    "
        )
      ]
    ),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass:
          "col-12 col-xs-2 col-md col-lg d-flex align-items-center justify-content-center",
        attrs: { "data-hoverable": "true" },
        on: {
          click: function($event) {
            _vm.$emit("display", _vm.order, "repayment")
          }
        }
      },
      [_vm._v("\n        " + _vm._s(_vm.order.financialStatus) + "\n    ")]
    ),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass:
          "col-12 col-xs-2 col-md col-lg d-flex align-items-center justify-content-center",
        attrs: { "data-hoverable": "true" },
        on: {
          click: function($event) {
            _vm.$emit("display", _vm.order, "reminder_history")
          }
        }
      },
      [
        _vm._v(
          "\n        " +
            _vm._s(_vm.order.order.reminders.length) +
            " reminder(s) sent\n    "
        )
      ]
    ),
    _vm._v(" "),
    ["collection", "recovery", "external-recovery"].includes(_vm.mode)
      ? _c(
          "div",
          {
            staticClass:
              "col-12 col-xs-2 col-md col-lg d-flex align-items-center attendance-create"
          },
          [
            _c("span", { staticClass: "present" }, [
              _c("span", { staticClass: "radio w-50 pr-3 mb-0 float-left" }, [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.order.reminder.is_visited,
                      expression: "order.reminder.is_visited"
                    }
                  ],
                  attrs: {
                    type: "radio",
                    id: "present" + _vm.index,
                    name: "isPresent" + _vm.index
                  },
                  domProps: {
                    value: true,
                    checked: _vm._q(_vm.order.reminder.is_visited, true)
                  },
                  on: {
                    change: function($event) {
                      _vm.$set(_vm.order.reminder, "is_visited", true)
                    }
                  }
                }),
                _vm._v(" "),
                _c("label", { attrs: { for: "present" + _vm.index } }, [
                  _vm._v("yes")
                ])
              ]),
              _vm._v(" "),
              _c("span", { staticClass: "radio w-50 pl-3 mb-0 float-left" }, [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.order.reminder.is_visited,
                      expression: "order.reminder.is_visited"
                    }
                  ],
                  attrs: {
                    type: "radio",
                    id: "absent" + _vm.index,
                    name: "isPresent" + _vm.index
                  },
                  domProps: {
                    value: false,
                    checked: _vm._q(_vm.order.reminder.is_visited, false)
                  },
                  on: {
                    change: function($event) {
                      _vm.$set(_vm.order.reminder, "is_visited", false)
                    }
                  }
                }),
                _vm._v(" "),
                _c("label", { attrs: { for: "absent" + _vm.index } }, [
                  _vm._v("no")
                ])
              ])
            ])
          ]
        )
      : _vm._e(),
    _vm._v(" "),
    ["collection", "recovery", "call", "external-recovery"].includes(_vm.mode)
      ? _c(
          "div",
          {
            staticClass:
              "col-12 col-xs-2 col-md col-lg d-flex align-items-center"
          },
          [
            _c("textarea", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.order.reminder.feedback,
                  expression: "order.reminder.feedback"
                }
              ],
              staticClass: "form-control",
              attrs: { rows: "1", disabled: !_vm.order.reminder.canBeSelected },
              domProps: { value: _vm.order.reminder.feedback },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.order.reminder, "feedback", $event.target.value)
                }
              }
            })
          ]
        )
      : _vm._e(),
    _vm._v(" "),
    _vm.mode === "call"
      ? _c(
          "div",
          {
            staticClass:
              "col-12 col-xs-2 col-md col-lg d-flex align-items-center"
          },
          [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.order.promiseCall.date,
                  expression: "order.promiseCall.date"
                }
              ],
              staticClass: "form-control",
              attrs: {
                type: "date",
                disabled: !_vm.order.reminder.canBeSelected
              },
              domProps: { value: _vm.order.promiseCall.date },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.order.promiseCall, "date", $event.target.value)
                }
              }
            })
          ]
        )
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-5522319a", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-57fa0ac8\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/Orders.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _vm.show
      ? _c("div", { staticClass: "tab-content mt-1 attendance-body" }, [
          _c(
            "div",
            {
              staticClass: "tab-pane active text-center",
              attrs: { id: "reminder-panel", role: "tabpanel" }
            },
            _vm._l(_vm.orders, function(order, index) {
              return _c("order-item", {
                key: order.order.id,
                attrs: {
                  index: index,
                  "start-index": _vm.startIndex,
                  order: order,
                  mode: _vm.mode
                },
                on: {
                  done: function($event) {
                    _vm.fetchList(_vm.list)
                  },
                  display: _vm.displayDetails
                }
              })
            })
          ),
          _vm._v(" "),
          _vm.mode != "normal-list"
            ? _c("div", { staticClass: "w-100 my-5 mx-0 hr" })
            : _vm._e()
        ])
      : _c("div", { staticClass: "tab-content mt-1 attendance-body" }, [
          _vm._m(0)
        ]),
    _vm._v(" "),
    _vm.show && _vm.mode === "sms"
      ? _c("div", { staticClass: "mt-1 attendance-body" }, [
          _c("div", { staticClass: "mb-5 px-0 row align-items-center" }, [
            _c(
              "div",
              { staticClass: "clearfix d-flex justify-content-end w-100" },
              [
                _c(
                  "button",
                  {
                    staticClass: "btn bg-default",
                    attrs: { disabled: _vm.$isProcessing },
                    on: { click: _vm.processSelected }
                  },
                  [
                    _vm._v("\n                    Send Reminder(s) "),
                    _c("i", { staticClass: "far fa-paper-plane ml-1" })
                  ]
                )
              ]
            )
          ])
        ])
      : _vm._e(),
    _vm._v(" "),
    _c("div", { staticClass: "modal fade", attrs: { id: "purchase_order" } }, [
      _c("div", { staticClass: "modal-dialog", attrs: { role: "document" } }, [
        _c("div", { staticClass: "modal-content" }, [
          _vm._m(1),
          _vm._v(" "),
          _vm.showModalContent
            ? _c("div", { staticClass: "modal-body" }, [
                _c("div", { staticClass: "table-responsive" }, [
                  _c(
                    "table",
                    { staticClass: "table table-bordered table-striped" },
                    [
                      _c("tbody", [
                        _c("tr", [
                          _c("th", [_vm._v("Order ID")]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(_vm.activeOrder.order.id))])
                        ]),
                        _vm._v(" "),
                        _c("tr", [
                          _c("th", [_vm._v("Order date")]),
                          _vm._v(" "),
                          _c("td", [
                            _vm._v(_vm._s(_vm.activeOrder.order.order_date))
                          ])
                        ]),
                        _vm._v(" "),
                        _c("tr", [
                          _c("th", [_vm._v("Product")]),
                          _vm._v(" "),
                          _c("td", [
                            _vm._v(
                              _vm._s(
                                _vm.activeOrder.order.store_product.product_name
                              )
                            )
                          ])
                        ]),
                        _vm._v(" "),
                        _c("tr", [
                          _c("th", [_vm._v("Repayment")]),
                          _vm._v(" "),
                          _c("td", [
                            _vm._v(
                              _vm._s(
                                _vm.$formatCurrency(
                                  _vm.activeOrder.amountsToBePaid[0]
                                )
                              )
                            )
                          ])
                        ]),
                        _vm._v(" "),
                        _c("tr", [
                          _c("th", [_vm._v("Down Payment")]),
                          _vm._v(" "),
                          _c("td", [
                            _vm._v(
                              _vm._s(
                                _vm.$formatCurrency(
                                  _vm.activeOrder.order.down_payment
                                )
                              )
                            )
                          ])
                        ]),
                        _vm._v(" "),
                        _c("tr", [
                          _c("th", [_vm._v("Discount (%)")]),
                          _vm._v(" "),
                          _c("td", [
                            _vm._v(
                              _vm._s(
                                _vm._f("capitalize")(_vm.activeOrder.discount)
                              )
                            )
                          ])
                        ]),
                        _vm._v(" "),
                        _c("tr", [
                          _c("th", [_vm._v("Sale Type")]),
                          _vm._v(" "),
                          _c("td", [
                            _vm._v(
                              _vm._s(
                                _vm._f("capitalize")(
                                  _vm.activeOrder.order.sales_type.name
                                )
                              )
                            )
                          ])
                        ]),
                        _vm._v(" "),
                        _c("tr", [
                          _c("th", [_vm._v("Total amount to Pay")]),
                          _vm._v(" "),
                          _c("td", [
                            _vm._v(
                              _vm._s(
                                _vm.$formatCurrency(
                                  _vm.activeOrder.order.product_price
                                )
                              )
                            )
                          ])
                        ]),
                        _vm._v(" "),
                        _c("tr", [
                          _c("th", [_vm._v("Processed by")]),
                          _vm._v(" "),
                          _c("td", [
                            _vm._v(
                              _vm._s(
                                _vm.activeOrder.order["floor_agent"]
                                  ? _vm.activeOrder.order.floor_agent.full_name
                                  : null
                              ) + "\n                                "
                            )
                          ])
                        ])
                      ])
                    ]
                  )
                ])
              ])
            : _vm._e(),
          _vm._v(" "),
          _vm._m(2)
        ])
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "modal fade", attrs: { id: "customer_info" } }, [
      _c("div", { staticClass: "modal-dialog", attrs: { role: "document" } }, [
        _c("div", { staticClass: "modal-content" }, [
          _vm._m(3),
          _vm._v(" "),
          _vm.showModalContent
            ? _c("div", { staticClass: "modal-body" }, [
                _c("div", { staticClass: "table-responsive" }, [
                  _c(
                    "table",
                    { staticClass: "table table-bordered table-striped" },
                    [
                      _c("tbody", [
                        _c("tr", [
                          _c("th", [_vm._v("Customer ID")]),
                          _vm._v(" "),
                          _c("td", [
                            _vm._v(_vm._s(_vm.activeOrder.customer.id))
                          ])
                        ]),
                        _vm._v(" "),
                        _c("tr", [
                          _c("th", [_vm._v("Full Name")]),
                          _vm._v(" "),
                          _c("td", [
                            _vm._v(
                              _vm._s(
                                _vm.$getCustomerFullName(
                                  _vm.activeOrder.customer
                                )
                              )
                            )
                          ])
                        ]),
                        _vm._v(" "),
                        _c("tr", [
                          _c("th", [_vm._v("Address")]),
                          _vm._v(" "),
                          _c("td", [
                            _vm._v(
                              _vm._s(
                                _vm.$getCustomerAddress(
                                  _vm.activeOrder.customer
                                )
                              )
                            )
                          ])
                        ]),
                        _vm._v(" "),
                        _c("tr", [
                          _c("th", [_vm._v("Phone")]),
                          _vm._v(" "),
                          _c("td", [
                            _vm._v(_vm._s(_vm.activeOrder.customer.telephone))
                          ])
                        ]),
                        _vm._v(" "),
                        _c("tr", [
                          _c("th", [_vm._v("Branch")]),
                          _vm._v(" "),
                          _c("td", [
                            _vm._v(_vm._s(_vm.activeOrder.customer.branch.name))
                          ])
                        ]),
                        _vm._v(" "),
                        _c("tr", [
                          _c("th", [_vm._v("Category")]),
                          _vm._v(" "),
                          _c("td", [
                            _vm._v(
                              _vm._s(_vm.activeOrder.customer.employment_status)
                            )
                          ])
                        ]),
                        _vm._v(" "),
                        _c("tr", [
                          _c("th", [_vm._v("Work guarantor name")]),
                          _vm._v(" "),
                          _c("td", [
                            _vm._v(
                              _vm._s(_vm.activeOrder.customerWGName) +
                                "\n                                "
                            )
                          ])
                        ]),
                        _vm._v(" "),
                        _c("tr", [
                          _c("th", [_vm._v("Work guarantor phone")]),
                          _vm._v(" "),
                          _c("td", [
                            _vm._v(
                              _vm._s(
                                _vm.activeOrder.customer.work_guarantor_telno
                              )
                            )
                          ])
                        ]),
                        _vm._v(" "),
                        _c("tr", [
                          _c("th", [_vm._v("Personal guarantor name")]),
                          _vm._v(" "),
                          _c("td", [
                            _vm._v(
                              _vm._s(_vm.activeOrder.customerPGName) +
                                "\n                                "
                            )
                          ])
                        ]),
                        _vm._v(" "),
                        _c("tr", [
                          _c("th", [_vm._v("Personal guarantor phone")]),
                          _vm._v(" "),
                          _c("td", [
                            _vm._v(
                              _vm._s(
                                _vm.activeOrder.customer
                                  .personal_guarantor_telno
                              )
                            )
                          ])
                        ]),
                        _vm._v(" "),
                        _c("tr", [
                          _c("th", [_vm._v("Verified by")]),
                          _vm._v(" "),
                          _c(
                            "td",
                            [
                              _c(
                                "router-link",
                                {
                                  staticClass: "text-link",
                                  attrs: {
                                    target: "_blank",
                                    to:
                                      "/dva/verification?id=" +
                                      _vm.activeOrder.customer.id
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n                                        click here to see verifications status\n                                    "
                                  )
                                ]
                              )
                            ],
                            1
                          )
                        ])
                      ])
                    ]
                  )
                ])
              ])
            : _vm._e(),
          _vm._v(" "),
          _vm._m(4)
        ])
      ])
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "modal fade repayment", attrs: { id: "repayment" } },
      [
        _c(
          "div",
          { staticClass: "modal-dialog modal-xl", attrs: { role: "document" } },
          [
            _vm.showModalContent
              ? _c("div", { staticClass: "modal-content" }, [
                  _c("div", { staticClass: "modal-header py-2" }, [
                    _c("h6", { staticClass: "modal-title py-1" }, [
                      _vm._v(
                        "\n                        Repayment Plan/Summary - " +
                          _vm._s(
                            _vm._f("capitalize")(
                              _vm.activeOrder.customer.employment_status
                            )
                          ) +
                          "\n                    "
                      )
                    ]),
                    _vm._v(" "),
                    _vm._m(5)
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
                          _vm._m(6),
                          _vm._v(" "),
                          _c("tr", [
                            _c("td", { staticClass: "font-weight-bold" }, [
                              _vm._v(
                                _vm._s(_vm.activeOrder.customerName) +
                                  "\n                                "
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
                      _c("h5", { staticClass: "mt-5 mb-0" }, [
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
                              _vm._l(_vm.activeOrder.dueDates, function(date) {
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
                              _vm._l(_vm.activeOrder.actualPayDates, function(
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
                              _vm._l(_vm.activeOrder.amountsToBePaid, function(
                                payment
                              ) {
                                return _c("td", [
                                  _vm._v(_vm._s(_vm.$formatCurrency(payment)))
                                ])
                              })
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
                                      _vm._s(_vm.$formatCurrency(payment)) +
                                        "\n                                "
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
                              _vm._l(_vm.activeOrder.paymentMethods, function(
                                repaymentMethod
                              ) {
                                return _c(
                                  "td",
                                  { staticClass: "text-capitalize" },
                                  [
                                    _vm._v(
                                      "\n                                    " +
                                        _vm._s(
                                          _vm.Order.convertToName(
                                            repaymentMethod,
                                            "paymentMethods"
                                          )
                                        ) +
                                        "\n                                "
                                    )
                                  ]
                                )
                              })
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
                                      "\n                                    " +
                                        _vm._s(
                                          _vm.Order.convertToName(
                                            repaymentBank,
                                            "banks"
                                          )
                                        ) +
                                        "\n                                "
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
                                  _vm._f("capitalize")(_vm.activeOrder.discount)
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
                              _vm._v(_vm._s(_vm.activeOrder.discountedTotal))
                            ]),
                            _vm._v(" "),
                            _c("td", [_vm._v("Total Debt")]),
                            _vm._v(" "),
                            _c("th", [
                              _vm._v(_vm._s(_vm.activeOrder.outstandingDebt))
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
                              _vm._v(_vm._s(_vm.activeOrder.totalPlusDefault))
                            ]),
                            _vm._v(" "),
                            _c("td", [_vm._v("Default Fee")]),
                            _vm._v(" "),
                            _c("th", [
                              _vm._v(_vm._s(_vm.activeOrder.defaultFee))
                            ])
                          ])
                        ])
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _vm._m(7)
                ])
              : _vm._e()
          ]
        )
      ]
    ),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "modal fade repayment",
        attrs: { id: "reminder_history" }
      },
      [
        _c(
          "div",
          { staticClass: "modal-dialog modal-lg", attrs: { role: "document" } },
          [
            _c("div", { staticClass: "modal-content" }, [
              _vm._m(8),
              _vm._v(" "),
              _vm.showModalContent
                ? _c("div", { staticClass: "modal-body" }, [
                    _c("div", { staticClass: "table-responsive" }, [
                      _vm.activeOrder.order.reminders.length
                        ? _c(
                            "table",
                            {
                              staticClass: "table table-bordered table-striped"
                            },
                            [
                              _vm._m(9),
                              _vm._v(" "),
                              _c(
                                "tbody",
                                _vm._l(
                                  _vm.activeOrder.order.reminders,
                                  function(reminder, index) {
                                    return _c("tr", [
                                      _c("th", [_vm._v(_vm._s(index + 1))]),
                                      _vm._v(" "),
                                      _c("td", [
                                        _vm._v(
                                          _vm._s(
                                            _vm.$dateTimeConvert(reminder.date)
                                          )
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _c("td", [_vm._v(_vm._s(reminder.type))]),
                                      _vm._v(" "),
                                      _c("td", {
                                        domProps: {
                                          innerHTML: _vm._s(
                                            _vm.Order.renderMessage(reminder)
                                          )
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c("td", [
                                        _vm._v(_vm._s(reminder.user.full_name))
                                      ])
                                    ])
                                  }
                                )
                              )
                            ]
                          )
                        : _c("div", { staticClass: "my-4 text-center" }, [
                            _vm._v(
                              "\n                            no reminders have been sent yet!\n                        "
                            )
                          ])
                    ])
                  ])
                : _vm._e(),
              _vm._v(" "),
              _vm._m(10)
            ])
          ]
        )
      ]
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "tab-pane active text-center" }, [
      _c("div", { staticClass: "mb-3 row attendance-item" }, [
        _c(
          "div",
          {
            staticClass:
              "col d-flex light-heading align-items-center justify-content-center"
          },
          [_vm._v("\n                    No records found!\n                ")]
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-header py-2" }, [
      _c("h6", { staticClass: "modal-title py-1" }, [
        _vm._v("Purchase Order Summary")
      ]),
      _vm._v(" "),
      _c(
        "a",
        {
          staticClass: "close py-1",
          attrs: { "aria-label": "Close", "data-dismiss": "modal" }
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
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-footer" }, [
      _c(
        "a",
        {
          staticClass: "text-link mt-3 w-100",
          staticStyle: { "text-align": "right" },
          attrs: { "data-dismiss": "modal", href: "javascript:" }
        },
        [_vm._v("close dialogue")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-header py-2" }, [
      _c("h6", { staticClass: "modal-title py-1" }, [
        _vm._v("Customer Info. Summary")
      ]),
      _vm._v(" "),
      _c(
        "a",
        {
          staticClass: "close py-1",
          attrs: { "aria-label": "Close", "data-dismiss": "modal" }
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
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-footer" }, [
      _c(
        "a",
        {
          staticClass: "text-link mt-3 w-100 text-right",
          attrs: { "data-dismiss": "modal", href: "#" }
        },
        [
          _vm._v(
            "\n                        close dialogue\n                    "
          )
        ]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      {
        staticClass: "close py-1",
        attrs: { "aria-label": "Close", "data-dismiss": "modal" }
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
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", { staticClass: "table-separator" }, [
      _c("td", [_vm._v("Name")]),
      _vm._v(" "),
      _c("td", [_vm._v("Order Id")]),
      _vm._v(" "),
      _c("td", [_vm._v("Product")]),
      _vm._v(" "),
      _c("th", [_vm._v("Branch")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "modal-footer d-flex justify-content-end" },
      [
        _c(
          "a",
          {
            staticClass: "text-link mt-3",
            attrs: { "data-dismiss": "modal", href: "javascript:" }
          },
          [_vm._v("close dialogue")]
        )
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-header py-2" }, [
      _c("h6", { staticClass: "modal-title py-1" }, [_vm._v("History")]),
      _vm._v(" "),
      _c(
        "a",
        {
          staticClass: "close py-1",
          attrs: { "aria-label": "Close", "data-dismiss": "modal" }
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
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("S/N")]),
        _vm._v(" "),
        _c("th", [_vm._v("Date")]),
        _vm._v(" "),
        _c("th", [_vm._v("Type")]),
        _vm._v(" "),
        _c("th", [_vm._v("SMS/Feedback")]),
        _vm._v(" "),
        _c("th", [_vm._v("sender")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-footer" }, [
      _c(
        "a",
        {
          staticClass: "text-link mt-3 w-100",
          staticStyle: { "text-align": "right" },
          attrs: { "data-dismiss": "modal", href: "javascript:" }
        },
        [_vm._v("close dialogue")]
      )
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-57fa0ac8", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-426fb2d2\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/views/DVA/reminder/reminder.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-426fb2d2\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/views/DVA/reminder/reminder.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("73a6dfad", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-426fb2d2\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./reminder.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-426fb2d2\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./reminder.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-57fa0ac8\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/Orders.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-57fa0ac8\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/Orders.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("182478d3", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-57fa0ac8\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Orders.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-57fa0ac8\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Orders.vue");
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

/***/ "./resources/assets/js/components/OrderItem.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"babel-preset-env\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"babel-plugin-syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/OrderItem.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-5522319a\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/OrderItem.vue")
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
Component.options.__file = "resources\\assets\\js\\components\\OrderItem.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5522319a", Component.options)
  } else {
    hotAPI.reload("data-v-5522319a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/js/components/Orders.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-57fa0ac8\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/Orders.vue")
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"babel-preset-env\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"babel-plugin-syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/Orders.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-57fa0ac8\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/Orders.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-57fa0ac8"
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
Component.options.__file = "resources\\assets\\js\\components\\Orders.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-57fa0ac8", Component.options)
  } else {
    hotAPI.reload("data-v-57fa0ac8", Component.options)
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
            /*helper function*/
            var fmt = function fmt(cur) {
                return vue.$formatCurrency(cur);
            },
                _order = this.order,
                repayment_amount = _order.repayment_amount,
                down_payment = _order.down_payment,
                product_price = _order.product_price;

            /*discount amount*/
            var mFactor = this.count === 6 ? 0.5 : 1,
                discount = this.order.discount.percentage_discount,
                repaymentAsDiscount = discount > 0 ? discount === 5 ? 1 : 2 : 0,
                discountAmount = vue.$roundDownAmt(repayment_amount * mFactor * repaymentAsDiscount);

            this._discountAmount = fmt(discountAmount);

            /*(total)amount paid = down payment + total repayments  + discount(if any)*/
            var amountPaid = 0,
                totalRepayments = 0;
            if (!!this.repaymentData) {
                for (var i = 0; i < this.count + 1; i++) {
                    var repayment = parseInt(this.actualAmountsPaid[i]);
                    totalRepayments += !!repayment ? vue.$roundDownAmt(repayment) : 0;
                }
                amountPaid = vue.$roundDownAmt(parseInt(down_payment)) + totalRepayments + discountAmount;
            }
            this._amountPaid = fmt(amountPaid);

            /*discounted total :: total amount to be paid - discount*/
            var discountedTotal = vue.$roundDownAmt(product_price - discountAmount);
            this._discountedTotal = fmt(discountedTotal);

            /*total default fee*/
            var amountPerDefault = 500;
            var datesDefaulted = [];
            var defaultFee = 0;
            if (new Date(this.order.order_date) > new Date('2019-07-07')) {
                //the order is a new record then use the default fee
                /**this is where the calculation for the default fee goes into*/
                /*this.dueDates.forEach((dueDate, index) =>
                Order.isPaymentDue(vue.$getDate(new Date(dueDate).addDays(5))) &&
                datesDefaulted.push({dueDate, actualPayDate: this.actualPayDates[index]}));*/
                defaultFee = datesDefaulted.length * amountPerDefault;
            }
            this._defaultFee = fmt(defaultFee);

            /*total plus default*/
            this._totalPlusDefault = fmt(discountedTotal + defaultFee);

            /*outstanding debt*/
            this._outstandingDebt = fmt(vue.$roundDownAmt(parseInt(product_price) - amountPaid));
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

        var _this2 = _possibleConstructorReturn(this, (OrderWithPromiseCall.__proto__ || Object.getPrototypeOf(OrderWithPromiseCall)).call(this, order, order.customer));

        _this2._isReminderSent = false;
        _this2._dvaId = dvaId;
        _this2._isSelected = false;
        _this2.setReminder(null);
        _this2.setIsReminderSent();
        _this2.setFinancialStatus();
        _this2.setPromiseCall();
        _this2.generateAndSetNextSMSReminder();
        return _this2;
    }

    /*custom setters*/


    _createClass(OrderWithPromiseCall, [{
        key: 'setIsReminderSent',
        value: function setIsReminderSent() {
            var _this3 = this;

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
                date === today && (_this3._isReminderSent = true);
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
            var _order2 = this.order,
                store_product = _order2.store_product,
                repayment_amount = _order2.repayment_amount,
                customer = _order2.customer,
                order_date = _order2.order_date,
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
                'feedback': null,
                'is_visited': null,
                'dva_id': this.dvaId,
                'order_id': this.order.id,
                'customer_id': this.customer.id,
                'canBeSelected': !this.isReminderSent,
                'repayment_level': this.repaymentLevel + "/" + this.count
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

/***/ "./resources/assets/js/utilities/sms.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Message = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _api = __webpack_require__("./resources/assets/js/utilities/api.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Message = exports.Message = function () {
    function Message(message, contacts) {
        var logToDB = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
        var userId = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

        _classCallCheck(this, Message);

        this.user_id = userId;
        this.message = message;
        this.logToDB = logToDB;
        this.contacts = contacts.split(",").filter(function (e) {
            return (/\S/.test(e)
            );
        }).map(function (contact) {
            return '234' + contact.trim().substr(1);
        }).join(',');
        this.setPages();
        this.setContactCount();
    }

    _createClass(Message, [{
        key: "setContactCount",
        value: function setContactCount() {
            this.contact_count = this.contacts.split(',').length;
        }
    }, {
        key: "setPages",
        value: function setPages() {
            this.pages = Math.ceil(this.message.length / 160);
        }
    }, {
        key: "send",
        value: function send(callback) {
            var _this = this;

            (0, _api.get)("/api/message/create?to=" + this.contacts + "&message=" + this.message).then(function (res) {
                if (res.status === 200 && _this.logToDB) {
                    delete _this.logToDB;
                    (0, _api.post)('/api/message', _this);
                }
                return !!callback && callback(res);
            }).catch(function (err) {
                return !!callback && callback(err);
            });
        }
    }]);

    return Message;
}();

/***/ }),

/***/ "./resources/assets/js/views/DVA/reminder/reminder.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-426fb2d2\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/views/DVA/reminder/reminder.vue")
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"babel-preset-env\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"babel-plugin-syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/views/DVA/reminder/reminder.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-426fb2d2\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/views/DVA/reminder/reminder.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-426fb2d2"
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
Component.options.__file = "resources\\assets\\js\\views\\DVA\\reminder\\reminder.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-426fb2d2", Component.options)
  } else {
    hotAPI.reload("data-v-426fb2d2", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});
=======
webpackJsonp([5],{"3iS+":function(t,e,r){(t.exports=r("FZ+f")(!1)).push([t.i,".attendance-head .light-heading[data-v-1ab70cbf]:first-child{max-width:120px}",""])},"6zdI":function(t,e,r){var a=r("7q3F");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);r("rjj0")("74075c66",a,!0,{})},"7elN":function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a,n=r("p/p5"),s=r("K23+"),i=(a=s)&&a.__esModule?a:{default:a},o=(r("nv24"),r("rN6N"));e.default={props:{mode:null,index:null,startIndex:{default:1},order:{default:null,type:o.Order}},created:function(){this.order.setReminder(this.mode)},methods:{logReminder:function(){var t=this;this.$LIPS(!0),delete this.order.reminder.order,delete this.order.reminder.canBeSelected,(0,n.post)("/api/reminder",{reminders:[this.order.reminder]}).then(function(e){return e.data.saved&&t.logPromiseCall()}).catch(function(){return t.$displayErrorMessage("Error Logging reminders!")})},logPromiseCall:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Reminder Logged!";this.order.promiseCall.date?(0,n.post)("/api/promise_call",this.order.promiseCall).then(function(r){return r.data.saved&&t.done(e+" Promise call added!")}).catch(function(){return t.$displayErrorMessage("Error Logging promise call!")}):this.done(e)},done:function(t){this.$scrollToTop(),i.default.setSuccess(t,5e3),this.$emit("done")},toggleSelect:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;this.order.reminder.canBeSelected&&(this.order.isSelected=null!==t?t:!this.order.isSelected)}}}},"7q3F":function(t,e,r){(t.exports=r("FZ+f")(!1)).push([t.i,".table-separator[data-v-52eb9e48]{border-top:2px solid #dee1e4}",""])},LFDu:function(t,e,r){var a=r("3iS+");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);r("rjj0")("e2ce9f04",a,!0,{})},O8Vz:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t.show?r("div",{staticClass:"tab-content mt-1 attendance-body"},[r("div",{staticClass:"tab-pane active text-center",attrs:{id:"reminder-panel",role:"tabpanel"}},t._l(t.orders,function(e,a){return r("order-item",{key:e.order.id,attrs:{index:a,"start-index":t.startIndex,order:e,mode:t.mode},on:{done:function(e){t.fetchList(t.list)},display:t.displayDetails}})})),t._v(" "),"normal-list"!=t.mode?r("div",{staticClass:"w-100 my-5 mx-0 hr"}):t._e()]):r("div",{staticClass:"tab-content mt-1 attendance-body"},[t._m(0)]),t._v(" "),t.show&&"sms"===t.mode?r("div",{staticClass:"mt-1 attendance-body"},[r("div",{staticClass:"mb-5 px-0 row align-items-center"},[r("div",{staticClass:"clearfix d-flex justify-content-end w-100"},[r("button",{staticClass:"btn bg-default",attrs:{disabled:t.$isProcessing},on:{click:t.processSelected}},[t._v("\n                    Send Reminder(s) "),r("i",{staticClass:"far fa-paper-plane ml-1"})])])])]):t._e(),t._v(" "),r("div",{staticClass:"modal fade",attrs:{id:"purchase_order"}},[r("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[r("div",{staticClass:"modal-content"},[t._m(1),t._v(" "),t.showModalContent?r("div",{staticClass:"modal-body"},[r("div",{staticClass:"table-responsive"},[r("table",{staticClass:"table table-bordered table-striped"},[r("tbody",[r("tr",[r("th",[t._v("Order ID")]),t._v(" "),r("td",[t._v(t._s(t.activeOrder.order.id))])]),t._v(" "),r("tr",[r("th",[t._v("Order date")]),t._v(" "),r("td",[t._v(t._s(t.activeOrder.order.order_date))])]),t._v(" "),r("tr",[r("th",[t._v("Product")]),t._v(" "),r("td",[t._v(t._s(t.activeOrder.order.store_product.product_name))])]),t._v(" "),r("tr",[r("th",[t._v("Repayment")]),t._v(" "),r("td",[t._v(t._s(t.$formatCurrency(t.activeOrder.amountsToBePaid[0])))])]),t._v(" "),r("tr",[r("th",[t._v("Down Payment")]),t._v(" "),r("td",[t._v(t._s(t.$formatCurrency(t.activeOrder.order.down_payment)))])]),t._v(" "),r("tr",[r("th",[t._v("Discount (%)")]),t._v(" "),r("td",[t._v(t._s(t._f("capitalize")(t.activeOrder.discount)))])]),t._v(" "),r("tr",[r("th",[t._v("Sale Type")]),t._v(" "),r("td",[t._v(t._s(t._f("capitalize")(t.activeOrder.order.sales_type.name)))])]),t._v(" "),r("tr",[r("th",[t._v("Total amount to Pay")]),t._v(" "),r("td",[t._v(t._s(t.$formatCurrency(t.activeOrder.order.product_price)))])]),t._v(" "),r("tr",[r("th",[t._v("Processed by")]),t._v(" "),r("td",[t._v(t._s(t.activeOrder.order.floor_agent?t.activeOrder.order.floor_agent.full_name:null)+"\n                                ")])])])])])]):t._e(),t._v(" "),t._m(2)])])]),t._v(" "),r("div",{staticClass:"modal fade",attrs:{id:"customer_info"}},[r("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[r("div",{staticClass:"modal-content"},[t._m(3),t._v(" "),t.showModalContent?r("div",{staticClass:"modal-body"},[r("div",{staticClass:"table-responsive"},[r("table",{staticClass:"table table-bordered table-striped"},[r("tbody",[r("tr",[r("th",[t._v("Customer ID")]),t._v(" "),r("td",[t._v(t._s(t.activeOrder.customer.id))])]),t._v(" "),r("tr",[r("th",[t._v("Full Name")]),t._v(" "),r("td",[t._v(t._s(t.$getCustomerFullName(t.activeOrder.customer)))])]),t._v(" "),r("tr",[r("th",[t._v("Address")]),t._v(" "),r("td",[t._v(t._s(t.$getCustomerAddress(t.activeOrder.customer)))])]),t._v(" "),r("tr",[r("th",[t._v("Phone")]),t._v(" "),r("td",[t._v(t._s(t.activeOrder.customer.telephone))])]),t._v(" "),r("tr",[r("th",[t._v("Branch")]),t._v(" "),r("td",[t._v(t._s(t.activeOrder.customer.branch.name))])]),t._v(" "),r("tr",[r("th",[t._v("Category")]),t._v(" "),r("td",[t._v(t._s(t.activeOrder.customer.employment_status))])]),t._v(" "),r("tr",[r("th",[t._v("Work guarantor name")]),t._v(" "),r("td",[t._v(t._s(t.activeOrder.customerWGName)+"\n                                ")])]),t._v(" "),r("tr",[r("th",[t._v("Work guarantor phone")]),t._v(" "),r("td",[t._v(t._s(t.activeOrder.customer.work_guarantor_telno))])]),t._v(" "),r("tr",[r("th",[t._v("Personal guarantor name")]),t._v(" "),r("td",[t._v(t._s(t.activeOrder.customerPGName)+"\n                                ")])]),t._v(" "),r("tr",[r("th",[t._v("Personal guarantor phone")]),t._v(" "),r("td",[t._v(t._s(t.activeOrder.customer.personal_guarantor_telno))])]),t._v(" "),r("tr",[r("th",[t._v("Verified by")]),t._v(" "),r("td",[r("router-link",{staticClass:"text-link",attrs:{target:"_blank",to:"/dva/verification?id="+t.activeOrder.customer.id}},[t._v("\n                                        click here to see verifications status\n                                    ")])],1)])])])])]):t._e(),t._v(" "),t._m(4)])])]),t._v(" "),r("div",{staticClass:"modal fade repayment",attrs:{id:"repayment"}},[r("div",{staticClass:"modal-dialog modal-xl",attrs:{role:"document"}},[t.showModalContent?r("div",{staticClass:"modal-content"},[r("div",{staticClass:"modal-header py-2"},[r("h6",{staticClass:"modal-title py-1"},[t._v("\n                        Repayment Plan/Summary - "+t._s(t._f("capitalize")(t.activeOrder.customer.employment_status))+"\n                    ")]),t._v(" "),t._m(5)]),t._v(" "),r("div",{staticClass:"modal-body"},[r("div",{staticClass:"table-responsive"},[r("h5",{staticClass:"mt-3 mb-0"},[t._v("Order Information")]),t._v(" "),r("table",{staticClass:"table table-bordered"},[r("tbody",[t._m(6),t._v(" "),r("tr",[r("td",{staticClass:"font-weight-bold"},[t._v(t._s(t.activeOrder.customerName)+"\n                                ")]),t._v(" "),r("th",[t._v(t._s(t.activeOrder.order.id))]),t._v(" "),r("th",[t._v(t._s(t.activeOrder.order.store_product.product_name))]),t._v(" "),r("td",{staticClass:"font-weight-bold"},[t._v(t._s(t.activeOrder.branch.name))])])])]),t._v(" "),r("h5",{staticClass:"mt-5 mb-0"},[t._v("Amortization Schedule")]),t._v(" "),r("table",{staticClass:"table table-bordered"},[r("tbody",{staticClass:"text-center"},[r("tr",[r("th",[t._v("Repayment")]),t._v(" "),t._l(t.activeOrder.repaymentCaptions,function(e){return r("td",{domProps:{innerHTML:t._s(e)}})})],2),t._v(" "),r("tr",{staticClass:"table-separator"},[r("th",[t._v("Due Date")]),t._v(" "),t._l(t.activeOrder.dueDates,function(e){return r("td",[t._v(t._s(e))])})],2),t._v(" "),r("tr",[r("th",[t._v("Actual Pay Day")]),t._v(" "),t._l(t.activeOrder.actualPayDates,function(e){return r("td",[t._v(t._s(e))])})],2),t._v(" "),r("tr",{staticClass:"table-separator"},[r("th",[t._v("Status")]),t._v(" "),t._l(t.activeOrder.paymentStatusClasses,function(t){return r("td",{class:t.class},[r("i",{staticClass:"fas",class:t.icon})])})],2),t._v(" "),r("tr",{staticClass:"table-separator"},[r("th",[t._v("Repayment Amount")]),t._v(" "),t._l(t.activeOrder.amountsToBePaid,function(e){return r("td",[t._v(t._s(t.$formatCurrency(e)))])})],2),t._v(" "),r("tr",[r("th",[t._v("Actual Amount Paid")]),t._v(" "),t._l(t.activeOrder.actualAmountsPaid,function(e){return r("td",[t._v(t._s(t.$formatCurrency(e))+"\n                                ")])})],2),t._v(" "),r("tr",{staticClass:"table-separator"},[r("th",[t._v("Payment Method")]),t._v(" "),t._l(t.activeOrder.paymentMethods,function(e){return r("td",{staticClass:"text-capitalize"},[t._v("\n                                    "+t._s(t.Order.convertToName(e,"paymentMethods"))+"\n                                ")])})],2),t._v(" "),r("tr",[r("th",[t._v("Bank")]),t._v(" "),t._l(t.activeOrder.paymentBanks,function(e){return r("td",{staticClass:"text-capitalize"},[t._v("\n                                    "+t._s(t.Order.convertToName(e,"banks"))+"\n                                ")])})],2)])]),t._v(" "),r("h5",{staticClass:"mt-5 mb-0"},[t._v("Payment Summary")]),t._v(" "),r("table",{staticClass:"table table-bordered"},[r("tbody",{staticClass:"text-center"},[r("tr",{staticClass:"table-separator"},[r("td",{staticClass:"text-left"},[t._v("Discount Detail (%)")]),t._v(" "),r("th",[t._v(t._s(t._f("capitalize")(t.activeOrder.discount)))]),t._v(" "),r("td",[t._v("Total Before Discount")]),t._v(" "),r("th",[t._v(t._s(t.$formatCurrency(t.$roundDownAmt(t.activeOrder.order.product_price))))]),t._v(" "),r("td",[t._v("Total Paid")]),t._v(" "),r("th",[t._v(t._s(t.activeOrder.amountPaid))])]),t._v(" "),r("tr",[r("td",{staticClass:"text-left"},[t._v("Discount Amount")]),t._v(" "),r("th",[t._v(t._s(t.activeOrder.discountAmount))]),t._v(" "),r("td",[t._v("Total After Discount")]),t._v(" "),r("th",[t._v(t._s(t.activeOrder.discountedTotal))]),t._v(" "),r("td",[t._v("Total Debt")]),t._v(" "),r("th",[t._v(t._s(t.activeOrder.outstandingDebt))])]),t._v(" "),r("tr",[r("td",{staticClass:"text-left"},[t._v("Down Payment")]),t._v(" "),r("th",[t._v(t._s(t.$formatCurrency(t.$roundDownAmt(t.activeOrder.order.down_payment))))]),t._v(" "),r("td",[t._v("Total Plus Default Fee")]),t._v(" "),r("th",[t._v(t._s(t.activeOrder.totalPlusDefault))]),t._v(" "),r("td",[t._v("Default Fee")]),t._v(" "),r("th",[t._v(t._s(t.activeOrder.defaultFee))])])])])])]),t._v(" "),t._m(7)]):t._e()])]),t._v(" "),r("div",{staticClass:"modal fade repayment",attrs:{id:"reminder_history"}},[r("div",{staticClass:"modal-dialog modal-lg",attrs:{role:"document"}},[r("div",{staticClass:"modal-content"},[t._m(8),t._v(" "),t.showModalContent?r("div",{staticClass:"modal-body"},[r("div",{staticClass:"table-responsive"},[t.activeOrder.order.reminders.length?r("table",{staticClass:"table table-bordered table-striped"},[t._m(9),t._v(" "),r("tbody",t._l(t.activeOrder.order.reminders,function(e,a){return r("tr",[r("th",[t._v(t._s(a+1))]),t._v(" "),r("td",[t._v(t._s(t.$dateTimeConvert(e.date)))]),t._v(" "),r("td",[t._v(t._s(e.type))]),t._v(" "),r("td",{domProps:{innerHTML:t._s(t.Order.renderMessage(e))}}),t._v(" "),r("td",[t._v(t._s(e.user.full_name))])])}))]):r("div",{staticClass:"my-4 text-center"},[t._v("\n                            no reminders have been sent yet!\n                        ")])])]):t._e(),t._v(" "),t._m(10)])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"tab-pane active text-center"},[e("div",{staticClass:"mb-3 row attendance-item"},[e("div",{staticClass:"col d-flex light-heading align-items-center justify-content-center"},[this._v("\n                    No records found!\n                ")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"modal-header py-2"},[e("h6",{staticClass:"modal-title py-1"},[this._v("Purchase Order Summary")]),this._v(" "),e("a",{staticClass:"close py-1",attrs:{"aria-label":"Close","data-dismiss":"modal"}},[e("span",{staticClass:"modal-close text-danger",attrs:{"aria-hidden":"true"}},[e("i",{staticClass:"fas fa-times"})])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"modal-footer"},[e("a",{staticClass:"text-link mt-3 w-100",staticStyle:{"text-align":"right"},attrs:{"data-dismiss":"modal",href:"javascript:"}},[this._v("close dialogue")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"modal-header py-2"},[e("h6",{staticClass:"modal-title py-1"},[this._v("Customer Info. Summary")]),this._v(" "),e("a",{staticClass:"close py-1",attrs:{"aria-label":"Close","data-dismiss":"modal"}},[e("span",{staticClass:"modal-close text-danger",attrs:{"aria-hidden":"true"}},[e("i",{staticClass:"fas fa-times"})])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"modal-footer"},[e("a",{staticClass:"text-link mt-3 w-100 text-right",attrs:{"data-dismiss":"modal",href:"#"}},[this._v("\n                        close dialogue\n                    ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"close py-1",attrs:{"aria-label":"Close","data-dismiss":"modal"}},[e("span",{staticClass:"modal-close text-danger",attrs:{"aria-hidden":"true"}},[e("i",{staticClass:"fas fa-times"})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",{staticClass:"table-separator"},[e("td",[this._v("Name")]),this._v(" "),e("td",[this._v("Order Id")]),this._v(" "),e("td",[this._v("Product")]),this._v(" "),e("th",[this._v("Branch")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"modal-footer d-flex justify-content-end"},[e("a",{staticClass:"text-link mt-3",attrs:{"data-dismiss":"modal",href:"javascript:"}},[this._v("close dialogue")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"modal-header py-2"},[e("h6",{staticClass:"modal-title py-1"},[this._v("History")]),this._v(" "),e("a",{staticClass:"close py-1",attrs:{"aria-label":"Close","data-dismiss":"modal"}},[e("span",{staticClass:"modal-close text-danger",attrs:{"aria-hidden":"true"}},[e("i",{staticClass:"fas fa-times"})])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("thead",[r("tr",[r("th",[t._v("S/N")]),t._v(" "),r("th",[t._v("Date")]),t._v(" "),r("th",[t._v("Type")]),t._v(" "),r("th",[t._v("SMS/Feedback")]),t._v(" "),r("th",[t._v("sender")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"modal-footer"},[e("a",{staticClass:"text-link mt-3 w-100",staticStyle:{"text-align":"right"},attrs:{"data-dismiss":"modal",href:"javascript:"}},[this._v("close dialogue")])])}]}},SldL:function(t,e){!function(e){"use strict";var r,a=Object.prototype,n=a.hasOwnProperty,s="function"==typeof Symbol?Symbol:{},i=s.iterator||"@@iterator",o=s.asyncIterator||"@@asyncIterator",l=s.toStringTag||"@@toStringTag",c="object"==typeof t,d=e.regeneratorRuntime;if(d)c&&(t.exports=d);else{(d=e.regeneratorRuntime=c?t.exports:{}).wrap=b;var u="suspendedStart",m="suspendedYield",h="executing",v="completed",f={},_={};_[i]=function(){return this};var p=Object.getPrototypeOf,y=p&&p(p(E([])));y&&y!==a&&n.call(y,i)&&(_=y);var g=w.prototype=k.prototype=Object.create(_);x.prototype=g.constructor=w,w.constructor=x,w[l]=x.displayName="GeneratorFunction",d.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===x||"GeneratorFunction"===(e.displayName||e.name))},d.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,w):(t.__proto__=w,l in t||(t[l]="GeneratorFunction")),t.prototype=Object.create(g),t},d.awrap=function(t){return{__await:t}},O(D.prototype),D.prototype[o]=function(){return this},d.AsyncIterator=D,d.async=function(t,e,r,a){var n=new D(b(t,e,r,a));return d.isGeneratorFunction(e)?n:n.next().then(function(t){return t.done?t.value:n.next()})},O(g),g[l]="Generator",g[i]=function(){return this},g.toString=function(){return"[object Generator]"},d.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var a=e.pop();if(a in t)return r.value=a,r.done=!1,r}return r.done=!0,r}},d.values=E,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach($),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function a(a,n){return o.type="throw",o.arg=t,e.next=a,n&&(e.method="next",e.arg=r),!!n}for(var s=this.tryEntries.length-1;s>=0;--s){var i=this.tryEntries[s],o=i.completion;if("root"===i.tryLoc)return a("end");if(i.tryLoc<=this.prev){var l=n.call(i,"catchLoc"),c=n.call(i,"finallyLoc");if(l&&c){if(this.prev<i.catchLoc)return a(i.catchLoc,!0);if(this.prev<i.finallyLoc)return a(i.finallyLoc)}else if(l){if(this.prev<i.catchLoc)return a(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return a(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var s=a;break}}s&&("break"===t||"continue"===t)&&s.tryLoc<=e&&e<=s.finallyLoc&&(s=null);var i=s?s.completion:{};return i.type=t,i.arg=e,s?(this.method="next",this.next=s.finallyLoc,f):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),$(r),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var a=r.completion;if("throw"===a.type){var n=a.arg;$(r)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,a){return this.delegate={iterator:E(t),resultName:e,nextLoc:a},"next"===this.method&&(this.arg=r),f}}}function b(t,e,r,a){var n=e&&e.prototype instanceof k?e:k,s=Object.create(n.prototype),i=new L(a||[]);return s._invoke=function(t,e,r){var a=u;return function(n,s){if(a===h)throw new Error("Generator is already running");if(a===v){if("throw"===n)throw s;return T()}for(r.method=n,r.arg=s;;){var i=r.delegate;if(i){var o=S(i,r);if(o){if(o===f)continue;return o}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(a===u)throw a=v,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);a=h;var l=C(t,e,r);if("normal"===l.type){if(a=r.done?v:m,l.arg===f)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(a=v,r.method="throw",r.arg=l.arg)}}}(t,r,i),s}function C(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}function k(){}function x(){}function w(){}function O(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function D(t){var e;this._invoke=function(r,a){function s(){return new Promise(function(e,s){!function e(r,a,s,i){var o=C(t[r],t,a);if("throw"!==o.type){var l=o.arg,c=l.value;return c&&"object"==typeof c&&n.call(c,"__await")?Promise.resolve(c.__await).then(function(t){e("next",t,s,i)},function(t){e("throw",t,s,i)}):Promise.resolve(c).then(function(t){l.value=t,s(l)},i)}i(o.arg)}(r,a,e,s)})}return e=e?e.then(s,s):s()}}function S(t,e){var a=t.iterator[e.method];if(a===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=r,S(t,e),"throw"===e.method))return f;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return f}var n=C(a,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,f;var s=n.arg;return s?s.done?(e[t.resultName]=s.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,f):s:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function P(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function $(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function L(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(P,this),this.reset(!0)}function E(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var a=-1,s=function e(){for(;++a<t.length;)if(n.call(t,a))return e.value=t[a],e.done=!1,e;return e.value=r,e.done=!0,e};return s.next=s}}return{next:T}}function T(){return{value:r,done:!0}}}(function(){return this}()||Function("return this")())},TZKk:function(t,e,r){var a=r("VU/8")(r("7elN"),r("b4Eb"),!1,null,null,null);t.exports=a.exports},XPj8:function(t,e,r){var a=r("VU/8")(r("aSpy"),r("O8Vz"),!1,function(t){r("6zdI")},"data-v-52eb9e48",null);t.exports=a.exports},Xxa5:function(t,e,r){t.exports=r("jyFz")},aSpy:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=m(r("Xxa5")),n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(t[a]=r[a])}return t},s=m(r("I3G/")),i=r("NYxO"),o=m(r("K23+")),l=r("m2tk"),c=r("p/p5"),d=m(r("TZKk")),u=r("rN6N");function m(t){return t&&t.__esModule?t:{default:t}}function h(t){return function(){var e=t.apply(this,arguments);return new Promise(function(t,r){return function a(n,s){try{var i=e[n](s),o=i.value}catch(t){return void r(t)}if(!i.done)return Promise.resolve(o).then(function(t){a("next",t)},function(t){a("throw",t)});t(o)}("next")})}}e.default={components:{OrderItem:d.default},props:{list:{default:null},mode:null,preLoadedOrder:null,startIndex:null},watch:{list:function(t){this.fetchList(t)},preLoadedOrder:function(t){this.prepareForm(t)}},data:function(){return{orders:[],show:!1,showModalContent:!1,Order:u.Order,activeOrder:null}},computed:n({},(0,i.mapGetters)(["auth"])),methods:{prepareForm:function(){var t=h(a.default.mark(function t(e){var r=this;return a.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this.show=!1,this.showModalContent=!1,this.orders=[],t.next=5,e.orders.forEach(function(t){console.log(t instanceof u.Order);var a=t instanceof u.Order?t:new u.OrderWithPromiseCall(t,e.dva_id);(r.auth("DVALead")||r.auth("FSLLead")||r.auth("CAGAccess")||parseInt(a.order.store_product.store_name)===e.branch)&&function(){if([8,1].includes(r.list)||"normal-list"===r.mode)return!0;var t=void 0,e=void 0,n=[],s=new Date,i=1===s.getDay()||[9,10,11,12,13,14].includes(r.list)?3:1;if(!a.repaymentData)return!1;for(var o=1;o<a.count+1;o++){var l=r.$getColumn(o);if(!a.repaymentData[l+"_pay"]){t=u.OrderWithPromiseCall.generateDueDates(a.order.order_date,a.interval,a.count)[o-1];break}}switch(r.list){case 2:e=7;break;case 3:e=3;break;case 4:e=0;break;case 5:e=1;break;case 6:e=5;break;case 7:e=31;break;case 9:e=38;break;case 10:e=45;break;case 11:e=61;break;case 12:e=75;break;case 13:e=90;break;case 14:e=121}if(["collection","recovery","call","external-recovery"].includes(r.mode))for(var c=0;c<i;c++)n.push(r.$getDate(s.addDays(-(c+e))));if("sms"===r.mode)for(var d=0;d<i;d++)n.push(r.$getDate(s.addDays(d+e)));return n.includes(t)}()&&r.orders.push(a)});case 5:this.orders.length&&(this.show=!0),this.$LIPS(!1);case 7:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),fetchList:function(t){var e,r=this;this.$LIPS(!0),(0,c.get)((e={query:{list:t}},"/api/reminder/create?list="+e.query.list)).then(function(e){var a=e.data;8===t&&(a.orders=a.orders.map(function(t){return t.order})),r.prepareForm(a)})},displayDetails:function(){var t=h(a.default.mark(function t(e,r){return a.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.default.set(this.$data,"activeOrder",e);case 2:return this.showModalContent=!0,t.abrupt("return",$("#"+r).modal("toggle"));case 4:case"end":return t.stop()}},t,this)}));return function(e,r){return t.apply(this,arguments)}}(),processSelected:function(){this.$LIPS(!0);var t=this.orders.filter(function(t){return t.isSelected});if(!t.length)return this.$displayErrorMessage("please select at least one!"),this.$LIPS(!1);this.sendSMSReminders(t)},sendSMSReminders:function(t){var e=this,r=[];t.forEach(function(a,n){var s=new l.Message(a.nextSMSReminder,a.reminder.contacts,!1,a.dvaId);s.send(function(a){200===a.status&&(delete s.logToDB,r.push(s)),n+1===t.length&&e.logSentMessages(t,r)})})},logSentMessages:function(t,e){var r=this;e.length>0?(0,c.post)("/api/message",{messages:e,bulk:!0}).then(function(e){var a=e.data,n=a.sentAndLogged,s=a.ids;n?r.logSentReminders(t,s):r.$displayErrorMessage("Error Logging sent sms details!")}):this.$displayErrorMessage("Error sending messages!")},logSentReminders:function(t,e){var r=this;if(e.reverse(),e.length>0){var a=t.map(function(t,r){return t.reminder.sms_id=e[r],delete t.reminder.contacts,delete t.reminder.canBeSelected,t.reminder});(0,c.post)("/api/reminder",{reminders:a}).then(function(t){t.data.saved?(o.default.setSuccess("Reminders have been sent successfully!",5e4),r.fetchList(r.list)):r.$displayErrorMessage("Error sending reminders!"),r.$scrollToTop()})}else this.$displayErrorMessage("Error logging sent messages!")}},mounted:function(){var t=this;"normal-list"!=this.mode?this.fetchList(this.list):this.prepareForm(this.preLoadedOrder),$(document).on("hidden.bs.modal",".modal",function(){t.activeOrder=null,t.showModalContent=!1})},created:function(){this.$prepareBanks(),this.$prepareBranches(),this.$preparePaymentMethods()}}},b4Eb:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"mb-3 row attendance-item"},[r("div",{staticClass:"col-12 col-xs-2 col-md col-lg d-flex align-items-center",staticStyle:{"max-width":"120px"}},["normal-list"===t.mode?r("span"):t.order.reminder.canBeSelected&&["collection","recovery","call","external-recovery"].includes(t.mode)?r("span",{staticClass:"user mx-auto bg-pending text-white",on:{click:t.logReminder}},[r("i",{staticClass:"fas fa-hourglass-start"})]):t.order.reminder.canBeSelected&&"sms"===t.mode?r("div",{staticClass:"d-flex align-items-center"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.order.isSelected,expression:"order.isSelected"}],staticClass:"form-check-input my-0 mx-4 float-left position-relative ",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.order.isSelected)?t._i(t.order.isSelected,null)>-1:t.order.isSelected},on:{click:t.toggleSelect,change:function(e){var r=t.order.isSelected,a=e.target,n=!!a.checked;if(Array.isArray(r)){var s=t._i(r,null);a.checked?s<0&&t.$set(t.order,"isSelected",r.concat([null])):s>-1&&t.$set(t.order,"isSelected",r.slice(0,s).concat(r.slice(s+1)))}else t.$set(t.order,"isSelected",n)}}})]):r("span",{staticClass:"user mx-auto sent-reminder"},[r("i",{staticClass:"fas fa-check"})]),t._v(" "),r("span",{staticClass:"user mx-auto"},[t._v(t._s(t.startIndex+t.index))])]),t._v(" "),r("div",{staticClass:"col-12 col-xs-2 col-md col-lg user-name d-flex align-items-center justify-content-center"},[t._v("\n        "+t._s(t.$vnode.key)+"\n    ")]),t._v(" "),r("div",{staticClass:"col-12 col-xs-2 col-md col-lg d-flex align-items-center justify-content-center",attrs:{"data-hoverable":"true"},on:{click:function(e){t.$emit("display",t.order,"purchase_order")}}},[t._v("\n        "+t._s(t.order.order.order_date)+"\n    ")]),t._v(" "),r("div",{staticClass:"col-12 col-xs-3 col-md col-lg d-flex align-items-center justify-content-center",attrs:{"data-hoverable":"true"},on:{click:function(e){t.$emit("display",t.order,"customer_info")}}},[t._v("\n        ID: "+t._s(t.order.customer.id)+" - "+t._s(t._f("capitalize")(t.order.customer.employment_status))+"\n    ")]),t._v(" "),r("div",{staticClass:"col-12 col-xs-2 col-md col-lg d-flex align-items-center justify-content-center",attrs:{"data-hoverable":"true"},on:{click:function(e){t.$emit("display",t.order,"repayment")}}},[t._v("\n        "+t._s(t.order.financialStatus)+"\n    ")]),t._v(" "),r("div",{staticClass:"col-12 col-xs-2 col-md col-lg d-flex align-items-center justify-content-center",attrs:{"data-hoverable":"true"},on:{click:function(e){t.$emit("display",t.order,"reminder_history")}}},[t._v("\n        "+t._s(t.order.order.reminders.length)+" reminder(s) sent\n    ")]),t._v(" "),["collection","recovery","external-recovery"].includes(t.mode)?r("div",{staticClass:"col-12 col-xs-2 col-md col-lg d-flex align-items-center attendance-create"},[r("span",{staticClass:"present"},[r("span",{staticClass:"radio w-50 pr-3 mb-0 float-left"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.order.reminder.is_visited,expression:"order.reminder.is_visited"}],attrs:{type:"radio",id:"present"+t.index,name:"isPresent"+t.index},domProps:{value:!0,checked:t._q(t.order.reminder.is_visited,!0)},on:{change:function(e){t.$set(t.order.reminder,"is_visited",!0)}}}),t._v(" "),r("label",{attrs:{for:"present"+t.index}},[t._v("yes")])]),t._v(" "),r("span",{staticClass:"radio w-50 pl-3 mb-0 float-left"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.order.reminder.is_visited,expression:"order.reminder.is_visited"}],attrs:{type:"radio",id:"absent"+t.index,name:"isPresent"+t.index},domProps:{value:!1,checked:t._q(t.order.reminder.is_visited,!1)},on:{change:function(e){t.$set(t.order.reminder,"is_visited",!1)}}}),t._v(" "),r("label",{attrs:{for:"absent"+t.index}},[t._v("no")])])])]):t._e(),t._v(" "),["collection","recovery","call","external-recovery"].includes(t.mode)?r("div",{staticClass:"col-12 col-xs-2 col-md col-lg d-flex align-items-center"},[r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.order.reminder.feedback,expression:"order.reminder.feedback"}],staticClass:"form-control",attrs:{rows:"1",disabled:!t.order.reminder.canBeSelected},domProps:{value:t.order.reminder.feedback},on:{input:function(e){e.target.composing||t.$set(t.order.reminder,"feedback",e.target.value)}}})]):t._e(),t._v(" "),"call"===t.mode?r("div",{staticClass:"col-12 col-xs-2 col-md col-lg d-flex align-items-center"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.order.promiseCall.date,expression:"order.promiseCall.date"}],staticClass:"form-control",attrs:{type:"date",disabled:!t.order.reminder.canBeSelected},domProps:{value:t.order.promiseCall.date},on:{input:function(e){e.target.composing||t.$set(t.order.promiseCall,"date",e.target.value)}}})]):t._e()])},staticRenderFns:[]}},dBli:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a,n=r("XPj8"),s=(a=n)&&a.__esModule?a:{default:a};function i(t){if(Array.isArray(t)){for(var e=0,r=Array(t.length);e<t.length;e++)r[e]=t[e];return r}return Array.from(t)}e.default={components:{Order:s.default},data:function(){return{listToOrder:null}},methods:{mode:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.$route.meta.mode.toLowerCase();return t?e===t:e}},computed:{details:function(){var t=1,e=["1<sup>st</sup>","2<sup>nd</sup>","3<sup>rd</sup>"],r=["Order Number","Order Summary","Customer Info Summary","Repayment Summary","History"];switch(this.mode()){case"call":t=4,e=[].concat(i(e),["Guarantor's"]),r=[].concat(i(r),["Feedback","Promise Date"]);break;case"collection":t=9,e.splice(2,1),r=[].concat(i(r),["Visited?","Feedback"]);break;case"recovery":t=11,r=[].concat(i(r),["Visited?","Feedback"]);break;case"external-recovery":t=14,e.splice(1,2),r=[].concat(i(r),["Delivered Letter?","Feedback"])}return this.mode("call")?this.listToOrder=8:this.listToOrder||(this.listToOrder=t),{tabs:e,headings:r,list:t}}}}},flWo:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("transition",{attrs:{name:"fade"}},[r("div",{attrs:{id:"reminder"}},[r("div",{staticClass:"mt-5 mb-3 attendance-head"},[r("ul",{staticClass:"nav nav-tabs justify-content-center p-0",attrs:{role:"tablist"}},[t.mode("call")?r("li",{staticClass:"col p-0 nav-item mb-0"},[r("a",{staticClass:"nav-link active",attrs:{"aria-selected":"true","data-toggle":"tab",href:"#reminder-panel",role:"tab"},domProps:{innerHTML:t._s("Promise "+t.mode())},on:{click:function(e){t.listToOrder=8}}})]):t._e(),t._v(" "),t._l(t.details.tabs,function(e,a){return r("li",{staticClass:"col p-0 nav-item mb-0"},[r("a",{staticClass:"nav-link",class:0===a&&!t.mode("call")&&"active",attrs:{"aria-selected":"true","data-toggle":"tab",href:"#reminder-panel",role:"tab"},domProps:{innerHTML:t._s(e+" "+t.mode())},on:{click:function(e){t.listToOrder=t.details.list+a}}})])})],2)]),t._v(" "),r("div",{staticClass:"mt-5 mb-3 attendance-head"},[r("div",{staticClass:"row px-4 pt-3 pb-4 text-center"},[r("div",{staticClass:"col light-heading"},[t._v("Action")]),t._v(" "),t._l(t.details.headings,function(e){return r("div",{staticClass:"col light-heading"},[t._v(t._s(e))])})],2)]),t._v(" "),r("order",{attrs:{list:t.listToOrder,mode:t.mode()}})],1)])},staticRenderFns:[]}},iNcs:function(t,e,r){var a=r("VU/8")(r("dBli"),r("flWo"),!1,function(t){r("LFDu")},"data-v-1ab70cbf",null);t.exports=a.exports},jyFz:function(t,e,r){var a=function(){return this}()||Function("return this")(),n=a.regeneratorRuntime&&Object.getOwnPropertyNames(a).indexOf("regeneratorRuntime")>=0,s=n&&a.regeneratorRuntime;if(a.regeneratorRuntime=void 0,t.exports=r("SldL"),n)a.regeneratorRuntime=s;else try{delete a.regeneratorRuntime}catch(t){a.regeneratorRuntime=void 0}},m2tk:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Message=void 0;var a=function(){function t(t,e){for(var r=0;r<e.length;r++){var a=e[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(e,r,a){return r&&t(e.prototype,r),a&&t(e,a),e}}(),n=r("p/p5");e.Message=function(){function t(e,r){var a=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.user_id=n,this.message=e,this.logToDB=a,this.contacts=r.split(",").filter(function(t){return/\S/.test(t)}).map(function(t){return"234"+t.trim().substr(1)}).join(","),this.setPages(),this.setContactCount()}return a(t,[{key:"setContactCount",value:function(){this.contact_count=this.contacts.split(",").length}},{key:"setPages",value:function(){this.pages=Math.ceil(this.message.length/160)}},{key:"send",value:function(t){var e=this;(0,n.get)("/api/message/create?to="+this.contacts+"&message="+this.message).then(function(r){return 200===r.status&&e.logToDB&&(delete e.logToDB,(0,n.post)("/api/message",e)),!!t&&t(r)}).catch(function(e){return!!t&&t(e)})}}]),t}()},nv24:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.EventBus=void 0;var a,n=r("I3G/"),s=(a=n)&&a.__esModule?a:{default:a};e.EventBus=new s.default},rN6N:function(t,e,r){"use strict";var a,n=function(){function t(t,e){for(var r=0;r<e.length;r++){var a=e[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(e,r,a){return r&&t(e.prototype,r),a&&t(e,a),e}}(),s=r("I3G/"),i=(a=s)&&a.__esModule?a:{default:a},o=r("N71M");function l(t){if(Array.isArray(t)){for(var e=0,r=Array(t.length);e<t.length;e++)r[e]=t[e];return r}return Array.from(t)}function c(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var d=new i.default,u=function(){function t(e,r){c(this,t),this._order=e,this._customer=r,this._paymentBanks=[],this._paymentMethods=[],this._actualPayDates=[],this._actualAmountsPaid=[],this._amountsToBePaid=[],this._repaymentCaptions=[],this._paymentStatusClasses=[],this._repaymentLevel=0,this._amountPaid=null,this._discountAmount=null,this._outstandingDebt=null,this._discountedTotal=null,this._defaultFee=null,this._totalPlusDefault=null,this._payments={},this.setIsOrderFormal(),this.setIsRepaymentValid(),this.setRepaymentData(),this.setCountAndInterval(),this.setCommonDetails(),this.setDueDates(),this.setPaymentStatusClasses(),this.calcAndSetPaymentSummary(),this.setBranch(),this.setDiscount()}return n(t,[{key:"setIsRepaymentValid",value:function(){this._isRepaymentValid=!(!this.order.repayment_formal&&!this.order.repayment_informal)}},{key:"setIsOrderFormal",value:function(){this._isOrderFormal=["formal","salaried"].includes(this._customer.employment_status.toLowerCase())}},{key:"setRepaymentData",value:function(){null!=this.order.repayment_formal&&(this._repaymentData=this.order.repayment_formal),null!=this.order.repayment_informal&&(this._repaymentData=this.order.repayment_informal)}},{key:"setCountAndInterval",value:function(){var e=void 0,r=void 0;new Date(this.order.order_date)<=new Date("2019-07-07")?(null!=this.order.repayment_formal&&(e=28,r=6),null!=this.order.repayment_informal&&(e=14,r=12)):t.isBankDraftAvailable()&&this.isOrderFormal?(e=28,r=6):(e=14,r=12),this._count=r,this._interval=e}},{key:"setDueDates",value:function(){this._dueDates=t.generateDueDates(this.order.order_date,this.interval,this.count)}},{key:"setCommonDetails",value:function(){if(this.isRepaymentValid)for(var t=1;t<this.count+1;t++){for(var e=d.$getColumn(t).split(""),r=[],a=1;a<=2;a++)r.unshift(e.pop());this._repaymentCaptions.push("<td>"+e.join("")+"<sup>"+r.join("")+"</sup></td>"),this._actualPayDates.push(this.repaymentData[d.$getColumn(t)+"_date"]),this._actualAmountsPaid.push(this.repaymentData[d.$getColumn(t)+"_pay"]),this._paymentBanks.push(this.repaymentData[d.$getColumn(t)+"_payment_bank"]),this._paymentMethods.push(this.repaymentData[d.$getColumn(t)+"_payment_method"]),this._amountsToBePaid.push(d.$roundDownAmt(this.order.repayment_amount)),this.repaymentData[d.$getColumn(t)+"_pay"]>0&&this._repaymentLevel++}}},{key:"setBranch",value:function(){var t=this;this._branch=o.store.state.branches.find(function(e){return parseInt(e.id)===parseInt(t.order.store_product.store_name)})}},{key:"setPaymentStatusClasses",value:function(){if(this.isRepaymentValid)for(var e=1;e<this.count+1;e++){var r={class:null,icon:null},a=d.$getColumn(e),n=t.isPaymentDue(this.dueDates[e-1]),s=parseInt(this.repaymentData[a+"_pay"]);s?(r.class="paid",r.icon="fa-check"):n&&!s?(r.class="missed",r.icon="fa-times"):n||(r.class="pending",r.icon="fa-hourglass-start"),this._paymentStatusClasses.push(r)}}},{key:"calcAndSetPaymentSummary",value:function(){var t=function(t){return d.$formatCurrency(t)},e=this.order,r=e.repayment_amount,a=e.down_payment,n=e.product_price,s=6===this.count?.5:1,i=this.order.discount.percentage_discount,o=i>0?5===i?1:2:0,l=d.$roundDownAmt(r*s*o);this._discountAmount=t(l);var c=0,u=0;if(this.repaymentData){for(var m=0;m<this.count+1;m++){var h=parseInt(this.actualAmountsPaid[m]);u+=h?d.$roundDownAmt(h):0}c=d.$roundDownAmt(parseInt(a))+u+l}this._amountPaid=t(c);var v=d.$roundDownAmt(n-l);this._discountedTotal=t(v);var f=0;new Date(this.order.order_date)>new Date("2019-07-07")&&(f=500*[].length),this._defaultFee=t(f),this._totalPlusDefault=t(v+f),this._outstandingDebt=t(d.$roundDownAmt(parseInt(n)-c))}},{key:"setDiscount",value:function(){this._discount=this.order.discount.name+" "+this.order.discount.percentage_discount}},{key:"payments",set:function(t){this._payments=t},get:function(){return this._payments}},{key:"repaymentLevel",get:function(){return this._repaymentLevel}},{key:"order",get:function(){return this._order}},{key:"customer",get:function(){return this._customer}},{key:"isRepaymentValid",get:function(){return this._isRepaymentValid}},{key:"isOrderFormal",get:function(){return this._isOrderFormal}},{key:"repaymentData",get:function(){return this._repaymentData}},{key:"count",get:function(){return this._count}},{key:"interval",get:function(){return this._interval}},{key:"dueDates",get:function(){return this._dueDates}},{key:"paymentStatusClasses",get:function(){return this._paymentStatusClasses}},{key:"repaymentCaptions",get:function(){return this._repaymentCaptions}},{key:"paymentBanks",get:function(){return this._paymentBanks}},{key:"paymentMethods",get:function(){return this._paymentMethods}},{key:"actualPayDates",get:function(){return this._actualPayDates}},{key:"actualAmountsPaid",get:function(){return this._actualAmountsPaid}},{key:"amountsToBePaid",get:function(){return this._amountsToBePaid}},{key:"amountPaid",get:function(){return this._amountPaid}},{key:"discountAmount",get:function(){return this._discountAmount}},{key:"outstandingDebt",get:function(){return this._outstandingDebt}},{key:"discountedTotal",get:function(){return this._discountedTotal}},{key:"defaultFee",get:function(){return this._defaultFee}},{key:"totalPlusDefault",get:function(){return this._totalPlusDefault}},{key:"branch",get:function(){return this._branch}},{key:"discount",get:function(){return this._discount}},{key:"customerName",get:function(){return this.customer.first_name+" "+this.customer.last_name}},{key:"customerWGName",get:function(){var t=this.customer;return t.work_guarantor_first_name+" "+t.work_guarantor_last_name+" - "+t.work_guarantor_relationship}},{key:"customerPGName",get:function(){var t=this.customer;return t.personal_guarantor_first_name+" "+t.personal_guarantor_last_name+" - "+t.personal_guarantor_relationship}}],[{key:"generateDueDates",value:function(t,e,r){for(var a=[],n=0;n<r;n++){var s=new Date(t).addDays((n+1)*e),i=d.$getDate(s);a.push(i)}return a}},{key:"isPaymentDue",value:function(t){return new Date>new Date(t)}},{key:"isBankDraftAvailable",value:function(){return!1}},{key:"renderMessage",value:function(t){return t.sms?t.sms.message.replace(/%0a/g,"</br>"):t.feedback}},{key:"convertToName",value:function(t,e){return t?o.store.state[e].find(function(e){return e.id===t}).name:null}}]),t}(),m=function(t){function e(t,r){c(this,e);var a=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,t.customer));return a._isReminderSent=!1,a._dvaId=r,a._isSelected=!1,a.setReminder(null),a.setIsReminderSent(),a.setFinancialStatus(),a.setPromiseCall(),a.generateAndSetNextSMSReminder(),a}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,u),n(e,[{key:"setIsReminderSent",value:function(){var t=this,e=d.$getDate();this.order.reminders.forEach(function(r){var a=r.date.split(" "),n=a[0].split("-"),s=a[1].split(":"),i=[].concat(l(n),l(s)).map(function(t){return parseInt(t,10)});d.$getDate(new Date(Date.UTC.apply(Date,l(i))),!1)===e&&(t._isReminderSent=!0)})}},{key:"setFinancialStatus",value:function(){this._financialStatus=this.isRepaymentValid?"Paid: "+this.amountPaid+" | Debt: "+this.outstandingDebt:"no detail!"}},{key:"generateAndSetNextSMSReminder",value:function(){var t=this.order,e=t.repayment_amount,r=t.order_date,a=this.order.store_product.product_name,n=void 0;r===d.$getDate()?(n="Hello "+this.customerName+", thanks for patronizing us. The following is the breakdown of the repayment plan for the purchase of "+a+":%0a",this.dueDates.forEach(function(t,r){return n+=d.$getColumn(r+1)+": "+t+" => "+d.$formatCurrency(d.$roundDownAmt(e))+"%0a"})):n="Hello "+this.customerName+", This is to remind you that your "+d.$getColumn(parseInt(this.repaymentLevel)+1)+" repayment of "+d.$formatCurrency(d.$roundDownAmt(e))+" for "+a+" will be due on "+this.dueDates[this.repaymentLevel]+". we will be expecting you.",this._nextSMSReminder=n+"Please remember to pay on time to avoid late fees and other penalties.%0aThank you."}},{key:"setReminder",value:function(t){this._reminder={type:t,feedback:null,is_visited:null,dva_id:this.dvaId,order_id:this.order.id,customer_id:this.customer.id,canBeSelected:!this.isReminderSent,repayment_level:this.repaymentLevel+"/"+this.count},"sms"===t&&(this._reminder.sms_id=null,this._reminder.contacts=this.customer.telephone)}},{key:"setPromiseCall",value:function(){this._promiseCall={order_id:this.order.id,user_id:this.dvaId,customer_id:this.customer.id,date:null}}},{key:"isSelected",set:function(t){this._isSelected=t},get:function(){return this._isSelected}},{key:"isReminderSent",get:function(){return this._isReminderSent}},{key:"dvaId",get:function(){return this._dvaId}},{key:"financialStatus",get:function(){return this._financialStatus}},{key:"nextSMSReminder",get:function(){return this._nextSMSReminder}},{key:"reminder",get:function(){return this._reminder}},{key:"promiseCall",get:function(){return this._promiseCall}}]),e}();t.exports={Order:u,OrderWithPromiseCall:m}},rjj0:function(t,e,r){var a="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!a)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var n=r("tTVk"),s={},i=a&&(document.head||document.getElementsByTagName("head")[0]),o=null,l=0,c=!1,d=function(){},u=null,m="data-vue-ssr-id",h="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function v(t){for(var e=0;e<t.length;e++){var r=t[e],a=s[r.id];if(a){a.refs++;for(var n=0;n<a.parts.length;n++)a.parts[n](r.parts[n]);for(;n<r.parts.length;n++)a.parts.push(_(r.parts[n]));a.parts.length>r.parts.length&&(a.parts.length=r.parts.length)}else{var i=[];for(n=0;n<r.parts.length;n++)i.push(_(r.parts[n]));s[r.id]={id:r.id,refs:1,parts:i}}}}function f(){var t=document.createElement("style");return t.type="text/css",i.appendChild(t),t}function _(t){var e,r,a=document.querySelector("style["+m+'~="'+t.id+'"]');if(a){if(c)return d;a.parentNode.removeChild(a)}if(h){var n=l++;a=o||(o=f()),e=g.bind(null,a,n,!1),r=g.bind(null,a,n,!0)}else a=f(),e=function(t,e){var r=e.css,a=e.media,n=e.sourceMap;a&&t.setAttribute("media",a);u.ssrId&&t.setAttribute(m,e.id);n&&(r+="\n/*# sourceURL="+n.sources[0]+" */",r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */");if(t.styleSheet)t.styleSheet.cssText=r;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(r))}}.bind(null,a),r=function(){a.parentNode.removeChild(a)};return e(t),function(a){if(a){if(a.css===t.css&&a.media===t.media&&a.sourceMap===t.sourceMap)return;e(t=a)}else r()}}t.exports=function(t,e,r,a){c=r,u=a||{};var i=n(t,e);return v(i),function(e){for(var r=[],a=0;a<i.length;a++){var o=i[a];(l=s[o.id]).refs--,r.push(l)}e?v(i=n(t,e)):i=[];for(a=0;a<r.length;a++){var l;if(0===(l=r[a]).refs){for(var c=0;c<l.parts.length;c++)l.parts[c]();delete s[l.id]}}}};var p,y=(p=[],function(t,e){return p[t]=e,p.filter(Boolean).join("\n")});function g(t,e,r,a){var n=r?"":a.css;if(t.styleSheet)t.styleSheet.cssText=y(e,n);else{var s=document.createTextNode(n),i=t.childNodes;i[e]&&t.removeChild(i[e]),i.length?t.insertBefore(s,i[e]):t.appendChild(s)}}},tTVk:function(t,e){t.exports=function(t,e){for(var r=[],a={},n=0;n<e.length;n++){var s=e[n],i=s[0],o={id:t+":"+n,css:s[1],media:s[2],sourceMap:s[3]};a[i]?a[i].parts.push(o):r.push(a[i]={id:i,parts:[o]})}return r}}});
>>>>>>> 947d9829b705f35de1ea598304b979ddd1e01bad
=======
webpackJsonp([5],{"3iS+":function(t,e,r){(t.exports=r("FZ+f")(!1)).push([t.i,".attendance-head .light-heading[data-v-1ab70cbf]:first-child{max-width:120px}",""])},"7elN":function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a,n=r("p/p5"),s=r("K23+"),i=(a=s)&&a.__esModule?a:{default:a},o=(r("nv24"),r("rN6N"));e.default={props:{mode:null,index:null,startIndex:{default:1},order:{default:null,type:o.Order}},created:function(){this.order.setReminder(this.mode)},methods:{logReminder:function(){var t=this;this.$LIPS(!0),delete this.order.reminder.order,delete this.order.reminder.canBeSelected,(0,n.post)("/api/reminder",{reminders:[this.order.reminder]}).then(function(e){return e.data.saved&&t.logPromiseCall()}).catch(function(){return t.$displayErrorMessage("Error Logging reminders!")})},logPromiseCall:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Reminder Logged!";this.order.promiseCall.date?(0,n.post)("/api/promise_call",this.order.promiseCall).then(function(r){return r.data.saved&&t.done(e+" Promise call added!")}).catch(function(){return t.$displayErrorMessage("Error Logging promise call!")}):this.done(e)},done:function(t){this.$scrollToTop(),i.default.setSuccess(t,5e3),this.$emit("done")},toggleSelect:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;this.order.reminder.canBeSelected&&(this.order.isSelected=null!==t?t:!this.order.isSelected)}}}},C326:function(t,e,r){var a=r("I/R6");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);r("rjj0")("b73e2b8a",a,!0,{})},"I/R6":function(t,e,r){(t.exports=r("FZ+f")(!1)).push([t.i,".table-separator[data-v-ec211ae4]{border-top:2px solid #dee1e4}",""])},LFDu:function(t,e,r){var a=r("3iS+");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);r("rjj0")("e2ce9f04",a,!0,{})},SldL:function(t,e){!function(e){"use strict";var r,a=Object.prototype,n=a.hasOwnProperty,s="function"==typeof Symbol?Symbol:{},i=s.iterator||"@@iterator",o=s.asyncIterator||"@@asyncIterator",l=s.toStringTag||"@@toStringTag",c="object"==typeof t,d=e.regeneratorRuntime;if(d)c&&(t.exports=d);else{(d=e.regeneratorRuntime=c?t.exports:{}).wrap=b;var u="suspendedStart",m="suspendedYield",h="executing",v="completed",f={},_={};_[i]=function(){return this};var p=Object.getPrototypeOf,y=p&&p(p(E([])));y&&y!==a&&n.call(y,i)&&(_=y);var g=w.prototype=k.prototype=Object.create(_);x.prototype=g.constructor=w,w.constructor=x,w[l]=x.displayName="GeneratorFunction",d.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===x||"GeneratorFunction"===(e.displayName||e.name))},d.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,w):(t.__proto__=w,l in t||(t[l]="GeneratorFunction")),t.prototype=Object.create(g),t},d.awrap=function(t){return{__await:t}},D(S.prototype),S.prototype[o]=function(){return this},d.AsyncIterator=S,d.async=function(t,e,r,a){var n=new S(b(t,e,r,a));return d.isGeneratorFunction(e)?n:n.next().then(function(t){return t.done?t.value:n.next()})},D(g),g[l]="Generator",g[i]=function(){return this},g.toString=function(){return"[object Generator]"},d.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var a=e.pop();if(a in t)return r.value=a,r.done=!1,r}return r.done=!0,r}},d.values=E,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach($),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function a(a,n){return o.type="throw",o.arg=t,e.next=a,n&&(e.method="next",e.arg=r),!!n}for(var s=this.tryEntries.length-1;s>=0;--s){var i=this.tryEntries[s],o=i.completion;if("root"===i.tryLoc)return a("end");if(i.tryLoc<=this.prev){var l=n.call(i,"catchLoc"),c=n.call(i,"finallyLoc");if(l&&c){if(this.prev<i.catchLoc)return a(i.catchLoc,!0);if(this.prev<i.finallyLoc)return a(i.finallyLoc)}else if(l){if(this.prev<i.catchLoc)return a(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return a(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var s=a;break}}s&&("break"===t||"continue"===t)&&s.tryLoc<=e&&e<=s.finallyLoc&&(s=null);var i=s?s.completion:{};return i.type=t,i.arg=e,s?(this.method="next",this.next=s.finallyLoc,f):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),$(r),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var a=r.completion;if("throw"===a.type){var n=a.arg;$(r)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,a){return this.delegate={iterator:E(t),resultName:e,nextLoc:a},"next"===this.method&&(this.arg=r),f}}}function b(t,e,r,a){var n=e&&e.prototype instanceof k?e:k,s=Object.create(n.prototype),i=new L(a||[]);return s._invoke=function(t,e,r){var a=u;return function(n,s){if(a===h)throw new Error("Generator is already running");if(a===v){if("throw"===n)throw s;return T()}for(r.method=n,r.arg=s;;){var i=r.delegate;if(i){var o=O(i,r);if(o){if(o===f)continue;return o}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(a===u)throw a=v,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);a=h;var l=C(t,e,r);if("normal"===l.type){if(a=r.done?v:m,l.arg===f)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(a=v,r.method="throw",r.arg=l.arg)}}}(t,r,i),s}function C(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}function k(){}function x(){}function w(){}function D(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function S(t){var e;this._invoke=function(r,a){function s(){return new Promise(function(e,s){!function e(r,a,s,i){var o=C(t[r],t,a);if("throw"!==o.type){var l=o.arg,c=l.value;return c&&"object"==typeof c&&n.call(c,"__await")?Promise.resolve(c.__await).then(function(t){e("next",t,s,i)},function(t){e("throw",t,s,i)}):Promise.resolve(c).then(function(t){l.value=t,s(l)},i)}i(o.arg)}(r,a,e,s)})}return e=e?e.then(s,s):s()}}function O(t,e){var a=t.iterator[e.method];if(a===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=r,O(t,e),"throw"===e.method))return f;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return f}var n=C(a,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,f;var s=n.arg;return s?s.done?(e[t.resultName]=s.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,f):s:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function P(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function $(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function L(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(P,this),this.reset(!0)}function E(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var a=-1,s=function e(){for(;++a<t.length;)if(n.call(t,a))return e.value=t[a],e.done=!1,e;return e.value=r,e.done=!0,e};return s.next=s}}return{next:T}}function T(){return{value:r,done:!0}}}(function(){return this}()||Function("return this")())},TZKk:function(t,e,r){var a=r("VU/8")(r("7elN"),r("b4Eb"),!1,null,null,null);t.exports=a.exports},XPKX:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t.show?r("div",{staticClass:"tab-content mt-1 attendance-body"},[r("div",{staticClass:"tab-pane active text-center",attrs:{id:"reminder-panel",role:"tabpanel"}},t._l(t.orders,function(e,a){return r("order-item",{key:e.order.id,attrs:{index:a,"start-index":t.startIndex,order:e,mode:t.mode},on:{done:function(e){t.fetchList(t.list)},display:t.displayDetails}})})),t._v(" "),"normal-list"!=t.mode?r("div",{staticClass:"w-100 my-5 mx-0 hr"}):t._e()]):r("div",{staticClass:"tab-content mt-1 attendance-body"},[t._m(0)]),t._v(" "),t.show&&"sms"===t.mode?r("div",{staticClass:"mt-1 attendance-body"},[r("div",{staticClass:"mb-5 px-0 row align-items-center"},[r("div",{staticClass:"clearfix d-flex justify-content-end w-100"},[r("button",{staticClass:"btn bg-default",attrs:{disabled:t.$isProcessing},on:{click:t.processSelected}},[t._v("\n                    Send Reminder(s) "),r("i",{staticClass:"far fa-paper-plane ml-1"})])])])]):t._e(),t._v(" "),r("div",{staticClass:"modal fade",attrs:{id:"purchase_order"}},[r("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[r("div",{staticClass:"modal-content"},[t._m(1),t._v(" "),t.showModalContent?r("div",{staticClass:"modal-body"},[r("div",{staticClass:"table-responsive"},[r("table",{staticClass:"table table-bordered table-striped"},[r("tbody",[r("tr",[r("th",[t._v("Order ID")]),t._v(" "),r("td",[t._v(t._s(t.activeOrder.order.id))])]),t._v(" "),r("tr",[r("th",[t._v("Order date")]),t._v(" "),r("td",[t._v(t._s(t.activeOrder.order.order_date))])]),t._v(" "),r("tr",[r("th",[t._v("Product")]),t._v(" "),r("td",[t._v(t._s(t.activeOrder.order.store_product.product_name))])]),t._v(" "),r("tr",[r("th",[t._v("Repayment")]),t._v(" "),r("td",[t._v(t._s(t.$formatCurrency(t.activeOrder.amountsToBePaid[0])))])]),t._v(" "),r("tr",[r("th",[t._v("Down Payment")]),t._v(" "),r("td",[t._v(t._s(t.$formatCurrency(t.activeOrder.order.down_payment)))])]),t._v(" "),r("tr",[r("th",[t._v("Discount (%)")]),t._v(" "),r("td",[t._v(t._s(t._f("capitalize")(t.activeOrder.discount)))])]),t._v(" "),r("tr",[r("th",[t._v("Sale Type")]),t._v(" "),r("td",[t._v(t._s(t._f("capitalize")(t.activeOrder.order.sales_type.name)))])]),t._v(" "),r("tr",[r("th",[t._v("Total amount to Pay")]),t._v(" "),r("td",[t._v(t._s(t.$formatCurrency(t.activeOrder.order.product_price)))])]),t._v(" "),r("tr",[r("th",[t._v("Processed by")]),t._v(" "),r("td",[t._v(t._s(t.activeOrder.order.floor_agent?t.activeOrder.order.floor_agent.full_name:null)+"\n                                ")])])])])])]):t._e(),t._v(" "),t._m(2)])])]),t._v(" "),r("div",{staticClass:"modal fade",attrs:{id:"customer_info"}},[r("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[r("div",{staticClass:"modal-content"},[t._m(3),t._v(" "),t.showModalContent?r("div",{staticClass:"modal-body"},[r("div",{staticClass:"table-responsive"},[r("table",{staticClass:"table table-bordered table-striped"},[r("tbody",[r("tr",[r("th",[t._v("Customer ID")]),t._v(" "),r("td",[t._v(t._s(t.activeOrder.customer.id))])]),t._v(" "),r("tr",[r("th",[t._v("Full Name")]),t._v(" "),r("td",[t._v(t._s(t.$getCustomerFullName(t.activeOrder.customer)))])]),t._v(" "),r("tr",[r("th",[t._v("Address")]),t._v(" "),r("td",[t._v(t._s(t.$getCustomerAddress(t.activeOrder.customer)))])]),t._v(" "),r("tr",[r("th",[t._v("Phone")]),t._v(" "),r("td",[t._v(t._s(t.activeOrder.customer.telephone))])]),t._v(" "),r("tr",[r("th",[t._v("Branch")]),t._v(" "),r("td",[t._v(t._s(t.activeOrder.customer.branch.name))])]),t._v(" "),r("tr",[r("th",[t._v("Category")]),t._v(" "),r("td",[t._v(t._s(t.activeOrder.customer.employment_status))])]),t._v(" "),r("tr",[r("th",[t._v("Work guarantor name")]),t._v(" "),r("td",[t._v(t._s(t.activeOrder.customerWGName)+"\n                                ")])]),t._v(" "),r("tr",[r("th",[t._v("Work guarantor phone")]),t._v(" "),r("td",[t._v(t._s(t.activeOrder.customer.work_guarantor_telno))])]),t._v(" "),r("tr",[r("th",[t._v("Personal guarantor name")]),t._v(" "),r("td",[t._v(t._s(t.activeOrder.customerPGName)+"\n                                ")])]),t._v(" "),r("tr",[r("th",[t._v("Personal guarantor phone")]),t._v(" "),r("td",[t._v(t._s(t.activeOrder.customer.personal_guarantor_telno))])]),t._v(" "),r("tr",[r("th",[t._v("Verified by")]),t._v(" "),r("td",[r("router-link",{staticClass:"text-link",attrs:{target:"_blank",to:"/dva/verification?id="+t.activeOrder.customer.id}},[t._v("\n                                        click here to see verifications status\n                                    ")])],1)])])])])]):t._e(),t._v(" "),t._m(4)])])]),t._v(" "),r("div",{staticClass:"modal fade repayment",attrs:{id:"repayment"}},[r("div",{staticClass:"modal-dialog modal-xl",attrs:{role:"document"}},[t.showModalContent?r("div",{staticClass:"modal-content"},[r("div",{staticClass:"modal-header py-2"},[r("h6",{staticClass:"modal-title py-1"},[t._v("\n                        Repayment Plan/Summary - "+t._s(t._f("capitalize")(t.activeOrder.customer.employment_status))+"\n                    ")]),t._v(" "),t._m(5)]),t._v(" "),r("div",{staticClass:"modal-body"},[r("div",{staticClass:"table-responsive"},[r("h5",{staticClass:"mt-3 mb-0"},[t._v("Order Information")]),t._v(" "),r("table",{staticClass:"table table-bordered"},[r("tbody",[t._m(6),t._v(" "),r("tr",[r("td",{staticClass:"font-weight-bold"},[t._v(t._s(t.activeOrder.customerName)+"\n                                ")]),t._v(" "),r("th",[t._v(t._s(t.activeOrder.order.id))]),t._v(" "),r("th",[t._v(t._s(t.activeOrder.order.store_product.product_name))]),t._v(" "),r("td",{staticClass:"font-weight-bold"},[t._v(t._s(t.activeOrder.branch.name))])])])]),t._v(" "),r("h5",{staticClass:"mt-5 mb-0"},[t._v("Amortization Schedule")]),t._v(" "),r("table",{staticClass:"table table-bordered"},[r("tbody",{staticClass:"text-center"},[r("tr",[r("th",[t._v("Repayment")]),t._v(" "),t._l(t.activeOrder.repaymentCaptions,function(e){return r("td",{domProps:{innerHTML:t._s(e)}})})],2),t._v(" "),r("tr",{staticClass:"table-separator"},[r("th",[t._v("Due Date")]),t._v(" "),t._l(t.activeOrder.dueDates,function(e){return r("td",[t._v(t._s(e))])})],2),t._v(" "),r("tr",[r("th",[t._v("Actual Pay Day")]),t._v(" "),t._l(t.activeOrder.actualPayDates,function(e){return r("td",[t._v(t._s(e))])})],2),t._v(" "),r("tr",{staticClass:"table-separator"},[r("th",[t._v("Status")]),t._v(" "),t._l(t.activeOrder.paymentStatusClasses,function(t){return r("td",{class:t.class},[r("i",{staticClass:"fas",class:t.icon})])})],2),t._v(" "),r("tr",{staticClass:"table-separator"},[r("th",[t._v("Repayment Amount")]),t._v(" "),t._l(t.activeOrder.amountsToBePaid,function(e){return r("td",[t._v(t._s(t.$formatCurrency(e)))])})],2),t._v(" "),r("tr",[r("th",[t._v("Actual Amount Paid")]),t._v(" "),t._l(t.activeOrder.actualAmountsPaid,function(e){return r("td",[t._v(t._s(t.$formatCurrency(e))+"\n                                ")])})],2),t._v(" "),r("tr",{staticClass:"table-separator"},[r("th",[t._v("Payment Method")]),t._v(" "),t._l(t.activeOrder.paymentMethods,function(e){return r("td",{staticClass:"text-capitalize"},[t._v("\n                                    "+t._s(t.Order.convertToName(e,"paymentMethods"))+"\n                                ")])})],2),t._v(" "),r("tr",[r("th",[t._v("Bank")]),t._v(" "),t._l(t.activeOrder.paymentBanks,function(e){return r("td",{staticClass:"text-capitalize"},[t._v("\n                                    "+t._s(t.Order.convertToName(e,"banks"))+"\n                                ")])})],2)])]),t._v(" "),r("h5",{staticClass:"mt-5 mb-0"},[t._v("Payment Summary")]),t._v(" "),r("table",{staticClass:"table table-bordered"},[r("tbody",{staticClass:"text-center"},[r("tr",{staticClass:"table-separator"},[r("td",{staticClass:"text-left"},[t._v("Discount Detail (%)")]),t._v(" "),r("th",[t._v(t._s(t._f("capitalize")(t.activeOrder.discount)))]),t._v(" "),r("td",[t._v("Total Before Discount")]),t._v(" "),r("th",[t._v(t._s(t.$formatCurrency(t.$roundDownAmt(t.activeOrder.order.product_price))))]),t._v(" "),r("td",[t._v("Total Paid")]),t._v(" "),r("th",[t._v(t._s(t.activeOrder.amountPaid))])]),t._v(" "),r("tr",[r("td",{staticClass:"text-left"},[t._v("Discount Amount")]),t._v(" "),r("th",[t._v(t._s(t.activeOrder.discountAmount))]),t._v(" "),r("td",[t._v("Total After Discount")]),t._v(" "),r("th",[t._v(t._s(t.activeOrder.discountedTotal))]),t._v(" "),r("td",[t._v("Total Debt")]),t._v(" "),r("th",[t._v(t._s(t.activeOrder.outstandingDebt))])]),t._v(" "),r("tr",[r("td",{staticClass:"text-left"},[t._v("Down Payment")]),t._v(" "),r("th",[t._v(t._s(t.$formatCurrency(t.$roundDownAmt(t.activeOrder.order.down_payment))))]),t._v(" "),r("td",[t._v("Total Plus Default Fee")]),t._v(" "),r("th",[t._v(t._s(t.activeOrder.totalPlusDefault))]),t._v(" "),r("td",[t._v("Default Fee")]),t._v(" "),r("th",[t._v(t._s(t.activeOrder.defaultFee))])])])])])]),t._v(" "),t._m(7)]):t._e()])]),t._v(" "),r("div",{staticClass:"modal fade repayment",attrs:{id:"reminder_history"}},[r("div",{staticClass:"modal-dialog modal-lg",attrs:{role:"document"}},[r("div",{staticClass:"modal-content"},[t._m(8),t._v(" "),t.showModalContent?r("div",{staticClass:"modal-body"},[r("div",{staticClass:"table-responsive"},[t.activeOrder.order.reminders.length?r("table",{staticClass:"table table-bordered table-striped"},[t._m(9),t._v(" "),r("tbody",t._l(t.activeOrder.order.reminders,function(e,a){return r("tr",[r("th",[t._v(t._s(a+1))]),t._v(" "),r("td",[t._v(t._s(t.$dateTimeConvert(e.date)))]),t._v(" "),r("td",[t._v(t._s(e.type))]),t._v(" "),r("td",{domProps:{innerHTML:t._s(t.Order.renderMessage(e))}}),t._v(" "),r("td",[t._v(t._s(e.user.full_name))])])}))]):r("div",{staticClass:"my-4 text-center"},[t._v("\n                            no reminders have been sent yet!\n                        ")])])]):t._e(),t._v(" "),t._m(10)])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"tab-pane active text-center"},[e("div",{staticClass:"mb-3 row attendance-item"},[e("div",{staticClass:"col d-flex light-heading align-items-center justify-content-center"},[this._v("\n                    No records found!\n                ")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"modal-header py-2"},[e("h6",{staticClass:"modal-title py-1"},[this._v("Purchase Order Summary")]),this._v(" "),e("a",{staticClass:"close py-1",attrs:{"aria-label":"Close","data-dismiss":"modal"}},[e("span",{staticClass:"modal-close text-danger",attrs:{"aria-hidden":"true"}},[e("i",{staticClass:"fas fa-times"})])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"modal-footer"},[e("a",{staticClass:"text-link mt-3 w-100",staticStyle:{"text-align":"right"},attrs:{"data-dismiss":"modal",href:"javascript:"}},[this._v("close dialogue")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"modal-header py-2"},[e("h6",{staticClass:"modal-title py-1"},[this._v("Customer Info. Summary")]),this._v(" "),e("a",{staticClass:"close py-1",attrs:{"aria-label":"Close","data-dismiss":"modal"}},[e("span",{staticClass:"modal-close text-danger",attrs:{"aria-hidden":"true"}},[e("i",{staticClass:"fas fa-times"})])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"modal-footer"},[e("a",{staticClass:"text-link mt-3 w-100 text-right",attrs:{"data-dismiss":"modal",href:"#"}},[this._v("\n                        close dialogue\n                    ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"close py-1",attrs:{"aria-label":"Close","data-dismiss":"modal"}},[e("span",{staticClass:"modal-close text-danger",attrs:{"aria-hidden":"true"}},[e("i",{staticClass:"fas fa-times"})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",{staticClass:"table-separator"},[e("td",[this._v("Name")]),this._v(" "),e("td",[this._v("Order Id")]),this._v(" "),e("td",[this._v("Product")]),this._v(" "),e("th",[this._v("Branch")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"modal-footer d-flex justify-content-end"},[e("a",{staticClass:"text-link mt-3",attrs:{"data-dismiss":"modal",href:"javascript:"}},[this._v("close dialogue")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"modal-header py-2"},[e("h6",{staticClass:"modal-title py-1"},[this._v("History")]),this._v(" "),e("a",{staticClass:"close py-1",attrs:{"aria-label":"Close","data-dismiss":"modal"}},[e("span",{staticClass:"modal-close text-danger",attrs:{"aria-hidden":"true"}},[e("i",{staticClass:"fas fa-times"})])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("thead",[r("tr",[r("th",[t._v("S/N")]),t._v(" "),r("th",[t._v("Date")]),t._v(" "),r("th",[t._v("Type")]),t._v(" "),r("th",[t._v("SMS/Feedback")]),t._v(" "),r("th",[t._v("sender")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"modal-footer"},[e("a",{staticClass:"text-link mt-3 w-100",staticStyle:{"text-align":"right"},attrs:{"data-dismiss":"modal",href:"javascript:"}},[this._v("close dialogue")])])}]}},XPj8:function(t,e,r){var a=r("VU/8")(r("aSpy"),r("XPKX"),!1,function(t){r("C326")},"data-v-ec211ae4",null);t.exports=a.exports},Xxa5:function(t,e,r){t.exports=r("jyFz")},aSpy:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=m(r("Xxa5")),n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(t[a]=r[a])}return t},s=m(r("I3G/")),i=r("NYxO"),o=m(r("K23+")),l=r("m2tk"),c=r("p/p5"),d=m(r("TZKk")),u=r("rN6N");function m(t){return t&&t.__esModule?t:{default:t}}function h(t){return function(){var e=t.apply(this,arguments);return new Promise(function(t,r){return function a(n,s){try{var i=e[n](s),o=i.value}catch(t){return void r(t)}if(!i.done)return Promise.resolve(o).then(function(t){a("next",t)},function(t){a("throw",t)});t(o)}("next")})}}e.default={components:{OrderItem:d.default},props:{list:{default:null},mode:null,preLoadedOrder:null,startIndex:null},watch:{list:function(t){this.fetchList(t)},preLoadedOrder:function(t){this.prepareForm(t)}},data:function(){return{orders:[],show:!1,showModalContent:!1,Order:u.Order,activeOrder:null}},computed:n({},(0,i.mapGetters)(["auth"])),methods:{prepareForm:function(){var t=h(a.default.mark(function t(e){var r=this;return a.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this.show=!1,this.showModalContent=!1,this.orders=[],t.next=5,e.orders.forEach(function(t,a){var n=t instanceof u.Order?t:new u.OrderWithPromiseCall(t,e.dva_id);(r.auth("DVALead")||r.auth("FSLLead")||r.auth("CAGAccess")||parseInt(n.order.store_product.store_name)===e.branch)&&function(){if([8,1].includes(r.list)||"normal-list"===r.mode)return!0;var t=void 0,e=void 0,a=[],s=new Date,i=1===s.getDay()||[9,10,11,12,13,14].includes(r.list)?3:1;if(!n.repaymentData)return!1;for(var o=1;o<n.count+1;o++){var l=r.$getColumn(o);if(!n.repaymentData[l+"_pay"]){t=u.OrderWithPromiseCall.generateDueDates(n.order.order_date,n.interval,n.count)[o-1];break}}switch(r.list){case 2:e=7;break;case 3:e=3;break;case 4:e=0;break;case 5:e=1;break;case 6:e=5;break;case 7:e=31;break;case 9:e=38;break;case 10:e=45;break;case 11:e=61;break;case 12:e=75;break;case 13:e=90;break;case 14:e=121}if(["collection","recovery","call","external-recovery"].includes(r.mode))for(var c=0;c<i;c++)a.push(r.$getDate(s.addDays(-(c+e))));if("sms"===r.mode)for(var d=0;d<i;d++)a.push(r.$getDate(s.addDays(d+e)));return a.includes(t)}()&&r.orders.push(n)});case 5:this.orders.length&&(this.show=!0),this.$LIPS(!1);case 7:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),fetchList:function(t){var e,r=this;this.$LIPS(!0),(0,c.get)((e={query:{list:t}},"/api/reminder/create?list="+e.query.list)).then(function(e){var a=e.data;8===t&&(a.orders=a.orders.map(function(t){return t.order})),r.prepareForm(a)})},displayDetails:function(){var t=h(a.default.mark(function t(e,r){return a.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.default.set(this.$data,"activeOrder",e);case 2:return this.showModalContent=!0,t.abrupt("return",$("#"+r).modal("toggle"));case 4:case"end":return t.stop()}},t,this)}));return function(e,r){return t.apply(this,arguments)}}(),processSelected:function(){this.$LIPS(!0);var t=this.orders.filter(function(t){return t.isSelected});if(!t.length)return this.$displayErrorMessage("please select at least one!"),this.$LIPS(!1);this.sendSMSReminders(t)},sendSMSReminders:function(t){var e=this,r=[];t.forEach(function(a,n){var s=new l.Message(a.nextSMSReminder,a.reminder.contacts,!1,a.dvaId);s.send(function(a){200===a.status&&(delete s.logToDB,r.push(s)),n+1===t.length&&e.logSentMessages(t,r)})})},logSentMessages:function(t,e){var r=this;e.length>0?(0,c.post)("/api/message",{messages:e,bulk:!0}).then(function(e){var a=e.data,n=a.sentAndLogged,s=a.ids;n?r.logSentReminders(t,s):r.$displayErrorMessage("Error Logging sent sms details!")}):this.$displayErrorMessage("Error sending messages!")},logSentReminders:function(t,e){var r=this;if(e.reverse(),e.length>0){var a=t.map(function(t,r){return t.reminder.sms_id=e[r],delete t.reminder.contacts,delete t.reminder.canBeSelected,t.reminder});(0,c.post)("/api/reminder",{reminders:a}).then(function(t){t.data.saved?(o.default.setSuccess("Reminders have been sent successfully!",5e4),r.fetchList(r.list)):r.$displayErrorMessage("Error sending reminders!"),r.$scrollToTop()})}else this.$displayErrorMessage("Error logging sent messages!")}},mounted:function(){var t=this;"normal-list"!=this.mode?this.fetchList(this.list):this.prepareForm(this.preLoadedOrder),$(document).on("hidden.bs.modal",".modal",function(){t.activeOrder=null,t.showModalContent=!1})},created:function(){this.$prepareBanks(),this.$prepareBranches(),this.$preparePaymentMethods()}}},b4Eb:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"mb-3 row attendance-item"},[r("div",{staticClass:"col-12 col-xs-2 col-md col-lg d-flex align-items-center",staticStyle:{"max-width":"120px"}},["normal-list"===t.mode?r("span"):t.order.reminder.canBeSelected&&["collection","recovery","call","external-recovery"].includes(t.mode)?r("span",{staticClass:"user mx-auto bg-pending text-white",on:{click:t.logReminder}},[r("i",{staticClass:"fas fa-hourglass-start"})]):t.order.reminder.canBeSelected&&"sms"===t.mode?r("div",{staticClass:"d-flex align-items-center"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.order.isSelected,expression:"order.isSelected"}],staticClass:"form-check-input my-0 mx-4 float-left position-relative ",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.order.isSelected)?t._i(t.order.isSelected,null)>-1:t.order.isSelected},on:{click:t.toggleSelect,change:function(e){var r=t.order.isSelected,a=e.target,n=!!a.checked;if(Array.isArray(r)){var s=t._i(r,null);a.checked?s<0&&t.$set(t.order,"isSelected",r.concat([null])):s>-1&&t.$set(t.order,"isSelected",r.slice(0,s).concat(r.slice(s+1)))}else t.$set(t.order,"isSelected",n)}}})]):r("span",{staticClass:"user mx-auto sent-reminder"},[r("i",{staticClass:"fas fa-check"})]),t._v(" "),r("span",{staticClass:"user mx-auto"},[t._v(t._s(t.startIndex+t.index))])]),t._v(" "),r("div",{staticClass:"col-12 col-xs-2 col-md col-lg user-name d-flex align-items-center justify-content-center"},[t._v("\n        "+t._s(t.$vnode.key)+"\n    ")]),t._v(" "),r("div",{staticClass:"col-12 col-xs-2 col-md col-lg d-flex align-items-center justify-content-center",attrs:{"data-hoverable":"true"},on:{click:function(e){t.$emit("display",t.order,"purchase_order")}}},[t._v("\n        "+t._s(t.order.order.order_date)+"\n    ")]),t._v(" "),r("div",{staticClass:"col-12 col-xs-3 col-md col-lg d-flex align-items-center justify-content-center",attrs:{"data-hoverable":"true"},on:{click:function(e){t.$emit("display",t.order,"customer_info")}}},[t._v("\n        ID: "+t._s(t.order.customer.id)+" - "+t._s(t._f("capitalize")(t.order.customer.employment_status))+"\n    ")]),t._v(" "),r("div",{staticClass:"col-12 col-xs-2 col-md col-lg d-flex align-items-center justify-content-center",attrs:{"data-hoverable":"true"},on:{click:function(e){t.$emit("display",t.order,"repayment")}}},[t._v("\n        "+t._s(t.order.financialStatus)+"\n    ")]),t._v(" "),r("div",{staticClass:"col-12 col-xs-2 col-md col-lg d-flex align-items-center justify-content-center",attrs:{"data-hoverable":"true"},on:{click:function(e){t.$emit("display",t.order,"reminder_history")}}},[t._v("\n        "+t._s(t.order.order.reminders.length)+" reminder(s) sent\n    ")]),t._v(" "),["collection","recovery","external-recovery"].includes(t.mode)?r("div",{staticClass:"col-12 col-xs-2 col-md col-lg d-flex align-items-center attendance-create"},[r("span",{staticClass:"present"},[r("span",{staticClass:"radio w-50 pr-3 mb-0 float-left"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.order.reminder.is_visited,expression:"order.reminder.is_visited"}],attrs:{type:"radio",id:"present"+t.index,name:"isPresent"+t.index},domProps:{value:!0,checked:t._q(t.order.reminder.is_visited,!0)},on:{change:function(e){t.$set(t.order.reminder,"is_visited",!0)}}}),t._v(" "),r("label",{attrs:{for:"present"+t.index}},[t._v("yes")])]),t._v(" "),r("span",{staticClass:"radio w-50 pl-3 mb-0 float-left"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.order.reminder.is_visited,expression:"order.reminder.is_visited"}],attrs:{type:"radio",id:"absent"+t.index,name:"isPresent"+t.index},domProps:{value:!1,checked:t._q(t.order.reminder.is_visited,!1)},on:{change:function(e){t.$set(t.order.reminder,"is_visited",!1)}}}),t._v(" "),r("label",{attrs:{for:"absent"+t.index}},[t._v("no")])])])]):t._e(),t._v(" "),["collection","recovery","call","external-recovery"].includes(t.mode)?r("div",{staticClass:"col-12 col-xs-2 col-md col-lg d-flex align-items-center"},[r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.order.reminder.feedback,expression:"order.reminder.feedback"}],staticClass:"form-control",attrs:{rows:"1",disabled:!t.order.reminder.canBeSelected},domProps:{value:t.order.reminder.feedback},on:{input:function(e){e.target.composing||t.$set(t.order.reminder,"feedback",e.target.value)}}})]):t._e(),t._v(" "),"call"===t.mode?r("div",{staticClass:"col-12 col-xs-2 col-md col-lg d-flex align-items-center"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.order.promiseCall.date,expression:"order.promiseCall.date"}],staticClass:"form-control",attrs:{type:"date",disabled:!t.order.reminder.canBeSelected},domProps:{value:t.order.promiseCall.date},on:{input:function(e){e.target.composing||t.$set(t.order.promiseCall,"date",e.target.value)}}})]):t._e()])},staticRenderFns:[]}},dBli:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a,n=r("XPj8"),s=(a=n)&&a.__esModule?a:{default:a};function i(t){if(Array.isArray(t)){for(var e=0,r=Array(t.length);e<t.length;e++)r[e]=t[e];return r}return Array.from(t)}e.default={components:{Order:s.default},data:function(){return{listToOrder:null}},methods:{mode:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.$route.meta.mode.toLowerCase();return t?e===t:e}},computed:{details:function(){var t=1,e=["1<sup>st</sup>","2<sup>nd</sup>","3<sup>rd</sup>"],r=["Order Number","Order Summary","Customer Info Summary","Repayment Summary","History"];switch(this.mode()){case"call":t=4,e=[].concat(i(e),["Guarantor's"]),r=[].concat(i(r),["Feedback","Promise Date"]);break;case"collection":t=9,e.splice(2,1),r=[].concat(i(r),["Visited?","Feedback"]);break;case"recovery":t=11,r=[].concat(i(r),["Visited?","Feedback"]);break;case"external-recovery":t=14,e.splice(1,2),r=[].concat(i(r),["Delivered Letter?","Feedback"])}return this.mode("call")?this.listToOrder=8:this.listToOrder||(this.listToOrder=t),{tabs:e,headings:r,list:t}}}}},flWo:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("transition",{attrs:{name:"fade"}},[r("div",{attrs:{id:"reminder"}},[r("div",{staticClass:"mt-5 mb-3 attendance-head"},[r("ul",{staticClass:"nav nav-tabs justify-content-center p-0",attrs:{role:"tablist"}},[t.mode("call")?r("li",{staticClass:"col p-0 nav-item mb-0"},[r("a",{staticClass:"nav-link active",attrs:{"aria-selected":"true","data-toggle":"tab",href:"#reminder-panel",role:"tab"},domProps:{innerHTML:t._s("Promise "+t.mode())},on:{click:function(e){t.listToOrder=8}}})]):t._e(),t._v(" "),t._l(t.details.tabs,function(e,a){return r("li",{staticClass:"col p-0 nav-item mb-0"},[r("a",{staticClass:"nav-link",class:0===a&&!t.mode("call")&&"active",attrs:{"aria-selected":"true","data-toggle":"tab",href:"#reminder-panel",role:"tab"},domProps:{innerHTML:t._s(e+" "+t.mode())},on:{click:function(e){t.listToOrder=t.details.list+a}}})])})],2)]),t._v(" "),r("div",{staticClass:"mt-5 mb-3 attendance-head"},[r("div",{staticClass:"row px-4 pt-3 pb-4 text-center"},[r("div",{staticClass:"col light-heading"},[t._v("Action")]),t._v(" "),t._l(t.details.headings,function(e){return r("div",{staticClass:"col light-heading"},[t._v(t._s(e))])})],2)]),t._v(" "),r("order",{attrs:{list:t.listToOrder,mode:t.mode()}})],1)])},staticRenderFns:[]}},iNcs:function(t,e,r){var a=r("VU/8")(r("dBli"),r("flWo"),!1,function(t){r("LFDu")},"data-v-1ab70cbf",null);t.exports=a.exports},jyFz:function(t,e,r){var a=function(){return this}()||Function("return this")(),n=a.regeneratorRuntime&&Object.getOwnPropertyNames(a).indexOf("regeneratorRuntime")>=0,s=n&&a.regeneratorRuntime;if(a.regeneratorRuntime=void 0,t.exports=r("SldL"),n)a.regeneratorRuntime=s;else try{delete a.regeneratorRuntime}catch(t){a.regeneratorRuntime=void 0}},m2tk:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Message=void 0;var a=function(){function t(t,e){for(var r=0;r<e.length;r++){var a=e[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(e,r,a){return r&&t(e.prototype,r),a&&t(e,a),e}}(),n=r("p/p5");e.Message=function(){function t(e,r){var a=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.user_id=n,this.message=e,this.logToDB=a,this.contacts=r.split(",").filter(function(t){return/\S/.test(t)}).map(function(t){return"234"+t.trim().substr(1)}).join(","),this.setPages(),this.setContactCount()}return a(t,[{key:"setContactCount",value:function(){this.contact_count=this.contacts.split(",").length}},{key:"setPages",value:function(){this.pages=Math.ceil(this.message.length/160)}},{key:"send",value:function(t){var e=this;(0,n.get)("/api/message/create?to="+this.contacts+"&message="+this.message).then(function(r){return 200===r.status&&e.logToDB&&(delete e.logToDB,(0,n.post)("/api/message",e)),!!t&&t(r)}).catch(function(e){return!!t&&t(e)})}}]),t}()},nv24:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.EventBus=void 0;var a,n=r("I3G/"),s=(a=n)&&a.__esModule?a:{default:a};e.EventBus=new s.default},rN6N:function(t,e,r){"use strict";var a,n=function(){function t(t,e){for(var r=0;r<e.length;r++){var a=e[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(e,r,a){return r&&t(e.prototype,r),a&&t(e,a),e}}(),s=r("I3G/"),i=(a=s)&&a.__esModule?a:{default:a},o=r("N71M");function l(t){if(Array.isArray(t)){for(var e=0,r=Array(t.length);e<t.length;e++)r[e]=t[e];return r}return Array.from(t)}function c(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var d=new i.default,u=function(){function t(e,r){c(this,t),this._order=e,this._customer=r,this._paymentBanks=[],this._paymentMethods=[],this._actualPayDates=[],this._actualAmountsPaid=[],this._amountsToBePaid=[],this._repaymentCaptions=[],this._paymentStatusClasses=[],this._repaymentLevel=0,this._amountPaid=null,this._discountAmount=null,this._outstandingDebt=null,this._discountedTotal=null,this._defaultFee=null,this._totalPlusDefault=null,this._payments={},this.setIsOrderFormal(),this.setIsRepaymentValid(),this.setRepaymentData(),this.setCountAndInterval(),this.setCommonDetails(),this.setDueDates(),this.setPaymentStatusClasses(),this.calcAndSetPaymentSummary(),this.setBranch(),this.setDiscount()}return n(t,[{key:"setIsRepaymentValid",value:function(){this._isRepaymentValid=!(!this.order.repayment_formal&&!this.order.repayment_informal)}},{key:"setIsOrderFormal",value:function(){this._isOrderFormal=["formal","salaried"].includes(this._customer.employment_status.toLowerCase())}},{key:"setRepaymentData",value:function(){null!=this.order.repayment_formal&&(this._repaymentData=this.order.repayment_formal),null!=this.order.repayment_informal&&(this._repaymentData=this.order.repayment_informal)}},{key:"setCountAndInterval",value:function(){var e=void 0,r=void 0;new Date(this.order.order_date)<=new Date("2019-07-07")?(null!=this.order.repayment_formal&&(e=28,r=6),null!=this.order.repayment_informal&&(e=14,r=12)):t.isBankDraftAvailable()&&this.isOrderFormal?(e=28,r=6):(e=14,r=12),this._count=r,this._interval=e}},{key:"setDueDates",value:function(){this._dueDates=t.generateDueDates(this.order.order_date,this.interval,this.count)}},{key:"setCommonDetails",value:function(){if(this.isRepaymentValid)for(var t=1;t<this.count+1;t++){for(var e=d.$getColumn(t).split(""),r=[],a=1;a<=2;a++)r.unshift(e.pop());this._repaymentCaptions.push("<td>"+e.join("")+"<sup>"+r.join("")+"</sup></td>"),this._actualPayDates.push(this.repaymentData[d.$getColumn(t)+"_date"]),this._actualAmountsPaid.push(this.repaymentData[d.$getColumn(t)+"_pay"]),this._paymentBanks.push(this.repaymentData[d.$getColumn(t)+"_payment_bank"]),this._paymentMethods.push(this.repaymentData[d.$getColumn(t)+"_payment_method"]),this._amountsToBePaid.push(d.$roundDownAmt(this.order.repayment_amount)),this.repaymentData[d.$getColumn(t)+"_pay"]>0&&this._repaymentLevel++}}},{key:"setBranch",value:function(){var t=this;this.order.store_product?this._branch=o.store.state.branches.find(function(e){return parseInt(e.id)===parseInt(t.order.store_product.store_name)}):this._branch=null}},{key:"setPaymentStatusClasses",value:function(){if(this.isRepaymentValid)for(var e=1;e<this.count+1;e++){var r={class:null,icon:null},a=d.$getColumn(e),n=t.isPaymentDue(this.dueDates[e-1]),s=parseInt(this.repaymentData[a+"_pay"]);s?(r.class="paid",r.icon="fa-check"):n&&!s?(r.class="missed",r.icon="fa-times"):n||(r.class="pending",r.icon="fa-hourglass-start"),this._paymentStatusClasses.push(r)}}},{key:"calcAndSetPaymentSummary",value:function(){var t=function(t){return d.$formatCurrency(t)},e=this.order,r=e.repayment_amount,a=e.down_payment,n=e.product_price,s=6===this.count?.5:1,i=this.order.discount.percentage_discount,o=i>0?5===i?1:2:0,l=d.$roundDownAmt(r*s*o);this._discountAmount=t(l);var c=0,u=0;if(this.repaymentData){for(var m=0;m<this.count+1;m++){var h=parseInt(this.actualAmountsPaid[m]);u+=h?d.$roundDownAmt(h):0}c=d.$roundDownAmt(parseInt(a))+u+l}this._amountPaid=t(c);var v=d.$roundDownAmt(n-l);this._discountedTotal=t(v);var f=0;new Date(this.order.order_date)>new Date("2019-07-07")&&(f=500*[].length),this._defaultFee=t(f),this._totalPlusDefault=t(v+f),this._outstandingDebt=t(d.$roundDownAmt(parseInt(n)-c))}},{key:"setDiscount",value:function(){this._discount=this.order.discount.name+" "+this.order.discount.percentage_discount}},{key:"payments",set:function(t){this._payments=t},get:function(){return this._payments}},{key:"repaymentLevel",get:function(){return this._repaymentLevel}},{key:"order",get:function(){return this._order}},{key:"customer",get:function(){return this._customer}},{key:"isRepaymentValid",get:function(){return this._isRepaymentValid}},{key:"isOrderFormal",get:function(){return this._isOrderFormal}},{key:"repaymentData",get:function(){return this._repaymentData}},{key:"count",get:function(){return this._count}},{key:"interval",get:function(){return this._interval}},{key:"dueDates",get:function(){return this._dueDates}},{key:"paymentStatusClasses",get:function(){return this._paymentStatusClasses}},{key:"repaymentCaptions",get:function(){return this._repaymentCaptions}},{key:"paymentBanks",get:function(){return this._paymentBanks}},{key:"paymentMethods",get:function(){return this._paymentMethods}},{key:"actualPayDates",get:function(){return this._actualPayDates}},{key:"actualAmountsPaid",get:function(){return this._actualAmountsPaid}},{key:"amountsToBePaid",get:function(){return this._amountsToBePaid}},{key:"amountPaid",get:function(){return this._amountPaid}},{key:"discountAmount",get:function(){return this._discountAmount}},{key:"outstandingDebt",get:function(){return this._outstandingDebt}},{key:"discountedTotal",get:function(){return this._discountedTotal}},{key:"defaultFee",get:function(){return this._defaultFee}},{key:"totalPlusDefault",get:function(){return this._totalPlusDefault}},{key:"branch",get:function(){return this._branch}},{key:"discount",get:function(){return this._discount}},{key:"customerName",get:function(){return this.customer.first_name+" "+this.customer.last_name}},{key:"customerWGName",get:function(){var t=this.customer;return t.work_guarantor_first_name+" "+t.work_guarantor_last_name+" - "+t.work_guarantor_relationship}},{key:"customerPGName",get:function(){var t=this.customer;return t.personal_guarantor_first_name+" "+t.personal_guarantor_last_name+" - "+t.personal_guarantor_relationship}}],[{key:"generateDueDates",value:function(t,e,r){for(var a=[],n=0;n<r;n++){var s=new Date(t).addDays((n+1)*e),i=d.$getDate(s);a.push(i)}return a}},{key:"isPaymentDue",value:function(t){return new Date>new Date(t)}},{key:"isBankDraftAvailable",value:function(){return!1}},{key:"renderMessage",value:function(t){return t.sms?t.sms.message.replace(/%0a/g,"</br>"):t.feedback}},{key:"convertToName",value:function(t,e){return t?o.store.state[e].find(function(e){return e.id===t}).name:null}}]),t}(),m=function(t){function e(t,r){c(this,e);var a=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,t.customer));return a._isReminderSent=!1,a._dvaId=r,a._isSelected=!1,a.setReminder(null),a.setIsReminderSent(),a.setFinancialStatus(),a.setPromiseCall(),a.generateAndSetNextSMSReminder(),a}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,u),n(e,[{key:"setIsReminderSent",value:function(){var t=this,e=d.$getDate();this.order.reminders.forEach(function(r){var a=r.date.split(" "),n=a[0].split("-"),s=a[1].split(":"),i=[].concat(l(n),l(s)).map(function(t){return parseInt(t,10)});d.$getDate(new Date(Date.UTC.apply(Date,l(i))),!1)===e&&(t._isReminderSent=!0)})}},{key:"setFinancialStatus",value:function(){this._financialStatus=this.isRepaymentValid?"Paid: "+this.amountPaid+" | Debt: "+this.outstandingDebt:"no detail!"}},{key:"generateAndSetNextSMSReminder",value:function(){var t=null;this.order.store_product&&(t=this.order.store_product.product_name);var e=this.order,r=e.repayment_amount,a=void 0;e.order_date===d.$getDate()?(a="Hello "+this.customerName+", thanks for patronizing us. The following is the breakdown of the repayment plan for the purchase of "+t+":%0a",this.dueDates.forEach(function(t,e){return a+=d.$getColumn(e+1)+": "+t+" => "+d.$formatCurrency(d.$roundDownAmt(r))+"%0a"})):a="Hello "+this.customerName+", This is to remind you that your "+d.$getColumn(parseInt(this.repaymentLevel)+1)+" repayment of "+d.$formatCurrency(d.$roundDownAmt(r))+" for "+t+" will be due on "+this.dueDates[this.repaymentLevel]+". we will be expecting you.",this._nextSMSReminder=a+"Please remember to pay on time to avoid late fees and other penalties.%0aThank you."}},{key:"setReminder",value:function(t){this._reminder={type:t,feedback:null,is_visited:null,dva_id:this.dvaId,order_id:this.order.id,customer_id:this.customer.id,canBeSelected:!this.isReminderSent,repayment_level:this.repaymentLevel+"/"+this.count},"sms"===t&&(this._reminder.sms_id=null,this._reminder.contacts=this.customer.telephone)}},{key:"setPromiseCall",value:function(){this._promiseCall={order_id:this.order.id,user_id:this.dvaId,customer_id:this.customer.id,date:null}}},{key:"isSelected",set:function(t){this._isSelected=t},get:function(){return this._isSelected}},{key:"isReminderSent",get:function(){return this._isReminderSent}},{key:"dvaId",get:function(){return this._dvaId}},{key:"financialStatus",get:function(){return this._financialStatus}},{key:"nextSMSReminder",get:function(){return this._nextSMSReminder}},{key:"reminder",get:function(){return this._reminder}},{key:"promiseCall",get:function(){return this._promiseCall}}]),e}();t.exports={Order:u,OrderWithPromiseCall:m}},rjj0:function(t,e,r){var a="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!a)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var n=r("tTVk"),s={},i=a&&(document.head||document.getElementsByTagName("head")[0]),o=null,l=0,c=!1,d=function(){},u=null,m="data-vue-ssr-id",h="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function v(t){for(var e=0;e<t.length;e++){var r=t[e],a=s[r.id];if(a){a.refs++;for(var n=0;n<a.parts.length;n++)a.parts[n](r.parts[n]);for(;n<r.parts.length;n++)a.parts.push(_(r.parts[n]));a.parts.length>r.parts.length&&(a.parts.length=r.parts.length)}else{var i=[];for(n=0;n<r.parts.length;n++)i.push(_(r.parts[n]));s[r.id]={id:r.id,refs:1,parts:i}}}}function f(){var t=document.createElement("style");return t.type="text/css",i.appendChild(t),t}function _(t){var e,r,a=document.querySelector("style["+m+'~="'+t.id+'"]');if(a){if(c)return d;a.parentNode.removeChild(a)}if(h){var n=l++;a=o||(o=f()),e=g.bind(null,a,n,!1),r=g.bind(null,a,n,!0)}else a=f(),e=function(t,e){var r=e.css,a=e.media,n=e.sourceMap;a&&t.setAttribute("media",a);u.ssrId&&t.setAttribute(m,e.id);n&&(r+="\n/*# sourceURL="+n.sources[0]+" */",r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */");if(t.styleSheet)t.styleSheet.cssText=r;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(r))}}.bind(null,a),r=function(){a.parentNode.removeChild(a)};return e(t),function(a){if(a){if(a.css===t.css&&a.media===t.media&&a.sourceMap===t.sourceMap)return;e(t=a)}else r()}}t.exports=function(t,e,r,a){c=r,u=a||{};var i=n(t,e);return v(i),function(e){for(var r=[],a=0;a<i.length;a++){var o=i[a];(l=s[o.id]).refs--,r.push(l)}e?v(i=n(t,e)):i=[];for(a=0;a<r.length;a++){var l;if(0===(l=r[a]).refs){for(var c=0;c<l.parts.length;c++)l.parts[c]();delete s[l.id]}}}};var p,y=(p=[],function(t,e){return p[t]=e,p.filter(Boolean).join("\n")});function g(t,e,r,a){var n=r?"":a.css;if(t.styleSheet)t.styleSheet.cssText=y(e,n);else{var s=document.createTextNode(n),i=t.childNodes;i[e]&&t.removeChild(i[e]),i.length?t.insertBefore(s,i[e]):t.appendChild(s)}}},tTVk:function(t,e){t.exports=function(t,e){for(var r=[],a={},n=0;n<e.length;n++){var s=e[n],i=s[0],o={id:t+":"+n,css:s[1],media:s[2],sourceMap:s[3]};a[i]?a[i].parts.push(o):r.push(a[i]={id:i,parts:[o]})}return r}}});
>>>>>>> 74194a5f1cc9829de2f06759c7ace0b254cd3b2f
=======
webpackJsonp([5],{"+O4B":function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"mt-5 attendance-head"},[r("div",{staticClass:"mb-5 row align-items-center"},[r("div",{staticClass:"col-12 title-con"},[r("span",{staticClass:"title"},[t._v(t._s(t._f("capitalize")(t.title)))]),t._v(" "),t.to?r("div",{staticClass:"row justify-content-end"},[r("router-link",{staticClass:"text-link mt-3",attrs:{to:t.to}},[t._v(t._s(t.buttonTitle))])],1):t._e()])])])},staticRenderFns:[]}},"7elN":function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a,n=r("p/p5"),s=r("K23+"),i=(a=s)&&a.__esModule?a:{default:a},o=(r("nv24"),r("rN6N"));e.default={props:{mode:null,index:null,startIndex:{default:1},order:{default:null,type:o.Order}},created:function(){this.order.setReminder(this.mode)},methods:{logReminder:function(){var t=this;this.$LIPS(!0),delete this.order.reminder.order,delete this.order.reminder.canBeSelected,(0,n.post)("/api/reminder",{reminders:[this.order.reminder]}).then(function(e){return e.data.saved&&t.logPromiseCall()}).catch(function(){return t.$displayErrorMessage("Error Logging reminders!")})},logPromiseCall:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Reminder Logged!";this.order.promiseCall.date?(0,n.post)("/api/promise_call",this.order.promiseCall).then(function(r){return r.data.saved&&t.done(e+" Promise call added!")}).catch(function(){return t.$displayErrorMessage("Error Logging promise call!")}):this.done(e)},done:function(t){this.$scrollToTop(),i.default.setSuccess(t,5e3),this.$emit("done")},toggleSelect:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;this.order.reminder.canBeSelected&&(this.order.isSelected=null!==t?t:!this.order.isSelected)}}}},C326:function(t,e,r){var a=r("I/R6");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);r("rjj0")("b73e2b8a",a,!0,{})},EJ7O:function(t,e,r){var a=r("VU/8")(r("oKx2"),r("+O4B"),!1,null,null,null);t.exports=a.exports},"I/R6":function(t,e,r){(t.exports=r("FZ+f")(!1)).push([t.i,".table-separator[data-v-ec211ae4]{border-top:2px solid #dee1e4}",""])},SldL:function(t,e){!function(e){"use strict";var r,a=Object.prototype,n=a.hasOwnProperty,s="function"==typeof Symbol?Symbol:{},i=s.iterator||"@@iterator",o=s.asyncIterator||"@@asyncIterator",l=s.toStringTag||"@@toStringTag",c="object"==typeof t,d=e.regeneratorRuntime;if(d)c&&(t.exports=d);else{(d=e.regeneratorRuntime=c?t.exports:{}).wrap=C;var u="suspendedStart",m="suspendedYield",h="executing",v="completed",f={},_={};_[i]=function(){return this};var p=Object.getPrototypeOf,y=p&&p(p(L([])));y&&y!==a&&n.call(y,i)&&(_=y);var g=w.prototype=x.prototype=Object.create(_);k.prototype=g.constructor=w,w.constructor=k,w[l]=k.displayName="GeneratorFunction",d.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===k||"GeneratorFunction"===(e.displayName||e.name))},d.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,w):(t.__proto__=w,l in t||(t[l]="GeneratorFunction")),t.prototype=Object.create(g),t},d.awrap=function(t){return{__await:t}},D(S.prototype),S.prototype[o]=function(){return this},d.AsyncIterator=S,d.async=function(t,e,r,a){var n=new S(C(t,e,r,a));return d.isGeneratorFunction(e)?n:n.next().then(function(t){return t.done?t.value:n.next()})},D(g),g[l]="Generator",g[i]=function(){return this},g.toString=function(){return"[object Generator]"},d.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var a=e.pop();if(a in t)return r.value=a,r.done=!1,r}return r.done=!0,r}},d.values=L,E.prototype={constructor:E,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach($),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function a(a,n){return o.type="throw",o.arg=t,e.next=a,n&&(e.method="next",e.arg=r),!!n}for(var s=this.tryEntries.length-1;s>=0;--s){var i=this.tryEntries[s],o=i.completion;if("root"===i.tryLoc)return a("end");if(i.tryLoc<=this.prev){var l=n.call(i,"catchLoc"),c=n.call(i,"finallyLoc");if(l&&c){if(this.prev<i.catchLoc)return a(i.catchLoc,!0);if(this.prev<i.finallyLoc)return a(i.finallyLoc)}else if(l){if(this.prev<i.catchLoc)return a(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return a(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var s=a;break}}s&&("break"===t||"continue"===t)&&s.tryLoc<=e&&e<=s.finallyLoc&&(s=null);var i=s?s.completion:{};return i.type=t,i.arg=e,s?(this.method="next",this.next=s.finallyLoc,f):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),$(r),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var a=r.completion;if("throw"===a.type){var n=a.arg;$(r)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,a){return this.delegate={iterator:L(t),resultName:e,nextLoc:a},"next"===this.method&&(this.arg=r),f}}}function C(t,e,r,a){var n=e&&e.prototype instanceof x?e:x,s=Object.create(n.prototype),i=new E(a||[]);return s._invoke=function(t,e,r){var a=u;return function(n,s){if(a===h)throw new Error("Generator is already running");if(a===v){if("throw"===n)throw s;return T()}for(r.method=n,r.arg=s;;){var i=r.delegate;if(i){var o=O(i,r);if(o){if(o===f)continue;return o}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(a===u)throw a=v,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);a=h;var l=b(t,e,r);if("normal"===l.type){if(a=r.done?v:m,l.arg===f)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(a=v,r.method="throw",r.arg=l.arg)}}}(t,r,i),s}function b(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}function x(){}function k(){}function w(){}function D(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function S(t){var e;this._invoke=function(r,a){function s(){return new Promise(function(e,s){!function e(r,a,s,i){var o=b(t[r],t,a);if("throw"!==o.type){var l=o.arg,c=l.value;return c&&"object"==typeof c&&n.call(c,"__await")?Promise.resolve(c.__await).then(function(t){e("next",t,s,i)},function(t){e("throw",t,s,i)}):Promise.resolve(c).then(function(t){l.value=t,s(l)},i)}i(o.arg)}(r,a,e,s)})}return e=e?e.then(s,s):s()}}function O(t,e){var a=t.iterator[e.method];if(a===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=r,O(t,e),"throw"===e.method))return f;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return f}var n=b(a,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,f;var s=n.arg;return s?s.done?(e[t.resultName]=s.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,f):s:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function P(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function $(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function E(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(P,this),this.reset(!0)}function L(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var a=-1,s=function e(){for(;++a<t.length;)if(n.call(t,a))return e.value=t[a],e.done=!1,e;return e.value=r,e.done=!0,e};return s.next=s}}return{next:T}}function T(){return{value:r,done:!0}}}(function(){return this}()||Function("return this")())},TZKk:function(t,e,r){var a=r("VU/8")(r("7elN"),r("b4Eb"),!1,null,null,null);t.exports=a.exports},UtK9:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("transition",{attrs:{name:"fade"}},[r("div",{staticClass:"attendance",attrs:{id:"reminder"}},[r("custom-header",{attrs:{title:"Order List"}}),t._v(" "),r("div",{staticClass:"mt-5 row attendance-head"},t._l(t.filters,function(e){var a=e.name;return r("div",{staticClass:"col-4 col-sm-3"},[r("div",{staticClass:"row"},[r("div",{staticClass:"light-heading"},[r("span",{staticClass:"d-none d-sm-inline"},[t._v("Select")]),t._v(" "+t._s(t._f("capitalize")(a))+"\n                    ")])])])})),t._v(" "),r("div",{staticClass:"mt-2 mt-lg-3 row attendance-head attendance-view"},[t._l(t.filters,function(e){var a=e.name,n=e.model;return r("div",{staticClass:"col-4 col-sm-3"},[r("div",{staticClass:"row"},["branch"===a?r("select",{directives:[{name:"model",rawName:"v-model",value:t.$data[n],expression:"$data[model]"}],staticClass:"custom-select",on:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;t.fetchData()},change:function(e){var r=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.$set(t.$data,n,e.target.multiple?r:r[0])}}},[r("option",{attrs:{disabled:"",selected:"",value:""}},[t._v(t._s(t._f("capitalize")(a)))]),t._v(" "),t._l(t.$store.getters.getBranches,function(e){var a=e.name,n=e.id;return r("option",{domProps:{value:n}},[t._v("\n                            "+t._s(t._f("capitalize")(a))+"\n                        ")])})],2):r("div",{staticClass:"form-group w-100"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.$data[n],expression:"$data[model]"}],staticClass:"form-control",attrs:{type:"date"},domProps:{value:t.$data[n]},on:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;t.fetchData()},input:function(e){e.target.composing||t.$set(t.$data,n,e.target.value)}}})])])])}),t._v(" "),r("div",{staticClass:"col-12 col-sm-3"},[r("div",{staticClass:"row d-flex justify-content-end"},[r("button",{staticClass:"btn btn-primary bg-default mt-0 myBtn",on:{click:function(e){t.fetchData()}}},[t._v("Apply Filter")])])])],2),t._v(" "),r("div",{staticClass:"mt-5 mb-3 attendance-head"},[r("div",{staticClass:"w-100 my-5 mx-0 hr"}),t._v(" "),r("div",{staticClass:"row px-4 pt-3 pb-4 text-center"},[r("div",{staticClass:"col light-heading",staticStyle:{"max-width":"120px"}},[t._v("S/N")]),t._v(" "),t._l(t.headings,function(e){return r("div",{staticClass:"col light-heading"},[t._v(t._s(e))])})],2)]),t._v(" "),t.show?r("order",{attrs:{"start-index":t.orders.from,"pre-loaded-order":t.response,mode:"normal-list"}}):t._e(),t._v(" "),t.show?r("div",{staticClass:"mt-1 attendance-body"},[r("div",{staticClass:"mb-5 px-0 row align-items-center"},[r("div",{staticClass:"w-100 mb-4 mt-5 mx-0 hr"}),t._v(" "),r("div",{staticClass:"clearfix w-100 mt-4 d-flex bd-highlight"},[r("div",{staticClass:"col d-flex justify-content-start align-items-center pl-0"},[r("strong",{staticClass:"light-heading float-left"},[t._v("\n                            Displaying: "+t._s(t.orders.from)+" - "+t._s(t.orders.to)+" of "+t._s(t.orders.total)+"\n                        ")])]),t._v(" "),r("div",{staticClass:"col d-flex justify-content-center align-items-center"},[r("div",{staticClass:"mr-5"},[r("span",{staticClass:"d-inline light-heading mr-2"},[t._v("set current Page")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.page,expression:"page"}],staticClass:"d-inline form-control ",staticStyle:{"max-width":"50px"},attrs:{type:"number"},domProps:{value:t.page},on:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;t.fetchData()},input:function(e){e.target.composing||(t.page=e.target.value)}}})]),t._v(" "),r("div",{staticClass:"ml-5"},[r("span",{staticClass:"d-inline light-heading mr-2"},[t._v("set page-size")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.page_size,expression:"page_size"}],staticClass:"d-inline form-control",staticStyle:{"max-width":"50px"},attrs:{type:"number"},domProps:{value:t.page_size},on:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;t.fetchData()},input:function(e){e.target.composing||(t.page_size=e.target.value)}}})])]),t._v(" "),r("nav",{staticClass:"col d-flex justify-content-end align-items-center pr-0"},[r("ul",{staticClass:"pagination pagination-lg mb-0"},[r("li",{staticClass:"page-item",class:{disabled:!t.orders.first_page_url}},[r("a",{staticClass:"page-link",attrs:{href:"javascript:"},on:{click:function(e){t.prev(1)}}},[t._v("First")])]),t._v(" "),r("li",{staticClass:"page-item",class:{disabled:!t.orders.prev_page_url}},[r("a",{staticClass:"page-link",attrs:{href:"javascript:"},on:{click:function(e){t.prev()}}},[t._v("prev")])]),t._v(" "),r("li",{staticClass:"page-item"},[r("span",{staticClass:"page-link"},[t._v("Current Page: "+t._s(t.orders.current_page))])]),t._v(" "),r("li",{staticClass:"page-item",class:{disabled:!t.orders.next_page_url}},[r("a",{staticClass:"page-link",attrs:{href:"javascript:"},on:{click:function(e){t.next()}}},[t._v("Next")])]),t._v(" "),r("li",{staticClass:"page-item",class:{disabled:!t.orders.last_page_url}},[r("a",{staticClass:"page-link",attrs:{href:"javascript:"},on:{click:function(e){t.next(t.orders.last_page)}}},[t._v("Last")])])])])])])]):t._e()],1)])},staticRenderFns:[]}},XPKX:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t.show?r("div",{staticClass:"tab-content mt-1 attendance-body"},[r("div",{staticClass:"tab-pane active text-center",attrs:{id:"reminder-panel",role:"tabpanel"}},t._l(t.orders,function(e,a){return r("order-item",{key:e.order.id,attrs:{index:a,"start-index":t.startIndex,order:e,mode:t.mode},on:{done:function(e){t.fetchList(t.list)},display:t.displayDetails}})})),t._v(" "),"normal-list"!=t.mode?r("div",{staticClass:"w-100 my-5 mx-0 hr"}):t._e()]):r("div",{staticClass:"tab-content mt-1 attendance-body"},[t._m(0)]),t._v(" "),t.show&&"sms"===t.mode?r("div",{staticClass:"mt-1 attendance-body"},[r("div",{staticClass:"mb-5 px-0 row align-items-center"},[r("div",{staticClass:"clearfix d-flex justify-content-end w-100"},[r("button",{staticClass:"btn bg-default",attrs:{disabled:t.$isProcessing},on:{click:t.processSelected}},[t._v("\n                    Send Reminder(s) "),r("i",{staticClass:"far fa-paper-plane ml-1"})])])])]):t._e(),t._v(" "),r("div",{staticClass:"modal fade",attrs:{id:"purchase_order"}},[r("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[r("div",{staticClass:"modal-content"},[t._m(1),t._v(" "),t.showModalContent?r("div",{staticClass:"modal-body"},[r("div",{staticClass:"table-responsive"},[r("table",{staticClass:"table table-bordered table-striped"},[r("tbody",[r("tr",[r("th",[t._v("Order ID")]),t._v(" "),r("td",[t._v(t._s(t.activeOrder.order.id))])]),t._v(" "),r("tr",[r("th",[t._v("Order date")]),t._v(" "),r("td",[t._v(t._s(t.activeOrder.order.order_date))])]),t._v(" "),r("tr",[r("th",[t._v("Product")]),t._v(" "),r("td",[t._v(t._s(t.activeOrder.order.store_product.product_name))])]),t._v(" "),r("tr",[r("th",[t._v("Repayment")]),t._v(" "),r("td",[t._v(t._s(t.$formatCurrency(t.activeOrder.amountsToBePaid[0])))])]),t._v(" "),r("tr",[r("th",[t._v("Down Payment")]),t._v(" "),r("td",[t._v(t._s(t.$formatCurrency(t.activeOrder.order.down_payment)))])]),t._v(" "),r("tr",[r("th",[t._v("Discount (%)")]),t._v(" "),r("td",[t._v(t._s(t._f("capitalize")(t.activeOrder.discount)))])]),t._v(" "),r("tr",[r("th",[t._v("Sale Type")]),t._v(" "),r("td",[t._v(t._s(t._f("capitalize")(t.activeOrder.order.sales_type.name)))])]),t._v(" "),r("tr",[r("th",[t._v("Total amount to Pay")]),t._v(" "),r("td",[t._v(t._s(t.$formatCurrency(t.activeOrder.order.product_price)))])]),t._v(" "),r("tr",[r("th",[t._v("Processed by")]),t._v(" "),r("td",[t._v(t._s(t.activeOrder.order.floor_agent?t.activeOrder.order.floor_agent.full_name:null)+"\n                                ")])])])])])]):t._e(),t._v(" "),t._m(2)])])]),t._v(" "),r("div",{staticClass:"modal fade",attrs:{id:"customer_info"}},[r("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[r("div",{staticClass:"modal-content"},[t._m(3),t._v(" "),t.showModalContent?r("div",{staticClass:"modal-body"},[r("div",{staticClass:"table-responsive"},[r("table",{staticClass:"table table-bordered table-striped"},[r("tbody",[r("tr",[r("th",[t._v("Customer ID")]),t._v(" "),r("td",[t._v(t._s(t.activeOrder.customer.id))])]),t._v(" "),r("tr",[r("th",[t._v("Full Name")]),t._v(" "),r("td",[t._v(t._s(t.$getCustomerFullName(t.activeOrder.customer)))])]),t._v(" "),r("tr",[r("th",[t._v("Address")]),t._v(" "),r("td",[t._v(t._s(t.$getCustomerAddress(t.activeOrder.customer)))])]),t._v(" "),r("tr",[r("th",[t._v("Phone")]),t._v(" "),r("td",[t._v(t._s(t.activeOrder.customer.telephone))])]),t._v(" "),r("tr",[r("th",[t._v("Branch")]),t._v(" "),r("td",[t._v(t._s(t.activeOrder.customer.branch.name))])]),t._v(" "),r("tr",[r("th",[t._v("Category")]),t._v(" "),r("td",[t._v(t._s(t.activeOrder.customer.employment_status))])]),t._v(" "),r("tr",[r("th",[t._v("Work guarantor name")]),t._v(" "),r("td",[t._v(t._s(t.activeOrder.customerWGName)+"\n                                ")])]),t._v(" "),r("tr",[r("th",[t._v("Work guarantor phone")]),t._v(" "),r("td",[t._v(t._s(t.activeOrder.customer.work_guarantor_telno))])]),t._v(" "),r("tr",[r("th",[t._v("Personal guarantor name")]),t._v(" "),r("td",[t._v(t._s(t.activeOrder.customerPGName)+"\n                                ")])]),t._v(" "),r("tr",[r("th",[t._v("Personal guarantor phone")]),t._v(" "),r("td",[t._v(t._s(t.activeOrder.customer.personal_guarantor_telno))])]),t._v(" "),r("tr",[r("th",[t._v("Verified by")]),t._v(" "),r("td",[r("router-link",{staticClass:"text-link",attrs:{target:"_blank",to:"/dva/verification?id="+t.activeOrder.customer.id}},[t._v("\n                                        click here to see verifications status\n                                    ")])],1)])])])])]):t._e(),t._v(" "),t._m(4)])])]),t._v(" "),r("div",{staticClass:"modal fade repayment",attrs:{id:"repayment"}},[r("div",{staticClass:"modal-dialog modal-xl",attrs:{role:"document"}},[t.showModalContent?r("div",{staticClass:"modal-content"},[r("div",{staticClass:"modal-header py-2"},[r("h6",{staticClass:"modal-title py-1"},[t._v("\n                        Repayment Plan/Summary - "+t._s(t._f("capitalize")(t.activeOrder.customer.employment_status))+"\n                    ")]),t._v(" "),t._m(5)]),t._v(" "),r("div",{staticClass:"modal-body"},[r("div",{staticClass:"table-responsive"},[r("h5",{staticClass:"mt-3 mb-0"},[t._v("Order Information")]),t._v(" "),r("table",{staticClass:"table table-bordered"},[r("tbody",[t._m(6),t._v(" "),r("tr",[r("td",{staticClass:"font-weight-bold"},[t._v(t._s(t.activeOrder.customerName)+"\n                                ")]),t._v(" "),r("th",[t._v(t._s(t.activeOrder.order.id))]),t._v(" "),r("th",[t._v(t._s(t.activeOrder.order.store_product.product_name))]),t._v(" "),r("td",{staticClass:"font-weight-bold"},[t._v(t._s(t.activeOrder.branch.name))])])])]),t._v(" "),r("h5",{staticClass:"mt-5 mb-0"},[t._v("Amortization Schedule")]),t._v(" "),r("table",{staticClass:"table table-bordered"},[r("tbody",{staticClass:"text-center"},[r("tr",[r("th",[t._v("Repayment")]),t._v(" "),t._l(t.activeOrder.repaymentCaptions,function(e){return r("td",{domProps:{innerHTML:t._s(e)}})})],2),t._v(" "),r("tr",{staticClass:"table-separator"},[r("th",[t._v("Due Date")]),t._v(" "),t._l(t.activeOrder.dueDates,function(e){return r("td",[t._v(t._s(e))])})],2),t._v(" "),r("tr",[r("th",[t._v("Actual Pay Day")]),t._v(" "),t._l(t.activeOrder.actualPayDates,function(e){return r("td",[t._v(t._s(e))])})],2),t._v(" "),r("tr",{staticClass:"table-separator"},[r("th",[t._v("Status")]),t._v(" "),t._l(t.activeOrder.paymentStatusClasses,function(t){return r("td",{class:t.class},[r("i",{staticClass:"fas",class:t.icon})])})],2),t._v(" "),r("tr",{staticClass:"table-separator"},[r("th",[t._v("Repayment Amount")]),t._v(" "),t._l(t.activeOrder.amountsToBePaid,function(e){return r("td",[t._v(t._s(t.$formatCurrency(e)))])})],2),t._v(" "),r("tr",[r("th",[t._v("Actual Amount Paid")]),t._v(" "),t._l(t.activeOrder.actualAmountsPaid,function(e){return r("td",[t._v(t._s(t.$formatCurrency(e))+"\n                                ")])})],2),t._v(" "),r("tr",{staticClass:"table-separator"},[r("th",[t._v("Payment Method")]),t._v(" "),t._l(t.activeOrder.paymentMethods,function(e){return r("td",{staticClass:"text-capitalize"},[t._v("\n                                    "+t._s(t.Order.convertToName(e,"paymentMethods"))+"\n                                ")])})],2),t._v(" "),r("tr",[r("th",[t._v("Bank")]),t._v(" "),t._l(t.activeOrder.paymentBanks,function(e){return r("td",{staticClass:"text-capitalize"},[t._v("\n                                    "+t._s(t.Order.convertToName(e,"banks"))+"\n                                ")])})],2)])]),t._v(" "),r("h5",{staticClass:"mt-5 mb-0"},[t._v("Payment Summary")]),t._v(" "),r("table",{staticClass:"table table-bordered"},[r("tbody",{staticClass:"text-center"},[r("tr",{staticClass:"table-separator"},[r("td",{staticClass:"text-left"},[t._v("Discount Detail (%)")]),t._v(" "),r("th",[t._v(t._s(t._f("capitalize")(t.activeOrder.discount)))]),t._v(" "),r("td",[t._v("Total Before Discount")]),t._v(" "),r("th",[t._v(t._s(t.$formatCurrency(t.$roundDownAmt(t.activeOrder.order.product_price))))]),t._v(" "),r("td",[t._v("Total Paid")]),t._v(" "),r("th",[t._v(t._s(t.activeOrder.amountPaid))])]),t._v(" "),r("tr",[r("td",{staticClass:"text-left"},[t._v("Discount Amount")]),t._v(" "),r("th",[t._v(t._s(t.activeOrder.discountAmount))]),t._v(" "),r("td",[t._v("Total After Discount")]),t._v(" "),r("th",[t._v(t._s(t.activeOrder.discountedTotal))]),t._v(" "),r("td",[t._v("Total Debt")]),t._v(" "),r("th",[t._v(t._s(t.activeOrder.outstandingDebt))])]),t._v(" "),r("tr",[r("td",{staticClass:"text-left"},[t._v("Down Payment")]),t._v(" "),r("th",[t._v(t._s(t.$formatCurrency(t.$roundDownAmt(t.activeOrder.order.down_payment))))]),t._v(" "),r("td",[t._v("Total Plus Default Fee")]),t._v(" "),r("th",[t._v(t._s(t.activeOrder.totalPlusDefault))]),t._v(" "),r("td",[t._v("Default Fee")]),t._v(" "),r("th",[t._v(t._s(t.activeOrder.defaultFee))])])])])])]),t._v(" "),t._m(7)]):t._e()])]),t._v(" "),r("div",{staticClass:"modal fade repayment",attrs:{id:"reminder_history"}},[r("div",{staticClass:"modal-dialog modal-lg",attrs:{role:"document"}},[r("div",{staticClass:"modal-content"},[t._m(8),t._v(" "),t.showModalContent?r("div",{staticClass:"modal-body"},[r("div",{staticClass:"table-responsive"},[t.activeOrder.order.reminders.length?r("table",{staticClass:"table table-bordered table-striped"},[t._m(9),t._v(" "),r("tbody",t._l(t.activeOrder.order.reminders,function(e,a){return r("tr",[r("th",[t._v(t._s(a+1))]),t._v(" "),r("td",[t._v(t._s(t.$dateTimeConvert(e.date)))]),t._v(" "),r("td",[t._v(t._s(e.type))]),t._v(" "),r("td",{domProps:{innerHTML:t._s(t.Order.renderMessage(e))}}),t._v(" "),r("td",[t._v(t._s(e.user.full_name))])])}))]):r("div",{staticClass:"my-4 text-center"},[t._v("\n                            no reminders have been sent yet!\n                        ")])])]):t._e(),t._v(" "),t._m(10)])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"tab-pane active text-center"},[e("div",{staticClass:"mb-3 row attendance-item"},[e("div",{staticClass:"col d-flex light-heading align-items-center justify-content-center"},[this._v("\n                    No records found!\n                ")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"modal-header py-2"},[e("h6",{staticClass:"modal-title py-1"},[this._v("Purchase Order Summary")]),this._v(" "),e("a",{staticClass:"close py-1",attrs:{"aria-label":"Close","data-dismiss":"modal"}},[e("span",{staticClass:"modal-close text-danger",attrs:{"aria-hidden":"true"}},[e("i",{staticClass:"fas fa-times"})])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"modal-footer"},[e("a",{staticClass:"text-link mt-3 w-100",staticStyle:{"text-align":"right"},attrs:{"data-dismiss":"modal",href:"javascript:"}},[this._v("close dialogue")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"modal-header py-2"},[e("h6",{staticClass:"modal-title py-1"},[this._v("Customer Info. Summary")]),this._v(" "),e("a",{staticClass:"close py-1",attrs:{"aria-label":"Close","data-dismiss":"modal"}},[e("span",{staticClass:"modal-close text-danger",attrs:{"aria-hidden":"true"}},[e("i",{staticClass:"fas fa-times"})])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"modal-footer"},[e("a",{staticClass:"text-link mt-3 w-100 text-right",attrs:{"data-dismiss":"modal",href:"#"}},[this._v("\n                        close dialogue\n                    ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"close py-1",attrs:{"aria-label":"Close","data-dismiss":"modal"}},[e("span",{staticClass:"modal-close text-danger",attrs:{"aria-hidden":"true"}},[e("i",{staticClass:"fas fa-times"})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",{staticClass:"table-separator"},[e("td",[this._v("Name")]),this._v(" "),e("td",[this._v("Order Id")]),this._v(" "),e("td",[this._v("Product")]),this._v(" "),e("th",[this._v("Branch")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"modal-footer d-flex justify-content-end"},[e("a",{staticClass:"text-link mt-3",attrs:{"data-dismiss":"modal",href:"javascript:"}},[this._v("close dialogue")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"modal-header py-2"},[e("h6",{staticClass:"modal-title py-1"},[this._v("History")]),this._v(" "),e("a",{staticClass:"close py-1",attrs:{"aria-label":"Close","data-dismiss":"modal"}},[e("span",{staticClass:"modal-close text-danger",attrs:{"aria-hidden":"true"}},[e("i",{staticClass:"fas fa-times"})])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("thead",[r("tr",[r("th",[t._v("S/N")]),t._v(" "),r("th",[t._v("Date")]),t._v(" "),r("th",[t._v("Type")]),t._v(" "),r("th",[t._v("SMS/Feedback")]),t._v(" "),r("th",[t._v("sender")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"modal-footer"},[e("a",{staticClass:"text-link mt-3 w-100",staticStyle:{"text-align":"right"},attrs:{"data-dismiss":"modal",href:"javascript:"}},[this._v("close dialogue")])])}]}},XPj8:function(t,e,r){var a=r("VU/8")(r("aSpy"),r("XPKX"),!1,function(t){r("C326")},"data-v-ec211ae4",null);t.exports=a.exports},Xxa5:function(t,e,r){t.exports=r("jyFz")},aSpy:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=m(r("Xxa5")),n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(t[a]=r[a])}return t},s=m(r("I3G/")),i=r("NYxO"),o=m(r("K23+")),l=r("m2tk"),c=r("p/p5"),d=m(r("TZKk")),u=r("rN6N");function m(t){return t&&t.__esModule?t:{default:t}}function h(t){return function(){var e=t.apply(this,arguments);return new Promise(function(t,r){return function a(n,s){try{var i=e[n](s),o=i.value}catch(t){return void r(t)}if(!i.done)return Promise.resolve(o).then(function(t){a("next",t)},function(t){a("throw",t)});t(o)}("next")})}}e.default={components:{OrderItem:d.default},props:{list:{default:null},mode:null,preLoadedOrder:null,startIndex:null},watch:{list:function(t){this.fetchList(t)},preLoadedOrder:function(t){this.prepareForm(t)}},data:function(){return{orders:[],show:!1,showModalContent:!1,Order:u.Order,activeOrder:null}},computed:n({},(0,i.mapGetters)(["auth"])),methods:{prepareForm:function(){var t=h(a.default.mark(function t(e){var r=this;return a.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this.show=!1,this.showModalContent=!1,this.orders=[],t.next=5,e.orders.forEach(function(t,a){var n=t instanceof u.Order?t:new u.OrderWithPromiseCall(t,e.dva_id);(r.auth("DVALead")||r.auth("FSLLead")||r.auth("CAGAccess")||parseInt(n.order.store_product.store_name)===e.branch)&&function(){if([8,1].includes(r.list)||"normal-list"===r.mode)return!0;var t=void 0,e=void 0,a=[],s=new Date,i=1===s.getDay()||[9,10,11,12,13,14].includes(r.list)?3:1;if(!n.repaymentData)return!1;for(var o=1;o<n.count+1;o++){var l=r.$getColumn(o);if(!n.repaymentData[l+"_pay"]){t=u.OrderWithPromiseCall.generateDueDates(n.order.order_date,n.interval,n.count)[o-1];break}}switch(r.list){case 2:e=7;break;case 3:e=3;break;case 4:e=0;break;case 5:e=1;break;case 6:e=5;break;case 7:e=31;break;case 9:e=38;break;case 10:e=45;break;case 11:e=61;break;case 12:e=75;break;case 13:e=90;break;case 14:e=121}if(["collection","recovery","call","external-recovery"].includes(r.mode))for(var c=0;c<i;c++)a.push(r.$getDate(s.addDays(-(c+e))));if("sms"===r.mode)for(var d=0;d<i;d++)a.push(r.$getDate(s.addDays(d+e)));return a.includes(t)}()&&r.orders.push(n)});case 5:this.orders.length&&(this.show=!0),this.$LIPS(!1);case 7:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),fetchList:function(t){var e,r=this;this.$LIPS(!0),(0,c.get)((e={query:{list:t}},"/api/reminder/create?list="+e.query.list)).then(function(e){var a=e.data;8===t&&(a.orders=a.orders.map(function(t){return t.order})),r.prepareForm(a)})},displayDetails:function(){var t=h(a.default.mark(function t(e,r){return a.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.default.set(this.$data,"activeOrder",e);case 2:return this.showModalContent=!0,t.abrupt("return",$("#"+r).modal("toggle"));case 4:case"end":return t.stop()}},t,this)}));return function(e,r){return t.apply(this,arguments)}}(),processSelected:function(){this.$LIPS(!0);var t=this.orders.filter(function(t){return t.isSelected});if(!t.length)return this.$displayErrorMessage("please select at least one!"),this.$LIPS(!1);this.sendSMSReminders(t)},sendSMSReminders:function(t){var e=this,r=[];t.forEach(function(a,n){var s=new l.Message(a.nextSMSReminder,a.reminder.contacts,!1,a.dvaId);s.send(function(a){200===a.status&&(delete s.logToDB,r.push(s)),n+1===t.length&&e.logSentMessages(t,r)})})},logSentMessages:function(t,e){var r=this;e.length>0?(0,c.post)("/api/message",{messages:e,bulk:!0}).then(function(e){var a=e.data,n=a.sentAndLogged,s=a.ids;n?r.logSentReminders(t,s):r.$displayErrorMessage("Error Logging sent sms details!")}):this.$displayErrorMessage("Error sending messages!")},logSentReminders:function(t,e){var r=this;if(e.reverse(),e.length>0){var a=t.map(function(t,r){return t.reminder.sms_id=e[r],delete t.reminder.contacts,delete t.reminder.canBeSelected,t.reminder});(0,c.post)("/api/reminder",{reminders:a}).then(function(t){t.data.saved?(o.default.setSuccess("Reminders have been sent successfully!",5e4),r.fetchList(r.list)):r.$displayErrorMessage("Error sending reminders!"),r.$scrollToTop()})}else this.$displayErrorMessage("Error logging sent messages!")}},mounted:function(){var t=this;"normal-list"!=this.mode?this.fetchList(this.list):this.prepareForm(this.preLoadedOrder),$(document).on("hidden.bs.modal",".modal",function(){t.activeOrder=null,t.showModalContent=!1})},created:function(){this.$prepareBanks(),this.$prepareBranches(),this.$preparePaymentMethods()}}},b4Eb:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"mb-3 row attendance-item"},[r("div",{staticClass:"col-12 col-xs-2 col-md col-lg d-flex align-items-center",staticStyle:{"max-width":"120px"}},["normal-list"===t.mode?r("span"):t.order.reminder.canBeSelected&&["collection","recovery","call","external-recovery"].includes(t.mode)?r("span",{staticClass:"user mx-auto bg-pending text-white",on:{click:t.logReminder}},[r("i",{staticClass:"fas fa-hourglass-start"})]):t.order.reminder.canBeSelected&&"sms"===t.mode?r("div",{staticClass:"d-flex align-items-center"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.order.isSelected,expression:"order.isSelected"}],staticClass:"form-check-input my-0 mx-4 float-left position-relative ",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.order.isSelected)?t._i(t.order.isSelected,null)>-1:t.order.isSelected},on:{click:t.toggleSelect,change:function(e){var r=t.order.isSelected,a=e.target,n=!!a.checked;if(Array.isArray(r)){var s=t._i(r,null);a.checked?s<0&&t.$set(t.order,"isSelected",r.concat([null])):s>-1&&t.$set(t.order,"isSelected",r.slice(0,s).concat(r.slice(s+1)))}else t.$set(t.order,"isSelected",n)}}})]):r("span",{staticClass:"user mx-auto sent-reminder"},[r("i",{staticClass:"fas fa-check"})]),t._v(" "),r("span",{staticClass:"user mx-auto"},[t._v(t._s(t.startIndex+t.index))])]),t._v(" "),r("div",{staticClass:"col-12 col-xs-2 col-md col-lg user-name d-flex align-items-center justify-content-center"},[t._v("\n        "+t._s(t.$vnode.key)+"\n    ")]),t._v(" "),r("div",{staticClass:"col-12 col-xs-2 col-md col-lg d-flex align-items-center justify-content-center",attrs:{"data-hoverable":"true"},on:{click:function(e){t.$emit("display",t.order,"purchase_order")}}},[t._v("\n        "+t._s(t.order.order.order_date)+"\n    ")]),t._v(" "),r("div",{staticClass:"col-12 col-xs-3 col-md col-lg d-flex align-items-center justify-content-center",attrs:{"data-hoverable":"true"},on:{click:function(e){t.$emit("display",t.order,"customer_info")}}},[t._v("\n        ID: "+t._s(t.order.customer.id)+" - "+t._s(t._f("capitalize")(t.order.customer.employment_status))+"\n    ")]),t._v(" "),r("div",{staticClass:"col-12 col-xs-2 col-md col-lg d-flex align-items-center justify-content-center",attrs:{"data-hoverable":"true"},on:{click:function(e){t.$emit("display",t.order,"repayment")}}},[t._v("\n        "+t._s(t.order.financialStatus)+"\n    ")]),t._v(" "),r("div",{staticClass:"col-12 col-xs-2 col-md col-lg d-flex align-items-center justify-content-center",attrs:{"data-hoverable":"true"},on:{click:function(e){t.$emit("display",t.order,"reminder_history")}}},[t._v("\n        "+t._s(t.order.order.reminders.length)+" reminder(s) sent\n    ")]),t._v(" "),["collection","recovery","external-recovery"].includes(t.mode)?r("div",{staticClass:"col-12 col-xs-2 col-md col-lg d-flex align-items-center attendance-create"},[r("span",{staticClass:"present"},[r("span",{staticClass:"radio w-50 pr-3 mb-0 float-left"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.order.reminder.is_visited,expression:"order.reminder.is_visited"}],attrs:{type:"radio",id:"present"+t.index,name:"isPresent"+t.index},domProps:{value:!0,checked:t._q(t.order.reminder.is_visited,!0)},on:{change:function(e){t.$set(t.order.reminder,"is_visited",!0)}}}),t._v(" "),r("label",{attrs:{for:"present"+t.index}},[t._v("yes")])]),t._v(" "),r("span",{staticClass:"radio w-50 pl-3 mb-0 float-left"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.order.reminder.is_visited,expression:"order.reminder.is_visited"}],attrs:{type:"radio",id:"absent"+t.index,name:"isPresent"+t.index},domProps:{value:!1,checked:t._q(t.order.reminder.is_visited,!1)},on:{change:function(e){t.$set(t.order.reminder,"is_visited",!1)}}}),t._v(" "),r("label",{attrs:{for:"absent"+t.index}},[t._v("no")])])])]):t._e(),t._v(" "),["collection","recovery","call","external-recovery"].includes(t.mode)?r("div",{staticClass:"col-12 col-xs-2 col-md col-lg d-flex align-items-center"},[r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.order.reminder.feedback,expression:"order.reminder.feedback"}],staticClass:"form-control",attrs:{rows:"1",disabled:!t.order.reminder.canBeSelected},domProps:{value:t.order.reminder.feedback},on:{input:function(e){e.target.composing||t.$set(t.order.reminder,"feedback",e.target.value)}}})]):t._e(),t._v(" "),"call"===t.mode?r("div",{staticClass:"col-12 col-xs-2 col-md col-lg d-flex align-items-center"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.order.promiseCall.date,expression:"order.promiseCall.date"}],staticClass:"form-control",attrs:{type:"date",disabled:!t.order.reminder.canBeSelected},domProps:{value:t.order.promiseCall.date},on:{input:function(e){e.target.composing||t.$set(t.order.promiseCall,"date",e.target.value)}}})]):t._e()])},staticRenderFns:[]}},jyFz:function(t,e,r){var a=function(){return this}()||Function("return this")(),n=a.regeneratorRuntime&&Object.getOwnPropertyNames(a).indexOf("regeneratorRuntime")>=0,s=n&&a.regeneratorRuntime;if(a.regeneratorRuntime=void 0,t.exports=r("SldL"),n)a.regeneratorRuntime=s;else try{delete a.regeneratorRuntime}catch(t){a.regeneratorRuntime=void 0}},m2tk:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Message=void 0;var a=function(){function t(t,e){for(var r=0;r<e.length;r++){var a=e[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(e,r,a){return r&&t(e.prototype,r),a&&t(e,a),e}}(),n=r("p/p5");e.Message=function(){function t(e,r){var a=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.user_id=n,this.message=e,this.logToDB=a,this.contacts=r.split(",").filter(function(t){return/\S/.test(t)}).map(function(t){return"234"+t.trim().substr(1)}).join(","),this.setPages(),this.setContactCount()}return a(t,[{key:"setContactCount",value:function(){this.contact_count=this.contacts.split(",").length}},{key:"setPages",value:function(){this.pages=Math.ceil(this.message.length/160)}},{key:"send",value:function(t){var e=this;(0,n.get)("/api/message/create?to="+this.contacts+"&message="+this.message).then(function(r){return 200===r.status&&e.logToDB&&(delete e.logToDB,(0,n.post)("/api/message",e)),!!t&&t(r)}).catch(function(e){return!!t&&t(e)})}}]),t}()},nv24:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.EventBus=void 0;var a,n=r("I3G/"),s=(a=n)&&a.__esModule?a:{default:a};e.EventBus=new s.default},oKx2:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{title:"",buttonTitle:null,to:null}}},rN6N:function(t,e,r){"use strict";var a,n=function(){function t(t,e){for(var r=0;r<e.length;r++){var a=e[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(e,r,a){return r&&t(e.prototype,r),a&&t(e,a),e}}(),s=r("I3G/"),i=(a=s)&&a.__esModule?a:{default:a},o=r("N71M");function l(t){if(Array.isArray(t)){for(var e=0,r=Array(t.length);e<t.length;e++)r[e]=t[e];return r}return Array.from(t)}function c(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var d=new i.default,u=function(){function t(e,r){c(this,t),this._order=e,this._customer=r,this._paymentBanks=[],this._paymentMethods=[],this._actualPayDates=[],this._actualAmountsPaid=[],this._amountsToBePaid=[],this._repaymentCaptions=[],this._paymentStatusClasses=[],this._repaymentLevel=0,this._amountPaid=null,this._discountAmount=null,this._outstandingDebt=null,this._discountedTotal=null,this._defaultFee=null,this._totalPlusDefault=null,this._payments={},this.setIsOrderFormal(),this.setIsRepaymentValid(),this.setRepaymentData(),this.setCountAndInterval(),this.setCommonDetails(),this.setDueDates(),this.setPaymentStatusClasses(),this.calcAndSetPaymentSummary(),this.setBranch(),this.setDiscount()}return n(t,[{key:"setIsRepaymentValid",value:function(){this._isRepaymentValid=!(!this.order.repayment_formal&&!this.order.repayment_informal)}},{key:"setIsOrderFormal",value:function(){this._isOrderFormal=["formal","salaried"].includes(this._customer.employment_status.toLowerCase()),4===parseInt(this.order.payment_method_id)&&(this._isOrderFormal=!0)}},{key:"setRepaymentData",value:function(){null!=this.order.repayment_formal&&(this._repaymentData=this.order.repayment_formal),null!=this.order.repayment_informal&&(this._repaymentData=this.order.repayment_informal)}},{key:"setCountAndInterval",value:function(){var e=void 0,r=void 0;new Date(this.order.order_date)<=new Date("2019-07-07")?(null!=this.order.repayment_formal&&(e=28,r=6),null!=this.order.repayment_informal&&(e=14,r=12)):t.isBankDraftAvailable()&&this.isOrderFormal||4===parseInt(this.order.payment_method_id)?(e=28,r=6):(e=14,r=12),this._count=r,this._interval=e}},{key:"setDueDates",value:function(){this._dueDates=t.generateDueDates(this.order.order_date,this.interval,this.count)}},{key:"setCommonDetails",value:function(){if(this.isRepaymentValid)for(var t=1;t<this.count+1;t++){for(var e=d.$getColumn(t).split(""),r=[],a=1;a<=2;a++)r.unshift(e.pop());this._repaymentCaptions.push("<td>"+e.join("")+"<sup>"+r.join("")+"</sup></td>"),this._actualPayDates.push(this.repaymentData[d.$getColumn(t)+"_date"]),this._actualAmountsPaid.push(this.repaymentData[d.$getColumn(t)+"_pay"]),this._paymentBanks.push(this.repaymentData[d.$getColumn(t)+"_payment_bank"]),this._paymentMethods.push(this.repaymentData[d.$getColumn(t)+"_payment_method"]),this._amountsToBePaid.push(d.$roundDownAmt(this.order.repayment_amount)),this.repaymentData[d.$getColumn(t)+"_pay"]>0&&this._repaymentLevel++}}},{key:"setBranch",value:function(){var t=this;this.order.store_product?this._branch=o.store.state.branches.find(function(e){return parseInt(e.id)===parseInt(t.order.store_product.store_name)}):this._branch=null}},{key:"setPaymentStatusClasses",value:function(){if(this.isRepaymentValid)for(var e=1;e<this.count+1;e++){var r={class:null,icon:null},a=d.$getColumn(e),n=t.isPaymentDue(this.dueDates[e-1]),s=parseInt(this.repaymentData[a+"_pay"]);s?(r.class="paid",r.icon="fa-check"):n&&!s?(r.class="missed",r.icon="fa-times"):n||(r.class="pending",r.icon="fa-hourglass-start"),this._paymentStatusClasses.push(r)}}},{key:"calcAndSetPaymentSummary",value:function(){var t=function(t){return d.$formatCurrency(t)},e=this.order,r=e.repayment_amount,a=e.down_payment,n=e.product_price,s=6===this.count?.5:1,i=this.order.discount.percentage_discount,o=i>0?5===i?1:2:0,l=d.$roundDownAmt(r*s*o);this._discountAmount=t(l);var c=0,u=0;if(this.repaymentData){for(var m=0;m<this.count+1;m++){var h=parseInt(this.actualAmountsPaid[m]);u+=h?d.$roundDownAmt(h):0}c=d.$roundDownAmt(parseInt(a))+u+l}this._amountPaid=t(c);var v=d.$roundDownAmt(n-l);this._discountedTotal=t(v);var f=0;new Date(this.order.order_date)>new Date("2019-07-07")&&(f=500*[].length),this._defaultFee=t(f),this._totalPlusDefault=t(v+f),this._outstandingDebt=t(d.$roundDownAmt(parseInt(n)-c))}},{key:"setDiscount",value:function(){this._discount=this.order.discount.name+" "+this.order.discount.percentage_discount}},{key:"payments",set:function(t){this._payments=t},get:function(){return this._payments}},{key:"repaymentLevel",get:function(){return this._repaymentLevel}},{key:"order",get:function(){return this._order}},{key:"customer",get:function(){return this._customer}},{key:"isRepaymentValid",get:function(){return this._isRepaymentValid}},{key:"isOrderFormal",get:function(){return this._isOrderFormal}},{key:"repaymentData",get:function(){return this._repaymentData}},{key:"count",get:function(){return this._count}},{key:"interval",get:function(){return this._interval}},{key:"dueDates",get:function(){return this._dueDates}},{key:"paymentStatusClasses",get:function(){return this._paymentStatusClasses}},{key:"repaymentCaptions",get:function(){return this._repaymentCaptions}},{key:"paymentBanks",get:function(){return this._paymentBanks}},{key:"paymentMethods",get:function(){return this._paymentMethods}},{key:"actualPayDates",get:function(){return this._actualPayDates}},{key:"actualAmountsPaid",get:function(){return this._actualAmountsPaid}},{key:"amountsToBePaid",get:function(){return this._amountsToBePaid}},{key:"amountPaid",get:function(){return this._amountPaid}},{key:"discountAmount",get:function(){return this._discountAmount}},{key:"outstandingDebt",get:function(){return this._outstandingDebt}},{key:"discountedTotal",get:function(){return this._discountedTotal}},{key:"defaultFee",get:function(){return this._defaultFee}},{key:"totalPlusDefault",get:function(){return this._totalPlusDefault}},{key:"branch",get:function(){return this._branch}},{key:"discount",get:function(){return this._discount}},{key:"customerName",get:function(){return this.customer.first_name+" "+this.customer.last_name}},{key:"customerWGName",get:function(){var t=this.customer;return t.work_guarantor_first_name+" "+t.work_guarantor_last_name+" - "+t.work_guarantor_relationship}},{key:"customerPGName",get:function(){var t=this.customer;return t.personal_guarantor_first_name+" "+t.personal_guarantor_last_name+" - "+t.personal_guarantor_relationship}}],[{key:"generateDueDates",value:function(t,e,r){for(var a=[],n=0;n<r;n++){var s=new Date(t).addDays((n+1)*e),i=d.$getDate(s);a.push(i)}return a}},{key:"isPaymentDue",value:function(t){return new Date>new Date(t)}},{key:"isBankDraftAvailable",value:function(){return!1}},{key:"renderMessage",value:function(t){return t.sms?t.sms.message.replace(/%0a/g,"</br>"):t.feedback}},{key:"convertToName",value:function(t,e){return t?o.store.state[e].find(function(e){return e.id===t}).name:null}}]),t}(),m=function(t){function e(t,r){c(this,e);var a=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,t.customer));return a._isReminderSent=!1,a._dvaId=r,a._isSelected=!1,a.setReminder(null),a.setIsReminderSent(),a.setFinancialStatus(),a.setPromiseCall(),a.generateAndSetNextSMSReminder(),a}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,u),n(e,[{key:"setIsReminderSent",value:function(){var t=this,e=d.$getDate();this.order.reminders.forEach(function(r){var a=r.date.split(" "),n=a[0].split("-"),s=a[1].split(":"),i=[].concat(l(n),l(s)).map(function(t){return parseInt(t,10)});d.$getDate(new Date(Date.UTC.apply(Date,l(i))),!1)===e&&(t._isReminderSent=!0)})}},{key:"setFinancialStatus",value:function(){this._financialStatus=this.isRepaymentValid?"Paid: "+this.amountPaid+" | Debt: "+this.outstandingDebt:"no detail!"}},{key:"generateAndSetNextSMSReminder",value:function(){var t=null;this.order.store_product&&(t=this.order.store_product.product_name);var e=this.order,r=e.repayment_amount,a=void 0;e.order_date===d.$getDate()?(a="Hello "+this.customerName+", thanks for patronizing us. The following is the breakdown of the repayment plan for the purchase of "+t+":%0a",this.dueDates.forEach(function(t,e){return a+=d.$getColumn(e+1)+": "+t+" => "+d.$formatCurrency(d.$roundDownAmt(r))+"%0a"})):a="Hello "+this.customerName+", This is to remind you that your "+d.$getColumn(parseInt(this.repaymentLevel)+1)+" repayment of "+d.$formatCurrency(d.$roundDownAmt(r))+" for "+t+" will be due on "+this.dueDates[this.repaymentLevel]+". we will be expecting you.",this._nextSMSReminder=a+"Please remember to pay on time to avoid late fees and other penalties.%0aThank you."}},{key:"setReminder",value:function(t){this._reminder={type:t,feedback:null,is_visited:null,dva_id:this.dvaId,order_id:this.order.id,customer_id:this.customer.id,canBeSelected:!this.isReminderSent,repayment_level:this.repaymentLevel+"/"+this.count},"sms"===t&&(this._reminder.sms_id=null,this._reminder.contacts=this.customer.telephone)}},{key:"setPromiseCall",value:function(){this._promiseCall={order_id:this.order.id,user_id:this.dvaId,customer_id:this.customer.id,date:null}}},{key:"isSelected",set:function(t){this._isSelected=t},get:function(){return this._isSelected}},{key:"isReminderSent",get:function(){return this._isReminderSent}},{key:"dvaId",get:function(){return this._dvaId}},{key:"financialStatus",get:function(){return this._financialStatus}},{key:"nextSMSReminder",get:function(){return this._nextSMSReminder}},{key:"reminder",get:function(){return this._reminder}},{key:"promiseCall",get:function(){return this._promiseCall}}]),e}();t.exports={Order:u,OrderWithPromiseCall:m}},rjj0:function(t,e,r){var a="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!a)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var n=r("tTVk"),s={},i=a&&(document.head||document.getElementsByTagName("head")[0]),o=null,l=0,c=!1,d=function(){},u=null,m="data-vue-ssr-id",h="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function v(t){for(var e=0;e<t.length;e++){var r=t[e],a=s[r.id];if(a){a.refs++;for(var n=0;n<a.parts.length;n++)a.parts[n](r.parts[n]);for(;n<r.parts.length;n++)a.parts.push(_(r.parts[n]));a.parts.length>r.parts.length&&(a.parts.length=r.parts.length)}else{var i=[];for(n=0;n<r.parts.length;n++)i.push(_(r.parts[n]));s[r.id]={id:r.id,refs:1,parts:i}}}}function f(){var t=document.createElement("style");return t.type="text/css",i.appendChild(t),t}function _(t){var e,r,a=document.querySelector("style["+m+'~="'+t.id+'"]');if(a){if(c)return d;a.parentNode.removeChild(a)}if(h){var n=l++;a=o||(o=f()),e=g.bind(null,a,n,!1),r=g.bind(null,a,n,!0)}else a=f(),e=function(t,e){var r=e.css,a=e.media,n=e.sourceMap;a&&t.setAttribute("media",a);u.ssrId&&t.setAttribute(m,e.id);n&&(r+="\n/*# sourceURL="+n.sources[0]+" */",r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */");if(t.styleSheet)t.styleSheet.cssText=r;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(r))}}.bind(null,a),r=function(){a.parentNode.removeChild(a)};return e(t),function(a){if(a){if(a.css===t.css&&a.media===t.media&&a.sourceMap===t.sourceMap)return;e(t=a)}else r()}}t.exports=function(t,e,r,a){c=r,u=a||{};var i=n(t,e);return v(i),function(e){for(var r=[],a=0;a<i.length;a++){var o=i[a];(l=s[o.id]).refs--,r.push(l)}e?v(i=n(t,e)):i=[];for(a=0;a<r.length;a++){var l;if(0===(l=r[a]).refs){for(var c=0;c<l.parts.length;c++)l.parts[c]();delete s[l.id]}}}};var p,y=(p=[],function(t,e){return p[t]=e,p.filter(Boolean).join("\n")});function g(t,e,r,a){var n=r?"":a.css;if(t.styleSheet)t.styleSheet.cssText=y(e,n);else{var s=document.createTextNode(n),i=t.childNodes;i[e]&&t.removeChild(i[e]),i.length?t.insertBefore(s,i[e]):t.appendChild(s)}}},tTVk:function(t,e){t.exports=function(t,e){for(var r=[],a={},n=0;n<e.length;n++){var s=e[n],i=s[0],o={id:t+":"+n,css:s[1],media:s[2],sourceMap:s[3]};a[i]?a[i].parts.push(o):r.push(a[i]={id:i,parts:[o]})}return r}},wwaW:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=r("p/p5"),n=o(r("K23+")),s=o(r("XPj8")),i=o(r("EJ7O"));function o(t){return t&&t.__esModule?t:{default:t}}e.default={props:{withBranchFilter:{default:!0},urlToFetchOrders:{default:"/api/reminder/create"}},components:{CustomHeader:i.default,Order:s.default},data:function(){return{branch_id:"",page_size:10,date_from:null,date_to:null,page:1,filters:[{name:"date from",model:"date_from"},{name:"date to",model:"date_to"}],orders:null,response:{},show:!1,headings:["Order Number","Order Summary","Customer Info Summary","Repayment Summary","Reminder History"]}},methods:{fetchData:function(){var t=this;this.$scrollToTop(),this.$LIPS(!0);var e=this.$data,r=e.page,s=e.page_size,i=e.date_from,o=e.date_to,l=e.branch_id;(0,a.get)(this.urlToFetchOrders+(r?"?page="+r:"")+(o?"&date_to="+o:"")+(s?"&page_size="+s:"")+(l?"&branch_id="+l:"")+(i?"&date_from="+i:"")).then(function(e){var r=e.data;return t.prepareForm(r)}).catch(function(){return n.default.setError("Error Preparing form")})},next:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;this.orders.next_page_url&&(this.page=t||this.page+1,this.fetchData())},prev:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;this.orders.prev_page_url&&(this.page=t||this.page-1,this.fetchData())},prepareForm:function(t){this.show=!1,this.orders=null,this.response={},this.orders=t.orders;var e=t.orders.data,r=t.payment_methods,a=t.banks,n=t.dva_id,s=t.branch;this.response={payment_methods:r,banks:a,dva_id:n,branch:s,orders:e},this.$scrollToTop(),this.$LIPS(!1),this.show=!0}},created:function(){this.$props.withBranchFilter&&this.filters.unshift({name:"branch",model:"branch_id"}),this.$prepareBranches(),this.fetchData()}}},yDPG:function(t,e,r){var a=r("VU/8")(r("wwaW"),r("UtK9"),!1,null,null,null);t.exports=a.exports}});
>>>>>>> 2af5591af0f26df8f2c1780fcb86a777932bf705
