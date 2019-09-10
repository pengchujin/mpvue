import Vue from 'vue'
import App from './App'
import Fly from 'flyio/dist/npm/wx'
const fly = new Fly()

Vue.config.productionTip = false
App.mpType = 'app'
Vue.prototype.$http = fly
const app = new Vue(App)
app.$mount()
