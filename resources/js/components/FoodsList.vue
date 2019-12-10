<template>
    <div v-if="dataIsLoaded">
        <table class="w-full border-collapse overflow-hidden border-blue-400 rounded-lg shadow-2xl">
            <tr class="bg-blue-400">
                <th class="py-5">#</th>
                <th class="py-5">Name</th>
                <th class="py-5">Serving</th>
            </tr>
            <tr v-for="(item, key) in data.data" class="text-center border-b-2 border-gray-200 hover:font-bold">
                <td class="py-3">{{ (key + 1 )}}</td>
                <td class="py-3">{{ item.data.name }}</td>
                <td class="py-3">{{ item.data.serving + ' - ' + item.data.unit }}</td>
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
