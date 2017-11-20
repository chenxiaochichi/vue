let express = require('express');

module.exports = function(db){
  let router = express.Router();
  
  router.post('/',(req,res)=>{
  	//res.send("newsdetail...");
  	//兜库
  	//console.log(req.body.id);
  	let sql = `select * from newsdetail where id="${req.body.id}"`;
  	db.query(sql,(err,data)=>{
  		if(err){
  			res.send("数据库错误");
  		}else{
  			res.send(data[0]);
  		}
  	})
  });
  
  return router;
};
