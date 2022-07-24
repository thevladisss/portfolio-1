<template>
<div class="page-layout">
  <!-- <h1>{{deviceType}}</h1> -->
  <the-header></the-header>
  <router-view v-slot="{ Component }">
    <Transition
     mode="out-in"
     enter-active-class="animate__animated animate__fadeIn"
     leave-active-class="animate__animated animate__fadeOut"
     >
      <keep-alive>
        <component :is="Component" class="page-layout"></component>
      </keep-alive>
    </Transition>
  </router-view>
  <the-footer></the-footer>
</div>
</template> 

<script>
import MediaQuery from './composable/MediaQuery'
import TheHeader from './components/TheHeader'
import TheFooter from './components/TheFooter'
export default {
  name:'AppComponent',
  components:{
    TheHeader,
    TheFooter,
    // MediaQuery
  },
  setup(){

    const {deviceType,width} = MediaQuery()
    return {deviceType,width}
  }
}
</script>

<style>
@import url('./assets/global.css');
@import url('https://fonts.googleapis.com/css2?family=Rubik:wght@100;200;300;400;500;600;700&display=swap');
@import url('./assets/queries.css');
#app {
  position: relative;
  box-sizing: border-box;
  font-family: "Rubik",sans-serif;
  font-weight: 400;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.page-layout {
  min-height: 100vh;
}
</style>
