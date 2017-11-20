<template>
	<div class="home">
		<div class="aui-header">
			<div class="aui-header-box clearfix">
				<div class="aui-header-logo">
					<a href="javascript:;">
						<img src="../assets/img/logo/logo.png" alt="">
					</a>
				</div>
				<div class="aui-header-sou">
					<router-link to="/search">
						<span><i class="aui-iconfont aui-icon-search"></i></span>
					</router-link>
				</div>
			</div>
			<div class="swiper-container swiper1 b-line">
				<div class="swiper-wrapper">
					<div class="swiper-slide selected">推荐</div>
					<div class="swiper-slide">热点</div>
					<div class="swiper-slide">时尚</div>
					<div class="swiper-slide">社会</div>
					<div class="swiper-slide">国际</div>
					<div class="swiper-slide">娱乐</div>
				</div>
			</div>
		</div>
		<div class="swiper-container swiper2" style="padding-top:85px; padding-bottom:49px;">
				<div class="swiper-wrapper">
					<div class="swiper-slide swiper-no-swiping">
						<transition-group 
							enter-active-class="animated zoomIn"
						>
							<section class="aui-middle-dome" 
								v-for="(item,index) in list" 
								:key="item.id"
							>
								<router-link :to="'/detail/'+item.id" data-action-label="click-a" data-tag="news" class="aui-middle-dome-a">
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
								<i class="aui-iconfont aui-icon-like aui-text-warning" @click="addItem(item)"></i>
							</section>
						</transition-group>
					</div>
					<div class="swiper-slide swiper-no-swiping">
						<section class="aui-middle-dome">
							<router-link to="/detail/5" data-action-label="click-a" data-tag="news" class="aui-middle-dome-a">
								<div class="aui-middle-dome-title">
									<h3>不要被白手起家的富豪们欺骗，他们的父亲身份也是成功的关键</h3>
									<div class="aui-middle-dome-text">
										<div class="clearfix">
											<span class="aui-top box-line">置顶</span>
											<span class="aui-title">央视网新闻</span>
											<span class="aui-comment">评论 359980</span>
										</div>
									</div>
								</div>
								<div class="aui-middle-dome-img">
									<img src="../assets/img/ad/d4.jpg" alt="">
								</div>
							</router-link>
						</section>
					</div>	
					<div class="swiper-slide swiper-no-swiping">
						<section class="aui-middle-dome">
							<a href="javascript:;" data-action-label="click-a" data-tag="news" class="aui-middle-dome-a">
								<div class="aui-middle-dome-list-box">
									<h3>孙俪是机场街拍的一股泥石流，别人是在走秀，她是真的在赶飞机！</h3>
									<div class="aui-middle-dome-list">
										<ul class="clearfix">
											<li>
												<img src="../assets/img/ad/a6.jpg" alt="">
											</li>
											<li>
												<img src="../assets/img/ad/a7.jpg" alt="">
											</li>
											<li>
												<img src="../assets/img/ad/a8.jpg" alt="">
											</li>
										</ul>
									</div>
									<div class="aui-middle-dome-text">
										<div class="clearfix">
											<span class="aui-top box-line">热门</span>
											<span class="aui-title">星见娱乐</span>
											<span class="aui-title">评论 67834</span>
										</div>
									</div>
								</div>
							</a>
						</section>
						<section class="aui-middle-dome">
							<a href="javascript:;" data-action-label="click-a" data-tag="news" class="aui-middle-dome-a">
								<div class="aui-middle-dome-list-box">
									<h3>路人镜头下的迪丽热巴气质输给娜扎，赵丽颖范冰冰刘亦菲现原形！</h3>
									<div class="aui-middle-dome-list">
										<ul class="clearfix">
											<li>
												<img src="../assets/img/ad/a9.jpg" alt="">
											</li>
											<li>
												<img src="../assets/img/ad/a10.jpg" alt="">
											</li>
											<li>
												<img src="../assets/img/ad/a11.jpg" alt="">
											</li>
										</ul>
									</div>
									<div class="aui-middle-dome-text">
										<div class="clearfix">
											<span class="aui-title">星见娱乐</span>
											<span class="aui-title">评论 67834</span>
										</div>
									</div>
								</div>
							</a>
						</section>
						<section class="aui-middle-dome">
							<a href="javascript:;" data-action-label="click-a" data-tag="news" class="aui-middle-dome-a">
								<div class="aui-middle-dome-list-box">
									<h3>赵丽颖哪点不如王子文？刚代言迪奥半个月就要面临被替换</h3>
									<div class="aui-middle-dome-list">
										<ul class="clearfix">
											<li>
												<img src="../assets/img/ad/a12.jpg" alt="">
											</li>
											<li>
												<img src="../assets/img/ad/a13.jpg" alt="">
											</li>
											<li>
												<img src="../assets/img/ad/a14.jpg" alt="">
											</li>
										</ul>
									</div>
									<div class="aui-middle-dome-text">
										<div class="clearfix">
											<span class="aui-top box-line">热门</span>
											<span class="aui-title">星见娱乐</span>
											<span class="aui-title">评论 67834</span>
										</div>
									</div>
								</div>
							</a>
						</section>
						<section class="aui-middle-dome">
							<a href="javascript:;" data-action-label="click-a" data-tag="news" class="aui-middle-dome-a">
								<div class="aui-middle-dome-list-box">
									<h3>李晨导演的《空天猎》扑街，吴京对《空天猎》的票房说了四个字！</h3>
									<div class="aui-middle-dome-list">
										<ul class="clearfix">
											<li>
												<img src="../assets/img/ad/a15.jpg" alt="">
											</li>
											<li>
												<img src="../assets/img/ad/a16.jpg" alt="">
											</li>
											<li>
												<img src="../assets/img/ad/a17.jpg" alt="">
											</li>
										</ul>
									</div>
									<div class="aui-middle-dome-text">
										<div class="clearfix">
											<span class="aui-title">星见娱乐</span>
											<span class="aui-title">评论 67834</span>
										</div>
									</div>
								</div>
							</a>
						</section>
						<section class="aui-middle-dome">
							<a href="javascript:;" data-action-label="click-a" data-tag="news" class="aui-middle-dome-a">
								<div class="aui-middle-dome-list-box">
									<h3>去了趟时装周赵丽颖就变成这样了，这是被感染了吗？这还是我们认识的赵丽颖吗？你怎么看？？？</h3>
									<div class="aui-middle-dome-list">
										<ul class="clearfix">
											<li>
												<img src="../assets/img/ad/a18.jpg" alt="">
											</li>
											<li>
												<img src="../assets/img/ad/a19.jpg" alt="">
											</li>
											<li>
												<img src="../assets/img/ad/a20.jpg" alt="">
											</li>
										</ul>
									</div>
									<div class="aui-middle-dome-text">
										<div class="clearfix">
											<span class="aui-top box-line">热门</span>
											<span class="aui-title">星见娱乐</span>
											<span class="aui-title">评论 67834</span>
										</div>
									</div>
								</div>
							</a>
						</section>
						<section class="aui-middle-dome">
							<a href="javascript:;" data-action-label="click-a" data-tag="news" class="aui-middle-dome-a">
								<div class="aui-middle-dome-list-box">
									<h3>李晨导演的《空天猎》扑街，吴京对《空天猎》的票房说了四个字！</h3>
									<div class="aui-middle-dome-list">
										<ul class="clearfix">
											<li>
												<img src="../assets/img/ad/a15.jpg" alt="">
											</li>
											<li>
												<img src="../assets/img/ad/a16.jpg" alt="">
											</li>
											<li>
												<img src="../assets/img/ad/a17.jpg" alt="">
											</li>
										</ul>
									</div>
									<div class="aui-middle-dome-text">
										<div class="clearfix">
											<span class="aui-title">星见娱乐</span>
											<span class="aui-title">评论 67834</span>
										</div>
									</div>
								</div>
							</a>
						</section>
					</div>		
					<div class="swiper-slide swiper-no-swiping">
						<section class="aui-middle-dome">
							<router-link to="/detail/2" data-action-label="click-a" data-tag="news" class="aui-middle-dome-a">
								<div class="aui-middle-dome-title">
									<h3>开封七旬老汉8岁就跟着父亲炸鸡蛋油条 老了成了明星 大家每天都在这里买油条</h3>
									<div class="aui-middle-dome-text">
										<div class="clearfix">
											<span class="aui-top box-line">置顶</span>
											<span class="aui-title">央视网新闻</span>
											<span class="aui-comment">评论 678990</span>
										</div>
									</div>
								</div>
								<div class="aui-middle-dome-img">
									<img src="../assets/img/ad/a1.jpg" alt="">
								</div>
							</router-link>
						</section>
					</div>
					<div class="swiper-slide swiper-no-swiping">
						<section class="aui-middle-dome">
							<router-link to="/detail/4" data-action-label="click-a" data-tag="news" class="aui-middle-dome-a">
								<div class="aui-middle-dome-title">
									<h3>四大天王都老了！张学友一脸皱纹，郭富城像风流公子，黎明被低估</h3>
									<div class="aui-middle-dome-text">
										<div class="clearfix">
											<span class="aui-top box-line">置顶</span>
											<span class="aui-title">央视网新闻</span>
											<span class="aui-comment">评论 678990</span>
										</div>
									</div>
								</div>
								<div class="aui-middle-dome-img">
									<img src="../assets/img/ad/a4.jpg" alt="">
								</div>
							</router-link>
						</section>
					</div>
					<div class="swiper-slide swiper-no-swiping">
						<section class="aui-middle-dome">
							<router-link to="/detail/3" data-action-label="click-a" data-tag="news" class="aui-middle-dome-a">
								<div class="aui-middle-dome-title">
									<h3>关晓彤热恋鹿晗早有暗示？江疏影7月就爆料了</h3>
									<div class="aui-middle-dome-text">
										<div class="clearfix">
											<span class="aui-top box-line">置顶</span>
											<span class="aui-title">央视网新闻</span>
											<span class="aui-comment">评论 678990</span>
										</div>
									</div>
								</div>
								<div class="aui-middle-dome-img">
									<img src="../assets/img/ad/a2.jpg" alt="">
								</div>
							</router-link>
						</section>
					</div>					
				</div>
		</div>
	</div>
