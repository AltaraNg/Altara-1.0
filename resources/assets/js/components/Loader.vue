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