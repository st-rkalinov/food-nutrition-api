<template>
    <div>
        <div v-if="isLoading" class="flex justify-center items-center h-screen">
            <img src="../../images/25.gif" alt="" class="block w-50 h-50">
        </div>
        <div v-else-if="!isLoading && hasData" class="sm:text-sm lg:text-base text-sm">
            <div class="py-3">
                <p class="text-gray-400">Results: {{ data.meta.total }}</p>
            </div>
            <div class="h-128">
                <table class="w-full border-collapse overflow-hidden border-blue-400 rounded-lg shadow-2xl">
                    <thead>
                    <tr class="bg-blue-400">
                        <th class="py-5 w-1/12 hidden sm:table-cell">#</th>
                        <th class="py-5 w-1/2 sm:w-2/6">Name</th>
                        <th class="py-5 sm:w-1/6">Calories</th>
                        <th class="py-5 w-1/12 hidden sm:table-cell">Serving</th>
                        <th class="py-5 w-2/12 hidden sm:table-cell">Unit</th>
                        <th class="py-5 w-auto">Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="(item, key) in data.data" :key="item.data.id" class="text-center  hover:bg-gray-100">
                        <td class="py-2 hidden sm:table-cell">{{ itemNumber(key) }}</td>
                        <td class="py-2 border-l">{{ item.data.name }}</td>
                        <td class="py-2 border-l">{{ item.data.calories }}</td>
                        <td class="py-2 border-l hidden sm:table-cell">{{ item.data.serving }}</td>
                        <td class="py-2 border-l hidden sm:table-cell">{{ item.data.unit }}</td>
                        <td class="py-2 flex justify-between items-center border-l">
                            <router-link :to="{ name: 'food', params: { id: item.data.food_id }}" class="w-1/3 hover:shadow" title="See">
                                <svg class="mx-auto" width="20px" height="30px" viewBox="0 0 100 100" version="1.1"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"
                                       stroke-linecap="round" stroke-linejoin="round">
                                        <g transform="translate(2.000000, 16.000000)" stroke="#2E86DE" stroke-width="4">
                                            <path
                                                d="M48,67.2 C81.8971875,67.2 96,33.3512347 96,33.3512347 C96,33.3512347 81.0140625,-3.02379073e-15 48,0 C14.9859375,3.02379073e-15 0,33.3512347 0,33.3512347 C0,33.3512347 14.1028125,67.2 48,67.2 Z"
                                                id="Layer-1"/>
                                            <circle id="Layer-2" cx="48" cy="33.6" r="21.12"/>
                                            <path
                                                d="M57.0803498,14.5262074 C53.013568,15.2280273 49.92,18.7727429 49.92,23.04 C49.92,27.8117402 53.7882598,31.68 58.56,31.68 C62.8272571,31.68 66.3719727,28.586432 67.0737926,24.5196502 C68.3856474,27.2703493 69.12,30.349416 69.12,33.6 C69.12,45.2642539 59.6642539,54.72 48,54.72 C36.3357461,54.72 26.88,45.2642539 26.88,33.6 C26.88,21.9357461 36.3357461,12.48 48,12.48 C51.250584,12.48 54.3296507,13.2143526 57.0803498,14.5262074 Z"
                                                id="Layer-3"/>
                                        </g>
                                    </g>
                                </svg>
                            </router-link>
                            <router-link :to="{ name: 'edit', params: { id: item.data.food_id }}" title="Edit"
                                         v-if="item.data.owner_id === user_id" class="w-1/3 hover:shadow">
                                <svg class="mx-auto" width="20px" height="30px" viewBox="0 0 100 100" version="1.1"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"
                                       stroke-linecap="round" stroke-linejoin="round">
                                        <g transform="translate(2.000000, 2.000000)" stroke="#2E86DE" stroke-width="4">
                                            <path
                                                d="M56.5106952,10.5464071 C60.8135865,11.5200327 64.8423906,13.2161538 68.4628809,15.5005439 L76.8618891,8.97963811 L87.0203619,19.1381109 L80.4994561,27.5371191 C82.7838462,31.1576094 84.4799673,35.1864135 85.4535929,39.4893048 L96,40.816875 L96,55.183125 L85.4535929,56.5106952 C84.4799673,60.8135865 82.7838462,64.8423906 80.4994561,68.4628809 L87.0203619,76.8618891 L76.8618891,87.0203619 L68.4628809,80.4994561 C64.8423906,82.7838462 60.8135865,84.4799673 56.5106952,85.4535929 L55.183125,96 L40.816875,96 L39.4893048,85.4535929 C35.1864135,84.4799673 31.1576094,82.7838462 27.5371191,80.4994561 L19.1381109,87.0203619 L8.97963811,76.8618891 L15.5005439,68.4628809 C13.2161538,64.8423906 11.5200327,60.8135865 10.5464071,56.5106952 L0,55.183125 L0,40.816875 L10.5464071,39.4893048 C11.5200327,35.1864135 13.2161538,31.1576094 15.5005439,27.5371191 L8.97963811,19.1381109 L19.1381109,8.97963811 L27.5371191,15.5005439 C31.1576094,13.2161538 35.1864135,11.5200327 39.4893048,10.5464071 L40.816875,0 L55.183125,0 L56.5106952,10.5464071 Z"
                                                id="Layer-1"/>
                                            <circle id="Layer-2" cx="48" cy="48" r="14.4"/>
                                        </g>
                                    </g>
                                </svg>
                            </router-link>
                            <a href="#" @click.prevent="del(item.links.self)"
                               v-if="item.data.owner_id === user_id" class="w-1/3 hover:shadow" title="Delete">
                               <svg width="20px" height="30px" class="mx-auto" viewBox="1 1 511.99999 511.99999" xmlns="http://www.w3.org/2000/svg">
                                   <path d="m496 256c0 132.546875-107.453125 240-240 240s-240-107.453125-240-240 107.453125-240 240-240 240 107.453125 240 240zm0 0" fill="#bddbff"/>
                                   <g fill="#3d9ae2"><path d="m256 0c-141.382812 0-256 114.617188-256 256s114.617188 256 256 256 256-114.617188 256-256c-.167969-141.316406-114.683594-255.832031-256-256zm0 480c-123.710938 0-224-100.289062-224-224s100.289062-224 224-224 224 100.289062 224 224c-.132812 123.65625-100.34375 223.867188-224 224zm0 0"/>
                                       <path d="m380.449219 131.550781c-6.25-6.246093-16.378907-6.246093-22.625 0l-101.824219 101.824219-101.824219-101.824219c-6.136719-6.355469-16.269531-6.53125-22.625-.390625-6.355469 6.136719-6.53125 16.265625-.394531 22.621094.128906.132812.261719.265625.394531.394531l101.824219 101.824219-101.824219 101.824219c-6.355469 6.136719-6.53125 16.269531-.390625 22.625 6.136719 6.355469 16.265625 6.53125 22.621094.394531.132812-.128906.265625-.261719.394531-.394531l101.824219-101.824219 101.824219 101.824219c6.355469 6.136719 16.484375 5.960937 22.625-.394531 5.988281-6.199219 5.988281-16.03125 0-22.230469l-101.824219-101.824219 101.824219-101.824219c6.246093-6.246093 6.246093-16.375 0-22.625zm0 0"/>
                                   </g>
                               </svg>
                            </a>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>

            <Pagination :paginator="this.paginator" @change:page="goToPage($event)"/>
        </div>
        <div v-else-if="!hasData">
            <ErrorPage text="No Data Found"/>
        </div>
    </div>
