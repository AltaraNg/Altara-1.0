<template>
    <transition name="fade">
        <div class="pt-md-3 pt-2 attendance-view" id="index">

            <custom-header
                    :to="'caution/create'"
                    :title="'Caution(s) register'"
                    :button-title="'click here to send caution a staff!'"/>

            <div class="mt-5 row attendance-head mb-4" v-if="show">
                <div :class="`col-${col}`" v-for="{name,col} in columns">
                    <div class="row">
                        <div class="light-heading"><span class="d-none d-sm-inline"></span> {{name}}</div>
                    </div>
                </div>
            </div>

            <div class="mt-1 attendance-body">
                <div v-if="show">
                    <div class="mb-3 px-0 row align-items-center attendance-item"
                         v-for="(caution,index) in cautions.data"
                         @click="displayInfo(caution)" data-toggle="tooltip" data-placement="top"
                         title="click on here to view full details!">
                        <div class="col-12 col-xs-4 col-md-4 col-lg-4">
                            <div class="row align-items-center">
                                <div class="ml-5 mr-3 sm-hide">
                                    <span class="user mx-auto">
                                        {{index+1 + ((cautions.current_page-1) * 10)}}
                                    </span>
                                </div>
                                <div class="col">
                                    <span class="user-name">{{caution.user.full_name}}</span>
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
                                    {{caution.date}}
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="mb-5 px-0 row align-items-center">
                        <div class="w-100 mb-4 mt-5 mx-0 hr"></div>
                        <div class="clearfix w-100 mt-4">
                            <div class="float-left">
                                <strong class="light-heading float-left">
                                    Displaying: {{cautions.from}} - {{cautions.to}} of {{cautions.total}}
                                </strong>
                            </div>
                            <nav aria-label="Page navigation example" class="float-right">
                                <ul class="pagination pagination-lg float-left">
                                    <li :class="!cautions.first_page_url ? 'disabled' : ''" class="page-item">
                                        <router-link :to="{query:{page:1}}" class="page-link">
                                            First
                                        </router-link>
                                    </li>
                                    <li :class="!cautions.prev_page_url ? 'disabled' : ''" class="page-item">
                                        <router-link :to="{query:{page:cautions.current_page-1}}" class="page-link">
                                            Previous
                                        </router-link>
                                    </li>
                                    <li class="page-item"><span class="page-link">Current Page: {{cautions.current_page}}</span>
                                    </li>
                                    <li :class="!cautions.next_page_url ? 'disabled' : ''" class="page-item">
                                        <router-link :to="{query:{page:cautions.current_page+1}}" class="page-link">
                                            Next
                                        </router-link>
                                    </li>
                                    <li :class="!cautions.last_page_url ? 'disabled' : ''" class="page-item">
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

            <div class="modal fade" id="view-caution">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header py-2">
                            <h6 class="modal-title py-1">Caution</h6>
                            <a aria-label="Close" class="close py-1" data-dismiss="modal">
                                <span aria-hidden="true" class="modal-close text-danger">
                                    <i class="fas fa-times"></i>
                                </span>
                            </a>
                        </div>

                        <div class="modal-body">

                            <div class="px-2" v-if="caution">
                                <div class="px-4">
                                    <div class="row">
                                        <span><strong>Employee : </strong></span>
                                        <div class="col">{{caution.user.full_name}}</div>
                                    </div>
                                    <div class="row">
                                        <span><strong>Issued by : </strong></span>
                                        <div class="col">{{caution.issuer.full_name}}</div>
                                    </div>
                                    <div class="row">
                                        <span><strong>Reason : </strong></span>
                                        <div class="col">{{caution.reason}}</div>
                                    </div>
                                    <div class="row">
                                        <span><strong>Penalty : </strong></span>
                                        <div class="col">{{caution.penalty}}</div>
                                    </div>
                                    <div class="row">
                                        <span><strong>Date : </strong></span>
                                        <div class="col">{{caution.date}}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <a class="text-link mt-3 w-100" data-dismiss="modal" href="javascript:"
                               style="text-align: right">close dialogue</a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </transition>
</template>

<script>
    import Vue from 'vue';
    import {get} from "../../../utilities/api";
    import Flash from "../../../utilities/flash";
    import CustomHeader from '../../../components/customHeader';

    const apiLink = ({page}) => `/caution${page ? '?page=' + page : ''}`;
    export default {

        components: {CustomHeader},

        data() {
            return {
                show: false,
                caution: null,
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
        beforeRouteEnter({query}, from, next) {
            get(`/api${apiLink(query)}`)
                .then(({data}) => next(vm => vm.prepareForm(data)))
                .catch(err => next(vm => vm.handleErr(err)));
        },
        beforeRouteUpdate({query}, from, next) {
            this.show = false;
            this.$LIPS(true);
            get(`/api${apiLink(query)}`).then(({data}) => {
                this.prepareForm(data);
                next();
            }).catch(err => {
                this.handleErr(err);
                next();
            });
        },
        methods: {
            prepareForm({cautions}) {
                if (cautions.data.length < 1 && cautions.total !== 0)
                    this.$router.push({query: {page: cautions.last_page}});
                if (cautions.data.length) {
                    Vue.set(this.$data, 'cautions', cautions);
                    this.show = true;
                }
                this.$LIPS(false);
            },
            handleErr(e) {
                Flash.setError('Error Fetching Cautions');
            },
            displayInfo(caution) {
                Vue.set(this.$data, 'caution', caution);
                return $(`#view-caution`).modal('toggle');
            }
        },
        updated() {
            $('[data-toggle="tooltip"]').tooltip({boundary: 'window', html: true});
            $(document).on("hidden.bs.modal", '.modal', () => this.caution = '');
        }
    }
</script>