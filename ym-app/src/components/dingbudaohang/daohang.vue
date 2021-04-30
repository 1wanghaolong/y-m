<template>
  <div class="daohang">
    <van-tabbar
      v-model="active"
      active-color="#5FBEFF"
      inactive-color="#00ff0"
      @change="onChange"
      route
    >
      <div class="ym">
        <img src="../../assets/daohang/yimiao.svg" alt="" style="width: 27px" />
        <van-tabbar-item to="/"> 疫苗</van-tabbar-item>
      </div>
      <div class="ym">
        <img src="../../assets/daohang/tubiaozhizuomoban-.svg" alt="" style="width: 27px" />
        <van-tabbar-item to="/zhushou" @click="gouwuche"
          >健康助手</van-tabbar-item
        >
      </div>
      <div class="ym">
         <img src="../../assets/daohang/xinwen.svg" alt="" style="width: 27px" />
        <van-tabbar-item  to="/xinwen" @click="shezhi"
          >新闻</van-tabbar-item
        >
      </div>
      <div class="ym">
         <img src="../../assets/daohang/wode.svg" alt="" style="width: 27px" />
        <van-tabbar-item  to="/wode" @click="shezhi"
          >我的</van-tabbar-item
        >
      </div>
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
<style scoped>
.ym {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.van-tabbar--fixed {
  display: flex;
  justify-content: space-around;
}
</style>