<template>
  <section class="section section-testimonials">
        <the-container class="grid grid-2-cols">
            <div class="first-container">
                <span class="pre-heading-text">
                    Testimonials
                </span>
                <h3 class="section-heading">
                    Once you try it, you can't go back
                </h3>
                <div class="testimonials-container grid grid-2-cols">
                    <testimonial-item
                    v-for="tsm in testimonialsData"
                    :key="tsm.id"
                    :img="tsm.img"
                    :comment="tsm.comment"
                    :author="tsm.author"
                    ></testimonial-item>
                </div>
            </div>
            <gallery-component
            style="align-self:end"
            :imgData="testiomonialsImages"
            ></gallery-component>
        </the-container>
  </section>
</template>

<script>
import { components_store } from '@/store/components_store'
import { computed} from 'vue'
import TestimonialItem from './local/TestimonialItem'
import GalleryComponent from './local/GalleryComponent'
export default {
components: {
    TestimonialItem,
    GalleryComponent
},
setup(){
const componentsStore = components_store()
const testimonialsData = computed(()=>componentsStore.getTestimonialsData)
 const testiomonialsImages = computed(()=>componentsStore.getTestimonialsImg)
 return {testimonialsData,testiomonialsImages}
}
}
</script>

<style scoped>
.section-testimonials {
    color:#333;
    background-color:var(--section-background)
}
.first-container {
    display: flex;
    flex-direction: column;
}
.testimonials-container {

}
</style>