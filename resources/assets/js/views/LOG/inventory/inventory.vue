<template>
  <transition name="fade">
    <div id="reminder" class="attendance">
      <custom-header :title="'Inventory'" />

      <div class="mt-2 mt-lg-3 row attendance-head">
        <div class="col-md-8">
          <InventorySearch v-on:childToParent="searchEvent" :searchColumns="searchColumns" />
        </div>

        <div class="col-md-4">
          <router-link :to="{name: 'inventoryCreate'}">
            <button class="btn btn-primary bg-default myBtn float-right my-2">New Inventory</button>
          </router-link>
        </div>
      </div>

      <div class="mt-2 mt-lg-3 row attendance-head attendance-view">
        <div class="col-4 col-lg" v-for="{name:filter,model} in filters">
          <div>
            <div class="light-heading mb-1">
              <span class="d-none d-sm-inline">Select</span>
              {{filter | capitalize}}
            </div>

            <div class="w-50" v-if="filter === 'state'">
              <select class="custom-select" v-model="$data[model]" @keyup.enter="fetchData()">
                <option disabled selected value>{{filter | capitalize}}</option>
                <option :value="id" v-for="{name,id} in getStates">{{name | capitalize}}</option>
              </select>
            </div>
          </div>
        </div>

        <!--                <div class="col-6 col-sm p-0 flex-row-bottom">-->
        <!--                    <button @click="fetchData()" class="btn btn-primary bg-default mt-0 myBtn">Apply Filter</button>-->
        <!--                </div>-->
      </div>

      <div class="mt-5 mb-3 attendance-head">
        <div class="w-100 my-5 mx-0 hr"></div>
        <div class="row px-4 pt-3 pb-4 text-center">
          <div class="col light-heading" style="max-width: 120px">S/N</div>
          <div class="col light-heading" v-for="header in headings">{{header}}</div>
        </div>
      </div>
      <div class="tab-content mt-1 attendance-body">
        <div
          class="mb-3 row attendance-item"
          :key="index"
          v-for="(inventory,index) in inventories"
          v-if="inventories"
        >
          <div class="col d-flex align-items-center" style="max-width: 120px">
            <span class="user mx-auto">{{index+OId}}</span>
          </div>
          <div
            class="col d-flex align-items-center justify-content-center"
            @click="viewInventory(inventory)"
          >{{inventory.product_name}}</div>
          <div class="col d-flex align-items-center justify-content-center">{{inventory.sku}}</div>
          <div
            class="col d-flex align-items-center justify-content-center"
          >{{inventory.price | currency('₦')}}</div>
          <div
            class="col d-flex align-items-center justify-content-center"
          >{{getParent(inventory.supplier_id, suppliers).name}}</div>
          <div
            class="col d-flex align-items-center justify-content-center"
          >{{inventory.created_at.split(' ')[0]}}</div>
          <div
            class="col d-flex align-items-center justify-content-center"
          >{{getParent(inventory.branch_id, getBranches).name}}</div>
          <div
            class="col d-flex align-items-center justify-content-center"
            @click="viewproductTransfer({...inventory,branchName:getParent(inventory.branch_id, getBranches).name})"
          >
            <i class="fas fa-exchange-alt"></i>
          </div>
        </div>
      </div>
      <div class="modal fade repayment" id="viewInventory">
        <div class="modal-dialog" role="document">
          <div class="modal-content" v-if="showModalContent">
            <div class="modal-header py-2">
              <h4>{{inventoryItem.sku}}</h4>
              <a aria-label="Close" class="close py-1" data-dismiss="modal">
                <span aria-hidden="true" class="modal-close text-danger">
                  <i class="fas fa-times"></i>
                </span>
              </a>
            </div>
            <div class="modal-body px-5">
              <div class="table-responsive">
                <table class="table table-bordered table-striped">
                  <tbody>
                    <tr>
                      <th>Product Name</th>
                      <td>{{ inventoryItem.product_name || "Not Available" }}</td>
                    </tr>

                    <tr>
                      <th>SKU</th>
                      <td>{{ inventoryItem.sku || "Not Available" }}</td>
                    </tr>

                    <tr>
                      <th>Received By</th>
                      <td>{{ inventoryItem.receiver_id || "Not Available" }}</td>
                    </tr>

                    <tr>
                      <th>Received Date</th>
                      <td>{{ inventoryItem.updated_at.split(" ")[0] || "Not Available" }}</td>
                    </tr>
                    <tr>
                      <th>Sold Date</th>
                      <td>{{ inventoryItem.sold_date.split(" ")[0] || "Not Sold Yet" }}</td>
                    </tr>

                    <tr>
                      <th>Status</th>
                      <td>{{ inventoryItem.is_active | status}}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div class="modal-footer justify-content-center">
              <button class="text-center btn bg-default" @click="edit(inventoryItem.id)">Edit</button>
            </div>
          </div>
        </div>
      </div>
      <div class="modal fade repayment" id="viewProductTransfer">
        <div class="modal-dialog" role="document">
          <div class="modal-content" v-if="showProductTransfer">
            <div class="modal-header py-2">
              <h4>Product Transfer.</h4>
              <a aria-label="Close" class="close py-1" data-dismiss="modal">
                <span aria-hidden="true" class="modal-close text-danger">
                  <i class="fas fa-times"></i>
                </span>
              </a>
            </div>
            <div class="modal-body px-5">
              Transfer ({{ transferItem.product_name || "Not Available" }})
              <div class="mb-3 row attendance-item">
                <div
                  class="col d-flex align-items-center"
                  style="max-width: 120px"
                >From: {{ transferItem.branchName || "Not Available" }}</div>
                <div class="col d-flex align-items-center justify-content-center">
                  <i class="fas fa-arrow-right"></i>
                </div>
                <div class="col d-flex align-items-center justify-content-center">
                  To:
                  <select v-model="toId" class="form-control option2">
                    <option disabled value>Please select a branch</option>
                    <option
                      :key="option.id"
                      v-for="option in getBranches"
                      v-bind:value="option.id"
                    >{{ option.name }}</option>
                  </select>
                </div>
              </div>
              <h4>Transfer History.</h4>
             <div class="table-responsive">
                            <table class="table table-bordered table-striped">
                                <tbody>
                                
                                <tr>
                                    <th>From</th>
                                    <th>To</th>
                                    <th>Date Of Transfer</th>
                                    <th>Transferor</th>
                                </tr>
                                <h4 v-if="transferHistory.length<1" class="text-center">No history available.</h4>
                                <tr v-for="transfer in transferHistory">
                                    
                                    <td> {{ transfer.from || "Not Available" }}</td>
                                    <td> {{ transfer.to || "Not Available" }}</td>
                                    <td> {{ transfer.created_at.split(' ')[0] || "Not Available" }}</td>
                                    <td> {{ transfer.user || "Not Available" }}</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
            </div>
            <div class="modal-footer justify-content-center">
              <button
                class="text-center btn bg-default"
                @click="logTransfer(transferItem.id,toId)"
              >Transfer</button>
            </div>
          </div>
        </div>
      </div>

      <div v-if="pageParams">
        <base-pagination
          :page-param="pageParams"
          :page="page"
          @fetchData="fetchData()"
          @next="next()"
          @prev="prev()"
        ></base-pagination>
      </div>
    </div>
  </transition>
