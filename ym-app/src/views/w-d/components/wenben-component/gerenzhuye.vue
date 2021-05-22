<!--
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2021-05-17 14:54:23
 * @LastEditors: sueRimn
 * @LastEditTime: 2021-05-21 20:57:50
-->
<template>
  <div id="gerenzhuye">
      <van-nav-bar
        title="我的豆豆"
        left-arrow
        @click-left="onClickLeft"
      />
      <div class="bckImg">
          <img src="../../../../../public/beijin.jpg" alt="背景图片" srcset="" height="150rpx" width="500rpx">
      </div>
      <div class="touxiang">
          <img src="../../../../../public/touxiang.jpg" alt="" srcset="" width="80rpx">
      </div>
      <div class="head">
          <div class="head-left">
              <h1>{{name.username}}</h1>
              <span>区域:滨江区</span>
              <p>简介:456</p>
          </div>
          <div class="head-right">
            <van-button round type="info" class="btns" @click="means">编辑资料</van-button>
          </div>
          <div class="main">
              <van-grid :border="false" :column-num="4">
              <van-grid-item>
                  <h2>关注</h2>
                  <span>0</span>
              </van-grid-item>
              <van-grid-item>
                <h2>粉丝</h2>
                <span>0</span>
              </van-grid-item>
              <van-grid-item>
                <h2>获赞</h2>
                <span>0</span>
              </van-grid-item>
              <van-grid-item>
                <h2>访客</h2>
                <span>0</span>
              </van-grid-item>
            </van-grid>
          </div>
      </div>
      <van-tabs v-model="active">
        <van-tab title="帖子">
            <img src="../../../../../public/teizi.jpg" alt="" width="100%" height="500rpx"> 
        </van-tab>
        <van-tab title="内容咨询">
            <img src="../../../../../public/jiezhong.jpg" alt="" width="100%" height="500rpx"> 

        </van-tab>

      </van-tabs>
  </div>
</template>
<script>
export default {
  name:'wodedoudou',
  data(){
    return{
      active:0,
      name:JSON.parse(sessionStorage.getItem('info'))  
    }
  },
  methods: {
    onClickLeft(){
       this.$router.go(-1)
    },
    means(){
      this.$router.push('/ziliaobianji')
    }
  },
}
</script>
<style scoped>
  .touxiang{
    border: 1px solid black;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    position: absolute;
    top: 150px;
    transform: rotateX(-50%);
    left: 20px;
    
  }
  .touxiang img{
    border-radius: 50%;
    z-index: 999;
      border: 1px solid black;
    position: relative;
  }
  .head{
    width: 100%;
    height:210px;
    background-color: #eee;
    position: relative;
  }
  .head .head-left{
    position: absolute;
    top: 50px;
    left: 20px;
  }
  .head .head-left h1{
    font-weight: bold;
    font-size: 24px;
  }
  .head .head-left span{
  color: dimgray;
  font-size: 14px;
  display: inline-block;
  padding-top: 5px;
  }
  .head .head-left p{
  color:rgb(44, 44, 44);
  font-size: 14px;
  padding-top: 10px;
  }
  .head .head-right{
    float: right;
    margin-top: 40px;
    margin-right: 20px;
    
  }
   .head .head-right .btns{
     background-color: grey;
     border: none;
      height: 30px; 
   }
   .head .main{
     width:80%;
     position: absolute;
     top: 128px;
     left: 50%;
     transform:translateX(-50%)
   }
   .head .main h2{
      color: lightslategrey;
      font-size: 14px;
    }
    .head .main span{
      padding-top: 5px;
      font-size: 20px;
      font-weight: bold;
    }
</style>