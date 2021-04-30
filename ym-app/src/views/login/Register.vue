<template>
  <div>
    <van-nav-bar
      title="注册界面"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <van-form @submit="onSubmit" validate-first @failed="onFailed" :show-error="false">
      <van-field
        maxlength="8"
        v-model="username"
        name='username'
        label='用户名'
        placeholder='请输入用户名'
        :rules="[{ pattern, message: '账号必须以字母开头，且只能由数字、字母、下划线组成' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name='password'
        label='密码'
        placeholder='请输入密码'
        :rules="[{required:true,message:'请输入密码'}]"
      />
      <van-field
        
        @blur="blur"
        v-model="repassword"
        type="password"
        name='password'
        label='确认密码'
        placeholder='请再次输入密码'
        :rules="[{required:true,message:'两次输入的密码不一致'}]"
      />
      <van-field v-model="phone" name="validator" type="tel" label="手机号" placeholder="请输入手机号码" 
      :rules="[{validator, message: '手机号格式不正确' }]" />
      <van-field
        v-model="yzm"
        center
        clearable
        label="手机验证码"
        placeholder="请输入短信验证码"
      >
        <template #button>
          <van-button size="small" type="info">发送验证码</van-button>
        </template>
      </van-field>
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">注册</van-button>
      </div>
    </van-form>
    <div class="link">
      <router-link class="" to="/login">已有账号？立即登录</router-link>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      username:'',
      pattern:/^[a-zA-Z][a-zA-Z0-9_]*$/,
      password:'',
      repassword:'',
      phone:"",
      yzm:""
    }
  },
  methods: {
    blur(){
      if(this.password==this.repassword){
         //失去焦点
         console.log('1')
      }else{
        //show-error-message==true;
        console.log('2')
        }
    },
    onFailed(errorInfo) {
 
    },
    onSubmit(values) {

    },
    
    onClickLeft(){
      this.$router.go(-1)
    },
    validator(val){
      return /^1[3456789]\d{9}$/.test(val);
    }
  },
}
</script>
<style scoped>
  .link{
    margin-top: 30px;
    margin-left: 220px;
  }
</style>