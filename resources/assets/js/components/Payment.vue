<template>
    <div>
        <div v-if="tab === 'Log Payment'">
            <Lookup :logger="'hello'"/>
        </div>
        <div class="tab-content mt-1 attendance-body">
            <div v-if="tab === 'View Payments'">
                <div class="mb-3 row attendance-item" :key="index" v-for="(payment,index) in paymentList">
                    <div class="col d-flex align-items-center" style="max-width: 120px">
                    <span class="user mx-auto" :class="tab">{{index+OId}}</span>
                    </div>
                    <div class="col d-flex align-items-center justify-content-center">
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
                        <b class="overflow">{{!payment.comment ? 'Not Available' : payment.comment.comment}}</b>
                    </div>
                </div>
            </div>
            <div v-if="tab === 'Reconcile'">
                <div class="mb-3 row attendance-item">
                    <div class="col d-flex align-items-center" style="max-width: 120px">
                    <span class="user mx-auto blue"  @click="updateReconciledPayment"></span>
                    </div>
                    <div class="col d-flex align-items-center justify-content-center">
                        cash
                    </div>
                    <div class="col d-flex align-items-center justify-content-center">
                        ₦{{totalCashAtHand}}
                    </div>
                    <div class="col d-flex align-items-center justify-content-center">
                        <input v-model="amountInBank" @keyup="onUpKey" type="number" class="form-control" rows="1"/>
                    <!-- </input> -->
                    </div>
                    <div class="col d-flex align-items-center justify-content-center" :class="[variance === 0 ? 'green' : 'red']">
                        ₦{{variance}}
                    </div>
                    <div class="col d-flex align-items-center justify-content-center">
                        <textarea v-model="comment" class="form-control" rows="1">
                        </textarea>
                    </div>
                </div>
            </div>
            <div class="modal fade repayment" id="updatePayment">
                <div class="modal-dialog modal-xl" role="document">
                    <div class="modal-content" v-if="showModalContent">
                        <div class="modal-header py-2">
                            <a aria-label="Close" class="close py-1" data-dismiss="modal">
                        <span aria-hidden="true" class="modal-close text-danger">
                            <i class="fas fa-times"></i>
                        </span>
                            </a>
                        </div>
                        <div class="modal-body">
                            <p>Customer ID: {{paymentItem.customer.id}}</p>
                            <p>Customer Name : {{paymentItem.customer.first_name}} {{paymentItem.customer.last_name}}</p>
                            <h5>{{!paymentItem.comment ? 'Not Available' : paymentItem.comment.comment}}</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <nav v-if="tab !== 'Log Payment' && !$_.isEmpty(responseData)" class="col d-flex justify-content-end align-items-center pr-0">
            <base-pagination
                :next_page_url="!responseData.next_page_url ? '#' : responseData.next_page_url"
                :prev_page_url="!responseData.prev_page_url ? '#': responseData.prev_page_url "
                :first_page_url="responseData.first_page_url"
                :last_page="responseData.last_page"
                :current_page="responseData.current_page"
                @next="next"
                @prev="prev"
            ></base-pagination>
        </nav>

    </div>
</template>

<script>
    import Vue from 'vue';
    import {mapGetters} from 'vuex';
    import {get, post,put} from "../utilities/api";
    import Lookup from "../views/FSL/lookup/lookup";
    import Flash from "../utilities/flash";
    import BasePagination from "../components/Pagination/BasePagination"

    export default {
        components: {Lookup, BasePagination},
        props: {list: {default: null},tab:{default: null}},

        watch: {
            list: function (list) {
                this.fetchList(list);
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
                paymentReconciliationList:[],
                totalCashAtHand:0,
                variance:'',
                amountInBank:'',
                branchId:'',
                comment:''
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
                    const fetchPaymentList = await get(`/api/payment?page=${this.page}`);
                    this.paymentList = fetchPaymentList.data.data.data;
                    this.responseData = fetchPaymentList.data.data
                    this.OId = this.responseData.from;
                    this.$LIPS(false);
                }
                catch(err){
                    this.$displayErrorMessage(err);
                }
            },

            async getPaymentReconciliationList(){
                this.branchId = localStorage.getItem('branch_id');
                try{
                    const fetchPaymentReconciliation = await get(`/api/payment-reconcile?branch=${this.branchId}`);
                    this.paymentReconciliationList = fetchPaymentReconciliation.data.data.data;
                    this.responseData = fetchPaymentReconciliation.data.data;
                    this.OId =this.responseData.from;
                    console.log(this.paymentReconciliationList);
                    console.log(this.totalCashAtHand);
                    this.totalCashAtHand =this.paymentReconciliationList.map(item=>item.total).reduce((a,b)=>a+b);
                    console.log(this.totalCashAtHand);

                    this.$LIPS(false);
                }
                catch(err){
                    this.$displayErrorMessage(err);
                }
            },

            async updateReconciledPayment(){
                 if(!this.amountInBank || this.variance !=0 && !this.comment  ){
                    return this.errHandler("Please enter all required values.");
                }
                const data ={
                    "cash_at_hand":this.totalCashAtHand,
                    "deposited": this.amountInBank,
                    "comment": this.comment
                }
                this.$LIPS(true);
                try{
                    const reconcilePayment = await put(`/api/payment-reconcile/${this.branchId}`, data);
                    if (reconcilePayment){
                        this.amountInBank='';
                        this.comment='';
                        this.variance='';
                    }
                     Flash.setSuccess(reconcilePayment.data.status);
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
    .overflow{
        width: 80px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .green{
        color: green;
    }
    .red{
        color: red;
    }
    .blue{
        background-color: #2975a5;
    }
</style>
