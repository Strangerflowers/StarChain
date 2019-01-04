<template>
	<div class="footer">
		<div class="footer-wrap ft-fixed">
		   	<ul>
		   	 	<li  v-for="tab in tabs" :key="tab.name" @click="goto(tab.path)">
		   	 		<a>
		   	 			<i class="iconfont" :class="tab.icon" ></i>
		   	 			<p class="tab-text">{{tab.text}}</p>
		   	 		</a>	
		   	 		
		   	 	</li>
		   	</ul>
  		</div>
	</div>
</template>
<script type="text/javascript">

	export default {
		name:'Footer',
		data(){
			return {
				tabs:[
                {
                    text:'首页',
                    icon:'icon-home',
                    path:'/home',
                    name:'Home'
                },{
                    text:'分类',
                    icon:'icon-fenlei1',
                    path:'/classify',
                    name:'Classify'
                },{
                    text:'购物车',
                    icon:'icon-cart',
                    path:'/cart',
                    name:'Cart'
                },{
                    text:'我的',
                    icon:'icon-user',
                    path:'/user',
                    name:'User'
                }
            ],
            selected:'Home'
			}
		},
		methods:{
			goto(path){
				this.$router.push({path})
			}
		}

	}
</script>
<style type="text/css" lang='scss' scoped>
@import '../styles/base.scss';
	.footer{
		border-top:1px solid #ccc;
		position:fixed;
		bottom:0;
		left:0;
		right:0;
		width:rem(375px);
		height:rem(57px);
		display:flex;
		ul{
			height:rem(57px);
			width:rem(375px);
			display:flex;
			justify-content: space-between;
			text-align:center;
			li{
				font-size:rem(12px);
				height:rem(57px);

				color:#333;
				width:rem(93px);
				padding-top:rem(4px);
				a{
					width:rem(93px);
					height:rem(53px);
					flex-direction:flex;
					display:inline-block;

					i{
						height:rem(29px);
						width:100%;
						display:inline-block;
						line-height:rem(29px);

					}
				}
			}
		}

	}
</style>