<template>
  <div>
    <div
      class="head"
      style="
        position: fixed;
        z-index: 1;
        display: flex;
        background-color: #fff;
        width: 100%;
      "
    >
      <router-link to="/" class="yy"
        ><img src="../../../../../assets/xwen/back.svg" alt=""
      /></router-link>
      <p style="font-size: 17px; padding-top: 8px;line-height:26px">新冠疫苗预约</p>
      <div class="yy" style="position: absolute; right: 0">
        <img src="../../../../../assets/xwen/sl.svg" alt="" />
      </div>
    </div>
    <div
      style="
        width: 100%;
        position: fixed;
        z-index: 1;
        top: 40px;
        display: flex;
        background-color: #fff;
      "
    >
      <div style="width: 30%">
        <van-dropdown-menu>
          <van-dropdown-item
            v-model="value1"
            :options="option1"
            @change="change(value1)"
          />
        </van-dropdown-menu>
      </div>
      <div style="width: 70%">
        <van-search placeholder="请输入搜索关键词" />
      </div>
    </div>
    <div
      v-infinite-scroll="loadmore"
      infinite-scroll-disabled="loading"
      infinite-scroll-distance="10"
      style="position: relative; top: 100px"
    >
      <div
        v-for="(item, i) in yuyuexq"
        :key="i"
        @click="insurance(i, $event)"
        style="
          display: block;
          padding: 10px 10px;
          border-bottom: 1px solid #aaa;
          color: black;
        "
      >
        <p style="margin-bottom: 8px; font-weight: 500">{{ item.hcinfor }}</p>
        <div
          style="
            margin-bottom: 8px;
            display: flex;
            justify-content: space-between;
          "
        >
          <span style="color: #aaa; font-size: 12px">{{ item.hcaddress }}</span
          ><span>{{ item.vaccincount }}km</span>
        </div>
        <p style="margin-bottom: 15px">{{ item.hctime }}</p>
        <div style="display: flex; justify-content: space-between">
          <span style="color: #fbc"
            >剩余源号：<span>{{ item.vaccincoutnow }}</span></span
          ><button
            style="
              font-size: 12px;
              padding: 5px 15px;
              border-radius: 25px;
              border: 0;
            "
            @click="xinxi($event,i)"
          >
            选择门诊
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { yiyuanaccess } from "../../../../../components/axiosAPI";
export default {
  data() {
    return {
      loading: false,
      value1: 0,
      value2: "a",
      option1: [
        { text: "滨江区", value: 0 },
        { text: "上城区", value: 1 },
        { text: "下城区", value: 2 },
        { text: "江干区", value: 3 },
        { text: "拱墅区", value: 4 },
        { text: "西湖区", value: 5 },
        { text: "萧山区", value: 6 },
        { text: "余杭区", value: 7 },
      ],
      yuyuexq: [],
    };
  },
  methods: {
    xinxi(e,i) {
      // console.log(e);
       e.stopPropagation();
      this.$router.push({path:"/menzhen",query:{id:i}});
    },
    loadmore() {
      this.loading = true;
    },
    change(value) {
      let arr = this.option1[value].text;
      yiyuanaccess(arr).then((res) => {
        if (res.data.code == 200) {
          this.yuyuexq = res.data.result;
        }
        let yuyuexq = JSON.stringify(this.yuyuexq);
        sessionStorage.setItem("yuyuexq", yuyuexq);
      });
    },
    insurance(id, event) {
      // console.log(event);
      this.$router.push({
        path: `/addessxq/${id}`,
      });
    },
  },
  mounted() {
    this.loadmore();
    yiyuanaccess(this.option1[this.value1].text).then((res) => {
      if (res.data.code == 200) {
        this.yuyuexq = res.data.result;
      }
    });
  },
};
</script>
<style  scoped>
* {
  margin: 0;
  padding: 0;
}
.head {
  border-bottom: 1px solid rgb(170, 168, 168);
}
.head img {
  width: 70%;
  height: 100%;
}
.yy {
  width: 40px;
  height: 40px;
  line-height: 100%;
}
</style>