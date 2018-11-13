<template>
    <!--<div class="col-md-4 col-sm-6 float-left product p-3" v-if="aces">
        <div class="card my-0 px-3 py-2">
            <div class="card-body">
                <h5 class="card-title mt-0">{{title | capitalize}}</h5>
                <p class="card-text">{{ desc | capitalize}}</p>
                <router-link :to="url" class="btn bg-default">{{url_c | capitalize}}</router-link>
            </div>
        </div>
    </div>-->
    <div class="col-md-4 col-sm-6 float-left product p-4" v-if="aces">
        <div class="portal-card clearfix">
            <span class="portal-icon"> <i class="fas fa-file-invoice"></i> </span>
            <div class="clearfix">
                <h4 class="font-weight-bold float-left mt-2 mb-2">{{title | capitalize}}</h4>
                <hr class="float-left w-100">
            </div>
            <div class="clearfix">
                <p class="text-muted float-left">{{ desc | capitalize}}</p>
            </div>
            <div class="clearfix">
                <router-link :to="url" class="btn bg-default">
                    {{url_c | capitalize}}
                    <i class="fas fa-angle-right"></i>
                </router-link>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        props: {title: '', desc: '', url: '', url_c: '', aces: {default: true}},
    }
</script>

<style scoped>

    .portal-card h4 {
        font-weight : 500;
    }

    .portal-card .button i {
        font-size   : 1.9rem;
        margin-left : 1.4rem;
        top         : .2rem;
        position    : relative;
    }

    .portal-card .button {
        padding          : 1rem 2.5rem;
        position         : relative;
        background-color : white;
        color            : #074a74;
        border           : 1px solid #074a74;
        margin-top       : 1rem;
        float            : left;
    }

    .portal-card {
        padding       : 1.5rem 2.5rem 2rem;
        border-left   : .2rem solid #074a74;
        box-shadow    : 0 5px 25px 0 rgba(0, 0, 0, .2);
        border-radius : .4rem;
    }

    .portal-icon {
        position         : absolute;
        right            : 2.5rem;
        top              : 2.5rem;
        border-radius    : 50%;
        height           : 5rem;
        width            : 5rem;
        padding          : 1.5rem;
        border           : 1px solid rgba(0, 0, 0, .05);
        text-align       : center;
        background-color : rgba(0, 0, 0, .025);
        box-shadow       : inset 0 1px 0 rgba(255, 255, 255, .5), inset 0 -2px 0 rgba(0, 0, 0, .25), inset 0 -3px 0 rgba(255, 255, 255, .2), 0 1px 0 rgba(0, 0, 0, .1);
    }

    .portal-icon i {
        line-height : 2rem;
        text-align  : center;
        font-size   : 1.8rem;
        color       : rgba(0, 0, 0, .1);
    }

    .portal-card p {
        font-size   : 1.6rem;
        font-weight : 300;
    }
</style>