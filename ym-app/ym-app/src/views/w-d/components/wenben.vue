<!--
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2021-04-24 16:15:25
 * @LastEditors: sueRimn
 * @LastEditTime: 2021-05-17 15:18:04
-->
<template>
  <div class="wenben">
    <!-- 左对齐 -->
    <div class="nav_van">
      <van-row type="flex" class="nav_item">
        <van-col span="6" @click="xiaoxi">
          <img
            src="../../../assets/icon_svg/dibudaohanglan-.png"
            alt=""
            style="width: 30px; height: 30px"
            class="news"
          />
          <p>我的消息</p>
        </van-col>
        <van-col span="6" @click="dingdan">
          <img
            src="../../../assets/icon_svg/dingdan.png"
            alt=""
            style="width: 30px; height: 30px"
            class="news"
          />
          <p>我的订单</p>
        </van-col>
        <van-col span="6" @click="doudou">
          <img
            src="../../../assets/icon_svg/douzi.png"
            alt=""
            style="width: 30px; height: 30px"
            class="news"
          />
          <p>我的豆豆</p>
        </van-col>
        <van-col span="6" @click="yuyue">
          <img
            src="../../../assets/icon_svg/yuyuexinxi.png"
            alt=""
            style="width: 30px; height: 30px"
            class="news"
          />
          <p>我的预约</p>
        </van-col>
      </van-row>
    </div>
    <div class="line"></div>
    <div class="xinguan">
      <img
        src="../../../assets/img/xinguan.jpg"
        alt=""
        width="100%"
        style="height: 5rem"
      />
    </div>
    <div class="floor">
      <van-field
        label="我的收藏"
        right-icon="arrow"
        readonly
        @click="shoucang"
      />
      <van-field
        label="帮助中心"
        right-icon="arrow"
        readonly
        @click="zhongxin"
      />
      <van-field label="建议反馈" right-icon="arrow" readonly @click="fankui" />
    </div>
    <!-- <img src="../../../assets/xwen/cyq.jpg" alt="" class="img2" width="100%"> -->
  </div>
</template>
<script>
export default {
  methods: {
    xiaoxi() {
      this.$router.push("/wodexiaoxi");
    },
    dingdan() {
      this.$router.push("/wodedingdan");
    },
    doudou() {
      this.$router.push("/wodedoudou");
    },
    yuyue() {
      this.$router.push("/wodeyuyue");
    },
    shoucang() {
      this.$router.push("/wodeshoucang");
    },
    zhongxin() {
      this.$router.push("/bgzhongxin");
    },
    fankui() {
      this.$router.push("/jianyifankui");
    },
  },
};
</script>
<style scoped>
.wenben {
  margin-top: 10px;
}
.nav_item {
  align-items: center;
}
.news {
  margin-left: 30px;
}
.line {
  width: 95%;
  margin: 0 auto;
  height: 20px;
  border-bottom: 1px solid rgba(194, 191, 191, 0.2);
}
p {
  margin-top: 5px;
  text-align: center;
}
.xinguan {
  margin-top: 10px;
}
.floor {
  margin-top: 30px;
}
</style>