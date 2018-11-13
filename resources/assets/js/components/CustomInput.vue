<!--
<template>

    <div class="form-group col-md-4 px-md-3 px-1 float-left">
        <div v-if="type == 'text'">

            <label>{{title}}</label>

            <input v-if="validate"
                   :type="type"
                   class="form-control"
                   :placeholder="'enter ' + title + ' here'"
                   :v-model="data"
                   disabled="disabled"
                   :name="data_v"
                   :data-vv-name="data_v"
                   :v-validate="''+v_rule"
                   :class="{'is-invalid': errors.first(data_v)}">

            <input v-else
                   :type="type"
                   class="form-control"
                   :placeholder="'enter ' + title + ' here'"
                   :v-model="data"
                   disabled="disabled">

            <small class="text-muted" v-if="errors.first(data_v) && validate">{{errors.first(data_v)}}</small>
        </div>
    </div>

</template>
<script>
    export default {
        props: {
            title: '',
            type: '',
            ///holder: '',
            data: '',
            data_v: '',
            validate:{default:false},
            v_rule:'',
            disabled:{default:false}
        },
    }
</script>-->
