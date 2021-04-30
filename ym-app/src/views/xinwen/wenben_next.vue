<template>
    <div style="text-align:center;"
    v-infinite-scroll="loadmore"
    infinite-scroll-disabled="loading"
    infinite-scroll-distance="10"
    >
        <div style="display:fixed;width:100%;height:30px;background-color:#fff;z-index:1;">
          <div id="back" style="width:30px;height:30px;float:left;margin-left:10px;"><img style="width:100%;height:100%;" src="../../assets/xwen/back.svg" alt=""></div>
          <h3 style="font-size:20px;margin:20px;line-height:30px;">{{head}}</h3>
        </div>
        <div style="margin-top:20px;" v-for="(item,i) in xinwen" :key="i" >
            <div style="text-align:left;margin-left:20px;font-size:16px;margin-bottom:20px;"><span>时间：</span><span>{{item.data}}</span></div>
            <div style="text-align:left;margin-left:20px;font-size:16px;" v-html="item.content">
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
         return {
      loading:false,
      xinwen:[],
      head:''
    }
    },
    methods:{
    loadmore(){
      this.loading=true
    },
    loadxinwen(){
        let a=this.$route.query.head;
        this.head=a;
        this.axios.get(`/xinwen/${a}`).then(res=>{
            this.xinwen=res.data.results;
        });
        },
        back(){
        document.getElementById('back').onclick=()=>{
          this.$router.go(-1);
        }
        }
  },
  mounted(){
    this.loadmore();
    this.loadxinwen();
    this.back();
  }
}
</script>
<style scoped>
   
</style>