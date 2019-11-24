<template>
    <div class="mb-3 row attendance-item">

        <div class="col-12 col-xs-2 col-md col-lg d-flex align-items-center" style="max-width: 120px">
            <span v-if="mode === 'normal-list'"></span>
            <span
                v-else-if="order.reminder.canBeSelected && ['collection','recovery','call','external-recovery'].includes(mode)"
                class="user mx-auto bg-pending text-white" @click="logReminder">
                <i class="fas fa-hourglass-start"></i>
            </span>
            <div v-else-if="order.reminder.canBeSelected && mode === 'sms'" class="d-flex align-items-center">
                <input class="form-check-input my-0 mx-4 float-left position-relative " type="checkbox"
                       v-model="order.isSelected" @click="toggleSelect">
            </div>
            <span class="user mx-auto sent-reminder" v-else><i class="fas fa-check"></i></span>
            <span class="user mx-auto" :class="getOrderStatusClass(getOrderStatus(order))">
                {{startIndex + index}}
            </span>

            <span v-if="$route.meta.customSMS">
                <CustomSMSButton :order="order" :key="order.order.id"/>
            </span>
        </div>

        <div class="col-12 col-xs-2 col-md col-lg user-name d-flex align-items-center justify-content-center">
            {{$vnode.key}}
        </div>

        <div class="col-12 col-xs-2 col-md col-lg d-flex align-items-center justify-content-center"
             @click="$emit('display', order, 'purchase_order')" data-hoverable="true">
            {{order.order.order_date}}
        </div>

        <div class="col-12 col-xs-3 col-md col-lg d-flex align-items-center justify-content-center"
             @click="$emit('display', order, 'customer_info')" data-hoverable="true">
            ID: {{order.customer.id}} - {{order.customer.employment_status | capitalize}}
        </div>

        <div class="col-12 col-xs-2 col-md col-lg d-flex align-items-center justify-content-center"
             @click="$emit('display', order, 'repayment')" data-hoverable="true">
            {{order.financialStatus}}
        </div>

        <div class="col-12 col-xs-2 col-md col-lg d-flex align-items-center justify-content-center"
             @click="$emit('display', order, 'reminder_history')" data-hoverable="true">
            {{order.order.reminders.length}} reminder(s) sent
        </div>

        <div class="col-12 col-xs-2 col-md col-lg d-flex align-items-center attendance-create"
             v-if="['collection','recovery','external-recovery'].includes(mode)">
            <span class="present">
                <span class="radio w-50 pr-3 mb-0 float-left">
                    <input type="radio" :value="true" :id="`present${index}`" :name="`isPresent${index}`"
                           v-model="order.reminder.is_visited">
                    <label :for="`present${index}`">yes</label>
                </span>
                <span class="radio w-50 pl-3 mb-0 float-left">
                    <input type="radio" :value="false" :id="`absent${index}`" :name="`isPresent${index}`"
                           v-model="order.reminder.is_visited">
                    <label :for="`absent${index}`">no</label>
                </span>
            </span>
        </div>

        <div class="col-12 col-xs-2 col-md col-lg d-flex align-items-center"
             v-if="['collection','recovery','call','external-recovery'].includes(mode)">
            <textarea class="form-control" rows="1" v-model="order.reminder.feedback"
                      :disabled="!order.reminder.canBeSelected">
            </textarea>
        </div>

        <div class="col-12 col-xs-2 col-md col-lg d-flex align-items-center" v-if="mode === 'call'">
            <input class="form-control" type="date" v-model="order.promiseCall.date"
                   :disabled="!order.reminder.canBeSelected">
        </div>

    </div>
</template>

<script>
    import {post} from "../utilities/api";
    import Flash from "../utilities/flash";
    //import {EventBus} from "../utilities/event-bus";
    import {Order} from "../utilities/Amortization";
    import CustomSMSButton from '../components/CustomSMSButton/CustomSMSButton';
    import {getOrderStatus, getOrderStatusClass} from '../components/order/orderStatusCssClass';

    export default {
        components: {CustomSMSButton},

        props: {
            index: null,
            startIndex: {default: 1},
            mode: {default: null, type: String},
            order: {default: null, type: Order}
        },

        created() {
            //EventBus.$on('selectOrderItem', this.toggleSelect);
            this.order.setReminder(this.mode);
        },

        methods: {
            getOrderStatus: activeOrder => getOrderStatus(activeOrder),

            getOrderStatusClass: orderStatus => getOrderStatusClass(orderStatus),

            logReminder() {
                this.$LIPS(true);
                delete this.order.reminder.order;
                delete this.order.reminder.canBeSelected;
                post('/api/reminder', {reminders: [this.order.reminder]})
                    .then(({data}) => data.saved && this.logPromiseCall())
                    .catch(() => this.$displayErrorMessage('Error Logging reminders!'));
            },

            logPromiseCall(message = "Reminder Logged!") {
                if (this.order.promiseCall.date) {
                    post('/api/promise_call', this.order.promiseCall)
                        .then(({data}) => data.saved && this.done(message + " Promise call added!"))
                        .catch(() => this.$displayErrorMessage('Error Logging promise call!'));
                } else this.done(message);
            },

            done(message) {
                this.$scrollToTop();
                Flash.setSuccess(message, 5000);
                this.$emit('done');
            },

            toggleSelect(val = null) {
                if (this.order.reminder.canBeSelected) {
                    this.order.isSelected = (val !== null) ? val : !this.order.isSelected;
                }
            }
        }
    }
</script>
