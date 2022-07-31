import { defineStore } from "pinia";
import { meals_store } from "./meals_store";

export const basket_store = defineStore('basketData',{
    state:()=>{
        return {
            orders:[]
        }
    },
    actions:{
        addOrder(data){
            const mealsStore = meals_store()
            const isSameItem = this.orders
            .find(order=>order.title===data.title && order.id===data.id)
            const itemPrice = mealsStore.getMealPrice(data.id)
            if(isSameItem){
                isSameItem.quantity+=1
                isSameItem.price+=itemPrice
            }
            else {
                const newOrder = {
                    ...data,
                    quantity:1,
                    price:itemPrice
                }
                this.orders.unshift(newOrder)
            }
        },
        removeOrder(id){
            const removedOrder = this.orders.findIndex(order=>order.id===id)
            this.orders.splice(removedOrder,1)
        },
        incrementQnt(id){
            const mealsStore = meals_store()
            const modifiedOrder = this.orders
            .find(order=>order.id===id)
            const itemPrice = mealsStore.getMealPrice(id)
            modifiedOrder.quantity+=1
            modifiedOrder.price=modifiedOrder.quantity*itemPrice
        },
        decrementQnt(id){
            const mealsStore = meals_store()
            const modifiedOrder = this.orders
            .find(order=>order.id===id)
            const itemPrice = mealsStore.getMealPrice(id)
            modifiedOrder.quantity-=1
            modifiedOrder.price=modifiedOrder.quantity*itemPrice
        }
    },
    getters: {
        getOrdersData(state){
            return state.orders.length?
            state.orders.map(order=>{
                order.price= +order.price.toFixed(2)
                return order
            })
            :
            state.orders
        },
        getTotalQnt(state){
            if(state.orders.length){
                return state.orders
                .reduce((acc,curr)=>{
                    acc+=curr.quantity
                    return acc
                },0)
            }
            else return 0
        },
        getTotalPrice(state){
            if(state.orders.length){
                return state.orders
                .reduce((acc,curr)=>{
                    acc+=curr.price
                    return acc
                },0).toFixed(2)
            }
            else return 0
        },
        getMealQnt(state){
            return (id)=>state.orders.find(order=>order.id===id).quantity
        }
    }
})