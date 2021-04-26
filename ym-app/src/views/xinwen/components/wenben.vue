<template>
    <div class="wenben" style="padding-top:1.35rem;">
        <router-link to="#" v-for="(item,i) in wenben" :key="i" style="color:black;">
            <div><span style="font-size:0.54rem;margin-right:0.135rem;">{{i}}</span><span>{{item}}</span></div>
        </router-link>
    </div>
</template>
<script>
export default {
    data(){
        return {
            wenben:['宝宝咳嗽老不好，是感冒还是肺炎？一招轻松边界'
            ,'宝宝咳嗽老不好，是感冒还是肺炎？一招轻松边界'
            ,'宝宝咳嗽老不好，是感冒还是肺炎？一招轻松边界'
            ,'宝宝咳嗽老不好，是感冒还是肺炎？一招轻松边界'
            ,'宝宝咳嗽老不好，是感冒还是肺炎？一招轻松边界'
            ,'宝宝咳嗽老不好，是感冒还是肺炎？一招轻松边界'
            ]
        }
    }
}
</script>
<style scoped>
    
</style>