<template>
  <figure class="meal-item">
    <img class="meal-img" :src="this.imgSrc" :alt="this.img.alt">
    <div class="meal-data">
        <div class="labels">
            <span
            v-for="label in this.labels"
            :key="label"
            :class="['label','bold',this.labourColor(label)]"
            >
            {{label}}
            </span>
        </div>  
         <h4 class="meal-title">{{this.title}}</h4>
        <div class="meal-details">
            <li class="meal-detail">
                <ion-icon class="meal-icon" name="restaurant-outline"></ion-icon>
                <p class="first-detail"><span class="bold">{{this.mealData.cal}} </span> calories</p>
            </li>
            <li class="meal-detail">
               <ion-icon class="meal-icon" name="thumbs-up-outline"></ion-icon>
               <p class="second-detail">Nutriscore &reg; <span class="bold">{{this.mealData.score}} </span></p> 
            </li>
            <li class="meal-detail">
                 <ion-icon class="meal-icon" name="star-outline"></ion-icon>
                <p class="third-detail"><span class="bold">{{this.mealData.rate}} </span> rating</p>
            </li>
        </div>
    </div>
    <div class="meal-actions">
        <the-button color="white" @click="this.addProduct">Purchase</the-button>
    </div>
  </figure>
</template>

<script>
import TheButton from '../../../components/TheButton.vue'
import {basket_store} from '@/store/basket_store'
export default {
  components: { TheButton },
    props:{
        title:{
            type:String,
            required:true
        },
        labels:{
            type:Array,
            required:true,
        },
        mealData:{
            type:Object,
            required:true
        },
        img:{
            type:Object,
            required:true
        }
    },
    data(){
        return {
            basketData: basket_store(),
            labourColor(label){
                if(label==='Vegeterian'){
                    return 'label-green'
                }
                return 'label-yellow'
            }
        }
    },
    methods: { 
        addProduct(){
            this.basketData.submitOrder({title:this.title})
        }
    },
    computed: {
        imgSrc(){
            return require('@/assets/img/meals/'+this.img.name)
        }
    }

}
</script>

<style scoped> 
.meal-item {
    background-color: #fff;
    border:2px solid #faf1e9;;
    border-radius: 16px;
    transition:all 0.75s ease;
    height: 100%;
}
.meal-item:hover {
    background-color:#faf1e9;;
}
.meal-img {
    width:100%;
    border-radius:inherit;
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px
}
.meal-data {
    padding:1.4rem 2.8rem;


}
.meal-title {
    font-size: 2rem;
    margin-bottom: 2rem;
}
.labels {
    margin:1.5rem 0;
    display: flex;
    gap:0.75rem;
    flex-wrap: wrap;
}
.label {
    font-size: 1.4rem;
    padding:0.8rem 1.6rem;
    border-radius: 20px;
    /* border: 1px solid black; */
}
.label-green {
    background-color: rgb(100, 187, 91);
}
.label-yellow {
    background-color:#FFD43B
}
.label-red {
    background-color:rgb(199, 55, 55)
}
.meal-details {
    font-size: 1.6rem;
    display: flex;
    flex-direction: column;
    gap:0.75rem
}
.meal-detail {
    display: flex;
    gap:1rem
}
.meal-icon {
    width: 2rem;
    height:2rem;
    color:orange;
}
.meal-actions {
    display:flex;
    flex-direction: row;
    justify-content: center;
    padding:1.4rem 1.4rem
}
@media (max-width:35em) {
    .meal-title {
        font-size: 2.8rem;
    }
    .meal-details {
        font-size: 2.2rem;
    }
    .label {
        font-size: 1.6rem;
    }
    .meal-item {
        position:relative
    }
    /* .meal-item::before {
        content:url('@/assets/vectors/chevron-back-outline.svg');
        position:absolute;
        left:-5rem;
        top:50%;
        font-size: 4rem;
        font-weight: 700;
        cursor:pointer;
        width:5rem;
        height:5rem;
        opacity: 0.5;
        z-index: 1;
         color:#333;
    }
        .meal-item::after {
         content:url('@/assets/vectors/chevron-forward-outline.svg');
        position:absolute;
        right:-5rem;
        top:50%;
        font-size: 4rem;
        font-weight: 700;
        cursor:pointer;
        width:5rem;
        height:5rem;
        opacity: 0.5;
        z-index: 1;
        color:#333;
    } */
    .meal-item::after:active,.meal-item::before:active {
        color:black;
        opacity: 1;
    }
}
</style>