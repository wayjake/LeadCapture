<template>
  <div class="col-sm-12">
    <p v-html="body">{{ body }}</p>
  </div>
</template>

<script>
  export default {
    props: ['body'],

    computed: {
      cleanHtml: function(str) {
        return str.body.replace(/<script>.*<\/script>/gi, "");
      }
    }
  }

</script>

<style scoped>
  .col-sm-12 {
    padding: 0px;
  }
</style>