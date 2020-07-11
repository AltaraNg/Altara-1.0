<template>
    <transition name="fade">
        <div id="reminder" class="attendance">

            <custom-header :title="'Suppliers List'"/>
<!--Todo Create filter component -->
<!--            <div class="mt-2 mt-lg-3 row attendance-head attendance-view">-->
<!--                <div class="col-4 col-lg" v-for="{name:filter,model} in filters">-->
<!--                    <div class="row">-->

<!--                        <div class="light-heading mb-1">-->
<!--                            <span class="d-none d-sm-inline">Select </span>-->
<!--                            {{filter | capitalize}}-->
<!--                        </div>-->

<!--                        <div class="form-group w-100" v-if="filter === 'branch'">-->
<!--                            <select class="custom-select" v-model="$data[model]"-->
<!--                                    @keyup.enter="fetchData()">-->
<!--                                <option disabled selected value="">{{filter | capitalize}}</option>-->
<!--                                <option :value="id" v-for="{name,id} in getBranches">-->
<!--                                    {{name | capitalize}}-->
<!--                                </option>-->
<!--                            </select>-->
<!--                        </div>-->

<!--                        <div class="form-group w-100" v-else>-->
<!--                            <input class="form-control" type="date" v-model="$data[model]" @keyup.enter="fetchData()">-->
<!--                        </div>-->
<!--                    </div>-->
<!--                </div>-->

<!--                <div class="col-12 col-lg p-0 flex-row-bottom">-->
<!--                    <button @click="fetchData()" class="btn btn-primary bg-default mt-0 myBtn">Apply Filter</button>-->
<!--                </div>-->
<!--            </div>-->

            <div class="mt-5 mb-3 attendance-head">
                <div class="w-100 my-5 mx-0 hr"></div>
                <div class="row px-4 pt-3 pb-4 text-center">
                    <div class="col light-heading" style="max-width: 120px">S/N</div>
                    <div class="col light-heading" v-for="header in headings">{{header}}</div>
                </div>
            </div>
            <div class="tab-content mt-1 attendance-body">

                    <div class="mb-3 row attendance-item" :key="index" v-for="(supplier,index) in suppliers">
                        <div class="col d-flex align-items-center" style="max-width: 120px">
                            <span class="user mx-auto" >{{index+OId}}</span>
                        </div>
                        <div class="col d-flex align-items-center justify-content-center">
                            {{supplier.name}}
                        </div>
                        <div class="col d-flex align-items-center justify-content-center">
                            {{supplier.sku}}
                        </div>
                        <div class="col d-flex align-items-center justify-content-center">
                            {{supplier.email}}
                        </div>
                        <div class="col d-flex align-items-center justify-content-center">
                            {{supplier.phone_number}}
                        </div>
                        <div class="col d-flex align-items-center justify-content-center">
                            {{supplier.contact_person_name| capitalize}}
                        </div>


                </div>
            </div>

<!--            <base-pagination :prev_page_url="pageParams.prev_page_url"-->
<!--                             :next_page_url="pageParams.next_page_url"-->
<!--                             :first_page_url="pageParams.first_page_url"-->
<!--                             :last_page_url="pageParams.last_page_url"-->
<!--                             :last_page="pageParams.last_page"-->
<!--                             :current_page="pageParams.current_page"-->
<!--                             :from="pageParams.from"-->
<!--                             :to="pageParams.to";-->
<!--                             :total="pageParams.total"-->
<!--                             :page="page"-->
<!--                             :page_size="pageParams.per_page"></base-pagination>-->





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
            urlToFetchOrders: {default: '/api/supplier'}
        },

        components: {CustomHeader, },

        computed: {...mapGetters(['getBranches'])},

        data() {
            return {
                branch_id: '',
                OId: null,
                pageParams: null,
                page_size: 10,
                date_from: null,
                date_to: null,
                page: 1,
                filters: [
                    {name: 'date from', model: 'date_from'},
                    {name: 'date to', model: 'date_to'}
                ],
                suppliers: null,
                response: {},
                show: false,
                headings:
                    ['Name', 'SKU','Email', 'Phone Number', 'Contact Person']
            }
        },

        methods: {
            fetchData() {
                this.$scrollToTop();
                this.$LIPS(true);
                let {page, page_size, date_from, date_to, } = this.$data;
                get(this.urlToFetchOrders)
                    .then(({data}) => this.prepareList(data))
                    .catch(() => Flash.setError('Error Preparing form'));


            },

            prepareList(response){
                let {current_page, first_page_url, from, last_page, last_page_url, data, per_page, next_page_url, to, total, prev_page_url} = response.data;
                this.pageParams = Object.assign({}, this.pageParams, {current_page, first_page_url, from, last_page, last_page_url, per_page, next_page_url, to, total, prev_page_url});
                this.suppliers = data;
                this.OId = from;
                this.$LIPS(false);

            },

            next(firstPage = null) {
                if (this.orders.next_page_url) {
                    this.page = firstPage ? firstPage : parseInt(this.page) + 1;
                    this.fetchData();
                }
            },

            prev(lastPage = null) {
                if (this.orders.prev_page_url) {
                    this.page = lastPage ? lastPage : parseInt(this.page) - 1;
                    this.fetchData();
                }
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

        destroyed() {
            this.removeCustomerOptionsModalsFromDom();
        }
    }
</script>

<style scoped>
    .flex-row-bottom {
        display: flex;
        flex-direction: row;
        align-items: flex-end;
        justify-content: flex-end;
    }
</style>
