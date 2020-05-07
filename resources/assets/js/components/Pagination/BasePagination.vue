<template>
    <div class="container row py-4 px-5">
        <div class="col-4 text-capitalize">
            displaying page
            <span class="font-weight-bold">{{ currentPage }}</span> of
            <span class="font-weight-bold">{{ pageCount }}</span>
        </div>

        <div class="col-4 text-center w-75 ">
            <BaseButton
                :disabled="isPreviousButtonDisabled"
                @click.native="previousPage"
                class="my-button"
            >
                <i class="fas fa-arrow-circle-left"></i>
            </BaseButton>

            <div class="page-list">
                <span
                    v-for="page in pageList"
                    @click.native="onLoadPage(page)"
                    >{{ page }}</span
                >
            </div>

            <BaseButton
                :disabled="isNextButtonDisabled"
                @click.native="nextPage"
                class="my-button"
            >
                <i class="fas fa-arrow-circle-right"></i>
            </BaseButton>
        </div>
        <div class="col-4 text-right">
            <span class="py-2 pr-3 float-left">Rows Per Page </span>
            <input
                @keyup.enter="fetchPerPage"
                class="form-control w-25"
                placeholder="search..."
                type="text"
                v-model="perPage"
            />
        </div>
    </div>
</template>
<script>
import BaseButton from "../../components/Pagination/BaseButton";
import { get } from "../../utilities/api";
// import BasePaginationTrigger from '../../components/Pagination/BasePaginationTrigger'
export default {
    components: {
        BaseButton
        // BasePaginationTrigger
    },
    props: {
        path: {
            type: String,
            required: true
        },
        pageCount: {
            type: Number,
            required: true
        },
        perPage: {
            type: Number,
            required: true
        },
        firstPageUrl: {
            type: String,
            required: true
        },
        lastPageUrl: {
            type: String,
            required: true
        },
        from: {
            type: Number,
            required: true
        },
        nextPageUrl: {
            type: String,
            required: true
        },
        previousPageUrl: {
            type: String,
            required: true
        },
        currentPage: {
            type: Number,
            required: true
        },
        to: {
            type: Number,
            required: true
        },
        total: {
            type: Number,
            required: true
        }
    },
    computed: {
        isPreviousButtonDisabled() {
            return this.currentPage === 1;
        },
        isNextButtonDisabled() {
            return this.currentPage === this.pageCount;
        },
        pageList(){
            let pageArray = [];
            for (int i=1; i>=this.pageCount; i++){
                pageArray.push(i)
            }
            return pageArray;
        }
    },
    methods: {
        nextPage() {
            this.$emit("nextPage");
        },
        previousPage() {
            this.$emit("previousPage");
        },
        onLoadPage(value) {
            this.$emit("loadPage", value);
        },
        fetchPerPage(value) {
            this.$emit("fetchPerPage", value);
        }
    }
};
</script>
<style>
.my-button {
    font-size: 2rem;
    border: 1px solid;
    margin: 2px 8px;
    width: 50%;
}
</style>
