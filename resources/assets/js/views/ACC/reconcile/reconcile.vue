<template>
  <transition name="fade">
    <div id="reminder">
      <div class="mt-5 mb-3 attendance-head">
        <ul class="nav nav-tabs justify-content-center p-0" role="tablist">
          <li class="col p-0 nav-item mb-0" v-for="(tab, index) in details.tabs" :key="index">
            <a
              aria-selected="true"
              class="nav-link"
              :class="index === 0 && 'active'" 
              data-toggle="tab"
              href="#renewal-panel"
              @click="listToOrder = tab"
              role="tab"
              v-html="tab"
            ></a>
          </li>
        </ul>
      </div>
      <payment-filter :list-to-order="listToOrder" @filter="setFilter"></payment-filter>

      <div class="mt-5 mb-3 attendance-head" v-if="details.headings">
        <div class="row px-4 pt-3 pb-4 text-center">
          <div
            class="col light-heading"
            :key="index"
            v-for="(header, index) in details.headings"
          >{{ header }}</div>
        </div>
      </div>
      <Finance :list="listToOrder" :tab="listToOrder" :filter-by="filterObject" />
    </div>
  </transition>
</template>

<script>
import { mapGetters } from "vuex";
import Finance from "../../../components/Finance";
import Flash from "../../../utilities/flash";
import Typeahead from "../../../components/Typeahead";
import PaymentFilter from "../../../components/PaymentFilter";

export default {
  components: { Finance, Typeahead, PaymentFilter },
  data() {
    return {
      listToOrder: "Showroom Payment",
      title: "Branch",
      id: "",
      filterObject: null
    };
  },
  created() {
    this.$prepareBanks();
    this.$prepareBranches();
    this.$preparePaymentMethods();
  },
  methods: {
    mode(query = null, mode = this.$route.met222a.mode.toLowerCase()) {
      return query ? mode === query : mode;
    },
    setFilter(value) {
      this.filterObject = value;
    }
  },
  computed: {
    ...mapGetters(["auth", "getAuthUserDetails", "getBranches"]),

    details() {
      let list = 1;
      const tabs = ["Showroom Payment", "Reconcile"];
      const headings2 = [
        "index",
        "Branch",
        "Customer ID",
        "Date Of Payment",
        "Time Of Payment",
        "Payment Purpose",
        "Payment Type",
        "Amount Paid",
        "Comment"
      ];
      const headings1 = [
        "index",
        "Reconciler",
        "Date of Reconcilation",
        "Branch",
        "Type",
        "Total Amount Logged",
        "Amount From Showroom",
        "Amount In Hand",
        "Variance",
        "Comment From Showroom",
        "Statement From Bank",
        "Comment"
      ];
      const headings =
        this.listToOrder === "Showroom Payment"
          ? headings2
          : this.listToOrder === "Reconcile"
          ? headings1
          : "";
      return { tabs, headings, list };
    }
  }
};
</script>

<style scoped type="scss">
.attendance-head .light-heading:nth-child(1) {
  max-width: 120px;
}
</style>
