<template>
  <div>
    <input type="text" v-model="value">
    <div class="error-msg">
        {{errorMessage}}
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useField } from 'vee-validate'
export default {
    props:{
        name:{
            type:String,
            required:true
        },
        validation: {
            type:Function,
            required:false,
        }
    },
    setup(props){
        const inputName = computed(()=>props.name)
        const {value,errorMessage} = useField(inputName)
        return {value,errorMessage}
    }

}
</script>

<style scoped>
    input {
        width:100%;
        border-radius: 6px;
        height: 2.6rem;
        margin-bottom: 0.5rem;
    }
    .error-msg {
        color:red;
        font-size: 1.8rem;
    }
</style>