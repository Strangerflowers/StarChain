<template>
	<div class="title">
	  	<div class="platform-goods-detail posit"> 
	   		<div class="goods-detail"> 
		    	<div class="row-goodsname"> 
			    	 <div class="goods-name">
			      		{{list.name}}
			     	</div> 
		    	</div> 
			    <!--直降&&秒杀价格--> 
			    <div class="row-price"> 
				     <div class="g-price">
				      		&yen;{{list.price}}  
				     </div> 
			    	<div class="i-tag">
			      		<span>包邮</span>
			     	</div> 
			    </div> 
	   					 <!--秒杀价格end--> 
			    <div class="row-original"> 
				    <div class="col-price"></div> 
					<div class="g_sales">
					      		销量{{list.goodsSales}}
					</div> 
					<div class="col-invent">
					      		库存
					    <span>{{list.goodsInventory}}</span>
					</div> 
			    </div> 
		  	</div> 
	  	</div>
	</div>
</template>
<script type="text/javascript">
var querystring = require('querystring'); 

	export default{
		name:'Title',
		props:['list'],
		data(){
			return {
				container:[]
			}
		},
		methods:{
			// getData(){
			// 	var goodId=localStorage.getItem("goodsId");
			// 	this.$axios.post('https://api.380star.com/newbuyer/33/goods/goodsspecinfos.do',querystring.stringify({
			// 		goodsid: goodId,
					
			// 	}))
			// 	.then((res)=>{
			// 		console.log(res);
			// 		this.container=res.data.data;
			// 	})
			// 	.catch((error)=>{
			// 		console.log(error);
			// 	})
			// }
		},
		
		created(){
			// console.log('321',this.list);
			// this.getData();
		},
		mounted(){
			// console.log('123',this.list);
		},
		// 父组件传过来的数据要在beforeUpdate，updated这里才会打印出来
		beforeUpdate(){
			// console.log('beforeupdata',this.list);
		},
		updated(){
			// console.log('updata',this.list);

		}

	}
</script>
<style lang="scss" scoped>
	.posit{
		background-color:#fff;
		width:rem(375px);
		height:rem(128px);
		padding:rem(14px) rem(0px) rem(14px) rem(0px);
		.goods-detail{
			width:rem(339px);
			text-align:left;
			margin:0 auto;
			.row-goodsname{
				width:rem(339px);
				height:rem(44px);
				font-size:rem(14px);
				.goods-name{
					
				}
			}
			.row-price{
				padding-left:rem(10px);
				width:rem(339px);
				height:rem(30px);
				font-size:rem(26px);
				color:#fa5e71;
				.g-price{
					display:inline-block;
				}
				.i-tag{
					display:inline-block;
					font-size:rem(12px);
					border:1px solid #fa5e71;
					border-radius:rem(3px);
				}
			}
			.row-original{
				display:flex;
				justify-content: space-between;
				font-size:rem(12px);
				color:#aaa;
				text-align:center;
				.col-price,col-invent{
					width:rem(101px);
					height:rem(18px);
					display:inline-block;
				}
			}
		}
	}
</style>