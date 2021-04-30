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
      <dibudaohang></dibudaohang>
    </div>
  </div>
</template>
<script>
import search from "../xinwen/components/search";
import wenben from "../xinwen/components/wenben";
import navs from "../xinwen/components/navs";
import neirong from "../xinwen/components/neirong";
import dibudaohang from "../../components/dingbudaohang/daohang";
export default {
  components: {
    search,
    wenben,
    navs,
    neirong,
    dibudaohang
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