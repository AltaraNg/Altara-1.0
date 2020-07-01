<template>
    <div class="row form-group my-5 mx-5" v-if="listToOrder !== 'Log Payment'">
        <div class="col-2 w-100" v-if="!disabled">
            <label for="branch" class="form-control-label">Branch</label>
            <select name="branch" id="branch" @change="filterList({'branch': branch})" v-model="branch" class=" text-capitalize font-weight-bold h5" >
                <option value="all" selected="selected" >All</option>
                <option
                    :value="branch.name"
                    v-for="branch in getBranches"
                >{{ branch.name }}</option
                >
            </select>
        </div>
        <div class=" col-2 ">
            <label  class="form-control-label">Date</label>
            <date-picker class="w-100" v-model="date" valueType="format" placeholder="Date" @change="filterList({'date': date})"></date-picker>
        </div>
        <div  class="col-2">
            <label for="type" class="form-control-label">Payment Type</label>
            <select name="type" id="type" @change="filterList({'type': type})" v-model="type" class="w-75 text-capitalize font-weight-bold h5">
                <option value="all" selected="selected" >All</option>
                <option
                    :value="payment.type"
                    v-for="payment in paymentType"
                >{{ payment.type }}</option
                >
            </select>
        </div>
    </div>
</template>

<script>
    import DatePicker from 'vue2-datepicker';
    import { mapGetters } from "vuex";
    import 'vue2-datepicker/index.css';
    import { get, post, put } from "../utilities/api";
export default {
    components: {
        DatePicker
    },
  data() {
    return {
        paymentType: [
            {id: 1, type: 'cash'},
            {id: 2, type: 'transfer'},
            {id: 3, type: 'pos'},
            {id: 4, type: 'direct-debit'},
            {id: 5, type: 'cheque'}
        ],
        branch: null,
        date: null,
        type: null
    };
  },
  props: {
    listToOrder: {
        type: String,
        required: true
    },
      disabled: {
        type: Boolean,
          required: false     }

  },
    computed: {
        ...mapGetters(["auth", "getAuthUserDetails", "getBranches"])
    },

    methods: {
        filterList(data){
            this.$emit('filter', data)
        }
    }
};
</script>

<style lang="scss" scoped>
    select{
        width: 187px;
        height: 34px;
    }
</style>
