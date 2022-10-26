<template>
    <div class="amount-btn">
        <div>
            <!-- 1 FUNCIÓN PARA CADA BOTÓN -->
            <!-- <font-awesome-icon icon="fa-solid fa-plus" @click="addPage" class="product-btn"/> -->
            <!-- 1 FUNCIÓN PARA CADA BOTÓN -->



            <!-- 1 FUNCIÓN PARA CADA ELEMENTO -->
            <!-- <font-awesome-icon icon="fa-solid fa-plus" @click="modifyPages('add')" class="product-btn"/> -->
            <!-- 1 FUNCIÓN PARA CADA ELEMENTO -->
            


            <!-- 1 ÚNICA FUNCIÓN PARA TODO EL COMPONENTE -->
            <font-awesome-icon icon="fa-solid fa-plus" @click="changeExtrasAmount('pages', 'add')" class="product-btn"/>
            <!-- 1 ÚNICA FUNCIÓN PARA TODO EL COMPONENTE -->

            <input type="text" v-model="pages">

            <font-awesome-icon icon="fa-solid fa-minus" @click="changeExtrasAmount('pages', 'subtract')" class="product-btn"/>

            <!-- <font-awesome-icon icon="fa-solid fa-minus" @click="modifyPages('subtract')" class="product-btn"/> -->
            <!-- <font-awesome-icon icon="fa-solid fa-minus" @click="subtractPage" class="product-btn"/> -->
            <!-- <font-awesome-icon icon="fa-solid fa-minus" @click="deletePage" class="product-btn"/> -->
        </div>
        <div>
            <!-- 1 ÚNICA FUNCIÓN PARA TODO EL COMPONENTE -->
            <font-awesome-icon icon="fa-solid fa-plus" @click="changeExtrasAmount('languages', 'add')" class="product-btn"/>
            <!-- 1 ÚNICA FUNCIÓN PARA TODO EL COMPONENTE -->

            <input type="text" v-model="languages">

            <font-awesome-icon icon="fa-solid fa-minus" @click="changeExtrasAmount('languages', 'subtract')" class="product-btn"/>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ExtrasCounter',
    // props: ['pages'],
    // emits: ['addOnePage'],
    // emits: ['updatePages'],
    emits: ['modifyExtras'],
    // emits: ['addPage', 'subtractPage'],
    props: ['pages', 'languages'],
    // emits: ['addOnePage', 'deleteOnePage', 'addOneLanguage', 'deleteOneLanguage'],
    // data() {
    //     return {
    //         operations: [
    //             {action: 'add', id:1},
    //             {action: 'subtract', id:2}
    //         ]
    //     }
    // },
    methods: {
        // implement one single function with different arguments in each given case
        // addPage() {
        //     this.$emit('addPage')
        // },
        // subtractPage() {
        //     this.$emit('subtractPage')
        // },
        // modifyPages(action){
        //     console.log(action)
        //     this.$emit('updatePages', action)
        //     console.log(action)
        // },
        changeExtrasAmount(extra, action){
            console.log(extra, action)
            this.$emit('modifyExtras', extra, action)
        }
    }


}
</script>

<style>
.product-btn {
    cursor: pointer;
}
</style>