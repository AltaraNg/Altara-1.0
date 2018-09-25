<template>
    <!--<div class="float-left col-lg-3 col-sm-6">
        <div class="card card-stats">
            <div class="card-body ">
                <div class="statistics statistics-horizontal">
                    <div class="info info-horizontal">
                        <div class="row">
                            <div class="col-5">
                                <div class="icon icon-warning icon-circle">
                                    <i class="now-ui-icons business_money-coins"></i>
                                </div>
                            </div>
                            <div class="col-7 text-right">
                                <h3 class="info-title font-weight-bold mb-0">Sales</h3>
                                <h6 class="stats-title">Report</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr>
            <div class="card-footer">
                <a href="javascript:" class="stats" @click="selectOption('salesReport')">
                    <i class="now-ui-icons ui-1_calendar-60 pr-1"></i> Process report
                </a>
            </div>
        </div>
    </div>

    <div class="float-left col-lg-3 col-sm-6">
        <div class="card card-stats">
            <div class="card-body ">
                <div class="statistics statistics-horizontal">
                    <div class="info info-horizontal">
                        <div class="row">
                            <div class="col-5">
                                <div class="icon icon-warning icon-circle">
                                    <i class="now-ui-icons business_chart-bar-32"></i>
                                </div>
                            </div>
                            <div class="col-7 text-right">
                                <h3 class="info-title font-weight-bold mb-0">Score </h3>
                                <h6 class="stats-title">Card</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr>
            <div class="card-footer">
                <a href="javascript:" class="stats" @click="selectOption('scoreCard')">
                    <i class="now-ui-icons ui-1_calendar-60 pr-1"></i> Process report
                </a>
            </div>
        </div>
    </div>

    <div class="float-left col-lg-3 col-sm-6">
        <div class="card card-stats">
            <div class="card-body ">
                <div class="statistics statistics-horizontal">
                    <div class="info info-horizontal">
                        <div class="row">
                            <div class="col-5">
                                <div class="icon icon-warning icon-circle">
                                    <i class="now-ui-icons education_paper"></i>
                                </div>
                            </div>
                            <div class="col-7 text-right">
                                <h3 class="info-title font-weight-bold mb-0">Weekly</h3>
                                <h6 class="stats-title">Operations</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr>
            <div class="card-footer">
                <a href="javascript:" class="stats" @click="selectOption('weeklyReport')"   >
                    <i class="now-ui-icons ui-1_calendar-60 pr-1"></i> Process report
                </a>
            </div>
        </div>
    </div>

    <div class="float-left col-lg-3 col-sm-6">
        <div class="card card-stats">
            <div class="card-body ">
                <div class="statistics statistics-horizontal">
                    <div class="info info-horizontal">
                        <div class="row">
                            <div class="col-5">
                                <div class="icon icon-warning icon-circle">
                                    <i class="now-ui-icons business_bank"></i>
                                </div>
                            </div>
                            <div class="col-7 text-right">
                                <h3 class="info-title font-weight-bold mb-0">Sales</h3>
                                <h6 class="stats-title">Report</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr>
            <div class="card-footer ">
                <a href="javascript:" class="stats">
                    <i class="now-ui-icons ui-1_calendar-60 pr-1"></i> Process report
                </a>
            </div>
        </div>
    </div>-->
    <!--<hr class="style-two">-->
    <transition name="fade">
        <div class="Flo-Rel-FWid pt-md-3 pt-2" id="employeeRegister">
            <div class="card">
                <ul class="nav nav-tabs nav-tabs-neutral justify-content-center" data-background-color="orange">
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
                                    <option :value="type | slug" v-for="type in types">{{type | capitalize}}</option>
                                </select>
                                <small class="form-text text-muted" v-if="errors.first('report_type')">
                                    {{errors.first('report_type')}}
                                </small>
                            </div>

                            <div class="form-group col-md-3 col-sm-6 px-md-3 px-1 float-left">
                                <label>Branch</label>
                                <select class="custom-select w-100" v-model="report.branch"
                                        v-validate="'required|max:25'" data-vv-as="office branch" name="branch_id"
                                        :class="{'is-invalid': errors.first('branch_id')}">
                                    <option value="">select branch</option>
                                    <option :value="branch.id" v-for="branch in branches">{{branch.name}}</option>
                                </select>
                                <small class="form-text text-muted" v-if="errors.first('branch_id')">
                                    {{errors.first('branch_id')}}
                                </small>
                            </div>

                            <div class="form-group col-md-3 col-sm-6 px-md-3 px-1 float-left">
                                <label>Date from:</label>
                                <input type="date" class="form-control" v-model="report.from"
                                       v-validate="'required|date_format:MM/DD/YYYY'" data-vv-as="Date from"
                                       name="date_from"
                                       :class="{'is-invalid': errors.first('date_from')}">
                                <small class="form-text text-muted" v-if="errors.first('date_from')">
                                    {{errors.first('date_from')}}
                                </small>
                            </div>

                            <div class="form-group col-md-3 col-sm-6 px-md-3 px-1 float-left">
                                <label>Date To:</label>
                                <input type="date" class="form-control" v-model="report.to"
                                       v-validate="'required|date_format:MM/DD/YYYY'" data-vv-as="Date to"
                                       name="date_to"
                                       :class="{'is-invalid': errors.first('date_to')}">
                                <small class="form-text text-muted" v-if="errors.first('date_to')">
                                    {{errors.first('date_to')}}
                                </small>
                            </div>
                        </div>

                        <div class="col-sm-12 ml-auto mr-auto mt-md-2 mt-0 px-md-3 px-1 mb-4 float-right">
                            <button type="submit"
                                    class="btn btn-block btn-lg btn-primary"
                                    :disabled="isProcessing"
                                    data-background-color="orange">
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
    import {get, post} from '../../../helpers/api';

    export default {
        data() {
            return {
                branches: {},
                types: ['sales report', 'score card', 'weekly operations'],
                isProcessing: false,
                report: {
                    to: '',
                    from: '',
                    branch: '',
                    employee: '',
                    type: '',
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
            scrollToTop() {
                $("html, body").animate({scrollTop: 0}, 500);
            },
            generateReport() {
                this.$validator.validateAll().then((result) => {
                    if (result) {
                        post('api/report/', this.report)
                            .then(res => {
                                console.log(res.data);
                            })
                            .catch(err => {
                                console.log(err);
                            })
                    }
                    if (!result) {
                        Flash.setError('Please check all the fields and make sure they are field correctly!');
                        this.scrollToTop();
                    }
                });
            },
            setDates() {
                const toTwoDigits = num => num < 10 ? '0' + num : num;
                let reformatDate = d => d.getFullYear() + '-' + toTwoDigits(d.getMonth() + 1) + '-' + toTwoDigits(d.getDate());
                let d = new Date();
                let day = d.getDay(),
                    diff = d.getDate() - day + (day == 0 ? -6 : 1);
                let m = new Date(d.setDate(diff));
                let f = new Date();
                f.setDate(m.getDate() + 4);
                this.report.from = m = reformatDate(m);
                this.report.to = f = reformatDate(f);
            },
        }
    }
</script>
<style scoped type="scss">
    .btn-neutral {
        color      : #09588a !important;
        border     : 1px solid #09588a !important;
        transform  : translateY(0px);
        transition : all .3s;
        &:hover {
            color     : lighten(#09588a, 0.9) !important;
            border    : 1px solid lighten(#09588a, 0.9) !important;
            transform : translateY(2px);
        }
    }

    .card-stats .icon {
        display        : inline-block;
        vertical-align : top;
        margin         : 0 15px;
    }

    .info .icon.icon-circle {
        max-width        : 70px;
        width            : 70px;
        height           : 70px;
        margin           : 0 auto;
        border-radius    : 50%;
        box-shadow       : 0 9px 35px -6px rgba(0, 0, 0, .3);
        font-size        : .7142em;
        background-color : #fff;
        position         : relative;
    }

    .info-horizontal .icon.icon-circle {
        width      : 65px;
        height     : 65px;
        max-width  : 65px;
        margin-top : 8px;
    }

    .icon.icon-primary.icon-circle {
        box-shadow : 0 9px 30px -6px rgba(249, 99, 50, .5);
    }

    .info-horizontal .icon.icon-circle i {
        display     : table;
        margin      : 0 auto;
        line-height : 3.5;
        font-size   : 1.9em;
    }

    .card .card-body {
        min-height : 10px;
    }

    .card-footer {
        padding          : .75rem 1.25rem;
        background-color : rgba(0, 0, 0, .03);
        border-top       : 1px solid rgba(0, 0, 0, .125);
    }

    .card .card-footer {
        background-color : transparent;
        border           : 0;
    }

    .card-footer:last-child {
        border-radius : 0 0 calc(.25rem - 1px) calc(.25rem - 1px);
    }

    .card-contributions hr, .card-stats hr {
        margin : 5px 15px;
    }

    hr {
        margin-bottom : 0 !important;
    }

    .stats-title {
        font-weight : 300;
        font-size   : .9rem;
    }

    .card-footer:hover {
        background-image : linear-gradient(to bottom, rgb(255, 255, 255), #eeeeee);
    }
</style>

