/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2021-05-09 16:39:20
 * @LastEditors: sueRimn
 * @LastEditTime: 2021-05-21 19:44:03
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import * as vant from './components/vant.js'
import VueAxios from 'vue-axios'
//ES6 编译器识别问题 改为import * as vant from './utils/vant'
import 'lib-flexible'
import 'amfe-flexible'
//无限滚动
import infiniteScroll from "vue-infinite-scroll";
Vue.use(infiniteScroll);
//无限滚动
Vue.config.productionTip = false
Vue.prototype.Vant = vant;

import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:3000';
// 不想在每次请求都设置的话，可以集中设置下
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
Vue.prototype.$axios = axios
Vue.use(VueAxios, axios)

//echarts
import * as echarts from 'echarts';
Vue.prototype.$echarts = echarts
//echarts

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

// //全局守卫写在main中
// //router对象调用  
// //.beforeEach((进入到哪一个路由,从哪一个路由离开,对应的函数)=>{}) 
// router.beforeEach((to,form,next) =>{
//   //如果进入到的路由是登录页或者注册页面，则正常展示
//   if(to.path == '/login' || to.path == '/register' ){     
//       next();
//   }else if( !(localStorage.getItem('token')) ){
//       alert("还没有登录，请先登录！");
//       console.log(localStorage.getItem('token'));
//       next('/login');     //转入login登录页面，登录成功后会将token存入localStorage
//   }else{
//       next();
//   }
// })