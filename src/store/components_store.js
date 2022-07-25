import { defineStore } from "pinia";

export const components_store = defineStore('componentStore',{
    state:()=>{
        return {
            stepData:[
                { 
                number:'01',
                heading:'Tell us what you like and what not',
                description: `Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Hic quae sunt laborum minima! 
                Quae accusantium libero, at beatae, aut quos quidem 
                rerum repudiandae aliquid eaque placeat cumque nisi, 
                illum reiciendis?`,
                img:{src:'app-screen-1.png',alt:'first'}
                },
                { 
                number:'02',
                heading:'Approve your weekly meal plan',
                description: `Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Hic quae sunt laborum minima! 
                Quae accusantium libero, at beatae, aut quos quidem 
                rerum repudiandae aliquid eaque placeat cumque nisi, 
                illum reiciendis?`,
                img:{src:'app-screen-2.png',alt:'second'}
                },
                { 
                number:'03',
                heading:'Receive meals at convinient time',
                description: `Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Hic quae sunt laborum minima! 
                Quae accusantium libero, at beatae, aut quos quidem 
                rerum repudiandae aliquid eaque placeat cumque nisi, 
                illum reiciendis?`,
                img:{src:'app-screen-3.png',alt:'third'}
                }
        
            ],
            notesData:[
                {   id:1,
                    icon:'infinite-outline',
                    title:'Never cook again!',
                    description:`Our subscriptions cover
                    365 days per year, even including major 
                    holidays
                    `
                },
                        {
                    id:2,
                    icon:'infinite-outline',
                    title:'Never cook again!',
                    description:`Our subscriptions cover
                    365 days per year, even including major 
                    holidays
                    `
                },
                        {
                    id:3,
                    icon:'infinite-outline',
                    title:'Never cook again!',
                    description:`Our subscriptions cover
                    365 days per year, even including major 
                    holidays
                    `
                },
                    {
                    id:4,
                    icon:'infinite-outline',
                    title:'Never cook again!',
                    description:`Our subscriptions cover
                    365 days per year, even including major 
                    holidays
                    `
                }   
            ],
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
        ],
    }},
    getters: {
        getStepData(state){
            return state.stepData
        },
        getNotesData(state){
            return state.notesData
        },
        getOffersData(state){
            return state.offersData
        }
    }

})