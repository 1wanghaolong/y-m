<!--
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2021-04-24 15:23:55
 * @LastEditors: sueRimn
 * @LastEditTime: 2021-04-24 16:43:06
-->
<template>
    <div class="neirong">
       <van-tabs  animated>
         <van-tab v-for="index in 5" :key="index" :title="'选项 ' + index">
       </van-tab>
       </van-tabs>
        <router-link to="#" v-for="(item,i) in nairong" :key="i" style="display:flex;justify-content: space-between;margin:0.27rem 0.27rem;">
            <div>
                <p>{{item.head}}</p>
                <p>{{item.read}}</p>
            </div>
            <div style="width:2.7rem;height:2.7rem;"><img  style="width:100%;height:100%;" :src="item.avatar" alt=""></div>
        </router-link>
    </div>
</template>
<script>
export default {
    data(){
        return {
            nairong:[
               {head:'sapjpdjpdjdd',read:"1.2万人",avatar:"cyq.jpg"},
               {head:'sapjpdjpdjdd',read:"1.2万人",avatar:"cyq.jpg"},
               {head:'sapjpdjpdjdd',read:"1.2万人",avatar:"cyq.jpg"},
               {head:'sapjpdjpdjdd',read:"1.2万人",avatar:"cyq.jpg"},
               {head:'sapjpdjpdjdd',read:"1.2万人",avatar:"cyq.jpg"},
               {head:'sapjpdjpdjdd',read:"1.2万人",avatar:"cyq.jpg"}
            ]
        }
    },
    methods:{
        loadneirong(){
            this.nairong.forEach(item=>{
                item.avatar=require(`../../../assets/xwen/${item.avatar}`)
            });
        }
    },
    mounted(){
        this.loadneirong();
    }
}
</script>
<style scoped>
</style>