import { defineStore } from "pinia";
import { meals_store } from "./meals_store";

export const basket_store = defineStore('basketData',{
    state:()=>{
        return {
            totalQnt:0,
            totalAmount:0,
            orders:{
                meals:[]
            },
        }
    },
    actions:{
        addOrder(data){
            const mealsStore = meals_store()
            const isSameItem = this.orders.meals
            .find(order=>order.title===data.title && order.id===data.id)
            const itemPrice = mealsStore.getMealPrice(data.id)
            if(isSameItem){
                isSameItem.quantity+=1
            }
            else {
                const newOrder = {
                    ...data,
                    quantity:1,
                    price:itemPrice
                }
                this.orders.meals.unshift(newOrder)
            }
            this.totalAmount+=itemPrice
            this.totalQnt+=1
            console.log(this.totalQnt,this.totalAmount)
        }
    },
    getters: {
        getOrdersData(state){
            return state.orders.meals
        },
        getTotalQnt(state){
            return state.totalQnt
        },
        getTotalPrice(state){
            return state.totalAmount.toFixed(2)
        }
    }
})