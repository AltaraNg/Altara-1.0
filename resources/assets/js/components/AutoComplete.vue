<template>
  <div>
    <div class="dropdown">
        <input type="text" class="form-control" v-model="inputValue" @input="searchEvent" />        
        <div v-show="inputValue && apiLoaded" class="dropdown-list">
      <div @click="selectItem(item)" v-for="item in itemList" :key="item.id" class="dropdown-item">
        {{ item.full_name }}
      </div>
    </div>
    </div>
  </div>
</template>

<script>
import queryParam from "../utilities/queryParam";
import {get, post} from '../utilities/api';

export default {
    name:'AutoComplete',
    props:{
        apiUrl:'',
    },
    data(){
        return {
            selectedItem: {},
            inputValue: '',
            itemList: [],
            apiLoaded: false,
        }
    },
    methods:{
        selectItem (data) {
            console.log('data data ',data);
            this.inputValue= data.full_name;
            this.apiLoaded = false;
            this.$emit('childToParent',data)
        },
        searchEvent () {
            console.log('poploic ',this.apiUrl+this.inputValue);
            this.getproduct();
            // let filters = {};
            // Object.keys(this.searchFilter).forEach(key => {
            //     const filter = this.searchFilter[key];
            //     if(filter) {
            //         filters[key] = this.searchQ;
            //     }                    
            // });
            // const filterParam = queryParam(filters);
            // this.$emit('childToParent', filterParam);
        },

        async getproduct(){

            try{
                      

                // const fetchProduct = await get(this.apiUrl+this.inputValue);
                const fetchProduct = await post('/api/customer/autocomplete',{searchableFields:{first_name: this.inputValue,
last_name: this.inputValue,
middle_name: this.inputValue}});
                // this.itemList = fetchProduct.data.data.data;
                this.itemList = fetchProduct.data.customers;
                this.apiLoaded = true
                console.log('poploic LimitList',this.itemList)
            }
            catch(err){
                this.$displayErrorMessage(err);
            }
        },
    }
}
</script>

<style>
.dropdown{
  position: relative;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
}
.dropdown-input, .dropdown-selected{
  width: 100%;
  padding: 10px 16px;
  border: 1px solid transparent;
  background: #edf2f7;
  line-height: 1.5em;
  outline: none;
  border-radius: 8px;
}
.dropdown-input:focus, .dropdown-selected:hover{
  background: #fff;
  border-color: #e2e8f0;
}
.dropdown-input::placeholder{
  opacity: 0.7;
}
.dropdown-selected{
  font-weight: bold;
  cursor: pointer;
}
.dropdown-list{
  position: absolute;
  width: 100%;
  max-height: 500px;
  margin-top: 4px;
  overflow-y: auto;
  background: #ffffff;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
}
.dropdown-item{
  display: flex;
  width: 100%;
  padding: 11px 16px;
  cursor: pointer;
}
.dropdown-item:hover{
  background: #edf2f7;
}
.dropdown-item-flag{
  max-width: 24px;
  max-height: 18px;
  margin: auto 12px auto 0px;
}
</style>