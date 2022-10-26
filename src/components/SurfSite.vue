<template>
  <div class="nav-btn">
        <button @click="previousSentence">Backwards</button>
        <button @click="nextSentence">Forward</button>
    </div> 
</template>

<script>
export default {
    name: SurfSite,
    methods: {
        previousPage() {
            this.$emit('previous')
        },
        nextPage() {
            this.$emit('next')
        }
    }
}
</script>

<style>

</style>