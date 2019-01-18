<template>
    <div class="cart">
    	<Aheader></Aheader>
    	<div class="cart-shop">
    		<ul>
    			<li>
    				<div class="shop-head">
		    			<div class="store-left">
		    				<input type="checkbox" name="checkbox" class="check">
		    			</div>
		    			<div class="head-title">
		    				<i class="iconfont icon-dianpu"></i>
		    				<p>	设计师综合店</p>
		    			</div>
		    			<div class="head-icon">
		    				<i class="iconfont icon-arrow"></i>
		    			</div>
		    		</div>
		    		<div class="cart-list">
		    			<ul class="same-store">
		    				<li >
		    					<div class="goods-check">
		    						<input type="checkbox" name="">
		    					</div>
		    					<div class="goods-imgurl">
		    						<img src="http://img.365hele.com/upload/31752/store/1215/75c122fb-0f78-41ce-b9e1-f2f5b1610e92.jpg">
		    					</div>
		    					<div class="goods-cont">
		    						<div class="goods-name">2017年冬季新款2017年冬季新款2017年冬季新款2017年冬季新款</div>
		    						<div class="goods-center">
		    							颜色 <span>灰色</span>,
		    							尺码  <span>M</span>	
		    						</div>
		    						<div class="goods-bottom">
		    							<div class="goods-price">
		    								￥<span>1255</span>
		    							</div>
		    							<div class="goods-qty">
		    								<input type="button" class="sub"  value="-" name="">
		    								<input type="button" class="cart-qty"  value="1" name="">
		    								<input type="button" class="add"  value="+" name="">
		    							</div>
		    						</div>
		    					</div>
		    				</li>
		    			</ul>
    			
    				</div>
    			</li>
    		</ul>
    		
    	</div>
    </div>
</template>
<script>
import Aheader from '../../components/Aheader.vue';
export default {
    name:'Cart',
    components:{
    	Aheader
    },
    data(){
    	return{       

    	}
	},
	methods:{
		getGoods(){
			this.$axios.post('http://localhost:3000/goods/getGoods')
			.then((res)=>{
				console.log(res);
			})
			.catch((error)=>{
				console.log(error);
			})
		}
	},
    created(){
    	this.getGoods();
    }
}
</script>
<style lang="scss" scoped>
	.cart{
		border-bottom:1px solid #eee;
		padding-top:rem(50px);
		width:rem(375px);
		height:rem(100px);
		.cart-shop{
			ul{
				li{
					.shop-head{
						display: flex;
						justify-content:space-between;
						align-items:center;
						width:rem(375px);
						height:rem(51px);
						padding:rem(0px) rem(11px) rem(0px) rem(11px);
						font-size:rem(14px);
						color:#666;
						.store-left{
							width:rem(25px);
							height:rem(51px);
							line-height:rem(50px);
							input{
								width:rem(20px);
								height:rem(20px);
								display:inline-block;
								border:1px solid #ccc;
								border-radius:rem(50px);
								background:#fff;
							}
						}
						.head-title{
							width:rem(325px);
							height:rem(51px);
							padding:rem(0px) rem(23px) rem(0px) rem(11px);
							line-height:rem(50px);
							text-align:left;
							p{
								display:inline-block;
								
							}
						}
					}
					.cart-list{
						.same-store{
							width:rem(375px);
							height:rem(133px);
							padding:rem(0px) rem(11px) rem(0px) rem(11px);
							li{
								display:flex;
								justify-content: space-between;
								align-items:center;
								padding:rem(11px) rem(0px) rem(11px) rem(0px);
								.goods-check{
									width:rem(25px);
									height:rem(51px);
									line-height:rem(50px);
									input{
										width:rem(20px);
										height:rem(20px);
										display:inline-block;
										border:1px solid #ccc;
										border-radius:rem(50px);
										background:#fff;
									}
								}
								.goods-imgurl{
									img{
										width:rem(107px);
										height:rem(107px);
									}
								}
								.goods-cont{
									width:rem(195px);
									height:rem(108px);
									font-size:rem(14px);
									text-align:left;
									.goods-name{
										width:rem(195px);
										height:rem(42px);
										line-height:rem(22px);
										overflow: hidden;  
										display: -webkit-box;  
										-webkit-line-clamp: 2;  
										-webkit-box-orient: vertical;  
									}
									.goods-center{
										width:rem(195px);
										height:rem(21px);
										padding-top:rem(5px);
										color:#ccc;
									}
									.goods-bottom{
										width:rem(195px);
										height:rem(29px);
										margin-top:rem(17px);
										.goods-price{
											width:rem(88px);
											height:rem(17px);
											display:inline-block;
											font-size:rem(16px);
											color:#fa5e71;
										}
										.goods-qty{
											width:rem(102px);
											height:rem(29px);
											display:inline-block;
											input{
												width:rem(30px);
												height:rem(27px);
												border:1px solid #ccc;
												background:#fff;
											}
											.cart-qty{
												width:rem(40px);
												height:rem(27px);
												border:1px solid #ccc;
											}
											.sub{
												margin-right:rem(-5px);
											}
											.add{
												margin-left:rem(-5px);
											}
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}
</style>
