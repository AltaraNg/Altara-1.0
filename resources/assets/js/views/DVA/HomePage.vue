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
                        desc: 'View all due SMS reminders!',
                    }, {
                        url: 'reminder/call', title: 'Customer Call Reminder', url_c: 'View Call reminders',
                        desc: 'View all due Call reminders!',
                    }, {
                        url: 'reminder/collection', title: 'Collection list', url_c: 'View collections',
                        desc: 'View all due collection!',
                    }, {
                        url: 'reminder/recovery', title: 'Recovery list', url_c: 'View Recoveries',
                        desc: 'View all due recovery!',
                    },{
                        url: 'reminder/external-recovery', title: 'External recovery list', url_c: 'View Recoveries',
                        desc: 'View all due recovery!',
                    },{
                        url: 'all-overdue', title: 'All overdue payments list', url_c: 'View All Overdue payments',
                        desc: 'View all overdue payment!',
                    }, {
                        url: '/customer', title: 'Customer List', url_c: 'View Customer List',
                        desc: 'View all registered customers!',
                    }, {
                        url: 'sales', title: 'Sales List', url_c: 'View Sales List',
                        desc: 'View all Sales!',
                    }, {
                        url: 'lookup', title: 'Customer Lookup', url_c: 'Manage customer repayment details',
                        desc: 'Customer Lookup',
                    },
                    {
                        url: 'reminder-list', title: 'Reminder list', url_c: 'View Reminder List',
                        desc: 'View Reminder List!',
                    }
                    // TODO:: cleanup
                ]
            }
        }
    }
</script>
