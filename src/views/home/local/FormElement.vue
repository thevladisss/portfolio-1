<template>
  <form @submit.prevent="this.SubmitForm(this.formData)"  class="form-element grid grid-3-cols">
        <div class="form-interaction">
            <h3 class="section-heading">
            Get your first meal for free!
        </h3>
        <p class="form-description">
            Lorem ipsum dolor sit amet, consectetur 
            adipisicing elit. Provident, eaque sapiente 
            cumque repellat est magni iusto eum debitis
            tenetur enim. Eos quo ipsa, i
        </p>
        <div class="grid grid-2-cols">
            <div class="form-control">
                <label for="fullName">Full name</label>
                <input type="text" name="fullName" v-model="this.formData.fullName">
            </div>
            <div class="form-control">
                <label for="email">Email address</label>
                <input type="text" name="email" id="" v-model="this.formData.email">
            </div>
            <div class="form-control">
                <label for="source">Where did you hear from us?</label>
                <select name="source" v-model="this.formData.hearFrom">
                    <option value="">Select option</option>
                    <option value="google">Google</option>
                    <option value="media">Media</option>
                    <option value="ads">Ads</option>
                </select>
            </div>
            <the-button>Sign up now!</the-button>
        </div>
    </div>  
        <div class="img-box">
            <!-- <img src="@/assets/img/eating.jpg" alt="" class="form-img"></img> -->
        </div>
  </form>
</template>

<script>
import SubmitForm from '@/composable/SubmitForm'
export default {
data(){
    return {
        formData: {
            email:'',
            fullName:'',
            hearFrom:''
        },
        SubmitForm
    }
}
}
</script>

<style scoped>
.form-element {
    width:100%;
    align-content: center;
    border-radius:8px;
    background-color:#d1915c;
}
.form-interaction {
    grid-column: 1/3;
    padding: 5rem 2.4rem;
}
.form-img {
    width:100%;
    grid-column: 3;
    /* padding:0; */
    border-radius: inherit;
}
.form-control {
    display:flex;
    flex-direction: column;
    gap:0.5rem
}
.form-description {
    margin:2rem 0;
    font-size: 1.8rem;
}
.form-control label {
    font-weight: 600;
    font-size: 1.8rem;
}
.form-control input,.form-control select {
border-radius: 8px;
padding:1rem;
border:0.5px solid rgb(113, 66, 26)
}
.form-control input:active {
border:1px solid rgb(113, 66, 26)
}
.img-box {
    width:100%;
    height: 100%;
    background-image: url('@/assets/img/eating.jpg');
    background-size: cover;
    background-position: center;
}
@media (max-width: 62em){
.form-interaction .grid-2-cols {
    grid-template-columns: 1fr;
}
}
@media (max-width:47.5em) {
    .img-box {
        display: none;
    }
    
}
</style>