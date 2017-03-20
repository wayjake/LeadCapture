<template>
  <div class="col-sm-12 free-resp">
    <p>{{label}}<span class="text-danger" v-if="required">*</span></p>
    <textarea class="free-resp form-control autosize area-animated msd-elastic" type="text"></textarea>
  </div>
</template>

<script>
  export default {
    props: ['label', 'required']
  }

</script>

<style scoped>
  .free-resp {
    margin-bottom: 10px;
  }
  .col-sm-12 {
    padding: 0px;
  }
</style>