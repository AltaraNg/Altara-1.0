<template>
    <transition name="fade">

        <div id="reminder">

            <div class="mt-5 attendance-head">
                <div class="card">
                    <ul class="nav nav-tabs bg-default justify-content-center">
                        <h6>Customer Lookup</h6>
                    </ul>
                    <div class="card-body p-4">
                        <form @submit.prevent="processForm">
                            <div class="m-0 p-0 col-12 form-group clearfix">
                                <label class="w-100">Customer ID</label>
                                <input @onkeyUp="check"
                                       class="form-control col-lg-9 col-md-8 col-sm-8 col-12 float-left mt-1"
                                       data-vv-as="customer id"
                                       name="customer_id"
                                       v-model="customer_id"
                                       v-validate="'required|numeric'">
                                <div class="col-lg-3 col-md-4 col-sm-4 col-12 float-right px-md-3 mt-md-0 px-sm-3 mt-sm-0 mt-2 px-0">
                                    <button :disabled="check" class="btn btn-block bg-default my-1" type="submit">
                                        Fetch customer details <i class="far fa-paper-plane ml-1"></i>
                                    </button>
                                </div>
                                <small class="form-text text-muted w-100" v-if="errors.has('customer_id')">
                                    {{errors.first('customer_id')}}
                                </small>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <transition name="fade">
                <div v-if="customer && show">

                    <div class="attendance-head">
                        <customer-profile :view-customer="customer"/>
                    </div>

                    <custom-header :title="'All order(s)'"/>

                    <div class="mt-5 mb-3 attendance-head">
                        <div class="row px-4 pt-3 pb-4 text-center">
                            <div class="col light-heading" style="max-width: 100px">S/No.</div>
                            <div class="col light-heading" v-for="header in headers">{{header}}</div>
                        </div>
                    </div>

                    <div class="tab-content mt-1 attendance-body">
                        <div class="tab-pane active text-center" v-if="show && customer.orders.length > 0">
                            <div class="mb-3 row attendance-item" v-for="(order, index) in customer.orders">

                                <div class="col-12 col-xs-2 col-md col-lg d-flex align-items-center"
                                     style="max-width: 100px">
                                    <span class="user mx-auto">{{index+1}}</span>
                                </div>

                                <div class="col-12 col-xs-2 col-md col-lg d-flex align-items-center justify-content-center">
                                    {{order.order.order_date}}
                                </div>

                                <div class="col-12 col-xs-2 col-md col-lg d-flex user-name align-items-center justify-content-center">
                                    {{order.order.id}}
                                </div>

                                <div class="col-12 col-xs-3 col-md col-lg d-flex align-items-center justify-content-center">
                                    {{order.order.store_product.product_name}}
                                </div>

                                <div class="col-12 col-xs-2 col-md col-lg d-flex align-items-center justify-content-center">
                                    {{$formatCurrency(order.order.product_price)}}
                                </div>

                                <div class="col-12 col-xs-2 col-md col-lg d-flex align-items-center justify-content-center">
                                    {{order.order.sales_category.name}}
                                </div>

                                <div class="col-12 col-xs-2 col-md col-lg d-flex align-items-center justify-content-center">
                                    {{$formatCurrency(order.order.down_payment)}}
                                </div>
                                <div class="col-12 col-xs-2 col-md col-lg d-flex align-items-center justify-content-center">
                                    <button @click="displayAmortization(index)" class="btn status my-sm-2"
                                            :class="order.count === order.repaymentLevel ? 'approved' : 'pending'">
                                        View Plan
                                        <i class="fas ml-3" style="font-size: 1.4rem"
                                           :class="order.count === order.repaymentLevel ? 'fa-check-circle' : 'fa-hourglass-half'"></i>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div class="tab-pane active text-center" v-else>
                            <div class="mb-3 row attendance-item">
                                <div class="col d-flex light-heading align-items-center justify-content-center">
                                    No records found!
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="mt-5 mb-3 attendance-head">
                        <div class="w-100 my-5 mx-0 hr"></div>
                    </div>

                </div>
            </transition>


            <div class="modal fade repayment" id="amortization">
                <div class="modal-dialog modal-xl" role="document">
                    <div class="modal-content" v-if="showModalContent">
                        <div class="modal-header py-2">
                            <h6 class="modal-title py-1">
                                Repayment Plan/Summary - {{customer.employment_status | capitalize}}
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
                                        <td v-for="payment in activeOrder.amountsToBePaid">
                                            {{$formatCurrency(payment)}}
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>Actual Amount Paid</th>
                                        <td v-for="payment in activeOrder.actualAmountsPaid">
                                            {{$formatCurrency(payment)}}
                                        </td>
                                    </tr>
                                    <tr class="table-separator">
                                        <th>Payment Method</th>
                                        <td class="text-capitalize"
                                            v-for="repaymentMethod in activeOrder.paymentMethods">
                                            {{Order.convertToName(repaymentMethod, 'paymentMethods')}}
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>Bank</th>
                                        <td class="text-capitalize"
                                            v-for="repaymentBank in activeOrder.paymentBanks">
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
                                        <td>Total Paid (+discount)</td>
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

                                <h5 class="mt-5 mb-0" v-if="canAddPayment">Add a new payment</h5>
                                <table class="table table-bordered" v-if="canAddPayment">
                                    <tbody class="text-center">

                                    <tr class="table-separator">
                                        <td class="text-left">S/No.</td>
                                        <th>Repayment</th>
                                        <th>Amount</th>
                                        <th>Payment Method</th>
                                        <th>Bank</th>
                                        <th>Date</th>
                                        <th>Collected By</th>
                                        <th>Action</th>
                                    </tr>
                                    <tr v-for="(payment,index) in paymentForm.payments">
                                        <th>{{index+1}}</th>

                                        <th>
                                            <div class="form-group mb-0">
                                                <input class="form-control" name="date" type="text"
                                                       v-model="paymentForm.payments[index].column" disabled>
                                            </div>
                                        </th>

                                        <th>
                                            <div class="form-group mb-0">
                                                <input class="form-control" name="date" type="text"
                                                       v-model="paymentForm.payments[index]._pay">
                                            </div>
                                        </th>

                                        <th>
                                            <select class="custom-select w-100"
                                                    v-model="paymentForm.payments[index]._payment_method">
                                                <option :value="id" v-for="{name, id} in getPaymentMethods">
                                                    {{name | capitalize}}
                                                </option>
                                            </select>
                                        </th>

                                        <th>
                                            <select class="custom-select w-100"
                                                    v-model="paymentForm.payments[index]._payment_bank">
                                                <option :value="id" v-for="{name, id} in getBanks">{{name}}</option>
                                            </select>
                                        </th>

                                        <th>
                                            <div class="form-group mb-0">
                                                <input class="form-control" name="date" type="date"
                                                       v-model="paymentForm.payments[index]._date">
                                            </div>
                                        </th>

                                        <th>
                                            <div class="form-group mb-0">
                                                <input class="form-control" data-vv-as="date" name="date" type="text"
                                                       :value="user.name" disabled>
                                            </div>
                                        </th>

                                        <th>
                                            <button @click="deletePayment(index)"
                                                    class="ml-2 btn status status-sm my-sm-2 not-approved">
                                                <i class="fas fa-times"></i>
                                            </button>
                                        </th>

                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div class="modal-footer" :class="{'d-flex justify-content-end' : !canAddPayment}">

                            <button @click="addPaymentForm()"
                                    v-if="canAddPayment"
                                    class="btn status my-sm-2">
                                Add Payment
                            </button>

                            <button @click="preparePayments()"
                                    v-if="canAddPayment"
                                    class="btn status my-sm-2 approved ml-4">
                                Click here to Submit Payment(s)!
                            </button>

                            <a class="text-link mt-3" data-dismiss="modal" href="javascript:"
                               style="text-align: right">close dialogue</a>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    </transition>
