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
                        url: 'employee/register', title: 'Staff Registration', url_c: 'Register New staff!',
                        desc: 'For Registering new staff'
                    }, {
                        url: 'employee/manager', title: 'Staff Management', url_c: 'Manage staff Details!',
                        desc: 'For Registering new staff'
                    }
                ]
            }
        }
    }
</script>