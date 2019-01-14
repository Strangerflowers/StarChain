<template>
	<div class="address">
            <ul class="item-delivery ui-arrowlink-right">
                <li><span class="col-subtitle">配送：</span>安徽省安庆市 至</li>
                <!-- <li class="i-local"><i class="iconfont-qrqd icon-iclocationdisablescopy2x"></i></li> -->
                <li class="item-address" id="sendAddress" data-value="" data-text="">
                    <div class="addr-to">广东省深圳市</div>
                    <input type="hidden" id="province" value=""><input type="hidden" id="city" value=""><input type="hidden" id="district" value="">
                </li>
                <li class="icon"><i class="iconfont icon-arrow"></i></li>
            </ul>
            <div class="item-delivery-none" style="display: none;">该地区暂不支持配送</div>
        </div>
    </div>
</template>
<script type="text/javascript">
	export default{
		name:'Address',
		data(){
			return{

			}
		}
	}
</script>
<style lang="scss" scoped>
	.address{
		background:#fff;
		width:rem(375px);
		margin-top:rem(11px);
		height:rem(46px);
		line-height:rem(46px);
		padding:rem(0px) rem(17px) rem(0px) rem(17px);
		font-size:rem(14px);
		color:#999;
		ul{
			display:flex;
			
			justify-content: space-between;
			.col-subtitle{
				width:rem(156px);
			}
			
		}
	}
</style>