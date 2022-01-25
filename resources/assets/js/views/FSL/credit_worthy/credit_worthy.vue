<template>
    <transition name="fade">
        <div>
            <Lookup :logger="'credit'" />
        </div>
    </transition>
</template>

<script>
import Lookup from "../lookup/lookup";
import Flash from "../../../utilities/flash";

export default {
    components: { Lookup },
    data() {
        return {};
    },
    methods: {},
    computed: {}
};
</script>

<style scoped type="scss">
.attendance-head .light-heading:nth-child(1) {
    max-width: 120px;
}
</style>
