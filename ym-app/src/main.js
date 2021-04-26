import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import * as vant from './components/vant.js'
//ES6 编译器识别问题 改为import * as vant from './utils/vant'
import 'lib-flexible'
import 'amfe-flexible'
//无限滚动
import infiniteScroll from "vue-infinite-scroll";
Vue.use(infiniteScroll);
//无限滚动
Vue.config.productionTip = false
Vue.prototype.Vant = vant;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
