<!--
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2021-05-21 12:17:45
 * @LastEditors: sueRimn
 * @LastEditTime: 2021-05-21 14:25:19
-->
<template>
    <div>
        <div style="display:fixed;width:100%;height:50px;background-color:#fff;z-index:1;text-align:center;">
          <div @click="back()" style="width:30px;height:30px;float:left;padding:10px;"><img style="width:100%;height:100%;" src="../../../../assets/xwen/back.svg" alt=""></div>
          <div style="font-size:20px;line-height:50px;margin-right: 40px;">精彩视频</div>
        </div>
        <router-link :to="`/jingcaishipin?lid=${item.lid}`" v-for="(item,i) in shipin" :key="i" style="display:flex;flex-direction:column;align-items:center;">
           <p class="pp">{{item.head}}</p>
            <div style="width:90%;height:200px;" >
                <img style="width:100%;height:100%;" src="../../../../assets/xwen/sp.jpg" alt="">
            </div>
            <p class="pp"><span>{{item.dingyue}}</span>万浏览<span>{{item.dianzan}}</span>点赞</p>
        </router-link>
    </div>
</template>
<script>
export default {
    data(){
        return {
            shipin:[]
        }
    },
    methods:{
        loadsp(){
            this.axios.get('/sp').then(res=> {
                res.data.result.forEach(item=> {
                    item.url=require(`../../../../assets/xwen/${item.url}`);
                });
                this.shipin=res.data.result;
            })
        },
        back(){
          this.$router.go(-1);
        }
    },
    mounted(){
        this.loadsp();
    }
}
</script>
<style scoped>
.pp{
    color: black;
    font-size: 16px;
    margin:10px 0;
}
</style>