<template>
<div>
  <the-modal 
    @close-modal="formVisible=false"
    :show="formVisible"
    title="Get your first meal right now!"
    :actions="false"
  >
  <the-form 
  textarea
  @on-submit="(v)=>{SubmitForm(v);formVisible=false}
  "></the-form>
  </the-modal>
  <header class="header">
    <img class="header-logo" src="@/assets/img/omnifood-logo.png" alt="" @click="this.$router.push({name:'home'})">
    <nav class="header-nav">
        <router-link :to="{name:'home'}">Home</router-link>
        <router-link :to="{name:'about'}">About</router-link>
        <router-link :to="{name:'basket'}">Orders</router-link>
        <router-link :to="{name:'products'}">Products</router-link>
        <the-button color="orange" @btn-click="showForm">Try for free</the-button>
    </nav>
    <nav class="mobile-header">
        <ion-icon 
        @click="openMenu" 
        class="burger-icon" 
        name="menu-outline"
        v-if="!navActive"
        ></ion-icon>
        <transition name="mobile-nav-anim">
             <mobile-nav @show-form="showForm" @close-nav="navActive=false" v-if="navActive"></mobile-nav>
        </transition>
   </nav>
  </header>
</div>
</template>

<script>
import { ref } from 'vue'
import MobileNav from './mobile/MobileNav'
import ScrollBehaviour from '@/composable/ScrollBehaviour'
import SubmitForm from '@/composable/SubmitForm'
export default {
    components:{
        MobileNav
    },
setup(){
    const formVisible = ref(false)
    function showForm(){
        formVisible.value = true
    }

const navActive = ref(false)
function openMenu(){
    ScrollBehaviour(false)
    navActive.value = true
}


return {SubmitForm,showForm,openMenu,navActive,formVisible}
    }
}
</script>

<style scoped>
.header {
    background-color: #faf1e9;
    display: flex;
    padding:2rem 7rem;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    top:0;
    z-index: 100;
}
.header-logo {
    display: inline-block;
    height:3rem;
    width:auto;
    margin-right: 2rem;
}

.header-nav {
    display: flex;
    justify-content: space-around;
    gap:3rem;
    font-weight: 600;
    align-items: center;
}
.mobile-header {
    display:none;
}
@media (max-width:62.5em) {
    .header-nav {
        display: none;
    }
    .mobile-header {
        display: flex;
    }
    .header-nav {
        gap:2rem
    }
    .burger-icon {
        width:4rem;
        height: 4rem;
        cursor:pointer
    }
}
@media (max-width:45em){
    .header-nav {
        display: none;
    }
    .mobile-header {
        display: flex;
    }
    .header-nav {
        gap:2rem
    }
    .burger-icon {
        width:4rem;
        height: 4rem;
        cursor:pointer
    }
    .mobile-menu {
        width:35rem
    }
}
.mobile-nav-anim-enter-from {
    transform: translateX(75%);
}
.mobile-nav-anim-leave-to {
    transform: translateX(100%)
}
.mobile-nav-anim-enter-active,.mobile-nav-anim-leave-active {
    transition:all 0.7s ease;
}
</style>