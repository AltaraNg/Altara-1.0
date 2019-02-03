<template>
    <transition name="fade">
        <div class="pt-md-3 pt-2 verification" id="employeeRegister">
            <div class="card">
                <ul class="nav nav-tabs bg-default justify-content-center"><h6>{{action | capitalize}} Customer</h6>
                </ul>
                <div class="card-body p-4">
                    <form @submit.prevent="fetchCustomer">
                        <div class="m-0 p-0 col-12 form-group clearfix">
                            <label class="w-100">Customer ID</label>
                            <input class="form-control col-lg-9 col-md-8 col-sm-8 col-12 float-left mt-1"
                                   v-model="customer_id"
                                   v-validate="'required|numeric'"
                                   data-vv-as="customer id"
                                   name="customer_id"
                                   @onkeyUp="check">
                            <div
                                    class="col-lg-3 col-md-4 col-sm-4 col-12 float-right px-md-3 mt-md-0 px-sm-3 mt-sm-0 mt-2 px-0">
                                <button type="submit" class="btn btn-block bg-default my-1" :disabled="check">
                                    Fetch customer details <i class="far fa-paper-plane ml-1"></i>
                                </button>
                            </div>
                            <small class="form-text text-muted w-100" v-if="errors.first('customer_id')">
                                {{errors.first('customer_id')}}
                            </small>
                        </div>
                    </form>
                </div>
            </div>
            <transition name="fade">
                <div v-if="customer">
                    <customer-profile :customer="customer"/>
                    <div v-if="action !== 'update'">
                        <div class="float-left col-lg-3 col-sm-6 px-0 px-sm-3" v-for="type in cardView">
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
                                                        {{key(type) ? 'Verified' : 'Not Verified'}}
                                                    </h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-footer pointer" @click="modal(type+'_modal')">
                                    <i class="now-ui-icons ui-1_calendar-60 pr-1"></i>
                                    {{key(type) ? 'Verified' : 'Not Verified'}}
                                    <small v-if="! key(type)">(Click here to update status!)</small>
                                    <span style="font-size: 10px" v-else class="float-right">
                                        by - {{type == 'passport' || type == 'id_card' ?
                                        customer['document'].staff_name : customer[type].staff_name | capitalize}}
                                    </span>
                                </div>
                            </div>
                        </div>
                        <hr class="style-two">
                    </div>
                </div>
            </transition>
            <div v-if="action !== 'update'">
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
                                    <small v-if="error[type]">{{error[type][0]}}</small>
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
                                <a @click="modal('address_modal')" class=" py-1"
                                   style="min-height: 30px; min-width: 30px;">
                                    <span class="text-danger"><i class="fas fa-times"></i></span>
                                </a>
                            </div>
                            <form @submit.prevent="validate('address')" :data-vv-scope="'address'">
                                <div class="modal-body p-5">
                                    <table class="mb-3 w-100">
                                        <tbody class="px-3">
                                        <tr>
                                            <th><i class="fas fa-map-marker-alt mx-4"></i></th>
                                            <td>{{customerAddress}}</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                    <div class="w-100 p-3">
                                        <div class="clearfix">
                                            <div class="form-group float-left col-md-6 col-12 pr-md-3 pr-0 pl-0">
                                                <label>Date of Visitation</label>
                                                <input type="date" class="form-control" name="date_of_visit"
                                                       v-model="address.date_of_visit" v-validate="'required'"
                                                       data-vv-as="date of visit">

                                                <small v-if="errors.first('address.date_of_visit')">
                                                    {{errors.first('address.date_of_visit')}}
                                                </small>
                                            </div>
                                            <div class="form-group float-left  col-md-6 col-12  pl-md-3 pl-0 pr-0">
                                                <label>Time of Visit</label>
                                                <input v-model="address.time_of_visit" type="time"
                                                       class="form-control" v-validate="'required'"
                                                       name="time_of_visit" data-vv-as="time of visit">
                                                <small v-if="errors.first('address.time_of_visit')">
                                                    {{errors.first('address.time_of_visit')}}
                                                </small>
                                            </div>
                                        </div>

                                        <div class="form-group clearfix">
                                            <label>1. Did you meet the customer?</label>
                                            <span class="radio mx-5">
                                                <input v-model="address.customer_meetup"
                                                       type="radio" name="customer_meetup" id="yes" value="yes"
                                                       v-validate="'required'" data-vv-as="customer meetup">
                                                <label for="yes">Yes</label>
                                            </span>
                                            <span class="radio ml-5">
                                                <input v-model="address.customer_meetup"
                                                       type="radio" name="customer_meetup" id="no" value="no">
                                                <label for="no">No</label>
                                            </span>

                                            <small v-if="errors.first('address.customer_meetup')">
                                                {{errors.first('address.customer_meetup')}}
                                            </small>
                                        </div>

                                        <div class="form-group clearfix">
                                            <label>
                                                2. Is the address/location same with what you have in the application form?
                                            </label>
                                            <span class="radio mx-5">
                                                <input v-model="address.confirm_address" v-validate="'required'"
                                                       data-vv-as="confirm address"
                                                       name="confirm_address" type="radio" id="add_yes" value="yes">
                                                <label for="add_yes">Yes</label>
                                            </span>
                                            <span class="radio ml-5">
                                                <input v-model="address.confirm_address"
                                                       name="confirm_address" type="radio" id="add_no" value="no">
                                                <label for="add_no">No</label>
                                            </span>
                                            <small v-if="errors.first('address.confirm_address')">
                                                {{errors.first('address.confirm_address')}}
                                            </small>
                                        </div>

                                        <div class="form-group clearfix">
                                            <label>3. What does he/she do or sell?</label>
                                            <input type="text" class="form-control" placeholder="comment here..."
                                                   v-model="address.what_he_sells" name="what_he_sells"
                                                   v-validate="'required'"
                                                   data-vv-as="what he sells">
                                            <small v-if="errors.first('address.what_he_sells')">
                                                {{errors.first('address.what_he_sells')}}
                                            </small>
                                        </div>

                                        <div class="form-group clearfix">
                                            <label>4. Look around the shop and check the nature and condition of the
                                                   business. Write down what you see in terms of address, stock value, premise, type of shop or business, sales etc.</label>
                                            <textarea class="form-control"
                                                      placeholder="comment here..."
                                                      rows="1" v-validate="'required'"
                                                      v-model="address.business_info"
                                                      name="business_info" data-vv-as="business info"></textarea>
                                            <small v-if="errors.first('address.business_info')">
                                                {{errors.first('address.business_info')}}
                                            </small>
                                        </div>

                                        <div class="form-group clearfix">
                                            <label>5. Get exact information of choice of product and specification by asking for
                                                   Example; what exact phone do you want? Let him/her specify e.g. INFINIX
                                                   SMART or HOT 4 IPHONE
                                            </label>
                                            <textarea class="form-control w-100"
                                                      placeholder="comment here..."
                                                      rows="1" v-validate="'required'" data-vv-as="product info"
                                                      v-model="address.product_info"
                                                      name="product_info"></textarea>
                                            <small v-if="errors.first('address.product_info')">
                                                {{errors.first('address.product_info')}}
                                            </small>
                                        </div>

                                        <div class="form-group clearfix">
                                            <label>
                                                6. Are you aware of the payment plan?
                                            </label>
                                            <span class="radio mx-5">
                                                <input v-model="address.aware_of_plan"
                                                       name="aware_of_plan"
                                                       type="radio" v-validate="'required'" data-vv-as="aware of plan"
                                                       id="pay_yes"
                                                       value="yes">
                                                <label for="pay_yes">yes</label>
                                            </span>
                                            <span class="radio ml-5">
                                                <input v-model="address.aware_of_plan"
                                                       name="aware_of_plan"
                                                       type="radio"
                                                       id="pay_no"
                                                       value="no">
                                                <label for="pay_no">no</label>
                                            </span>
                                            <small v-if="errors.first('address.aware_of_plan')">
                                                {{errors.first('address.aware_of_plan')}}
                                            </small>
                                        </div>

                                        <div class="form-group clearfix">
                                            <label>
                                                7. Did you get information about the customer from his/her neighbours?
                                            </label>
                                            <span class="radio mx-5">
                                                <input v-model="info_from_neighbors"
                                                       name="info_from_neighbors"
                                                       type="radio" v-validate="'required'"
                                                       data-vv-as="info from neighbors"
                                                       id="neigh_yes"
                                                       value="yes">
                                                <label for="neigh_yes">yes</label>
                                            </span>
                                            <span class="radio ml-5">
                                                <input v-model="info_from_neighbors"
                                                       name="info_from_neighbors"
                                                       type="radio"
                                                       id="neigh_no"
                                                       value="no">
                                                <label for="neigh_no">no</label>
                                            </span>
                                            <small
                                                    v-if="errors.first('address.info_from_neighbors')">
                                                {{errors.first('address.info_from_neighbors')}}
                                            </small>

                                            <div v-if="info_from_neighbors == 'yes'">
                                                <textarea class="form-control"
                                                          placeholder="comment here..."
                                                          rows="1" v-validate="'required'"
                                                          v-model="address.info_from_neighbors_desc"
                                                          name="info_from_neighbors_desc"
                                                          data-vv-as="info from neighbors desc"></textarea>
                                                <small v-if="errors.first('address.info_from_neighbors_desc')">
                                                    {{errors.first('address.info_from_neighbors_desc')}}
                                                </small>
                                            </div>

                                        </div>

                                        <div class="form-group clearfix">
                                            <label>8. And how long has he/she been working/trading in that particular place?
                                            </label>
                                            <textarea class="form-control"
                                                      placeholder="address"
                                                      rows="1" v-validate="'required'"
                                                      v-model="address.business_or_work_duration"
                                                      name="business_or_work_duration"
                                                      data-vv-as="business or work duration"></textarea>
                                            <small v-if="errors.first('address.business_or_work_duration')">
                                                {{errors.first('address.business_or_work_duration')}}
                                            </small>
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
                                            This customers details has already been updated once and cannot be changed!
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
                                <h6 class="modal-title py-1">
                                    {{type | capitalize }} {{(type !== 'processing_fee') ? 'Verification' : ''}} Status
                                </h6>
                                <a href="javascript:" class="close py-1" data-dismiss="modal" aria-label="Close">
                                    <span class="modal-close text-danger"><i class="fas fa-times"></i></span>
                                </a>
                            </div>
                            <form @submit.prevent="validate(type)" v-if="customer" :data-vv-scope="type">
                                <div class="modal-body">
                                    <table class="mb-3" v-if="type !== 'processing_fee'">
                                        <tbody>
                                        <tr>
                                            <th><i class="fas fa-map-marker-alt"></i></th>
                                            <td v-if="customer[type+'_state']">{{$data[type+'_address']}}</td>
                                            <td v-else>please update customer details!</td>
                                        </tr>
                                        <tr>
                                            <th><i class="fas fa-mobile-alt"></i></th>
                                            <td v-if="customer[type+'_telno']">{{customer[type+'_telno']}}</td>
                                            <td v-else>please update customer details!</td>
                                        </tr>
                                        <tr>
                                            <th><i class=" fas fa-user-circle"></i></th>
                                            <td v-if="customer[type+'_first_name']">
                                                {{`${customer[type+'_first_name']} ${customer[type+'_last_name']}`}}
                                            </td>
                                            <td v-else>please update customer details!</td>
                                        </tr>
                                        <tr>
                                            <th><i class="fas fa-user-circle"></i></th>
                                            <td v-if="customer[type+'_relationship']">{{customer[type+'_relationship'] | capitalize}}</td>
                                            <td v-else>please update customer details!</td>
                                        </tr>
                                        </tbody>
                                    </table>

                                    <div class="form-group col-12 px-2 clearfix my-0">
                                        <div class="clearfix">
                                            <div class="form-group float-left col-md-6 col-12 pr-md-3 pr-0 pl-0">
                                                <label>
                                                    Date {{(type !== 'processing_fee') ? 'of Call' : 'Collected'}}
                                                </label>
                                                <input v-if="type !== 'processing_fee'" type="date" class="form-control"
                                                       v-model="$data[type].date_of_call" v-validate="'required'"
                                                       name="date_of_call">
                                                <input v-else type="date" class="form-control"
                                                       v-model="$data[type].date_collected" v-validate="'required'"
                                                       name="date_of_call">

                                                <small v-if="errors.first(type+'.date_of_call')">
                                                    {{errors.first(type+'.date_of_call')}}
                                                </small>

                                                <small v-if="errors.first(type+'.date_collected')">
                                                    {{errors.first(type+'.date_collected')}}
                                                </small>

                                            </div>
                                            <div class="form-group float-left col-md-6 col-12 pl-md-3 pl-0 pr-0">
                                                <label>
                                                    Time {{(type !== 'processing_fee') ? 'of Call' : 'Collected'}}
                                                </label>
                                                <input v-if="type !== 'processing_fee'" type="time" class="form-control"
                                                       v-model="$data[type].time_of_call"
                                                       name="time_of_call" v-validate="'required'">
                                                <input v-else type="time" class="form-control"
                                                       v-model="$data[type].time_collected"
                                                       name="time_collected" v-validate="'required'">


                                                <small v-if="errors.first(type+'.time_of_call')">
                                                    {{errors.first(type+'.time_of_call')}}
                                                </small>

                                                <small v-if="errors.first(type+'.time_collected')">
                                                    {{errors.first(type+'.time_collected')}}
                                                </small>

                                            </div>
                                        </div>
                                        <div class="clearfix">
                                            <label class="w-100">
                                                {{type | capitalize }}
                                                {{(type !== 'processing_fee') ? 'Consent' : 'Amount(Naira)'}}
                                            </label>
                                            <div v-if="type !== 'processing_fee'">
                                                <div class="radio p-0 col-6 float-left">
                                                    <input v-model="$data[type].consent" type="radio" :id="type+'_yes'"
                                                           value="1" name="consent" v-validate="'required'">
                                                    <label :for="type+'_yes'">Gave Consent</label>
                                                </div>
                                                <div class="radio p-0 col-6 float-left">
                                                    <input v-model="$data[type].consent" type="radio" :id="type+'_no'"
                                                           value="0" name="consent">
                                                    <label :for="type+'_no'">Did not Give Consent</label>
                                                </div>
                                                <small v-if="errors.first(type+'.consent')">
                                                    {{errors.first(type+'.consent')}}
                                                </small>
                                            </div>


                                            <div v-else>
                                                <div class="radio p-0 col-6 float-left">
                                                    <input v-model="$data[type].amount" class="form-control"
                                                           type="number" disabled name="amount" v-validate="'required'">
                                                </div>
                                                <small v-if="errors.first(type+'.amount')">
                                                    {{errors.first(type+'.amount')}}
                                                </small>
                                            </div>
                                        </div>
                                        <div class="clearfix">
                                            <label>Report</label>
                                            <textarea class="form-control w-100" placeholder="comment here..." rows="3"
                                                      v-model="$data[type].report" v-validate="'required'"
                                                      name="report"></textarea>
                                            <small v-if="errors.first(type+'.report')">
                                                {{errors.first(type+'.report')}}
                                            </small>
                                        </div>
                                    </div>
                                </div>
                                <div class="modal-footer" v-if="$data[type+'Btns']">
                                    <button type="button" class="m-2 btn btn-secondary" data-dismiss="modal">cancel
                                    </button>
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
        props: {
            action: {default: 'verify'}
            /*by default this component is used for dva verifications purposed but its customer search feature and
            * customer profile display feature is borrowed by other component to avoid duplication of
            * features hence the props: action is 'verify by default.'*/
        },
        components: {
            ImageUpload,
            /*the image upload is used for the customer id and passport upload.
            * its a separate component on its own and can be called
            * anywhere on the application*/
            CustomerProfile
        },
        data() {
            return {
                customer: null,
                customer_id: '',
                addressBtns: true,
                work_guarantorBtns: true,
                personal_guarantorBtns: true,
                processing_feeBtns: true,
                info_from_neighbors: '',
                address: {},
                work_guarantor: {},
                personal_guarantor: {},
                processing_fee: {},
                picsView: ['id_card', 'passport'],
                veriView: ['work_guarantor', 'personal_guarantor', 'processing_fee'],
                veriData: ['address', 'work_guarantor', 'personal_guarantor', 'processing_fee'],
                cardView: ['passport', 'id_card', 'address', 'work_guarantor', 'personal_guarantor', 'processing_fee'],
                verification: {},
                form: {id_card: '', passport: '', document: ''},
                error: {},
                storeURL: '',
                user: {},
                customerAddress: '',
                work_guarantor_address: '',
                personal_guarantor_address: ''
            }
        },
        methods: {
            modal(name) {
                $(`#${name}`).modal('toggle');
                /*this method is used to automatically
                * toggle the modal with the id of
                * "name passed to it"*/
                this.errors.clear(name);
            },
            key(key) {
                return ((this.customer.verification[key]));
                /*the 'key' is a value that exists in the cardView array. anytime its called it checks the the customer
                * to know the status of that particular parameter eg. is the passport have not been uploaded
                * it will be 0 else 1 if uploaded with will return true */
            },
            IconClass(key) {
                return {
                    'fa-check': this.key(key), 'fa-times': !this.key(key)
                }
                /*return the 'fa-check' css class is that particular
                * card param is set to 1 else the 'fa-times'
                * css class ie false */
            },
            DivClass(key) {
                return {
                    'success': this.key(key), 'no-success': !this.key(key)
                }
                /*this is similar to the DivClass method only
                * that it return a different class
                * success and no-success*/
            },
            returnToInitialValues() {
                this.verification = JSON.parse(JSON.stringify(this.customer.verification));
                /*this.verification holds a copy of the this.customer.verification. this.verification is what is used to style
                * the card. this.customer.verification on the other hand is used to calculate the approval status, when
                * changing the status on the front end the this.verification is what is changed but when it is
                * reflected in the backend then the changes will be reflected on this.customer.verification
                * after going to database and returning the data again. NB: the purpose of this method
                * is revert the values of the this.verification to this.customer.verification
                * values, when a user selects a different option but doesn't submit
                * it after opening and closing the modal responsible for that
                * particular action*/
            },
            buttonStatus(data) {
                this.$emit('update', data.customer);
                /*$emit update event is used to send data to the parent component where this serves as a child
                * component. eg. dsa utility form. NB: The customer registration component(form)
                * is used as the customer update form for both dsa and dva portal.*/
                this.user = data.hasOwnProperty('user') ? data.user : null;
                this.customer = data.customer;
                if (data.customer != '') {
                    this.verification = JSON.parse(JSON.stringify(data.customer.verification));
                    this.form.id_card = data.customer.document.id_card_url;
                    this.form.passport = data.customer.document.passport_url;
                    this.customerAddress =
                        `${this.customer.add_houseno}
                        ${this.customer.add_street}
                        ${this.customer.area_address}
                        ${this.customer.city}
                        ${this.customer.state}`;
                    this.work_guarantor_address =
                        `${this.customer.guaadd_houseno},
                        ${this.customer.guaadd_street},
                        ${this.customer.gua_area},
                        ${this.customer.work_guarantor_city},
                        ${this.customer.work_guarantor_state}`;
                    this.personal_guarantor_address =
                        `${this.customer.pguaadd_houseno},
                        ${this.customer.pguaadd_street},
                        ${this.customer.pgua_area},
                        ${this.customer.personal_guarantor_city},
                        ${this.customer.personal_guarantor_state}`;
                    this.veriData.forEach(e => {
                        //e is the current array element during the foreach call;
                        this[`${e}Btns`] = !(!!data.customer[e]);
                        //eg this.work_guarantorBtns = if (data.customer.work_guarantor) {return true} else {return false}
                        //and anything the if return will be inverted.
                        this[e] = !!data.customer[e] ? data.customer[e] : data[`empty_${e}`];
                        //eg this.work_guarantor = if(data.customer.work_guarantor){ return data.customer.work_guarantor }
                        // else {return data.empty_work_guarantor}
                        //the empty_work_guarantor is returned from backend when no work guarantor has been added.
                    })
                }
            },
            async fetchCustomer() {
                if (this.$network()) {
                    this.$LIPS(true);
                    await get(`/api/customer/${this.customer_id}`)
                        .then(res => this.buttonStatus(res.data))
                        .catch(e => {
                            e = e.response;
                            if (e.status === 422) this.buttonStatus(e.data);
                            Flash.setError(e.data.message);
                        });
                    this.$scrollToTop();
                    this.$LIPS(false);
                } else this.$networkErr();
            },
            validate(type) {
                let acc = this.$editAccess(this.user, this.customer);
                if (acc) {
                    if (this.$network()) {
                        this.$LIPS(true);
                        if ((this.veriView.includes(type)) && !(this.customer.work_guarantor_first_name)) {
                            this.modal(`${type}_modal`);
                            this.$LIPS(false);
                            this.$scrollToTop();
                            Flash.setError('Can not process verification. Update the customer guarantors details and try again!', 10000);
                            return;
                        }
                        (this.info_from_neighbors === 'no') ? this.address.info_from_neighbors_desc = '' : '';
                        this[type].customer_id = this.customer.id;
                        this[type].user_id = this.user.id;
                        this[type].staff_name = this.user.full_name;
                        this.$validator.validateAll(type).then(async result => {
                            if (result) {
                                await post(`/api/${type}`, this[type])
                                    .then(res => {
                                        this.buttonStatus(res.data.response);
                                        let id = `Customer ID : ${this.customer.id}`,
                                            typeCaps = this.$options.filters.capitalize(type),
                                            action = `Customer${typeCaps}Verification`;
                                        if (type === 'address')
                                            action += this.address.approval_status ? 'Passed' : 'NotPassed';
                                        log(action, id);
                                        Flash.setSuccess(`${typeCaps} status updated!`);
                                        this.modal(`${type}_modal`);
                                    })
                                    .catch(e => Flash.setError(e.response.data.message));
                                this.$LIPS(false);
                                this.$scrollToTop();
                            }else this.$networkErr('form');
                        });
                    } else this.$networkErr();
                } else {
                    this.$networkErr('edit');
                    $('.modal').modal('hide')
                }
            },
            async save(document, modal) {
                let acc = this.$editAccess(this.user, this.customer);
                if (acc) {
                    this.storeURL = `/api/document/${this.customer.document.id}?_method=PUT&document=${document}`;
                    this.$LIPS(true);
                    this.form.document = document;
                    const form = toMulipartedForm(this.form, 'edit');
                    await post(this.storeURL, form).then(res => {
                        this.buttonStatus(res.data.response);
                        log(`Customer${this.$options.filters.capitalize(document)}Upload`, `Customer ID : ${this.customer.id}`);
                        this.modal(modal);
                        Flash.setSuccess('Document Updated Successfully!');
                    }).catch(e => this.error = e.response.data.errors);
                    this.$LIPS(false);
                    this.$scrollToTop();
                } else {
                    this.$networkErr('edit');
                    $('.modal').modal('hide')
                }
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
<style scoped lang="scss">
    tr {
        margin-bottom    : .4rem;
        float            : left;
        width            : 100%;
        font-weight      : 400;
        background-color : rgba(7, 74, 116, .1);
    }

    tbody tr th {
        width        : 4rem;
        text-align   : center;
        border-right : .4rem solid white;
        border-left  : .3rem solid rgba(7, 74, 116, .7);
    }

    tbody tr td {
        padding : .4rem 1.5rem;
    }

    .verification {
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
    }

</style>