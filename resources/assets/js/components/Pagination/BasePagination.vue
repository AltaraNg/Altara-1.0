<template>

        <ul class="pagination pagination-lg mb-0">
            <!---->
            <li :class="{'disabled':!first_page_url}" class="page-item">
                <a href="javascript:" @click="prev(1)" class="page-link">First</a>
            </li>
            <li :class="{'disabled':!prev_page_url }" class="page-item">
                <a href="javascript:" @click="prev()" class="page-link">prev</a>
            </li>
            <!---->
            <li class="page-item">
                <span class="page-link">Current Page: {{current_page}}</span>
            </li>
            <!---->
            <li :class="{'disabled':!next_page_url}" class="page-item">
                <a href="javascript:" @click="next()" class="page-link">Next</a>
            </li>
            <li :class="{'disabled':!last_page}" class="page-item">
                <a href="javascript:" @click="next(last_page)" class="page-link">Last</a>
            </li>
            <!---->
        </ul>

    </template>
        <script>
           export default {
                components: {
                },
                props: {
                    current_page: {
                        type: Number,
                        required: true
                    },

                    first_page_url: {
                        type: String,
                        required: true
                    },
                    prev_page_url: {
                        type: String,
                        required: true
                    },
                    next_page_url: {
                        type: String,
                        required: true
                    },
                    last_page: {
                        type: Number,
                        required: true
                    },
                },

                methods: {
                    next(page) {
                        this.$emit('next', page)
                    },
                    prev(page) {
                        this.$emit('prev', page)
                    },
                                   }
            }
        </script>
<
