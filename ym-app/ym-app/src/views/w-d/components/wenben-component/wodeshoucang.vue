<!--
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2021-05-17 14:54:23
 * @LastEditors: sueRimn
 * @LastEditTime: 2021-05-17 15:01:32
-->
<template>
  <div>
    <van-nav-bar title="我的收藏" left-arrow @click-left="onClickLeft" />
    <van-tabs v-model="active" @click="onClick" color="#36d" font-weight="bold">
      <van-tab title="文章">

      </van-tab>
      <van-tab title="帖子">内容2</van-tab>
      <van-tab title="微课">内容3</van-tab>
      <van-tab title="辅食">内容4</van-tab>
    </van-tabs>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: 1,
    };
  },
  methods: {
    
    onClick() {
      console.log("可通过name, title（标签对应的标识符和标题）来进行传参");
    },
    onClickLeft() {
      this.$router.go(-1);
  },
  },
  
};
</script>
<style scoped>

</style>