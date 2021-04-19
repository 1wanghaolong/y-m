<template>
  <div class="zhushou">
    <tou></tou>
    <ceping></ceping>
    <navzs></navzs>
    <jianyi></jianyi>
  </div>
</template>
<script>
import tou from "../j-k-zhushou/components/tou";
import ceping from "../j-k-zhushou/components/jianyi";
import navzs from "../j-k-zhushou/components/nav-zs";
import jianyi from "../j-k-zhushou/components/jianyi";
export default {
  components: {
    tou,
    ceping,
    navzs,
    jianyi,
  },
};
</script>
<style scoped>
</style>