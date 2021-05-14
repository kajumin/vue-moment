import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/user',
    name: 'User',
    component: () => import(/* webpackChunkName user */ '@/views/user/User.vue'),
    redirect: { name: 'UserList' },
    children: [
      {
        path: 'list',
        name: 'UserList',
        component: () => import(/* webpackChunkName user-list */ '@/views/user/UserList.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
