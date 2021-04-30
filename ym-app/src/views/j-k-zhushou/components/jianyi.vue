<!--
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2021-04-24 15:23:55
 * @LastEditors: sueRimn
 * @LastEditTime: 2021-04-24 16:46:32
-->
<template>
  <div class="janyi">
    <div class="jy">
      <span id="span_1">养育建议</span>
      <span id="span_2">- 根据宝宝状况为你推荐</span>
    </div>
    <div class="item" v-for="(v,i) of list" :key="i">
      <div class="title">
        <div class="title-xq">
          <span id="z-j">专家审核</span>
          <span class="xq">{{v.newstitle}}</span>     
        </div>
        <span class="f-w">17.4万家长读过</span>
      </div>
      <div class="img">
        <img :src="v.img" alt=""/>
      </div>
    </div>
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

  },
  mounted(){
    this.axios.get("/news").then((res)=>{
      console.log(res.data.result);
      this.list = res.data.result;
    });
  },
}
</script>
<style scoped>
  .jy{
    margin-top: 0.81rem;
  }
  #span_1{
    padding-left: 0.4rem;
    font-weight: bold;
    font-size: 0.64rem;
  }
  #span_2{
    padding-left: 0.27rem;
    font-size: 0.43rem;
    color: rgb(223, 223, 12);
    font-style: italic;
  }
  .item {
  margin-left: 0.2rem;
  height: 4.05rem;
  display: flex;
  margin-top: 0.4rem;
  border-bottom: 1px dashed gray;
  /* border-top: 1px solid  rgb(185, 189, 185);
  border-bottom: 0.5px solid  rgb(185, 189, 185); */
  }
  .title {
  font-size: 0.32rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 2.7rem;
  margin-top: 0.3rem;
  }
  .title-xq {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  }
  .title-xq #z-j {
  background-color: #f1f1fd;
  width: 1.4rem;
  height: 0.54rem;
  color: #a2b6d7;
  display: flex;
  justify-content: center;
  align-items: center;
  }
  .xq {
  font-weight: bold;
  width: 211px;
  margin-top: 15px;
  }
  .img img {
  width: 4.16rem;
  height: 2.7rem;
  }
  .f-w {
  color: #9f9f9f;
  }
</style>