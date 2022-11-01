<template>
    <!-- <form class="budget-box" @submit.prevent="checkBudget"> -->
    <div class="container-services-budgets">
        <form class="budget-box" @submit.prevent="saveBudget">
            <div class="services-list">
                <h2>Choose from the list bellow to create your budget</h2>
                <ul>
                    <li v-for="item, id in services" :key="id">
                        <input type="checkbox" v-model="item.service" :value="item.price" @click="toggleWeb(item)">
                        {{ item.text}}
                        <div v-if="item.id === 1 && item.service" class="extras">
                            <ExtrasWeb :pages="pages" :languages="languages"/>
                            <ExtrasCounter
                                :pages="pages"
                                :languages="languages"
                                @modifyExtras="modifyTotalExtras"
                                @countTotalPages="sumTotalPages"
                                @countTotalLanguages="sumTotalLanguages" />
                        </div>
                    </li>
                </ul>
                <h4> Total price: {{ totalPrice }} Eur</h4>
            </div>
            <div>
                <div class="budget">
                    <label for="budget">Type a name for your new budget:</label>
                    <input type="text" v-model="budgetName" placeholder="">
                </div>
                <div>
                    <label for="budget">Type your name:</label>
                    <input type="text" v-model="clientName" placeholder="">
                </div>
            </div>
            <button class="saveBudget">Save Budget</button>
        </form>
        <Budgets class="budgets-list" :budgetsList="budgetsList" />
    </div><!-- container-services-budgets -->



    <router-link :to="{name: 'Welcome'}">
        <button>BACKWARDS</button>
    </router-link>

</template>

<script>
import ExtrasWeb from '@/components/ExtrasWeb.vue'
import ExtrasCounter from '@/components/ExtrasCounter.vue'
import Budgets from '@/components/Budgets.vue'


export default {
    name: 'HomeAlt',
    components: { ExtrasWeb, ExtrasCounter, Budgets },
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
            budgetName: '',
            clientName: '',
            budgetsList: []
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
        },
        sumExtras(pages, languages) {
            if (pages <= 1) {
                this.pages = 1
            }
            if (languages <= 1) {
                this.languages = 1
            }
            if (pages <= 1 && languages <= 1) {
                this.extrasPrice = 0
            }
            else {
                this.extrasPrice = pages * languages * this.extraWeb
            }
            this.sumTotal()
        },
        sumTotal() {
            if (this.services[0].service === true) {
                this.totalPrice = this.servicesPrice + this.extrasPrice
            } else {
                this.totalPrice = this.servicesPrice
            }
        },
        addOnePage(){
            this.pages ++
            this.sumExtras(this.pages, this.languages)
        },
        subtractOnePage(){
            this.pages --
            this.sumExtras(this.pages, this.languages)
        },
        updateTotalPages(action){
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
                this.pages === 1 ? this.pages = 1 : this.pages --
                this.sumExtras(this.pages, this.languages)
            } else if (extra === 'languages' && action === 'add'){
                this.languages++
                this.sumExtras(this.pages, this.languages)
            } else if (extra === 'languages' && action === 'subtract'){
                this.languages === 1 ? this.languages = 1 : this.languages --
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
        },
        saveBudget() {
            if ( this.includedServices.length > 0 && this.budgetName != '' && this.clientName != '') {
                this.budgetsList.push({
                    id: this.budgetsList.length + 1,
                    name: this.budgetName,
                    client: this.clientName,
                    service: this.includedServices,
                    budgetPrice: this.totalPrice,
                    date: Date.now()
                })
            } else {
                alert('You must provide both, a budget name and a client name, and choose at least one service');
            }
        },
        
    }
}
</script>

<style>
.container-services-budgets{
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;

    margin-bottom: 5em;
}

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

<!-- V A L I D A T E -->
<!-- saveBudget(){
    if (this.budgetsList.length === 0){
        this.saveBudget()
    }else if (this.budgetsList.map(data => data.name.includes(this.budgetName)) && this.budgetsList.map(data => data.client.includes(this.clientName))){
        alert ('You already have created a budget with this name, please select another name before saving your new budget')
    } else {
        this.saveBudget()
    }
} -->
<!-- V A L I D A T E -->