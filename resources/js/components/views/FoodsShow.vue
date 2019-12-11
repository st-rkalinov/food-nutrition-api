<template>
    <FoodsList endpoint="/api/foods/" :user_id="this.$parent.user.id"/>
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
