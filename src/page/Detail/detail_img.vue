<template>
	<div class="img">
		<ul>
			<li>
				<div class="piclist">
					<img src="">
				</div>
			</li>
		</ul>
	</div>
</template>
<script type="text/javascript">
	export default{
		name:'Img',
		data(){
			return{

			}
		}
	}
</script>
<style lang="scss" scoped>
	.img{
		width:rem(375px);
		height:rem(1000px);
		ul{
			li{
				piclist{
					img{
						height:rem(247px);
						width:rem(375px);
					}
				}
			}
		}
	}
</style>