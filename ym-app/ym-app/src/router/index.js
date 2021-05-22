import Vue from 'vue'
import VueRouter from 'vue-router'
// 导航
import home from '../views/h-index.vue'
import zhushou from '../views/j-k-zhushou/zs-index.vue'
import xinwen from '../views/xinwen/xw-index.vue'
import wode from '../views/w-d/wd-index.vue'
// 导航
// 新冠
import xg from '../views/home/component/components/x-g.vue'
import addess from '../views/home/component/components/components/addessxq.vue'
import steps1 from '../views/home/component/components/testing/Steps1.vue'
import steps2 from '../views/home/component/components/testing/Steps2.vue'
import steps3 from '../views/home/component/components/testing/Steps3.vue'
import addessxq from '../views/home/component/components/components/addessxq.vue'
import yuyue from '../views/home/component/components/components/yuyue.vue'
// 新冠
// 登录注册
import dl from '../views/login/Login.vue'
import login from '../views/login/Login.vue'
import register from '../views/login/Register.vue'
// 登录注册
// 新闻
import wenben_next from '../views/xinwen/wenben_next.vue'
import search_next from '../views/xinwen/search_next.vue'
// 新闻
// 接种参考
import jiezhongcankao from '../views/home/component/components/jz-cankao/jiezhong.vue'
// 接种参考
// 接种咨询
import jiezhongzixun from '../views/home/component/components/jz-zixun/zixun-shouye.vue'
// 接种咨询
// 知识详情页
import xq from '../components/xiangqing.vue'
// 知识详情页
// 我的
import sz from '../views/w-d/components/shezhi.vue'
import txsz from '../views/w-d/components/shezhi-components/txsz.vue'
import yinsi from '../views/w-d/components/shezhi-components/yinsi.vue'
import yssz from '../views/w-d/components/shezhi-components/yssz.vue'
import grrenzhuye from '../views/w-d/components/wenben-component/gerenzhuye.vue'
// 我的
// home
import mztongzhi from '../views/home/component/components/mztongzhi.vue'
import menzhen from '../views/home/component/components/components/menzhen-components/menzhen.vue'
// home
// 新闻
import nr_next from '../views/xinwen/nr_next.vue'
// 新闻
// 接种咨询
import jiezhongzixuna from '../views/home/component/components/jz-zixun/yisheng-xq.vue'
import jiezhongzixunb from '../views/home/component/components/jz-zixun/tiwen.vue'
// 接种咨询
// 健康助手
import chengzhang from '../views/j-k-zhushou/components/nav-components/chengzhang.vue'
import fayuceping from '../views/j-k-zhushou/components/nav-components/fayuceping.vue'
import szquxian from '../views/j-k-zhushou/components/nav-components/szquxian.vue'
import shuimiaozhiliang  from '../views/j-k-zhushou/components/ceping-components/shuimiaozhiliang.vue'
import yinshiguanli  from '../views/j-k-zhushou/components/ceping-components/yinshiguanli.vue'
import sgfayubiaozhunbiao  from '../views/j-k-zhushou/components/ceping-components/sgfayubiaozhunbiao.vue'
// 健康助手
// home
import yimiaobaike from '../views/home/component/components/yimiaobaike.vue'
import yimiaocunku from '../views/home/component/components/yimiaocunku.vue'
// home
// 新闻
import jiaoliu from '../views/xinwen/components/navs-component/jiaoliu.vue'
import yuerbaike from '../views/xinwen/components/navs-component/yuerbaike.vue'
import jingcaishipin from '../views/xinwen/components/navs-component/jingcaishipin.vue'
import baobaobushi from '../views/xinwen/components/navs-component/baobaobushi.vue'
import shipin from '../views/xinwen/components/navs-component/shipin.vue'
// 新闻
//我的
// user
import ziliaobianji from '../views/w-d/components/user-components/ziliaobianji.vue'
import xiugaixinxi from '../views/w-d/components/user-components/xiugaixinxi.vue'
// user
// wenben
import wodexiaoxi from '../views/w-d/components/wenben-component/wodexiaoxi.vue'
import wodedingdan from '../views/w-d/components/wenben-component/wodedingdan.vue'
import wodedoudou from '../views/w-d/components/wenben-component/wodedoudou.vue'
import wodeyuyue from '../views/w-d/components/wenben-component/wodeyuyue.vue'
import wodeshoucang from '../views/w-d/components/wenben-component/wodeshoucang.vue'
import bgzhongxin from '../views/w-d/components/wenben-component/bgzhongxin.vue'
import jianyifankui from '../views/w-d/components/wenben-component/jianyifankui.vue'
// wenben
//我的
import store from '../store'
Vue.use(VueRouter)

