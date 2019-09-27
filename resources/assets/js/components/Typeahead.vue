<template>
    <div :class="open ? 'typeahead typeahead__open' : 'typeahead'"
         class="position-relative">
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
            <span class="typeahead__text" ref="text">
            {{displayText}}
         </span>
        </div>
        <ul class="typeahead__list" v-if="open">
            <li :key="index" class="typeahead__item" v-for="(option, index) in filteredOptions">
                <a :class="[selectIndex === index ? 'typeahead__active' : '']"
                   @mousedown.prevent="select(option)"
                   class="typeahead__link">
                    {{option[caption]}}
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
    import {EventBus} from "../utilities/event-bus";
    export default {
        props: {
            options: {
                type: Array,
                default() {
                    return []
                }
            },
            caption: {
                type: [String, Number],
                default: null
            },
            value: {
                type: [String, Number],
                default: null
            },
            nameValue: {
                type: [String, Number],
                default: null
            }
        },
        data() {
            return {
                open: false,
                selectIndex: 0,
                displayText: '',
                search: ''
            }
        },
        computed: {
            filteredOptions() {
                const exp = new RegExp(this.search, 'i');
                return this.options.filter(option => (exp.test(option.id) || exp.test(option[this.caption])));
            }
        },
        watch: {
            value: function (newVal) {
                if (newVal) this.select((this.options.find(option => option.id === newVal)))
            },
            // nameValue: function (newName) {
            //     if (newName) this.select((this.options.find(option => option.name === newName)))
            // }
        },
        methods: {
            onDownKey() {
                (this.filteredOptions.length - 1 > this.selectIndex) && this.selectIndex++;
            },
            onUpKey() {
                (this.selectIndex > 0) && this.selectIndex--;
            },
            onEnterKey() {
                const option = this.filteredOptions[this.selectIndex];
                if (option) this.select(option);
            },
            select(option) {
                this.displayText = option[this.caption];
                this.$emit('input', option.id);
                this.$refs.search.blur();
            },
            toggle(e) {
                if (e.target === this.$refs.toggle || e.target === this.$refs.search || e.target === this.$refs[this.caption]) {
                    if (this.open) {
                        if (e.target !== this.$refs.search && e.target !== this.$refs[this.caption]) this.$refs.search.blur();
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
            }
        },
        created(){
            EventBus.$on('clearTypeAhead', () => this.displayText = null);
        }
    }
</script>