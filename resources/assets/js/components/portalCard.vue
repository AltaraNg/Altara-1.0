<template>
    <div class="col-md-4 col-sm-6 float-left product p-4" v-if="aces">
        <div class="portal-card clearfix">
            <div class="first portion clearfix">
                <span class="deco"></span><span class="deco second"></span>
                <span class="portal-title">{{title | capitalize}}</span>
            </div>
            <div class="portion clearfix">
                <p>{{ desc | capitalize}}</p>
                <h6 style="margin-top: 2rem;">{{url_c | capitalize}}</h6>
                <span class="deco-down first"></span>
                <span class="deco-down second">
                   <router-link :to="url" class="btn bg-default btn-round m-0">
                       continue <span class="custom-icon ml-2"><i class="now-ui-icons ui-1_send"></i></span>
                   </router-link>
                </span>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        props: {title: '', desc: '', url: '', url_c: '', aces: {default: true}},
        /*title is the card title also mean the portal title.
        * desc is a few word description of the portal
        * url is the link to the portal
        * url_c is the caption for the link
        * aces is used in situations when a particular portal is accessible to only few person in a
        * department hence from the parent component the aces will be set to false is want
        * only few people to access it. true means everyone in that dept can access it.*/
    }
</script>