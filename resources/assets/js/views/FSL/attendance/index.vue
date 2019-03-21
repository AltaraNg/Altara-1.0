<template>
    <transition name="fade">
        <div class="pt-md-3 pt-2 attendance attendance-view" id="index">

            <div class="mt-5 attendance-head">
                <div class="mb-5 row align-items-center">
                    <div class="col-12 title-con">
                        <span class="title">{{title}}</span>
                        <div class="row justify-content-end">
                            <a @click="$router.push('attendance/create')"
                               class="text-link mt-3" href="javascript:">
                                click here to create attendance!</a>
                            <span class="mx-4 mt-3">||</span>
                            <a @click="toggleGuide" class="text-link mt-3"
                               href="javascript:">
                                view table guide!</a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="attendance-body" id="table-guide">
                <div class="pt-5 row bg-white shadow-sm" style="border-radius: .5rem">
                    <div>
                        <td class="arrEarly leftLate"><span>A</span></td>
                        <span>In before/at 9:00am <br> Out after/at 6:00pm</span>
                    </div>

                    <div>
                        <td class="arrEarly leftEarly"><span>A</span></td>
                        <span>In before/at 9:00am  <br> Out Before 6:00pm</span>
                    </div>

                    <div>
                        <td class="arrLate leftLate"><span>A</span></td>
                        <span class="d-inline-block">In after 9:00am  <br> Out after/at 6:00pm</span>
                    </div>

                    <div>
                        <td class="arrLate leftEarly"><span>A</span></td>
                        <span class="d-inline-block">In after 9:00am  <br> Out before 6:00pm</span>
                    </div>

                    <div>
                        <td class="absent"><span>A</span></td>
                        <span>Absent</span>
                    </div>
                </div>
            </div>

            <div class="mt-5 row attendance-head">
                <div class="col-4 col-sm-3" v-for="capt in ['Branch','Month','Year']">
                    <div class="row">
                        <div class="light-heading"><span class="d-none d-sm-inline">Select</span> {{capt}}</div>
                    </div>
                </div>
            </div>

            <div class="mt-2 mt-lg-3 row attendance-head">
                <div class="col-4 col-sm-3" v-for="caption in ['branch','month','year']">
                    <div class="row">
                        <select :name="caption"
                                class="custom-select"
                                data-vv-validate-on="blur"
                                v-model="query[caption]"
                                v-validate="'required'">
                            <option disabled selected value="">{{caption}}</option>
                            <option :value="branch.id"
                                    v-for="branch in $store.getters.getBranches"
                                    v-if="caption === 'branch'">
                                {{branch.name | capitalize}}
                            </option>
                            <option :value="month.id"
                                    v-for="month in $store.getters.getMonths"
                                    v-if="caption === 'month'">
                                {{month.name}}
                            </option>
                            <option :value="year"
                                    v-for="year in $store.getters.getYears"
                                    v-if="caption === 'year'">
                                {{year}}
                            </option>
                        </select>
                        <small class="text-muted" v-if="errors.first(caption)">{{errors.first(caption) }}</small>
                    </div>
                </div>
                <div class="col-12 col-sm-3">
                    <div class="row d-flex justify-content-end">
                        <button @click="fetch()" class="btn btn-primary bg-default mt-0 myBtn">View Attendance</button>
                    </div>
                </div>
            </div>

            <div class="attendance-body">
                <div class="mt-5 row" v-if="show">
                    <div class="card">
                        <div class="image-and-names float-left">
                            <table class="table table-names">
                                <thead>
                                <tr>
                                    <th class="ml-5">Employee Name</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr v-for="user in attendances">
                                    <td>
                                        <div class="row align-items-center m-0 user-details">
                                            <span class="user mx-auto"><i class="user-icon fas fa-user-alt"></i></span>
                                            <div class=" col user-name">{{`${user.full_name}`}}</div>
                                        </div>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="float-left daily-attendance">
                            <table class="table table-details table-bordered">
                                <thead>
                                <tr>
                                    <th class="text-center" v-for="col in columns">
                                        <span>{{`${col.month} ${col.date}`}}</span><br><span class="light-heading day">
                                        {{ `${col.dayString}`}}
                                    </span>
                                    </th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr v-for="userAtt in attendances">
                                    <!--<td :class="checkClass(userAtt, day)" :title="getTitle(userAtt, day)" data-toggle="tooltip"-->
                                    <td :class="checkClass(userAtt, day)"
                                        @click="displayInfo(userAtt, day)"
                                        v-for="day in columns">
                                        {{isPresent(userAtt, day)}}
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div class="row attendance-item p-5 my-5" v-else>
                    <span class="no-attendance">Kindly Select Branch, Month and, Year to get started!</span>
                </div>
            </div>


            <div class="modal fade" id="viewAttendance">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header py-2">
                            <h6 class="modal-title py-1">Attendance</h6>
                            <a aria-label="Close" class="close py-1" data-dismiss="modal">
                                <span aria-hidden="true" class="modal-close text-danger"><i class="fas fa-times"></i></span>
                            </a>
                        </div>

                        <form>
                            <div class="modal-body">

                                <div class="px-2" v-if="currAttendance">
                                    <div class="px-4">
                                        <div class="row">
                                            <span><strong>Status : </strong></span>
                                            <div class="col">{{currAttendance.is_present ? 'Present' : 'Absent'}}</div>
                                        </div>
                                        <div class="row">
                                            <span><strong>Arrival Time : </strong></span>
                                            <div class="col">{{$timeConvert(currAttendance.arrival_time)}}</div>
                                        </div>
                                        <div class="row">
                                            <span><strong>Departure time : </strong></span>
                                            <div class="col">{{$timeConvert(currAttendance.departure_time)}}</div>
                                        </div>
                                        <div class="row">
                                            <span><strong>Date : </strong></span>
                                            <div class="col">{{currAttendance.date}}</div>
                                        </div>
                                        <div class="row">
                                            <span><strong>Remark : </strong></span>
                                            <div class="col">{{currAttendance.remark}}</div>
                                        </div>
                                    </div>
                                </div>

                                <div class="px-2" v-else>
                                    <div class="px-4 row">
                                        <span><strong>Status : </strong></span>
                                        <div class="col">No Attendance</div>
                                    </div>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <a class="text-link mt-3 w-100" data-dismiss="modal" href="javascript:"
                                   style="text-align: right">close dialogue</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>


        </div>
    </transition>
