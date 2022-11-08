<template>
    <!-- <div class="container-welcome"> -->
        <div class="welcome">
            <h3>Welcome to</h3>
            <h1>WEB CREATORS</h1>
            <p>Press Start to create your own budget</p>
            <router-link :to="{name: 'HomeAlt'}">
                <button>START</button>
            </router-link>
        </div>
    <!-- </div> -->
</template>

<script>
export default {
}
</script>

<style>

.container-welcome{
    display: flex;
    justify-content: center;
}

.welcome {
    /* max-width: fit-content; */
    /* max-width: 95vw; */
    margin-top: 3em;
    /* padding: 0em 8em 2em 8em; */

    font-size: x-large;

    /* background-color: rgb(30, 237, 237); */

    /* border: 4px solid rgb(24, 128, 91); */
    /* border-radius: 1.2em; */
}

button {
    margin: 1.8em 0 0 0;
    padding: 1em 3em;

    font-size: large;
    font-weight: 700;

    color: white;
    background-color: rgb(24, 128, 91) ;
    
    
    border: 3px solid #add;
    border-radius: .5em;

    cursor: pointer;
}   

button:hover{
    box-sizing: border-box;
    border: 3px solid white
}

/* @media screen and (max-width: 992px){
    .welcome {
        padding: 0em 5em 2em 5em;
    }
}

@media screen and (max-width: 768px){
    .welcome {
        padding: 0em 3em 2em 3em;
    }
}

@media screen and (max-width: 580px){
    .welcome {
        padding: 0em 1em 2em 1em;
    }
} */

</style>