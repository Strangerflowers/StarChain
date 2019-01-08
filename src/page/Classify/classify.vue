<template>
    <div class="classify">
    	<div class="classify_left">
    		<ul>
    			<li v-for="(tab, idx) in tabs" 
    			:key="tab.cateName"
    			@click="gotolist(idx)"
    			:class="currentId==idx? current:''"
    			>{{tab.cateName}}</li>
    		</ul>
    	</div>
    	<div class="classify_right" >
    		<div class="hot">
    			<h4>热门分类</h4>
	    		<ul>
	    			<li class="right_list" v-for="good in goodslist" >
	    				 <img :src="good.logoUrlS"/>
						{{good.subCateName}}    				 
	    			</li>
	    		</ul>
    		</div>
    		<div class="brand">
    			<h4>推荐品牌</h4>
	    		<ul class="brand_b">
	    			<li class="right_list" v-for="rem in recommend" >
	    				 <img :src="rem.brandLogo"/>
						{{rem.brandName}}    				 
	    			</li>
	    		</ul>
    		</div>
    	</div>
    	
    </div>
</template>
<script>
export default {
    // https://api.380star.com/newbuyer/33/goods/catelist.do
    data(){
    	return {
    		tabs:[],
    		goodslist:[],
    		recommend:[],
    		currentId:0,
    		current:'current'
    		
    	}
    },
    methods:{
    	getData(){
    		this.$axios.get('https://api.380star.com/newbuyer/33/goods/catelist.do')
    		.then((res)=>{
    			console.log(res);
    			this.tabs=res.data.data.list;
    			
    			// for (var i=0;i<this.tabs.length;i++){
    			// 	this.goodslist.push(this.tabs[i].subList);
    			// }
    			// console.log('goodslist',this.goodslist);
    		})
    		.catch((error)=>{
    			console.log(error);
    		})
    	},
    	gotolist(idx){
    		// 将当前点击的idx给currentId
    		this.currentId=idx
    		this.goodslist=this.tabs[idx].subList;
    		this.recommend=this.tabs[idx].brandList
    		console.log(this.goodslist);
    		
    	}


    	/*********************************************************************************
    		server的跨域解决方案：
    	// getData(){
    		
    	// 	this.$axios.get(`http://localhost:12345/`,{
    	// 		params:{
    	// 			nav:'catelist.do',
    	// 		}
    	// 	})
    	// 	.then((res)=>{
    	// 		console.log(res);
    	// 		this.tabs=res.data.data.list;
    	// 		console.log(this.tabs);
    	// 	})
    	// 	.catch((error)=>{
    	// 		console.log(error);
    	// 	})
    	// },
    	// getData1(){
    		
    	// 	this.$axios.get(`http://localhost:12345/`,{
    	// 		params:{
    	// 			type:'categoodslist.do',
    	// 		}
    	// 	})
    	// 	.then((res)=>{
    	// 		console.log(res);
    	// 		this.tabs=res.data.data.list;
    	// 		console.log(this.tabs);
    	// 	})
    	// 	.catch((error)=>{
    	// 		console.log(error);
    	// 	})
    	// },
    	*************************************************************
    	*/

    },
    created(){
    	this.getData();
    	
    }
}
</script>
<style type="text/css" lang="scss" scoped>
	.classify{
		padding-top:rem(51px);
		.classify_left{

			background-color:#f2f2f2;
			float:left;
			width:rem(105px);
			height:100%;
			ul{
				li{
					width:rem(105px);
					height:rem(46px);
					font-size:rem(16px);
					line-height:rem(46px);
					color:#333;
					border-bottom:1px solid #eee;
				}
				.current{
					background-color:#fff;
				}
			}
		}
		.classify_right{
			width:rem(269px);
			height:rem(1000px);
			float:right;
			.hot{
				border-bottom:1px solid #ccc;
				h4{
					font-size:rem(14px);
					height:rem(46px);
					width:rem(269px);
					line-height:rem(46px);
					text-align:left;
					padding-left:rem(17px);
				}
				ul{
					display:block;
					margin-left:rem(17px);
					overflow:hidden;
					.right_list{
						width:rem(70px);
						height:rem(97px);
						font-size:rem(14px);
						float:left;
						margin-right:rem(12px);
						margin-buttom:rem(5px);
						img{
							width:rem(70px);
							height:rem(70px);
						}
						.current{
							background:#fff;
						}
					}
				
				}
			}
			.brand{
				
				h4{
					font-size:rem(14px);
					height:rem(46px);
					width:rem(269px);
					line-height:rem(46px);
					text-align:left;
					padding-left:rem(17px);
				}
				ul{
					display:block;
					margin-left:rem(17px);
					overflow:hidden;
					.right_list{
						width:rem(70px);
						height:rem(97px);
						font-size:rem(14px);
						float:left;
						margin-right:rem(12px);
						margin-buttom:rem(5px);
						img{
							width:rem(70px);
							height:rem(46px);
						}
					}
				
				}
			}
		}
	}
</style>
