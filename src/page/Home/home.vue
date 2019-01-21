
<template>
	<div class="page">
		<Search/>
	<!--<mt-header class="hea">
      <mt-button slot="left" @click="goto('CityList')">[广州]</mt-button>
      <mt-button icon="search" slot="right" @click="goto('Search')"></mt-button>
    </mt-header>-->
	<div class="carousel">
    <mt-swipe :auto="4000">
  		<mt-swipe-item><img src="http://rs.380star.com/upload/gic/ad1/pub/8f8cf18d06aeabae124742084de7f96d.jpg"/></mt-swipe-item>
 		<mt-swipe-item><img src="http://rs.380star.com/upload/gic/ad1/pub/35de1043e5d2a729568140839ebd6c33.jpg"/></mt-swipe-item>
	</mt-swipe>
	</div> 
	<div class="menus">
		<ul class="head">
			<li v-for="item in list">
				<img :src="item.iconsUrl">
				<p>{{item.brief}}</p> 
			</li>
		</ul>
	</div>
	<div class="nav">
		<ul>
			<li v-for="item in title">
				<img :src="item.iconsUrl">
			</li>
		</ul>
	</div>
	<div class="hm">
		<ul>
			<li v-for="(item,idex) in hm" :key="idex">
				<img :src="item.iconsUrl">
				</li>
		</ul>
	</div>
	<div class="hm2">
		<ul>
			<li v-for="(item,idex) in hm2" :key="idex">
				<img :src="item.iconsUrl">
				</li>
		</ul>
	</div>
	<div class="nav2">
		<ul>
			<li v-for="item in title2">
				<img :src="item.iconsUrl">
			</li>
		</ul>
	</div>
	<div class="hm3">
		<ul>
			<li v-for="(item,idex) in hm3" :key="idex">
				<img :src="item.iconsUrl">
				</li>
		</ul>
	</div>
	<div class="hm4">
		<ul>
			<li v-for="(item,idex) in hm4" :key="idex">
				<img :src="item.iconsUrl">
				</li>
		</ul>
	</div>
	<div class="hm5">
		<ul>
			<li v-for="(item,idex) in hm5" :key="idex">
				<img :src="item.iconsUrl">
				</li>
		</ul>
	</div>
	<div class="hm6">
		<ul>
			<li v-for="(item,idex) in hm6" :key="idex">
				<img :src="item.iconsUrl">
				</li>
		</ul>
	</div>
	<div class="hm7">
		<ul>
			<li v-for="(item,idex) in hm7" :key="idex">
				<img :src="item.iconsUrl">
				</li>
		</ul>
	</div>
	<div class="hm8">
		<ul>
			<li v-for="(item,idex) in hm8" :key="idex">
				<img :src="item.iconsUrl">
				</li>
		</ul>
	</div>
	<div class="hm9">
		<ul>
			<li v-for="(item,idex) in hm9" :key="idex">
				<img :src="item.iconsUrl">
				</li>
		</ul>
	</div>
	<div class="hm10">
		<ul>
			<li v-for="(item,idex) in hm10" :key="idex">
				<img :src="item.iconsUrl">
				</li>
		</ul>
	</div>
	<div class="hm11">
		<ul>
			<li v-for="(item,idex) in hm11" :key="idex">
				<img :src="item.iconsUrl">
				</li>
		</ul>
	</div>
	<div class="hm12">
		<ul>
			<li v-for="(item,idex) in hm12" :key="idex">
				<img :src="item.iconsUrl">
				</li>
		</ul>
	</div>
	<div class="hm13">
		<ul>
			<li v-for="(item,idex) in hm13" :key="idex">
				<img :src="item.iconsUrl">
				</li>
		</ul>
	</div>
	<div class="hm14">
		<ul>
			<li v-for="(item,idex) in hm14" :key="idex">
				<img :src="item.iconsUrl">
				</li>
		</ul>
	</div>
	<div class="nav3">
		<ul>
			<li v-for="item in nav3">
				<img :src="item.iconsUrl">
			</li>
		</ul>
	</div>
	<div class="nav4">
		<ul>
			<li v-for="item in nav4">
				<img :src="item.iconsUrl">
			</li>
		</ul>
	</div>
	<div class="nav5">
		<ul>
			<li v-for="item in nav5">
				<img :src="item.iconsUrl">
			</li>
		</ul>
	</div>
	<div class="nav6">
		<ul>
			<li v-for="item in nav6">
				<img :src="item.iconsUrl">
			</li>
		</ul>
	</div>
	<div class="nav7">
		<ul>
			<li v-for="item in nav7">
				<img :src="item.iconsUrl">
			</li>
		</ul>
	</div>
	<div class="nav8">
		<ul>
			<li v-for="item in nav8">
				<img :src="item.iconsUrl">
			</li>
		</ul>
	</div>
	<div class="nav9">
		<ul>
			<li v-for="item in nav9">
				<img :src="item.iconsUrl">
			</li>
		</ul>
	</div>
	<div class="nav10">
		<ul>
			<li v-for="item in nav10">
				<img :src="item.iconsUrl">
			</li>
		</ul>
	</div>
	<div class="nav11">
		<ul>
			<li v-for="item in nav11">
				<img :src="item.iconsUrl">
			</li>
		</ul>
	</div>
	<div class="nav12">
		<ul>
			<li v-for="item in nav12">
				<img :src="item.iconsUrl">
			</li>
		</ul>
	</div>
	</div>
