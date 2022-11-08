<template>
    <div class="budgets-list">
        <h2>Budgets List:</h2>
        
        <div class="budgets-nav">
            <!-- <button @click="displayAZ"> Alphabetical Order </button> -->
            <!-- <button @click="displayByDate"> Creation Order </button> -->
            
            <button class="app-btn" @click="sortAZ"> Alphabetical Order </button>
            <button class="app-btn" @click="sortByDate"> Creation Order </button>
            <button class="app-btn" @click="resetBudgetsList"> Delete All</button>
        </div>

        <form class="search" @submit.prevent="searchBudget">
            <label for="search">Budget name:</label>
            <input type="text" v-model="searchWord">
            <button class="app-btn">Search Budget</button>
        </form>
        
        <ul v-if="noSort">
            <li v-for="item, id in budgetsList" :key="id">
                <p>Client: <strong>{{ item.client }}</strong>  -  Budget: <strong>{{ item.name }}</strong></p>
                <!-- <h5>Services included: {{ item.service }}
                        <li v-for="item, id in ITEM.SERVICE" :key="id">
                            {{ item.text }}
                        </li>
                    </h5> -->
                <p>Budget Total Price: <strong>{{ item.budgetPrice }}</strong> Eur</p>
                <div class="separator"></div>
            </li>
        </ul>
        <ul v-if="azSort">
            <li v-for="item, id in budgetsListAZ" :key="id">
                <p>Client: <strong>{{ item.client }}</strong>  -  Budget: <strong>{{ item.name }}</strong></p>
                <!-- <h5>Services included: {{ item.service }}
                        <li v-for="item, id in ITEM.SERVICE" :key="id">
                            {{ item.text }}
                        </li>
                    </h5> -->
                <p>Budget Total Price: <strong>{{ item.budgetPrice }}</strong> Eur</p>
                <div class="separator"></div>
            </li>
        </ul> 
        <ul v-if="displaySearch">
            <li v-for="item, id in budgetsListSearch" :key="id">
                <p>Client: <strong>{{ item.client }}</strong>  -  Budget: <strong>{{ item.name }}</strong></p>
                <!-- <h5>Services included: {{ item.service }}
                        <li v-for="item, id in ITEM.SERVICE" :key="id">
                            {{ item.text }}
                        </li>
                    </h5> -->
                <p>Budget Total Price: <strong>{{ item.budgetPrice }}</strong> Eur</p>
                <div class="separator"></div>
            </li>
        </ul>

    </div>
</template>

<script>
export default {
    name: 'Budgets',
    // props: ['budgetsList'],
    props: ['budgetsList', 'budgetsListAZ', 'budgetsListSearch', 'noSort', 'azSort', 'displaySearch', 'searchWord'],
    // emits: ['reset'],
    emits: ['sortListAZ', 'sortListByDate', 'reset', 'search' ],
    data() {
        return {
            // noSort: true,
            // azSort: false,
            // dateSort: false,
            // displaySearch: false,
            // budgetsListAZ: [],
            // budgetsListByDate: [],
            // budgetsListSearch: [],
            // searchWord: '',
        }
    },
    watch: {
        budgetsList() {
            console.log('budgetsList Listened!');
            // this.noSort = true
            // this.azSort = false
            // this.displaySearch = false
         
            // this.dateSort = false
        }
    },
    methods: {
        // displayAZ() {
        //     this.noSort = false
        //     this.azSort = true
        //     // this.dateSort = false
        //     this.displaySearch = false
        //     this.search = ''
        //     this.budgetsListAZ = [...this.budgetsList]
        //     .sort(function(a, z) {
        //         if (a.name < z.name) return -1;
        //         if (a.name > z.name) return 1;
        //         return 0;
        //     })

        //     console.log(this.budgetsList)
        //     console.log(this.budgetsListAZ)
        // },
        sortAZ() {
            this.$emit('sortListAZ')
        },
        sortByDate() {
            this.$emit('sortListByDate')
        },
        // displayByDate() {
        //     this.noSort = true
        //     this.azSort = false
        //     this.displaySearch = false
        //     this.search = ''
        // },
        // displayByDate() {
        //     console.log('DISPLAY BY DATE');
        //     // this.noSort = false
        //     this.azSort = false
        //     // this.dateSort = true
        //     this.displaySearch = false
        //     this.noSort = true
        //     this.search = ''
        //     this.budgetsListByDate = [...this.budgetsList]
        //     .sort(function(a, z) {
        //         if (a.date < z.date) return -1;
        //         if (a.date > z.date) return 1;
        //         return 0;
        //     })
            
        //     console.log(this.budgetsList)
        //     // console.log(this.budgetsListByDate)
        //     // console.log(this.searchBudgetName)
        // },
        resetBudgetsList() {
            this.$emit('reset')
            
            // this.search = ''


            // this.budgetsListAZ = []
            // this.budgetsListByDate = []
            // this.noSort = true
            // this.azSort = false
            // this.dateSort = false
            // this.displaySearch = false
        },
        searchBudget() {
            this.$emit('search', this.searchWord)
            console.log(this.searchWord);
            // this.noSort = false
            // this.azSort = false
            // // this.dateSort = false
            // this.displaySearch = true

            // this.budgetsListSearch = this.budgetsList
            // .filter(item => item.name.includes(this.search))

            // if (this.budgetsListSearch.length === 0) {
            //     alert('There is no budget with this name, please try again.')
            //     this.search = ''
            //     this.noSort = true
            // } else if (this.search === '') {
            //     alert('You must insert a text to search')
            //     this.search = ''
            //     this.noSort = true
            //     this.displaySearch = false
            // } else if (this.budgetsList.length === 0) {
            //     alert('There are no budgets yet.')
            //     this.search = ''
            //     this.displaySearch = true
            //     this.noSort = true                
            // }
        }
    }
}

