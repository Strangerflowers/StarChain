<!-- https://api.380star.com/newbuyer/33/goods/goodsspecinfos.do -->
<template>
	<div class="size">
		<div class="container">
			<div class="main">
				<div class="goodsnew">
					<p class="close">&times;</p>
					<div class="s-pic">
						<img src="http://img.365hele.com/upload/31752/store/1215/75c122fb-0f78-41ce-b9e1-f2f5b1610e92.jpg_middle.jpg">
					</div>
					<div class="s-con">
						<p class="price">
							￥<span class="sale"></span>
						</p>
						<p calss="stock">库存   <span>1234</span></p>
						<p>请选择规格</p>
					</div>
				</div>
				<div class="goodscolor">
					<div class="spec-color">
						<p >颜色</p>
						<div class="list">
							<ul>
							<li>黑色</li>
							<li>灰色</li>
							<li>黄色</li>
							</ul>
						</div>
					</div>
					<div class="spec-size">
						<p>尺寸</p>
						<div class="list">
							<ul>
								<li>S</li>
								<li>M</li>
								<li>L</li>
								<li>XL</li>
							</ul>
						</div>
						
					</div>

				</div>
				<div class="btn">
					
				</div>
			</div>
		</div>
	</div>
</template>
<script type="text/javascript">
	export default{
		name:'Size',
		data(){
			return {

			}
		}
	}
</script>
<style lang="scss" scoped>
	.size{
		width:rem(375px);
		height:rem(667px);
		background:#666;
		background:rgba(0,0,0,0.5);
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
									width:rem(70px);
									height:rem(29px);
									padding:rem(0px) rem(17px) rem(0px) rem(17px);
									margin:rem(0px) rem(11px) rem(17px) rem(0px);
									font-size:rem(14px);
									border-radius:rem(3px);
									line-height:rem(29px);
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
									width:rem(70px);
									height:rem(29px);
									padding:rem(0px) rem(17px) rem(0px) rem(17px);
									margin:rem(0px) rem(11px) rem(17px) rem(0px);
									font-size:rem(14px);
									border-radius:rem(3px);
									line-height:rem(29px);
									text-align:center;
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
				}	
			}
		}
	}
</style>