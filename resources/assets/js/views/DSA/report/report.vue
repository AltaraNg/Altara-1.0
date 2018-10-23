<template>
    <transition name="fade">
        <div class="float-left w-100 pt-md-3 pt-2" id="employeeRegister">
            <div class="card">
                <ul class="nav nav-tabs nav-tabs-neutral justify-content-center bg-default">
                    <h6>Report Generation</h6>
                </ul>
                <div class="card-body pl-4 pr-4">
                    <form @submit.prevent="generateReport">
                        <div class="mb-3 mt-4 clear w-100">
                            <div class="form-group col-md-3 col-sm-6 px-md-3 px-1 float-left">
                                <label>Report Type</label>
                                <select class="custom-select w-100" v-model="report.type"
                                        v-validate="'required|max:25'" data-vv-as="report type"
                                        name="report_type"
                                        :class="{'is-invalid': errors.first('report_type')}">
                                    <option value="">select type</option>
                                    <option :value="type.slug" v-for="type in types">{{type.name | capitalize}}</option>
                                </select>
                                <small class="text-muted" v-if="errors.first('report_type')">
                                    {{errors.first('report_type')}}
                                </small>
                            </div>
                            <div class="form-group col-md-3 col-sm-6 px-md-3 px-1 float-left">
                                <label>Branch</label>
                                <select class="custom-select w-100" v-model="report.branch.id"
                                        v-validate="'required|max:25'" data-vv-as="office branch" name="branch_id"
                                        :class="{'is-invalid': errors.first('branch_id')}">
                                    <option value="">select branch</option>
                                    <option :value="branch.id" v-for="branch in branches">{{branch.name}}</option>
                                </select>
                                <small class="text-muted" v-if="errors.first('branch_id')">
                                    {{errors.first('branch_id')}}
                                </small>
                            </div>
                            <div class="form-group col-md-3 col-sm-6 px-md-3 px-1 float-left">
                                <label>Date from:</label>
                                <input type="date" class="form-control" v-model="report.from"
                                       v-validate="'required|date_format:MM/DD/YYYY'" data-vv-as="Date from"
                                       name="date_from"
                                       :class="{'is-invalid': errors.first('date_from')}">
                                <small class="text-muted" v-if="errors.first('date_from')">
                                    {{errors.first('date_from')}}
                                </small>
                            </div>
                            <div class="form-group col-md-3 col-sm-6 px-md-3 px-1 float-left">
                                <label>Date To:</label>
                                <input type="date" class="form-control" v-model="report.to"
                                       v-validate="'required|date_format:MM/DD/YYYY'" data-vv-as="Date to"
                                       name="date_to"
                                       :class="{'is-invalid': errors.first('date_to')}">
                                <small class="text-muted" v-if="errors.first('date_to')">
                                    {{errors.first('date_to')}}
                                </small>
                            </div>
                        </div>
                        <div class="col-sm-12 ml-auto mr-auto mt-md-2 mt-0 px-md-3 px-1 mb-4 float-right">
                            <button type="submit"
                                    class="btn btn-block btn-lg bg-default"
                                    :disabled="$isProcessing">
                                Generate Report
                                <i class="far fa-paper-plane ml-1"></i>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </transition>
</template>
<script>
    import Flash from '../../../helpers/flash';
    import {get, postD} from '../../../helpers/api';

    export default {
        beforeCreate(){
            if (!this.$store.state.DSALead.includes(this.$store.state.authRole)) {
                Flash.setError("You do not have access to that page!");
                this.$router.push('/home');
            }
        },
        data() {
            return {
                branches: {},
                types: [
                    {
                        name: "sales report",
                        slug: "sales_report"
                    }, {
                        name: "score card",
                        slug: "score_card"
                    }, {
                        name: "weekly operations",
                        slug: "weekly_operations"
                    }
                ],
                report: {
                    to: '',
                    from: '',
                    branch: {
                        id: '',
                        name: ''
                    },
                    employee: '',
                    type: ''
                },
            }
        },
        created() {
            get('/api/create')
                .then((res) => {
                    this.setDates();
                    this.branches = res.data.branches;
                });
        },
        methods: {
            generateReport() {
                this.$validator.validateAll().then((result) => {
                    if (result) {
                        if (this.$network()) {
                            let branch = this.branches.find(obj => obj.id == this.report.branch.id);
                            this.report.branch = branch;
                            postD('/api/report', this.report).then((response) => {
                                const url = window.URL.createObjectURL(new Blob([response.data]));
                                const link = document.createElement('a');
                                link.href = url;
                                link.setAttribute('download', this.report.type + '_for_' + branch.name + '.xlsx');
                                document.body.appendChild(link);
                                link.click();
                            });
                        } else this.$networkErr();
                    }
                    if (!result) {
                        this.$scrollToTop();
                        Flash.setError('Please check all the fields and make sure they are field correctly!');
                    }
                });
            },
            setDates() {
                const toTwoDigits = num => num < 10 ? '0' + num : num;
                let reformatDate = d => d.getFullYear() + '-' + toTwoDigits(d.getMonth() + 1) + '-' +
                    toTwoDigits(d.getDate()),
                    d = new Date(),
                    day = d.getDay(),
                    diff = d.getDate() - day + (day == 0 ? -6 : 1),
                    m = new Date(d.setDate(diff)),
                    f = new Date();
                f.setDate(m.getDate() + 4);
                this.report.from = m = reformatDate(m);
                this.report.to = f = reformatDate(f);
            },
        }
    }
</script>