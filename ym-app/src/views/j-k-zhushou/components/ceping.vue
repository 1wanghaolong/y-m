<template>
  <div class="ceping">
    <div class="ceping_all">
      <div class="ceping_chacarar"><span>发育测评</span></div>
      <div class="ceping_click">
        <div class="ceping_click1">
          <p style="color: ivory;">行为发育测评</p>
          <van-button type="warning" class="btn_1">去测评</van-button>
        </div>
        <div class="ceping_click2">
          <p>营养测评</p>
          <van-button type="primary" class="btn_2">去测评</van-button>
        </div>
        <div class="ceping_click3">
          <p style="color: ivory;">睡眠测评</p>
          <van-button type="info" class="btn_3">去测评</van-button>
        </div>
        <div class="ceping_click4">
          <p class="p1">更多测评</p>
          <p class="p2">尽情期待</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
  .ceping_chacarar{
    margin: .54rem;
    margin-left: .54rem;
  }
  .ceping_chacarar>span{
    font-weight: bold;
    font-size: .54rem;
  }
  .ceping_click1{
    height: 2.16rem;
    line-height: 1rem;
    background-color: orangered;
    width: 44%;
    opacity: 0.6;
    border-radius: 0.4rem;
    float: left;
    margin-left: 0.4rem;
    margin-bottom: 0.27rem;
    text-align: center;
    font-size: 0.43rem;
    font-weight: bold;
    /* background: url(/images/12.jpg);
    background-size:cover; */
  }
  .btn_1{
    border-radius: 20px;
    width: 2.7rem;
    height:0.81rem;
  }
  .ceping_click2{
    height: 2.16rem;
    background-color: lightgreen;
    width: 44%;
    opacity: 0.6;
    border-radius: 0.4rem;
    margin-right: 0.4rem;
    float: right;
    margin-bottom: 0.27rem;
    text-align: center;
    font-size: 0.43rem;
    font-weight: bold;
    line-height: 1rem;
    /* background: url(/images/13.jpg);
    background-size:cover; */
  }
  .btn_2{
    border-radius: 20px;
    width: 2.7rem;
    height: 0.81rem;
  }
  .ceping_click3{
    height: 2.16rem;
    background-color: lightskyblue;
    width: 44%;
    opacity: 0.6;
    border-radius: 0.4rem;
    margin-left: 0.4rem;
    float: left;
    text-align: center;
    line-height: 1rem;
    font-size: .43rem;
    font-weight: bold;
    /* background: url(/images/14.jpg);
    background-size:cover; */
  }
  .btn_3{
    border-radius: 20px;
    width: 2.7rem;
    height: 0.81rem;
  }
  .ceping_click4{
    height: 2.16rem;
    background-color: rgb(206, 250, 9);
    width: 44%;
    opacity: 0.6;
    border-radius: 0.4rem;
    margin-right: 0.4rem;
    float: right;
    text-align: center;
    font-size: 0.43rem;
    font-weight:bold;
    /* background: url(/images/15.jpg);
    background-size:cover; */
  }
  .p1{
   padding-top: 0.54rem;
  }
  .p2{
    padding-top: 0.27rem;
  }
</style>