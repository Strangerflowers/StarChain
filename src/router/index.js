import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Home from '../page/Home/home.vue';
import Cart from '../page/Cart/cart.vue';
import Classify from '../page/Classify/classify.vue';
import User from '../page/User/user.vue';
import Goods from '../page/Goodslist/goodslist.vue';
import Detail from '../page/Detail/detail.vue';



const routes = [
	// {path:'/',redirect:{name:'Home'}}
	{path:'/',redirect:{name:'Home'}},  //重定向
	{name:'Home',path:'/home',component:Home},
	{name:'Classify',path:'/classify',component:Classify},
	{name:'Cart',path:'/cart',component:Cart},
	{name:'User',path:'/user',component:User},
	{name:'Goods',path:'/goodslist',component:Goods},
	{name:'Detail',path:'/detail',component:Detail}
]


let router = new VueRouter({
	 // mode:'history', //加了这句能把url地址栏的#去掉
	routes
})

export default router;

