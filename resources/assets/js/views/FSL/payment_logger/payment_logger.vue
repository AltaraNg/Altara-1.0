<template>
    <transition name="fade">
      <div>
        <Lookup :logger="'payment'"/>
      </div>
    </transition>
</template>

<script>
    import Lookup from "../lookup/lookup";
    import Flash from '../../../utilities/flash';
    // import PaymentFilter from "../../../components/PaymentFilter";

    export default {
        components: {Lookup},
        data() {
            return {
              
            }
        },

        methods: {
            
        },
        computed: {
           
        }
    }
</script>

<style scoped type="scss">
    .attendance-head .light-heading:nth-child(1) {
        max-width: 120px;
    }
</style>
