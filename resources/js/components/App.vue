<template>
    <div class="flex h-screen lg:flex-row sm:flex-col flex-col">
        <nav class="h-screen border border-r-2 p-10 bg-blue-100">
            <router-link :to="{ name: 'home' }">
                <h1 class="font-bold text-lg text-blue-900 border-b-2 border-transparent hover:border-b-2 hover:border-blue-400">
                    Food Nutrition</h1>
            </router-link>

            <div class="pt-24">
                <div>
                    <p class="text-gray-600">CREATE</p>
                    <router-link :to="{ name: 'create' }"
                                 :class="{ 'active': isActive('/foods/create') }"
                                 class="flex items-center pt-5 hover:font-bold hover:text-blue-400 sm:border-b-2 lg:border-0 border-b-2 sm:pb-2 lg:pb-0 pb-2">
                        <svg viewBox="0 0 24 24" class="fill-current text-blue-600 w-6 h-6">
                            <path
                                d="M23.3 11.9c0 .9-.6 1.4-1.4 1.4h-8.5v8.5c0 .9-.6 1.4-1.4 1.4s-1.4-.6-1.4-1.4v-8.5H2c-.9 0-1.4-.6-1.4-1.4 0-.9.6-1.4 1.4-1.4h8.5V1.9c0-.9.6-1.4 1.4-1.4s1.4.6 1.4 1.4v8.5h8.5c.9 0 1.5.6 1.5 1.5z"/>
                        </svg>
                        <div class="pl-3">Add new</div>
                    </router-link>
                </div>

                <div class="pt-12">
                    <p class="text-gray-600">GENERAL</p>
                    <router-link :to="{ name: 'foods' }"
                                  :class="{ 'active': isActive('/foods') }"
                                 class="flex items-center pt-5 hover:font-bold hover:text-blue-400 sm:border-b-2 lg:border-0 border-b-2 sm:pb-2 lg:pb-0 pb-2">
                        <svg viewBox="0 0 48 48" class="w-6 h-6 fill-current text-blue-600"
                             xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                            <defs>
                                <path id="i-457"
                                      d="M48,21c0-2.42-2.671-4.486-7.791-5.992c-2.343-0.521-3.802-1.275-4.336-2.242c-0.584-1.057-0.068-2.498,0.43-3.893 C36.661,7.869,37,6.922,37,6c0-3.309-2.691-6-6-6s-6,2.691-6,6c0,0.721,0.366,1.58,0.79,2.574c0.536,1.258,1.271,2.98,0.783,3.719 C26.271,12.748,25.358,13,24,13c-11.635,0-24,2.803-24,8c0,6.486,6.222,20.635,9.293,23.707C10.883,46.297,17.173,48,24,48 c7.028,0,13.544-1.514,14.832-3.445c1.121-1.682,4.354-7.734,6.662-13.686c0.02-0.012,0.042-0.025,0.061-0.037l-0.028-0.043 C46.939,27.133,48,23.523,48,21z M37.168,43.445C36.658,44.209,31.563,46,24,46c-7.436,0-12.522-1.938-13.293-2.707 c-1.532-1.533-3.986-6.26-5.9-11.207C8.053,33.492,13.884,35,24,35c9.684,0,15.435-1.381,18.757-2.734 C40.68,37.199,38.188,41.914,37.168,43.445z M43.853,29.531C41.358,30.971,35.762,33,24,33c-12.333,0-17.888-2.232-20.193-3.674 c-0.544-1.613-0.999-3.188-1.317-4.625C6.683,27.514,15.532,29,24,29c8.395,0,17.168-1.461,21.404-4.225 C45.022,26.246,44.481,27.869,43.853,29.531z M24,27c-13.63,0-22-3.494-22-6s8.37-6,22-6c2.141,0,3.528-0.525,4.241-1.604 c1.081-1.635,0.143-3.838-0.611-5.607C27.349,7.131,27,6.313,27,6c0-2.205,1.794-4,4-4s4,1.795,4,4c0,0.574-0.282,1.365-0.581,2.201 c-0.587,1.641-1.316,3.684-0.297,5.531c0.835,1.512,2.685,2.568,5.588,3.211C44.348,18.309,46,19.934,46,21 C46,23.506,37.631,27,24,27z M24,16c-7.428,0-20,1.053-20,5s12.571,5,20,5c7.429,0,20-1.053,20-5S31.429,16,24,16z M24,24 c-11.126,0-17.634-1.975-18.004-2.969C6.366,19.975,12.874,18,24,18s17.634,1.975,18.004,2.967C41.634,22.025,35.126,24,24,24z M29,6c0-1.104,0.897-2,2-2s2,0.896,2,2s-0.897,2-2,2S29,7.104,29,6z"/>
                            </defs>
                            <use x="0" y="0" xlink:href="#i-457"/>
                        </svg>
                        <div class="pl-3">Foods</div>
                    </router-link>
                    <router-link :to="{ name: 'user-foods' }"
                                  :class="{ 'active': isActive('/my-foods') }"
                                 class="flex items-center pt-5 hover:font-bold hover:text-blue-400 sm:border-b-2 lg:border-0 border-b-2 sm:pb-2 lg:pb-0 pb-2">
                        <svg version="1.1" id="Layer_1" class="w-6 h-6 fill-current text-blue-600"
                             xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
                             y="0px"
                             viewBox="0 0 32 32" xml:space="preserve">
                                <g>
                                    <path d="M26.486,3.864v14.105c0,0.552,0.448,1,1,1c0.552,0,1-0.448,1-1V3.864c0-1.654-1.346-3-3-3H8.371c-1.654,0-3,1.346-3,3
                                        v1.189H3.629c-1.654,0-3,1.346-3,3v17.922c0,1.654,1.346,3,3,3h0.742c1.654,0,3-1.346,3-3V3.864c0-0.551,0.449-1,1-1h17.115
                                        C26.038,2.864,26.486,3.313,26.486,3.864z M5.371,25.975c0,0.551-0.449,1-1,1H3.629c-0.551,0-1-0.449-1-1V8.053
                                        c0-0.551,0.449-1,1-1h1.742V25.975z"/>
                                    <path d="M12.484,10.552h9.607c1.07,0,1.946-0.876,1.946-1.946V6.999c0-1.07-0.876-1.946-1.946-1.946h-9.607
                                        c-1.07,0-1.946,0.876-1.946,1.946v1.607C10.538,9.677,11.414,10.552,12.484,10.552z"/>
                                    <path d="M27.478,20.714c-0.118-0.049-0.247-0.078-0.383-0.078H11.146c-0.528,0-0.965,0.412-0.998,0.94l-0.008,0.113
                                        c-0.01,0.149-0.02,0.297-0.02,0.447c0,4.963,4.038,9,9,9c2,0,3.844-0.664,5.34-1.772c0.666,0.376,1.424,0.606,2.243,0.606
                                        c2.573,0,4.667-2.094,4.667-4.666C31.371,22.995,29.682,21.086,27.478,20.714z M12.138,22.636h13.965
                                        c-0.257,3.628-3.291,6.5-6.983,6.5S12.396,26.264,12.138,22.636z M26.704,27.97c-0.229,0-0.447-0.038-0.658-0.094
                                        c1.114-1.342,1.847-3.012,2.029-4.841c0.773,0.465,1.295,1.302,1.295,2.269C29.371,26.775,28.175,27.97,26.704,27.97z"/>
                                    <path d="M23.788,13.469h-12.75c-0.276,0-0.5,0.224-0.5,0.5c0,0.276,0.224,0.5,0.5,0.5h12.75c0.277,0,0.5-0.224,0.5-0.5
                                        C24.288,13.693,24.064,13.469,23.788,13.469z"/>
                                    <path d="M23.788,17.053h-12.75c-0.276,0-0.5,0.224-0.5,0.5s0.224,0.5,0.5,0.5h12.75c0.277,0,0.5-0.224,0.5-0.5
                                        S24.064,17.053,23.788,17.053z"/>
                                </g>
                                </svg>
                        <div class="pl-3">Your Foods</div>
                    </router-link>
                </div>

                <div class="pt-12">
                    <p class="text-gray-600">SETTINGS</p>
                    <router-link :to="{ name: 'logout' }"
                                 class="flex items-center pt-5 hover:font-bold hover:text-blue-400 sm:border-b-2 lg:border-0 border-b-2 sm:pb-2 lg:pb-0 pb-2">
                        <svg viewBox="0 0 24 24" class="fill-current text-blue-600 w-6 h-6">
                            <path
                                d="M21 3h-3.8c-.7 0-1.3-.6-1.3-1.3S16.5.4 17.2.4h5.1c.7 0 1.3.6 1.3 1.3v20.5c0 .7-.6 1.3-1.3 1.3h-5.1c-.7 0-1.3-.6-1.3-1.3 0-.7.6-1.3 1.3-1.3H21V3zm-6.9 7.7L8.6 5.2c-.5-.5-.6-1.3-.1-1.8s1.3-.5 1.8 0l7.7 7.7c.8.8.2 2.2-.9 2.2H1.8c-.7 0-1.3-.6-1.3-1.3 0-.7.6-1.3 1.3-1.3h12.3zm-1.6 4.8c.5-.5 1.3-.4 1.8.1s.4 1.3-.1 1.8l-3.8 3.2c-.5.5-1.3.4-1.8-.1-.6-.5-.5-1.3 0-1.7l3.9-3.3z"/>
                        </svg>
                        <div class="pl-3">Logout</div>
                    </router-link>
                </div>
            </div>
        </nav>

        <div class="flex flex-col flex-1">
            <div class="flex justify-between flex-col items-center p-6 border-b-2">
                <p class="self-start lg:pt-5 pt-0">Foods</p>

                <div class="flex items-center justify-around pt-8 md:w-1/2 w-full">
                    <SearchBar class="w-9/12"/>
                    <div class="border border-2 rounded-full p-3 font-bold bg-blue-400">
                        SK
                    </div>
                </div>
            </div>

            <div class="flex flex-col overflow-y-hidden">
                <router-view class="md:p-12 sm:p-3 p-3 overflow-x-hidden" />
            </div>
        </div>
    </div>
</template>

<script>
    import SearchBar from "./SearchBar";

    export default {
        name: "App",
        props: ['user'],
        components: { SearchBar },
        methods: {
            isActive(path) {
                return path === this.$route.path;
            }
        },
        created() {
            axios.interceptors.request.use(config => {
                if (config.method === 'get') {
                     config.url = config.url + '?api_token=' + this.user.api_token;
                } else {
                    config.data = {
                        ...config.data,
                        api_token: this.user.api_token
                    }
                }

                return config;
            })
        }
    }
</script>

<style scoped>

</style>
