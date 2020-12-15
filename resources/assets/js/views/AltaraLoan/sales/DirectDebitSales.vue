<template>
    <transition name="fade">
        <OrderList :url-to-fetch-orders='`/api/orders/direct-debit-sales`'/>
    </transition>
</template>
<script>
    import OrderList from '../../DVA/AllOrderList';

    export default {
        components: {OrderList},
    };
</script>
