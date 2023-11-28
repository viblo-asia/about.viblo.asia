import Vue from 'vue'
import App from './App.vue'
import store from './store'
import VueI18n from 'vue-i18n'
import messages from './locales/index'
Vue.config.productionTip = false
Vue.use(VueI18n)
const i18n = new VueI18n({
  locale: localStorage.getItem('i18n') || 'vi',
  messages
})

Promise.all([
  store.dispatch('getVibloStats'),
  store.dispatch('getCodeStats'),
  store.dispatch('getCtfStats')
])
  .then(() => {
    const app = new Vue({
      store,
      i18n,
      render: h => h(App)
    })
    app.$mount('#app')
  })
