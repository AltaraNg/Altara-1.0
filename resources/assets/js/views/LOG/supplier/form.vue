<template>
    <transition name="fade">
        <div class="pt-md-3 pt-2 attendance-view" id="index">

            <custom-header :to="'/log/suppliers'" :title="mode+' Supplier'" :button-title="'view suppliers!'"/>

            <div class="attendance-body">
                <form @submit.prevent="onSave">
                    <div class="my-4 clearfix p-5 row bg-white shadow-sm card-radius">
                        <div class="form-group col-md-6 col-12 float-left px-0 px-md-3" v-if="mode === 'edit'">
                            <label>SKU</label>
                            <input class="form-control" disabled name="sku" placeholder="supplier sku" type="text" v-model="form.sku">
                            <small v-if="errors.first('sku')">{{ errors.first('sku') }}</small>
                            <small v-if="error.sku">{{error.sku[0]}}</small>
                        </div>
                        <div class="form-group col-md-6 col-12 float-left px-0 px-md-3">
                            <label>Supplier Name</label>
                            <input class="form-control" name="name" placeholder="supplier name"
                                   type="text" v-model="form.name" v-validate="'required|max:50'">
                            <small v-if="errors.first('name')">{{ errors.first('name') }}</small>
                            <small v-if="error.sku">{{error.name[0]}}</small>
                        </div>
                        <div class="spaceBetween mb-md-2 mb-0"></div>
                        <div class="form-group col-md-6 col-12  px-0 px-md-3">
                            <label>Email</label>
                            <input class="form-control" name="email" placeholder="email" type="email"
                                   v-model="form.email" v-validate="'required|email|max:100'">
                            <small v-if="errors.first('email')">{{ errors.first('email') }}</small>
                        </div>

                        <div class="spaceBetween mb-md-2 mb-0"></div>
                        <div class="form-group col-md-6 col-12 float-left px-0 px-md-3">
                            <label>Phone</label>
                            <input class="form-control" name="phone" placeholder="phone"
                                   type="text" v-model="form.phone_number" v-validate="'required|max:20'">
                            <small v-if="errors.first('phone')">{{ errors.first('phone') }}</small>
                        </div>
                        <div class="form-group col-md-6 col-12 float-left px-0 px-md-3">
                            <label>Contact Person Name</label>
                            <input class="form-control" data-vv-as="contact person phone" name="contact_phone" placeholder="phone"
                                   type="text" v-model="form.contact_person_name" v-validate="'required|max:20'">
                            <small v-if="errors.first('contact_name')">{{ errors.first('contact_name') }}</small>
                        </div>
                        <div class="spaceBetween mb-md-2 mb-0"></div>
                        <div class="form-group col-md-6 col-12 float-left px-0 px-md-3" v-if="mode === 'edit'">
                            <label class="w-100 float-left">Status</label>
                            <div class="radio p-0 col-md-6 col-6 float-left" v-for="{name,value} in statuses">
                                <input :id="name" :value="value" name="status" type="radio" v-model="form.is_active"
                                       v-validate="'required'">
                                <label :for="name">{{name}}</label>
                            </div>
                            <small v-if="errors.first('status')">{{ errors.first('status') }}</small>
                        </div>
                        <div class="form-group col-md-6 col-12 float-left px-0 px-md-3">
                            <label>Address</label>
                            <textarea class="form-control" placeholder="address" name="address" rows="1" v-validate="'required|max:255'"
                                      v-model="form.address"></textarea>
                            <small v-if="errors.first('address')">{{ errors.first('address') }}</small>
                        </div>
                        <div class="form-group col-md-6 col-12 float-left px-0 px-md-3">
                            <label>State</label>
                            <select class="custom-select w-100" data-vv-as="state name"
                                    data-vv-validate-on="blur" name="state" v-model="form.state" v-validate="'required'">
                                <option disabled value="">-- select state --</option>
                                <option :value="state.name" v-for="state in getStates">{{state.name}}</option>
                            </select>
                            <small v-if="errors.first('state')">{{ errors.first('state') }}</small>
                        </div>
                        <div class="form-group col-md-6 col-12 float-left px-0 px-md-3">
                            <label>City</label>
                            <input class="form-control" data-vv-as="city" name="city" placeholder="City"
                                    v-model="form.city" v-validate="'required|max:50'">
                            <small v-if="errors.first('city')">{{ errors.first('city') }}</small>
                        </div>
                        <div class="spaceAfter"></div>
                        <h5 class="m-3">Bank Details</h5>
                        <div class="spaceAfter"></div>

                        <div class="form-group col-md-6 col-12 float-left px-0 px-md-3">
                            <label>Bank account name</label>
                            <input class="form-control" data-vv-as="account name" name="account_name" placeholder="account name"
                                    v-model="form.bank_account_name" v-validate="'required|max:50'">
                            <small v-if="errors.first('account_name')">{{ errors.first('account_name') }}</small>
                        </div>
                        <div class="spaceBetween mb-md-2 mb-0"></div>
                        <div class="form-group col-md-6 col-12 float-left px-0 px-md-3">
                            <label>Bank account number</label>
                            <input class="form-control" data-vv-as="account number" name="account_number" placeholder="account number"
                                   type="number" v-model="form.bank_account_no" v-validate="'required|max:50'">
                            <small v-if="errors.first('account_number')">{{ errors.first('account_number') }}</small>
                        </div>
                        <div class="spaceBetween mb-md-2 mb-0"></div>
                    </div>
                    <div class="mb-5 px-0 row align-items-center">
                        <div class="clearfix d-flex justify-content-end w-100">
                            <router-link class="mx-5 text-link mt-4 pt-2" to="/log/suppliers" v-if="mode ==='edit'">Cancel</router-link>
                            <button :disabled="$isProcessing" class="btn bg-default" type="submit">
                                {{mode | capitalize}} Supplier <i class="far fa-paper-plane ml-1"></i>
                            </button>
                        </div>
                    </div>
                </form>
            </div>

        </div>

    </transition>
