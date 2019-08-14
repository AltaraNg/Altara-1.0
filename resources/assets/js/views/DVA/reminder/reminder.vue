<template>
    <transition name="fade">
        <div id="reminder">

            <div class="mt-5 mb-3 attendance-head">
                <ul class="nav nav-tabs justify-content-center p-0" role="tablist">
                    <li class="col p-0 nav-item mb-0" v-for="(tab,index) in details.tabs">
                        <a aria-selected="true" class="nav-link" :class="index === 0 && 'active'"
                           data-toggle="tab" href="#reminder-panel" @click="listToOrder = details.list + index"
                           role="tab" v-html="tab + ' ' + mode()"></a>
                        <!--1. the @click is to set this.list to 1,2,3,4,5,6,7,8
                        as the case may be, this is used at the backend
                        to know which list is to be fetched
                        2. the v-htm will resolve to eg 1st call or 1st sms
                        (mode is either sms or call as the case may be)
                        3. the :class="index === 0 && "active" will
                        make the first tab to be the
                        active tab on-load-->
                    </li>
                </ul>
            </div>

            <div class="mt-5 mb-3 attendance-head">
                <div class="row px-4 pt-3 pb-4 text-center">
                    <div class="col p-0 text-link" @click="selectAll" style="max-width: 120px" v-if="mode('sms')">
                        Click to {{doSelectAll ? 'De-select' : 'Select'}} all
                    </div>
                    <div class="col light-heading" v-else>Action</div>
                    <div class="col light-heading" v-for="header in details.headings">{{header}}</div>
                </div>
            </div>

            <order :list="listToOrder" :mode="mode()"/>

        </div>
    </transition>
</template>

<script>
    import Order from "../../../components/Orders";
    import {EventBus} from "../../../utilities/event-bus";

    export default {
        components: {Order},

        data() {
            return {
                listToOrder: null,
                doSelectAll: false,
            }
        },

        methods: {
            selectAll() {
                this.doSelectAll = !this.doSelectAll;
                EventBus.$emit('selectOrderItem', this.doSelectAll);
            },
            mode(query = null, mode = this.$route.meta.mode.toLowerCase()) {
                return query ? mode === query : mode
            }
        },

        computed: {
            details() {
                let list = 1,
                    tabs = ["1<sup>st</sup>", "2<sup>nd</sup>", "3<sup>rd</sup>"],
                    headings = ['Order Number', 'Order Summary', 'Customer Info Summary', 'Repayment Summary', 'History'];
                switch (this.mode()) {
                    case 'call':
                        list = 4;
                        tabs = [...tabs, "Guarantor's", "Promise"];
                        headings = [...headings, 'Feedback', 'Promise Date'];
                        break;
                    case 'collection':
                        list = 9;
                        tabs.splice(2, 1);
                        headings = [...headings, 'Visited?', 'Feedback'];
                        break;
                    case 'recovery':
                        list = 11;
                        headings = [...headings, 'Visited?', 'Feedback'];
                        break;
                    case 'external-recovery':
                        list = 14;
                        tabs.splice(1, 2);
                        headings = [...headings, 'Delivered Letter?', 'Feedback'];
                        break;
                }
                if (!this.listToOrder) this.listToOrder = list;
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