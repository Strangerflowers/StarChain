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
		<Size  v-show='size' @close="close" @subqty="subqty" @addqty="addqty" :qty="num" :goods="goodsSize"></Size>
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
	import Size from './size.vue';
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
			addCart,
			Size
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
				isShow:false,
				size:false,
				goodsSize:[],
				num:1
			}
		},
		methods:{
			getDate(){
				// var goodId=localStorage.getItem("goodsId");
				var goodId=this.$route.params.goodsId;
				this.$axios.post("http://api.380star.com/newbuyer/33/goods/platformgoodsdetail.do",querystring.stringify({
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
			getSize(){
				// https://api.380star.com/newbuyer/33/goods/goodsspecinfos.do
				// var goodId=localStorage.getItem("goodsId");
				var goodId=this.$route.params.goodsId;

				this.$axios.post("http://api.380star.com/newbuyer/33/goods/goodsspecinfos.do",querystring.stringify({
					goodsid: goodId
					
				}))
				.then((res)=>{
					console.log(res);
					this.goodsSize=res.data.data.specPropName;
					console.log('goods=',this.goodsSize)
					
				})
				.catch((error)=>{
					console.log(error);
				})
			},                                                              
			add2cart(){
				
				
				if(this.goodsSize==undefined){
					console.log(999);
					this.isShow=true;
					setTimeout(()=>{ 
						this.isShow=false;
					}, 2000);
				}else if(this.goodsSize.length>1){
					this.size=true;
					console.log(666);
				}
				// goodsId: "6001125"
				// this.$router.push({name:'Cart',params:{userId:this.container.goodsId}})
				// console.log('this.container.goodsId',this.container.goodsId)
				// 
			},
			close(){
				this.size=false;
			},
			subqty(){
				if(this.num<=1){
					return ;
				}
				this.num--
			},
			addqty(){
				this.num++
			}
		},
		beforeCreate(){
			
		},
		created(){
			this.getDate();
			this.getSize();
			console.log('this.$router.params',this.$route.params.goodsId)
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