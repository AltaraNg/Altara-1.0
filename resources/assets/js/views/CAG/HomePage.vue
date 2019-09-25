<template>
    <transition name="fade">
        <div>
            <div v-for="portal in portals">
                <portal-card :url="portal.url" :title="portal.title" :url_c="portal.url_c" :desc="portal.desc" :aces="portal.aces"/>
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
                        url: '/customer', title: 'Customer List', url_c: 'View Customer List',
                        desc: 'View all registered customers!',
                    },
                    {
                        url: 'sales', title: 'Sales List', url_c: 'View Sales List',
                        desc: 'View all Sales!',
                    },{
                        url: 'all-overdue', title: 'All overdue payments list', url_c: 'View All Overdue payments',
                        desc: 'View all overdue payment!',
                    }
                ]
            }
        }
    }
</script>