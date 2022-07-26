<template>
  <section class="section-gallery grid grid-3-cols">
    <img 
    v-for="item in this.imgData" 
    :key="item.src"
    :src="this.getSrc(item.src)" 
    alt="" 
    class="gallery-item">
  </section>
</template>

<script>
export default {
props: {
    imgData: {
        type:Object,
        required:true,
        // validator()
    }
},
methods: {
    getSrc(path){
        return require('@/assets/img/gallery/'+path)
    }
},
computed: {}
}
</script>

<style scoped>
.gallery-item {
    width:100%;
    align-self: center;
    justify-self: center;
}
</style>