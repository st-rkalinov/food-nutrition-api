<template>
    <div v-if="dataIsLoaded">
        <table class="w-full border-collapse overflow-hidden border-blue-400 rounded-lg shadow-2xl">
            <tr class="bg-blue-400">
                <th class="py-5 w-1/12">#</th>
                <th class="py-5 w-2/6">Name</th>
                <th class="py-5 w-1/6">Calories</th>
                <th class="py-5 w-1/12">Serving</th>
                <th class="py-5 w-2/12">Unit</th>
                <th class="py-5 w-auto">Actions</th>
            </tr>
            <tr v-for="(item, key) in data.data" class="text-center border-b-2 border-gray-200 hover:font-bold">
                <td class="py-3">{{ (key + 1 )}}</td>
                <td class="py-3">{{ item.data.name }}</td>
                <td class="py-3">{{ item.data.calories }}</td>
                <td class="py-3">{{ item.data.serving }}</td>
                <td class="py-3">{{ item.data.unit }}</td>
                <td class="py-3 flex justify-around items-center">
                    <router-link to="/" class="w-1/2">
                        <svg class="mx-auto" width="20px" height="29px" viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                            <title>See</title>
                            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">
                                <g transform="translate(2.000000, 16.000000)" stroke="#2E86DE" stroke-width="4">
                                    <path d="M48,67.2 C81.8971875,67.2 96,33.3512347 96,33.3512347 C96,33.3512347 81.0140625,-3.02379073e-15 48,0 C14.9859375,3.02379073e-15 0,33.3512347 0,33.3512347 C0,33.3512347 14.1028125,67.2 48,67.2 Z" id="Layer-1"></path>
                                    <circle id="Layer-2" cx="48" cy="33.6" r="21.12"></circle>
                                    <path d="M57.0803498,14.5262074 C53.013568,15.2280273 49.92,18.7727429 49.92,23.04 C49.92,27.8117402 53.7882598,31.68 58.56,31.68 C62.8272571,31.68 66.3719727,28.586432 67.0737926,24.5196502 C68.3856474,27.2703493 69.12,30.349416 69.12,33.6 C69.12,45.2642539 59.6642539,54.72 48,54.72 C36.3357461,54.72 26.88,45.2642539 26.88,33.6 C26.88,21.9357461 36.3357461,12.48 48,12.48 C51.250584,12.48 54.3296507,13.2143526 57.0803498,14.5262074 Z" id="Layer-3"></path>
                                </g>
                            </g>
                        </svg>
                    </router-link>
                    <router-link :to="'/foods/' + item.data.food_id + '/edit'" v-if="" class="w-1/2">
                        <svg class="mx-auto" width="20px" height="20px" viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                            <title>Edit</title>
                            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">
                                <g transform="translate(2.000000, 2.000000)" stroke="#2E86DE" stroke-width="4">
                                    <path d="M56.5106952,10.5464071 C60.8135865,11.5200327 64.8423906,13.2161538 68.4628809,15.5005439 L76.8618891,8.97963811 L87.0203619,19.1381109 L80.4994561,27.5371191 C82.7838462,31.1576094 84.4799673,35.1864135 85.4535929,39.4893048 L96,40.816875 L96,55.183125 L85.4535929,56.5106952 C84.4799673,60.8135865 82.7838462,64.8423906 80.4994561,68.4628809 L87.0203619,76.8618891 L76.8618891,87.0203619 L68.4628809,80.4994561 C64.8423906,82.7838462 60.8135865,84.4799673 56.5106952,85.4535929 L55.183125,96 L40.816875,96 L39.4893048,85.4535929 C35.1864135,84.4799673 31.1576094,82.7838462 27.5371191,80.4994561 L19.1381109,87.0203619 L8.97963811,76.8618891 L15.5005439,68.4628809 C13.2161538,64.8423906 11.5200327,60.8135865 10.5464071,56.5106952 L0,55.183125 L0,40.816875 L10.5464071,39.4893048 C11.5200327,35.1864135 13.2161538,31.1576094 15.5005439,27.5371191 L8.97963811,19.1381109 L19.1381109,8.97963811 L27.5371191,15.5005439 C31.1576094,13.2161538 35.1864135,11.5200327 39.4893048,10.5464071 L40.816875,0 L55.183125,0 L56.5106952,10.5464071 Z" id="Layer-1"></path>
                                    <circle id="Layer-2" cx="48" cy="48" r="14.4"></circle>
                                </g>
                            </g>
                        </svg>
                    </router-link>
                </td>
            </tr>
        </table>

        <div class="p-12" v-if="paginator.last() > 1">
            <ul class="flex justify-center bg-white list-reset rounded font-sans shadow-lg">
                <li class="pr-3">
                    <button v-if="paginator.isFirst()"
                        class="h-full rounded-full border-2 border-gray-200 px-4 py-3 focus:outline-none"
                        :class="{'cursor-not-allowed': paginator.isFirst()}"><
                    </button>
                    <button v-else
                        class="font-bold h-full hover:bg-blue-100 px-4 py-3 rounded-full border-2 border-gray-200 focus:outline-none"
                        @click="submit(paginator.getCurrent() - 1)">
                        <
                    </button>
                </li>
                <li v-if="(paginator.getCurrent() - paginator.linksCount) >= 1">
                    <button
                        class="h-full hover:text-gray-800 text-gray-400 px-4 py-3 focus:outline-none"
                        @click.prevent="submit(1)">1 ...</button>
                </li>
                <li v-for="page in paginator.getLinks()"
                    :class="{'bg-blue-400': paginator.isCurrent(page),
                    'hover:bg-blue-100': !paginator.isCurrent(page),
                    'border-r border-grey-light': paginator.last() !== page }">
                    <button
                        class="px-4 py-3 h-full focus:outline-none"
                        @click.prevent="submit(page)">{{ page }}
                    </button>
                </li>
                <li v-if="(paginator.getCurrent() + paginator.linksCount - 1) < paginator.last()">
                    <button
                        class="h-full hover:text-gray-800 text-gray-400 px-4 py-3 focus:outline-none"
                        @click.prevent="submit(paginator.last())">... {{ paginator.last() }}</button>
                </li>
                <li class="pl-3">
                    <button v-if="paginator.isLast()"
                        class="px-4 py-3 h-full rounded-full border-2 border-gray-200 focus:outline-none"
                        :class="{'cursor-not-allowed': paginator.isLast()}"> >
                    </button>
                    <button v-else
                        class="font-bold h-full hover:bg-blue-100 px-4 py-3 rounded-full border-2 border-gray-200 focus:outline-none"
                        @click="submit(paginator.getCurrent() + 1)">
                        >
                    </button>
                </li>
            </ul>
        </div>

    </div>
