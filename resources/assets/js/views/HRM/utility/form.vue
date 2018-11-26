<template>
    <form @submit.prevent="register(form,0)">
        <h5>Employee Personal Details</h5>
        <div class="form-group col-md-6 col-12 float-left px-0 px-md-3">
            <label>Full Name</label>
            <input type="text"
                   class="form-control"
                   placeholder="employee full name"
                   v-model="form.full_name"
                   v-validate="'required|max:100'"
                   name="name">
            <small
                   v-if="errors.first('name')">
                {{ errors.first('name') }}
            </small>
        </div>

        <div class="form-group col-md-6 col-12 float-left px-0 px-md-3">
            <label>Phone Number</label>
            <input type="tel"
                   class="form-control"
                   placeholder="081xxxxxxxx"
                   v-model="form.phone_number"
                   name="phone_number"
                   v-validate="'required|numeric|max:11|min:11'"
                   :class="{'is-invalid': error.phone_number }"
                   data-vv-as="phone number">
            <small
                   v-if="errors.first('phone_number')">
                {{errors.first('phone_number') }}
            </small>
            <small
                   v-if="error.phone_number">
                {{error.phone_number[0]}}
            </small>
        </div>

        <div class="spaceBetween  mb-md-2 mb-0"></div>

        <div class="form-group col-md-6 col-12 float-left px-0 px-md-3">
            <label>Marital Status</label>
            <select name="status"
                    class="custom-select w-100"
                    v-model="form.status"
                    v-validate="'required'" data-vv-validate-on="blur">
                <option value="" selected>select status</option>
                <option v-for="status in statuses" :value="status">
                    {{status | capitalize}}
                </option>
            </select>
            <small v-if="errors.first('status')">
                {{errors.first('status') }}
            </small>
        </div>

        <div class="form-group col-md-6 col-12 float-left px-0 px-md-3">
            <label>Nationality</label>
            <select name="nationality"
                    class="custom-select w-100"
                    v-model="form.nationality"
                    v-validate="'required'" data-vv-validate-on="blur">
                <option value="" selected>select nationality</option>
                <option v-for="country in countries" :value="country">
                    {{country | capitalize}}
                </option>
            </select>
            <small v-if="errors.first('nationality')">
                {{errors.first('nationality') }}
            </small>
        </div>

        <div class="spaceBetween  mb-md-2 mb-0"></div>

        <div class="form-group col-md-6 col-12 float-left px-0 px-md-3">
            <label>Date of Birth</label>
            <input type="date"
                   class="form-control"
                   v-model="form.date_of_birth"
                   name="date_of_birth"
                   v-validate="'required'"
                   data-vv-as="date of birth">
            <small v-if="errors.first('date_of_birth')">{{errors.first('date_of_birth')}}</small>
            <small v-if="error.date_of_birth">{{error.date_of_birth[0]}}</small>
        </div>

        <div class="form-group col-md-6 col-12 float-left px-0 px-md-3">
            <label>Email</label>
            <input type="email"
                   class="form-control"
                   placeholder="name@example.com"
                   v-model="form.email"
                   name="email"
                   :class="{'is-invalid': error.email}"
                   v-validate="'required|email|min:1'">
            <small
                   v-if="errors.first('email')">
                {{errors.first('email')}}
            </small>
            <small
                   v-if="error.email">
                {{error.email[0]}}
            </small>
        </div>

        <div class="spaceBetween  mb-md-2 mb-0"></div>

        <div class="form-group col-md-6 col-12 float-left px-0 px-md-3">
            <label>Employee ID Number</label>
            <input type="text" class="form-control"
                   placeholder="AC/C/013/18"
                   v-model="form.staff_id"
                   name="staff_id"
                   v-validate="'required'"
                   :class="{'is-invalid': error.staff_id}"
                   data-vv-as="employee id">
            <small
                   v-if="errors.first('staff_id')">
                {{errors.first('staff_id') }}
            </small>
            <small
                   v-if="error.staff_id">
                {{error.staff_id[0]}}
            </small>
        </div>

        <div class="form-group col-md-6 col-12 float-left px-0 px-md-3">
            <label>Role in the company</label>
            <select name="role"
                    class="custom-select w-100"
                    v-model="form.role_id"
                    v-validate="'required'" data-vv-validate-on="blur"
                    data-vv-name="role">
                <option value="" selected>select role</option>
                <option v-for="role in roles" :value="role.id">
                    {{role.name | capitalize}}
                </option>
            </select>
            <small
                   v-if="errors.first('role')">
                {{errors.first('role') }}
            </small>
        </div>

        <div class="spaceBetween mb-md-2 mb-0"></div>

        <div class="form-group col-md-6 col-12 float-left px-0 px-md-3">
            <label>Highest Qualification</label>
            <select name="qualification"
                    class="custom-select w-100"
                    v-model="form.highest_qualification"
                    v-validate="'required'" data-vv-validate-on="blur"
                    data-vv-name="qualification">
                <option value="" selected>select qualification</option>
                <option v-for="qualification in qualifications" :value="qualification">
                    {{qualification | capitalize}}
                </option>
            </select>
            <small
                   v-if="errors.has('qualification')">
                {{errors.first('qualification') }}
            </small>
        </div>

        <div class="form-group col-md-6 col-12 float-left px-0 px-md-3">
            <label>Operations Branch</label>
            <select name="branch"
                    class="custom-select w-100"
                    v-model="form.branch_id"
                    v-validate="'required'" data-vv-validate-on="blur"
                    data-vv-name="branch">
                <option value="" selected>select branch</option>
                <option v-for="branch in branches" :value="branch.id">
                    {{branch.name | capitalize}}
                </option>
            </select>
            <small
                   v-if="errors.has('branch')">
                {{errors.first('branch') }}
            </small>
        </div>

        <div class="spaceBetween mb-md-2 mb-0"></div>

        <div class="form-group col-md-6 col-12 float-left px-0 px-md-3">
            <label>Date of Appointment</label>
            <input type="date" class="form-control"
                   v-model="form.date_of_appointment"
                   name="date_of_appointment"
                   v-validate="'required'"
                   data-vv-as="date of appointment">
            <small
                   v-if="errors.first('date_of_appointment')">
                {{errors.first('date_of_appointment')}}
            </small>
        </div>

        <div v-if="ifUp(action)" class="form-group col-md-6 col-12 float-left px-0 px-md-3">
            <label>Date of Exit</label>
            <input type="date" class="form-control" v-model="form.date_of_exit">
        </div>

        <div class="form-group col-md-6 col-12 float-left px-0 px-md-3">
            <label>Staff Category</label>
            <select name="qualification"
                    class="custom-select w-100"
                    v-model="form.category"
                    v-validate="'required'" data-vv-validate-on="blur"
                    data-vv-name="category">
                <option value="" selected>select category</option>
                <option v-for="category in categories" :value="category">
                    {{category | capitalize}}
                </option>
            </select>
            <small
                   v-if="errors.has('category')">
                {{errors.first('category') }}
            </small>
        </div>

        <div class="spaceBetween mb-md-2 mb-0"></div>

        <!--gender-->
        <div class="form-group col-md-6 col-12 float-left px-0 px-md-3">
            <label class="w-100 float-left pl-1">Gender</label>
            <div class="radio p-0 col-md-6 col-6 float-left" v-for="sex in gender">
                <input v-model="form.gender"
                       name="gender"
                       type="radio"
                       :id="sex"
                       :value="sex"
                       v-validate="'required'">
                <label :for="sex">
                    {{sex}}
                </label>
            </div>
            <small
                   v-if="errors.first('gender')">
                {{errors.first('gender')}}
            </small>
        </div>

        <div class="form-group col-md-6 col-12 float-left px-0 px-md-3">
            <label>Describe Location</label>
            <textarea class="form-control w-100"
                      placeholder="address"
                      rows="1"
                      v-model="form.address"
                      name="address"
                      v-validate="'required|max:255'"></textarea>
            <small
                   v-if="errors.first('address')">
                {{errors.first('address')}}
            </small>
        </div>

        <div class="spaceAfter"></div>
        <h5>Referee Details</h5>

        <div class="form-group col-md-6 col-12 float-left px-0 px-md-3">
            <label>Referee 1 Full Name</label>
            <input type="text"
                   class="form-control"
                   placeholder="enter full name here"
                   v-model="form.referee_1"
                   name="referee_1"
                   v-validate="'required|max:50'"
                   data-vv-as="referee 1 full name">
            <small
                   v-if="errors.first('referee_1')">
                {{errors.first('referee_1') }}
            </small>
        </div>

        <div class="form-group col-md-6 col-12 float-left px-0 px-md-3">
            <label>Referee 1 Phone Number</label>
            <input type="tel"
                   class="form-control"
                   placeholder="081xxxxxxxx"
                   v-model="form.referee_1_phone_no"
                   name="referee_1_phone_no"
                   v-validate="'required|numeric|max:11|min:11'"
                   data-vv-as="referee 1 phone number">
            <small
                   v-if="errors.first('referee_1_phone_no')">
                {{errors.first('referee_1_phone_no')}}
            </small>
        </div>

        <div class="spaceBetween mb-md-2 mb-0"></div>

        <div class="form-group col-md-6 col-12 float-left px-0 px-md-3">
            <label>Referee 2 Full Name</label>
            <input type="text"
                   class="form-control"
                   placeholder="enter full name here"
                   v-model="form.referee_2"
                   name="referee_2"
                   v-validate="'required|max:50'"
                   data-vv-as="referee 2 full name">
            <small
                   v-if="errors.first('referee_2')">
                {{errors.first('referee_2') }}
            </small>
        </div>

        <div class="form-group col-md-6 col-12 float-left px-0 px-md-3">
            <label>Referee 2 Phone Number</label>
            <input type="tel"
                   class="form-control"
                   placeholder="081xxxxxxxx"
                   v-model="form.referee_2_phone_no"
                   name="referee_2_phone_no"
                   v-validate="'required|numeric|max:11|min:11'"
                   data-vv-as="referee 2 phone number">
            <small
                   v-if="errors.first('referee_2_phone_no')">
                {{errors.first('referee_2_phone_no') }}
            </small>
        </div>

        <div class="spaceAfter"></div>

        <h5>Next of Kin Details</h5>

        <div class="form-group col-md-6 col-12 float-left px-0 px-md-3">
            <label>Next of Kin Full Name</label>
            <input type="text"
                   class="form-control"
                   placeholder="enter full name here"
                   v-model="form.next_of_kin_name"
                   name="next_of_kin_name"
                   v-validate="'required|max:50'"
                   data-vv-as="next of kin name">
            <small
                   v-if="errors.first('next_of_kin_name')">
                {{errors.first('next_of_kin_name') }}
            </small>
        </div>

        <div class="form-group col-md-6 col-12 float-left px-0 px-md-3">
            <label>Next of Kin Phone Number</label>
            <input type="tel"
                   class="form-control"
                   placeholder="081xxxxxxxx"
                   v-model="form.next_of_kin_phone_no"
                   name="next_of_kin_phone_no"
                   v-validate="'required|numeric|max:11|min:11'"
                   data-vv-as="next of kin phone number">
            <small
                   v-if="errors.first('next_of_kin_phone_no')">
                {{errors.first('next_of_kin_phone_no')}}
            </small>
        </div>

        <div class="spaceBetween mb-md-2 mb-0"></div>

        <hr class="style-two">

        <div class="col-sm-12 ml-auto mr-auto mt-md-2 mt-0 px-md-3 px-1 mb-3 float-right">
            <div v-if="ifReg(action)">
                <button type="submit" class="btn btn-block btn-lg bg-default" :disabled="$isProcessing">
                    Register Employee <i class="far fa-paper-plane ml-1"></i>
                </button>
            </div>
            <div v-if="ifUp(action)">
                <button type="button" class="mx-3 btn btn-secondary" data-dismiss="modal">Cancel</button>
                <button type="submit" class="mx-3 btn bg-default float-right" :disabled="$isProcessing">
                    Update Employee <i class="far fa-paper-plane ml-1"></i>
                </button>
            </div>
        </div>
    </form>

