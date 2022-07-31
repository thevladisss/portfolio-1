<template>
    <div>
        <another-component/>
        <info-component/>
    </div>
</template>

<script>
import AnotherComponent from './AnotherComponent.vue'
import InfoComponent from './InfoComponent.vue'
    export default {
        components:{
            AnotherComponent,
            InfoComponent
        }
        
    }
</script>

<style scoped>

</style>