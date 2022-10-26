<template>
    <div class="amount-btn">
        <div>
            <!-- 1 FUNCIÓN PARA CADA BOTÓN -->
            <!-- <font-awesome-icon icon="fa-solid fa-plus" @click="addPage" class="product-btn"/> -->
            <!-- 1 FUNCIÓN PARA CADA BOTÓN -->
            <!-- 1 FUNCIÓN PARA CADA ELEMENTO -->
            <!-- <font-awesome-icon icon="fa-solid fa-plus" @click="modifyPages('add')" class="product-btn"/> -->
            <!-- 1 FUNCIÓN PARA CADA ELEMENTO -->

<!-- cómo colocarlo en un lugar específico -->
            <!-- 1 ÚNICA FUNCIÓN PARA TODO EL COMPONENTE -->
            <font-awesome-icon icon="fa-solid fa-plus" @click="changeExtrasAmount('pages', 'add')" class="product-btn"/>
            <!-- 1 ÚNICA FUNCIÓN PARA TODO EL COMPONENTE -->
            <input type="text" v-model="pages" @change="countPages(pages)">
            <!-- <input type="text" v-model="pages"> -->
            <font-awesome-icon icon="fa-solid fa-minus" @click="changeExtrasAmount('pages', 'subtract')" class="product-btn"/>
        </div>
        <div>
            <font-awesome-icon icon="fa-solid fa-plus" @click="changeExtrasAmount('languages', 'add')" class="product-btn"/>
            <input type="text" v-model="languages" @change="countLanguages(languages)">
            <font-awesome-icon icon="fa-solid fa-minus" @click="changeExtrasAmount('languages', 'subtract')" class="product-btn"/>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ExtrasCounter',
    emits: ['modifyExtras', 'countTotalPages', 'countTotalLanguages'],
    props: ['pages', 'languages'],
    data() {
        return {
            totalPages: 0,
            totalLanguages: 0,
        }
    },
    methods: {
        // implement one single function with different arguments in each given case
        changeExtrasAmount(extra, action){
            this.$emit('modifyExtras', extra, action)
        },
        countPages(pages){
            console.log(pages)
            this.totalPages = pages
            console.log(pages, this.totalPages)
            this.$emit('countTotalPages', this.totalPages)
        },
        countLanguages(languages){
            console.log(languages)
            this.totalLanguages = languages
            console.log(languages, this.totalLanguages)
            this.$emit('countTotalLanguages', this.totalLanguages)
        }
    }
}
</script>

<style>
.product-btn{
    cursor: pointer;
}
</style>