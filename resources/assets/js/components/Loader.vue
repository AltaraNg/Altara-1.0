<template>
    <transition name="fade">
        <div class='loader' v-if="showLoader">
            <div class='loader__box'>
                <div v-for="i in dot" class='loader__dot'>{{i}}</div>
                <div class='loader__text'></div>
            </div>
        </div>
    </transition>
</template>
<script>
    export default {
        data() {
            return {
                dot: ['A', 'L', 'T', 'A', 'R', 'A']
            }
        },
        computed: {
            showLoader() {
                return this.$store.state.loader;
            }
        }
    }
</script>