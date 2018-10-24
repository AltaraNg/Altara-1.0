<template>
    <transition name="fade">
        <div class="float-left w-100 pt-md-3 pt-2" id="employeeRegister">
            <div class="px-3">
                <div class="card">
                    <ul class="nav nav-tabs bg-default justify-content-center">
                        <h6>Verification and Document Uploads</h6>
                    </ul>
                    <div class="card-body p-4 clear w-100">
                        <form @submit.prevent="fetchCustomer" class="w-100 clear">
                            <div class="m-0 p-0 col-12 form-group float-left">
                                <label class="w-100">Customer ID</label>
                                <input class="form-control col-lg-9 col-md-8 col-sm-8 col-12 float-left mt-1"
                                       v-model="customer_id"
                                       v-validate="'required|numeric'"
                                       data-vv-as="customer id"
                                       name="customer_id"
                                       @onkeyUp="check"
                                       :class="{'is-invalid': errors.first('customer_id')}">
                                <div
                                        class="col-lg-3 col-md-4 col-sm-4 col-12 float-right px-md-3 mt-md-0 px-sm-3 mt-sm-0 mt-2 px-0">
                                    <button type="submit"
                                            class="btn btn-block bg-default my-1"
                                            :disabled="check">
                                        View Customers status
                                        <i class="far fa-paper-plane ml-1"></i>
                                    </button>
                                </div>
                                <small class="form-text text-muted w-100" v-if="errors.first('customer_id')">
                                    {{errors.first('customer_id')}}
                                </small>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <transition name="fade">
                <div v-if="customer">
                    <customer-profile :customer="customer"/>
                    <div>
                        <div class="float-left col-lg-3 col-sm-6" v-for="type in cardView">
                            <div class="card card-stats" :class="DivClass(type)">
                                <div class="card-body ">
                                    <div class="statistics statistics-horizontal">
                                        <div class="info info-horizontal">
                                            <div class="row">
                                                <div class="col-4">
                                                    <div class="icon icon-warning icon-circle position-relative">
                                                        <i class="fas" :class="IconClass(type)"></i>
                                                    </div>
                                                </div>
                                                <div class="col-8 text-right">
                                                    <h4 class="info-title font-weight-bold mb-0">{{type | capitalize}}</h4>
                                                    <h6 class="stats-title">
                                                        {{key(type) ? 'Uploaded' : 'Not Uploaded'}}
                                                    </h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-footer pointer" @click="modal(type+'_modal')">
                                    <i class="now-ui-icons ui-1_calendar-60 pr-1"></i>
                                    {{key(type) ? 'Verified' : 'Not Verified'}}
                                    <small>(Click here to update status!)</small>
                                </div>
                            </div>
                        </div>
                        <hr class="style-two">
                    </div>
                </div>
            </transition>
            <div class="modal fade" v-for="type in picsView" :id="type+'_modal'">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header py-2">
                            <h6 class="modal-title py-1">{{type | capitalize}} Verification Status</h6>
                            <a href="javascript:" class="close py-1" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true" class="modal-close text-danger">
                                    <i class="fas fa-times"></i>
                                </span>
                            </a>
                        </div>
                        <form @submit.prevent="save(type,type+'_modal')" v-if="customer">
                            <div class="modal-body">
                                <div class="upload-image p-2">
                                    <div class="upload-box">
                                        <image-upload v-model="$data['form'][type]"/>
                                    </div>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="m-2 btn btn-secondary" data-dismiss="modal">
                                    cancel
                                </button>
                                <button type="submit" class="m-2 btn bg-default" :disabled="$isProcessing">
                                    Save changes <i class="far fa-paper-plane ml-1"></i>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div class="modal fade" id="address_modal">
                <div class="modal-dialog modal-lg">
                    <div class="modal-content">
                        <div class="modal-header py-2">
                            <h6 class="modal-title py-1">Address Verification Status</h6>
                            <a @click="modal('address_modal')" class=" py-1" style="min-height: 30px; min-width: 30px;">
                                <span class="text-danger"><i class="fas fa-times"></i></span>
                            </a>
                        </div>
                        <form @submit.prevent="validate('address')">
                            <div class="modal-body p-5">
                                <div class="w-100 p-3">

                                    <div class="clearfix">
                                        <div class="form-group float-left col-md-6 col-12 pr-md-3 pr-0 pl-0">
                                            <label>Date of Visitation</label>
                                            <input type="date" class="form-control" name="date_of_visit"
                                                   v-model="address.date_of_visit"
                                                   :class="{'is-invalid': errors.first('date_of_visit')}">
                                        </div>
                                        <div class="form-group float-left  col-md-6 col-12  pl-md-3 pl-0 pr-0">
                                            <label>Time of Visit</label>
                                            <input v-model="address.time_of_visit" type="time"
                                                   class="form-control"
                                                   name="time_of_visit"
                                                   :class="{'is-invalid': errors.first('time_of_visit')}">
                                        </div>
                                    </div>

                                    <div class="form-group clearfix">
                                        <label>1. Did you meet the customer?</label>
                                        <span class="radio mx-5">
                                            <input v-model="address.customer_meetup"
                                                   type="radio" name="customer_meetup" id="yes" value="yes">
                                            <label for="yes">Yes</label>
                                        </span>
                                        <span class="radio ml-5">
                                            <input v-model="address.customer_meetup"
                                                   type="radio" name="customer_meetup" id="no" value="no">
                                            <label for="no">No</label>
                                        </span>
                                    </div>

                                    <div class="form-group clearfix">
                                        <label>
                                            2. Is the address/location same with what you have in the application form?
                                        </label>
                                        <span class="radio mx-5">
                                            <input v-model="address.confirm_address"
                                                   name="confirm address" type="radio" id="add_yes" value="yes">
                                            <label for="add_yes">Yes</label>
                                        </span>
                                        <span class="radio ml-5">
                                            <input v-model="address.confirm_address"
                                                   name="confirm address" type="radio" id="add_no" value="no">
                                            <label for="add_no">No</label>
                                        </span>
                                    </div>

                                    <div class="form-group clearfix">
                                        <label>3. What does he/she do or sell?</label>
                                        <input type="text" class="form-control" placeholder="comment here..."
                                               v-model="address.what_he_sells" name="what_he_sells"
                                               :class="{'is-invalid': errors.first('what_he_sells')}">
                                    </div>

                                    <div class="form-group clearfix">
                                        <label>4. Look around the shop and check the nature and condition of the
                                               business. Write down what you see in terms of address, stock value, premise, type of shop or business, sales etc.</label>
                                        <textarea class="form-control"
                                                  placeholder="comment here..."
                                                  rows="1"
                                                  v-model="address.business_info"
                                                  name="business info"
                                                  :class="{'is-invalid': errors.first('business info')}"></textarea>
                                    </div>

                                    <div class="form-group clearfix">
                                        <label>5. Get exact information of choice of product and specification by asking for
                                               Example; what exact phone do you want? Let him/her specify e.g. INFINIX
                                               SMART or HOT 4 IPHONE
                                        </label>
                                        <textarea class="form-control w-100"
                                                  placeholder="comment here..."
                                                  rows="1"
                                                  v-model="address.product_info"
                                                  name="product info"
                                                  :class="{'is-invalid': errors.first('product info')}"></textarea>
                                    </div>

                                    <div class="form-group clearfix">
                                        <label>
                                            6. Are you aware of the payment plan?
                                        </label>
                                        <span class="radio mx-5">
                                        <input v-model="address.aware_of_plan"
                                               name="aware of plan"
                                               type="radio"
                                               id="pay_yes"
                                               value="yes">
                                        <label for="pay_yes">yes</label>
                                        </span>
                                        <span class="radio ml-5">
                                            <input v-model="address.aware_of_plan"
                                                   name="aware of plan"
                                                   type="radio"
                                                   id="pay_no"
                                                   value="no">
                                            <label for="pay_no">no</label>
                                        </span>
                                    </div>

                                    <div class="form-group clearfix">
                                        <label>
                                            7. Did you get information about the customer from his/her neighbours?
                                        </label>
                                        <span class="radio mx-5">
                                            <input v-model="info_from_neighbors"
                                                   name="info from neighbors"
                                                   type="radio"
                                                   id="neigh_yes"
                                                   value="yes">
                                            <label for="neigh_yes">yes</label>
                                        </span>
                                        <span class="radio ml-5">
                                            <input v-model="info_from_neighbors"
                                                   name="info from neighbors"
                                                   type="radio"
                                                   id="neigh_no"
                                                   value="no">
                                            <label for="neigh_no">no</label>
                                        </span>

                                        <textarea v-if="info_from_neighbors == 'yes'" class="form-control"
                                                  placeholder="comment here..."
                                                  rows="1"
                                                  v-model="address.info_from_neighbors_desc"
                                                  name="neighbors description"
                                                  :class="{'is-invalid': errors.first('neighbors description')}"></textarea>
                                    </div>

                                    <div class="form-group clearfix">
                                        <label>8. And how long has he/she been working/trading in that particular place?
                                        </label>
                                        <textarea class="form-control"
                                                  placeholder="address"
                                                  rows="1"
                                                  v-model="address.business_or_work_duration"
                                                  name="business or work duration"
                                                  :class="{'is-invalid': errors.first('business or work duration')}"></textarea>
                                    </div>

                                    <div v-if="addressBtns">
                                        <div class="w-100 clearfix">
                                            <button type="submit"
                                                    @click="address.approval_status = 1"
                                                    class="btn btn-success btn-lg btn-block"
                                                    :disabled="$isProcessing">
                                                Successful - Update Details
                                                <i class="far fa-paper-plane ml-1"></i>
                                            </button>
                                        </div>

                                        <div class="pt-2 w-100 clearfix">
                                            <div class="pr-2 pl-md-0 pl-2 col-md-6 col-12 m-0 float-left">
                                                <button type="button"
                                                        @click="modal('address_modal')"
                                                        class="m-0 btn btn-lg btn-block btn-secondary">
                                                    Cancel
                                                </button>
                                            </div>
                                            <div class="pl-2 pr-md-0 pr-2 col-md-6 col-12 float-left">
                                                <button type="submit"
                                                        @click="address.approval_status = 0"
                                                        class="m-0 btn btn-lg btn-block btn-primary"
                                                        :disabled="$isProcessing">
                                                    Not-Successful - Update Details
                                                    <i class="far fa-paper-plane ml-1"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <h5 v-else>
                                        This Customer's
                                        {{ key('address_status') ? 'Passed' : 'Failed '}} Address Verification!
                                    </h5>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div class="modal fade" v-for="type in veriView" :id="type+'_modal'">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header py-2">
                            <h6 class="modal-title py-1">{{type | capitalize }} Verification Status</h6>
                            <a href="javascript:" class="close py-1" data-dismiss="modal" aria-label="Close">
                                <span class="modal-close text-danger"><i class="fas fa-times"></i></span>
                            </a>
                        </div>
                        <form @submit.prevent="validate(type)" v-if="customer">
                            <div class="modal-body">
                                <div class="form-group col-12 px-2 float-left mt-0 mb-2">
                                    <div class="clearfix">
                                        <div class="form-group float-left col-md-6 col-12 pr-md-3 pr-0 pl-0">
                                            <label>Date of Visitation</label>
                                            <input type="date" class="form-control" v-model="$data[type].date_of_call">
                                        </div>
                                        <div class="form-group float-left col-md-6 col-12 pl-md-3 pl-0 pr-0">
                                            <label>Time of Visit</label>
                                            <input type="time" class="form-control" v-model="$data[type].time_of_call">
                                        </div>
                                    </div>
                                    <div class="clearfix">
                                        <label class="w-100">{{type | capitalize }} Consent</label>
                                        <div class="radio p-0 col-6 float-left">
                                            <input v-model="$data[type].consent" type="radio" :id="type+'_yes'"
                                                   value="1" :name="type">
                                            <label :for="type+'_yes'">Gave Consent</label>
                                        </div>
                                        <div class="radio p-0 col-6 float-left">
                                            <input v-model="$data[type].consent" type="radio" :id="type+'_no'"
                                                   value="0" :name="type">
                                            <label :for="type+'_no'">Did not Give Consent</label>
                                        </div>
                                    </div>
                                    <div class="form-group clearfix">
                                        <label>Report</label>
                                        <textarea class="form-control w-100" placeholder="comment here..." rows="3"
                                                  v-model="$data[type].report"></textarea>
                                    </div>
                                </div>
                            </div>
                            <div class="modal-footer" v-if="$data[type+'Btns']">
                                <button type="button" class="m-2 btn btn-secondary" data-dismiss="modal">cancel</button>
                                <button type="submit" class="m-2 btn bg-default" :disabled="$isProcessing">
                                    Save changes <i class="far fa-paper-plane ml-1"></i>
                                </button>
                            </div>
                            <div class="modal-footer" v-else>
                                <h5>This customers details has already been updated once and cannot be changed!</h5>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>
