<template>
  <div class="mobile-menu">
    <div class="panel">
        <ion-icon @click="closeMenu" class="close-icon" name="close-outline"></ion-icon>
    </div>
    <nav class="mobile-nav">
            <router-link :to="{name:'home'}">Home</router-link>
            <router-link :to="{name:'about'}">About</router-link>
            <router-link :to="'/'">Testimonials</router-link>
            <router-link :to="'/'">Pricing</router-link>
            <the-button color="orange" @btn-click="doAlert">Try for free</the-button>
        </nav>
  </div>
</template>

<script>
export default {
setup(_,{emit}){
    
    function closeMenu(){
        document.documentElement.style.overflowY = 'auto'
        document.body.style.overflowY = 'auto'
        emit('closeNav')
    }
    return {closeMenu}
}
}
</script>

<style scoped>
.mobile-menu {
    height: 100vh;
    width:40rem;
    background-color: rgba(247, 247, 247, 0.8);
    /* opacity: 0.9; */
    position:absolute;
    right:0;
    top:0;
    display: flex;
    flex-direction: column;
    text-align: center;
}
.panel {
    display: flex;
    justify-content: flex-end;
    flex-direction: row;
    width:100%;
    padding:1rem;
    /* border-bottom: 0.5px solid orange */
}
.close-icon {
    justify-self: flex-end;
    width:4rem;
    height: 4rem;
}
.mobile-nav {
    opacity: 1;
    display: flex;
    flex-direction: column;
    gap:2rem;
    width: 60%;
    align-self: center;
    height: 100%;
    margin-top:5rem;
}
</style>