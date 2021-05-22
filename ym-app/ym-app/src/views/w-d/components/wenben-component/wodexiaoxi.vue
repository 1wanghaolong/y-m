<!--
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2021-05-17 14:54:23
 * @LastEditors: sueRimn
 * @LastEditTime: 2021-05-17 14:56:32
-->
<template>
  <div id="wodexiaoxi">
       <van-nav-bar title="互动" left-text='返回' left-arrow @click-left="onClickLeft"></van-nav-bar>
       <van-tabs v-model="active" class="hudong">
          <van-tab title="社区">
                <img src="../../../../../public/wode.jpg" height="600px" width="375px">
          </van-tab>
          <van-tab title="育儿百科">
               <img src="../../../../../public/wode.jpg" height="600px" width="375px">
          </van-tab>
          <van-tab title="问医生">
               <img src="../../../../../public/wode.jpg" height="600px" width="375px">
          </van-tab>
          <van-tab title="辅食">
               <img src="../../../../../public/wode.jpg" height="600px" width="375px">
          </van-tab>
       </van-tabs>
     
  </div>
</template>
<script>
export default {
  name:'wodexiaoxi',
    data(){
      return{
        active: 0,
      }
    },
     methods: {
      onClickLeft(){
        this.$router.go(-1)
      }
    },
}
</script>
<style scoped>
    .hudong{
      font-size: 14px;
      
    }
</style>