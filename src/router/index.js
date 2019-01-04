import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Home from '../page/Home/home.vue';
import Cart from '../page/Cart/cart.vue';
import Classify from '../page/Classify/classify.vue';
import User from '../page/User/user.vue';




const routes = [
	{name:'Home',path:'/home',component:Home},
	{name:'Classify',path:'/classify',component:Classify},
	{name:'Cart',path:'/cart',component:Cart},
	{name:'User',path:'/user',component:User}
]


let router = new VueRouter({
	routes
})

export default router;

