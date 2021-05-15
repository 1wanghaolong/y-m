<!--
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2021-05-09 16:39:20
 * @LastEditors: sueRimn
 * @LastEditTime: 2021-05-09 19:11:50
-->
<template>
  <div class="xg">
    <van-icon name="arrow-left" class="icon"  @click="fanhui"/>
    <img src="img\x-g-img\s-y.jpg" alt="" id="img" />
    <div id="j-d" @click="jiandang"></div>
    <div id="y-y" @click="yuyue"></div>
  </div>
</template>
<script>
export default {
  methods: {
    fanhui() {
      this.$router.go(-1);
    },
    yuyue() {
      if (sessionStorage.getItem("yuyuexq")) {
        this.$router.push("/yuyue");
      } else {
        alert("请先创建档案");
      }
    },
    jiandang() {
      if (sessionStorage.getItem("info")) {
        this.$router.push("/steps1");
      } else {
        alert("请先登录");
      }
    },
  },
};
</script>
<style  scoped>
.icon {
  position: absolute;
  z-index: 10;
  font-size: 24px;
  left: 10px;
  top: 10px;
  color: floralwhite;
}
#img {
  width: 100%;
  position: relative;
}
#j-d {
  position: absolute;
  z-index: 1;
  width: 1.51rem;
  height: 0.72rem;
  top: 5.85rem;
  left: 7.2rem;
}
#y-y {
  position: absolute;
  z-index: 1;
  width: 1.51rem;
  height: 0.72rem;
  top: 8.85rem;
  left: 7.2rem;
}
</style>