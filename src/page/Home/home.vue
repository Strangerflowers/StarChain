<template>
	<div class="page">
	<mt-header class="hea">
      <mt-button slot="left" @click="goto('CityList')">[广州]</mt-button>
      <mt-button icon="search" slot="right" @click="goto('Search')"></mt-button>
    </mt-header>
	<div class="carousel">
    <mt-swipe :auto="4000">
  		<mt-swipe-item><img src="../images/lunbo1.png"/></mt-swipe-item>
 		<mt-swipe-item><img src="../images/lunbo2.png"/></mt-swipe-item>
	</mt-swipe>
	</div>
	<div class="menus">
		<ul class="head">
			<li><a href="#">1</a></li>
			<li><a href="#">2</a></li>
			<li><a href="#">3</a></li>
			<li><a href="#">4</a></li>
		</ul>
	</div>
	</div>
</template>
<script>
	import Vue from 'vue';
	import { Search } from 'mint-ui';
	Vue.component(Search.name, Search);
	import { Swipe, SwipeItem } from 'mint-ui';
	
	Vue.component(Swipe.name, Swipe);
	Vue.component(SwipeItem.name, SwipeItem);
export default {
    data() {
    return {
          
    };
  },
}
</script>


<style>
.hea{
	color: currentcolor;
}
.mint-swipe img {
  width: 100%;
}
.carousel {
  height: 160px;
}
.head{
	width: 100%;
	height: 70px;
}
.head li{
	width: 25%;
	padding-top: 10px;
	float: left;
	list-style: none;
}
</style>