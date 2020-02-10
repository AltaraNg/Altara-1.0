<template>
    <div class="position-relative d-flex align-items-stretch">
        <router-link
            :tag="link ? 'a' : 'span'"
            :class="buttonClass + ' text-uppercase'"
            :to="getLink" data-function="display">
            {{status.split('-').join(' ')}}
            <i :class="`ml-3 fas fa-${isApproved ? 'check' : 'times'}`"></i>
        </router-link>
        <span :class="buttonClass + ' dropdown-toggle dropdown-toggle-split d-flex align-items-center'"
              data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        </span>
        <div class="dropdown-menu">
            <a v-for="option in filteredOptions"
               class="dropdown-item"
               href="javascript:"
               :key="option.modal"
               @click="toggleModal(option.modal)">
                {{option.caption}}
            </a>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from "vuex";
    import {EventBus} from "../utilities/event-bus";

    export default {
        props: ['link', 'size', 'customer'],

        data() {
            return {
                status: null,
                unfilteredOptions: [
                    {
                        caption: 'Change sales agent',
                        modal: 'toggleChangeCustomerManagerModal',
                        authAccess: 'DSACaptain'
                    }
                ]
            }
        },

        methods: {
            toggleModal(modalName) {
                EventBus.$emit(modalName, this.customer);
            }
        },

        computed: {
            ...mapGetters(['auth']),

            filteredOptions() {
                return this.unfilteredOptions.filter(option => this.auth(option.authAccess))
            },

            isApproved() {
                return this.$getCustomerApprovalStatus(this.customer.verification);
            },

            buttonClass() {
                return this.size &&
                    (this.link ? `status status-sm ${this.status}` : `status mt-md-5 my-sm-2 mt-0 ${this.status}`);
            },

            getLink() {
                if (this.link) {
                    if (this.auth('DVAAccess')) return 'dva/' + this.link;
                    if (this.auth('ALTARAPAYAccess')) return 'altarapay/' + this.link;
                }
                return '#';
            }
        },

        created() {
            this.status = this.isApproved ? 'approved' : 'not-approved';
        }
    };
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
