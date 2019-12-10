<template>
    <FoodsList endpoint="/api/foods"/>
</template>

<script>
    import FoodsList from "../FoodsList";

    export default {
        name: "FoodsShow",
        components: {
            FoodsList
        },
    }
</script>

<style scoped>

</style>
