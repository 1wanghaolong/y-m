<template>
  <div id="d1">
    <div class="header">
      <van-nav-bar title="身份信息" class="nav">
        <template #left>
          <van-icon name="arrow-left" size="20" class="arrow-left" @click="fh" />
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
          <van-cell title="姓名" :value="`${this.data.username}`"/>
          <van-cell title="国籍" value="中国" style="" />
          <van-cell title="证件类型" value="居民身份证" />
          <van-cell title="证件号码" :value="`${this.data.idicator}`" />
          <van-cell title="出生日期" :value="`${this.data.brithday}`" />
          <van-cell title="性别" :value="`${this.data.sex==1?'男':'女'}`" />
          <van-cell title="电话号码" :value="`${this.data.phone}`" />
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
      data:{}
    };
  },
  methods: {
   
    xiabu() {
      this.$router.push("/steps2");
    },
    shang() {
      this.$router.push("/steps1");
    },
    fh(){
      this.$router.go(-1)
    }
  },
  mounted() {
    let a="pxy";
    let b="123456";
    this.axios.get(`/xinxi/${a}&&${b}`).then(res=>{
       if (res.data.code === 200) {
          console.log( res.data.result);
          this.data = res.data.result
          // console.log(this.data.username);
       
        }
    })
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