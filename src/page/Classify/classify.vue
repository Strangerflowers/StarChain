<template>
    <div class="classify">
    	<div class="classify_left">
    		<ul>
    			<li v-for="tab in tabs" :key="tab.cateName"><router-link :to="tab.cateName" active-class="current">{{tab.cateName}}</router-link></li>
    		</ul>
    	</div>
    	<div class="classify_right">
    		<router-view></router-view>
    	</div>
    </div>
</template>
<script>
export default {
    // https://api.380star.com/newbuyer/33/goods/catelist.do
    data(){
    	return {
    		tabs:[],
    		goodslist:[]
    	}
    },
    methods:{
    	getData(){
    		this.$axios.get('https://api.380star.com/newbuyer/33/goods/catelist.do')
    		.then((res)=>{
    			console.log(res);
    			this.tabs=res.data.data.list;
    			console.log(this.tabs);
    		})
    		.catch((error)=>{
    			console.log(error);
    		})
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
			background-color:#58bc58;

		}
	}
</style>
