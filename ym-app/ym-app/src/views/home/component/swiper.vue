<template>
  <div class="swiper">
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item>
        <img
          src="img\s-y\swiper\t01a666587398ab4979.jpg"
          alt=""
        />
      </van-swipe-item>
      <van-swipe-item
        ><img
          src="img\s-y\swiper\t01bf441915de4c2b11.jpg"
          alt=""
      /></van-swipe-item>
      <van-swipe-item
        ><img
          src="img\s-y\swiper\t011ea413eef3679663.jpg"
          alt=""
      /></van-swipe-item>
    </van-swipe>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 0.5rem;
  text-align: center;
}
.van-swipe-item img {
  width: 100%;
  height: 4.2rem;
}
</style>
    