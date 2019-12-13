<template>
    <div class="sm:py-12 sm:px-12 md:px-20 lg:px-24 xl:p-32 py-12 px-0" v-if="paginator.last() > 1">
        <ul class="flex sm:justify-center justify-between bg-white list-reset rounded shadow-lg">
            <li>
                <button v-if="paginator.isFirst()"
                        class="h-full rounded-full border-2 border-gray-200 px-4 py-3 focus:outline-none"
                        :class="{'cursor-not-allowed': paginator.isFirst()}"><
                </button>
                <button v-else
                        class="font-bold h-full hover:bg-blue-100 px-4 py-3 rounded-full border-2 border-gray-200 focus:outline-none"
                        @click="changePage(paginator.getCurrent() - 1)">
                    <
                </button>
            </li>
            <li class="sm:w-1/2 w-3/4">
                <ul class="flex justify-center h-full">
                    <li v-if="showMostFirstPage" class="h-full">
                        <button
                            class="h-full hover:text-gray-800 text-gray-400 px-4 py-3 focus:outline-none"
                            @click.prevent="changePage(1)">1 ...
                        </button>
                    </li>
                    <li v-for="page in paginator.getLinks()"
                        class="border-r border-grey-light h-full"
                        :class="{'bg-blue-400': paginator.isCurrent(page),
                                'hover:bg-blue-100': !paginator.isCurrent(page),
                                'border-l border-grey-light': page === 1}">
                        <button
                            class="px-4 py-3 h-full focus:outline-none"
                            @click.prevent="changePage(page)">{{ page }}
                        </button>
                    </li>
                    <li v-if="showMostLastPage" class="h-full">
                        <button
                            class="h-full hover:text-gray-800 text-gray-400 px-4 py-3 focus:outline-none"
                            @click.prevent="changePage(paginator.last())">... {{ paginator.last() }}
                        </button>
                    </li>
                </ul>
            </li>
            <li>
                <button v-if="paginator.isLast()"
                        class="px-4 py-3 h-full rounded-full border-2 border-gray-200 focus:outline-none"
                        :class="{'cursor-not-allowed': paginator.isLast()}"> >
                </button>
                <button v-else
                        class="font-bold h-full hover:bg-blue-100 px-4 py-3 rounded-full border-2 border-gray-200 focus:outline-none"
                        @click="changePage(paginator.getCurrent() + 1)">
                    >
                </button>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "Pagination",
        props: {
            paginator: {
                type: Object,
                required: true,
            }
        },
        computed: {
            showMostFirstPage() {
                return (this.paginator.getCurrent() - this.paginator.linksCount) >= 1;
            },
            showMostLastPage() {
                return (this.paginator.getCurrent() + this.paginator.linksCount - 1) < this.paginator.last()
            }
        },
        methods: {
            changePage(page) {
                this.$emit('change:page', page);
            }
        },
    }
</script>

<style scoped>

</style>
