<template>
    <div class="mb-3 row attendance-item">

        <div class="col-12 col-xs-2 col-md col-lg d-flex align-items-center" style="max-width: 120px">
            <span v-if="mode === 'normal-list'"></span>
            <span v-else-if="reminder.canBeSelected && ['collection','recovery','call','external-recovery'].includes(mode)"
                  class="user mx-auto waiting-reminder"
                  @click="logReminder">
                <i class="fas fa-hourglass-start"></i>
            </span>
            <div v-else-if="reminder.canBeSelected && mode === 'sms'"
                 class="d-flex align-items-center">
                <input class="form-check-input my-0 mx-4 float-left position-relative " type="checkbox"
                       v-model="selected" @click="toggleSelect(!selected)">
            </div>
            <span class="user mx-auto sent-reminder" v-else><i class="fas fa-check"></i></span>
            <span class="user mx-auto">{{startIndex + index}}</span>
        </div>

        <div class="col-12 col-xs-2 col-md col-lg user-name d-flex align-items-center justify-content-center">
            {{$vnode.key}}
        </div>

        <div class="col-12 col-xs-2 col-md col-lg d-flex align-items-center justify-content-center"
             @click="$emit('display', order, 'purchase_order')" data-hoverable="true">
            {{order.order_date}}
        </div>

        <div class="col-12 col-xs-3 col-md col-lg d-flex align-items-center justify-content-center"
             @click="$emit('display',order,'customer_info')" data-hoverable="true">
            ID: {{order.customer.id}} - {{order.customer.employment_status | capitalize}}
        </div>

        <div class="col-12 col-xs-2 col-md col-lg d-flex align-items-center justify-content-center"
             @click="$emit('display',order, 'repayment')" data-hoverable="true">
            {{getFinancialStatus}}
        </div>

        <div class="col-12 col-xs-2 col-md col-lg d-flex align-items-center justify-content-center"
             @click="$emit('display',order,'reminder_history')" data-hoverable="true">
            {{order.reminders.length}} reminder(s) sent
        </div>

        <div class="col-12 col-xs-2 col-md col-lg d-flex align-items-center attendance-create"
             v-if="['collection','recovery','external-recovery'].includes(mode)">
            <span class="present">
                <span class="radio w-50 pr-3 mb-0 float-left">
                    <input type="radio" value="yes" :id="`present${index}`" :name="`isPresent${index}`">
                    <label :for="`present${index}`">yes</label>
                </span>
                <span class="radio w-50 pl-3 mb-0 float-left">
                    <input type="radio" value="no" :id="`absent${index}`" :name="`isPresent${index}`">
                    <label :for="`absent${index}`">no</label>
                </span>
            </span>
        </div>

        <div class="col-12 col-xs-2 col-md col-lg d-flex align-items-center"
             v-if="['collection','recovery','call','external-recovery'].includes(mode)">
            <textarea class="form-control" rows="1" v-model="reminder.feedback" :disabled="!reminder.canBeSelected">
            </textarea>
        </div>

        <div class="col-12 col-xs-2 col-md col-lg d-flex align-items-center" v-if="mode === 'call'">
            <input class="form-control" type="date" v-model="promiseCall.date" :disabled="!reminder.canBeSelected">
        </div>

    </div>
</template>

<script>
    import {post} from "../utilities/api";
    import Flash from "../utilities/flash";
    import {EventBus} from "../utilities/event-bus";

    export default {
        props: {
            mode: null,
            index: null,
            startIndex: {default: 1},
            dva_id: null,
            paySummary: null,
            repaymentLevel: null,
            order: {default: {}},
            isRepaymentValid: null,
        },

        data() {
            return {
                selected: false
            }
        },

        created() {
            EventBus.$on('selectOrderItem', this.toggleSelect);
        },

        methods: {
            logReminder() {
                this.$LIPS(true);
                delete this.reminder.order;
                delete this.reminder.canBeSelected;
                post('/api/reminder', {reminders: [this.reminder]}).then(({data}) =>
                    data.saved ? this.logPromiseCall() : this.$displayErrorMessage('Error Logging reminders!')
                );
            },

            logPromiseCall(message = "Reminder Logged!") {
                if (this.promiseCall.date) {
                    post('/api/promise_call', this.promiseCall).then(({data}) =>
                        data.saved ? this.done(message + " Promise call added!")
                            : this.$displayErrorMessage('Error Logging promise call!')
                    );
                } else this.done(message);
            },

            done(message) {
                this.$scrollToTop();
                Flash.setSuccess(message, 5000);
                this.$emit('done');
            },

            isReminderSent() {
                var value = true, date;
                if (this.order.reminders.length > 0) {
                    let today = this.$getDate();
                    this.order.reminders.forEach(reminder => {
                        //refactor below by using regx characters to split
                        let reminderDateTimeArr = reminder.date.split(' ');//(2019-03-24 02:00:00) -> ['2019-03-24','02:00:00']
                        let dateArr = reminderDateTimeArr[0].split('-');//'2019-03-24' -> ['2019','03','24']
                        let timeArr = reminderDateTimeArr[1].split(':');//'02:00:00' -> ['02','00','00']
                        let arr = [...dateArr, ...timeArr] // ['2019','03','24','02','00','00']
                            .map(item => parseInt(item, 10)); //[2019,3,24,2,0,0]
                        date = this.$getDate(new Date(Date.UTC(...arr)), false);
                        date === today && (value = false);
                    });
                }
                return value;
            },

            toggleSelect(value) {
                if (this.reminder.canBeSelected) {
                    this.selected = value;
                    this.$emit('updateReminderList', this.reminder, value)
                }
            },
        },
        computed: {
            reminder() {
                let reminder = {
                    'customer_id': this.order.customer.id,
                    'order_id': this.order.id,
                    'repayment_level': this.repaymentLevel,
                    'dva_id': this.dva_id,
                    'type': this.mode,
                    'canBeSelected': this.isReminderSent(),
                };
                if (this.mode === 'sms') {
                    reminder.contacts = this.order.customer.telephone;
                    reminder.sms_id = null;
                }
                return reminder
            },

            promiseCall() {
                return {
                    order_id: this.order.id,
                    user_id: this.dva_id,
                    customer_id: this.order.customer.id,
                    date: null,
                }
            },

            getFinancialStatus() {
                return !this.isRepaymentValid ? 'no detail!' :
                    `Paid: ${this.paySummary.amountPaid} | Debt: ${this.paySummary.outstandingDebt}`;
            },
        }
    }
</script>
