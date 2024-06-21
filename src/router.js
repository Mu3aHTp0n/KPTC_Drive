import { createRouter, createWebHistory } from "vue-router";
import { Header } from "./components/Header.vue";
import { Footer } from "./components/Footer.vue";
import { Comment3 } from "vue";

export default createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/one', component: Header, alias: '/' },
        { path: '/two', component: Footer },
        { path: '/three', component: Comment3 },
    ]
})