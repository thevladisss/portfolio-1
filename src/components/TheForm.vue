<template>
<keep-alive :exclude="this.keep?'':'the-form'">
    <form  class="form" @submit.prevent="onSubmit">
        <div class="form-control">
            <label for="email">
                <slot name="email-text">
                    Your email
                </slot>
            </label> 
            <text-input name="email"></text-input>
        </div>
        <div class="form-control">
            <label for="fullName">
                <slot name="fullName">
                    Your full name
                </slot>
                <text-input name="fullName"></text-input>
            </label>
        </div>
        <div class="form-control">
            <label for="number">
                <slot name="number">
                    Your number
                </slot>
                <text-input name="number" placeholder="optional..."></text-input>
            </label>
        </div>
        <div class="form-control" v-if="this.textarea">
            <textarea name="" id="" cols="30" 
            rows="10" v-model="formData.details"></textarea>
        </div>
        <div class="form-action" v-if="this.actions">
            <slot name="actions" >
                <the-button>Submit</the-button>
            </slot>
        </div>
  </form>
</keep-alive>
</template>
<script>
import * as yup from 'yup'
import {useForm} from 'vee-validate'
import { reactive,watch } from 'vue'
import TextInput from '@/components/TextInput'
export default {
name:'the-form',
emits:['onSubmit','formChange'],
components:{TextInput},
props: {
    textarea:{
        type:Boolean,
        required:false,
        default:false
    },
    actions: {
        type:Boolean,
        required:false,
        default:true
    },
    keep:{
        type:Boolean,
        required:false,
        default:false
    },
},
setup(props,{emit}){
const formData = reactive({
    email:'',
    fullName:'',
    number:null,
    details:''
}) 
watch(formData,values=>{emit('formChange',values)})
const emitForm = ()=>emit('onSubmit',formData) 

const formSchema = yup.object({
    email:yup.string().email().required().max(25).min(6),
    fullName:yup.string().required().min(6).max(25),
    number:yup.string().min(6).max(12).optional ()
    // number:yup.min(6).max(12)
})
const {handleSubmit,setErrors} = useForm({
    validationSchema:formSchema,
    })
setErrors({
    email:'Email field is invalid',
    fullName:'This field is invalid'
})

const onSubmit = handleSubmit(values=>{
    console.log(values)
    emit('onSubmit',values)
})


    return {formData,emitForm,onSubmit}
    }
}
</script>

<style scoped>
.form {
    width:100%;
    padding: 1.6rem 2.4rem;
    display:flex;
    flex-direction: column;
    gap:1.4rem;
}
.form-control {
    display:flex;
    flex-direction: column;
    gap:1rem;
    padding:0.2rem 0;
    width:100%;
}
.form-control input {
    width:100%;
    border-radius: 6px;
    height: 2.6rem;
}
.form-control textarea {
    resize: none;
    width:100%
}
.form-action {
    margin-top:1.4rem;
    display:flex;
    justify-content: center;
}
@media (max-width:35em) {
    .form {
        font-size: 2.4rem;
    }
    .form-control input{
        height:2.8rem;
    }
    
}
</style>