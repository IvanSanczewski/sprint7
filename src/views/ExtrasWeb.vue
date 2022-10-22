<template>
    <form class="extras">
        <p>
            How many pages do you need?
            <input type="number" v-model="pages">
        </p>
        <p>
            In how many different languages?
            <input type="number" v-model="languages">
        </p>
    </form>
</template>

<script>
export default {
    data() {
        return {
            pages: 1,
            languages: 1
        }
    }
}
</script>

<style>

</style>