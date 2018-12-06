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
                        url: 'inventory', title: 'Products Inventory', url_c: 'View Inventory!',
                        desc: 'For products inventory and management'
                    },{
                        url: 'branch/create', title: 'Create Branch', url_c: 'Create Branch now!',
                        desc: 'Create a new Branch office',aces: false,
                    },{
                        url: 'branch/update', title: 'Update Branch', url_c: 'Update Branch now!',
                        desc: 'Update a Branch office',aces: false,
                    }
                ]
            }
        },
        created() {
            if(this.$store.state.FSLLead.includes(this.$store.state.authRole)){
                this.portals[1].aces = true;
                this.portals[2].aces = true;
            }else{
                this.portals[1].aces = false;
                this.portals[2].aces = false;
            }
            /*only the dsa lead can access the report portal hence the method*/
        }
    }
</script>