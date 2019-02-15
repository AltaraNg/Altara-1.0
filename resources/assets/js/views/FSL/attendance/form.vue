<template>
    <transition name="fade">
        <div class="pt-md-3 pt-2" id="employeeRegister">

            <div class="mt-5 attendance-head">
                <div class="mb-5 row">
                    <div class="col-12 clins">
                        <span class="title">{{`attendance for ${today}` | capitalize}}</span>
                    </div>
                </div>
                <div class="row px-5 heading pt-3 pb-4">
                    <div class="col-4">
                        <div class="row align-items-center">
                            <div class="mx-5 col-1"></div>
                            <div class="col pl-3"><span class="user-name">{{columns[0]}}</span></div>
                        </div>
                    </div>
                    <div class="col-1 pl-0">{{columns[1]}}</div>
                    <div class="col-3">
                        <div class="row">
                            <div class="col">{{columns[3]}}</div>
                            <div class="col">{{columns[4]}}</div>
                        </div>
                    </div>
                    <div class="col-2">{{columns[5]}}</div>
                    <div class="col-2">{{columns[6]}}</div>
                </div>
            </div>


            <div class="mt-1 attendance-body">
                <form @submit.prevent="onSave" v-if="show">
                    <div class="mb-3 px-4 row align-items-center attendance-item" v-for="(user, index) in form">

                        <div class="col-4">
                            <div class="row align-items-center">
                                <div class="ml-5 mr-3"><span class="user mx-auto"><i class="user-icon fas fa-user-alt"></i></span></div>
                                <div class="col"><span class="user-name">{{user.user.full_name | capitalize}}</span></div>
                            </div>
                        </div>

                        <div class="col-1 pl-0 ">{{user.user.staff_id}}</div>

                        <div class="col-3">
                            <div class="row">
                                <div class="col">
                                    <input :disabled="form[index].is_present === '0'" :name="`arrival_time_${index}`" class="form-control"
                                           type="time" v-model="form[index].arrival_time" v-validate="'required'">
                                </div>
                                <div class="col">
                                    <input :disabled="form[index].is_present === '0'" :name="`departure_time_${index}`" class="form-control"
                                           type="time" v-model="form[index].departure_time" v-validate="'required'">
                                </div>
                            </div>
                        </div>

                        <div class="col-2">
                            <div :class="form[index].is_present === '0' ? 'absent' : 'present'" class="clearfix">
                                <div class="radio pl-1 w-50 pr-3 float-left">
                                    <input :id="`yes_${index}`" :name="`status_${index}`" type="radio"
                                           v-model="form[index].is_present" v-validate="'required'" value="1">
                                    <label :for="`yes_${index}`">yes</label>
                                </div>
                                <div class="radio pl-1 w-50 pr-3 float-left">
                                    <input :id="`no_${index}`" :name="`status_${index}`" type="radio"
                                           v-model="form[index].is_present" value="0">
                                    <label :for="`no_${index}`">no</label>
                                </div>
                            </div>
                        </div>

                        <div class="col-2">
                            <input :name="`remark_${index}`" class="form-control" type="text" v-model="form[index].remark">
                        </div>

                    </div>

                    <div class="mb-5 px-0 row align-items-center">
                        <div class="w-100 mb-4 mt-5 mx-0 " style="border: 1px solid #e9ebf3; border-radius: 3rem;"></div>
                        <div class="clearfix d-flex justify-content-end w-100">
                            <button :disabled="$isProcessing" class="mx-3 btn bg-default" type="submit">
                                {{mode | capitalize}} Attendance <i class="far fa-paper-plane ml-1"></i>
                            </button>
                        </div>
                    </div>
                </form>
                <div v-else class="row attendance-item p-5 mb-5">
                    <span class="no-attendance">You have already submitted attendance for today!</span>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
    import Vue from 'vue';
    import {log} from '../../../helpers/log';
    import Flash from '../../../helpers/flash.js';
    import {byMethod, get} from '../../../helpers/api';

    function initialize(to) {
        let urls = {create: `/api/attendance/create`/*, edit: `/api/attendance/${to.params.id}/edit`*/};
        return urls[to.meta.mode];
    }

    export default {
        data() {
            return {
                form: {},
                error: {},
                mode: null,
                show: false,
                today: '',
                resource: '/attendance',
                store: '/api/attendance',
                method: 'POST',
                columns: ['Employee', 'ID', 'Date', 'Arr. Time', 'Dep. Time', 'Present?', 'Remark']
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
        methods: {
            async prepareForm(data) {
                console.log(data);
                this.mode = this.$route.meta.mode;
                //this function is used when a data is sent to this component
                //or this component makes a request to backend the
                //data received is used to prepare the form
                this.error = {};
                this.errors.clear();
                await Vue.set(this.$data, 'form', data.form);
                await Vue.set(this.$data, 'today', data.today);
                /*if (this.$route.meta.mode === 'edit') {
                    this.store = `/api/attendance/${this.$route.params.id}`;
                    this.method = 'PUT';
                }*/
                this.show = !data.submittedToday;
            },


            async onSave() {
                this.$validator.validateAll().then(result => {
                    if (result) {
                        if (this.$network()) {
                            this.$LIPS(true);
                            this.error = {};
                            byMethod(this.method, this.store, {form: this.form})
                                .then(res => {
                                    if (res.data.saved || res.data.updated) {
                                        log(`Attendance ${this.mode}d`, `${res.employee_id}`);
                                        Flash.setSuccess(`Attendance Submitted successfully!`, 3000);
                                    }
                                })
                                .catch(e => {
                                    e = e.response;
                                    if (e.status === 422) {
                                        this.error = e.data.errors ? e.data.errors : e.data;
                                        this.$networkErr('unique');
                                    }
                                }).finally(() => {
                                this.$router.push('/fsl/home');
                                this.$LIPS(false);
                            });
                        } else this.$networkErr();
                    } else this.$networkErr('form');
                });
            }
        }
    }
</script>

<style scoped type="scss">
    .form-control {
        font-size: 1.4rem;
    }

    th {
        padding-top: 2rem;
        padding-bottom: 2rem;
    }

    td, th {
        padding-left: 3rem;
        padding-right: 3rem;
    }

    td:nth-child(1), th:nth-child(1) {
        padding-left: 5rem !important;
        padding-right: 0;
    }

    td:nth-child(2) {
        padding-left: 2rem !important;
    }

    td:nth-last-child(1), th:nth-last-child(1) {
        padding-right: 6rem;
    }

    .user {
        height: 5rem;
        position: relative;
        float: left;
        width: 5rem;
        background-color: whitesmoke;
        color: darkgray;
        border-radius: 50%;
        box-shadow: 0 5px 9px rgba(0, 0, 0, 0.05), 0 2px 2px rgba(0, 0, 0, 0.1);
        text-align: center;
        margin: 1rem auto;
    }

    .user-icon {
        font-size: 2rem;
        line-height: 5rem;
    }

    .user-name {
        font-size: 1.6rem;
        font-weight: 600;
    }

    .absent {
        background-color: #fbe2e2;
        border-radius: 5rem;
        padding: 0.8rem;
        color: #b46b67;
        font-weight: 600;
    }

    .present {
        background-color: #ebf8ea;
        border-radius: 5rem;
        padding: 0.4rem 0.8rem;
        color: #618b62;
        font-weight: 600;
    }

    .checkbox, .radio {
        margin-bottom: 0;
    }

    .card {
        border-radius: .4rem;
        border-top: 3px solid rgba(7, 74, 116, 1);
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

    .heading div {
        font-weight: 600;
        color: #a4a5ab;
    }

    .attendance-body {
        margin-left: 7rem;
        margin-right: 7rem;
        z-index: 1;
    }


    .attendance-item {
        background-color: white;
        border-radius: .4rem;
        z-index: 1;
        transition: all 0.2s ease-in-out;
    }

    .attendance-item:hover {
        cursor: pointer;
        box-shadow: 0 1rem 3rem rgba(0, 0, 0, .175) !important;
        z-index: 10;
        transform: scale(1.005);
    }

    .attendance-head {
        margin-left: 5.5rem;
        margin-right: 5.5rem;
    }

    .no-attendance{
        font-size: 1.8rem;
        font-weight: 600;
        color: #a4a5ab;
    }


</style>