import Vue from 'vue'
import Vuex from 'vuex'
import {
	reqAddress,
	reqFoodCategorys,
	reqShops
} 
from '../api/index.js'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  latitude:32.15897,
  longitude:118.712837,
  address:{},
  category:[],
  shops:[]

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
  }
 
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
    if(result.code===0){
    const shops=result.data
    commit('receive_shops',{shops})
   }
   }
   },
  modules: {
  }
})
