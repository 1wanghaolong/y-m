<template>
  <div class="daohang">
    <van-tabbar
      v-model="active"
      active-color="#ee0a24"
      inactive-color="#000"
      @change="onChange"
      route
    >
      <van-tabbar-item to="/" icon="new-o"> 疫苗</van-tabbar-item>
      <van-tabbar-item icon="coupon-o" to="/zhushou" @click="gouwuche"
        >健康助手</van-tabbar-item
      >
      <van-tabbar-item icon="orders-o" to="/xinwen" @click="shezhi"
        >新闻</van-tabbar-item
      >
      <van-tabbar-item icon="user-circle-o" to="/wode" @click="shezhi"
        >我的</van-tabbar-item
      >
    </van-tabbar>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: 0,
    };
  },
  methods: {
    gouwuche() {},
    shezhi() {},
    gengduo() {},
    onChange(index) {
      console.log(index);
    },
  },
};
</script>
<style>
</style>