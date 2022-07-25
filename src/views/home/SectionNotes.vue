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
import { computed } from 'vue'
import {components_store} from '@/store/components_store'
import NoteItem from './local/NoteItem'
export default {
components:{
    NoteItem
},
setup(){
    const componentStore = components_store()
    const notesData= computed(()=>componentStore.getNotesData)

    return {notesData}
}
}
</script>

<style scoped>

</style>