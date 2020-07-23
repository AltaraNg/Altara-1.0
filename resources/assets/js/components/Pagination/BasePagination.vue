<template>

    <div class="mb-5 px-0 row align-items-center">
        <div class="w-100 mb-4 mt-5 mx-0 hr"></div>
        <div class="clearfix w-100 mt-4 d-flex bd-highlight">

            <div class="col d-flex justify-content-start align-items-center pl-0">
                <strong class="light-heading float-left">
                    Displaying: {{pageParam.from}} - {{pageParam.to}} of {{pageParam.total}}
                </strong>
            </div>

            <div class="col d-flex justify-content-center align-items-center">
                <div class="mr-5">
                    <span class="d-inline light-heading mr-2">set current Page</span>
                    <input class="d-inline form-control " type="number" v-model="page"
                           style="max-width: 50px;" @keyup.enter="fetchData(page)">
                </div>
                <div class="ml-5">
                    <span class="d-inline light-heading mr-2">set page-size</span>
                    <input class="d-inline form-control" type="number" v-model="pageParam.page_size"
                           style="max-width: 50px;" @keyup.enter="fetchData(pageParam.page_size)">
                </div>
            </div>

            <nav class="col d-flex justify-content-end align-items-center pr-0">
                <ul class="pagination pagination-lg mb-0">
                    <!---->
                    <li :class="{'disabled':!pageParam.first_page_url}" class="page-item">
                        <a href="javascript:" @click="prev(1)" class="page-link">First</a>
                    </li>
                    <li :class="{'disabled':!pageParam.prev_page_url }" class="page-item">
                        <a href="javascript:" @click="prev()" class="page-link">Prev</a>
                    </li>
                    <!---->
                    <li class="page-item ">
                        <span class="page-link w-100">page:{{pageParam.current_page}}</span>
                    </li>
                    <!---->
                    <li :class="{'disabled':!pageParam.next_page_url}" class="page-item">
                        <a href="javascript:" @click="next()" class="page-link">Next</a>
                    </li>
                    <li :class="{'disabled':!pageParam.last_page_url}" class="page-item">
                        <a href="javascript:" @click="next(pageParam.last_page)" class="page-link">Last</a>
                    </li>
                    <!---->
                </ul>
            </nav>
        </div>
    </div>

    </template>
        <script>
           export default {
                components: {
                },
                props: {
                    pageParam: {
                        type: Object,
                        required: true
                    },
                    page:{
                        type: Number,
                        required: false
                    }

                },

                methods: {
                    next(page) {
                        this.$emit('next', page)
                    },
                    prev(page) {
                        this.$emit('prev', page)
                    },
                    fetchData(data){
                        this.$emit('fetchData', data)
                    }
                                   }
            }
        </script>
<
