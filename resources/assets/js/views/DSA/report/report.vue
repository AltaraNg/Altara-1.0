<template>
    <transition name="fade">
        <div class="pt-md-3 pt-2 attendance-view" id="index">

            <custom-header :title="'Generate Report'"/>

            <div class="attendance-body">
                <form :data-vv-scope="'f1'" @submit.prevent="generateReport">
                    <div class="my-4 clearfix p-5 row bg-white shadow-sm card-radius">

                        <div class="form-group col-md-3 col-sm-6 px-md-3 px-1 float-left">
                            <label>Type</label>
                            <select class="custom-select w-100" data-vv-as="report type"
                                    data-vv-validate-on="blur" name="report_type" v-model="report.type"
                                    v-validate="'required'">
                                <option value="">select type</option>
                                <option :value="slug" v-for="{slug,name} in types">{{name | capitalize}}</option>
                            </select>
                            <small v-if="errors.first('f1.report_type')">{{errors.first('f1.report_type')}}</small>
                        </div>

                        <div class="form-group col-md-3 col-sm-6 px-md-3 px-1 float-left">
                            <label>Branch</label>
                            <select :disabled="!$store.getters.auth('DSALead')" class="custom-select w-100"
                                    data-vv-as="office branch" data-vv-validate-on="blur" name="branch_id"
                                    v-model="report.branch.id" v-validate="'required'">
                                <option value="">select branch</option>
                                <option :value="branch.id"
                                        v-for="branch in ($store.getters.auth('DSALead') ? $store.state.branches : pageBranch)">
                                    {{branch.name}}
                                </option>
                            </select>
                            <small v-if="errors.first('f1.branch_id')">{{errors.first('f1.branch_id')}}</small>
                        </div>

                        <div class="form-group col-md-3 col-sm-6 px-md-3 px-1 float-left">
                            <label>Date from:</label>
                            <input class="form-control" data-vv-as="Date from" name="date_from"
                                   type="date" v-model="report.from" v-validate="'required|date_format:MM/DD/YYYY'">
                            <small v-if="errors.first('f1.date_from')">{{errors.first('f1.date_from')}}</small>
                        </div>

                        <div class="form-group col-md-3 col-sm-6 px-md-3 px-1 float-left">
                            <label>Date To:</label>
                            <input class="form-control" data-vv-as="Date to" name="date_to"
                                   type="date" v-model="report.to"
                                   v-validate="'required|date_format:MM/DD/YYYY'">
                            <small v-if="errors.first('f1.date_to')">{{errors.first('f1.date_to')}}</small>
                        </div>

                    </div>
                    <div class="mb-5 px-0 row align-items-center">
                        <div class="clearfix d-flex justify-content-end w-100">
                            <button :disabled="$isProcessing" class="btn bg-default" type="submit">
                                Generate Report <i class="far fa-paper-plane ml-1"></i>
                            </button>
                        </div>
                    </div>
                </form>
            </div>

            <custom-header :title="'Send Daily Report'"/>

            <div class="attendance-body">
                <form :data-vv-scope="'f2'" @submit.prevent="submitReport" id="dsaDailyReportForm">
                    <div class="my-4 clearfix p-5 row bg-white shadow-sm card-radius">

                        <div class="form-group col-md-3 col-sm-6 px-md-3 px-1 float-left">
                            <label>DSA (Name-ID)</label>
                            <select class="custom-select w-100" data-vv-validate-on="blur" name="dsa"
                                    v-model="dailyReport.user_id"
                                    v-validate="'required'">
                                <option value="">select DSA</option>
                                <option :value="user.id" v-for="user in users">{{`${user.full_name} -
                                    (${user.staff_id})`}}
                                </option>
                            </select>
                            <small v-if="errors.first('f2.dsa')">{{errors.first('f2.dsa')}}</small>
                        </div>

                        <div class="form-group col-md-2 col-sm-6 px-md-3 px-1 float-left">
                            <label>Date</label>
                            <input class="form-control" name="date" type="date" v-model="dailyReport.date"
                                   v-validate="'required|date_format:MM/DD/YYYY'">
                            <small v-if="errors.first('f2.date')">{{errors.first('f2.date')}}</small>
                        </div>

                        <div class="form-group col-md-2 col-sm-6 px-md-3 px-1 float-left">
                            <label>Forms registered on portal</label>
                            <input class="form-control" data-vv-as="number on portal" name="number_on_portal"
                                   type="number"
                                   v-model="dailyReport.number_on_portal" v-validate="'required|integer|min:0'">
                            <small v-if="errors.first('f2.number_on_portal')">{{errors.first('f2.number_on_portal')}}
                            </small>
                        </div>

                        <div class="form-group col-md-2 col-sm-6 px-md-3 px-1 float-left">
                            <label>Forms submitted to captain</label>
                            <input class="form-control" data-vv-as="number to captain" name="number_to_captain"
                                   type="number"
                                   v-model="dailyReport.number_to_captain" v-validate="'required|integer|min:0'">
                            <small v-if="errors.first('f2.number_to_captain')">
                                {{errors.first('f2.number_to_captain')}}
                            </small>
                        </div>

                        <div class="form-group col-md-3 col-sm-6 px-md-3 px-1 float-left">
                            <label class="w-100 float-left">Remark/Comment</label>
                            <textarea class="form-control"
                                      cols="1"
                                      name="remark"
                                      v-model="dailyReport.remark"
                                      v-validate="'required|max:255'"></textarea>
                            <small v-if="errors.first('f2.remark')">{{errors.first('f2.remark')}}</small>
                        </div>

                    </div>
                    <div class="mb-5 px-0 row align-items-center">
                        <div class="clearfix d-flex justify-content-end w-100">
                            <button :disabled="$isProcessing" class="btn bg-default" type="submit">
                                Log Report <i class="far fa-paper-plane ml-1"></i>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </transition>
