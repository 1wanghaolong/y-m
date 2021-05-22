<!--
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2021-05-09 19:15:28
 * @LastEditors: sueRimn
 * @LastEditTime: 2021-05-20 19:15:22
-->
<template>
  <div class="menzhen">
    <van-nav-bar
      title="门诊预约"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <div class="x-q">
      <div class="x-q-title">
        <p>
          {{
            this.xq[this.id].hcinfor || this.xq2[this.id].hcinfor
          }}（4月18日可预约的疫苗厂家为北京生物，预约第二针次居民注意厂家是否一致并与第一针间隔满28天）
        </p>
      </div>
      <div class="x-q-dizhi">
        <div class="dizhi-xx">
          <van-icon name="location-o" />
          <div class="xx-span">
            {{ this.xq[this.id].hcaddress ||  this.xq2[this.id].hcaddress}}
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
          <div class="xx-span">{{ this.xq[this.id].hctime  || this.xq2[this.id].hctime}}</div>
        </div>
      </div>
    </div>
    <div class="button-yuyue">
      <button class="button" @click="dj()">点击预约</button>
    </div>
  </div>
</template>
<script>
import { Dialog } from "vant";
export default {
  data() {
    return {
      show: false,
      id: this.$route.query.id,
      xq: JSON.parse(sessionStorage.getItem("yuyuexq")),
      xq2: JSON.parse(sessionStorage.getItem("yuyuexq2")),
    };
  },
  methods: {
    dj() {
      Dialog.confirm({
        title: "疫苗预约",
        message: "请认真阅读是否预约(在两个小时内预约有效)",
      })
        .then((confirm) => {
          var moment = require('moment');
          if (confirm) {
            let time = moment().format('YYYY-MM-DD HH:mm:ss')
            localStorage.setItem('time',JSON.stringify([time]))
            // console.log(time);
            this.$router.push('/')
          }
        })
        .catch((e) => {
          alert('预约失败')
        });
    },
    showPopup() {
      this.show = true;
    },
    onClickLeft() {
      this.$router.go(-1);
    },
  },
  mounted() {
    // console.log(this.xq,this.id);
  },
};
</script>
<style scoped>
.yinxi {
  width: 200px;
  height: 200px;
  background-color: white;
}
.button-yuyue {
  width: 90%;
  margin: 0 auto;
  margin-top: 27px;
}
.button-yuyue button {
  width: 100px;
  height: 50px;
  background-color: lightgreen;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  color: white;
  border-radius: 10px;
  border: 0px;
  font-size: 14px;
}
.x-q,
.j-q {
  width: 100%;
  width: 90%;
  margin: 0 auto;
}
.x-q {
  width: 90%;
  margin: 0 auto;
  margin-top: 9%;
  height: 230px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
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
</style>