<script>
    import {log} from '../../../helpers/log';
    import Flash from '../../../helpers/flash';
    import {get, post} from '../../../helpers/api';
    import {toMulipartedForm} from '../../../helpers/form';
    import ImageUpload from '../../../components/ImageUpload';
    import CustomerProfile from '../../../components/customerProfile';

    export default {
        components: {
            ImageUpload,
            CustomerProfile,
        },
        data() {
            return {
                customer: null,
                customer_id: '',
                addressBtns: true,
                work_guarantorBtns: true,
                personal_guarantorBtns: true,
                info_from_neighbors: '',
                address: {},
                work_guarantor: {},
                personal_guarantor: {},
                picsView: ['id_card', 'passport'],
                veriView: ['work_guarantor', 'personal_guarantor'],
                veriData: ['address', 'work_guarantor', 'personal_guarantor'],
                cardView: ['passport', 'id_card', 'address', 'work_guarantor', 'personal_guarantor'],
                verification: {},
                form: {id_card: '', passport: '', document: ''},
                error: {},
                storeURL: '',
            }
        },
        methods: {
            modal(name) {
                $('#' + name).modal('toggle');
            },
            key(key) {
                if (this.customer.verification[key] == 1) return true;
                if (this.customer.verification[key] == 0) return false;
            },
            IconClass(key) {
                return {
                    'fa-check': this.key(key), 'fa-times': !this.key(key)
                }
            },
            DivClass(key) {
                return {
                    'success': this.key(key), 'no-success': !this.key(key)
                }
            },
            returnToInitialValues() {
                this.verification = JSON.parse(JSON.stringify(this.customer.verification));
            },
            buttonStatus(data) {
                this.customer = data.customer;
                this.verification = JSON.parse(JSON.stringify(data.customer.verification));
                this.form.id_card = data.customer.document.id_card_url;
                this.form.passport = data.customer.document.passport_url;
                for (let i = 0; i < this.veriData.length; i++) {
                    let type = this.veriData[i];
                    if (!!data.customer[type]) {
                        this[type] = data.customer[type];
                        this[type + 'Btns'] = false;
                    } else {
                        this[type] = data['empty_' + type];
                        this[type + 'Btns'] = true;
                    }
                }
            },
            fetchCustomer() {
                if (this.$network()) {
                    this.$LIPS(true);
                    get('/api/customer/' + this.customer_id)
                        .then(res => {
                            this.buttonStatus(res.data);
                            this.$LIPS(false);
                        })
                        .catch(err => {
                            this.$LIPS(false);
                            this.$scrollToTop();
                            this.customer = null;
                            (err.response.status === 422) ? Flash.setError(err.response.data.message)
                                : Flash.setError('Error trying to get customer details please try again shortly!');
                        })
                } else this.$networkErr();
            },
            validate(type) {
                if (this.$network()) {
                    this.$LIPS(true);
                    (this.info_from_neighbors === 'no') ? this.address.info_from_neighbors_desc = '' : '';
                    this[type].customer_id = this.customer.id;
                    this[type].user_id = this.customer.user.id;
                    this[type].staff_name = this.customer.user.full_name;
                    post('/api/' + type, this[type])
                        .then(res => {
                            this.buttonStatus(res.data.response);
                            let id = 'Customer ID : ' + String(this.customer.id),
                                typeCaps = this.$options.filters.capitalize(type),
                                action = 'Customer' + typeCaps + 'Verification';
                            if (type === 'address')
                                (this.address.approval_status === 1) ? action += 'Passed' : action += 'NotPassed';
                            log(action, id);
                            Flash.setSuccess(typeCaps + ' status updated!');
                            this.modal(type + '_modal');
                            this.$LIPS(false);
                            this.$scrollToTop();
                        })
                        .catch(err => {
                            this.$LIPS(false);
                            this.$scrollToTop();
                            Flash.setError(err.response.data.message);
                        });
                } else this.$networkErr();
            },
            save(document, modal) {
                this.storeURL = `api/document/${this.customer.document.id}?_method=PUT&document=${document}`;
                this.$LIPS(true);
                this.form.document = document;
                const form = toMulipartedForm(this.form, 'edit');
                post(this.storeURL, form).then((res) => {
                    this.buttonStatus(res.data.response);
                    log('Customer' + this.$options.filters.capitalize(document) + 'Upload',
                        'Customer ID : ' + String(this.customer.id));
                    this.modal(modal);
                    this.$LIPS(false);
                    this.$scrollToTop();
                    Flash.setSuccess('Document Updated Successfully!');
                }).catch((err) => {
                    this.error = err.response.data.errors;
                    this.$LIPS(false);
                    this.$scrollToTop();
                })
            },
        },
        computed: {
            check() {
                return (!(!(this.$isProcessing) && (!!this.customer_id)));
            },
        },
        mounted() {
            $(document).on("hidden.bs.modal", '.modal', this.returnToInitialValues);
        },
    }
