<!--
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2021-05-02 21:57:16
 * @LastEditors: sueRimn
 * @LastEditTime: 2021-05-14 16:05:11
-->
<template>
  <div class="tou">
    <van-nav-bar>
      <template #title>
        <span style="color: #fff">首页</span>
      </template>
      <template #right v-if="name2">
        <span>{{ name2.username }}</span>
      </template>
      <template #right v-else>
        <span id="dl" @click="dl">登录</span>
        <span id="z-c" @click="zc">注册</span>
      </template>
    </van-nav-bar>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name2: JSON.parse(sessionStorage.getItem('info')) 
    };
  },
  methods: {
    dl() {
      this.$router.push("/login");
    },
    zc() {
      this.$router.push("/register");
    },
  },
  mounted() {},
  computed: {
    name() {
      return this.$store.state.user.name;
    },
  },
};
</script>
<style scoped>
.tou {
  width: 100%;
  color: #fff;
}
#dl {
  margin-right: 0.2rem;
}
.van-nav-bar {
  background-color: #5dc9af;
  height: 1.35rem;
}
</style>
    