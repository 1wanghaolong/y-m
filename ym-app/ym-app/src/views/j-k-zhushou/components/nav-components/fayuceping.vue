<!--
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2021-05-17 14:29:07
 * @LastEditors: sueRimn
 * @LastEditTime: 2021-05-21 20:53:43
-->
<template>

  <div>
    <van-nav-bar
    style="background-color:#5CD0AD;"
      
      @click-left="onClickLeft"
    >
    <template #left>
      <van-icon color="#fff" name="arrow-left" />
    </template>
     <template #title >
       <span style="color:#fff;">健康测评</span>  
     </template>
    </van-nav-bar>
    <div id="fayuceping">
    <ul style="text-align:center;">
      <li>项目</li>
      <li>无</li>
      <li>轻度</li>
      <li>中度</li>
      <li>重度</li>
      <li>极重</li>
      
    </ul>
    <ul>
      <li>为保证正确,托提总是做得很慢,做作业必须反复检查</li>
      <li v-for="(v, i) in test" :key="i">
        <input type="radio" name="1" :value="v.name" :checked="v.value" />
        <span>{{i}}</span>
      </li>
    </ul>
    <ul>
      <li>必须反复洗手或反复数数</li>
      <li v-for="(v, i) in test" :key="i">
        <input type="radio" name="2" :value="v.name" :checked="v.value" />
        <span>{{i}}</span>
      </li>
    </ul>
    <ul>
      <li>经常责怪自己</li>
      <li v-for="(v, i) in test" :key="i">
        <input type="radio" name="3" :value="v.name" :checked="v.value" />
        <span>{{i}}</span>
      </li>
    </ul>
    <ul>
      <li>上课时,总担心老师会提问自己</li>
      <li v-for="(v, i) in test" :key="i">
        <input type="radio" name="4" :value="v.name" :checked="v.value" />
        <span>{{i}}</span>
      </li>
    </ul>
    <ul>
      <li>心情时好时坏</li>
      <li v-for="(v, i) in test" :key="i">
        <input type="radio" name="5" :value="v.name" :checked="v.value" />
        <span>{{i}}</span>
      </li>
    </ul>
    <ul>
      <li>同学考试成绩比自己高时,会感到难过</li>
      <li v-for="(v, i) in test" :key="i">
        <input type="radio" name="6" :value="v.name" :checked="v.value" /><span>{{i}}</span>
      </li>
    </ul>
    <ul>
      <li>同学考试成绩比我高,但能力并不比我强</li>
      <li v-for="(v, i) in test" :key="i">
        <input type="radio" name="7" :value="v.name" :checked="v.value" />
        <span>{{i}}</span>
      </li>
    </ul>
    <ul>
      <li>感觉老师对自己的不公平,对比自己强的同学不服气</li>
      <li v-for="(v, i) in test" :key="i">
        <input type="radio" name="8" :value="v.name" :checked="v.value" />
        <span>{{i}}</span>
      </li>
    </ul>
     <ul>
      <li>感到苦闷,感到高考没有希望</li>
      <li v-for="(v, i) in test" :key="i">
        <input type="radio" name="9" :value="v.name" :checked="v.value" />
        <span>{{i}}</span>
      </li>
    </ul>
     <ul>
      <li>一听说要模拟大考,心里就感到紧张</li>
      <li v-for="(v, i) in test" :key="i">
        <input type="radio" name="10" :value="v.name" :checked="v.value" />
        <span>{{i}}</span>
      </li>
    </ul>
    </div>
    <div id="footer" style="display: flex">
      <ul style="width: 60%">
        <li>0-10分:健康</li>
        <li>11-20分:轻度</li>
        <li>21-30分:中度</li>
        <li>31-40分:重度</li>
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
      if (this.sum >= 31) {
        str = `你的总分为:${this.sum} 重度`;
      } else if (this.sum >= 21) {
        str = `你的总分为:${this.sum} 中度`;
      } else if (this.sum >= 11) {
        str = `你的总分为:${this.sum} 轻度`;
      } else if (this.sum >= 0) {
        str = `你的总分为:${this.sum} 健康`;
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
#fayuceping {
  display: flex;
  width: 98%;
  margin: 30px auto;
  justify-content: center;
  flex-direction: column;
  background-color: #fcfcfc;
  font-size: 12px;
}
#fayuceping > ul {
  display: flex;
  flex-direction: row;
  border: 1px solid #ccc;
  
}
#fayuceping > ul:first-child {
  font-weight: bold;
  
}
#fayuceping > ul > li {
  /* border-bottom: 1px solid black; */
  border-left: 1px solid #ccc;
  width: 10%;
  padding: 8px 5px;
}
#fayuceping > ul > li:first-child {
  width: 50%;
}
#fayuceping > ul > li >span{
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



