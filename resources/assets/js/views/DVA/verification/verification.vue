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
                                <input class="form-control col-lg-9 col-md-8 col-12 float-left mt-1"
                                       v-model="customer_id"
                                       v-validate="'required|numeric'"
                                       data-vv-as="customer id"
                                       name="customer_id"
                                       @onkeyUp="check"
                                       :class="{'is-invalid': errors.first('customer_id')}">
                                <div class="col-lg-3 col-md-4 col-12 float-right px-md-3 mt-md-0 mt-2 px-0">
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
                <div v-if="!!customer">
                    <div class="px-3">
                        <div class="card">
                            <div class="card-body p-4">
                                <h5 class="card-title mb-4">
                                    <span>
                                        <small style="font-size: 1rem">Customer's Name :</small>
                                        {{(customer.first_name + ' '+ customer.last_name) | capitalize}}
                                    </span>
                                    <span class="float-right">
                                        <small style="font-size: 1rem">Registered by: </small>
                                        {{customer.user.full_name | capitalize}}
                                    </span>
                                </h5>
                                <table class="table  table-responsive m-0">
                                    <thead>
                                    <tr>
                                        <th scope="col">Customer ID</th>
                                        <th scope="col">Phone Number</th>
                                        <th scope="col">Gender</th>
                                        <th scope="col">Employment Status</th>
                                        <th scope="col">Date Registered</th>
                                        <th scope="col">Address</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>{{customer.id}}</td>
                                        <td>{{customer.telephone}}</td>
                                        <td>{{customer.gender | capitalize}}</td>
                                        <td>{{customer.employment_status | capitalize}}</td>
                                        <td>{{customer.Date_of_Registration}}</td>
                                        <td>
                                            {{customer.add_houseno + ', ' +
                                            customer.add_street + ', ' +
                                            customer.area_address + ', ' +
                                            customer.city + ', ' +
                                            customer.state + ', ' | capitalize
                                            }}
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="float-left col-lg-3 col-sm-6">
                            <div class="card card-stats" :class="DivClass('passport')">
                                <div class="card-body ">
                                    <div class="statistics statistics-horizontal">
                                        <div class="info info-horizontal">
                                            <div class="row">
                                                <div class="col-4">
                                                    <div class="icon icon-warning icon-circle">
                                                        <i class="fas" :class="IconClass('passport')"></i>
                                                    </div>
                                                </div>
                                                <div class="col-8 text-right">
                                                    <h4 class="info-title font-weight-bold mb-0">Passport</h4>
                                                    <h6 class="stats-title">
                                                        {{key('passport') ? 'Uploaded' : 'Not Uploaded'}}
                                                    </h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-footer pointer" @click="modal('passportModal')">
                                    <i class="now-ui-icons ui-1_calendar-60 pr-1"></i>
                                    {{key('passport') ? 'Verified' : 'Not Verified'}}
                                    <small>(Click here to update status!)</small>
                                </div>
                            </div>
                        </div>

                        <div class="float-left col-lg-3 col-sm-6">
                            <div class="card card-stats" :class="DivClass('id_card')">
                                <div class="card-body">
                                    <div class="statistics statistics-horizontal">
                                        <div class="info info-horizontal">
                                            <div class="row">
                                                <div class="col-4">
                                                    <div class="icon icon-warning icon-circle">
                                                        <i class="fas" :class="IconClass('id_card')"></i>
                                                    </div>
                                                </div>
                                                <div class="col-8 text-right">
                                                    <h4 class="info-title font-weight-bold mb-0">ID Card</h4>
                                                    <h6 class="stats-title">
                                                        {{key('id_card') ? 'Uploaded' : 'Not Uploaded'}}
                                                    </h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-footer pointer" @click="modal('IDCardModal')">
                                    <i class="now-ui-icons ui-1_calendar-60 pr-1"></i>
                                    {{key('id_card') ? 'Verified' : 'Not Verified'}}
                                    <small>(Click here to update status!)</small>
                                </div>
                            </div>
                        </div>

                        <div class="float-left col-lg-3 col-sm-6">
                            <div class="card card-stats" :class="DivClass('address_status')">
                                <div class="card-body">
                                    <div class="statistics statistics-horizontal">
                                        <div class="info info-horizontal">
                                            <div class="row">
                                                <div class="col-4">
                                                    <div class="icon icon-warning icon-circle">
                                                        <i class="fas" :class="IconClass('address_status')"></i>
                                                    </div>
                                                </div>
                                                <div class="col-8 text-right pointer">
                                                    <h4 class="info-title font-weight-bold mb-0">Address</h4>
                                                    <h6 class="stats-title">
                                                        {{key('address_status') ? 'Verified' : 'Not Verified'}}
                                                    </h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-footer" @click="modal('addressModal')">
                                    <i class="now-ui-icons ui-1_calendar-60 pr-1"></i>
                                    {{key('address_status') ? 'Verified' : 'Not Verified'}}
                                    <small>(Click here to update status!)</small>
                                </div>
                            </div>
                        </div>

                        <div class="float-left col-lg-3 col-sm-6">
                            <div class="card card-stats" :class="DivClass('work_guarantor_status')">
                                <div class="card-body ">
                                    <div class="statistics statistics-horizontal">
                                        <div class="info info-horizontal">
                                            <div class="row">
                                                <div class="col-4">
                                                    <div class="icon icon-warning icon-circle">
                                                        <i class="fas" :class="IconClass('work_guarantor_status')"></i>
                                                    </div>
                                                </div>
                                                <div class="col-8 text-right">
                                                    <h4 class="info-title font-weight-bold mb-0">W/Guarantor</h4>
                                                    <h6 class="stats-title">
                                                        {{key('work_guarantor_status') ? 'Verified' : 'Not Verified'}}
                                                    </h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-footer pointer" @click="modal('WGuarantorModal')">
                                    <i class="now-ui-icons ui-1_calendar-60 pr-1"></i>
                                    {{key('work_guarantor_status') ? 'Verified' : 'Not Verified'}}
                                    <small>(Click here to update status!)</small>
                                </div>
                            </div>
                        </div>

                        <div class="float-left col-lg-3 col-sm-6">
                            <div class="card card-stats" :class="DivClass('personal_guarantor_status')">
                                <div class="card-body ">
                                    <div class="statistics statistics-horizontal">
                                        <div class="info info-horizontal">
                                            <div class="row">
                                                <div class="col-4">
                                                    <div class="icon icon-warning icon-circle">
                                                        <i class="fas"
                                                           :class="IconClass('personal_guarantor_status')"></i>
                                                    </div>
                                                </div>
                                                <div class="col-8 text-right">
                                                    <h4 class="info-title font-weight-bold mb-0">P/Guarantor</h4>
                                                    <h6 class="stats-title">
                                                        {{key('personal_guarantor_status') ? 'Verified' : 'Not Verified'}}
                                                    </h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-footer pointer" @click="modal('PGuarantorModal')">
                                    <i class="now-ui-icons ui-1_calendar-60 pr-1"></i>
                                    {{key('work_guarantor_status') ? 'Verified' : 'Not Verified'}}
                                    <small>(Click here to update status!)</small>
                                </div>
                            </div>
                        </div>

                        <hr class="style-two">
                    </div>
                </div>
            </transition>

            <!--update passportModal start-->
            <div class="modal fade" id="passportModal">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header py-2">
                            <h6 class="modal-title py-1">Passport Verification Status</h6>
                            <a href="javascript:" class="close py-1" data-dismiss="modal"
                               aria-label="Close">
                                <span aria-hidden="true" class="modal-close text-danger">
                                    <i class="fas fa-times"></i>
                                </span>
                            </a>
                        </div>
                        <form @submit.prevent="save('passport','passportModal')" v-if="customer">
                            <div class="modal-body">
                                <div class="upload-image p-2">
                                    <div class="upload-box"><image-upload v-model="form.passport"/></div>
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
            <!--update passportModal end-->

            <!--update IDCardModal start-->
            <div class="modal fade" id="IDCardModal">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header py-2">
                            <h6 class="modal-title py-1">ID Card Verification Status</h6>
                            <a href="javascript:" class="close py-1" data-dismiss="modal"
                               aria-label="Close">
                                <span aria-hidden="true" class="modal-close text-danger">
                                    <i class="fas fa-times"></i>
                                </span>
                            </a>
                        </div>
                        <form @submit.prevent="save('id_card','IDCardModal')" v-if="customer">
                            <div class="modal-body">
                                <div class="upload-image p-2">
                                    <div class="upload-box"><image-upload v-model="form.id_card"/></div>
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
            <!--update IDCardModal end-->

            <!--update addressModal start-->
            <div class="modal fade" id="addressModal">
                <div class="modal-dialog modal-lg">
                    <div class="modal-content">
                        <div class="modal-header py-2">
                            <h6 class="modal-title py-1">Address Verification Status</h6>
                            <a @click="modal('addressModal')" class=" py-1" style="min-height: 30px; min-width: 30px;">
                                <span class="text-danger">
                                    <i class="fas fa-times"></i>
                                </span>
                            </a>
                        </div>
                        <form @submit.prevent="validateAddress">
                            <div class="modal-body p-5">
                                <div class="w-100 p-3">
                                    <div class="form-group clearfix">
                                        <label>1. Did you meet the customer?</label>
                                        <span class="radio mx-5">
                                        <input v-model="addressQuestionnaire.customer_meetup"
                                               type="radio"
                                               id="yes" value="yes" v-validate="'required'">
                                        <label for="yes">Yes</label>
                                    </span>
                                        <span class="radio ml-5">
                                        <input v-model="addressQuestionnaire.customer_meetup"
                                               type="radio"
                                               id="no" value="no" v-validate="'required'">
                                        <label for="yes">No</label>
                                    </span>
                                        <small class="text-muted" v-if="errors.first('customer meetup')">
                                            {{errors.first('customer meetup')}}
                                        </small>
                                    </div>

                                    <div class="form-group clearfix">
                                        <label>
                                            2. Is the address/location same with what you have in the application form?
                                        </label>
                                        <span class="radio mx-5">
                                        <input v-model="addressQuestionnaire.confirm_address"
                                               name="confirm address"
                                               type="radio"
                                               id="add_yes"
                                               value="yes"
                                               v-validate="'required'">
                                        <label for="add_yes">Yes</label>
                                    </span>
                                        <span class="radio ml-5">
                                        <input v-model="addressQuestionnaire.confirm_address"
                                               name="confirm address"
                                               type="radio"
                                               id="add_no"
                                               value="no"
                                               v-validate="'required'">
                                        <label for="add_no">No</label>
                                    </span>
                                        <small class="text-muted" v-if="errors.first('confirm address')">
                                            {{errors.first('confirm address')}}
                                        </small>
                                    </div>

                                    <div class="form-group clearfix">
                                        <label>3. What does he/she do or sell?</label>
                                        <input type="text" class="form-control"
                                               placeholder="comment here..."
                                               v-model="addressQuestionnaire.what_he_sells"
                                               name="what_he_sells"
                                               v-validate="'required'"
                                               data-vv-as="what he sells"
                                               :class="{'is-invalid': errors.first('what_he_sells')}">
                                        <small class="text-muted"
                                               v-if="errors.first('what_he_sells')">
                                            {{errors.first('what_he_sells') }}
                                        </small>
                                    </div>

                                    <div class="form-group clearfix">
                                        <label>4. Look around the shop and check the nature and condition of the
                                               business. Write down what you see in terms of address, stock value, premise, type of shop or business, sales etc.</label>
                                        <textarea class="form-control"
                                                  placeholder="comment here..."
                                                  rows="1"
                                                  v-model="addressQuestionnaire.business_info"
                                                  name="business info"
                                                  v-validate="'required|'"
                                                  :class="{'is-invalid': errors.first('business info')}"></textarea>
                                        <small class="text-muted" v-if="errors.first('business info')">
                                            {{errors.first('business info')}}
                                        </small>
                                    </div>

                                    <div class="form-group clearfix">
                                        <label>5. Get exact information of choice of product and specification by asking for
                                               Example; what exact phone do you want? Let him/her specify e.g. INFINIX
                                               SMART or HOT 4 IPHONE
                                        </label>
                                        <textarea class="form-control w-100"
                                                  placeholder="comment here..."
                                                  rows="1"
                                                  v-model="addressQuestionnaire.product_info"
                                                  name="product info"
                                                  v-validate="'required|max:255'"
                                                  :class="{'is-invalid': errors.first('product info')}"></textarea>
                                        <small class="text-muted"
                                               v-if="errors.first('product info')">
                                            {{errors.first('product info')}}
                                        </small>
                                    </div>

                                    <div class="form-group clearfix">
                                        <label>
                                            6. Are you aware of the payment plan?
                                        </label>
                                        <span class="radio mx-5">
                                        <input v-model="addressQuestionnaire.aware_of_plan"
                                               name="aware of plan"
                                               type="radio"
                                               id="pay_yes"
                                               value="yes"
                                               v-validate="'required'">
                                        <label for="pay_yes">yes</label>
                                    </span>
                                        <span class="radio ml-5">
                                        <input v-model="addressQuestionnaire.aware_of_plan"
                                               name="aware of plan"
                                               type="radio"
                                               id="pay_no"
                                               value="no"
                                               v-validate="'required'">
                                        <label for="pay_no">no</label>
                                    </span>
                                        <small class="text-muted" v-if="errors.first('aware of plan')">
                                            {{errors.first('aware of plan')}}
                                        </small>
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
                                               value="yes"
                                               v-validate="'required'">
                                        <label for="neigh_yes">yes</label>
                                    </span>
                                        <span class="radio ml-5">
                                        <input v-model="info_from_neighbors"
                                               name="info from neighbors"
                                               type="radio"
                                               id="neigh_no"
                                               value="no"
                                               v-validate="'required'">
                                        <label for="neigh_no">no</label>
                                    </span>
                                        <small class="text-muted"
                                               v-if="errors.first('info from neighbors')">
                                            {{errors.first('info from neighbors')}}
                                        </small>

                                        <textarea v-if="info_from_neighbors == 'yes'" class="form-control"
                                                  placeholder="comment here..."
                                                  rows="1"
                                                  v-model="addressQuestionnaire.info_from_neighbors_desc"
                                                  name="neighbors description"
                                                  v-validate="'required|max:255'"
                                                  :class="{'is-invalid': errors.first('neighbors description')}"></textarea>
                                        <small class="text-muted"
                                               v-if="errors.first('neighbors description')">
                                            {{errors.first('neighbors description')}}
                                        </small>
                                    </div>

                                    <div class="form-group clearfix">
                                        <label>8. And how long has he/she been working/trading in that particular place?
                                        </label>
                                        <textarea class="form-control"
                                                  placeholder="address"
                                                  rows="1"
                                                  v-model="addressQuestionnaire.business_or_work_duration"
                                                  name="business or work duration"
                                                  v-validate="'required|max:255'"
                                                  :class="{'is-invalid': errors.first('business or work duration')}"></textarea>
                                        <small class="text-muted"
                                               v-if="errors.first('business or work duration')">
                                            {{errors.first('business or work duration')}}
                                        </small>
                                    </div>

                                    <div v-if="showButtons">
                                        <div class="w-100 clearfix">
                                            <button type="submit"
                                                    @click="addressQuestionnaire.approval_status = 1"
                                                    class="btn btn-success btn-lg btn-block"
                                                    :disabled="$isProcessing">
                                                Successful - Update Details
                                                <i class="far fa-paper-plane ml-1"></i>
                                            </button>
                                        </div>

                                        <div class="pt-2 w-100 clearfix">
                                            <div class="pr-2 pl-md-0 pl-2 col-md-6 col-12 m-0 float-left">
                                                <button type="button"
                                                        @click="modal('addressModal')"
                                                        class="m-0 btn btn-lg btn-block btn-secondary">
                                                    Cancel
                                                </button>
                                            </div>
                                            <div class="pl-2 pr-md-0 pr-2 col-md-6 col-12 float-left">
                                                <button type="submit"
                                                        @click="addressQuestionnaire.approval_status = 0"
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
            <!--update addressModal end-->

            <!--update WGuarantorModal start-->
            <div class="modal fade" id="WGuarantorModal">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header py-2">
                            <h6 class="modal-title py-1">Work Guarantor Verification Status</h6>
                            <a href="javascript:" class="close py-1" data-dismiss="modal"
                               aria-label="Close">
                                <span aria-hidden="true" class="modal-close text-danger">
                                    <i class="fas fa-times"></i>
                                </span>
                            </a>
                        </div>
                        <form @submit.prevent="updateVerification" v-if="customer">
                            <div class="modal-body">
                                <div class="form-group col-12 float-left mt-0 mb-2">
                                    <span class="mb-2 w-100 float-left pl-1 text-center">
                                        Please Verify you selected the right option! before you click <br>
                                        <strong>Save Changes </strong>!
                                    </span>

                                    <div class="radio p-0 col-6 float-left text-center">
                                        <input v-model="verification.work_guarantor_status"
                                               type="radio"
                                               id="wgua_yes"
                                               value="1">
                                        <label for="wgua_yes">
                                            Verify
                                        </label>
                                    </div>

                                    <div class="radio p-0 col-6 float-left text-center">
                                        <input v-model="verification.work_guarantor_status"
                                               type="radio"
                                               id="wgua_no"
                                               value="0">
                                        <label for="wgua_no">
                                            Not Verified
                                        </label>
                                    </div>

                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="m-2 btn btn-secondary" data-dismiss="modal">
                                    cancel
                                </button>
                                <button type="submit"
                                        class="m-2 btn bg-default"
                                        :disabled="$isProcessing">
                                    Save changes
                                    <i class="far fa-paper-plane ml-1"></i>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <!--update WGuarantorModal end-->

            <!--update PGuarantorModal start-->
            <div class="modal fade" id="PGuarantorModal">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header py-2">
                            <h6 class="modal-title py-1">Personal Guarantor Verification Status</h6>
                            <a href="javascript:" class="close py-1" data-dismiss="modal"
                               aria-label="Close">
                                <span aria-hidden="true" class="modal-close text-danger">
                                    <i class="fas fa-times"></i>
                                </span>
                            </a>
                        </div>
                        <form @submit.prevent="updateVerification" v-if="customer">
                            <div class="modal-body">
                                <div class="form-group col-12 float-left mt-0 mb-2">
                                    <span class="mb-2 w-100 float-left pl-1 text-center">
                                        Please Verify you selected the right option! before you click <br>
                                        <strong>Save Changes </strong>!
                                    </span>

                                    <div class="radio p-0 col-6 float-left text-center">
                                        <input v-model="verification.personal_guarantor_status"
                                               type="radio"
                                               id="pgua_yes"
                                               value="1">
                                        <label for="pgua_yes">
                                            Verify
                                        </label>
                                    </div>

                                    <div class="radio p-0 col-6 float-left text-center">
                                        <input v-model="verification.personal_guarantor_status"
                                               type="radio"
                                               id="pgua_no"
                                               value="0">
                                        <label for="pgua_no">
                                            Not Verified
                                        </label>
                                    </div>

                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="m-2 btn btn-secondary" data-dismiss="modal">
                                    cancel
                                </button>
                                <button type="submit"
                                        class="m-2 btn bg-default"
                                        :disabled="$isProcessing">
                                    Save changes
                                    <i class="far fa-paper-plane ml-1"></i>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <!--update PGuarantorModal end-->
        </div>
    </transition>
