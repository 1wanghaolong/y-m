/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2021-04-28 23:03:31
 * @LastEditors: sueRimn
 * @LastEditTime: 2021-05-14 14:46:34
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    dizhi:"",
    user:{
      name:'',
      islogin:false
    }
  },
  mutations: {
    setTest(state,value){
     state.dizhi = value
    },
    edit(state,info){
      state.user.name = info.username
      state.user.islogin = true
    }
  },
  actions: {
  },
  modules: {
  }
})
