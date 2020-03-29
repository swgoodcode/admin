import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "about" */ '../views/RealGrid.vue')
  },
  {
    path: '/realgridTest',
    name: 'realgridTest',
    component: () => import(/* webpackChunkName: "about" */ '../views/RealGrid.vue')
  },
  {
    path: '/testView',
    name: 'testView',
    component: () => import(/* webpackChunkName: "about" */ '../views/TestVue.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