</template>
<script>
    import {log} from '../../../helpers/log';
    import Flash from '../../../helpers/flash';
    import {get, post} from '../../../helpers/api';
    import {toMulipartedForm} from '../../../helpers/form';
    import ImageUpload from '../../../components/ImageUpload';

    export default {
        components: {
            ImageUpload
        },
        data() {
            return {
                customer: null,
                customer_id: '',
                showButtons: true,
                info_from_neighbors: '',
                addressQuestionnaire: {},
                verification: {},
                form: {
                    id_card:'',
                    passport:'',
                    document: '',
                },
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
                if (!!data.customer.address) {
                    this.addressQuestionnaire = data.customer.address;
                    this.showButtons = false;
                } else {
                    this.addressQuestionnaire = data.emptyForm;
                    this.showButtons = true;
                }
            },
            fetchCustomer() {
                if (this.$network()) {
                    this.$LIPS(true);
                    get('api/customer/' + this.customer_id)
                        .then(res => {
                            this.buttonStatus(res.data);
                            this.$LIPS(false);
                            this.form.id_card = res.data.customer.document.id_card_url;
                            this.form.passport = res.data.customer.document.passport_url;
                        })
                        .catch(err => {
                            this.$LIPS(false);
                            this.$scrollToTop();
                            this.customer = null;
                            if (err.response.status === 422) {
                                Flash.setError(err.response.data.message);
                            } else {
                                Flash.setError('Error trying to get customer details please try again shortly!');
                            }
                        })
                } else {
                    this.$networkErr();
                }
            },
            validateAddress() {
                if (this.$network()) {
                    this.$LIPS(true);
                    (this.info_from_neighbors === 'no') ? this.addressQuestionnaire.info_from_neighbors_desc = '' : '';
                    this.addressQuestionnaire.customer_id = this.customer.id;
                    this.addressQuestionnaire.user_id = this.customer.user.id;
                    this.addressQuestionnaire.staff_name = this.customer.user.full_name;
                    post('/api/address/', this.addressQuestionnaire)
                        .then(res => {
                            if (res.data.approved) {
                                this.buttonStatus(res.data);
                                if (this.addressQuestionnaire.approval_status == 1) {
                                    log('CustomerPassedVerification', 'Customer ID : ' + String(this.customer.id));
                                    Flash.setSuccess('Customer Address Verification Successful!');
                                } else {
                                    log('CustomerFailedVerification', 'Customer ID : ' + String(this.customer.id));
                                    Flash.setError('Customer Address Questionnaire uploaded but not marked as "NOT VERIFIED!');
                                }
                            }
                        })
                        .catch(err => {
                            if (err.response.status === 428) Flash.setError(err.response.data.message);
                        });
                    this.modal('addressModal');
                    this.$LIPS(false);
                    this.$scrollToTop();
                } else {
                    this.$networkErr();
                }
            },
            updateVerification() {
                if (this.$network()) {
                    this.$LIPS(true);
                    post('/api/verification/', this.verification)
                        .then((res) => {
                            if (res.data.success) {
                                this.verification = JSON.parse(JSON.stringify(res.data.verification));
                                this.customer.verification = JSON.parse(JSON.stringify(res.data.verification));
                                Flash.setSuccess('Verification Status has been updated!');
                            }
                        })
                        .catch((err) => {
                            Flash.setError(err.response.data);
                        });
                    $('.modal').modal('hide');
                    this.$LIPS(false);
                    this.$scrollToTop();
                } else {
                    this.$networkErr();
                }
            },
            save(document, modal) {
                this.storeURL = `api/document/${this.customer.document.id}?_method=PUT&document=${document}`;
                this.$LIPS(true);
                this.form.document = document;
                const form = toMulipartedForm(this.form, 'edit');
                post(this.storeURL, form).then((res) => {
                    if (res.data.saved) {
                        this.customer.document = res.data.document;
                        this.customer.verification = res.data.verification;
                        log('Customer' + this.$options.filters.capitalize(document) + 'Upload',
                            'Customer ID : ' + String(this.customer.id));
                        this.modal(modal);
                        this.$LIPS(false);
                        this.$scrollToTop();
                        Flash.setSuccess(res.data.message);
                    }
                }).catch((err) => {
                    if (err.response.status === 422) {
                        this.error = err.response.data.errors;
                        this.$LIPS(false);
                        this.$scrollToTop();
                    }
                })
            },
        },
        computed: {
            check() {
                return (!(!(this.$isProcessing) && (!!this.customer_id)));
            },
        },
        watch: {},
        mounted() {
            $(document).on("hidden.bs.modal", '.modal', this.returnToInitialValues);
        },
    }
