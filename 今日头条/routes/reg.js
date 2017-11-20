let express = require('express');

module.exports = function(db){
  let router = express.Router();
  
  router.post('/',(req,res)=>{
  	console.log(req.body);
  	let sql = `select * from user where username="${req.body.username}"`;
  	db.query(sql,(err,data)=>{
  		if(!err){
  			if( data.length > 0 ){
  				res.send({error:1,msg:"用户名已存在"});
  			}else{
  				let sql = `insert into user(id,username,password) values(0,"${req.body.username}","${req.body.password}")`;
  				db.query(sql,(err,data)=>{
  					if(!err){
  						res.send({error:0,msg:"注册成功"});
  					}else{
  						res.send({error:1,msg:"注册时库信息错误"});
  					}
  				})
  			}  			
  		}
  	})
  });
  
  return router;
};
