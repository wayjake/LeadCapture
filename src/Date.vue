<template>
  <div class="col-sm-12">
    <p>
      {{label}}
      <span class="text-danger" v-if="required">*</span>
      <app-datepicker class="date-field"></app-datepicker>
    </p>
  </div>
</template>

<script>
  export default {
    name: 'app',
  data () {
    return {
      showDate: false,
      showToggle: false,
      test: {
        attachment: 'top left',
        targetAttachment: 'bottom left'
      },
    }
  },
    props: ['label', 'date', 'required']
  }

</script>

<style scoped>
  .date-box {
    display: block;
    background-color: #F7F7F8; 
  }
  .date-picker {
    margin-left: 5px;
    padding: 0px;
  }
  .col-sm-12 {
    padding: 0px;
  }
  .date-field {
    width: 50%;
    display: inline-block;
    margin-left: 4px;
  }
</style>