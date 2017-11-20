<template>		
	<div id="app">
		<!--调用组件-->
		<loading v-show="bLoading"></loading>
		<router-view></router-view>
		<footerbar></footerbar>
	</div>		
</template>

<script>
	//引入组件
	import footerbar from "./components/footerbar.vue";
	import home from "./components/home.vue";
	import {mapGetters} from "vuex";
	
	export default {
		name: 'app',
		  data () {
		    return {
		      
		    } 
		},
		components:{//挂载组件
		  	home,footerbar
		},
		computed:mapGetters([
			"bLoading"
		])/*,
		mounted(){
		  	this.routeChange(this.$route);//刷新后，在mounted时，取到路由对象
		},
		methods:{
		  	routeChange(route){
			    let path=route.path;
			    if(/home/.test(path)){
			        this.$store.dispatch('showNav');
			    }
		    }
		},
		watch:{
			$route(route){//route==一路由信息对象
      			this.routeChange(route);
    		}
		}*/	  
	}
</script>


