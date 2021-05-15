<!--
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2021-05-04 13:59:25
 * @LastEditors: sueRimn
 * @LastEditTime: 2021-05-04 13:59:58
-->
<template>
  <div class="tiwen">
    <!-- 导航 -->
    <van-nav-bar title="陈丹丹医生" left-arrow right-text="提交"  @click-left="onClickLeft" @click-right="onClickRight"/>
    <!-- 提示 -->
    <div class="tishi">
      <span>仅限疫苗接种相关资讯,不作诊断,治疗或用药依据</span>
    </div>
    
    <div class="tiwen_input" >
      <textarea class="text" name="" id="" cols="38" rows="10" placeholder="请输入您的提问信息"></textarea>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    onClickLeft(){
      this.$router.push('/jiezhongzixuna/:id')
    },
    onClickRight(){
      
    },
  },
};
</script>

<style scoped>
.van-nav-bar{
  background-color: #5cd0ad;
  font-weight: bolder;
}
.tishi{
  height: 20px;
  background-color: #faf288;
  padding-top: 5px;
  padding-bottom: 5px;
}
.tishi span{
  padding-left: 8px;
  position: absolute;
  padding-top: 4px;
  color: #f07008;
  box-shadow: 2px #faf288;
}
.text{
  border: none;
  
  padding-left: 5px;
  margin-left: .5em;
  font-size: 1.5em;
}
</style>