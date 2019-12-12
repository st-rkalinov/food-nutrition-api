<template>
    <div>
        <div v-if="isLoading" class="flex justify-center items-center h-screen">
            <img src="../../../images/25.gif" alt="" class="block w-50 h-50">
        </div>
        <div v-else-if="!isLoading && !hasErrors">
            <form class="-mt-8" @submit.prevent="submit">
                <InputTextField name="name" label="Name"
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
                        <select name="unit" id="unit"
                                class="focus:outline-none py-3 pr-8 text-gray-500 -ml-1 -mt-1 w-full"
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

                    <InputTextField name="carbohydrates_fiber" placeholder="Carbohydrates Fiber"
                                    label="Carbohydrates Fiber"
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
                       class="btn btn-danger mr-5"
                       @click.prevent="$router.back()">Cancel</a>
                    <button href="#" type="submit"
                            class="btn btn-success">Edit
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    import Form from "../../classes/Form";
    import InputTextField from "../InputTextField";
    import ErrorPage from "../ErrorPage";
    import Alert from "../../classes/Alert";

    export default {
        name: "FoodsEdit",
        components: {
            InputTextField, ErrorPage
        },
        data() {
            return {
                form: null,
                isLoading: true,
                hasErrors: false,
            }
        },
        methods: {
            submit() {
                this.form.submit('/api/foods/' + this.$route.params.id, 'patch')
                    .then((response) => {
                        let alert = new Alert('update', response.status);
                        alert.show()
                            .then((clickedButton) => {
                                if (clickedButton) {
                                    this.$router.push('/foods/' + response.data.data.food_id);
                                }
                            });

                        this.form.originalData = response.data.data;
                        this.form.reset();
                    })
                    .catch(error => {
                        let errors = error.response.data.errors;
                        let alert = new Alert('update', error.response.status);
                        alert.show();

                        if (error.response.status === 422) {
                            this.form.error.setErrors(errors);
                        }
                    })
            }
        },
        mounted() {
            axios.get('/api/foods/' + this.$route.params.id + '/edit')
                .then(response => {
                    this.form = new Form(response.data.data);
                })
                .catch(error => {
                    console.log(error.response);
                    let alert = new Alert('fetch', error.response.status);
                    alert.show()
                        .then(() => {
                            error.response.status === 401 ? this.$router.push('/logout') : this.$router.back();
                        })
                        .then(() => {
                            this.hasErrors = true;
                        });
                })
                .finally(() => {
                    this.isLoading = false;
                })
        }
    }
</script>

<style scoped>

</style>
