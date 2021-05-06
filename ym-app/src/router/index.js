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
import wenben_next from '../views/xinwen/wenben_next.vue'
import search_next from '../views/xinwen/search_next.vue'
import jiezhongcankao from '../views/home/component/components/jz-cankao/jiezhong.vue'
import jiezhongzixun from '../views/home/component/components/jz-zixun/zixun-shouye.vue'
import xq from '../components/xiangqing.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/xq',
    name: 'xq',
    component:xq,
  },
  {
    path: '/jiezhongzixun',
    name: 'jiezhongzixun',
    component: jiezhongzixun,
  },
  {
    path: '/jiezhongcankao',
    name: 'jiezhongcankao',
    component: jiezhongcankao,
  },
  {
    path: '/search_next',
    name: 'search_next',
    component: search_next,
  },
  {
    path: '/wenben_next',
    name: 'wenben_next',
    component: wenben_next,
  },
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
    path: "/addessxq/:id",
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