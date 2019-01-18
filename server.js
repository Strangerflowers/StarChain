

//引入express和request
var express = require('express');
var request = require('request');
const path =require('path');
const bodyParser = require('body-parser');



//定义后端静态服务器 
var app = express();

// 静态资源目录
 app.use('/dist',express.static(path.join(__dirname,'./dist')));
 app.use(express.static(path.join(__dirname,'./img')));




 app.get("/",(req,res)=>{
        // cors
        res.append("Access-Control-Allow-Origin","*");
        request.get("https://api.380star.com/newbuyer/33/goods/searchKeywordList.do",(err,response,body)=>{
            console.log(body);
            res.send(body);
        })
         
    })




// 	app.get("/",(req,res)=>{
// 		//设置跨域权限
// 	   res.append("Access-Control-Allow-Origin","*");
		
// 		var res2 = req.query;
// 		console.log('res2=',res2)
// 		console.log('res2=',req.query.nav)

// 	    // cors
// 	    if(req.query.nav==='catelist.do'){
// 		    request(`https://api.380star.com/newbuyer/33/goods/${req.query.nav}`,(err,response,body)=>{
// 		        // console.log(body);
		       
// 		        res.send(body);
// 		    });
// 	    }else if(req.query.type==='categoodslist.do'){
// 	    	// res.append("Access-Control-Allow-Origin","*");
// 		    request(`https://api.380star.com/newbuyer/33/goods/${req.query.type}`,(err,response,body)=>{
// 		        // console.log(body);
		       
// 		        res.send(body);
// 		    });
// 	    }
// });


app.listen(3000);

