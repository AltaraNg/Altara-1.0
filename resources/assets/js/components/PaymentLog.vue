<template>
  <div style="margin-left: 5rem; margin-right: 5rem;">
    <div class="card">
      <form class="card-body" @submit.prevent="preview">
        <div class="form-group align-self-left text-capitalize">
          <label for="amount" class="form-control-label">Product Name</label>
          <AutoComplete v-on:childToParent="selectedItem" :apiUrl="apiUrls.getProduct" />
        </div>
        <div class="row">
          <div class="col form-group">
            <label for="amount" class="form-control-label">Repayment Cycle</label>
            <select
              class="custom-select w-100"
              v-model="salesLogForm.repayment_cycle_id"
              v-validate="'required'"
              @change="customDate($event)"
            >
              <option disabled selected="selected">Repayment Cycle</option>
              <option :value="type" :key="type.id" v-for="type in repaymentCyclesopt">{{type.name}}</option>
            </select>
          </div>
          <div v-if="customDateToggle" class="col form-group">
            <label for="amount" class="form-control-label">Custom Date</label>
            <input class="form-control w-100" v-model="salesLogForm.custom_date" />
          </div>
          <div class="col form-group">
            <label for="amount" class="form-control-label">Repayment Duration</label>
            <select
              class="custom-select w-100"
              v-model="salesLogForm.repayment_duration_id"
              v-validate="'required'"
            >
              <option disabled selected="selected">Repayment Duration</option>
              <option :value="type" :key="type.id" v-for="type in repaymentDuration">{{type.name}}</option>
            </select>
          </div>
          <div class="col form-group">
            <label for="amount" class="form-control-label">Downpayment Rates</label>
            <select
              class="custom-select w-100"
              v-model="salesLogForm.payment_type_id"
              v-validate="'required'"
            >
              <option disabled selected="selected">Downpayment Rates</option>
              <option :value="type" :key="type.id" v-for="type in downPaymentRates">{{type.name}}</option>
            </select>
          </div>
          <div class="col form-group">
            <label for="amount" class="form-control-label">Business Type</label>
            <select
              class="custom-select w-100"
              v-model="salesLogForm.business_type_id"
              v-validate="'required'"
            >
              <option disabled selected="selected">Business Type</option>
              <option :value="type.id" :key="type.id" v-for="type in businessTypes">{{type.name}}</option>
            </select>
          </div>
          <div class="col form-group">
            <label for="amount" class="form-control-label">Payment Method</label>
            <select
              class="custom-select w-100"
              v-model="salesLogForm.payment_method_id"
              v-validate="'required'"
            >
              <option disabled selected="selected">Payment Method</option>
              <option
                :value="type.id"
                :key="type.id"
                v-for="type in getPaymentMethods"
              >{{type.name}}</option>
            </select>
          </div>
          <!-- <div class="col form-group">
                    <label for="amount" class="form-control-label">Down Payment</label>
                    <input class="w-100 custom-select" name="amount" v-model="salesLogForm.down_payment" v-validate="'required'" type="number" placeholder="Enter Amount"/>
          </div>-->
        </div>
        <br />
        <div class="text-center">
          <button class="btn bg-default" type="submit" v-on:click="getCalc();">View Amortization</button>
        </div>
      </form>
    </div>
    <div class="modal fade repayment" id="amortizationPreview">
      <div class="modal-dialog modal-xl" role="document">
        <div class="modal-content">
          <div class="modal-header py-2">
            <h6 class="modal-title py-1">Repayment Plan/Summary</h6>
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
                    <!-- <td>Customer ID</td> -->
                    <td>Product Name</td>
                    <td>Product Price</td>
                    <td>First Payment</td>
                    <td>Repayment</td>
                    <!-- <th>Branch</th> -->
                  </tr>
                  <tr>
                    <!-- <td class="font-weight-bold">{{this.customerId}}</td> -->
                    <th>{{this.selectedProduct.product_name}}</th>
                    <th>{{$formatCurrency(pPrice)}}</th>
                    <th>{{$formatCurrency(fPayment)}}</th>
                    <th>{{$formatCurrency(rPayment)}}</th>
                    <!-- <td class="font-weight-bold">Ikoyi</td> -->
                  </tr>
                </tbody>
              </table>

              <h5 class="mt-5 mb-0">Amortization Schedule</h5>
              <table class="table table-bordered">
                <tbody class="text-center">
                  <tr class="table-separator">
                    <th>Due Date</th>
                    <td v-for="am in amortization">{{am.expected_payment_date}}</td>
                  </tr>

                  <tr class="table-separator">
                    <th>Repayment Amount</th>
                    <td v-for="am in amortization">{{$formatCurrency(am.expected_amount)}}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="text-center">
            <button class="btn bg-default" @click="logSale()" type="submit">Log Sale</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { get, post } from "../utilities/api";
