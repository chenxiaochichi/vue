let express = require('express');

module.exports = function(db){
  let router = express.Router();
   
  router.post('/',(req,res)=>{
  	//res.send("detail...");
  	//兜库
  	//console.log(req.body.id);
  	let sql = `select * from details where id="${req.body.id}"`;
  	db.query(sql,(err,data)=>{
  		if(err){
  			res.send("数据库错误");
  		}else{
  			res.send(data[0]);//返回的数组取第一项
  		}
  	})
  });
  
  return router;
};
