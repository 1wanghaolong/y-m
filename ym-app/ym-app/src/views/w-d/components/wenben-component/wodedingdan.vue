<!--
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2021-05-17 14:54:23
 * @LastEditors: sueRimn
 * @LastEditTime: 2021-05-17 14:56:45"
-->
<template>
  <div id="wodedingdna">
        <van-nav-bar title="我的订单"  left-arrow class="tab"  @click-left="onClickLeft"></van-nav-bar>
       <van-tabs v-model="active" class="shop">
          <van-tab title="疫苗">
              <div class="dingdan"  id="btns" >
                <van-button round type="info" class="btn" >全部</van-button>
                <van-button round type="info" class="btn" >待付款</van-button>
                <van-button round type="info" class="btn" >已付款</van-button>
                <van-button round type="info" class="btn" >退款</van-button>
                <van-button round type="info" class="btn" >已取消</van-button>
            </div>
            <div>
                <img src="../../../../../public/dingdan.jpg" height="500px" width="375px">
            </div>
          </van-tab>
          <van-tab title="课程">
               <!-- <img src="../../../../../public/dingdan.jpg" height="600px" width="375px"> -->
          </van-tab>
          <van-tab title="保险">
               <!-- <img src="../../../../../public/dingdan.jpg" height="600px" width="375px"> -->
          </van-tab>
         
       </van-tabs>
     
  </div>
</template>
<script>
export default {
  name:'wodedingdna',
  data(){
    return{
      active:0,
      
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
  .tab{
    color: #020a03;
    font-weight: bold;
   
  }
  .shop{
    border-bottom: 1px solid #eee;

  }
  .dingdan{
    margin-top:5px;
    position:absolute;
    top: 50px;
    z-index: 10;
  }
  .dingdan .btn{
    /* width: 80px; */
    height: 30px;
    background-color: #eee;
    color: #1f222a;
    border:none;
    font-size: 12.5px;
    margin-left: 10px;
  }
  /* .dingdan .btn:first-child{
      background-color: #aad144;
      opacity: 0.6;
      color: #0ec949;
  } */
  .dingdan .btncheck{
    background-color: #aad144;
    opacity: 0.6;
    color: #0ec949;

  }
</style>