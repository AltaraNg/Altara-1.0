<template>
    <transition name="fade">
        <div id="reminder">
            <div class="mt-5 mb-3 attendance-head">
                <ul class="nav nav-tabs justify-content-center p-0" role="tablist">
                    <li class="col p-0 nav-item mb-0" v-for="(tab,index) in details.tabs" :key="index">
                        <a 
                        aria-selected="true" 
                        class="nav-link" 
                        :class=" (index === 0 ) && 'active'"
                        data-toggle="tab" 
                        href="#renewal-panel" 
                        @click="listToOrder = tab"
                        role="tab" 
                        v-html="tab">
                        </a>
                    </li>
                </ul>
            </div>
            
            <div class="mt-5 mb-3 attendance-head" v-if="details.headings">
                <div class="row px-4 pt-3 pb-4 text-center">
                    <div class="col light-heading" :key="index" v-for="(header,index) in details.headings">{{header}}</div>
                </div>
            </div>
            <Payment :list="listToOrder" :tab="listToOrder"/>
        </div>
    </transition>
</template>

<script>
    import Lookup from "../lookup/lookup";
    import Payment from "../../../components/Payment";
    import Flash from '../../../utilities/flash';

    export default {
        components: {Lookup,Payment},
        data() {
            return {
                listToOrder: 'Log Payment',
            }
        },
        methods: {
            mode(query = null, mode = this.$route.meta.mode.toLowerCase()) {
                return query ? mode === query : mode
            },
        },
        computed: {           
            details() {
                let list = 1;
                const tabs = ["Log Payment","View Payments", "Reconcile"];
                const headings2 = ['index','Type','Total','Amount Bank','Variance','Comment'];
                const headings1 = ['index','Customer ID', 'Date of Payment', 'Time of Payment','Payment Purpose','Payment Type','Amount Paid','Comment'];
                const headings = this.listToOrder === "View Payments" ? headings1 : this.listToOrder === "Reconcile" ? headings2 : '';
                return {tabs, headings, list};
            },
        }
    }
</script>

<style scoped type="scss">
    .attendance-head .light-heading:nth-child(1) {
        max-width: 120px;
    }
</style>
