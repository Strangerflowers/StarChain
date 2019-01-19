<template>
    <div class="toTop" v-show="scroll" @click="Totop" >
        <i class="iconfont icon-jiantou4"></i>
    </div>
</template>
<script>
export default {
    name:'Totop',
    props:['scroll'],
    data(){
        return{

        }
    },
    methods:{
        Totop(){
            this.$emit('Totop');
        }
    }
}
</script>
<style lang="scss" scoped>
    .toTop{
        width:rem(50px);
        height:rem(50px);
        line-height:rem(50px);
        
        background:rgba(0,0,0,0.3);
        position:fixed;
        bottom:rem(50px);
        right:rem(20px);
        border-radius:rem(50px);
        border:1px solid #ccc;
        .icon-jiantou4{
            font-size:rem(40px);
            color:#666;
        }
    }
</style>

