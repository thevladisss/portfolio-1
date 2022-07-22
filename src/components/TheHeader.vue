<template>
  <header class="header">
    <img class="header-logo" src="@/assets/img/omnifood-logo.png" alt="">
<!-- <h1>dsads</h1> -->
    <nav class="header-nav">
        <router-link :to="{name:'home'}">Home</router-link>
        <router-link :to="{name:'about'}">About</router-link>
        <router-link :to="'/'">Testimonials</router-link>
        <router-link :to="'/'">Pricing</router-link>
        <the-button color="orange" @btn-click="doAlert">Try for free</the-button>
    </nav>
    <nav class="mobile-header">
        <ion-icon 
        @click="openMenu" 
        class="burger-icon" 
        name="menu-outline"
        v-if="!navActive"
        ></ion-icon>
        <transition name="mobile-nav-anim">
             <mobile-nav @close-nav="navActive=false" v-if="navActive"></mobile-nav>
        </transition>
   </nav>
  </header>
</template>

<script>
import { ref } from 'vue'
import MobileNav from './mobile/MobileNav'
export default {
    components:{
        MobileNav
    },
    setup(){
        function doAlert(){
            alert('Some')
        }

const navActive = ref(false)
function openMenu(){
    document.documentElement.style.overflowY = 'hidden'
    document.body.style.overflowY = 'hidden'
    navActive.value = true
}
        return {doAlert,openMenu,navActive}
    }
}
</script>

<style scoped>
.header {
    /* height: 9.5rem; */
    background-color: #faf1e9;
    display: flex;
    padding:2rem 7rem;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    position:sticky;
    top:0;
    z-index: 100;
}
.header-logo {
    display: inline-block;
    height:3rem;
    width:auto;
    margin-right: 2rem;
    /* justify-self: flex-end */
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
        /* padding:1.2rem 2.4rem */
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
        /* padding:0 */
    }
    .header-nav {
        gap:2rem
    }
    .burger-icon {
        width:4rem;
        height: 4rem;
        /* padding:0; */
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