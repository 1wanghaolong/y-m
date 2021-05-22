<template>
  <div>
    <van-nav-bar title="注册界面" left-arrow @click-left="onClickLeft" />
    <van-form
      @submit="onSubmit"
      validate-first
      @failed="onFailed"
      :show-error="false"
      ref="form"
    >
      <van-field
        required
        minlength="6"
        maxlength="10"
        v-model="username"
        name="username"
        label="用户名"
        placeholder="请输入用户名"
        :rules="[
          {
            pattern,
            message: '账号必须以字母开头，且只能由数字、字母、下划线组成',
          },
        ]"
      />
      <van-field
        required
        v-model="password"
        type="password"
        name="password"
        label="密码"
        placeholder="请输入密码"
        :rules="[{ required: true, message: '请输入密码' }]"
      />
      <van-field
        required
        minlength="6"
        @blur="blur"
        v-model="repassword"
        type="password"
        name="password"
        label="确认密码"
        placeholder="请再次输入密码"
      />
      <div
        v-show="isShow"
        style="
          color: #ee0a24;
          font-size: 12px;
          margin-left: 115px;
          padding-top: 3px;
        "
      >
        两次输入的密码不一致
      </div>
      <van-field
        required
        v-model="sfz"
        label="身份证号码"
        placeholder="请输入18位身份证号码"
        length="18"
        :rules="[{ required: true, message: '请填写身份证号' },{validator, message: '身份证号码格式错误！'}]"
      />
      <van-field
        readonly
        clickable
        :value="brithday"
        label="出生日期"
        v-model="brithday"
        placeholder="填写您的生日"
        @click="showDate = true"
      />
      <van-popup v-model="showDate" round position="bottom">
        <van-datetime-picker
          v-model="currentDate"
          :formatter="formatter"
          :min-date="minDate"
          :max-date="maxDate"
          type="date"
          show-toolbar
          :columns-order="['year', 'month', 'day']"
          title="请选择日期"
          @confirm="onConfirm"
          @cancel="showDate = false"
        />
      </van-popup>
      <van-field name="radio" label="性别">
        <template #input>
          <van-radio-group v-model="sex" direction="horizontal">
            <van-radio name="1">男</van-radio>
            <van-radio name="0">女</van-radio>
          </van-radio-group>
        </template>
      </van-field>
      <van-field
        required
        v-model="phone"
        name="validator"
        type="tel"
        label="手机号"
        placeholder="请输入手机号码"
        :rules="[{ validator, message: '手机号格式不正确' }]"
      />
      <div style="margin: 16px">
        <van-button round block type="info" native-type="submit" @click="submit"
          >注册</van-button
        >
      </div>
    </van-form>
    <div class="link">
      <router-link class="" to="/login">已有账号？立即登录</router-link>
    </div>
  </div>
</template>
<script>
import { zhuce } from "../../components/axiosAPI";
export default {
  data() {
    return {
      username: "",
      pattern: /^[a-zA-Z][a-zA-Z0-9_]*$/,
      password: "",
      repassword: "",
      phone: "",
      sfz: "",
      sex: 1,
      isShow: false,
      currentDate: new Date("yyyy-MM-dd"),
      brithday: "",
      showDate: false,
      minDate: new Date(1990, 0, 1),
      maxDate: new Date(2021, 12, 12),
      sfzRules:/^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/
    };
  },
  methods: {
    submit() {
      // 全局表单验证
      this.$refs.form.validate()
        .then(() => {
         
        })  
        .catch(() => {
         
        });
    },
    show() {
      // console.log(333);
    },
    blur() {
      if (this.password == this.repassword) {
        //失去焦点
        this.isShow = false;
      } else {
        //show-error-message==true;
        this.isShow = true;
      }
    },
    onFailed() {},
    onSubmit() {
      console.log(
        this.username,
        this.password,
        this.sex,
        this.phone,
        this.sfz,
        this.brithday
      );
      zhuce(
        this.username,
        this.password,
        this.sex,
        this.phone,
        this.sfz,
        this.brithday
      ).then((res) => {
        console.log(res);
        if (res.data.code == 200) {
          this.$router.push("/login");
           this.$toast.success("注册成功");
        } else {
          this.$toast.fail("注册失败");
        }
      });
    },

    onClickLeft() {
      this.$router.go(-1);
    },
    validator(val) {

      return /^1[3456789]\d{9}$/.test(val) || /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/.test(val);
    },
    onConfirm(event) {
      // console.log(event);
      this.brithday = this.timeFormat(event);
      // console.log(this.brithday);
      //this.value=value.formatter(Date,value);
      /*this.value=Number(this.value).formatter("yyyy-MM-dd");*/
      this.showDate = false;
    },
    timeFormat(time) {
      // 时间格式化 2019-09-08
      let year = time.getFullYear();
      let month = time.getMonth() + 1;
      let day = time.getDate();
      if (month < 10 && day >= 10) {
        return year + "-" + "0" + month + "-" + day;
      } else if (month >= 10 && day < 10) {
        return year + "-" + month + "-" + "0" + day;
      } else if (month >= 10 && day >= 10) {
        return year + "-" + month + "-" + day;
      } else {
        return year + "-" + "0" + month + "-" + "0" + day;
      }
    },

    formatter(type, val) {
      if (type === "year") {
        return val + "年";
      }
      if (type === "month") {
        return val + "月";
      }
      if (type === "day") {
        return val + "日";
      }
      return val;
    },
  },
  mounted() {},
};
</script>
<style scoped>
.link {
  margin-top: 30px;
  margin-left: 220px;
}
</style>