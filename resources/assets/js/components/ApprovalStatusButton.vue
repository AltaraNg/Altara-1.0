<template>
    <div class="position-relative d-flex align-items-stretch">
        <router-link
                :tag="link ? 'a' : 'span'"
                :class="buttonClass + ' text-uppercase'"
                :to="link && auth('DVAAccess') ? link : ''" data-function="display">
            {{status.split('-').join(' ')}}
            <i :class="`ml-3 fas fa-${isApproved ? 'check' : 'times'}`"></i>
        </router-link>
        <span :class="buttonClass + ' dropdown-toggle dropdown-toggle-split d-flex align-items-center'"
              data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        </span>
        <div class="dropdown-menu">
            <a v-for="option in options" class="dropdown-item" href="javascript:"
               @click="toggleModal(option.modal)" v-if="auth(option.authAccess)">
                {{option.caption}}
            </a>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from "vuex";
    import {EventBus} from "../utilities/event-bus";

    export default {
        props: ['link', 'size', 'isApproved', 'customerName'],

        data() {
            return {
                status: null,
                options: [
                    {
                        caption: 'Change sales agent',
                        modal: 'toggleChangeCustomerManagerModal',
                        authAccess: 'DSACaptain'
                    }, {
                        caption: 'Send message',
                        modal: 'SMSModal',
                        authAccess: 'DVAAccess'
                    }
                ]
            }
        },

        methods: {
            toggleModal(modalName) {
                const data = {
                    customerId: this.$vnode.key,
                    customerName: this.customerName
                };
                EventBus.$emit(modalName, data);
            }
        },

        computed: {
            ...mapGetters(['auth']),

            buttonClass() {
                return this.size &&
                    (this.link ? `status status-sm ${this.status}` : `status mt-md-5 my-sm-2 mt-0 ${this.status}`);
            }
        },

        created() {
            this.status = this.isApproved ? 'approved' : 'not-approved';
        }
    }
</script>


<style scoped>
    [data-function="display"].status {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
    }

    .status.dropdown-toggle {
        border-top-left-radius: 0 !important;
        border-bottom-left-radius: 0 !important;
        padding: 1rem 1rem !important;
    }

    .approved.dropdown-toggle {
        background: linear-gradient(180deg, #00a368 0%, #00662a 100%)
    }

    .not-approved.dropdown-toggle {
        background: linear-gradient(180deg, #e12424 0%, #a40000 100%)
    }

    .dropdown-toggle::after {
        border-top: .6em solid;
        border-right: .6em solid transparent;
        border-left: .6em solid transparent;
    }
</style>