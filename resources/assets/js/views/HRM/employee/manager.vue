<template>
    <transition name="fade">
        <div class="float-left w-100 pt-md-3 pt-2" id="employeeEdit">
            <div class="card">
                <ul class="nav nav-tabs nav-tabs-neutral justify-content-center bg-default">
                    <h6>Staff Management</h6>
                </ul>
                <div class="card-body col-12 pl-4 pr-4 float-left">
                    <div class="form-group col-12 float-left px-0">
                        <label>Search employee by name</label>
                        <input type="text"
                               id="search"
                               v-model="qry"
                               v-on:keyup="autoCompleteNow"
                               class="form-control mt-2"
                               placeholder="enter employee name">
                    </div>
                    <div v-if="results.length">
                        <h5 class="category mt-2">Search results</h5>
                        <table class="table table-responsive table-striped">
                            <thead>
                            <tr>
                                <th>Full Name</th>
                                <th>Staff ID</th>
                                <th>Phone Number</th>
                                <th>Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-for="employee in results">
                                <td>{{employee.full_name}}</td>
                                <td>{{employee.staff_id}}</td>
                                <td>{{employee.phone_number}}</td>
                                <td>
                                    <button class="text-center mx-2 btn btn-dark btn-icon btn-sm float-left btn-round"
                                            data-toggle="tooltip"
                                            data-placement="top"
                                            title="Edit Employee Detail"
                                            @click="editEmployee(employee.id)">
                                        <i class="fas fa-user-edit"></i>
                                    </button>
                                    <button class="text-center mr-2 btn btn-icon btn-sm float-left btn-round"
                                            :class="{ 'btn-success' : accessStatus(employee.portal_access),
                                            'btn-danger' :  !accessStatus(employee.portal_access)}"
                                            data-toggle="tooltip"
                                            data-placement="top"
                                            title="Edit Employee Portal Access"
                                            @click="editPortalAccess(employee)">
                                        <i class="fas fa-lock-open" v-if="accessStatus(employee.portal_access)"></i>
                                        <i class="fas fa-lock" v-if="!accessStatus(employee.portal_access)"></i>
                                    </button>
                                    <button class="text-center mr-2 btn btn-warning btn-icon btn-sm float-left btn-round"
                                            data-toggle="tooltip"
                                            data-placement="top"
                                            title="Reset Employee Password"
                                            @click="editPassword(employee)">
                                        <i class="fas fa-key"></i>
                                    </button>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <!--update employee modal start-->
            <div class="modal fade bd-example-modal-lg" id="updateEmployee">
                <div class="modal-dialog modal-lg">
                    <div class="modal-content">
                        <div class="modal-header py-2">
                            <h6 class="modal-title py-1">Update Employee Details</h6>
                            <a class="close py-1" data-dismiss="modal"
                               aria-label="Close">
                                <span aria-hidden="true" class="modal-close text-danger">
                                    <i class="fas fa-times"></i>
                                </span>
                            </a>
                        </div>
                        <div class="modal-body">
                            <form v-if="updatingEmployee" class="float-left">
                                <h5>Employee Personal Details</h5>
                                <div class="form-group col-md-6 col-12 float-left px-0 px-md-3">
                                    <label>Full Name</label>
                                    <input type="text"
                                           class="form-control"
                                           placeholder="employee full name"
                                           v-model="form.full_name"
                                           v-validate="'required|max:50'"
                                           name="name">
                                    <small class="text-muted"
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
                                           data-vv-as="phone number">
                                    <small class="text-muted"
                                           v-if="errors.first('phone_number')">
                                        {{errors.first('phone_number') }}
                                    </small>
                                    <small class="text-muted"
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
                                            v-validate="'required'">
                                        <option value="" selected>select status</option>
                                        <option v-for="status in statuses" :value="status">
                                            {{status | capitalize}}
                                        </option>
                                    </select>
                                    <small class="text-muted" v-if="errors.first('status')">
                                        {{errors.first('status') }}
                                    </small>
                                </div>

                                <div class="form-group col-md-6 col-12 float-left px-0 px-md-3">
                                    <label>Nationality</label>
                                    <select name="nationality"
                                            class="custom-select w-100"
                                            v-model="form.nationality"
                                            v-validate="'required'">
                                        <option value="" selected>select nationality</option>
                                        <option v-for="nationality in countries" :value="nationality">
                                            {{nationality | capitalize}}
                                        </option>
                                    </select>
                                    <small class="text-muted" v-if="errors.first('nationality')">
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
                                    <small class="text-muted"
                                           v-if="errors.first('date_of_birth')">
                                        {{errors.first('date_of_birth')}}
                                    </small>
                                </div>

                                <div class="form-group col-md-6 col-12 float-left px-0 px-md-3">
                                    <label>Email</label>
                                    <input type="email"
                                           class="form-control"
                                           placeholder="name@example.com"
                                           v-model="form.email"
                                           name="email"
                                           v-validate="'required|email'">
                                    <small class="text-muted"
                                           v-if="errors.first('email')">
                                        {{errors.first('email')}}
                                    </small>
                                    <small class="text-muted"
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
                                           data-vv-as="employee id">
                                    <small class="text-muted"
                                           v-if="errors.first('staff_id')">
                                        {{errors.first('staff_id') }}
                                    </small>
                                    <small class="text-muted"
                                           v-if="error.staff_id">
                                        {{error.staff_id[0]}}
                                    </small>
                                </div>

                                <div class="form-group col-md-6 col-12 float-left px-0 px-md-3">
                                    <label>Role in the company</label>
                                    <select name="role"
                                            class="custom-select w-100"
                                            v-model="form.role_id"
                                            v-validate="'required'"
                                            data-vv-name="role">
                                        <option value="" selected>select role</option>
                                        <option v-for="role in roles" :value="role.id">
                                            {{role.name | capitalize}}
                                        </option>
                                    </select>
                                    <small class="text-muted"
                                           v-if="errors.first('role')">
                                        {{errors.first('role') }}
                                    </small>
                                </div>

                                <div class="spaceBetween  mb-md-2 mb-0"></div>

                                <div class="form-group col-md-6 col-12 float-left px-0 px-md-3">
                                    <label>Highest Qualification</label>
                                    <select name="qualification"
                                            class="custom-select w-100"
                                            v-model="form.highest_qualification"
                                            v-validate="'required'"
                                            data-vv-name="qualification">
                                        <option value="" selected>select qualification</option>
                                        <option v-for="qualification in qualifications" :value="qualification">
                                            {{qualification | capitalize}}
                                        </option>
                                    </select>
                                    <small class="text-muted"
                                           v-if="errors.has('qualification')">
                                        {{errors.first('qualification') }}
                                    </small>
                                </div>

                                <div class="form-group col-md-6 col-12 float-left px-0 px-md-3">
                                    <label>Operations Branch</label>
                                    <select name="branch"
                                            class="custom-select w-100"
                                            v-model="form.branch_id"
                                            v-validate="'required'"
                                            data-vv-name="branch">
                                        <option value="" selected>select branch</option>
                                        <option v-for="branch in branches" :value="branch.id">
                                            {{branch.name | capitalize}}
                                        </option>
                                    </select>
                                    <small class="text-muted"
                                           v-if="errors.has('branch')">
                                        {{errors.first('branch') }}
                                    </small>
                                </div>

                                <div class="spaceBetween  mb-md-2 mb-0"></div>

                                <div class="form-group col-md-6 col-12 float-left px-0 px-md-3">
                                    <label>Date of Appointment</label>
                                    <input type="date" class="form-control"
                                           v-model="form.date_of_appointment"
                                           name="date_of_appointment"
                                           v-validate="'required'"
                                           data-vv-as="date of appointment">
                                    <small class="text-muted"
                                           v-if="errors.first('date_of_appointment')">
                                        {{errors.first('date_of_appointment')}}
                                    </small>
                                </div>

                                <div class="form-group col-md-6 col-12 float-left px-0 px-md-3">
                                    <label>Date of Exit</label>
                                    <input type="date"
                                           class="form-control"
                                           v-model="form.date_of_exit">
                                </div>

                                <div class="spaceBetween  mb-md-2 mb-0"></div>

                                <div class="form-group col-md-6 col-12 float-left px-0 px-md-3">
                                    <label>Describe Location</label>
                                    <textarea class="form-control w-100"
                                              placeholder="address"
                                              rows="1"
                                              v-model="form.address"
                                              name="address"
                                              v-validate="'required|max:255'"></textarea>
                                    <small class="text-muted"
                                           v-if="errors.first('address')">
                                        {{errors.first('address')}}
                                    </small>
                                </div>
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
                                    <small class="text-muted"
                                           v-if="errors.first('gender')">
                                        {{errors.first('gender')}}
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
                                    <small class="text-muted"
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
                                    <small class="text-muted"
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
                                    <small class="text-muted"
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
                                    <small class="text-muted"
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
                                    <small class="text-muted"
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
                                    <small class="text-muted"
                                           v-if="errors.first('next_of_kin_phone_no')">
                                        {{errors.first('next_of_kin_phone_no')}}
                                    </small>
                                </div>

                                <div class="spaceBetween mb-md-2 mb-0"></div>

                                <hr class="style-two">
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="mx-3 btn btn-secondary" data-dismiss="modal">Cancel</button>
                            <button type="submit"
                                    class="mx-3 btn bg-default"
                                    :disabled="$isProcessing"
                                    @click="updateEmployee(form.id, 'updatedUserDetails')">
                                Update Employee
                                <i class="far fa-paper-plane ml-1"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <!--update employee modal end-->

            <!--edit portal access modal start-->
            <div class="modal fade" id="editPortalAccess">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header py-2">
                            <h6 class="modal-title py-1">Edit Employee Portal Access</h6>
                            <a class="close py-1" data-dismiss="modal"
                               aria-label="Close">
                                <span aria-hidden="true" class="modal-close text-danger">
                                    <i class="fas fa-times"></i>
                                </span>
                            </a>
                        </div>
                        <form>
                            <div class="modal-body">
                                <div class="form-group col-12 float-left mt-0 mb-2">
                                    <span style="font-size: 14px" class="mb-2 w-100 float-left pl-1 text-center">
                                        Please Verify you selected the right access before clicking <br>
                                        <strong>Save Changes </strong>!
                                    </span>
                                    <div class="radio p-0 col-6 float-left text-center" v-for="access in portal_access">
                                        <input v-model="form.portal_access"
                                               name="access"
                                               type="radio"
                                               :id="access.name"
                                               :value="access.value"
                                               v-validate="'required'">
                                        <label :for="access.name">
                                            {{access.name | capitalize}} Access
                                        </label>
                                    </div>
                                    <small class="text-muted"
                                           v-if="errors.first('access')">
                                        {{errors.first('access')}}
                                    </small>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="m-2 btn btn-secondary" data-dismiss="modal">
                                    cancel
                                </button>
                                <button type="button"
                                        class="m-2 btn bg-default"
                                        @click="updateEmployee(form.id, 'updatedUserAccess')"
                                        :disabled="$isProcessing">
                                    Save changes
                                    <i class="far fa-paper-plane ml-1"></i>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <!--edit portal access modal end-->

            <!--reset employee password modal start-->
            <div class="modal fade" id="editPassword">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header py-2">
                            <h6 class="modal-title py-1">Reset Employee Password</h6>
                            <a class="close py-1" data-dismiss="modal"
                               aria-label="Close">
                                <span aria-hidden="true" class="modal-close text-danger">
                                    <i class="fas fa-times"></i>
                                </span>
                            </a>
                        </div>
                        <form>
                            <div class="modal-body">
                                <div class="form-group col-12 float-left mt-2 mb-4 ">
                                    <span>A new password will be sent to the employee via <strong>sms</strong>
                                          on the telephone He/She
                                        <strong>used for registration</strong>
                                          on this portal. <br><br>Please Kindly verify that the phone to
                                        receive the new password is on and active!</span> <br><br>
                                    <u><em>click the continue and reset password to finish this task!</em></u>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="m-2 btn btn-secondary" data-dismiss="modal">
                                    cancel
                                </button>
                                <button type="button"
                                        class="m-2 btn bg-default"
                                        @click="resetPassword"
                                        :disabled="$isProcessing">
                                    continue and reset password
                                    <i class="far fa-paper-plane ml-1"></i>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <!--reset employee password modal end-->
        </div>
    </transition>
