<!--
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2021-05-04 14:45:39
 * @LastEditors: sueRimn
 * @LastEditTime: 2021-05-12 01:20:49
-->
<template>
  <div class="xq">
    <!-- header -->
    <van-nav-bar>
      <template #left>
        <van-icon @click="fh" name="arrow-left" size="0.7rem" color="#000" />
      </template>
      <template #right>
        <van-icon name="share-o" size="0.7rem" color="#000" />
      </template>
    </van-nav-bar>
    <!-- header -->
    <div class="wai-kuang">
      <!-- title -->
      <div class="nei-kuang">
        <!-- <title> -->
        <div class="title">{{arr[0]}}</div>
        <!-- </title> -->
        <div class="yulan">
          <van-icon name="browsing-history-o" />
          <span>{{arr[1]}}</span>
        </div>
        <!-- title -->
        <!-- neirong -->
        <div class="h-x"><img src="../assets/x-q/tubiao.jpg" alt="" /></div>
        <div class="xq-span">
          <div class="span">各种疫苗傻傻分不清？</div>
          <div class="span">今天我们就来扒一扒</div>
          <div class="span">让家长们“迷惑”的</div>
          <div class="span">各种疫苗叫法</div>
          <div class="span">看完这篇你就是半个专家 </div>
        </div>
        <div class="xq-span2">
          <div class="span2">什么是</div>
          <div class="span2">免疫规划/非免疫规划</div>
          <div class="span2">免费/自费</div>
          <div class="span2">单苗/联苗</div>
          <div class="span2">减毒疫苗/灭活疫苗 </div>
        </div>
        <!-- tupian -->
        <div class="img">
          <img src="../assets/x-q/2.jpg" alt="" />
          <img src="../assets/x-q/3.jpg" alt="" />
          <img src="../assets/x-q/4.jpg" alt="" />
          <img src="../assets/x-q/5.jpg" alt="" />
          <img src="../assets/x-q/6.jpg" alt="" />
        </div>
        <!-- tupian -->
        <div class="xq-span3">
          <div class="span3">但比起灭活疫苗，对一些特定的人</div>
          <div class="span3">群安全性要差一些</div>
        </div>
        <!-- neirong -->
        <!-- jiewei -->
        <div class="jie-wei">
          <div class="wei-span1">
            <span style="font-weight: bold; color: #474747">文章来源：</span>
            <span>战狼中队</span>
          </div>
          <div class="wei-span2">为你提供专业可靠的预防知识</div>
        </div>
        <!-- jiewei -->
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      arr:[]
    }
  },
  methods: {
    fh() {
      this.$router.go(-1);
    },
  },
  mounted() {
    document.scrollingElement.scrollTop = 0;
    this.arr=this.$route.query
  },
};
</script>
<style scoped>
.wai-kuang {
  width: 100%;
}
.nei-kuang {
  width: 80%;
  margin: 0 auto;
  margin-top: 0.5rem;
}
.title {
  width: 100%;
  font-size: 0.5rem;
  font-weight: bold;
}
.yulan {
  width: 100%;
  display: flex;
  margin-top: 0.5rem;
  color: #bbbbbb;
}
.h-x img {
  width: 100%;
  margin-top: 0.5rem;
}
.xq-span {
  width: 50%;
  margin: 0 auto;
  text-align: center;
  font-weight: bold;
}
.xq-span .span {
  font-size: 0.3rem;
  margin-top: 0.5rem;
  width: 100%;
}
.xq-span2,
.xq-span3 {
  margin: 0 auto;
  margin-top: 1.5rem;
  width: 100%;
  height: 4rem;
  border-radius: 50px;
  background-color: #f5f9f4;
  text-align: center;
  font-size: 0.3rem;
  color: #282a29;
}
.xq-span2 .span2,
.xq-span3 .span3 {
  margin-top: 0.5rem;
  width: 100%;
}
.img {
  margin-top: 1rem;
}
.img img {
  width: 100%;
}
.xq-span3 {
  background-color: #fdfcff;
  height: 2rem;
}
.jie-wei {
  width: 100%;
  height: 1.5rem;
  background-color: #f8f8f8;
  display: flex;
  border-radius: 15%;
  flex-direction: column;
  color: #969696;
  justify-content: center;
  align-items: center;
}
.wei-span1 {
  font-size: 0.3rem;
}
.wei-span2 {
  margin-top: 0.2rem;
}
</style>