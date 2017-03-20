<template>
  <div class="test col-sm-12">
    <p>
      {{label}}
      <span class="text-danger" v-if="required">*</span>
      <vk-button-checkbox :value="value" @change="value = arguments[0]">
        <vk-button v-for="(box, index) in boxes" :value="index">{{box.label}}</vk-button>
      </vk-button-checkbox>
<!--       <span v-for="box in boxes">

        <md-checkbox :class="{ 'md-checkbox md-primary md-theme-default md-checked' : 'box.checked === false' }" id="my-test1" name="my-test1" v-model="checkbox" :value="box.label" :key="box.label" :checked="box.checked">Hello</md-checkbox>
        <md-checkbox name="my-test1" v-model="checkbox" :value="box.label" :key="box.label">{{checkbox}}</md-checkbox>
      </span> -->
    </p>
  </div>
</template>

<script>
  export default {
    props: ['label', 'boxes', 'required', 'value'],
    methods: {
      viewArr: function() {
        console.log(value);
      }
    }
  }

</script>

<style scoped>
  .col-sm-12 {
    padding: 0px;
  }
</style>