<template>
  <figure class="testimonial-item">
    <img :src="this.imgSrc" :alt="this.img.alt" class="testimonial-img">
    <blockquote class="testimonial-comment">
        {{this.comment}}
    </blockquote>
    <span class="comment-author">
        {{this.author}}
    </span>
  </figure>
</template>

<script>
export default {
props: {
    img:{
        type:Object,
        required:true,
        validator(val){
            const Img = val.src
            const allowedFormats = ['jpeg','jpg','png']
            const isProperFormat = allowedFormats.some(frm=>{
                return Img.endsWith(frm)
            })
            return isProperFormat
        }
    },
    comment:{
        type:String,
        required:true,
    },
    author:{
        type:String,
        required:true
    }
},
computed: {
    imgSrc(){
        return require(`@/assets/img/customers/${this.img.src}`)
    }
}
}
</script>

<style scoped>
.testimonial-item {
    display: flex;
    flex-direction: column;
    gap:1rem;
    color:#333;
}
.testimonial-img {
    height: 4.8rem;
    width: 4.8rem;
    border-radius: 100%;
}
.testimonial-comment {
    font-size: 1.8rem;
}
.comment-author {
    font-size: 1.4rem;
}
.comment-author::before {
    content: '- '
}
</style>