</script>

<style >

.budgets-list {
    display: flex;
    flex-flow: column wrap;
}

.budgets-list>ul {
    margin: 0;
}

.budgets-nav {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
}

.budgets-nav>.app-btn {
    margin-top: .5em
}

/*.budgets-nav>p:hover {
    font-weight: 700;
    
    color: white;
    background-color: #666;
} */

.search {
    margin: 1em 0;
    
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-evenly;
    align-items: baseline;
}

.search input {
    min-width: 180px;
    padding: .5em 1em;

    font-family: Avenir, Helvetica, Arial, sans-serif;
    font-size: 1em;
    
    color: #666;
    background-color: #fefefe;
    
    /* box-sizing: border-box; */
    border-bottom: 2px solid #aaa;
}

li>p {
    text-align: left;
    padding-left: 1em;
}



/* .search>button {
    padding: .5em 1em;
    
    font-family: Avenir, Helvetica, Arial, sans-serif;
    font-size: 1em;
    font-weight: 700;

    color: #666;
    background-color: #eee;

    border: none;

    cursor: pointer;
}

.search>button:hover {
    color: white;
    background-color: #666;
} */

/* ul {
    list-style: none;
    padding-inline-start:0;
} */

.separator {
    width: 100%;
    border-bottom: 1px solid #155396;
    /* border-bottom: 1px solid #fefefe; */
    margin-bottom: 2em;

}

@media screen and (max-width: 992px) {
    .budgets-list {
        border-top: 1px solid #155396;
        padding-top: 1em;
    }
}

@media screen and (max-width: 490px){
    .budgets-list {
        width: 80%;
        margin: 0 auto
    }

    .budgets-nav {
        display: flex;
        flex-flow: column wrap;
        justify-content: center;
    }

    .search {
        margin: 1em 0;
        
        display: flex;
        flex-flow: column nowrap;
        justify-content: space-evenly;
        align-items: baseline;
    }


}

/* @media screen and (min-width: 490px){
    .budgets-nav {
        display: flex;
        flex-flow: column wrap;
        justify-content: center;
    }

    .search {
        margin: 1em 0;
        
        display: flex;
        flex-flow: column nowrap;
        justify-content: space-evenly;
        align-items: baseline;
    }
} */

</style>

<ul v-if="dateSort">
    <!-- <li v-for="item, id in budgetsListByDate" :key="id"> -->
    <li v-for="item, id in budgetsList" :key="id">
        <p>Client: <strong>{{ item.client }}</strong>  -  Budget: <strong>{{ item.name }}</strong></p>
        <!-- <h5>Services included: {{ item.service }}
                <li v-for="item, id in ITEM.SERVICE" :key="id">
                    {{ item.text }}
                </li>
            </h5> -->
        <p>Budget Total Price: <strong>{{ item.budgetPrice }}</strong> Eur</p>
        <div class="separator"></div>
    </li>
</ul>
 