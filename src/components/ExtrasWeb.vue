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

    props: ['pages', 'languages', 'extraWeb'],
    emits: ['sumUpExtras'],
    watch: {
        pages() {
            this.addExtras()
        },
        languages() {
            this.addExtras()
        },
    },
    methods: {
        //PASAR EL MÉTODO A HOME Y LLAMARLO USANDO EMITS, USAR WATCH PARA VER CUÁNDO EL USUARIO CAMBIA VALORES
        addExtras() {
            this.$emit('sumUpExtras', this.pages, this.languages)
        } 
    }
}
    
</script>

<style>
.extras {
    margin: 1em 0;
    padding: 1em;

    max-width: fit-content;
    
    border: 3px solid black;
    border-radius: 1em;
    
}
.extras div{
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    column-gap: 1.5em;

    margin: .5em 0;
}
</style>