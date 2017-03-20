<template>
  <div class="col-sm-12 question"> 
    <p>{{label}}<span class="text-danger" v-if="required">*</span></p>
    <input type="text" class="form-control" :placeholder="placeholder">
  </div>
</template>

<script>
  export default {
    props: ['label', 'placeholder', 'required']
  }

</script>

<style scoped>
  .question {
    margin-bottom: 10px;
  }
  .col-sm-12 {
    padding: 0px;
  }
</style>