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
       
         

         <van-row>
        <van-col span="8" style="height:110px"> 
            <div class="avatar">
              <img src="../../../assets/img/xinguan.jpg" alt="" width="100" height="100">
            </div>
        </van-col>
        <van-col span="8" class="nickname">
          <h2>小豆丁</h2>
           <h5>ID账号：</h5>
        </van-col>
        <!-- <van-col span="8" class="homepage">个人主页<span class="icon_arrow"> > </span> </van-col> -->
      </van-row>
        
          
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
   
    .avatar{
      
      width: 100px;
      height: 100px;
      /* background-color: brown; */
      border-radius: 50%; 
      margin-left: 20px;
      
    }
    .avatar img{
      padding-top:6px;
      border-radius: 50%; 
    }
    .nickname>h2{
        position: absolute;
        left: 140px;
        top: 70px;
        font-size: 20px;
        font-weight: bold;
    }
    .nickname>h5{
        position: absolute;
        left: 140px;
        top: 110px;
        font-size: 14px;
        
    }
    .homepage{
      position: absolute;
      left: 280px;
      top: 100px;
      transform: translateY(-50%);
      font-size: 16px;
    }
    .icon_arrow{
     font-size: 18px;
     margin-top: 10px;
   }
</style>