<template>

<div class="msite">

        <HeaderTop :title="address.name">     
   <router-link class="header_search" slot="left" to='/search'>
            <i class="iconfont icon-sousuo"></i>
          </router-link >
  <router-link  class="header_login" slot='right' :to="userinfo._id?'/userinfo':'/login'">
            <span class="header_login_text" v-if="!userinfo._id">登录|注册</span>
             <span class="header_login_text" v-else>
              <i class="iconfont icon-person"></i>
            </span>
          </router-link >
        </HeaderTop>
        
        <!--首页导航-->
        <nav class="msite_nav">
          <div class="swiper-container" v-if="category.length">
            <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="(categorys,index) in categorysArr" :key='index'>
                <a href="javascript:" class="link_to_food" v-for="(item,index) in categorys" :key='index'>
                  <div class="food_container">
                    <img :src="baseImageUrl+item.image_url">
                  </div>
                  <span>{{item.title}}</span>
                </a>
              
              </div>
            
            </div>
            <!-- Add Pagination -->
            <div class="swiper-pagination"></div>
          </div>
           <img src="./images/msite_back.svg" alt="back" v-else>
        </nav>
        <!--首页附近商家-->
        <div class="msite_shop_list">
          <div class="shop_header">
            <i class="iconfont icon-xuanxiang"></i>
            <span class="shop_header_title">附近商家</span>
          </div>
           <ShopList></ShopList>
          </div>
      </div>
</template>


<script>
  //import BScroll from 'better-scroll'
  import {mapState} from 'vuex'
  import Swiper from 'swiper'
  import '../../../node_modules/swiper/css/swiper.min.css'

  import HeaderTop from '../../components/HeaderTop/HeaderTop.vue'
   import ShopList from '../../components/ShopList/ShopList.vue'

 

  export default {
 
    data () {
      return {
         baseImageUrl: 'https://fuss10.elemecdn.com'
      }
    },
 mounted () {

   new Swiper('.swiper-container', {
            loop: true, // 可以循环轮播
            // 如果需要分页器
            pagination: {
              el: '.swiper-pagination',
            },
          })

   //  this.$store.dispatch('getAddress')
   // this.$store.dispatch('getCategorys')
      // this.$store.dispatch('getShops')
     
    },

    computed: {
 ...mapState(['address', 'category', 'userinfo']),

  // ...mapState(['address','category']),
      categorysArr () {
        const {category} = this
        // 准备空的2维数组
        const arr = []
        // 准备一个小数组(最大长度为8)
        let minArr = []
        // 遍历categorys
        category.forEach(c => {
          // 如果当前小数组已经满了, 创建一个新的
          if(minArr.length===8) {
            minArr = []
          }
          // 如果minArr是空的, 将小数组保存到大数组中
          if(minArr.length===0) {
            arr.push(minArr)
          }
          // 将当前分类保存到小数组中
          minArr.push(c)
        })

        return arr
      }
    },

    watch: {
      category () { 
      // categorys数组中有数据了, 在异步更新界面之前执行
      // 使用setTimeout可以实现效果, 但不是太好
        // setTimeout(() => {
        //   // 创建一个Swiper实例对象, 来实现轮播
        //   new Swiper('.swiper-container', {
        //     loop: true, // 可以循环轮播
        //     // 如果需要分页器
        //     pagination: {
        //       el: '.swiper-pagination',
        //     },
        //   })
        // }, 100)
      // console.log(value)
        // 界面更新就立即创建Swiper对象
        this.$nextTick(() => {// 一旦完成界面更新, 立即调用(此条语句要写在数据更新之后)
          // 创建一个Swiper实例对象, 来实现轮播
          new Swiper('.swiper-container', {
            loop: true, // 可以循环轮播
            // 如果需要分页器
            pagination: {
              el: '.swiper-pagination',
            },
          })

         //     new BScroll('.miste-content-wrapper', {
      //       click: true
      //     })
        })

       }
    },

    components: {
      HeaderTop,
     ShopList
    }
  }
</script>

<style lang="scss" scoped type="">
 .msite{
  width: 100%;
 }

.icon-sousuo {
  font-size: 25px;
  color: #fff;
}
.header_title {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50%;
  color: #fff;
  text-align: center;
  margin-left: -5%;
}
 .header_title_text {
  font-size: 20px;
  color: #fff;
  display: block;
}
 .header_login {
  font-size: 14px;
  color: #fff;
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
}
 .header_login_text {
  color: #fff;
}



.msite_nav {
  position: relative;
  margin-top: 45px;
  height: 200px;
  background: #fff;
}
.msite_nav::before {
  content: '';
  position: absolute;
  z-index: 200;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 1px;
  background-color: #e4e4e4;
  transform: scaleY(0.5);
}
 .swiper-container {
  width: 100%;
  height: 100%;
}
.swiper-wrapper {
  width: 100%;
  height: 100%;
}
 .swiper-wrapper .swiper-slide {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
}
.link_to_food {
  width: 25%;
}
.food_container {
  display: block;
  width: 100%;
  text-align: center;
  padding-bottom: 10px;
  font-size: 0;
}
.food_container img {
  display: inline-block;
  width: 50px;
  height: 50px;
}
 .link_to_food span {
  display: block;
  width: 100%;
  text-align: center;
  font-size: 13px;
  color: #666;
}
.swiper-pagination-bullet-active {
  background: #02a774;
}

 .msite_shop_list {
  position: relative;
  margin-top: 10px;
  background: #fff;
}
.msite_shop_list::before {
  content: '';
  position: absolute;
  z-index: 200;
  left: 0;
  top: 0;
  width: 100%;
  height: 1px;
  background-color: #e4e4e4;
}

.shop_header {
  padding: 10px 10px 0;
}
.shop_icon {
  margin-left: 5px;
  color: #999;
}
.shop_header_title {
  color: #999;
  font-size: 14px;
  line-height: 20px;
}

</style>
