<template>
    <form @submit.prevent="processBranch">
        <h5>Branch Details</h5>

        <div class="form-group col-md-6 col-12 float-left px-0 px-md-3">
            <label>Branch Name</label>
            <input type="text" class="form-control" placeholder="branch name" v-validate="'required'"
                   v-model="form.name" name="branch_name" data-vv-as="branch name" :class="{'is-invalid': error.name}">
            <small v-if="errors.first('branch_name')">{{errors.first('branch_name')}}</small>
            <small v-if="error.name">{{error.name[0]}}</small>
        </div>

        <div class="form-group col-md-6 col-12 float-left px-0 px-md-3">
            <label>State</label>
            <select name="state" class="custom-select w-100" v-model="form.state_id"
                    v-validate="'required'" data-vv-validate-on="blur">
                <option value="" selected>select state</option>
                <option v-for="state in states" :value="state.id">{{state.name | capitalize}}</option>
            </select>
            <small v-if="errors.first('state')">{{errors.first('state') }}</small>
        </div>

        <div class="spaceBetween  mb-md-2 mb-0"></div>

        <div class="form-group col-md-6 col-12 float-left px-0 px-md-3">
            <label>Phone (English)</label>
            <input type="tel" class="form-control" placeholder="081xxxxxxxx"
                   v-model="form.phone_english" name="phone_english" data-vv-as="phone english"
                   v-validate="'required|numeric|max:11|min:11'">
            <small v-if="errors.first('phone_english')">{{errors.first('phone_english')}}</small>
        </div>

        <div class="form-group col-md-6 col-12 float-left px-0 px-md-3">
            <label>Phone (Yoruba)</label>
            <input type="tel" class="form-control" placeholder="081xxxxxxxx"
                   v-model="form.phone_yoruba" name="phone_yoruba" data-vv-as="phone yoruba"
                   v-validate="'required|numeric|max:11|min:11'">
            <small v-if="errors.first('phone_yoruba')">{{errors.first('phone_yoruba')}}</small>
        </div>

        <div class="spaceBetween  mb-md-2 mb-0"></div>

        <div class="form-group col-md-6 col-12 float-left px-0 px-md-3">
            <label class="w-100 float-left pl-1">Status</label>
            <div class="radio pl-1 w-50 pr-3 float-left">
                <input v-model="form.status" type="radio" name="status" id="active" value="active"
                       v-validate="'required'">
                <label for="active">Active</label>
            </div>
            <div class="radio pl-1 w-50 pr-3 float-left">
                <input v-model="form.status" type="radio" name="status" id="passive" value="passive">
                <label for="passive">Passive</label>
            </div>
            <small v-if="errors.first('status')">{{errors.first('status')}}</small>
        </div>

        <div class="form-group col-md-6 col-12 float-left px-0 px-md-3">
            <label>Describe Location</label>
            <textarea class="form-control w-100" placeholder="address description" name="description"
                      rows="1" v-model="form.description" v-validate="'required|max:255'"></textarea>
            <small v-if="errors.first('description')">{{errors.first('description')}}</small>
        </div>

        <div class="spaceAfter"></div>
        <h5>Account Details</h5>

        <div class="form-group col-md-6 col-12 float-left px-0 px-md-3">
            <label>Email</label>
            <input type="email" class="form-control" placeholder="name@example.com" v-model="form.email"
                   name="email" :class="{'is-invalid': error.email}" v-validate="'required|email'">
            <small v-if="errors.first('email')">{{errors.first('email')}}</small>
            <small v-if="error.email">{{error.email[0]}}</small>
        </div>

        <div class="form-group col-md-6 col-12 float-left px-0 px-md-3">
            <label>Bank</label>
            <select name="bank" class="custom-select w-100" v-model="form.bank"
                    v-validate="'required'" data-vv-validate-on="blur">
                <option value="" selected>select bank</option>
                <option v-for="bank in banks" :value="bank.id">{{bank.name | capitalize}}</option>
            </select>
            <small v-if="errors.first('bank')">{{errors.first('bank') }}</small>
        </div>

        <div class="spaceBetween  mb-md-2 mb-0"></div>

        <div class="form-group col-md-6 col-12 float-left px-0 px-md-3">
            <label>Account Name</label>
            <input type="text" class="form-control" placeholder="branch name" v-validate="'required'"
                   v-model="form.account_name" name="account_name" data-vv-as="account name">
            <small v-if="errors.first('account_name')">{{errors.first('account_name')}}</small>
        </div>

        <div class="form-group col-md-6 col-12 float-left px-0 px-md-3">
            <label>Account Number</label>
            <input type="tel" class="form-control" placeholder="01xxxxxxxx"
                   v-model="form.account_number" name="account_number" data-vv-as="account number"
                   v-validate="'required|numeric|max:10|min:10'" :class="{'is-invalid': error.account_number}">
            <small v-if="errors.first('account_number')">{{errors.first('account_number')}}</small>
            <small v-if="error.account_number">{{error.account_number[0]}}</small>
        </div>

        <hr class="style-two">

        <div class="col-sm-12 ml-auto mr-auto mt-md-2 mt-0 px-md-3 px-1 mb-3 float-right">
            <button type="submit" class="btn btn-block btn-lg bg-default" :disabled="$isProcessing">
                {{action | capitalize}} Branch <i class="far fa-paper-plane ml-1"></i>
            </button>
        </div>
    </form>
