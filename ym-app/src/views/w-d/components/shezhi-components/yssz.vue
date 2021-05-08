<template>
  <div class="yssz">
    <van-nav-bar
    title="隐私设置"
    left-arrow
    @click-left="onClickLeft"/>
    <van-cell center title="允许通知">
      <template #right-icon>
      <van-switch v-model="checked1" size="24" />
      </template>
    </van-cell>
    <p>关闭后，此APP将无法给你发送通知</p>
    <van-cell center title="允许向我推荐通讯录朋友">
      <template #right-icon>
      <van-switch v-model="checked1" size="24" />
      </template>
    </van-cell>
    <p>关闭后，将不再为你推荐通讯录相关的联系人</p>
    <van-cell center title="允许显示我的完整手机号">
      <template #right-icon>
      <van-switch v-model="checked2" size="24" />
      </template>
    </van-cell>
    <p>关闭后，手机号中间四位数将不会被隐藏</p>
    <van-field
      label='授权管理' readonly is-link/>
    <van-cell center title="允许获得我的位置信息">
      <template #right-icon>
      <van-switch v-model="checked3" size="24" />
      </template>
    </van-cell>
    <p>关闭后，将无法为你推荐附近的就诊信息</p>
    <van-cell center title="个性化服务">
      <template #right-icon>
      <van-switch v-model="checked4" size="24" />
      </template>
    </van-cell>
    <p>关闭后,将不会为您推荐个性化内容</p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      checked1:true,
      checked2:false,
      checked3:true,
      checked4:false,
    }
  },
  methods: {
    onClickLeft(){
      this.$router.go(-1);
    }
  },
}
</script>
<style scoped>
  p{
    margin: 10px 16px;
    color: lightslategrey;
  }
</style>