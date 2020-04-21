<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <p>
            This is For test purposes
        </p>
    </div>
</template>

<script>
    export default {
        name: "Example",
        props: {
            msg: String
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
