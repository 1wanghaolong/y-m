<!--
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2021-05-09 16:39:20
 * @LastEditors: sueRimn
 * @LastEditTime: 2021-05-09 18:53:20
-->
<template>
  <div class="tz">
    <van-nav-bar title="门诊通知" left-text="返回" left-arrow  @click-left="onClickLeft">
    </van-nav-bar>
  </div>
</template>
<script>
export default {
  methods:{
   onClickLeft(){
     this.$router.push('/')
   }
  }
};
</script>
<style scoped>
</style>