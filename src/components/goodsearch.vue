<template>
    <div class="goods">
        <!-- <Aheader/> -->
       liebiao
        
    </div>
</template>
<script>
import Aheader from './Aheader.vue';
var querystring = require('querystring'); 
export default {
    name:'List',
    components:{
        Aheader
    },
    data(){
        return{
            keyword:'',
            timer:null,
            result:[]
        }
    },
   create(){
    console.log(this.$route);
   }
    
    
}
</script>
<style lang="scss" scoped>
    // .searchlist{
    //     border-top:1px solid #eee;
    //     .mint-search{
    //         z-index:1000;
    //         position:fixed;
    //         background-color:#fff;
    //         width:rem(375px);
    //         height:rem(50px);
    //         font-size:rem(12px);
    //         .mint-searchbar{
    //             .mint-searchbar-inner{
    //                 border-radius: 50px;
    //                 background-color:#eee;
    //                 .mint-searchbar-core{
    //                     border-radius:50px;
    //                     background-color:#eee;
    //                 }
    //             }
    //         }
    //     }
    //     #list{
    //         margin-top:rem(50px);
    //         width:rem(375px);
    //         .mint-cell{
    //             font-size:rem(18px);
    //             text-align:left;
    //             padding-left:rem(20px);
    //             line-height:rem(48px);
    //             // .mint-cell-wrapper{
    //             //     .mint-cell-value{
                       
    //             //     }
    //             // }
    //         }
    //     }
    // }
</style>


