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
          <div class="neirong">
            <div>
              <div>卡介苗（接种）</div>
              <div>第1剂</div>
            </div>
          </div>
        </div>
      </van-tab>
      <van-tab title="非免疫规划疫苗（自费）">内容 2</van-tab>
    </van-tabs>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: 0,
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
  background-color: aqua;
  height: 200px;
  margin: 0 auto;
  margin-top: 0.2rem;
  position: relative;
}
.title {
  width: 80%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-weight: bold;
  height: 30px;
  position: fixed;
}
.neirong {
  position: absolute;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 30px;
  width: 100%;
}
</style>