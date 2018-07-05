import Vue from 'vue'
import App from './App.vue'
// import numKeyboard from '../dist/vue2-num-keyboard'
import numKeyboard from 'vue2-num-keyboard'

Vue.use(numKeyboard)
new Vue({
  el: '#app',
  render: h => h(App)
})
