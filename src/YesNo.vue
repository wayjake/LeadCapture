<template>
  <div class="col-sm-12">
    <p>
      {{label}}
      <span class="text-danger" v-if="required">*</span>
      <vk-button-radio :value="value" @change="value = arguments[0]">
        <vk-button v-for="(opt, index) in options" :value="index">{{opt.label}}</vk-button>
      </vk-button-radio>
<!--   <md-radio v-model="radio1" radio1="radio1" id="my-test1" name="my-test-group1" md-value="1">{{options[0].label}}</md-radio>
  <md-radio v-model="radio1" id="my-test2" name="my-test-group1" md-value="2">{{options[1].label}}</md-radio> -->
    </p>
  </div>
</template>

<script>

  export default {
    props: ['label', 'options', 'required', 'radio1', 'value'],
  }

</script>

<style scoped>
  .col-sm-12 {
    padding: 0px;
  }
</style>