<template>
  <div class="extras">
    <p>
        How many pages do you need? 
        <input type="text" placeholder="1">
    </p>
    <p>
        In ow many languages?
        <input type="text" placeholder="1">
    </p>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.extras {
    width:fit-content;
    margin: 1em 0;
    padding: 1em;

    border: 3px solid black;
    border-radius: 1em
}

p {
    display: flex;
    flex-flow: row wrap;

    justify-content: space-between;
    column-gap: 1em;
}

</style>