</template>
<script>
    import SMS from '../../../helpers/sms';
    import {log} from '../../../helpers/log';
    import Flash from '../../../helpers/flash';
    import {get, post} from '../../../helpers/api';

    export default {
        props: {
            //the component is never called exclusively its
            //is called by another parent component.
            //the action is purpose or the context
            action: '',
            receivedData: {default: ''},
            bus: {default: ''},
        },
        data() {
            return {
                form: {},
                error: {},
                roles: {},
                branches: {},
                password: '',
                countries: ['nigeria'],
                gender: ['male', 'female'],
                categories: ['permanent', 'contract'],
                textDetails: {phone: '', loginPassword: '', loginID: '',},
                statuses: ['married', 'single', 'divorced', 'complicated'],
                qualifications: ['HND', 'OND', 'bachelors', 'masters', 'doctorate'],
            }
        },
        methods: {
            ifReg(a) {
                //a is the action for which the form is called or the context
                //the form is used this function return true if the
                //action : a is === register else else
                return !!(a === 'register');
            },
            ifUp(a) {
                //a is the action for which the form is called or the context
                //the form is used this function return true if the
                //action : a is === update else else
                return !!(a === 'update');
            },
            prepareForm(data) {
                //this function is used when a data is sent to this component
                //or this component makes a request to backend the
                //data received is used to prepare the form
                this.error = {};
                this.form = data.form;
                this.roles = data.roles;
                this.branches = data.branches;
            },
            register(emp = null, AC = 1) {
                //NB: this function is used by the employee register, employee update and for portal access update.
                //the AC means: if the function is called to updated the access control or not.
                //by default it set to 1, but when it is called from the register
                //form it is set to 0 to show that it is not for access
                //control update rather for registration.

                //emp for context :registration is the form, ie a new user hences uses
                //the default url 'api/register' for registration
                //emp for context :details update and portal access
                //update are the staff details to be updated
                if(AC === 1) this.updatingPortalAccess = true;
                this.$validator.validateAll().then((result) => {
                    if(AC === 1){
                        //AC means the context : access control, by default its set to true i.e 1 because this function
                        //was called as a callback on a this.$emit process and cant pass two params to the function
                        //the employee register call the function in this manner : register(form,0) to show
                        //its not for access control context again;
                        this.errors.clear();
                        result = true;
                        //This process doesn't need validation because the form has only one field
                        //ref: DataViewer.vue => id="editPortalAccess"
                    }
                    if (result) {
                        if (this.$network()) {
                            this.$LIPS(true);
                            this.error = {};
                            let newUrl = 'api/register', message, logMsg;
                            //for registration the url is used
                            if (this.action === 'update') newUrl = "api/employee/" + emp.id + "/update";
                            //else f the form action is not registration den its update
                            //hence the url "api/employee/{id}/update"
                            post(newUrl, emp)
                                .then((res) => {
                                    if (res.data.hasOwnProperty('registered')) {
                                        //if the response is from 'api/register'
                                        logMsg = 'Registered';
                                        this.textDetails.loginID = String(this.form.staff_id);
                                        this.textDetails.phone = String(parseInt(this.form.phone_number));
                                        this.textDetails.loginPassword = this.password = res.data.password;
                                        message = "Staff registered! An sms has been sent to the employee with his Login details!";
                                        SMS.welcome(this.textDetails);
                                    } else if (res.data.hasOwnProperty('updated')) {
                                        //if the response is from "api/employee/{id}/update"
                                        logMsg = 'Updated';
                                        message = 'Staff details updated!';
                                        this.$emit('done');
                                        //it emits an event to the parent(dataviewer.vue)
                                        // since its for update
                                    }
                                    this.$scrollToTop();
                                    log('Staff' + logMsg, String(this.form.staff_id));
                                    Flash.setSuccess(message, 20000);
                                    if (this.ifReg(this.action)) this.form = res.data.form;
                                    //the line above is there so as to allow the log
                                    // method use its data before reseting
                                    this.$LIPS(false);
                                    this.errors.clear();
                                })
                                .catch((err) => {
                                    if (err.response.status === 422) {
                                        //catch error thrown by laravel validation;
                                        this.$scrollToTop();
                                        this.error = err.response.data;
                                        if (err.response.data.errors) this.error = err.response.data.errors;
                                        Flash.setError('Your details contains a unique field that already exists in our record change it and try again!', 10000);
                                    }
                                    this.$LIPS(false);
                                })
                        } else this.$networkErr();
                    }
                    if (!result) this.$networkErr('form');
                });
            },
        },
        created() {
            if (this.ifReg(this.action)) get('/api/create').then(res => this.prepareForm(res.data));
            //if registration fetch data for new customer registration and prepare form
            if (this.action == 'update') this.bus.$on('submit', this.register);
            //this.bus is a (vue instance and )prop received from dataviewer to track when the access portal form(ref: DataViewer.vue
            //=> id="editPortalAccess") is submitted from the data viewer. this is because we want to use the 'register'
            //function to process both (1)registration, (2)update details and (3)update portal access
        },
        watch: {
            receivedData: function (newVal) {
                //watches when a data is sent from the parent (dataviewer)
                this.prepareForm(newVal);
                //prepares the form with the data received
            }
        }
    }
</script>