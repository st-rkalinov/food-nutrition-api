<template>
    <div>
        <form class="-mt-8" @submit.prevent="submit">
            <div class="border-b border-b-2 pt-8 mt-8 relative">
                <label for="name" class="text-blue-400 font-bold absolute top-0">Name</label>
                <input type="text" name="name" id="name" placeholder="Food Name"
                       class="py-2 focus:outline-none w-full"
                       v-model="form.data.name"
                       @keydown="form.error.clearError('name')">

                <span class="text-red-600 text-sm" v-if="form.error.hasError('name')">
                    {{ form.error.getError('name') }}
                </span>
            </div>

            <div class="border-b border-b-2 pt-8 relative mt-8">
                <label for="brand" class="text-blue-400 font-bold absolute top-0">Brand</label>
                <input type="text" name="brand" id="brand" placeholder="Brand Name"
                       class="py-2 focus:outline-none w-full"
                       v-model="form.data.brand"
                       @keydown="form.error.clearError('brand')">

                <span class="text-red-600 text-sm" v-if="form.error.hasError('brand')">
                    {{ form.error.getError('brand') }}
                </span>
            </div>

            <div class="flex justify-between mt-8">
                <div class="border-b border-b-2 pt-8 relative w-1/2">
                    <label for="serving" class="text-blue-400 font-bold absolute top-0">Serving</label>
                    <input type="text" name="serving" id="serving" placeholder="Serving Size"
                           class="py-2 focus:outline-none w-full"
                           v-model="form.data.serving"
                           @keydown="form.error.clearError('serving')">

                    <span class="text-red-600 text-sm" v-if="form.error.hasError('serving')">
                        {{ form.error.getError('serving') }}
                    </span>
                </div>
                <div class="border-b border-b-2 pt-8 relative w-1/2">
                    <label for="unit" class="text-blue-400 font-bold absolute top-0">Unit</label>
                    <select name="unit" id="unit" class="focus:outline-none py-3 pr-8 text-gray-500 -ml-1 -mt-1 w-full"
                            v-model="form.data.unit"
                            @change="form.error.clearError('unit')">
                        <option value="gram">Gram</option>
                        <option value="milliliter">Milliliter</option>
                        <option value="kilogram">Kilogram</option>
                        <option value="liter">Liter</option>
                    </select>

                    <span class="text-red-600 text-sm" v-if="form.error.hasError('unit')">
                        {{ form.error.getError('unit') }}
                    </span>
                </div>
            </div>

            <div class="border-b border-b-2 pt-8 relative mt-8">
                <label for="calories" class="text-blue-400 font-bold absolute top-0">Calories</label>
                <input type="text" name="calories" id="calories" placeholder="Calories"
                       class="py-2 focus:outline-none w-full"
                       v-model="form.data.calories"
                       @keydown="form.error.clearError('calories')">

                <span class="text-red-600 text-sm" v-if="form.error.hasError('calories')">
                    {{ form.error.getError('calories') }}
                </span>
            </div>

            <div class="flex justify-between mt-8">
                <div class="border-b border-b-2 pt-8 relative w-1/2">
                    <label for="fat" class="text-blue-400 font-bold absolute top-0">Fat</label>
                    <input type="text" name="fat" id="fat" placeholder="Fat"
                           class="py-2 focus:outline-none w-full"
                           v-model="form.data.fat"
                           @keydown="form.error.clearError('fat')">

                    <span class="text-red-600 text-sm" v-if="form.error.hasError('fat')">
                        {{ form.error.getError('fat') }}
                    </span>
                </div>
                <div class="border-b border-b-2 pt-8 relative w-1/2">
                    <label for="fat_satured" class="text-blue-400 font-bold absolute top-0">Satured Fat</label>
                    <input type="text" name="fat_satured" id="fat_satured" placeholder="Satured Fat"
                           class="py-2 focus:outline-none w-full"
                           v-model="form.data.fat_satured"
                           @keydown="form.error.clearError('fat_satured')">

                    <span class="text-red-600 text-sm" v-if="form.error.hasError('fat_satured')">
                        {{ form.error.getError('fat_satured') }}
                    </span>
                </div>
            </div>

            <div class="border-b border-b-2 pt-8 relative mt-8">
                <label for="cholesterol" class="text-blue-400 font-bold absolute top-0">Cholesterol</label>
                <input type="text" name="cholesterol" id="cholesterol" placeholder="Cholesterol"
                       class="py-2 focus:outline-none w-full"
                       v-model="form.data.cholesterol"
                       @keydown="form.error.clearError('cholesterol')">

                <span class="text-red-600 text-sm" v-if="form.error.hasError('cholesterol')">
                    {{ form.error.getError('cholesterol') }}
                </span>
            </div>

            <div class="border-b border-b-2 pt-8 relative mt-8">
                <label for="salt" class="text-blue-400 font-bold absolute top-0">Salt</label>
                <input type="text" name="salt" id="salt" placeholder="Salt"
                       class="py-2 focus:outline-none w-full"
                       v-model="form.data.salt"
                       @keydown="form.error.clearError('salt')">

                <span class="text-red-600 text-sm" v-if="form.error.hasError('salt')">
                    {{ form.error.getError('salt') }}
                </span>
            </div>

            <div class="flex justify-between mt-8">
                <div class="border-b border-b-2 pt-8 relative w-1/3">
                    <label for="carbohydrates" class="text-blue-400 font-bold absolute top-0">Carbohydrates</label>
                    <input type="text" name="carbohydrates" id="carbohydrates" placeholder="Carbohydrates"
                           class="py-2 focus:outline-none w-full"
                           v-model="form.data.carbohydrates"
                           @keydown="form.error.clearError('carbohydrates')">


                    <span class="text-red-600 text-sm" v-if="form.error.hasError('carbohydrates')">
                        {{ form.error.getError('carbohydrates') }}
                    </span>
                </div>

                <div class="border-b border-b-2 pt-8 relative w-1/3">
                    <label for="carbohydrates_fiber" class="text-blue-400 font-bold absolute top-0">Carbohydrates
                        Fiber</label>
                    <input type="text" name="carbohydrates_fiber" id="carbohydrates_fiber"
                           placeholder="Carbohydrates Fiber"
                           class="py-2 focus:outline-none w-full"
                           v-model="form.data.carbohydrates_fiber"
                           @keydown="form.error.clearError('carbohydrates_fiber')">

                    <span class="text-red-600 text-sm" v-if="form.error.hasError('carbohydrates_fiber')">
                        {{ form.error.getError('carbohydrates_fiber') }}
                    </span>
                </div>

                <div class="border-b border-b-2 pt-8 relative w-1/3">
                    <label for="carbohydrates_sugars" class="text-blue-400 font-bold absolute top-0">Carbohydrates
                        Sugars</label>
                    <input type="text" name="carbohydrates_sugars" id="carbohydrates_sugars"
                           placeholder="Carbohydrates Sugars"
                           class="py-2 focus:outline-none w-full"
                           v-model="form.data.carbohydrates_sugars"
                           @keydown="form.error.clearError('carbohydrates_sugars')">

                    <span class="text-red-600 text-sm" v-if="form.error.hasError('carbohydrates_sugars')">
                        {{ form.error.getError('carbohydrates_sugars') }}
                    </span>
                </div>
            </div>

            <div class="border-b border-b-2 pt-8 relative mt-8">
                <label for="protein" class="text-blue-400 font-bold absolute top-0">Protein</label>
                <input type="text" name="protein" id="protein" placeholder="Protein"
                       class="py-2 focus:outline-none w-full"
                       v-model="form.data.protein"
                       @keydown="form.error.clearError('protein')">

                <span class="text-red-600 text-sm" v-if="form.error.hasError('protein')">
                    {{ form.error.getError('protein') }}
                </span>
            </div>

            <div class="pt-8 mt-16 text-right">
                <input type="checkbox" name="public" id="public" v-model="form.data.public" @change="form.error.clearError('public')">
                <label for="public" class="text-blue-400 font-bold pl-3">Make the food visible for the other
                    users</label>

                <span class="text-red-600 text-sm block" v-if="form.error.hasError('public')">
                    {{ form.error.getError('public') }}
                </span>
            </div>

            <div class="flex justify-end py-16 px-10">
                <a href="#"
                   class="py-2 px-4 text-red-400 border border-red-400 rounded-lg mr-5 hover:font-bold">Cancel</a>
                <button type="submit"
                        class="py-2 px-4 text-green-400 border border-green-400 rounded-lg hover:font-bold">Create
                </button>
            </div>
        </form>
    </div>
</template>

<script>
    import Form from "../../classes/Form";

    export default {
        name: "FoodsCreate",
        data() {
            return {
                foodFields: {
                    'name': '',
                    'brand': null,
                    'serving': 0,
                    'unit': 'gram',
                    'calories': 0,
                    'fat': 0,
                    'fat_satured': 0,
                    'cholesterol': 0,
                    'salt': 0,
                    'carbohydrates': 0,
                    'carbohydrates_fiber': 0,
                    'carbohydrates_sugars': 0,
                    'protein': 0,
                    'public': false,
                    'api_token': 'DoXQHTHsO3uOtZ5FwAMhMhDxDPK6t0PU3Dk46zvATC2LTbxACrvAMgYVlz1V',
                },
                form: null,
            }
        },
        created() {
            this.form = new Form(this.foodFields);
        },
        methods: {
            submit() {
                this.form.submit('/api/foods');
            }
        }
    }
</script>

<style scoped>

</style>
