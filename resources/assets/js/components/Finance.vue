<template>
  <div>
    <div class="tab-content mt-1 attendance-body">
      <div v-if="tab === 'Showroom Payment' && paymentList.length !== 0">
        <div class="mb-3 row attendance-item" :key="index" v-for="(payment, index) in renderedList">
          <div class="col d-flex align-items-center" style="max-width: 120px">
            <span class="user mx-auto" :class="!payment.comment ? 'Current' : 'Successful'">
              {{index + OId}}
            </span>
          </div>
          <div
            class="col d-flex align-items-center justify-content-center"
          >{{ !payment.customer ? "null" : payment.customer.id }}</div>
          <div class="col d-flex align-items-center justify-content-center">{{ payment.type }}</div>
          <div class="col d-flex align-items-center justify-content-center">{{ payment.method }}</div>
          <div class="col d-flex align-items-center justify-content-center">{{ payment.amount | currency('₦') }}</div>
          <div
            class="col d-flex align-items-center justify-content-center"
            @click="updateModal(payment)"
            data-hoverable="true"
          >
            <b class="overflow red text-center" v-if="!payment.comment"><i class="fas fa-info-circle"></i></b>
            <b class="overflow green text-center" v-else> <i class="fas fa-info-circle"></i></b>
          </div>
        </div>
      </div>
      <div v-if="tab === 'Reconcile'">
        <div class="mb-3 row attendance-item" :key="index" v-for="(payment, index) in renderedList">
          <div class="col d-flex align-items-center" style="max-width: 120px">
            <span class="user mx-auto" @click="updateReconciledPayment(payment)">
              {{index + OId}}
            </span>
          </div>
          <div
            class="col d-flex align-items-center justify-content-center"
          >{{ payment.payment_method }}</div>
          <div
            class="col d-flex align-items-center justify-content-center"
          >{{ payment.total| currency('₦')}}</div>
          <div class="col d-flex align-items-center justify-content-center">{{ payment.deposited | currency('₦') }}</div>
          <div
            class="col d-flex align-items-center justify-content-center"
          >{{ payment.cash_at_hand | currency('₦') }}</div>
          <div
            class="col d-flex align-items-center justify-content-center"
          >{{ varianceCalc(payment.cash_at_hand, payment.deposited) | currency('₦') }}</div>
          <div
            class="col d-flex align-items-center justify-content-center"
            @click="updateModal(payment)"
            data-hoverable="true"
          >
            <b class="overflow red text-center" v-if="!payment.comment"><i class="fas fa-info-circle"></i></b>
            <b class="overflow green text-center" v-else><i class="fas fa-info-circle"></i></b>
          </div>
          <div class="col d-flex align-items-center justify-content-center">
            <span v-if="payment.finance">{{payment.finance.bank_statement | currency('₦')}}</span>
            <input v-else v-model="payment.bankStatement" type="number" class="form-control" rows="1" />
          </div>
          <div class="col d-flex align-items-center justify-content-center">
            <b v-if="payment.finance"
              @click="updateModal(payment.finance)"
              class="overflow green text-center">
             <i class="fas fa-info-circle"></i>
            </b>
            <input v-else v-model="payment.accountantComment" type="text" class="form-control" rows="1" />
          </div>
        </div>
      </div>
      <div class="modal fade" id="updatePayment">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header py-2">
                        <h6 class="modal-title py-1">Comment</h6>
                        <a aria-label="Close" class="close py-1" data-dismiss="modal">
                            <span aria-hidden="true" class="modal-close text-danger"><i class="fas fa-times"></i></span>
                        </a>
                    </div>
                    <div class="modal-body">
                        <div class="table-responsive">
                            <table class="table table-bordered table-striped">
                                <tbody>
                                <tr>
                                    <th>Branch Name</th>
                                    <td>{{ paymentItem.branch || "Not Available" }}</td>
                                </tr>
                                <tr v-if="paymentItem.customer">
                                    <th>Customer ID</th>
                                    <td>{{ paymentItem.customer.id || "Not Available" }}</td>
                                </tr>
                                <tr>
                                    <th>Comment</th>
                                    <td> {{  !paymentItem.comment
                                      ? "Not Available"
                                      : paymentItem.comment.comment
                                      }}</td>
                                </tr>
                                <tr>
                                    <th>Reconciler</th>
                                    <td>{{ !paymentItem.comment ? "Not Available" : paymentItem.comment.user  }}</td>
                                </tr>
                                <tr>
                                    <th>Date</th>
                                    <td>{{paymentItem.date ? paymentItem.date.split(" ")[0] : "Not Available" }}</td>
                                </tr>
                                <tr>
                                    <th>Time</th>
                                    <td>{{paymentItem.date ? paymentItem.date.split(" ")[1] : "Not Available" }}</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <a class="text-link mt-3 w-100" data-dismiss="modal" href="javascript:"
                           style="text-align: right">close dialogue</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <nav
      v-if="tab !== 'Log Payment' && !$_.isEmpty(responseData)"
      class="col d-flex justify-content-end align-items-center pr-0"
    >
        <div v-if="pageParams">
            <base-pagination

                :page-param="pageParams"
                :page="page"
                @fetchData="fetchData()"
                @next="next()"
                @prev="prev()"
            >
            </base-pagination>

        </div>
    </nav>
  </div>
</template>

<script>
import Vue from "vue";
import { mapGetters } from "vuex";
import { get, patch, put } from "../utilities/api";