</template>

<script>
    import Vue from 'vue';
    import {get} from "../../../helpers/api";
    import Flash from "../../../helpers/flash";

    const apiLink = query => `/attendance?branch=${query.branch}&month=${query.month}&year=${query.year}`;
    export default {
        data() {
            return {
                columns: {},
                show: false,
                currAttendance: {},
                query: {
                    month: '',
                    branch: '',
                    year: ''
                },
                attendances: {},
            }
        },
        beforeRouteEnter(to, from, next) {
            //1. make request to back-end
            if (to.query.branch) {
                get(`/api${apiLink(to.query)}`).then(res => {
                    //2 send to the method to prepare form
                    next(vm => vm.prepareForm(res.data));
                }).catch(err => {
                    next(vm => vm.handleErr(err));
                });
            } else next();
        },
        beforeRouteUpdate(to, from, next) {
            this.show = false;
            //1. make request to back-end
            if (to.query.branch) {
                this.$LIPS(true);
                get(`/api${apiLink(to.query)}`).then(res => {
                    //2 send to the method to prepare form
                    this.prepareForm(res.data);
                    next();
                }).catch(err => {
                    this.handleErr(err);
                    next();
                });
            } else next();
        },
        created() {
            this.$prepareBranches();
            const q = this.$route.query,
                dt = new Date(),
                year = q.year ? q.year : dt.getFullYear(),
                month = q.month ? q.month : dt.getMonth() + 1;
            Vue.set(this.$data.query, 'year', year);
            Vue.set(this.$data.query, 'month', (month >= 10 || month.length === 2) ? month : '0' + month);
            if (this.completeQry) Vue.set(this.$data.query, 'branch', q.branch);
        },
        /*updated() {
            $('[data-toggle="tooltip"]').tooltip({boundary: 'window', html: true});
        },*/
        methods: {

            fetch() {
                this.$validator.validateAll().then(result => {
                    if (result) {
                        if (this.$network()) {
                            this.$router.push(`/hrm${apiLink(this.query)}`);
                        } else this.$networkErr();
                    } else this.$networkErr('form');
                });
            },

            prepareForm(data) {
                if (data) {
                    Vue.set(this.$data, 'columns', data.columns);
                    Vue.set(this.$data, 'attendances', data.attendances);
                    Vue.set(this.$data.query, 'branch', data.branch[0].id);
                    this.show = true;
                }
                this.$LIPS(false);
            },

            handleErr(e) {
                Flash.setError('Error Fetching Attendance');
            },

            isPresent(userAtt, day, bool = false) {
                let date = day ? day.fullDate : null, data = null;
                let c = userAtt.attendances.filter(att => att.date === date);
                if (c.length > 0) data = bool ? c[0][bool] : c[0].is_present ? 'P' : 'A';
                return data
            },

            earlyOrLate(userAtt, day) {
                let data = [];
                let attendance = userAtt.attendances.filter(att => att.date === day.fullDate);
                if (attendance.length) {
                    if (attendance[0].arrival_time > '09:00') {
                        data[0] = 'arrLate';
                    } else {
                        data[0] = 'arrEarly';
                    }
                    if (attendance[0].departure_time < '18:00') {
                        data[1] = 'leftEarly'
                    } else {
                        data[1] = 'leftLate'
                    }
                }
                return data;
            },

            checkClass(userAtt, day) {
                let theClass, isPresent = this.isPresent(userAtt, day);
                let erl = this.earlyOrLate(userAtt, day);
                if (['Sun', 'Sat'].includes(day.dayString)) {
                    theClass = 'weekend';
                } else {
                    //arrEarly arrLate leftEarly leftLate
                    if (isPresent === 'P') {
                        //theClass = 'present';
                        if (erl.length) {
                            theClass = erl.join(' ');
                        }

                    } else {
                        if (isPresent === 'A') {
                            theClass = 'absent';
                        } else {
                            theClass = '';
                        }
                    }
                }
                return theClass;
            },

            /*getRemark(userAtt, day) {
                let att = userAtt.attendances.find(obj => obj.date === day.fullDate);
                return att ? `${att.remark ? 'Remark: <b class="text_align-left">' + att.remark + '</b><br>' : ''}` : ``;
            },*/

            /*getTitle(userAtt, day) {
                let arrival, departure, aTime, aTimeCon, dTime, dTimeCon, status, isPresent, remark;
                aTime = this.isPresent(userAtt, day, 'arrival_time');
                dTime = this.isPresent(userAtt, day, 'departure_time');
                isPresent = this.isPresent(userAtt, day, 'is_present');
                remark = this.getRemark(userAtt, day);
                aTimeCon = this.$timeConvert(aTime);
                dTimeCon = this.$timeConvert(dTime);
                status = isPresent ? `Present<br>` : ``;
                arrival = aTime ? `Arrival Time : ${aTimeCon}<br>` : ``;
                departure = dTime ? `Departure Time: ${dTimeCon}<br>` : ``;
                return arrival || remark ? `${arrival} ${departure} ${status} ${remark}` : null;
            },*/

            toggleGuide() {
                $('#table-guide').slideToggle();
            },

            displayInfo(userAtt, day) {
                let date = day ? day.fullDate : null, c;
                c = userAtt.attendances.filter(att => att.date === date);
                Vue.set(this.$data, 'currAttendance', c[0] ? c[0] : null);
                return $(`#viewAttendance`).modal('toggle');
            }
        },
        computed: {
            completeQry() {
                return (this.$route.query.year && this.$route.query.month && this.$route.query.branch);
            },
            title() {
                let att = 'Attendance';
                if (this.completeQry) {
                    let qryMonth = this.$route.query.month, qryYear = this.$route.query.year;
                    const month = qryMonth ? ' - ' + this.$store.getters.getMonths[parseInt(qryMonth) - 1].name : '';
                    att += ` ${month} ${qryYear ? qryYear : ''}`;
                }
                return att;
            }
        },
        mounted() {
            $(document).on("hidden.bs.modal", '.modal', () => this.currAttendance = {});
            this.toggleGuide();
        },
    }
</script>

<style>
    #table-guide td {
        width        : 6rem;
        text-align   : center;
        height       : unset;
        float        : left;
        margin-right : 1rem;
    }

    #table-guide td span {
        margin-bottom : 1rem;
        line-height   : 2;
        float         : left;
        width         : 100%;
    }

    #table-guide > div > div {
        padding : 0 4rem 3rem;
    }
</style>