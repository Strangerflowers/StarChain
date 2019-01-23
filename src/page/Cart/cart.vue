<template>
    <div class="cart">
    	<div class="head">
			<div class="left">
				
			</div>
			<div class="center">
				<p >购物车</p>
			</div>
			<div class="right" @click="change">
				<p  v-show="show">编辑</p>
				<p  v-show="!show">完成</p>	
			</div>
		</div>
    	<div class="cart-shop">
    		<ul>
    			<li>
    				<!-- <div class="shop-head">
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
		    		</div> -->
		    		<div class="cart-list">
		    			<ul class="same-store">
		    				<li  v-for="(list ,idx) in cartList" :key="list.id"  @click="selectGood(idx)" :class="{'sele':isActive(idx)}">
		    					<div class="goods-check">
		    						<input type="checkbox" v-model="selected" :value="idx" >
		    					</div>
		    					<div class="goods-imgurl">
		    						<img :src="list.imgurl">
		    					</div>
		    					<div class="goods-cont">
		    						<div class="goods-name">{{list.name}}</div>
		    						<div class="goods-center" v-show="list.color||list.size">
		    							颜色 <span>{{list.color}}</span>,
		    							尺码  <span>{{list.size}}</span>	
		    						</div>
		    						<div class="goods-bottom">
		    							<div class="goods-price">
		    								￥<span>{{list.price}}</span>
		    							</div>
		    							<div class="goods-qty">
		    								<input type="button" class="sub" @click.stop="sub(idx)"  value="-" name="">
		    								<input type="button" class="cart-qty"  v-model="list.qty" name="">
		    								<input type="button" class="add"  value="+"  @click.stop="add(idx)" >
		    							</div>
		    						</div>
		    					</div>
		    				</li>
		    			</ul>
    			
    				</div>
    			</li>
    		</ul>
    		
    	</div>
		<div class="no-shop" v-show="len==0">
			<i></i>
			<p>暂无商品</p>
		</div>
		<div class="Cfooter" v-show="len!=0">
			<div class="sele">
				<input type="checkbox" class="seleAll" v-model="checkAll">
				<span>全选</span>
			</div>
			<div class="total" v-show="show">
				<p class="jiege">价格</p>
				<p class="sele-r">
					<span class="selePrice">￥{{total}}</span><br>
					<span class="not">不含运费</span>
				</p>			
			</div>
			<div class="Settlement" :class="show?'':'dsp'" >
				<p v-show="show">结算<span>({{total}})</span></p>
				<p  v-show="!show" @click.stop="remove()">删除</p>
			</div>
			
		</div>
    </div>
</template>
<script>
import Aheader from '../../components/Aheader.vue';
var querystring = require('querystring'); 

