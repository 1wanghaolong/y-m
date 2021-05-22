<!--
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2021-05-17 14:54:23
 * @LastEditors: sueRimn
 * @LastEditTime: 2021-05-21 21:06:16
-->
<template>
  <div id="ziliaobianji">
      <van-nav-bar
        title="个人资料"
        left-arrow
        @click-left="onClickLeft"
      />

      <van-cell-group>
        <van-cell title="头像" value="内容" is-link/>
        <van-cell title="账号ID" value="26p6j"/>
        <van-cell title="昵称" value="小豆丁" is-link/>
        <van-cell title="微信号" value="绑定后可用微信登录" is-link/>
        <van-cell title="简介" value="简单介绍下自己吧" is-link/>
        <van-cell title="生日"  is-link @click="showDate = true" :value="brithday" v-model="brithday"/>

        <van-popup v-model="showDate" round position="bottom">
          <van-datetime-picker
            v-model="currentDate"
            type="date"
            show-toolbar
            title="请选择日期"
            @confirm="onConfirm"
            @cancel="showDate = false"
          />
        </van-popup>
        <van-cell title="性别" value="男" is-link/>
        <van-cell title="地区" :value="address" is-link @click="show = true"/>
         <van-popup v-model="show" round position="bottom">
          <van-cascader
            v-model="cascaderValue"
            title="请选择所在地区"
            :options="options"
            @close="show = false"
            @finish="onFinish"
          />
         </van-popup>
      </van-cell-group>
  </div>
</template>
<script>
export default {
  name:'ziliaobianji',
  data(){
    return{
        necheng:'小豆丁',
        currentDate: new Date(),
        showDate:false,
        brithday: "",
        show:false,
        address:'',
        cascaderValue:'',
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
    }
  },
  methods: {
    onClickLeft(){
      this.$router.go(-1)
    },
     onConfirm(e) {
      
      console.log(e);
      this.showDate = false;
    },
    onFinish(){
        this.show = false;
      }
  },
  
}
</script>
<style scoped>

</style>