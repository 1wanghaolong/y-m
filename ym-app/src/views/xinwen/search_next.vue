<!--
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2021-05-09 16:39:20
 * @LastEditors: sueRimn
 * @LastEditTime: 2021-05-10 19:16:42
-->
<template>
    <div> 
        <div>
            <van-search id="search"
            v-model="value"
            shape="round"
            placeholder="请输入搜索关键词"
            style="width:80%;"
            />
            <span style="position:absolute;right:48px;top:20px;font-size:16px;" id="search_click">搜索</span>
            <span style="position:absolute;right:8px;top:20px;font-size:16px;" id="back">取消</span>
        </div>
        <div v-if="xianshi">
           <router-link :to="`/nr_next?lid=${item.lid}`" v-for="(item,i) in nr" :key="i" style="display:flex;justify-content: space-between;margin:10px 10px;font-size:16px;color:black;">
                <div style="width:200px;height:100px;margin-top:20px;">
                    <p style="margin-bottom:20px;">{{item.head}}</p>
                    <p style="font-size:14px;color:#faa;">{{item.dianyue}}万人点击</p>
                </div>
                <div style="width:150px;height:100px;"><img  style="width:100%;height:100%;" :src="item.image" alt=""></div>
           </router-link>
       </div>
       <div v-else style="text-align:center;font-size:16px;color:black;">
           <p>没有搜索到相关内容</p>
       </div>
    </div>
</template>
<script>
import { Dialog } from 'vant';
export default {
    components: {
    [Dialog.Component.name]: Dialog.Component,
  },
   data(){
       return {
           value:"",
           nr:[],
           xianshi:true
       }
   },
   watch:{
   },
   methods:{
       back(){
           let back=document.getElementById('back');
           back.onclick=()=>{
               this.$router.go(-1);
           }
       },
       search(){
           let that = this;
           let search_click=document.getElementById('search_click');
            search_click.onclick=function(){
                if(that.value==""){
                   Dialog.alert({
                    title: '提示消息',
                     message: '搜索内容不能为空',
                   }).then(() => {
                // on close
                     });
                }else{
                    that.axios.get(`/sousuo/${that.value}`).then(res=>{
                           if(res.data.code==200){
                            that.xianshi=true;
                             res.data.result.forEach(element => {
                            element.image=require(`../../assets/xwen/xinwen/${element.image}`);
                             });
                            that.nr=res.data.result;
                           }else{
                               that.xianshi=false;
                           }
                    })
                }
            }
       }
    },
    mounted(){
        this.back();
        this.search();
  }
     
  
}
</script>
<style scoped>

</style>