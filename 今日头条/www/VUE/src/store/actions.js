import * as types from "./types";

export default{
	showLoading:({commit,state})=>{
		commit(types.SHOW_LOADING)
	},
	hideLoading:({commit,state})=>{
		commit(types.HIDE_LOADING)
	},
	addItem:({commit,state},payload)=>{
		let find = false;
		state.buyCar.forEach((item,index)=>{
			if( item.id == payload.id ){
				find = true;
				item.number++;
			}
		})
		if(!find){
			payload.number = 1;
			state.buyCar.push(payload);
		}
		commit(types.CHANGE_BUYCAR,[...state.buyCar]);
	},
	changeItem:({commit,state},payload)=>{
		state.buyCar.forEach((item,index)=>{
			if( item.id == payload.id ){	
				item.number += payload.num;
				if( item.number <= 1 ){
					item.number = 1;
				}
			}
		});
		commit(types.CHANGE_BUYCAR,[...state.buyCar]);//递交给mutations的是一个对象时，复制一份
	},
	removeItem:({commit,state},payload)=>{
		if( confirm("确定要删除么") ){			
			state.buyCar.forEach((item,index)=>{
				if( item.id == payload.id){
					state.buyCar.splice(index,1);
				}
			});
			commit(types.CHANGE_BUYCAR,[...state.buyCar]);
		}
	},
	clearBuycar:({commit})=>{
		if( confirm("确定要清空么") ){
			commit(types.CLEAR_BUYCAR);			
		}
	}
}
