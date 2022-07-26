import { defineStore } from "pinia";
import { meals_store } from "./meals_store";

export const basket_store = defineStore('basketData',{
    state:()=>{
        return {
            // totalQnt:0,
            // totalAmount:0,
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
                isSameItem.price+=itemPrice
            }
            else {
                const newOrder = {
                    ...data,
                    quantity:1,
                    price:itemPrice
                }
                this.orders.meals.unshift(newOrder)
            }
        },
        increaseQuantity(id,qnt){
            const mealsStore = meals_store()
            const modifiedOrder = this.orders.meals
            .find(order=>order.id===id)
            const itemPrice = mealsStore.getMealPrice(id)
            modifiedOrder.quantity=qnt
            modifiedOrder.price=modifiedOrder.quantity*itemPrice
            // conso
            // modifiedOrder
        }
    },
    getters: {
        getOrdersData(state){
            return state.orders.meals.length?
            state.orders.meals.map(order=>{
                order.price= +order.price.toFixed(2)
                return order
            })
            :
            state.orders.meals
        },
        getTotalQnt(state){
            if(state.orders.meals.length){
                return state.orders.meals
                .reduce((acc,curr)=>{
                    acc+=curr.quantity
                    return acc
                },0)
            }
            else return 0
        },
        getTotalPrice(state){
            if(state.orders.meals.length){
                return state.orders.meals
                .reduce((acc,curr)=>{
                    acc+=curr.price
                    return acc
                },0)
            }
            else return null
        }
    }
})