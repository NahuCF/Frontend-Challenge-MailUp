import { createRouter, createWebHistory } from 'vue-router'
import Users from '@/views/app/user/Users.vue'
import UserProfile from '@/views/app/user/UserProfile.vue'
import Page404Layout from '@/layouts/Page404Layout.vue'
import AppLayout from '@/layouts/AppLayout.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
    {
        path: '/',
        name: 'home',
        redirect: { name: 'users' }
    },
    {
        path: '/users',
        name: 'users',
        component: AppLayout,
        children: [
            {
                path: '',
                name: 'users-list',
                component: Users
            },
            {
                name: 'user-profile',
                path: 'profile',
                component: UserProfile
            }
        ] 
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'not-found',
        component: Page404Layout
    },
  ]
})

export default router