</template>
<script>
	import Vue from 'vue';
//	import { Search } from 'mint-ui';
	Vue.component(Search.name, Search);
	import { Swipe, SwipeItem } from 'mint-ui';
//	import Search from '../../components/Search.vue';
	import Search from '../../components/Search';
	Vue.component(Swipe.name, Swipe);
	Vue.component(SwipeItem.name, SwipeItem);
	
	var querystring = require('querystring');
export default {
	name:"home",
	components:{
		Search
	},
    data() {
    return {
    	list:[],
    	title:[],
    	hm:[],
    	hm2:[],
    	title2:[],
    	hm3:[],
    	hm4:[],
    	hm5:[],
    	hm6:[],
    	hm7:[],
    	hm8:[],
    	hm9:[],
    	hm10:[],
    	hm11:[],
    	hm12:[],
    	hm13:[],
    	hm14:[],
    	nav3:[],
    	nav4:[],
    	nav5:[],
    	nav6:[],
    	nav7:[],
    	nav8:[],
    	nav9:[],
    	nav10:[],
    	nav11:[],
    	nav12:[],
     
    }
},
	methods:{
    	getData(){
    		
    		this.$axios.post('https://api.380star.com/newbuyer/33/goods/homead3.do',querystring.stringify({
				
				version:3.7,
				t_id:1547122912018,
				source:0,
				entry:1
				
				}))
    		.then((res)=>{
    			console.log(res);
    			this.list = res.data.data.list[1].content;
    			this.title = res.data.data.list[2].content;
    			this.hm = res.data.data.list[3].content;
    			this.hm2 = res.data.data.list[4].content;
    			this.title2 = res.data.data.list[5].content;
    			this.hm3 = res.data.data.list[6].content;
    			this.hm4 = res.data.data.list[7].content;
    			this.hm5 = res.data.data.list[8].content;
    			this.hm6 = res.data.data.list[9].content;
    			this.hm7 = res.data.data.list[10].content;
    			this.hm8 = res.data.data.list[11].content;
    			this.hm9 = res.data.data.list[12].content;
    			this.hm10 = res.data.data.list[13].content;
    			this.hm11 = res.data.data.list[14].content;
    			this.hm12 = res.data.data.list[15].content;
    			this.hm13 = res.data.data.list[16].content;
    			this.hm14 = res.data.data.list[17].content;
    			this.nav3 = res.data.data.list[18].content;
    			this.nav4 = res.data.data.list[19].content;
    			this.nav5 = res.data.data.list[20].content;
    			this.nav6 = res.data.data.list[21].content;
    			this.nav7 = res.data.data.list[22].content;
    			this.nav8 = res.data.data.list[23].content;
    			this.nav9 = res.data.data.list[24].content;
    			this.nav10 = res.data.data.list[25].content;
    			this.nav11 = res.data.data.list[26].content;
    			this.nav12 = res.data.data.list[27].content;
    		})
    		
    		.catch((error)=>{
    			console.log(error);
    		})
    	}
    },
    created(){
    	this.getData();
    }
    
}
</script>



