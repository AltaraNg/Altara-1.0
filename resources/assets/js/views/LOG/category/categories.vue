<template>
    <transition name="fade">
        <div id="reminder" class="attendance">

            <custom-header :title="'Categories List'"/>
            <div class="mt-2 mt-lg-3 row attendance-head ">
                <router-link :to="{name: 'categoryCreate'}">
                    <button class="btn btn-primary bg-default mt-0 myBtn ">New Category</button>
                </router-link>
            </div>

            <div class="mt-5 mb-3 attendance-head">
                <div class="w-100 my-5 mx-0 hr"></div>
                <div class="row px-4 pt-3 pb-4 text-center">
                    <div class="col light-heading" style="max-width: 120px">S/N</div>
                    <div class="col light-heading" v-for="header in headings">{{header}}</div>
                </div>
            </div>
            <div class="tab-content mt-1 attendance-body">

                    <div class="mb-3 row attendance-item" :key="index" v-for="(category,index) in categories" @click="viewCategory(category)">
                        <div class="col d-flex align-items-center" style="max-width: 120px">
                            <span class="user mx-auto" >{{index+OId}}</span>
                        </div>
                        <div class="col d-flex align-items-center justify-content-center">
                            {{category.name}}
                        </div>
                        <div class="col d-flex align-items-center justify-content-center">
                            {{category.is_active ===1 ? 'Active' : 'Inactive'}}
                        </div>



                </div>
            </div>
            <div class="modal fade repayment" id="viewCategory">
                <div class="modal-dialog" role="document">
                    <div class="modal-content" v-if="showModalContent">
                        <div class="modal-header py-2">
                            <h4>{{categoryItem.name}}</h4>
                            <a aria-label="Close" class="close py-1" data-dismiss="modal">
                        <span aria-hidden="true" class="modal-close text-danger">

                            <i class="fas fa-times"></i>
                        </span>
                            </a>
                        </div>
                        <div class="modal-body px-5">
                            <div class="table-responsive">
                                <table class="table table-bordered table-striped">
                                    <tbody>
                                    <tr>
                                        <th>Name</th>
                                        <td>{{ categoryItem.name || "Not Available" }}</td>
                                    </tr>
                                    <tr >
                                        <th>Status</th>
                                        <td>{{ categoryItem.is_active | status}}</td>
                                    </tr>

                                    <tr>
                                        <th>Date</th>
                                        <td>{{categoryItem.created_at ? categoryItem.created_at.split(" ")[0] : "Not Available" }}</td>
                                    </tr>
                                    <tr>
                                        <th>Time</th>
                                        <td>{{categoryItem.created_at ? categoryItem.created_at.split(" ")[1] : "Not Available" }}</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>



                        </div>
                        <div class="modal-footer justify-content-center">
                            <button @click="edit(categoryItem.id)" class="text-center btn bg-default">Edit</button>
                        </div>
                    </div>
                </div>
            </div>
        <div v-if="pageParams">
            <base-pagination
                :prev_page_url="pageParams.prev_page_url? pageParams.prev_page_url : '' "
                :next_page_url="pageParams.next_page_url? pageParams.next_page_url : ''"
                :first_page_url="pageParams.first_page_url"
                :last_page_url="pageParams.last_page_url"
                :last_page="pageParams.last_page"
                :current_page="pageParams.current_page"
                :from="pageParams.from ? pageParams.from : 0 "
                :to="pageParams.to ? pageParams.to : 0 "
                :total="pageParams.total"
                :page="page"
                @fetchData="fetchData()"
                @next="next()"
                @prev="prev()"
                :page_size="pageParams.per_page">
            </base-pagination>

        </div>





        </div>
    </transition>
</template>
<script>
    import {get} from '../../../utilities/api';
    import Flash from "../../../utilities/flash";

    import {mapGetters, mapActions} from "vuex";
    import CustomHeader from '../../../components/customHeader';
    import BasePagination from '../../../components/Pagination/BasePagination'

    export default {
        props: {
            //TODO::verify if its necessary to make this a prop
            withBranchFilter: {default: true},
            urlToFetchOrders: {default: '/api/category'}
        },

        components: {CustomHeader, BasePagination },

        computed: {...mapGetters(['getBranches'])},

        data() {
            return {
                branch_id: '',
                OId: null,
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
                categories: null,
                categoryItem: null,
                response: {},
                show: false,
                headings:
                    ['Name', 'Status',]
            }
        },

        methods: {
            fetchData() {
                this.$scrollToTop();
                this.$LIPS(true);
                let {page, page_size} = this.$data;
                get(this.urlToFetchOrders +
                    `${!!page ? `?page=${page}` : ''}` +
                    `${!!page_size ? `&pageSize=${page_size}` : ''}`
                )
                    .then(({data}) => this.prepareList(data))
                    .catch(() => Flash.setError('Error Preparing form'));


            },

            prepareList(response){
                let {current_page, first_page_url, from, last_page, last_page_url, data, per_page, next_page_url, to, total, prev_page_url} = response.data;
                this.pageParams = Object.assign({}, this.pageParams, {current_page, first_page_url, from, last_page, last_page_url, per_page, next_page_url, to, total, prev_page_url});
                this.categories = data;
                this.OId = from;
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

            viewCategory(category){
                this.showModalContent = true;
                this.categoryItem = category;
                return $(`#viewCategory`).modal('toggle');
            },
            edit(item){
                this.showModalContent = false;
                $(`#viewCategory`).modal('toggle');

                return this.$router.push(
                    {name: 'categoryEdit', params: {id: item}}
                )
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
            this.fetchData();
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
</style>
