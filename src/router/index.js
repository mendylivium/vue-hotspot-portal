import { createRouter, createWebHistory } from 'vue-router'
import Portal from '../views/tplink/Portal1.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/:title/:rates",
            name: "portal",
            component: Portal
        }
    ]
})

export default router