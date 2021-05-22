<template>
  <div>
    <van-nav-bar title="提醒设置" left-arrow @click-left="onClickLeft" />
    <van-cell center title="开启/关闭提醒" @click="show">
      <template #right-icon>
        <van-switch v-model="checked" size="24" />
      </template>
    </van-cell>
    <p>关闭提醒后，你将无法接收到提醒</p>
    <div v-show="isShow">
      <p>请选择提醒方式</p>
      <van-cell center title="电话提醒">
        <template #right-icon>
          <van-switch v-model="checked2" size="24" />
        </template>
      </van-cell>
      <p>若要电话提醒，请确保隐私设置中允许显示完整手机号</p>
      <van-cell center title="短信提醒">
        <template #right-icon>
          <van-switch v-model="checked3" size="24" />
        </template>
      </van-cell>
      <p>若要短信提醒，请确保隐私设置中允许显示完整手机号</p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      checked: false,
      checked2: false,
      checked3: false,
      isShow: false,
      i:1
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    show() {
      this.i++;
      if (this.i % 2 === 0) {
        this.isShow = false;
        this.checked = false
      } else {
        this.isShow = true;
        this.checked = true;
      }
    },
  },
};
</script>
<style scoped>
p {
  margin: 10px 16px;
  color: lightslategrey;
}
</style>