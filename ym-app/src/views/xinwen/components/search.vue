<!--
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2021-04-24 15:23:55
 * @LastEditors: sueRimn
 * @LastEditTime: 2021-04-24 16:43:35
-->
<template>
    <div class="search">
       <van-search id="search"
        shape="round"
        placeholder="请输入搜索关键词"
        style="width:81%;"
       />
       <div style="width:20%;height:1.35rem;position:absolute;right:0;top:0;text-align:center;background-color:#fff;">
           <img style="width:60%;height:100%;" src="../../../assets/xwen/qiandao.svg" alt="">
       </div>
    </div>
</template>
<script>
export default {
    data(){
        return {

        }
    },
     methods:{
         search(){
             let search=document.getElementById('search');
             search.onfocus=()=>{
                 this.$router.replace('/search_next');
             }
         }
    },
  mounted(){
    this.search();
  }
}
</script>
<style scoped>
    
</style>