<template>
	<div class="buycar">
		<header class="aui-bar aui-bar-nav aui-bar-light">
			<a href="javascript:" onclick="history.back(); " class="aui-pull-left aui-btn" >
				<span class="aui-iconfont aui-icon-left"></span>
			</a>
			<div class="aui-title aui-font-size-14" style="color:#fff">购物车</div>
		</header>
		<div class="news">			
			<dl v-for="(item,index) in buyCar" :key="item.id">
				<dt>{{item.title}}</dt>
				<dd>{{item.comment}}</dd>
				<dd>
					<input type="button" value="+" @click="changeItem({id:item.id,num:1})">
			        {{item.number}}
			        <input type="button" value="-" @click="changeItem({id:item.id,num:-1})">
			        <dd><input type="button" value="删除" @click="removeItem({id:item.id})"></dd>
				</dd>
			</dl>
			<input type="button" value="清空购物车" style="margin-left: 15px;" @click="clearBuycar">
		</div>
	</div>
</template>
<script>
	import {mapGetters,mapActions} from "vuex";
	export default{
		computed : mapGetters([
			"buyCar"
		]),
		methods : mapActions([
			"changeItem","removeItem","clearBuycar"
		])
	}
</script>
<style scoped>
	.news{
		margin-top: 50px;
	}
	.news dl{
		margin: 15px;
		border-bottom: 1px #ddd solid;
	}
	.news dl dt{
		font-weight: bold;
		margin-bottom: 5px;
	}
	.news dl dd{
		margin-bottom: 3px;
	}
	.news input{
		background: none;
	}
</style>
