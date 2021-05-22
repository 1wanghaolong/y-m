<!--
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2021-05-17 14:10:59
 * @LastEditors: sueRimn
 * @LastEditTime: 2021-05-21 17:54:16
-->
<template>
  <div id="yimiaocunkun">
    <van-nav-bar
      title="疫苗库存"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <van-divider content-position="left">{{ addesss }}</van-divider>
    <div style="position: relative; top: 0px">
      <div
        v-for="(item, i) in arr"
        :key="i"
        style="
          display: block;
          padding: 10px 10px;
          border-bottom: 1px solid #aaa;
          color: black;
        "
      >
        <p style="margin-bottom: 8px; font-weight: 500">{{ item.hcaddress }}</p>
        <div
          style="
            margin-bottom: 8px;
            display: flex;
            justify-content: space-between;
          "
        >
          <span style="color: #aaa; font-size: 12px">{{ item.hcinfor }}</span
          ><span>{{ item.vaccincount }}km</span>
        </div>
        <div style="display: flex; justify-content: space-between">
          <span style="color: #fbc"
            >剩余源号：<span>{{ item.vaccincoutnow }}</span></span
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { location } from "../../../../components/gaodeditu/map.js";
import { yiyuanaccess } from "../../../../components/axiosAPI";
export default {
  data() {
    return {
      data: "正在获取请等待",
      addesss: "正在获取请等待",
      arr: [],
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    /**获取地图定位*/
    getLocation() {
      let _that = this;
      let geolocation = location.initMap("map-container"); //定位
      AMap.event.addListener(geolocation, "complete", (result) => {
        _that.lat = result.position.lat;
        _that.lng = result.position.lng;
        _that.province = result.addressComponent.province;
        _that.city = result.addressComponent.city;
        _that.district = result.addressComponent.district;
        // console.log(result);
        this.data = result.addressComponent.district;
        this.addesss =
          result.addressComponent.city +
          "/" +
          result.addressComponent.province +
          "/" +
          result.addressComponent.district;
        this.$nextTick(() => {
          yiyuanaccess(result.addressComponent.district).then((res) => {
            // console.log(res);
            this.arr = res.data.result;
          });
        });
      });
    },
  },
  mounted() {
    this.getLocation();
  },
};
</script>
<style scoped>
</style>