import { mapGetters } from "vuex";
import AutoComplete from "./AutoComplete.vue";

export default {
  props: { customerId: null },
  components: { AutoComplete },
  data() {
    return {
      error: {},
      product: "",
      salesLogForm: {},
      repaymentDuration: [],
      repaymentCyclesopt: [],
      downPaymentRates: [],
      businessTypes: [],
      amortization: [],
      calculation: [],
      apiUrls: {
        repaymentDuration: `/api/repayment_duration`,
        repaymentCycles: `/api/repayment_cycle`,
        downPaymentRates: `/api/down_payment_rate`,
        businessTypes: `/api/business_type`,
        previewAmortization: `/api/amortization/preview`,
        createOrder: `/api/new_order`,
        getCalculation: `/api/price_calculator`,
        getProduct: `/api/inventory?productName=`,
      },
      inputValue: "",
      selectedProduct: {},
      fPayment: "",
      pPrice: "",
      rPayment: "",
      repaymentCircle: "",
      rDuration: "",
      customDateToggle: false,
    };
  },
  async mounted() {
    await this.getRepaymentDuration();
    await this.getRepaymentCycles();
    await this.getDownPaymentRates();
    await this.getBusinessTypes();
    await this.getCalculation();
  },
  computed: {
    ...mapGetters(["getPaymentMethods"]),
  },
  methods: {
    customDate(event) {
      this.salesLogForm.repayment_cycle_id.name === "custom"
        ? (this.customDateToggle = true)
        : (this.customDateToggle = false);
    },
    async logSale() {
      this.salesLogForm.customer_id = this.customerId;
      const data = {
        customer_id: this.customerId,
        product_id: this.selectedProduct.product_id,
        repayment_duration_id: this.salesLogForm.repayment_duration_id.id,
        repayment_cycle_id: this.salesLogForm.repayment_cycle_id.id,
        business_type_id: this.salesLogForm.business_type_id,
        branch_id: localStorage.getItem("branch_id"),
        down_payment: this.fPayment,
        // "custom_date": 31,
        repayment: this.rPayment,
        product_price: this.pPrice,
        payment_type_id: this.salesLogForm.payment_type_id.id,
        payment_method_id: this.salesLogForm.payment_method_id,
      };
      this.$validator.validateAll().then((result) => {
        if (result) {
          this.$LIPS(true);
          post(this.apiUrls.createOrder, data)
            .then((res) => {
              this.$LIPS(false);
              $(`#amortizationPreview`).modal("toggle");

              this.$swal({
                icon: "success",
                title: "Sale Successfully Logged",
              });
              this.$emit("done");
            })
            .catch(() => {
              this.$LIPS(false);
              Flash.setError("Error submitting form");
            });
        } else this.$networkErr("form");
      });
    },
    async submitForm() {
      //   $(`#amortizationPreview`).modal("toggle");
    },
    async getRepaymentDuration() {
      try {
        const fetchRepaymentDuration = await get(
          this.apiUrls.repaymentDuration
        );
        this.repaymentDuration = fetchRepaymentDuration.data.data.data;
      } catch (err) {
        this.$displayErrorMessage(err);
      }
    },
    getCalc() {
      this.$validator.validateAll().then((result) => {
        if (result) {
          try {
            this.salesLogForm.customer_id = this.customerId;
            const data0 = {
              ...this.salesLogForm,
              ...{
                branch_id: localStorage.getItem("branch_id"),
                status_id: 1,
              },
            };

            const caly = this.calculation;
            const data = caly.filter(
              (x) =>
                x.business_type_id === data0.business_type_id &&
                x.down_payment_rate_id === data0.payment_type_id.id &&
                x.repayment_duration_id === data0.repayment_duration_id.id
            )[0];
            const margin = data["margin"];
            const interest = data["interest"];
            const plan = data0.payment_type_id.percent;
            let mPrice = this.selectedProduct.price;
            mPrice = mPrice * margin + Number(mPrice);
            const dPrice = mPrice * (plan / 100);
            const rPrice = mPrice - dPrice;
            const afInt = rPrice * interest * 12;
            const pInt = afInt + dPrice + rPrice;
            const aTax = 0.05 * pInt + pInt;
            const upFront = aTax * (plan / 100);
            const rePay = aTax - upFront;
            const mRepay = rePay / 12;
            const downP = Math.floor(upFront / 100) * 100;
            const period = data.repayment_duration_id;
            const rPay =
              period == 6
                ? Math.floor(mRepay / 100) * 100 * 2
                : Math.floor(mRepay / 100) * 100 * 3;
            const totalP = rPay * period + downP;
            this.repaymentCircle = data0.repayment_cycle_id.value;
            this.rDuration = data0.repayment_duration_id.value;
            this.fPayment = downP;
            this.rPayment = rPay;
            this.pPrice = totalP;
            $(`#amortizationPreview`).modal("toggle");
          } catch (e) {
            this.$swal({
              icon: "error",
              title: "Plan is not available",
            });
          }
        }
      });
    },
    getRepaymentDate(count) {
      const paymentDate = this.repaymentCircle * count;
      const date = new Date();
      const newDate = new Date(
        date.getFullYear(),
        date.getMonth(),
        date.getDate() + paymentDate
      ).toLocaleDateString("en-US");
      return newDate;
    },
    preview() {
      const plan = [];
      const repaymentCount = this.rDuration / this.repaymentCircle;
      for (let i = 1; i <= repaymentCount; i++) {
        plan.push({
          expected_payment_date: this.getRepaymentDate(i),
          expected_amount: this.rPayment,
        });
      }
      this.amortization = plan;
      this.submitForm();
    },
    async getCalculation() {
      try {
        const fetchGetCalclations = await get(this.apiUrls.getCalculation);

        const unwrapped = fetchGetCalclations.data.data;
        this.calculation = unwrapped;
        const unwrapped0 = JSON.stringify(unwrapped);
      } catch (err) {
        this.$displayErrorMessage(err);
      }
    },
    selectedItem(value) {
      this.selectedProduct = value;
    },
    async getProduct() {
      try {
        const fetchProduct = await get(this.apiUrls.getProduct + this.product);
      } catch (err) {
        this.$displayErrorMessage(err);
      }
    },
    async getRepaymentCycles() {
      try {
        const fetchRepaymentCycles = await get(this.apiUrls.repaymentCycles);
        this.repaymentCyclesopt = fetchRepaymentCycles.data.data.data;
      } catch (err) {
        this.$displayErrorMessage(err);
      }
    },
    async getDownPaymentRates() {
      try {
        const fetchDownPaymentRates = await get(this.apiUrls.downPaymentRates);
        this.downPaymentRates = fetchDownPaymentRates.data.data.data;
      } catch (err) {
        this.$displayErrorMessage(err);
      }
    },
    async getBusinessTypes() {
      try {
        const fetchBusinessTypes = await get(this.apiUrls.businessTypes);
        this.businessTypes = fetchBusinessTypes.data.data.data;
      } catch (err) {
        this.$displayErrorMessage(err);
      }
    },
  },
};
</script>

<style scoped>
.product {
  background: #f3f3f3;
  border: 1px solid #a4a5ab;
  box-sizing: border-box;
  border-radius: 5px;
  width: 70%;
  padding: 5px;
  margin: 50px !important;
}

.dropdown {
  position: relative;
  width: 100%;
  /* max-width: 400px; */
  margin: 0 auto;
}
.dropdown-input {
  width: 100%;
  padding: 10px 16px;
  border: 1px solid transparent;
  background: #edf2f7;
  line-height: 1.5em;
  outline: none;
  border-radius: 8px;
}
.dropdown-input:focus {
  background: #fff;
  border-color: #e2e8f0;
}
.dropdown-input::placeholder {
  opacity: 0.7;
}
</style>