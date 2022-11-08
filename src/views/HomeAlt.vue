<template>
    <!-- <form class="budget-box" @submit.prevent="checkBudget"> -->
    <div class="container-services-budgets">
        <form class="budget-box" @submit.prevent="saveBudget">
            <div class="services-list">
                <h2>Choose services for your budget</h2>
                <ul>
                    <li v-for="item, id in services" :key="id">
                        <!-- <router-link :to="{name: 'HomeAlt', params:{id: item.id, slug:item.slug, service: item.service}}"> -->
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
                            <!-- </router-link> -->
                        </li>
                    </ul>
                <h4> Total price: {{ totalPrice }} Eur</h4>
            </div>
            <div class="save-budget">
                <div>
                    <label for="budget">Type a name for your new budget:</label>
                    <input type="text" v-model="budgetName">
                </div>
                <div>
                    <label for="budget">Type your name:</label>
                    <input type="text" v-model="clientName">
                </div>
            </div>
            <button class="app-btn">Save Budget</button>
        </form>
        
        <Budgets 
        :budgetsList="budgetsList"
        :budgetsListAZ="budgetsListAZ"
        :budgetsListSearch="budgetsListSearch"
        :noSort="noSort"
        :azSort="azSort"
        :displaySearch="displaySearch"
        :searchWord="searchWord"
        @sortListAZ="displayBudgetsListAZ"
        @sortListByDate="displayBudgetsListByDate"
        @reset="deleteBudgetsList"
        @search="searchBudget" />
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
                {id: 1, service: false, text:'Website (500 €)', price: 500, slug:'website'},
                {id: 2, service: false, text:'SEO Consulting (300 €)', price: 300, slug:'seo'},
                {id: 3, service: false, text:'Google Ads Campaign (200 €)', price: 200, slug:'googleAds'},
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
            budgetsList: [],

            budgetsListAZ: [],
            budgetsListSearch: [],
            noSort: true,
            azSort: false,
            displaySearch: false,
            searchWord: ''

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
                    // date is no longer needed since all budgets are pushed in a timeline
                    // date: Date.now()
                })
                this.noSort = true
                this.azSort = false
                this.displaySearch = false
                console.log(this.budgetsList);

                // reset all services and budget saving options for a new budget
                this.services.forEach(item => item.service = false)
                this.includedServices = []
                this.pages = 1
                this.languages = 1
                this.extrasPrice = 0
                this.totalPrice = 0
                this.budgetName = ''
                this.clientName = ''
            } else {
                alert('You must provide both, a budget name and a client name, and choose at least one service');
            }
        },
        displayBudgetsListAZ() {
            this.noSort = false
            this.azSort = true
            this.displaySearch = false
            // this.search = ''

            this.budgetsListAZ = [...this.budgetsList]
            .sort(function(a, z) {
                if (a.name < z.name) return -1;
                if (a.name > z.name) return 1;
                return 0;
            })
            console.log(this.budgetsList)
            console.log(this.budgetsListAZ)
        },
        displayBudgetsListByDate() {
            this.noSort = true
            this.azSort = false
            this.displaySearch = false
            // this.search = ''
        },
        deleteBudgetsList() {
            this.budgetsList = []
            this.budgetsListAZ = []
            this.budgetName = ''
            this.clientName = ''
            this.services.map(item => item.service = false)
            this.pages = 1
            this.languages = 1

            this.noSort = true
            this.azSort = false
            this.displaySearch = false
        },
        searchBudget(searchWord) {
            this.noSort = false
            this.azSort = false
            this.displaySearch = true
            console.log(searchWord)
            console.log(this.searchWord)
            
            this.budgetsListSearch = this.budgetsList
            .filter(item => item.name.includes(searchWord))
            console.log(searchWord)
            console.log(this.budgetsList)
            console.log(this.budgetsListSearch)
            
            if (this.budgetsListSearch.length === 0) {
                alert('There is no budget with this name, please try again.')
                this.searchWord = ''
                this.noSort = true
            } else if (searchWord === '') {
                alert('You must insert a text to search')
                this.searchWord = ''
                this.noSort = true
                this.displaySearch = false
            } else if (this.budgetsList.length === 0) {
                alert('There are no budgets to search yet.')
                this.search = ''
                this.displaySearch = true
                this.noSort = true                
            } 
            console.log(searchWord)
        }
    }
}
</script>

<style >

/* button {
    margin: 1.8em 0 0 0;
    padding: 1em 3em;

    font-size: large;
    font-weight: 700;

    color: red;
    background-color: violet;

    border: none;
    border-radius: .5em;

    cursor: pointer;
} */



.container-services-budgets {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;

    margin-bottom: 5em;
}

.budget-box {
    text-align: left;
}

.save-budget {
    display: flex;
    flex-flow: column wrap;
    row-gap: 1em
}

.save-budget input {
    width: 200px
}

.app-btn {
    padding: .5em 1em;
    
    font-family: Avenir, Helvetica, Arial, sans-serif;
    font-size: 1em;
    font-weight: 700;
    
    color: #fefefe;
    background-color: #155396;

    border: 3px solid #add;
    
    cursor: pointer;
}

.app-btn:hover {
    color: #155396;
    background-color: #fefefe;
}

input {
    min-width: 150px;
    padding: .2em 0;

    font-family: Avenir, Helvetica, Arial, sans-serif;
    font-size: 1em;
    
    color: #666;
    background-color: #fefefe;
    
    /* box-sizing: border-box; */
    border-bottom: 2px solid #aaa;
} 

.extras {
    /* max-width: fit-content; */
    margin: 1em 0;
    padding: 1em;

    border: 3px solid black;
    border-radius: .5em;

    display: flex;
    flex-flow: row nowrap;
    column-gap: 2.5em;
}

li>input {
    min-width: 10px;
}

ul {
    list-style: none;
    padding-inline-start: 0;
}

@media screen and (max-width: 992px) {
    .container-services-budgets {
        display: flex;
        flex-flow: column wrap;
        /* justify-content: center; */
        align-content: center;
        
        row-gap: 3em;

        margin-bottom: 0;
    }
}

@media screen and (max-width: 490px){
    .budget-box {
        width: 80%;
        margin: 0 auto
    }

    .save-budget input {
        display: block;
        margin:0
    }
}
</style>


<div v-for="job in jobs" :key="job.id" class="job">
    <router-link :to="{name: 'JobDetails', params: { id: job.id }}">
      <h2>{{ job.title }}</h2>
    </router-link>
  </div>