<!--
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2021-05-02 21:57:16
 * @LastEditors: sueRimn
 * @LastEditTime: 2021-05-05 22:00:35
-->
<template>
  <div
    style="text-align: center"
    v-infinite-scroll="loadmore"
    infinite-scroll-disabled="loading"
    infinite-scroll-distance="10"
  >
    <van-nav-bar left-arrow>
      <template #title>
        {{ head }}
      </template>
      <template #left>
        <van-icon name="arrow-left" size="18" color="#000" @click="back"/>
      </template>
    </van-nav-bar>
    <div style="margin-top: 20px" v-for="(item, i) in xinwen" :key="i">
      <div
        style="
          text-align: left;
          margin-left: 20px;
          font-size: 16px;
          margin-bottom: 20px;
        "
      >
        <span>时间：</span><span>{{ item.data }}</span>
      </div>
      <div
        style="text-align: left; margin-left: 20px; font-size: 16px"
        v-html="item.content"
      ></div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      loading: false,
      xinwen: [],
      head: "",
    };
  },
  methods: {
    loadmore() {
      this.loading = true;
    },
    loadxinwen() {
      let a = this.$route.query.head;
      this.head = a;
      this.axios.get(`/xinwen/${a}`).then((res) => {
        this.xinwen = res.data.results;
      });
    },
    back() {
      this.$router.go(-1)
    },
  },
  mounted() {
    this.loadmore();
    this.loadxinwen();
  },
};
</script>
<style scoped>
</style>