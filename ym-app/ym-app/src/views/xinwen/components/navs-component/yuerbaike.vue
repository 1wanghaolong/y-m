<!--
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2021-05-17 14:45:36
 * @LastEditors: sueRimn
 * @LastEditTime: 2021-05-21 14:25:35
-->
<template>
  <div id="yuerbaike">
  <div style="display:fixed;width:100%;height:50px;background-color:#fff;z-index:1;text-align:center;">
          <div @click="back()" style="width:30px;height:30px;float:left;padding:10px;"><img style="width:100%;height:100%;" src="../../../../assets/xwen/back.svg" alt=""></div>
          <div style="font-size:20px;line-height:50px;margin-right: 40px;">育儿百科</div>
  </div>
  <van-tabs @click="onClick"  animated>
         <van-tab :name="item.lid"  v-for="(item,i) in nav" :key="i" :title="item.head" :id="item.lid.toString()">
       </van-tab>
       </van-tabs>
        <router-link :to="`/nr_next?lid=${item.lid}`" v-for="(item,i) in neirong" :key="i" style="display:flex;justify-content: space-between;margin:10px 10px;font-size:16px;color:black;">
            <div style="width:200px;height:100px;margin-top:20px;">
                <p style="margin-bottom:20px;">{{item.head}}</p>
                <p style="font-size:14px;color:#faa;">{{item.dianyue}}万人点击</p>
            </div>
            <div style="width:150px;height:100px;"><img  style="width:100%;height:100%;" :src="item.image" alt=""></div>
        </router-link>
  </div>
</template>
<script>
export default {
  data(){
        return {
            nav:[],
            neirong:[],
            active:'1'
        }
    },
    methods:{
        loadnav(){
            this.axios.get('/nav').then(res=>{
                this.nav=res.data.result;
            })
        },
        loadneirong(){
            this.axios.get(`/neirong/${1}`).then(res=>{
                res.data.result.forEach(element => {
                    element.image=require(`../../../../assets/xwen/xinwen/${element.image}`);
                });
                this.neirong=res.data.result;
            })
        },
        onClick(name){
            this.axios.get(`/neirong/${name}`).then(res=>{
                console.log(res.data.result)
                res.data.result.forEach(item => {
                    item.image=require(`../../../../assets/xwen/xinwen/${item.image}`);
                });
                this.neirong=res.data.result;
            })
        },
        back(){
          this.$router.go(-1);
        }
    },
    mounted(){
        this.loadnav();
        this.loadneirong();
    }

}
</script>
<style scope>
  
</style>