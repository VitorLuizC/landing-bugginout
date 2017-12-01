import Vue from 'vue'
import App from './App'
import SmoothScroll from 'vue-smooth-scroll'

Vue.use(SmoothScroll)

new Vue({
  el: '#app',
  render: (λ) => λ(App)
})
