<template>
    <transition name="fade">
        <div :class="isModel('customer') && 'px-md-4 px-2'">
            <app-navigation :forward="{ path: $routerHistory.next().path }"
                            :previous="{ path: $routerHistory.previous().path }"
                            :pageTitle="`${$route.meta.appModel} List` | capitalize"
                            :pageTitleSmall="`${$route.meta.appModel}. List` | capitalize"
                            v-if="isModel('customer')"/>
            <div class="pt-md-3 pt-2" id="employeeEdit">
                <div class="card">
                    <div class="px-5 py-4">
                        <div class="px-3 clearfix">
                            <h5 class="h5-custom float-left m-0">{{$route.meta.appModel | capitalize}} Management</h5>

                                <router-link :to="'/log/inventory/search'" id="first" class="float-right mx-4 btn btn-primary bg-default m-0 " v-if="isModel('inventory')">
                                    Search Products
                                </router-link>

                            <router-link :to="`${$route.meta.new}/create`"
                                         class="float-right btn btn-primary bg-default m-0 mx-4" id="second">
                                Add {{$route.meta.appModel}}!
                            </router-link>
                        </div>
                    </div>

                    <hr class="m-0">



                    <div>
                        <!--data viewer starts here-->
                        <div class="card-body p-4 p-md-5">
                            <div class="clearfix w-100">
                                <div class="form-group col-md-2 col-sm-6 px-md-3 px-1 float-left">
                                    <label>Search Column</label>
                                    <select class="custom-select w-100" v-model="query.search_column">
                                        <option :value="column" v-for="column in columns">{{column | capitalize}}
                                        </option>
                                    </select>
                                </div>
                                <div class="form-group col-md-2 col-sm-6 px-md-3 px-1 float-left">
                                    <label>Search Operator</label>
                                    <select class="custom-select w-100" v-model="query.search_operator">
                                        <option :value="key" v-for="(value, key) in operators">{{value}}</option>
                                    </select>
                                </div>
                                <div class="form-group col-md-6 col-sm-6 px-md-3 px-1 float-left">
                                    <label>Search Input</label>
                                    <input @keyup.enter="fetchIndexData()" class="form-control" placeholder="search..."
                                           type="text"
                                           v-model="query.search_input">
                                </div>
                                <div class="form-group col-md-2 col-sm-6 px-md-3 px-1 pt-md-2 pt-0 float-left">
                                    <button @click="fetchIndexData()"
                                            class="btn btn-block bg-default mb-0 mt-3 mt-md-4">Filter
                                    </button>
                                </div>
                            </div>
                            <div class="px-0 px-md-3 mt-3 table-responsive">
                                <table class="table m-0 table-bordered table-hover">
                                    <thead class="thead-light">
                                    <tr>
                                        <th @click="toggleOrder(column)" scope="col" v-for="column in columns">
                                            <span>{{column | capitalize}}</span>
                                            <span class="dv-table-column" v-if="column === query.column">
                                                <span v-if="query.direction === 'desc'">&uarr;</span>
                                                <span v-else>&darr;</span>
                                            </span>
                                        </th>
                                        <th scope="col"><span>Action</span></th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr v-for="model in model.data">
                                        <td v-for="(value,key) in model">
                                            <span v-if="!['verification'].includes(key)">{{value}}</span>
                                            <ApprovalStatusButton
                                                v-else
                                                size="small"
                                                :key="model.id"
                                                :customer="model"
                                                :link="`verification?id=${model.id}`"/>
                                        </td>

                                        <td v-if="isModel('user')">
                                            <router-link :to="`employee/${model.id}/edit`"
                                                         class="text-center mx-2 btn btn-dark btn-icon btn-sm float-left btn-round"
                                                         data-placement="top"
                                                         data-toggle="tooltip"
                                                         title="Edit Employee Detail">
                                                <i class="fas fa-user-edit"></i>
                                            </router-link>
                                            <button :class="{ 'btn-success' : model.portal_access,
                                            'btn-danger' :  !model.portal_access}"
                                                    @click="update(model,'editPortalAccess')"
                                                    class="text-center mr-2 btn btn-icon btn-sm float-left btn-round"
                                                    data-placement="top"
                                                    data-toggle="tooltip"
                                                    title="Edit Employee Portal Access">
                                                <i class="fas fa-lock-open"
                                                   v-if="model.portal_access"></i>
                                                <i class="fas fa-lock" v-else></i>
                                            </button>
                                            <button @click="update(model,'editPassword')"
                                                    class="text-center mr-2 btn btn-warning btn-icon btn-sm float-left btn-round"
                                                    data-placement="top"
                                                    data-toggle="tooltip"
                                                    title="Reset Employee Password">
                                                <i class="fas fa-key"></i>
                                            </button>
                                        </td>
                                        <td v-if="
                                        isModel('branch') ||
                                        isModel('inventory')||
                                        isModel('product') ||
                                        isModel('brand') ||
                                        isModel('category') ||
                                        isModel('supplier')">
                                            <button @click="$router.push(`${$route.meta.new}/${model.id}/edit`)"
                                                    class="text-center mx-2 btn btn-success btn-icon btn-sm float-left btn-round"
                                                    data-placement="top" data-toggle="tooltip" title="update details">
                                                <i class="fas fa-cog"></i>
                                            </button>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                            <nav aria-label="Page navigation example" class="clearfix pt-5">
                                <span class="float-left col-md-6 col-12 px-0 mb-5 mb-md-0">
                                    Displaying: {{model.from}} - {{model.to}} of {{model.total}} {{$route.meta.appModel | capitalize}} (s)
                                </span>
                                <span class="justify-content-end float-right col-md-6 col-12 px-0 mb-5 mb-md-0">
                                    <ul class="pagination m-0 float-right">
                                        <li class="page-item">
                                            <a @click="prev()" class="page-link">
                                                <i class="fas fa-arrow-circle-left"></i>
                                            </a>
                                        </li>
                                        <li class="page-item"><span class="page-link">Current Page: {{model.current_page}}</span></li>
                                        <li class="page-item">
                                            <a @click="next()" class="page-link">
                                                <i class="fas fa-arrow-circle-right"></i>
                                            </a>
                                        </li>
                                    </ul>
                                    <span class="float-left">
                                        <span class="py-2 pr-3 float-left">Rows Per Page </span>
                                        <input @keyup.enter="fetchIndexData()" class="form-control w-25"
                                               placeholder="search..." type="text" v-model="query.per_page">
                                    </span>
                                </span>
                            </nav>
                        </div>
                        <!--data viewer ends here-->

                        <!--employ portal access update modal starts here-->
                        <div class="modal fade" id="editPortalAccess">
                            <div class="modal-dialog" role="document">
                                <div class="modal-content">
                                    <div class="modal-header py-2">
                                        <h6 class="modal-title py-1">Edit Employee Portal Access</h6>
                                        <a aria-label="Close" class="close py-1" data-dismiss="modal">
                                            <span aria-hidden="true" class="modal-close text-danger">
                                                <i class="fas fa-times"></i>
                                            </span>
                                        </a>
                                    </div>
                                    <form>
                                        <div class="modal-body">
                                            <div class="form-group col-12 float-left mt-0 mb-2">
                                                <span class="mb-2 w-100 float-left pl-1 text-center">
                                                   Please Verify you selected the right access before clicking <br>
                                                   <strong>Save Changes </strong>!
                                                </span>
                                                <div class="radio p-0 col-6 float-left text-center"
                                                     v-for="{name,value} in portal_access">
                                                    <input :id="name" :value="value" name="access"
                                                           type="radio" v-model="form.portal_access">
                                                    <label :for="name">{{name | capitalize}} Access</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="modal-footer">
                                            <button class="m-2 btn btn-secondary" data-dismiss="modal" type="button">
                                                cancel
                                            </button>
                                            <button :disabled="$isProcessing" @click="myLog(form.id)"
                                                    class="m-2 btn bg-default" type="button">
                                                Save changes
                                                <i class="far fa-paper-plane ml-1"></i>
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <!--employ portal access update modal stops here-->

                        <!--employee password reset modal starts here-->
                        <div class="modal fade" id="editPassword">
                            <div class="modal-dialog" role="document">
                                <div class="modal-content">
                                    <div class="modal-header py-2">
                                        <h6 class="modal-title py-1">Reset Employee Password</h6>
                                        <a aria-label="Close" class="close py-1" data-dismiss="modal">
                                            <span aria-hidden="true" class="modal-close text-danger">
                                                <i class="fas fa-times"></i>
                                            </span>
                                        </a>
                                    </div>
                                    <form>
                                        <div class="modal-body">
                                            <div class="form-group col-12 float-left mt-2 mb-4 ">
                                                <span>A new password will be sent to the employee via <strong>sms</strong> on the
                                                      telephone He/She <strong>used for registration</strong> on this portal.
                                                    <br><br>Please Kindly verify that the phone to receive the new password is on and active!
                                                </span>
                                                <br><br>
                                                <u><em>click the continue and reset password to finish this
                                                    task!</em></u>
                                            </div>
                                        </div>
                                        <div class="modal-footer">
                                            <button class="m-2 btn btn-secondary" data-dismiss="modal" type="button">
                                                cancel
                                            </button>
                                            <button :disabled="$isProcessing" @click="resetPassword"
                                                    class="m-2 btn bg-default"
                                                    type="button">
                                                continue and reset password <i class="far fa-paper-plane ml-1"></i>
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <!--employee password reset modal stops here-->
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>
<script>
    import Vue from 'vue';
    import {mapActions} from 'vuex';
    import {log} from "../utilities/log";
    import Flash from '../utilities/flash';
    import {Message} from '../utilities/sms';
    import {byMethod, get} from '../utilities/api';
    import AppNavigation from '../components/AppNavigation';
    import ApprovalStatusButton from '../components/ApprovalStatusButton';


    export default {

        components: {ApprovalStatusButton, AppNavigation},

        data() {
            return {
                /*data generic to data viewer starts here*/
                model: {},
                columns: {},
                query: {
                    page: 1,
                    column: 'id',
                    direction: 'desc',
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
                    like: 'LIKE'
                },
                /*data generic to data viewer stops here*/

                /*data peculiar to hrm portal data viewer starts here*/
                form: {},
                portal_access: [
                    {name: 'grant', value: 1},
                    {name: 'deny', value: 0}
                ],
                /*data peculiar to hrm portal data viewer stops here*/
            }
        },

        created() {
            this.$prepareStates();
            this.$prepareBranches();
            // this.$prepareProducts();
            this.fetchIndexData();
            $(document).on('click', 'tr', function () {
                $('tr.current').removeClass('current');
                $(this).addClass('current');
            });
            this.addCustomerOptionsModalsToDom();
        },

        updated() {
            $('[data-toggle="tooltip"]').tooltip();
        },

        methods: {
            /*methods exclusive to data viewer starts here*/

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
                if (column === this.query.column)
                    this.query.direction = this.query.direction === 'desc' ? 'asc' : 'desc';
                else {
                    this.query.column = column;
                    this.query.direction = 'asc';
                }
                this.fetchIndexData();
            },

            fetchIndexData() {
                this.$LIPS(true);
                $('.modal').modal('hide');
                get(
                    `${this.$route.meta.source}` +
                    `?page=${this.query.page}` +
                    `&column=${this.query.column}` +
                    `&per_page=${this.query.per_page}` +
                    `&direction=${this.query.direction}` +
                    `&search_input=${this.query.search_input}` +
                    `&search_column=${this.query.search_column}` +
                    `&search_operator=${this.query.search_operator}`)
                    .then(res => {
                        let data = res.data.model.data;
                        /*the state id for the branch fetched from the db is a number
                        * hence the code below is used to get the state name
                        * corresponding to the state id and display it
                        * instead of showing state id as a number*/
                        if (data.length) {
                            data.forEach(curr => {
                                if (data[0].state_id) curr.state_id =
                                    this.$store.getters.getStates.find(obj => obj.id === curr.state_id).name;
                                if (data[0].branch_id) curr.branch_id =
                                    this.$store.getters.getBranches.find(obj => obj.id === curr.branch_id).name;
                                if (this.isModel('customer')) curr.verification = this.$getCustomerApprovalStatus(curr.verification);
                            });
                        }
                        Vue.set(this.$data, 'model', res.data.model);
                        Vue.set(this.$data, 'columns', res.data.columns);
                        this.$scrollToTop();
                        this.$LIPS(false);
                    })
            },
            /*methods exclusive to data viewer stop here*/

            /*methods exclusive to hrm data viewer starts here*/
            update(emp, mod) {
                this.form = emp;
                $(`#${mod}`).modal('toggle');
            },

            resetPassword() {
                if (this.$network()) {
                    this.$LIPS(true);
                    get(`/api/reset-password/${this.form.id}`).then(({data}) => {
                        let {password: psw} = data,//extract password from the data received
                            {staff_id: id, phone_number: tel} = this.form,
                            body = `Password reset successful! if your did not request for a new password kindly`
                                + ` report back immediately, your staff ID is ${id}, new password: ${psw}`;
                        log('resetUserPassword', id);
                        (new Message(body, tel, false)).send(r => r.status === 200 && this.done());
                        Flash.setSuccess('Password reset successful!');
                    });
                } else this.$networkErr();
            },

            myLog(id) {
                if (this.$network()) {
                    this.$LIPS(true);
                    byMethod('PUT', `/api/user/${id}`, this.form)
                        .then(({data}) => {
                            log(`PortalAccessUpdated`, String(data.staff_id));
                            Flash.setSuccess('Portal access updated', 20000);
                        })
                        .catch(({response: r}) => {
                            let {message} = r.data;
                            Flash.setError(message ? message : 'Error updating status. Try again later!', 10000)
                        })
                        .finally(() => this.done());
                } else this.$networkErr();
            },

            done() {
                this.$scrollToTop();
                this.$LIPS(false);
                $('.modal').modal('hide');
            },
            /*methods exclusive to hrm data viewer stops here*/

            isModel(m) {
                return this.$route.meta.appModel === m;
            },

            ...mapActions('ModalAccess', [
                'addCustomerOptionsModalsToDom',
                'removeCustomerOptionsModalsFromDom'
            ])
        },

        destroyed() {
            this.removeCustomerOptionsModalsFromDom();
        }
    }
</script>

