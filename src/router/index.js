import { createRouter, createWebHistory } from "vue-router"
import UserLogin from "@/views/UserLogin"
import UserHome from "@/views/UserHome"

const routes = [
    {path:'/',component: UserLogin},
    {path: '/login', name: 'login', component: UserLogin},
    {path: '/home/:id', name: 'home.id', component: UserHome, props: true}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})


export default router