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
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
