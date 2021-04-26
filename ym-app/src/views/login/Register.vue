<template>
  <div>
    <van-nav-bar
      title="注册界面"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        name='用户名'
        label='用户名'
        placeholder='请输入用户名'
        :rules="[{required:true,message:'请填写用户名'}]"
      />
      <van-field
        v-model="password"
        name='密码'
        label='密码'
        placeholder='请输入密码'
        :rules="[{required:true,message:'请输入密码'}]"
      />
      <van-field
        v-model="repassword"
        name='密码'
        label='密码'
        placeholder='请再次输入密码'
        :rules="[{required:true,message:'请再次输入密码'}]"
      />
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">注册</van-button>
      </div>
    </van-form>
  </div>
</template>
<script>
export default {
  data(){
    return{
      username:'',
      password:'',
      repassword:''
    }
  },
  methods: {
    onSubmit(values) {
      console.log('submit', values);
    },
    onClickLeft(){
      this.$router.go(-1)
    }
  },
}
</script>