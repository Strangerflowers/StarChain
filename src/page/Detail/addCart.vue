<template>
	<div class="addcart">
		<p>添加购物车成功</p>
		<img src="https://m.380star.com/images/icon/loading_03.gif">
	</div>
</template>
<script type="text/javascript">
	export default{
		data(){
			return{

			}
		}
	}
</script>

<style lang="scss" scoped>
	.addcart{
		height:rem(50px);
		width:rem(375px);
		text-align: center;
  		vertical-align: middle;
  		position:fixed;
  		top:50%;
		p{
			text-align:center;
			vertical-align:middle;
			margin:0 auto;
			width:rem(250px);
			background:#333;
			background:rgba(0,0,0,0.3);
			font-size:rem(18px);
			line-height:rem(50px);
			color:#fff;
			height:rem(50px);
			border-radius:rem(20px);
		}
		img{
			background:#f00;
			border-radius:50%;
		}

	}
</style>