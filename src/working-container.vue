<template>
  <div class="col-sm-12 container">
    <h2>{{title}}</h2>
    <div v-for="ocol in columns">
      <div :class="{ 'col-sm-6': 'columns.length === 2' }" v-for="icol in ocol">
        <div>
          <p v-if="icol.type === 'question'"><app-question :label="icol.label" :placeholder="icol.placeholder" :required="icol.required"></app-question></p>
          <p v-if="icol.type === 'date'"><app-date :label="icol.label" :date="icol.date | formatDate" :required="icol.required"></app-date></p>
          <p v-if="icol.type === 'yesNo'"><app-yesno :label="icol.label" :options="icol.options" :required="icol.required"></app-yesno></p>
          <p v-if="icol.type === 'text'"><app-text :body="icol.body"></app-text></p>
          <p v-if="icol.type === 'freeResponse'"><app-freeresponse :label="icol.label" :required="icol.required"></app-freeresponse></p>
          <p v-if="icol.type === 'select'"><app-select :label="icol.label" :options="icol.options" :required="icol.required"></app-select></p>
          <p v-if="icol.type === 'checkbox'"><app-checkbox :label="icol.label" :boxes="icol.boxes" :required="icol.required"></app-checkbox></p>
          <p v-if="icol.type === 'image'"><app-image :url="icol.url"></app-image></p>
          <p v-if="icol.type === 'hr'"><app-spacer :title="icol.title"></app-spacer></p>
          <p v-if="icol.type === 'container'"><app-container :title="icol.title" :columns="icol.columns"></app-container></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Question from './Question.vue';
  import Text from './Text.vue';
  import AppDate from './Date.vue';
  import YesNo from './YesNo.vue';
  import FreeResponse from './FreeResponse.vue';
  import Select from './Select.vue';
  import Checkbox from './Checkbox.vue';
  import Image from './Image.vue';
  import Spacer from './Spacer.vue';
  import Container from './Container.vue';

  export default {
    props: ['title', 'columns', 'required'],
    methods: {
      colSize() {

      }
    }
  }

</script>

<style scoped>
  h1, h2 {
    font-weight: 300;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;;
  }
  .container {
    /*margin-bottom: 25px;*/
    padding: 0px;
  }
  .column {
    display: block;
    float: left;
  }
  .col-sm-6 {
    padding: 0px;
  }
  .container h2 {
    padding: 0 15px 0 15px;
  }
</style>