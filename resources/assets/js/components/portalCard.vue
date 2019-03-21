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
<style lang="scss">
    @import '../../sass/app/variables';
    .portal-card {
        transition: all .2s;
        &:hover {
            transform : scale(1.02);
        }
        box-shadow    : 0 5px 25px 0 rgba(0, 0, 0, .2);
        border-radius : .7rem;
        overflow      : hidden;
        p {
            font-size   : 1.5rem;
            font-weight : 300;
        }
        .portion {
            background-color : white;
            position         : relative;
            padding          : 3rem;
            &.first {
                border-bottom : 1px solid #ebebeb;
                background    : linear-gradient(30deg, #ebebeb 0%, #f5f5f5 100%);
            }
        }
        .portal-title {
            color       : #074a74;
            font-size   : 1.5 * $default-font-size;
            padding-top : 1.5rem;
            float       : left;
        }

        .deco {
            position         : absolute;
            top              : 4rem;
            width            : 7rem;
            height           : .3rem;
            left             : 3rem;
            border-radius    : 4rem;
            background-color : #074a74;
            &.second {
                left             : 10.5rem;
                background-color : #fe5a11;
            }
        }
        .deco-down {
            position   : absolute;
            z-index    : 10;
            bottom     : -1px;
            background : linear-gradient(30deg, #ebebeb 0%, #f5f5f5 100%);
            &.first {
                height     : .5rem;
                width      : 100%;
                left       : 0;
                border-top : 1px solid #ebebeb;
            }
            &.second {
                width         : 45%;
                transform     : skewX(-35deg);
                right         : -2rem;
                border-radius : 0.5rem 0 0 0;
                border        : 1px solid #ebebeb;
                padding       : 1.2rem 1rem;
            }
        }
        a {
            transform : translateX(20%) skewX(35deg);
        }
    }
    @media (max-width : 990px) {
        .portal-card {
            .portion {
                padding : 2rem 2.5rem;
            }
            .deco {
                top      : 3rem;
                height   : .2rem;
                left     : 2.5rem;
                &.second {
                    left : 10rem;
                }
            }
            .deco-down.second {
                padding : .8rem .5rem;
            }
            a {
                padding: 8px 16px;
                transform: translateX(14%) skewX(35deg);
            }
        }
    }
    @media (max-width : 600px) {
        .portal-card {
            .deco-down.second {
                padding : .9rem .5rem;
            }
            a {
                padding: 9px 16px;
                transform: translateX(25%) skewX(35deg);
            }
        }
    }
</style>