<template>
    <form>
        <div class="extras">
            <!-- <div> -->
                <!-- <div> -->
                    <label for="pages">How many pages do you need?</label>
                    <!-- </div> -->
                    <!-- min="1" for the input does not avoid user's ability to manually insert negative numbers, this is handled in the method that calculates extras -->
                    <!-- <div class="btn-block"> -->
                        <!-- <input type="text" v-model="pages" @click="addExtras"> -->
                        <!-- </div> -->
                        <!-- </div> -->
                        <!-- <div> -->
                            <!-- <div> -->
                    <label for="languages">In how many different languages?</label>
                    
                    <!-- cómo colocarlo en un lugar específico -->
                    <!-- <ExtrasCounter :pages="pages" @addOnePage="addOnePageMore"/> -->
                    <!-- <ExtrasCounter :pages="pages" :languages="languages" @addOnePage="addOnePageMore"/> -->
                    <!-- cómo colocarlo en un lugar específico -->
                                
                <!-- </div> -->
                <!-- min="1" for the input does not avoid user's ability to manually insert negative numbers, this is handled in the method that calculates extras -->
                <!-- <div class="btn-block"> -->
                    <!-- <input type="text" v-model="languages" @change="addExtras"> -->
                <!-- </div> -->
            <!-- </div> -->
        </div>
    </form>
</template>

<script>
// import ExtrasCounter from '@/components/ExtrasCounter.vue'

export default {
    name: 'ExtrasWeb',
    // components: { ExtrasCounter },
    // extraWeb is not passed as a prop because it is not used in this component
    // props: ['pages', 'languages'],
    // props: ['pages', 'languages', 'extraWeb'],
    // emits: ['sumUpExtras'],
    // watch: {
    //     pages() {
    //         this.addExtras()
    //     },
    //     languages() {
    //         this.addExtras()
    //     },
    // },
    // data() {
    //     return {
    //         updatedPages: 0,
    //     }
    // },
    // methods: {
        // PASAR EL MÉTODO A HOME Y LLAMARLO USANDO EMITS, USAR WATCH PARA VER CUÁNDO EL USUARIO CAMBIA VALORES
        // addExtras() {
        //     this.$emit('sumUpExtras', this.pages, this.languages)
        //     this.$emit('sumUpExtras', this.languages)
        // },
        // addOnePageMore(){
        //     this.updatedpages++
        //     console.log(this.updatedPages)
        // }
    // }
}
    
</script>

<style>
.extras {
    margin: 1em 0;
    padding: 1em;

    max-width: fit-content;
    
    border: 3px solid black;
    border-radius: 1em;
    
    display: flex;
    flex-flow: column wrap;
    /* flex-flow: row wrap; */
    justify-content: space-between;
    
    margin: .5em 0;
}

input {
    max-width: 3em;
    margin: 0 .5em;
    text-align: center;

    border: none;
}

.product-btn {
    width: 2em;
    height: 2em;
    padding: .5em;

    font-size: .65em;
    font-weight: 400;
    
    color: white;
    background: coral;

    border: none;
    border-radius: .5em;
}

</style>