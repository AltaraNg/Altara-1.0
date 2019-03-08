<template>
    <transition name="fade">
        <div class="pt-md-3 pt-2 attendance attendance-view" id="index">

            <div class="mt-5 attendance-head">
                <div class="mb-5 row align-items-center">
                    <div class="col-12 title-con">
                        <span class="title">Caution Register</span>
                        <div class="row justify-content-end">
                            <router-link class="text-link mt-3" to="caution/create">click here to send caution a staff!</router-link>
                        </div>
                    </div>
                </div>
            </div>

            <div class="mt-5 row attendance-head mb-4">
                <div :class="`col-${capt.col}`" v-for="capt in columns">
                    <div class="row">
                        <div class="light-heading"><span class="d-none d-sm-inline"></span> {{capt.name}}</div>
                    </div>
                </div>
            </div>

            <div class="mt-1 attendance-body">
                <div v-if="show">
                    <div class="mb-3 px-0 row align-items-center attendance-item" v-for="(caution,index) in cautions.data">

                        <div class="col-12 col-xs-4 col-md-4 col-lg-4">
                            <div class="row align-items-center">
                                <div class="ml-5 mr-3 sm-hide">
                                    <span class="user mx-auto">
                                        <!--<i class="user-icon fas fa-user-alt"></i>-->
                                        {{index+1 + ((cautions.current_page-1) * 10)}}
                                    </span>
                                </div>
                                <div class="col">
                                    <span class="user-name">{{caution.user.full_name}}</span>
                                    <!--<span class="staff_id-sm">{{caution.user.staff_id}}</span>-->
                                </div>
                            </div>
                        </div>

                        <div class="col-12 col-xs-3 col-md-3 col-lg-3">
                            <div class="row">
                                <span>{{caution.issuer.full_name}}</span>
                            </div>
                        </div>

                        <div class="col-12 col-xs-2 col-md-2 col-lg-2 sm-hide">
                            <div class="row"><span>{{caution.reason_min}}</span></div>
                        </div>

                        <div class="col-6 col-xs-2 col-md-2 col-lg-2 pr-3 py-4 py-sm-0 px-sm-0 px-lg-4 sm-hide">
                            <div class="row"><span>{{caution.penalty_min}}</span></div>
                        </div>

                        <div class="col-6 col-xs-1 col-md-1 col-lg-1 pl-3 py-4 py-sm-0">
                            <div class="row">
                                <span>
                                    {{caution.date_text}}
                                </span>
                            </div>
                        </div>
                    </div>

                    <div class="mb-5 px-0 row align-items-center">
                        <div class="w-100 mb-4 mt-5 mx-0 hr"></div>
                        <!--<div class="clearfix d-flex justify-content-end w-100">
                            <button :disabled="$isProcessing" class="mx-3 btn bg-default" type="submit">
                                create Attendance <i class="far fa-paper-plane ml-1"></i>
                            </button>
                        </div>-->


<div class="clearfix w-100 mt-4">

    <div class="float-left">
         <strong class="light-heading float-left">
             Displaying: {{cautions.from}} - {{cautions.to}} of {{cautions.total}}
         </strong>
    </div>

    <nav aria-label="Page navigation example" class="float-right">
        <ul class="pagination pagination-lg float-left">
            <li class="page-item" :class="!cautions.first_page_url ? 'disabled' : ''">
                <router-link :to="{query:{page:1}}" class="page-link">
                    First
                </router-link>
            </li>
            <li class="page-item" :class="!cautions.prev_page_url ? 'disabled' : ''">
                <router-link :to="{query:{page:cautions.current_page-1}}" class="page-link">
                    Previous
                </router-link>
            </li>

            <li class="page-item"><span class="page-link">Current Page: {{cautions.current_page}}</span></li>

            <li class="page-item" :class="!cautions.next_page_url ? 'disabled' : ''">
                <router-link :to="{query:{page:cautions.current_page+1}}" class="page-link">
                    Next
                </router-link>
            </li>
            <li class="page-item" :class="!cautions.last_page_url ? 'disabled' : ''">
                <router-link :to="{query:{page:cautions.last_page}}" class="page-link">
                    Last
                </router-link>
            </li>
        </ul>
    </nav>
</div>



                    </div>
                </div>
                <div class="row attendance-item p-5 mb-5" v-else>
                    <span class="no-attendance">No cautions has been issued!</span>
                </div>
            </div>

        </div>
    </transition>
</template>

<script>
    import Vue from 'vue';
    import {get} from "../../../helpers/api";
    import Flash from "../../../helpers/flash";

    const apiLink = to => `/caution${to.query.page ? '?page='+to.query.page : ''}`;
    export default {
        data() {
            return {
                show: false,
                cautions: {},
                columns: [
                    {name: 'Employee', col: 4},
                    {name: 'Issued by', col: 3},
                    {name: 'Reason', col: 2},
                    {name: 'Penalty', col: 2},
                    {name: 'Date', col: 1},
                ]
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
                if(data.cautions.data.length < 1) this.$router.push({query:{page:data.cautions.last_page}});
                if (data) {
                    Vue.set(this.$data, 'cautions', data.cautions);
                    this.show = true;
                }
                this.$LIPS(false);
            },
            handleErr(e) {
                Flash.setError('Error Fetching Attendance');
            },
        }
    }
</script>