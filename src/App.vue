<template>
  <div id="app" class="container">
    <div v-for="dat in formDat">
      <p v-if="dat.type === 'question'"><app-question :label="dat.label" :placeholder="dat.placeholder" :required="dat.required"></app-question></p>
      <p v-if="dat.type === 'date'"><app-date :label="dat.label" :date="dat.date | formatDate" :required="dat.required"></app-date></p>
      <p v-if="dat.type === 'yesNo'"><app-yesno :label="dat.label" :options="dat.options" :value="yesnoVal" :required="dat.required"></app-yesno></p>
      <p v-if="dat.type === 'text'"><app-text :body="dat.body"></app-text></p>
      <p v-if="dat.type === 'freeResponse'"><app-freeresponse :label="dat.label" :required="dat.required"></app-freeresponse></p>
      <p v-if="dat.type === 'select'"><app-select :label="dat.label" :options="dat.options" :required="dat.required"></app-select></p>
      <p v-if="dat.type === 'checkbox'"><app-checkbox :label="dat.label" :boxes="dat.boxes" :value="checkboxVal" :required="dat.required"></app-checkbox></p>
      <p v-if="dat.type === 'image'"><app-image :url="dat.url"></app-image></p>
      <p v-if="dat.type === 'hr'"><app-spacer :title="dat.title"></app-spacer></p>
      <p v-if="dat.type === 'container'"><app-container :title="dat.title" :columns="dat.columns"></app-container></p>
    </div>
  </div>
</template>

<script>
  import formData from './formData.js';
  var formDat = formData.data;

  export default {
    data: function() {
      return {
        radio1: '',
        checkbox: false,
        formDat,
        checkboxVal: [],
        yesnoVal: ''
      }
    }
  }
</script>

<style>
  #app {
    float: none;
    margin: 0 auto;
    /*width: 61.099999975%;*/
    font-size: 15px;
    font-weight: 300;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  }
  @media (min-width: 1200px) {
    .container {
      width: 1170px;
    }
  }
  @media (min-width: 992px) {
    .container {
      width: 970px;
    }
  }
  @media (min-width: 768px) {
    .container {
      width: 750px;
    }
  }
</style>
