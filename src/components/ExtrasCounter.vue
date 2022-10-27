<template>
    <div class="extras-amount">
        <div class="amount">
            <!-- 1 FUNCIÓN PARA CADA BOTÓN -->
            <!-- <font-awesome-icon icon="fa-solid fa-plus" @click="addPage" class="product-btn"/> -->
            <!-- 1 FUNCIÓN PARA CADA ELEMENTO -->
            <!-- <font-awesome-icon icon="fa-solid fa-plus" @click="modifyPages('add')" class="product-btn"/> -->

            <!-- 1 ÚNICA FUNCIÓN PARA TODO EL COMPONENTE -->
            <font-awesome-icon icon="fa-solid fa-plus" @click="changeExtrasAmount('pages', 'add')" class="product-btn"/>
            <input type="text" v-model="pages" @change="countPages(pages)">
            <font-awesome-icon icon="fa-solid fa-minus" @click="changeExtrasAmount('pages', 'subtract')" class="product-btn"/>
        </div>
        <div class="amount">
            <font-awesome-icon icon="fa-solid fa-plus" @click="changeExtrasAmount('languages', 'add')" class="product-btn"/>
            <input type="text" v-model="languages" @change="countLanguages(languages)">
            <font-awesome-icon icon="fa-solid fa-minus" @click="changeExtrasAmount('languages', 'subtract')" class="product-btn"/>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ExtrasCounter',
    props: ['pages', 'languages'],
    emits: ['modifyExtras', 'countTotalPages', 'countTotalLanguages'],
    data() {
        return {
            totalPages: 0,
            totalLanguages: 0,
        }
    },
    watch:{
        pages(){
            this.totalPages = this.pages
            this.$emit('countTotalPages', this.totalPages)
        },
        languages(){
            this.totalLanguages = this.languages
            this.$emit('countTotalLanguages', this.totalLanguages)
        },
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
.extras-amount{
    display: flex;
    flex-flow: column wrap;
    row-gap: 1.5em;
}

.amount{
    display: flex;
    flex-flow: row nowrap
}

.product-btn{
    cursor: pointer;
}
</style>