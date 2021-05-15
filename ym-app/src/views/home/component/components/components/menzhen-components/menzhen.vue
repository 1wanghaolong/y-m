<!--
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2021-05-09 19:15:28
 * @LastEditors: sueRimn
 * @LastEditTime: 2021-05-09 19:38:37
-->
<template>
  <div class="menzhen">
    <van-nav-bar
      title="门诊预约"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
  </div>
</template>
<script>
export default {
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
  },
};
</script>
<style scoped>
</style>