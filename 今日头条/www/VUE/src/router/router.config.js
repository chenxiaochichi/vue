import home from "../components/home.vue";
import news from "../components/news.vue";
import video from "../components/video.vue";
import user from "../components/user.vue";
import reg from "../components/reg.vue";
import login from "../components/login.vue";
import error from "../components/error.vue";
import detail from "../components/detail.vue";
import newsdetail from "../components/newsdetail.vue";
import advice from "../components/my-advice.vue";
import collection from "../components/my-collection.vue";
import comment from "../components/my-comment.vue";
import fans from "../components/my-fans.vue";
import follow from "../components/my-follow.vue";
import info from "../components/my-info.vue";
import newest from "../components/my-newest.vue";
import off from "../components/my-off.vue";
import read from "../components/my-read.vue";
import subscribe from "../components/my-subscribe.vue";
import search from "../components/search.vue";
import buycar from "../components/buycar.vue";


const routes = [
	{path:"/home",component:home},
	{path:"/news",component:news},
	{path:"/video",component:video},
	{path:"/search",component:search},
	{path:"/user",component:user},
	{path:"/reg",component:reg},
	{path:"/login",component:login},
	{path:"/advice",component:advice},
	{path:"/collection",component:collection},
	{path:"/comment",component:comment},
	{path:"/fans",component:fans},
	{path:"/follow",component:follow},
	{path:"/info",component:info},
	{path:"/newest",component:newest},
	{path:"/off",component:off},
	{path:"/read",component:read},
	{path:"/subscribe",component:subscribe},
	{path:"/buycar",component:buycar},
	{path:"/detail/:id",component:detail},
	{path:"/newsdetail/:id",component:newsdetail},
	{path:"/",redirect:"/home"},
	{path:"*",component:error},
];
export default {
	routes,
	mode:"history"
};