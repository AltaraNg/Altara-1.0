<template>
    <div id="reminder">

        <div class="mt-5 mb-3 attendance-head">
            <ul class="nav nav-tabs justify-content-center p-0" role="tablist">
                <li class="col p-0 nav-item mb-0" v-for="(tab,index) in tabs">
                    <a aria-selected="true" class="nav-link" :class="index === 0 && 'active'"
                       data-toggle="tab" href="#reminder-panel" @click="setList(index)"
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
                <div class="col light-heading" v-for="header in headings">{{header}}</div>
            </div>
        </div>

        <order :list="list" :mode="mode()"/>

    </div>
</template>

<script>
    import Order from "../../../components/Orders";
    import {EventBus} from "../../../utilities/event-bus";

    export default {
        components: {Order},

        data() {
            return {
                list: this.mode('sms') ? 1 : 4,
                doSelectAll: false,
            }
        },

        methods: {
            selectAll() {
                this.doSelectAll = !this.doSelectAll;
                EventBus.$emit('selectOrderItem', this.doSelectAll);
            },

            setList(index) {
                this.list = (index + 1) + (this.mode('call') && 3);
            },

            mode(query = null, mode = this.$route.meta.mode) {
                return query ? mode === query : mode
            }
        },

        computed: {
            tabs() {
                let tabs = ["1<sup>st</sup>", "2<sup>nd</sup>", "3<sup>rd</sup>"];
                this.mode('call') && (tabs = [...tabs, "Guarantor's", "Promise"]);
                return tabs
            },

            headings() {
                let headings = ['Order Number', 'Order Summary', 'Customer Info Summary', 'Repayment Summary', 'Reminder History'];
                this.mode('call') && (headings = [...headings, 'Feedback', 'Promise Date']);
                return headings;
            },
        }
    }
</script>

<style scoped type="scss">
    .attendance-head .light-heading:nth-child(1) {
        max-width: 120px;
    }
</style>