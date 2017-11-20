<template>
	<div class="footer">
		<footer class="aui-bar aui-bar-tab" id="footer" style="border-top:1px solid #ddd; background:#efefef">
			<router-link tag="div" class="aui-bar-tab-item" active-class="aui-active" to="/home">
				<a href="javascript:;">
					<i class="aui-iconfont aui-icon-home"></i>
					<div class="aui-bar-tab-label">首页</div>
				</a>
			</router-link>
			<router-link tag="div" class="aui-bar-tab-item" active-class="aui-active" to="/news">
				<a href="javascript:;">
					<i class="aui-iconfont aui-icon-like"></i>
					<div class="aui-bar-tab-label">要闻</div>
				</a>
			</router-link>
			<router-link tag="div" class="aui-bar-tab-item" active-class="aui-active" to="/video">
				<a href="javascript:;">
					<i class="aui-iconfont aui-icon-video"></i>
					<div class="aui-bar-tab-label">视频</div>
				</a>
			</router-link>
			<router-link tag="div" class="aui-bar-tab-item" active-class="aui-active" to="/user">
				<a href="javascript:;">
					<i class="aui-iconfont aui-icon-my"></i>
					<div class="aui-bar-tab-label">我的</div>
				</a>
			</router-link>			
		</footer>		
	</div>
</template>
<script></script>
<style>
	body{
		margin:0;
		padding:0;
	}
	.footer {
		width: 100%;
	}
</style>