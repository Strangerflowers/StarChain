<template>
	<div class="head">
		<div class="left" @click='golist'>
			<i class="iconfont icon-jiantou-copy" ></i>
		</div>
		<div class="center">
			<p v-show="false">商品详情</p>
		</div>
		<div class="right">
			<span @click='gocart'><i class="iconfont icon-cart" ></i></span>
			<span @click="gohome"><i class="iconfont icon-home"></i></span>
		</div>
	</div>
</template>
<script type="text/javascript">
	export default{
		name:'Head',
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
				this.$router.push({path:'/cart'});
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
		}
	}
</style>