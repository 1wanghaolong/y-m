<!--
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2021-04-24 15:23:55
 * @LastEditors: sueRimn
 * @LastEditTime: 2021-04-24 18:18:45
-->
<template>
  <div class="addessxq">
    <van-nav-bar title="现管理门诊" left-arrow @click-left="onClickLeft">
      <template #right>
        <van-icon name="ellipsis" @click="showShare = true"/>
        <van-share-sheet
          v-model="showShare"
          title="立即分享给好友"
          :options="options"
          @select="onSelect"
        />
      </template>
    </van-nav-bar>
    <div class="x-q">
      <div class="x-q-title">
        <p>
          杭州市西湖区文新街道社区卫生服务中心（4月18日可预约的疫苗厂家为北京生物，预约第二针次居民注意厂家是否一致并与第一针间隔满28天）
        </p>
      </div>
      <div class="x-q-dizhi">
        <div class="dizhi-xx">
          <van-icon name="location-o" />
          <div class="xx-span">
            浙江省杭州市西湖区翠苑街道唐庙街8号旁翠苑街道综合文化站 二楼
          </div>
        </div>
        <div class="dizhi-button">复制地址</div>
      </div>
      <div class="x-q-dizhi">
        <div class="dizhi-xx">
          <van-icon name="phone-o" />
          <div class="xx-span">0571-88067754</div>
        </div>
        <div class="dizhi-button">复制地址</div>
      </div>
      <div class="x-q-dizhi">
        <div class="dizhi-xx">
          <van-icon name="clock-o" />
          <div class="xx-span">每周四|上午08:00-12:00</div>
        </div>
      </div>
    </div>
    <van-divider />
    <!-- 节日假日提醒 -->
    <div class="j-q">
      <div class="j-q-title">节日假日提醒</div>
      <div class="j-q-from">
        <div class="from-title">
          <div class="title-left">节假日</div>
          <div class="title-right">门诊休息日期</div>
        </div>
        <div class="from-title" v-for="i of 3" :key="i">
          <div class="title-left1">自定义</div>
          <div class="title-right1">2021-04-16~2021-04-30</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showShare: false,
      options: [
        { name: "微信", icon: "wechat" },
        { name: "微博", icon: "weibo" },
        { name: "复制链接", icon: "link" },
        { name: "分享海报", icon: "poster" },
        { name: "二维码", icon: "qrcode" },
      ],
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    onSelect(option) {
      console.log(option);
      this.showShare = false;
    },
  },
};
</script>
<style scoped>
.x-q,
.j-q {
  width: 100%;
  width: 90%;
  margin: 0 auto;
}
.x-q-title {
  padding-top: 0.4rem;
  font-size: 0.35rem;
  font-weight: bold;
}
.x-q-dizhi {
  display: flex;
  justify-content: space-between;
}
.dizhi-xx {
  display: flex;
  padding-top: 0.5rem;
  width: 70%;
}
.xx-span {
  margin-left: 0.2rem;
}
.dizhi-button {
  width: 25%;
  display: flex;
  align-items: center;
  background-color: #e9f2ff;
  border-radius: 1.35rem;
  height: 0.54rem;
  margin-top: 0.37rem;
  justify-content: center;
  color: #397182;
}
.j-q-title {
  width: 100%;
  font-weight: bold;
  font-size: 0.32rem;
  height: 0.91rem;
  line-height: 0.91rem;
}
.j-q-from {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  height: 3.24rem;
  border: 1px solid #d9d8de;
}
.from-title {
  width: 100%;
  display: flex;
  justify-content: space-around;
  height: 0.81rem;
}
.title-left {
  font-size: 0.37rem;
  font-weight: bold;
  background-color: #f8f7fd;
  width: 20%;
  justify-content: center;
  align-items: center;
  display: flex;
  border-right: 1px solid #d9d8de;
  border-bottom: 1px solid #d9d8de;
}
.title-right {
  font-size: 0.37rem;
  font-weight: bold;
  background-color: #f8f7fd;
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #d9d8de;
}
.title-left1 {
  width: 20%;
  justify-content: center;
  align-items: center;
  display: flex;
  border-right: 1px solid #d9d8de;
  border-bottom: 1px solid #d9d8de;
}
.title-right1 {
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #d9d8de;
}
</style>