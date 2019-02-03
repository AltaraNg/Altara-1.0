<template>
   <div class="card">
      <ul class="nav nav-tabs justify-content-center bg-default"><h6>Daily Report (Captains)</h6></ul>
      <div class="card-body px-4">
         <!--<form @submit.prevent="generateReport">
            <div class="my-4 clearfix">

               <div class="form-group col-md-3 col-sm-6 px-md-3 px-1 float-left">
                  <label>Branch</label>
                  <select class="custom-select w-100" v-model="report.branch.id"
                          v-validate="'required'" data-vv-as="office branch" name="branch_id" data-vv-validate-on="blur">
                     <option value="">select branch</option>
                     <option :value="0" v-if="$store.getters.verifyDSALead">For All Branches(For Sales Leads)</option>
                     <option :value="branch.id" v-for="branch in $store.state.branches">{{branch.name}}</option>
                  </select>
                  <small v-if="errors.first('branch_id')">{{errors.first('branch_id')}}</small>
               </div>


               <div class="form-group col-md-3 col-sm-6 px-md-3 px-1 float-left">
                  <label>Date from:</label>
                  <input type="date" class="form-control" v-model="report.from" v-validate="'required|date_format:MM/DD/YYYY'"
                         data-vv-as="Date from" name="date_from">
                  <small v-if="errors.first('date_from')">{{errors.first('date_from')}}</small>
               </div>

               <div class="form-group col-md-3 col-sm-6 px-md-3 px-1 float-left">
                  <label>Date To:</label>
                  <input type="date" class="form-control" v-model="report.to" v-validate="'required|date_format:MM/DD/YYYY'"
                         data-vv-as="Date to" name="date_to" :disabled="duration === 'daily'">
                  <small v-if="errors.first('date_to')">{{errors.first('date_to')}}</small>
               </div>

               <div class="form-group col-md-3 col-sm-6 px-md-3 px-1 float-left">
                  <label class="w-100 float-left">Daily/Weekly</label>
                  <div class="radio p-0 col-md-6 col-6 float-left">
                     <input v-model="duration" name="date" type="radio" id="daily" value="daily">
                     <label for="daily">daily</label>
                  </div>
                  <div class="radio p-0 col-md-6 col-6 float-left">
                     <input v-model="duration" name="date" type="radio" id="weekly/other" value="other">
                     <label for="weekly/other">other</label>
                  </div>
                  <small v-if="errors.first('date')">{{errors.first('date')}}</small>
               </div>

            </div>

            <div class="col-sm-12 mx-auto mt-md-2 mt-0 px-md-3 px-1 mb-4">
               <button type="submit" class="btn btn-block btn-lg bg-default" :disabled="$isProcessing">
                  Generate Report <i class="far fa-paper-plane ml-1"></i>
               </button>
            </div>
         </form>-->

         <form @submit.prevent="submitReport" id="dsaDailyReportForm">
            <div class="my-4 clearfix">

               <div class="form-group col-md-3 col-sm-6 px-md-3 px-1 float-left">
                  <label>DSA (Name-ID)</label>
                  <select class="custom-select w-100" data-vv-validate-on="blur" name="dsa" v-model="report.user_id"
                          v-validate="'required'">
                     <option value="">select DSA</option>
                     <option :value="user.id" v-for="user in users">{{`${user.full_name} - (${user.staff_id})`}}</option>
                  </select>
                  <small v-if="errors.first('dsa')">{{errors.first('dsa')}}</small>
               </div>

               <div class="form-group col-md-3 col-sm-6 px-md-3 px-1 float-left">
                  <label>Date</label>
                  <input class="form-control" name="date" type="date" v-model="report.date" v-validate="'required|date_format:MM/DD/YYYY'">
                  <small v-if="errors.first('date')">{{errors.first('date')}}</small>
               </div>

               <div class="form-group col-md-3 col-sm-6 px-md-3 px-1 float-left">
                  <label>Number of forms registered on portal</label>
                  <input class="form-control" data-vv-as="number on portal" name="number_on_portal" type="number"
                         v-model="report.number_on_portal" v-validate="'required|integer|min:0'">
                  <small v-if="errors.first('number_on_portal')">{{errors.first('number_on_portal')}}</small>
               </div>

               <div class="form-group col-md-3 col-sm-6 px-md-3 px-1 float-left">
                  <label>Number of forms submitted too captain</label>
                  <input class="form-control" data-vv-as="number to captain" name="number_to_captain" type="number"
                         v-model="report.number_to_captain" v-validate="'required|integer|min:0'">
                  <small v-if="errors.first('number_to_captain')">{{errors.first('number_to_captain')}}</small>
               </div>

               <div class="spaceAfter"></div>

               <div class="form-group col-md-3 col-sm-6 px-md-3 px-1 float-left">
                  <label class="w-100 float-left">Remark/Comment</label>
                  <textarea class="form-control" cols="3" name="remark" v-model="report.remark" v-validate="'required|max:255'"></textarea>
                  <small v-if="errors.first('remark')">{{errors.first('remark')}}</small>
               </div>

            </div>

            <div class="col-sm-12 mx-auto mt-md-2 mt-0 px-md-3 px-1 mb-4">
               <button :disabled="$isProcessing" class="btn btn-block btn-lg bg-default" type="submit">
                  Log Report <i class="far fa-paper-plane ml-1"></i>
               </button>
            </div>
         </form>


      </div>
   </div>
