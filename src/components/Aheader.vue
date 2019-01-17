
<template>
	<div class="head">
		<div class="left" @click='gohome'>
			<i class="iconfont icon-jiantou-copy" ></i>
		</div>
		<div class="center">
			<i class="iconfont icon-sousuo"></i>
			<input type="text" placeholder="已有2.8万个品牌为您提供优惠商品"  />
		</div>
		<div class="right">
			<!-- <span><i class="iconfont icon-liuyan" ></i></span> -->
			<span>搜索</span>
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
			gohome(){
				this.$router.push({path:'/classify'});
			}
			
		}
	}
</script>
<style lang="scss" scoped>
	.head{
		width:rem(375px);
		padding:rem(0px) rem(10px) rem(0px) rem(10px);
		height:rem(50px);
		position:fixed;
		top:0;
		right:0;
		left:0;
		z-index:1000;
		background:#fff;
		display:flex;
		justify-content: space-between;
		.left{
			width:rem(38px);
			height:rem(50px);
			.icon-jiantou-copy{
				height:rem(38px);
				width:rem(38px);
				display:inline-block;
				line-height:rem(40px);
				color:#333;
				font-size:rem(26px);
			}
		}
		.center{
			background:#eee;
			border:1px solid #ccc;
			height:rem(35px);
			margin-top:rem(8px);
			border-radius:rem(50px);
			line-height:rem(35px);
			width:rem(290px);
			.icon-sousuo{
				float:left;
				padding:rem(0px) rem(20px) rem(0px) rem(11px);
				heihgt:rem(35px);
				width:rem(20px);
				display:inline-block;
			}
			input{
				background:#eee;
				width:rem(193px);
				height:rem(30px);
				padding:rem(5px) rem(0px) rem(5px) rem(0px);
				line-height:rem(30px);
				display:inline-block;
				margin-left:rem(-30px);
				margin-top: rem(-7px);
			}
		}
		.right{
			width:rem(60px);
			height:rem(50px);
			span{
				height:rem(30px);
				width:rem(30px);
				line-height:rem(50px);
				font-size:rem(14px);
			}
		}
	}
</style>