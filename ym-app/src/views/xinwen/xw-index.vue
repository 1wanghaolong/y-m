<!--
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2021-05-09 16:39:20
 * @LastEditors: sueRimn
 * @LastEditTime: 2021-05-10 19:45:27
-->
<template>
  <div class="xinwen">
    <search style="position:fixed;z-index:1;width:100%;"></search>
    <div v-infinite-scroll="loadmore"
    infinite-scroll-disabled="loading"
    infinite-scroll-distance="10" 
    >
      <wenben></wenben>
      <navs></navs>
      <neirong></neirong>
      <dingbudaohang></dingbudaohang>
    </div>
  </div>
</template>
<script>
import search from "../xinwen/components/search";
import wenben from "../xinwen/components/wenben";
import navs from "../xinwen/components/navs";
import neirong from "../xinwen/components/neirong";
import dingbudaohang from '../../components/dingbudaohang/daohang'
export default {
  components: {
    search,
    wenben,
    navs,
    neirong,
    dingbudaohang
  },
  data(){
    return {
      loading:false
    }
  },
  methods:{
    loadmore(){
      this.loading=true
    }
  },
  mounted(){
    this.loadmore();
  }
};
</script>
<style scoped>
</style>