</template>

<script>
   import Flash from '../../../helpers/flash';
   import {get, post} from "../../../helpers/api";

   export default {

      data() {

         return {
            // duration: 'daily',
            /** duration is used a to toggle the "to date"
             * to make if disabled when the user
             * wants a daily report*/
            users: null,
            report: null,
         }
      },

      methods: {

         initForm(){
            this.report = {
               user_id: '',
               date: this.$getDate(),
               number_on_portal: '',
               number_to_captain: '',
               remark: ''
            };
         },

         /*generateReport() {

            /!** check if the required fields have a value *!/
            this.$validator.validateAll().then(result => {

               if (result) {
                  /!** if the result from the check is truthy*!/

                  if (this.$network()) {
                     /!** check network connectivity*!/

                     let branch;

                     this.$LIPS(true);

                     /!** check is the user select "for all branches is where value is 0"*!/
                     if (this.report.branch.id !== 0) {
                        /!** if it he doesnt want for all branches*!/

                        /!** find the branch where the value of the branch input field matches with the branch id
                         * NB: the branches are stored in the store for use globally in the app*!/
                        branch = store.state.branches.find(obj => obj.id === this.report.branch.id);

                        /!**when u get the branch set the report branch to the branch retrieved above*!/
                        this.report.branch = branch;
                     }

                     /!** if
                      * (
                      *    (the duration is daily) and (the report.from is not today's date)
                      *    (NB: this.$getDate() is a vue prototype i created to return the current date)
                      * ) or (
                      *    report.from is greater than report.to
                      *    (NB: this implies that report.from must be earlier(in date) than the report to)
                      * )
                      * then reset the report.to to the report.from.
                      * The above ensure
                      * 1. that when a user selects daily that the both dates are the same date.
                      * 2. That the report.from must be earlier(in date) than the report to
                      * *!/
                     if ((this.duration === 'daily' && this.report.from !== this.$getDate()) || (this.report.from > this.report.to))
                        this.report.to = this.report.from;

                     postD(`/api/report/daily`, this.report)
                        .then(res => {

                           const url = window.URL.createObjectURL(new Blob([res.data]));

                           const link = document.createElement('a');

                           link.href = url;

                           link.setAttribute('download',

                              `report from ${this.report.from} to ${this.report.to}.xlsx`);

                           document.body.appendChild(link);

                           link.click();

                           this.$LIPS(false);
                        });
                  } else this.$networkErr();
               }
               if (!result) this.$networkErr('form');
            });
         },*/

         submitReport() {
            /** validate form*/
            this.$validator.validateAll().then(result => {
               /** if validation is successful*/
               if (result) {
                  /** check is network is available*/
                  if (this.$network()) {
                     /** if network is available*/
                     this.$LIPS(true);
                     /** make a request to the backend*/
                     post(`/api/dsa_daily_registration`, this.report)
                        .then(res => {
                           document.getElementById('dsaDailyReportForm').reset();
                           this.$validator.reset();
                           this.initForm();
                           this.$scrollToTop();
                           this.$LIPS(false);
                           if (res.data.submitted) Flash.setSuccess(res.data.message);
                        }).catch(() => Flash.setError('Error logging report please try again later!'));
                  } else this.$networkErr();
               }
               if (!result) this.$networkErr('form');
            });
         }
      },

      created() {
         /** get the details of the current user */
         /*get(`/api/user/${this.$store.state.user_id}`)
            .then(res => this.report.branch = res.data.user.branch);*/
         this.initForm();
         get(`/api/user/getBranchUsers`).then(res => this.users = res.data.DSAs);

         /** set the branch for the daily report form to the current users branch.
          * This is to reduce the time the user spend on selecting
          * options on the form*/
      },

      watch: {
         /* duration: function (val) {
             /!** ifi the current option select by the user is "daily" set the TO to current date*!/

             if (val === 'daily') this.report.to = this.$getDate();
          }*/
      }
   }
</script>