</template>
<script>
import Vue from "vue";
import { get, post } from "../../../utilities/api";
import Flash from "../../../utilities/flash";

import { mapActions, mapGetters } from "vuex";
import Vue2Filters from "vue2-filters";
import CustomHeader from "../../../components/customHeader";
import BasePagination from "../../../components/Pagination/BasePagination";
import InventorySearch from "../../../components/InventorySearch";
Vue.use(Vue2Filters);
export default {
  props: {
    //TODO::verify if its necessary to make this a prop
    withBranchFilter: { default: true },
    urlToFetchOrders: { default: "/api/inventory" },
  },

  components: { CustomHeader, BasePagination, InventorySearch },

  computed: { ...mapGetters(["getAuthUserDetails", "getBranches"]) },

  data() {
    return {
      branch_id: "",
      OId: null,
      showModalContent: false,
      showProductTransfer: false,
      pageParams: null,
      page_size: 10,
      products: [],
      suppliers: [],
      date_from: null,
      date_to: null,
      page: 1,
      searchFilter: {},
      filters: [],
      inventories: null,
      inventoryItem: null,
      response: {},
      transferItem: {},
      toId: 0,
      // searchQ:'',
      show: false,
      headings: [
        "Product Name",
        "SKU",
        "Price",
        "Supplier",
        "Date Received",
        "Branch",
        "Transfer",
      ],
      searchColumns: [
        { title: "Product Name", column: "productName" },
      ],
      transferHistory:[],      
      branchId: "",

    };
  },

  methods: {
    logTransfer(id, to) {
      this.$LIPS(true);

      post("/api/product_transfer", { to_id: to, inventory_id: id })
        .then((res) => {
          this.$LIPS(false);
          this.$swal({
            icon: "success",
            title: "Transfer Successfully Logged",
          });
          $(`#viewProductTransfer`).modal("toggle");
          this.fetchData();
        })
        .catch(() => {
          this.$LIPS(false);
          Flash.setError("Error submitting form");
        });
    },
    viewproductTransfer(data) {
                this.$LIPS(true);

      console.log("viewproductTransfer ", data);
      this.transferItem = data;
      this.showProductTransfer = true;
      get(
       `/api/product_transfer?inventoryId=${data.id}`
      )
        .then((res) => {
          this.transferHistory=res.data.data.data;
          this.$LIPS(false);
          console.log('hello world',res);
                  
$(`#viewProductTransfer`).modal("toggle");
        })
        .catch(() => {  
          
          Flash.setError("Error Occured")
        });
      
    },
    fetchData() {
      this.branchId = localStorage.getItem("branch_id");
      this.$scrollToTop();
      this.$LIPS(true);
      let { page, page_size } = this.$data;
      get(
        this.urlToFetchOrders +
          `${!!page ? `?page=${page}` : ""}` +
          `${!!page_size ? `&pageSize=${page_size}` : ""}`+`&branch=${this.branchId}`
      )
        .then(({ data }) => this.prepareList(data))
        .catch(() => Flash.setError("Error Preparing form"));
    },

    prepareList(response) {
      let {
        current_page,
        first_page_url,
        from,
        last_page,
        last_page_url,
        data,
        per_page,
        next_page_url,
        to,
        total,
        prev_page_url,
      } = response.data;
      this.pageParams = Object.assign({}, this.pageParams, {
        current_page,
        first_page_url,
        from,
        last_page,
        last_page_url,
        per_page,
        next_page_url,
        to,
        total,
        prev_page_url,
      });
      this.inventories = data;
      this.OId = from;
      this.$LIPS(false);
    },

    getParent(id, array) {
      return array.find((item) => {
        return item.id === id;
      });
    },

    next(firstPage = null) {
      if (this.pageParams.next_page_url) {
        this.page = firstPage ? firstPage : parseInt(this.page) + 1;
        this.fetchData();
      }
    },

    prev(lastPage = null) {
      if (this.pageParams.prev_page_url) {
        this.page = lastPage ? lastPage : parseInt(this.page) - 1;
        this.fetchData();
      }
    },

    viewInventory(inventory) {
      this.showModalContent = true;
      this.inventoryItem = inventory;
      return $(`#viewInventory`).modal("toggle");
    },

    edit(item) {
      this.showModalContent = false;
      $(`#viewInventory`).modal("toggle");

      return this.$router.push({ name: "inventoryEdit", params: { id: item } });
    },

    searchEvent(data) {
      get(this.urlToFetchOrders + data)
        .then(({ data }) => this.prepareList(data))
        .catch(() => Flash.setError("Error Preparing form"));
    },

    ...mapActions("ModalAccess", [
      "addCustomerOptionsModalsToDom",
      "removeCustomerOptionsModalsFromDom",
    ]),
  },

  created() {
    get("/api/supplier").then((res) => {
      this.suppliers = res.data.data.data;
    });
    get("/api/product").then((res) => {
      this.products = res.data.data.data;
    });

    this.$prepareBranches();
    this.fetchData();
  },

  filters: {
    status: function (value) {
      if (value === 1) {
        return "Active";
      } else return "Inactive";
    },
  },
};
</script>

<style scoped>
.flex-row-bottom {
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-end;
}
.green {
  color: green;
}
.red {
  color: red;
}
.searchBar {
  background-color: #fff;
  border-radius: 7px;
  padding: 20px;
}
.margin_left {
  margin-left: 20px;
}
.margin_left1 {
  margin-left: 25px;
}
</style>
