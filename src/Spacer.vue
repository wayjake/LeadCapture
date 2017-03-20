<template>
  <div class="col-sm-12">
    <h2>{{title}}</h2>
    <hr>
  </div>
</template>

<script>
  export default {
    props: ['title']
  }

</script>

<style scoped>
  h1, h2 {
    font-weight: 300;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;;
  }
  .col-sm-12 {
    padding: 0px;
  }
</style>