</script>
<style scoped type="scss">
    .card-stats .icon {
        margin : 0 1.5rem;
    }

    .info .icon.icon-circle {
        width         : 8rem;
        height        : 8rem;
        border-radius : 50%;
    }

    .info-horizontal .icon.icon-circle i {
        display     : table;
        margin      : 0 auto;
        line-height : 8rem;
        font-size   : 2.4rem;
    }

    .stats-title {
        font-weight : 300;
        font-size   : 1.2rem;
    }

    .card-footer:hover {
        background-image : linear-gradient(to bottom, rgb(255, 255, 255), #eeeeee);
    }

    h4.info-title {
        margin    : 0;
        font-size : 2.2rem;
    }

    .no-success .icon.icon-warning.icon-circle {
        border     : 1px solid #b30000;
        box-shadow : 0 .9rem 1.5rem -.6rem rgba(179, 0, 0, 0.5) !important;
    }

    .success .icon.icon-warning.icon-circle {
        border     : 1px solid #488413;
        box-shadow : 0 .9rem 1.5rem -.6rem rgba(72, 132, 19, 0.5) !important;
    }

    .card.card-stats::before {
        content  : '';
        width    : 3px;
        height   : 100%;
        position : absolute;
        left     : 0;
        top      : 0;
    }

    .success::before {
        background : linear-gradient(45deg, #8ef985 0%, #01af13 100%);
    }

    .no-success::before {
        background : linear-gradient(45deg, #ff9b83 0%, #a40000 100%);
    }

    .success i {
        color : #63b61a;
    }

    .no-success i {
        color : #c70000;
    }
</style>