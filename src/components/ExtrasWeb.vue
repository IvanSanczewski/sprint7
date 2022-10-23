<template>
    <form class="extras">
        <div>
            <label for="pages">How many pages do you need?</label>
            <!-- min="1" for the input does not avoid user's ability to manually insert negative numbers, this is handled in the method that calculates extras -->
            <input type="number" v-model="pages" @click="sumExtrasPrice">
        </div>
        <div>
            <label for="pages">In how many different languages?</label>
            <!-- min="1" for the input does not avoid user's ability to manually insert negative numbers, this is handled in the method that calculates extras -->
            <input type="number" v-model="languages" @click="sumExtrasPrice">
            <p> precio extra: {{ extrasPrice }} eur </p>
        </div>
    </form>
</template>

<script>
export default {
    // props: ['pages', 'languages'],
    props: ['pages', 'languages', 'extraWeb'],
    data() {
        return {
            extrasPrice: 0
        }
    },
    methods:{
        //PASAR EL MÉTODO A HOME Y LLAMARLO USANDO EMITS, USAR WATCH PARA VER CUÁNDO EL USUARIO CAMBIA VALORES
        sumExtrasPrice(){
            if (this.pages <= 1 && this.languages <= 1) {
                this.extrasPrice = 0
            } else {
                this.extrasPrice = this.pages * this.languages * this.extraWeb
            }

        }
    },
    // watch: {

    // }

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