<template>
    <transition name="fade">
        <div id="reminder" class="attendance">

            <custom-header :title="'All overdue(s) payments'"/>

            <div class="mt-5 row attendance-head">
                <div class="col-4 col-sm" v-for="{name} in filters">
                    <div class="row">
                        <div class="light-heading">
                            <span class="d-none d-sm-inline">Select</span> {{name | capitalize}}
                        </div>
                    </div>
                </div>
                <div class="col-3 col-sm"></div>
            </div>

            <div class="mt-2 mt-lg-3 row attendance-head attendance-view">
                <div class="col-4 col-sm" v-for="{name:filter,model} in filters">
                    <div class="row">
                        <select class="custom-select"
                                v-model="$data[model]"
                                v-if="filter === 'branch'"
                                @keyup.enter="fetchData()">
                            <option disabled selected value="">{{filter | capitalize}}</option>
                            <option :value="id" v-for="{name,id} in $store.getters.getBranches">
                                {{name | capitalize}}
                            </option>
                        </select>
                        <div class="form-group w-100" v-else-if="filter === 'overdue days'">
                            <input type="number" class="form-control" v-model="$data[model]" @keyup.enter="fetchData()">
                        </div>
                        <div class="form-group w-100" v-else>
                            <input class="form-control" type="date" v-model="$data[model]" @keyup.enter="fetchData()">
                        </div>
                    </div>
                </div>
                <div class="col-12 col-sm">
                    <div class="row d-flex justify-content-end">
                        <button @click="fetchData()" class="btn btn-primary bg-default mt-0 myBtn">Apply Filter</button>
                    </div>
                </div>
            </div>

            <div class="mt-5 mb-3 attendance-head">
                <div class="w-100 my-5 mx-0 hr"></div>
                <div class="row px-4 pt-3 pb-4 text-center">
                    <div class="col light-heading" style="max-width: 120px">S/N</div>
                    <div class="col light-heading" v-for="header in headings">{{header}}</div>
                </div>
            </div>

            <order v-if="show" :pre-loaded-order="response" :mode="'normal-list'"/>

            <div class="mt-5 mb-3 attendance-head">
                <div class="w-100 my-5 mx-0 hr"></div>
            </div>

        </div>
    </transition>
</template>
<script>
    import {get} from '../../utilities/api';
    import Flash from "../../utilities/flash";
    import Order from "../../components/Orders";
    import CustomHeader from '../../components/customHeader';
    import {OrderWithPromiseCall} from "../../utilities/Amortization";

    export default {

        components: {CustomHeader, Order},

        data() {
            return {
                branch_id: '',
                overdue_days: 1,
                filters: [{name: 'branch', model: 'branch_id'}, {name: 'overdue days', model: 'overdue_days'}],
                orders: null,
                response: {},
                show: false,
                headings:
                    ['Order Number', 'Order Summary', 'Customer Info Summary', 'Repayment Summary', 'Reminder History']
            }
        },

        methods: {

            fetchData() {
                this.$scrollToTop();
                this.$LIPS(true);
                let {branch_id, overdue_days} = this.$data;
                get(`/api/reminder/create` +
                    `${!!overdue_days ? `?overdue_days=${overdue_days}` : ''}` +
                    `${!!branch_id ? `&branch_id=${branch_id}` : ''}`)
                    .then(({data}) => this.prepareForm(data))
                    .catch(() => Flash.setError('Error Preparing form'));
            },

            prepareForm(data) {
                this.show = false;
                this.orders = null;
                this.response = {};
                let filteredOrders = [];

                data.orders.forEach(order => {
                    let payDay,
                        today = new Date(),
                        newOrder = new OrderWithPromiseCall(order, data.dva_id);

                    if (!(!!newOrder.repaymentData)) return false;

                    for (let i = 1; i < newOrder.count + 1; i++) {
                        let column = this.$getColumn(i);
                        if (!newOrder.repaymentData[column + "_pay"]) {
                            payDay = newOrder.dueDates[i - 1];
                            break;
                        }
                    }

                    let datePool = this.$getDate(today.addDays(-this.overdue_days));
                    if (datePool === payDay) filteredOrders.push(newOrder);
                });

                this.orders = filteredOrders;
                let {payment_methods, banks, dva_id, branch} = data;
                this.response = {payment_methods, banks, dva_id, branch, orders: this.orders};
                this.$scrollToTop();
                this.$LIPS(false);
                this.show = true;
            }
        },
        created() {
            this.$prepareBranches();
            this.fetchData();
        }
    }
</script>

<style lang="scss" scoped>
    .attendance-view {
        .custom-select, input {
            width: 85%;
        }

        .myBtn {
            width: 95%;
        }
    }
</style>