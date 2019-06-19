<template>
    <transition name="fade">
        <div class="pt-md-3 pt-2 attendance attendance-create" id="index">

            <div class="mt-5 attendance-head">
                <div class="mb-5 row">
                    <div class="col-12 title-con">
                        <span class="title">{{`attendance for ${today}` | capitalize}}</span>

                        <div class="row justify-content-end align-items-center"
                             v-if="$store.getters.auth('peoplesOps')">
                            <a @click="$router.push(`${branch ? '?branch=' + branch : ''}`)"
                               class="text-link pr-4 text-capitalize" href="javascript:">
                                get attendance list for :
                            </a>
                            <select class="custom-select" v-model="branch">
                                <option disabled selected value="">branch</option>
                                <option :value="branch.id" v-for="branch in $store.getters.getBranches">
                                    {{branch.name | capitalize}}
                                </option>
                            </select>
                        </div>

                    </div>
                </div>
            </div>

            <div class="mt-5 attendance-head">
                <div class="row px-5 pt-3 pb-4">
                    <div class="col-10 col-xs-3 col-md-3 col-lg-3">
                        <div class="row align-items-center">
                            <div class="mx-5 col-1 p-0 sm-hide"></div>
                            <div class="col pl-4 ml-1 ml-xs-0 pl-xs-3">
                                <span class="user-name light-heading">{{columns[0]}}</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-2 light-heading">{{columns[1]}}</div>
                    <div class="col-12 col-xs-3 col-md-3 col-lg-3">
                        <div class="row">
                            <div class="col light-heading pr-1 pr-lg-4">{{columns[3]}}</div>
                            <div class="col light-heading pl-1 pl-lg-4">{{columns[4]}}</div>
                        </div>
                    </div>
                    <div class="col-6 col-xs-2 col-md-2 col-lg-2 px-0 px-lg-4 light-heading">{{columns[5]}}</div>
                    <div class="col-6 col-xs-2 col-md-2 col-lg-2 light-heading">{{columns[6]}}</div>
                </div>
            </div>

            <div class="mt-1 attendance-body">
                <form @submit.prevent="onSave" v-if="show">
                    <div class="mb-3 px-4 row align-items-center attendance-item" v-for="(user, index) in form">

                        <div class="col-12 col-xs-3 col-md-3 col-lg-3 pt-2 pb-3 p-xs-0">
                            <div class="row align-items-center">
                                <div class="ml-5 mr-3 sm-hide">
                                    <span class="user mx-auto">
                                        <i class="user-icon fas fa-user-alt"></i>
                                    </span>
                                </div>
                                <div class="col">
                                    <span class="user-name">{{user.user.full_name | capitalize}}</span>
                                    <span class="sm-show staff_id-sm">
                                        - {{user.user.staff_id}}
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div class="col-12 col-xs-2 col-md-2 col-lg-2 sm-hide">
                            {{user.user.staff_id}}
                        </div>

                        <div class="col-12 col-xs-3 col-md-3 col-lg-3">
                            <div class="row">
                                <div class="col pr-3 pr-sm-1 pr-lg-4">
                                    <input :disabled="form[index].is_present === '0'" :name="`arrival_time_${index}`"
                                           class="form-control"
                                           type="time" v-model="form[index].arrival_time" v-validate="'required'">
                                </div>
                                <div class="col pl-3 pl-sm-1 pl-lg-4">
                                    <input :disabled="form[index].is_present === '0' || form[index].no_signout"
                                           :name="`departure_time_${index}`"
                                           class="form-control"
                                           type="time" v-model="form[index].departure_time" v-validate="'required'">
                                </div>
                                <div class="mr-5">
                                    <div class="form-check">
                                        <input :disabled="form[index].is_present === '0'"
                                               @click="no_signout(index, form[index].no_signout)"
                                               class="form-check-input mt-3 ml-2"
                                               id="exampleCheck1"
                                               type="checkbox" v-model="form[index].no_signout" value="true">
                                        <label class="form-check-label" for="exampleCheck1"></label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-6 col-xs-2 col-md-2 col-lg-2 pr-3 py-4 py-sm-0 px-sm-0 px-lg-4">
                            <div :class="form[index].is_present === '0' ? 'absent' : 'present'" class="clearfix">
                                <div class="radio w-50 pr-3 float-left">
                                    <input :id="`yes_${index}`" :name="`status_${index}`" type="radio"
                                           v-model="form[index].is_present" v-validate="'required'" value="1">
                                    <label :for="`yes_${index}`">yes</label>
                                </div>
                                <div class="radio w-50 pl-3 float-left">
                                    <input :id="`no_${index}`" :name="`status_${index}`" @click="clearTime(index)"
                                           type="radio" v-model="form[index].is_present" value="0">
                                    <label :for="`no_${index}`">no</label>
                                </div>
                            </div>
                        </div>

                        <div class="col-6 col-xs-2 col-md-2 col-lg-2 pl-3 py-4 py-sm-0">
                            <input :disabled="form[index].no_signout" :name="`remark_${index}`" class="form-control"
                                   type="text"
                                   v-model="form[index].remark"
                                   v-validate="{ required: form[index].is_present == 0 }">
                        </div>

                    </div>

                    <div class="mb-5 px-0 row align-items-center">
                        <div class="w-100 my-5 mx-0 hr"></div>
                        <div class="clearfix d-flex justify-content-end w-100">
                            <button :disabled="$isProcessing" class="btn bg-default" type="submit">
                                {{mode | capitalize}} Attendance <i class="far fa-paper-plane ml-1"></i>
                            </button>
                        </div>
                    </div>
                </form>
                <div class="row attendance-item p-5 mb-5" v-else>
                    <span class="no-attendance">You have already submitted attendance for today!</span>
                </div>
            </div>


            <div class="mt-5 attendance-head">

                <div class="w-100 my-5 mx-0 hr"></div>

                <div class="pt-3 pb-4 align-items-center">
                    <div class="light-heading d-flex">
                        <div class="float-left align-self-center">
                            To fill attendance for a past date kindly select the date and click get attendance list.
                            <span class="mx-5">
                                ||
                            </span>
                        </div>
                        <div @click="fetchAttendanceByDate()" class="float-left align-self-center">
                            <a class="text-link text-capitalize" href="javascript:">get attendance list for
                                <strong>Date</strong> : </a>
                        </div>
                        <div class="float-left align-self-center ml-3">
                            <input class="form-control float-left" type="date" v-model="newDate">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
    import Vue from 'vue';
    import {log} from '../../../utilities/log';
    import Flash from '../../../utilities/flash.js';
    import {byMethod, get} from '../../../utilities/api';

    function initialize(to) {
        let urls = {create: `/api/attendance/create${to.query.branch ? '?branch=' + to.query.branch : ''}`};
        return urls[to.meta.mode];
    }

    export default {
        data() {
            return {
                form: {},
                mode: null,
                show: false,
                today: '',
                newDate: '',
                submittedToday: '',
                resource: '/attendance',
                store: '/api/attendance',
                method: 'POST',
                columns: ['Employee', 'ID', 'Date', 'Arr. Time', 'Dep. Time', 'Present?', 'Remark'],
                branch: '',
            }
        },
        beforeRouteEnter(to, from, next) {
            //1. make request to back-end
            get(initialize(to)).then(res => {
                //2 send to the method to prepare form
                next(vm => vm.prepareForm(res.data));
            });
        },
        beforeRouteUpdate(to, from, next) {
            this.show = false;
            //1. make request to back-end
            get(initialize(to)).then(res => {
                //2 send to the method to prepare form
                this.prepareForm(res.data);
                next();
            });
        },
        created() {
            this.$prepareBranches();
        },
        methods: {
            async prepareForm(data) {
                if (this.$store.getters.auth('peoplesOps') || !this.$route.query['branch']) {
                    this.mode = this.$route.meta.mode;
                    //this function is used when a data is sent to this component
                    //or this component makes a request to backend the
                    //data received is used to prepare the form
                    if (data.form.length) data.form.forEach(obj => obj['no_signout'] = false);
                    await Vue.set(this.$data, 'form', data.form);
                    await Vue.set(this.$data, 'today', data.today);
                    await Vue.set(this.$data, 'submittedToday', data.submittedToday);
                    this.show = !this.submittedToday;
                } else {
                    Flash.setError('You cannot create attendance for a branch other than yours', 5000);
                    this.$router.push({path: '../home'});
                }
            },


            async onSave() {
                this.$validator.validateAll().then(result => {
                    if (result) {
                        if (this.$network()) {
                            this.$LIPS(true);
                            this.form.forEach(obj => delete obj.no_signout);
                            byMethod(this.method, this.store, {form: this.form})
                                .then(res => {
                                    if (res.data.saved || res.data.updated) {
                                        log(`Attendance ${this.mode}d`, `${res.employee_id}`);
                                        Flash.setSuccess(`Attendance Submitted successfully!`, 3000);
                                        this.$router.push('/');
                                    }
                                })
                                .catch(e => {
                                    e = e.response;
                                    if (e.status === 422) Flash.setError(e.data.message ? e.data.message : e.data);
                                })
                                .finally(() => {
                                    this.$LIPS(false);
                                    this.$scrollToTop();
                                });
                        } else this.$networkErr();
                    } else this.$networkErr('form');
                });
            },
            clearTime(index) {
                this.form[index].arrival_time = '';
                this.form[index].departure_time = '';
            },
            no_signout(index, e) {
                Vue.set(this.$data.form[index], 'departure_time', '');
                Vue.set(this.$data.form[index], 'remark', e ? '' : 'Did not sign out.');
            },
            fetchAttendanceByDate() {
                if (this.newDate) {
                    var newDate = new Date(this.newDate);
                    var today = new Date();
                    if (newDate < today) {
                        newDate = newDate.toDateString().split(' ');
                        newDate.shift();
                        this.form.forEach(obj => obj.date = this.newDate);
                        this.submittedToday = false;
                        this.show = true;
                        this.today = [...newDate].join(' ');
                    } else Flash.setError(`Sorry you cannot create attendance for a feature date!`, 2000);
                } else Flash.setError(`Select date to continue!`, 2000);
                this.$scrollToTop();
            }
        }
    }
</script>