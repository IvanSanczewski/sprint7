<template>
    <!-- IMPLEMENTAR UN V-FOR PARA MOSTRARLOS??? -->
    
    <h2>Listado de presupuestos:</h2>
    
    <ul>
        <li v-for="item, id in budgetsList" :key="id">
            <p>Client: <strong>{{ item.client }}</strong> - Budget: <strong>{{ item.name }}</strong></p>

            <!-- <h5>Services included: {{ item.service }} 
                    <li v-for="item, id in ITEM.SERVICE" :key="id">
                        {{ item.text }}
                    </li>
                </h5> -->

            <p>Budget Total Price: <strong>{{ item.budgetPrice }}</strong></p>
        </li>
    </ul>
    
    

  
</template>

<script>
export default {
    name: 'Budgets',
    props: ['budgetsList']
}

</script>

<style>

</style>


 