<template>
    <transition name="fade">
        <div :class="$route.meta.mode === 'full' ? 'px-md-4 px-2' : ''">
            <app-navigation :forward="{ path: $routerHistory.next().path }" :pageTitle="'Customer Profile'"
                            :pageTitleSmall="'Customer Profile'" :previous="{ path: $routerHistory.previous().path }"
                            v-if="$route.meta.mode === 'full'"/>
            <div class="pt-md-3 pt-2 verification" id="employeeRegister" v-if="show">
                <div class="customer-profile card position-relative">
                    <div class="design"></div>
                    <div class="col-md-4 col-sm-4 col-12 px-0 pb-md-4 pb-sm-3 pb-0 pt-md-5 pt-4 float-left">
                        <div class="pt-md-3 pt-sm-2 pt-1">
                            <div class="justify-content-center d-flex position-relative z-1">
                                <span class="img-border">
                                    <img :src="passport" alt="customer profile pic" class="profile-picture rounded-circle"
                                         v-if="customer.document.passport_url">
                                    <i class="no-image fas fa-user-alt" v-else></i>
                                </span>
                            </div>
                            <div class="justify-content-center d-flex position-relative z-1 pt-md-4 pt-sm-4 pt-2">
                                <span class="w-50">
                                    <div class="text-right px-4 py-3 text-light text-muted m-0">
                                        Status<i class="ml-3 fas fa-briefcase"></i>
                                    </div>
                                    <div class="data text-right px-4 py-3 m-0">{{customer.employment_status | capitalize}}</div>
                                </span>
                                <span class="separator"></span>
                                <span class="w-50">
                                    <div class="px-4 py-3 text-muted text-light m-0">
                                        <i class="mr-3 fas fa-transgender"></i>Gender
                                    </div>
                                    <div class="data px-4 py-3 m-0">{{customer.gender | capitalize}}</div>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-8 col-sm-8 col-12 px-0 pb-4 pt-md-5 pt-sm-5 pt-0 float-left">
                        <div class="pt-md-4 pt-0 clearfix">
                            <div class="float-left p-0 m-0 col-md-4 col-sm-6 small-center">
                                <h4 class="mt-0 pt-md-5 pt-sm-4 pt-0 mb-md-5 mb-sm-4 mb-3">
                                    <i class="mr-3 far fa-user-circle"></i>
                                    <strong>{{name | capitalize}}</strong>
                                </h4>
                            </div>
                            <div class="float-left p-0 m-0 col-md-4 col-sm-6 d-flex justify-content-center">
                                <h4 class="mt-0 pt-md-5 pt-sm-4 pt-0 mb-md-5 mb-sm-4 mb-4 text-muted">
                                    <strong>Customer ID: {{customer.id}}</strong>
                                </h4>
                            </div>
                            <div class="float-left p-0 m-0 col-md-4 col-12 d-flex justify-content-center">
                                <span :class="`status mt-md-5 my-sm-2 mt-0 ${approved ? 'approved' : 'not-approved'}`">
                                    {{approved ? 'APPROVED' : 'NOT APPROVED'}}
                                    <i :class="`ml-3 fas fa-${approved ? 'check' : 'times'}`"></i>
                                </span>
                            </div>
                        </div>
                        <div class="pt-4">
                            <table class="table">
                                <tbody>
                                <tr>
                                    <th class="text-muted"><i class="mr-3 fas fa-mobile-alt"></i>Phone Number</th>
                                    <td>{{customer.telephone}}</td>
                                </tr>
                                <tr v-if="$store.getters.auth('DVAAccess')">
                                    <th class="text-muted"><i class="mr-3 fas fa-map-marker-alt"></i>Address</th>
                                    <td>{{address | capitalize }}
                                    </td>
                                </tr>
                                <tr>
                                    <th class="text-muted"><i class="mr-3 fas fa-gift"></i>Registered On</th>
                                    <td>{{customer.date_of_registration}}</td>
                                </tr>
                                <tr>
                                    <th class="text-muted"><i class="mr-3 far fa-user-circle"></i>Registered By</th>
                                    <td>{{customer.user ? customer.user.full_name : 'user not in record'| capitalize}}</td>
                                </tr>
                                <tr>
                                    <th class="text-muted"><i class="mr-3 far fa-building"></i>Branch</th>
                                    <td>{{branch | capitalize}}</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div class="clearfix" v-if="$route.meta.mode === 'full'">
                    <div>This is full profile!</div>
                </div>
            </div>
        </div>
    </transition>
