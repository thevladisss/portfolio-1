<template>
  <figure :class="['pricing-item',this.special?'special':'',this.posClass]">
    <label-item :title="this.special" v-if="this.special" class="label-pos"></label-item>
    <h3 class="item-title">{{this.title}}</h3>
    <p class="item-price">{{this.price}}</p>
    <p class="item-description">
        {{this.description}}
    </p>
    <ul class="pack-data">
        <li class="data-list-item" v-for="item in this.packData" :key="item">
            <ion-icon class="data-icon" name="checkmark-outline"></ion-icon>
            <p class="data-list-item-text">{{item}}</p>
        </li>
    </ul>
    <the-button class="action-button">{{this.actionText}}</the-button>
  </figure>
</template>

<script>
import LabelItem from './LabelItem'
export default {
components: {
        LabelItem
    },
props: {
    id:{
        type:Number,
        required:true
    },
    title:
    {
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    packData: {
        type:Array,
        required:true
    },
    special:{
        type:String,
        required:false
    },
    discount:{
        type:Boolean,
        required:false
    },
    actionText: {
        type:String,
        required:false,
        default:'Start eating well!'
    }
},
computed:{
    posClass(){
        return this.id%2==0?'left-pos':'right-pos'
    }
}
}
</script>

<style scoped>
.pricing-item {
    display: flex;
    flex-direction: column;
    text-align: center;
    width: 80%;
    border:0.5px solid  #f27600;
    border-radius: 8px;
    padding:4.8rem 3.2rem;
    position:relative;
    overflow: hidden;
}
.item-title {
    text-transform: uppercase;
    color:#f27600 ;
    font-size: 1.8rem;
    font-weight: 500;
    margin-bottom: 2.4rem;
}
.item-price {
    font-weight: 800;
    font-size: 5.2rem;
    display: flex;
    align-items: flex-end;
    margin:0 auto;
    margin-bottom:2rem;
}
.item-price::before {
    content: '$';
    font-size: 3rem;
    font-weight: 600;
    margin-right: 0.5rem;
}
.item-description {
    font-size: 1.4rem;
    color:grey;
    margin-bottom: 3rem;
}
.pack-data {
    display: flex;
    flex-direction: column;
    gap:1.2rem;
    margin-bottom:3.2rem;
}
.data-list-item {
    display: flex;
    gap:0.75rem;
    align-items: center;
}
.data-list-item-text {
    font-size: 1.8rem;
}
.data-icon {
    width:3.2rem;
    height: 3.2rem;
    color:orange;
}
.action-button {
    width:60%;
    margin:1rem auto;
}
.special {
    background-color:#fdf2e9;
    border:0px;
    box-shadow: 2px 10px 30px rgba(0,0,0,0.3);
    transition:all 1s ease;
}
.special:hover {
    transform: scale(1.05);
    cursor:pointer;
}
.right-pos {
    justify-self:end;
}
.left-pos {
    justify-self: start;
    /* background-color:red; */
}
.label-pos {
    right:-5.5rem;
    top:2.5rem;
    transform: rotate(45deg);
}
@media (max-width:35em) {
    .right-pos,.left-pos {
        justify-self: center;
    }
}
</style>