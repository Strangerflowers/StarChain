
const express=require('express');
var request = require("request");
const bodyParser=require('body-parser')
// const email=require('./sendmail.js')
const path=require('path')
//定义后端静态服务器 
var app = express();

const db=require('./mongodb/model/mongodb_connect.js');

app.use(bodyParser.urlencoded({ extended: false }))


// 引入路由
// 开启静态服务

app.use(express.static(path.join(__dirname,'./')))

const goodsRouter=require('./mongodb/router/goods.js');




// app.post("/",(req,res)=>{
// 		//设置跨域权限
// 	   res.append("Access-Control-Allow-Origin","*");
		
// 		var res2 = req.body;
// 		console.log('res2=',res2)
		
// 	    // cors
// 	    // if(req.body==='catelist.do'){
// 		    request(`http://39.96.56.22:3000/goods/getGoods`,(err,response,body)=>{
// 		        // console.log(body);
		       
// 		        res.send(body);
// 		    });
// 	    // }else if(req.query.type==='categoodslist.do'){
// 	    // 	// res.append("Access-Control-Allow-Origin","*");
// 		   //  request(`https://api.380star.com/newbuyer/33/goods/${req.query.type}`,(err,response,body)=>{
// 		   //      // console.log(body);
		       
// 		   //      res.send(body);
// 		   //  });
// 	    // }
// });




// 使用路由
// app.use('/admin',adminRouter);
app.use('/goods',goodsRouter);


app.listen(3000);





















// // 服务器代理解决跨域问题
// app.get("/good/getGoods",(req,res)=>{
//     // cors
//     res.append("Access-Control-Allow-Origin","*");

//     request.get("http://localhost:3010/goods/getGoods",(err,response,body)=>{
//         console.log(body);
//         res.send(body);
//     })
     
// })

// app.all('*', (request, response, next) => {
//     response.setHeader('Access-Control-Allow-Origin', '*');
//     response.setHeader('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requeted-With');
//     response.setHeader('Access-Control-Allow-Methods', 'GET,POST, PUT, DELETE, OPTIONS');

//     if (request.method === 'OPTIONS') {
//         response.sendStatus(200);
//     } else {
//         next();
//     }
// });


// const adminRouter=require('./router/admin.js');







// // 静态资源目录
//  app.use('/dist',express.static(path.join(__dirname,'./dist')));
//  app.use(express.static(path.join(__dirname,'./img')));




//  app.get("/",(req,res)=>{
//         // cors
//         res.append("Access-Control-Allow-Origin","*");
//         request.get("https://api.380star.com/newbuyer/33/goods/searchKeywordList.do",(err,response,body)=>{
//             console.log(body);
//             res.send(body);
//         })
         
//     })

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




