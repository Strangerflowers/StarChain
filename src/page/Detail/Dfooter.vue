<template>
	<footer class="footer platform-footer">
        <ul>
            <li class="border-r info-li">
                <a class="icon-store" href="store.do?storeid=88964"><i></i><span>店铺</span></a>
            </li>
            <li class="info-li shou">
                <a href="javascript:;" class="icon-collect"><i></i><span>收藏</span></a>
            </li>
            <li class="btn-item  add"  @click='add'><a href="javascript:;" class="btn-buy btn-addcart">加入购物车</a></li>
            <li class="btn-item"><a href="javascript:;" class="btn-active">立即购买</a></li>
        </ul>
    </footer>
</template>
<script type="text/javascript">
	export default{
		name:'Dfooter',
		props:['list','size'],
		data(){
			return{

			}
		},
		methods:{
			add(){
				this.$emit('handAdd');
				console.log('加入购物车')
			},
			add2Cart(){
				// name:{type:String,required:true},
				// user:{type:String,required:true},
				// type:{type:String,required:true},
				// price:{type:Number,required:true},
				// imgurl:{type:String,required:true},
				// qty:{type:Number,required:true},
				// size:{type:String,required:false},
				// color:{type:String,required:false}
			}
		}
	}
</script>
<style lang="scss" scoped>
	.footer{
		position:fixed;
		bottom:0;
		right:0;
		left:0;
		width:rem(375px);
		height:rem(51px);
		font-size:rem(14px);
		color:#999;
		background-color:#fff;
		line-height:rem(50px);
		text-align:center;
		border-top:1px solid #ccc;
		ul{
			display:flex;
			justify-content:space-between;
			.border-r{
				width:rem(65px);
				height:rem(51px);
				border-right:1px solid #ccc;
			}
			.shou{
				width:rem(74px);
			}

			.btn-item{
				width:rem(125px);
				background:#fa5e71;
				
				
				a{

					color:#fff;
					font-size:rem(18px);
				}
			}
			.add{
				background-color:#FF8E9C;
				border-right:1px solid #FF8E9C;
			}
		}
	}
</style>