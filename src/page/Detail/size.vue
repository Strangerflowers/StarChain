<!-- https://api.380star.com/newbuyer/33/goods/goodsspecinfos.do -->
<template>
	<div class="size">
		<div class="container" >
			<div class="main">
				<div class="goodsnew">
					<p class="close" @click="close">&times;</p>
					<div class="s-pic">
						<img src="http://img.365hele.com/upload/31752/store/1215/75c122fb-0f78-41ce-b9e1-f2f5b1610e92.jpg_middle.jpg">
					</div>
					<div class="s-con">
						<p class="price" >
							￥<span class="sale"></span>
						</p>
						<p calss="stock">库存   <span>1234</span></p>
						<p>请选择规格</p>
					</div>
				</div>
				<div class="goodscolor" >
					<div class="spec-color" >
						<p >{{goods[0].name}}</p>
						<div class="list">
							<ul>
							<li v-for="(val,idx) in goods[0].values" 
							:class="currentcolor==idx?'dsp':''"
							@click='choosecolor($event,idx)'
							>{{val}}</li>
							<!-- <li>灰色</li>
							<li>黄色</li> -->
							</ul>
						</div>
					</div>
					<div class="spec-size">
						<p>{{goods[1].name}}</p>
						<div class="list">
							<ul>
								<li v-for="(val,index) in goods[1].values" 
								:class="currentsize==index?'dsp':''"
								 @click='choosesize($event,index)'
								>{{val}}</li>
								<!-- <li>M</li>
								<li>L</li>
								<li>XL</li> -->
							</ul>
						</div>
						
					</div>

				</div>
				<div class="btn">
					<div class="btn-top">
						<p>数量</p>
						<div class="d-qty">
							<input type="button" class="sub" name="" value="-" @click='subqty'>
							<input type="text" class="goodsqty" name=""  v-model="qty" value="1">
							<input type="button" class="add" name="" value="+" @click='addqty'>
						</div>
					</div>
					<div class="btn-bottom" @click="queding">确定</div>
				</div>
			</div>
			<div class="mask" @click="close"></div>
		</div>
	</div>
</template>
<script type="text/javascript">
	export default{
		name:'Size',
		props:['qty',"goods"],
		computed:{
			good(){
				// return this.goods.
			}
		},
		data(){
			return {
				currentcolor:"",
				currentsize:"",
				arr:[],
				arr1:[],
				arr2:[]

			}
		},
		methods:{
			close(){
				this.$emit('close');
			},
			subqty(){
				this.$emit('subqty');
			},
			addqty(){
				this.$emit('addqty');
			},
			choosesize(e,idx){
				console.log(e.target.innerText);
				console.log(idx)
				this.currentsize=idx;
				this.arr.push(e.target.innerText)

			},
			choosecolor(e,idx){
				console.log(e.target.innerText);
				console.log(idx)
				this.currentcolor=idx;
				this.arr1.push(e.target.innerText)

			},
			queding(){
				if(this.arr<1 && this.arr1<1){
					alert('请选择商品的尺码')
				}else{
					this.arr2=this.arr.concat(this.arr1);
					console.log(this.arr2);
					this.close()
				}
			}
		}
	}
