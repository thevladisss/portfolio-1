<template>
  <!-- <div class="purchase-section"> -->
    <form @submit.prevent="this.$emit('on-submit')" action="" class="form">
        <div class="form-control">
            <label for="email">Your email</label>
            <input type="text" name="email">
        </div>
        <div class="form-control">
            <label for="fullName">Your first and last names</label>
            <input type="email" name="email">
        </div>
        <div class="form-control">
            <label for="email">Phone number</label>
            <input type="number" name="number">
        </div>
        <div class="form-actions">
            <the-button color="orange">Order now!</the-button>
        </div>
    </form>
  <!-- </div> -->
</template>

<script>
export default {
data(){
    return {
        formData:{}
    }
}
}
</script>

<style scoped>
.form {
    color:#000;
    width:100%;
    display:flex;
    flex-direction: column;
    gap:1.4rem;
    border-bottom: 0.5px solid rgba(0,0,0,0.6);
}
.form-control {
    display:flex;
    flex-direction: column;
    gap:1rem;
    padding:0.2rem 0;
    width:100%;
}
.form-actions {
    display: flex;
    justify-content: center;
    padding:1rem 0
}
</style>