</template>
<script>
    import Vue from 'vue';
    import {mapGetters} from 'vuex';
    import {log} from '../../../utilities/log';
    import Auth from '../../../utilities/auth';
    import Flash from '../../../utilities/flash';
    import {Message} from '../../../utilities/sms';
    import {get, post} from '../../../utilities/api';
    import {Order} from '../../../utilities/Amortization';
    import CustomHeader from '../../../components/customHeader';
    import CustomerProfile from '../../../components/CustomerProfile';

    export default {

        components: {CustomHeader, CustomerProfile},

        data() {
            return {
                Order: Order,
                customer: null,
                customer_id: '',
                user: {
                    name: Auth.state.user_name,
                    id: Auth.state.user_id
                },
                show: false,
                showModalContent: false,
                activeOrder: null,
                headers: ['Date', 'Order No.', 'Product Name', 'Total Product Price',
                    'Percentage', 'Down Payment', 'Repayment Plans'],
                paymentForm: null,
                canAddPayment: null
            }
        },

        methods: {
            async updateView(data) {
                let {customer, user} = data;
                if (!!customer.length) {
                    customer = customer[0];
                    if (!(!!customer.document['id'])) customer.document = {id_card_url: "", passport_url: ""};
                    this.user.branch = user.branch_id;
                    this.customer = customer;
                    this.customer.orders = customer.orders.map(order => new Order(order, customer));
                    this.show = true;
                } else Flash.setError("Customer not found.", 5000);
                this.$LIPS(false);
            },

            processForm() {
                this.show = false;
                this.$LIPS(true);
                get(`/api/customer/lookup/${this.customer_id}`)
                    .then(res => this.updateView(res.data))
                    .catch(() => {
                        this.$LIPS(false);
                        Flash.setError('Error Fetching customer detail');
                    });
            },

            displayAmortization(index) {
                this.activeOrder = this.customer.orders[index];
                this.canAddPayment = /*this.canUserAddPayment;*/ true;
                this.paymentForm = {payments: []};
                this.showModalContent = true;
                return $(`#amortization`).modal('toggle');
            },

            addPaymentForm() {
                let level = this.activeOrder.repaymentLevel;
                let nextRepayment = parseInt(level + this.paymentForm.payments.length + 1);

                if (level === this.activeOrder._count) return;
                if (nextRepayment > this.activeOrder._count) return;

                this.paymentForm.payments.push({
                    _pay: this.activeOrder.amountsToBePaid[0],
                    _date: this.$getDate(),
                    _payment_method: '',
                    _payment_bank: '',
                    _col: '',
                    column: ''
                });

                this.reNumber();
            },

            deletePayment(index) {
                this.paymentForm.payments.splice(index, 1);
                this.reNumber();
            },

            reNumber() {
                this.paymentForm.payments.forEach((payment, index) => {
                    /*this line below mean if the repayment level is 3 i.e the customer has made 3 repayment
                    * u want to display on the ui "4th repayment"
                    * so repaymentLevel(3) + index(0 - length of the added payments) + 1*/
                    let next = this.activeOrder.repaymentLevel + index + 1;
                    this.paymentForm.payments[index]._col = next;
                    this.paymentForm.payments[index].column = this.$getColumn(next) + " Repayment";
                })
            },

            preparePayments() {
                if (!this.canAddPayment) return;
                let payments = {};
                this.paymentForm.payments.forEach(payment => {
                    let obj = {}, col = this.$getColumn(payment._col);
                    obj[`${col}_pay`] = payment._pay;
                    obj[`${col}_date`] = payment._date;
                    obj[`${col}_payment_bank`] = payment._payment_bank;
                    obj[`${col}_payment_method`] = payment._payment_method;
                    payments = {...payments, ...obj};
                });
                this.activeOrder.payments = payments;
                !($.isEmptyObject(payments)) ? this.savePayments() : Flash.setError("You have not added any payment.");
            },

            savePayments() {
                if (!this.canAddPayment) return;
                this.$LIPS(true);
                let type, data, order, orderIndex;
                if (this.activeOrder.count === 6) type = 'formal';
                if (this.activeOrder.count === 12) type = 'informal';
                data = {payments: this.activeOrder.payments, repayment_id: this.activeOrder.order.id, type};

                post(`/api/repayment`, data).then(async res => {
                    console.log(data);
                    if (res.data.saved) {
                        order = (this.customer.orders.find((order, index) => {
                            let found = order.order.id === data.repayment_id;
                            if (found) orderIndex = index;
                            return found;
                        })).order;

                        order[`repayment_${type}`] = res.data.amortization;
                        this.activeOrder = await new Order(order, this.customer);
                        this.customer.orders[orderIndex] = this.activeOrder;
                        await this.logAddedPayment(data);
                        if (this.activeOrder.repaymentLevel === this.activeOrder.count)
                            this.sendPaymentCompleteSMS();
                        this.paymentForm = {payments: []};
                        this.$scrollToTop();
                        this.$LIPS(false);
                    }
                }).catch(() => Flash.setError('Error adding payment! Please try again later.'));
            },

            sendPaymentCompleteSMS() {
                let messageBody = `Dear ${this.activeOrder.customerName}, you have successfully completed ` +
                    `your payment for ${this.activeOrder.order.store_product.product_name}. ` +
                    `Thanks for patronizing us.`,
                    message = new Message(messageBody, this.activeOrder.customer.telephone);
                message.send(r => r.status === 200 && Flash.setSuccess('Repayments Completed. SMS sent.'));
            },

            logAddedPayment(data) {
                let paymentsMade = this.paymentForm.payments
                        .map(pmt => pmt.column.replace(/ /g, '_'))
                        .join(' '),
                    desc = `${paymentsMade}. Order: ID: ${data.repayment_id}. Customer ID: ${this.customer_id}`;
                return log(`Payment(s) added`, desc);
            }
        },

        computed: {
            ...mapGetters(['getBanks', 'getPaymentMethods', 'auth']),
            check() {
                return (!(!(this.$isProcessing) && (!!this.customer_id)));
            },
            canUserAddPayment() {
                return this.auth('supervisor') && (this.user.branch === this.activeOrder.branch.id);
            }
        },

        created() {
            this.$prepareBanks();
            this.$prepareBranches();
            this.$preparePaymentMethods();
        }
    }
</script>

<style scoped>
    .attendance-item {
        cursor: auto;
    }
</style>