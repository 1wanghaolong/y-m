<!--
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2021-05-17 14:12:16
 * @LastEditors: sueRimn
 * @LastEditTime: 2021-05-21 16:59:02
-->
<template>
  <div id="yimiaobaike">
    <van-nav-bar
      title="疫苗百科"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <van-tabs v-model="active" @click="onClick">
      <van-tab title="知识">
        <div v-for="(v, i) in list" :key="i" class="item" @click="xq(v,i)">
          <div class="title">
            <div class="title-xq">
              <span id="z-j">专家审核</span>
              <span class="xq"> {{ v.title }}</span>
            </div>
            <span class="f-w">{{ shuliang }}</span>
          </div>
          <div class="img">
            <img :src="v.img" alt="" />
          </div>
        </div>
      </van-tab>
      <van-tab :title="item" v-for="(item, i) in nav" :key="i">
        <div v-for="(v, i) in neirong1" :key="i" class="item" @click="xq2(v, i)">
          <div class="title">
            <div class="title-xq">
              <span id="z-j">专家审核</span>
              <span class="xq"> {{ v.head }}</span>
            </div>
            <span class="f-w">{{ v.dianyue }}万家长读过</span>
          </div>
          <div class="img">
            <img :src="v.image" alt="" />
          </div>
        </div>
      </van-tab>
      <van-tab title="健康知识">
        <div v-for="(v, i) in list2" :key="i" class="item" @click="xq3(v,i)">
          <div class="title">
            <div class="title-xq">
              <span id="z-j">专家审核</span>
              <span class="xq"> {{ v.newstitle }}</span>
            </div>
            <span class="f-w">{{ shuliang }}</span>
          </div>
          <div class="img">
            <img :src="v.img" alt="" />
          </div>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
export default {
  data() {
    return {
      i: 1,
      list: [],
      list2: [],
      nav: ["推荐", "育儿", "疫苗", "健康"],
      neirong1: [],
      shuliang: "17.5万家长读过",
      active: 0,
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    xq(v,i){
      this.$router.push({path:'/xq',query:[v.title, this.shuliang]})
    },
    xq2(v,i){
      this.$router.push({path:'/xq',query:[v.head, this.shuliang]})
    },
    xq3(v,i){
      this.$router.push({path:'/xq',query:[v.newstitle, this.shuliang]})
    },
    onClick() {
      this.axios.get(`/neirong/${this.active}`).then((res) => {
        res.data.result.forEach(element=> {
          element.image = require(`../../../../assets/xwen/xinwen/${element.image}`);
        });
        this.neirong1 = res.data.result;
      });
    },
  },
  mounted() {
    // 首页
    this.axios.get("/shouye").then((res) => {
      this.list = res.data.result;
      // console.log(this.list);
      this.$refs.aaa;
    });
    // 首页
    // 健康助手
    this.axios.get("/news").then((res) => {
      // console.log(res.data.result);
      this.list2 = res.data.result;
    });
    // 健康助手
  },
};
</script>
<style scoped>
.item {
  margin-left: 0.2rem;
  height: 4.05rem;
  display: flex;
  margin-top: 0.4rem;
  border-bottom: 1px dashed gray;
}
.title {
  font-size: 0.32rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 2.7rem;
  width: 5.4rem;
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
  width: 100%;
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