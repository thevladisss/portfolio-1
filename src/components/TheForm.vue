<template>
  <form  class="form" @submit.prevent="emitForm">
        <div class="form-control">
            <label for="email">
                <slot name="email-text">
                    Your email
                </slot>
            </label> 
            <input type="mail" name="email" v-model="formData.email">
        </div>
        <div class="form-control">
            <label for="fullnName">
                <slot name="full-name">
                    Your full name
                </slot>
                <input type="text" v-model="formData.fullName">
            </label>
        </div>
        <div class="form-control">
            <label for="number">
                <slot name="number">
                    Your number
                </slot>
                <input type="number" name="" id="" 
                placeholder="optional..." v-model="formData.number">
            </label>
        </div>
        <div class="form-control" v-if="this.textarea">
            <textarea name="" id="" cols="30" 
            rows="10" v-model="formData.details"></textarea>
        </div>
        <div class="form-action" v-if="this.actions">
            <the-button>Submit</the-button>
        </div>
  </form>
</template>
<script>
import { reactive,watch } from 'vue'
export default {
emits:['onSubmit','formChange'],
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
    }
},
setup(_,{emit}){
const formData = reactive({
    email:'',
    fullName:'',
    number:null,
    details:''
}) 
watch(formData,values=>{emit('formChange',values)})
const emitForm = ()=>emit('onSubmit',formData) 
    return {formData,emitForm}
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
    /* border-color:rgba(233, 148, 13, 0.84) */
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