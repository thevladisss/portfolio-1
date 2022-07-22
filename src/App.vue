<template>
<div>
  <h1>{{deviceType}}</h1>
  <the-header></the-header>
  <router-view v-slot="{ Component }">
    <Transition
     name="fade"
     appear
     mode="out-in"
     >
      <keep-alive>
        <component :is="Component"></component>
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
  /* font-size:62.5%; */
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
