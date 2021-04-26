<template>
  <div class="xg">
    <van-icon name="arrow-left" class="icon"  @click="fanhui"/>
    <img src="img\x-g-img\s-y.jpg" alt="" id="img" />
    <router-link  tag="div"  id="j-d" to="/steps1"/>
    <router-link  tag="div"  id="y-y" to="/yuyue"/>
  </div>
</template>
<script>
export default {
  methods: {
    fanhui(){
      this.$router.go(-1)
    }
  },
};
</script>
<style  scoped>
.icon{
  position: absolute;
  z-index: 10;
  font-size: 24px;
  left: 10px;
  top: 10px;
  color: floralwhite;
}
#img {
  width: 100%;
  position: relative;
}
#j-d {
  position: absolute;
  z-index: 1;
  width: 1.51rem;
  height: 0.72rem;
  top: 5.85rem;
   left: 7.2rem;
}
#y-y {
  position: absolute;
    z-index: 1;
    width: 1.51rem;
    height: 0.72rem;
    top: 8.85rem;
    left: 7.2rem;
}
</style>