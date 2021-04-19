<template>
  <div class="home">
    <tou></tou>
    <daohang></daohang>
    <swiper></swiper>
    <ymzhishi></ymzhishi>
  </div>
</template>
<script>
import tou from "../home/component/tou";
import daohang from "../home/component/daohang";
import swiper from "../home/component/swiper";
import ymzhishi from "../home/component/ym-zhishi";
export default {
  components: {
    tou,
    daohang,
    swiper,
    ymzhishi,
  },
};
</script>
<style  scoped>
</style>