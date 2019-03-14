import Vue from 'vue'
import App from './App.vue'
import VueCurrencyFilter from 'vue-currency-filter'
import VeeValidate from 'vee-validate'

Vue.config.productionTip = false

Vue.use(VueCurrencyFilter,
  {
    symbol : '$',
    thousandsSeparator: ',',
    fractionCount: 2,
    fractionSeparator: '.',
    symbolPosition: 'front',
    symbolSpacing: true
  })

  Vue.use(VeeValidate)

  
new Vue({
  render: h => h(App),
}).$mount('#app')