<style lang="scss" scoped>
/*.hea{
	color: currentcolor;
}*/
.mint-swipe img {
  width: 100%;
}
.carousel {
  height:rem(160px);
 width:rem(375px);
}
.head{
	width: 100%;
	height: rem(70px);
	font-size: rem(14px);
}
.head li{
	width: 20%;
	padding-top: 0.15rem;
	float: left;
	list-style: none;
	text-align: center;
}
.head li img{
	width: 1.14rem;
}
.nav ul{
	height: rem(60px);
}
.nav li{
	height: 1.49rem;
}
.nav li img{
	width: 100%;
}
.hm ul{
	height: rem(167px);
}
.hm li{
	width: 3.33rem;
	height: 4.48rem;
	list-style: none;
	float: left;
}
.hm li img{
	width: 3.35rem;
}
.hm2 ul{
	height: rem(177px);
}
.hm2 li{
	width: 3.33rem;
	list-style: none;
	float: left;
}
.hm2 li img{
	width: 3.35rem;
}
.nav2 ul{
	height: rem(71px);
}
.nav2 li{
	height: 1.49rem;
}
.nav2 li img{
	width: 100%;
}
.hm3 li{
	width: 50%;
	height: 5.35rem;
	list-style: none;
	float: left;
}
.hm3 ul{
	height: rem(167px);
}
.hm3 li img{
	width: 100%;
	
}
.hm4 ul{
	height: rem(190px);
}
.hm4 li{
	width: 3.33rem;
	list-style: none;
	float: left;
}
.hm4 li img{
	width: 3.35rem;
}
.hm5 ul{
	height:100%;
}
.hm5 li{
	width: 50%;
	height: 3.16rem;
	list-style: none;
	float: left;
}
.hm5 li img{
	width: rem(188px);
}
.hm6{
	height: rem(128px);
}
.hm6 ul{
	height: rem(128px);
}
.hm6 li{
	width: 25%;
	list-style: none;
	float: left;
}
.hm6 li img{
	width: rem(95px);
}
.hm7 ul{
	height: rem(124px);
}
.hm7 li{
	width: 50%;
	height: rem(116px);
	list-style: none;
	float: left;
}
.hm7 li img{
	width: rem(188px);
}
.hm8{
	height: rem(128px);
}
.hm8 ul{
	height: rem(128px);
}
.hm8 li{
	width: 25%;
	list-style: none;
	float: left;
}
.hm8 li img{
	width: rem(95px);
}
.hm9 ul{
	height: rem(128px);
}
.hm9 li{
	width: 50%;
	height: rem(120px);
	list-style: none;
	float: left;
}
.hm9 li img{
	width: rem(188px);
}
.hm10{
	height: rem(128px);
}
.hm10 ul{
	height: rem(128px);
}
.hm10 li{
	width: 50%;
	list-style: none;
	float: left;
}
.hm10 li img{
	width: rem(189px);
}
.hm11 ul{
	height: rem(124px);
}
.hm11 li{
	width: 50%;
	height: rem(118px);
	list-style: none;
	float: left;
}
.hm11 li img{
	width: rem(188px);
}
.hm12{
	height: rem(128px);
}
.hm12 ul{
	height: rem(128px);
}
.hm12 li{
	width: 50%;
	list-style: none;
	float: left;
}
.hm12 li img{
	width: rem(189px);
}
.hm13 ul{
	height: rem(124px);
}
.hm13 li{
	width: 50%;
	height: rem(120px);
	list-style: none;
	float: left;
}
.hm13 li img{
	width: rem(188px);
}
.hm14{
	height: rem(128px);
}
.hm14 ul{
	height: rem(124px);
}
.hm14 li{
	width: 25%;
	list-style: none;
	float: left;
}
.hm14 li img{
	width: rem(95px);
}
.nav3 ul{
	height: 6.69333rem;
}
.nav3 li{
	height: 1.49rem;
}
.nav3 li img{
	width: 100%;
}
.nav4 ul{
	height: rem(176px);
}
.nav4 li{
	height: 1.49rem;
}
.nav4 li img{
	width: 100%;
}
.nav5 ul{
	height: rem(176px);
}
.nav5 li{
	height: 1.49rem;
}
.nav5 li img{
	width: 100%;
}
.nav6 ul{
	height: rem(176px);
}
.nav6 li{
	height: 1.49rem;
}
.nav6 li img{
	width: 100%;
}
.nav7 ul{
	height: rem(176px);
}
.nav7 li{
	height: 1.49rem;
}
.nav7 li img{
	width: 100%;
}
.nav8 ul{
	height: rem(176px);
}
.nav8 li{
	height: 1.49rem;
}
.nav8 li img{
	width: 100%;
}
.nav9 ul{
	height: rem(176px);
}
.nav9 li{
	height: 1.49rem;
}
.nav9 li img{
	width: 100%;
}
.nav10 ul{
	height: rem(176px);
}
.nav10 li{
	height: 1.49rem;
}
.nav10 li img{
	width: 100%;
}
.nav11 ul{
	height: rem(176px);
}
.nav11 li{
	height: 1.49rem;
}
.nav11 li img{
	width: 100%;
}
.nav12 ul{
	height: rem(176px);
}
.nav12 li{
	height: 1.49rem;
}
.nav12 li img{
	width: 100%;
}
</style>