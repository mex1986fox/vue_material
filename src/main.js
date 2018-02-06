import Vue from 'vue'
import App from './App.vue'
require('./scss/index.scss'); 

new Vue({
  el: '#app',
  render: h => h(App)
})