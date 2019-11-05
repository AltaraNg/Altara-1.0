webpackJsonp([45,49],{

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
        //EventBus.$on('selectOrderItem', this.toggleSelect);
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


    computed: _extends({}, (0, _vuex.mapGetters)(['auth', 'getAuthUserDetails'])),

    methods: {
        prepareForm: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee(_ref) {
                var orders = _ref.orders;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                this.show = false;
                                this.showModalContent = false;
                                _context.next = 4;
                                return this.convertRequestOrdersToOrderClassInstance(orders);

                            case 4:
                                this.orders = _context.sent;

                                this.orders.length && (this.show = true);
                                this.$LIPS(false);

                            case 7:
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
        convertRequestOrdersToOrderClassInstance: function convertRequestOrdersToOrderClassInstance(orders) {
            var orderInstancesArr = [];
            for (var key in orders) {
                var newOrder = orders[key] instanceof _Amortization.Order ? orders[key] : new _Amortization.OrderWithPromiseCall(orders[key], this.getAuthUserDetails.userId);
                orderInstancesArr.push(newOrder);
            }
            return orderInstancesArr;
        },
        fetchList: function fetchList(list) {
            var _this = this;

            this.$LIPS(true);
            var filterWithBranch = !(this.auth('DVALead') || this.auth('FSLLead') || this.auth('CAGAccess'));
            (0, _api.get)(url({ query: { list: list, filterWithBranch: filterWithBranch } })).then(function (_ref3) {
                var data = _ref3.data;

                if (list === 8) data.orders = data.orders.map(function (promiseCall) {
                    return promiseCall.order;
                });
                _this.prepareForm(data);
            });
        },
        displayDetails: function () {
            var _ref4 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee2(order, modal) {
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
                return _ref4.apply(this, arguments);
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
            var _this2 = this;

            var messages = [];
            selectedOrders.forEach(function (order, index) {
                var sms = new _sms.Message(order.nextSMSReminder, order.reminder.contacts, false, order.dvaId);
                sms.send(function (r) {
                    if (r.status === 200) {
                        delete sms.logToDB;
                        messages.push(sms);
                    }
                    if (index + 1 === selectedOrders.length) _this2.logSentMessages(selectedOrders, messages);
                });
            });
        },
        logSentMessages: function logSentMessages(selectedOrders, messages) {
            var _this3 = this;

            if (messages.length > 0) {
                (0, _api.post)('/api/message', { messages: messages, bulk: true }).then(function (_ref5) {
                    var data = _ref5.data;
                    var sentAndLogged = data.sentAndLogged,
                        ids = data.ids;

                    if (sentAndLogged) _this3.logSentReminders(selectedOrders, ids);else _this3.$displayErrorMessage('Error Logging sent sms details!');
                });
            } else this.$displayErrorMessage('Error sending messages!');
        },
        logSentReminders: function logSentReminders(selectedOrders, ids) {
            var _this4 = this;

            ids.reverse();
            if (ids.length > 0) {
                var newList = selectedOrders.map(function (order, index) {
                    order.reminder.sms_id = ids[index];
                    delete order.reminder.contacts;
                    delete order.reminder.canBeSelected;
                    return order.reminder;
                });
                (0, _api.post)('/api/reminder', { reminders: newList }).then(function (_ref6) {
                    var data = _ref6.data;

                    if (data.saved) {
                        _flash2.default.setSuccess('Reminders have been sent successfully!', 50000);
                        _this4.fetchList(_this4.list);
                    } else _this4.$displayErrorMessage('Error sending reminders!');
                    _this4.$scrollToTop();
                });
            } else this.$displayErrorMessage('Error logging sent messages!');
        }
    },

    mounted: function mounted() {
        var _this5 = this;

        this.mode != 'normal-list' ? this.fetchList(this.list) : this.prepareForm(this.preLoadedOrder);
        $(document).on("hidden.bs.modal", '.modal', function () {
            _this5.activeOrder = null;
            _this5.showModalContent = false;
        });
    },
    created: function created() {
        this.$prepareBanks();
        this.$prepareBranches();
        this.$preparePaymentMethods();
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

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"babel-preset-env\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"babel-plugin-syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/views/DVA/AllOrderList.vue":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

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

var _vuex = __webpack_require__("./node_modules/vuex/dist/vuex.esm.js");

var _api = __webpack_require__("./resources/assets/js/utilities/api.js");

var _flash = __webpack_require__("./resources/assets/js/utilities/flash.js");

var _flash2 = _interopRequireDefault(_flash);

var _Orders = __webpack_require__("./resources/assets/js/components/Orders.vue");

var _Orders2 = _interopRequireDefault(_Orders);

var _customHeader = __webpack_require__("./resources/assets/js/components/customHeader.vue");

var _customHeader2 = _interopRequireDefault(_customHeader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    props: {
        //TODO::verify if its necessary to make this a prop
        withBranchFilter: { default: true },
        urlToFetchOrders: { default: '/api/reminder/create' }
    },

    components: { CustomHeader: _customHeader2.default, Order: _Orders2.default },

    computed: _extends({}, (0, _vuex.mapGetters)(['getBranches'])),

    data: function data() {
        return {
            branch_id: '',
            page_size: 10,
            date_from: null,
            date_to: null,
            page: 1,
            filters: [{ name: 'date from', model: 'date_from' }, { name: 'date to', model: 'date_to' }],
            orders: null,
            response: {},
            show: false,
            headings: ['Order Number', 'Order Summary', 'Customer Info Summary', 'Repayment Summary', 'Reminder History']
        };
    },


    methods: {
        fetchData: function fetchData() {
            var _this = this;

            this.$scrollToTop();
            this.$LIPS(true);
            var _$data = this.$data,
                page = _$data.page,
                page_size = _$data.page_size,
                date_from = _$data.date_from,
                date_to = _$data.date_to,
                branch_id = _$data.branch_id;

            (0, _api.get)(this.urlToFetchOrders + ("" + (!!page ? "?page=" + page : '')) + ("" + (!!date_to ? "&dateTo=" + date_to : '')) + ("" + (!!page_size ? "&pageSize=" + page_size : '')) + ("" + (!!branch_id ? "&branchId=" + branch_id : '')) + ("" + (!!date_from ? "&dateFrom=" + date_from : ''))).then(function (_ref) {
                var data = _ref.data;
                return _this.prepareForm(data);
            }).catch(function () {
                return _flash2.default.setError('Error Preparing form');
            });
        },
        next: function next() {
            var firstPage = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

            if (this.orders.next_page_url) {
                this.page = firstPage ? firstPage : this.page + 1;
                this.fetchData();
            }
        },
        prev: function prev() {
            var lastPage = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

            if (this.orders.prev_page_url) {
                this.page = lastPage ? lastPage : this.page - 1;
                this.fetchData();
            }
        },
        prepareForm: function prepareForm(data) {
            this.show = false;
            this.orders = data.orders;
            this.response = { orders: data.orders.data };
            this.$LIPS(false);
            this.show = true;
        }
    },

    created: function created() {
        this.$props.withBranchFilter && this.filters.unshift({ name: 'branch', model: 'branch_id' });
        this.$prepareBranches();
        this.fetchData();
    }
};

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"babel-preset-env\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"babel-plugin-syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/views/profile/HomePage.vue":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; //
//
//
//
//
//

var _vuex = __webpack_require__("./node_modules/vuex/dist/vuex.esm.js");

var _AllOrderList = __webpack_require__("./resources/assets/js/views/DVA/AllOrderList.vue");

var _AllOrderList2 = _interopRequireDefault(_AllOrderList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    components: { OrderList: _AllOrderList2.default },

    computed: _extends({}, (0, _vuex.mapGetters)(['getAuthUserDetails']))
};

/***/ }),

/***/ "./node_modules/babel-runtime/regenerator/index.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./node_modules/regenerator-runtime/runtime-module.js");


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-454c9545\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/views/DVA/AllOrderList.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.flex-row-bottom[data-v-454c9545] {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -webkit-box-align: end;\n        -ms-flex-align: end;\n            align-items: flex-end;\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end;\n}\n", ""]);

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

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-454c9545\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/views/DVA/AllOrderList.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("transition", { attrs: { name: "fade" } }, [
    _c(
      "div",
      { staticClass: "attendance", attrs: { id: "reminder" } },
      [
        _c("custom-header", { attrs: { title: "Order List" } }),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "mt-2 mt-lg-3 row attendance-head attendance-view" },
          [
            _vm._l(_vm.filters, function(ref) {
              var filter = ref.name
              var model = ref.model
              return _c("div", { staticClass: "col-4 col-lg" }, [
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "light-heading mb-1" }, [
                    _c("span", { staticClass: "d-none d-sm-inline" }, [
                      _vm._v("Select ")
                    ]),
                    _vm._v(
                      "\n                        " +
                        _vm._s(_vm._f("capitalize")(filter)) +
                        "\n                    "
                    )
                  ]),
                  _vm._v(" "),
                  filter === "branch"
                    ? _c("div", { staticClass: "form-group w-100" }, [
                        _c(
                          "select",
                          {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.$data[model],
                                expression: "$data[model]"
                              }
                            ],
                            staticClass: "custom-select",
                            on: {
                              keyup: function($event) {
                                if (
                                  !("button" in $event) &&
                                  _vm._k(
                                    $event.keyCode,
                                    "enter",
                                    13,
                                    $event.key,
                                    "Enter"
                                  )
                                ) {
                                  return null
                                }
                                _vm.fetchData()
                              },
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
                                  _vm.$data,
                                  model,
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
                              {
                                attrs: { disabled: "", selected: "", value: "" }
                              },
                              [_vm._v(_vm._s(_vm._f("capitalize")(filter)))]
                            ),
                            _vm._v(" "),
                            _vm._l(_vm.getBranches, function(ref) {
                              var name = ref.name
                              var id = ref.id
                              return _c("option", { domProps: { value: id } }, [
                                _vm._v(
                                  "\n                                " +
                                    _vm._s(_vm._f("capitalize")(name)) +
                                    "\n                            "
                                )
                              ])
                            })
                          ],
                          2
                        )
                      ])
                    : _c("div", { staticClass: "form-group w-100" }, [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.$data[model],
                              expression: "$data[model]"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: { type: "date" },
                          domProps: { value: _vm.$data[model] },
                          on: {
                            keyup: function($event) {
                              if (
                                !("button" in $event) &&
                                _vm._k(
                                  $event.keyCode,
                                  "enter",
                                  13,
                                  $event.key,
                                  "Enter"
                                )
                              ) {
                                return null
                              }
                              _vm.fetchData()
                            },
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(_vm.$data, model, $event.target.value)
                            }
                          }
                        })
                      ])
                ])
              ])
            }),
            _vm._v(" "),
            _c("div", { staticClass: "col-12 col-lg p-0 flex-row-bottom" }, [
              _c(
                "button",
                {
                  staticClass: "btn btn-primary bg-default mt-0 myBtn",
                  on: {
                    click: function($event) {
                      _vm.fetchData()
                    }
                  }
                },
                [_vm._v("Apply Filter")]
              )
            ])
          ],
          2
        ),
        _vm._v(" "),
        _c("div", { staticClass: "mt-5 mb-3 attendance-head" }, [
          _c("div", { staticClass: "w-100 my-5 mx-0 hr" }),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "row px-4 pt-3 pb-4 text-center" },
            [
              _c(
                "div",
                {
                  staticClass: "col light-heading",
                  staticStyle: { "max-width": "120px" }
                },
                [_vm._v("S/N")]
              ),
              _vm._v(" "),
              _vm._l(_vm.headings, function(header) {
                return _c("div", { staticClass: "col light-heading" }, [
                  _vm._v(_vm._s(header))
                ])
              })
            ],
            2
          )
        ]),
        _vm._v(" "),
        _vm.show
          ? _c("order", {
              attrs: {
                "start-index": _vm.orders.from,
                "pre-loaded-order": _vm.response,
                mode: "normal-list"
              }
            })
          : _vm._e(),
        _vm._v(" "),
        _vm.show && _vm.orders.current_page
          ? _c("div", { staticClass: "mt-1 attendance-body" }, [
              _c("div", { staticClass: "mb-5 px-0 row align-items-center" }, [
                _c("div", { staticClass: "w-100 mb-4 mt-5 mx-0 hr" }),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "clearfix w-100 mt-4 d-flex bd-highlight" },
                  [
                    _c(
                      "div",
                      {
                        staticClass:
                          "col d-flex justify-content-start align-items-center pl-0"
                      },
                      [
                        _c(
                          "strong",
                          { staticClass: "light-heading float-left" },
                          [
                            _vm._v(
                              "\n                            Displaying: " +
                                _vm._s(_vm.orders.from) +
                                " - " +
                                _vm._s(_vm.orders.to) +
                                " of " +
                                _vm._s(_vm.orders.total) +
                                "\n                        "
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
                          "col d-flex justify-content-center align-items-center"
                      },
                      [
                        _c("div", { staticClass: "mr-5" }, [
                          _c(
                            "span",
                            { staticClass: "d-inline light-heading mr-2" },
                            [_vm._v("set current Page")]
                          ),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.page,
                                expression: "page"
                              }
                            ],
                            staticClass: "d-inline form-control ",
                            staticStyle: { "max-width": "50px" },
                            attrs: { type: "number" },
                            domProps: { value: _vm.page },
                            on: {
                              keyup: function($event) {
                                if (
                                  !("button" in $event) &&
                                  _vm._k(
                                    $event.keyCode,
                                    "enter",
                                    13,
                                    $event.key,
                                    "Enter"
                                  )
                                ) {
                                  return null
                                }
                                _vm.fetchData()
                              },
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.page = $event.target.value
                              }
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "ml-5" }, [
                          _c(
                            "span",
                            { staticClass: "d-inline light-heading mr-2" },
                            [_vm._v("set page-size")]
                          ),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.page_size,
                                expression: "page_size"
                              }
                            ],
                            staticClass: "d-inline form-control",
                            staticStyle: { "max-width": "50px" },
                            attrs: { type: "number" },
                            domProps: { value: _vm.page_size },
                            on: {
                              keyup: function($event) {
                                if (
                                  !("button" in $event) &&
                                  _vm._k(
                                    $event.keyCode,
                                    "enter",
                                    13,
                                    $event.key,
                                    "Enter"
                                  )
                                ) {
                                  return null
                                }
                                _vm.fetchData()
                              },
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.page_size = $event.target.value
                              }
                            }
                          })
                        ])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "nav",
                      {
                        staticClass:
                          "col d-flex justify-content-end align-items-center pr-0"
                      },
                      [
                        _c(
                          "ul",
                          { staticClass: "pagination pagination-lg mb-0" },
                          [
                            _c(
                              "li",
                              {
                                staticClass: "page-item",
                                class: { disabled: !_vm.orders.first_page_url }
                              },
                              [
                                _c(
                                  "a",
                                  {
                                    staticClass: "page-link",
                                    attrs: { href: "javascript:" },
                                    on: {
                                      click: function($event) {
                                        _vm.prev(1)
                                      }
                                    }
                                  },
                                  [_vm._v("First")]
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "li",
                              {
                                staticClass: "page-item",
                                class: { disabled: !_vm.orders.prev_page_url }
                              },
                              [
                                _c(
                                  "a",
                                  {
                                    staticClass: "page-link",
                                    attrs: { href: "javascript:" },
                                    on: {
                                      click: function($event) {
                                        _vm.prev()
                                      }
                                    }
                                  },
                                  [_vm._v("prev")]
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c("li", { staticClass: "page-item" }, [
                              _c("span", { staticClass: "page-link" }, [
                                _vm._v(
                                  "Current Page: " +
                                    _vm._s(_vm.orders.current_page)
                                )
                              ])
                            ]),
                            _vm._v(" "),
                            _c(
                              "li",
                              {
                                staticClass: "page-item",
                                class: { disabled: !_vm.orders.next_page_url }
                              },
                              [
                                _c(
                                  "a",
                                  {
                                    staticClass: "page-link",
                                    attrs: { href: "javascript:" },
                                    on: {
                                      click: function($event) {
                                        _vm.next()
                                      }
                                    }
                                  },
                                  [_vm._v("Next")]
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "li",
                              {
                                staticClass: "page-item",
                                class: { disabled: !_vm.orders.last_page_url }
                              },
                              [
                                _c(
                                  "a",
                                  {
                                    staticClass: "page-link",
                                    attrs: { href: "javascript:" },
                                    on: {
                                      click: function($event) {
                                        _vm.next(_vm.orders.last_page)
                                      }
                                    }
                                  },
                                  [_vm._v("Last")]
                                )
                              ]
                            )
                          ]
                        )
                      ]
                    )
                  ]
                )
              ])
            ])
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
    require("vue-hot-reload-api")      .rerender("data-v-454c9545", module.exports)
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
                            _c("td", [
                              _vm._v(_vm._s(_vm.activeOrder.branch.name))
                            ]),
                            _vm._v(" "),
                            _c(
                              "td",
                              {
                                staticClass: "font-weight-bold",
                                class:
                                  _vm.activeOrder.order.status.name.toLocaleString() ===
                                  "ok"
                                    ? "paid"
                                    : "missed"
                              },
                              [
                                _vm._v(
                                  "\n                                    " +
                                    _vm._s(_vm.activeOrder.order.status.name) +
                                    "\n                                "
                                )
                              ]
                            )
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
      _c("th", [_vm._v("Branch")]),
      _vm._v(" "),
      _c("th", [_vm._v("Status")])
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

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-5b80ac6e\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/views/profile/HomePage.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "transition",
    { attrs: { name: "fade" } },
    [
      _c("OrderList", {
        attrs: {
          "with-branch-filter": false,
          "url-to-fetch-orders":
            "/api/orders/user/" + _vm.getAuthUserDetails.userId
        }
      })
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
    require("vue-hot-reload-api")      .rerender("data-v-5b80ac6e", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-454c9545\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/views/DVA/AllOrderList.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-454c9545\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/views/DVA/AllOrderList.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("7a6948dd", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-454c9545\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./AllOrderList.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-454c9545\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./AllOrderList.vue");
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
            if (parseInt(this.order.payment_method_id) === 4) {
                this._isOrderFormal = true;
            }
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
                if (Order.isBankDraftAvailable() && this.isOrderFormal || parseInt(this.order.payment_method_id) === 4) {
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

            if (this.order['store_product']) {
                this._branch = _store.store.state.branches.find(function (branch) {
                    return parseInt(branch.id) === parseInt(_this.order.store_product['store_name']);
                });
            } else this._branch = null;
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
            var product_name = null;
            if (this.order['store_product']) product_name = this.order.store_product.product_name;
            var _order2 = this.order,
                repayment_amount = _order2.repayment_amount,
                order_date = _order2.order_date;


            var message = void 0;
            if (order_date === vue.$getDate()) {
                message = 'Hello ' + this.customerName + ', thanks for patronizing us.' + ' The following is the breakdown of the repayment plan for' + (' the purchase of ' + product_name + ':%0a');
                this.dueDates.forEach(function (date, index) {
                    return message += vue.$getColumn(index + 1) + ": " + date + " => " + vue.$formatCurrency(vue.$roundDownAmt(repayment_amount)) + "%0a";
                });
            } else {
                message = 'Hello ' + this.customerName + ', This is to remind you that your' + (' ' + vue.$getColumn(parseInt(this.repaymentLevel) + 1) + ' repayment of') + (' ' + vue.$formatCurrency(vue.$roundDownAmt(repayment_amount)) + ' for ' + product_name) + (' will be due on ' + this.dueDates[this.repaymentLevel] + '. we will be expecting you.');
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

/***/ "./resources/assets/js/views/DVA/AllOrderList.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-454c9545\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/views/DVA/AllOrderList.vue")
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"babel-preset-env\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"babel-plugin-syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/views/DVA/AllOrderList.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-454c9545\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/views/DVA/AllOrderList.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-454c9545"
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
Component.options.__file = "resources\\assets\\js\\views\\DVA\\AllOrderList.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-454c9545", Component.options)
  } else {
    hotAPI.reload("data-v-454c9545", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/js/views/profile/HomePage.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"babel-preset-env\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"babel-plugin-syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/views/profile/HomePage.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-5b80ac6e\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/views/profile/HomePage.vue")
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
Component.options.__file = "resources\\assets\\js\\views\\profile\\HomePage.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5b80ac6e", Component.options)
  } else {
    hotAPI.reload("data-v-5b80ac6e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});