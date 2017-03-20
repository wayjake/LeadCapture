<template>
  <div class="col-sm-12">
    <img class="form-image" :src="url" :alt="url">
  </div>
</template>

<script>
  export default {
    props: ['url']
  }

</script>

<style scoped>
  .col-sm-12 {
    padding: 0px;
  }
</style>