<template>
  <section class="section section-how">
    <the-container>
        <span class="pre-heading-text">How it works</span>
        <h2 class="section-heading">Your daily dose of health in 3 simple steps</h2>
    </the-container>
    <the-container>
        <step-component
            v-for="step in stepData" :key="step.number"
            :heading="step.heading"
            :number="step.number"
            :description="step.description"
            :img="step.img"
        ></step-component>
    </the-container>
  </section>
</template>
<script>
import { ref } from 'vue'
import StepComponent from './local/StepComponent'
export default {
components: {StepComponent},
setup(){
    const stepData = ref([
        { 
        number:'01',
        heading:'Tell us what you like and what not',
        description: `Lorem ipsum dolor sit amet consectetur 
        adipisicing elit. Hic quae sunt laborum minima! 
        Quae accusantium libero, at beatae, aut quos quidem 
        rerum repudiandae aliquid eaque placeat cumque nisi, 
        illum reiciendis?`,
        img:{src:'app-screen-1.png',alt:'first'}
        },
        { 
        number:'02',
        heading:'Approve your weekly meal plan',
        description: `Lorem ipsum dolor sit amet consectetur 
        adipisicing elit. Hic quae sunt laborum minima! 
        Quae accusantium libero, at beatae, aut quos quidem 
        rerum repudiandae aliquid eaque placeat cumque nisi, 
        illum reiciendis?`,
        img:{src:'app-screen-2.png',alt:'second'}
        },
        { 
        number:'03',
        heading:'Receive meals at convinient time',
        description: `Lorem ipsum dolor sit amet consectetur 
        adipisicing elit. Hic quae sunt laborum minima! 
        Quae accusantium libero, at beatae, aut quos quidem 
        rerum repudiandae aliquid eaque placeat cumque nisi, 
        illum reiciendis?`,
        img:{src:'app-screen-3.png',alt:'third'}
        }

    ])


return {stepData}
}
}
</script>

<style scoped>
.step-container {
    align-items: center;
    margin-top:3rem;
    margin-bottom: 3rem;
}
.section-how {
    /* padding: 4rem 0; */
    color:#333;
}
/* .orange-text {
    color:orange;
    font-size: 1.8rem;
    margin-bottom: 1rem;
    text-transform: uppercase;
} */
/* .how-heading {
    font-size:4.8rem;
    font-weight: 700;
    margin-bottom:4rem;
} */

</style>