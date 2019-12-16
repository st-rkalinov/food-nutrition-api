import VueRouter from "vue-router";
import Vue from 'vue';
import FoodsCreate from "./components/views/FoodsCreate";
import FoodsEdit from "./components/views/FoodsEdit";
import FoodsIndex from "./components/views/FoodsIndex";
import Logout from "./components/Actions/Logout";
import FoodsShow from "./components/views/FoodsShow";
import UserFoodsIndex from "./components/views/UserFoodsIndex";
import Home from "./components/views/Home";

Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        {
            path: '/', name: 'home', component: Home, meta: { title: 'Welcome' }
        },
        {
            path: '/foods/create', name: 'create', component: FoodsCreate, meta: { title: 'Add New Food'}
        },
        {
            path: '/foods/:id/edit', name: 'edit', component: FoodsEdit, meta: { title: 'Edit Food'}
        },
        {
            path: '/foods', name: 'foods', component: FoodsIndex, meta: { title: 'Foods'}
        },
        {
            path: '/my-foods', name: 'user-foods', component: UserFoodsIndex, meta: { title: 'User Foods'}
        },
        {
            path: '/foods/:id', name: 'food', component: FoodsShow, meta: { title: 'Food Details'}
        },
        {
            path: '/logout', name: 'logout', component: Logout,
        }
    ],
    mode: 'history'
})
