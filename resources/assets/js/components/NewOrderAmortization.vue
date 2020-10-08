<template>
<div>

            <div class="modal-header py-2">
              <h6
                class="modal-title py-1"
              >Repayment Plan/Summary - {{customer.employment_status | capitalize}}</h6>
              <a aria-label="Close" class="close py-1" data-dismiss="modal">
                <span aria-hidden="true" class="modal-close text-danger">
                  <i class="fas fa-times"></i>
                </span>
              </a>
            </div>
            <div class="modal-body">
              <div class="table-responsive">
                <h5 class="mt-3 mb-0">Order Information</h5>
                <table class="table table-bordered">
                  <tbody>
                    <tr class="table-separator">
                      <td>Name</td>
                      <td>Order Id</td>
                      <td>Product</td>
                      <th>Branch</th>
                      <th>Status</th>
                    </tr>
                    <tr>
                      <td class="font-weight-bold">{{`${customer.first_name} ${customer.last_name}`}}</td>
                      <th>{{order.order_number}}</th>
                      <th>{{order.product.name}}</th>
                      <td class="font-weight-bold">{{order.branch}}</td>
                      <!-- <td
                        :class="getOrderStatusClass(getOrderStatus(order))"
                        class="font-weight-bold"
                      >{{getOrderStatus(order)}}</td> -->
                    </tr>
                  </tbody>
                </table>

                <h5 class="mt-5 mb-0">Amortization Schedule</h5>
                <div class="amor-table">
                <table class="table table-bordered ">
                  <tbody class="text-center">
                    <tr>
                      <th>Repayment</th>
                      <td v-for="(armor, index) in order.amortization" v-html="index+1"></td>
                    </tr>
                    <tr class="table-separator" >
                      <th>Due Date</th>
                      <td v-for="armo in order.amortization">{{armo.expected_payment_date}}</td>
                    </tr>
                    <tr>
                      <th>Actual Pay Day</th>
                      <td v-for="armo in order.amortization">{{armo.actual_payment_date}}</td>
                    </tr>
                    <tr class="table-separator">
                      <th>Status</th>
                      <td  v-for="armo in order.amortization">
                        <span><i class="fa fa-check green" v-if="armo.actual_payment_date"></i> </span>
                      </td>
                    </tr>
                    <tr class="table-separator">
                      <th>Repayment Amount</th>
                      <td
                        v-for="armo in order.amortization"
                      >{{$formatCurrency(armo.expected_amount)}}</td>
                    </tr>
                    <tr>
                      <th>Actual Amount Paid</th>
                      <td
                        v-for="armo in order.amortization"
                      >{{$formatCurrency(armo.actual_amount)}}</td>
                    </tr>


                  </tbody>
                </table>
                </div>

                <h5 class="mt-5 mb-0">Payment Summary</h5>
                <table class="table table-bordered">
                  <tbody class="text-center">
                    <tr class="table-separator">
                      <td class="text-left">Discount Detail (%)</td>
                      <th>{{order.discount | capitalize}}</th>
                      <td>Total Before Discount</td>
                      <th>{{$formatCurrency($roundDownAmt(order.product_price))}}</th>
                      <td>Total Paid (+discount)</td>
                      <th>{{order.amountPaid}}</th>
                    </tr>
                    <tr>
                      <td class="text-left">Discount Amount</td>
                      <th>{{order.discountAmount || 'null'}}</th>
                      <td>Total After Discount</td>
                      <th>{{order.discountedTotal || 'null'}}</th>
                      <td>Total Debt</td>
                      <th>{{order.outstandingDebt || 'null'}}</th>
                    </tr>
                    <tr>
                      <td class="text-left">Down Payment</td>
                      <th>{{$formatCurrency($roundDownAmt(order.down_payment))}}</th>
                      <td>Total Plus Default Fee</td>
                      <th>{{$formatCurrency($roundDownAmt(order.product_price))}}</th>
                      <td>Default Fee</td>
                      <th>{{order.defaultFee || 'null'}}</th>
                    </tr>
                  </tbody>
                </table>

                <div v-if="canEditPayment && !isReadOnly">
                  <h5 class="mt-5 mb-0">{{paymentFormType | capitalize}} a new payment</h5>
                  <table class="table table-bordered">
                    <tbody class="text-center">
                      <tr class="table-separator">
                        <td class="text-left">S/No.</td>
                        <th>Repayment</th>
                        <th>Amount</th>
                        <th>Payment Method</th>
                        <th>Bank</th>
                        <th>Date</th>
                        <th>Collected By</th>
                        <th>Action</th>
                      </tr>
                      <tr v-for="(payment,index) in paymentForm.payments">
                        <th>{{index+1}}</th>
                        <th>
                          <div class="form-group mb-0" v-if="paymentFormType === 'add'">
                            <input
                              class="form-control"
                              disabled
                              name="date"
                              type="text"
                              v-model="paymentForm.payments[index].column"
                            />
                          </div>
                          <select
                            class="custom-select w-100"
                            v-else
                            v-model="paymentForm.payments[index]._col"
                          >
                            <option
                              :value="i"
                              v-for="i in order.repaymentLevel"
                            >{{$getColumn(i) }} Repayment</option>
                          </select>
                        </th>
                        <th>
                          <div class="form-group mb-0">
                            <input
                              class="form-control"
                              name="date"
                              type="text"
                              v-model="paymentForm.payments[index]._pay"
                            />
                          </div>
                        </th>
                        <th>
                          <select
                            :disabled="paymentFormType === 'edit'"
                            class="custom-select w-100"
                            v-model="paymentForm.payments[index]._payment_method"
                          >
                            <option
                              :value="id"
                              v-for="{name, id} in getPaymentMethods"
                            >{{name | capitalize}}</option>
                          </select>
                        </th>
                        <th>
                          <select
                            :disabled="paymentFormType === 'edit'"
                            class="custom-select w-100"
                            v-model="paymentForm.payments[index]._payment_bank"
                          >
                            <option :value="id" v-for="{name, id} in getBanks">{{name}}</option>
                          </select>
                        </th>
                        <th>
                          <div class="form-group mb-0">
                            <input
                              :disabled="paymentFormType === 'edit'"
                              class="form-control"
                              name="date"
                              type="date"
                              v-model="paymentForm.payments[index]._date"
                            />
                          </div>
                        </th>
                        <th>
                          <div class="form-group mb-0">
                            <input
                              :value="user.name"
                              class="form-control"
                              data-vv-as="date"
                              disabled
                              name="date"
                              type="text"
                            />
                          </div>
                        </th>
                        <th>
                          <button
                            @click="deletePayment(index)"
                            class="ml-2 btn status status-sm my-sm-2 not-approved"
                          >
                            <i class="fas fa-times"></i>
                          </button>
                        </th>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div
              :class="{'d-flex justify-content-end' : !canEditPayment || isReadOnly}"
              class="modal-footer"
            >
              <button
                @click="addPaymentForm('add')"
                class="btn status my-sm-2"
                v-if="canAddPayment && !isReadOnly"
              >Add Payment</button>
              <button
                @click="addPaymentForm('edit')"
                class="btn status my-sm-2"
                v-if="canEditPayment && !isReadOnly"
              >Edit Payment</button>
              <button
                @click="preparePayments()"
                class="btn status my-sm-2 approved ml-4"
                v-if="canEditPayment && !isReadOnly"
              >Click here to Submit Payment(s)!</button>
              <a
                class="text-link mt-3"
                data-dismiss="modal"
                href="javascript:"
                style="text-align: right"
              >close dialogue</a>
            </div>
</div>
</template>
<script>
import { mapGetters } from "vuex";
import Auth from "../utilities/auth";
export default {
    name: 'NewOrderAmortization',
    props: {
        order: {
            type: Object
        },
        customer: {
            type: Object
        },
        paymentForm: {
            type: Object
        },
        paymentFormType: {
            type: String,
            default: 'add'
        }
    },
    data(){
        return {
            canEditPayment: true,
            isReadOnly: false,

            canAddPayment:true,
             user: {
        name: Auth.state.user_name,
        id: Auth.state.user_id,
      },
        }
    },
    methods: {
        addPaymentForm(data){

            this.$emit('addPayment', data);
        },
        deletePayment(index){
            this.$emit('deletePayment', index);
        },
        preparePayments(){
            this.$emit('preparePayments');
        }
    },
    computed: {
        ...mapGetters([
      "getBanks",
      "getPaymentMethods",
      "auth",
      "getAuthUserDetails",
    ]),

    }
}
</script>
<style scoped>
.amor-table{
    width: 1092px;
    overflow: scroll;
}
.green{
    color: green;
}

</style>

