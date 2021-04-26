<!--
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2021-04-24 16:15:25
 * @LastEditors: sueRimn
 * @LastEditTime: 2021-04-24 16:19:35
-->
<template>
    <div class="user">
        <div id="d2">
      <van-skeleton avatar title :row="2" avatar-size="64px" :loading="loading">
          <img src="../../../assets/xwen/cyq.jpg" class="img1">
        <div>  
          <div id="d1">
            <span>用户昵称</span>
          </div>
          <div>
            <span>用户账号</span>
          </div>
        </div>
      </van-skeleton>
    </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            loading:true
        }
    },
    mounted() {
    this.loading = false;
    },
}
</script>
<style scoped>
    #d1,#d2{
    display: flex;
    }
    .img1{
    width:60px;height: 60px;
    border-radius: 50%;
    padding-left: 20px;
    }
</style>