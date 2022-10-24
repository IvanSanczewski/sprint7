<template>
    <form class="extras">
        <div>
            <label for="pages">How many pages do you need?</label>
            <!-- min="1" for the input does not avoid user's ability to manually insert negative numbers, this is handled in the method that calculates extras -->
            <input type="number" v-model="pages" @click="addExtras">
        </div>
        <div>
            <label for="pages">In how many different languages?</label>
            <!-- min="1" for the input does not avoid user's ability to manually insert negative numbers, this is handled in the method that calculates extras -->
            <input type="number" v-model="languages" @change="addExtras">
            <!-- <p> Extra Webs Price: {{ extrasPrice }} Eur </p> -->
        </div>
    </form>
</template>

<script>
export default {
    // props: ['pages', 'languages'],
    props: ['pages', 'languages', 'extraWeb'],
    // emits: ['addPages', 'addLanguages'],
    emits: ['addExtras'],
    // data() {
    //     return {
    //         pages: 5,
    //         languages: 3,
    //         extrasPrice: 0
    //     }
    // },
    methods: {
        //PASAR EL MÉTODO A HOME Y LLAMARLO USANDO EMITS, USAR WATCH PARA VER CUÁNDO EL USUARIO CAMBIA VALORES
        addExtras() {
            // this.$emit('add')
            this.$emit('addExtras', this.pages, this.languages)
            // console.log(this.pages, this.languages)
        } 
    },
    watch: {
        pages() {
            this.addExtras()
        },
        languages() {
            this.addExtras()
        },
    }
}
    
</script>

<style>

.extras {
    width: auto;

    border: 3px solid black;
    border-radius: 1em;

    margin: 1em 0;
    padding: 1em;
}
</style>