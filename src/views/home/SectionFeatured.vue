<template>
<section class="section section-featured">
      <the-container class="featured-container">
        <div class="featured-text grayscale">
            As featured in
        </div>
        <div class="featured-logos grayscale">
            <img class="featured-img" src="@/assets/img/logos/business-insider.png" alt="">
            <img class="featured-img" src="@/assets/img/logos/forbes.png" alt="">
            <img class="featured-img" src="@/assets/img/logos/techcrunch.png" alt="">
            <img class="featured-img" src="@/assets/img/logos/the-new-york-times.png" alt="">
            <img class="featured-img" src="@/assets/img/logos/usa-today.png" alt="">
        </div>
  </the-container>
</section>
</template>

<script>
export default {


}
</script>

<style scoped>
.section-featured {}
.featured-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap:3rem;
    color:#fff;
}
.grayscale {
    filter:grayscale(90%);
    filter:contrast(0%);
    transition: all 0.6s ease;
}
.featured-text {
    text-transform: uppercase;
    font-size: 1.8rem;
    font-weight: 700;
}
.featured-logos {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap:2.6rem;
    /* padding: 0 */
}
.featured-img {
    max-height: 3.2rem;
    width:auto;
    cursor:pointer;
}
.grayscale:hover {
    filter:grayscale(0%);
    filter:contrast(100%)
}
@media (max-width:62.5em){
    .featured-logos {
        display: grid;
        grid-template-columns: repeat(2,1fr);
        justify-items: center;
    }
}
@media (max-width:45em){
    .featured-logos {
        grid-template-columns: 1fr;
    }
}
</style>