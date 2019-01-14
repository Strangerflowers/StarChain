<template>
	<div class="information">
        <div class="ui-tab" >
            <ul class="ui-tab-nav" id="detailTabNav">
                <li class="on">图文详情</li>
                <li class="">产品参数</li>
                <li class="">售后服务</li>
            </ul>
        </div>
    </div>
</template>
<script type="text/javascript">
	export default{
		name:"Information",
		data(){
			return{

			}
		}
	}
</script>
<style lang="scss" scoped>
	.information{
		width:rem(375px);
		margin-top:rem(11px);
		.ui-tab{
			width:rem(375px);
			height:rem(50px);
			background-color:#fff;
			ul{
				display:flex;
				justify-content:space-between;
				li{
					width:rem(125px);
					height:rem(50px);
					line-height:rem(50px);
					color:#999;
					font-size:rem(16px);
				}
				.on{
					color:#fa5e71;;
					border-bottom:1px solid #fa5e71;
				}
			}
		}
	}
</style>