</script>
<style scoped type="scss">
    .card-stats .icon {
        margin : 0 15px;
    }

    .info .icon.icon-circle {
        max-width     : 70px;
        width         : 70px;
        height        : 70px;
        border-radius : 50%;
        font-size     : .71em;
    }

    .info-horizontal .icon.icon-circle i {
        display     : table;
        margin      : 0 auto;
        line-height : 8rem;
        font-size   : 1.9em;
    }

    .stats-title {
        font-weight : 300;
        font-size   : .9rem;
    }

    .card-footer:hover {
        background-image : linear-gradient(to bottom, rgb(255, 255, 255), #eeeeee);
    }

    h4.info-title {
        margin    : 0;
        font-size : 1.6rem;
    }

    .no-success .icon.icon-warning.icon-circle {
        border     : 1px solid #b30000;
        box-shadow : 0 9px 15px -6px rgba(179, 0, 0, 0.5) !important;
    }

    .success .icon.icon-warning.icon-circle {
        border     : 1px solid #488413;
        box-shadow : 0 9px 15px -6px rgba(72, 132, 19, 0.5) !important;
    }

    .card.card-stats::before {
        content  : '';
        width    : 4px;
        height   : 100%;
        position : absolute;
        left     : 0;
        top      : 0;
        float    : right;
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

    .modal label {
        font-weight : 600;
    }

    .modal small {
        margin-top : 0;
    }

    .modal .form-group {
        margin-bottom : 2rem;
    }


</style>