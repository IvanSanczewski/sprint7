<template>
    <!-- IMPLEMENTAR UN V-FOR PARA MOSTRARLOS??? -->    
    <div class="budget-list">
        <h2>Budgets List:</h2>
        
        <div class="budgets-nav">
            <button @click="displayAZ"> Alphabetical Order </button>
            <button @click="displayByDate"> Creation Order </button>
            <button @click="displayBudgetList"> Reset Order </button>
        </div>
        
        <!-- <ul>
            <li v-for="item, id in buttons" :key="id">
                <button @click="item.function" >{{ item.text }}</button>
            </li>
        </ul> -->

        <ul>
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

    </div>
</template>

<script>
export default {
    name: 'Budgets',
    props: ['budgetsList'],
    // ASYNCRONOUS ERROR CALL 
    data() {
        return {
            budgetsListAZ: [],
            budgetsListByDate: [],
        }
    },
    methods: {
        displayAZ() {
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
            this.budgetsListByDate = [...this.budgetsList]
            .sort(function(a, z) {
                if (a.date < z.date ) return -1;
                if (a.date > z.date ) return 1;
                return 0;
            })
            
            console.log(this.budgetsList);
            console.log(this.budgetsListByDate);
        },
        displayBudgetList() {
            alert('Reset Order')
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


 