<!--
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2021-05-09 16:39:20
 * @LastEditors: sueRimn
 * @LastEditTime: 2021-05-10 19:20:53
-->
<template>
    <div class="navs">
        <div style="display:flex;justify-content: space-between;" >
            <router-link  to="#" class="st" >
                <div class="bg" ><img style="width:100%;height:100%;" src="../../../assets/xwen/jiaoliu.svg"  alt=""></div>
                <p>交流</p>
            </router-link>
            <router-link  to="#" class="st">
                <div class="bg"><img style="width:100%;height:100%;" src="../../../assets/xwen/baike.svg"  alt=""></div>
                <p>育儿百科</p>
            </router-link>
            <router-link  to="#" class="st">
                <div class="bg" style="width:40px;height:40px;border-radius: 50%;padding:10px;"><img style="width:100%;height:100%;" src="../../../assets/xwen/ketang.svg"  alt=""></div>
                <p>亲子课堂</p>
            </router-link>
            <router-link  to="#" class="st">
                <div class="bg" style="width:40px;height:40px;border-radius: 50%;padding:10px;"><img style="width:100%;height:100%;" src="../../../assets/xwen/shipin.svg"  alt=""></div>
                <p>精彩视频</p>
            </router-link>
            <router-link id="nav" class="st" to="#">
                <div class="bg"><img style="width:100%;height:100%;" src="../../../assets/xwen/gd.svg"  alt=""></div>
                <p>更多工具</p>
            </router-link>
        </div>
        <div id="naa" style="display:none;margin-top:10px;" >
             <router-link class="st" to="#">
                <div class="bg"><img style="width:100%;height:100%;" src="../../../assets/xwen/baby.svg"  alt=""></div>
                <p>特殊接种</p>
            </router-link>
             <router-link class="st"  to="#">
                <div class="bg"><img style="width:100%;height:100%;" src="../../../assets/xwen/food.svg"  alt=""></div>
                <p>宝宝辅食</p>
            </router-link>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            dianji:false
        }
    },
    methods:{
        aa(){
            let id=document.getElementById('nav');
            id.onclick=()=>{    
                let _id=document.getElementById('naa');
                if(this.dianji==true){
                    this.dianji=!this.dianji;
                  _id.style.display='none';
                }else{
                    this.dianji=!this.dianji;
                    _id.style.display='flex'
                }
            }
        }
    },
    mounted(){
        this.aa();
    }
}
</script>
<style scoped>
    .st{
     text-align:center;margin:0 5px;color:black;   
    }
    .bg{
    width:40px;height:40px;border-radius: 50%;padding:10px;
}
</style>