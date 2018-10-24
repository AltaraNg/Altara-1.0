<template>
    <div>
        <div class="card-body p-4 p-md-5">
            <div class="clearfix w-100">
                <div class="form-group col-md-2 col-sm-6 px-md-3 px-1 float-left">
                    <label>Search Column</label>
                    <select class="custom-select w-100" v-model="query.search_column">
                        <option v-for="column in columns" :value="column">{{column | capitalize}}</option>
                    </select>
                </div>
                <div class="form-group col-md-2 col-sm-6 px-md-3 px-1 float-left">
                    <label>Search Operator</label>
                    <select class="custom-select w-100" v-model="query.search_operator">
                        <option v-for="(value, key) in operators" :value="key">{{value}}</option>
                    </select>
                </div>
                <div class="form-group col-md-6 col-sm-6 px-md-3 px-1 float-left">
                    <label>Search Input</label>
                    <input type="text" class="form-control" placeholder="search..." v-model="query.search_input"
                           @keyup.enter="fetchIndexData()">
                </div>
                <div class="form-group col-md-2 col-sm-6 px-md-3 px-1 pt-md-2 pt-0 float-left">
                    <button class="btn btn-block bg-default mb-0 mt-3 mt-md-4" @click="fetchIndexData()">Filter</button>
                </div>
            </div>
            <div class="px-0 px-md-3 mt-3 table-responsive">
                <table class="table m-0  table-bordered table-hover">
                    <thead class="thead-light">
                    <tr>
                        <th v-for="column in columns" @click="toggleOrder(column)" scope="col">
                            <span>{{column | capitalize}}</span>
                            <span class="dv-table-column" v-if="column === query.column">
                                <span v-if="query.direction === 'desc'">&uarr;</span>
                                <span v-else>&darr;</span>
                            </span>
                        </th>
                        <th v-if="user" scope="col"><span>Action</span></th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="employee in model.data">
                        <td v-for="(value,key) in employee">{{value}}</td>
                        <td v-if="user">
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
                                    data-toggle="tooltip" data-placement="top" title="Edit Employee Portal Access"
                                    @click="editPortalAccess(employee)">
                                <i class="fas fa-lock-open" v-if="accessStatus(employee.portal_access)"></i>
                                <i class="fas fa-lock" v-else></i>
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
            <nav aria-label="Page navigation example" class="clearfix pt-5">
                <span class="float-left col-md-6 col-12 px-0 mb-5 mb-md-0">
                    Displaying: {{model.from}} - {{model.to}} of {{model.total}} {{appModel | capitalize}} (s)
                </span>
                <span class="justify-content-end float-right col-md-6 col-12 px-0 mb-5 mb-md-0">
                    <ul class="pagination m-0 float-right">
                        <li class="page-item">
                            <a class="page-link" @click="prev()"><i class="fas fa-arrow-circle-left"></i></a>
                        </li>
                        <li class="page-item"><span class="page-link">Current Page: {{model.current_page}}</span></li>
                        <li class="page-item">
                            <a class="page-link" @click="next()"><i class="fas fa-arrow-circle-right"></i></a>
                        </li>
                    </ul>
                    <span class="float-left">
                        <span class="py-2 pr-3 float-left">Rows Per Page </span>
                        <input type="text" class="form-control float-left" placeholder="search..."
                               v-model="query.per_page"
                               @keyup.enter="fetchIndexData()" style="width:50px">
                    </span>
                </span>
            </nav>
        </div>

        <!--update employee modal start-->
        <div class="modal fade bd-example-modal-lg" id="updateEmployee">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header py-2">
                        <h6 class="modal-title py-1">Update Employee Details</h6>
                        <a class="close py-1" data-dismiss="modal" aria-label="Close">
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
                        <a class="close py-1" data-dismiss="modal" aria-label="Close">
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
                                    @click="updateEmployee(form.id, 'updatedUserPortalAccess')"
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
</template>
<script>
    import Vue from 'vue';
    import SMS from '../helpers/sms';
    import {log} from "../helpers/log";
    import Flash from '../helpers/flash';
    import {get, post} from '../helpers/api';

    export default {
        data() {
            return {
                model: {},
                columns: {},
                query: {
                    page: 1,
                    column: 'id',
                    direction: 'asc',
                    per_page: 10,
                    search_column: 'id',
                    search_operator: 'greater_than',
                    search_input: 0
                },
                operators: {
                    equal: '=',
                    not_equal: '<>',
                    less_than: '<',
                    greater_than: '>',
                    less_than_or_equal_to: '<=',
                    greater_than_or_equal_to: '>=',
                    in: 'IN',
                    like: 'LIKE',
                },
                // the data below are not generic to the data viewer component
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
                updatingEmployee: false,
                portal_access_temp:'',
                portal_access: [
                    {name: 'grant', value: 1},
                    {name: 'deny', value: 0}
                ]
            }
        },
        props: ['source', 'title', 'appModel'],
        created() {
            this.fetchIndexData();
        },
        methods: {
            next() {
                if (this.model.next_page_url) {
                    this.query.page++;
                    this.fetchIndexData();
                }
            },
            prev() {
                if (this.model.prev_page_url) {
                    this.query.page--;
                    this.fetchIndexData();
                }
            },
            toggleOrder(column) {
                if (column === this.query.column) {
                    (this.query.direction === 'desc') ? this.query.direction = 'asc' : this.query.direction = 'desc';
                } else {
                    this.query.column = column;
                    this.query.direcntion = 'asc';
                }
                this.fetchIndexData();
            },
            fetchIndexData() {
                var vm = this;
                get(
                    `${this.source}` +
                    `?page=${this.query.page}` +
                    `&column=${this.query.column}` +
                    `&per_page=${this.query.per_page}` +
                    `&direction=${this.query.direction}` +
                    `&search_input=${this.query.search_input}` +
                    `&search_column=${this.query.search_column}` +
                    `&search_operator=${this.query.search_operator}`)
                    .then(function (response) {
                        Vue.set(vm.$data, 'model', response.data.model);
                        Vue.set(vm.$data, 'columns', response.data.columns);
                    })
                    .catch(function (error) {
                    });
            },
            // the methods below are not generic to the data viewer component
            editPassword(employee) {
                this.form = employee;
                $('#editPassword').modal('toggle');
            },
            accessStatus(status) {
                return Boolean(Number(status));
            },
            editPortalAccess(employee) {
                this.updatingEmployee = false;
                this.form = employee;
                $('#editPortalAccess').modal('toggle');
            },
            editEmployee(id) {
                if (this.$network()) {
                    this.updatingEmployee = true;
                    this.$LIPS(true);
                    get("api/employee/" + id + "/edit").then((res) => {
                        this.form = res.data.user;
                        this.roles = res.data.roles;
                        this.branches = res.data.branches;
                        $('#updateEmployee').modal('toggle');
                        this.$LIPS(false);
                    });
                } else this.$networkErr();
            },
            resetPassword() {
                if (this.$network()) {
                    this.$LIPS(true);
                    get('api/reset-password/' + this.form.id).then((res) => {
                        this.error = {};
                        this.$scrollToTop();
                        $('#editPassword').modal('toggle');
                        log('resetUserPassword', this.form.staff_id);
                        Flash.setSuccess('The employee password was successfully reset!');
                        let details = {phone: String(parseInt(this.form.phone_number)), password: res.data.password};
                        SMS.passwordReset(details);
                        this.$LIPS(false);
                    })
                } else this.$networkErr();
            },
            updateEmployee(id, task) {
                if (task === 'updatedUserPortalAccess') this.updatingEmployee = false;
                this.$validator.validateAll().then((result) => {
                    if (result) {
                        if (this.$network()) {
                            this.$LIPS(true);
                            this.error = {};
                            post("api/employee/" + id + "/update", this.form)
                                .then((res) => {
                                    if (res.data.updated) {
                                        this.fetchIndexData();
                                        this.$scrollToTop();
                                        Flash.setSuccess('You have successfully updated the employees details!');
                                        if (task === 'updatedUserPortalAccess') $('#editPortalAccess').modal('toggle');
                                        if (task === 'updatedUserDetails') $('#updateEmployee').modal('toggle');
                                        log(String(task), String(this.form.staff_id));
                                    }
                                    this.$LIPS(false);
                                    if (task === 'updatedUserPortalAccess') this.updatingEmployee = true;
                                })
                                .catch((err) => {
                                    if (err.response.status === 422) {
                                        this.$scrollToTop();
                                        this.error = err.response.data;
                                        if (err.response.data.errors) this.error = err.response.data.errors;
                                    }
                                    this.$LIPS(false);
                                })
                        } else this.$networkErr();
                    }
                    if (!result) {
                        Flash.setError('Please check all the fields and make sure they are field correctly!');
                        this.$scrollToTop();
                    }
                });
            },
            toolTip() {
                $(function () {
                    $('[data-toggle="tooltip"]').tooltip();
                });
            }
        },
        computed: {
            user() {
                if (this.appModel == 'user') {
                    return true
                }
                return false;
            }
        },
        mounted() {
            this.toolTip();
        }
    }
</script>