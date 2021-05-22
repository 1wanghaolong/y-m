<!--
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2021-04-24 15:23:55
 * @LastEditors: sueRimn
 * @LastEditTime: 2021-05-21 14:22:29
-->
<template>
  <div class="tou">
    <van-nav-bar>
      <template #title>
        <span style="color: #fff">健康助手</span>
      </template>
    </van-nav-bar>
  </div>
</template>
<script>
export default {
  methods: {
    onClickLeft() {
      Toast("返回");
    },
    onClickRight() {
      Toast("按钮");
    },
  },
};
</script>
<style scoped>
.tou {
  width: 100%;
}
#dl {
  margin-right: 0.2rem;
}
.van-nav-bar {
  background-color: #5cd0ad;
  height: 1.35rem;
}
</style>
    