<!--
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2021-04-24 16:15:25
 * @LastEditors: sueRimn
 * @LastEditTime: 2021-04-24 16:21:20
-->
<template>
    <div class="wd-nav">
        <van-nav-bar  class="nav_bar">
            <template #right @click="show">
                <van-icon name="setting-o" size="30" color="black" @click="sz"/>
            </template>
        </van-nav-bar>
    </div>
</template>
<script>
export default {
    methods:{
    show(){
      $router.push('login')
    },
    sz(){
        this.$router.push('/sz')
    }
    }
}
</script>
<style scoped>
    
</style>