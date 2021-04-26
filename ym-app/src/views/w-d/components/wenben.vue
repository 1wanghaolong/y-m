<!--
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2021-04-24 16:15:25
 * @LastEditors: sueRimn
 * @LastEditTime: 2021-04-24 16:20:09
-->
<template>
    <div class="wenben">
        <van-grid >
            <van-grid-item icon="photo-o" text="我的消息" dot />
            <van-grid-item icon="photo-o" text="我的订单" />
            <van-grid-item icon="photo-o" text="我的豆豆" />
            <van-grid-item icon="photo-o" text="我的预约" badge="10+" />
        </van-grid>
        <div id="d3">
            我的宝宝
        </div>
        <van-field label="我的收藏" right-icon="arrow" readonly />
        <van-field label="帮助中心" right-icon="arrow" readonly />
        <van-field label="建议反馈" right-icon="arrow" readonly />
        <img src="../../../assets/xwen/cyq.jpg" alt="" class="img2">
    </div>

</template>
<script>
export default {
    
}
</script>
<style scoped>
    #d3{
    width: 100%;
    height: 120px;
    text-align: left;
    background-color: ghostwhite;
    }
    .img2{
    width: 100%;
    }
</style>