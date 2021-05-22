<!--
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2021-05-17 14:29:07
 * @LastEditors: sueRimn
 * @LastEditTime: 2021-05-17 14:31:13
-->
<template>

  <div>
    <van-nav-bar
    style="background-color:#5CD0AD;"
      
      
      @click-left="onClickLeft"
    ><template #left>
      <van-icon color="#fff" name="arrow-left" />
    </template>
     <template #title >
       <span style="color:#fff;">睡眠测评</span>  
     </template>
    </van-nav-bar>
    <div id="shuimiaozhiliang">
    <ul>
      <li></li>
      <li>无</li>
      <li>轻度</li>
      <li>中度</li>
      <li>重度</li>
      <li>极重</li>
    </ul>
    <ul>
      <li>入睡困难</li>
      <li v-for="(v, i) in test" :key="i">
        <input type="radio" name="1" :value="v.name" :checked="v.value" />
        <span>{{i}}</span>
      </li>
    </ul>
    <ul>
      <li>睡眠维持困难</li>
      <li v-for="(v, i) in test" :key="i">
        <input type="radio" name="2" :value="v.name" :checked="v.value" />
        <span>{{i}}</span>
      </li>
    </ul>
    <ul>
      <li>早醒</li>
      <li v-for="(v, i) in test" :key="i">
        <input type="radio" name="3" :value="v.name" :checked="v.value" />
        <span>{{i}}</span>
      </li>
    </ul>
    <ul>
      <li>对目前的睡眠模式满意/不满意程度如何?</li>
      <li v-for="(v, i) in test" :key="i">
        <input type="radio" name="4" :value="v.name" :checked="v.value" />
        <span>{{i}}</span>
      </li>
    </ul>
    <ul>
      <li>您的失眠在多大程度上影响了日常功能?</li>
      <li v-for="(v, i) in test" :key="i">
        <input type="radio" name="5" :value="v.name" :checked="v.value" />
        <span>{{i}}</span>
      </li>
    </ul>
    <ul>
      <li>您觉得在别人眼中您的失眠情况如何?</li>
      <li v-for="(v, i) in test" :key="i">
        <input type="radio" name="6" :value="v.name" :checked="v.value" /><span>{{i}}</span>
      </li>
    </ul>
    <ul>
      <li>您对目前的睡眠问题的担心/痛苦程度如何?</li>
      <li v-for="(v, i) in test" :key="i">
        <input type="radio" name="7" :value="v.name" :checked="v.value" />
        <span>{{i}}</span>
      </li>
    </ul>
    </div>
    <div id="footer" style="display: flex">
      <ul style="width: 60%">
        <li>0-7分:没有显著失眠</li>
        <li>8-14分:轻度失眠</li>
        <li>15-21分:中度失眠</li>
        <li>22-28分:重度失眠</li>
      </ul>

      <button
        @click="submit"
        style="width: 100px; height: 40px; font-size: 20px; font-weight: bold"
      >
        提交
      </button>
    </div>
  </div>
</template>
<script>
import { Dialog } from "vant";
export default {
  // name:'shuimiaozhiliang'
  data() {
    return {
      sum: 0,
      test: [
        {
          value: false,
          name: "0",

        },
        {
          value: false,
          name: "1",
        },
        {
          value: false,
          name: "2",
        },
        {
          value: false,
          name: "3",
        },
        {
          value: false,
          name: "4",
        },
      ],
      sum: 0,
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    submit() {
      this.sum = 0;
      let input = document.getElementsByTagName("input");
      // console.log(input)
      input.forEach((item) => {
        if (item.checked) {
          this.sum += Number(item.value);
        }
      });
      // console.log(this.sum);
      let str = "";
      if (this.sum >= 22) {
        str = `你的总分为:${this.sum} 没有显著失眠失眠`;
      } else if (this.sum >= 15) {
        str = `你的总分为:${this.sum} 轻度失眠`;
      } else if (this.sum >= 8) {
        str = `你的总分为:${this.sum} 中度失眠`;
      } else if (this.sum >= 0) {
        str = `你的总分为:${this.sum} 重度失眠`;
      }
      Dialog.confirm({
        message: str,
      })
        .then(() => {
          this.$router.push("/zhushou");
        })
        .catch(() => {
          return;
        });
    },
  },
};
</script>
<style scoped>
.van-nav-bar__title{
  color: #fff;
}
#shuimiaozhiliang {
  display: flex;
  width: 98%;
  margin: 30px auto;
  justify-content: center;
  flex-direction: column;
  background-color: #fcfcfc;
  font-size: 12px;
}
#shuimiaozhiliang > ul {
  display: flex;
  flex-direction: row;
  border: 1px solid #ccc;
  
}
#shuimiaozhiliang > ul:first-child {
  font-weight: bold;
}
#shuimiaozhiliang > ul > li {
  /* border-bottom: 1px solid black; */
  border-left: 1px solid #ccc;
  width: 10%;
  padding: 8px 5px;
}
#shuimiaozhiliang > ul > li:first-child {
  width: 50%;
}
#shuimiaozhiliang > ul > li >span{
  position: relative;
  top:-2px;
}


#footer {
  margin-top: 20px;
}
#footer > ul {
  margin-left: 20px;
}
#footer > ul > li {
  padding: 5px;
}
</style>



