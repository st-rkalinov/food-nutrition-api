<template>
    <div>
        <form class="-mt-8" @submit.prevent="submit">
            <InputTextField name="name"
                            :placeholder="foodData.name.placeholder"
                            :label="foodData.name.label"
                            :defaultValue="foodData.name.defValue"
                            :dataValue="form.data.name"
                            :errors="form.error"
                            @update:field="form.data.name = $event"/>

            <InputTextField name="brand"
                            :placeholder="foodData.brand.placeholder"
                            :label="foodData.brand.label"
                            :default-value="foodData.brand.defValue"
                            :dataValue="form.data.brand"
                            :errors="form.error"
                            @update:field="form.data.brand = $event"/>

            <div class="flex justify-between flex-wrap sm:flex-col lg:flex-row flex-col">
                <InputTextField name="serving"
                                :placeholder="foodData.serving.placeholder"
                                :label="foodData.serving.label"
                                :default-value="foodData.serving.defValue"
                                :dataValue="form.data.serving"
                                :errors="form.error"
                                classes="sm:w-full lg:w-1/2 w-full"
                                @update:field="form.data.serving = $event"/>

                <div class="border-b border-b-2 relative pt-16 sm:w-full lg:w-1/2 w-full">
                    <label for="unit" class="text-blue-400 font-bold absolute top-1/3">
                        {{ foodData.unit.label }}

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

            <InputTextField name="calories"
                            :placeholder="foodData.calories.placeholder"
                            :label="foodData.calories.label"
                            :default-value="foodData.calories.defValue"
                            :dataValue="form.data.calories"
                            :errors="form.error"
                            @update:field="form.data.calories = $event"/>

            <div class="flex justify-between sm:flex-col lg:flex-row flex-col">
                <InputTextField name="fat"
                                :placeholder="foodData.fat.placeholder"
                                :label="foodData.fat.label"
                                :default-value="foodData.fat.defValue"
                                :dataValue="form.data.fat"
                                :errors="form.error"
                                classes="sm:w-full lg:w-1/2 w-full"
                                @update:field="form.data.fat = $event"/>

                <InputTextField name="fat_satured"
                                :placeholder="foodData.fat_satured.placeholder"
                                :label="foodData.fat_satured.label"
                                :default-value="foodData.fat_satured.defValue"
                                :dataValue="form.data.fat_satured"
                                :errors="form.error"
                                classes="sm:w-full lg:w-1/2 w-full"
                                @update:field="form.data.fat_satured = $event"/>
            </div>

            <InputTextField name="cholesterol"
                            :placeholder="foodData.cholesterol.placeholder"
                            :label="foodData.cholesterol.label"
                            :default-value="foodData.cholesterol.defValue"
                            :dataValue="form.data.cholesterol"
                            :errors="form.error"
                            @update:field="form.data.cholesterol = $event"/>

            <InputTextField name="salt"
                            :placeholder="foodData.salt.placeholder"
                            :label="foodData.salt.label"
                            :default-value="foodData.salt.defValue"
                            :dataValue="form.data.salt"
                            :errors="form.error"
                            @update:field="form.data.salt = $event"/>

            <div class="flex justify-between sm:flex-col lg:flex-row flex-col">
                <InputTextField name="carbohydrates"
                                :placeholder="foodData.carbohydrates.placeholder"
                                :label="foodData.carbohydrates.label"
                                :default-value="foodData.carbohydrates.defValue"
                                :dataValue="form.data.carbohydrates"
                                :errors="form.error"
                                classes="sm:w-full lg:w-1/3 w-full"
                                @update:field="form.data.carbohydrates = $event"/>

                <InputTextField name="carbohydrates_fiber"
                                :placeholder="foodData.carbohydrates_fiber.placeholder"
                                :label="foodData.carbohydrates_fiber.label"
                                :default-value="foodData.carbohydrates_fiber.defValue"
                                :dataValue="form.data.carbohydrates_fiber"
                                :errors="form.error"
                                classes="sm:w-full lg:w-1/3 w-full"
                                @update:field="form.data.carbohydrates_fiber = $event"/>

                <InputTextField name="carbohydrates_sugars"
                                :placeholder="foodData.carbohydrates_sugars.placeholder"
                                :label="foodData.carbohydrates_sugars.label"
                                :default-value="foodData.carbohydrates_sugars.defValue"
                                :dataValue="form.data.carbohydrates_sugars"
                                :errors="form.error"
                                classes="sm:w-full lg:w-1/3 w-full"
                                @update:field="form.data.carbohydrates_sugars = $event"/>
            </div>

            <InputTextField name="protein"
                            :placeholder="foodData.protein.placeholder"
                            :label="foodData.protein.label"
                            :default-value="foodData.protein.defValue"
                            :dataValue="form.data.protein"
                            :errors="form.error"
                            @update:field="form.data.protein = $event"/>

            <div class="pt-8 mt-16 text-right">
                <input type="checkbox" name="public" id="public" v-model="form.data.public"
                       @change="form.error.clearError('public')">
                <label for="public" class="text-blue-400 font-bold pl-3">{{ foodData.public.label }}</label>

                <span class="text-red-600 text-sm block" v-if="form.error.hasError('public')">
                    {{ form.error.getError('public') }}
                </span>
            </div>

            <div class="flex justify-end py-16 px-10">
                <a href="#"
                   class="btn btn-danger mr-5"
                   @click.prevent="$router.back()">Cancel</a>
                <button type="submit"
                        class="btn btn-success">Create
                </button>
            </div>
        </form>
    </div>
</template>

<script>
    import Form from "../../classes/Form";
    import InputTextField from "../InputTextField";
    import ResponseHandler from "../../classes/ResponseHandler";
    import {foodResourceData} from "../../data/foodResourceData";
    import {defValues} from "../../data/foodResourceData";

    export default {
        name: "FoodsCreate",
        components: {
            InputTextField
        },
        data() {
            return {
                foodData: foodResourceData,
                foodDataDefValues: defValues,
                form: null,
                responseHandler: new ResponseHandler(this.$router, 'create'),
            }
        },
        created() {
            this.form = new Form(this.foodDataDefValues);
        },
        methods: {
            submit() {
                this.form.submit('/api/foods')
                    .then((response) => {
                        this.responseHandler.handle(response.status, response.data.data.food_id);
                        this.form.reset();
                    })
                    .catch((error) => {
                        let response = error.response;
                        this.responseHandler.handle(response.status);

                        if (error.response.status === 422) {
                            this.form.error.setErrors(response.data.errors);
                        }
                    })
            }
        }
    }
</script>

<style scoped>

</style>
