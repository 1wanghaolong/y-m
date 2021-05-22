<!--
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2021-05-17 14:54:23
 * @LastEditors: sueRimn
 * @LastEditTime: 2021-05-17 15:02:23
-->
<template>
  <div>
    <van-nav-bar
      title="帮助中心"
      left-arrow
      @click-left="onClickLeft"
      right-text="电话客服"/>  
    
    <van-field value="查看全部问题" readonly is-link />
    <div id="d1"></div>
    <van-cell-group>
      <div class="big">热门问题</div> 
      <van-field
        value="如何修改宝宝的接种门诊？"
        readonly
        is-link
        arrow-direction="down"/>
      <van-field
        value="门诊放预约号时间是什么时候？"
        readonly
        is-link
        arrow-direction="down"/>
      <van-field
        value="不能绑定手机，提示“该手机已经注册”？"
        readonly
        is-link
        arrow-direction="down"/>
      <van-field
        value="宝宝入学入托如何开具查验证明？"
        readonly
        is-link
        arrow-direction="down"/>
      <van-field
        value="如何查看门诊疫苗库存情况？"
        readonly
        is-link
        arrow-direction="down"/>
      </van-cell-group>
    <div id="d1"></div>
      <van-cell-group>
         <div class="big">新手引导</div>     
      <van-field
        value="如何添加宝宝信息？"
        readonly
        is-link
        arrow-direction="down"
      />
      <van-field
        value="如何预约接种疫苗？"
        readonly
        is-link
        arrow-direction="down"
      />
      <van-field
        value="如何取消疫苗？"
        readonly
        is-link
        arrow-direction="down"
      />
      </van-cell-group
    >
    <br>
    <br>
    <br>
        <van-button type="primary" block color="#36d">在线客服</van-button>   
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    onClickLeft(){
      this.$router.go(-1)
    }
  },
};
</script>
<style scoped>
#d1{
    height: 8px;
    background-color: #f8f8f8;
}
.big{
  padding-left: 15px;
  font-size: 20px;
  font-weight: bold;
  height: 40px;
  line-height: 40px;
}
</style>