<!--
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2021-05-17 14:45:36
 * @LastEditors: sueRimn
 * @LastEditTime: 2021-05-21 20:00:40
-->
<template>
  <div id="jingcaishipin">
    <div style="display:fixed;width:100%;height:50px;background-color:#fff;z-index:1;text-align:center;">
          <div @click="back()" style="width:30px;height:30px;float:left;padding:10px;"><img style="width:100%;height:100%;" src="../../../../assets/xwen/back.svg" alt=""></div>
    </div>
    <div>
      <video src="../../../../../public/shipin/s1.mp4"
      id="video"
      width="100%" height="250px"
      style="background-color: #000;"
      controls="controls" 
      autoplay="autoplay"></video>
    </div>
    <div style="width:95%;margin:auto;position: relative;
    bottom: 10px;"
     v-infinite-scroll="loadmore"
    infinite-scroll-disabled="loading"
    infinite-scroll-distance="10">
      <div id="cc" v-for="(item,i) in res" :key="i" style="font-size:16px;margin-top:10px;border-bottom: 1px dashed #000;">
        <p style="font-weight:500;">名称：{{item.username}}</p>
        <p>{{item.pl}}</p>
        <p>时间：{{item.time}}</p>
      </div>
    </div>
    <div style="position:fixed;bottom:0;">
        <van-cell-group style="display:flex;justify-content:">
             <van-field v-model="value" id="pin" label="评论" placeholder="请输入要评论的话" />
             <van-button style="margin-left:20px;width:100px;" type="default" @click="pinlun()">提交</van-button>
        </van-cell-group>
    </div>
  </div>
</template>
<script>
import { Dialog } from 'vant';
import qs from 'qs';
export default {
   components: {
    [Dialog.Component.name]: Dialog.Component,
  },
  data(){
    return{
      value:'',
      res:[],
      name: JSON.parse(sessionStorage.getItem('info'))  
    }
  },
  methods:{
      loadmore(){
            this.loading=true
        },
    pinlun(){
        let p=document.getElementById('pin');
        if(this.value==''){
                   Dialog.alert({
                    title: '提示消息',
                     message: '搜索内容不能为空',
                   })
                }else{
                     let date = new Date();
                     let mytime=date.toLocaleString();
                     console.log(mytime); 
                     let id=this.$route.query.lid;  
                  this.axios.post('/pl', qs.stringify({id:id,username:this.name.username,pinlun:this.value,time:mytime})).then(res=>{
                       if(res.data.code==200){
                           Dialog.alert({
                           title: '提示消息',
                           message: '提交成功',
                           });
                           this.loadpl();
                       }else{
                        Dialog.alert({
                          title: '提示消息',
                           message: '提交失败',
                           });
                       }
                      this.value='';
                   })
                }
    },
     back(){
          this.$router.go(-1);
        },
      loadpl(){
        let id=this.$route.query.lid;
        this.axios.get(`/pllb/${id}`).then(res=>{
          this.res=res.data.result
        });
      }
  },
  mounted(){
    this.loadpl();
    this.loadmore();
  }
};
</script>
<style scope>
  #cc{
    margin-bottom:10px;
  }
  #cc p{
    margin-bottom:5px;
  }
</style>