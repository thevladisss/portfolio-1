<template>
  <div @click="this.$router.push({name:'basket'})">
      <transition 
   appear-active-class="animate__animated animate__fadeIn"
    enter-active-class="animate__animated animate__bounceInRight"
    leave-active-class="animate__animated animate__bounceOutRight"
    >
      <ion-icon 
      v-if="!this.ordersQnt" 
      :class="['basket-icon',this.ordersQnt?'orders-active':'']"
      name="basket-outline"
      ></ion-icon>
      <p  v-else class="basket-icon">{{this.ordersQnt}}</p>
    </transition>
  </div>
</template>

<script>
import { basket_store } from '@/store/basket_store'
export default {
    data(){
        return {
            basketStore:basket_store()
        }
    },
    computed: {
        ordersQnt(){return this.basketStore.getTotalQnt}
    }
}
</script>

<style scoped>
.basket-icon {
--animate-duration:800ms;
  position:fixed;
  right: 3rem;
  bottom: 3rem;
  height:4rem;
  width:4rem;
  background-color:rgba(0,0,0,0.2);
  border-radius: 100%;
  padding:1rem;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  font-size: 2rem;
  color:#ff922b
}
.basket-icon:hover,.basket-icon:active  {
  background-color:rgb(134, 142, 150,0.5);
  cursor:pointer;
}
.orders-active {
  color:rgb(234, 132, 49);
    background-color:white;
}
</style>