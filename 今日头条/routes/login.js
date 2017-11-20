let express = require('express');

module.exports = function(db){
  let router = express.Router();
  
  router.post('/',(req,res)=>{
  	//console.log(req.body);
  	let sql = `select * from user where username="${req.body.username}"`;
  	db.query(sql,(err,data)=>{
  		if(err){
  			res.send("登录时数据库错误");
  		}else{
  			if( data.length > 0 ){
  				if( data[0].password == req.body.password ){
  					req.session["user_id"] = data[0].id;
  					res.send({error:0,msg:'登录成功'});
  				}else{
  					res.send({error:1,msg:'用户名与密码不符'});
  				}
  			}else{
  				res.send({error:1,msg:'用户名不存在'});
  			}
  		}
  	})
  });
  
  return router;
};
