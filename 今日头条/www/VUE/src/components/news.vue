<template>
	<div class="news">
		<!-- 头部信息 begin -->
		<div class="aui-header">
			<div class="aui-header-box clearfix">
				<div class="aui-header-logo">
					<a href="javascript:;">
						<img src="../assets/img/logo/logo-news.png" alt="">
					</a>
				</div>
			</div>
		</div>
		<!-- 头部信息 end -->

		<!-- 内容信息 begin -->
		<div style="padding-top:45px; padding-bottom:49px;">
			<div class="aui-card-list">
				<div class="aui-card-list-header aui-card-list-user">
					<div class="aui-card-list-user-avatar">
						<img src="../assets/img/ad/f-n0.jpg" class="aui-img-round">
					</div>
					<div class="aui-card-list-user-name">
						<div class="aui-text-info">胖子</div>
						<div class="aui-font-size-12 text-light">新闻圈</div>
					</div>
					<div class="aui-card-list-user-info text-light">31分钟前</div>
				</div>
				<div class="aui-card-list-content-padded aui-padded-t-5 aui-padded-b-5">
					近日，俄军最高统帅部组织了第五届全军炮兵旅预备队实地演练，出动了大批重型火炮，其中就包括当今口径最大的自行迫击炮——2S4“郁金香”240毫米自行迫击炮。本图集就此解读。
				</div>
				<div class="aui-card-list-content" style="padding:0 10px;">
					<div class="aui-row aui-row-padded">
						<div class="aui-col-xs-12">
							<img src="../assets/img/ad/f-n0.jpg">
						</div>
					</div>
				</div>
				<div class="aui-card-list-footer text-light size-color">
					<div>
						<i class="aui-iconfont aui-icon-display"></i> 888
					</div>
					<div>
						<i class="aui-iconfont aui-icon-comment"></i> 666
					</div>
					<div>
						<i class="aui-iconfont aui-icon-laud"></i> 888
					</div>
				</div>
			</div>
			<section class="aui-middle-dome"
				v-for="(item,index) in list"
				:key="item.id"
			>
				<router-link :to="'/newsdetail/'+item.id" data-action-label="click-a" data-tag="news" class="aui-middle-dome-a">
					<div class="aui-middle-dome-title">
						<h3>{{item.title}}</h3>
						<div class="aui-middle-dome-text">
							<div class="clearfix">
								<span class="aui-top box-line">{{item.pic}}</span>
								<span class="aui-title">央视网新闻</span>
								<span class="aui-comment">{{item.comment}}</span>
							</div>
						</div>
					</div>
					<div class="aui-middle-dome-img">
						<img :src="item.src" alt="">
					</div>
				</router-link>
			</section>			
		</div>
		<!-- 内容信息 end -->
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
	    	this.$http({
	    		url : "http://localhost:3000/news",
	    		method : "get"
	    	}).then((res)=>{	    	
		    	this.list = res.data;	    			    			
	    	}).catch((res)=>{
	    		console.log(res);
	    	})
		}
	}
</script>

