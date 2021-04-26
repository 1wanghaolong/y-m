<template>
    <div class="navs" style="display:flex;justify-content: space-between;">
        <router-link to="#" v-for="(item,i) in nas" :key="i" style="text-align:center;margin:0 0.13rem;color:black;">
            <div style="width:1.08rem;height:1.08rem;background-color:#ffa;border-radius: 50%;padding:0.27rem;"><img style="width:100%;height:100%;" :src="item.avatar"  alt=""></div>
            <p>{{item.head}}</p>
        </router-link>
    </div>
</template>
<script>
export default {
    data(){
        return {
            nas:[
               {head:'育儿百科',avatar:"baike.svg"},
               {head:'亲子课堂',avatar:"ketang.svg"},
               {head:'精彩视频',avatar:"shipin.svg"},
               {head:'交流',avatar:"jiaoliu.svg"},
               {head:'更多工具',avatar:"gd.svg"}
            ]
        }
    },
    methods:{
        loadximwen(){
            this.nas.forEach(item=>{
                item.avatar=require(`../../../assets/xwen/${item.avatar}`)
            })
        }
    },
    mounted(){
        this.loadximwen();
    }
}
</script>
<style scoped>
</style>