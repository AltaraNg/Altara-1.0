<template>
    <div>
        <div class="card-body p-5">
            <div class="clearfix w-100">
                <div class="form-group col-md-2 col-sm-6 px-md-3 px-1 float-left">
                    <label>Search Column</label>
                    <select class="custom-select w-100" v-model="query.search_column">
                        <option v-for="column in columns" :value="column">{{column}}</option>
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
                <div class="form-group col-md-2 col-sm-6 px-md-3 px-1 float-left">
                    <button class="btn btn-block bg-default mb-0"
                            @click="fetchIndexData()" style="margin-top:2rem;">
                        Filter
                    </button>
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


            <nav aria-label="Page navigation example" class="clearfix mx-3 mt-4" style="background: rgba(0,0,0,0.02);
    border-radius: 3px;
    border: 1px solid rgba(0,0,0,0.05);">
                <div class="float-left py-2 col-md-4 col-12">
                    Displaying {{model.from}} - {{model.to}} of {{model.total}} Customer(s)
                </div>
                <ul class="pagination justify-content-end float-right m-0  col-md-4 col-12">
                    <li class="page-item"><a class="page-link" @click="prev()">&laquo; Previous</a></li>
                    <li class="page-item"><a class="page-link active" href="#">1</a></li>

                    <input type="text" v-model="query.page" class="form-control"
                           @keyup.enter="fetchIndexData()">

                    <li class="page-item"><a class="page-link" href="#">2</a></li>
                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                    <li class="page-item"><a class="page-link" @click="next()">Next <i class="fas fa-arrow-circle-right"></i></a></li>
                </ul>
                <div class="float-right  col-md-4 col-12">
                    <span class="float-left py-2 px-2">Rows Per Page </span>
                    <input type="text" class="form-control float-left" placeholder="search..." v-model="query.per_page"
                           @keyup.enter="fetchIndexData()" style="width:60px">
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
                    //only change direction
                    if (this.query.direction === 'desc') {
                        this.query.direction = 'asc';
                    } else {
                        this.query.direction = 'desc';
                    }
                } else {
                    //change direction and column
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
                        console.log(response.data);
                        Vue.set(vm.$data, 'model', response.data.model);
                        Vue.set(vm.$data, 'columns', response.data.columns);

                    })
                    .catch(function (error) {

                    });
            }
        }
    }
</script>