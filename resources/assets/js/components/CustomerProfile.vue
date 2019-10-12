    <template>
    <transition name="fade">
        <div :class="full && 'px-md-4 px-2'">
            <app-navigation :forward="{ path: $routerHistory.next().path }"
                            :previous="{ path: $routerHistory.previous().path }"
                            :pageTitle="'Customer Profile'"
                            :pageTitleSmall="'Customer Profile'"
                            v-if="full"/>
            <div class="pt-md-3 pt-2 verification" id="employeeRegister" v-if="show">
                <div class="customer-profile card position-relative">
                    <div class="design"></div>
                    <div class="col-md-4 col-sm-4 col-12 px-0 pb-md-4 pb-sm-3 pb-0 pt-md-5 pt-4 float-left">
                        <div class="pt-md-3 pt-sm-2 pt-1">
                            <div class="justify-content-center d-flex position-relative z-1">
                                <span class="img-border">
                                    <img :src="passport" alt="customer profile pic"
                                         class="profile-picture rounded-circle"
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
                                    <strong>{{$getCustomerFullName(customer) | capitalize}}</strong>
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
                                    <td>{{$getCustomerAddress(customer) | capitalize }}
                                    </td>
                                </tr>
                                <tr>
                                    <th class="text-muted"><i class="mr-3 fas fa-gift"></i>Registered On</th>
                                    <td>{{customer.date_of_registration}}</td>
                                </tr>
                                <tr>
                                    <th class="text-muted"><i class="mr-3 far fa-user-circle"></i>Registered By</th>
                                    <td>{{customer.user ? customer.user.full_name : 'user not in record'| capitalize}}
                                    </td>
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
                <div v-if="full">Full profile goes here</div>
            </div>
        </div>
    </transition>
</template>
<script>
    import Vue from 'vue';
    import {store} from '../store/store';
    import {EventBus} from "../utilities/event-bus";
    import AppNavigation from '../components/AppNavigation';

    const DVA = () => store.getters.auth('DVAAccess');

    export default {
        props: ['viewCustomer'],
        components: {AppNavigation},
        data() {
            return {
                customer: '',
                show: false
            }
        },
        computed: {
            full(){
                return this.$route.meta.mode === 'full';
            },
            passport() {
                return `https://s3.eu-west-2.amazonaws.com/altara-one/${this.customer.document.passport_url}`;
            },
            branch() {
                return `${this.customer.branch.description} ${this.customer.branch.name}`;
            },
            approved(){
                return this.$getCustomerApprovalStatus(this.customer.verification);
            }
        },
        created() {
            $('.tooltip').remove();
            if (this.viewCustomer) this.setCustomer(this.viewCustomer);
            EventBus.$on('customer', customer => this.setCustomer(customer));
        },
        methods: {
            setCustomer(customer) {
                Vue.set(this.$data, 'customer', customer);
                this.show = true;
            }
        }
    }
</script>