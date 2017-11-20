<template>
	<div class="user">
		<section class="aui-content" id="user-info" >
			<div class="aui-list aui-media-list aui-list-noborder aui-bg-info" style="padding:14px 0">
				<div class="aui-list-item aui-list-item-middle" style="background-image:none">
					<div class="aui-media-list-item-inner ">
						<div class="aui-list-item-media" style="width:3rem;">
							<img src="../assets/img/ad/tou2.jpg" class="aui-img-round">
						</div>
						<div class="aui-list-item-inner aui-list-item-arrow">
							<div class="aui-list-item-text text-white aui-font-size-18" style="color:#fff">欢迎亲的到来</div>
							<div class="aui-list-item-text text-white">
								<div style="color:#fff">
									<router-link tag="span" to="/login" style="margin-right: 15px">登录</router-link>
									<router-link tag="span" to="/reg">注册</router-link>	
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="aui-row aui-clear-cl ">
					<div class="aui-col-xs-4 aui-border-r">
						<router-link to="/newest">
							<div class="aui-clear-cl1">3435</div>
							<div class="aui-gird-lable aui-font-size-12">动态</div>
						</router-link>
					</div>
					<div class="aui-col-xs-4 aui-border-r">
						<router-link to="/follow">
							<div class="aui-clear-cl1">433545</div>
							<div class="aui-gird-lable aui-font-size-12">关注</div>
						</router-link>
					</div>
					<div class="aui-col-xs-4">
						<router-link to="/fans">
							<div class="aui-clear-cl1">67809</div>
							<div class="aui-gird-lable aui-font-size-12">粉丝</div>
						</router-link>
					</div>
				</div>
			</div>
		</section>
		<section class="aui-content aui-content-size">
			<div class="aui-grid">
				<div class="aui-row">
					<div class="aui-col-xs-3">
						<router-link to="/subscribe">
							<i class="aui-iconfont aui-icon-mail aui-text-info"></i>
							<div class="aui-grid-label">订阅</div>
						</router-link>
					</div>
					<div class="aui-col-xs-3">
						<router-link to="/collection">
							<i class="aui-iconfont aui-icon-like aui-text-warning"></i>
							<div class="aui-grid-label">收藏</div>
						</router-link>
					</div>
					<div class="aui-col-xs-3">
						<router-link to="/comment">
							<i class="aui-iconfont aui-icon-pencil aui-text-warning"></i>
							<div class="aui-grid-label">跟帖</div>
						</router-link>
					</div>
					<div class="aui-col-xs-3">
						<router-link to="/read">
							<i class="aui-iconfont aui-icon-date aui-text-info"></i>
							<div class="aui-grid-label">阅读</div>
						</router-link>
					</div>
	
				</div>
			</div>
		</section>
		<div class="aui-he"></div>
		<section class="aui-content" style="padding-bottom:50px;">
			<ul class="aui-list aui-list-in " style="background-image:none">
				<li class="aui-list-item" style="background-image:none">
					<router-link to="/info">
						<div class="aui-list-item-label-icon">
							<i class="aui-iconfont aui-icon-location aui-text-info"></i>
						</div>
						<div class="aui-list-item-inner aui-list-item-arrow">
							<div class="aui-list-item-title aui-black">我的消息</div>
						</div>
					</router-link>
				</li>
				<div class="aui-he"></div>
				<li class="aui-list-item" style="background-image:none">
					<router-link to="/newest">
						<div class="aui-list-item-label-icon">
							<i class="aui-iconfont aui-icon-like aui-text-danger"></i>
						</div>
						<div class="aui-list-item-inner aui-list-item-arrow">
							<div class="aui-list-item-title aui-black">最新动态</div>
						</div>
					</router-link>
				</li>
				<div class="aui-he"></div>
				<li class="aui-list-item" style="background-image:none">
					<router-link to="/off">
						<div class="aui-list-item-label-icon">
							<i class="aui-iconfont aui-icon-image aui-text-info"></i>
						</div>
						<div class="aui-list-item-inner aui-list-item-arrow">
							<div class="aui-list-item-title aui-black">离线阅读</div>
						</div>
					</router-link>
				</li>
				<div class="aui-he"></div>
				<li class="aui-list-item" style="background-image:none">
					<router-link to="/buycar">
						<div class="aui-list-item-label-icon">
							<i class="aui-iconfont aui-icon-cart aui-text-info"></i>
						</div>
						<div class="aui-list-item-inner aui-list-item-arrow">
							<div class="aui-list-item-title aui-black">积分商城</div>
							<div class="aui-list-item-right aui-black">{{buyCar.length?buyCar.length:"0"}}</div>
						</div>
					</router-link>
				</li>
				<div class="aui-he"></div>
				<li class="aui-list-item" style="background-image: none">
					<router-link to="/advice">
						<div class="aui-list-item-label-icon">
							<i class="aui-iconfont aui-icon-cert aui-text-warning"></i>
						</div>
						<div class="aui-list-item-inner aui-list-item-arrow">
							<div class="aui-list-item-title aui-black">意见反馈</div>
						</div>
					</router-link>
				</li>
				<div class="aui-he"></div>
			</ul>
		</section>
	</div>
</template>
<script>
	import {mapGetters} from "vuex";
	export default{
		computed : mapGetters([
			"buyCar"
		])
	}
</script>

