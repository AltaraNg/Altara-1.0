<template>
    <transition name="fade">
        <div id="reminder" class="attendance">

            <custom-header :title="'Order List'"/>

            <div class="mt-2 mt-lg-3 row attendance-head attendance-view">
                <div class="col-4 col-lg" v-for="{name:filter,model} in filters">
                    <div class="row">

                        <div class="light-heading mb-1">
                            <span class="d-none d-sm-inline">Select </span>
                            {{filter | capitalize}}
                        </div>

                        <div class="form-group w-100" v-if="filter === 'branch'">
                            <select class="custom-select" v-model="$data[model]"
                                    @keyup.enter="fetchData()">
                                <option disabled selected value="">{{filter | capitalize}}</option>
                                <option :value="id" v-for="{name,id} in getBranches">
                                    {{name | capitalize}}
                                </option>
                            </select>
                        </div>

                        <div class="form-group w-100" v-else>
                            <input class="form-control" type="date" v-model="$data[model]" @keyup.enter="fetchData()">
                        </div>
                    </div>
                </div>

                <div class="col-12 col-lg p-0 flex-row-bottom">
                    <button @click="fetchData()" class="btn btn-primary bg-default mt-0 myBtn">Apply Filter</button>
                </div>
            </div>

            <div class="mt-5 mb-3 attendance-head">
                <div class="w-100 my-5 mx-0 hr"></div>
                <div class="row px-4 pt-3 pb-4 text-center">
                    <div class="col light-heading" style="max-width: 120px">S/N</div>
                    <div class="col light-heading" v-for="header in headings">{{header}}</div>
                </div>
            </div>

            <order v-if="show" :start-index="orders.from" :pre-loaded-order="response" :mode="'normal-list'"/>

            <div class="mt-1 attendance-body" v-if="show && orders.current_page">
                <div class="mb-5 px-0 row align-items-center">
                    <div class="w-100 mb-4 mt-5 mx-0 hr"></div>
                    <div class="clearfix w-100 mt-4 d-flex bd-highlight">

                        <div class="col d-flex justify-content-start align-items-center pl-0">
                            <strong class="light-heading float-left">
                                Displaying: {{orders.from}} - {{orders.to}} of {{orders.total}}
                            </strong>
                        </div>

                        <div class="col d-flex justify-content-center align-items-center">
                            <div class="mr-5">
                                <span class="d-inline light-heading mr-2">set current Page</span>
                                <input class="d-inline form-control " type="number" v-model="page"
                                       style="max-width: 50px;" @keyup.enter="fetchData()">
                            </div>
                            <div class="ml-5">
                                <span class="d-inline light-heading mr-2">set page-size</span>
                                <input class="d-inline form-control" type="number" v-model="page_size"
                                       style="max-width: 50px;" @keyup.enter="fetchData()">
                            </div>
                        </div>

                        <nav class="col d-flex justify-content-end align-items-center pr-0">
                            <ul class="pagination pagination-lg mb-0">
                                <!---->
                                <li :class="{'disabled':!orders.first_page_url}" class="page-item">
                                    <a href="javascript:" @click="prev(1)" class="page-link">First</a>
                                </li>
                                <li :class="{'disabled':!orders.prev_page_url }" class="page-item">
                                    <a href="javascript:" @click="prev()" class="page-link">prev</a>
                                </li>
                                <!---->
                                <li class="page-item">
                                    <span class="page-link">Current Page: {{orders.current_page}}</span>
                                </li>
                                <!---->
                                <li :class="{'disabled':!orders.next_page_url}" class="page-item">
                                    <a href="javascript:" @click="next()" class="page-link">Next</a>
                                </li>
                                <li :class="{'disabled':!orders.last_page_url}" class="page-item">
                                    <a href="javascript:" @click="next(orders.last_page)" class="page-link">Last</a>
                                </li>
                                <!---->
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>
<script>
    import {mapGetters} from "vuex";
    import {get} from '../../utilities/api';
    import Flash from "../../utilities/flash";
    import Order from "../../components/Orders";
    import CustomHeader from '../../components/customHeader';

    export default {
        props: {
            //TODO::verify if its necessary to make this a prop
            withBranchFilter: {default: true},
            urlToFetchOrders: {default: '/api/reminder/create'}
        },

        components: {CustomHeader, Order},

        computed: {...mapGetters(['getBranches'])},

        data() {
            return {
                branch_id: '',
                page_size: 10,
                date_from: null,
                date_to: null,
                page: 1,
                filters: [
                    {name: 'date from', model: 'date_from'},
                    {name: 'date to', model: 'date_to'}
                ],
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
                let {page, page_size, date_from, date_to, branch_id} = this.$data;
                get(this.urlToFetchOrders +
                    `${!!page ? `?page=${page}` : ''}` +
                    `${!!date_to ? `&dateTo=${date_to}` : ''}` +
                    `${!!page_size ? `&pageSize=${page_size}` : ''}` +
                    `${!!branch_id ? `&branchId=${branch_id}` : ''}` +
                    `${!!date_from ? `&dateFrom=${date_from}` : ''}`)
                    .then(({data}) => this.prepareForm(data))
                    .catch(() => Flash.setError('Error Preparing form'));
            },

            next(firstPage = null) {
                if (this.orders.next_page_url) {
                    this.page = firstPage ? firstPage : this.page + 1;
                    this.fetchData();
                }
            },

            prev(lastPage = null) {
                if (this.orders.prev_page_url) {
                    this.page = lastPage ? lastPage : this.page - 1;
                    this.fetchData();
                }
            },

            prepareForm(data) {
                this.show = false;
                this.orders = data.orders;
                this.response = {orders: data.orders.data};
                this.$LIPS(false);
                this.show = true;
            }
        },

        created() {
            this.$props.withBranchFilter && this.filters.unshift({name: 'branch', model: 'branch_id'});
            this.$prepareBranches();
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