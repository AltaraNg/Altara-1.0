<template>
    <span class="CustomSMSButton d-flex align-items-center justify-content-center" @click="toggleModal('SMSModal')">
        <i class="fas fa-envelope"></i>
    </span>
</template>

<script>
    import {EventBus} from "../../utilities/event-bus";

    export default {
        /**
         *
         * @Component Usage:
         *
         * @Interface : A button Which triggers a modal onClick.
         *
         * To add this component to any component it will be used:
         *
         * NB: You can use any method best suited for you to grant access to this feature by
         * using v-if and passing your logic.
         * eg: <span v-if='true'><CustomSMSButton/></span>
         *
         * 1.   Import the CustomSMSButton into any component and position as desired
         *      NB: Add only customer or order as a props DO NOT ADD BOTH AT THE SAME TIME!.
         *      NB: The order passed as a prop must be an instance of the
         *      Order, OrderWithPromiseCall class from the Amortization.js
         *      If Order is supplied the sms sent is linked to an order
         *      If customer is supplied then its just an sms that is not tied to any reminder.
         *      Add a :key prop when adding the component for performance purposes.(Recommended)
         *
         * 2.   On the parent component(usually the immediate child component on the
         *      index component for the portal this component is used as a sub-component)
         *      eg. for the use case on the sales list -> Root/App/Index/AllOrdersList is where the command following is added.
         *      To get this component structure use vue-devtools.
         *      NB: this is step is important as it cleans up the DOM when the modal is not in use.
         *
         *      ...mapActions('ModalAccess', [
         *          'addCustomerOptionsModalsToDom',
         *          'removeCustomerOptionsModalsFromDom'
         *      ])
         *
         *      Map the actions above in the method for the component (eg the AllOrdersList)
         *      this.addCustomerOptionsModalsToDom(); add this to the created hook to add the modal to the DOM
         *      this.removeCustomerOptionsModalsFromDom(); add this to the destroyed hook to remove the modal from the DOM
         *      The modal is added to the root vue component App.vue and dynamically displayed based on the need.
         *
         * */
        props: {
            order: {default: null},
            customer: {default: null}
        },

        methods: {
            toggleModal(modalName) {
                EventBus.$emit(modalName, {order: this.order, customer: this.customer});
            }
        }
    };
</script>


