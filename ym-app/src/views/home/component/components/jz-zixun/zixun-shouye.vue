<!--
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2021-05-04 13:56:46
 * @LastEditors: sueRimn
 * @LastEditTime: 2021-05-14 20:36:02
-->
<template>
  <div class="sy">
    <!-- 导航 -->
    <van-nav-bar title="接种咨询" left-arrow @click-left="onClickLeft"/>
    <!-- 医生轮播图 -->
    <van-swipe :loop="false" :width="150">
      <van-swipe-item>
        <img class="swipe_img" src="/images/16.jpg">
        <span class="swipe_span1">于超</span>
        <span class="swipe_span2">中国最好医师,经验丰富</span>
        <span class="swipe_span3">今日还有80个提问名额</span>
      </van-swipe-item>
      <van-swipe-item>
        <img class="swipe_img" src="/images/23.jpg">
        <span class="swipe_span1">孟凡勇</span>
        <span class="swipe_span2">中国好医师,经验丰富</span>
        <span class="swipe_span3">今日还有70个提问名额</span>
      </van-swipe-item>
      <van-swipe-item>
        <img class="swipe_img" src="/images/24.jpg">
        <span class="swipe_span1">雷霆嘎巴</span>
        <span class="swipe_span2">中国好医师,经验丰富</span>
        <span class="swipe_span3">今日还有60个提问名额</span>
      </van-swipe-item>
      <van-swipe-item>
        <img class="swipe_img" src="/images/25.jpg">
        <span class="swipe_span1">王哈皮</span>
        <span class="swipe_span2">中国好医师,经验丰富</span>
        <span class="swipe_span3">今日还有80个提问名额</span>
      </van-swipe-item>
    </van-swipe>
    <!-- 详细信息 -->
    <router-link :to="`/jiezhongzixuna/${v.id}`" class="info" v-for="(v,i) of list" :key="i" style="color:black;">
      <img :src="v.image">
      <div>
        <p>{{v.docname}}</p>
        <div class="info1">
          <span>{{v.docinfo}}</span>
        </div>   
      </div>
    </router-link>
  </div>
</template>
<script>
export default {
  data(){
    return {
      list:[],
    }
  },
  methods:{
    onClickLeft(){
      this.$router.push('/')
    },
  },
  mounted(){
    this.axios.get("/jiezhongzixun").then((res)=>{
      // console.log(res.data.result);
      this.list = res.data.result;

    });
  },
}
</script>
<style scoped>
.van-nav-bar{
  background-color: #5cd0ad;
  font-weight: bolder;
}
.van-swipe{
  background-color: #eee;
  padding: 10px;
  padding-left: 0px;
}
.van-swipe-item{
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
}
.swipe_img{
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin: 10px;
}
.swipe_span1{
  margin: 10px;
  font-weight: bolder;
  font-size: 16px;
}
.swipe_span2{
  margin: 10px;
  font-size: 1px;
}
.swipe_span3{
  margin: 14px; 
}
.info{
  display: flex;
  align-items: center;
  border-bottom: 1px solid gray;
  line-height: 0.8rem;
}
.info img{
  width: 80px;
  height: 80px;
  border-radius: 50%;
  padding: 10px;
}
.info p{
  margin-left: 20px;
  margin-top: 20px;
  font-weight: bolder;
  font-size: 20px;
}
.info1{
  height: 50px;
  overflow: hidden;
  text-overflow:ellipsis;
  margin-bottom: 20px
}
</style>