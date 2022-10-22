<template>
    <form class="budget-box">
        <p>Choose from the list bellow to create your budget</p>
        <ul>
            <li v-for="item, id in services" :key="id">
                <!-- <input type="checkbox" v-model="item.service" :value="item.price" @click="sumPrice(item.service, item.price)"> -->
                <input type="checkbox" v-model="item.service" :value="item.price" @click="toggleService(item)">
                {{ item.text}}
                <ExtrasWeb v-show="item.id === 1 && item.service"/>
            </li>
        </ul>
        <p> Tota price: {{ totalPrice }} Eur</p>
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
            totalPrice: 0
        }
    },
    methods: {
        toggleService(item) {
            // al pasar item como argumento desde el evento todas las instrucciones hay que hacerlas a partir de item.loQueSea
            item.service = !item.service
            this.includedServices = this.services.filter((item) => {
                return item.service === true
            })
            this.sumPrice(this.includedServices)
        },
        sumPrice(includedServices) {
            this.totalPrice = 0
            includedServices.forEach ((item) => {
                this.totalPrice += item.price     
            })
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