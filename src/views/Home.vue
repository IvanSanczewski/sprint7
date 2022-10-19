<template>
  <div class="budget-box">
    <p>Choose from the list bellow to create your budget</p>
    <ul>
      <li>
        <!-- <input type="checkbox" v-model="web" @click="addPrice(0, 500)">Website (500€) -->
        <input type="checkbox" v-model="web" @click="toggleWebPrice(500)">Website (500€)
        <ExtrasWeb />
      </li>
      <li>
        <!-- <input type="checkbox" v-model="seo" @click="addPrice(1, 300)">SEO Consulting (300€) -->
        <input type="checkbox" v-model="seo" @click="toggleSeoPrice">SEO Consulting (300€)
      </li>
      <li>
        <!-- <input type="checkbox" v-model="ads" @click="addPrice(2, 200)">Google Ads Campaing (200€) -->
        <input type="checkbox" v-model="ads" @click="toggleAdsPrice">Google Ads Campaing (200€)
      </li>
    </ul>
    <p>Total: {{totalPrice}} Euros </p>
  </div>
</template>

<script>
import ExtrasWeb from '@/components/ExtrasWeb.vue'

export default {
  components: { ExtrasWeb },
  name: 'Home', 
  data () {
    return {
      web : false,
      seo : false,
      ads : false,
      // usar array solo si se implementa la función flecha con método que itere
      // price: [
      //   {web: 0},
      //   {seo: 0},
      //   {ads: 0}
      // ],
      webPrice: 0,
      seoPrice: 0,
      adsPrice: 0,
      totalPrice: 0
    }
  }, methods: {
    toggleWebPrice(web) {
      if (!this.web) {
        this.webPrice = web
      } else {
        this.webPrice = 0
      }
      //extraWeb(webs,languages)
      this.sumTotal()
    },
    toggleSeoPrice() {
      if (!this.seo) {
        this.seoPrice = 300
      } else {
        this.seoPrice = 0
      }
      this.sumTotal()
    },
    toggleAdsPrice() {
      if (!this.ads) {
        this.adsPrice = 200
      } else {
        this.adsPrice = 0
      }
      this.sumTotal()
    },

    // add arrow function with iteration method that will calculate price of each element on the price array
    // addPrice (service, price) {
    //   if (this.price[service]){
    //     this.price[service] = price
    //     // console.log(this.price[service], service, price)
    //   } else {
    //     this.price[service] = 0
    //   }
    //   this.sumTotal()
    // },
    sumTotal() {
      // this.totalPrice = this.price[0] + this.price[1] + this.price[2]
      this.totalPrice = this.webPrice + this.seoPrice + this.adsPrice
    }
  }
}
</script>

<style>
ul {
  list-style: none;
  padding-inline-start: 0;
}

.budget-box {
  text-align: left;
}
</style>
