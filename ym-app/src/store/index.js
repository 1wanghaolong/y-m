/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2021-04-28 23:03:31
 * @LastEditors: sueRimn
 * @LastEditTime: 2021-04-28 23:47:33
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    dizhi:""
  },
  mutations: {
    setTest(state,value){
     state.dizhi = value
    }
  },
  actions: {
  },
  modules: {
  }
})
