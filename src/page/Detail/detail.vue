<template>
	<div class="detail">
		<Head></Head>
		<Banner :imgurl='imgurl'></Banner>
		<Title :list='com'></Title>
	</div>
</template>
<script type="text/javascript">
	import Banner from './banner.vue';
	import Head from './header.vue';
	import Title from './title.vue';

	var querystring = require('querystring'); 

	export default{
		name:'Detail',
		components:{
			Banner,
			Head,
			Title
		},
		data(){
			return {
				imgurl:[],
				com:{}
			}
		},
		methods:{
			getDate(){
				var goodId=localStorage.getItem("goodsId");
				this.$axios.post("https://api.380star.com/newbuyer/33/goods/platformgoodsdetail.do",querystring.stringify({
					goodsid: goodId,
					cityname: '深圳市'
				}))
				.then((res)=>{
					// console.log(res);
					this.imgurl=res.data.data.goodsInfo.viewPicList;
					this.com=res.data.data.goodsInfo;
					console.log(this.com);
				})
				.catch((error)=>{
					console.log(error);
				})
			}
		},
		created(){
		
		},
		mounted(){
			this.getDate();
			
			// console.log(localStorage.getItem("goodsId"));
		}
	}
</script>
<style lang="scss" scoped>
	.detail{
		width:rem(375px);
		height:100%;
	}
</style>