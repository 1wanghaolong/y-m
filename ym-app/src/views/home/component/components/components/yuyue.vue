<template>
  <div>
      <div class="head" style="position:fixed;z-index:1;display:flex;background-color:#fff;width:100%;">
        <router-link to="/" class="yy"><img src="../../../../../assets/xwen/back.svg" alt=""></router-link>
        <div class="yy"><img src="../../../../../assets/xwen/x.svg" alt=""></div>
        <p style="font-size:20px;padding-top:8px;">新冠疫苗预约</p>
        <div class="yy" style="position:absolute;right:0;"><img src="../../../../../assets/xwen/sl.svg" alt=""></div>
      </div>
      <div style="width:100%;position:fixed;z-index:1;top:40px;display:flex;background-color:#fff">
        <div style="width:30%;">
          <van-dropdown-menu>
              <van-dropdown-item v-model="value1" :options="option1" />
          </van-dropdown-menu>
        </div>
        <div style="width:70%;">
          <van-search placeholder="请输入搜索关键词" />
        </div>
      </div>
      <div v-infinite-scroll="loadmore"
           infinite-scroll-disabled="loading"
           infinite-scroll-distance="10" 
           style="position:relative;top:100px;">
          <router-link to="/addessxq" v-for="(item,i) in yuyue" :key="i" style="display:block;padding:10px 10px;border-bottom:1px solid #aaa;color:black;">
             <p style="margin-bottom:8px;font-weight:500;">{{item.head}}</p>
             <div style="margin-bottom:8px;display:flex;justify-content: space-between;"><span style="color:#aaa;font-size:12px;">{{item.adress}}</span><span>{{item.juli}}</span></div>
             <p style="margin-bottom:15px;">{{item.data}}</p>
             <div style="display:flex;justify-content: space-between;"><span style="color:#fbc;">剩余源号：<span>{{item.num}}</span></span><button style="font-size:12px;padding:5px 15px;border-radius:25px;border:0;">选择门诊</button></div>
          </router-link>
      </div>
  </div>
</template>
<script>
export default {
      data() {
          return {
          loading:false,
          value1: 0,
          value2: 'a',
          option1: [
              { text: '西湖', value: 0 },
              { text: '新款', value: 1 },
              { text: '活动', value: 2 },
          ],
          yuyue:[
            {head:'爱上覅u啊哈佛神佛哈桑佛啊是佛i嫩肤你健脑哦啊接送i家啊大家',adress:'涉江省杭州市',juli:'1.1km',data:'每周四上午|08:00-1200',num:0},
            {head:'爱上覅u啊哈佛神佛哈桑佛啊是佛i嫩肤你健脑哦啊接送i家啊大家',adress:'涉江省杭州市',juli:'1.1km',data:'每周四上午|08:00-1200',num:0},
            {head:'爱上覅u啊哈佛神佛哈桑佛啊是佛i嫩肤你健脑哦啊接送i家啊大家',adress:'涉江省杭州市',juli:'1.1km',data:'每周四上午|08:00-1200',num:0},
            {head:'爱上覅u啊哈佛神佛哈桑佛啊是佛i嫩肤你健脑哦啊接送i家啊大家',adress:'涉江省杭州市',juli:'1.1km',data:'每周四上午|08:00-1200',num:0},
            {head:'爱上覅u啊哈佛神佛哈桑佛啊是佛i嫩肤你健脑哦啊接送i家啊大家',adress:'涉江省杭州市',juli:'1.1km',data:'每周四上午|08:00-1200',num:0},
            {head:'爱上覅u啊哈佛神佛哈桑佛啊是佛i嫩肤你健脑哦啊接送i家啊大家',adress:'涉江省杭州市',juli:'1.1km',data:'每周四上午|08:00-1200',num:0},
            {head:'爱上覅u啊哈佛神佛哈桑佛啊是佛i嫩肤你健脑哦啊接送i家啊大家',adress:'涉江省杭州市',juli:'1.1km',data:'每周四上午|08:00-1200',num:0}
          ],

        }
      },
     methods:{
    loadmore(){
      this.loading=true
    }
  },
  mounted(){
    this.loadmore();
  }
};
</script>
<style  scoped>
*{
  margin: 0;
  padding: 0;
}
.head{
  border-bottom: 1px solid rgb(170, 168, 168);
}
.head img{
  width: 100%;
  height: 100%;}
.yy{
  width: 40px;
  height: 40px;
  line-height:100%;
}
</style>