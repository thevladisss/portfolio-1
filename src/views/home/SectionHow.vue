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
import { components_store } from '@/store/components_store'
import { computed } from 'vue'
import StepComponent from './local/StepComponent'
export default {
components: {StepComponent},
setup(){
    const componentsStore = components_store()
    const stepData = computed(()=>componentsStore.getStepData)
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
    color:var(--section-text-color)
}

</style>