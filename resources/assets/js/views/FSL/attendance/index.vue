<template>
    <transition name="fade">
        <div class="pt-5 mx-5">

            <div class="mt-5 attendance-head">

                <div class="mb-5 row align-items-center">
                    <div class="col-12 clins">
                        <span class="title">
                            Attendance Report for
                            {{`${$store.getters.getMonths[parseInt($route.query.month) - 1].name} ${$route.query.year}`}}
                        </span>

                        <div class="col">
                            <div class="row px-5 heading pt-3 pb-4">
                                <div class="col-4">
                                    <div class="row align-items-center">
                                        <select class="custom-select w-auto" data-vv-validate-on="blur"
                                                name="branch" v-model="query.branch" v-validate="'required'">
                                            <option selected value="">select branch</option>
                                            <option :value="branch.id" v-for="branch in $store.getters.getBranches">
                                                {{branch.name | capitalize}}
                                            </option>
                                        </select>
                                    </div>
                                </div>

                                <div class="col-4">
                                    <div class="row align-items-center">
                                        <select class="custom-select w-auto" data-vv-validate-on="blur"
                                                name="month" v-model="query.month" v-validate="'required'">
                                            <option selected value="">select month</option>
                                            <option :value="month.id"
                                                    v-for="month in $store.getters.getMonths">{{month.name}}
                                            </option>
                                        </select>
                                    </div>
                                </div>

                                <div class="col-4">
                                    <div class="row align-items-center">
                                        <button class="btn btn-primary bg-default" @click="fetch()">View Attendance</button>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>


            </div>

            <div class="card">
                <div v-if="show">
                    <div class="w-25 float-left p-5">
                        <table class="table">
                            <thead>
                            <tr>
                                <th scope="col">Employee Name</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-for="user in attendances">
                                <td>{{`${user.full_name}`}}</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="w-75 float-left p-5" style="overflow-x: scroll">
                        <table class="table">
                            <thead>
                            <tr>
                                <th scope="col" v-for="col in columns">{{`${col.month} ${col.date} ${col.dayString}`}}</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-for="userAtt in attendances">
                                <td v-for="day in columns">
                                    {{isPresent(userAtt, day)}}
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
    import Vue from 'vue';
    import {get} from "../../../helpers/api";

    const apiLink = (query) => `/attendance?branch=${query.branch}&month=${query.month}&year=${query.year}`;

    export default {
        data() {
            return {
                columns: {},
                show: false,
                query: {
                    month: null,
                    branch: null,
                    year: '2019'
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
                });
            } else next();
        },
        beforeRouteUpdate(to, from, next) {
            this.show = false;
            //1. make request to back-end
            if (to.query.branch) {
                get(`/api${apiLink(to.query)}`).then(res => {
                    //2 send to the method to prepare form
                    this.prepareForm(res.data);
                    next();
                });
            } else next();
        },
        created(){
            this.$prepareBranches();
        },
        methods: {

            fetch() {
                this.$router.push(`/hrm${apiLink(this.query)}`);
            },

            prepareForm(data) {
                if (data) {
                    Vue.set(this.$data, 'columns', data.columns);
                    Vue.set(this.$data, 'attendances', data.attendances);
                    Vue.set(this.$data.query, 'branch', data.branch[0].id);
                    this.show = true;
                }
            },

            isPresent(userAtt, day) {
                let c = userAtt.attendances.filter(att => att.date === day.fullDate);
                if (c.length > 0) {
                    return c[0].is_present;
                } else {
                    return null;
                }
            }
        }
    }
</script>

<style type="scss" scoped>
    .attendance-head {
        margin-left: 5.5rem;
        margin-right: 5.5rem;
    }

    .title {
        font-size: 2.2rem;
        font-weight: bold;
        padding-bottom: 1.5rem;
        position: relative;
        float: left;
        border-bottom: 3px solid #2975a5;
        z-index: 1;
    }


    .col-12.clins::after {
        content: '';
        height: 2px;
        background-color: #e9ebf3;
        position: absolute;
        bottom: 0;
        left: 1.8rem;
        width: calc(100% - 3.6rem);
        z-index: 0;
    }
</style>