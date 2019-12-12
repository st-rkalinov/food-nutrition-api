<template>
    <div>
        <div v-if="isLoading" class="flex justify-center items-center h-screen">
            <img src="../../../images/25.gif" alt="" class="block w-50 h-50">
        </div>

        <div v-else-if="!isLoading && hasData">
            <div class="pb-10">
                <div v-if="this.$parent.user.id === data.data.owner_id" class="flex flex-end pt-4 justify-end">
                    <router-link :to="'/foods/' + data.data.food_id + '/edit'" class="btn btn-success mr-5">
                        Edit
                    </router-link>
                    <a href="#" @click.prevent="del()" class="btn btn-danger">Delete</a>
                </div>
            </div>
            <div v-for="(item, key) in this.dataFieldNames"
                 class="flex justify-start items-center py-3 border-b border-gray-300">
                <p class="text-xl text-blue-400 font-bold">{{ item }}: </p>
                <span class="pl-5 text-xl">{{ castFieldData(data.data[key]) }}</span>
            </div>

            <div class="p-5 text-right">
                <a href="#" @click.prevent="$router.back()" class="btn btn-primary">Go Back</a>
            </div>
        </div>

        <ErrorPage v-else-if="!hasData" text="No Data Found"/>
    </div>
</template>

<script>
    import ErrorPage from "../ErrorPage";
    import Alert from "../../classes/Alert";

    export default {
        name: "FoodsShow",
        components: {ErrorPage, Alert},
        data() {
            return {
                data: null,
                hasData: true,
                isLoading: true,
                dataFieldNames: {
                    name: 'Name',
                    brand: 'Brand',
                    calories: 'Calories',
                    serving: 'Serving',
                    unit: 'Unit',
                    carbohydrates: 'Carbohydrates',
                    carbohydrates_fiber: 'Fiber',
                    carbohydrates_sugars: 'Sugars',
                    cholesterol: 'Cholesterol',
                    fat: 'Fat',
                    fat_satured: 'Satured Fat',
                    protein: 'Protein',
                    salt: 'Salt',
                    public: 'Public Food',
                }
            }
        },
        methods: {
            del() {
                axios.delete(this.data.links.self)
                .then(response => {
                    let alert = new Alert('delete', response.status);
                    alert.show()
                    .then(() => {
                        this.$router.push('/foods');
                    })
                })
                .catch(error => {
                    let alert = new Alert('delete', error.response.status);
                    alert.show()
                    .then(() => {
                        error.response.status === 401 ? this.$router.push('/logout') : this.$router.push('/foods');
                    })
                })
            },
            castFieldData(fieldData) {
                let casted = fieldData;

                switch (fieldData) {
                    case false:
                       casted = 'No';
                        break;
                    case true:
                        casted = 'Yes';
                        break;
                }

                return casted;
            }
        },
        mounted() {
            axios.get('/api/foods/' + this.$route.params.id)
                .then(response => {
                    this.data = response.data;

                    if (this.data.data.length === 0) {
                        this.hasData = false;
                        return;
                    }
                    console.log(response);
                })
                .catch(error => {
                    console.log(error.response);
                    this.hasData = false;

                })
                .finally(() => {
                    this.isLoading = false;
                })
        }

    }
</script>

<style scoped>

</style>
