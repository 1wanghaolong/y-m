<template>
  <div id="d1">
    <div class="header">
      <van-nav-bar title="身份信息" class="nav">
        <template #left>
          <van-icon name="arrow-left" size="20" class="arrow-left"  @click="fh"/>
        </template>

        <template #right>
          <van-icon name="ellipsis" size="20" class="right" />
        </template>
      </van-nav-bar>
    </div>

    <van-cell-group class="group">
      <ul class="step-container">
        <li class="step-past">
          身份信息
          <span class="arrow arrow-past">
            <span class="arrow-pre"></span>
            <span class="arrow-next"></span>
          </span>
        </li>
        <li class="step-current">
          基础信息
          <span class="arrow arrow-current">
            <span class="arrow-pre"></span>
            <span class="arrow-next"></span>
          </span>
        </li>
        <li class="step-next">归属部门</li>
      </ul>
    </van-cell-group>
    <div class="record">
      <van-cell-group class="group">
        <van-cell center title="为本人建档" class="cell">
          <template #right-icon>
            <van-switch v-model="checked" size="24" />
          </template>
        </van-cell>
        <van-field
          v-model="value"
          label="姓名"
          placeholder="请输入真实姓名"
        ></van-field>
        <van-field label="国籍" value="中国" readonly />
        <van-field label="证件类型" value="居民身份证" readonly />
        <van-field
          v-model="IDcard"
          label="证件号码"
          placeholder="请输入18位身份证号码"
        />

        <!-- <van-cell title="出生日期" :value="date" @click="show = true" /> -->

        <van-field
          is-link
          readonly
          :value="date"
          label="选择年月日"
          placeholder="请选择日期"
          @click="show = true"
        />
        <van-field
          v-model="sex"
          label="性别"
          placeholder="请输入性别"
        />
        <van-field
          v-model="phone"
          label="电话号码"
          placeholder="请输入手机号码"
        />
      </van-cell-group>
    </div>
    <div class="btn">
      <van-button type="default" class="btn1" @click="shang">上一步</van-button>
      <van-button type="default" class="btn2 active" @click="xiabu"
        >下一步</van-button
      >
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      phone:'',
      checked: true,
      value: "",
      IDcard: "",
      date: "",
      sex: '',
      birthday: "",
      currentDate: new Date(2021, 0, 17),
    };
  },
  methods: {
    xiabu() {
      this.$router.push("/steps2");
    },
    shang() {
      this.$router.push("/steps1");
    },
    onConfirm(date) {
      this.show = false;
      this.date = this.formatDate(date);
    },
    onConfirm(date) {
      this.value = date
        .filter((item) => !!item)
        .map((item) => item.name)
        .join("/");
      this.show = false;
    },
    fh(){
      this.$router.go(-1)
    }
  },
  mounted() {
    var qs = require("qs");
    this.axios
      .post(`/login`, qs.stringify({ username: "于超", password: "123456" }), {
        headers: { "Content-type": "application/x-www-form-urlencoded" },
      })
      .then((res) => {
        // console.log(res.data);
        if (res.data.code === 200) {
          console.log(res.data.result);
          let  val = res.data.result
          this.value = val.username
          this.IDcard = val.idicator
          this.date = val.brithday
          this.phone = val.phone
        }
      });
      this.axios
      .post(`/register`, qs.stringify({ username: "于超2", password: "123456789" }), {
        headers: { "Content-type": "application/x-www-form-urlencoded" },
      })
      .then((res) => {
        console.log(res.data);
      });
  },
};
</script>
<style scoped>
.cell {
  font-size: 16px;
}
.group {
  font-weight: bold;
  text-align: left;
}
button {
  margin-top: 30px;
}

.step-conainer {
  margin: 0;
  padding: 0;
  width: 100%;
}
.header {
  border-bottom: 2px solid #eee;
}
.record {
  border-top: 10px solid #eee;
  border-bottom: 10px solid #eee;
}
.step-container li {
  display: inline-block;
  position: relative;
  margin: 0;
  padding: 0;
  width: 33%;
  height: 30px;
  line-height: 30px;
  font-size: 14px;
  text-align: center;
  background-color: #ccc;
  color: #ffffff;
  margin-top: 20px;
}
.step-container li.step-past {
  background-color: #9cddf5;
  width: 34%;
}
.step-container li.step-current {
  /* background-color: #00a2ca; */
  background-color: #ccc;
}

.arrow {
  position: absolute;
  right: -7.5px;
  height: 30px;
  background-color: #ffffff;
  z-index: 2;
}
.arrow span {
  display: inline-block;
  border-left: 15px solid transparent;
  border-top: 15px solid transparent;
  border-bottom: 15px solid transparent;
}
.arrow-past .arrow-pre {
  border-left: 15px solid #9cddf5;
}
/* .arrow-past .arrow-next {
    border-top: 15px solid #00a2ca;
    border-bottom: 15px solid #00a2ca;
} */

.arrow-past .arrow-next {
  border-top: 15px solid #ccc;
  border-bottom: 15px solid #ccc;
}

.arrow-current .arrow-pre {
  /* border-left: 15px solid #00a2ca; */
  border-left: 15px solid #ccc;
}
.arrow-current .arrow-next {
  border-top: 15px solid #cccccc;
  border-bottom: 15px solid #cccccc;
}

.btn {
  text-align: center;
}
.btn {
  margin-top: 40px;
}
.btn .btn1 {
  width: 150px;
  height: 40px;
  border-radius: 5px;
  background-image: linear-gradient(#cae8ff, #7dc5ff);
}
.btn .btn2 {
  width: 150px;
  height: 40px;
  border-radius: 5px;
  background-color: #45abc2;
  background-image: linear-gradient(#7dc5ff, #5c9bca);
  color: white;
}
.btn2 {
  margin-left: 20px;
}
.cell {
  font-size: 14px;
}
</style>