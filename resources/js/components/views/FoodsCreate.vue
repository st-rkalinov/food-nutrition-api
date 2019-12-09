<template>
    <div>
        <form class="-mt-8" @submit.prevent="submit">
            <InputTextField name="name" placeholder="Food Name" label="Name"
                            :defaultValue="form.originalData.name"
                            :dataValue="form.data.name"
                            :errors="form.error"
                            @update:field="form.data.name = $event"/>

            <InputTextField name="brand" placeholder="Brand Name" label="Brand"
                            :default-value="form.originalData.brand"
                            :dataValue="form.data.brand"
                            :errors="form.error"
                            @update:field="form.data.brand = $event"/>

            <div class="flex justify-between flex-wrap sm:flex-col lg:flex-row flex-col">
                <InputTextField name="serving" placeholder="Serving Size" label="Serving"
                                :default-value="form.originalData.serving"
                                :dataValue="form.data.serving"
                                :errors="form.error"
                                classes="sm:w-full lg:w-1/2 w-full"
                                @update:field="form.data.serving = $event"/>

                <div class="border-b border-b-2 relative pt-16 sm:w-full lg:w-1/2 w-full">
                    <label for="unit" class="text-blue-400 font-bold absolute top-1/3">
                        Unit

                        <span class="pl-12 text-red-600 text-sm" v-if="form.error.hasError('unit')">
                        {{ form.error.getError('unit') }}
                    </span>
                    </label>
                    <select name="unit" id="unit" class="focus:outline-none py-3 pr-8 text-gray-500 -ml-1 -mt-1 w-full"
                            v-model="form.data.unit"
                            @change="form.error.clearError('unit')">
                        <option value="gram">Gram</option>
                        <option value="milliliter">Milliliter</option>
                        <option value="kilogram">Kilogram</option>
                        <option value="liter">Liter</option>
                    </select>

                </div>
            </div>

            <InputTextField name="calories" placeholder="Calories" label="Calories"
                            :default-value="form.originalData.calories"
                            :dataValue="form.data.calories"
                            :errors="form.error"
                            @update:field="form.data.calories = $event"/>

            <div class="flex justify-between sm:flex-col lg:flex-row flex-col">
                <InputTextField name="fat" placeholder="Fat" label="Fat"
                                :default-value="form.originalData.fat"
                                :dataValue="form.data.fat"
                                :errors="form.error"
                                classes="sm:w-full lg:w-1/2 w-full"
                                @update:field="form.data.fat = $event"/>

                <InputTextField name="fat_satured" placeholder="Satured Fat" label="Satured Fat"
                                :default-value="form.originalData.fat_satured"
                                :dataValue="form.data.fat_satured"
                                :errors="form.error"
                                classes="sm:w-full lg:w-1/2 w-full"
                                @update:field="form.data.fat_satured = $event"/>
            </div>

            <InputTextField name="cholesterol" placeholder="Cholesterol" label="Cholesterol"
                            :default-value="form.originalData.cholesterol"
                            :dataValue="form.data.cholesterol"
                            :errors="form.error"
                            @update:field="form.data.cholesterol = $event"/>

            <InputTextField name="salt" placeholder="Salt" label="Salt"
                            :default-value="form.originalData.salt"
                            :dataValue="form.data.salt"
                            :errors="form.error"
                            @update:field="form.data.salt = $event"/>

            <div class="flex justify-between sm:flex-col lg:flex-row flex-col">
                <InputTextField name="carbohydrates" placeholder="Carbohydrates" label="Carbohydrates"
                                :default-value="form.originalData.carbohydrates"
                                :dataValue="form.data.carbohydrates"
                                :errors="form.error"
                                classes="sm:w-full lg:w-1/3 w-full"
                                @update:field="form.data.carbohydrates = $event"/>

                <InputTextField name="carbohydrates_fiber" placeholder="Carbohydrates Fiber" label="Carbohydrates Fiber"
                                :default-value="form.originalData.carbohydrates_fiber"
                                :dataValue="form.data.carbohydrates_fiber"
                                :errors="form.error"
                                classes="sm:w-full lg:w-1/3 w-full"
                                @update:field="form.data.carbohydrates_fiber = $event"/>

                <InputTextField name="carbohydrates_sugars" placeholder="Carbohydrates Sugars"
                                label="Carbohydrates Sugars"
                                :default-value="form.originalData.carbohydrates_sugars"
                                :dataValue="form.data.carbohydrates_sugars"
                                :errors="form.error"
                                classes="sm:w-full lg:w-1/3 w-full"
                                @update:field="form.data.carbohydrates_sugars = $event"/>
            </div>

            <InputTextField name="protein" placeholder="Protein" label="Protein"
                            :default-value="form.originalData.protein"
                            :dataValue="form.data.protein"
                            :errors="form.error"
                            @update:field="form.data.protein = $event"/>

            <div class="pt-8 mt-16 text-right">
                <input type="checkbox" name="public" id="public" v-model="form.data.public"
                       @change="form.error.clearError('public')">
                <label for="public" class="text-blue-400 font-bold pl-3">Make the food visible for the other
                    users</label>

                <span class="text-red-600 text-sm block" v-if="form.error.hasError('public')">
                    {{ form.error.getError('public') }}
                </span>
            </div>

            <div class="flex justify-end py-16 px-10">
                <a href="#"
                   class="py-2 px-4 text-red-400 border border-red-400 rounded-lg mr-5 hover:font-bold" @click.prevent="$router.back()">Cancel</a>
                <button type="submit"
                        class="py-2 px-4 text-green-400 border border-green-400 rounded-lg hover:font-bold">Create
                </button>
            </div>
        </form>
    </div>
</template>

<script>
    import Form from "../../classes/Form";
    import InputTextField from "../InputTextField";
    import Alert from "../../classes/Alert";

    export default {
        name: "FoodsCreate",
        components: {
            InputTextField
        },
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
                },
                form: null,
            }
        },
        created() {
            this.form = new Form(this.foodFields);
        },
        methods: {
            submit() {
                this.form.submit('/api/foods')
                    .then((response) => {
                        let alert = new Alert('create', response.status);
                        alert.show()
                            .then((clickedButton) => {
                                if (clickedButton) {
                                    this.$router.push('google.com');
                                }
                            });

                        this.form.reset();
                    })
                    .catch(error => {
                        let errors = error.response.data.errors;
                        let alert = new Alert('create', error.response.status);
                        alert.show();

                        if(error.response.status === 422) {
                            for (let errorField in errors) {
                                this.form.error[errorField] = errors[errorField][0];
                            }
                        }
                    })
            }
        }
    }
</script>

<style scoped>

</style>
