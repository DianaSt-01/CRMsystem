/* eslint-disable space-in-parens */
import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import router from './router'
import store from './store'
import dateFilter from '@/filters/date.filter'
import currencyFilter from '@/filters/currency.filter'
import messagePlugin from '@/utils/message.plugin'
import Loader from '@/components/app/Loader'
import './registerServiceWorker'
import 'materialize-css/dist/js/materialize.min'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
Vue.config.productionTip = false

Vue.use(messagePlugin)
Vue.use(Vuelidate)
Vue.filter('date', dateFilter)
Vue.filter('currency', currencyFilter)
Vue.component('Loader', Loader)

firebase.initializeApp({
  apiKey: 'AIzaSyCuz1ETkOyaRkw0TEG87TEhpqUju7kkmJA',
  authDomain: 'vue-crmsystem-6df34.firebaseapp.com',
  databaseURL: 'https://vue-crmsystem-6df34.firebaseio.com',
  projectId: 'vue-crmsystem-6df34',
  storageBucket: 'vue-crmsystem-6df34.appspot.com',
  messagingSenderId: '1070859768898',
  appId: '1:1070859768898:web:96f08f4541311dc32849db',
  measurementId: 'G-VBEJBY3N34'
})
let app

firebase.auth().onAuthStateChanged( () => {
  if (!app) {
    new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})
