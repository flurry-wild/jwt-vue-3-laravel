import { createWebHistory, createRouter } from "vue-router";
import Index from './components/Pages/Index';
import Login from './components/User/Login';
import Registration from './components/User/Registration';

const routes = [
    {
        path: "/",
        name: "pages.index",
        component: Index,
    },
    {
        path:'/users/login',
        name: 'user.login',
        component: Login,
    },
    {
        path:'/users/registration',
        name: 'user.registration',
        component: Registration,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
});

export default router;
