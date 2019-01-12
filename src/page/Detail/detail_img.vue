<template>
	<div class="img">
		<ul   >
			<li   v-show="idx==0">
				<div class="piclist" v-html="info1.detailInfo">
				</div>
			</li>
			<li index  v-show='idx==1'>
                <ul class="goods-proper" >
                    <li v-for="(img, idx) in imgs" :key='idx'>{{img.name}}：{{img.val}}</li>
                </ul>
            </li>
            <li index  v-show='idx==2'>
				<div class="service" >
					<img  id="list" src="http://rs.380star.com/upload/bic/service/aservice.jpg" >
				</div>
			</li>
		</ul>
	</div>
</template>
<script type="text/javascript">
	export default{
		name:'Img',
		props:['imgs','idx','info1'],

		data(){
			return{
				tabs:[0,1,2]
			}
		},
		methods:{
			goto(){
				 // this.$emit('goto');
				 console.log(666);
			}
		},
		computed:{
			get:function(){
				console.log(this.img);
				var res=JSON.parse(this.img);
				console.log('res',res);
			}
		},
		updated(){
			// for(var i=0;i<this.imgs.length;i++){
				console.log(this.info1);
			// }
			// console.log('updata',JSON.parse(this.imgs));
			// 解决v-html元素样式不生效问题
			// $('.service').find('img').css('width', '375px');
			// $('.piclist').find('img').css('width', '375px');
		}
	}
</script>
<style lang="scss" >
	.img{
		width:rem(375px);
		height:100%;
		margin-bottom:rem(100px);
		background-color:#fff;
		ul{
			width:rem(375px);
			li{
				width:rem(375px);
				height:100%;
				.piclist{
					img{
						height:100%;
						width:rem(375px);
						display:inline-block;
					}
				}
				.goods-proper{
					width:rem(341px);
					height:100%;
					padding:rem(17px);
					text-align:left;
					li{
						font-size:rem(14px);
						width:rem(339px);
						height:rem(47px);
						display:inline-block;
						border-bottom:1px solid #eee;

					}
				}
				.service{
					img{
						width:rem(375px);
					}
				}
			}
			
		}
	}
</style>