<template>
    <transition name="fade">
        <div class="pt-md-3 pt-2" id="purchase-log">

        </div>
    </transition>
</template>
<script>
    import Vue from 'vue';
    import {log} from '../../../utilities/log';
    import Flash from '../../../utilities/flash'
    import {byMethod, get} from '../../../utilities/api';

    function initialize(to) {

    }

    export default {
        data() {
            return {
                form: {},
                banks: {},
                error: {},
                mode: null,
                show: false,
                store: '/api/branch',
                method: 'POST',
            }
        },

    }
</script>
