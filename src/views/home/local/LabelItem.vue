<template>
  <p class="special-label">
    {{this.title}}
  </p>
</template>

<script>
export default {
props: {
    title:{
        type:String,
        required:true,
    },
    color: {
        type:String,
        required:false,
        default:'#ffd43b'
    }
}
}
</script>

<style scoped>
.special-label {
    position:absolute;
    background-color:#ffd43b;
    padding:1rem 8rem;
    font-weight: 600;
    font-size: 1.4rem;
    z-index: 99;
    text-transform: uppercase;
}
</style>