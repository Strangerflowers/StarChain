<template>

   <section class="user">
            <div class="user-h">
                <div class="icon-s"><img src="../../assets/icon_set@2x.png" alt=""></div>
                <div class="icon-m"><img src="../../assets/common_nav_icon_massage@2x.png" alt=""></div>
                <div class="icon-mess" style="display: none;"></div>
                <div class="img-h"><img alt="" src="http://rs.380star.com/upload/uic/logo_icon.jpg"></div>
                <div class="txt-h"><span class="username"><strong>{{username}}</strong></span>
                 <span @click="exit" class="exit"> 退出登录</span>  </div>
                <div class="user-c">
                    <div class="c-good">
                        <p>0</p>
                        <p>收藏的商品</p>
                    </div>
                    <div class="c-shop">
                        <p>0</p>
                        <p>收藏的店铺</p>
                    </div>
                </div>
            </div>
            <div class="order">
            <div class="order-t">
                <span>我的订单</span>
                <a>查看全部订单<img src="../../assets/common_right_arrow@2x.png" alt="" class="xiao"></a>
            </div>
            <ul class="order-l">
                <li>
                    <a>
                        <i class="icon" style="display: none;"><span>0</span></i>
                        <div><img src="../../assets/icon_daifukuan@2x.png" alt="" class="o-img"></div>
                        <p>待付款</p>
                    </a>
                </li>
                <li>
                    <a>
                        <i class="icon" style="display: none;"><span></span></i>
                        <div><img src="../../assets/icon_daifahuo @2x.png" alt="" class="o-img"></div>
                        <p>待发货</p>
                    </a>
                </li>
                <li>
                    <a>
                        <i class="icon" style="display: none;"><span></span></i>
                        <div><img src="../../assets/icon_daishouhuo@2x.png" alt="" class="o-img"></div>
                        <p>待收货</p>
                    </a>
                </li>
                <li>
                    <a>
                        <i class="icon" style="display: none;"><span>0</span></i>
                        <div><img src="../../assets/icon_aftermarket@2x.png" alt="" class="o-img"></div>
                        <p>退款/售后</p>
                    </a>
                </li>
            </ul>
            </div>
        <div class="u-footer">
            <ul>
                <li>
                    <div>
                        <img src="../../assets/icon_iphone@2x.png" alt="" class="f-img">
                        <span>充值订单</span>
                        <img src="../../assets/common_right_arrow@2x.png" alt="" class="xiao">
                    </div>
                </li>
            </ul>
            <ul>
                <li>
                    <div>
                        <img src="../../assets/icon_coupon@2x.png" alt="" class="f-img">
                        <span>我的优惠券</span>
                        <img src="../../assets/common_right_arrow@2x.png" alt="" class="xiao">
                    </div>
                </li>
                <li>
                    <div>
                        <img src="../../assets/icon_card@2x.png" alt="" class="f-img">
                        <span>星链卡</span><span class="earn">余额：¥0.00</span>
                        <img src="../../assets/common_right_arrow@2x.png" alt="" class="xiao">
                    </div>
                </li>
            </ul>
            <ul>
                <li>
                    <div>
                        <img src="../../assets/icon_friends@2x.png" alt="" class="f-img">
                        <span>邀请好友</span>
                        <img src="../../assets/common_right_arrow@2x.png" alt="" class="xiao">
                    </div>
                </li>
            </ul>
            <ul>
                <li>
                    <div>
                        <img src="../../assets/icon_service@2x.png" alt="" class="f-img">
                        <span>客服中心</span>
                        <img src="../../assets/common_right_arrow@2x.png" alt="" class="xiao">
                    </div>
                </li>
                <li>
                    <div>
                        <img src="../../assets/icon_guide@2x.png" alt="" class="f-img">
                        <span>操作指引</span>
                        <img src="../../assets/common_right_arrow@2x.png" alt="" class="xiao">
                    </div>
                </li>
            </ul>
        </div>    
       </section>

</template>
<script>

export default {
    data(){
        return {
            username:''
        }
    },
    methods:{
        exit(){
            sessionStorage.removeItem('token');
           location.reload()
        }
    },
    created(){
        this.username=sessionStorage.getItem('token');
    }
}
</script>
<style lang="scss" scoped>

