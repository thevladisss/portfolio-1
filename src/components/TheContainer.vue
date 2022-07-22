<template>
  <div class="container">
    <slot></slot>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.container {
max-width: 140rem;
padding:0 2rem;
margin: 0 auto;
}
@media (max-width:75em){
      .container {
      max-width: 120rem;
      /* background-color:red; */
      padding:0 3rem;
    }
}
@media (max-width:62em){
  .container {
    max-width: 110rem;
    /* background-color: pink; */
  }
}
@media (max-width:47.5em) {
  .container {
    max-width: 90em;
    /* background-color:yellow; */
  }
}
@media (max-width:35em) {
    .container {
      max-width: 75rem;
      /* background-color: aquamarine; */
    }
}
</style>