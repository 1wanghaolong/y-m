<template>
  <div class="swiper">
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item>1</van-swipe-item>
      <van-swipe-item>2</van-swipe-item>
      <van-swipe-item>3</van-swipe-item>
      <van-swipe-item>4</van-swipe-item>
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
  line-height: 4.05rem;
  text-align: center;
  background-color: #39a9ed;
}
</style>
    