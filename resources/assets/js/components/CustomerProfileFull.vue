<!--
<template>
    <transition name="fade">
        <div class="px-md-4 px-2">
            <app-navigation :pageTitle="'Customer Profile'" :pageTitleSmall="'Profile'"
                            :previous="{ path: $routerHistory.previous().path }"
                            :forward="{ path: $routerHistory.next().path }"/>
            <div class="pt-md-3 pt-2 verification" id="employeeRegister">
                <customer-profile v-if="customer" :customer="customer"/>
            </div>
        </div>
    </transition>
</template>

<script>
    import {get} from '../helpers/api';
    import Flash from '../helpers/flash';
    import CustomerProfile from './customerProfile';
    import AppNavigation from '../components/AppNavigation';

    export default {
        data() {
            return {customer: ''}
        },
        components: {CustomerProfile, AppNavigation},
        created() {
            $('.tooltip').remove();
            this.fetch();
        },
        methods: {
            async fetch() {
                if (this.$network()) {
                    this.$LIPS(true);
                    await get(`/api/customer/${this.$route.params.id}`)
                        .then(r => this.customer = r.data.customer)
                        .catch(e => Flash.setError(e.response.status === 422 ? e.response.data.message :
                            'Something went wrong, try again later!'));
                    this.$LIPS(false);
                    this.$scrollToTop();
                } else this.$networkErr();
            }
        }
    }
</script>-->
