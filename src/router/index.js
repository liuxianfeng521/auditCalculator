import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import Calculator from '../views/Calculator.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Calculator',
    component: Calculator
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'hash', // history 打包部署不显示
  base: process.env.BASE_URL,
  routes
})

export default router
