<template>
    <div>
        <div v-if="tab === 'Log Payment'">
            <Lookup :logger="'cash'"/>
        </div>
        <div class="tab-content mt-1 attendance-body">
            <div v-if="tab === 'View Payments'">
                <div class="mb-3 row attendance-item" :key="index" v-for="(payment,index) in renderedList">
                    <div class="col d-flex align-items-center" style="max-width: 120px">
                        <span class="user mx-auto" :class="tab">{{index+OId}}</span>
                    </div>
                    <div class="col d-flex align-items-center justify-content-center" v-if="payment.customer">
                        {{payment.customer.id}}
                    </div>
                    <div class="col d-flex align-items-center justify-content-center">
                        {{payment.date.split(' ')[0]}}
                    </div>
                    <div class="col d-flex align-items-center justify-content-center">
                        {{payment.date.split(' ')[1]}}
                    </div>
                    <div class="col d-flex align-items-center justify-content-center">
                        {{payment.type}}
                    </div>
                    <div class="col d-flex align-items-center justify-content-center">
                        {{payment.method}}
                    </div>
                    <div class="col d-flex align-items-center justify-content-center">
                        ₦{{payment.amount}}
                    </div>
                    <div class="col d-flex align-items-center justify-content-center" @click="updateModal(payment)" data-hoverable="true">
                        <p :class="payment.comment? 'green' : 'red'" class="overflow"><i class="fas fa-info-circle"></i></p>
                    </div>
                </div>
            </div>
            <div v-if="tab === 'Reconcile'">
                <div class="mb-3 row attendance-item" v-for="(item, index) in renderedList">
                    <div class="col d-flex align-items-center" style="max-width: 120px">
                        <span class="user mx-auto" :class="tab" @click="updateReconciledPayment(item)">{{index+OId}}</span>
                    </div>

                    <div class="col d-flex align-items-center justify-content-center">
                        {{item.payment_method}}
                    </div>
                    <div class="col d-flex align-items-center justify-content-center">
                        {{item.date.split(' ')[0]}}
                    </div>
                    <div class="col d-flex align-items-center justify-content-center">
                        <span v-if="item.deposited">{{item.cash_at_hand | currency('₦')}}</span>
                        <input @keyup="onUpKey" v-model="reconcileForm.cash_at_hand" type="number" class="form-control" rows="1" v-else/>
                    </div>
                    <div class="col d-flex align-items-center justify-content-center">
                        {{item.total | currency('₦')}}
                    </div>
                    <div class="col d-flex align-items-center justify-content-center">
                        <span v-if="item.deposited">{{item.deposited | currency('₦')}}</span>
                        <input @keyup="onUpKey" v-model="reconcileForm.deposited" type="number" class="form-control" rows="1" v-else/>
                        <!-- </input> -->
                    </div>
                    <div class="col d-flex align-items-center justify-content-center" :class="[item.total-item.deposited === 0 ? 'green' : 'red']">
                        {{item.total - item.deposited | currency('₦')}}
                    </div>
                    <div class="col d-flex align-items-center justify-content-center" >
                        <span class="overflow green justify-content-center" v-if="item.deposited"><i class="fas fa-info-circle"></i></span>

                        <textarea v-model="reconcileForm.comment" v-else class="form-control" rows="1">
                        </textarea>
                    </div>
                    <div class="col d-flex align-items-center justify-content-center" @click="updateModal(item)" data-hoverable="true">
                        <p :class="item.deposited? 'green' : 'red'" class="overflow"><i class="fas fa-info-circle"></i></p>
                    </div>
                </div>
            </div>
            <div class="modal fade repayment" id="updatePayment">
                <div class="modal-dialog" role="document">
                    <div class="modal-content" v-if="showModalContent">
                        <div class="modal-header py-2">
                            <h6 class="modal-title py-1">Comment</h6>
                            <a aria-label="Close" class="close py-1" data-dismiss="modal">
                        <span aria-hidden="true" class="modal-close text-danger">
                            <i class="fas fa-times"></i>
                        </span>
                            </a>
                        </div>
                        <div class="modal-body">
                            <div v-if="tab === 'Reconcile'">
                                <div class="table-responsive">
                                    <table class="table table-bordered table-striped">
                                        <tbody>
                                        <tr>
                                            <th>Branch Name</th>
                                            <td>{{ paymentItem.branch || "Not Available" }}</td>
                                        </tr>

                                        <tr>
                                            <th>Comment</th>
                                            <td> {{  !paymentItem.comment
                                                ? "Not Available"
                                                : paymentItem.comment.comment
                                                }}</td>
                                        </tr>
                                        <tr>
                                            <th>Reconciler</th>
                                            <td>{{ !paymentItem.user ? "Not Available" : paymentItem.user  }}</td>
                                        </tr>
                                        <tr>
                                            <th>Date</th>
                                            <td>{{paymentItem.date ? paymentItem.date.split(" ")[0] : "Not Available" }}</td>
                                        </tr>
                                        <tr>
                                            <th>Time</th>
                                            <td>{{paymentItem.date ? paymentItem.date.split(" ")[1] : "Not Available" }}</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>

                            </div>
                            <div v-else>
                                <div class="table-responsive">
                                    <table class="table table-bordered table-striped">
                                        <tbody>
                                        <tr>
                                            <th>Branch Name</th>
                                            <td>{{ paymentItem.branch || "Not Available" }}</td>
                                        </tr>

                                        <tr>
                                            <th>Customer ID</th>
                                            <td>{{ paymentItem.customer.id || "Not Available" }}</td>
                                        </tr>

                                        <tr>
                                            <th>Payment Number</th>
                                            <td>{{ paymentItem.payment_number || "Not Available" }}</td>
                                        </tr>

                                        <tr>
                                            <th>Comment</th>
                                            <td> {{  !paymentItem.comment
                                                ? "Not Available"
                                                : paymentItem.comment.comment
                                                }}</td>
                                        </tr>

                                        <tr>
                                            <th>Date</th>
                                            <td>{{paymentItem.date ? paymentItem.date.split(" ")[0] : "Not Available" }}</td>
                                        </tr>
                                        <tr>
                                            <th>Time</th>
                                            <td>{{paymentItem.date ? paymentItem.date.split(" ")[1] : "Not Available" }}</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>

                            </div>

                        </div>
                        <div class="modal-footer">
                            <a class="text-link mt-3 w-100" data-dismiss="modal" href="javascript:"
                               style="text-align: right">close dialogue</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <nav v-if="tab !== 'Log Payment' && !$_.isEmpty(responseData)" class="col d-flex justify-content-end align-items-center pr-0">

            <div v-if="pageParams">
                <base-pagination

                    :page-param="pageParams"
                    :page="page"
                    @fetchData="fetchData()"
                    @next="next()"
                    @prev="prev()"
                >
                </base-pagination>

            </div>
        </nav>

    </div>
