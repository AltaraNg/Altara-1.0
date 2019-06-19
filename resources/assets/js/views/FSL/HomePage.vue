<template>
    <transition name="fade">
        <div>
            <div v-for="portal in portals">
                <portal-card :url="portal.url" :title="portal.title" :url_c="portal.url_c" :desc="portal.desc"
                             :aces="portal.aces"/>
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
                        url: 'attendance/create', title: 'Log Daily Attendance', url_c: 'Log Attendance!',
                        desc: 'For Logging staff attendances!', aces: this.$store.getters.auth('supervisor'),
                    }, {
                        url: 'branch', title: 'Manage Branches', url_c: 'Manage Branches now!',
                        desc: 'Manage all the branch details', aces: this.$store.getters.auth('FSLLead'),
                    }, {
                        url: '/customer', title: 'Customer List', url_c: 'View Customer List',
                        desc: 'View all registered customers!',
                    }
                ]
            }
        }
    }
</script>