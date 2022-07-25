import { defineStore } from "pinia";

export const meals_store = defineStore('meals_store',{
    state:()=>{
        return {
            mealsData:[
                {   id:1,
                    title:'Japanese Gyozas',
                    labels:['Vegeterian','Other'],
                    img:{name:'meal-1.jpg',alt:'first'},
                    mealData:{
                        cal:650,
                        score:74,
                        rate:4.9,
                        price:99.99
                    }
                },
                {   id:2,
                    title:'Japanese Gyozas',
                    labels:['Vegeterian'],
                    img:{name:'meal-2.jpg',alt:'first'},
                    mealData:{
                        cal:650,
                        score:74,
                        rate:4.9,
                        price:99.99
                    }
                },
                {   id:3,
                    title:'Third meal',
                    labels:['Vegeterian'],
                    img:{name:'meal-2.jpg',alt:'first'},
                    mealData:{
                        cal:650,
                        score:74,
                        rate:4.9,
                        price:95.49
                    }
                },
                {   id:4,
                    title:'Fourth meal',
                    labels:['Vegeterian','Paleo'],
                    img:{name:'meal-2.jpg',alt:'first'},
                    mealData:{
                        cal:650,
                        score:74,
                        rate:4.9,
                        price:89.99
                    }
                }
            ],  
            dietData:[
                        'vegeterian','vegan',
                        'pescatarian','gluten-free',
                        'keto','paleo','low FODMAP',
                        'kid-friendly'
                    ]   
        }
    },
    actions:{
        addOne(){
            this.mealsData.push(                {   id:4,
                title:'Fourth meal',
                labels:['Vegeterian','Paleo'],
                img:{name:'meal-2.jpg',alt:'first'},
                mealData:{
                    cal:650,
                    score:74,
                    rate:4.9,
                    price:99.99
                }
            })
        }
    },
    getters:{
        getMealsData(state){
            return state.mealsData
        },
        getDietData(state){
            return state.dietData
        },
        getOneMeal(state){
            return (id)=>state.mealsData.find(meal=>meal.id===id)
        },
        getMealPrice(state){
        return (id)=>state.mealsData.find(meal=>meal.id===id).mealData.price
        },
        getImg(state){
            return (id)=>state.mealsData.find(meal=>meal.id===id).img
        }
    }
})