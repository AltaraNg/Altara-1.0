<template>
    <transition name="fade">
        <div class='loaderCon' v-if="showLoader">
            <div class='loader'>
                <div class='loader--dot'>A</div>
                <div class='loader--dot'>R</div>
                <div class='loader--dot'>A</div>
                <div class='loader--dot'>T</div>
                <div class='loader--dot'>L</div>
                <div class='loader--dot'>A</div>
                <div class='loader--text'></div>
            </div>
        </div>
    </transition>
</template>
<script>
    export default{
        computed:{
            showLoader () {
             return this.$store.state.loader;
             }
        }
    }
</script>

<style scoped type="scss">

    .loaderCon{
        height: 100vh;
        width: 100vw;
        background-color: rgba(0,0,0,0.4);
        position: fixed;
        z-index: 1100;
    }

    .loader {
        height: 20px;
        width: 250px;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
    }
    .loader--dot {
        padding:2px;
        text-align:center;
        animation-name: loader;
        animation-timing-function: ease-in-out;
        animation-duration: 3s;
        animation-iteration-count: infinite;
        height: 24px;
        width: 24px;
        border-radius: 100%;
        background-color: black;
        position: absolute;
        border: 1px solid #074a74;
        font-size: 12px;
        font-weight: bold;
        color: #074a74;
    }
    .loader--dot:first-child {

        background-color: white;
        animation-delay: 0.5s;
    }
    .loader--dot:nth-child(2) {
        background-color: white;
        animation-delay: 0.4s;
    }
    .loader--dot:nth-child(3) {
        background-color: white;
        animation-delay: 0.3s;
    }
    .loader--dot:nth-child(4) {
        background-color: white;
        animation-delay: 0.2s;
    }
    .loader--dot:nth-child(5) {
        background-color: white;
        animation-delay: 0.1s;
    }
    .loader--dot:nth-child(6) {
        background-color: white;
        animation-delay: 0s;
    }
    .loader--text {
        position: absolute;
        top: 200%;
        left: 0;
        right: 0;
        width: 4rem;
        margin: auto;
    }
    .loader--text:after {
        content: "Loading...";
        font-weight: bold;
        font-size: 24px;
        color: white;
        animation-name: loading-text;
        animation-duration: 3s;
        animation-iteration-count: infinite;
    }

    @keyframes loader {
        15% {
            transform: translateX(0);
        }
        45% {
            transform: translateX(230px);
        }
        65% {
            transform: translateX(230px);
        }
        95% {
            transform: translateX(0);
        }
    }
    @keyframes loading-text {
        0% {
            content: "Loading";
        }
        25% {
            content: "Loading.";
        }
        50% {
            content: "Loading..";
        }
        75% {
            content: "Loading...";
        }
    }


</style>