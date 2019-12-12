import VueRouter from "vue-router";
import Vue from 'vue';
import ExampleComponent from "./components/ExampleComponent";
import FoodsCreate from "./components/views/FoodsCreate";
import FoodsEdit from "./components/views/FoodsEdit";
import FoodsIndex from "./components/views/FoodsIndex";
import Logout from "./components/Actions/Logout";
import FoodsShow from "./components/views/FoodsShow";

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
        },
        {
            path: '/foods', component: FoodsIndex,
        },
        {
            path: '/foods/:id', component: FoodsShow,
        },
        {
            path: '/logout', component: Logout,
        }
    ],
    mode: 'history'
})
