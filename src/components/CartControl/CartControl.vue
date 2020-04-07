<template>
  <div class="cartcontrol">
    <transition name="move">
      <div class="iconfont icon-remove_circle_outline" v-if="food.count" @click.stop="updateFoodCount(false)"></div>
    </transition>
    <div class="cart-count" v-if="food.count">{{food.count}}</div>
    <div class="iconfont icon-add_circle" @click.stop="updateFoodCount(true)"></div>
  </div>
</template>

<script>
 //import {mapState} from 'vuex'
  export default {
    data(){
      return{
   //counts:{},
      // id:0,
     // obj:{}
     //counts:[1,3,5]
  
      }
    },
    mounted(){
 //this.count=window.sessionStorage.getItem('count')


    },
    props: {
      food: Object
    },

    methods: {
      updateFoodCount (isAdd) {
         // for (var i = 0; i <=8; i++) {
         // for (var j = 0; j <10; j++) {
         //  if(this.goods[i].foods[j]===this.food){
         // console.log(i)7 3 4 1 2 2 3 5 6
         //console.log(j)
//          if(i===0){
//           this.id=j
//          }
//          else if (i===1){
//            this.id=j+7
//          }
//          else if (i===2){
// this.id=j+7+3
//          }

//        else if (i===3){
// this.id=j+7+3+4
//          }

//        else if (i===4){
// this.id=j+7+3+4+1
//          }
//        else if (i===5){
// this.id=j+7+3+4+1+2
//          }
//         else if (i===6){
// this.id=j+7+3+4+1+2+2
//          }
//        else if (i===7){
// this.id=j+7+3+4+1+2+2+3
//          }
//              else if (i===8){
// this.id=j+7+3+4+1+2+2+3+5
//          }
      //    this.i=i
      //   }
      //   }
      // }
        this.$store.dispatch('updateFoodCount', {isAdd,food: this.food})
        //window.sessionStorage.setItem("count", this.food.count);
         //console.log(this.$store.state.counts)
//         //this.counts=this.food
     


//       var obj = {};
// var arr = this.counts
// for (var x in arr){
// obj[x] = x;
// }
// console.log(obj)
     // console.log(this.id)

   // this.$store.dispatch('recordCount',{id:this.id,count:this.food.count})

 //console.log(this.goods)
//  this.counts.forEach(item=>{
//       // Array.prototype.push.apply(obj,{item.id,item.count})
//       //item.id=item.count
//       //Array.prototype.push.call(obj,item.id)
        

//          this.obj.${item.id}=5
//         // console.log(i)

//              })
// console.log(this.obj)
             // this.counts.forEach(item=>{
             //  if(item.id===this.id)
             //    return 
             // })
     //  console.log(this.counts.count)

        // this.count=window.sessionStorage.getItem('count')
      }
    },
    computed:{
     //...mapState(['goods'])

  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">

  .cartcontrol
    font-size: 0
    .cart-decrease
      display: inline-block
      padding: 6px
      line-height: 24px
      font-size: 24px
      color: rgb(0, 160, 220)

    .icon-remove_circle_outline
      display: inline-block
      padding 6px
      line-height 24px
      font-size 24px
      color #02a774
      &.move-enter-active, &.move-leave-active
        transition all .3s
      &.move-enter, &.move-leave-to
        opacity 0
        transform translateX(15px) rotate(180deg)
    .cart-count
      display: inline-block
      vertical-align: top
      width: 12px
      padding-top: 6px
      line-height: 24px
      text-align: center
      font-size: 10px
      color: rgb(147, 153, 159)
    .icon-add_circle
      display: inline-block
      padding: 6px
      line-height: 24px
      font-size: 24px
      color #02a774
</style>
