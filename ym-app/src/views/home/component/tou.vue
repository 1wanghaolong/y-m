<template>
  <div class="tou">
    <van-nav-bar title="首页">
      <template #left>
        <span id="dz">地址</span>
      </template>
      <template #right>
        <span id="dl" @click="dl">登录</span>
        <span id="z-c" @click="zc">注册</span>
      </template>
    </van-nav-bar>
  </div>
</template>
<script>
export default {
  methods: {
    dl() {
      this.$router.push("/login");
    },
    zc() {
      this.$router.push("/register");
    },
  },
};
</script>
<style scoped>
.tou {
  width: 100%;
}
#dl {
  margin-right: 0.2rem;
}
.van-nav-bar {
  background-color: #5cd0ad;
  height: 1.35rem;
}
</style>
    