</template>
<script>
    import Flash from '../../../utilities/flash';
    import {get, post, postD} from '../../../utilities/api';
    import CustomHeader from '../../../components/customHeader';

    export default {

        components: {CustomHeader},

        beforeCreate() {
            !this.$store.getters.auth('DSACaptain') && this.$networkErr('page');
            get(`/api/user/${this.$store.state.user_id}`).then(({data}) => {
                this.report.branch = data.user.branch;
                this.pageBranch.push(data.user.branch);
            });
            get(`/api/user/getBranchUsers`).then(({data}) => this.users = data.DSAs);
            this.$prepareBranches();
        },
        created() {
            this.setDates();
            this.initForm();
            console.log(this.$getDate());
        },
        data() {
            return {
                types: [
                    {name: "sales report", slug: "sales_report"},
                    /*{name: "score card", slug: "score_card"},
                    {name: "weekly operations", slug: "weekly_operations"}*/
                ],
                report: {
                    to: '',
                    from: '',
                    branch: {id: '', name: ''},
                    employee: '',
                    type: ''
                },
                //for daily report
                users: null,
                dailyReport: null,
                pageBranch: []
            }
        },
        methods: {
            initForm() {
                this.dailyReport = {
                    user_id: '',
                    date: this.$getDate(),
                    number_on_portal: '',
                    number_to_captain: '',
                    remark: ''
                };
            },
            generateReport() {
                this.$validator.validateAll('f1').then(result => {
                    if (result) {
                        //if (this.$network()) {
                        let {id, name} = this.$store.state.branches.find(({id}) => id === this.report.branch.id);
                        this.report.branch = {id, name};
                        postD('/api/report', this.report).then(({data}) => {
                        // post('/api/report', this.report).then(({data}) => {

                            //console.log(data);


                            const url = window.URL.createObjectURL(new Blob([data]));
                            const link = document.createElement('a');
                            link.href = url;
                            link.setAttribute('download', `${this.report.type}_for_${name}.xlsx`);
                            document.body.appendChild(link);
                            link.click();
                        });
                        //} else this.$networkErr();
                    } else this.$networkErr('form');
                });
            },
            setDates() {
                /** this function computes and set the FROM and TO date to the
                 * Monday and Friday of the current Week
                 * PURPOSE: For better UX */
                let today = new Date(),
                    day = today.getDay(),
                    diff = today.getDate() - day + (day === 0 ? -6 : 1),
                    monday = new Date(today.setDate(diff)),
                    friday = new Date();

                friday.setDate(monday.getDate() + 4);
                this.report.from = monday = this.$getDate(monday);
                this.report.to = friday = this.$getDate(friday);
                /** this function returns the monday ie this.report.from
                 * and the saturday of the : this.report.to of the
                 * current week*/
            },
            submitReport() {
                this.$validator.validateAll('f2').then(result => {
                    if (result) {
                        if (this.$network()) {
                            this.$LIPS(true);
                            post(`/api/dsa_daily_registration`, this.dailyReport)
                                .then(({data}) => {
                                    this.$validator.reset();
                                    this.initForm();
                                    this.$scrollToTop();
                                    this.$LIPS(false);
                                    data.submitted && Flash.setSuccess(data.message);
                                }).catch(() => Flash.setError('Error logging report please try again later!'));
                        } else this.$networkErr();
                    } else this.$networkErr('form');
                });
            }
        }
    }
</script>