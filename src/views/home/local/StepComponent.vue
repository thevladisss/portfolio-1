<template>
<the-container :class="['grid', 'grid-2-cols','step-container']">  
    <section :class="['step-text', this.textReverse]">
        <p  class="step-number" :class="hoverActive?'hoverNum':''">{{this.number}}</p>
        <h4 class="step-heading">{{this.heading}}</h4>
        <p class="step-description">
            {{this.description}}
        </p>
        </section> 
        <section :class="['step-illustration', this.imgReverse]">
       <img  class="step-img" :src="this.imgSrc" :alt="this.img.alt" @mouseover="this.hoverImage" @mouseout="this.hoverImage">
    </section>
</the-container>
</template>

<script>
export default {
props:{
    heading:{
        type:String,
        required:true
    },
    number:{
        type:String,
        required:true
    },
    description: {
        type:String,
        required:true
    },
    img:{
        type:Object,
        required:true
    },
    id: {
        type:Number,
        default(prop){
            return Number(prop.number)
        }
    }
},
data(){
    return {
        hoverActive:false
    }
},
methods:{
    hoverImage(){
        this.hoverActive=!this.hoverActive
    }
},
    computed: {
        imgSrc(){
            return require('../../../assets/img/app/'+this.img.src)
        },
        textReverse(){
            return this.id%2==0?'step-text-reverse':''
        },
        imgReverse(){
            return this.id%2==0?'step-illustration-reverse':''
        }
    }
}
</script>

<style scoped>
.step-container {
    align-items: center;
    margin-top:4rem;
    margin-bottom: 4rem;
}

.step-number {
    font-weight: 800;
    font-size: 5.8rem;
    color:#adb5bd;
    filter: grayscale(80%);
    margin-bottom:1rem;
}
.step-heading {
    font-size: 3.6rem;
    font-weight: 700;
    margin-bottom: 2.4rem;
}
.step-description {
    font-size: 1.8rem;
}
.step-illustration {
    display: flex;
    justify-content: center;
    align-items: center;
        position: relative;
}
.step-img {
    width:40%;
    /* width:16rem; */
    transition:all 0.7s ease
}
.step-img:hover,.step-img:active {
    cursor: pointer;
    transform: scale(1.05);
}
.step-illustration::before {
    z-index: -1;
    position:absolute;
    content: '';
    height:55%;
    width:50%;
    background-color: #ffe8cc;
    border:3rem solid #fff4e6;
    border-radius: 50%;
    top:50%;
    left: 50%;
    transform: translate(-50%,-50%);
}
.step-illustration-reverse {
    grid-column: 1;
    grid-row:1;
}
.step-text-reverse {
     grid-column: 2;
    grid-row:1;   
}
.hoverNum {
    color:#ff922b;
    filter:none
}
</style>>