</template>
<script>
    import Vue from 'vue';
    import {log} from "../../../utilities/log";
    import Flash from "../../../utilities/flash";
    import {get, post,put} from "../../../utilities/api";
    import CustomHeader from '../../../components/customHeader';
    import {mapGetters} from "vuex";

    function initialize(to) {
        let urls = {create: `/api/supplier/create`, edit: `/api/supplier/${to.params.id}/edit`};
        return urls[to.meta.mode];
    }

    export default {

        components: {CustomHeader},

        data() {
            return {
                form: {},
                banks: '',
                mode: null,
                error: {},
                show: false,
                store: '/api/supplier',
                method: 'POST',
                statuses: [{name: 'active', value: 1}, {name: 'inactive', value: 0}]
            }
        },
        beforeRouteEnter(to, from, next) {

            if (to.meta.mode === 'edit'){
                get(`/api/supplier/${to.params.id}`).then((data) => {

                    next(vm => {

                        vm.prepareForm(data.data.data)
                    })
                })
                    .catch(() => next(() => Flash.setError('Error Preparing form')));
            }
            else{
                let form = {};
                next(vm => {
                    vm.prepareForm(form)
                })
            }
            // get(initialize(to))
            //     .then(({data}) => next(vm => vm.prepareForm(data)))
            //     .catch(() => next(() => Flash.setError('Error Preparing form')));
        },

        methods: {
            prepareForm(data) {
                this.$LIPS(true);



                Vue.set(this.$data, 'mode', this.$route.meta.mode);
                Vue.set(this.$data, 'form', data);
                // Vue.set(this.$data, 'banks', banks);

                if (this.mode === 'edit') {
                    this.store = `/api/supplier/${this.$route.params.id}`;
                    this.method = 'PUT';


                }
                this.$LIPS(false);
                this.show = true;

            },
           onSave() {

                this.$validator.validateAll().then(result => {
                    if (result) {
                        if (this.$network()) {
                            this.$LIPS(true);

                            (this.mode === 'edit' ? put(this.store, this.form) : post(this.store, this.form))
                                .then(({data}) => {
                                    if (data.status === 'success') {
                                        Vue.set(this.$data, 'form',{});
                                        this.$swal({
                                            icon: 'success',
                                            title: this.mode === 'edit' ? 'Supplier Updated Successfully' : 'Supplier added Successfully'

                                        });
                                        return this.$router.push(
                                            {path: '/log/suppliers'}
                                        )
                                    }
                                })
                                .catch(({response:r}) => {
                                    let {data, status} = r;
                                    if (status === 422) {
                                        this.error = data.errors ? data.errors : data;
                                        this.$networkErr('unique');
                                    }
                                }).finally(() => {
                                this.$scrollToTop();
                                this.$LIPS(false);
                            });
                        } else this.$networkErr()
                    } else this.$networkErr('form');
                })
            }
        },
        created() {
            this.$prepareBanks();
            this.$prepareStates();
        },
        computed: {...mapGetters(['getStates'])},
    }
</script>