const routes = [
  {
    path: '/shipin',
    name: 'shipin',
    component:shipin
  },
  {
    path: '/grrenzhuye',
    name: 'grrenzhuye',
    component:grrenzhuye
  },
  {
    path: '/ziliaobianji',
    name: 'ziliaobianji',
    component: ziliaobianji,
  },
  {
    path: '/xiugaixinxi',
    name: 'xiugaixinxi',
    component: xiugaixinxi,
  },
  {
    path: '/wodexiaoxi',
    name: 'wodexiaoxi',
    component: wodexiaoxi,
  },
  {
    path: '/wodedingdan',
    name: 'wodedingdan',
    component: wodedingdan,
  },
  {
    path: '/wodedoudou',
    name: 'wodedoudou',
    component: wodedoudou,
  },
  {
    path: '/wodeyuyue',
    name: 'wodeyuyue',
    component: wodeyuyue,
  },
  {
    path: '/wodeshoucang',
    name: 'wodeshoucang',
    component: wodeshoucang,
  },
  {
    path: '/bgzhongxin',
    name: 'bgzhongxin',
    component: bgzhongxin,
  },
  {
    path: '/jianyifankui',
    name: 'jianyifankui',
    component: jianyifankui,
  },
  {
    path: '/jiaoliu',
    name: 'jiaoliu',
    component: jiaoliu,
  },
  {
    path: '/yuerbaike',
    name: 'yuerbaike',
    component: yuerbaike,
  },
  {
    path: '/jingcaishipin',
    name: 'jingcaishipin',
    component: jingcaishipin,
  },
  {
    path: '/baobaobushi',
    name: 'baobaobushi',
    component: baobaobushi,
  },
  {
    path: '/sgfayubiaozhunbiao',
    name: 'sgfayubiaozhunbiao',
    component: sgfayubiaozhunbiao,
  },
  {
    path: '/yinshiguanli',
    name: 'yinshiguanli',
    component: yinshiguanli,
  },
  {
    path: '/shuimiaozhiliang',
    name: 'shuimiaozhiliang',
    component:shuimiaozhiliang,
  },
  {
    path: '/yimiaobaike',
    name: 'yimiaobaike',
    component: yimiaobaike,
    meta:{
      requiredlogin:true
    }
  },
  {
    path: '/yimiaocunku',
    name: 'yimiaocunku',
    component: yimiaocunku,
    meta:{
      requiredlogin:true
    }
  },
  {
    path: '/szquxian',
    name: 'szquxian',
    component: szquxian,
  },
  {
    path: '/fayuceping',
    name: 'fayuceping',
    component:fayuceping,
  },
  {
    path: '/chengzhang',
    name: 'chengzhang',
    component: chengzhang,
  },
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
    path: '/sz',
    name: 'sz',
    component:sz,
  },
  {
    path: '/xq',
    name: 'xq',
    component:xq
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
    path: '/dl',
    name: 'dl',
    component: dl
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
    meta:{
      requiredlogin:true
    }
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
    if (to.meta.requiredlogin && !store.state.user.islogin && !sessionStorage.getItem('info')) {
      next({path:'/login'})
    }else if(to.meta.dlloginredirect && store.state.user.islogin){
       next({path:"/"})
    }else{
      next()
    }
})

export default router
