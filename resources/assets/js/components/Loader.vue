<template>
    <transition name="fade">
        <div class='loader' v-if="$store.state.loader">
            <div class='loader__box'>
                <div v-for="i in Object.values('ALTARA')" class='loader__dot'>{{i}}</div>
                <div class='loader__text'></div>
            </div>
        </div>
    </transition>
</template>

<style lang="scss">
    @import "../../sass/app/variables";
    .loader {
        height           : 100vh;
        width            : 100vw;
        background-color : rgba($color-black, 0.4);
        position         : fixed;
        z-index          : 1100;
        &__box {
            height    : 1.8rem;
            width     : 2.2rem;
            position  : absolute;
            top       : 0;
            bottom    : 0;
            left      : 0;
            right     : 0;
            margin    : auto;
            transform : translateX(-10rem);
        }
        &__dot {
            text-align       : center;
            animation        : loader ease-in-out 3s infinite;
            height           : 2.2rem;
            width            : 2.2rem;
            border-radius    : 100%;
            position         : absolute;
            border           : 1px solid $default-color;
            font-weight      : bold;
            color            : $default-color;
            background-color : $color-white;
            &:nth-child(1) {
                animation-delay : .5s;
            }
            &:nth-child(2) {
                animation-delay : .4s;
            }
            &:nth-child(3) {
                animation-delay : .3s;
            }
            &:nth-child(4) {
                animation-delay : .2s;
            }
            &:nth-child(5) {
                animation-delay : .1s;
            }
            &:nth-child(6) {
                animation-delay : 0s;
            }
        }
        &__text {
            position  : absolute;
            top       : 200%;
            left      : 0;
            right     : 0;
            width     : 2rem;
            margin    : auto;
            transform : translateX(6rem);
            &:after {
                content        : "Loading...";
                font-size      : $default-font-size-icon;
                letter-spacing : .5rem;
                color          : $color-white;
                animation      : loading-text ease-in-out 3s infinite;
            }
        }
    }

    @keyframes loader {
        15% {
            transform : translateX(0);
        }
        45% {
            transform : translateX(23rem);
        }
        65% {
            transform : translateX(23rem);
        }
        95% {
            transform : translateX(0);
        }
    }

    @keyframes loading-text {
        0% {
            content : "Loading";
        }
        25% {
            content : "Loading.";
        }
        50% {
            content : "Loading..";
        }
        75% {
            content : "Loading...";
        }
    }
</style>