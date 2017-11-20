<template>
	<div class="login">		
		<header class="aui-bar aui-bar-nav aui-bar-light">
			<a href="javascript:" onclick="history.back(); " class="aui-pull-left aui-btn" >
				<span class="aui-iconfont aui-icon-left"></span>
			</a>
			<div class="aui-title aui-font-size-14" style="color:#fff">注册</div>
		</header>
		<ul>
			<li>账号:<input type="text" v-model="username"></li>
			<li>密码:<input type="password" v-model="password"></li>
			<input type="button" value="注册" class="btn" @click="login">
		</ul>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				username : "",
				password : ""
			}
		},
		methods : {
			login(){
				this.$http({
					url : "http://localhost:3000/reg",
					method : "post",
					data : {
						username : this.username,
            			password : this.password
					},
				}).then((res)=>{
					//console.log(res.data);
					if( res.data.error == 0 ){
						alert("注册成功");
			            this.$router.push({path:'/login'})
			       	}
					if( res.data.error == 1 ){
						if( res.data.msg == "用户名已存在" ){
							alert("用户名已存在");
							this.username = "";
							this.password = "";
						}else{
							alert("注册时库信息错误");
						}
					}
				}).catch((res)=>{
					console.log(res);
				})
			}
		}
	}
</script>
<style scoped>
	ul{
		margin-top: 100px;
		padding: 0 38px;
	}
	ul input{
		width: 300px;
		height: 30px;
		border: 1px solid #999;
	}
	ul li{
		margin-bottom: 20px;
	}
	.btn{
		width: 300px;
		height: 35px;
		background: #eb413d; 
		color: #fff; 
		text-align: center; 
		line-height: 35px; 
		border-radius: 5px; 
		margin-top: 20px;
		border: none;
	}
</style>