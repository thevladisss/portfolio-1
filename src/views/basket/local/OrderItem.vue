<template>
  <figure class="order-item">
    <img class="order-img" :src="this.imgSrc">
    <div class="order-data">
         <h4 class="order-title">{{this.title}}</h4>
        <div class="order-details">
            <li class="order-detail">
               <p class="item-qnt">Quantity:</p>
               <input 
               @input="this.increaseQnt" 
               type="number"
               :value="this.qnt">
            </li>
            <li class="order-detail">
               <p class="item-price">Price:</p>
               <span class="price-number">{{this.price}}</span>
            </li>
        </div>
    </div>
  </figure>
</template>

<script>
import { basket_store } from '@/store/basket_store'
import {meals_store} from '@/store/meals_store'
export default {
    props:{
        id:{
            type:Number,
            required:true
        },
        title:{
            type:String,
            required:true,

        },
        price:{
            type:Number,
            required:true,
        },
        qnt: {
            type:Number,
            required:true,
        },
    },
    data(){
        return {
            basketStore:basket_store(),
            mealsStore:meals_store()
        }
    },
    methods: {
        increaseQnt({data:qnt}){
            this.basketStore.increaseQuantity(this.id,Number(qnt))
        }
    },
    computed:{
        imgSrc(){
            const {name} = this.mealsStore.getImg(this.id)
            return require('@/assets/img/meals/'+name)
        }
    }
}
</script>

<style scoped>
.order-item {
    background-color: #fff;
    border:2px solid #faf1e9;;
    border-radius: 16px;
    transition:all 0.75s ease;
    height: 100%;
}
.order-item:hover {
    background-color:#faf1e9;;
}
.order-img {
    width:100%;
    border-radius:inherit;
    /* border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px */
}
.order-data {
    padding:1.4rem 2.8rem;


}
.order-title {
    font-size: 2rem;
    margin-bottom: 2rem;
}
.order-details {
    font-size: 1.6rem;
    display: flex;
    flex-direction: column;
    gap:0.75rem
}
.order-detail {
    display: flex;
    gap:1rem;
    justify-content: space-between;
}
.order-detail input[type="number"] {
    width:3rem;
}
.order-icon {
    width: 2rem;
    height:2rem;
    color:orange;
}
.order-actions {
    display:flex;
    flex-direction: row;
    justify-content: center;
    padding:1.4rem 1.4rem
}
.price-number {
    font-weight: 600;
}
@media (max-width:35em) {
    .order-item {
        padding:0 4rem;
    }
    .order-title {
        font-size: 2.8rem;
    }
    .order-details {
        font-size: 2.2rem;
    }
    .order-item {
        position:relative
    }
    .order-item::after:active,.meal-item::before:active {
        color:black;
        opacity: 1;
    }
}
</style>