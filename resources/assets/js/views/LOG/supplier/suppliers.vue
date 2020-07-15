<template>
    <transition name="fade">
        <div id="reminder" class="attendance">

            <custom-header :title="'Suppliers List'"/>
            <div class="mt-2 mt-lg-3 row attendance-head ">
                <router-link :to="{name: 'suppliersCreate'}">
            <button class="btn btn-primary bg-default mt-0 myBtn ">New Supplier</button>
                </router-link>
            </div>
            <div class="mt-2 mt-lg-3 row attendance-head attendance-view">
                <div class="col-4 col-lg" v-for="{name:filter,model} in filters">
                    <div class="row">

                        <div class="light-heading mb-1">
                            <span class="d-none d-sm-inline">Select </span>
                            {{filter | capitalize}}
                        </div>

                        <div class="form-group w-100" v-if="filter === 'state'">
                            <select class="custom-select" v-model="$data[model]"
                                    @keyup.enter="fetchData()">
                                <option disabled selected value="">{{filter | capitalize}}</option>
                                <option :value="id" v-for="{name,id} in getStates">
                                    {{name | capitalize}}
                                </option>
                            </select>
                        </div>


                    </div>
                </div>

                <div class="col-6 col-sm p-0 flex-row-bottom">
                    <button @click="fetchData()" class="btn btn-primary bg-default mt-0 myBtn">Apply Filter</button>
                </div>
            </div>

            <div class="mt-5 mb-3 attendance-head">
                <div class="w-100 my-5 mx-0 hr"></div>
                <div class="row px-4 pt-3 pb-4 text-center">
                    <div class="col light-heading" style="max-width: 120px">S/N</div>
                    <div class="col light-heading" v-for="header in headings">{{header}}</div>
                </div>
            </div>
            <div class="tab-content mt-1 attendance-body">

                    <div class="mb-3 row attendance-item" :key="index" v-for="(supplier,index) in suppliers" @click="viewSupplier(supplier)">
                        <div class="col d-flex align-items-center" style="max-width: 120px">
                            <span class="user mx-auto" >{{index+OId}}</span>
                        </div>
                        <div class="col d-flex align-items-center justify-content-center ">
                            {{supplier.name | capitalize}}
                        </div>
                        <div class="col d-flex align-items-center justify-content-center">
                            {{supplier.sku}}
                        </div>
                        <div class="col d-flex align-items-center justify-content-center">
                            {{supplier.email}}
                        </div>
                        <div class="col d-flex align-items-center justify-content-center">
                            {{supplier.phone_number}}
                        </div>
                        <div class="col d-flex align-items-center justify-content-center">
                            {{supplier.contact_person_name| capitalize}}
                        </div>


                </div>
            </div>
            <div class="modal fade repayment" id="viewSupplier">
                <div class="modal-dialog modal-lg" role="document">
                    <div class="modal-content" v-if="showModalContent">
                        <div class="modal-header py-2">
                            <h4>{{supplierItem.name}}</h4>
                            <a aria-label="Close" class="close py-1" data-dismiss="modal">
                        <span aria-hidden="true" class="modal-close text-danger">

                            <i class="fas fa-times"></i>
                        </span>
                            </a>
                        </div>
                        <div class="modal-body px-5">
                            <p><b>SKU: </b> <span>{{supplierItem.sku}}</span></p>
                            <p><b>Address: </b> <span>{{supplierItem.address}}</span></p>
                            <p><b>City: </b> <span>{{supplierItem.city}}</span></p>
                            <p><b>State: </b> <span>{{supplierItem.state}}</span></p>
                            <p><b>Contact: </b> <span>{{supplierItem.contact_person_name}}</span></p>
                            <p><b>Status: </b><span v-if="supplierItem.is_active === 1" class="green">Active</span><span v-else class="red"> Inactive</span></p>
                            <p><b>Phone Number: </b> <span>{{supplierItem.phone_number}}</span></p>
                            <p><b>Email: </b> <span>{{supplierItem.email}}</span></p>
                            <p><b>Bank Name: </b> <span>{{supplierItem.bank_name}}</span></p>
                            <p><b>Bank Account Name: </b> <span>{{supplierItem.bank_account_name}}</span></p>
                            <p><b>Bank Account Number: </b> <span>{{supplierItem.bank_account_no}}</span></p>
                            <p><b>Date Added: </b> <span>{{supplierItem.created_at.split(' ')[0]}}</span></p>


                        </div>
                        <div class="modal-footer justify-content-center">

                            <button  class="text-center btn bg-default" @click="edit(supplierItem.id)">Edit</button>

                        </div>
                    </div>
                </div>
            </div>

            <div v-if="pageParams">
                <base-pagination
                    :prev_page_url="pageParams.prev_page_url? pageParams.prev_page_url : '' "
                    :next_page_url="pageParams.next_page_url? pageParams.next_page_url : ''"
                    :first_page_url="pageParams.first_page_url"
                    :last_page_url="pageParams.last_page_url"
                    :last_page="pageParams.last_page"
                    :current_page="pageParams.current_page"
                    :from="pageParams.from"
                    :to="pageParams.to"
                    :total="pageParams.total"
                    :page="page"
                    @fetchData="fetchData()"
                    @next="next()"
                    @prev="prev()"
                    :page_size="pageParams.per_page">
                </base-pagination>

            </div>





        </div>
    </transition>
