<template>
    <transition name="fade">

        <div id="cash-logger">

            <div class="mt-5 mb-3 attendance-head">
                <ul class="nav nav-tabs justify-content-center p-0" role="tablist">
                    <li class="col p-0 nav-item mb-0" >
                        <a
                            aria-selected="true"
                            class="nav-link"
                            :class="{ active: isActive('home')}"
                            data-toggle="tab"
                            href="#home"
                            @click.prevent="setActive('home')"
                            role="tab"
                        >
                            Log Payment
                        </a>
                    </li>
                    <li class="col p-0 nav-item mb-0" v-for="(tab, index) in details.tabs">
                        <a
                            aria-selected="true"
                            class="nav-link"
                            :class=" (index === 0 ) && 'active'"
                            data-toggle="tab"
                            href="#payment"
                            @click="listToOrder = tab"
                            role="tab"
                            v-html="tab"
                        >

                        </a>
                    </li>


                </ul>
            </div>
            <div class="tab-content py-3">
                <div class="tab-pane fade" :class="{ 'active show': isActive('home') }" id="home">
                    <AutoCompleteSearch
                        title=""
                        @customer-selected="processForm"
                        :url="'/api/customer/autocomplete'"/>

                    <transition name="fade">
                        <div v-if="customer && show">
                            <customer-profile :view-customer="customer"/>
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
                                            <span v-if="$route.meta.customSMS">
                                        <CustomSMSButton :order="order" :customer="customer" :key="order.order.id"/>
                                    </span>
                                        </div>
                                        <div
                                            class="col-12 col-xs-2 col-md col-lg d-flex align-items-center justify-content-center">
                                            {{order.order.order_date}}
                                        </div>
                                        <div
                                            class="col-12 col-xs-2 col-md col-lg d-flex user-name align-items-center justify-content-center">
                                            {{order.order.id}}
                                        </div>
                                        <div
                                            class="col-12 col-xs-3 col-md col-lg d-flex align-items-center justify-content-center">
                                            {{order.order.store_product.product_name}}
                                        </div>
                                        <div
                                            class="col-12 col-xs-2 col-md col-lg d-flex align-items-center justify-content-center">
                                            {{$formatCurrency(order.order.product_price)}}
                                        </div>
                                        <div
                                            class="col-12 col-xs-2 col-md col-lg d-flex align-items-center justify-content-center">
                                            {{order.order.sales_category.name}}
                                        </div>
                                        <div
                                            class="col-12 col-xs-2 col-md col-lg d-flex align-items-center justify-content-center">
                                            {{$formatCurrency(order.order.down_payment)}}
                                        </div>
                                        <div
                                            class="col-12 col-xs-2 col-md col-lg d-flex align-items-center justify-content-center">
                                            <button
                                                :class="order.count === order.repaymentLevel ? 'approved' : 'pending'"
                                                @click="displayAmortization(index)"
                                                class="btn status my-sm-2">
                                                View Plan
                                                <i :class="order.count === order.repaymentLevel ? 'fa-check-circle' : 'fa-hourglass-half'"
                                                   class="fas ml-3"
                                                   style="font-size: 1.4rem"></i>
                                                <!--                                        // TODO:: cleanup-->
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
                                <div id="cash-logger-form"
                                     class="row d-flex light-heading align-items-center justify-content-center attendance-item py-4">
                                    <div class="col-4 align-self-center text-capitalize">
                                        <p class="h2"> Customer ID: {{customer.id}} </p>
                                    </div>
                                    <form class="col-8 container" @submit.prevent="submitForm">
                                        <div class="row">
                                            <div class="col-4 form-group">
                                                <label for="payment-type" class="form-control-label">Payment
                                                    Type</label>
                                                <select class="custom-select w-100"
                                                        data-vv-as="Payment Type" name="paymentType"
                                                        v-model="cashLogForm.payment_type_id" v-validate="'required'"
                                                        id="payment-type">

                                                    <option :value="type.id" v-for="type in paymentType">
                                                        {{type.type}}
                                                    </option>
                                                </select>
                                            </div>
                                            <div class="col-4 form-group">
                                                <label for="payment-method" class="form-control-label">Payment
                                                    Method</label>
                                                <select class="custom-select w-100"
                                                        data-vv-as="Payment Method" data-vv-validate-on="blur"
                                                        name="paymentMethod"
                                                        v-model="cashLogForm.payment_method_id" v-validate="'required'"
                                                        id="payment-method">
                                                    <option :value="type.id"
                                                            v-for="type in getPaymentMethods">
                                                        {{type.name}}
                                                    </option>
                                                </select>
                                            </div>

                                            <div class="col-4 w-100 form-group">
                                                <label for="amount" class="form-control-label">Amount</label>
                                                <input name="amount" placeholder="Enter Amount Paid"
                                                       v-model="cashLogForm.amount" v-validate="'required'"
                                                       class="w-100 form-control" id="amount" type="number">
                                                <small v-if="errors.first('amount')">{{errors.first('amount')}}</small>
                                            </div>

                                        </div>

                                        <div class="form-group">
                                            <textarea placeholder="Any comments ..." class="form-control"
                                                      v-model="cashLogForm.comment" name="comment"></textarea>
                                        </div>

                                        <div class="text-center ">
                                            <button class="btn bg-default " type="submit"> Submit</button>
                                        </div>


                                    </form>

                                </div>


                            </div>
                            <div class="mt-5 mb-3 attendance-head">
                                <div class="w-100 my-5 mx-0 hr"></div>
                            </div>
                        </div>
                    </transition>
                </div>


                <div class="tab-pane container"  id="payment" :class="{ 'active show': isActive('payment') }">
                    <div class="row px-4 pt-3 pb-4 text-center">
                        <div class="col light-heading font-weight-bolder" :key="index"
                             v-for="(header,index) in details.headings">{{header}}
                        </div>
                    </div>
                    <div v-if="details.headings.length === 7">
                        <div class="d-flex light-heading  row attendance-item py-2 my-2 text-center"
                             v-if="transactions !== null" v-for="(transaction, index) in transactions.data">
                            <div class="col">{{index+1}}</div>
                            <div class="col">{{transaction.payment_number}}</div>
                            <div class="col">{{transaction.date}}</div>
                            <div class="col">{{transaction.type}}</div>
                            <div class="col">{{transaction.method}}</div>
                            <div class="col">{{$formatCurrency(transaction.amount)}}</div>
                            <div class="col">{{transaction.comment ? transaction.comment.comment : "No Comments"}}</div>
                        </div>
                    </div>

                    <div v-else>
                        <div class="d-flex light-heading  row attendance-item py-2 my-2 text-center"
                             v-if="paymentReconcile !== null" v-for="(item, index) in paymentReconcile.data" @click="updateModal(item)">
                            <div class="col">{{index+1}}</div>
                            <div class="col">{{item.reconcile_number}}</div>
                            <div class="col">{{getBranchName(item.branch_id).name}}</div>
                            <div class="col">{{$formatCurrency(item.total)}}</div>
                            <div class="col">{{$formatCurrency(item.cash_at_hand)}}</div>
                            <div class="col">{{$formatCurrency(item.deposited)}}</div>
                            <div class="col">{{item.date}}</div>
                            <div class="col">{{item.comment ? item.comment.comment : "No Comments"}}</div>
                        </div>
                    </div>

                    <div class="modal fade repayment" id="updatePayment">
                        <div class="modal-dialog modal-xl" role="document">
                            <div class="modal-content" v-if="showModalContent">
                                <div class="modal-header py-2">
                                    <h6 class="modal-title py-1">
                                        Update {{currentPayment.reconcile_number}}
                                    </h6>
                                    <a aria-label="Close" class="close py-1" data-dismiss="modal">
                                <span aria-hidden="true" class="modal-close text-danger">
                                    <i class="fas fa-times"></i>
                                </span>
                                    </a>
                                </div>
                                <div class="modal-body">
                                    <form class="col-8 container" @submit.prevent="reconcile">
                                        <div class="row">
                                            <div class="col-6 form-group">
                                                <label for="deposit" class="form-control-label">Deposited</label>
                                                <input name="amount" placeholder="Enter Amount Deposited"
                                                       v-model="updateCashForm.deposited" v-validate="'required'"
                                                       class="w-100 form-control" id="deposit" type="number">
                                                <small v-if="errors.first('deposit')">{{errors.first('deposit')}}</small>

                                            </div>
                                            <div class="col-6 form-group">
                                                <label for="cash" class="form-control-label">Cash At Hand</label>
                                                <input name="cash" placeholder="Enter Cash at hand"
                                                       v-model="updateCashForm.cash_at_hand" v-validate="'required'"
                                                       class="w-100 form-control" id="cash" type="number">
                                                <small v-if="errors.first('amount')">{{errors.first('amount')}}</small>

                                            </div>



                                        </div>

                                        <div class="form-group">
                                            <textarea placeholder="Any comments ..." class="form-control"
                                                      v-model="updateCashForm.comment" name="comment"></textarea>
                                        </div>

                                        <div class="text-center ">
                                            <button class="btn bg-default " type="submit"> Submit</button>
                                        </div>


                                    </form>
                                </div>

                                <div  class="modal-footer">
                                    This is footer
                                </div>
                            </div>
                        </div>
                    </div>


                </div>

            </div>
        </div>


    </transition>

