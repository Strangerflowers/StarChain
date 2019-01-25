<template>
	<div class="detail">
		<Head :len='len'></Head>
		<Banner :imgurl='imgurl'></Banner>
		<Title :list='container'></Title>
		<Promotion :list='limit' ></Promotion>
		<Address></Address>
		<Store :store='store'></Store>
		<Information :list='imgs' :info='info'></Information>
		<Dfooter @handAdd='add2cart' :list='container' :size='goodsSize'></Dfooter>
		<addCart v-show='isShow'></addCart>
		<Size  v-show='size' 
		@close="close"
		@subqty="subqty"
		@addqty="addqty" 
		:qty="num"
		@Determine="Determine"
		:goods="goodsSize"
		:goodsname='goodsSizeName'
		ref="Size"
		></Size>
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
	// var goodId=this.$route.params.goodsId;
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
				goodsSize1:[],
				num:1,
				goodsSizeName:[],
				img:[],
				len:'',
				cartId:[],
				shopArr:[]  //暂时没有使用到
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
					this.img=res.data.data.shareInfo;
					console.log('shuju',res.data.data.shareInfo)
					

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
			getLens(){
				var user=sessionStorage.getItem('token');
				this.$axios.post('http://localhost:3000/goods/getGoods',querystring.stringify({
					// id: goodId,
					user:user,
				}))
				.then((res)=>{
					console.log(res);
					
					this.shopArr=res.data.data;
					this.len=res.data.data.length;
					
				})
				.catch((error)=>{
					console.log(error);
				})
			},
			// 添加商品到购物车
			addGoods(size,color){
				var goodId=this.$route.params.goodsId;
				var user=sessionStorage.getItem('token');
				console.log('sessionStorage',sessionStorage.getItem('token'))
				this.$axios.post('http://localhost:3000/goods/addGoods',querystring.stringify({
					id: goodId,
					name:this.container.name,
					user:user,
					price:this.container.price,
					imgurl:this.img.logo,
					qty:this.num,
					size:size,
					color:color
					
				}))
				.then((res)=>{
					console.log(res);
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
					goodsid: goodId,

				}))
				.then((res)=>{
					console.log(res);
					this.goodsSize=res.data.data.specPropName;
					this.goodsSizeName=res.data.data;
					this.goodsSize1=res.data.specPropName
					console.log('goods=',this.goodsSize)
					
				})
				.catch((error)=>{
					console.log(error);
				})
			},                                                              
			add2cart(){
				var goodId=this.$route.params.goodsId;
				var user=sessionStorage.getItem('token');
				console.log('加')
				// 如果没有尺码可以选择的，直接加入购物车
				if(this.goodsSize==undefined){
					console.log('加入购')
					this.isShow=true;
					// 查看这次加入购物车的商品之前是否已经添加，若已经添加，则数量加一
					this.cartId=this.shopArr.filter((item)=>{
						return item.id==goodId;
					})
					if(this.cartId.length>0){
						
						// 存在，数量+1
						let updataNum=this.num+this.cartId[0].qty;
						this.$axios.post('http://localhost:3000/goods/updateGoods',querystring.stringify({
							_id:this.cartId[0]._id,
							id:this.cartId[0].id,
							name:this.cartId[0].name,
							user:user,
							price:this.cartId[0].price,
							imgurl:this.cartId[0].imgurl,
							qty: updataNum,
							size:this.cartId[0].size,
							color:this.cartId[0].color,
						}))
						.then((res)=>{
							console.log(res);
						})
						.catch((error)=>{
							console.log(error)
						})
						
					}else{
						console.log('-')
						this.addGoods('','');
					}
					setTimeout(()=>{ 
						this.isShow=false;
						this.getLens();
					}, 1000);

					// 如果有尺码选择的，先选择颜色尺寸，点击确定的时候再加入购物车
				}else if(this.goodsSize.length>1){
					this.size=true;
					console.log('物车')
				}else{
					console.log(this.size)
					this.size=true;
				}
				
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
			},
			// 如果为衣服类有尺寸选择的商品，要点击确实才能加入购物车
			Determine(){
				// 获取子组件的方法以及数据
				// 获取商品的尺码
				var size=this.$refs.Size.size;
				var color=this.$refs.Size.color;
				// 每次购物车的商品个数改变，数字也跟着改变
				
				// 当前页面的id
				var goodId=this.$route.params.goodsId;

				// 查看这次加入购物车的商品之前是否已经添加，若已经添加，则数量加一
				this.cartId=this.shopArr.filter((item)=>{
					return item.id==goodId;
				})
				if(this.cartId.length>0){
					console.log('数量相加')
						// 存在，数量+1
						let updataNum=this.num+this.cartId[0].qty;
						var user=sessionStorage.getItem('token');

						this.$axios.post('http://localhost:3000/goods/updateGoods',querystring.stringify({
							id:this.cartId[0].id,
							name:this.cartId[0].name,
							user:user,
							price:this.cartId[0].price,
							imgurl:this.cartId[0].imgurl,
							qty: updataNum,
							size:this.cartId[0].size,
							color:this.cartId[0].color,
						}))
						.then((res)=>{
							console.log(res);
						})
						.catch((error)=>{
							console.log(error)
						})
						
				}else{
					console.log('添加商品')
					this.addGoods(size,color);
					this.getLens();
				}
					
			},
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
			this.getLens();
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