</template>

<script>
    import Paginator from "../classes/Paginator";
    import Pagination from "./Pagination";
    import ResponseHandler from "../classes/ResponseHandler";
    import swal from "sweetalert";

    export default {
        name: "FoodsList",
        props: ['endpoint', 'user_id'],
        components: {
            ErrorPage: () => import(/*webpackChunkName: "error-page"*/ './ErrorPage'),
            Pagination
        },
        data() {
            return {
                data: null,
                isLoading: true,
                hasData: true,
                defaultPage: 1,
                paginator: null,
                responseHandler: new ResponseHandler(this.$router, 'index'),
            }
        },
        computed: {
            endpointForAxios() {
                return '/api' + this.endpoint;
            }
        },
        watch: {
            $route(to, from) {
                if (Object.keys(to.query).length === 0) {
                    this.goToPage(this.defaultPage, true);
                }
            }
        },
        methods: {
            goToPage(page, firstRequest = false) {
                if (!firstRequest && this.paginator.getCurrent() === page) {
                    return;
                }

                if (page !== parseInt(page) && isNaN(page)) {
                    page = this.defaultPage;
                }

                if (this.$route.query.page !== page) {
                    this.$router.push({path: this.endpoint, query: {page: page}});
                }
                axios.get(this.endpointForAxios, {params: {page: page}})
                    .then(response => {
                        this.isLoading = false;
                        this.data = response.data;

                        if (this.data.data.length === 0) {
                            this.hasData = false;
                            return;
                        }

                        this.hasData = true;

                        if (firstRequest) {
                            this.paginator = new Paginator(this.data.meta);
                            return;
                        }

                        this.paginator.setMeta(response.data.meta);
                        this.paginator.getLinks()
                    })
                    .catch(error => {

                        this.responseHandler.handle(error.response.status)
                            .then(() => {
                                this.isLoading = true;
                                this.hasData = false;
                            });
                    });
            },
            del(endPoint) {
                swal({
                    title: 'Are you sure ?',
                    text: 'Once deleted, the item can\'t be restored !',
                    buttons: [true, 'Yes'],
                    icon: 'warning',
                    dangerMode: true,
                })
                .then((clickedButton) => {
                    if(!clickedButton) {
                        return;
                    }

                    let responseHandler = new ResponseHandler(this.$router, 'delete');

                    axios.delete(endPoint)
                        .then(response => {
                            responseHandler.handle(response.status);
                        })
                        .catch(error => {
                            responseHandler.handle(error.response.status);
                        })
                });
            },
            itemNumber(key) {
                return (this.paginator.getCurrent() - 1) * this.paginator.perPage() + key + 1;
            }
        },
        mounted() {
            if (this.$route.query.page) {
                this.goToPage(this.$route.query.page, true);
            } else {
                this.goToPage(this.defaultPage, true);
            }
        }
    }
</script>

<style scoped>

</style>
