webpackJsonp([1],{

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

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"babel-preset-env\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"babel-plugin-syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/ApprovalStatusButton.vue":
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

var _vuex = __webpack_require__("./node_modules/vuex/dist/vuex.esm.js");

var _eventBus = __webpack_require__("./resources/assets/js/utilities/event-bus.js");

exports.default = {
    props: ['link', 'size', 'customer'],

    data: function data() {
        return {
            status: null,
            unfilteredOptions: [{
                caption: 'Change sales agent',
                modal: 'toggleChangeCustomerManagerModal',
                authAccess: 'DSACaptain'
            }]
        };
    },


    methods: {
        toggleModal: function toggleModal(modalName) {
            _eventBus.EventBus.$emit(modalName, this.customer);
        }
    },

    computed: _extends({}, (0, _vuex.mapGetters)(['auth']), {
        filteredOptions: function filteredOptions() {
            var _this = this;

            return this.unfilteredOptions.filter(function (option) {
                return _this.auth(option.authAccess);
            });
        },
        isApproved: function isApproved() {
            return this.$getCustomerApprovalStatus(this.customer.verification);
        },
        buttonClass: function buttonClass() {
            return this.size && (this.link ? "status status-sm " + this.status : "status mt-md-5 my-sm-2 mt-0 " + this.status);
        },
        getLink: function getLink() {
            if (this.link) {
                if (this.auth('DVAAccess')) return 'dva/' + this.link;
                if (this.auth('ALTARAPAYAccess')) return 'altarapay/' + this.link;
            }
            return '#';
        }
    }),

    created: function created() {
        this.status = this.isApproved ? 'approved' : 'not-approved';
    }
};

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"babel-preset-env\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"babel-plugin-syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/AutocompleteSearch/AutocompleteSearch.vue":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _api = __webpack_require__("./resources/assets/js/utilities/api.js");

var _flash = __webpack_require__("./resources/assets/js/utilities/flash.js");

var _flash2 = _interopRequireDefault(_flash);

var _customHeader = __webpack_require__("./resources/assets/js/components/customHeader.vue");

var _customHeader2 = _interopRequireDefault(_customHeader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    name: "AutocompleteSearch",
    components: { CustomHeader: _customHeader2.default },
    props: {
        url: { type: String, required: true },
        title: { type: String, required: true }
    },

    data: function data() {
        return {
            search: '',
            open: false,
            customers: [],
            selectIndex: 0,
            displayText: '',
            searchColumn: 'name',
            searchColumns: [{ title: 'customer id', column: 'id' }, { title: 'customer name', column: 'name' }, { title: 'phone number', column: 'telephone' }]
        };
    },


    watch: {
        searchColumn: function searchColumn(newVal) {
            newVal === "telephone" && (this.customers = []);
        },

        search: function search(newVal) {
            var _this = this;

            if (!!newVal.trim()) {
                if (!this.isStringLengthValid(newVal)) return _flash2.default.setError("search should not be more than " + (this.searchColumn === 'name' ? " 3 " : " 1 ") + "words");

                var searchableFields = {};
                if (this.searchColumn === 'name') {
                    searchableFields['first_name'] = this.search;
                    searchableFields['middle_name'] = this.search;
                    searchableFields['last_name'] = this.search;
                } else searchableFields[this.searchColumn] = this.search;

                (0, _api.post)(this.url, { searchableFields: searchableFields }).then(function (_ref) {
                    var customers = _ref.data.customers;
                    return _this.customers = customers;
                }).catch(function () {
                    return _flash2.default.setError('error fetching result');
                });
            }
        }
    },

    methods: {
        onDownKey: function onDownKey() {
            this.customers.length - 1 > this.selectIndex && this.selectIndex++;
        },
        onUpKey: function onUpKey() {
            this.selectIndex > 0 && this.selectIndex--;
        },
        onEnterKey: function onEnterKey() {
            var option = this.customers[this.selectIndex];
            if (option) this.select(option);
        },
        select: function select(option) {
            this.displayText = this.getAutocomplete(option);
            this.$emit('customer-selected', option.id);
            this.$refs.search.blur();
        },
        toggle: function toggle(_ref2) {
            var target = _ref2.target;

            if (target === this.$refs.toggle || target === this.$refs.search) {
                if (this.open) {
                    if (target !== this.$refs.search) this.$refs.search.blur();
                } else this.$refs.search.focus();
            }
        },
        onFocus: function onFocus() {
            this.open = true;
        },
        onBlur: function onBlur() {
            this.search = '';
            this.open = false;
        },
        onEscape: function onEscape() {
            this.$refs.search.blur();
        },
        getAutocomplete: function getAutocomplete(option) {
            var optionArr = [];
            this.searchColumn === 'id' && optionArr.push(option.id);
            this.searchColumn === 'telephone' && optionArr.push(option.telephone);
            var fullName = option.hasOwnProperty('full_name') ? option.full_name : this.$getCustomerFullName(option, !!option.middle_name);
            optionArr.push(fullName);
            return this.styleAutocomplete(optionArr);
        },
        styleAutocomplete: function styleAutocomplete(optionArr) {
            var HTMLElement = '';
            optionArr.forEach(function (option) {
                return HTMLElement += "<span class=\"col\">" + option + "</span>";
            });
            return HTMLElement;
        },
        isStringLengthValid: function isStringLengthValid(str) {
            var wordCount = str.split(' ').length;
            return this.searchColumn === 'name' && wordCount <= 3 || wordCount <= 1;
        }
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"babel-preset-env\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"babel-plugin-syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/CustomSMSButton/CustomSMSButton.vue":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _eventBus = __webpack_require__("./resources/assets/js/utilities/event-bus.js");

exports.default = {
    /**
     *
     * @Component Usage:
     *
     * @Interface : A button Which triggers a modal onClick.
     *
     * To add this component to any component it will be used:
     *
     * NB: You can use any method best suited for you to grant access to this feature by
     * using v-if and passing your logic.
     * eg: <span v-if='true'><CustomSMSButton/></span>
     *
     * 1.   Import the CustomSMSButton into any component and position as desired
     *      NB: Add only customer or order as a props DO NOT ADD BOTH AT THE SAME TIME!.
     *      NB: The order passed as a prop must be an instance of the
     *      Order, OrderWithPromiseCall class from the Amortization.js
     *      If Order is supplied the sms sent is linked to an order
     *      If customer is supplied then its just an sms that is not tied to any reminder.
     *      Add a :key prop when adding the component for performance purposes.(Recommended)
     *
     * 2.   On the parent component(usually the immediate child component on the
     *      index component for the portal this component is used as a sub-component)
     *      eg. for the use case on the sales list -> Root/App/Index/AllOrdersList is where the command following is added.
     *      To get this component structure use vue-devtools.
     *      NB: this is step is important as it cleans up the DOM when the modal is not in use.
     *
     *      ...mapActions('ModalAccess', [
     *          'addCustomerOptionsModalsToDom',
     *          'removeCustomerOptionsModalsFromDom'
     *      ])
     *
     *      Map the actions above in the method for the component (eg the AllOrdersList)
     *      this.addCustomerOptionsModalsToDom(); add this to the created hook to add the modal to the DOM
     *      this.removeCustomerOptionsModalsFromDom(); add this to the destroyed hook to remove the modal from the DOM
     *      The modal is added to the root vue component App.vue and dynamically displayed based on the need.
     *
     * */
    props: {
        order: { default: null },
        customer: { default: null }
    },

    methods: {
        toggleModal: function toggleModal(modalName) {
            _eventBus.EventBus.$emit(modalName, { order: this.order, customer: this.customer });
        }
    }
}; //
//
//
//
//
//

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"babel-preset-env\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"babel-plugin-syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/CustomerProfile.vue":
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
//

var _vue = __webpack_require__("./node_modules/vue/dist/vue.common.js");

var _vue2 = _interopRequireDefault(_vue);

var _vuex = __webpack_require__("./node_modules/vuex/dist/vuex.esm.js");

var _eventBus = __webpack_require__("./resources/assets/js/utilities/event-bus.js");

var _AppNavigation = __webpack_require__("./resources/assets/js/components/AppNavigation.vue");

var _AppNavigation2 = _interopRequireDefault(_AppNavigation);

var _ApprovalStatusButton = __webpack_require__("./resources/assets/js/components/ApprovalStatusButton.vue");

var _ApprovalStatusButton2 = _interopRequireDefault(_ApprovalStatusButton);

var _CustomSMSButton = __webpack_require__("./resources/assets/js/components/CustomSMSButton/CustomSMSButton.vue");

var _CustomSMSButton2 = _interopRequireDefault(_CustomSMSButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    props: ['viewCustomer'],

    components: { ApprovalStatusButton: _ApprovalStatusButton2.default, AppNavigation: _AppNavigation2.default, CustomSMSButton: _CustomSMSButton2.default },

    data: function data() {
        return {
            customer: '',
            show: false
        };
    },


    computed: _extends({
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
    }, (0, _vuex.mapGetters)(['auth'])),

    created: function created() {
        var _this = this;

        $('.tooltip').remove();
        if (this.viewCustomer) this.setCustomer(this.viewCustomer);
        _eventBus.EventBus.$on('customer', function (customer) {
            return _this.setCustomer(customer);
        });
        this.addCustomerOptionsModalsToDom();
    },


    methods: _extends({
        setCustomer: function setCustomer(customer) {
            _vue2.default.set(this.$data, 'customer', customer);
            this.show = true;
        }
    }, (0, _vuex.mapActions)('ModalAccess', ['addCustomerOptionsModalsToDom', 'removeCustomerOptionsModalsFromDom'])),

    destroyed: function destroyed() {
        this.removeCustomerOptionsModalsFromDom();
    }
};

/***/ }),

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

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"babel-preset-env\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"babel-plugin-syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/views/DVA/verification/verification.vue":
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

var _eventBus = __webpack_require__("./resources/assets/js/utilities/event-bus.js");

var _form = __webpack_require__("./resources/assets/js/utilities/form.js");

var _ImageUpload = __webpack_require__("./resources/assets/js/components/ImageUpload.vue");

var _ImageUpload2 = _interopRequireDefault(_ImageUpload);

var _CustomerProfile = __webpack_require__("./resources/assets/js/components/CustomerProfile.vue");

var _CustomerProfile2 = _interopRequireDefault(_CustomerProfile);

var _AutocompleteSearch = __webpack_require__("./resources/assets/js/components/AutocompleteSearch/AutocompleteSearch.vue");

var _AutocompleteSearch2 = _interopRequireDefault(_AutocompleteSearch);

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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var init = function init(_ref) {
    var id = _ref.id;
    return '/api/customer/' + id;
};

exports.default = {
    props: {
        action: { default: 'verify'
            /*by default this component is used for dva verifications purposed but its customer search feature and
            * customer profile display feature is borrowed by other component to avoid duplication of
            * features hence the props: action is 'verify by default.'*/
        } },

    components: {
        ImageUpload: _ImageUpload2.default,
        /*the image upload is used for the customer id and passport upload.
        * its a separate component on its own and can be called
        * anywhere on the application*/
        CustomerProfile: _CustomerProfile2.default, AutocompleteSearch: _AutocompleteSearch2.default
    },

    data: function data() {
        return {
            customer: null,
            customer_id: '',
            addressBtns: true,
            work_guarantorBtns: true,
            personal_guarantorBtns: true,
            processing_feeBtns: true,
            info_from_neighbors: '',
            address: {},
            work_guarantor: {},
            personal_guarantor: {},
            processing_fee: {},
            picsView: ['id_card', 'passport'],
            veriView: ['work_guarantor', 'personal_guarantor', 'processing_fee'],
            veriData: ['address', 'work_guarantor', 'personal_guarantor', 'processing_fee'],
            cardView: ['passport', 'id_card', 'address', 'work_guarantor', 'personal_guarantor', 'processing_fee'],
            verification: {},
            form: { id_card: '', passport: '', document: '' },
            error: {},
            storeURL: '',
            user: {},
            work_guarantor_address: '',
            personal_guarantor_address: ''
        };
    },
    beforeRouteEnter: function beforeRouteEnter(_ref2, from, next) {
        var query = _ref2.query;

        if (query.id) (0, _api.get)(init(query)).then(function (res) {
            return next(function (vm) {
                return vm.updateView(res.data);
            });
        }).catch(function (e) {
            return next(function (vm) {
                return vm.updateView(e.response.data);
            });
        });else next();
    },
    beforeRouteUpdate: function beforeRouteUpdate(_ref3, from, next) {
        var query = _ref3.query;

        var _this = this;

        if (query.id) (0, _api.get)(init(query)).then(function (res) {
            return _this.updateView(res.data);
        }).catch(function (e) {
            return _this.updateView(e.response.data);
        }).finally(function () {
            return next();
        });else next();
    },


    methods: {
        modal: function modal(name) {
            $('#' + name).modal('toggle');
            /*this method is used to automatically
            * toggle the modal with the id of
            * "name passed to it"*/
            this.errors.clear(name);
        },
        key: function key(_key) {
            return this.customer.verification[_key];
            /*the 'key' is a value that exists in the cardView array. anytime its called it checks the the customer
            * to know the status of that particular parameter eg. is the passport have not been uploaded
            * it will be 0 else 1 if uploaded with will return true */
        },
        IconClass: function IconClass(key) {
            return {
                'fa-check': this.key(key), 'fa-times': !this.key(key)
                /*return the 'fa-check' css class is that particular
                * card param is set to 1 else the 'fa-times'
                * css class ie false */
            };
        },
        DivClass: function DivClass(key) {
            return {
                'success': this.key(key), 'no-success': !this.key(key)
                /*this is similar to the DivClass method only
                * that it return a different class
                * success and no-success*/
            };
        },
        updateView: function updateView(data) {
            var _this2 = this;

            /*$emit update event is used to send data to the parent component where this serves as a child
            * component. eg. dsa utility form. NB: The customer registration component(form)
            * is used as the customer update form for both dsa and dva portal.*/
            this.user = data.hasOwnProperty('user') ? data.user : null;
            _vue2.default.set(this.$data, 'customer', data.customer);
            this.$emit('update', data.customer);
            _eventBus.EventBus.$emit('customer', data.customer);
            if (data.customer) {
                this.verification = JSON.parse(JSON.stringify(data.customer.verification));
                this.form.id_card = data.customer.document.id_card_url;
                this.form.passport = data.customer.document.passport_url;
                this.work_guarantor_address = this.customer.guaadd_houseno + ',\n                    ' + this.customer.guaadd_street + ',\n                    ' + this.customer.gua_area + ',\n                    ' + this.customer.work_guarantor_city + ',\n                    ' + this.customer.work_guarantor_state;
                this.personal_guarantor_address = this.customer.pguaadd_houseno + ',\n                    ' + this.customer.pguaadd_street + ',\n                    ' + this.customer.pgua_area + ',\n                    ' + this.customer.personal_guarantor_city + ',\n                    ' + this.customer.personal_guarantor_state;
                this.veriData.forEach(function (e) {
                    //e is the current array element during the foreach call;
                    _this2[e + 'Btns'] = !!!data.customer[e];
                    //eg this.work_guarantorBtns = if (data.customer.work_guarantor) {return true} else {return false}
                    //and anything the if return will be inverted.
                    _this2[e] = !!data.customer[e] ? data.customer[e] : data['empty_' + e];
                    //eg this.work_guarantor = if(data.customer.work_guarantor){ return data.customer.work_guarantor }
                    // else {return data.empty_work_guarantor}
                    //the empty_work_guarantor is returned from backend when no work guarantor has been added.
                });
            } else _flash2.default.setError(data.message, 5000);
        },
        done: function done() {
            return null; //TODO:I was asked to disable the sms sent when a customer is approved
            /*if (this.$getCustomerApprovalStatus(this.verification)){
                let body =
                    "Dear " + this.$getCustomerFullName(this.customer) + ", Congratulations, You have been approved. Come to the store to make a purchase. Altara Credit Limited.";
                (new Message(body, this.customer.telephone, true, this.user.id)).send();
            }*/
        },
        processForm: function processForm(id) {
            var _this3 = this;

            if (this.$route.meta.mode === 'verification') {
                this.$router.push('verification?id=' + id);
            }
            if (this.$route.name === 'customerUpdate') {
                this.$router.push('update?id=' + id);
                (0, _api.get)(init(this.$route.query)).then(function (res) {
                    return _this3.updateView(res.data);
                }).catch(function (e) {
                    return _this3.updateView(e.response.data);
                });
            }
        },
        validate: function validate(type) {
            var _this4 = this;

            if (this.$network()) {
                this.$LIPS(true);
                if (this.veriView.includes(type) && !this.customer.work_guarantor_first_name) {
                    this.modal(type + '_modal');
                    this.$LIPS(false);
                    this.$scrollToTop();
                    _flash2.default.setError('Can not process verification. Update the customer guarantors details and try again!', 10000);
                    return;
                }
                this.info_from_neighbors === 'no' ? this.address.info_from_neighbors_desc = '' : '';
                this[type].customer_id = this.customer.id;
                this[type].user_id = this.user.id;
                this[type].staff_name = this.user.full_name;
                this.$validator.validateAll(type).then(function () {
                    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee(result) {
                        return _regenerator2.default.wrap(function _callee$(_context) {
                            while (1) {
                                switch (_context.prev = _context.next) {
                                    case 0:
                                        if (!result) {
                                            _context.next = 7;
                                            break;
                                        }

                                        _context.next = 3;
                                        return (0, _api.post)('/api/' + type, _this4[type]).then(function (_ref5) {
                                            var data = _ref5.data;

                                            _this4.updateView(data.response);
                                            var id = 'Customer ID : ' + _this4.customer.id,
                                                typeCaps = _this4.$options.filters.capitalize(type),
                                                action = 'Customer' + typeCaps + 'Verification';
                                            if (type === 'address') action += _this4.address.approval_status ? 'Passed' : 'NotPassed';
                                            (0, _log.log)(action, id);
                                            _flash2.default.setSuccess(typeCaps + ' status updated!');
                                            _this4.modal(type + '_modal');
                                            _this4.done();
                                        }).catch(function (e) {
                                            return _flash2.default.setError(e.response.data.message);
                                        });

                                    case 3:
                                        _this4.$LIPS(false);
                                        _this4.$scrollToTop();
                                        _context.next = 8;
                                        break;

                                    case 7:
                                        _this4.$networkErr('form');

                                    case 8:
                                    case 'end':
                                        return _context.stop();
                                }
                            }
                        }, _callee, _this4);
                    }));

                    return function (_x) {
                        return _ref4.apply(this, arguments);
                    };
                }());
            } else this.$networkErr();
        },
        save: function () {
            var _ref6 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee2(document, modal) {
                var _this5 = this;

                var form;
                return _regenerator2.default.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                this.storeURL = '/api/document/' + this.customer.document.id + '?_method=PUT&document=' + document;
                                this.$LIPS(true);
                                this.form.document = document;
                                form = (0, _form.toMulipartedForm)(this.form, 'edit');
                                _context2.next = 6;
                                return (0, _api.post)(this.storeURL, form).then(function (_ref7) {
                                    var data = _ref7.data;

                                    _this5.updateView(data.response);
                                    (0, _log.log)('Customer' + _this5.$options.filters.capitalize(document) + 'Upload', 'Customer ID : ' + _this5.customer.id);
                                    _this5.modal(modal);
                                    _flash2.default.setSuccess('Document Updated Successfully!');
                                    _this5.done();
                                }).catch(function (e) {
                                    return _this5.error = e.response.data.errors;
                                });

                            case 6:
                                this.$LIPS(false);
                                this.$scrollToTop();

                            case 8:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function save(_x2, _x3) {
                return _ref6.apply(this, arguments);
            }

            return save;
        }()
    },

    computed: {
        check: function check() {
            return !(!this.$isProcessing && !!this.customer_id);
        }
    },

    mounted: function mounted() {
        var _this6 = this;

        $(document).on("hidden.bs.modal", '.modal', function () {
            _this6.verification = JSON.parse(JSON.stringify(_this6.customer.verification));
            /*this.verification holds a copy of the this.customer.verification. this.verification is what is used to style
            * the card. this.customer.verification on the other hand is used to calculate the approval status, when
            * changing the status on the front end the this.verification is what is changed but when it is
            * reflected in the backend then the changes will be reflected on this.customer.verification
            * after going to database and returning the data again. NB: the purpose of this method
            * is revert the values of the this.verification to this.customer.verification
            * values, when a user selects a different option but doesn't submit
            * it after opening and closing the modal responsible for that
            * particular action*/
        });
    }
};

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-49386ade\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/ApprovalStatusButton.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n[data-function=\"display\"].status[data-v-49386ade] {\n    border-top-right-radius: 0;\n    border-bottom-right-radius: 0;\n}\n.status.dropdown-toggle[data-v-49386ade] {\n    border-top-left-radius: 0 !important;\n    border-bottom-left-radius: 0 !important;\n    padding: 1rem 1rem !important;\n}\n.approved.dropdown-toggle[data-v-49386ade] {\n    background: -webkit-gradient(linear, left top, left bottom, from(#00a368), to(#00662a));\n    background: linear-gradient(180deg, #00a368 0%, #00662a 100%)\n}\n.not-approved.dropdown-toggle[data-v-49386ade] {\n    background: -webkit-gradient(linear, left top, left bottom, from(#e12424), to(#a40000));\n    background: linear-gradient(180deg, #e12424 0%, #a40000 100%)\n}\n.dropdown-toggle[data-v-49386ade]::after {\n    border-top: .6em solid;\n    border-right: .6em solid transparent;\n    border-left: .6em solid transparent;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6c389568\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/AutocompleteSearch/AutocompleteSearch.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.typeahead.typeahead__open .typeahead__text[data-v-6c389568] {\n  opacity: 0;\n}\n.typeahead.typeahead__open input[data-v-6c389568] {\n  color: rgba(142, 151, 160, 0.8);\n}\n.typeahead input[data-v-6c389568] {\n  color: rgba(142, 151, 160, 0);\n}\n.typeahead__text > span[data-v-6c389568] {\n  padding-left: 0 !important;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-18fd8fee\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/AppNavigation.vue":
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
    require("vue-hot-reload-api")      .rerender("data-v-18fd8fee", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-319f68d5\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/ImageUpload.vue":
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
                return _vm.$emit("input", null)
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
    require("vue-hot-reload-api")      .rerender("data-v-319f68d5", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-36606568\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/views/DVA/verification/verification.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("transition", { attrs: { name: "fade" } }, [
    _c(
      "div",
      {
        staticClass: "pt-md-3 pt-2 verification",
        attrs: { id: "employeeRegister" }
      },
      [
        _c("AutocompleteSearch", {
          attrs: {
            title: "customer verification",
            url: "/api/customer/autocomplete"
          },
          on: { "customer-selected": _vm.processForm }
        }),
        _vm._v(" "),
        _c("transition", { attrs: { name: "fade" } }, [
          _vm.customer
            ? _c(
                "div",
                [
                  _c("customer-profile", {
                    attrs: { "view-customer": _vm.customer }
                  }),
                  _vm._v(" "),
                  _vm.action !== "update"
                    ? _c(
                        "div",
                        {
                          staticStyle: {
                            float: "left",
                            "margin-left": "4rem",
                            "margin-right": "4rem"
                          }
                        },
                        [
                          _vm._l(_vm.cardView, function(type) {
                            return _c(
                              "div",
                              {
                                staticClass:
                                  "float-left col-lg-3 col-sm-6 px-0 px-sm-3"
                              },
                              [
                                _c(
                                  "div",
                                  {
                                    staticClass: "card card-stats",
                                    class: _vm.DivClass(type)
                                  },
                                  [
                                    _c("div", { staticClass: "card-body " }, [
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "statistics statistics-horizontal"
                                        },
                                        [
                                          _c(
                                            "div",
                                            {
                                              staticClass:
                                                "info info-horizontal"
                                            },
                                            [
                                              _c(
                                                "div",
                                                { staticClass: "row" },
                                                [
                                                  _c(
                                                    "div",
                                                    { staticClass: "col-4" },
                                                    [
                                                      _c(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            "icon icon-warning icon-circle position-relative"
                                                        },
                                                        [
                                                          _c("i", {
                                                            staticClass: "fas",
                                                            class: _vm.IconClass(
                                                              type
                                                            )
                                                          })
                                                        ]
                                                      )
                                                    ]
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "div",
                                                    {
                                                      staticClass:
                                                        "col-8 text-right"
                                                    },
                                                    [
                                                      _c(
                                                        "h4",
                                                        {
                                                          staticClass:
                                                            "info-title font-weight-bold mb-0"
                                                        },
                                                        [
                                                          _vm._v(
                                                            _vm._s(
                                                              _vm._f(
                                                                "capitalize"
                                                              )(type)
                                                            )
                                                          )
                                                        ]
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "h6",
                                                        {
                                                          staticClass:
                                                            "stats-title"
                                                        },
                                                        [
                                                          _vm._v(
                                                            "\n                                                    " +
                                                              _vm._s(
                                                                _vm.key(type)
                                                                  ? "Verified"
                                                                  : "Not Verified"
                                                              ) +
                                                              "\n                                                "
                                                          )
                                                        ]
                                                      )
                                                    ]
                                                  )
                                                ]
                                              )
                                            ]
                                          )
                                        ]
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      {
                                        staticClass: "card-footer pointer",
                                        on: {
                                          click: function($event) {
                                            return _vm.modal(type + "_modal")
                                          }
                                        }
                                      },
                                      [
                                        _c("i", {
                                          staticClass:
                                            "now-ui-icons ui-1_calendar-60 pr-1"
                                        }),
                                        _vm._v(
                                          "\n                                " +
                                            _vm._s(
                                              _vm.key(type)
                                                ? "Verified"
                                                : "Not Verified"
                                            ) +
                                            "\n                                "
                                        ),
                                        !_vm.key(type)
                                          ? _c("small", [
                                              _vm._v(
                                                "(Click here to update status!)"
                                              )
                                            ])
                                          : _c(
                                              "span",
                                              {
                                                staticClass: "float-right",
                                                staticStyle: {
                                                  "font-size": "10px"
                                                }
                                              },
                                              [
                                                _vm._v(
                                                  "\n                                        by - " +
                                                    _vm._s(
                                                      _vm._f("capitalize")(
                                                        type == "passport" ||
                                                          type == "id_card"
                                                          ? _vm.customer[
                                                              "document"
                                                            ].staff_name
                                                          : _vm.customer[type]
                                                              .staff_name
                                                      )
                                                    ) +
                                                    "\n                                "
                                                )
                                              ]
                                            )
                                      ]
                                    )
                                  ]
                                )
                              ]
                            )
                          }),
                          _vm._v(" "),
                          _c("hr", { staticClass: "style-two" })
                        ],
                        2
                      )
                    : _vm._e()
                ],
                1
              )
            : _vm._e()
        ]),
        _vm._v(" "),
        _vm.action !== "update"
          ? _c(
              "div",
              [
                _vm._l(_vm.picsView, function(type) {
                  return _c(
                    "div",
                    {
                      staticClass: "modal fade",
                      attrs: { id: type + "_modal" }
                    },
                    [
                      _c("div", { staticClass: "modal-dialog" }, [
                        _c("div", { staticClass: "modal-content" }, [
                          _c("div", { staticClass: "modal-header py-2" }, [
                            _c("h6", { staticClass: "modal-title py-1" }, [
                              _vm._v(
                                _vm._s(_vm._f("capitalize")(type)) +
                                  " Verification Status"
                              )
                            ]),
                            _vm._v(" "),
                            _c(
                              "a",
                              {
                                staticClass: "close py-1",
                                attrs: {
                                  "aria-label": "Close",
                                  "data-dismiss": "modal",
                                  href: "javascript:"
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
                          _vm.customer
                            ? _c(
                                "form",
                                {
                                  on: {
                                    submit: function($event) {
                                      $event.preventDefault()
                                      return _vm.save(type, type + "_modal")
                                    }
                                  }
                                },
                                [
                                  _c("div", { staticClass: "modal-body" }, [
                                    _c(
                                      "div",
                                      { staticClass: "upload-image p-2" },
                                      [
                                        _c(
                                          "div",
                                          { staticClass: "upload-box" },
                                          [
                                            _c("image-upload", {
                                              model: {
                                                value: _vm.$data["form"][type],
                                                callback: function($$v) {
                                                  _vm.$set(
                                                    _vm.$data["form"],
                                                    type,
                                                    $$v
                                                  )
                                                },
                                                expression:
                                                  "$data['form'][type]"
                                              }
                                            })
                                          ],
                                          1
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _vm.error[type]
                                      ? _c("small", [
                                          _vm._v(_vm._s(_vm.error[type][0]))
                                        ])
                                      : _vm._e()
                                  ]),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "modal-footer" }, [
                                    _c(
                                      "button",
                                      {
                                        staticClass: "m-2 btn btn-secondary",
                                        attrs: {
                                          "data-dismiss": "modal",
                                          type: "button"
                                        }
                                      },
                                      [
                                        _vm._v(
                                          "\n                                    cancel\n                                "
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "button",
                                      {
                                        staticClass: "m-2 btn bg-default",
                                        attrs: {
                                          disabled: _vm.$isProcessing,
                                          type: "submit"
                                        }
                                      },
                                      [
                                        _vm._v(
                                          "\n                                    Save changes "
                                        ),
                                        _c("i", {
                                          staticClass: "far fa-paper-plane ml-1"
                                        })
                                      ]
                                    )
                                  ])
                                ]
                              )
                            : _vm._e()
                        ])
                      ])
                    ]
                  )
                }),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "modal fade", attrs: { id: "address_modal" } },
                  [
                    _c("div", { staticClass: "modal-dialog modal-lg" }, [
                      _c("div", { staticClass: "modal-content" }, [
                        _c("div", { staticClass: "modal-header py-2" }, [
                          _c("h6", { staticClass: "modal-title py-1" }, [
                            _vm._v("Address Verification Status")
                          ]),
                          _vm._v(" "),
                          _c(
                            "a",
                            {
                              staticClass: " py-1",
                              staticStyle: {
                                "min-height": "30px",
                                "min-width": "30px"
                              },
                              on: {
                                click: function($event) {
                                  return _vm.modal("address_modal")
                                }
                              }
                            },
                            [
                              _c("span", { staticClass: "text-danger" }, [
                                _c("i", { staticClass: "fas fa-times" })
                              ])
                            ]
                          )
                        ]),
                        _vm._v(" "),
                        _c(
                          "form",
                          {
                            attrs: { "data-vv-scope": "address" },
                            on: {
                              submit: function($event) {
                                $event.preventDefault()
                                return _vm.validate("address")
                              }
                            }
                          },
                          [
                            _c("div", { staticClass: "modal-body p-5" }, [
                              _c(
                                "table",
                                { staticClass: "mb-3 w-100 info-table" },
                                [
                                  _c("tbody", { staticClass: "px-3" }, [
                                    _c("tr", [
                                      _c("th", [
                                        _c("i", {
                                          staticClass:
                                            "fas fa-map-marker-alt mx-4"
                                        })
                                      ]),
                                      _vm._v(" "),
                                      _c("td", [
                                        _vm._v(
                                          _vm._s(
                                            _vm.$getCustomerAddress(
                                              _vm.customer
                                            )
                                          )
                                        )
                                      ])
                                    ])
                                  ])
                                ]
                              ),
                              _vm._v(" "),
                              _c("div", { staticClass: "w-100 p-3" }, [
                                _c("div", { staticClass: "clearfix" }, [
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "form-group float-left col-md-6 col-12 pr-md-3 pr-0 pl-0"
                                    },
                                    [
                                      _c("label", [
                                        _vm._v("Date of Visitation")
                                      ]),
                                      _vm._v(" "),
                                      _c("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: _vm.address.date_of_visit,
                                            expression: "address.date_of_visit"
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
                                          "data-vv-as": "date of visit",
                                          name: "date_of_visit",
                                          type: "date"
                                        },
                                        domProps: {
                                          value: _vm.address.date_of_visit
                                        },
                                        on: {
                                          input: function($event) {
                                            if ($event.target.composing) {
                                              return
                                            }
                                            _vm.$set(
                                              _vm.address,
                                              "date_of_visit",
                                              $event.target.value
                                            )
                                          }
                                        }
                                      }),
                                      _vm._v(" "),
                                      _vm.errors.first("address.date_of_visit")
                                        ? _c("small", [
                                            _vm._v(
                                              "\n                                                " +
                                                _vm._s(
                                                  _vm.errors.first(
                                                    "address.date_of_visit"
                                                  )
                                                ) +
                                                "\n                                            "
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
                                        "form-group float-left  col-md-6 col-12  pl-md-3 pl-0 pr-0"
                                    },
                                    [
                                      _c("label", [_vm._v("Time of Visit")]),
                                      _vm._v(" "),
                                      _c("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: _vm.address.time_of_visit,
                                            expression: "address.time_of_visit"
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
                                          "data-vv-as": "time of visit",
                                          name: "time_of_visit",
                                          type: "time"
                                        },
                                        domProps: {
                                          value: _vm.address.time_of_visit
                                        },
                                        on: {
                                          input: function($event) {
                                            if ($event.target.composing) {
                                              return
                                            }
                                            _vm.$set(
                                              _vm.address,
                                              "time_of_visit",
                                              $event.target.value
                                            )
                                          }
                                        }
                                      }),
                                      _vm._v(" "),
                                      _vm.errors.first("address.time_of_visit")
                                        ? _c("small", [
                                            _vm._v(
                                              "\n                                                " +
                                                _vm._s(
                                                  _vm.errors.first(
                                                    "address.time_of_visit"
                                                  )
                                                ) +
                                                "\n                                            "
                                            )
                                          ])
                                        : _vm._e()
                                    ]
                                  )
                                ]),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  { staticClass: "form-group clearfix" },
                                  [
                                    _c("label", [
                                      _vm._v("1. Did you meet the customer?")
                                    ]),
                                    _vm._v(" "),
                                    _c("span", { staticClass: "radio mx-5" }, [
                                      _c("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: _vm.address.customer_meetup,
                                            expression:
                                              "address.customer_meetup"
                                          },
                                          {
                                            name: "validate",
                                            rawName: "v-validate",
                                            value: "required",
                                            expression: "'required'"
                                          }
                                        ],
                                        attrs: {
                                          "data-vv-as": "customer meetup",
                                          id: "yes",
                                          name: "customer_meetup",
                                          type: "radio",
                                          value: "yes"
                                        },
                                        domProps: {
                                          checked: _vm._q(
                                            _vm.address.customer_meetup,
                                            "yes"
                                          )
                                        },
                                        on: {
                                          change: function($event) {
                                            return _vm.$set(
                                              _vm.address,
                                              "customer_meetup",
                                              "yes"
                                            )
                                          }
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c("label", { attrs: { for: "yes" } }, [
                                        _vm._v("Yes")
                                      ])
                                    ]),
                                    _vm._v(" "),
                                    _c("span", { staticClass: "radio ml-5" }, [
                                      _c("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: _vm.address.customer_meetup,
                                            expression:
                                              "address.customer_meetup"
                                          }
                                        ],
                                        attrs: {
                                          id: "no",
                                          name: "customer_meetup",
                                          type: "radio",
                                          value: "no"
                                        },
                                        domProps: {
                                          checked: _vm._q(
                                            _vm.address.customer_meetup,
                                            "no"
                                          )
                                        },
                                        on: {
                                          change: function($event) {
                                            return _vm.$set(
                                              _vm.address,
                                              "customer_meetup",
                                              "no"
                                            )
                                          }
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c("label", { attrs: { for: "no" } }, [
                                        _vm._v("No")
                                      ])
                                    ]),
                                    _vm._v(" "),
                                    _vm.errors.first("address.customer_meetup")
                                      ? _c("small", [
                                          _vm._v(
                                            "\n                                            " +
                                              _vm._s(
                                                _vm.errors.first(
                                                  "address.customer_meetup"
                                                )
                                              ) +
                                              "\n                                        "
                                          )
                                        ])
                                      : _vm._e()
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  { staticClass: "form-group clearfix" },
                                  [
                                    _c("label", [
                                      _vm._v(
                                        "\n                                            2. Is the address/location same with what you have in the application\n                                            form?\n                                        "
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c("span", { staticClass: "radio mx-5" }, [
                                      _c("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: _vm.address.confirm_address,
                                            expression:
                                              "address.confirm_address"
                                          },
                                          {
                                            name: "validate",
                                            rawName: "v-validate",
                                            value: "required",
                                            expression: "'required'"
                                          }
                                        ],
                                        attrs: {
                                          "data-vv-as": "confirm address",
                                          id: "add_yes",
                                          name: "confirm_address",
                                          type: "radio",
                                          value: "yes"
                                        },
                                        domProps: {
                                          checked: _vm._q(
                                            _vm.address.confirm_address,
                                            "yes"
                                          )
                                        },
                                        on: {
                                          change: function($event) {
                                            return _vm.$set(
                                              _vm.address,
                                              "confirm_address",
                                              "yes"
                                            )
                                          }
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c(
                                        "label",
                                        { attrs: { for: "add_yes" } },
                                        [_vm._v("Yes")]
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c("span", { staticClass: "radio ml-5" }, [
                                      _c("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: _vm.address.confirm_address,
                                            expression:
                                              "address.confirm_address"
                                          }
                                        ],
                                        attrs: {
                                          id: "add_no",
                                          name: "confirm_address",
                                          type: "radio",
                                          value: "no"
                                        },
                                        domProps: {
                                          checked: _vm._q(
                                            _vm.address.confirm_address,
                                            "no"
                                          )
                                        },
                                        on: {
                                          change: function($event) {
                                            return _vm.$set(
                                              _vm.address,
                                              "confirm_address",
                                              "no"
                                            )
                                          }
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c(
                                        "label",
                                        { attrs: { for: "add_no" } },
                                        [_vm._v("No")]
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _vm.errors.first("address.confirm_address")
                                      ? _c("small", [
                                          _vm._v(
                                            "\n                                            " +
                                              _vm._s(
                                                _vm.errors.first(
                                                  "address.confirm_address"
                                                )
                                              ) +
                                              "\n                                        "
                                          )
                                        ])
                                      : _vm._e()
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  { staticClass: "form-group clearfix" },
                                  [
                                    _c("label", [
                                      _vm._v("3. What does he/she do or sell?")
                                    ]),
                                    _vm._v(" "),
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.address.what_he_sells,
                                          expression: "address.what_he_sells"
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
                                        "data-vv-as": "what he sells",
                                        name: "what_he_sells",
                                        placeholder: "comment here...",
                                        type: "text"
                                      },
                                      domProps: {
                                        value: _vm.address.what_he_sells
                                      },
                                      on: {
                                        input: function($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            _vm.address,
                                            "what_he_sells",
                                            $event.target.value
                                          )
                                        }
                                      }
                                    }),
                                    _vm._v(" "),
                                    _vm.errors.first("address.what_he_sells")
                                      ? _c("small", [
                                          _vm._v(
                                            "\n                                            " +
                                              _vm._s(
                                                _vm.errors.first(
                                                  "address.what_he_sells"
                                                )
                                              ) +
                                              "\n                                        "
                                          )
                                        ])
                                      : _vm._e()
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  { staticClass: "form-group clearfix" },
                                  [
                                    _c("label", [
                                      _vm._v(
                                        "4. Look around the shop and check the nature and condition of the\n                                            business. Write down what you see in terms of address, stock value,\n                                            premise, type of shop or business, sales etc."
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c("textarea", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.address.business_info,
                                          expression: "address.business_info"
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
                                        "data-vv-as": "business info",
                                        name: "business_info",
                                        placeholder: "comment here...",
                                        rows: "1"
                                      },
                                      domProps: {
                                        value: _vm.address.business_info
                                      },
                                      on: {
                                        input: function($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            _vm.address,
                                            "business_info",
                                            $event.target.value
                                          )
                                        }
                                      }
                                    }),
                                    _vm._v(" "),
                                    _vm.errors.first("address.business_info")
                                      ? _c("small", [
                                          _vm._v(
                                            "\n                                            " +
                                              _vm._s(
                                                _vm.errors.first(
                                                  "address.business_info"
                                                )
                                              ) +
                                              "\n                                        "
                                          )
                                        ])
                                      : _vm._e()
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  { staticClass: "form-group clearfix" },
                                  [
                                    _c("label", [
                                      _vm._v(
                                        "5. Get exact information of choice of product and specification by\n                                            asking for\n                                            Example; what exact phone do you want? Let him/her specify e.g. INFINIX\n                                            SMART or HOT 4 IPHONE\n                                        "
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c("textarea", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.address.product_info,
                                          expression: "address.product_info"
                                        },
                                        {
                                          name: "validate",
                                          rawName: "v-validate",
                                          value: "required",
                                          expression: "'required'"
                                        }
                                      ],
                                      staticClass: "form-control w-100",
                                      attrs: {
                                        "data-vv-as": "product info",
                                        name: "product_info",
                                        placeholder: "comment here...",
                                        rows: "1"
                                      },
                                      domProps: {
                                        value: _vm.address.product_info
                                      },
                                      on: {
                                        input: function($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            _vm.address,
                                            "product_info",
                                            $event.target.value
                                          )
                                        }
                                      }
                                    }),
                                    _vm._v(" "),
                                    _vm.errors.first("address.product_info")
                                      ? _c("small", [
                                          _vm._v(
                                            "\n                                            " +
                                              _vm._s(
                                                _vm.errors.first(
                                                  "address.product_info"
                                                )
                                              ) +
                                              "\n                                        "
                                          )
                                        ])
                                      : _vm._e()
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  { staticClass: "form-group clearfix" },
                                  [
                                    _c("label", [
                                      _vm._v(
                                        "\n                                            6. Are you aware of the payment plan?\n                                        "
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c("span", { staticClass: "radio mx-5" }, [
                                      _c("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: _vm.address.aware_of_plan,
                                            expression: "address.aware_of_plan"
                                          },
                                          {
                                            name: "validate",
                                            rawName: "v-validate",
                                            value: "required",
                                            expression: "'required'"
                                          }
                                        ],
                                        attrs: {
                                          "data-vv-as": "aware of plan",
                                          id: "pay_yes",
                                          name: "aware_of_plan",
                                          type: "radio",
                                          value: "yes"
                                        },
                                        domProps: {
                                          checked: _vm._q(
                                            _vm.address.aware_of_plan,
                                            "yes"
                                          )
                                        },
                                        on: {
                                          change: function($event) {
                                            return _vm.$set(
                                              _vm.address,
                                              "aware_of_plan",
                                              "yes"
                                            )
                                          }
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c(
                                        "label",
                                        { attrs: { for: "pay_yes" } },
                                        [_vm._v("yes")]
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c("span", { staticClass: "radio ml-5" }, [
                                      _c("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: _vm.address.aware_of_plan,
                                            expression: "address.aware_of_plan"
                                          }
                                        ],
                                        attrs: {
                                          id: "pay_no",
                                          name: "aware_of_plan",
                                          type: "radio",
                                          value: "no"
                                        },
                                        domProps: {
                                          checked: _vm._q(
                                            _vm.address.aware_of_plan,
                                            "no"
                                          )
                                        },
                                        on: {
                                          change: function($event) {
                                            return _vm.$set(
                                              _vm.address,
                                              "aware_of_plan",
                                              "no"
                                            )
                                          }
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c(
                                        "label",
                                        { attrs: { for: "pay_no" } },
                                        [_vm._v("no")]
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _vm.errors.first("address.aware_of_plan")
                                      ? _c("small", [
                                          _vm._v(
                                            "\n                                            " +
                                              _vm._s(
                                                _vm.errors.first(
                                                  "address.aware_of_plan"
                                                )
                                              ) +
                                              "\n                                        "
                                          )
                                        ])
                                      : _vm._e()
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  { staticClass: "form-group clearfix" },
                                  [
                                    _c("label", [
                                      _vm._v(
                                        "\n                                            7. Did you get information about the customer from his/her neighbours?\n                                        "
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c("span", { staticClass: "radio mx-5" }, [
                                      _c("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: _vm.info_from_neighbors,
                                            expression: "info_from_neighbors"
                                          },
                                          {
                                            name: "validate",
                                            rawName: "v-validate",
                                            value: "required",
                                            expression: "'required'"
                                          }
                                        ],
                                        attrs: {
                                          "data-vv-as": "info from neighbors",
                                          id: "neigh_yes",
                                          name: "info_from_neighbors",
                                          type: "radio",
                                          value: "yes"
                                        },
                                        domProps: {
                                          checked: _vm._q(
                                            _vm.info_from_neighbors,
                                            "yes"
                                          )
                                        },
                                        on: {
                                          change: function($event) {
                                            _vm.info_from_neighbors = "yes"
                                          }
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c(
                                        "label",
                                        { attrs: { for: "neigh_yes" } },
                                        [_vm._v("yes")]
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c("span", { staticClass: "radio ml-5" }, [
                                      _c("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: _vm.info_from_neighbors,
                                            expression: "info_from_neighbors"
                                          }
                                        ],
                                        attrs: {
                                          id: "neigh_no",
                                          name: "info_from_neighbors",
                                          type: "radio",
                                          value: "no"
                                        },
                                        domProps: {
                                          checked: _vm._q(
                                            _vm.info_from_neighbors,
                                            "no"
                                          )
                                        },
                                        on: {
                                          change: function($event) {
                                            _vm.info_from_neighbors = "no"
                                          }
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c(
                                        "label",
                                        { attrs: { for: "neigh_no" } },
                                        [_vm._v("no")]
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _vm.errors.first(
                                      "address.info_from_neighbors"
                                    )
                                      ? _c("small", [
                                          _vm._v(
                                            "\n                                            " +
                                              _vm._s(
                                                _vm.errors.first(
                                                  "address.info_from_neighbors"
                                                )
                                              ) +
                                              "\n                                        "
                                          )
                                        ])
                                      : _vm._e(),
                                    _vm._v(" "),
                                    _vm.info_from_neighbors == "yes"
                                      ? _c("div", [
                                          _c("textarea", {
                                            directives: [
                                              {
                                                name: "model",
                                                rawName: "v-model",
                                                value:
                                                  _vm.address
                                                    .info_from_neighbors_desc,
                                                expression:
                                                  "address.info_from_neighbors_desc"
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
                                              "data-vv-as":
                                                "info from neighbors desc",
                                              name: "info_from_neighbors_desc",
                                              placeholder: "comment here...",
                                              rows: "1"
                                            },
                                            domProps: {
                                              value:
                                                _vm.address
                                                  .info_from_neighbors_desc
                                            },
                                            on: {
                                              input: function($event) {
                                                if ($event.target.composing) {
                                                  return
                                                }
                                                _vm.$set(
                                                  _vm.address,
                                                  "info_from_neighbors_desc",
                                                  $event.target.value
                                                )
                                              }
                                            }
                                          }),
                                          _vm._v(" "),
                                          _vm.errors.first(
                                            "address.info_from_neighbors_desc"
                                          )
                                            ? _c("small", [
                                                _vm._v(
                                                  "\n                                                " +
                                                    _vm._s(
                                                      _vm.errors.first(
                                                        "address.info_from_neighbors_desc"
                                                      )
                                                    ) +
                                                    "\n                                            "
                                                )
                                              ])
                                            : _vm._e()
                                        ])
                                      : _vm._e()
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  { staticClass: "form-group clearfix" },
                                  [
                                    _c("label", [
                                      _vm._v(
                                        "8. And how long has he/she been working/trading in that particular\n                                            place?\n                                        "
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c("textarea", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value:
                                            _vm.address
                                              .business_or_work_duration,
                                          expression:
                                            "address.business_or_work_duration"
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
                                        "data-vv-as":
                                          "business or work duration",
                                        name: "business_or_work_duration",
                                        placeholder: "address",
                                        rows: "1"
                                      },
                                      domProps: {
                                        value:
                                          _vm.address.business_or_work_duration
                                      },
                                      on: {
                                        input: function($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            _vm.address,
                                            "business_or_work_duration",
                                            $event.target.value
                                          )
                                        }
                                      }
                                    }),
                                    _vm._v(" "),
                                    _vm.errors.first(
                                      "address.business_or_work_duration"
                                    )
                                      ? _c("small", [
                                          _vm._v(
                                            "\n                                            " +
                                              _vm._s(
                                                _vm.errors.first(
                                                  "address.business_or_work_duration"
                                                )
                                              ) +
                                              "\n                                        "
                                          )
                                        ])
                                      : _vm._e()
                                  ]
                                ),
                                _vm._v(" "),
                                _vm.addressBtns
                                  ? _c("div", [
                                      _c(
                                        "div",
                                        { staticClass: "w-100 clearfix" },
                                        [
                                          _c(
                                            "button",
                                            {
                                              staticClass:
                                                "btn btn-success btn-lg btn-block",
                                              attrs: {
                                                disabled: _vm.$isProcessing,
                                                type: "submit"
                                              },
                                              on: {
                                                click: function($event) {
                                                  _vm.address.approval_status = 1
                                                }
                                              }
                                            },
                                            [
                                              _vm._v(
                                                "\n                                                Successful - Update Details\n                                                "
                                              ),
                                              _c("i", {
                                                staticClass:
                                                  "far fa-paper-plane ml-1"
                                              })
                                            ]
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        { staticClass: "pt-2 w-100 clearfix" },
                                        [
                                          _c(
                                            "div",
                                            {
                                              staticClass:
                                                "pr-2 pl-md-0 pl-2 col-md-6 col-12 m-0 float-left"
                                            },
                                            [
                                              _c(
                                                "button",
                                                {
                                                  staticClass:
                                                    "m-0 btn btn-lg btn-block btn-secondary",
                                                  attrs: { type: "button" },
                                                  on: {
                                                    click: function($event) {
                                                      return _vm.modal(
                                                        "address_modal"
                                                      )
                                                    }
                                                  }
                                                },
                                                [
                                                  _vm._v(
                                                    "\n                                                    Cancel\n                                                "
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
                                                "pl-2 pr-md-0 pr-2 col-md-6 col-12 float-left"
                                            },
                                            [
                                              _c(
                                                "button",
                                                {
                                                  staticClass:
                                                    "m-0 btn btn-lg btn-block btn-primary",
                                                  attrs: {
                                                    disabled: _vm.$isProcessing,
                                                    type: "submit"
                                                  },
                                                  on: {
                                                    click: function($event) {
                                                      _vm.address.approval_status = 0
                                                    }
                                                  }
                                                },
                                                [
                                                  _vm._v(
                                                    "\n                                                    Not-Successful - Update Details\n                                                    "
                                                  ),
                                                  _c("i", {
                                                    staticClass:
                                                      "far fa-paper-plane ml-1"
                                                  })
                                                ]
                                              )
                                            ]
                                          )
                                        ]
                                      )
                                    ])
                                  : _c("h5", [
                                      _vm._v(
                                        "\n                                        This customers details has already been updated once and cannot be changed!\n                                    "
                                      )
                                    ])
                              ])
                            ])
                          ]
                        )
                      ])
                    ])
                  ]
                ),
                _vm._v(" "),
                _vm._l(_vm.veriView, function(type) {
                  return _c(
                    "div",
                    {
                      staticClass: "modal fade",
                      attrs: { id: type + "_modal" }
                    },
                    [
                      _c("div", { staticClass: "modal-dialog" }, [
                        _c("div", { staticClass: "modal-content" }, [
                          _c("div", { staticClass: "modal-header py-2" }, [
                            _c("h6", { staticClass: "modal-title py-1" }, [
                              _vm._v(
                                "\n                                " +
                                  _vm._s(_vm._f("capitalize")(type)) +
                                  " " +
                                  _vm._s(
                                    type !== "processing_fee"
                                      ? "Verification"
                                      : ""
                                  ) +
                                  " Status\n                            "
                              )
                            ]),
                            _vm._v(" "),
                            _c(
                              "a",
                              {
                                staticClass: "close py-1",
                                attrs: {
                                  "aria-label": "Close",
                                  "data-dismiss": "modal",
                                  href: "javascript:"
                                }
                              },
                              [
                                _c(
                                  "span",
                                  { staticClass: "modal-close text-danger" },
                                  [_c("i", { staticClass: "fas fa-times" })]
                                )
                              ]
                            )
                          ]),
                          _vm._v(" "),
                          _vm.customer
                            ? _c(
                                "form",
                                {
                                  attrs: { "data-vv-scope": type },
                                  on: {
                                    submit: function($event) {
                                      $event.preventDefault()
                                      return _vm.validate(type)
                                    }
                                  }
                                },
                                [
                                  _c("div", { staticClass: "modal-body" }, [
                                    type !== "processing_fee"
                                      ? _c(
                                          "table",
                                          { staticClass: "mb-3 info-table" },
                                          [
                                            _c("tbody", [
                                              _c("tr", [
                                                _c("th", [
                                                  _c("i", {
                                                    staticClass:
                                                      "fas fa-map-marker-alt"
                                                  })
                                                ]),
                                                _vm._v(" "),
                                                _vm.customer[type + "_state"]
                                                  ? _c("td", [
                                                      _vm._v(
                                                        _vm._s(
                                                          _vm.$data[
                                                            type + "_address"
                                                          ]
                                                        )
                                                      )
                                                    ])
                                                  : _c("td", [
                                                      _vm._v(
                                                        "please update customer details!"
                                                      )
                                                    ])
                                              ]),
                                              _vm._v(" "),
                                              _c("tr", [
                                                _c("th", [
                                                  _c("i", {
                                                    staticClass:
                                                      "fas fa-mobile-alt"
                                                  })
                                                ]),
                                                _vm._v(" "),
                                                _vm.customer[type + "_telno"]
                                                  ? _c("td", [
                                                      _vm._v(
                                                        _vm._s(
                                                          _vm.customer[
                                                            type + "_telno"
                                                          ]
                                                        )
                                                      )
                                                    ])
                                                  : _c("td", [
                                                      _vm._v(
                                                        "please update customer details!"
                                                      )
                                                    ])
                                              ]),
                                              _vm._v(" "),
                                              _c("tr", [
                                                _c("th", [
                                                  _c("i", {
                                                    staticClass:
                                                      " fas fa-user-circle"
                                                  })
                                                ]),
                                                _vm._v(" "),
                                                _vm.customer[
                                                  type + "_first_name"
                                                ]
                                                  ? _c("td", [
                                                      _vm._v(
                                                        "\n                                            " +
                                                          _vm._s(
                                                            _vm.customer[
                                                              type +
                                                                "_first_name"
                                                            ] +
                                                              " " +
                                                              _vm.customer[
                                                                type +
                                                                  "_last_name"
                                                              ]
                                                          ) +
                                                          "\n                                        "
                                                      )
                                                    ])
                                                  : _c("td", [
                                                      _vm._v(
                                                        "please update customer details!"
                                                      )
                                                    ])
                                              ]),
                                              _vm._v(" "),
                                              _c("tr", [
                                                _c("th", [
                                                  _c("i", {
                                                    staticClass:
                                                      "fas fa-user-circle"
                                                  })
                                                ]),
                                                _vm._v(" "),
                                                _vm.customer[
                                                  type + "_relationship"
                                                ]
                                                  ? _c("td", [
                                                      _vm._v(
                                                        _vm._s(
                                                          _vm._f("capitalize")(
                                                            _vm.customer[
                                                              type +
                                                                "_relationship"
                                                            ]
                                                          )
                                                        ) +
                                                          "\n                                        "
                                                      )
                                                    ])
                                                  : _c("td", [
                                                      _vm._v(
                                                        "please update customer details!"
                                                      )
                                                    ])
                                              ])
                                            ])
                                          ]
                                        )
                                      : _vm._e(),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      {
                                        staticClass:
                                          "form-group col-12 px-2 clearfix my-0"
                                      },
                                      [
                                        _c("div", { staticClass: "clearfix" }, [
                                          _c(
                                            "div",
                                            {
                                              staticClass:
                                                "form-group float-left col-md-6 col-12 pr-md-3 pr-0 pl-0"
                                            },
                                            [
                                              _c("label", [
                                                _vm._v(
                                                  "\n                                                Date " +
                                                    _vm._s(
                                                      type !== "processing_fee"
                                                        ? "of Call"
                                                        : "Collected"
                                                    ) +
                                                    "\n                                            "
                                                )
                                              ]),
                                              _vm._v(" "),
                                              type !== "processing_fee"
                                                ? _c("input", {
                                                    directives: [
                                                      {
                                                        name: "model",
                                                        rawName: "v-model",
                                                        value:
                                                          _vm.$data[type]
                                                            .date_of_call,
                                                        expression:
                                                          "$data[type].date_of_call"
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
                                                      name: "date_of_call",
                                                      type: "date"
                                                    },
                                                    domProps: {
                                                      value:
                                                        _vm.$data[type]
                                                          .date_of_call
                                                    },
                                                    on: {
                                                      input: function($event) {
                                                        if (
                                                          $event.target
                                                            .composing
                                                        ) {
                                                          return
                                                        }
                                                        _vm.$set(
                                                          _vm.$data[type],
                                                          "date_of_call",
                                                          $event.target.value
                                                        )
                                                      }
                                                    }
                                                  })
                                                : _c("input", {
                                                    directives: [
                                                      {
                                                        name: "model",
                                                        rawName: "v-model",
                                                        value:
                                                          _vm.$data[type]
                                                            .date_collected,
                                                        expression:
                                                          "$data[type].date_collected"
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
                                                      name: "date_of_call",
                                                      type: "date"
                                                    },
                                                    domProps: {
                                                      value:
                                                        _vm.$data[type]
                                                          .date_collected
                                                    },
                                                    on: {
                                                      input: function($event) {
                                                        if (
                                                          $event.target
                                                            .composing
                                                        ) {
                                                          return
                                                        }
                                                        _vm.$set(
                                                          _vm.$data[type],
                                                          "date_collected",
                                                          $event.target.value
                                                        )
                                                      }
                                                    }
                                                  }),
                                              _vm._v(" "),
                                              _vm.errors.first(
                                                type + ".date_of_call"
                                              )
                                                ? _c("small", [
                                                    _vm._v(
                                                      "\n                                                " +
                                                        _vm._s(
                                                          _vm.errors.first(
                                                            type +
                                                              ".date_of_call"
                                                          )
                                                        ) +
                                                        "\n                                            "
                                                    )
                                                  ])
                                                : _vm._e(),
                                              _vm._v(" "),
                                              _vm.errors.first(
                                                type + ".date_collected"
                                              )
                                                ? _c("small", [
                                                    _vm._v(
                                                      "\n                                                " +
                                                        _vm._s(
                                                          _vm.errors.first(
                                                            type +
                                                              ".date_collected"
                                                          )
                                                        ) +
                                                        "\n                                            "
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
                                                "form-group float-left col-md-6 col-12 pl-md-3 pl-0 pr-0"
                                            },
                                            [
                                              _c("label", [
                                                _vm._v(
                                                  "\n                                                Time " +
                                                    _vm._s(
                                                      type !== "processing_fee"
                                                        ? "of Call"
                                                        : "Collected"
                                                    ) +
                                                    "\n                                            "
                                                )
                                              ]),
                                              _vm._v(" "),
                                              type !== "processing_fee"
                                                ? _c("input", {
                                                    directives: [
                                                      {
                                                        name: "model",
                                                        rawName: "v-model",
                                                        value:
                                                          _vm.$data[type]
                                                            .time_of_call,
                                                        expression:
                                                          "$data[type].time_of_call"
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
                                                      name: "time_of_call",
                                                      type: "time"
                                                    },
                                                    domProps: {
                                                      value:
                                                        _vm.$data[type]
                                                          .time_of_call
                                                    },
                                                    on: {
                                                      input: function($event) {
                                                        if (
                                                          $event.target
                                                            .composing
                                                        ) {
                                                          return
                                                        }
                                                        _vm.$set(
                                                          _vm.$data[type],
                                                          "time_of_call",
                                                          $event.target.value
                                                        )
                                                      }
                                                    }
                                                  })
                                                : _c("input", {
                                                    directives: [
                                                      {
                                                        name: "model",
                                                        rawName: "v-model",
                                                        value:
                                                          _vm.$data[type]
                                                            .time_collected,
                                                        expression:
                                                          "$data[type].time_collected"
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
                                                      name: "time_collected",
                                                      type: "time"
                                                    },
                                                    domProps: {
                                                      value:
                                                        _vm.$data[type]
                                                          .time_collected
                                                    },
                                                    on: {
                                                      input: function($event) {
                                                        if (
                                                          $event.target
                                                            .composing
                                                        ) {
                                                          return
                                                        }
                                                        _vm.$set(
                                                          _vm.$data[type],
                                                          "time_collected",
                                                          $event.target.value
                                                        )
                                                      }
                                                    }
                                                  }),
                                              _vm._v(" "),
                                              _vm.errors.first(
                                                type + ".time_of_call"
                                              )
                                                ? _c("small", [
                                                    _vm._v(
                                                      "\n                                                " +
                                                        _vm._s(
                                                          _vm.errors.first(
                                                            type +
                                                              ".time_of_call"
                                                          )
                                                        ) +
                                                        "\n                                            "
                                                    )
                                                  ])
                                                : _vm._e(),
                                              _vm._v(" "),
                                              _vm.errors.first(
                                                type + ".time_collected"
                                              )
                                                ? _c("small", [
                                                    _vm._v(
                                                      "\n                                                " +
                                                        _vm._s(
                                                          _vm.errors.first(
                                                            type +
                                                              ".time_collected"
                                                          )
                                                        ) +
                                                        "\n                                            "
                                                    )
                                                  ])
                                                : _vm._e()
                                            ]
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("div", { staticClass: "clearfix" }, [
                                          _c(
                                            "label",
                                            { staticClass: "w-100" },
                                            [
                                              _vm._v(
                                                "\n                                            " +
                                                  _vm._s(
                                                    _vm._f("capitalize")(type)
                                                  ) +
                                                  "\n                                            " +
                                                  _vm._s(
                                                    type !== "processing_fee"
                                                      ? "Consent"
                                                      : "Amount(Naira)"
                                                  ) +
                                                  "\n                                        "
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          type !== "processing_fee"
                                            ? _c("div", [
                                                _c(
                                                  "div",
                                                  {
                                                    staticClass:
                                                      "radio p-0 col-6 float-left"
                                                  },
                                                  [
                                                    _c("input", {
                                                      directives: [
                                                        {
                                                          name: "model",
                                                          rawName: "v-model",
                                                          value:
                                                            _vm.$data[type]
                                                              .consent,
                                                          expression:
                                                            "$data[type].consent"
                                                        },
                                                        {
                                                          name: "validate",
                                                          rawName: "v-validate",
                                                          value: "required",
                                                          expression:
                                                            "'required'"
                                                        }
                                                      ],
                                                      attrs: {
                                                        id: type + "_yes",
                                                        name: "consent",
                                                        type: "radio",
                                                        value: "1"
                                                      },
                                                      domProps: {
                                                        checked: _vm._q(
                                                          _vm.$data[type]
                                                            .consent,
                                                          "1"
                                                        )
                                                      },
                                                      on: {
                                                        change: function(
                                                          $event
                                                        ) {
                                                          return _vm.$set(
                                                            _vm.$data[type],
                                                            "consent",
                                                            "1"
                                                          )
                                                        }
                                                      }
                                                    }),
                                                    _vm._v(" "),
                                                    _c(
                                                      "label",
                                                      {
                                                        attrs: {
                                                          for: type + "_yes"
                                                        }
                                                      },
                                                      [_vm._v("Gave Consent")]
                                                    )
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "div",
                                                  {
                                                    staticClass:
                                                      "radio p-0 col-6 float-left"
                                                  },
                                                  [
                                                    _c("input", {
                                                      directives: [
                                                        {
                                                          name: "model",
                                                          rawName: "v-model",
                                                          value:
                                                            _vm.$data[type]
                                                              .consent,
                                                          expression:
                                                            "$data[type].consent"
                                                        }
                                                      ],
                                                      attrs: {
                                                        id: type + "_no",
                                                        name: "consent",
                                                        type: "radio",
                                                        value: "0"
                                                      },
                                                      domProps: {
                                                        checked: _vm._q(
                                                          _vm.$data[type]
                                                            .consent,
                                                          "0"
                                                        )
                                                      },
                                                      on: {
                                                        change: function(
                                                          $event
                                                        ) {
                                                          return _vm.$set(
                                                            _vm.$data[type],
                                                            "consent",
                                                            "0"
                                                          )
                                                        }
                                                      }
                                                    }),
                                                    _vm._v(" "),
                                                    _c(
                                                      "label",
                                                      {
                                                        attrs: {
                                                          for: type + "_no"
                                                        }
                                                      },
                                                      [
                                                        _vm._v(
                                                          "Did not Give Consent"
                                                        )
                                                      ]
                                                    )
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _vm.errors.first(
                                                  type + ".consent"
                                                )
                                                  ? _c("small", [
                                                      _vm._v(
                                                        "\n                                                " +
                                                          _vm._s(
                                                            _vm.errors.first(
                                                              type + ".consent"
                                                            )
                                                          ) +
                                                          "\n                                            "
                                                      )
                                                    ])
                                                  : _vm._e()
                                              ])
                                            : _c("div", [
                                                _c(
                                                  "div",
                                                  {
                                                    staticClass:
                                                      "radio p-0 col-6 float-left"
                                                  },
                                                  [
                                                    _c("input", {
                                                      directives: [
                                                        {
                                                          name: "model",
                                                          rawName: "v-model",
                                                          value:
                                                            _vm.$data[type]
                                                              .amount,
                                                          expression:
                                                            "$data[type].amount"
                                                        },
                                                        {
                                                          name: "validate",
                                                          rawName: "v-validate",
                                                          value: "required",
                                                          expression:
                                                            "'required'"
                                                        }
                                                      ],
                                                      staticClass:
                                                        "form-control",
                                                      attrs: {
                                                        disabled: "",
                                                        name: "amount",
                                                        type: "number"
                                                      },
                                                      domProps: {
                                                        value:
                                                          _vm.$data[type].amount
                                                      },
                                                      on: {
                                                        input: function(
                                                          $event
                                                        ) {
                                                          if (
                                                            $event.target
                                                              .composing
                                                          ) {
                                                            return
                                                          }
                                                          _vm.$set(
                                                            _vm.$data[type],
                                                            "amount",
                                                            $event.target.value
                                                          )
                                                        }
                                                      }
                                                    })
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _vm.errors.first(
                                                  type + ".amount"
                                                )
                                                  ? _c("small", [
                                                      _vm._v(
                                                        "\n                                                " +
                                                          _vm._s(
                                                            _vm.errors.first(
                                                              type + ".amount"
                                                            )
                                                          ) +
                                                          "\n                                            "
                                                      )
                                                    ])
                                                  : _vm._e()
                                              ])
                                        ]),
                                        _vm._v(" "),
                                        _c("div", { staticClass: "clearfix" }, [
                                          _c("label", [_vm._v("Report")]),
                                          _vm._v(" "),
                                          _c("textarea", {
                                            directives: [
                                              {
                                                name: "model",
                                                rawName: "v-model",
                                                value: _vm.$data[type].report,
                                                expression: "$data[type].report"
                                              },
                                              {
                                                name: "validate",
                                                rawName: "v-validate",
                                                value: "required",
                                                expression: "'required'"
                                              }
                                            ],
                                            staticClass: "form-control w-100",
                                            attrs: {
                                              name: "report",
                                              placeholder: "comment here...",
                                              rows: "3"
                                            },
                                            domProps: {
                                              value: _vm.$data[type].report
                                            },
                                            on: {
                                              input: function($event) {
                                                if ($event.target.composing) {
                                                  return
                                                }
                                                _vm.$set(
                                                  _vm.$data[type],
                                                  "report",
                                                  $event.target.value
                                                )
                                              }
                                            }
                                          }),
                                          _vm._v(" "),
                                          _vm.errors.first(type + ".report")
                                            ? _c("small", [
                                                _vm._v(
                                                  "\n                                            " +
                                                    _vm._s(
                                                      _vm.errors.first(
                                                        type + ".report"
                                                      )
                                                    ) +
                                                    "\n                                        "
                                                )
                                              ])
                                            : _vm._e()
                                        ])
                                      ]
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _vm.$data[type + "Btns"]
                                    ? _c(
                                        "div",
                                        { staticClass: "modal-footer" },
                                        [
                                          _c(
                                            "button",
                                            {
                                              staticClass:
                                                "m-2 btn btn-secondary",
                                              attrs: {
                                                "data-dismiss": "modal",
                                                type: "button"
                                              }
                                            },
                                            [
                                              _vm._v(
                                                "cancel\n                                "
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "button",
                                            {
                                              staticClass: "m-2 btn bg-default",
                                              attrs: {
                                                disabled: _vm.$isProcessing,
                                                type: "submit"
                                              }
                                            },
                                            [
                                              _vm._v(
                                                "\n                                    Save changes "
                                              ),
                                              _c("i", {
                                                staticClass:
                                                  "far fa-paper-plane ml-1"
                                              })
                                            ]
                                          )
                                        ]
                                      )
                                    : _c(
                                        "div",
                                        { staticClass: "modal-footer" },
                                        [
                                          _c("h5", [
                                            _vm._v(
                                              "This customers details has already been updated once and cannot be changed!"
                                            )
                                          ])
                                        ]
                                      )
                                ]
                              )
                            : _vm._e()
                        ])
                      ])
                    ]
                  )
                })
              ],
              2
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
    require("vue-hot-reload-api")      .rerender("data-v-36606568", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-3c04515e\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/CustomSMSButton/CustomSMSButton.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "span",
    {
      staticClass:
        "CustomSMSButton d-flex align-items-center justify-content-center",
      on: {
        click: function($event) {
          return _vm.toggleModal("SMSModal")
        }
      }
    },
    [_c("i", { staticClass: "fas fa-envelope" })]
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-3c04515e", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-49386ade\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/ApprovalStatusButton.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "position-relative d-flex align-items-stretch" },
    [
      _c(
        "router-link",
        {
          class: _vm.buttonClass + " text-uppercase",
          attrs: {
            tag: _vm.link ? "a" : "span",
            to: _vm.getLink,
            "data-function": "display"
          }
        },
        [
          _vm._v(
            "\n        " +
              _vm._s(_vm.status.split("-").join(" ")) +
              "\n        "
          ),
          _c("i", {
            class: "ml-3 fas fa-" + (_vm.isApproved ? "check" : "times")
          })
        ]
      ),
      _vm._v(" "),
      _c("span", {
        class:
          _vm.buttonClass +
          " dropdown-toggle dropdown-toggle-split d-flex align-items-center",
        attrs: {
          "data-toggle": "dropdown",
          "aria-haspopup": "true",
          "aria-expanded": "false"
        }
      }),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "dropdown-menu" },
        _vm._l(_vm.filteredOptions, function(option) {
          return _c(
            "a",
            {
              key: option.modal,
              staticClass: "dropdown-item",
              attrs: { href: "javascript:" },
              on: {
                click: function($event) {
                  return _vm.toggleModal(option.modal)
                }
              }
            },
            [_vm._v("\n            " + _vm._s(option.caption) + "\n        ")]
          )
        }),
        0
      )
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
    require("vue-hot-reload-api")      .rerender("data-v-49386ade", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-6c389568\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/AutocompleteSearch/AutocompleteSearch.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("transition", { attrs: { name: "fade" } }, [
    _c(
      "div",
      {
        staticClass: "pt-md-3 pt-2 attendance-view mb-4 z-2 position-relative",
        attrs: { id: "index" }
      },
      [
        _c("custom-header", { attrs: { title: _vm.title } }),
        _vm._v(" "),
        _c("div", { staticClass: "attendance-body" }, [
          _c("div", { staticClass: "p-5 row bg-white shadow-sm card-radius" }, [
            _c("div", { staticClass: "col px-0 px-md-3" }, [
              _c(
                "div",
                {
                  staticClass:
                    "position-relative col-md-6 col-12 float-left typeahead",
                  class: _vm.open && "typeahead__open"
                },
                [
                  _c(
                    "div",
                    {
                      ref: "toggle",
                      staticClass: "typeahead__toggle",
                      on: {
                        mousedown: function($event) {
                          $event.preventDefault()
                          return _vm.toggle($event)
                        }
                      }
                    },
                    [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.search,
                            expression: "search"
                          }
                        ],
                        ref: "search",
                        staticClass: "typeahead__search",
                        attrs: { type: "text" },
                        domProps: { value: _vm.search },
                        on: {
                          blur: _vm.onBlur,
                          focus: _vm.onFocus,
                          keydown: [
                            function($event) {
                              if (
                                !$event.type.indexOf("key") &&
                                _vm._k($event.keyCode, "down", 40, $event.key, [
                                  "Down",
                                  "ArrowDown"
                                ])
                              ) {
                                return null
                              }
                              return _vm.onDownKey($event)
                            },
                            function($event) {
                              if (
                                !$event.type.indexOf("key") &&
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
                              return _vm.onEnterKey($event)
                            },
                            function($event) {
                              if (
                                !$event.type.indexOf("key") &&
                                _vm._k($event.keyCode, "esc", 27, $event.key, [
                                  "Esc",
                                  "Escape"
                                ])
                              ) {
                                return null
                              }
                              return _vm.onEscape($event)
                            },
                            function($event) {
                              if (
                                !$event.type.indexOf("key") &&
                                _vm._k($event.keyCode, "up", 38, $event.key, [
                                  "Up",
                                  "ArrowUp"
                                ])
                              ) {
                                return null
                              }
                              return _vm.onUpKey($event)
                            }
                          ],
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.search = $event.target.value
                          }
                        }
                      }),
                      _vm._v(" "),
                      _c("span", {
                        ref: "text",
                        staticClass: "typeahead__text",
                        domProps: { innerHTML: _vm._s(_vm.displayText) }
                      })
                    ]
                  ),
                  _vm._v(" "),
                  _vm.open && _vm.customers.length
                    ? _c(
                        "ul",
                        { staticClass: "typeahead__list" },
                        _vm._l(_vm.customers, function(customer, index) {
                          return _c(
                            "li",
                            { key: index, staticClass: "typeahead__item" },
                            [
                              _c("a", {
                                staticClass:
                                  "typeahead__link d-flex justify-content-between",
                                class:
                                  _vm.selectIndex === index &&
                                  "typeahead__active",
                                domProps: {
                                  innerHTML: _vm._s(
                                    _vm.getAutocomplete(customer)
                                  )
                                },
                                on: {
                                  mousedown: function($event) {
                                    $event.preventDefault()
                                    return _vm.select(customer)
                                  }
                                }
                              })
                            ]
                          )
                        }),
                        0
                      )
                    : _vm._e()
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass:
                    "col-md-6 col-12 float-left d-flex justify-content-around align-items-center"
                },
                _vm._l(_vm.searchColumns, function(ref) {
                  var title = ref.title
                  var column = ref.column
                  return _c(
                    "span",
                    { staticClass: "position-relative radio mb-0" },
                    [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.searchColumn,
                            expression: "searchColumn"
                          }
                        ],
                        attrs: { id: column, type: "radio" },
                        domProps: {
                          value: column,
                          checked: _vm._q(_vm.searchColumn, column)
                        },
                        on: {
                          change: function($event) {
                            _vm.searchColumn = column
                          }
                        }
                      }),
                      _vm._v(" "),
                      _c("label", { attrs: { for: column } }, [
                        _vm._v(_vm._s(_vm._f("capitalize")(title)))
                      ])
                    ]
                  )
                }),
                0
              )
            ])
          ])
        ])
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
    require("vue-hot-reload-api")      .rerender("data-v-6c389568", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-787cf924\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/ImagePreview.vue":
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
                return _vm.$emit("close")
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
    require("vue-hot-reload-api")      .rerender("data-v-787cf924", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-9213a016\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/customHeader.vue":
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
    require("vue-hot-reload-api")      .rerender("data-v-9213a016", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-aabe6cf8\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/CustomerProfile.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("transition", { attrs: { name: "fade" } }, [
    _c(
      "div",
      {
        class: _vm.full && "px-md-4 px-2",
        staticStyle: { "margin-left": "5rem", "margin-right": "5rem" }
      },
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
                              ),
                              _vm._v(" "),
                              _vm.auth("DVAAccess") ||
                              _vm.auth("ALTARAPAYAccess") ||
                              _vm.auth("FSLAccess")
                                ? _c(
                                    "span",
                                    {
                                      staticClass:
                                        "mt-0 pt-md-4 pt-sm-3 pt-0 mb-md-5 mb-sm-4 mb-4 px-3"
                                    },
                                    [
                                      _c("CustomSMSButton", {
                                        key: _vm.customer.id,
                                        attrs: { customer: _vm.customer }
                                      })
                                    ],
                                    1
                                  )
                                : _vm._e()
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
                              _c("ApprovalStatusButton", {
                                key: _vm.customer.id,
                                attrs: { size: "big", customer: _vm.customer }
                              })
                            ],
                            1
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
                              _vm.auth("DVAAccess")
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
    require("vue-hot-reload-api")      .rerender("data-v-aabe6cf8", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-49386ade\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/ApprovalStatusButton.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-49386ade\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/ApprovalStatusButton.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("74d94cf8", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-49386ade\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./ApprovalStatusButton.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-49386ade\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./ApprovalStatusButton.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6c389568\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/AutocompleteSearch/AutocompleteSearch.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6c389568\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/AutocompleteSearch/AutocompleteSearch.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("3aac25dc", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6c389568\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./AutocompleteSearch.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6c389568\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./AutocompleteSearch.vue");
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
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-18fd8fee\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/AppNavigation.vue")
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
Component.options.__file = "resources/assets/js/components/AppNavigation.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-18fd8fee", Component.options)
  } else {
    hotAPI.reload("data-v-18fd8fee", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/js/components/ApprovalStatusButton.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-49386ade\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/ApprovalStatusButton.vue")
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"babel-preset-env\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"babel-plugin-syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/ApprovalStatusButton.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-49386ade\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/ApprovalStatusButton.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-49386ade"
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
Component.options.__file = "resources/assets/js/components/ApprovalStatusButton.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-49386ade", Component.options)
  } else {
    hotAPI.reload("data-v-49386ade", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/js/components/AutocompleteSearch/AutocompleteSearch.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6c389568\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/AutocompleteSearch/AutocompleteSearch.vue")
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"babel-preset-env\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"babel-plugin-syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/AutocompleteSearch/AutocompleteSearch.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-6c389568\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/AutocompleteSearch/AutocompleteSearch.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-6c389568"
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
Component.options.__file = "resources/assets/js/components/AutocompleteSearch/AutocompleteSearch.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6c389568", Component.options)
  } else {
    hotAPI.reload("data-v-6c389568", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/js/components/CustomSMSButton/CustomSMSButton.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"babel-preset-env\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"babel-plugin-syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/CustomSMSButton/CustomSMSButton.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-3c04515e\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/CustomSMSButton/CustomSMSButton.vue")
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
Component.options.__file = "resources/assets/js/components/CustomSMSButton/CustomSMSButton.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3c04515e", Component.options)
  } else {
    hotAPI.reload("data-v-3c04515e", Component.options)
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
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-aabe6cf8\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/CustomerProfile.vue")
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
Component.options.__file = "resources/assets/js/components/CustomerProfile.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-aabe6cf8", Component.options)
  } else {
    hotAPI.reload("data-v-aabe6cf8", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/js/components/ImagePreview.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"babel-preset-env\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"babel-plugin-syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/ImagePreview.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-787cf924\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/ImagePreview.vue")
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
Component.options.__file = "resources/assets/js/components/ImagePreview.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-787cf924", Component.options)
  } else {
    hotAPI.reload("data-v-787cf924", Component.options)
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
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-319f68d5\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/ImageUpload.vue")
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
Component.options.__file = "resources/assets/js/components/ImageUpload.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-319f68d5", Component.options)
  } else {
    hotAPI.reload("data-v-319f68d5", Component.options)
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
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-9213a016\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/customHeader.vue")
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
Component.options.__file = "resources/assets/js/components/customHeader.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-9213a016", Component.options)
  } else {
    hotAPI.reload("data-v-9213a016", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/js/utilities/form.js":
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

/***/ "./resources/assets/js/views/DVA/verification/verification.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"babel-preset-env\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"babel-plugin-syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/views/DVA/verification/verification.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-36606568\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/views/DVA/verification/verification.vue")
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
Component.options.__file = "resources/assets/js/views/DVA/verification/verification.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-36606568", Component.options)
  } else {
    hotAPI.reload("data-v-36606568", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});