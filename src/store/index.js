import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex)

const store = new Vuex.Store({
	state:{
		navShow:true
	},
	getter:{

	},
	// 存放处理数据的方法集合，负责更改state中的数据
	// 调用方式：this.$store.commit(type,payload)调用
	mutations:{

	},
	// 负责异步操作
	// 组件中通过this.$store.dispatch(type.payload)调用
	actions:{

	}

})
export default store