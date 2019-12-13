<template>
    <FoodsList endpoint="/my-foods" :user_id="this.$parent.user.id"/>
</template>

<script>
    import FoodsList from "../FoodsList";

    export default {
        name: "UserFoodsIndex",
        components: { FoodsList }
    }
</script>

<style scoped>

</style>
