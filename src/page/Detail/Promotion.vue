<template>
	<div class="Promotion">
        <div class="goods-detail-item goods-detail-item1">
            <div class="sales-bar flexbox mar-top-0">
                <div class="col-subtitle">促销：</div>
                <div class="col-sales ui-arrowlink-right">
                    <div class="sales-list">
                        <div class="itag">限购</div>
                        <div class="idesc">同一用户ID最多购买5件 </div>
                    </div>
                </div>
                <!-- <div class="icon"> -->
                	<i class="iconfont icon-arrow"></i>
                <!-- </div> -->
            </div>
        </div>
    </div>
</template>
<script type="text/javascript">
	export default{
		name:"Promotion",
		data(){
			return {

			}
		}
	}
</script>
<style lang="scss" scoped>
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
	}
</style>