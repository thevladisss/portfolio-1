import { defineStore } from "pinia";

export const notes_store = defineStore('notesStore',{
    state:()=>{
        return {
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
            ]
        }
    },
    getters: {
        getNotes(state){
            return state.notesData
        }
    }
})