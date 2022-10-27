<template>
    <form class="budget-box">
        <h3>Choose from the list bellow to create your budget</h3>
        <ul>
            <li v-for="item, id in services" :key="id">
                
                <input type="checkbox" v-model="item.service" :value="item.price" @click="toggleWeb(item)">
                {{ item.text}}
                
                <div v-if="item.id === 1 && item.service" class="extras">
                    <ExtrasWeb @sumUpExtras="sumExtras"/>
                    <ExtrasCounter :pages="pages" :languages="languages" @modifyExtras="modifyTotalExtras" @countTotalPages="sumTotalPages" @countTotalLanguages="sumTotalLanguages" />
                </div>

            </li>
            
        </ul>
        <h4> Total price: {{ totalPrice }} Eur</h4>
    </form>
    
    <router-link :to="{name: 'Welcome'}">
        <button>BACKWARDS</button>
    </router-link>

</template>

<script>
import ExtrasWeb from '@/components/ExtrasWeb.vue'
import ExtrasCounter from '@/components/ExtrasCounter.vue'
// import SurfSite from '@/components/SurfSite.vue'

export default {
    name: 'HomeAlt',
    components: { ExtrasWeb, ExtrasCounter},
    // components: { ExtrasWeb, ExtrasCounter, SurfSite },
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
            totalPrice: 0,
            showWelcome: true,
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
        // implement non-negative extras
        sumExtras(pages, languages) {
            if (pages <= 1) {
                this.pages = 1
            }
            if (languages <= 1) {
                this.languages = 1
            }
            if (pages <= 1 && languages <= 1) {
                this.extrasPrice = 0
            } else {
                this.extrasPrice = pages * languages * this.extraWeb
                // this.extrasPrice = this.pages * this.languages * this.extraWeb
            }
            this.sumTotal()
        },
        // sumExtras(pages, languages) {
        //     console.log(pages, languages);
        //     if (pages <= 1 && languages <= 1) {
        //         this.extrasPrice = 0
        //     } else {
        //         this.extrasPrice = pages * languages * this.extraWeb
        //         // this.extrasPrice = this.pages * this.languages * this.extraWeb
        //     }
        //     this.sumTotal()
        // },
        sumTotal() {
            this.totalPrice = this.servicesPrice + this.extrasPrice
        },
        addOnePage(){
            this.pages ++
            console.log(this.pages)
            this.sumExtras(this.pages, this.languages)
        },
        subtractOnePage(){
            this.pages --
            console.log(this.pages)
            this.sumExtras(this.pages, this.languages)
        },
        updateTotalPages(action){
            console.log(action)
            if (action === 'add'){
                this.addOnePage()
            } else if (action === 'subtract') {
                this.subtractOnePage()
            }
        },
        modifyTotalExtras(extra, action){
            if (extra === 'pages' && action === 'add'){
                this.pages++
                this.sumExtras(this.pages, this.languages)
            } else if (extra === 'pages' && action === 'subtract'){
                this.pages--
                this.sumExtras(this.pages, this.languages)
            } else if (extra === 'languages' && action === 'add'){
                this.languages++
                this.sumExtras(this.pages, this.languages)
            } else if (extra === 'languages' && action === 'subtract'){
                this.languages--
                // this.sumExtras(this.pages, this.languages)
                this.sumExtras(this.pages, this.languages)
            }
        },
        sumTotalPages(pages) {
            this.pages = pages
            this.sumExtras(pages, this.languages)
        },
        sumTotalLanguages(languages) {
            this.languages = languages
            this.sumExtras(this.pages, languages)
        }
        // toggleWelcome(){
        //     this.showWelcome = !this.showWelcome
        // },
        // backwardsPage(){

        // },
        // forwardPage(){

        // }

    }
}
</script>

<style>

.extras{
    max-width: fit-content;
    margin: 1em 0;
    padding: 1em;

    border: 3px solid black;
    border-radius: .5em;

    display: flex;
    flex-flow: row nowrap;
    column-gap: 2.5em;
}

ul {
  list-style: none;
  padding-inline-start: 0;
}

.budget-box {
  text-align: left;
}
</style>



<li v-for="item, id in services" :key="id">
    <!-- <input type="checkbox" v-model="item.service" :value="item.price" @click="sumPrice(item.service, item.price)"> -->
    <input type="checkbox" v-model="item.service" :value="item.price" @click="toggleWeb(item)">
    {{ item.text}}
    <!-- extraWeb is not needed in ExtrasWeb.vue component because calculation is applied in HomeAlt.vue -->

    <!-- PROBAMOS CON 2 HIJOS EN VEZ DE HIJO Y NIETO -->
    <ExtrasWeb v-if="item.id === 1 && item.service" @sumUpExtras="sumExtras"/>
    <!-- <ExtrasCounter v-if="item.id === 1 && item.service" :pages="pages"  @addPage="addOnePage" @subtractPage="subtractOnePage" /> -->
    
    
    <!-- PROBAMOS UNA SOLA FUNCIÓN PARA PAGES -->
    <!-- <ExtrasCounter v-if="item.id === 1 && item.service" :pages="pages"   @updatePages="updateTotalPages" /> -->
    <!-- PROBAMOS UNA SOLA FUNCIÓN PARA PAGES -->
    
    <!-- PROBAMOS UNA SOLA FUNCIÓN PARA EL COMPONENTE -->
    <ExtrasCounter v-if="item.id === 1 && item.service" :pages="pages" :languages="languages" @modifyExtras="modifyTotalExtras" @countTotalPages="sumTotalPages" @countTotalLanguages="sumTotalLanguages" />
    <!-- PROBAMOS UNA SOLA FUNCIÓN PARA EL COMPONENTE -->


    <!-- <ExtrasWeb v-if="item.id === 1 && item.service" :pages="pages" :languages="languages" :extraWeb="extraWeb" @sumUpExtras="sumExtras"/> -->
    <!-- PROBAMOS CON 2 HIJOS EN VEZ DE HIJO Y NIETO -->
</li>