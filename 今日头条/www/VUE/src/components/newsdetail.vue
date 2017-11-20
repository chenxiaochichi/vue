<template>
	<div class="detail">
		<header class="aui-bar aui-bar-nav aui-bar-light">
			<router-link to="/news" class="aui-pull-left aui-btn" >
				<span class="aui-iconfont aui-icon-left"></span>
			</router-link>
			<div class="aui-title">新闻列表</div>
			<a class="aui-pull-right aui-btn ">
				<span class="aui-iconfont aui-icon-more"></span>
			</a>
		</header>
		<div class="aui-main">
			<article class="article padding-side">
				<div>
					<h1 class="article-title">{{list.title}}</h1>
				</div>
				<div class="article-content">
					<p>{{list.content}}</p>
					<p><img :src="list.src" alt=""></p>
					<p>{{list.main}}</p>
				</div>
			</article>
		</div>
	</div>
</template>
<script>
	export default{
		data(){
			return {
				list : []
			}
		},
		mounted(){
			//console.log(this.$route.params.id);
			this.$http({
				url : "http://localhost:3000/newsdetail",
				method : "post",
				data : {
					id : this.$route.params.id
				}
			}).then((res)=>{
				//console.log(res.data);
				this.list = res.data;
			}).catch((res)=>{
				console.log(res)
			})
		}
	}
</script>
<style></style>
