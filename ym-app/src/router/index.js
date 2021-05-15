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
import sz from '../views/w-d/components/shezhi.vue'
import dl from '../views/login/Login.vue'
import txsz from '../views/w-d/components/shezhi-components/txsz.vue'
import yinsi from '../views/w-d/components/shezhi-components/yinsi.vue'
import yssz from '../views/w-d/components/shezhi-components/yssz.vue'
import mztongzhi from '../views/home/component/components/mztongzhi.vue'
import menzhen from '../views/home/component/components/components/menzhen-components/menzhen.vue'
import nr_next from '../views/xinwen/nr_next.vue'
import jiezhongzixuna from '../views/home/component/components/jz-zixun/yisheng-xq.vue'
import jiezhongzixunb from '../views/home/component/components/jz-zixun/tiwen.vue'
import store from '../store'
Vue.use(VueRouter)

const routes = [
  {
    path: '/jiezhongzixunb',
    name: 'jiezhongzixunb',
    component: jiezhongzixunb,
  },
  {
    path: '/jiezhongzixuna/:id',
    name: 'jiezhongzixuna',
    component: jiezhongzixuna,
  },
  {
    path: '/nr_next',
    name: 'nr_next',
    component: nr_next,
  },
  {
    path: '/menzhen',
    name: 'menzhen',
    component:menzhen,
  },
  {
    path: '/mztongzhi',
    name: 'mztongzhi',
    component:mztongzhi,
  },
  {
    path: '/yinsi',
    name: 'yinsi',
    component:yinsi,
  },
  {
    path: '/yssz',
    name: 'yssz',
    component:yssz,
  },
  {
    path: '/txsz',
    name: 'txsz',
    component:txsz,
  },
  {
    path: '/dl',
    name: 'dl',
    component:dl,
  },
  {
    path: '/sz',
    name: 'sz',
    component:sz,
  },
  {
    path: '/xq',
    name: 'xq',
    component:xq,
    meta:{
      requiredlogin:true
    }
  },
  {
    path: '/jiezhongzixun',
    name: 'jiezhongzixun',
    component: jiezhongzixun,
    meta:{
      requiredlogin:true
    }
  },
  {
    path: '/jiezhongcankao',
    name: 'jiezhongcankao',
    component: jiezhongcankao,
    meta:{
      requiredlogin:true
    }
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
    meta:{
      dlloginredirect:true
    }
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
    component: home
  },
  {
    path: '/zhushou',
    name: 'zhushou',
    component: zhushou,
  },
  {
    path: '/xinwen',
    name: 'xinwen',
    component: xinwen,
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

router.beforeEach((to,from,next)=>{
    if (to.meta.requiredlogin && !store.state.user.islogin) {
      next({path:'/login'})
    }else if(to.meta.dlloginredirect && store.state.user.islogin){
       next({path:"/"})
    }else{
      next()
    }
})

export default router
