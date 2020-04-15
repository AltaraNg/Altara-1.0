<template>
    <div>

        <div class="tab-content mt-1 attendance-body" v-if="show">
            <div class="tab-pane active text-center" id="reminder-panel" role="tabpanel">
                <order-item
                    v-for="(order,index) in orders"
                    :key="order.order.id"
                    :index="index"
                    :start-index="startIndex"
                    :order="order"
                    :mode="mode"
                    :tab="list"
                    :options="status"
                    :OId="OId"
                    v-on:popIt="popIt"
                    @done=" mode === 'renewal' ? fetchRenewalList(list) : fetchList(list)"
                    @display="displayDetails"/>
            </div>
            <div class="w-100 my-5 mx-0 hr" v-if="mode != 'normal-list'"></div>
        </div>

        <div class="tab-content mt-1 attendance-body" v-else>
            <div class="tab-pane active text-center">
                <div class="mb-3 row attendance-item">
                    <div class="col d-flex light-heading align-items-center justify-content-center">
                        No records found!
                    </div>
                </div>
            </div>
        </div>

        <div class="mt-1 attendance-body" v-if="show && mode === 'sms'">
            <div class="mb-5 px-0 row align-items-center">
                <div class="clearfix d-flex justify-content-end w-100">
                    <button :disabled="$isProcessing" class="btn bg-default" @click="processSelected">
                        Send Reminder(s) <i class="far fa-paper-plane ml-1"></i>
                    </button>
                </div>
            </div>
        </div>

        <div class="modal fade" id="purchase_order">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header py-2">
                        <h6 class="modal-title py-1">Purchase Order Summary</h6>
                        <a aria-label="Close" class="close py-1" data-dismiss="modal">
                            <span aria-hidden="true" class="modal-close text-danger"><i class="fas fa-times"></i></span>
                        </a>
                    </div>
                    <div class="modal-body" v-if="showModalContent">
                        <div class="table-responsive">
                            <table class="table table-bordered table-striped">
                                <tbody>
                                <tr>
                                    <th>Order ID</th>
                                    <td>{{activeOrder.order.id}}</td>
                                </tr>
                                <tr>
                                    <th>Order date</th>
                                    <td>{{activeOrder.order.order_date}}</td>
                                </tr>
                                <tr>
                                    <th>Product</th>
                                    <td>{{activeOrder.order.store_product.product_name}}</td>
                                </tr>
                                <tr>
                                    <th>Repayment</th>
                                    <td>{{$formatCurrency(activeOrder.amountsToBePaid[0])}}</td>
                                </tr>
                                <tr>
                                    <th>Down Payment</th>
                                    <td>{{$formatCurrency(activeOrder.order.down_payment)}}</td>
                                </tr>
                                <tr>
                                    <th>Discount (%)</th>
                                    <td>{{activeOrder.discount | capitalize}}</td>
                                </tr>
                                <tr>
                                    <th>Sale Type</th>
                                    <td>{{activeOrder.order.sales_type.name | capitalize}}</td>
                                </tr>
                                <tr>
                                    <th>Total amount to Pay</th>
                                    <td>{{$formatCurrency(activeOrder.order.product_price)}}</td>
                                </tr>
                                <tr>
                                    <th>Processed by</th>
                                    <td>{{activeOrder.order['floor_agent'] ? activeOrder.order.floor_agent.full_name :
                                        null}}
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <a class="text-link mt-3 w-100" data-dismiss="modal" href="javascript:"
                           style="text-align: right">close dialogue</a>
                    </div>
                </div>
            </div>
        </div>

        <div class="modal fade" id="customer_info">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header py-2">
                        <h6 class="modal-title py-1">Customer Info. Summary</h6>
                        <a aria-label="Close" class="close py-1" data-dismiss="modal">
                            <span aria-hidden="true" class="modal-close text-danger"><i class="fas fa-times"></i></span>
                        </a>
                    </div>
                    <div class="modal-body" v-if="showModalContent">
                        <div class="table-responsive">
                            <table class="table table-bordered table-striped">
                                <tbody>
                                <tr>
                                    <th>Customer ID</th>
                                    <td>{{activeOrder.customer.id}}</td>
                                </tr>
                                <tr>
                                    <th>Full Name</th>
                                    <td>{{$getCustomerFullName(activeOrder.customer)}}</td>
                                </tr>
                                <tr>
                                    <th>Address</th>
                                    <td>{{$getCustomerAddress(activeOrder.customer)}}</td>
                                </tr>
                                <tr>
                                    <th>Phone</th>
                                    <td>{{activeOrder.customer.telephone}}</td>
                                </tr>
                                <tr>
                                    <th>Branch</th>
                                    <td>{{activeOrder.customer.branch.name}}</td>
                                </tr>
                                <tr>
                                    <th>Category</th>
                                    <td>{{activeOrder.customer.employment_status}}</td>
                                </tr>
                                <tr>
                                    <th>Work guarantor name</th>
                                    <td>{{activeOrder.customerWGName}}
                                    </td>
                                </tr>
                                <tr>
                                    <th>Work guarantor phone</th>
                                    <td>{{activeOrder.customer.work_guarantor_telno}}</td>
                                </tr>
                                <tr>
                                    <th>Personal guarantor name</th>
                                    <td>{{activeOrder.customerPGName}}
                                    </td>
                                </tr>
                                <tr>
                                    <th>Personal guarantor phone</th>
                                    <td>{{activeOrder.customer.personal_guarantor_telno}}</td>
                                </tr>
                                <tr>
                                    <th>Verified by</th>
                                    <td>
                                        <router-link class="text-link" target="_blank"
                                                     :to="`/dva/verification?id=${activeOrder.customer.id}`">
                                            click here to see verifications status
                                        </router-link>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <a class="text-link mt-3 w-100 text-right" data-dismiss="modal" href="#">
                            close dialogue
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <div class="modal fade repayment" id="repayment">
            <div class="modal-dialog modal-xl" role="document">
                <div class="modal-content" v-if="showModalContent">
                    <div class="modal-header py-2">
                        <h6 class="modal-title py-1">
                            Repayment Plan/Summary - {{activeOrder.customer.employment_status | capitalize}}
                        </h6>
                        <a aria-label="Close" class="close py-1" data-dismiss="modal">
                <span aria-hidden="true" class="modal-close text-danger">
                    <i class="fas fa-times"></i>
                </span>
                        </a>
                    </div>
                    <div class="modal-body">
                        <div class="table-responsive">

                            <h5 class="mt-3 mb-0">Order Information</h5>
                            <table class="table table-bordered">
                                <tbody>
                                <tr class="table-separator">
                                    <td>Name</td>
                                    <td>Order Id</td>
                                    <td>Product</td>
                                    <th>Branch</th>
                                    <th>Status</th>
                                </tr>
                                <tr>
                                    <td class="font-weight-bold">{{activeOrder.customerName}}
                                    </td>
                                    <th>{{activeOrder.order.id}}</th>
                                    <th>{{activeOrder.order.store_product.product_name}}</th>
                                    <td>{{activeOrder.branch.name}}</td>
                                    <td class="font-weight-bold"
                                        :class="getOrderStatusClass(getOrderStatus(activeOrder))">
                                        {{getOrderStatus(activeOrder)}}
                                    </td>
                                </tr>
                                </tbody>
                            </table>

                            <h5 class="mt-5 mb-0">Amortization Schedule</h5>
                            <table class="table table-bordered">
                                <tbody class="text-center">
                                <tr>
                                    <th>Repayment</th>
                                    <td v-for="caption in activeOrder.repaymentCaptions" v-html="caption"></td>
                                </tr>
                                <tr class="table-separator">
                                    <th>Due Date</th>
                                    <td v-for="date in activeOrder.dueDates">{{date}}</td>
                                </tr>
                                <tr>
                                    <th>Actual Pay Day</th>
                                    <td v-for="date in activeOrder.actualPayDates">{{date}}</td>
                                </tr>
                                <tr class="table-separator">
                                    <th>Status</th>
                                    <td :class="status.class" v-for="status in activeOrder.paymentStatusClasses">
                                        <i class="fas" :class="status.icon"></i>
                                    </td>
                                </tr>
                                <tr class="table-separator">
                                    <th>Repayment Amount</th>
                                    <td v-for="payment in activeOrder.amountsToBePaid">{{$formatCurrency(payment)}}</td>
                                </tr>
                                <tr>
                                    <th>Actual Amount Paid</th>
                                    <td v-for="payment in activeOrder.actualAmountsPaid">{{$formatCurrency(payment)}}
                                    </td>
                                </tr>
                                <tr class="table-separator">
                                    <th>Payment Method</th>
                                    <td class="text-capitalize" v-for="repaymentMethod in activeOrder.paymentMethods">
                                        {{Order.convertToName(repaymentMethod, 'paymentMethods')}}
                                    </td>
                                </tr>
                                <tr>
                                    <th>Bank</th>
                                    <td class="text-capitalize" v-for="repaymentBank in activeOrder.paymentBanks">
                                        {{Order.convertToName(repaymentBank, 'banks')}}
                                    </td>
                                </tr>
                                </tbody>
                            </table>

                            <h5 class="mt-5 mb-0">Payment Summary</h5>
                            <table class="table table-bordered">
                                <tbody class="text-center">
                                <tr class="table-separator">
                                    <td class="text-left">Discount Detail (%)</td>
                                    <th>{{activeOrder.discount | capitalize}}</th>
                                    <td>Total Before Discount</td>
                                    <th>{{$formatCurrency($roundDownAmt(activeOrder.order["product_price"]))}}</th>
                                    <td>Total Paid</td>
                                    <th>{{activeOrder.amountPaid}}</th>
                                </tr>
                                <tr>
                                    <td class="text-left">Discount Amount</td>
                                    <th>{{activeOrder.discountAmount}}</th>
                                    <td>Total After Discount</td>
                                    <th>{{activeOrder.discountedTotal}}</th>
                                    <td>Total Debt</td>
                                    <th>{{activeOrder.outstandingDebt}}</th>
                                </tr>
                                <tr>
                                    <td class="text-left">Down Payment</td>
                                    <th>{{$formatCurrency($roundDownAmt(activeOrder.order['down_payment']))}}</th>
                                    <td>Total Plus Default Fee</td>
                                    <th>{{activeOrder.totalPlusDefault}}</th>
                                    <td>Default Fee</td>
                                    <th>{{activeOrder.defaultFee}}</th>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="modal-footer d-flex justify-content-end">
                        <a class="text-link mt-3" data-dismiss="modal" href="javascript:">close dialogue</a>
                    </div>
                </div>
            </div>
        </div>

        <div class="modal fade repayment" id="reminder_history">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-header py-2">
                        <h6 class="modal-title py-1">History</h6>
                        <a aria-label="Close" class="close py-1" data-dismiss="modal">
                            <span aria-hidden="true" class="modal-close text-danger"><i class="fas fa-times"></i></span>
                        </a>
                    </div>
                    <div class="modal-body" v-if="showModalContent">
                        <div class="table-responsive">
                            <table class="table table-bordered table-striped" v-if="activeOrder.order.reminders.length">
                                <thead>
                                <tr>
                                    <th>S/N</th>
                                    <th>Date</th>
                                    <th>Type</th>
                                    <th>SMS/Feedback</th>
                                    <th>sender</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr v-for="(reminder, index) in activeOrder.order.reminders">
                                    <th>{{index+1}}</th>
                                    <td>{{$dateTimeConvert(reminder.date)}}</td>
                                    <td>{{reminder.type}}</td>
                                    <td v-html="Order.renderMessage(reminder)"></td>
                                    <td>{{reminder.user.full_name}}</td>
                                </tr>
                                </tbody>
                            </table>
                            <div v-else class="my-4 text-center">
                                no reminders have been sent yet!
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

        <nav v-if="mode === 'renewal' && responseData.next_page_url" class="col d-flex justify-content-end align-items-center pr-0">
            <ul class="pagination pagination-lg mb-0">
                <!---->
                <li :class="{'disabled':!responseData.first_page_url}" class="page-item">
                    <a href="javascript:" @click="prev(1)" class="page-link">First</a>
                </li>
                <li :class="{'disabled':!responseData.prev_page_url }" class="page-item">
                    <a href="javascript:" @click="prev()" class="page-link">prev</a>
                </li>
                <!---->
                <li class="page-item">
                    <span class="page-link">Current Page: {{responseData.current_page}}</span>
                </li>
                <!---->
                <li :class="{'disabled':!responseData.next_page_url}" class="page-item">
                    <a href="javascript:" @click="next()" class="page-link">Next</a>
                </li>
                <li :class="{'disabled':!responseData.last_page_url}" class="page-item">
                    <a href="javascript:" @click="next(responseData.last_page)" class="page-link">Last</a>
                </li>
                <!---->
            </ul>
        </nav>
    </div>
