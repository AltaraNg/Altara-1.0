<template>
   <div>
      <!--data viewer starts here-->
      <div class="card-body p-4 p-md-5">
         <div class="clearfix w-100">
            <div class="form-group col-md-2 col-sm-6 px-md-3 px-1 float-left">
               <label>Search Column</label>
               <select class="custom-select w-100" v-model="query.search_column">
                  <option :value="column" v-for="column in columns">{{column | capitalize}}</option>
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
               <input @keyup.enter="fetchIndexData()" class="form-control" placeholder="search..." type="text"
                      v-model="query.search_input">
            </div>
            <div class="form-group col-md-2 col-sm-6 px-md-3 px-1 pt-md-2 pt-0 float-left">
               <button @click="fetchIndexData()" class="btn btn-block bg-default mb-0 mt-3 mt-md-4">Filter</button>
            </div>
         </div>
         <div class="px-0 px-md-3 mt-3 table-responsive">
            <table class="table m-0  table-bordered table-hover">
               <thead class="thead-light">
               <tr>
                  <th @click="toggleOrder(column)" scope="col" v-for="column in columns">
                     <span>{{column | capitalize}}</span>
                     <span class="dv-table-column" v-if="column === query.column">
                        <span v-if="query.direction === 'desc'">&uarr;</span>
                        <span v-else>&darr;</span>
                     </span>
                  </th>
                  <th scope="col" v-if="user || branch || customer"><span>Action</span></th>
               </tr>
               </thead>
               <tbody>
               <tr v-for="model in model.data">
                  <td v-for="(value,key) in model">{{value}}</td>
                  <td v-if="user">
                     <button @click="update(model,'updateEmployee',1)"
                             class="text-center mx-2 btn btn-dark btn-icon btn-sm float-left btn-round"
                             data-placement="top"
                             data-toggle="tooltip"
                             title="Edit Employee Detail">
                        <i class="fas fa-user-edit"></i>
                     </button>
                     <button :class="{ 'btn-success' : accessStatus(model.portal_access),
                                            'btn-danger' :  !accessStatus(model.portal_access)}"
                             @click="update(model,'editPortalAccess')"
                             class="text-center mr-2 btn btn-icon btn-sm float-left btn-round" data-placement="top" data-toggle="tooltip"
                             title="Edit Employee Portal Access">
                        <i class="fas fa-lock-open" v-if="accessStatus(model.portal_access)"></i>
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
                  <td v-if="branch || customer">
                     <button :title="`${branch ? 'update branch details' : 'view details'}`"
                             @click="branch ? $router.push(`/fsl/branch/${model.id}/edit`) : $router.push(`/customer/${model.id}`)"
                             class="text-center mx-2 btn btn-success btn-icon btn-sm float-left btn-round"
                             data-placement="top"
                             data-toggle="tooltip">
                        <i class="fas fa-cog" v-if="branch"></i>
                        <i class="far fa-user" v-if="customer"></i>
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
                            <a @click="prev()" class="page-link"><i class="fas fa-arrow-circle-left"></i></a>
                        </li>
                        <li class="page-item"><span class="page-link">Current Page: {{model.current_page}}</span></li>
                        <li class="page-item">
                            <a @click="next()" class="page-link"><i class="fas fa-arrow-circle-right"></i></a>
                        </li>
                    </ul>
                    <span class="float-left">
                        <span class="py-2 pr-3 float-left">Rows Per Page </span>
                        <input @keyup.enter="fetchIndexData()" class="form-control float-left" placeholder="search..."
                               type="text" v-model="query.per_page">
                    </span>
                </span>
         </nav>
      </div>
      <!--data viewer stops here-->

      <!--employee details update modal start here-->
      <div class="modal fade bd-example-modal-lg" id="updateEmployee">
         <div class="modal-dialog modal-lg">
            <div class="modal-content">
               <div class="modal-header py-2">
                  <h6 class="modal-title py-1">Update Employee Details</h6>
                  <a aria-label="Close" class="close py-1" data-dismiss="modal">
                     <span aria-hidden="true" class="modal-close text-danger"><i class="fas fa-times"></i></span>
                  </a>
               </div>
               <div class="modal-body">
                  <utility-form :bus="bus" :receivedData="sentData" @done="fetchIndexData()" action="update"/>
                  <!--call for the same form used for staff/employee registration-->
               </div>
            </div>
         </div>
      </div>
      <!--employee details update modal stops here-->

      <!--employ portal access update modal starts here-->
      <div class="modal fade" id="editPortalAccess">
         <div class="modal-dialog" role="document">
            <div class="modal-content">
               <div class="modal-header py-2">
                  <h6 class="modal-title py-1">Edit Employee Portal Access</h6>
                  <a aria-label="Close" class="close py-1" data-dismiss="modal">
                     <span aria-hidden="true" class="modal-close text-danger"><i class="fas fa-times"></i></span>
                  </a>
               </div>
               <form>
                  <div class="modal-body">
                     <div class="form-group col-12 float-left mt-0 mb-2">
                        <span class="mb-2 w-100 float-left pl-1 text-center" style="font-size: 14px">
                           Please Verify you selected the right access before clicking <br>
                           <strong>Save Changes </strong>!
                        </span>
                        <div class="radio p-0 col-6 float-left text-center" v-for="access in portal_access">
                           <input :id="access.name" :value="access.value" name="access" type="radio"
                                  v-model="form.portal_access">
                           <label :for="access.name">{{access.name | capitalize}} Access</label>
                        </div>
                     </div>
                  </div>
                  <div class="modal-footer">
                     <button class="m-2 btn btn-secondary" data-dismiss="modal" type="button">cancel</button>
                     <button :disabled="$isProcessing" @click="bus.$emit('submit',form)" class="m-2 btn bg-default"
                             type="button"> Save changes <i class="far fa-paper-plane ml-1"></i>
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
                     <span aria-hidden="true" class="modal-close text-danger"><i class="fas fa-times"></i></span>
                  </a>
               </div>
               <form>
                  <div class="modal-body">
                     <div class="form-group col-12 float-left mt-2 mb-4 ">
                                <span>A new password will be sent to the employee via <strong>sms</strong> on the
                                      telephone He/She <strong>used for registration</strong> on this portal.
                                    <br><br>Please Kindly verify that the phone to receive the new password is on and active!
                                </span><br><br>
                        <u><em>click the continue and reset password to finish this task!</em></u>
                     </div>
                  </div>
                  <div class="modal-footer">
                     <button class="m-2 btn btn-secondary" data-dismiss="modal" type="button">cancel</button>
                     <button :disabled="$isProcessing" @click="resetPassword" class="m-2 btn bg-default"
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
</template>
<script>
   import Vue from 'vue';
   import SMS from '../helpers/sms';
   import {log} from "../helpers/log";
   import {get} from '../helpers/api';
   import {store} from '../store/store';
   import Flash from '../helpers/flash';
   import UtilityForm from '../views/HRM/utility/form';

   export default {
      components: {UtilityForm},
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
            bus: new Vue(),
            form: {},
            portal_access: [
               {name: 'grant', value: 1},
               {name: 'deny', value: 0}
            ],
            sentData: {},
            /*data peculiar to hrm portal data viewer stops here*/
         }
      },
      props: ['source', 'title', 'appModel'],
      created() {
         this.$prepareStates();
         this.fetchIndexData();
         $(document).on('click', 'tr', function () {
            $('tr.current').removeClass('current');
            $(this).addClass('current');
         });
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
               this.query.direcntion = 'asc';
            }
            this.fetchIndexData();
         },
         fetchIndexData() {
            this.$LIPS(true);
            $('.modal').modal('hide');
            get(
               `${this.source}` +
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
                  if (data.length && data[0].state_id) {
                     data.forEach(curr => curr.state_id =
                        store.getters.getStates.find(obj => obj.id === curr.state_id).name)
                  }
                  Vue.set(this.$data, 'model', res.data.model);
                  Vue.set(this.$data, 'columns', res.data.columns);
                  this.$scrollToTop();
                  this.$LIPS(false);
               })
         },
         /*methods exclusive to data viewer stop here*/

         /*methods exclusive to hrm data viewer starts here*/
         accessStatus(status) {
            return Boolean(Number(status));
            /*returns true or false for the portal
            access status for each staff
            (1 or 0 respectively)*/
         },
         update(emp, mod, up = 0) {
            /*emp is the employer you want to carry an action on
            * mod is the modal id that carries the form for the process
            * up is tentative if 0*/
            if (up === 0) {
               this.form = emp;
               $(`#${mod}`).modal('toggle');
               /*then action is for password reset or portal access update
               * the corresponding modal is triggered as above*/
            } else if (up === 1) {
               /*if up is 1 then its for details update*/
               if (this.$network()) {
                  this.$LIPS(true);
                  get(`/api/employee/${emp.id}/edit`).then(res => {
                     /*the full employee details are fetched to populate
                     the form for editing ie the utility form*/
                     this.sentData = res.data;
                     /*the data sent to the utility form is updated*/
                     $(`#${mod}`).modal('toggle');
                     /*corresponding modal is toggled*/
                     this.$LIPS(false);
                  });
               } else this.$networkErr();
            }
         },
         resetPassword() {
            if (this.$network()) {
               this.$LIPS(true);
               get(`/api/reset-password/${this.form.id}`).then(res => {
                  this.$scrollToTop();
                  $('#editPassword').modal('toggle');
                  log('resetUserPassword', this.form.staff_id);
                  Flash.setSuccess('Employee password reset successful!');
                  let details = {
                     phone: String(parseInt(this.form.phone_number)), password: res.data.password,
                     staff_id: this.form.staff_id
                  };
                  SMS.passwordReset(details);
                  this.$LIPS(false);
               })
            } else this.$networkErr();
         },
         /*methods exclusive to hrm data viewer stops here*/
      },
      computed: {
         user() {
            return this.appModel === 'user';
            /*return true if the context
            * of the data viewer is
            * for employees*/
         },
         branch() {
            return this.appModel === 'branch';
            /*return true if the context
            * of the data viewer is
            * for branch*/
         },
         customer() {
            return this.appModel === 'customer';
            /*return true if the context
            * of the data viewer is
            * for customer*/
         }
      },
   }
</script>