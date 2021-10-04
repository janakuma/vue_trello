import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '../components/Home.vue';
import Login from '../components/Login.vue';
import Board from '../components/Board.vue';
import Card from '../components/Card.vue';
import NotFound from '../components/NotFound.vue';


Vue.use(VueRouter);
const routes: Array<RouteConfig> = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/login',
        name: 'login',
        component: Login,
    },
    {
        path: '/b/:bid',
        name: 'Board',
        component: Board,
        children: [{
            path: 'c/:cid',
            name: 'Card',
            component: Card,
        }],
    },
    {
        path: '*',
        name: 'NotFound',
        component: NotFound,
    },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

export default router;
