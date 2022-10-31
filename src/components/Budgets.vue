<template>
    <!-- IMPLEMENTAR UN V-FOR PARA MOSTRARLOS??? -->
    
    <div class="budget-list">
        <h2>Budgets List:</h2>
        
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
    props: ['budgetsList']
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


 