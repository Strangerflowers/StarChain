<template>
	<div class="information">
        <div class="ui-tab" >
            <ul class="ui-tab-nav" id="detailTabNav">
                <li :class="sele==idx?'on':''" v-for="(tab, idx) in tabs" @click="goto(idx)" >{{tab}}</li>
            </ul>
        </div>
        <Img :imgs='list' :idx='sele' :info1='info'></Img>
    </div>
</template>
<script type="text/javascript">
import Img from './detail_img.vue';
	export default{
		name:"Information",
		props:['list','info'],
		components:{
			Img,
		},
		data(){
			return{
				tabs:['图文详情','产品参数','售后服务'],
				sele:0
			}
		},
		methods:{
			goto(idx){
				this.sele=idx;
				return idx;
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