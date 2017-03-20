import Vue from 'vue';
import Vuikit from 'vuikit';
import moment from "moment";
import Datepicker from 'vuejs-datepicker';
import App from './App.vue';
import Question from './Question.vue';
import AppDate from './Date.vue';
import YesNo from './YesNo.vue';
import Select from './Select.vue';
import Checkbox from './Checkbox.vue';
import FreeResponse from './FreeResponse.vue';
import Image from './Image.vue';
import Text from './Text.vue';
import Spacer from './Spacer.vue';
import Container from './Container.vue';


Vue.use(Vuikit);
Vue.component('app-datepicker', Datepicker);
Vue.component('app-question', Question);
Vue.component('app-date', AppDate);
Vue.component('app-text', Text);
Vue.component('app-yesno', YesNo);
Vue.component('app-freeresponse', FreeResponse);
Vue.component('app-select', Select);
Vue.component('app-checkbox', Checkbox);
Vue.component('app-image', Image);
Vue.component('app-spacer', Spacer);
Vue.component('app-container', Container);


Vue.filter('formatDate', function(value) {
  if (value) {
    return moment(String(value)).format('MMM D, YYYY')
  }
});

new Vue({
  el: '#app',
  render: h => h(App),
});
