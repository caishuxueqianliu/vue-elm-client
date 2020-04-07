
<template>
<div>		
 <ShopHearTop></ShopHearTop>

 <div class='tab'>
 <div class='tab-item'>
 <router-link to="/shop/goods"  replace>点餐</router-link>
 </div>
 <div class='tab-item'>
 <router-link to="/shop/ratings"  replace>点餐</router-link>
 </div>
 <div class='tab-item'>
 <router-link to="/shop/info"  replace>商家</router-link>
 </div>
 </div>
<router-view></router-view>
</div>
</template>
<script>
/*eslint-disable*/
import {mapActions} from 'vuex'
  import {mapState} from 'vuex'
//import {reqShopGoods} from '../../api/index.js'
import ShopHearTop from '../../components/ShopHeader/ShopHeader.vue'
  export default {
  // async	mounted(){
  // 		const result= await reqShopGoods()
  // 		console.log(result)

  // 	},
  mounted(){
   //this.getShopInfo()
  	//this.getShopGoods()
  	//this.getShopRatings()
  
  		 //    this.$store.dispatch('getShopGoods')
  			 this.$store.dispatch('getShopInfo')
  			// this.$store.dispatch('getShopRatings')


  

  },
   methods:{
//...mapActions(['getShopGoods','getShopInfo','getShopRatings']),
	...mapActions(['getShopInfo']),
 },
    computed: {
   //...mapState(['goods','info','ratings'])
...mapState(['info'])

  },
    components: {
       ShopHearTop
      
    }
  }
</script>



<style lang="stylus" rel="stylesheet/stylus">

  .tab
    height 40px
    line-height 40px
    background #fff
    bottom-border-1px #02a774
    .tab-item
      float left
      width: 33.33333%
      text-align center
      font-size 14px
      color rgb(77, 85, 93)
      a
        display block
        position relative
        &.router-link-active
          color #02a774
          &::after
            content ''
            position absolute
            left 50%
            bottom 1px
            width 35px
            height 2px
            transform translateX(-50%)
            background #02a774
</style>