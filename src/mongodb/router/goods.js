const express=require('express');
const Router =express.Router();
const Goods=require('../model/goods.js');
const bodyParser=require('body-parser');


/**
 * @api {post} /goods/addGoods/ addGoods
 * @apiName addGoods
 * @apiGroup goods
 *
 * @apiParam {String} name  商品名称
 * @apiParam {String} type 商品类型
 * @apiParam {String} desc 商品描述
 * @apiParam {String} price 商品价格
 * @apiParam {String} imgpath 图片地址
 * @apiParam {Number} stock 商品余额
 *
 * @apiSuccess {Number} err 错误码 0：ok -1 失败
 * @apiSuccess {String} msg  结果信息
 * @apiSuccess {String} data  返回数据
 */
// 增加商品路由
Router.post('/addGoods',bodyParser.urlencoded({ extended: false }),(req,res)=>{
	res.append("Access-Control-Allow-Origin", "*")
	// 1接收数据
	let {name,type,desc,price,imgpath,stock}=req.body;
	console.log(111)
	Goods.insertMany({name,type,desc,price,imgpath,stock})
	.then((data)=>{
		// res.send(data)
		res.send({err:0,msg:'插入成功',data:null})
	})
	.catch((err)=>{
		console.log(err)
		// res.send('插入错误')
		res.send({err:-1,mag:'插入失败',data:null});
	})

})


module.exports=Router;
