import { defineStore } from "pinia";

export const basket_store = defineStore('basketData',{
    state:()=>{
        return {
            totalQnt:0,
            orders:{
                meals:[]
            },
        }
    },
    actions:{
        submitOrder(data){
            const isSameItem = this.orders.meals.find(order=>order.title===data.title)
            if(isSameItem){
                isSameItem.quantity+=1
            }
            else {
                const newOrder = {
                    ...data,
                    quantity:1,
                }
                this.orders.meals.unshift(newOrder)
            }
            this.totalQnt+=1
            console.log(this.totalQnt)
        }
    },
    getters: {
        getOrdersData(state){
            return state.orders
        },
        getTotalOrdersData(state){
            return state.totalQnt
        }
    }
})