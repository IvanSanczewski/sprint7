<template>
    <div v-if="modalPages || modalLanguages" @click.self="closeModal" class="backdrop">
        <div v-show="modalPages" class="modal-pages">
            <p>This value shows how many different pages your site will have.</p>
            <p>The total cost per extra page and language is 30 Eur. A minimum of one page in one language is included in the 500 Eur.</p>
        </div>
        
        <div v-show="modalLanguages" class="modal-languages">
            <p>This value shows in how many different languages your site will be available.</p>
            <p>The total cost per extra page and language is 30 Eur. A minimum of one page in one language is included in the 500 Eur.</p>
        </div>
    </div>
</template>

<script>
export default {
    props: ['modalPages', 'modalLanguages'],
    emits: ['close'],
    methods: {
        closeModal() {
            this.$emit('close')
        }
    }
}
</script>

<style>
    .backdrop{
        top: 0;
        left: 0;
        position: fixed;
        background: rgba(0,0,0,0.5);
        width: 100vw;
        height: 100vh;
    }

    .modal-pages { 
        width: 80%;

        padding: 1em;
        margin-top: 14vh;
        margin-left: auto;
        margin-right: auto;

        color:#666;
        background: white;
        
        border: 3px solid #333;
        border-radius: .8em;
    }

    .modal-languages { 
        width: 80%;

        padding: 1em;
        margin-top: 19vh;
        margin-left: auto;
        margin-right: auto;

        color:#666;
        background: white;
        
        border: 3px solid #333;
        border-radius: .8em;
    }
</style>