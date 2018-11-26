<template>
    <transition name="fade">
        <div class="pt-md-3 pt-2" id="employeeRegister">
            <div class="card">
                <ul class="nav nav-tabs justify-content-center bg-default"><h6>Report Generation</h6></ul>
                <div class="card-body px-4">
                    <form @submit.prevent="generateReport">
                        <div class="my-4 clearfix">
                            <div class="form-group col-md-3 col-sm-6 px-md-3 px-1 float-left">
                                <label>Report Type</label>
                                <select class="custom-select w-100" v-model="report.type"
                                        v-validate="'required'" data-vv-as="report type" data-vv-validate-on="blur"
                                        name="report_type">
                                    <option value="">select type</option>
                                    <option :value="type.slug" v-for="type in types">{{type.name | capitalize}}</option>
                                </select>
                                <small v-if="errors.first('report_type')">
                                    {{errors.first('report_type')}}
                                </small>
                            </div>
                            <div class="form-group col-md-3 col-sm-6 px-md-3 px-1 float-left">
                                <label>Branch</label>
                                <select class="custom-select w-100" v-model="report.branch.id"
                                        v-validate="'required'" data-vv-as="office branch" name="branch_id" data-vv-validate-on="blur">
                                    <option value="">select branch</option>
                                    <option :value="branch.id" v-for="branch in branches">{{branch.name}}</option>
                                </select>
                                <small v-if="errors.first('branch_id')">
                                    {{errors.first('branch_id')}}
                                </small>
                            </div>
                            <div class="form-group col-md-3 col-sm-6 px-md-3 px-1 float-left">
                                <label>Date from:</label>
                                <input type="date" class="form-control" v-model="report.from"
                                       v-validate="'required|date_format:MM/DD/YYYY'" data-vv-as="Date from"
                                       name="date_from">
                                <small v-if="errors.first('date_from')">
                                    {{errors.first('date_from')}}
                                </small>
                            </div>
                            <div class="form-group col-md-3 col-sm-6 px-md-3 px-1 float-left">
                                <label>Date To:</label>
                                <input type="date" class="form-control" v-model="report.to"
                                       v-validate="'required|date_format:MM/DD/YYYY'" data-vv-as="Date to"
                                       name="date_to">
                                <small v-if="errors.first('date_to')">
                                    {{errors.first('date_to')}}
                                </small>
                            </div>
                        </div>
                        <div class="col-sm-12 mx-auto mt-md-2 mt-0 px-md-3 px-1 mb-4">
                            <button type="submit" class="btn btn-block btn-lg bg-default" :disabled="$isProcessing">
                                Generate Report <i class="far fa-paper-plane ml-1"></i>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </transition>
</template>
<script>
    import {get, postD} from '../../../helpers/api';

    export default {
        beforeCreate(){
            if (!this.$store.state.DSALead.includes(this.$store.state.authRole)) {
                /*this component can only be accessed by the dsa lead hence this route guard
                * if the role of the dsa agent logged in is contained in the
                * array of the dsa lead then access will be granted*/
                this.$networkErr('page');
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
                    /*set dates*/
                    this.branches = res.data.branches;
                    /*fetch the list of states and
                    prepare the form with it*/
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
                    if (!result) this.$networkErr('form');
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
                /*this function returns the monday ie this.report.from
                * and the friday of the : this.report.to of the
                * current week*/
            },
        }
    }
</script>