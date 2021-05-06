<!--
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2021-05-02 21:57:16
 * @LastEditors: sueRimn
 * @LastEditTime: 2021-05-04 14:43:08
-->
<template>
  <div class="jz">
    <van-nav-bar title="接种参考" @click-left="onClickLeft">
      <template #left>
        <van-icon name="arrow-left" color="#000" click="onClickLeft" />
      </template>
    </van-nav-bar>
    <van-tabs v-model="active" color="#00f100">
      <van-tab title="免疫规划疫苗（免费）">
        <div class="wai-kuang">
          <div class="title">
            <div>疫苗名称</div>
            <div>剂次</div>
          </div>
          <div class="neirong" v-for="item of arr" :key="item">
            <div class="nei">
              <div class="nei-1">{{ item }}</div>
              <div>第1剂</div>
            </div>
          </div>
        </div>
      </van-tab>
      <van-tab title="非免疫规划疫苗（自费）"
        ><div class="wai-kuang">
          <div class="title">
            <div>疫苗名称</div>
            <div>剂次</div>
          </div>
          <div class="neirong" v-for="(item,index) of arr2" :key="index">
            <div class="nei">
              <div class="nei-1">{{ item }}</div>
              <div>第{{index+1}}剂</div>
            </div>
          </div>
        </div></van-tab
      >
    </van-tabs>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: 0,
      arr: [
        "卡介苗",
        "乙肝疫苗",
        "脊灰灭活疫苗",
        "百白破疫苗",
        "A群流脑多糖疫苗",
        "乙脑减毒疫苗",
        "麻腮风疫苗",
        "甲肝减毒疫苗",
        "A群C群流脑多糖疫苗",
        "五阶轮状病毒疫苗",
        "13价肺炎多糖结合疫苗",
        "Hib疫苗",
        "EV71疫苗",
      ],
      arr2: [
        "五阶轮状病毒疫苗",
        "13价肺炎多糖结合疫苗",
        "Hib疫苗",
        "卡介苗",
        "乙肝疫苗",
        "脊灰灭活疫苗",
        "百白破疫苗",
        "A群流脑多糖疫苗",
        "乙脑减毒疫苗",
        "麻腮风疫苗",
        "甲肝减毒疫苗",
        "A群C群流脑多糖疫苗",
        "EV71疫苗",
        "四联疫苗",
        "轮状病毒疫苗",
        "霍乱疫苗",
      ],
    };
  },
  methods: {
    onClickLeft() {
      this.$router.push("/");
    },
  },
};
</script>
<style scoped>
.wai-kuang {
  width: 80%;
  height: 200px;
  margin: 0 auto;
  margin-top: 0.2rem;
}
.title {
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-weight: bold;
  height: 30px;
  border: 1px solid #f5f5f5;
  background-color: #F7F8FD;
}
.neirong {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 30px;
  width: 100%;
}
.nei {
  display: flex;
  justify-content: space-around;
  width: 100%;
  align-items: center;
  height: 30px;
  border-top: 0px;
  border-bottom: 1px solid #f5f5f5;
  border-left: 1px solid #f5f5f5;
  border-right: 1px solid #f5f5f5;
}
.nei-1 {
  border-right: 1px solid #f5f5f5;
  height: 30px;
  line-height: 30px;
  width: 42%;
}
</style>