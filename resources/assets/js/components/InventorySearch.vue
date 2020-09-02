<template>
    <div>
        <div class='searchBar'>
            <div class="row">
                <div class="col-md-6">
                    <input type="text" class="form-control" v-model="searchQ" @input="searchEvent" @change="searchEvent" />
                </div>
                <div class="col-md-6 float-left d-flex justify-content-around align-items-center">
                    <span class="position-relative radio " v-for="object in searchColumns">
                        <input checked  :value="object.column" @change="searchEvent" name="choice" :id="object.column" type="radio" v-model="searchFilter">
                        <label :for="object.column">{{object.title | capitalize}}</label>
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
                filters[this.searchFilter] = this.searchQ;
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
