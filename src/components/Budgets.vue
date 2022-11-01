<template>
    <div class="budget-list">
        <h2>Budgets List:</h2>
        
        <div class="budgets-nav">
            <button @click="displayAZ"> Alphabetical Order </button>
            <button @click="displayByDate"> Creation Order </button>
            <button @click="resetBudgetsList"> Reset Order </button>
        </div>
        
        <!-- <ul>
            <li v-for="item, id in buttons" :key="id">
                <button @click="item.function" >{{ item.text }}</button>
            </li>
        </ul> -->

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
        <ul v-if="dateSort">
            <li v-for="item, id in budgetsListByDate" :key="id">
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
    props: ['budgetsList'],
    emits: ['reset'],
    data() {
        return {
            noSort: true,
            azSort: false,
            dateSort: false,
            budgetsListAZ: [],
            budgetsListByDate: [],
        }
    },
    methods: {
        displayAZ() {
            this.noSort = false
            this.dateSort = false
            this.azSort = true
            this.budgetsListAZ = [...this.budgetsList]
            .sort(function(a, z) {
                if (a.name < z.name ) return -1;
                if (a.name > z.name ) return 1;
                return 0;
            })
            
            console.log(this.budgetsList);
            console.log(this.budgetsListAZ);
        },
        displayByDate() {
            this.noSort = false
            this.azSort = false
            this.dateSort = true
            this.budgetsListByDate = [...this.budgetsList]
            .sort(function(a, z) {
                if (a.date < z.date ) return -1;
                if (a.date > z.date ) return 1;
                return 0;
            })
            
            console.log(this.budgetsList);
            console.log(this.budgetsListByDate);
        },
        resetBudgetsList() {
            this.$emit('reset')
            this.budgetsListAZ = []
            this.budgetsListByDate = []
            this.noSort = true
            this.azSort = false
            this.dateSort = false
            console.log(this.budgetsList);
            console.log(this.budgetsListAZ);
            console.log(this.budgetsListByDate);
        },
    }
}

</script>

<style>
.budgets-list{
    display: flex;
    flex-flow: column wrap;
    text-align: left;
}

.separator {
    width: 100%;
    border-bottom: 1px solid #ddd;
    margin-bottom: 2em;

}
</style>


 