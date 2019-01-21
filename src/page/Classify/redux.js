import React from 'react';
import {HashRouter} from 'react-router-dom';

import App from './App';
import createStore from 'redux'

ledefaultState={goodslist:[],step:0}
let reducer =function(state=defaultState,action){
	switch(action.type){
		case 'REMOVE_FROM_CART'：
			return {...state,goodslist:state.goodlist.filter(item=>item.id!=payload.id)}
			case'ADD_TO_CART':
				return{
					...state,
					goodslist:[...state.goodslist,action.payload]
				}
			default:
				return state;
	}
}


let store  =createStore(reducer);
// reducer  是一个函数，作用是规定state的修改逻辑
// state：为数据状态，
let data = store.getState();
console.log(data);
// store 的对象的方法：
	// getState() 获取仓库的最新状态（数据）
	// dispatch(action)操作数据   是唯一修改方式
		// action用于定义如何修改state，action的格式是 ：{type:xxx,payload}
	// 监听修改  subscribe  当state有修改时自动执行这个回调函数
	store.dispatch({type:'ADD_TO_CART',payload:{id:1,name:iphoneX,qty:1,price:1998}})
	data=store.getState();
	console.log('add',data);

	store.subscribe(function(){
		let data=store.getState();
		console.log(data);
	})

	// redux
		 // store:
		 	// 创建：createStore(reducer)
		 	// 方法：
		 		// getState()
		 		// dispatch(action)
		 		// subscribe(fn) 

		 // state
		 // reducer:预设state的修改规则，是一个纯函数
		 // action：告诉store我想干嘛，格式{type:xxx,payload:{}}


		 