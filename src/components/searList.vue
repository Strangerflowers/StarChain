<template>
    <div class="searchlist">
        <!-- <Aheader/> -->
        <mt-search class="search"
            v-model="keyword"
            autofocus
           cancel-text="取消"
           placeholder="搜索"
           @input="search"
           >
           
        </mt-search>
        <div id="list">
            <mt-cell v-for="(item, idx) in result" :key="idx" slot="title" v-text="item.keyword" @click.native="gotosearch(item.keyword)">
                
            </mt-cell>
        </div>
        
    </div>
</template>
<script>
import Aheader from './Aheader.vue';
var querystring = require('querystring'); 
export default {
    name:'AheaderList',
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
    methods:{
        search(){
           clearTimeout(this.timer);
           if(!this.keyword) return;
           
           this.timer = setTimeout(()=>{
                this.$axios.post('https://api.380star.com/newbuyer/33/goods/searchKeywordList.do',querystring.stringify({
                    keyword: this.keyword,
                    source: 0,
                    entry: 1
                }))
                .then((res)=>{
                    console.log(res);
                    this.result=res.data.data.keywordList;
                    console.log(this.result);
                })
                .catch((error)=>{
                    console.log(error);
                })
           },1000)
           
        },
        gotosearch(keyword){
            this.$router.push({path:'/goodsearch/'+keyword})
        }
    }
    
}
</script>
<style lang="scss" scoped>
    .searchlist{
        border-top:1px solid #eee;
        .mint-search{
            z-index:1000;
            position:fixed;
            background-color:#fff;
            width:rem(375px);
            height:rem(50px);
            font-size:rem(12px);
            .mint-searchbar{
                .mint-searchbar-inner{
                    border-radius: 50px;
                    background-color:#eee;
                    .mint-searchbar-core{
                        border-radius:50px;
                        background-color:#eee;
                    }
                }
            }
        }
        #list{
            margin-top:rem(50px);
            width:rem(375px);
            .mint-cell{
                font-size:rem(18px);
                text-align:left;
                padding-left:rem(20px);
                line-height:rem(48px);
                // .mint-cell-wrapper{
                //     .mint-cell-value{
                       
                //     }
                // }
            }
        }
    }
</style>


