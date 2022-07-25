<template>
    <section class="section section-basket">
        <the-container class="grid grid-3-cols" style="color:gray">
            <div class="orders-section grid grid-2-cols">
                <order-item
                v-for="meal in this.totalOrders"
                :key="meal.id"
                :id="meal.id"
                :title="meal.title"
                :price="meal.price"
                :qnt="meal.quantity"
                ></order-item>
            </div>
            <div class="purchase-section">
                <the-form :actions="false" @form-change="this.writeDetails"></the-form>
                <div class="orders-list">
                    <h4 class="list-title">Ordered items:</h4>
                    <p class="order"  
                    v-for="meal in this.totalOrders"
                    :key="meal.id">
                        <span class="inline-block order-title">{{meal.title}}</span>
                        <span class="inline-block order-qnt">{{meal.quantity}}</span>
                    </p>
                </div>
                <div class="order-footer">
                    <div class="order-details">
                        <p class="bold black">Total:</p>
                        <p>{{this.totalPrice}}</p>
                    </div>
                    <the-button color="white" @click="this.submitOrder">Order now!</the-button>
                </div>
            </div> 
    </the-container>
    </section>
</template>

<script>
import { basket_store } from '@/store/basket_store'
import OrderItem from './local/OrderItem'
export default {
components:{OrderItem},
data(){
    return {
        basketStore:basket_store(),
        orderData:{
            orderer:{},
        }
    }
},
computed:{
    totalOrders(){
        return this.basketStore.getOrdersData
    },
    totalPrice(){
        return this.basketStore.getTotalPrice
    },
    totalQnt(){
        return this.basketStore.getTotalQnt
    },
    getOrderData(){
        return {
        ...this.orderData,
        orders:this.totalOrders,
        total:this.totalPrice,
        quantity:this.totalQnt
        }
    }
},
methods:{
    writeDetails(v){this.orderData.orderer=v},
    resetOrders(){
        // basket_store.$reset
    },
    submitOrder(){
        console.log(this.getOrderData)
        this.basketStore.$reset()
        }
    }
}
</script>

<style scoped>
.orders-section {
    grid-column: 1/3
}
.purchase-section {
    font-size: 1.6rem;
    padding: 1.6rem 2.4rem;
    grid-column: 3;
    display: flex;
    flex-direction: column;
    gap:1rem;
    /* box-shadow: 1px 5px 30px rgba(0,0,0,0.6); */
    background-color:rgba(241, 236, 236, 0.5);
    border-radius: 10px;
}
.order-footer {
    margin-top: 1.4rem;
    display:flex;
    /* flex-direction: column; */
    justify-content: space-between;
    gap:0.5rem;
    color:black
}
.order-details {
    display: flex;
    flex-direction: column;
    gap:0.5rem
}
.orders-list {
    display: flex;
    flex-direction: column;
    color:black
}
.order {
    display: flex;
     justify-content: space-between;
}
.list-title {
    margin-bottom:1rem;
    font-size: 2rem;
}
.order-item {
    color:black;
    display: flex;
    flex-direction: column;
    padding:1.2rem 2.4rem;
    background-color: rgba(241, 236, 236, 0.2);
    border-radius: 8px;
}
.order-title {
    font-size: 2rem;
    text-align: center;
}
@media (max-width:47.5em){
    .orders-section {
        grid-template-columns: 1fr;
        grid-column: 1;
        justify-content: center;
    }
    .purchase-section {
        grid-column: 2;
    }
}
@media (max-width:35em){
       .orders-section {
        grid-column: 1;
    }
    .purchase-section {
        grid-column: 1
    }
}
</style>