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
    <div class="item" v-for="i of 8" :key="i">
      <div class="title">
        <div class="title-xq">
          <span id="z-j">专家审核</span>
          <span class="xq"> 这个死亡率100%的传染病，夏天有开始活跃了</span>     
        </div>
        <span class="f-w">17.4万家长读过</span>
      </div>
      <div class="img">
        <img
          src="https://gw.alicdn.com/tfs/TB1OIxTcLc3T1VjSZLeXXbZsVXa-183-144.png?getAvatar=1"
          alt=""
        />
      </div>
    </div>
  </div>
</template>
<script>
export default {
    
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
  height: 3.24rem;
  display: flex;
  /* border-top: 1px solid  rgb(185, 189, 185);
  border-bottom: 0.5px solid  rgb(185, 189, 185); */
  }
  .title {
  font-size: 0.32rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 2.7rem;
  margin-top: 0.54rem;
  }
  .title-xq {
  display: flex;
  flex-wrap: wrap;
  }
  .title-xq #z-j {
  margin-top: 0.54rem;
  background-color: #f1f1fd;
  width: 1.40rem;
  height: 0.54rem;
  color: #a2b6d7;
  display: flex;
  justify-content: center;
  align-items: center;
  }
  .xq {
  font-weight: bold;
  font-size: 0.43rem;
  }
  .img img {
  width: 100%;
  height: 4.05rem;
  }
  .f-w {
  color: #9f9f9f;
  }
</style>