.user{
	width: 100%;
	height: 100%;
}
.user .user{
	width: 100%;
}
.user-h{
	width: 100%;
	height: 5.15625rem;
	background-size: 100%;
	position: relative;	
}
.user-h .txt-h .username strong{
    color:#222;
    height:rem(40px);
    display:inline-block;
    font-size:rem(30px);
    width:rem(186px);
}
.user-h .txt-h .exit{
   height:rem(40px);
   font-size:rem(20px);
    color:#222;
   line-height:rem(50px);
}
.user-h .icon-s{
	width: 0.609375rem;
	height: 0.609375rem;
	position: absolute;
	left: 0.46875rem;
	top: 0.46875rem;
}
.user-h .icon-s img{
	width: 0.609375rem;
	height: 0.609375rem;
}
.user-h .icon-m{
	width: 0.546975rem;
	height: 0.609375rem;
	position: absolute;
	top: 0.46875rem;
	right: 0.59375rem;
}
.user-h .icon-m img{
	width: 0.546875rem;
	height: 0.609375rem;
}
.user-h .img-h {
	width: 1.5625rem;
	height: 1.5625rem;
	position: absolute;
	left: 50%;
	margin-left: -0.78125rem;
	top: 1.046875rem;
}
.user-h .img-h img{
	width: 1.5625rem;
	height: 1.5625rem;
	border-radius: 0.78125rem;
}
.user-h .txt-h{
	width: 100%;
	position: absolute;
	top: 2.8125rem;
	text-align: center;
}
.user-h .txt-h span{
	display: inline-block;
	font-size: 0.375rem;
	color: #626262;
	line-height: 0.40625rem;
}
.user-c{
	width: 100%;
	height: 1.5625rem;
	position: absolute;
	bottom: 0;
	padding: 0.21875rem 0 0.3125rem 0;
}
.user-c .c-good{
	float: left;
	width: 50%;
	height: 100%;
	text-align: center;
	border-right: 1px solid #D8D8D8;
}
.user-c p{
	font-size: 0.40625rem;
	color: #333333;
}
.user-c .c-shop{
	float: left;
	width: 50%;
	height: 100%;
	text-align: center;
}
.order{
	width: 100%;
	background-color: #FFFFFF;
	margin: 0.3125rem 0;
}
.order .order-t{
	height: 1.375rem;
	line-height: 1.375rem;
	border-bottom: solid 1px #EEEEEE;
}
.order-t span{
	font-size: 0.40625rem;
	float: left;
	padding-left: 0.55rem;
}
.order-t a{
	float: right;
	font-size: 0.40625rem;
	padding-right: 0.35rem;
}
.order-t a:after{
	display: inline-block;
	width: 0.25rem;
	height: 0.40625rem;
	background-size: 100%;
	margin: 0 0.46876rem -0.46876rem 0.3125rem;
}
.order-l{
	height: 2.21875rem;
	padding: 0 0.3125rem;
	display: -webkit-box;
}
.order-l li{
	-webkit-box-flex: 1;
	max-width: 1.6875rem;
	height: 100%;
	margin: 0 0.3125rem;
	display: block;
	padding-top: 0.40625rem;
}
.order-l li a{
	height: 1.59375rem;
	display: block;
	position: relative;
}
.order-l li a p{
	height: 0.375rem;
	color: #626262;
	font-family: PingFangSC-Rwgular;
	font-size:0.375rem;
	text-align: center;
	letter-spacing: 0;
	margin-top: 0.3125rem;
}
.u-footer{
	padding-bottom: 1.53125rem;
}
.u-footer ul{
	background-color: #FFFFFF;
	padding-left: 0.46875rem;
	margin-bottom: 0.3125rem;
}
.u-footer ul li{
	border-bottom: solid 1px #EEEEEE;
	width: 100%;
	height: 1.375rem;
	position: relative;
}
.u-footer ul li:last-child{
	border-bottom: none;
}
.u-footer ul li div{
	line-height: 1.375rem;
	
}
.u-footer ul li div .f-img{
	width: 0.546875rem;
	height: 0.4375rem;
	margin-right: 0.3125rem;
	vertical-align: sub;
	float: left;
	position: absolute;
	top: 0.45rem;
	left: 0;
}
.u-footer ul li div .xiao{
	position: absolute;
	top: 0.55rem;
	right: 0.28rem;
}
.u-footer ul li div span{
	height: 0.40625rem;
	color: #333;
	font-size: 0.40625rem;
	letter-spacing: 0;
	float: left;
	padding-left: 0.86rem;
}
.u-footer ul li div .earn{
  color: #fa5e71;
  width: 100%;
  position: absolute;
  z-index: 2;
  top: 0;
  right: 0.46875rem;
  height: 100%;
  border: none;
  text-align: right;
  padding-right: 0.625rem;
}
.xiao{
	width: 0.31rem;
	height: 0.31rem;
}
</style>
