import Vue from 'vue'
import App from './App.vue'
import vueResource from 'vue-resource'
import store from "@/vuex";
import Vuex from 'vuex'


Vue.config.productionTip = false

Vue.use(vueResource)


new Vue({
  render: h => h(App),
  store,
  beforeCreate() {
    Vue.prototype.$bus = this
  }
}).$mount('#app')
