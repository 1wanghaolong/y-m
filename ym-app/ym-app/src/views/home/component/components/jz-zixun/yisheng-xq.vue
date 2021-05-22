<!--
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2021-05-04 13:58:32
 * @LastEditors: sueRimn
 * @LastEditTime: 2021-05-14 20:35:49
-->
<template>
  <div class="xq">
    <!-- 导航 -->
    <van-nav-bar title="接种咨询" left-arrow @click-left="onClickLeft" />
    <!-- 医生详细信息 -->
    <div class="docinfo">
      <img :src="'/'+list.image" />
      <p class="docinfo_p1">{{list.docname}}</p>
      <p>在线时间: 09:00-23:00(周一到周日)</p>
      <p>{{list.docinfo}}</p>
    </div>
    <!-- 底部评论区 -->
    <div class="say">
      <div class="tiwen">
        <span class="span1" @click="tiaozhuan">提问</span>
      </div>
      <p>已有113461人提问</p>
      <van-notice-bar left-icon="volume-o" scrollable text="仅限疫苗接种相关资讯,不作诊断,治疗或用药依据。" />
      <textarea ref="tiwen" class="text" name id cols="38" rows="10" placeholder="请输入您的提问信息"></textarea>
    </div>
  </div>
</template>
<script>
import { Dialog } from 'vant';
export default {
  data() {
    return {
      text: "",
      list: []
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    tiaozhuan() {
      Dialog.alert({
        title: "系统提示",
        message: "您好，你的提问医生已收到，将会在1~3个工作日给予您答复，请关注"
      })
      this.$refs.tiwen.value ='';
    }
  },
  created() {},
  mounted() {
    let id = this.$route.params.id;
    this.axios.get(`/jiezhongzixuna/${id}`).then(res => {
      // console.log(res.data.result);
      this.list = res.data.result;
    });
    // console.log(this.list);
  }
};
</script>
<style scoped>
.van-nav-bar {
  background-color: #5cd0ad;
  font-weight: bolder;
}
.docinfo {
  line-height: 0.7rem;
  border-bottom: 4px solid lightgray;
}
.docinfo img {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-left: 5px;
  margin-top: 5px;
}
.docinfo_p1 {
  position: absolute;
  top: 72px;
  left: 96px;
  font-weight: bolder;
  font-size: 18px;
}
.docinfo p{
  margin-left: 5px
}
.say {
  margin-top: 10px;
}
.say p {
  font-size: 16px;
  font-weight: bolder;
  padding: 5px;
}
.tiwen {
  width: 50px;
  height: 50px;
  background-color: greenyellow;
  border-radius: 50%;
  position: absolute;
  top: 80%;
  left: 80%;
}
.span1 {
  position: absolute;
  margin-top: 19px;
  margin-left: 12px;
  font-weight: bolder;
  color: white;
}
.span2 {
  padding-left: 8px;
  position: absolute;
  padding-top: 4px;
  color: #f07008;
  box-shadow: 2px #faf288;
  background-color: #faf288;
  width: 100%;
}
.text {
  margin-top: 25px;
  padding-left: 5px;
  margin-left: 0.5em;
  font-size: 1.5em;
}
</style>