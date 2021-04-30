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
    </div>
</template>
<script>
export default {
   data(){
       return {
           value:""
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
       }
    },
    mounted(){
        this.back();
  }
     
  
}
</script>
<style scoped>

</style>