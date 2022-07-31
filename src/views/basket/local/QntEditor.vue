<template>
    <div class="input-container">
        <ion-icon
            @click="this.decrement"
            class="qnt-icon"
            name="remove-outline"
         ></ion-icon>
        <input 
            type="number" 
            :value="this.itemQnt" 
            class="input-number">
        <ion-icon 
            @click="this.increment"
            name="add-outline"
            class="qnt-icon"
        ></ion-icon>
    </div>
</template>

<script>
import { basket_store } from '@/store/basket_store'
    export default {
        props:{
            value:{
                type:Number,
                required:true,
                default:0
            },
            itemId:{
                type:Number,
                required:true
            }
        },
        data(){
            return {
                basketStore:basket_store(),
            }
        },
        computed:{
            itemQnt(){
                return this.value
            }
        },
        methods:{
            increment(){
                this.basketStore.incrementQnt(this.itemId)
            },
            decrement(){
                this.basketStore.decrementQnt(this.itemId)
            }
        },    
    }
</script>

<style scoped>
.input-number::-webkit-outer-spin-button,
.input-number::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}
.input-container {
    display:flex;
    flex-direction: row;
    gap:1px;
    align-items: center;
}
.input-number {
    width:3rem;
    /* padding:1rem; */
    border-radius: 2px;
    border:1px solid var(--main-color-dark);
    text-align: center;
}
.qnt-icon {
    font-size: 2rem;
}
.qnt-icon:hover {
    cursor:pointer;
    /* color:black */
}

</style>