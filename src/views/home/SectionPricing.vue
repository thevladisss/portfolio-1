<template>
  <section class="section section-pricing">
    <the-container class="section-container">
        <span class="pre-heading-text">
            Pricing
        </span>
        <h3 class="section-heading">
            Eating well without breaking the bank
        </h3>
        <div class=" grid grid-2-cols pricing-offers" >
            <pricing-item
            v-for="offer in offersData"
            :key="offer.id"
            :id="offer.id"
            :title="offer.title"
            :price="offer.price"
            :description="offer.description"
            :pack-data="offer.packData"
            :special="offer.special"
            :discount="offer.discount"
            :action-text="offer.special?'Best option':'Start eating well'"
            ></pricing-item>
        </div>
    </the-container>
  </section>
</template>

<script>
import {price_store} from '@/store/price_store'
import PricingItem from './local/PricingItem'
export default {
components: {
    PricingItem
},
setup(){
    const priceStore = price_store()
    const offersData = priceStore.getOffersData



    return {offersData}
}
}
</script>

<style scoped>
.section-pricing {
    color:#333;
    /* padding:4rem 0 4.6rem 0; */
    background-color: #fff;
}
.orange-text {
    color:orange;
    text-transform: uppercase;
    font-size: 1.4rem;
    display: inline-block;
    margin-bottom: 1rem;
}
.section-heading {
    font-size: 4.2rem;
    letter-spacing: -0.5px;
    line-height: 1.2;
    margin-bottom: 3.2rem;
}
.section-container {
    display: flex;
    flex-direction: column;
}
.pricing-offers {
    column-gap:6rem
}
</style>