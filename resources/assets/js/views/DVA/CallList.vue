<template>
    <transition name="fade">
        <div id="reminder" class="attendance">

            <custom-header :title="'Reminder List'"/>
            <div class="mt-5 mb-3 attendance-head">
                <div class="w-100 my-5 mx-0 hr"></div>
                <div class="row px-4 pt-3 pb-4 text-center">
                    <div class="col light-heading" style="max-width: 120px">S/N</div>
                    <div class="col light-heading" v-for="header in headings">{{header}}</div>
                </div>
            </div>
            <div class="tab-content mt-1 attendance-body">
                 <div class="mb-3 row attendance-item" :key="index" v-for="(order,index) in orders">
                        <div class="col d-flex align-items-center" style="max-width: 120px"  >
                            <span class="user mx-auto" >{{index+OId}}</span>
                        </div>
                        <div class="col d-flex align-items-center justify-content-center" @click="viewStuffs(order.amortization, mode.amortization)">
                            {{order.order_number}}
                        </div>
                        <div class="col d-flex align-items-center justify-content-center">
                            {{order.customer_name}}
                        </div>
                        <div class="col d-flex align-items-center justify-content-center">
                            {{order.customer_phone}}
                        </div>
                        <div class="col d-flex align-items-center justify-content-center" @click="viewStuffs(order.product, mode.product)">
                            {{order.product.name}}
                        </div>
                         <div class="col d-flex align-items-center justify-content-center">
                            {{order.repayment  |  currency('₦')}}
                        </div>
                         <div class="col d-flex align-items-center justify-content-center" @click="viewStuffs(order.notifications, mode.notifications)">
                            {{order.notifications[0]? order.notifications[0].type : 'Not available'}}
                        </div>




                </div>


            </div>
            <div class="modal fade repayment" id="viewStuffs">
                <div class="modal-dialog " role="document">
                    <div class="modal-content" v-if="showModalContent">
                        <div class="modal-header py-2">
                            <h4></h4>
                            <a aria-label="Close" class="close py-1" data-dismiss="modal">
                        <span aria-hidden="true" class="modal-close text-danger">

                            <i class="fas fa-times"></i>
                        </span>
                            </a>
                        </div>
                        <div class="modal-body px-5">
                            <div class="table-responsive" v-if="modalMode='product'">
                                <table class="table table-bordered table-striped">
                                    <tbody>
                                    <tr>
                                        <th>Name</th>
                                        <td>{{ modalItem.name || "Not Available" }}</td>
                                    </tr>
                                    <tr >
                                        <th>Status</th>
                                        <td>{{ modalItem.price}}</td>
                                    </tr>

                                    <tr>
                                        <th>Date</th>
                                        <td>{{modalItem.product_type }}</td>
                                    </tr>
                                    <tr>
                                        <th>Time</th>
                                        <td>{{modalItem.created_at ? modalItem.created_at.split(" ")[1] : "Not Available" }}</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div v-else-if="modalMode='amortization'" class="table-responsive">

                            </div>


                        </div>
                        <div class="modal-footer justify-content-center">

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
    import Vue from 'vue';
    import {get} from '../../utilities/api';
    import Flash from "../../utilities/flash";
    import {mapGetters, mapActions} from "vuex";
    import CustomHeader from '../../components/customHeader';
    import BasePagination from '../../components/Pagination/BasePagination';
    import Vue2Filters from 'vue2-filters'

    Vue.use(Vue2Filters);

    export default {
        props: {
            //TODO::verify if its necessary to make this a prop
            withBranchFilter: {default: true},
            urlToFetchOrders: {default: '/api/repayment_reminder'}
        },

        components: {CustomHeader, BasePagination },

        computed: {...mapGetters(['getBranches'])},

        data() {
            return {
                branch_id: '',
                modalItem: null,
                page_size: 10,
                 OId: null,
                date_from: null,
                date_to: null,
                page: 1,
                pageParams: null,
                filters: [
                    {name: 'date from', model: 'date_from'},
                    {name: 'date to', model: 'date_to'}
                ],
                mode: {
                    amortization: "amortization", notification: "notification", product: "product"
                },
                modalMode: null,
                orders: null,
                response: {},
                show: false,
                showModalContent:false,
                headings:
                    ['Order Number', 'Customer name', 'Phone Number', 'Product', 'Repayment', 'Call Count', ]
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
                this.orders = data;
                this.OId = from;
                this.$LIPS(false);

            },
             viewStuffs(item, mode){
                this.showModalContent = true;
                this.modalMode = mode;
                this.modalItem = item;
                return $(`#viewStuffs`).modal('toggle');
            }
        },
        created(){

           this.fetchData();
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
