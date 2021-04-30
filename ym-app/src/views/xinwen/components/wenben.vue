<template>
    <div class="wenben" style="padding-top:50px;">
        <router-link :to="`/wenben_next?head=${item}`" v-for="(item,i) in wenben" :key="i" style="color:black;">
            <div style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;padding:10px;"><span style="font-size:16px;margin-right:5px;">{{item}}</span></div>
        </router-link>
    </div>
</template>
<script>
export default {
    data(){
        return {
           wenben:[
            ]
        }
    },
    methods:{
        loadxinwen(){
            this.axios.get('/head').then(res=>{
                res.data.results.forEach(item => {
                    this.wenben.push(item.head);
                });
        });
        }
    },
    mounted(){
        this.loadxinwen();
    }
}
</script>
<style scoped>
    
</style>