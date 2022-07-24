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
// import { ref } from 'vue'
import {notes_store} from '@/store/notes_store'
import NoteItem from './local/NoteItem'
export default {
components:{
    NoteItem
},
setup(){
    const notesStore = notes_store()
    const notesData= notesStore.getNotes

    return {notesData}
}
}
</script>

<style scoped>

</style>