<!--
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2021-05-17 14:54:23
 * @LastEditors: sueRimn
 * @LastEditTime: 2021-05-17 14:58:11
-->
<template>
  <div id="wodedoudou" style="background-color: #f8f8f8">
    <van-nav-bar
      fixed
      right-text="豆豆明细"
      @click-left="onClickLeft"
      @click-right="onClickRight"
      style="background-image: linear-gradient(to right, #ef3d5f, #f97e52)"
    >
      <template #left>
        <van-icon name="arrow-left" color="#fff" />
      </template>
      <template #title>
        <span style="color:#fff">我的豆豆</span>
      </template>
      <template #right>
        <span style="color:#fff">豆豆明细</span>
      </template>
    </van-nav-bar>
    <div class="bg">
      <button
        style="
          border: 1px solid white;
          border-radius: 10px;
          color: white;
          background-image: linear-gradient(to right, #ef3d5f, #f97e52);
          margin-left: 258px;
        "
      >
        规则
      </button>
      <!-- layout布局 -->
      <van-row type="flex" justify="center">
        <van-col span="8" offset="3" style="color: #fff; font-size: 15px"
          >可用豆豆</van-col
        >
      </van-row>
      <van-row type="flex" justify="center">
        <van-col
          span="8"
          offset="6"
          style="color: #fff; margin-top: 10px; font-size: 30px"
          >0</van-col
        >
      </van-row>
      <!-- switch滑动开关 -->
      <van-switch
        v-model="checked"
        size="19"
        active-color="#FD868A"
        inactive-color="#dcdee0"
        style="left: 81%; top: -14%"
      />
      <span
        style="
          box-sizing: border-box;
          position: absolute;
          top: 153px;
          right: 20px;
          color: white;
        "
        >领取提醒</span
      >

      <!-- 广告---已废弃 -->
      <!-- <div class="zhongjian_2">
        <van-button round color="linear-gradient(to right, #ff6034, #ee0a24)">
          立刻领取
        </van-button>
      </div> -->
    </div>
    <div class="zhongjian_1">
      <van-row type="flex" justify="center">
        <van-col span="4" offset="1">
          <van-image
            round
            width="1rem"
            height="1rem"
            :src="require('../../../../../public/img/w-d/1.jpg')"
          />
        </van-col>
        <van-col span="4" offset="1">
          <van-image
            round
            width="1rem"
            height="1rem"
            :src="require('../../../../../public/img/w-d/2.jpg')"
          />
        </van-col>
        <van-col span="4" offset="1">
          <van-image
            round
            width="1rem"
            height="1rem"
            :src="require('../../../../../public/img/w-d/3.jpg')"
          />
        </van-col>
        <van-col span="4" offset="1">
          <van-image
            round
            width="1rem"
            height="1rem"
            :src="require('../../../../../public/img/w-d/4.jpg')"
          />
        </van-col>
      </van-row>
      <van-row type="flex" justify="center">
        <van-col span="4" offset="1">
          <span>摇奖机</span>
        </van-col>
        <van-col span="4" offset="1">
          <span>幸运转盘</span>
        </van-col>
        <van-col span="4" offset="1">
          <span>刮刮乐</span>
        </van-col>
        <van-col span="4" offset="1">
          <span>豆豆商城</span>
        </van-col>
      </van-row>
    </div>
    <van-cell-group>
      <template #title>
        <div
          class="custom-title"
          style="margin-top: -27px; font-weight: bold; color: #000"
        >
          做任务赚豆豆
        </div>
      </template>
      <van-cell
        title="新手任务(0/3)"
        title-style="font-weight:bold;color:#000"
      />
      <van-cell>
        <template #title>
          <span class="custom-title">添加宝宝</span>
          <van-tag color="#fff" style="color: orange">+100</van-tag>
        </template>
        <!-- 使用 right-icon 插槽来自定义右侧图标 -->
        <template #right-icon>
          <van-button round type="primary" size="small" class="btn"
            >去完成</van-button
          >
        </template>
      </van-cell>
      <van-cell>
        <template #title>
          <span class="custom-title">查看疫苗库存</span>
          <van-tag color="#fff" style="color: orange">+30</van-tag>
        </template>
        <!-- 使用 right-icon 插槽来自定义右侧图标 -->
        <template #right-icon>
          <van-button round type="primary" size="small" class="btn"
            >去完成</van-button
          >
        </template>
      </van-cell>
      <van-cell>
        <template #title>
          <span class="custom-title">首次添加成长记录</span>
          <van-tag color="#fff" style="color: orange">+25</van-tag>
        </template>
        <!-- 使用 right-icon 插槽来自定义右侧图标 -->
        <template #right-icon>
          <van-button round type="primary" size="small" class="btn"
            >去完成</van-button
          >
        </template>
      </van-cell>
    </van-cell-group>
    <van-cell-group>
      <template #title>
        <div class="custom-title" style="font-weight: bold; color: #000">
          每日任务(0/1)
        </div>
      </template>
      <van-cell>
        <template>
          <span class="custom-title">签到</span>
          <van-tag color="#fff" style="color: orange">+5</van-tag>
        </template>
        <!-- 使用 right-icon 插槽来自定义右侧图标 -->
        <template #right-icon>
          <van-button round type="primary" size="small" class="btn"
            >去完成</van-button
          >
        </template>
      </van-cell>
    </van-cell-group>
    <van-cell-group>
      <template #title>
        <div class="custom-title" style="font-weight: bold; color: #000">
          其他任务
        </div>
      </template>
      <van-cell>
        <template>
          <span class="custom-title">添加成长记录</span>
          <van-tag color="#fff" style="color: orange">+5</van-tag>
        </template>
        <!-- 使用 right-icon 插槽来自定义右侧图标 -->
        <template #right-icon>
          <van-button round type="primary" size="small" class="btn"
            >查看
          </van-button>
        </template>
      </van-cell>
      <van-cell>
        <template>
          <span class="custom-title">预约</span>
          <van-tag color="#fff" style="color: orange">+5</van-tag>
        </template>
        <!-- 使用 right-icon 插槽来自定义右侧图标 -->
        <template #right-icon>
          <van-button round type="primary" size="small" class="btn"
            >查看</van-button
          >
        </template>
      </van-cell>
    </van-cell-group>
    <!-- 下拉 -->
    <!-- <van-collapse v-model="activeNames">
      <van-collapse-item name="1">
        <template #title>
          <div style="text-align:center">展开更多任务</div>
        </template>
        内容
      </van-collapse-item>
    </van-collapse> -->
    <div style="text-align: center" v-if="xians" @click="zhankai">
      展开更多任务
    </div>
    <div style="text-align: center" v-else @click="shouqi">暂无更多任务</div>
  </div>
</template>
<script>
export default {
  name: "wodedoudou",
  data() {
    return {
      checked: true,
      activeNames: ["1"],
      xians: true,
    };
  },
  methods: {
    onClickLeft() {
      this.$router.push({ path:"/wode"})
    },
    onClickRight() {},
    zhankai() {
      this.xians = false;
    },
    shouqi() {
      this.xians = true;
    },
  },
};
</script>
<style scoped>
.btn {
  width: 65px;
}
.bg {
  margin-top: 45px;
  background-image: linear-gradient(to right, #ef3d5f, #f97e52);
  height: 5rem;
}
.zhongjian_1 {
  width: 9rem;
  height: 2rem;
  background-color: white;
  border-radius: 6px;
  margin: auto;

  position: relative;
  top: -1rem;
  padding-top: 0.5rem;
}
.van-hairline--bottom::after {
  border-bottom-width: 0px;
}
</style>