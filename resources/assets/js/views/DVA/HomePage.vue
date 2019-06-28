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
                    },{
                        url: 'message', title: 'Messaging', url_c: 'Send messages!',
                        desc: 'For sending messages to customers'
                    }, {
                        url: 'reminder/sms', title: 'Customer SMS Reminder', url_c: 'View SMS reminders',
                        desc: 'View all due/sent SMS reminders!',
                    }, {
                        url: 'reminder/call', title: 'Customer Call Reminder', url_c: 'View Call reminders',
                        desc: 'View all due Call reminders!',
                    }, {
                        url: '/customer', title: 'Customer List', url_c: 'View Customer List',
                        desc: 'View all registered customers!',
                    }, {
                        url: 'sales', title: 'Sales List', url_c: 'View Sales List',
                        desc: 'View all Sales!',
                    }
                ]
            }
        }
    }
</script>