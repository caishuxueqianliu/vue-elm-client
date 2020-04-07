
import Vuex from 'vuex'
import Vue from 'vue'
import {
	reqAddress,
	reqFoodCategorys,
	reqShops,
  reqUserInfo,
  reqLogout,
  reqShopInfo,
  reqShopRatings,
  reqShopGoods
} 
from '../api/index.js'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  latitude:32.15897,
  longitude:118.712837,
  address:{},
  category:[],
  shops:[],
  userinfo:{},
  goods:[],
  ratings:[],
  info:{},
  counts:[]
  },
  mutations: {
  receive_address(state,{address}){
  state.address=address
  },
  receive_category(state,{category}){
  state.category=category
  },
  receive_shops(state,{shops}){
  state.shops=shops
  },
  receive_userinfo(state,{userinfo}){
  state.userinfo=userinfo
  },
  reset_userinfo(state){
  state.userinfo=''
  },
  receive_goods(state,{goods}){
  state.goods= goods
  },
  receive_ratings(state,{ratings}){
  state.ratings=ratings
  },
  receive_info(state,{info}){
  state.info=info
  },
  increment_food_count(state,{food}){
 if(!food.count){
 food.count=1
//Vue.set(food,'count',1)//让新增的属性也有数据绑定
 }
 else{
     food.count++
   // var x=food.count++
   // Vue.set(food,'count',x)//让新增的属性也有数据绑定
 }
  },
    decrement_food_count(state,{food}){
 if(food.count){
  food.count--
 // var y=food.count--
   //Vue.set(food,'count',y)//让新增的属性也有数据绑定
 }
  },
 //  receive_count(state,{goodsinfo}){
 //     var flag = false
 //      state.counts.some(item => {
 //        if (item.id == goodsinfo.id) {
 //          item.count += parseInt(goodsinfo.count)
 //          flag = true
 //          return true
 //        }
 //      })

 //      // 如果最终，循环完毕，得到的 flag 还是 false，则把商品数据直接 push 到 购物车中
 //      if (!flag) {
 //        state.counts.push(goodsinfo)
 //      }
 // }
  },
  actions: {

  async getAddress({commit,state}){	
  const geohash=state.latitude+','+state.longitude
  const result=await reqAddress(geohash)
const address=result.data.data
commit('receive_address',{address})
  
  },

   async getCategory({commit}){
   const result=await reqFoodCategorys()
  
   const category=result.data.data
   commit('receive_category',{category})
   
   },
    async getShops({commit}){
    const result=await reqShops()
    if(result.data.code===0){
    const shops=result.data.data
    commit('receive_shops',{shops})
   }
   },

    recordUser({commit},userinfo){
     commit('receive_userinfo',{userinfo})
    },
     async getUserInfo({commit}){
    const result=await reqUserInfo()
    if(result.data.code===0){
    const userinfo=result.data.data
    commit('receive_userinfo',{userinfo})
   }
   },
     async logout({commit}){
    const result=await reqLogout()
    if(result.data.code===0){
    commit('reset_userinfo')
   }
   },
       async getShopGoods({commit},callback){
    const result=await reqShopGoods()
    if(result.data.code===0){
    const goods=result.data.data
    commit('receive_goods',{goods})
      callback&&callback()
   }
   },
       async getShopRatings({commit}){
    const result=await reqShopRatings()
    if(result.data.code===0){
    const ratings=result.data.data
    commit('receive_ratings',{ratings})

   }
   },
       async getShopInfo({commit}){
    const result=await reqShopInfo()
    if(result.data.code===0){
    const info=result.data.data
    commit('receive_info',{info})
   }
   },

    updateFoodCount({commit},{isAdd,food}){
if(isAdd){
       commit('increment_food_count',{food})
         }
     else {
      commit('decrement_food_count',{food})
         }
       
    },
 // recordCount({commit},goodsinfo){
 //     commit('receive_count',{goodsinfo})
 //    }

}

 })

