<template>
<section class="section section-about">
    <the-container>
        <div class="error-section" v-if="error">
            {{error}}
        </div>
        <Suspense>
            <MainComponent/>
            <template #fallback> 
                <the-loader></the-loader>
            </template>
        </Suspense>
  </the-container>
</section>
</template>

<script>
import MainComponent from './local/MainComponent.vue'
import { ref } from 'vue'
import { onErrorCaptured } from 'vue'
export default {
components:{
    MainComponent,
},
setup(){
    const error = ref(null)
    onErrorCaptured(()=>{
        error.value = 'some error has occured'
    })
    return {error}
}
}
</script>

<style scoped>
.about {
}
</style>