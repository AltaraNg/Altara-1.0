<template>
    <transition name="fade">
        <div class="Flo-Rel-FWid pt-md-3 pt-2" id="inventory">

            <div class="col-lg-3 col-md-6">
                <div class="card card-product">
                    <div class="card-header card-header-image">
                        <img class="img" :src="`/images/cool.png`">
                    </div>
                    <div class="card-body">
                        <h6 class="card-category text-muted">Popular</h6>
                        <h5 class="card-title">Balmain</h5>
                        <div class="card-description">
                            Balmain's mid-rise skinny jeans are cut with stretch to ensure they retain their second-skin fit but move comfortably.
                        </div>
                    </div>
                    <div class="card-footer justify-content-between">
                        <div class="price">
                            <h4>$459</h4>
                        </div>
                        <div class="stats">
                            <button type="button" rel="tooltip" title="" class="btn btn-just-icon btn-link"
                                    data-original-title="Save to Wishlist">
                                <i class="material-icons">favorite</i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    </transition>
</template>
<script>
    import {get} from '../../../helpers/api';
    import Flash from '../../../helpers/flash';
    export default{
        data() {
            return {}
        },
        methods: {
            LIPS(s){
                this.$store.state.loader = this.isProcessing = s;
            },
            scrollToTop(){
                $("html, body").animate({scrollTop: 0}, 500);
            },
        },
        created(){

        },
        beforeCreate(){
            if (!localStorage.getItem('api_token')) this.$router.push('/home');
        }
    }
</script>
<style scoped type="scss">

</style>