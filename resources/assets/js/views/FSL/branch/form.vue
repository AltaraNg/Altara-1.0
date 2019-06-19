<template>
    <transition name="fade">
        <div class="pt-md-3 pt-2" id="employeeEdit">
            <div class="card">
                <ul class="nav nav-tabs justify-content-center bg-default"><h6>{{mode | capitalize}} Branch</h6></ul>
                <div class="card-body pl-4 pr-4">
                    <form @submit.prevent="onSave" v-if="show">
                        <h5>Branch Details</h5>
                        <div class="clearfix">
                            <div class="form-group col-md-6 col-12 float-left px-0 px-md-3">
                                <label>Branch Name</label>
                                <input :class="{'is-invalid': error.name}" class="form-control" data-vv-as="branch name"
                                       name="branch_name"
                                       placeholder="branch name" type="text" v-model="form.name"
                                       v-validate="'required'">
                                <small v-if="errors.first('branch_name')">{{errors.first('branch_name')}}</small>
                                <small v-if="error.name">{{error.name[0]}}</small>
                            </div>
                            <div class="form-group col-md-6 col-12 float-left px-0 px-md-3">
                                <label>State</label>
                                <select class="custom-select w-100" data-vv-validate-on="blur" name="state"
                                        v-model="form.state_id" v-validate="'required'">
                                    <option selected value="">select state</option>
                                    <option :value="state.id" v-for="state in $store.getters.getStates">{{state.name |
                                        capitalize}}
                                    </option>
                                </select>
                                <small v-if="errors.first('state')">{{errors.first('state') }}</small>
                            </div>
                            <div class="spaceBetween  mb-md-2 mb-0"></div>

                            <div class="form-group col-md-6 col-12 float-left px-0 px-md-3">
                                <label>Phone (English)</label>
                                <input class="form-control" data-vv-as="phone english" name="phone_english"
                                       placeholder="081xxxxxxxx" type="tel" v-model="form.phone_english"
                                       v-validate="'required|numeric|max:11|min:11'">
                                <small v-if="errors.first('phone_english')">{{errors.first('phone_english')}}</small>
                            </div>
                            <div class="form-group col-md-6 col-12 float-left px-0 px-md-3">
                                <label>Phone (Yoruba)</label>
                                <input class="form-control" data-vv-as="phone yoruba" name="phone_yoruba"
                                       placeholder="081xxxxxxxx" type="tel" v-model="form.phone_yoruba"
                                       v-validate="'required|numeric|max:11|min:11'">
                                <small v-if="errors.first('phone_yoruba')">{{errors.first('phone_yoruba')}}</small>
                            </div>
                            <div class="spaceBetween  mb-md-2 mb-0"></div>

                            <div class="form-group col-md-6 col-12 float-left px-0 px-md-3">
                                <label class="w-100 float-left pl-1">Status</label>
                                <div class="radio pl-1 w-50 pr-3 float-left">
                                    <input id="active" name="status" type="radio" v-model="form.status"
                                           v-validate="'required'"
                                           value="active">
                                    <label for="active">Active</label>
                                </div>
                                <div class="radio pl-1 w-50 pr-3 float-left">
                                    <input id="passive" name="status" type="radio" v-model="form.status"
                                           value="passive">
                                    <label for="passive">Passive</label>
                                </div>
                                <small v-if="errors.first('status')">{{errors.first('status')}}</small>
                            </div>
                            <div class="form-group col-md-6 col-12 float-left px-0 px-md-3">
                                <label>Describe Location</label>
                                <textarea class="form-control w-100" name="description"
                                          placeholder="address description"
                                          rows="1" v-model="form.description"
                                          v-validate="'required|max:255'"></textarea>
                                <small v-if="errors.first('description')">{{errors.first('description')}}</small>
                            </div>
                            <div class="spaceAfter"></div>

                            <div class="form-group col-md-6 col-12 float-left px-0 px-md-3">
                                <label>Category</label>
                                <select class="custom-select w-100" data-vv-validate-on="blur" name="category"
                                        v-model="form.category" v-validate="'required'">
                                    <option selected value="">select Category</option>
                                    <option :value="category" v-for="category in ['lifestyle','appliances','admin']">
                                        {{category | capitalize}}
                                    </option>
                                </select>
                                <small v-if="errors.first('category')">{{errors.first('category') }}</small>
                            </div>

                            <div class="spaceAfter"></div>

                            <h5>Account Details</h5>
                            <div class="form-group col-md-6 col-12 float-left px-0 px-md-3">
                                <label>Email</label>
                                <input :class="{'is-invalid': error.email}" class="form-control" name="email"
                                       placeholder="name@example.com"
                                       type="email" v-model="form.email" v-validate="'required|email'">
                                <small v-if="errors.first('email')">{{errors.first('email')}}</small>
                                <small v-if="error.email">{{error.email[0]}}</small>
                            </div>
                            <div class="form-group col-md-6 col-12 float-left px-0 px-md-3">
                                <label>Bank</label>
                                <select class="custom-select w-100" data-vv-validate-on="blur" name="bank"
                                        v-model="form.bank" v-validate="'required'">
                                    <option selected value="">select bank</option>
                                    <option :value="bank.id" v-for="bank in banks">{{bank.name | capitalize}}</option>
                                </select>
                                <small v-if="errors.first('bank')">{{errors.first('bank') }}</small>
                            </div>
                            <div class="spaceBetween  mb-md-2 mb-0"></div>

                            <div class="form-group col-md-6 col-12 float-left px-0 px-md-3">
                                <label>Account Name</label>
                                <input class="form-control" data-vv-as="account name" name="account_name"
                                       placeholder="branch name"
                                       type="text" v-model="form.account_name" v-validate="'required'">
                                <small v-if="errors.first('account_name')">{{errors.first('account_name')}}</small>
                            </div>
                            <div class="form-group col-md-6 col-12 float-left px-0 px-md-3">
                                <label>Account Number</label>
                                <input :class="{'is-invalid': error.account_number}" class="form-control"
                                       data-vv-as="account number"
                                       name="account_number" placeholder="01xxxxxxxx" type="tel"
                                       v-model="form.account_number" v-validate="'required|numeric|max:10|min:10'">
                                <small v-if="errors.first('account_number')">{{errors.first('account_number')}}</small>
                                <small v-if="error.account_number">{{error.account_number[0]}}</small>
                            </div>
                            <div class="spaceBetween mb-md-2 mb-0"></div>
                            <hr class="style-two">
                        </div>
                        <div class="col-sm-12 ml-auto mr-auto mt-md-2 mt-0 px-md-3 px-1 mb-3">
                            <div class="clearfix d-flex justify-content-end">
                                <button @click="done" class="mx-3 btn btn-secondary" type="button"
                                        v-if="mode ==='edit'">Cancel
                                </button>
                                <button :disabled="$isProcessing" class="mx-3 btn bg-default" type="submit">
                                    {{mode | capitalize}} Branch <i class="far fa-paper-plane ml-1"></i>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </transition>
