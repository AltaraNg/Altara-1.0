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
                        <utility-form @done="doneUpdating" :receivedData="sentData" action="update"/>
                    </div>
                </div>
            </div>
        </div>

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
                                    @click="updateEmployee(form.id)"
                                    :disabled="$isProcessing">
                                Save changes
                                <i class="far fa-paper-plane ml-1"></i>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

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
    </div>
</template>
<script>
    import Vue from 'vue';
    import SMS from '../helpers/sms';
    import {log} from "../helpers/log";
    import Flash from '../helpers/flash';
    import {get, post} from '../helpers/api';
    import UtilityForm from '../views/HRM/utility/form';

    export default {
        components: {
            UtilityForm
        },
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
                form: {},
                error: {},
                portal_access_temp: '',
                portal_access: [
                    {name: 'grant', value: 1},
                    {name: 'deny', value: 0}
                ],
                sentData: {},
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
                this.form = employee;
                $('#editPortalAccess').modal('toggle');
            },
            editEmployee(id) {
                if (this.$network()) {
                    this.$LIPS(true);
                    get("api/employee/" + id + "/edit").then((res) => {
                        this.sentData = res.data;
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
            updateEmployee(id) {
                this.$validator.validateAll().then((result) => {
                    if (result) {
                        if (this.$network()) {
                            this.$LIPS(true);
                            this.error = {};
                            post("api/employee/" + id + "/update", this.form)
                                .then(res => {
                                    this.complete('Staff details updated!');
                                    log('updatedUserPortalAccess', String(this.form.staff_id));
                                })
                                .catch(err => {
                                    this.complete(err.response.data.message, 'err');
                                })
                        } else this.$networkErr();
                    }
                });
            },
            complete(msg,type = 'success') {
                this.fetchIndexData();
                this.$scrollToTop();
                $('#editPortalAccess').modal('toggle');
                this.$LIPS(false);
                (type == 'err') ? Flash.setError(msg, 1000) : Flash.setSuccess(msg);
            },
            toolTip() {
                $(function () {
                    $('[data-toggle="tooltip"]').tooltip();
                });
            },
            doneUpdating() {
                this.fetchIndexData();
                $('.modal').modal('hide');
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