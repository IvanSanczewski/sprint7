<template>
    <form class="budget-box">
        <p>Choose from the list bellow to create your budget</p>
        <ul>
            <li v-for="item, service in services" :key="service">
                <input type="checkbox" v-model="item.service" :value="item.price">
                {{ item.text}}
            </li>
        </ul>
    </form>
</template>

<script>
export default {
    name: 'HomeAlt',
    data() {
        return {
            services: [
                {service: 'web', text:'Website (500 €)' , price: 500},
                {service: 'seo', text:'SEO Consulting (300 €)' , price: 200},
                {service: 'ads', text:'Google Ads Campaign (200 €)' , price: 300},
            ],
            totalPrice: 0
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