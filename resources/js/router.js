import VueRouter from "vue-router";
import Vue from 'vue';
import ExampleComponent from "./components/ExampleComponent";
import FoodsCreate from "./components/views/FoodsCreate";
import FoodsEdit from "./components/views/FoodsEdit";

Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        {
            path: '/', component: ExampleComponent,
        },
        {
            path: '/foods/create', component: FoodsCreate
        },
        {
            path: '/foods/:id/edit', component: FoodsEdit,
        }
    ],
    mode: 'history'
})
