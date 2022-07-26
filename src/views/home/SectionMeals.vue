<template>
<section id="meals" class="section section-meals">
    <the-container :class="['grid','grid-3-cols',showAllMobile]" >
      <div v-for="meal in getMeals" :key="meal.id">
      <transition
             mode="out-in"
     enter-active-class="animate__animated animate__fadeIn"
     leave-active-class="animate__animated animate__fadeOut"
      >
        <meal-item
        :id="meal.id"
        :title="meal.title"
        :labels="meal.labels"
        :img="meal.img"
        :mealData="meal.mealData"
        ></meal-item>
    </transition>
        </div>
        <div class="diet-data" v-if="!showAll">
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
import {meals_store} from '@/store/meals_store'
import { ref,computed } from 'vue'
import MediaQuery from '@/composable/MediaQuery'
import MealItem from './local/MealItem'
export default {
    components:{
        MealItem
    },
    setup(){
        const mealsStore = meals_store()
        const mealsData = mealsStore.getMealsData
        const dietData = mealsStore.getDietData
        const {deviceType} = MediaQuery()
        const getDietData = computed(()=>{
            return dietData.map(word=>
            word.replace(/./,x=>x[0].toUpperCase()))
        })
        const showAll = ref(false)
        const showAllMobile = computed(()=>{
        if(deviceType.value ==='phone'&& showAll.value){
            return 'two-by-two'
        }
        else return ''
             })
        const currentMeals = ref([0,1])
        const getMeals= computed(()=>{
            if(deviceType.value==='phone'){
                if(!showAll.value){
                    return [
                        mealsData[currentMeals.value[0]],
                        mealsData[currentMeals.value[1]]
                            ]
                        }
                else {
                    return mealsData
            }
            }
            else {
                if(!showAll.value){
                    return [
                        mealsData[currentMeals.value[0]],
                        mealsData[currentMeals.value[1]]
                            ]
                        }
                else {
                    return mealsData
            }
            }
        })


        return {getMeals,getDietData,mealsData,showAll,showAllMobile}
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
    color:var(--main-color)
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
.two-by-two {
    grid-template-columns: repeat(2,1fr);
}
</style>