</template>

<script>
    import Vue from 'vue';
    import {mapGetters} from 'vuex';
    import queryParam from "../utilities/queryParam";
    import Flash from "../utilities/flash";
    import {Message} from "../utilities/sms";
    import {get, post,put} from "../utilities/api";
    import OrderItem from '../components/OrderItem';
    import {Order, OrderWithPromiseCall} from "../utilities/Amortization";
    import {getOrderStatus, getOrderStatusClass} from '../components/order/orderStatusCssClass';

    let url = to => `/api/reminder/create?list=${to.query.list + (to.query.filterWithBranch ? `&filterWithBranch=` + to.query.filterWithBranch : '')}`;

    export default {
        components: {OrderItem},

        props: {list: {default: null}, mode: null, preLoadedOrder: null, startIndex: null,tab:{default: null}},

        watch: {
            list: function (list) {
               this.mode === 'renewal' ? this.fetchRenewalList(list) : this.fetchList(list);
            },
            preLoadedOrder: function (data) {
                this.prepareForm(data);
            }
        },

        data() {
            return {
                orders: [],
                show: false,
                Order: Order,
                activeOrder: null,
                showModalContent: false,
                status:[],
                responseData:{},
                page: 1,
                OId:0,
            }
        },

        computed: {
            ...mapGetters(['auth', 'getAuthUserDetails'])
        },

        methods: {
            getOrderStatus: activeOrder => getOrderStatus(activeOrder),

            getOrderStatusClass: orderStatus => getOrderStatusClass(orderStatus),

            async prepareForm({orders}) {
                this.show = false;
                this.showModalContent = false;
                this.orders = await this.convertRequestOrdersToOrderClassInstance(orders);
                this.orders.length && (this.show = true);
                this.$LIPS(false);
            },

            convertRequestOrdersToOrderClassInstance(orders) {
                let orderInstancesArr = [];
                for (let key in orders) {
                    let newOrder =
                        orders[key] instanceof Order ?
                            orders[key]
                            :
                            new OrderWithPromiseCall(orders[key], this.getAuthUserDetails.userId);
                    orderInstancesArr.push(newOrder)
                }
                return orderInstancesArr;
            },
             fetchList(list) {
                this.$LIPS(true);
                let filterWithBranch = !(this.auth('DVALead') || this.auth('FSLLead') || this.auth('CAGAccess'));
                get(url({query: {list, filterWithBranch}})).then(({data}) => {
                    if (list === 8) data.orders = data.orders.map(promiseCall => promiseCall.order);
                 this.prepareForm(data);
                });
            },

            async displayDetails(order, modal) {
                await Vue.set(this.$data, 'activeOrder', order);
                this.showModalContent = true;
                return $(`#${modal}`).modal('toggle');
            },

            processSelected() {
                this.$LIPS(true);
                let selectedOrders = this.orders.filter(order => order.isSelected);
                if (!selectedOrders.length) {
                    this.$displayErrorMessage('please select at least one!');
                    return this.$LIPS(false);
                }
                this.sendSMSReminders(selectedOrders);
            },

            sendSMSReminders(selectedOrders) {
                let messages = [];
                selectedOrders.forEach((order, index) => {
                    let sms = new Message(order.nextSMSReminder, order.reminder.contacts, false, order.dvaId);
                    sms.send(r => {
                        if (r.status === 200) {
                            delete sms.logToDB;
                            messages.push(sms);
                        }
                        if ((index + 1) === selectedOrders.length) this.logSentMessages(selectedOrders, messages);
                    });
                });
            },

            logSentMessages(selectedOrders, messages) {
                if (messages.length > 0) {
                    post('/api/message', {messages, bulk: true}).then(({data}) => {
                        let {sentAndLogged, ids} = data;
                        if (sentAndLogged) this.logSentReminders(selectedOrders, ids);
                        else this.$displayErrorMessage('Error Logging sent sms details!');
                    });
                } else this.$displayErrorMessage('Error sending messages!');
            },

            logSentReminders(selectedOrders, ids) {
                ids.reverse();
                if (ids.length > 0) {
                    let newList = selectedOrders.map((order, index) => {
                        order.reminder.sms_id = ids[index];
                        delete order.reminder.contacts;
                        delete order.reminder.canBeSelected;
                        return order.reminder;
                    });
                    post('/api/reminder', {reminders: newList}).then(({data}) => {
                        if (data.saved) {
                            Flash.setSuccess('Reminders have been sent successfully!', 50000);
                            this.fetchList(this.list);
                        } else this.$displayErrorMessage('Error sending reminders!');
                        this.$scrollToTop();
                    });
                } else this.$displayErrorMessage('Error logging sent messages!');
            },

            async fetchRenewalList(list) {
                this.$LIPS(true);
                await this.fetchStatus();
            },

            async fetchStatus(){
                this.show = false;
               try{
                    const fetchAllStatus = await get(`/api/renewal-list-status`);
                    this.status = fetchAllStatus.data.data;
                    this.$LIPS(false);
                    await this.fetchRenewal();  
               }
               catch(err){
                    this.$displayErrorMessage(err);
                    this.$LIPS(false)
               }
            },

            async fetchRenewal(){
                this.$LIPS(true);
                try{
                    const status = this.list === "Current" ? '': this.list ? this.status.find(option => option.status === this.list.toLowerCase()).id : '';
                        
                    const adminAccess = this.auth('FSLLead');
                    const branch_id = parseInt(localStorage.getItem('branch_id'));
                    const nonAdmin ={
                        page: this.page,
                        branch_id: branch_id
                    }
                    
                    const admin = {
                        page: this.page
                    }

                    const base = `/api/renewal-list`;
                    const url1  = `${base}${adminAccess ? queryParam(admin) : queryParam(nonAdmin)}`;
                    const url0 = `${base}/status/${status}${adminAccess ? queryParam(admin) : queryParam(nonAdmin)}`;
                    const data = await get( status ? url0 : url1);
                    this.responseData = data.data.data;
                    this.OId =this.responseData.from;
                    await this.prepareForm({orders:data.data.data.data});
                }
                catch(err) {
                    this.$displayErrorMessage(err);
                    this.$LIPS(false)    
                }
            },
             popIt(param){
             this.list === "Current" ?  this.postRenewal(param) : this.updateRenewal(param);
            },

            async updateRenewal(param){
                this.$LIPS(true);
                try{
                    await put(`/api/renewal-list/${param.data.renewalId}`,param.data)
                    .then(()=> this.postFeedback(param.feedback));
                    this.orders = this.orders.filter(p => p.order.id != param.data.order_id);
                }
                catch(err){
                    this.$displayErrorMessage(err);
                    this.$LIPS(false)
                }
            },

            async postRenewal(param){
                this.$LIPS(true);
                try{
                    await post(`/api/renewal-list`,param.data)
                    .then(()=> this.postFeedback(param.feedback));
                    this.orders = this.orders.filter(p => p.order.id != param.data.order_id);
                }
                catch(err){
                    this.$displayErrorMessage(err);
                    this.$LIPS(false)
                }
            },

            async postFeedback(param){
                try{
                    await post('/api/reminder', {reminders: param});
                    this.$LIPS(false);
                }
                catch(err){
                    this.$displayErrorMessage(err);
                    this.$LIPS(false);
                }
            },

            next(firstPage = null) {
                if (this.responseData.next_page_url) {
                    this.page = firstPage ? firstPage : parseInt(this.page) + 1;
                    this.fetchRenewal();
                }
            },

            prev(lastPage = null) {
                if (this.responseData.prev_page_url) {
                    this.page = lastPage ? lastPage : parseInt(this.page) - 1;
                    this.fetchRenewal();
                }
            },
        },

        mounted() {
            this.mode === 'renewal' ? this.fetchRenewalList(this.list) : 
            this.mode != 'normal-list' ? this.fetchList(this.list) : 
            this.prepareForm(this.preLoadedOrder);

            $(document).on("hidden.bs.modal", '.modal', () => {
                this.activeOrder = null;
                this.showModalContent = false;
            });
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
</style>
