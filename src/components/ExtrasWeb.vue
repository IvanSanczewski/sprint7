<template>
    <form>
        <div class="extras-services">
            <label for="pages">How many pages do you need?</label>
            <label for="languages">In how many different languages?</label>
        </div>
    </form>
</template>

<script>

export default {
    name: 'ExtrasWeb',
}
    
</script>

<style>
.extras-services {
    display: flex;
    flex-flow: column wrap;
    justify-content: space-around;
    
    row-gap: 2.5em;

    
}

input {
    width: 3em;
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
    
    color: #fefefe;
    background: #155396;
    cursor: pointer;

    border: none;
    border-radius: .5em;
}

</style>