<template>
  <div id="app">
    <router-view/>

    <FooterGuide v-show="$route.meta.showFooter"/>

  </div>
</template>

<script>
 import {mapActions} from 'vuex'
  import FooterGuide from './components/FooterGuide/FooterGuide.vue'
  import {
      //reqAddress,
//reqFoodCategorys
 
} 
from './api/index.js'
  export default {
 mounted () {
//   async  mounted () {
//    await reqFoodCategorys().then((data)=>{
//       console.log(data)
//     })
// await reqAddress('40.10038,116.36867').then((data)=>{
//       console.log(data)
//     })
 //this.$store.dispatch('getAddress')

      this.$store.dispatch('getCategory')
this.getAddress()
//this.getCategory()
       console.log(this.$store.state)
      // this.getUserInfo()
    },

    methods: {
     ...mapActions(['getAddress'])



    },

    components: {
      FooterGuide,
      
    }
  }
</script>

<style lang="scss" type="">
  #app {
  width: 100%;
  height: 100%;
  background: #f5f5f5;
  position: relative;
}




</style>
