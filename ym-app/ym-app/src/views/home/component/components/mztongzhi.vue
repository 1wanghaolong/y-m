<!--
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2021-05-09 16:39:20
 * @LastEditors: sueRimn
 * @LastEditTime: 2021-05-21 12:54:17
-->
<template>
  <div class="tz">
    <van-nav-bar
      title="门诊通知"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    >
    </van-nav-bar>
    <div class="title">预约倒计时</div>
    <br />
    <div class="djs">
      {{ countDown(endDate)}}
    </div>
    <div class="yd-time">预约时间：{{ starTime }}</div>
    <button style="width: 30%; height: 40px; margin-left: 34%;border: 1px solid grey;" @click="yuyue">重新预约</button>
  </div>
</template>
<script>
import moment from "moment";
export default {
  data() {
    return {
      starTime: JSON.parse(localStorage.getItem("time"))[0],
      now: moment(),
      endDate: "",
    };
  },
  methods: {
    onClickLeft() {
      this.$router.push("/");
    },
    PrefixInteger(num, n) {
      return (Array(n).join(0) + num).slice(-n);
    },
    yuyue(){
      this.$router.push('/yuyue')
      localStorage.clear('item')
    }
  },
  mounted() {
    this.endDate = moment(this.starTime).add(2, "h");
    setInterval(() => {
      this.now = moment();
    }, 1000),
      //数字前补 0
      // num传入的数字，n需要的字符长度
      this.PrefixInteger();
  },
  computed: {
    countDown() {
      return function (endDate) {
        let m1 = this.now;
        let m2 = moment(endDate);
        // console.log(endDate);
        var du = moment.duration(m2 - m1, "ms"),
          hours = du.get("hours"),
          mins = du.get("minutes"),
          ss = du.get("seconds");
        if (hours <= 0 && mins <= 0 && ss <= 0) {
          return "已超时";
        } else {
          return (
            this.PrefixInteger(hours, 2) +
            ":" +
            this.PrefixInteger(mins, 2) +
            ":" +
            this.PrefixInteger(ss, 2)
          );
        }
      };
    },
  },
};
</script>
<style scoped>
.title {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 50%;
  font-size: 20px;
}
.djs {
  text-align: center;
  font-size: 24px;
  padding-top: 24px;
}
.yd-time {
  text-align: center;
  padding-top: 24px;
}
</style>