</template>

<script>
    import Paginator from "../classes/Paginator";
    import Alert from "../classes/Alert";

    export default {
        name: "FoodsList",
        props: ['endpoint'],
        data() {
            return {
                data: null,
                dataIsLoaded: false,
                page: null,
                paginator: null,
            }
        },
        methods: {
            submit(page) {
                if (this.paginator.getCurrent() === page) {
                    return;
                }

                this.$router.push({ path: '/foods', query: { page: page } });

                axios.get('/api/foods', {params: {page: page}})
                    .then(response => {
                        this.data = response.data;
                        this.dataIsLoaded = true;
                        this.paginator.setMeta(response.data.meta);
                        this.paginator.getLinks()
                    })
                    .catch(error => {
                        let alert = new Alert('fetch', error.response.status);

                        alert.show()
                        .then((buttonClicked) => {
                            //TODO: redirect to logout component
                            //this.$router.push({ path: '/logout'});

                            console.log('clicked');
                        });
                    });
            }
        },
        mounted() {
            axios.get('/api/foods')
                .then(response => {
                    this.data = response.data;
                    this.dataIsLoaded = true;
                    this.paginator = new Paginator(response.data.meta);
                })
                .catch(error => {
                    let alert = new Alert('fetch', error.response.status);

                    alert.show()
                    .then((buttonClicked) => {
                        //TODO: redirect to logout component
                        //this.$router.push({ path: '/logout'});

                        console.log('clicked');
                    });

                });
        }
    }
</script>

<style scoped>

</style>
