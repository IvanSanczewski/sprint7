<template>
    <form>
        <div class="extras">
            <div>
                <div>
                    <label for="pages">How many pages do you need?</label>
                </div>
                <!-- min="1" for the input does not avoid user's ability to manually insert negative numbers, this is handled in the method that calculates extras -->
                <div class="btn-block">
                    <font-awesome-icon icon="fa-solid fa-plus" class="product-btn"/>
                    <input type="text" v-model="pages" @click="addExtras">
                    <font-awesome-icon icon="fa-solid fa-minus" class="product-btn"/>
                </div>
            </div>
            <div>
                <div>
                    <label for="pages">In how many different languages?</label>
                </div>
                <!-- min="1" for the input does not avoid user's ability to manually insert negative numbers, this is handled in the method that calculates extras -->
                <!-- <font-awesome-icon icon="fa-solid fa-plus"> -->
                <div class="btn-block">
                    <font-awesome-icon icon="fa-solid fa-plus" class="product-btn"/>
                    <input type="text" v-model="languages" @change="addExtras" size="5">
                    <font-awesome-icon icon="fa-solid fa-minus" class="product-btn"/>
                </div>
            </div>

        </div>
    </form>
</template>

<script>

export default {
    name: 'ExtrasWeb',
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
    
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    
    margin: .5em 0;
}

input {
    width: 1em;
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