</template>
<script>
	import {mapActions} from "vuex";
	export default{
		data(){
			return {
				list : []
			}
		},
		mounted(){
		  	$(function() {
		        function setCurrentSlide(ele, index) {
		            $(".swiper1 .swiper-slide").removeClass("selected");
		            ele.addClass("selected");
		        }

		        var swiper1 = new Swiper('.swiper1',{
	
		            slidesPerView: 5.5,
		            paginationClickable: true,
		            spaceBetween: 1,
		            freeMode: true,
		            loop: false,
		            onTab: function(swiper) {
		                var n = swiper1.clickedIndex;
		            }
		        });
		        swiper1.slides.each(function(index, val) {
		            var ele = $(this);
		            ele.on("click", function() {
		                setCurrentSlide(ele, index);
		                swiper2.slideTo(index, 500, false);
		            });
		        });

		        var swiper2 = new Swiper('.swiper2',{
		            direction: 'horizontal',
		            loop: false,
		            //					effect : 'fade',//淡入
		            //effect : 'cube',//方块
		            //effect : 'coverflow',//3D流
		            //					effect : 'flip',//3D翻转
		            autoHeight: true,
		            onSlideChangeEnd: function(swiper) {
		                //回调函数，swiper从一个slide过渡到另一个slide结束时执行。
		                var n = swiper.activeIndex;
		                setCurrentSlide($(".swiper1 .swiper-slide").eq(n), n);
		                swiper1.slideTo(n, 500, false);
		            }
		        });
	    	});
	    	this.$http({
	    		url : "http://localhost:3000/",
	    		method : "get"
	    	}).then((res)=>{
		    	this.list = res.data;	    			
	    	}).catch((res)=>{
	    		console.log(res);
	    	})
		},
		methods : mapActions([
			"addItem"
		])					
	}
</script>
<style scoped>
	@import "../assets/css/public.css";
	.home {
		width: 100%;
	}
</style>