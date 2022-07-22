<template>
<section class="section section-meals">
    <the-container :class="['grid','grid-3-cols']">
        <!-- <div class="meals-data"> -->
      <!-- v-for="meal in mealsData" :key="meal.img.alt"> -->
      <div v-for="meal in getMeals" :key="meal.id">
        <meal-item
        :id="meal.id"
        :title="meal.title"
        :labels="meal.labels"
        :img="meal.img"
        :mealData="meal.mealData"
        ></meal-item>
        <!-- </div> -->
        <!-- <div class="diet-data">
            <h1>Data</h1>
        </div> -->
        </div>
        <div class="diet-data">
            <h3 class="diet-heading">Works with any diet</h3>
            <ul class="diet-items">
                <li  v-for="item in getDietData" :key="item" class="diet-list-item">
                    <ion-icon class="diet-icon" name="checkmark-outline"></ion-icon>
                    <p class="diet-list-item-text">{{item}}</p>
                </li>
            </ul>
        </div>
    </the-container>
    <the-container>
        <p class="recipe-link col-orange" 
        @click="showAll=!showAll">{{showAll?'Hide all recipees':'Show all recipees'}}
        </p>
    </the-container>
</section>
</template>

<script>
import { ref,computed } from 'vue'
import MealItem from './local/MealItem'
export default {
    components:{
        MealItem
    },
    setup(){
        const dietData = ref(
        [
            'vegeterian','vegan',
            'pescatarian','gluten-free',
            'keto','paleo','low FODMAP',
            'kid-friendly'
        ])
        const getDietData = computed(()=>{
            return dietData.value.map(word=>
            word.replace(/./,x=>x[0].toUpperCase()))
        })
        const mealsData = ref([
            {   id:1,
                title:'Japanese Gyozas',
                labels:['Vegeterian','Other'],
                img:{name:'meal-1.jpg',alt:'first'},
                mealData:{
                    cal:650,
                    score:74,
                    rate:4.9
                }
            },
            {   id:2,
                title:'Japanese Gyozas',
                labels:['Vegeterian'],
                img:{name:'meal-2.jpg',alt:'first'},
                mealData:{
                    cal:650,
                    score:74,
                    rate:4.9
                }
            },
            {   id:3,
                title:'Third meal',
                labels:['Vegeterian'],
                img:{name:'meal-2.jpg',alt:'first'},
                mealData:{
                    cal:650,
                    score:74,
                    rate:4.9
                }
            },
            {   id:4,
                title:'Fourth meal',
                labels:['Vegeterian','Paleo'],
                img:{name:'meal-2.jpg',alt:'first'},
                mealData:{
                    cal:650,
                    score:74,
                    rate:4.9
                }
            }
        ])
    const showAll = ref(false)
    const nextMeals = ()=>{
         if(currentMeals.value[1]===mealsData.value.length-1){
                currentMeals.value=[0,1]
            }
            else currentMeals.value = currentMeals.value.map(x=>x+1)

            console.log(currentMeals.value[0],currentMeals.value[1])
    }
    const currentMeals = ref([0,1])
        const getMeals= computed(()=>{
            
            if(!showAll.value){
            return [
                mealsData.value[currentMeals.value[0]],
                mealsData.value[currentMeals.value[1]]
            ]
            }
            else {
                return mealsData.value
            }
        })
nextMeals



        return {getMeals,getDietData,mealsData,showAll}
    }
}
</script>

<style scoped>
.section-meals {
    /* padding:4rem 0; */
    /* text-align: center; */
}
.diet-data {
    height: 100%;
}
.diet-heading {
    font-size: 3.2rem;
    margin-bottom: 1rem;
}
.diet-items {
    display: flex;
    flex-direction: column;
    gap:1.6rem;
    /* background-color: red; */
}
.diet-list-item {
    display: flex;
    gap:0.5rem;
    align-items: center;
}
.diet-list-item-text {
    font-size: 1.8rem;
}
.diet-icon {
    width:3.2rem;
    height: 3.2rem;
    color:orange;
}
.meals-data {
  display: flex;
  gap:3rem;
}
.recipe-link {
    font-size: 1.8rem;
    margin:4rem 0 5.2rem 0;
    text-align: center;
}
.recipe-link:hover {
    cursor:pointer;
    text-decoration: underline;

}
.recipe-link a:hover,.recipe-link:active {
    color:black;
}
</style>