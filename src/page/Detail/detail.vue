<template>
	<div class="detail">
		<Head></Head>
		<Banner :imgurl='imgurl'></Banner>
		<Title :list='container'></Title>
		<Promotion :list='limit' ></Promotion>
		<Address></Address>
		<Store :store='store'></Store>
		<Information :list='imgs' :info='info'></Information>
		<Dfooter @handAdd='add2cart'></Dfooter>
		<addCart v-show='isShow'></addCart>
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
	import addCart from './addCart.vue';
	import Dfooter from './Dfooter.vue';

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
			Dfooter,
			addCart
		},
		data(){
			return {
				imgurl:[],
				container:[],
				imgs:[],
				info:[],
				infoimg:[],
				limit:[],
				store:[],
				isShow:false
			}
		},
		methods:{
			getDate(){
				var goodId=localStorage.getItem("goodsId");
				this.$axios.post("https://api.380star.com/newbuyer/33/goods/platformgoodsdetail.do",querystring.stringify({
					goodsid: goodId
					
				}))
				.then((res)=>{
					console.log(res);
					this.imgurl=res.data.data.goodsInfo.viewPicList;
					this.container=res.data.data.goodsInfo;

					this.imgs=JSON.parse(res.data.data.goodsInfo.goodsProper);
					this.info=res.data.data.goodsInfo;
					this.limit=res.data.data.goodsExtraInfo;
					this.store=res.data.data.storeInfo;
					console.log(this.info)
					// this.limitname=res.data.data.goodsExtraInfo.limitBuyDesc;
					// .detailInfo
					// serviceUrl
					var i=this.info;
					// 获取src地址的正则
					var srcReg = /src=[\'\"]?([^\'\"]*)[\'\"]?/i;
					// console.log(i.match(srcReg));

					// console.log(this.info);  // 这里打印能拿到数据
				})
				.catch((error)=>{
					console.log(error);
				})
			},
			add2cart(){
				console.log(999);
				this.isShow=true;
				// setTimeout(()=>{
				// 	this.isShow=false;
				// }, 300000);
			}
		},
		beforeCreate(){
			
		},
		created(){
			this.getDate();
			// this.$store.state.navShow=false;
			// console.log(this.container); //在这里打印得不到数据，因为ajax是异步函数，要拿到数据只能在then能保证是有数据的
		},
		mounted(){
			
			// console.log(this.container); //在这里打印得不到数据
			
		},
		beforeUpdate(){
			// this.$store.state.navShow=false;
		},
		
		updated(){
			this.$store.state.navShow=false;
			
		},
		beforeDestroy(){
			this.$store.state.navShow=true;
		} 
		
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