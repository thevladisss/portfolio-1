<template>
  <figure class="note-item">
            <ion-icon class="note-icon col-orange" :name="this.icon"></ion-icon>
        <h4 class="note-title">{{this.title}}</h4>
        <p class="note-description">
           {{this.description}}
        </p>
  </figure>
</template>

<script>
export default {
props:{
    icon:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    }
}
}
</script>

<style scoped>
.note-item {
    display: flex;
    flex-direction: column;
    gap:2rem;
    color:#333;
}
.note-title {
    font-size: 2.4rem;
    font-weight: 600;
}
.note-description {
    font-size: 1.6rem
}
.note-icon {
    width:3rem;
    height: 3rem;
    background-color:#fdf2e9;;
    padding: 1rem;
    border-radius: 100%;
}
/* .note-icon::before{
    content: '';
    padding:2rem;
    background-color:bisque;
    z-index: -1;
} */
</style>