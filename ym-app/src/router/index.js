import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../views/h-index.vue'
import zhushou from '../views/j-k-zhushou/zs-index.vue'
import xinwen from '../views/xinwen/xw-index.vue'
import wode from '../views/w-d/wd-index.vue'
import xg from '../views/home/component/components/x-g.vue'
import addess from '../views/home/component/components/components/addessxq.vue'
import steps1 from '../views/home/component/components/testing/Steps1.vue'
import steps2 from '../views/home/component/components/testing/Steps2.vue'
import steps3 from '../views/home/component/components/testing/Steps3.vue'
import addessxq from '../views/home/component/components/components/addessxq.vue'
import yuyue from '../views/home/component/components/components/yuyue.vue'
import login from '../views/login/Login.vue'
import register from '../views/login/Register.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: login,
  },
  {
    path: '/register',
    name: 'register',
    component: register,
  },
  {
    path: '/addessxq',
    name: 'addessxq',
    component: addessxq,
  },
  {
    path: '/yuyue',
    name: 'yuyue',
    component: yuyue,
  },
  {
    path: '/steps2',
    name: 'steps2',
    component: steps2,
  },
  {
    path: '/steps3',
    name: 'steps3',
    component: steps3,
  },
  {
    path: '/steps1',
    name: 'steps1',
    component: steps1,
  },
  {
    path: '/addess',
    name: 'addess',
    component: addess,
  },
  {
    path: '/xg',
    name: 'xg',
    component: xg,
  },
  {
    path: '/',
    name: 'home',
    component: home,
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
