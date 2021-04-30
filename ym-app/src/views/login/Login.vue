<template>
  <div>
    <van-nav-bar
      class="mylogin"
      title="登录界面"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <van-form @submit="onSubmit" validate-first @failed="onFailed" :show-error="false">
      <van-field
        v-model="username"
        name="username"
        label="用户名"
        placeholder="请输入用户名"
        :rules="[{ pattern, message: '账号必须以字母开头，且只能由数字、字母、下划线组成' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="password"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '账号只由数字、字母、下划线组成' }]"
      />
      <div style="margin: 16px">
        <van-button round block type="info" native-type="submit"
          >登录</van-button
        >
      </div>
    </van-form>
    <div class="link">
      <router-link class="" to="/register">还没有账号？点击注册</router-link>
    </div>
    
  </div>
</template>
<script>
export default {
  data() {
    return {
      username: "",
      password: "",
      pattern:/^[a-zA-Z][a-zA-Z0-9_]*$/,
    };
  },
  methods: {
    onSubmit(values) {
      console.log("submit", values);
    },
    onClickLeft() {
      this.$router.go(-1);
    },
    onFailed(errorInfo) {
      console.log('failed', errorInfo);
    },
  },
};
</script>
<style scoped>
  .link{
    margin-top: 30px;
    margin-left: 220px;
  }
</style>