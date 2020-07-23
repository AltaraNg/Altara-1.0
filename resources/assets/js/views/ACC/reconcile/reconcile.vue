<template>
  <transition name="fade">
    <div id="reminder">
      <div class="mt-5 mb-3 attendance-head">
        <div class="mt-5 attendance-head">
                <div class="mb-5 row align-items-center">
                    <div class="col-12 ">
                        <div class="row justify-content-end">
                      <a @click="toggleGuide" class="text-link mt-3"
                               href="javascript:">
                                View icon guide</a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="attendance-body" id="table-guide1">
                <div class="guidePad row bg-white shadow-sm card-radius">
                   <div class="col-6 text-center green">
                          <i class="fas fa-info-circle"></i>
                          <br/>
                          <b>Comment is Available</b>
                    </div>
                   <div class="col-6 text-center red">
                          <i class="fas fa-info-circle"></i>
                          <br/>
                          <b>Comment is not Available</b>
                    </div>
                </div>
          </div>
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
    },
    toggleGuide() {
                $('#table-guide1').slideToggle();
            },

  },
  computed: {
    ...mapGetters(["auth", "getAuthUserDetails", "getBranches"]),

    details() {
      let list = 1;
      const tabs = ["Showroom Payment", "Reconcile"];
      const headings2 = [
        "index",
        "Customer ID",
        "Payment Purpose",
        "Payment Type",
        "Amount Paid",
        "Comment"
      ];
      const headings1 = [
        "index",
        "Type",
        "Logged",
        "Showroom",
        "Banked",
        "Variance",
        "Status",
        "Statement",
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
  },
          mounted() {
            $(document).on("hidden.bs.modal", '.modal', () => this.currAttendance = {});
            this.toggleGuide();
        },
};
</script>

<style scoped type="scss">
.attendance-head .light-heading:nth-child(1) {
  max-width: 120px;
}
.green {
  color: #00a368;
}
.red {
  color: #E30000;
}

.guidePad{
  padding: 15px;
  margin: 15px;
}
</style>
