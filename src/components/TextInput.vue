<template>
  <div>
    <input 
    :value="inputValue"
    :type="type" 
    :placeholder="placeholder"
    @input="handleChange"
    @blur="handeBlur" 
    :class="validationClass"
    ><div class="error-msg" v-if="errorIf">
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
        type:{
            type:String,
            required:false,
            default:'text'
        },
        placeholder:{
            type:String,
            required:false,
            default:''
        },
        value:{
            type:String,
            default:''
        },
        // errorMessage
    },
    setup(props){
        const inputName = computed(()=>props.name)
        const {value:inputValue,errorMessage,handleBlur,handleChange,meta } = useField(inputName,{
            initialValues:props.value
        })
        const validationClass = computed(()=>{
            if(meta.dirty && !meta.valid){
                return 'input-invalid'
            }
            return null
        })
        const errorIf = computed(()=>{
            if(meta.dirty && !meta.valid){
                return true
            }
            return false
        })
        return {inputValue,errorMessage,handleBlur,handleChange,meta,validationClass,errorIf}
    }

}
</script>

<style scoped>
    input {
        width:100%;
        border-radius: 6px;
        height: 3rem;
        margin-bottom: 0.5rem;
        border: 0.5px solid rgba(0,0,0,0.5)
    }
    .input-invalid {
        background-color:rgb(248, 91, 91,0.4);
        border-color:red;
    }

    .error-msg {
        color:red;
        font-size: 1.8rem;
    }
</style>