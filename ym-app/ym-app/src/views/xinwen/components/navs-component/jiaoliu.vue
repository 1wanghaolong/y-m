<!--
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2021-05-17 14:45:36
 * @LastEditors: sueRimn
 * @LastEditTime: 2021-05-17 14:47:08
-->
<template>
  <div id="jiaoliu" style=" display: flex; justify-content: center;">
    <div style="display:fixed;width:100%;height:50px;background-color:#fff;z-index:1;">
          <div @click="back()" style="width:30px;height:30px;float:left;padding:10px;"><img style="width:100%;height:100%;" src="../../../../assets/xwen/back.svg" alt=""></div>
          <div style="width:30px;height:30px;float:right;padding:10px;"><img style="width:100%;height:100%;" src="../../../../assets/xwen/fx.svg" alt=""></div>
    </div>
    <div style="position:absolute;top:50px;width:95%;height:85%;border:1px solid black;"></div>
    <div style="position:fixed;bottom:0;">
        <van-cell-group style="display:flex;justify-content:">
             <van-field  id="pin" label="消息"/>
             <van-button style="margin-left:20px;width:100px;" type="default">发送</van-button>
        </van-cell-group>
    </div>
  </div>
</template>
<script>
import { Dialog } from 'vant';
export default {
  data(){
    return {

    }
  },
  methods:{
    back(){
          this.$router.go(-1);
        }
  }
}
</script>
<style scope>
  
</style>