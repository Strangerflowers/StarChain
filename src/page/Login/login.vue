<template>
   <div class="" id="page" style="">
    <header class="header">
        <a class="btn-back" href="javascript:window.history.back();"><i></i></a>
        <div class="title">登录</div>
        <div class="right-info">
            <a class="fun-txt" @click="gotoReg">注册</a>
        </div>
    </header>
    <div class="login-form">
        <ul class="input-list">
            <li>
                <div class="input-item">
                    <i class="i-del" style="display: none;"></i>
                    <input type="text" name="phone" maxlength="11"
					@input="inputname"
					 v-model="user"
					 placeholder="请输入账号">
                </div>
            </li>
            <li>
                <div class="input-item">
                    <i class="i-see"></i>
                    <!-- <input type="text" name="pwd" placeholder="请输入密码" style="display: none;"> -->
                    <input type="password" name="pwd"
					 placeholder="请输入密码"
					 v-model="pwd"
					 >
                </div>
            </li>
        </ul>
        <p class="prompt">可使用星链云店或星链钱包账号登录</p>
        <div class="row">
            <!-- <a class="btn btn-lg btn-active btn-disable login" @click="btnLogin">登录</a> -->
            <p class="dengle" @click="btnLogin">登录</p>
        </div>
        <ul class="row-action">
            <li><a>忘记密码</a></li>
        </ul>
    </div>
</div>
</template>
<script>

export default {
    data(){
		return {
			user:"",
			pwd:''
		}
	},
	methods:{
		gotoReg(){
			this.$router.push({name:'Register'})
		},
		inputname(){
			
			console.log(this.user)
		},
		btnLogin(){
			
				sessionStorage.setItem('token',this.user);
				console.log('this.$route.query.redirect',this.$route.query.redirect)
				this.$router.push(this.$route.query.redirect);
				 // 跳转至前一页，this.$route.query.redirect是获取上面传递过来的值
				// this.$router.push({name:'Cart'})
				
		
		}
	}
}
</script>
<style lang="scss" scoped>
.header{
	height: 1.375rem;
	background-color: #FFFFFF;
	position: relative;
	width: 100%;
	border-bottom: solid 1px #EEEEEE;
	padding: 0 1.6875rem 0 1.375rem;
}
.header a.btn-back{
	position: absolute;
	left: 0;
	top: 0;
	height: 1.375rem;
	width: 0.859375rem;
	display: block;
	z-index: 2;
	padding: 0.40625rem 0 0 0.3125rem;
}
.header a.btn-back i{
	display: block;
	width: 0.328125rem;
	height: 0.5625rem;
	background:url("https://m.380star.com/qrqd/images/common/common_nav_btn_back@2x.png") no-repeat 0 0;
	background-size: 100% 100%;
}
.header .title{
	white-space: nowrap;
	text-overflow: ellipsis;
	overflow: hidden;
	text-align: center;
	font-size: 0.5rem;
	line-height: 1.45rem;
	color: #333333;
}
.header .right-info{
	text-align: right;
	position: absolute;
	right: 0.3125rem;
	top: 0;
	z-index: 2;
}
.header .right-info .fun-txt{
	font-size: 0.4375rem;
	line-height: 1.375rem;
	padding: 0 0;
}
.header .right-info a{
	display: block;
	float: right;
	cursor: pointer;
}
.login-form{
	padding: 0.46875rem;
}
.input-list li{
	margin-bottom:rem(10px);
	border:1px solid #ccc;
	border-radius:rem(5px);
}
.input-list li input{
	width:rem(300px);
	padding:rem(10px) rem(0px) rem(10px) rem(0px);
	background:#f7f7f7;

}
.input-item{
	font-size: 0.40625rem;
	position: relative;
	height: 1.375rem;
	line-height: 1.375rem;
	padding: 0 0.46875rem;
	border-radius: 0.125rem;
	background-color: #F7F7F7;
}
.login-form .prompt{
	padding-left: 0.46875rem;
	font-size: 0.40625rem;
	color: #B2B2B2;
}
.login-btn .row-btn{
	padding-top: 1.25rem;
}
.row .dengle{
	font-size:rem(20px);
	color:#999;
	height:rem(50px);
	line-height:rem(50px);
	border:1px solid #ccc;
	border-radius:rem(5px);
	background:#fa5e71;
	color:#f7f7f7;
	margin-top:rem(20px);
}
.btn.btn-lg{
	width: 100%;
	height: 1.28125rem;
	line-height: 1.25rem;
	font-size: 0.7375rem;
	border-radius: 0.125rem;
}
.login-form .row-action{
	display: -webkit-box;
	-webkit-box-pack: justify;
	-moz-box-pack: justify;
}
.login-form .row-action li{
	color: #FA5E71;
	line-height: 1.735rem;
	padding: 0 0.78125rem;
	font-size: 0.40625rem;
}
.login-form .row-action li a{
	color: #FA5E71;
}
.btn{
	min-width: 2.34375rem;
	display: inline-block;
	border-radius: 0.125rem;
	text-align: center;
	font-size: 0.375rem;
	height: 0.84375rem;
	line-height: 0.84375rem;
	color: #FFFFFF;
	padding: 0 0.15625rem;
	border: none;
}
</style>