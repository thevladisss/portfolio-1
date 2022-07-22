<template>
  <section class="section section-notes">
    <the-container class="grid grid-4-cols">
        <note-item
        v-for="note in notesData"
        :key="note.id"
        :title="note.title"
        :description="note.description"
        :icon="note.icon"
        ></note-item>
    </the-container>
  </section>
</template>

<script>
import { ref } from 'vue'
import NoteItem from './local/NoteItem'
export default {
components:{
    NoteItem
},
setup(){
    const notesData=ref([
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
    ])

    return {notesData}
}
}
</script>

<style scoped>

</style>