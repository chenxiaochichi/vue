import * as types from "./types";

export default{
	[types.SHOW_LOADING]:(state)=>{
		state.bLoading = true;
	},
	[types.HIDE_LOADING]:(state)=>{
		state.bLoading = false;
	},
	[types.CHANGE_BUYCAR]:(state,payload)=>{
		state.buyCar = payload;
	},
	[types.CLEAR_BUYCAR]:(state)=>{
		state.buyCar = [];
	}
}
