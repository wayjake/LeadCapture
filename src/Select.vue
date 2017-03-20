<template>
  <div class="col-sm-12 select">
    <p>{{label}}<span class="text-danger" v-if="required">*</span></p>
    <select class="select form-control">
      <option value="" disabled selected>Select</option>
      <option v-for="option in options" :value="option.name" :key="option.name">
      {{option.name}}
      </option>
    </select>
  </div>
</template>

<script>
  export default {
    props: ['label', 'options', 'required'],
  }

</script>

<style scoped>
  .select {
    margin-bottom: 10px;
  }
  .col-sm-12 {
    padding: 0px;
  }
</style>