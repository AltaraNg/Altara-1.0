<template>
    <transition name="fade">
        <div>
            <div v-for="portal in portals">
                <portal-card :url="portal.url" :title="portal.title" :url_c="portal.url_c" :desc="portal.desc"/>
            </div>
        </div>
    </transition>
</template>
<script>
    import PortalCard from '../../components/portalCard';

    export default {
        components: {PortalCard},
        data() {
            return {
                portals: [
                    {
                        url: 'verification', title: 'Document Verification', url_c: 'Verify Registered Customer!',
                        desc: 'For Verification of registered customers'
                    },{
                        url: 'customer/update', title: 'Customer Update', url_c: 'Update customers details!',
                        desc: 'For Updating existing customers details'
                    }/*,{
                        url: 'message', title: 'Messaging', url_c: 'Send messages!',
                        desc: 'For sending messages to customers'
                    }*/
                ]
            }
        }
    }
</script>