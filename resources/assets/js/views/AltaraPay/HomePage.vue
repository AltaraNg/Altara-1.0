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
                        url: 'direct-debit-sales',
                        title: 'Direct Debit Sales List',
                        url_c: 'View Direct Debit Sales List',
                        desc: 'View Direct Debit Sales!',
                    }, {
                        url: 'direct-debit-overdue',
                        title: 'Direct Debit overdue payments list',
                        url_c: 'View Direct Debit Overdue payments',
                        desc: 'View Direct Debit overdue payment!',
                    }, {
                        url: 'lookup',
                        title: 'Customer Lookup',
                        url_c: 'Manage customer repayment details',
                        desc: 'Customer Lookup',
                    }, {
                        url: 'verification',
                        title: 'Document Verification',
                        url_c: 'Verify Registered Customer!',
                        desc: 'For Verification of registered customers'
                    }, {
                        url: '/customer',
                        title: 'Customer List',
                        url_c: 'View Customer List',
                        desc: 'View all registered customers!',
                    }
                ]
            }
        }
    }
</script>