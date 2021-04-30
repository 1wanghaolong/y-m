<template>
    <div class="neirong">
       <van-tabs @click="onClick"  animated>
         <van-tab :name="item.lid"  v-for="(item,i) in nav" :key="i" :title="item.head" :id="item.lid.toString()">
       </van-tab>
       </van-tabs>
        <router-link to="#" v-for="(item,i) in neirong" :key="i" style="display:flex;justify-content: space-between;margin:10px 10px;font-size:16px;color:black;">
            <div style="width:200px;height:100px;margin-top:20px;">
                <p style="margin-bottom:20px;">{{item.head}}</p>
                <p style="font-size:14px;color:#faa;">{{item.dianyue}}万人点击</p>
            </div>
            <div style="width:150px;height:100px;"><img  style="width:100%;height:100%;" :src="item.image" alt=""></div>
        </router-link>
    </div>
</template>
<script>
export default {
    data(){
        return {
            nav:[],
            neirong:[],
            active:'1'
        }
    },
    methods:{
        loadnav(){
            this.axios.get('/nav').then(res=>{
                this.nav=res.data.result;
            })
        },
        loadneirong(){
            this.axios.get(`/neirong/${1}`).then(res=>{
                res.data.result.forEach(element => {
                    element.image=require(`../../../assets/xwen/xinwen/${element.image}`);
                });
                this.neirong=res.data.result;
            })
        },
        onClick(name){
            this.axios.get(`/neirong/${name}`).then(res=>{
                console.log(res.data.result)
                res.data.result.forEach(item => {
                    item.image=require(`../../../assets/xwen/xinwen/${item.image}`);
                });
                this.neirong=res.data.result;
            })
        }
    },
    mounted(){
        this.loadnav();
        this.loadneirong();
    }
}
</script>
<style scoped>
</style>