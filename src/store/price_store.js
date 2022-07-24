import { defineStore } from "pinia";

export const price_store = defineStore('priceStore',{
    state:()=>{
        return {
               offersData: [
                    {
                        id:1,
                        title:'Starter',
                        price:399,
                        description:`per month. That's just 13$ per meal`,
                        packData:[
                            '1 meal per day',
                            'order from 11am to 9pm',
                            'delivery is free'
                        ]
                    },
                            {
                        id:2,
                        title:'Complete',
                        price:699,
                        description:`per month. That's just 11$ per meal`,
                        packData:[
                            '1 meal per day',
                            'order 24/7',
                            'delivery is free'
                        ],
                        special:'best value',
                        discount:true
                    }
            ]
        }
    },
    getters : {
        getOffersData(state){
            return state.offersData
        }
    }
})