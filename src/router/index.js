import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Home from '../page/Home/home.vue';
import Cart from '../page/Cart/cart.vue';
import Classify from '../page/Classify/classify.vue';
import User from '../page/User/user.vue';
import Goods from '../page/Goodslist/goodslist.vue';
import Detail from '../page/Detail/detail.vue';
import Slist  from '../components/searList.vue';
import Good  from '../components/goodsearch.vue';
import Login  from '../page/Login/login.vue';
import Register  from '../Register/register.vue';




const routes = [
	// {path:'/',redirect:{name:'Home'}}
	{path:'/',redirect:{name:'Home'}},  //重定向
	{
		name:'Home',
		path:'/home',
		component:Home
	},
	{
		name:'Classify',
		path:'/classify',
		component:Classify
	},
	{
		name:'Cart',
		path:'/cart',
		component:Cart,
		meta:{
			requireAuth:true
		}
	},
	{
		name:'User',
		path:'/user',
		component:User,
		meta:{
			requireAuth:true
		}
	},
	{
		name:'Goods',
		path:'/goodslist',
		component:Goods
	},
	{
		name:'Detail',
		path:'/detail',
		component:Detail
	},
	{
		name:'Slist',
		path:'/searchlist',
		component:Slist
	},
	{
		name:'Good',
		path:'/goodsearch/:keyword',
		component:Good
	},
	{
		name:'Login',
		path:'/login/',
		component:Login
	},
	{
		name:'Register',
		path:'/register/',
		component:Register
	}
	
]


let router = new VueRouter({
	 // mode:'history', //加了这句能把url地址栏的#去掉
	routes
});
// 全局路由守卫
router.beforeEach((to,from,next)=>{
	if(to.meta.requireAuth){
		if(sessionStorage.getItem('token')){
			next();
		}else{
			next({
				path:'./login',
				query: {redirect: to.fullPath} // 登陆成功后回到当前页面，这里传值给login页面，to.fullPath为当前点击的页面

			})
		}
	}else{
		next();
	}
});
// router.afterEach((to,from)=>{
// 	console.log('after')
// })

export default router;

