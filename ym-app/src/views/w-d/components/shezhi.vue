<template>
  <div class="sz">
    <van-nav-bar
    class="navbar"
    title="设置"
    left-arrow
    @click-left="onClickLeft"/>
    <div class="leftPadding">
      账号管理
    </div>
    <van-cell-group>
      <van-field 
      input-align='right'
      v-model="value"
      label="手机号" readonly />
      <van-field
      label='设置密码' readonly :is-link='true'/>
      <van-field
      label='用户注销' readonly is-link/>
      <div class="leftPadding">
        安全中心
      </div>
      <van-field
      label='隐私设置' readonly is-link @click="yssz"/>
      <van-field
      label='隐私政策' readonly is-link @click="yinsi"/>
      <van-field
      label='用户协议' readonly is-link/>
      <div class="space"></div>
      <van-field
      label='提醒设置' readonly is-link  @click="txsz"/>
      <div class="space"></div>
      <van-field
      label='关于我们' readonly is-link/>
      <div class="space"></div>
      <van-cell title="分享" @click="showShare = true" is-link class="share" />
      <van-share-sheet
      v-model="showShare"
      title="立即分享给好友"
      :options="options"
      @select="onSelect"
      />
      <div class="space"></div>
    </van-cell-group>
    <van-button 
    type="default" block @click="tuichu"
    >退出登录</van-button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value:JSON.parse(sessionStorage.getItem("info")).phone,
      showShare: false,
      options: [
        { name: '微信', icon: 'wechat' },
        { name: '微博', icon: 'weibo' },
        { name: '复制链接', icon: 'link' },
        { name: '分享海报', icon: 'poster' },
        { name: '二维码', icon: 'qrcode' },
      ],
    }
  },

  methods: {
    onClickLeft(){
      this.$router.go(-1);
    },
    onSelect() {
      this.showShare = false;
    },
    tuichu(){
      sessionStorage.removeItem('info')
      this.$router.push('/dl')
    },
    txsz(){
      this.$router.push('/txsz')
    },
    yssz(){
      this.$router.push('/yssz')
    },
    yinsi(){
      this.$router.push('/yinsi')
    }
  },
}
</script>
<style scoped>
  .share{
    color:#646566
  }
  .leftPadding{
    padding-left: 15px;
    line-height: 30px;
    height: 30px;
    color:#B6B6B6;
    background-color: #f8f8f8;
  }
  .space{
    height: 5px;
    background-color: #f8f8f8;
  }
  .sz{
    
    font-size: 14px;
  }
  button{
    color: #646566;
  }
</style>