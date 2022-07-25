<template>
<!-- <Teleport to="body"> -->
    <Transition 
        mode="out-in"
        enter-active-class="animate__animated animate__fadeIn"
        leave-active-class="animate__animated animate__fadeOut"
        >
    <div v-if="isShown" class="modal-background">
            <dialog @submit="closeModal" open class="modal-component">
                <ion-icon @click="closeModal" name="close-outline" class="close-icon"></ion-icon>
                <h2 class="modal-title">
                    {{this.title}}
                </h2>
                <div class="modal-main">
                    <slot></slot>
                </div>
                <slot name="Footer"></slot>
                <div class="modal-actions" v-if="actions">
                    <slot name="actions">
                        <the-button @click="closeModal">Close</the-button>
                    </slot>
                </div>
            </dialog>
    </div>
        </Transition>
</template>

<script>
// import AnimateElement from '@/composable/AnimateElement'
import ScrollBehaviour from '@/composable/ScrollBehaviour'
import { computed,watch } from 'vue'
export default {
emits: ['closeModal'],
props: {
    show:{
        type:Boolean,
        required:true,
        default:false,
    },
    title:{
        type:String,
        required:true
    },
    actions: {
        type:Boolean,
        default:true,
        required:false
    }
},
setup(props,{emit}){
const isShown = computed(()=>props.show)
watch(isShown,v=>{
    if(v){
        ScrollBehaviour(false)
    }
})
const closeModal=()=>{
        emit('closeModal')
        ScrollBehaviour(true)
}
    return{isShown,closeModal}
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
    width:60rem;
    padding:2.4rem 5.2rem;
    background-color:#fff;
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
    border-top: 0.5px solid rgba(0,0,0,0.6);;
    border-bottom: 0.5px solid rgba(0,0,0,0.6);
    padding:1rem 0;
}
.modal-actions {
    display: flex;
    justify-content: center;   
    gap:1rem
}
.close-icon {
    position:absolute;
    width:3rem;
    height:3rem;
    right:0;
    top:0;
    cursor:pointer;
}
.close-icon:hover {
    background-color: rgba(0,0,0,0.6);
}
</style>