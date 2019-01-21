<template>
   <div class="" id="page" style="">
    <header class="header">
        <a class="btn-back" href="javascript:window.history.back()"><i></i></a>
        
        <div class="title">注册</div>
    </header>
    <div class="login-form">
        <ul class="input-list">
            <li>
                <div class="input-item">
                    <i class="i-del" style="display: none;"></i>
                    <input type="text" name="phone" maxlength="11" placeholder="请输入账号">
                </div>
            </li>
            <li>
                <div class="input-item">
                    <input class="code" type="text" name="code" maxlength="6" placeholder="请输入验证码">
                    <a class="btn-smscode disable" href="javascript:;">获取验证码</a>
                    <a class="btn-smscode disable" href="javascript:;" style="display: none;">60秒后重新发送</a>
                    <a class="btn-smscode" href="javascript:;" style="display: none;">获取验证码</a>
                </div>
            </li>
            <li>
                <div class="input-item input-invitationNum">
                    <label>邀请码</label>
                    <input type="text" maxlength="15" placeholder="可选填">
                </div>
            </li>
        </ul>
        <ul class="row-agree">
            <li class="col-checked">
                <label class="ui-checkbox"><input type="checkbox" name="agree"></label>
            </li>
            <li class="col-info">同意<a href="registerAgree.html">星链用户注册协议</a></li>
        </ul>
        <div class="row-btn">
            <a class="btn btn-lg btn-active" href="javascript:;" style="display: none;">下一步</a>
            <a class="btn btn-lg btn-active btn-disable" href="javascript:;">下一步</a>
        </div>
    </div>
    <!--验证码弹层-->
    <div class="ui-dialog show" style="display: none;"><div class="ui-dialog-cnt"><div class="ui-dialog-bd"><div class="dialog-info captcha"><div class="captcha-input"><input type="text" maxlength="4" placeholder="请输入验证码"></div><div class="captcha-img"><img id="login_captcha" src=""></div></div></div> <div class="ui-dialog-ft ui-btn-group"><button type="button" data-role="button" class="select">取消</button><button type="button" data-role="button">提交</button></div></div></div>
    <!--弹层end-->
    <!--返回键 提示弹层-->
    <div class="ui-dialog show" style="display: none;">
        <div class="ui-dialog-cnt">
            <div class="ui-dialog-bd">
                <div class="dialog-info captcha">确定返回？退出此页面后，先前发送的验证码将失效。</div>
            </div>
            <div class="ui-dialog-ft ui-btn-group">
                <button type="button" data-role="button" class="select">取消</button><button type="button" data-role="button">确定</button>
            </div>
        </div>
    </div>
    <!--弹层end-->

</div>
</template>
<script>

export default {
    
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
.login-form{
	padding: 0.46875rem;
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
.login-form .row-agree{
	padding: 0.3125rem 0 0.3125rem 0;
	display: -webkit-box;
	-webkit-box-align: center;
	-moz-box-align: center;
}
.login-form .row-agree li{
	font-size: 0.375rem;
	line-height: 0.46875rem;
}
.login-form .row-agree li.col-checked{
	width: 0.546875rem;
}
.login-form .row-agree li.col-info{
	padding-left: 0.078215rem;
	color: #B2B2B2;
}
.login-form .row-agree li.col-info a{
	color: #FA5E71;
}
.login-btn .row-btn{
	padding-top: 1.25rem;
}
.btn.btn-lg{
	width: 100%;
	height: 1.28125rem;
	line-height: 1.25rem;
	font-size: 0.7375rem;
	border-radius: 0.125rem;
}
.btn-active{
	background-color: #FA5E71;
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