</template>

<script>
    import Vue from 'vue';
    import {mapGetters} from 'vuex';
    import {get, post,put} from "../utilities/api";
    import Lookup from "../views/FSL/lookup/lookup";
    import Flash from "../utilities/flash";
    import Vue2Filters from 'vue2-filters'
    import BasePagination from "../components/Pagination/BasePagination"

    Vue.use(Vue2Filters);

    export default {
        components: {Lookup, BasePagination},
        props: {list: {default: null},tab:{default: null}, filterBy: { default: null }},

        watch: {
            list: function (list) {
                this.fetchList(list);
            },
            filterBy: function(filterBy) {
                this.defaultList =
                    this.tab === "View Payments"
                        ? this.paymentList
                        : this.paymentReconciliationList;
                let newList = [];
                let n = Object.keys(filterBy)[0];
                if (n === "branch") {

                    if (filterBy.branch === "all") {
                        newList = this.defaultList;
                    } else {
                        newList = this.defaultList.filter(function(item) {
                            return item.branch === filterBy.branch;
                        });
                    }
                } else if (n === "type") {

                    if (filterBy.type === "all") {
                        newList = this.defaultList;
                    } else {
                        let cond = this.tab === "View Payments";
                        newList = this.defaultList.filter(function(item) {
                            if(cond){
                                return item.method === filterBy.type;
                            }else {
                                return item.payment_method === filterBy.type;
                            }


                        });
                    }
                } else {

                    newList = this.defaultList.filter(function(item) {
                        return item.date.split(" ")[0] === filterBy.date;
                    });
                }

                Vue.set(this.$data, "renderedList", newList);
            }
        },

        data() {
            return {
                OId:0,
                page: 1,
                responseData:{},
                paymentItem:{},
                showModalContent: false,
                paymentList:[],
                pageParams: null,
                paymentReconciliationList:[],
                totalCashAtHand:0,
                variance:'',
                amountInBank:'',
                branchId:'',
                comment:{
                    comment: ''
                },
                renderedList: [],
                defaultList: [],
                reconcileForm: {}

            }
        },

        computed: {
            ...mapGetters(['auth', 'getAuthUserDetails'])
        },

        methods: {

            onUpKey() {
                this.variance = this.amountInBank - this.totalCashAtHand
                this.amountInBank.length === 0 ?  this.variance=0 : this.variance
            },

            fetchList(list) {
                this.$LIPS(true);
                list === 'View Payments' ? this.getPaymentList() :
                    list === 'Reconcile' ? this.getPaymentReconciliationList() : this.$LIPS(false);
            },

            async getPaymentList(){
                try{
                    this.branchId = localStorage.getItem("branch_id");
                    const fetchPaymentList = await get(`/api/payment?page=${this.page}&branch=${this.branchId}`);
                    this.paymentList = fetchPaymentList.data.data.data;
                    this.responseData = fetchPaymentList.data.data;
                    this.pageParams = this.responseData;
                    this.renderedList = this.paymentList;
                    this.OId = this.responseData.from;
                    this.$LIPS(false);
                }
                catch(err){
                    this.$displayErrorMessage(err);
                }
            },

            async getPaymentReconciliationList(){
                this.branchId = localStorage.getItem('branch_id');
                let yesterday = new Date(Date.now() - 864e5).toISOString();
                let to = yesterday.slice(0, 10);

                try{
                    const fetchPaymentReconciliation = await get(`/api/payment-reconcile?branch=${this.branchId}&to=${to}`);
                    this.paymentReconciliationList = fetchPaymentReconciliation.data.data.data;
                    this.responseData = fetchPaymentReconciliation.data.data;
                    this.renderedList = this.paymentReconciliationList;
                    this.OId =this.responseData.from;

                    this.totalCashAtHand =this.paymentReconciliationList.map(item=>item.total).reduce((a,b)=>a+b);


                    this.$LIPS(false);
                }
                catch(err){
                    this.$displayErrorMessage(err);
                }
            },

            async updateReconciledPayment(item){
               if(!this.reconcileForm.deposited ){
                    return this.errHandler("Please enter all required values.");
                }
                const data ={
                    "cash_at_hand":this.reconcileForm.cash_at_hand,
                    "deposited": this.reconcileForm.deposited,
                    "comment": this.reconcileForm.comment
                };
                this.$LIPS(true);
                try{
                    const reconcilePayment = await put(`/api/payment-reconcile/${item.id}`, data);
                    if (reconcilePayment){
                        // this.getPaymentReconciliationList();
                        this.$swal({
                            icon: 'success',
                            title: 'Reconciliation done successfully'
                        });
                        this.getPaymentReconciliationList();


                    }

                    this.$LIPS(false);
                }
                catch(err){
                    this.$LIPS(false);
                    this.$displayErrorMessage(err);
                }
            },

            errHandler(param){
                return Flash.setError(param);
            },

            updateModal(data){
                this.showModalContent = true;
                this.paymentItem = data;
                return $(`#updatePayment`).modal('toggle');
            },

            next(firstPage = null) {
                if (this.responseData.next_page_url) {
                    this.page = firstPage ? firstPage : parseInt(this.page) + 1;
                    this.fetchList(this.list) ;
                }
            },

            prev(lastPage = null) {
                if (this.responseData.prev_page_url) {
                    this.page = lastPage ? lastPage : parseInt(this.page) - 1;
                    this.fetchList(this.list) ;
                }
            },
        },

        mounted() {
            this.fetchList(this.list)
        },

        created() {
            this.$prepareBanks();
            this.$prepareBranches();
            this.$preparePaymentMethods();
        }
    }
</script>

<style scoped type="scss">
    .table-separator {
        border-top: 2px solid #dee1e4;
    }
    .overflow {
        width: 80px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .green {
        color: #00a368;
    }
    .red {
        color: #E30000;
    }
    .blue {
        background-color: #2975a5;
    }
    .Current{
        background: #EDEEF2;
    }
    .Successful{
        background-color: rgba(0,163,104,.09);
        color: #00a368;
    }
</style>
