<template>
  <button 
    :class="this.color==='orange'?'button-orange':'button-white'"
    :disabled="this.disabled" 
    @click="this.$emit('btnClick')">
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
    },
    disabled:{
        type:Boolean,
        default:false
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
background-color:var(--main-color);
color:#fff;
box-shadow: 1px 5px 30px  rgb(51, 51, 51,0.6);
}
.button-orange:hover,.button-orange:active {
    background-color: var(--main-color-dark)
}
.button-orange:disabled {
    background-color:var(--second-dark);
    color:#f8f9fa;
}
.button-white {
background-color: var(--second-light);
color:  #495057;
}
.button-white:hover,.button-white:active {
    background-color: #cccfd1
}
</style>