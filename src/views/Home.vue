<template>
  <div class="budget-box">
    <p>Choose from the list bellow to create your budget</p>
    <ul>
      <li>
        <input type="checkbox" v-model="web" @click="toggleWebPrice(500)">Website (500€)
      </li>
      <li>
        <input type="checkbox" v-model="seo" @click="toggleSeoPrice">SEO Consulting (300€)
      </li>
      <li>
        <input type="checkbox" v-model="ads" @click="toggleAdsPrice">Google Ads Campaing (200€)
      </li>
    </ul>
    <p>Total: {{totalPrice}} Euros </p>
  </div>
</template>

<script>
// @ is an alias to /src
// import Checkbox from '@/components/Checkbox.vue'

export default {
  name: 'Home', 
  data () {
    return {
      web : false,
      seo : false,
      ads : false,
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
    sumTotal() {
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
