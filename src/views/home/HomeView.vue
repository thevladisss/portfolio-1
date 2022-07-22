<template>
  <div>
    <the-modal @close-modal="show=false" :show="show" title="Some error">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis impedit inventore recusandae. Molestiae expedita dolore sit, nobis nemo perferendis ut ab laboriosam illum, quae, in magni culpa facilis quo. At?
    </the-modal>
    <section-hero></section-hero>
    <section-featured></section-featured>
    <section-how></section-how>
    <section-meals></section-meals>
    <section-testimonials></section-testimonials>
    <section-pricing></section-pricing>
    <section-notes></section-notes>
    <section-form></section-form>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import SectionHero from './SectionHero'
import SectionFeatured from './SectionFeatured'
import SectionHow from './SectionHow'
import SectionMeals from './SectionMeals'
import SectionTestimonials from './SectionTestimonials'
import SectionPricing from './SectionPricing'
import SectionNotes from './SectionNotes'
import SectionForm from './SectionForm'
import { ref } from 'vue'
export default {
  name: 'HomeView',
  components:{
    SectionHero,
    SectionFeatured,
    SectionHow,
    SectionMeals,
    SectionTestimonials,
    SectionPricing,
    SectionNotes,
    SectionForm
  },
  setup(){
    const show = ref(true)
    // onMounted(()=>{
    //   console.log(inject('queries'))
    // })
    return {show}
  }
}
</script>
<style scoped>
.hero-container {
  padding: 4rem 0;
  display: flex;
  width: 100%;
  /* flex-direction: row; */
  justify-content: space-between;
  gap:2rem;
}
.hero-text {
  color:rgb(30, 28, 28);
  width:50%;
  /* background-color: red; */
}
.hero-image {
  width:50%;
  /* background-color: blue; */
}
.hero-image img {
  width: 100%;
}
.primary-heading {
  /* color:rgb(30, 28, 28); */
  font-weight: 700;
  font-size: 5.8rem;
  letter-spacing: -0.5px;
  line-height: 1.1;
  margin-bottom: 2.4rem;
}
.hero-description {
  font-size: 2.8rem;
  margin-bottom: 3.2rem;
}
.buttons-block {
  display: flex;
  gap: 2rem;
  margin-bottom: 6rem;
}
.feedback-block {
  margin-top:3rem;
  display: flex;
  /* gap:1rem; */
  justify-content: space-around;
}
.feedback-photos {
  display: flex;
}
.feedback-text {
  font-size: 1.8rem
}
.text-orange {
  color:rgba(219, 140, 23, 0.823);
  font-weight:700;
}
.customer-img {
  width:4.6rem;
  height:auto;
  border-radius: 100%;
  margin-right:-1.4rem;
}
.customer-img:first-of-type {
  margin-right: none;
}
</style>
