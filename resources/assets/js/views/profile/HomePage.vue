<template>
    <transition name="fade">
        <OrderList :with-branch-filter='false'
                   :url-to-fetch-orders='`/api/orders/user/${getAuthUserDetails.userId}`'/>
    </transition>
</template>
<script>
    import {mapGetters} from 'vuex';
    import OrderList from '../DVA/AllOrderList';

    export default {
        components: {OrderList},

        computed: {
            ...mapGetters(['getAuthUserDetails'])
        }
    };
</script>
