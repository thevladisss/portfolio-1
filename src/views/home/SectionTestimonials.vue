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
            :imgData="imagesData"
            ></gallery-component>
        </the-container>
  </section>
</template>

<script>
import { ref,computed} from 'vue'
import TestimonialItem from './local/TestimonialItem'
import GalleryComponent from './local/GalleryComponent'
export default {
components: {
    TestimonialItem,
    GalleryComponent
},
setup(){
const testimonialsData = ref(
    [
        {
        id:1,
        img:{src:'dave.jpg',alt:'Dave'},
        comment:
            `Lorem ipsum dolor sit amet consectetur, 
            adipisicing elit. Doloremque fugit nostrum 
            fugiat iure numquam atque! Aperiam ea, architecto 
            iure, aut ipsam, veritatis vitae a voluptatem 
            cupiditate natus impedit temporibus earum`,
        author:'Dave Bryson'
        },
        {id:2,
        img:{src:'ben.jpg',alt:'Ben'},
        comment:
            `Lorem ipsum dolor sit amet consectetur, 
            adipisicing elit. Doloremque fugit nostrum 
            fugiat iure numquam atque! Aperiam ea, architecto 
            iure, aut ipsam, veritatis vitae a voluptatem 
            cupiditate natus impedit temporibus earum`,
        author:'Ben Hadleyy'
        },
        {
        id:3,
        img:{src:'steve.jpg',alt:'Dave'},
        comment:
            `Lorem ipsum dolor sit amet consectetur, 
            adipisicing elit. Doloremque fugit nostrum 
            fugiat iure numquam atque! Aperiam ea, architecto 
            iure, aut ipsam, veritatis vitae a voluptatem 
            cupiditate natus impedit temporibus earum`,
        author:'Steve Miller'
        },
        {id:4,
        img:{src:'hannah.jpg',alt:'Ben'},
        comment:
            `Lorem ipsum dolor sit amet consectetur, 
            adipisicing elit. Doloremque fugit nostrum 
            fugiat iure numquam atque! Aperiam ea, architecto 
            iure, aut ipsam, veritatis vitae a voluptatem 
            cupiditate natus impedit temporibus earum`,
        author:'Hannah Smith'
        }
    ]
)
const imagesData = ref([
    {src:'gallery-1.jpg'},
    {src:'gallery-2.jpg'},
    {src:'gallery-3.jpg'},
    {src:'gallery-4.jpg'},
    {src:'gallery-5.jpg'},
    {src:'gallery-6.jpg'},
    {src:'gallery-7.jpg'},
    {src:'gallery-8.jpg'},
    {src:'gallery-9.jpg'},
    {src:'gallery-10.jpg'},
    {src:'gallery-11.jpg'},
    {src:'gallery-12.jpg'}
])

const getImagesData = computed(()=>{
    if(windowMatch.value){
        return imagesData.value.slice(0,9)
    }
    else 
    return imagesData.value

})
const windowWidth = window.matchMedia("(max-width: 1000px)");
windowWidth.onchange = ()=>{
    windowMatch.value=windowWidth.matches
    console.log(windowMatch.value)
    }
const windowMatch = ref(windowWidth.matches)

 return {testimonialsData,getImagesData,imagesData}
}
}
</script>

<style scoped>
.section-testimonials {
    color:#333;
    /* padding:4rem 0 4.6rem 0; */
    background-color:#faf1e9;;
}
.first-container {
    display: flex;
    flex-direction: column;
}
.testimonials-container {

}
/* .orange-text {
    color:orange;
    text-transform: uppercase;
    font-size: 1.4rem;
    display: inline-block;
    margin-bottom: 1rem;
}
.testimonials-heading {
    font-size: 4.2rem;
    letter-spacing: -0.5px;
    line-height: 1.2;
    margin-bottom: 3.2rem;
} */
</style>