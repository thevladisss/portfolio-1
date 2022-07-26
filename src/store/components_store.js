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
        testimonialsData:{
            data:[
            {
            id:1,
            img:{src:'dave.jpg',alt:'Dave'},
            comment:
                `Lorem ipsum dolor sit amet consectetur, 
                adipisicing elit. Doloremque fugit nostrum 
                fugiat iure numquam atque! Aperiam ea, architecto 
                iure, aut ipsam, veritatis vitae a voluptatem 
                cupiditate natus impedit temporibus earum`,
            author:'Dave Bryson'
            },
            {id:2,
            img:{src:'ben.jpg',alt:'Ben'},
            comment:
                `Lorem ipsum dolor sit amet consectetur, 
                adipisicing elit. Doloremque fugit nostrum 
                fugiat iure numquam atque! Aperiam ea, architecto 
                iure, aut ipsam, veritatis vitae a voluptatem 
                cupiditate natus impedit temporibus earum`,
            author:'Ben Hadleyy'
            },
            {
            id:3,
            img:{src:'steve.jpg',alt:'Dave'},
            comment:
                `Lorem ipsum dolor sit amet consectetur, 
                adipisicing elit. Doloremque fugit nostrum 
                fugiat iure numquam atque! Aperiam ea, architecto 
                iure, aut ipsam, veritatis vitae a voluptatem 
                cupiditate natus impedit temporibus earum`,
            author:'Steve Miller'
            },
            {id:4,
            img:{src:'hannah.jpg',alt:'Ben'},
            comment:
                `Lorem ipsum dolor sit amet consectetur, 
                adipisicing elit. Doloremque fugit nostrum 
                fugiat iure numquam atque! Aperiam ea, architecto 
                iure, aut ipsam, veritatis vitae a voluptatem 
                cupiditate natus impedit temporibus earum`,
            author:'Hannah Smith'
            }
        ],
    images:[
        {src:'gallery-1.jpg'},
        {src:'gallery-2.jpg'},
        {src:'gallery-3.jpg'},
        {src:'gallery-4.jpg'},
        {src:'gallery-5.jpg'},
        {src:'gallery-6.jpg'},
        {src:'gallery-7.jpg'},
        {src:'gallery-8.jpg'},
        {src:'gallery-9.jpg'},
        {src:'gallery-10.jpg'},
        {src:'gallery-11.jpg'},
        {src:'gallery-12.jpg'}
    ]
    }
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
        },
        getTestimonialsData(state){
            return state.testimonialsData.data
        },
        getTestimonialsImg(state){
            return state.testimonialsData.images
        }
    }

})