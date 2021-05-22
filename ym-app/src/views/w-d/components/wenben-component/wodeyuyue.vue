<!--
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2021-05-17 14:54:23
 * @LastEditors: sueRimn
 * @LastEditTime: 2021-05-17 15:00:28
-->
<template>
  <div id="wodeyuyue">
       <van-nav-bar
        title="预约记录"
        left-arrow
        @click-left="onClickLeft"
       
      />
      <div class="continer">
          <div class="imgs">
            <img src="../../../../../public/yuyue.jpg" alt="" width="100rpx">
          </div>
          <p>您还未使用过预约服务，暂无预约记录</p>
          <div class="btns">
             <van-button round type="info" class="btn">预  约</van-button>
          </div>
         
      </div>
  </div>
</template>
<script>
export default {
  name:'wodeyuyue',
  methods: {
  onClickLeft(){
      this.$router.go(-1)
  },
   
  },
}
</script>
<style scoped>

  .continer .imgs{
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: space-between;
    margin-top: 100px;
  }
  .continer p{
    font-size: 16px;
    color: rgb(161, 155, 155);
    padding-top: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: space-between;
    
  }
  .continer .btns{
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: space-between;
    margin-top: 10px;
  }
  .continer .btn{
    width: 90px;
    font-size: 18px;
    height: 35px;
    background-color: rgb(98, 230, 98);
  }
</style>