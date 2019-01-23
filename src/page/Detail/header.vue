<template>
	<div class="head">
		<div class="left" @click='golist'>
			<i class="iconfont icon-jiantou-copy" ></i>
		</div>
		<div class="center">
			<p v-show="false">商品详情</p>
		</div>
		<div class="right">
			
			<span class="cart-count" @click='gocart'><i class="iconfont icon-cart" ></i>
			<!-- <mt-badge size="small" color="#888">10</mt-badge> -->
			<i class="count">{{len}}</i>
			</span>
			
			<span @click="gohome"><i class="iconfont icon-home"></i></span>
		</div>
	</div>
</template>
<script type="text/javascript">
	export default{
		name:'Head',
		props:['len'],
		data(){
			return{

			}
		},
		methods:{
			golist(){
				this.$router.push({path:'/goodslist'});
			},
			gohome(){
				this.$router.push({path:'/home'});
			},
			gocart(){
				this.$router.replace({path:'/cart'});
			}
		}
	}
</script>
<style lang="scss" scoped>
	.head{
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
</style>