</template>
<script>
    import {log} from '../../../helpers/log';
    import Flash from '../../../helpers/flash'
    import {get, post} from '../../../helpers/api';

    export default {
        props: {
            //the component is never called exclusively its
            //is called by another parent component.
            //the action is purpose or the context
            action: '',
            branchToUpdate: {default: ''}
        },
        data() {
            return {
                form: {},
                banks: {},
                error: {},
                states: {}
            }
        },
        methods: {
            ifCreate(a) {
                //a is the action for which the form is called or the context
                //the form is used this function return true if the
                //action : a is === create else else
                return a === 'create';
            },
            ifUpdate(a) {
                //a is the action for which the form is called or the context
                //the form is used this function return true if the
                //action : a is === update else else
                return a === 'update';
            },
            prepareForm(data) {
                //this function is used when a data is sent to this component
                //or this component makes a request to backend the
                //data received is used to prepare the form
                this.error = {};
                this.errors.clear();
                this.form = data.form;
                this.banks = data.banks;
                this.states = data.states;
            },
            processBranch() {
                this.$validator.validateAll().then(result => {
                    if (result) {
                        if (this.$network()) {
                            this.$LIPS(true);
                            this.error = {};
                            let url = '/api/branch', action = this.$options.filters.capitalize(this.action);
                            //for creating a branch the url above is used
                            if (this.action === 'update') url = `/api/branch/${this.branchToUpdate.id}`;
                            //else if the form action is not create den its update
                            //hence the url "/api/branch/{id}"
                            post(url, this.form)
                                .then(res => {
                                    log(`Branch${action}`, `${this.form.employee_id}`);
                                    if (this.ifCreate(this.action)) this.prepareForm(res.data.prepareForm);
                                    if (this.ifUpdate(this.action)) this.$emit('done');
                                    Flash.setSuccess(`Branch ${this.action}d successfully!`, 20000);
                                })
                                .catch(e => {
                                    e = e.response;
                                    if (e.status === 422) {
                                        this.error = e.data.errors ? e.data.errors : e.data;
                                        this.$networkErr('unique');
                                    }
                                }).finally(() => {
                                this.$scrollToTop();
                                this.$LIPS(false);
                            })
                        } else this.$networkErr();
                    } else this.$networkErr('form');
                });
            },
        },
        created() {
            get('/api/branch/create').then(res => this.prepareForm(res.data));
            // fetch data for new branch registration and prepare form
        },
        watch: {
            branchToUpdate(newVal) {
                /*watches when a data is sent from the parent (dataviewer)
                * to this component*/
                this.form = newVal;
                this.$LIPS(false);
            }
        }
    }
</script>