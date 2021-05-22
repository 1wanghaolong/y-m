<template>
  <div class="y-m-zhishi">
    <div class="zs-nei">
      <p>接种知识</p>
    </div>
    <div class="item" v-for="(v, i) of list" :key="i" @click="dianji(v,i)">
      <div class="title">
        <div class="title-xq">
          <span id="z-j">专家审核</span>
          <span class="xq"> {{ v.title }}</span>
        </div>
        <span class="f-w">{{ shuliang[i] }}</span>
      </div>
      <div class="img">
        <img :src="v.img" alt="" />
      </div>
    </div>
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
      style="height: 3rem"
    ></van-list>
  </div>
</template>
<script>
import { erci } from "../../../components/axiosAPI";
export default {
  data() {
    return {
      loading: false,
      finished: false,
      list: [],
      list2: [],
      shuliang: ['17.5万家长读过','16.5万家长读过','18.5万家长读过','15.5万家长读过','14.5万家长读过','12.5万家长读过'],
      data: 0,
    };
  },
  methods: {
    onLoad() {
      setTimeout(() => {
        erci().then((res) => {
          for (let index = 0; index < res.data.result.length; index++) {
            res.data.result[
              index
            ].img = require(`../../../assets/xwen/xinwen/${res.data.result[index].img}`);
            this.shuliang.push(res.data.result[index].dianyue + "万家长读过")
            this.list.push(res.data.result[this.data++]);
          }
          this.loading = false;
          if (this.list.length >= 40) {
            this.finished = true;
          }
        });
      }, 2000);
    },
    jz() {
      this.$router.push("/xinwen");
    },
    dianji(v,i) {
      this.$router.push({ path: "/xq", query: [v.title, this.shuliang[i]] });
    },
    erci() {},
  },
  mounted() {
    this.axios.get("/shouye").then((res) => {
      this.list = res.data.result;
      this.$refs.aaa;
    });
    this.erci();
    //  console.log(this.$store.state.user.islogin);
  }
};
</script>
<style scoped>
.jz span {
  width: 30%;
  height: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  margin-top: 20px;
}
.jz {
  width: 100%;
  height: 3.5rem;
  justify-content: center;
  display: flex;
}
.y-m-zhishi {
  width: 100%;
  margin-top: 0.54rem;
}
.zs-nei {
  display: flex;
  font-size: 0.54rem;
  font-weight: bold;
  margin-left: 0.2rem;
}
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
    