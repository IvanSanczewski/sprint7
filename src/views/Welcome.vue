<template>
    <div class="container">
        <div class="welcome">
            <h3>Welcome to</h3>
            <h1>WEB CREATORS</h1>
            <p>Press Start to create your own budget</p>
            <router-link :to="{name: 'HomeAlt'}">
                <button>START</button>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
}
</script>

<style>
.container{
    display: flex;
    justify-content: center;
}
.welcome {
    /* max-width: fit-content; */
    margin-top: 3em;
    padding: 0em 8em 2em 8em;

    font-size: x-large;

    background-color: rgb(30, 237, 237);

    border: 4px solid rgb(24, 128, 91);
    border-radius: 1.2em;
}

button {
    margin: 1.8em 0 0 0;
    padding: 1em 3em;
}
</style>