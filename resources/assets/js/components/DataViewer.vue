<template>
    <div>
        <div class="card-body p-5">
            <div class="clearfix w-100">
                <div class="form-group col-md-2 col-sm-6 px-md-3 px-1 float-left">
                    <label>Search Column</label>
                    <select class="custom-select w-100" v-model="query.search_column">
                        <option v-for="column in columns" :value="column">{{column | capitalize}}</option>
                    </select>
                </div>
                <div class="form-group col-md-2 col-sm-6 px-md-3 px-1 float-left">
                    <label>Search Operator</label>
                    <select class="custom-select w-100" v-model="query.search_operator">
                        <option v-for="(value, key) in operators" :value="key">{{value}}</option>
                    </select>
                </div>
                <div class="form-group col-md-6 col-sm-6 px-md-3 px-1 float-left">
                    <label>Search Input</label>
                    <input type="text"
                           class="form-control"
                           placeholder="search..."
                           v-model="query.search_input"
                           @keyup.enter="fetchIndexData()">
                </div>
                <div class="form-group col-md-2 col-sm-6 px-md-3 px-1 pt-2 float-left">
                    <button class="btn btn-block bg-default mb-0 mt-4" @click="fetchIndexData()">Filter</button>
                </div>
            </div>
            <div class="px-3 mt-3 table-responsive">
                <table class="table m-0  table-bordered table-hover">
                    <thead class="thead-light">
                    <tr>
                        <th v-for="column in columns" @click="toggleOrder(column)" scope="col">
                            <span>{{column | capitalize}}</span>
                            <span class="dv-table-column" v-if="column === query.column">
                                <span v-if="query.direction === 'desc'">&uarr;</span>
                                <span v-else>&darr;</span>
                            </span>
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="row in model.data">
                        <td v-for="(value,key) in row">{{value}}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <nav aria-label="Page navigation example" class="clearfix mx-3 mt-4 py-3">
                <span class="float-left py-1">
                    Displaying {{model.from}} - {{model.to}} of {{model.total}} Customer(s)
                </span>
                <ul class="pagination justify-content-end float-right m-0">
                    <li class="page-item">
                        <a class="page-link" @click="prev()"><i class="fas fa-arrow-circle-left"></i></a>
                    </li>

                    <!--<input type="text" v-model="query.page" class="form-control"
                           @keyup.enter="fetchIndexData()">-->
                    <!--<li class="page-item"><a class="page-link active" href="#">1</a></li>
                    <li class="page-item"><a class="page-link" href="#">2</a></li>-->
                    <li class="page-item"><span class="page-link">Current Page: {{model.current_page}}</span></li>
                    <li class="page-item">
                        <a class="page-link" @click="next()"><i class="fas fa-arrow-circle-right"></i></a>
                    </li>
                </ul>
                <div class="float-right mr-5">
                    <span class="float-left py-2 px-2">Rows Per Page </span>
                    <input type="text" class="form-control float-left" placeholder="search..." v-model="query.per_page"
                           @keyup.enter="fetchIndexData()" style="width:50px">
                </div>
            </nav>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue';
    import {get} from '../helpers/api';

    export default {
        data() {
            return {
                model: {},
                columns: {},
                query: {
                    page: 1,
                    column: 'id',
                    direction: 'asc',
                    per_page: 10,
                    search_column: 'id',
                    search_operator: 'greater_than',
                    search_input: 0
                },
                operators: {
                    equal: '=',
                    not_equal: '<>',
                    less_than: '<',
                    greater_than: '>',
                    less_than_or_equal_to: '<=',
                    greater_than_or_equal_to: '>=',
                    in: 'IN',
                    like: 'LIKE',
                }
            }
        },
        props: ['source', 'title'],
        created() {
            this.fetchIndexData();
        },
        methods: {
            next() {
                if (this.model.next_page_url) {
                    this.query.page++;
                    this.fetchIndexData();
                }
            },
            prev() {
                if (this.model.prev_page_url) {
                    this.query.page--;
                    this.fetchIndexData();
                }
            },
            toggleOrder(column) {
                if (column === this.query.column) {
                    (this.query.direction === 'desc') ? this.query.direction = 'asc' : this.query.direction = 'desc';
                } else {
                    this.query.column = column;
                    this.query.direcntion = 'asc';
                }
                this.fetchIndexData();
            },
            fetchIndexData() {
                var vm = this;
                get(
                    `${this.source}` +
                    `?page=${this.query.page}` +
                    `&column=${this.query.column}` +
                    `&per_page=${this.query.per_page}` +
                    `&direction=${this.query.direction}` +
                    `&search_input=${this.query.search_input}` +
                    `&search_column=${this.query.search_column}` +
                    `&search_operator=${this.query.search_operator}`)
                    .then(function (response) {
                        Vue.set(vm.$data, 'model', response.data.model);
                        Vue.set(vm.$data, 'columns', response.data.columns);

                    })
                    .catch(function (error) {
                    });
            }
        }
    }
</script>