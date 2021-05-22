<template>
    <div class="search">
       <van-search id="search"
        shape="round"
        placeholder="请输入搜索关键词"
        style="width:100%;"
       />
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
                 this.$router.push('/search_next');
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