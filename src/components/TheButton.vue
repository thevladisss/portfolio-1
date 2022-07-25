<template>
  <button :class="this.color==='orange'?'button-orange':'button-white'" @click="this.$emit('btnClick')">
    <slot>{{this.title}}</slot>
  </button>
</template>
s
<script>
export default {
emits:['btnClick'],
props:{
    title:{
        type:String,
        required:false
    },
    color:{
        type:String,
        required:false,
        default:'orange'
    }
},
}
</script>

<style scoped>
button {
padding: 1rem 2.4rem;
border: none;
border-radius: 10px;
font-weight: 700;
font-size: 2rem;  
}
button:hover,.button:active {
    cursor: pointer;
}
.button-orange {
background-color:#ff922b;
color:#fff;
box-shadow: 7.5px 10px 30px  rgb(51, 51, 51,0.6);
}
.button-orange:hover,.button-orange:active {
    background-color: #f27600
}
.button-white {
background-color: #d6d9dc;
color:  #495057;
}
.button-white:hover,.button-white:active {
    background-color: #f8f9fa
}
</style>