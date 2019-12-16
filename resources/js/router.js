import VueRouter from "vue-router";
import Vue from 'vue';
import ExampleComponent from "./components/ExampleComponent";
import FoodsCreate from "./components/views/FoodsCreate";
import FoodsEdit from "./components/views/FoodsEdit";
import FoodsIndex from "./components/views/FoodsIndex";
import Logout from "./components/Actions/Logout";
import FoodsShow from "./components/views/FoodsShow";
import UserFoodsIndex from "./components/views/UserFoodsIndex";

Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        {
            path: '/', name: 'home', component: ExampleComponent,
        },
        {
            path: '/foods/create', name: 'create', component: FoodsCreate
        },
        {
            path: '/foods/:id/edit', name: 'edit', component: FoodsEdit,
        },
        {
            path: '/foods', name: 'foods', component: FoodsIndex,
        },
        {
            path: '/my-foods', name: 'user-foods', component: UserFoodsIndex,
        },
        {
            path: '/foods/:id', name: 'food', component: FoodsShow,
        },
        {
            path: '/logout', name: 'logout', component: Logout,
        }
    ],
    mode: 'history'
})