import Flash from "../utilities/flash";
import BasePagination from "../components/Pagination/BasePagination";
import Vue2Filters from 'vue2-filters'

Vue.use(Vue2Filters)

export default {
  components: { BasePagination },
  props: {
    list: { default: null },
    tab: { default: null },
    filterBy: { default: null }
  },

  watch: {
    list: function(list) {
      this.fetchList(list);
    },
    filterBy: function(filterBy) {
      this.defaultList =
        this.tab === "Showroom Payment"
          ? this.paymentList
          : this.paymentReconciliationList;
      let newList = [];
      let n = Object.keys(filterBy)[0];
      if (n === "branch") {
        if (filterBy.branch === "all") {
          newList = this.defaultList;
        } else {
          newList = this.defaultList.filter(function(item) {
            return item.branch === filterBy.branch;
          });
        }
      } else if (n === "type") {
        if (filterBy.type === "all") {
          newList = this.defaultList;
        } else {
          newList = this.defaultList.filter(function(item) {
            return item.payment_method === filterBy.type;
          });
        }
      } else {
        newList = this.defaultList.filter(function(item) {
          return item.date.split(" ")[0] === filterBy.date;
        });
      }
      Vue.set(this.$data, "renderedList", newList);
    }
  },

  data() {
    return {
      filter: false,
      OId: 0,
      defaultList: [],
      page: 1,
        pageParams: null,
      responseData: {},
      paymentItem: {},
      showModalContent: false,
      paymentList: [],
      paymentReconciliationList: [],
      totalCashAtHand: 0,
      variance: "",
      amountInBank: "",
      branchId: "",
      comment: null,
      statement: null,
      renderedList: []
    };
  },

  computed: {
    ...mapGetters(["auth", "getAuthUserDetails", "getBranches"])
  },

  methods: {
    onUpKey() {
      this.variance = this.amountInBank - this.totalCashAtHand;
      this.amountInBank.length === 0 ? (this.variance = 0) : this.variance;
    },

    fetchList(list) {
      this.$LIPS(true);
      list === "Showroom Payment"
        ? this.getPaymentList()
        : list === "Reconcile"
        ? this.getPaymentReconciliationList()
        : this.$LIPS(false);
    },

    async getPaymentList() {
      try {
        const fetchPaymentList = await get(`/api/payment?page=${this.page}`);
        this.paymentList = fetchPaymentList.data.data.data;
        this.responseData = fetchPaymentList.data.data;
        this.pageParams = this.responseData;
        this.OId = this.responseData.from;
        this.$LIPS(false);
        this.renderedList = this.paymentList;
      } catch (err) {
        this.$displayErrorMessage(err);
      }
    },

    async getPaymentReconciliationList() {
      this.branchId = localStorage.getItem("branch_id");
      try {
        const fetchPaymentReconciliation = await get(`/api/payment-reconcile`);
        this.paymentReconciliationList =
          fetchPaymentReconciliation.data.data.data;
        this.responseData = fetchPaymentReconciliation.data.data;
        this.renderedList = this.paymentReconciliationList;
        this.OId = this.responseData.from;
        // this.totalCashAtHand = this.paymentReconciliationList
        //     .map(item => item.cash_at_hand)
        //     .reduce((a, b) => a + b);
        this.$LIPS(false);
      } catch (err) {
        this.$displayErrorMessage(err);
      }
    },

    async updateReconciledPayment(data) {
      if (!data.bankStatement || !data.accountantComment) {
        console.log('opopopo',data)
        return this.errHandler("Please enter all required values.");
      }
      let payload = {
        bank_statement: data.bankStatement,
        comment: data.accountantComment
      };

      this.$LIPS(true);
      try {
        const reconcilePayment = await patch(
          `/api/payment-reconcile/${data.id}/finance`,
          payload
        );
        if (reconcilePayment) {
          this.amountInBank = "";
          this.comment = "";
          this.variance = "";
        }
        Flash.setSuccess(reconcilePayment.data.status);
        this.getPaymentReconciliationList()
        this.$LIPS(false);
      } catch (err) {
        this.$LIPS(false);
        this.$displayErrorMessage(err);
      }
    },
    varianceCalc(a, b) {
      if (!isNaN(a - b)) return a - b;
    },

    errHandler(param) {
      return Flash.setError(param);
    },

    updateModal(data) {
      this.showModalContent = true;
      this.paymentItem = data;
      return $(`#updatePayment`).modal("toggle");
    },

    next(firstPage = null) {
      if (this.responseData.next_page_url) {
        this.page = firstPage ? firstPage : parseInt(this.page) + 1;
        this.fetchList(this.list);
      }
    },

    prev(lastPage = null) {
      if (this.responseData.prev_page_url) {
        this.page = lastPage ? lastPage : parseInt(this.page) - 1;
        this.fetchList(this.list);
      }
    }
  },

  mounted() {
    this.fetchList(this.list);
  },

  created() {
    this.$prepareBanks();
    this.$prepareBranches();
    this.$preparePaymentMethods();
  }
};
</script>

<style scoped type="scss">
.table-separator {
  border-top: 2px solid #dee1e4;
}
.overflow {
  width: 80px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.green {
  color: #00a368;
}
.red {
  color: #E30000;
}
.blue {
  background-color: #2975a5;
}
.Current{
  background: #EDEEF2;
}
.Successful{
    background-color: rgba(0,163,104,.09);
    color: #00a368;
}
</style>
