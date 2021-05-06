<template>
  <div class="y-m-zhishi">
    <div class="zs-nei">
      <p>接种知识</p>
    </div>
    <div class="item" v-for="(v, i) of list" :key="i" @click="dianji">
      <div class="title">
        <div class="title-xq">
          <span id="z-j">专家审核</span>
          <span class="xq"> {{ v.title }}</span>
        </div>
        <span class="f-w">17.4万家长读过</span>
      </div>
      <div class="img">
        <img :src="v.img" alt="" />
      </div>
    </div>
    <div class="jz">
      <span @click="jz"> 加载更多</span>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [],
    };
  },
  methods: {
    jz() {
      this.$router.push("/xinwen");
    },
    dianji(){
      this.$router.push("/xq");
    }
  },
  mounted() {
    this.axios.get("/shouye").then((res) => {
      console.log(res.data.result);
      this.list = res.data.result;
    });
  },
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
    