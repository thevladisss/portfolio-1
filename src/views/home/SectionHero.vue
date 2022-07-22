<template>
<section class="section-hero">
    <the-container>
    <div class="hero-container grid grid-2-cols">
        <div class="hero-text">
          <h1 class="primary-heading">A healthy meal delievered to your door, every single day</h1>
          <p class="hero-description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
            Vitae quo accusamus fugiat eum similique corrupti ducimus possimus, 
            perspiciatis quaerat hic aliquam aperiam delectus. 
            Quos vero, velit harum magnam cupiditate id.
          </p>
          <div class="buttons-block">
            <the-button color="orange">Start eating well!</the-button>
            <the-button color="white">Learn more</the-button>
          </div>
          <section class="feedback-block">
            <div class="feedback-photos">
              <img class="customer-img" src="@/assets/img/customers/customer-1.jpg" alt="">
              <img class="customer-img" src="@/assets/img/customers/customer-2.jpg" alt="">
              <img class="customer-img" src="@/assets/img/customers/customer-3.jpg" alt="">
              <img class="customer-img" src="@/assets/img/customers/customer-4.jpg" alt="">
              <img class="customer-img" src="@/assets/img/customers/customer-5.jpg" alt="">
              <img class="customer-img" src="@/assets/img/customers/customer-6.jpg" alt="">
            </div>
            <div class="feedback-text">
              <h4>
                <span class="text-orange">250.000+ </span>meals delievered last year!</h4>
            </div>
          </section>
        </div>
        <div class="hero-image">
          <img src="@/assets/img/hero.png" alt="" class="hero-img">
        </div>
    </div>
  </the-container>
</section>
</template>

<script>
export default {

}
</script>

<style scoped>
.section-hero {
    padding: 4rem 0;
    background-color: #faf1e9;;
}
.hero-container {
  /* display: flex;
  width: 100%;
  justify-content: space-between;
  gap:2rem; */
}
.hero-text {
  color:rgb(30, 28, 28);
  width:100%;
  /* background-color: red; */
}
.hero-image {
  width:100%;
  /* background-color: blue; */
}
.hero-image img {
  width: 100%;
}
.buttons-block {
  display: flex;
  gap: 2rem;
  margin-bottom: 6rem;
}
.feedback-block {
  width: 100%;
  margin-top:3rem;
  display: flex;
  gap:1.6rem;
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
  height: 4.6rem;
  /* height:auto; */
  border-radius: 100%;
  margin-right:-1.4rem;
}
.customer-img:first-of-type {
  margin-right: none;
}
@media (max-width:70em){
    .primary-heading {
        /* font-size: 5.2rem; */
    }
    .hero-description {
        /* font-size: 2.6rem; */
    }
  }
/* @media (max-width:62.5em){
   .primary-heading {
        font-size: 4.8rem;
    }
    .hero-description {
      font-size:2.4rem
    }
} */
/* @media (max-width:56em){
  .primary-heading {
    font-size: 4.2rem;
  }
  .hero-description {
    font-size: 2rem;
  }
} */
/* @media (max-width:45em){
  .hero-container {
    display: block;
  }
  .hero-text {
    width:100%
  }
     .hero-image {
        display: none;
    }
  .feedback-block {
    flex-direction: column;
  }
} */
</style>

