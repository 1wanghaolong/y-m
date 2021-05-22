<!--
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2021-05-17 09:41:20
 * @LastEditors: sueRimn
 * @LastEditTime: 2021-05-17 10:52:35
-->
<template>
  <div id="szquxian">
    <van-nav-bar left-text="返回" left-arrow  @click-left="onClickLeft"> </van-nav-bar>
    <div id="myChart" :style="{ width: '100%', height: '600px' }"></div>
  </div>
</template>
<script>
export default {
  name: "szquxian",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
    };
  },
  mounted() {
    this.drawLine();
  },
  methods: {
    onClickLeft(){
      this.$router.go(-1)
    },
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("myChart"));
      // 绘制图表
      myChart.setOption({
        title: {
          text: "身高成长曲线",
          left:'40%'
        },
        tooltip: {
          trigger: "axis",
        },
        legend: {
          data: ['男孩身高/cm','女孩身高/cm'],
          top:'5%'
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
          show:true
        },
        toolbox: {
          feature: {
            saveAsImage: {},
          },
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: ["2岁", "3岁", "4岁", "5岁", "6岁", "7岁", "8岁",'9岁','10岁','11岁','12岁'],
        },
        yAxis: {
          type: "value",
          name:'cm'
        },
        series: [
          {
            name: "女孩身高/cm",
            type: "line",
            stack: "女孩身高",
            data: [94, 103, 110, 118, 126, 132, 139,143,151,157,165],
          },
          {
            name: "男孩身高/cm",
            type: "line",
            stack: "男孩身高",
            data: [95, 105, 112, 120, 127, 134, 140,145,152,158,166],
          },
        ],
      });
    },
  },
};
</script>
<style scoped>
</style>