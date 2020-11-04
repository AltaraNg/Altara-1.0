<template>
    <transition name="fade">
        <div id="reminder" class="attendance">

            <custom-header :title="'Brands List'"/>



            <div class="mt-2 mt-lg-3 row attendance-head ">
                <div class="col-md-8">
                    <InventorySearch v-on:childToParent="searchEvent" :searchColumns="searchColumns" />
                </div>

                <div class="col-md-4 ">
                    <router-link :to="{name: 'BrandCreate'}">
                        <button class="btn btn-primary bg-default mt-0 myBtn float-right my-2">New Brand</button>
                    </router-link>
                </div>
            </div>


            <div class="mt-5 mb-3 attendance-head">
                <div class="w-100 my-5 mx-0 hr"></div>
                <div class="row px-4 pt-3 pb-4 text-center">
                    <div class="col light-heading" style="max-width: 120px">S/N</div>
                    <div class="col light-heading" v-for="header in headings">{{header}}</div>
                </div>
            </div>
            <div class="tab-content mt-1 attendance-body">

                    <div class="mb-3 row attendance-item" :key="index" v-for="(brand,index) in brands">
                        <div class="col d-flex align-items-center" style="max-width: 120px"  >
                            <span class="user mx-auto" >{{index+OId}}</span>
                        </div>
                        <div class="col d-flex align-items-center justify-content-center hover" @click="viewBrand(brand)">
                            {{brand.name}}
                        </div>
                        <div class="col d-flex align-items-center justify-content-center">
                            {{brand.is_active === 1 ? 'Active' : 'Inactive' }}
                        </div>
                        <div class="col d-flex align-items-center justify-content-center" @click="showCategory(brand)">
                            <span class="small" >View Categories</span>
                        </div>



                </div>
            </div>
            <div class="modal fade repayment" id="viewBrand">
                <div class="modal-dialog " role="document">
                    <div class="modal-content" v-if="showModalContent">
                        <div class="modal-header py-2">
                            <h4>{{viewCategory ? `${brandItem.name} Categories` : brandItem.name }}</h4>
                            <a aria-label="Close" class="close py-1" data-dismiss="modal">
                        <span aria-hidden="true" class="modal-close text-danger">

                            <i class="fas fa-times"></i>
                        </span>
                            </a>
                        </div>
                        <div class="modal-body px-5">
                            <div class="table-responsive" v-if="!viewCategory">
                                <table class="table table-bordered table-striped">
                                    <tbody>
                                    <tr>
                                        <th>Name</th>
                                        <td>{{ brandItem.name || "Not Available" }}</td>
                                    </tr>
                                    <tr >
                                        <th>Status</th>
                                        <td>{{ brandItem.is_active | status}}</td>
                                    </tr>

                                    <tr>
                                        <th>Date</th>
                                        <td>{{brandItem.created_at ? brandItem.created_at.split(" ")[0] : "Not Available" }}</td>
                                    </tr>
                                    <tr>
                                        <th>Time</th>
                                        <td>{{brandItem.created_at ? brandItem.created_at.split(" ")[1] : "Not Available" }}</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div v-else class="categories">
                                <div v-for="item in brandItem.categories" class="brand-cat">
                                    {{ item.name }}
                                </div>
                                <div class="new-cat" @click="toggleCat"><i class="fa fa-plus-circle" aria-hidden="true"></i>Add</div>
                                <div v-if="showCat === true" class="categories">
                                    <span v-for="cat in categories" @click="addCat(brandItem, cat)">{{cat.name}}</span>
                                </div>
                            </div>


                        </div>
                        <div class="modal-footer justify-content-center">
                            <button @click="edit(brandItem.id)" class="text-center btn bg-default" v-if="!viewCategory">Edit</button>
                             <button @click="addFinish" class="text-center btn bg-default" v-else>Save</button>
                        </div>
                    </div>
                </div>
            </div>

            <div v-if="pageParams">
                <base-pagination
                    :page-param="pageParams"
                    :page="page"
                    @fetchData="fetchData"
                    @next="next()"
                    @prev="prev()"
                >
                </base-pagination>

            </div>





        </div>
    </transition>