export default {
    name:'Cart',
    components:{
    	Aheader
	},
	
    data(){
    	return{       
			cartList:[],
			num:1,
			show:true,
			// checkAll:false,
			selected:[],//checkAll=false  :[] ;checkAll=true :[0,1,2,3...]写满
			len:'',//购物车数量
			total:0
    	}
	},
	computed:{

		checkAll:{
			get(){
				if(this.selected.length==this.cartList.length){
					return true
				}else{
					return false
				}
			},
			set(checked){
				if(checked){
					this.selected=this.cartList.map((item,idx)=>idx);
					
				}else{
					this.selected=[];
				}
			}
		}
	},
	methods:{
		getGoods(){
			// let url='http://39.96.56.22:3000'+'/goodsAdmin/getGoods'
			var user=sessionStorage.getItem('token');
			this.$axios.post('http://39.96.56.22:3000/goods/getGoods',querystring.stringify({
					user:user
				}))
			.then((res)=>{
				console.log(res);
				this.cartList=res.data.data;
				this.len=this.cartList.length;
				console.log(this.len)
			})
			.catch((error)=>{
				console.log(error);
			})
		},
		selectGood(idx){
			// let total=0;
			let i=this.selected.indexOf(idx);
			// 如果i>0，也就是说该商品原本就在数组中，所以当再次点击的时候要将改商品从数组中移除
			if(i>=0){
				this.selected.splice(i,1);
				this.total-=this.cartList[idx].qty*this.cartList[idx].price;
			}else{
				this.selected.push(idx);
				this.total+=this.cartList[idx].qty*this.cartList[idx].price;
			}
		},
		isActive(idx){
			return this.selected.includes(idx)
		},
		add(index){
			var goodslist=this.cartList;
			console.log(this.cartList);
			var id=this.cartList[index].id;
			var _id=this.cartList[index]._id;
			// console.log(id)
			var name=this.cartList[index].name;
			var user=sessionStorage.getItem('token');
			// var	user=this.cartList[index].user;
			var	price=this.cartList[index].price;
			var	imgurl=this.cartList[index].imgurl;
			var	qty=goodslist[index].qty+1;
			var	size=this.cartList[index].size;
			var	color=this.cartList[index].color;
			// console.log(id,name,type,desc,price,imgpath,stock);
			this.$axios.post('http://39.96.56.22:3000/goods/updateGoods',querystring.stringify({
				_id:_id,
				id:id,
				name:name,
				user:user,
				price:price,
				imgurl:imgurl,
				qty:qty,
				size:size,
				color:color,
			}))
			.then((res)=>{
				console.log(res);
			
				this.cartList=res.data.data;
				console.log(this.cartList)
			})
			.catch((error)=>{
				console.log(error)
			})
		},
		sub(index){
			var goodslist=this.cartList;
			var user=sessionStorage.getItem('token');
			var id=this.cartList[index].id;
			if(goodslist[index].qty>1){
				goodslist[index].qty=goodslist[index].qty-1

			}else{
				return 
			}
			var _id=this.cartList[index]._id;
			var name=this.cartList[index].name;
			// var	user=this.cartList[index].user;
			var	price=this.cartList[index].price;
			var	imgurl=this.cartList[index].imgurl;
			var	qty=goodslist[index].qty;
			var	size=this.cartList[index].size;
			var	color=this.cartList[index].color;
			// console.log(id,name,type,desc,price,imgpath,stock);
			this.$axios.post('http://39.96.56.22:3000/goods/updateGoods',querystring.stringify({
				_id:_id,
				id:id,
				name:name,
				user:user,
				price:price,
				imgurl:imgurl,
				qty:qty,
				size:size,
				color:color,
			}))
			.then((res)=>{
				console.log(res);
				
				this.cartList=res.data.data;
				// console.log(this.cartList)
			})
			.catch((error)=>{
				console.log(error)
			})
		},
		change(){
			var isShow=this.show;
			this.show=!isShow;
			
		},
		remove(){
			console.log(this.selected);
			var user=sessionStorage.getItem('token');
			for(var i=0;i<this.selected.length;i++){

				this.$axios.post('http://39.96.56.22:3000/goods/delGood',querystring.stringify({
					_id:this.cartList[this.selected[i]]._id,
					user:user
				}))
				.then((res)=>{
					this.cartList=res.data.data;
					// console.log('remove',res.data.data);
				})
				.catch((error)=>{
					console.log(error);
				})
				// console.log(123456789)

			}
			// 删除之后将selected清空，
			this.selected=[];
		
			
			
		},
	},
    created(){
    	this.getGoods();
    }
}
</script>
<style lang="scss" scoped>
	.cart{
		// border-bottom:1px solid #eee;
		padding-top:rem(50px);
		width:rem(375px);
		height:rem(100px);
		.head{
			background:#fff;
			width:rem(375px);
			padding:rem(0px) rem(10px) rem(0px) rem(10px);
			height:rem(50px);
			background:#58bc58;
			position:fixed;
			top:0;
			right:0;
			left:0;
			z-index:1000;
			background:rgba(255, 255,255, 0.1);
			display:flex;
			justify-content: space-between;
			font-size:rem(18px);
			line-height:rem(50px);
			.left{
				width:rem(38px);
				height:rem(50px);
				.icon-jiantou-copy{
					height:rem(38px);
					width:rem(38px);
					display:inline-block;
					background:#ccc;
					background:rgba(0,0,0,0.3);
					border-radius:50%;
					line-height:rem(40px);
					color:#fff;
				}
			}
			.right{
				width:rem(91px);
				height:rem(50px);
				.iconfont{
					height:rem(38px);
					width:rem(38px);
					display:inline-block;
					background:#ccc;
					background:rgba(0,0,0,0.3);
					border-radius:50%;
					line-height:rem(40px);
				}
				.cart-count{
					position:relative;
					.count{
						width:rem(20px);
						height:rem(20px);
						font-size:rem(12px);
						border-radius:rem(50px);
						line-height:rem(18px);
						background-color:rgb(136, 136, 136);
						position: absolute;
						right: rem(64px);
						top: rem(10px);
						color:#fff;
						background: #f00;
						position: absolute;
						right: rem(8px);
						top: rem(10px);
					}
				}
				.icon-cart{
					
					color:#fff;
				
				}
				.icon-home{
					content: "\e6f9";
							
					color:#fff;
				}
			}
		}
		.cart-shop{
			height:100%;
			display:inline-block;
			ul{
				display:inline-block;
				margin-bottom:rem(150px);
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
								// background:#fff;
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
						// padding-bottom:rem(150px);

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
							.sele{
								background:#eee;
								
							}
						}
					}
				}
			}
		}
		.no-shop i{
			// background: url(../images/myOrder/order@2x.png) no-repeat 0 0;
			display:inline-block;
			width: 6.21875rem;
			height: 3.65625rem;
			background: url(../../../static/images/cart.png) no-repeat 0 0;
			background-size: 100% 100%;
			// margin: 0 auto;
			position: absolute;
			top: 108px;
			right: 71px;
		}
		.Cfooter{
			border-top:1px solid #ccc;
			border-top:1px solid #ccc;
			background:#fff;
			width:rem(375px);
			height:rem(50px);
			padding-left:rem(10px);
			display:flex;
			justify-content:space-between;
			align-items:center;
			position:fixed;
			bottom:rem(55px);
			left:0;
			right:0;
			.sele{
				font-size:rem(14px);
				line-height:rem(50px);
				input{
					width:rem(30px);
					height:rem(27px);
					border:1px solid #ccc;
					// background:#fff;
					width:rem(62px);
				}
			}
			.total{
				font-size:rem(14px);
				// line-height:rem(50px);
				color:#666;
				width:rem(117px);
				height:rem(51px);
				.jiege{
					height:rem(51px);
					line-height:rem(51px);
					font-size:rem(16px);
					color:#333;
					display:inline-block;
				}
				.sele-r{
					height:rem(51px);
					// line-height:rem(20px);
					display:inline-block;
					
					span{
						display:inline-block;
						line-height:rem(20px);
					}
					.selePrice{
						color:#fa5e71;
						font-size:rem(16px);
					}
				}
			}
			.Settlement{
				font-size:rem(18px);
				line-height:rem(50px);
				color:#fff;
				width:rem(125px);
				height:rem(51px);
				background:#fa5e71;
			}
			.dsp{
				background:#999;
			}
		}
	}
</style>
