import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../views/home/h-index.vue'
import zhushou from '../views/j-k-zhushou/zs-index.vue'
import xinwen from '../views/xinwen/xw-index.vue'
import wode from '../views/w-d/wd-index.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: home
  },
  {
    path: '/zhushou',
    name: 'zhushou',
    component: zhushou
  },
  {
    path: '/xinwen',
    name: 'xinwen',
    component: xinwen
  },
  {
    path: '/wode',
    name: 'wode',
    component: wode
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
