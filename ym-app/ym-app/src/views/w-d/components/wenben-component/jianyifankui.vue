<!--
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2021-05-17 14:54:23
 * @LastEditors: sueRimn
 * @LastEditTime: 2021-05-17 15:02:59
-->
<template>
  <div id="jianyifankui">
    <van-nav-bar
      title="建议反馈"
      left-arrow
      right-text="提交"
      @click-left="onClickLeft"
      @click-right="onClickRight" />   
    <van-cell-group>
      <div class="big">反馈问题类型</div> 
      <van-button round type="info" size="small">功能异常</van-button>
      <van-button round type="info" size="small">产品建议</van-button>
      <van-button round type="info" size="small">其他</van-button>
    </van-cell-group>
    <div id="d1"></div>
    <van-field
      clearable
      v-model="message"
      rows="5"
      autosize
      type="textarea"
      maxlength="100"
      placeholder="描述您遇到的问题或建议，上传页面截图更方便哦"
      show-word-limit
    />
    <van-uploader class="uploader" v-model="fileList">
      <template #preview-cover="{ file }">
        <div class="preview-cover van-ellipsis">{{ file.name }}</div>
      </template>
    </van-uploader>
    <van-field
        class="phone"
        label="联系方式"
        placeholder="请输入手机号或邮箱地址(选填)"
      />
    <van-field
      clearable
      autosize
      type="textarea"
      placeholder="*您的手机号/邮箱地址仅用于客服联系您
  我们将采用必要的安全措施保护您的个人信息"
      show-word-limit
    />
  </div>
</template>
<script>
export default {
  data() {
    return {
      message:"",
      fileList:[]
    }
  },
  methods: {
    onClickLeft(){
      this.$router.go(-1);
    },
    onClickRight(){
      this.$router.push('#')
    }
  },
}
</script>
<style scoped>
#d1{
  margin-top: 10px;
  height: 8px;
  background-color: #f8f8f8;
}
.big{
  padding-left: 15px;
  font-size: 16px;
  font-weight: bold;
  height: 40px;
  line-height: 40px;
}
button{
  margin-left: 14px ;
  background-color: lightgrey;
  color: black;
  border: black;
}
.preview-cover {
    position: absolute;
    bottom: 0;
    box-sizing: border-box;
    width: 100%;
    padding: 4px;
    color: #fff;
    font-size: 12px;
    text-align: center;
    background: rgba(0, 0, 0, 0.3);
  }
.uploader{
  margin-left: 16px;
}
.phone{
  font-size: 16px;
  font-weight: bolder;
  color: black;
}
</style>