<!--
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2021-04-24 15:23:55
 * @LastEditors: sueRimn
 * @LastEditTime: 2021-05-21 20:53:53
-->
<template>
  <div class="nav-zs">
    <div>
      <van-grid class="grid" :border="false" :column-num="3">
        <van-grid-item icon="smile-o" text="成长记录" @click="cz" />
        <van-grid-item icon="orders-o" text="健康测评" @click="fayu" />
        <van-grid-item
          icon="chart-trending-o"
          text="生长曲线"
          @click="quxian"
        />
      </van-grid>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    cz() {
      this.$router.push("/chengzhang");
    },
    fayu() {
      this.$router.push("/fayuceping");
    },
    quxian() {
      this.$router.push("/szquxian");
    },
  },
};
</script>
<style scoped>
.grid {
  height: 3.24rem;
  /* box-shadow: 0px 0px 0.13rem 0.13rem rgb(185, 189, 185); */
  background-color: #ccc;
  margin-top: 6.21rem;
}
</style>