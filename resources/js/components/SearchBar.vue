<template>
    <div class="w-8/12 mr-10 relative">
        <input type="text" class="w-full rounded-full border border-1 py-2 px-5 focus:outline-none"
               name="searchTerm" id="" placeholder="Search" v-model="searchTerm" @input="search" @focusin="showResults = true" @blur="hideResults($event)">
        <div v-if="hasData" class="w-full absolute border-3 border rounded-lg bg-gray-100 z-50" :class="{hidden: !showResults}">
            <ul>
                <li v-for="(item, index) in data.data">
                    <router-link :to="'/foods/' + item.data.food_id" class="block p-3 hover:bg-gray-400 rounded-lg">{{ item.data.name }}</router-link>
                </li>
            </ul>
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
                if (!this.hasMinCharLen) {
                    return;
                }

                axios.post('/api/search', {searchTerm: this.searchTerm})
                    .then(response => {
                        this.data = response.data;

                        this.hasData = this.data.data.length !== 0;
                    })
                    .catch(error => {
                        console.log(error.response);
                    });
            }, 300),
            clearData() {
                this.searchTerm = '';
                this.hasData = false;
                this.data = null;
                this.showResults = false;
            },
            hideResults(e) {
                if(e.relatedTarget === null || e.relatedTarget.nodeName !== 'A') {
                    this.showResults = false;
                }
            }
        }
    }
</script>

<style scoped>

</style>
