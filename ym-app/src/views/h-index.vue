<!--
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2021-05-09 16:39:20
 * @LastEditors: sueRimn
 * @LastEditTime: 2021-05-13 20:33:14
-->
<template>
  <div class="home">
    <tou></tou>
    <daohang></daohang>
    <swiper></swiper>
    <ymzhishi></ymzhishi>
    <dibudaohang></dibudaohang>
  </div>
</template>
<script>
import tou from "./home/component/tou";
import daohang from "./home/component/daohang";
import swiper from "./home/component/swiper";
import ymzhishi from "./home/component/ym-zhishi";
import dibudaohang from "../components/dingbudaohang/daohang";
export default {
  components: {
    tou,
    daohang,
    swiper,
    ymzhishi,
    dibudaohang,
  }
};
</script>
<style  scoped>
.home{
background-color: ghostwhite;
}
</style>