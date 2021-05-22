<!--
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2021-05-17 14:48:26
 * @LastEditors: sueRimn
 * @LastEditTime: 2021-05-21 14:26:56
-->
<template>
  <div id="baobaobushi">
    <div style="display:fixed;width:100%;height:50px;background-color:#fff;z-index:1;text-align:center;">
          <div @click="back()" style="width:30px;height:30px;float:left;padding:10px;"><img style="width:100%;height:100%;" src="../../../../assets/xwen/back.svg" alt=""></div>
          <div style="font-size:20px;line-height:50px;margin-right: 40px;">宝宝辅食食谱</div>
    </div>
    <div>
      <van-tabs @click="onbind">
          <van-tab v-for="(item,index) in sp" :key="index" :name="item.id" :title="item.id+'月龄'">
              <div style="margin:10px 10px;">
                <p style="font-size:16px;font-weight:550;">{{item.id}}月龄宝宝辅食营养指导</p>
                <div style="margin-top:10px;font-size:16px;color:black;line-height:150%;" v-html="item.nr"></div>
              </div>
          </van-tab>
      </van-tabs>
    </div>
    <div>
           <router-link :to="`/nr_next?lid=${item.lid}`" v-for="(item,i) in res" :key="i" style="display:flex;justify-content: space-between;margin:10px 10px;font-size:16px;color:black;">
                <div style="width:200px;height:100px;margin-top:20px;">
                    <p style="margin-bottom:20px;">{{item.head}}</p>
                    <p style="font-size:14px;color:#faa;">{{item.dianyue}}万人点击</p>
                </div>
                <div style="width:150px;height:100px;"><img  style="width:100%;height:100%;" :src="item.image" alt=""></div>
           </router-link>
    </div>
  </div>
</template>
<script>
import { Tab, Tabs } from 'vant';
export default {
  data(){
    return {
      sp:[],
      res:[]
    }
  },
  methods:{
     back(){
          this.$router.go(-1);
        },
        loadshipu(){
          this.axios.get('/shipu').then(res=>{
            this.sp=res.data.result;
          })
        },
        onbind(name){
          this.axios.get(`/yuer/${name}`).then(res=>{
              res.data.result.forEach(element => {
                  element.image=require(`../../../../assets/xwen/xinwen/${element.image}`)
              });
              this.res= res.data.result;
          })
        },
         loadyuer(){
          this.axios.get(`/yuer/${6}`).then(res=>{
              res.data.result.forEach(element => {
                  element.image=require(`../../../../assets/xwen/xinwen/${element.image}`)
              });
              this.res= res.data.result;
          })
        }
  },
  mounted(){
    this.loadshipu();
    this.loadyuer();
  }
}
</script>
<style scoped>

</style>