<template>
    <div class="mt-5 attendance-head">
        <div class="mb-5 row align-items-center">
            <div class="col-12 title-con">
                <span class="title">{{title | capitalize}}</span>
                <div class="row justify-content-end" v-if="to">
                    <router-link class="text-link mt-3" :to="to">{{buttonTitle}}</router-link>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        props: {
            title:'',
            buttonTitle:null,
            to: null
        }
    }
</script>