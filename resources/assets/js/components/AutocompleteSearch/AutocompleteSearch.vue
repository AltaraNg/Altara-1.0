<template>
    <transition name="fade">
        <div class="pt-md-3 pt-2 attendance-view mb-4 z-2 position-relative" id="index">
            <custom-header :title="title"/>
            <div class="attendance-body">
                <div class="p-5 row bg-white shadow-sm card-radius">
                    <div class="col px-0 px-md-3">
                        <div :class="open && 'typeahead__open'"
                             class="position-relative col-md-6 col-12 float-left typeahead">
                            <div @mousedown.prevent="toggle" class="typeahead__toggle" ref="toggle">
                                <input @blur="onBlur"
                                       @focus="onFocus"
                                       @keydown.down="onDownKey"
                                       @keydown.enter="onEnterKey"
                                       @keydown.esc="onEscape"
                                       @keydown.up="onUpKey"
                                       class="typeahead__search"
                                       ref="search"
                                       type="text"
                                       v-model="search">
                                <span class="typeahead__text" ref="text" v-html="displayText"></span>
                            </div>
                            <ul class="typeahead__list" v-if="open && customers.length">
                                <li :key="index" class="typeahead__item" v-for="(customer, index) in customers">
                                    <a :class="selectIndex === index && 'typeahead__active'"
                                       @mousedown.prevent="select(customer)"
                                       class="typeahead__link d-flex justify-content-between"
                                       v-html="getAutocomplete(customer)">
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="col-md-6 col-12 float-left d-flex justify-content-around align-items-center">
                            <span class="position-relative radio mb-0" v-for="{title,column} in searchColumns">
                                <input :id="column" :value="column" type="radio" v-model="searchColumn">
                                <label :for="column">{{title | capitalize}}</label>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
    import {post} from "../../utilities/api"
    import Flash from "../../utilities/flash";
    import CustomHeader from '../../components/customHeader';

    export default {
        name: "AutocompleteSearch",
        components: {CustomHeader},
        props: {
            url: {type: String, required: true},
            title: {type: String, required: true}
        },

        data() {
            return {
                search: '',
                open: false,
                customers: [],
                selectIndex: 0,
                displayText: '',
                searchColumn: 'name',
                searchColumns: [
                    {title: 'customer id', column: 'id'},
                    {title: 'customer name', column: 'name'},
                    {title: 'phone number', column: 'telephone'}
                ]
            }
        },

        watch: {
            searchColumn: function (newVal) {
                newVal === "telephone" && (this.customers = []);
            },

            search: function (newVal) {
                if (!!newVal.trim()) {
                    if (!this.isStringLengthValid(newVal))
                        return Flash.setError("search should not be more than " +
                            (this.searchColumn === 'name' ? " 3 " : " 1 ") + "words");

                    let searchableFields = {};
                    if (this.searchColumn === 'name') {
                        searchableFields['first_name'] = this.search;
                        searchableFields['middle_name'] = this.search;
                        searchableFields['last_name'] = this.search;
                    } else searchableFields[this.searchColumn] = this.search;

                    post(this.url, {searchableFields})
                        .then(({data: {customers}}) => this.customers = customers)
                        .catch(() => Flash.setError('error fetching result'));
                }
            }
        },

        methods: {
            onDownKey() {
                (this.customers.length - 1 > this.selectIndex) && this.selectIndex++;
            },

            onUpKey() {
                (this.selectIndex > 0) && this.selectIndex--;
            },

            onEnterKey() {
                const option = this.customers[this.selectIndex];
                if (option) this.select(option);
            },

            select(option) {
                this.displayText = this.getAutocomplete(option);
                this.$emit('customer-selected', option.id);
                this.$refs.search.blur();
            },

            toggle({target}) {
                if (target === this.$refs.toggle || target === this.$refs.search) {
                    if (this.open) {
                        if (target !== this.$refs.search) this.$refs.search.blur();
                    } else this.$refs.search.focus();
                }
            },

            onFocus() {
                this.open = true;
            },

            onBlur() {
                this.search = '';
                this.open = false;
            },

            onEscape() {
                this.$refs.search.blur();
            },

            getAutocomplete(option) {
                let optionArr = [];
                this.searchColumn === 'id' && optionArr.push(option.id);
                this.searchColumn === 'telephone' && optionArr.push(option.telephone);
                const fullName = option.hasOwnProperty('full_name') ?
                    option.full_name : this.$getCustomerFullName(option, !!option.middle_name);
                optionArr.push(fullName);
                return this.styleAutocomplete(optionArr);
            },

            styleAutocomplete(optionArr) {
                let HTMLElement = '';
                optionArr.forEach(option => HTMLElement += `<span class="col">${option}</span>`);
                return HTMLElement;
            },

            isStringLengthValid(str) {
                const wordCount = str.split(' ').length;
                return (this.searchColumn === 'name' && wordCount <= 3) || wordCount <= 1;
            }
        }
    }
</script>

<style lang="scss" scoped>
    .typeahead.typeahead__open {
        .typeahead__text {
            opacity: 0;
        }

        input {
            color: rgba(142, 151, 160, .8);
        }
    }

    .typeahead {
        input {
            color: rgba(142, 151, 160, .0);
        }
    }

    .typeahead__text > span {
        padding-left: 0 !important;
    }
</style>
