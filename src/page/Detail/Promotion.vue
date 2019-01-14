<template>
	<div class="Promotion" v-show="list.limitBuyTitle">
        <div class="goods-detail-item goods-detail-item1" >
            <div class="sales-bar flexbox mar-top-0"  @click='actionSheet'>
                <div class="col-subtitle">{{list.limitBuyTitle}}：</div>
                <div class="col-sales ui-arrowlink-right">
                    <div class="sales-list" >
                        <div class="itag">{{list.limitBuyTitle}}</div>
                        <div class="idesc">{{list.limitBuyDesc}} </div>
                    </div>
                </div>
                <!-- <div class="icon"> -->
                	<i class="iconfont icon-arrow" ></i>
                <!-- </div> -->
            </div>
        </div>
        <mt-actionsheet
		  :actions="actions"
		  v-model="sheetVisible"
		  cancelText="我知道了">
		</mt-actionsheet>
    </div>
</template>
<script type="text/javascript">
	export default{
		name:"Promotion",
		props:['list'],
		computed:{
			// res(){
			// 	var res=JSON.parse(this.list.limitBuyDesc);
			// 	console.log(res)
				
			// 	return res
			// }
		},
		data(){
			return {
				actions:[
				{
					name:'促销优惠',
					method:this.getCamera
				},
				{
					name:'限购：同一用户ID最多购买5件',
					method:this.getLibrary
				}],
				sheetVisible: false
			}
		},
		methods:{
			actionSheet: function(){
    		// 打开action sheet
		      this.sheetVisible = true;
		      console.log(this.sheetVisible);
		    },
		    getCamera: function(){
		      // console.log("打开照相机")
		    },
		    getLibrary: function(){
		      // console.log("打开相册")
		    }


		}
	}
</script>
<style lang="scss" >
	.Promotion{
		background:#FBFBFB;
		width:rem(375px);
		margin:0 auto;
		height:rem(51px);
		line-height:rem(50px);
		padding:rem(0px) rem(17px) rem(0px) rem(17px);
		font-size:rem(14px);
		color:#999;
		text-align:center;
		.goods-detail-item{
			.sales-bar{
				display:flex;
				justify-content: space-between;
				.col-subtitle{
					display:inline-block;
					width:rem(45px);
					height:rem(50px);
					
				}
				.col-sales{
					display:inline-block;
					width:rem(276px);
					.sales-list{
						text-align:left;
						.itag{
							display:inline-block;
							width:rem(35px);
							height:rem(20px);
							color:#fa5e71;
							border-radius:rem(2px);
						}
						.idesc{
							display:inline-block;
						}
					}
				}
			}
		}
		.mint-actionsheet{

			background:#fff;
			.mint-actionsheet-list{
				.mint-actionsheet-listitem{
					color:#f00;
					font-size:rem(16px);
				}
			}
			a{
				font-size:rem(14px);
				color:#333;
			}
		}
	}
</style>