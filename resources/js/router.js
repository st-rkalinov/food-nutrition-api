import VueRouter from "vue-router";
import Vue from 'vue';
import Logout from "./components/Actions/Logout";
import Home from "./components/views/Home";

Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        {
            path: '/', name: 'home', component: Home, meta: { title: 'Welcome' }
        },
        {
            path: '/foods/create', name: 'create', component: () => import(/*webpackChunkName: "create" */"./components/views/FoodsCreate"), meta: { title: 'Add New Food'}
        },
        {
            path: '/foods/:id/edit', name: 'edit', component: () => import(/*webpackChunkName: "edit" */"./components/views/FoodsEdit"), meta: { title: 'Edit Food'}
        },
        {
            path: '/foods', name: 'foods', component: () => import(/*webpackChunkName: "index" */"./components/views/FoodsIndex"), meta: { title: 'Foods'}
        },
        {
            path: '/my-foods', name: 'user-foods', component: () => import(/*webpackChunkName: "user-index" */"./components/views/UserFoodsIndex"), meta: { title: 'User Foods'}
        },
        {
            path: '/foods/:id', name: 'food', component: () => import(/*webpackChunkName: "show" */"./components/views/FoodsShow"), meta: { title: 'Food Details'}
        },
        {
            path: '/logout', name: 'logout', component: Logout,
        }
    ],
    mode: 'history'
})