</template>
<script>
    import Vue from 'vue';
    import {get} from '../helpers/api';
    import {store} from '../store/store';
    import {EventBus} from "../helpers/event-bus";
    import CustomerProfile from './CustomerProfile';
    import AppNavigation from '../components/AppNavigation';
    import {getCustomerAddress as address, getCustomerApprovalStatus as status, getCustomerFullName as name} from '../helpers/helpers';

    const DVA = () => store.getters.auth('DVAAccess');

    export default {
        props: ['viewCustomer'],
        components: {CustomerProfile, AppNavigation},
        data() {
            return {
                customer: '',
                show: false,
            }
        },
        computed: {
            passport() {
                return `https://s3.eu-west-2.amazonaws.com/altara-one/${this.customer.document.passport_url}`;
            },
            name() {
                return name(this.customer);
            },
            branch() {
                return `${this.customer.branch.description} ${this.customer.branch.name}`;
            },
            address() {
                return address(this.customer);
            },
            approved() {
                return status(this.customer.verification);
            }
        },
        created() {
            $('.tooltip').remove();
            if (this.viewCustomer) this.setCustomer(this.viewCustomer);
            EventBus.$on('customer', customer => {
                this.setCustomer(customer);
            });
        },
        beforeRouteEnter(to, from, next) {
            if (DVA()) {
                get(`/api/customer/${to.params.id}`).then(res => {
                    next(vm => vm.setCustomer(res.data.customer));
                });
            } else next('/');
        },
        beforeRouteUpdate(to, from, next) {
            if (DVA()) {
                get(`/api/customer/${to.params.id}`).then(res => {
                    this.setCustomer(res.data.customer);
                    next();
                });
            } else next('/');
        },
        methods: {
            setCustomer(customer) {
                Vue.set(this.$data, 'customer', customer);
                this.show = true;
            }
        }
    }
</script>

<style lang="scss">
    @import "../../sass/app/variables";

    .customer-profile {
        position: relative;

        th {
            width: auto;
            font-weight: normal;
        }

        td, .data {
            font-size: $default-font-size;
            font-weight: 500;
        }

        .design {
            position: absolute;
            top: 13rem;
            bottom: 0;
            left: 0;
            width: 101%;
            height: calc(100% - 8.1rem);
            z-index: 0;
            background: linear-gradient(45deg, #dedede 0%, #ffffff 100%);
        }

        .profile-picture, .no-image {
            height: 16rem;
            width: 16rem;
            box-shadow: 0 7px 15px rgba(0, 0, 0, 0.15), 0 4px 4px rgba(0, 0, 0, 0.2);
        }

        .no-image {
            background-color: #e3e3e3;
            border-radius: 50%;
            line-height: 16rem;
            text-align: center;
            font-size: 8rem;
            color: rgba(0, 0, 0, 0.15);
        }

        .img-border {
            padding: 1.1rem;
            background-color: white;
            border-radius: 50%;
        }

        .separator {
            position: absolute;
            left: 50%;
            height: 70%;
            width: 1px;
            background-color: rgba(0, 0, 0, 0.1);
            top: 3%;
        }

    }

    @media (max-width: 600px) {
        .customer-profile {
            .design {
                background: linear-gradient(180deg, #dedede 0%, #ffffff 100%);
            }

            .separator {
                top: -11%;
            }

            .small-center {
                text-align: center;
            }

            th {
                width: 35%;
            }

            tbody {
                padding: 1rem 1rem 0;
                float: left;
            }
        }
    }
</style>