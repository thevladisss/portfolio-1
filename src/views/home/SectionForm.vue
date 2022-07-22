<template>
  <section class="section section-form">
    <the-container>
        <form-element
        ></form-element>
    </the-container>
  </section>
</template>

<script>
import FormElement from './local/FormElement'
export default {
components: {
    FormElement
}
}
</script>

<style scoped>
.span-2-cols {
    grid-column: 1/3;
}
.form-img {
    width:100%
}
</style>