<template>
    <transition name="fade">
        <div>
            <div class="pt-md-3 pt-2 attendance attendance-view" id="index">

                <div class="mt-5 attendance-head">
                    <div class="mb-5 row align-items-center">
                        <div class="col-12 title-con">
                            <span class="title">Send Caution</span>
                            <div class="row justify-content-end">
                                <router-link class="text-link mt-3" to=".">view all cautions!</router-link>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="mt-5 row attendance-head mb-4">
                    <div :class="`col-${capt.col}`" v-for="capt in sections">
                        <div class="row">
                            <div class="light-heading"><span class="d-none d-sm-inline"></span> {{capt.name}}</div>
                        </div>
                    </div>
                </div>

                <div class="mt-1 attendance-body">
                    <form @submit.prevent="onSave">
                        <div class="mb-3 p-5 row align-items-center shadow-sm rounded bg-white">
                            <h5>Supplier Details</h5>

                            <div class="w-100">
                                <div class="form-group col-md-6 col-12 float-left px-0 px-md-3">
                                    <label>Employee Name</label>
                                    <typeahead :options="users" caption="full_name" v-model="form.user_id"/>
                                </div>

                                <div class="form-group col-md-6 col-12 float-left px-0 px-md-3">
                                    <label>Issued by</label>
                                    <typeahead :options="users" caption="full_name" v-model="form.issuer_id"/>
                                </div>
                            </div>

                            <div class="w-100">
                                <div class="form-group col-md-6 col-12 float-left px-0 px-md-3">
                                    <label>Reason</label>
                                    <textarea class="form-control w-100"
                                              name="reason"
                                              placeholder="reason for caution"
                                              rows="1"
                                              v-model="form.reason"
                                              v-validate="'required|max:255'"></textarea>
                                    <small v-if="errors.first('reason')">{{errors.first('reason')}}</small>
                                </div>

                                <div class="form-group col-md-6 col-12 float-left px-0 px-md-3">
                                    <label>Penalty</label>
                                    <select class="custom-select w-100"
                                            data-vv-validate-on="blur"
                                            name="penalty"
                                            v-model="form.penalty" v-validate="'required'">
                                        <option selected value="">-- select penalty --</option>
                                        <option value="1">penalties</option>
                                    </select>
                                    <small v-if="errors.first('penalty')">{{errors.first('penalty') }}</small>
                                </div>
                            </div>

                            <div class="w-100">
                                <div class="form-group col-md-6 col-12 float-left px-0 px-md-3">
                                    <label>Date</label>
                                    <input class="form-control" data-vv-as="date" name="date" type="date"
                                           v-model="form.date" v-validate="'required'">
                                    <small v-if="errors.first('date')">{{errors.first('date')}}</small>
                                </div>
                            </div>


                        </div>

                        <div class="mb-5 px-0 row align-items-center">
                            <div class="w-100 mb-4 mt-5 mx-0 hr"></div>
                            <div class="clearfix d-flex justify-content-end w-100">
                                <button :disabled="$isProcessing" class="mx-3 btn bg-default" type="submit">
                                    create Attendance <i class="far fa-paper-plane ml-1"></i>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
    import Vue from 'vue';
    import {get,post} from "../../../helpers/api";
    import {log} from "../../../helpers/log";
    import Flash from "../../../helpers/flash";

    import Typeahead from '../../../components/Typeahead';

    const apiLink = () => `/caution/create`;
    export default {
        components:{ Typeahead },
        data() {
            return {

                users:null,
                options:[
                    {id:1, text: 'Apple'},
                    {id:2, text: 'Mango'},
                    {id:3, text: 'Guava'},
                    /* {id:4, text: 'pineapple'},
                     {id:5, text: 'orange'},
                     {id:6, text: 'banana'},
                     {id:7, text: 'melon'},
                     {id:8, text: 'avocado'},*/
                ],

                columns: {},
                show: false,
                form: {},
                error:{},
                sections: [
                    {name: 'Employee', col: 4},
                    {name: 'Issued by', col: 3},
                    {name: 'Reason', col: 2},
                    {name: 'Penalty', col: 2},
                    {name: 'Date', col: 1},
                ],
            }
        },
        beforeRouteEnter(to, from, next) {
            //1. make request to back-end
            get(`/api${apiLink(to)}`).then(res => {
                //2 send to the method to prepare form
                next(vm => vm.prepareForm(res.data));
            }).catch(err => {
                //Handle error
                next(vm => vm.handleErr(err));
            });
        },
        beforeRouteUpdate(to, from, next) {
            this.show = false;
            //1. make request to back-end
            this.$LIPS(true);
            get(`/api${apiLink(to)}`).then(res => {
                //2 send to the method to prepare form
                this.prepareForm(res.data);
                next();
            }).catch(err => {
                this.handleErr(err);
                next();
            });
        },
        methods: {
            onSave() {
                this.$validator.validateAll().then(result => {
                    if (result) {
                        if (this.$network()) {


                            this.$LIPS(true);
                            this.error = {};
                            post('/api/caution', {form: this.form})
                                .then(res => {
                                    if (res.data.saved) {
                                        log(`Caution To By`, `${this.form.user_id}`);
                                        this.prepareForm(res.data);
                                        Flash.setSuccess(`Caution sent!`, 3000);
                                    }
                                })
                                .catch(e => {
                                    e = e.response;
                                    if (e.status === 422) {
                                        this.error = e.data.errors ? e.data.errors : e.data;
                                        this.$networkErr('unique');
                                    }
                                }).finally(() => this.$LIPS(false));


                        } else this.$networkErr()
                    } else this.$networkErr('form');
                })
            },
            prepareForm(data) {
                Vue.set(this.$data, 'form', data.form);
                Vue.set(this.$data, 'users', data.users);
                this.show = true;
                this.$LIPS(false);
            },
            handleErr(e) {
                Flash.setError('Error Fetching Attendance');
            },
        }
    }
</script>