</template>

<script>
    import AutoCompleteSearch from '../../../components/AutocompleteSearch/AutocompleteSearch'
    import Vue from 'vue';
    import {log} from '../../../utilities/log';
    import {get, post, put} from '../../../utilities/api';
    import Auth from '../../../utilities/auth';
    import Orders from '../../../components/Orders'
    import Flash from "../../../utilities/flash";
    import axios from 'axios';
    import {OrderWithPromiseCall} from '../../../utilities/Amortization';
    import CustomHeader from '../../../components/customHeader';
    import CustomerProfile from '../../../components/CustomerProfile';
    import CustomSMSButton from '../../../components/CustomSMSButton/CustomSMSButton';
    import {mapGetters} from "vuex";
    import BasePagination from '../../../components/Pagination/BasePagination';


    export default {
        name: 'cash_logger',
        components: {
            AutoCompleteSearch,
            Orders,
            CustomerProfile,
            CustomHeader,
            CustomSMSButton,
            BasePagination
        },
        data() {
            return {
                user: {
                    name: Auth.state.user_name,
                    id: Auth.state.user_id
                },
                error: {},
                paymentMethod: {},
                apiUrls: {
                    payment: `/api/payment`,
                    payment_reconcile: `/api/payment-reconcile`,
                    payment_type: `/api/payment-type`,
                    customer_lookup: `/api/customer/lookup`
                },
                showModalContent: false,
                paymentType: {},
                activeItem: 'home',
                paymentHeaders: ["Index", "Transaction Id", "Date of Payment", "Payment Purpose", "Payment Type", "Amount Paid", "Comment"],
                cashLogForm: {},
                show: false,
                perPage: 10,
                currentPage:1,
                query: {
                    page: 1,
                    column: 'id',
                    direction: 'desc',
                    per_page: 10,
                    search_column: 'id',
                    search_operator: 'greater_than',
                    search_input: 0
                },
                paymentReconcile: null,
                pageCount: 0,
                listToOrder: 'Current',
                customer: null,
                customer_id: '',
                headers: ['Date', 'Order No.', 'Product Name', 'Total Product Price',
                    'Percentage', 'Down Payment', 'Repayment Plans'],
                transactions: [],
                currentPayment: null,
                updateCashForm: {}

            }
        },


        methods: {
            async updateView(data) {
                let {customer, user} = data;
                if (!!customer.length) {
                    customer = customer[0];
                    !customer.document && (customer.document = {id_card_url: "", passport_url: ""});
                    this.user.branch = user.branch_id;
                    this.customer = customer;
                    this.customer.orders = customer.orders.map(order => {
                        let orderWithCustomer = order;
                        orderWithCustomer.customer = this.customer;
                        return new OrderWithPromiseCall(orderWithCustomer, this.getAuthUserDetails.userId);
                    });
                    this.show = true;
                } else Flash.setError("Customer not found.", 5000);
                this.$LIPS(false);
            },
            getBranchName(id){

                var branches = this.getBranches;
                return branches.find((branch) => {
                    return branch.id === id;
                });
            },

            updateModal(data){
                this.showModalContent = true;
                this.currentPayment = data;
                return $(`#updatePayment`).modal('toggle');
            },

            reconcile(){
                this.$validator.validateAll().then(result => {
                    if (result) {
                        if (this.$network()) {
                            this.$LIPS(true);
                            put(this.apiUrls.payment_reconcile+`/${this.currentPayment.id}`, this.updateCashForm).then((res) => {
                                this.$LIPS(false);
                                console.log(res.data.status);
                                Flash.setSuccess(res.data.status);
                                this.$router.go(0);
                            }).catch(() => {
                                Flash.setError("Error submitting form")
                            })
                        } else this.$networkErr();
                    } else this.$networkErr('form');
                })
            },

            submitForm() {
                this.cashLogForm.customer_id = this.customer.id;
                this.$validator.validateAll().then(result => {
                    if (result) {
                        if (this.$network()) {
                            this.$LIPS(true);
                            post(this.apiUrls.payment, this.cashLogForm).then((res) => {
                                this.$LIPS(false);
                                console.log(res.data.status);
                                Flash.setSuccess(res.data.status);
                                this.$router.go(0);
                            }).catch(() => {
                                Flash.setError("Error submitting form")
                            })
                        } else this.$networkErr();
                    } else this.$networkErr('form');
                });
            },

            logCashLog(){
                let desc = `${this.user.name} logged ${$formatCurrency(this.cashLogForm.amount)} of customer: ${this.customer.id}`;
                return log('Cash Logged', desc);
            },

            processForm(id) {
                this.show = false;
                this.$LIPS(true);
                get(this.apiUrls.customer_lookup+`/${id}`)
                    .then(res => {
                        this.updateView(res.data)
                        // console.log(res.data)
                    })
                    .catch(() => {
                        this.$LIPS(false);
                        Flash.setError('Error Fetching customer detail');
                    });
            },


            isActive(menuItem) {
                return this.activeItem === menuItem
            },
            setActive(menuItem) {
                this.activeItem = menuItem
            },
            async pageChangeHandle(value) {
                switch (value) {
                    case 'next':
                        this.currentPage += 1;

                        break;
                    case 'previous':
                        this.currentPage -= 1;
                        break;
                    default:
                        this.currentPage = value
                }
                this.query.page = this.currentPage;
                this.$LIPS(true);

                get(
                    this.apiUrls.payment+`?page=` +
                    this.currentPage)
                    .then(res => {
                        Vue.set(this.$data, 'transactions', res.data['data']);
                        this.$LIPS(false);

                    });
            },
        },
        created() {
            this.$prepareBanks();
            this.$prepareBranches();
            this.$preparePaymentMethods();

        },
        async mounted(){
            try {
                if (this.$network()) {
                    this.$LIPS(true);
                    this.error = {};
                    axios.all([
                        get(this.apiUrls.payment),
                        get(this.apiUrls.payment_type),
                        get(this.apiUrls.payment_reconcile)
                    ]).then(axios.spread((payment, payment_type, payment_reconcile) => {
                        Vue.set(this.$data, 'transactions', payment.data['data']);
                        Vue.set(this.$data, 'paymentType', payment_type.data['data']);
                        Vue.set(this.$data, 'paymentReconcile', payment_reconcile.data['data']);
                    })).catch(()=>{
                        Flash.setError('Unable to fetch data')
                    });

                    this.$LIPS(false)
                } else this.$networkErr();
            } catch (e) {
            }
        },
        computed: {
            ...mapGetters(['getBanks', 'getPaymentMethods', 'auth', 'getAuthUserDetails', 'getBranches']),

            updatedPerPage: function () {
                return this.query.per_page
            },
            details() {
                let list = 1;
                const tabs = ["View Payment", "Reconcile"];
                const headings1 = ['Index', 'Transaction ID', 'Date Of Payment', 'Payment Purpose', 'PaymentType', 'AmountPaid', 'Comment'];
                const headings2 = ['Index','Reconcile Number', 'Branch', 'Total','Cash at Hand', 'Deposited', 'Date', 'Comment'];
                const headings0 = [ ...headings1 , ...headings2];
                const headings = this.listToOrder !== "View Payment" ? headings2 : headings1;
                return {tabs, headings, list};
            },

        }

    }
</script>

<style scoped type="scss">
    .attendance-head .light-heading:nth-child(1) {
        max-width: 120px;
    }
</style>

