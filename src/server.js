/*
 * 后端接口，用于请求数据
 */

//引入express和request
var express = require('express');
var request = require('request');

//定义后端静态服务器 
var app = express();
	app.get("/",(req,res)=>{
		//设置跨域权限
	   res.append("Access-Control-Allow-Origin","*");
		
		var res2 = req.query;
		console.log('res2=',res2)
		console.log('res2=',req.query.nav)

	    // cors
	    if(req.query.nav==='catelist.do'){
		    request(`https://api.380star.com/newbuyer/33/goods/${req.query.nav}`,(err,response,body)=>{
		        // console.log(body);
		       
		        res.send(body);
		    });
	    }else if(req.query.type==='categoodslist.do'){
	    	// res.append("Access-Control-Allow-Origin","*");
		    request(`https://api.380star.com/newbuyer/33/goods/${req.query.type}`,(err,response,body)=>{
		        // console.log(body);
		       
		        res.send(body);
		    });
	    }
});


app.listen(12345)