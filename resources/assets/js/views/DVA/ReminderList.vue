<template>
    <transition name="fade">
        <div id="reminder" class="attendance">

            <custom-header :title="'Reminder List'"/>





        </div>
    </transition>
</template>
<script>
    import {get} from '../../utilities/api';
    import Flash from "../../utilities/flash";
    import Order from "../../components/Orders";
    import {mapGetters, mapActions} from "vuex";
    import CustomHeader from '../../components/customHeader';

    export default {
        props: {
            //TODO::verify if its necessary to make this a prop
            withBranchFilter: {default: true},
            urlToFetchOrders: {default: '/api/reminder/create'}
        },

        components: {CustomHeader, Order},

        computed: {...mapGetters(['getBranches'])},

        data() {
            return {
                branch_id: '',
                page_size: 10,
                date_from: null,
                date_to: null,
                page: 1,
                filters: [
                    {name: 'date from', model: 'date_from'},
                    {name: 'date to', model: 'date_to'}
                ],
                orders: null,
                response: {},
                show: false,
                headings:
                    ['Order Number', 'Order Summary', 'Customer Info Summary', 'Repayment Summary', 'Reminder History']
            }
        },

        methods: {}

    }
</script>

<style scoped>
    .flex-row-bottom {
        display: flex;
        flex-direction: row;
        align-items: flex-end;
        justify-content: flex-end;
    }
</style>
