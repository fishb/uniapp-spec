import Vue from 'vue'
import App from './App'
import HybridPopup from '@/components/HybridPopup.vue'

Vue.config.productionTip = false
Vue.component('hybrid-popup',HybridPopup)
App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
