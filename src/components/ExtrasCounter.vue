<template>
    <div class="extras-amount">
        <div class="amount">
            <!-- 1 FUNCIÓN PARA CADA BOTÓN -->
            <!-- <font-awesome-icon icon="fa-solid fa-plus" @click="addPage" class="product-btn"/> -->
            <!-- 1 FUNCIÓN PARA CADA ELEMENTO -->
            <!-- <font-awesome-icon icon="fa-solid fa-plus" @click="modifyPages('add')" class="product-btn"/> -->

            <!-- 1 ÚNICA FUNCIÓN PARA TODO EL COMPONENTE -->
            <font-awesome-icon icon="fa-solid fa-plus" @click="changeExtrasAmount('pages', 'add')" class="product-btn"/>
            <input class="amount-inpt" type="text" v-model="pages" @change="countPages(pages)">
            <font-awesome-icon icon="fa-solid fa-minus" @click="changeExtrasAmount('pages', 'subtract')" class="product-btn"/>
            <font-awesome-icon icon="fa-solid fa-circle-info" @click="launchModal('pages')" class="info-btn"/>

            <Modal
            :modalPages="modalPages"
            @close="launchModal('pages')" />
            
        </div>
        <div class="amount">
            <font-awesome-icon icon="fa-solid fa-plus" @click="changeExtrasAmount('languages', 'add')" class="product-btn"/>
            <input class="amount-inpt" type="text" v-model="languages" @change="countLanguages(languages)">
            <font-awesome-icon icon="fa-solid fa-minus" @click="changeExtrasAmount('languages', 'subtract')" class="product-btn"/>
            <font-awesome-icon icon="fa-solid fa-circle-info" @click="launchModal('languages')" class="info-btn"/>
            
            <Modal
            :modalLanguages="modalLanguages"
            @close="launchModal('languages')" />
            
        </div>
    </div>
</template>

<script>
import Modal from '@/components/Modal.vue'

export default {
    name: 'ExtrasCounter',
    components: { Modal },
    props: ['pages', 'languages'],
    emits: ['modifyExtras', 'countTotalPages', 'countTotalLanguages'],
    data() {
        return {
            totalPages: 1,
            totalLanguages: 1,
            modalPages: false,
            modalLanguages: false   
        }
    },
    watch: {
        pages(){
            // make this.pages absolute number since watch is active on change of text type and may accept negative value
            this.totalPages = Math.abs(this.pages)
            this.$emit('countTotalPages', this.totalPages)
        },
        languages(){
            // make this.pages absolute number since watch is active on change of text type and may accept negative value
            this.totalLanguages = Math.abs(this.languages)
            this.$emit('countTotalLanguages', this.totalLanguages)
        },
    },
    methods: {
        // implement one single function with different arguments in each given case
        changeExtrasAmount(extra, action){
            this.$emit('modifyExtras', extra, action)
        },
        countPages(pages){
            this.totalPages = pages
            console.log(pages, this.totalPages)
            this.$emit('countTotalPages', this.totalPages)
        },
        countLanguages(languages){
            this.totalLanguages = languages
            console.log(languages, this.totalLanguages)
            this.$emit('countTotalLanguages', this.totalLanguages)
        },
        launchModal(info) {
            if (info === 'pages') {
                this.modalPages = !this.modalPages
            } else {
                this.modalLanguages = !this.modalLanguages
            }
        }
    }
}
</script>

<style>
.extras-amount {
    display: flex;
    flex-flow: column wrap;
    row-gap: 1.5em;
}

.amount {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items:center ;
    column-gap: .5em;
}

.amount-inpt {
    min-width: 50px
}

/* .product-btn {
    background-color: #155396;
    cursor: pointer;
} */

.info-btn {
    color: #155396;
    background: #fefefe;

    border-radius: .5em;
    font-size: 1.2em;

    cursor: pointer
}

</style>