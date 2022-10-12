import { createRouter, createWebHistory } from "vue-router"
import UserLogin from "@/views/UserLogin"
import Home from "@/views/UserHome"

const routes = [
    {
        path: '/',
        redirect: '/login'
    },
    {
        path: '/login',
        component: UserLogin,
        // meta: { requireAuth: false }
    },
    {
        path: '/home',
        component: Home,
        meta: { requireAuth: true }
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router