<template>
<keep-alive :exclude="this.keep?'':'the-form'">
    <form  class="form" @submit.prevent="onSubmit">
        <div class="form-control">
            <label for="email">
                <slot name="email-text">
                    Your email
                </slot>
            </label> 
            <text-input 
            name="email"
            placeholder="Your email here..."
            type="email"
            value=""
            ></text-input>
        </div>
        <div class="form-control">
            <label for="fullName">
                <slot name="fullName">
                    Your full name
                </slot>
            </label>
                <text-input
                 name="fullName"
                 placeholder="Your first and last names"
                 type="text"
                 value=""
                 ></text-input>
        </div>
        <div class="form-control">
            <label for="number">
                <slot name="number">
                    Your number
                </slot>
            </label>
                <text-input
                 name="number"
                 placeholder="Your number"
                 type="text"
                 value=""
                ></text-input>
        </div>
        <!-- <div class="form-control" v-if="this.textarea">
            <textarea name="" id="" cols="30" 
            rows="10" v-model="formData.details"></textarea>
        </div> -->
        <div class="form-action" v-if="this.actions">
            <slot name="actions" >
                <the-button :disabled="submissionDisabled">{{this.buttonContent}}</the-button>
            </slot>
        </div>
  </form>
</keep-alive>
</template>
<script>
import * as yup from 'yup'
import {useForm} from 'vee-validate'
import {ref,computed,watch} from 'vue'
import TextInput from '@/components/TextInput'
export default {
name:'the-form',
emits:['onSubmit','formValid'],
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
    buttonContent:{
        type:String,
        required:false,
        default:'Submit'
    }
},
setup(_,{emit}){
const formSchema = yup.object().shape({
    email:yup.string().email().required().label('Email'),
    fullName:yup.string().required().min(6).label('Full name'),
    number:yup.string().required().min(6).label('Phone number')
})
const {handleSubmit,resetForm,meta} = useForm({
    validationSchema:formSchema,
    })
 watch(meta,
 function(val){
        if(val.dirty && val.valid){
            submissionRef.value=false
            emit('formValid')
        }
        else submissionRef.value=true
    },{deep:true})
const onSubmit = handleSubmit(values=>{
    emit('onSubmit',values)
    resetForm()
})
const submissionRef = ref(true)
const submissionDisabled = computed(()=>submissionRef.value)
    return {onSubmit,submissionDisabled}
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
.form-control label {
    font-size: 1.8rem;
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