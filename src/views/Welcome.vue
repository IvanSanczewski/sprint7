<template>
        <!-- <div v-show="showWelcome" class="welcome"> -->
        <div class="welcome">
        <h1>WEB CREATORS</h1>
        <h3>Welcome to Web Creators</h3>
        <p>Press Start to create a budget</p>
        
        <router-link :to="{name: 'HomeAlt'}">
            <button>START</button>
        </router-link>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>