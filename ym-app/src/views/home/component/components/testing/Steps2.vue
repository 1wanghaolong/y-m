<template>
  <div id="d1">
    <div class="header">
      <van-nav-bar title="基础信息" class="nav">
        <template #left>
          <van-icon
            name="arrow-left"
            size="0"
            class="arrow-left"
            @click="fh"
          />
        </template>

        <template #right>
          <van-icon name="ellipsis" size="0" class="right" />
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
    <div class="household">
      <van-cell-group class="group">
        <van-cell center title="户籍地址" class="cell"></van-cell>
        <van-field
          v-model="fieldValue"
          is-link
          readonly
          label="户籍地区"
          placeholder="点击选择户籍地区"
          @click="show = true"
        />
        <van-popup v-model="show" round position="bottom">
          <van-cascader
            v-model="cascaderValue"
            title="请选择所在地区"
            :options="options"
            @close="show = false"
            @finish="onFinish"
          />
        </van-popup>
        <van-field
          v-model="value"
          label="户籍详细地址"
          placeholder="请输入详细地址"
        ></van-field>
      </van-cell-group>
    </div>
    <div class="present">
      <van-cell-group class="group">
        <van-cell center title="现居住地址" class="cell"></van-cell>
        <van-field
          v-model="fieldValue2"
          is-link
          readonly
          label="现居住地区"
          placeholder="点击选择现居住地区"
          @click="show2 = true"
        />
        <van-popup v-model="show2" round position="bottom">
          <van-cascader
            v-model="cascaderValue2"
            title="请选择所在地区"
            :options="options2"
            @close="show2 = false"
            @finish="onFinish2"
            @change="onChange2"
          />
        </van-popup>
        <van-field
          v-model="value2"
          label="现住详细地址"
          placeholder="请输入详细地址"
        ></van-field>
      </van-cell-group>
    </div>
    <div class="company">
      <van-cell-group>
        <van-field
          v-model="danwei"
          class="cell"
          is-link
          readonly
          label="工作单位名称"
          placeholder="无工作单位可填:无"
        ></van-field>
      </van-cell-group>
    </div>
    <div class="default">
      <van-radio-group v-model="radio">
        <van-radio name="1"
          ><span>申请浙江省居民电子健康卡《关于健康卡说明》</span></van-radio
        >
      </van-radio-group>
    </div>
    <div class="btn">
          <van-button type="default" class="btn1" @click="shangbu"
        >上一步</van-button
      >
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
      show: false,
      show2: false,
      fieldValue: "" || sessionStorage.getItem("dizhi"),
      fieldValue2: "" || sessionStorage.getItem("dizhi2"),
      cascaderValue: "",
      cascaderValue2: "",
      radio: "1",
      value: "",
      value2:"",
      danwei:'',
      d: "",
        d2:'',
      dizhi: { text: "下城区", value: "330100" },
      dizhi2: { text: "下城区", value: "330100" },
      // 选项列表，children 代表子选项，支持多级嵌套
      options2: [
        {
          text: "浙江省",
          value: "330000",
          children: [
            {
              text: "杭州市",
              value: "330100",
              children: [
                { text: "滨江区", value: "330101" },
                { text: "上城区", value: "33010" },
                { text: "下城区", value: "330103" },
                { text: "江干区", value: "330104" },
                { text: "拱墅区", value: "330105" },
                { text: "西湖区", value: "330106" },
                { text: "萧山区", value: "330107" },
                { text: "余杭区", value: "330108" },
              ],
            },
          ],
        },
        {
          text: "江苏省",
          value: "30000",
          children: [{ text: "南京市", value: "30100" }],
        },
      ],
        options: [
        {
          text: "浙江省",
          value: "330000",
          children: [
            {
              text: "杭州市",
              value: "330100",
              children: [
                { text: "滨江区", value: "330101" },
                { text: "上城区", value: "33010" },
                { text: "下城区", value: "330103" },
                { text: "江干区", value: "330104" },
                { text: "拱墅区", value: "330105" },
                { text: "西湖区", value: "330106" },
                { text: "萧山区", value: "330107" },
                { text: "余杭区", value: "330108" },
              ],
            },
          ],
        },
        {
          text: "江苏省",
          value: "30000",
          children: [{ text: "南京市", value: "30100" }],
        },
      ],
    };
  },
  methods: {
    // 全部选项选择完毕后，会触发 finish 事件
    onFinish({ selectedOptions, tabIndex }) {
      // console.log(selectedOptions, tabIndex);
      this.show = false;
      this.fieldValue = selectedOptions.map((option) => option.text).join("/");
      // console.log(this.fieldValue);
    },
    onChange(value) {
      // console.log(value.selectedOptions);
      let a = value.selectedOptions[value.tabIndex].text;
    },
    // 全部选项选择完毕后，会触发 finish 事件
    onFinish2({ selectedOptions, tabIndex }) {
      // console.log(selectedOptions, tabIndex);
      this.show2 = false;
      this.fieldValue2 = selectedOptions.map((option) => option.text).join("/");
      // console.log(this.fieldValue);
      sessionStorage.setItem("dizhi2", this.fieldValue2);
    },
    onChange2(value) {
      // console.log(value.selectedOptions);
      let a = value.selectedOptions[value.tabIndex].text;
      this.d2 = a;
      localStorage.setItem("dizhi2", this.d2);
    },
      shangbu() {
      this.$router.go(-1);
    },
    xiabu() {
      this.$router.push("/steps3");
      const dz = this.d;
      this.$store.commit("setTest", `${dz}`);
    },
    fh() {
      this.$router.go(-1);
    },
  },
  computed: {},
  mounted() {
    // this.$axios.get("/articles")
    // .then(res => {
    //   console.log(res)
    // }}
  },
};
</script>
<style scoped>
.header .arrow-left {
  color: #2b3445;
}
.header .van-nav-bar .van-icon {
  color: #2b3445;
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
/* .group{
  font-weight: bold; 
   text-align: left;
} */
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
  background-color: #00a2ca;
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
.arrow-past .arrow-next {
  border-top: 15px solid #00a2ca;
  border-bottom: 15px solid #00a2ca;
}
.arrow-current .arrow-pre {
  border-left: 15px solid #00a2ca;
}
.arrow-current .arrow-next {
  border-top: 15px solid #cccccc;
  border-bottom: 15px solid #cccccc;
}
.household {
  border-top: 10px solid #eee;
  border-bottom: 10px solid #eee;
}
.present {
  border-bottom: 10px solid #eee;
}
.company {
  border-bottom: 10px solid #eee;
}
.default {
  margin-top: 20px;
  font-size: 14px;
  margin-left: 20px;
  text-align: center;
  color: #8fdbfb;
}
.default span {
  color: #335daf;
}
</style>