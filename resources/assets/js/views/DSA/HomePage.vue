<template>
    <transition name="fade">
        <div>
            <div v-for="portal in portals">
                <portal-card :url="portal.url" :title="portal.title" :url_c="portal.url_c"
                             :desc="portal.desc" :aces="portal.aces"/>
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
                        url: 'customer/register',
                        title: 'Customer Registration',
                        url_c: 'Register new customer now!',
                        desc: 'Registering new customers',
                    }, {
                        url: 'customer/update',
                        title: 'Customer Update',
                        url_c: 'Update customers details!',
                        desc: 'Updating customers details',
                    }, {
                        url: 'report/',
                        title: 'Sales Lead Reporting',
                        url_c: 'Get Reports',
                        desc: 'Real time DSA reports!',
                        aces: false,
                    }, {
                        url: 'customer/list',
                        title: 'Customer List',
                        url_c: 'View Customer List',
                        desc: 'View all registered customers!',
                    }
                ]
            }
        },
        created() {
            if (this.$store.state.DSALead.includes(this.$store.state.authRole))
                this.portals[2].aces = true; else this.portals[2].aces = false;
                /*only the dsa lead can access the report portal hence the method*/
        }
    }
</script>