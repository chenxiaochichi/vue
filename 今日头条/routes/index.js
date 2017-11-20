let express = require('express');

module.exports = function(db){
  let router = express.Router();
  
  router.get('/',(req,res)=>{
//  console.log(db);
//	res.send('index...');
  	//兜库
  	let sql = `select * from home`;
  	db.query(sql,(err,data)=>{
  		if(err){
  			res.send("数据库错误");
  		}else{
  			//console.log(data);//命令行打印
  			res.send(data);//浏览器页面上
  		}
  	})
  });
  
  return router;
};