</template>
<script>
    import {get, patch} from '../../../utilities/api';
    import Vue from 'vue';

    import Flash from "../../../utilities/flash";

    import {mapGetters, mapActions} from "vuex";
    import CustomHeader from '../../../components/customHeader';
    import BasePagination from '../../../components/Pagination/BasePagination'
    import InventorySearch from "../../../components/InventorySearch";

    export default {
        props: {
            //TODO::verify if its necessary to make this a prop
            withBranchFilter: {default: true},
            urlToFetchOrders: {default: '/api/brand'}
        },

        components: {CustomHeader, BasePagination ,InventorySearch},

        computed: {...mapGetters(['getBranches'])},

        data() {
            return {
                branch_id: '',
                showCat: false,
                OId: null,
                viewCategory: false,
                showModalContent: false,
                pageParams: null,
                page_size: 10,
                date_from: null,
                date_to: null,
                page: 1,
                filters: [
                    {name: 'date from', model: 'date_from'},
                    {name: 'date to', model: 'date_to'}
                ],
                brands: null,
                categories: null,
                brandItem: null,
                response: {},
                show: false,
                headings:
                    ['Name', 'Status', '  '],
                searchColumns: [
                    {title: 'Name', column: 'name'},
                ]
            }
        },

        methods: {
            fetchData() {

                this.$scrollToTop();
                this.$LIPS(true);
                let {page, page_size} = this.$data;
                get(`${this.urlToFetchOrders}${!!page ? `?page=${page}` : ''}${!!page_size ? `&pageSize=${page_size}` : ''}`
                )
                    .then(({data}) => this.prepareList(data))
                    .catch(() => Flash.setError('Error Preparing form'));


            },

            prepareList(response){
                let {current_page, first_page_url, from, last_page, last_page_url, data, per_page, next_page_url, to, total, prev_page_url} = response.data;
                this.pageParams = Object.assign({}, this.pageParams, {current_page, first_page_url, from, last_page, last_page_url, per_page, next_page_url, to, total, prev_page_url});
                this.brands = data;
                this.OId = from;
                this.$LIPS(false);

            },
            addFinish(){
                this.$LIPS(true);
                let form = [];
                this.brandItem.categories.forEach(item => {
                    form.push(item.id);
                })

                let data = {
                    categories: form
                };
                patch(`/api/brand/${this.brandItem.id}/categories`, data).then((res) => {
                    this.$swal({
                        icon: 'success',
                        title: res.message

                    });
                     return this.$router.push(
                                            {path: '/log/brands'}
                                        )
                }).catch(() => Flash.setError('Error Adding categories'));
                this.$LIPS(false);
            },

            next(firstPage = null) {
                if (this.pageParams.next_page_url) {
                    this.page = firstPage ? firstPage : parseInt(this.page) + 1;
                    this.fetchData();
                }
            },

            prev(lastPage = null) {
                if (this.pageParams.prev_page_url) {
                    this.page = lastPage ? lastPage : parseInt(this.page) - 1;
                    this.fetchData();
                }
            },

            showCategory(item){
               this.showModalContent = true;
               this.brandItem = item;
               this.viewCategory = true;
               return $(`#viewBrand`).modal('toggle');

            },
            addCat(brand, category){
                if(brand.categories.some(cat => cat.id === category.id)){
                    alert(`${category.name} category already exists`);
                }
                else{
                     brand.categories.push(category);
                }


            },
            getCategories(){
                get('/api/category').then(res => {
                    console.log(res.data.data);
                    Vue.set(this.$data, 'categories', res.data.data.data)
                }).catch(err => {
                    console.log(err)
                })
            },
            toggleCat(){
                if(!this.showCat){
                Vue.set(this.$data, 'showCat', true )}
                else{
                    Vue.set(this.$data, 'showCat', false)
                }

            },

            viewBrand(brand){
                this.viewCategory = false;
                this.showModalContent = true;
                this.brandItem = brand;
                return $(`#viewBrand`).modal('toggle');
            },
            edit(item){
                this.showModalContent = false;
                $(`#viewBrand`).modal('toggle');

                return this.$router.push(
                    {name: 'BrandEdit', params: {id: item}}
                )
            },

            removeCat(){

            },

            searchEvent (data) {
                get(this.urlToFetchOrders + data)
                    .then(({data}) => this.prepareList(data))
                    .catch(() => Flash.setError('Error Preparing form'));
            },

            ...mapActions('ModalAccess', [
                'addCustomerOptionsModalsToDom',
                'removeCustomerOptionsModalsFromDom'
            ])
        },

        created() {
            this.$props.withBranchFilter && this.filters.unshift({name: 'branch', model: 'branch_id'});
            this.addCustomerOptionsModalsToDom();
            this.$prepareBranches();
            this.getCategories();
            this.fetchData();
        },

        destroyed() {
            this.removeCustomerOptionsModalsFromDom();
        },
        filters: {
            status: function(value){
                if (value === 1){
                    return 'Active'
                }else return 'Inactive'
            }
        },
    }
</script>

<style scoped>
    .flex-row-bottom {
        display: flex;
        flex-direction: row;
        align-items: flex-end;
        justify-content: flex-end;
    }
    .green{
        color: green;
    }
    .red{
        color: red;
    }
    .brand-cat{
        display: inline-block;
        padding: 2px 4px;
        margin: 1px 4px;
        background: #dddddd;
        border-radius: 5px;
    }
    .brand-cat span{
        color: red;
    }
    .new-cat i{
        color: #2975a5;
        font-size: 1.5em;
    }
    .new-cat{

        padding: 4px 1px;
        cursor: pointer;

    }
    .categories{
        padding: 4px 1px;
    }
    .categories span{
        margin: 1px 4px;
        font-size: 14px;
        cursor: pointer;
    }
</style>
