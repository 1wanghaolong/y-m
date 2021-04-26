<!--
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2021-04-24 15:23:55
 * @LastEditors: sueRimn
 * @LastEditTime: 2021-04-24 16:39:46
-->
<template>
  <div class="nav-zs">
    <div>
      <van-grid class="grid" :border="false" :column-num="3">
        <van-grid-item icon="photo-o" text="成长记录" />
        <van-grid-item icon="photo-o" text="发育测评" />
        <van-grid-item icon="photo-o" text="生长曲线" />
        </van-grid>
    </div>     
  </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
  .grid{
    height: 3.24rem;
    box-shadow: 0px 0px 0.13rem 0.13rem rgb(185, 189, 185);
    background-color: #ccc;
    margin-top:6.21rem;
  }
</style>