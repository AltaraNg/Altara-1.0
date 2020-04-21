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
            <span class="user mx-auto sent-reminder" v-else-if=" mode != 'renewal'" ><i class="fas fa-check"></i></span>
            <span class="user mx-auto" v-if=" mode != 'renewal'" :class="getOrderStatusClass(getOrderStatus(order))">
                {{startIndex + index}}
            </span>

            <span v-if="$route.meta.customSMS">
                <CustomSMSButton :order="order" :key="order.order.id"/>
            </span>
            <div v-if="mode === 'renewal'">
                <span v-if="tab === 'Successful'" class="user mx-auto" :class="tab">
                    {{OId+index}}
                </span>

                <span class="user mx-auto" :class="tab" @click="objCollector" v-else>
                    {{OId+index}}
                </span>
            </div>
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

        <div class="col-12 col-xs-2 col-md col-lg d-flex align-items-center justify-content-center" v-if="mode != 'renewal'"
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
                    <input type="radio" 
                            :value="false" 
                            :id="`absent${index}`" 
                            :name="`isPresent${index}`"
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

        <!-- <div class="col-12 col-xs-2 col-md col-lg d-flex align-items-center" v-if="mode === 'renewal' && tab === 'Successful'">
            {{order.order.renewal.feedback}}
        </div>  -->

         <div class="col-12 col-xs-2 col-md col-lg d-flex align-items-center justify-content-center" v-if="mode === 'renewal' && tab === 'Successful'"
             @click="$emit('display', order, 'reminder_history')" data-hoverable="true">
          {{order.order.reminders.length === 1 ? '1 History' : order.order.reminders.length > 1 ? order.order.reminders.length+' Histories': 'No History'}}
        </div>

        <div class="col-12 col-xs-2 col-md col-lg d-flex align-items-center justify-content-center " v-if="mode === 'renewal' && tab != 'Successful'">
            <select v-model="status" class="form-control option2">
                <option disabled value="">Please select one</option>
                <option :key="option.id" v-for="option in options" v-bind:value="option.id">
                    {{ option.status }}
                </option>
            </select>
        </div>

        <div class="col-12 col-xs-2 col-md col-lg d-flex align-items-center" v-if="mode === 'renewal' && tab != 'Successful'">
            <input v-model="dateTime" :disabled="sChecker(status)" class="form-control" type="datetime-local">
        </div>       
        <div class="col-12 col-xs-2 col-md col-lg d-flex align-items-center" v-if="mode === 'renewal' && tab != 'Successful'">
            <textarea v-model="feedback" class="form-control" rows="1">
            </textarea>
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
            order: {default: {}, type: Order},
            tab:{default: null},
            options:{default: null},
            OId:{default: null}
        },

        created() {
            //EventBus.$on('selectOrderItem', this.toggleSelect);
            this.order.setReminder(this.mode);
        },

        data() {
            return {
                status: 0,
                dateTime:"",
                feedback:"",
            };
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
            },

            objCollector() {
                if(!this.status || !this.sChecker(this.status) && !this.dateTime || !this.feedback){
                    return this.errHandler("Please enter all required values.");
                }
                const today = new Date().toLocaleDateString("en-US");
                const nWeek = new Date().setDate(new Date().getDate()+ 7);
                const Cdate = this.dateTime.split('T')[0];
                if (Date.parse(Cdate)-Date.parse(today) < 1 || Date.parse(Cdate) > nWeek){
                    return this.errHandler("Pease enter a valid date.") 
                };
                const renew = this.order.order.renewal ? this.order.order.renewal.id : '';
                const data0 = {
                    order_id: this.order.order.id,
                    renewalId:renew,
                    feedback: this.feedback,
                    status_id: this.status
                };
                
                const data1 = {
                    order_id: this.order.order.id,
                    renewalId:renew,
                    feedback: this.feedback,
                    status_id: this.status,
                    callback_date: this.dateTime.split('T')[0],
                    callback_time: this.dateTime.split('T')[1],
                };
                const feedback = {
                    customer_id:this.order.reminder.customer_id,
                    order_id:this.order.reminder.order_id,
                    repayment_level:this.order.reminder.repayment_level,
                    feedback:this.feedback,
                    dva_id:this.order.reminder.dva_id,
                    type:this.order.reminder.type,
                    is_visited:this.order.reminder.is_visited,
                    sms_id:this.order.reminder.sms_id,
                    date:today
                };
                const data = this.sChecker(this.status) ? data0 : data1;
                this.$emit('popIt',{data,feedback});
            },

            sChecker(param){
              return !param ? true : this.options.find(x => x.id === param).status != "callback";  
            },

            errHandler(param){
                return Flash.setError(param);
            }

        },

    }
</script>
<style scoped>
.Current{
  background: #EDEEF2;
}
.Successful{
    background-color: rgba(0,163,104,.09);
    color: #00a368;
}
.Callback{
background-color: rgba(163,163,104,.09);
  color: #FFA500;
}
.Unreachable{
   background-color: rgba(163,0,104,.09);
  color: #E30000;
}
.option2{
    background-color: #fff;
    color:#575958;
}

</style>