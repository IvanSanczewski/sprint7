<template>
    <form class="budget-box">
        <p>Choose from the list bellow to create your budget</p>
        <ul>
            <li v-for="item, id in services" :key="id">
                <!-- <input type="checkbox" v-model="item.service" :value="item.price" @click="sumPrice(item.service, item.price)"> -->
                <input type="checkbox" v-model="item.service" :value="item.price" @click="toggleWeb(item)">
                {{ item.text}}
                <ExtrasWeb v-if="item.id === 1 && item.service" :pages="pages" :languages="languages" :extraWeb="extraWeb" @sumUpExtras="sumExtras"/>
            </li>
        </ul>
        <p> Total Extras: {{ extrasPrice }} Eur</p>
        <p> Total price: {{ servicesPrice }} Eur</p>
        <p> Total price: {{ totalPrice }} Eur</p>
    </form>
</template>

<script>
import ExtrasWeb from '@/components/ExtrasWeb.vue'

export default {
    name: 'HomeAlt',
    components: { ExtrasWeb },
    data() {
        return {
            services: [
                {id: 1, service: false, text:'Website (500 €)', price: 500},
                {id: 2, service: false, text:'SEO Consulting (300 €)', price: 300},
                {id: 3, service: false, text:'Google Ads Campaign (200 €)', price: 200},
            ],
            includedServices: [],
            pages: 1,
            languages: 1,
            extraWeb: 30,
            extrasPrice: 0,
            servicesPrice:0,
            totalPrice: 0
        }
    },
    methods: {
       
        toggleWeb(item) {
            // al pasar item como argumento desde el evento todas las instrucciones hay que hacerlas a partir de item.loQueSea
            item.service = !item.service
            this.includedServices = this.services.filter((item) => {
                return item.service === true
            })
            this.sumService(this.includedServices)
        },
        sumService(includedServices) {
            this.servicesPrice = 0
            includedServices.forEach ((item) => {
                this.servicesPrice += item.price  
            })
            this.sumTotal()
            // this.sumTotal(this.servicesPrice)
        },
        sumExtras(pages, languages) {
            if (pages <= 1 && languages <= 1) {
                this.extrasPrice = 0
            } else {
                this.extrasPrice = pages * languages * this.extraWeb
                // this.extrasPrice = this.pages * this.languages * this.extraWeb
            }
            this.sumTotal()
            // this.sumTotal(this.extrasPrice)
        },
        // try to call it with arguments, bur so far it does not work
        sumTotal() {
            this.totalPrice = this.servicesPrice + this.extrasPrice
        },
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