</template>
<script>
    import {log} from '../../../helpers/log'
    import Flash from '../../../helpers/flash';
    import {get, post} from '../../../helpers/api';
    import SMS from '../../../helpers/sms';

    export default {
        data() {
            return {
                roles: {},
                form: {},
                gender: [
                    'male', 'female'
                ],
                statuses: [
                    'married', 'single', 'divorced', 'complicated'
                ],
                countries: ['nigeria'],
                qualifications: [
                    'bachelors',
                    'masters',
                    'doctorate',
                    'post-graduate',
                ],
                branches: {},
                error: {},
                qry: "",
                results: [],
                updatingEmployee: false,
                portal_access: [
                    {name: 'grant', value: 1},
                    {name: 'deny', value: 0}
                ]
            }
        },
        methods: {
            accessStatus(status) {
                return Boolean(Number(status));
            },
            autoCompleteNow() {
                if (!($('#search').val().length <= 0)) {
                    post("api/search", {qry: this.qry}).then((res) => {
                        this.results = res.data.result;
                        this.toolTip();
                    });
                } else this.results = [];
            },
            editEmployee(id) {
                this.updatingEmployee = true;
                this.$LIPS(true);
                get("api/employee/" + id + "/edit").then((res) => {
                    this.form = res.data.user;
                    this.roles = res.data.roles;
                    this.branches = res.data.branches;
                    $('#updateEmployee').modal('toggle');
                    this.$LIPS(false);
                });
            },
            editPortalAccess(employee) {
                this.updatingEmployee = false;
                this.form = employee;
                $('#editPortalAccess').modal('toggle');
            },
            editPassword(employee) {
                this.form = employee;
                $('#editPassword').modal('toggle');
            },
            resetPassword() {
                this.$LIPS(true);
                get('api/reset-password/' + this.form.id).then((res) => {
                    this.qry = '';
                    this.error = {};
                    this.results = [];
                    this.$scrollToTop();
                    $('#editPassword').modal('toggle');
                    log('resetUserPassword', this.form.staff_id);
                    Flash.setSuccess('The employee password was successfully reset!');
                    let details = {phone: String(parseInt(this.form.phone_number)), password: res.data.password};
                    SMS.passwordReset(details);
                    this.$LIPS(false);
                })
            },
            updateEmployee(id, task) {
                //if its for portal access turn updating
                // to false so validator cant see
                // the fields inside that form
                if (task === 'updatedUserAccess') this.updatingEmployee = false;
                this.$validator.validateAll().then((result) => {
                    if (result) {
                        this.$LIPS(true);
                        this.error = {};
                        this.results = [];
                        this.qry = '';
                        post("api/employee/" + id + "/update", this.form)
                            .then((res) => {
                                if (res.data.updated) {
                                    this.$scrollToTop();
                                    Flash.setSuccess('You have successfully updated the employees details!');
                                    if (task === 'updatedUserAccess') $('#editPortalAccess').modal('toggle');
                                    if (task === 'updatedUserDetails') $('#updateEmployee').modal('toggle');
                                    log(String(task), String(this.form.staff_id));
                                }
                                this.$LIPS(false);
                                //if its for portal access turn updating to true
                                // so validator can see the forms inside that
                                // form(also for the form to be visible)
                                if (task === 'updatedUserAccess') this.updatingEmployee = true;
                            })
                            .catch((err) => {
                                if (err.response.status === 422) {
                                    this.$scrollToTop();
                                    this.error = err.response.data;
                                    if (err.response.data.errors) this.error = err.response.data.errors;
                                }
                                this.$LIPS(false);
                            })
                    }
                    if (!result) {
                        Flash.setError('Please check all the fields and make sure they are field correctly!');
                        this.$scrollToTop();
                    }
                });
            },
            toolTip() {
                $(function () {
                    $('[data-toggle="tooltip"]').tooltip()
                });
            }
        },
        mounted() {
        }
    }
</script>