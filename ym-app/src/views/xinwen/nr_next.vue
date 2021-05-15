<!--
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2021-05-10 19:07:15
 * @LastEditors: sueRimn
 * @LastEditTime: 2021-05-10 19:15:11
-->
<template>
     <div style="text-align:center;"
    v-infinite-scroll="loadmore"
    infinite-scroll-disabled="loading"
    infinite-scroll-distance="10"
    >
        <div style="display:fixed;width:100%;height:50px;background-color:#fff;z-index:1;">
          <div id="back" style="width:30px;height:30px;float:left;padding:10px;"><img style="width:100%;height:100%;" src="../../assets/xwen/back.svg" alt=""></div>
          <div style="width:30px;height:30px;float:right;padding:10px;"><img style="width:100%;height:100%;" src="../../assets/xwen/fx.svg" alt=""></div>
        </div>
        <div v-for="(item,i) in nr" :key="i" style="text-align:left;padding:0 10px;">
            <p style="font-size:22px;font-weight:700;color:black;margin-bottom:20px;">{{item.head}}</p>
            <p style="color:black;font-size:16px;">订阅{{item.dianyue}}</p>
        </div>
    </div>
</template>
<script>
export default {
   data(){
       return {
           nr:[]
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
        loadmore(){
            this.loading=true
        },
         loadneirong(){
             let lid=this.$route.query.lid;
            this.axios.get(`/nr/${lid}`).then(res=>{
                this.nr=res.data.result;
            })
        }
    },
    mounted(){
        this.back();
        this.loadmore();
        this.loadneirong();
  }
     
  
}
</script>
<style scoped>

</style>