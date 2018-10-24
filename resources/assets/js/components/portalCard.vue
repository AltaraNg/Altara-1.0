<template>
    <div class="col-md-4 col-sm-6 float-left product p-3" v-if="aces">
        <div class="card my-0 px-3 py-2">
            <div class="card-body">
                <h5 class="card-title mt-0">{{title | capitalize}}</h5>
                <p class="card-text">{{ desc | capitalize}}</p>
                <router-link :to="url" class="btn bg-default">{{url_c | capitalize}}</router-link>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        props: {title: '', desc: '', url: '', url_c: '', aces: {default: true}}
    }
</script>