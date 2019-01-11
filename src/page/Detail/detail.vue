<template>
	<div class="detail">
		<Head></Head>
		<Banner :imgurl='imgurl'></Banner>
		<Title :list='container'></Title>
		<Promotion></Promotion>
		<Address></Address>
		<Store></Store>
		<Information></Information>
		<Img></Img>
	</div>
</template>
<script type="text/javascript">
	import Banner from './banner.vue';
	import Head from './header.vue';
	import Title from './title.vue';
	import Promotion from './Promotion.vue';
	import Address from './address.vue';
	import Store from './store.vue';
	import Information from './information.vue';
	import Img from './detail_img.vue';

	var querystring = require('querystring'); 

	export default{
		name:'Detail',
		components:{
			Banner,
			Head,
			Title,
			Promotion,
			Address, 
			Store,
			Information,
			Img
		},
		data(){
			return {
				imgurl:[],
				container:[]
			}
		},
		methods:{
			getDate(){
				var goodId=localStorage.getItem("goodsId");

				this.$axios.post("https://api.380star.com/newbuyer/33/goods/platformgoodsdetail.do",querystring.stringify({
					goodsid: goodId
					
				}))
				.then((res)=>{
					// console.log(res);
					this.imgurl=res.data.data.goodsInfo.viewPicList;
					this.container=res.data.data.goodsInfo;
					console.log(this.container);  // 这里打印能拿到数据
				})
				.catch((error)=>{
					console.log(error);
				})
			}
		},
		created(){
			this.getDate();
			// console.log(this.container); //在这里打印得不到数据，因为ajax是异步函数，要拿到数据只能在then能保证是有数据的
		},
		mounted(){
			
			// console.log(this.container); //在这里打印得不到数据
			
		},
		// updated(){

		// }
	}
</script>
<style lang="scss" scoped>
	.detail{
		background-color:#eee;
		width:rem(375px);
		height:rem(128px);
		height:100%;

	}
</style>