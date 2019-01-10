<template>
	<div class="banner">
		<mt-swipe :auto="4000">
		  	<mt-swipe-item v-for="(img, idx) in imgurl" :key="idx">
		  		<img :src="img.url">
		  	</mt-swipe-item>
		</mt-swipe>
	</div>
</template>
<script type="text/javascript">
	export default{
		name:'Banner',
		props:['imgurl'],
		data(){
			return {

			}
		}
		
		
	}
</script>
<style  lang="scss" scoped>
	.banner{
		height:rem(375px);
		border-bottom:1px solid #eee;
		.mint-swipe{
			height:rem(375px);
			.mint-swipe-items-wrap{
				height:rem(375px);
				.mint-swipe-item{
					height:rem(375px);
					img{
						height:rem(375px);
					}
				}
			}
		}
		
	}
</style>