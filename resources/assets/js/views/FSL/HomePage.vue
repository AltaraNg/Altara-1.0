<template>
    <transition name="fade">
        <div>
            <div v-for="portal in portals">
                <portal-card
                    :url="portal.url"
                    :title="portal.title"
                    :url_c="portal.url_c"
                    :desc="portal.desc"
                    :aces="portal.aces"
                />
            </div>
        </div>
    </transition>
</template>
<script>
import PortalCard from "../../components/portalCard";

export default {
    components: { PortalCard },
    methods: {
        auth(role) {
            return this.$store.getters.auth(role);
        }
    },
    data() {
        return {
            portals: [
                {
                    url: "attendance/create",
                    title: "Log Daily Attendance",
                    url_c: "Log Attendance!",
                    desc: "For Logging staff attendances!",
                    aces: this.auth("supervisor")
                },
                {
                    url: "branch",
                    title: "Manage Branches",
                    url_c: "Manage Branches now!",
                    desc: "Manage all the branch details",
                    aces: this.auth("FSLLead")
                },
                {
                    url: "/customer",
                    title: "Customer List",
                    url_c: "View Customer List",
                    desc: "View all registered customers!"
                },
                {
                    url: "sales",
                    title: "Sales List",
                    url_c: "View Sales List",
                    desc: "View all Sales!" /*, aces: this.auth('FSLLead')*/
                },
                {
                    url: "sales/create",
                    title: "Temp POS",
                    url_c: "Post Daily Sales",
                    desc: "Temp POS!",
                    aces: this.auth("supervisor")
                },
                {
                    url: "payment",
                    title: "Online Payment",
                    url_c: "Make Online Payment for Formal Sector",
                    desc: "Online Payment",
                    aces: this.auth("supervisor")
                },
                {
                    url: "lookup",
                    title: "Customer Lookup",
                    url_c: "Manage customer repayment details",
                    desc: "Customer Lookup"
                },
                {
                    url: "reminder/renewal",
                    title: "Renewal list",
                    url_c: "View Renewals",
                    desc: "View all renewal!"
                },
                {
                    url: "credit-worthy",
                    title: "Credit Worthy",
                    url_c: "Check credit worthiness",
                    desc: "Credit Worthy"
                }
            ]
        };
    }
};
</script>
