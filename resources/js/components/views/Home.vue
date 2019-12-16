<template>
    <div>
        <h1 class="text-blue-600 font-bold text-4xl text-center">Welcome to Food Nutrition SPA App !</h1>

        <div class="flex justify-around pt-32">
            <router-link :to="{ name: 'create' }" class="btn btn-primary">Add New Food</router-link>
            <router-link :to="{ name: 'foods' }" class="btn btn-primary">See All Foods</router-link>
            <router-link :to="{ name: 'user-foods' }" class="btn btn-primary">See All Your Foods</router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Home"
    }
</script>

<style scoped>

</style>
