<template>
  <div class="zhushou">
    <tou></tou>
    <ceping></ceping>
    <navzs></navzs>
    <jianyi></jianyi>
    <dibudaohang></dibudaohang>
  </div>
</template>
<script>
import tou from "../j-k-zhushou/components/tou";
import ceping from "../j-k-zhushou/components/ceping";
import navzs from "../j-k-zhushou/components/nav-zs";
import jianyi from "../j-k-zhushou/components/jianyi";
import dibudaohang from "../../components/dingbudaohang/daohang";
export default {
  components: {
    tou,
    ceping,
    navzs,
    jianyi,
    dibudaohang
  },
};
</script>
<style scoped>
</style>