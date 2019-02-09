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
                        url: 'branch', title: 'Manage Branches', url_c: 'Manage Branches now!',
                        desc: 'Manage all the branch details',aces: this.$store.getters.verifyFSLLead,
                    }, {
                        url: '/customer', title: 'Customer List', url_c: 'View Customer List',
                        desc: 'View all registered customers!',
                    }, {
                        url: 'suppliers/create', title: 'Manage Supplier', url_c: 'Create/Update Supplier',
                        desc: 'Manage all the suppliers details!',
                    }, {
                        url: 'brands/create', title: 'Manage Brands', url_c: 'Create/Update Brands',
                        desc: 'Manage all the brands details!',
                    }, {
                        url: 'categories/create', title: 'Manage Categories', url_c: 'Create/Update Categories',
                        desc: 'Manage all the category details!',
                    }, {
                        url: 'products/create', title: 'Manage products', url_c: 'Create/Update products',
                        desc: 'Manage all the product details!',
                    }
                ]
            }
        }
    }
</script>