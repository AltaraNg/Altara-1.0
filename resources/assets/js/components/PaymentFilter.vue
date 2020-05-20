<template>
    <div class="row form-group my-5">
        <div class="col-2 w-100">
            <select name="branch" id="branch" @select="filterList" class="w-75 text-capitalize font-weight-bold h5">
                <option value="" selected>Branch</option>
                <option
                    :value="branch.id"
                    v-for="branch in getBranches"
                >{{ branch.name }}</option
                >
            </select>
        </div>
        <div class=" col-2 date">
            <datepicker @selected="filterList" class="w-100"></datepicker>
        </div>
        <div v-if="listToOrder === 'Reconcile'" class="col-2">
            <select name="type" id="type" @select="filterList">
                <option
                    :value="payment.id"
                    v-for="payment in paymentType"
                >{{ payment.type }}</option
                >
            </select>
        </div>
    </div>
</template>

<script>
    import Datepicker from 'vuejs-datepicker';
    import { mapGetters } from "vuex";
    import { get, post, put } from "../utilities/api";
export default {
    components: {
        Datepicker
    },
  data() {
    return {
        paymentType: []
    };
  },
  props: {
    listToOrder: {
        type: String,
        required: true
    }
  },
    computed: {
        ...mapGetters(["auth", "getAuthUserDetails", "getBranches"])
    },
    created() {
        this.$prepareBranches();
        get('/api/payment-type').then(
            (res)=>{
                this.paymentType = res.data.data
            }
        )

    }
    ,
    methods: {
        filterList(){
            return
        }
    }
};
</script>

<style lang="scss" scoped>

</style>
