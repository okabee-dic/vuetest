import Vue from 'vue';
import vueSample from './components/vueSample';

document.addEventListener("DOMContentLoaded", function(event) {
  new Vue({
    el: '#app',
    data: {
      name: 'aaa'
    },
    //↓下を追加。上のカンマも忘れずに。
    components: {
      'vue-sample': vueSample
    }
  });
});