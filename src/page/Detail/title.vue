<template>
	<div class="title">
	  	<div class="platform-goods-detail posit"> 
	   		<div class="goods-detail"> 
		    	<div class="row-goodsname"> 
			    	 <div class="goods-name">
			      		雀巢怡养中老年营养奶粉400g礼盒装（400g*2袋）
			     	</div> 
		    	</div> 
			    <!--直降&&秒杀价格--> 
			    <div class="row-price"> 
				     <div class="g-price">
				      		&yen;89.00
				     </div> 
			    	<div class="i-tag">
			      		<span>包邮</span>
			     	</div> 
			    </div> 
	   					 <!--秒杀价格end--> 
			    <div class="row-original"> 
				    <div class="col-price"></div> 
					<div class="g_sales">
					      		销量2374
					</div> 
					<div class="col-invent">
					      		库存
					    <span>1988</span>
					</div> 
			    </div> 
		  	</div> 
	  	</div>
	</div>
</template>
<script type="text/javascript">
	export default{
		name:'Title',
		props:['list'],
		data(){
			return {
				
			}
		},
		
		created(){
			console.log('123',this.list)
		}

	}
</script>
<style lang="scss" scoped>
	.posit{
		width:rem(375px);
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