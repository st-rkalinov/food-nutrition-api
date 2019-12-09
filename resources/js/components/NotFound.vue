<template>
    <div>
        <img src="../../images/sad-face.png" alt="Sad face" class="w-32 h-32 mx-auto my-0">

        <h1 class="text-4xl text-center font-bold py-10 text-blue-400">Page Not Found</h1>

        <div class="flex justify-around flex-wrap p-10">
            <button @click.prevent="$router.back()"
                    class="p-3 rounded-full border-2 border-blue-400 text-blue-400 hover:text-white hover:bg-blue-400 hover:font-bold">
                Go to previous page
            </button>
            <button @click.prevent="$router.push('/api/foods/')"
                    class="p-3 rounded-full border-2 border-blue-400 text-blue-400 hover:text-white hover:bg-blue-400 hover:font-bold">
                Go to home page
            </button>
        </div>

    </div>
</template>

<script>
    export default {
        name: "NotFound",
    }
</script>

<style scoped>

</style>
