<template>
	<div class="store">
        <a href="store.do?storeid=88964">
            <div class="row-store">
                <div class="item-logo"><img src="http://rs.380star.com/upload/gic/default/suppshop/33.jpg"></div>
                <div class="item-storename">
                    <div class="s-name"><span>怡家安徽怡达综合店</span></div>
                    <div class="s-taglist"><span>智能设备</span><span>手机通讯</span><span>充值缴费</span></div>
                </div>
            </div>
        </a>
        <div class="row-btnlist">
        	<a href="tel:18909660399"><i class="i-tel"></i><span>联系供应商</span></a>
        	<a href="store.do?storeid=88964"><i class="i-store"></i><span>进店逛逛</span></a>
        </div>
    </div>
</template>	
<script type="text/javascript">
	export default{
		name:'Store',
		data(){
			return {

			}
		}
	}
</script>
<style lang="scss" scoped>
	.store{
		width:rem(375px);
		padding:rem(11px) rem(17px) rem(11px) rem(17px);
		height:rem(128px);
		font-size:rem(16px);
		text-align:left;
		background-color:#fff;
		margin-top:rem(11px);
		a{
			.row-store{
				display:flex;
				justify-content: space-between;
				.item-logo{
					width:rem(56px);
					height:rem(56px);

					img{
						width:rem(56px);
						height:rem(56px);
					}
				}
				.item-storename{
					width:rem(275px);

					.s-name{
						height:rem(41px);
						line-height:rem(40px);
						margin-left:rem(10px);
					}
					.s-taglist{
						span{
							width:rem(65px);
							height:rem(20px);
							font-size:rem(12px);
							border:1px solid #ccc;
							background-color:#eee;
							display:inline-block;
							text-align:center;
							line-height:rem(20px);
							border-radius:rem(50px);
							margin-left:rem(10px);
						}
					}
				}
			}
		}
		.row-btnlist{
			width:rem(339px);
			height:rem(46px);
			font-size:rem(12px);
			line-height:rem(46px);
			padding-top:rem(11px);
			a{
				width:rem(165px);
				height:rem(27px);
				border:1px solid #999;
				display:inline-block;
				border-radius:rem(5px);
				text-align:center;
				line-height:rem(27px);
				margin-right:rem(2px);
			}
		}
	}
</style>