</template>
<script>
    import Vue from 'vue';
    import {log} from '../../../utilities/log';
    import Flash from '../../../utilities/flash'
    import {byMethod, get} from '../../../utilities/api';

    function initialize(to) {
        let urls = {create: `/api/branch/create`, edit: `/api/branch/${to.params.id}/edit`};
        return urls[to.meta.mode];
    }

    export default {
        data() {
            return {
                form: {},
                banks: {},
                error: {},
                mode: null,
                show: false,
                resource: '/branch',
                store: '/api/branch',
                method: 'POST',
            }
        },
        beforeRouteEnter(to, from, next) {
            get(initialize(to)).then(({data}) => next(vm => vm.prepareForm(data)));
        },
        beforeRouteUpdate(to, from, next) {
            this.show = false;
            get(initialize(to)).then(({data}) => {
                this.prepareForm(data);
                next();
            });
        },
        methods: {
            async prepareForm(data) {
                await this.$prepareStates();
                this.mode = this.$route.meta.mode;
                //this function is used when a data is sent to this component
                //or this component makes a request to backend the
                //data received is used to prepare the form
                this.error = {};
                this.errors.clear();
                Vue.set(this.$data, 'form', data.form);
                Vue.set(this.$data, 'banks', data.banks);
                if (this.$route.meta.mode === 'edit') {
                    this.store = `/api/branch/${this.$route.params.id}`;
                    this.method = 'PUT';
                }
                this.show = true;
            },
            async onSave() {
                this.$validator.validateAll().then(result => {
                    if (result) {
                        if (this.$network()) {
                            this.$LIPS(true);
                            this.error = {};
                            byMethod(this.method, this.store, this.form)
                                .then(res => {
                                    if (res.data.saved || res.data.updated) {
                                        log(`Branch ${this.mode}d`, `${this.form.employee_id}`);
                                        Flash.setSuccess(`Branch ${this.mode}d successfully!`, 20000);
                                    }
                                })
                                .catch(e => {
                                    e = e.response;
                                    if (e.status === 422) {
                                        this.error = e.data.errors ? e.data.errors : e.data;
                                        this.$networkErr('unique');
                                    }
                                }).finally(() => this.done());
                        } else this.$networkErr();
                    } else this.$networkErr('form');
                });
            },
            done() {
                this.$router.push('/fsl/branch');
            }
        }
    }
</script>