<template>
    <section class="section section-basket">
        <the-container class="grid grid-3-cols" style="color:gray">
            <div class="orders-section grid grid-2-cols" v-if="this.totalOrders.length>0">
                <order-item
                v-for="meal in this.totalOrders"
                :key="meal.id"
                :id="meal.id"
                :title="meal.title"
                :price="meal.price"
                :qnt="this.basketStore.getMealQnt(meal.id)"
                ></order-item>
            </div>
            <div class="empty-orders-section" v-else>
                <h1>No orders yet</h1>
            </div>
            <div class="purchase-section">
                <the-form 
                :actions="true"
                :keep="true"
                @on-submit="this.submitOrder"
                @form-valid="isFormValid"
                 >
                 <template v-slot:actions>
                 <div class="form-actions ">
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
                    <the-button :disabled="this.canSubmit">Order now!</the-button>
                </div>
                    </div>
                 </template>
                 </the-form>
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
        submissionDisabled:true,
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
        orders:this.totalOrders,
        total:this.totalPrice,
        quantity:this.totalQnt
        }
    },
    canSubmit(){
        if(!this.submissionDisabled && this.totalQnt>0){ 
            return false
        }
            return true
    }
},
methods:{
    isFormValid(){
            this.submissionDisabled = false
    },
    resetOrders(){
        this.basketStore.$reset()
    },
    submitOrder(values){
        const orderDetails = {
            orderer:values,
            orders:this.totalOrders,
            total:this.getTotalPrice,
            quantity:this.getTotalQnt
        }
        this.resetOrders()
        console.log(orderDetails)
        }
    },
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
/* delete */
.form-actions { 
    width:100%;
    font-size: 1.6rem;
    /* padding: 1.6rem 2.4rem; */
    grid-column: 3;
    display: flex;
    flex-direction: column;
    gap:1rem;
    /* box-shadow: 1px 5px 30px rgba(0,0,0,0.6); */
    /* background-color:rgba(241, 236, 236, 0.5); */
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
.empty-orders-section {
    grid-column: 1;
    font-size: 2rem;
    font-weight: 600;
}
@media (max-width:47.5em){
    .empty-orders-section {
        text-align: center;
    }
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