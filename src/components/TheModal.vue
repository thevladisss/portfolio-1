<template>
<Teleport to="body">
    <div v-if="isShown" class="modal-background">
    <dialog open class="modal-component">
        <h2 class="modal-title">
            {{this.title}}
        </h2>
        <p class="modal-main">
             <slot></slot>
        </p>
        <slot name="Footer"></slot>
        <the-button @click="closeModal">Close</the-button>
    </dialog>
    </div>
</Teleport>
</template>

<script>
import { computed,watch } from 'vue'
export default {
props: {
    show:{
        type:Boolean,
        required:true,
        default:false,
    },
    title:{
        type:String,
        required:true
    }
},
setup(props,{emit}){
const isShown = computed(()=>props.show)
const openModal=()=>{
    document.documentElement.style.overflowY ='hidden'
    document.body.style.overflowY ='hidden'
    isShown.value = true
}
watch(isShown.value,(v)=>{if(v===true)openModal()})
const closeModal=()=>{
    emit('closeModal')
    document.documentElement.style.overflowY ='auto'
    document.body.style.overflowY ='auto'
}
    return{isShown,openModal,closeModal}
}
}
</script>

<style scoped>
.modal-background {
    position: fixed;
    width:100%;
    height:100vh;
    background-color:rgba(0,0,0,0.6);
    z-index: 999;
    display: flex;
    align-items: center;
    justify-content: center;
    top:0;
}
.modal-component {
    position:relative;
    width:40rem;
    padding:2.4rem 4rem;
    background-color:#fff;
    border:3px solid orange;
    border-radius: 12px;
    z-index: 1000;
    right:0;
    bottom:0;
}
.modal-title {
    font-size: 3.2rem;
    text-align:center;
    margin-bottom: 2rem;
}
.modal-main {
    font-size: 2rem;
    margin-bottom: 2rem;
}
</style>