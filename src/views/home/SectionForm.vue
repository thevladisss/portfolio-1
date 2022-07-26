<template>
  <section class="section section-form">
    <the-container class="form-container grid grid-3-cols">
        <div class="form-box">
            <h2 class="form-title">Subscribe right now!</h2>
            <the-form
            @on-submit="SubmitForm"
            ></the-form>
        </div>
        <div class="img-box"/>
    </the-container>
  </section>
</template>

<script>
import SubmitForm from '@/composable/SubmitForm'
export default {
  setup(){
    return {SubmitForm}
  }
}
</script>

<style scoped>
.form-container {
  background-color:var(--section-background);
  /* padding:4rem 2rem; */
  border-radius: 1rem;
  height:50rem;
  padding:0;
  align-items: center;
  padding-left:4rem;
  width:90%;
}
.form-box {
  grid-column: 1/3;
  display:flex;
  flex-direction: column;
  gap:2rem;
}
.form-title {
  font-size: 3.2rem;
  color:#333;
  text-align:center;
}
.img-box{
    grid-column: 3;
    padding:0;
    width:100%;
    height:100%;
    background-image: url('@/assets/img/eating.jpg'); 
    background-size: cover;
    background-position: center;
    border-top-right-radius: inherit;
    border-bottom-right-radius:inherit
}
@media (max-width:47.5em) {
  .form-container {
    padding:0 2rem;
  }
  .form-box {
    grid-column: 1/-1;
  }
  .img-box{
    display:none
  }
  
}
</style>