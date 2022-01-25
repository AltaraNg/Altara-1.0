<template>
    <div style="margin-left: 5rem; margin-right: 5rem;">
        <form-wizard
            @on-complete="logAmounts()"
            title="ENTER ACCOUNT BALANCE FOR THE FOLLOWING DAYS"
            subtitle=""
            color="#2975A5"
            error-color="#FF0000"
        >
            <tab-content title="1st Month" :before-change="beforeTabSwitch1">
                <div class="row">
                    <div class="col form-group">
                        <label for="7th-day" class="form-control-label"
                            >7th day of the month
                        </label>
                        <input
                            class="form-control w-100"
                            type="number"
                            min="1"
                            max="31"
                            v-model="form1[0]"
                        />
                    </div>
                    <div class="col form-group">
                        <label for="14th-day" class="form-control-label"
                            >14th day of the month
                        </label>
                        <input
                            class="form-control w-100"
                            type="number"
                            min="1"
                            max="31"
                            v-model="form1[1]"
                        />
                    </div>
                </div>
                <br />
                <div class="row">
                    <div class="col form-group">
                        <label for="21st-day" class="form-control-label"
                            >21st day of the month
                        </label>
                        <input
                            class="form-control w-100"
                            type="number"
                            min="1"
                            max="31"
                            v-model="form1[2]"
                        />
                    </div>
                    <div class="col form-group">
                        <label for="28th-day" class="form-control-label"
                            >28th day of the month
                        </label>
                        <input
                            class="form-control w-100"
                            type="number"
                            min="1"
                            max="31"
                            v-model="form1[3]"
                        />
                    </div>
                </div>
            </tab-content>
            <tab-content title="2nd Month" :before-change="beforeTabSwitch2">
                <div class="row">
                    <div class="col form-group">
                        <label for="custom-date" class="form-control-label"
                            >7th day of the month
                        </label>
                        <input
                            class="form-control w-100"
                            type="number"
                            min="1"
                            max="31"
                            v-model="form2[0]"
                        />
                    </div>
                    <div class="col form-group">
                        <label for="custom-date" class="form-control-label"
                            >14th day of the month
                        </label>
                        <input
                            class="form-control w-100"
                            type="number"
                            min="1"
                            max="31"
                            v-model="form2[1]"
                        />
                    </div>
                </div>
                <br />
                <div class="row">
                    <div class="col form-group">
                        <label for="custom-date" class="form-control-label"
                            >21st day of the month
                        </label>
                        <input
                            class="form-control w-100"
                            type="number"
                            min="1"
                            max="31"
                            v-model="form2[2]"
                        />
                    </div>
                    <div class="col form-group">
                        <label for="custom-date" class="form-control-label"
                            >28th day of the month
                        </label>
                        <input
                            class="form-control w-100"
                            type="number"
                            min="1"
                            max="31"
                            v-model="form2[3]"
                        />
                    </div>
                </div>
            </tab-content>
            <tab-content title="3rd Month" :before-change="beforeTabSwitch3">
                <div class="row">
                    <div class="col form-group">
                        <label for="custom-date" class="form-control-label"
                            >7th day of the month
                        </label>
                        <input
                            class="form-control w-100"
                            type="number"
                            min="1"
                            max="31"
                            v-model="form3[0]"
                        />
                    </div>
                    <div class="col form-group">
                        <label for="custom-date" class="form-control-label"
                            >14th day of the month
                        </label>
                        <input
                            class="form-control w-100"
                            type="number"
                            min="1"
                            max="31"
                            v-model="form3[1]"
                        />
                    </div>
                </div>
                <br />
                <div class="row">
                    <div class="col form-group">
                        <label for="custom-date" class="form-control-label"
                            >21st day of the month
                        </label>
                        <input
                            class="form-control w-100"
                            type="number"
                            min="1"
                            max="31"
                            v-model="form3[2]"
                        />
                    </div>
                    <div class="col form-group">
                        <label for="custom-date" class="form-control-label"
                            >28th day of the month
                        </label>
                        <input
                            class="form-control w-100"
                            type="number"
                            min="1"
                            max="31"
                            v-model="form3[3]"
                        />
                    </div>
                </div>
            </tab-content>
        </form-wizard>
    </div>
</template>

<script>
import { get, post } from "../utilities/api";
import { mapGetters } from "vuex";
import { FormWizard, TabContent } from "vue-form-wizard";
import "vue-form-wizard/dist/vue-form-wizard.min.css";
//component code

export default {
    props: {
        customerId: null
    },
    components: {
        FormWizard,
        TabContent
    },
    data() {
        return {
            error: {},
            product: "",
            salesLogForm: {},
            form1: [],
            form2: [],
            form3: [],
            balances: [],
            next1: false,
            next2: false,
            next3: false,
            apiUrls: {
                creditCheck: `/api/credit-check`
            }
        };
    },
    async mounted() {},
    computed: {
        // ...mapGetters(["getPaymentMethods"])
    },
    methods: {
        isDisable1() {
            if (
                !this.form1[0] ||
                !this.form1[1] ||
                !this.form1[2] ||
                !this.form1[3]
            ) {
                this.next1 = false;
            } else this.next1 = true;
        },
        isDisable2() {
            if (
                !this.form2[0] ||
                !this.form2[1] ||
                !this.form2[2] ||
                !this.form2[3]
            ) {
                this.next2 = false;
            } else this.next2 = true;
        },
        isDisable3() {
            if (
                !this.form3[0] ||
                !this.form3[1] ||
                !this.form3[2] ||
                !this.form3[3]
            ) {
                this.next3 = false;
            } else this.next3 = true;
        },

        validateAsync: function() {
            return new Promise((resolve, reject) => {
                () => {
                    if (this.count < 1) {
                        this.count++;
                        reject(
                            "This is a custom validation error message. Click next again to get rid of the validation"
                        );
                    } else {
                        this.count = 0;
                    }
                };
            });
        },
        onComplete: function() {
            const _balances = [this.form1, this.form2, this.form3];
            alert("Yay. Done!");
        },
        beforeTabSwitch1: function() {
            this.isDisable1();
            return this.next1;
        },
        beforeTabSwitch2: function() {
            this.isDisable2();
            return this.next2;
        },
        beforeTabSwitch3: function() {
            this.isDisable3();
            return this.next3;
        },
        async logAmounts() {
            const data = { balances: [this.form1, this.form2, this.form3] };
            this.$validator.validateAll().then(result => {
                if (result) {
                    this.$LIPS(true);
                    post(this.apiUrls.creditCheck, data)
                        .then(res => {
                            this.$LIPS(false);
                            const resData = res.data.data;
                            let arr = [];
                            for (let resD in resData) {
                                if (resData[resD] === "Approved") {
                                    arr.push(resD);
                                }
                            }
                            const last = arr[arr.length - 1];

                            last
                                ? this.$swal({
                                      icon: "success",
                                      title: `You can get up to ₦${last}`
                                  })
                                : this.$swal({
                                      icon: "error",
                                      title: "Loan Request UnSuccessful.",
                                      text: `You can't get any loan`
                                  });
                        })
                        .catch(() => {
                            this.$LIPS(false);
                            Flash.setError("Error submitting form");
                        });
                } else this.$networkErr("form");
            });
        }
    }
};
</script>
