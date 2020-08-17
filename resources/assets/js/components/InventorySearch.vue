<template>
  <div>
       <div class='searchBar'>
            <div class="row">
                <div class="col-md-6">
                    <input type="text" class="form-control" v-model="searchQ" @input="searchEvent" @change="searchEvent" />
                </div>
                <div class="col-md-6 float-left d-flex justify-content-around align-items-center">
                    <span class="position-relative checkbox " v-for="{title,column} in searchColumns">
                        <input @input="searchEvent"  @change="searchEvent" :id="column" type="checkbox" v-model="searchFilter[column]">
                        <label :for="column">{{title | capitalize}}</label>
                    </span>
                </div>
            </div>
        </div>
  </div>
</template>

<script>
import queryParam from "../utilities/queryParam";

export default {
    name:'InventorySearch',
    props: {
        searchColumns: {},
    },
    data(){
        return {
            searchQ:'',
            searchFilter:{}
        }
    },
    methods:{
        searchEvent () {
            let filters = {};
            Object.keys(this.searchFilter).forEach(key => {
                const filter = this.searchFilter[key];
                if(filter) {
                    filters[key] = this.searchQ;
                }                    
            });
            const filterParam = queryParam(filters);
            this.$emit('childToParent', filterParam);
        }
    }
}
</script>

<style>
.searchBar{
    background-color: #fff;
    border-radius:7px;
    padding:20px;
}
</style>