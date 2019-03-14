<template>
   <div :class="typeaheadState">
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
         <li :key="index" class="typeahead__item"
             v-for="(option, index) in filteredOptions">
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
         typeaheadState() {
            return this.open ? 'typeahead typeahead__open' : 'typeahead';
         },
         filteredOptions() {
            const exp = new RegExp(this.search, 'i');
            return this.options.filter(option => {
               return (exp.test(option.id) || exp.test(option[this.caption]));
            });
         }
      },
      methods: {
         onDownKey() {
            if (this.filteredOptions.length - 1 > this.selectIndex) {
               this.selectIndex++;
            }
         },
         onUpKey() {
            if (this.selectIndex > 0) {
               this.selectIndex--;
            }
         },
         onEnterKey() {
            const option = this.filteredOptions[this.selectIndex];
            if (option) {
               this.select(option);
            }
         },
         select(option) {
            this.displayText = option[this.caption];
            this.$emit('input', option.id);
            this.$refs.search.blur();
         },
         toggle(e) {
            if (e.target === this.$refs.toggle ||
               e.target === this.$refs.search ||
               e.target === this.$refs[this.caption]) {
               if (this.open) {
                  if (e.target !== this.$refs.search &&
                     e.target !== this.$refs[this.caption]) {
                     this.$refs.search.blur()
                  }
               } else {
                  this.$refs.search.focus();
               }
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
      }
   }
</script>

<style lang="scss">
   @import "../../sass/app/variables";
   .typeahead {
      border-radius : 3px;
      border        : 1px solid #E3E3E3;
      position      : relative;
      z-index       : 1;
   }

   .typeahead__open {
      border : 1px solid lighten($default-color, 15%);
   }

   .typeahead__open .typeahead__text {
      opacity : 0.4;
   }

   .typeahead__toggle {
      position : relative;
      z-index  : 1;
      line-height: 1rem;
   }

   .typeahead__search {
      position    : absolute;
      top         : 0;
      left        : 0;
      padding     : 10px;
      width       : 100%;
      display     : block;
      cursor      : text;
      background  : transparent;
      border      : none;
      outline     : none;
      z-index     : 4;
   }

   .typeahead__text {
      min-height  : 30px;
      line-height : 1em;
      padding     : 10px;
      display     : inline-block;
      position    : relative;
      z-index     : 3;
   }

   .typeahead__list {
      margin  : 0;
      padding : 0;
       max-height: 240px;
       overflow-y: scroll;
      position: absolute;
      background-color: white;
      width: calc(100% + 2px);
      border: 1px solid lighten($default-color, 15%);
      border-top: 0;
      left: -1px;
      right: 0;
      border-radius: 0 0 4px 4px;
   }

   .typeahead__item {
      display    : block;
      border-top : 1px solid #f4f4f4;
   }

   .typeahead__link {
      display     : block;
      padding     : 10px;
      line-height : 1em;
      cursor      : pointer;
   }

   .typeahead__active {
      background : lighten($default-color, 15%);
      color      : #fff !important;
   }
</style>