</template>
<script>
    import {get} from '../../../utilities/api';
    import Flash from "../../../utilities/flash";

    import {mapGetters, mapActions} from "vuex";
    import CustomHeader from '../../../components/customHeader';
    import BasePagination from '../../../components/Pagination/BasePagination'

    export default {
        props: {
            //TODO::verify if its necessary to make this a prop
            withBranchFilter: {default: true},
            urlToFetchOrders: {default: '/api/supplier'}
        },

        components: {CustomHeader, BasePagination },

        computed: {...mapGetters(['getStates'])},

        data() {
            return {
                branch_id: '',
                OId: null,
                showModalContent: false,
                pageParams: null,
                page_size: 10,
                date_from: null,
                date_to: null,
                page: 1,
                filters: [

                ],
                suppliers: null,
                supplierItem: null,
                response: {},
                show: false,
                headings:
                    ['Name', 'SKU','Email', 'Phone Number', 'Contact Person']
            }
        },

        methods: {
            fetchData() {
                this.$scrollToTop();
                this.$LIPS(true);
                let {page, page_size} = this.$data;
                get(this.urlToFetchOrders +
                    `${!!page ? `?page=${page}` : ''}` +
                    `${!!page_size ? `&pageSize=${page_size}` : ''}`
                )
                    .then(({data}) => this.prepareList(data))
                    .catch(() => Flash.setError('Error Preparing form'));


            },

            prepareList(response){
                let {current_page, first_page_url, from, last_page, last_page_url, data, per_page, next_page_url, to, total, prev_page_url} = response.data;
                this.pageParams = Object.assign({}, this.pageParams, {current_page, first_page_url, from, last_page, last_page_url, per_page, next_page_url, to, total, prev_page_url});
                this.suppliers = data;
                this.OId = from;
                this.$LIPS(false);

            },

            next(firstPage = null) {
                if (this.pageParams.next_page_url) {
                    this.page = firstPage ? firstPage : parseInt(this.page) + 1;
                    this.fetchData();
                }
            },

            prev(lastPage = null) {
                if (this.pageParams.prev_page_url) {
                    this.page = lastPage ? lastPage : parseInt(this.page) - 1;
                    this.fetchData();
                }
            },


            viewSupplier(supplier){
                this.showModalContent = true;
                this.supplierItem = supplier;
                return $(`#viewSupplier`).modal('toggle');
            },
            edit(item){
                this.showModalContent = false;
                $(`#viewSupplier`).modal('toggle');

                return this.$router.push(
                    {name: 'suppliersEdit', params: {id: item}}
                )
            },



            ...mapActions('ModalAccess', [
                'addCustomerOptionsModalsToDom',
                'removeCustomerOptionsModalsFromDom'
            ])
        },

        created() {
            this.$props.withBranchFilter && this.filters.unshift({name: 'state', model: 'state_id'}, );
            this.addCustomerOptionsModalsToDom();

            this.$prepareStates();
            this.fetchData();
        },

        destroyed() {
            this.removeCustomerOptionsModalsFromDom();
        }
    }
</script>

<style scoped>
    .flex-row-bottom {
        display: flex;
        flex-direction: row;
        align-items: flex-end;
        justify-content: flex-end;
    }
    .green{
        color: green;
    }
    .red{
        color: red;
    }
</style>
