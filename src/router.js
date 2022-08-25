import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './Home.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/scripting',
        name: 'scripting',
        component: () =>
            import(/* webpackChunkName: "scripting" */ './Scripting.vue')
    },
    {
        path: '/styling',
        name: 'styling',
        component: () =>
            import(/* webpackChunkName: "styling" */ './Styling.vue')
    }
];

const router = new VueRouter({
    routes
});

export default router;
