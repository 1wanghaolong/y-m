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
  },
};
</script>
<style  scoped>
.home{
background-color: ghostwhite;
}
</style>