</script>
<style lang="scss" scoped>
	.size{
		width:rem(375px);
		height:rem(667px);
		
		
		position:fixed;
		top:0;
		left:0;
		right:0;
		bottom:0;
		z-index:1002;
		.container{
			.main{
				width:rem(375px);
				height:rem(503px);
				background:#fff;
				z-index:1005;
				position:absolute;
				bottom:0;	
				.goodsnew{
					width:rem(375px);
					height:rem(92px);
					padding:rem(12px) rem(11px) rem(11px) rem(117px);
					border-bottom:1px solid #ccc;
					.close{
						position:absolute;
						right:rem(10px);
						top:0;
						color:#ccc;
						font-size:rem(30px);
					}
					.s-pic{
						width:rem(87px);
						height:rem(87px);
						position:absolute;
						left:rem(11px);
						top:0;
						img{
							width:rem(87px);
							height:rem(87px);
							display:inline-block;
						}
					}
					.s-con{
						
						width:rem(246px);
						height:rem(67px);
						font-size:rem(16px);
						line-height: rem(18px);
						color:#666;
						text-align:left;
						p{
							margin-bottom:rem(5px);
						}
						.price{
							color:#fa5e71;
							font-size:rem(22px);
							line-height:rem(22px);

						}
					}

				}
				.goodscolor{
					width:rem(375px);
					height:rem(186px);
					padding:rem(11px) rem(5px) rem(23px) rem(17px);
					.spec-color{
						width:rem(351px);
						height:rem(75px);
						text-align:left;
						font-size:rem(16px);
						p{
							margin-bottom:rem(11px);
							color:#ccc;
						}
						.list{
							width:rem(351px);
							height:rem(46px);
							ul{
								li{
									border:1px solid #ccc;
									float:left;
									
									height:rem(29px);
									padding:rem(0px) rem(17px) rem(0px) rem(17px);
									margin:rem(0px) rem(11px) rem(17px) rem(0px);
									font-size:rem(14px);
									border-radius:rem(3px);
									line-height:rem(29px);
								}
								.dsp{
									border:1px solid #f00;
									color:#f00;
								}
							}
						}
					}
					.spec-size{
						width:rem(351px);
						height:rem(75px);
						text-align:left;
						font-size:rem(16px);
						p{
							margin-bottom:rem(11px);
							color:#ccc;
							text-align:left;
							padding-right:rem(200px);
						}
						.list{
							width:rem(351px);
							height:rem(46px);
							ul{
								li{
									border:1px solid #ccc;
									float:left;
									
									height:rem(29px);
									padding:rem(0px) rem(17px) rem(0px) rem(17px);
									margin:rem(0px) rem(11px) rem(17px) rem(0px);
									font-size:rem(14px);
									border-radius:rem(3px);
									line-height:rem(29px);
									text-align:center;
								}
								.dsp{
									border:1px solid #f00;
									color:#f00;
								}
							}
						}
					}
				}
				.btn{
					width:rem(375px);
					height:rem(108px);
					padding:rem(0px) rem(17px) rem(0px) rem(17px);
					position:fixed;
					bottom:0;
					border-top:1px solid #ccc;
					text-align:left;
					background:#fff;
					.btn-top{
						width:rem(339px);
						height:rem(28px);
						margin:rem(11px) rem(0px) rem(11px) rem(0px);
						font-size:rem(16px);
						line-height:rem(28px);
						color:#666;
						p{
							width:rem(40px);
							height:rem(28px);
							display:inline-block;
							float:left;
						}
						.d-qty{
							float:right;
							width:rem(160px);
							height:rem(28px);
							text-align:center;
							display:inline-block;
							input{
								width:rem(44px);
								height:rem(25px);
								border:1px solid #eee;
								background:#fff;
								font-size:rem(16px);
							}
							.goodsqty{
								width:rem(64px);
								height:rem(25px);
								pading:rem(0px) rem(4px) rem(0px) rem(4px);
								text-align:center;

							}
							.sub{
								margin-right:rem(-5px);
								font-size:rem(22px);
							}
							.add{
								margin-left:rem(-5px);
								font-size:rem(22px);
							}
						}

					}
					.btn-bottom{
						width:rem(339px);
						height:rem(45px);
						color:#fff;
						background:#fa5e71;
						font-size:rem(18px);
						line-height:rem(45px);
						border:1px solid #fa5e71;
						text-align:center;
						padding:rem(0px) rem(5px) rem(0px) rem(5px);
						border-radius:rem(5px);
					}
				}	
			}
			.mask{
				background:#666;
				background:rgba(0,0,0,0.5);
				position:fixed;
				top:0;
				left:0;
				right:0;
				bottom:0;
				z-index:1002;
			}
		}
	}
</style>