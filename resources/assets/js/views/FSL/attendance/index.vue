<template>
    <transition name="fade">
        <div class="pt-1 pt-lg-5 mx-0 mx-lg-5 attendance attendance-view" id="index">

            <div class="mt-5 attendance-head">
                <div class="mb-5 row align-items-center">
                    <div class="col-12 title-con">
                        <span class="title">{{title}}</span>
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
                                    v-for="year in years()"
                                    v-if="caption === 'year'">
                                {{year}}
                            </option>
                        </select>
                        <small v-if="errors.first(caption)" class="text-muted">{{errors.first(caption) }}</small>
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
                                    <td :class="checkClass(userAtt, day)" v-for="day in columns">
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
                years: () => {
                    let years = [];
                    let startYear = new Date().getFullYear();
                    for (let i = 0; i < 5; i++) {
                        years.push(startYear--);
                    }
                    return years;
                },
                columns: {},
                show: false,
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
            if (this.completeQry) {
                Vue.set(this.$data.query, 'year', this.$route.query.year);
                Vue.set(this.$data.query, 'month', this.$route.query.month);
                Vue.set(this.$data.query, 'branch', this.$route.query.branch);
            }
        },
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

            isPresent(userAtt, day) {
                let c = userAtt.attendances.filter(att => att.date === day.fullDate);
                if (c.length > 0) {
                    return c[0].is_present ? 'P' : 'A';
                } else {
                    return null;
                }
            },
            checkClass(userAtt, day) {
                let theClass, isPresent = this.isPresent(userAtt, day);
                if (['Sun', 'Sat'].includes(day.dayString)) {
                    theClass = 'weekend';
                } else {
                    if (isPresent === 'P') {
                        theClass = 'present';
                    } else {
                        if (isPresent === 'A') {
                            theClass = 'absent';
                        } else {
                            theClass = '';
                        }
                    }
                }
                return theClass;
            }
        },
        computed: {
            completeQry() {
                return (this.$route.query.year && this.$route.query.month && this.$route.query.branch);
            },
            title() {
                let att = 'Attendance Report';
                if (this.completeQry) {
                    let qryMonth = this.$route.query.month, qryYear = this.$route.query.year;
                    const month = qryMonth ? ' for ' + this.$store.getters.getMonths[parseInt(qryMonth) - 1].name : '';
                    att += ` ${month} ${qryYear ? qryYear : ''}`;
                }
                return att;
            }
        }
    }
</script>

<style type="scss" scoped>
    .weekend {
        background: repeating-linear-gradient(45deg, rgba(227, 210, 163, .2), rgba(227, 210, 163, 0.2) 2px, rgba(0, 0, 0, 0.0) 2px,
            rgba(0, 0, 0, 0) 8px), #fffff1;
    }

    .custom-select, .myBtn, .daily-attendance{
        width:75%;
    }

    .daily-attendance{
        overflow-x: scroll;
    }

    .image-and-names{
        width:25%;
    }

    @media (max-width: 990px) {
        .custom-select {
            width: 90%;
        }
        .myBtn {
            width: 100%;
        }

        .image-and-names{
            width:30%;
        }

        .daily-attendance{
            width:70%;
        }
    }

    @media (max-width: 600px) {
        .image-and-names{
            width:50%;
        }
        .daily-attendance{
            width:50%;
        }

    }
</style>