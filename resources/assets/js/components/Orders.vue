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
                        @done="fetchList(list)"
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
                                </tr>
                                <tr>
                                    <td class="font-weight-bold">{{activeOrder.customerName}}
                                    </td>
                                    <th>{{activeOrder.order.id}}</th>
                                    <th>{{activeOrder.order.store_product.product_name}}</th>
                                    <td class="font-weight-bold">{{activeOrder.branch.name}}</td>
                                </tr>
                                </tbody>
                            </table>

                            <h5 class="mt-3 mb-0">Amortization Schedule</h5>
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
                    <div class="modal-footer">
                        <a class="text-link mt-3" data-dismiss="modal" href="javascript:"
                           style="text-align: right">close dialogue</a>
                    </div>
                </div>
            </div>
        </div>

        <div class="modal fade repayment" id="reminder_history">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-header py-2">
                        <h6 class="modal-title py-1">Reminder History</h6>
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

    </div>
</template>

<script>
    import Vue from 'vue';
    import {mapGetters} from 'vuex';
    import Flash from "../utilities/flash";
    import {Message} from "../utilities/sms";
    import {get, post} from "../utilities/api";
    import OrderItem from '../components/OrderItem';
    import {Order, OrderWithPromiseCall} from "../utilities/Amortization";

    let url = to => `/api/reminder/create?list=${to.query.list}`;

    export default {
        components: {OrderItem},

        props: {list: {default: null}, mode: null, preLoadedOrder: null, startIndex: null},

        watch: {
            list: function (list) {
                this.fetchList(list);
            },
            preLoadedOrder: function (data) {
                this.prepareForm(data);
            }
        },

        data() {
            return {
                orders: [],
                show: false,
                showModalContent: false,
                Order: Order,
                activeOrder: null,
            }
        },

        computed: {
            ...mapGetters(['auth'])
        },

        methods: {

            async prepareForm(res) {
                this.show = false;
                this.showModalContent = false;
                this.orders = [];
                await res.orders.forEach(order => {

                    let newOrder = new OrderWithPromiseCall(order, res.dva_id);

                    let hasMissedPayment = () => {
                        /*for the list 1 and 8 return true i.e no need for has
                        missed payment since it's obvious we are dealing with just one date
                        * 1st list is for all the customers that picked today
                        * 8th list is for all the promise calls all the promise call must be shown to */
                        if ([8, 1].includes(this.list) || this.mode === "normal-list") return true;

                        let payDay,
                            /*payDay holds the date
                            of the first vacant repayment*/

                            dayInterval,
                            /*dayInterval the number of days before or after a certain
                            repayment date. this varies according to collections app brief*/

                            datePool = [],
                            /*datePool hold an array of dates of length ranging from 1 to 3 in length
                            * is the current date is monday the date-pool will include dates for
                            * monday, sunday and saturday else it just hold the current date*/

                            today = new Date(),

                            isMonday = today.getDay() === 1,
                            /*isMonday how a boolean value of whether
                            the current date is monday or not*/

                            collectionsList = [9, 10, 11, 12, 13, 14],

                            accumulatedDays = (isMonday || collectionsList.includes(this.list)) ? 3 : 1;
                        /*accumulatedDays hold 1 or 3,
                        1 if the current date is not on a monday and
                        3 if the current date is on a monday*/

                        if (!(!!newOrder.repaymentData)) return false;

                        /*step 1::
                        * the count is either 7 or 13,
                        * the loop runs for 6 or 12 times*/
                        for (let i = 1; i < newOrder.count + 1; i++) {

                            /*get the resultant column 1st, 2nd, 3rd etc*/
                            let column = this.$getColumn(i);

                            /*step 2. get the first occurrence of a vacant pay eg. 5th_pay*/
                            if (!newOrder.repaymentData[column + "_pay"]) {

                                /*step 3. find the corresponding due date for the vacant pay
                                * The generateDates returns an array of the due
                                dates for the order under consideration*/
                                payDay = (OrderWithPromiseCall
                                    .generateDueDates(newOrder.order.order_date, newOrder.interval, newOrder.count))
                                    [i - 1];


                                /*[i - 1] explained.
                                * eg if the i = 5,
                                * column = 5th_pay,
                                * then the 4th ( [5-1] - this is the 5th element or 4th index, array is 0 indexed)
                                * index of the resultant array is the pay day we are interested in*/
                                break;
                            }
                        }

                        /*step 4. assign the appropriate intervals
                        * NB:: This intervals where generated from the days
                        * stipulated on the collections app brief note that the case
                        * corresponds to the steps also indicated in the collections app brief*/
                        switch (this.list) {
                            case 2:
                                dayInterval = 7;
                                break;
                            case 3:
                                dayInterval = 3;
                                break;
                            case 4:
                                dayInterval = 0;
                                break;
                            case 5:
                                dayInterval = 1;
                                break;
                            case 6:
                                dayInterval = 5;
                                break;
                            case 7:
                                dayInterval = 31;
                                break;

                            case 9://collections visit: 1
                                dayInterval = 38;
                                break;
                            case 10://collections visit: 2
                                dayInterval = 45;
                                break;

                            case 11://recovery visit: 1
                                dayInterval = 61;
                                break;
                            case 12://recovery visit: 2
                                dayInterval = 75;
                                break;
                            case 13://recovery visit: 2
                                dayInterval = 90;
                                break;

                            case 14://external recovery - lawyer visit: 2
                                dayInterval = 121;
                                break;
                        }

                        if (["collection", "recovery", "call", "external-recovery"].includes(this.mode)) {
                            for (let p = 0; p < accumulatedDays; p++)
                                datePool.push(this.$getDate(today.addDays(-(p + dayInterval))));
                        }

                        if (this.mode === 'sms') {
                            for (let p = 0; p < accumulatedDays; p++)
                                datePool.push(this.$getDate(today.addDays(p + dayInterval)));
                        }

                        return datePool.includes(payDay);
                    };

                    let isMyBranch = () => {
                        if (this.auth('DVALead') || this.auth('FSLLead') || this.auth('CAGAccess')) return true;
                        //the branch to be used for this filter should be the branch of the
                        // product being bought not the branch of the customer
                        return parseInt(newOrder.order.store_product.store_name) === res.branch;
                    };

                    if (isMyBranch() && hasMissedPayment()) this.orders.push(newOrder)
                });

                !!this.orders.length && (this.show = true);
                this.$LIPS(false);
            },

            fetchList(list) {
                this.$LIPS(true);
                get(url({query: {list}})).then(({data}) => {
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
            }
        },

        mounted() {
            this.mode != 'normal-list' ? this.fetchList(this.list) : this.prepareForm(this.preLoadedOrder);
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