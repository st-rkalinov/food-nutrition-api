<template>
    <div>
        <div v-if="showResults" @click="showResults = false" class="bg-black opacity-0 absolute right-0 left-0 top-0 bottom-0 z-10  h-screen"></div>

        <div class="relative z-10">
            <input type="text" class="w-full rounded-full border border-1 py-2 px-5 focus:outline-none"
                   name="searchTerm" id="" placeholder="Search" v-model="searchTerm" @input="search" @focus="showResults = true">
            <div v-if="hasMinCharLen && showResults" class="w-full h-128 absolute border-3 border rounded-lg bg-gray-100 z-20 overflow-y-scroll">
                <div v-if="loading"><p class="block p-3 hover:bg-gray-400 rounded-lg">Loading...</p></div>
                <div v-else>
                    <div v-if="!hasData" >
                        <p class="p-3 rounded-lg">There are no records matching '{{ searchTerm }}'</p>
                    </div>
                    <div v-else>
                        <ul>
                            <li v-for="(item, index) in data.data" :key="item.data.food_id">
                                <router-link :to="'/foods/' + item.data.food_id" class="block p-3 hover:bg-gray-400 rounded-lg">{{ item.data.name }}</router-link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import _ from 'lodash';

    export default {
        name: "SearchBar",
        data() {
            return {
                searchTerm: '',
                minLength: 2,
                data: null,
                hasData: false,
                showResults: false,
                loading: true,
            }
        },
        watch: {
            '$route.fullPath'() {
                this.clearData();
            }
        },
        computed: {
            hasMinCharLen() {
                return this.searchTerm.length > this.minLength;
            }
        },
        methods: {
            search: _.debounce(function () {
                this.loading = true;
                if (!this.hasMinCharLen) {
                    return;
                }

                axios.post('/api/search', {searchTerm: this.searchTerm})
                    .then(response => {
                        this.data = response.data;

                        this.hasData = this.data.data.length !== 0;
                    })
                    .catch(error => {
                        alert(error.response.message);
                    })
                    .finally(() => {
                        this.loading = false;
                    });
            }, 300),
            clearData() {
                this.searchTerm = '';
                this.hasData = false;
                this.data = null;
                this.showResults = false;
            },
        }
    }
</script>

<style scoped>

</style>
