<template>
    <div class="goods">
        <Aheader/>
		<div class="shoplist"   id="container">
			<div class="g-list">
				<ul  v-infinite-scroll="loadMore"
						
						infinite-scroll-distance="10">
					<li v-for="(good, index) in goodslist" :key="index" @click="gotoDetail(good.goodsId)">
						<div class="g-list-left">
							<img   v-lazy.container="good.goodsLogo"  >
						</div>
						<div class="g-list-right">
							<div class="g-list-con">
								<div class="g-list-head">
									<p>{{good.goodsName}}</p>
								</div>
								<div class="baoyou" v-show="good.eptitle">
									<span>{{good.eptitle}}</span>
								</div>
								<div class="g-list-price">
									<p class="price">￥ <span >{{good.goodsPrice}}</span></p>
									<p class="sell">销量{{good.goodsSales}}</p>
								</div>
							</div>
							<div class="g-list-store">
								<i class="iconfont  icon-dianpu"></i>
								<p> {{good.shopName}} ></p>
							</div>
						</div>
					</li>
				</ul>
			</div>
		</div>
        <ToTop :scroll='scroll'  @Totop="top" ></ToTop>
    </div>
</template>
<script>
import Aheader from './Aheader.vue';
import ToTop from './toTop.vue';
var querystring = require('querystring'); 
export default {
    name:'List',
    components:{
        Aheader,
        ToTop
    },
    data(){
        return{
            
            timer:null,
            goodslist:[],
            scroll:false
        }
    },
    methods:{
        getData(){
            var keyword=this.$route.params.keyword
            // https://api.380star.com/newbuyer/33/goods/searchgoods.do
            this.$axios.post('https://api.380star.com/newbuyer/33/goods/searchgoods.do',querystring.stringify({
                    pagenum: 1,
                    pagesize: 20,
                    type: 3,
                    order: 0,
                    keyword: keyword,
                    filterprovince: 0,
                    filtershipping: 2
                }))
                .then((res)=>{
                    console.log(res);
                    this.goodslist=res.data.data.goodsList;
                    console.log(this.goodslist);
                })
                .catch((error)=>{
                    console.log(error);
                })
        },
        loadMore(){

        },
        handleScroll(){
			var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
			// console.log('y=',scrollTop);
			if(scrollTop>500){
				this.scroll=true;
			}else{
				this.scroll=false;
			}
		},
		top(){
			document.documentElement.scrollTop = document.body.scrollTop =0;
		},
        gotoDetail(id){
            this.$router.push({name:'Detail',params:{goodsId:id}})
        }
    },
    created(){
        this.getData();
        
    },
    updated(){
            this.$store.state.navShow=false;
                
            },
    beforeDestroy(){
        this.$store.state.navShow=true;
    } ,
    mounted(){
    window.addEventListener('scroll', this.handleScroll)
	},
	destroyed () {
		window.removeEventListener('scroll', this.handleScroll)
	},
    
    
}
</script>
<style lang="scss" scoped>
   .goods{
       .shoplist{
           margin-top:rem(50px);
			width:rem(375px);
			height:100%;
			.g-list{
				ul{
					width:rem(363px);
					margin:0 auto;
					li{
						padding:rem(11px) rem(3px) rem(11px) rem(3px);
						width:rem(363px);
						height:rem(142px);
						font-size:rem(12px);
						.g-list-left{
							width:rem(93px);
							height:rem(93px);
							float:left;
							img{
								width:rem(93px);
								height:rem(93px);
								display:inline-block;

							}
							
						}
						.g-list-right{
							float:left;
							text-align:left;
							width:rem(250px);
							height:rem(120px);
							margin-left:rem(10px);
							.g-list-con{
								height:rem(93px);
								width:rem(250px);
								.g-list-head{
									width:rem(250px);
									height:rem(37px);
									font-size:rem(14px);
									color:#333;
									display:inline-block;
									line-height:rem(18px);
									
								}
								.baoyou{
									width:rem(250px);
									height:rem(22px);
									line-height:rem(22px);
									color: #fa5e71;
									span{
										border: solid 1px #fa5e71;
										width:rem(38px);
										height:rem(15px);
										padding:rem(1px) rem(5px) rem(1px) rem(5px);
										border-radius:rem(3px);
									}
								}
								.g-list-price{
									margin-top:rem(10px);
									width:rem(250px);
									height:rem(17px);
									p{
										display:inline-block;
									}
									.price{
										float:left;
									}
									.sell{
										float:right;
									}
								}
							}
							.g-list-store{
								
								color:#999;
								i{
									width:rem(21px);
									height:rem(17px);
									display:inline-block;
								}
								p{
									display:inline-block;
								}
							}
						}
					}
				}
			}
		}
   }
</style>


